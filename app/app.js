// Leonida Trophy Guide — tracker, filters, spoiler shield, roadmap.
// Progress lives in localStorage in the visitor's own browser; nothing leaves the machine.
// The official trophy list comes from data/trophies.json; our guides, kinds, roadmap
// stages and sources come from data/guides.js.

import { GUIDES, ROADMAP, KIND_LABELS, HIDDEN } from './data/guides.js';

const STORE_KEY = 'leonida-trophy-guide-v1';
const SPOILER_KEY = 'leonida-trophy-guide-spoiler';
const params = new URLSearchParams(location.search);

const els = {
  cards: document.getElementById('cards'),
  search: document.getElementById('search'),
  kind: document.getElementById('kind'),
  grade: document.getElementById('grade'),
  status: document.getElementById('status'),
  spoiler: document.getElementById('spoiler'),
  overallCount: document.getElementById('overall-count'),
  overallBar: document.getElementById('overall-bar'),
  gradeProgress: document.getElementById('grade-progress'),
  shownCount: document.getElementById('shown-count'),
  missableAlert: document.getElementById('missable-alert'),
  viewList: document.getElementById('view-list'),
  viewRoadmap: document.getElementById('view-roadmap'),
  tabList: document.getElementById('tab-list'),
  tabRoadmap: document.getElementById('tab-roadmap'),
  roadmapStages: document.getElementById('roadmap-stages'),
  roadmapMissables: document.getElementById('roadmap-missables'),
};

const doc = await (await fetch('data/trophies.json')).json();
const trophies = doc.trophies.map((t) => ({ ...t, ...(GUIDES[t.name] ?? {}) }));

// --- earned state -----------------------------------------------------------
function loadEarned() {
  try {
    const raw = JSON.parse(localStorage.getItem(STORE_KEY) ?? '[]');
    return new Set(Array.isArray(raw) ? raw : []);
  } catch {
    return new Set();
  }
}
let earned = loadEarned();

// A "demo" view (used for our screenshots) pre-ticks a believable mid-run state
// in memory only, when the visitor has no saved progress of their own.
if (params.get('demo') === '1' && earned.size === 0) {
  earned = new Set([
    'Just Like Paradise', 'Paradise Lost', 'Trust', 'Master of None',
    'Positive Mental Attitude', 'Baited My Tackle', 'Stick Fiddler',
    'Whip It Good', 'In The Beginning…', 'Let’s Go Bowling',
  ]);
}

function save() {
  localStorage.setItem(STORE_KEY, JSON.stringify([...earned]));
}

// --- header progress ----------------------------------------------------------
const GRADES = ['platinum', 'gold', 'silver', 'bronze'];
function renderProgress() {
  els.overallCount.textContent = `${earned.size} / ${trophies.length}`;
  els.overallBar.style.width = `${Math.round((earned.size / trophies.length) * 100)}%`;
  els.gradeProgress.replaceChildren();
  for (const g of GRADES) {
    const all = trophies.filter((t) => t.grade === g);
    const got = all.filter((t) => earned.has(t.name)).length;
    const chip = document.createElement('span');
    chip.className = 'grade-chip';
    const label = g[0].toUpperCase() + g.slice(1);
    chip.innerHTML = `<b>${got} / ${all.length}</b> ${label} · ${Math.round((got / all.length) * 100)}%`;
    els.gradeProgress.append(chip);
  }
  const miss = trophies.filter((t) => t.missable && !earned.has(t.name));
  if (miss.length > 0) {
    els.missableAlert.innerHTML =
      `<strong>Missable warning:</strong> ${miss.map((t) => t.name).join(', ')} can be missed. ` +
      `Its first meditation spot is in Chapter 1 — do it before finishing the chapter. See the roadmap, stage 1.`;
    els.missableAlert.classList.add('show');
  } else {
    els.missableAlert.classList.remove('show');
  }
}

// --- trophy cards -------------------------------------------------------------
function matchesFilters(t) {
  const kind = els.kind.value;
  if (kind === 'missable' && !t.missable) return false;
  if (kind !== 'all' && kind !== 'missable' && t.kind !== kind) return false;
  if (els.grade.value !== 'all' && t.grade !== els.grade.value) return false;
  if (els.status.value === 'earned' && !earned.has(t.name)) return false;
  if (els.status.value === 'open' && earned.has(t.name)) return false;
  const q = els.search.value.trim().toLowerCase();
  if (q && !`${t.name} ${t.description} ${t.guide ?? ''}`.toLowerCase().includes(q)) return false;
  return true;
}

function sourceLine(t) {
  const wrap = document.createElement('p');
  wrap.className = 'sources';
  wrap.append('Sources: ');
  (t.sources ?? []).forEach((s, i) => {
    if (i > 0) wrap.append(' · ');
    if (s.url) {
      const a = document.createElement('a');
      a.href = s.url;
      a.target = '_blank';
      a.rel = 'noopener';
      a.textContent = s.name;
      wrap.append(a);
    } else {
      wrap.append(s.name);
    }
  });
  return wrap;
}

function renderCards() {
  const spoilerOn = els.spoiler.checked;
  els.cards.replaceChildren();
  let shown = 0;
  for (const t of trophies) {
    if (!matchesFilters(t)) continue;
    shown += 1;
    const isEarned = earned.has(t.name);
    const hideSpoiler = spoilerOn && t.kind === 'story' && !isEarned;

    const card = document.createElement('article');
    card.className = `card grade-${t.grade}${isEarned ? ' earned' : ''}${hideSpoiler ? ' spoilered' : ''}`;

    const head = document.createElement('div');
    head.className = 'card-head';
    const box = document.createElement('input');
    box.type = 'checkbox';
    box.checked = isEarned;
    box.setAttribute('aria-label', `Mark ${t.name} as earned`);
    box.addEventListener('change', () => {
      if (box.checked) earned.add(t.name);
      else earned.delete(t.name);
      save();
      renderAll();
    });
    const titleWrap = document.createElement('div');
    const title = document.createElement('div');
    title.className = 'card-title';
    title.textContent = hideSpoiler ? 'Hidden story trophy' : t.name;
    const desc = document.createElement('div');
    desc.className = 'card-desc';
    desc.textContent = hideSpoiler ? 'Name and description hidden by the spoiler shield until earned.' : t.description;
    titleWrap.append(title, desc);
    head.append(box, titleWrap);

    const badges = document.createElement('div');
    badges.className = 'badges';
    const gradeBadge = document.createElement('span');
    gradeBadge.className = `badge grade-${t.grade}`;
    gradeBadge.textContent = t.grade;
    badges.append(gradeBadge);
    const kindBadge = document.createElement('span');
    kindBadge.className = 'badge';
    kindBadge.textContent = KIND_LABELS[t.kind] ?? t.kind;
    badges.append(kindBadge);
    const stageBadge = document.createElement('span');
    stageBadge.className = 'badge';
    stageBadge.textContent = `Roadmap stage ${t.stage}`;
    badges.append(stageBadge);
    if (HIDDEN.has(t.name)) {
      const h = document.createElement('span');
      h.className = 'badge hidden-t';
      h.textContent = 'Hidden on PS5';
      badges.append(h);
    }
    if (t.missable) {
      const m = document.createElement('span');
      m.className = 'badge missable';
      m.textContent = 'Missable';
      badges.append(m);
    }

    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'guide-toggle';
    toggle.textContent = 'Guide & sources ▾';
    const body = document.createElement('div');
    body.className = 'guide-body';
    body.hidden = true;
    const guideText = document.createElement('p');
    guideText.textContent = t.guide ?? '';
    body.append(guideText);
    if (t.missableNote) {
      const note = document.createElement('p');
      note.className = 'missable-note';
      note.textContent = t.missableNote;
      body.append(note);
    }
    body.append(sourceLine(t));
    toggle.addEventListener('click', () => {
      body.hidden = !body.hidden;
      toggle.textContent = body.hidden ? 'Guide & sources ▾' : 'Guide & sources ▴';
    });
    if (params.get('open') === t.name) {
      body.hidden = false;
      toggle.textContent = 'Guide & sources ▴';
      card.setAttribute('data-open', '1');
    }

    card.append(head, badges, toggle, body);
    els.cards.append(card);
  }
  els.shownCount.textContent = `Showing ${shown} of ${trophies.length} trophies`;
}

// --- roadmap ------------------------------------------------------------------
function renderRoadmap() {
  els.roadmapStages.replaceChildren();
  for (const stage of ROADMAP) {
    const block = document.createElement('div');
    block.className = 'stage-block';
    const h = document.createElement('h3');
    h.textContent = stage.title;
    const p = document.createElement('p');
    p.textContent = stage.text;
    const chips = document.createElement('div');
    chips.className = 'stage-trophies';
    for (const t of trophies.filter((x) => x.stage === stage.stage)) {
      const chip = document.createElement('span');
      chip.className = `chip${earned.has(t.name) ? ' done' : ''}${t.missable ? ' miss' : ''}`;
      chip.textContent = t.missable ? `${t.name} — MISSABLE` : t.name;
      chips.append(chip);
    }
    block.append(h, p, chips);
    els.roadmapStages.append(block);
  }
  els.roadmapMissables.replaceChildren();
  for (const t of trophies.filter((x) => x.missable)) {
    const block = document.createElement('div');
    block.className = 'stage-block';
    const h = document.createElement('h3');
    h.textContent = `${t.name} (${t.grade})`;
    const p = document.createElement('p');
    p.textContent = t.missableNote ?? t.guide;
    block.append(h, p, sourceLine(t));
    els.roadmapMissables.append(block);
  }
}

// --- views ----------------------------------------------------------------------
function showView(view) {
  const roadmap = view === 'roadmap';
  els.viewList.hidden = roadmap;
  els.viewRoadmap.hidden = !roadmap;
  els.tabList.classList.toggle('active', !roadmap);
  els.tabRoadmap.classList.toggle('active', roadmap);
}
els.tabList.addEventListener('click', () => showView('list'));
els.tabRoadmap.addEventListener('click', () => showView('roadmap'));

// --- controls -------------------------------------------------------------------
for (const el of [els.search, els.kind, els.grade, els.status]) {
  el.addEventListener('input', renderCards);
  el.addEventListener('change', renderCards);
}
els.spoiler.checked = localStorage.getItem(SPOILER_KEY) === '1';
els.spoiler.addEventListener('change', () => {
  localStorage.setItem(SPOILER_KEY, els.spoiler.checked ? '1' : '0');
  renderCards();
});

document.getElementById('export').addEventListener('click', () => {
  const payload = JSON.stringify({ game: 'Grand Theft Auto VI', earned: [...earned] }, null, 2);
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([payload], { type: 'application/json' }));
  a.download = 'leonida-trophy-progress.json';
  a.click();
  URL.revokeObjectURL(a.href);
});
document.getElementById('import').addEventListener('change', async (e) => {
  const file = e.target.files[0];
  if (!file) return;
  try {
    const parsed = JSON.parse(await file.text());
    const names = Array.isArray(parsed) ? parsed : parsed.earned;
    const valid = new Set(trophies.map((t) => t.name));
    earned = new Set((names ?? []).filter((n) => valid.has(n)));
    save();
    renderAll();
  } catch {
    alert('That file could not be read as trophy progress.');
  }
});
document.getElementById('reset').addEventListener('click', () => {
  earned = new Set();
  save();
  renderAll();
});

function renderAll() {
  renderProgress();
  renderCards();
  renderRoadmap();
}

// Screenshot / deep-link parameters: ?view=roadmap, ?grade=silver, ?kind=story,
// ?spoiler=1, ?open=<trophy name>, ?demo=1, ?search=<text>.
if (params.get('view') === 'roadmap') showView('roadmap');
if (params.get('grade')) els.grade.value = params.get('grade');
if (params.get('kind')) els.kind.value = params.get('kind');
if (params.get('status')) els.status.value = params.get('status');
if (params.get('search')) els.search.value = params.get('search');
if (params.get('spoiler') === '1') els.spoiler.checked = true;

renderAll();

// A deep link that opens a guide (?open=<name>) also brings its card into view,
// once the first layout has settled.
const openCard = document.querySelector('[data-open]');
if (openCard) setTimeout(() => openCard.scrollIntoView({ block: 'center' }), 350);
