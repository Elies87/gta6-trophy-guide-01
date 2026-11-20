[![make.fun · gta6-trophy-guide-01](https://make.fun/badge/gta6-trophy-guide-01.svg)](https://make.fun/bounty/gta6-trophy-guide-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-trophy-guide-01)
[![rank](https://make.fun/badge/gta6-trophy-guide-01/Elies87/gta6-trophy-guide-01/rank.svg)](https://make.fun/bounty/gta6-trophy-guide-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-trophy-guide-01)
[![reward](https://make.fun/badge/gta6-trophy-guide-01/Elies87/gta6-trophy-guide-01/reward.svg)](https://make.fun/bounty/gta6-trophy-guide-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-trophy-guide-01)

# Leonida Trophy Guide — GTA VI (PS5) trophy guide & tracker

An entry for the make.fun bounty [gta6-trophy-guide-01](https://make.fun/bounty/gta6-trophy-guide-01):
an offline web app that guides and tracks all 55 PlayStation 5 trophies of Grand Theft Auto VI.

Open `app/index.html` in a browser (or run `node serve.ts` and visit http://localhost:8080).
The app is plain static files with no build step and makes no network request: every file it
loads lives under `app/`.

## What it does

- **All 55 trophies** with their official name, description and grade, exactly as PlayStation
  publishes them (the list as carried by Exophase and PSNProfiles), each flagged if PlayStation
  keeps it hidden until earned.
- **A guide for every trophy in our own words** — what to do, where and how, and when it can be
  missed — with its sources named and linked beside it (PowerPyx, Push Square, GTABase,
  Insider Gaming and others). A source is cited, never copied.
- **A roadmap to the platinum** in three stages — story first (about 60–80 hours), the 100%
  checklist and big counters (about 100 hours), then strangers, questlines and clean-up —
  with every missable trophy flagged. There is exactly one potentially missable trophy,
  Positive Mental Attitude, and the roadmap says how to protect it in Chapter 1.
- **A tracker**: tick trophies off as you earn them; progress is saved in the browser
  (localStorage), shown overall and per grade, and can be exported to a file and imported back.
- **Filters** by kind (story, side missions, activities, collectibles & exploration,
  crime & combat, milestones), by grade, by earned status, a missable-only view, and search.
- **A spoiler shield** that hides the names and descriptions of story trophies until you earn them.

## Layout

- `app/index.html`, `app/style.css`, `app/app.js` — the guide's page, look and logic.
- `app/data/trophies.json` — the official 55 trophies (name, description, grade).
- `app/data/guides.js` — our guide per trophy: kind, roadmap stage, missable flag, guide text, sources.
- `main.ts` — the hand-in program: copies `app/` and `screenshots/` to the output directory and
  writes `dossier.json` with the vendored `vendor/makefun-frontend.ts` library (left unchanged).
- `screenshots/` — renders of the running app: the tracker with a guide open, the roadmap,
  the spoiler shield and filters at work, and a missable trophy's guide.
- `serve.ts` — a tiny local static server for trying the guide.

License: MIT (see LICENSE).
