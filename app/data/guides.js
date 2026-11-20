// Guide data for the Leonida Trophy Guide, written for this entry in our own words.
// The official trophy names, descriptions and grades live in data/trophies.json and are
// shown exactly as PlayStation publishes them; everything here is our own layer on top:
// a plain-language guide per trophy, the kind of trophy it is, the roadmap stage where it
// belongs, a missable flag where the reporting agrees one is needed, and the sources each
// guide rests on. A source is cited, never copied: follow the link and you will find the
// fact stated there in that site's own words, not ours.
//
// The official list itself is the one Exophase and PSNProfiles published for the PS5
// version (55 trophies: 1 platinum, 2 gold, 6 silver, 46 bronze, 28 of them hidden).

export const GUIDES = {
  "Vice Got a Price!": {
    kind: "misc", stage: 3, missable: false,
    guide: "The platinum pops on its own the moment the other 54 trophies are all earned, so there is nothing separate to hunt down. Every trophy on the list is offline and single-player, there are no difficulty settings to worry about, and one playthrough is enough. Plan the whole run around A Long Road, the 100% completion gold, because it is where most of the roughly 200 hours goes.",
    sources: [
      { name: "PowerPyx — GTA 6 Trophy Guide & Roadmap", url: "https://www.powerpyx.com/gta-6-grand-theft-auto-vi-trophy-guide-roadmap/" },
      { name: "PSNProfiles — GTA VI trophy list (official names and grades)", url: "" }
    ]
  },
  "Just Like Paradise": {
    kind: "story", stage: 1, missable: false,
    guide: "A story trophy for finishing Gone Fishing, the opening mission of the campaign. It unlocks as part of the story and cannot be missed, so just start playing and it will be one of the first bronzes on your card.",
    sources: [
      { name: "Push Square — GTA 6 Trophy Guide and Roadmap", url: "https://www.pushsquare.com/guides/gta-6-trophy-guide-and-roadmap" },
      { name: "PowerPyx — GTA 6 Trophy Guide & Roadmap", url: "https://www.powerpyx.com/gta-6-grand-theft-auto-vi-trophy-guide-roadmap/" }
    ]
  },
  "Paradise Lost": {
    kind: "story", stage: 1, missable: false,
    guide: "Awarded for completing Chapter 1 of the story. Like every chapter trophy it is automatic and unmissable: finish the chapter's missions and the trophy lands when the chapter closes. While you are in Chapter 1, do the balcony meditation at Jason's house (see Positive Mental Attitude) before you move on.",
    sources: [
      { name: "Push Square — GTA 6 Trophy Guide and Roadmap", url: "https://www.pushsquare.com/guides/gta-6-trophy-guide-and-roadmap" },
      { name: "PowerPyx — GTA 6 Trophy Guide & Roadmap", url: "https://www.powerpyx.com/gta-6-grand-theft-auto-vi-trophy-guide-roadmap/" }
    ]
  },
  "T**s Ass Drug Money": {
    kind: "story", stage: 1, missable: false,
    guide: "Awarded for completing Chapter 2 of the story. Automatic and unmissable. Chapter 2 is also roughly where both protagonists become playable, which unlocks the later meditation spots and the character-specific questlines used by several other trophies.",
    sources: [
      { name: "Push Square — GTA 6 Trophy Guide and Roadmap", url: "https://www.pushsquare.com/guides/gta-6-trophy-guide-and-roadmap" },
      { name: "Insider Gaming — Complete GTA 6 Trophy List", url: "https://insider-gaming.com/complete-gta-6-trophy-list-how-to-get-all-trophies-achievements/" }
    ]
  },
  "Vice City, Baby!": {
    kind: "story", stage: 1, missable: false,
    guide: "Awarded for completing Chapter 3 of the story. Automatic and unmissable; keep following the main mission markers and it unlocks when the chapter ends.",
    sources: [
      { name: "Push Square — GTA 6 Trophy Guide and Roadmap", url: "https://www.pushsquare.com/guides/gta-6-trophy-guide-and-roadmap" },
      { name: "Insider Gaming — Complete GTA 6 Trophy List", url: "https://insider-gaming.com/complete-gta-6-trophy-list-how-to-get-all-trophies-achievements/" }
    ]
  },
  "Top Of The World, Ma": {
    kind: "story", stage: 1, missable: false,
    guide: "Awarded for completing Chapter 4 of the story. Automatic and unmissable. Chapter 4 matters for a second reason: an optional mission in this chapter opens up the bank vault jobs that Maximum Withdrawal and the 100% checklist need, so pick up optional missions as they appear.",
    sources: [
      { name: "Push Square — GTA 6 Trophy Guide and Roadmap", url: "https://www.pushsquare.com/guides/gta-6-trophy-guide-and-roadmap" },
      { name: "PowerPyx — GTA 6 Trophy Guide & Roadmap", url: "https://www.powerpyx.com/gta-6-grand-theft-auto-vi-trophy-guide-roadmap/" }
    ]
  },
  "You Gotta Know When to Get Off": {
    kind: "story", stage: 1, missable: false,
    guide: "The gold for completing the final mission of the story. It cannot be missed, and finishing the story is not a point of no return: free-roam continues afterwards, the 100% Completion Checklist unlocks, and everything else on this list can still be cleaned up, so there is no need to grind side content before the finale.",
    sources: [
      { name: "PowerPyx — GTA 6 Trophy Guide & Roadmap", url: "https://www.powerpyx.com/gta-6-grand-theft-auto-vi-trophy-guide-roadmap/" },
      { name: "Push Square — GTA 6 Trophy Guide and Roadmap", url: "https://www.pushsquare.com/guides/gta-6-trophy-guide-and-roadmap" }
    ]
  },
  "Trust": {
    kind: "story", stage: 1, missable: false,
    guide: "A story trophy for completing the mission Breakfast Run. It unlocks as part of the campaign and cannot be missed; if you are following the roadmap you will earn it during stage 1 without doing anything extra.",
    sources: [
      { name: "Push Square — GTA 6 Trophy Guide and Roadmap", url: "https://www.pushsquare.com/guides/gta-6-trophy-guide-and-roadmap" },
      { name: "GTABase — GTA 6 Trophies & Achievements List", url: "https://www.gtabase.com/articles/gta-6/gta-6-achievements-trophies-list-ps5-xbox-series" }
    ]
  },
  "Break the Bank": {
    kind: "story", stage: 1, missable: false,
    guide: "A story trophy for completing The Cartel Heist, one of the campaign's set-piece missions. Automatic and unmissable as you play through the story.",
    sources: [
      { name: "Push Square — GTA 6 Trophy Guide and Roadmap", url: "https://www.pushsquare.com/guides/gta-6-trophy-guide-and-roadmap" },
      { name: "GTABase — GTA 6 Trophies & Achievements List", url: "https://www.gtabase.com/articles/gta-6/gta-6-achievements-trophies-list-ps5-xbox-series" }
    ]
  },
  "Family Matters": {
    kind: "story", stage: 1, missable: false,
    guide: "A story trophy for completing the mission Child's Play. Automatic and unmissable; it arrives as part of the main campaign in stage 1 of the roadmap.",
    sources: [
      { name: "Push Square — GTA 6 Trophy Guide and Roadmap", url: "https://www.pushsquare.com/guides/gta-6-trophy-guide-and-roadmap" },
      { name: "Insider Gaming — Complete GTA 6 Trophy List", url: "https://insider-gaming.com/complete-gta-6-trophy-list-how-to-get-all-trophies-achievements/" }
    ]
  },
  "DWNFALL": {
    kind: "story", stage: 1, missable: false,
    guide: "A story trophy for completing the mission Headliners. Automatic and unmissable as the campaign unfolds.",
    sources: [
      { name: "Push Square — GTA 6 Trophy Guide and Roadmap", url: "https://www.pushsquare.com/guides/gta-6-trophy-guide-and-roadmap" },
      { name: "GTABase — GTA 6 Trophies & Achievements List", url: "https://www.gtabase.com/articles/gta-6/gta-6-achievements-trophies-list-ps5-xbox-series" }
    ]
  },
  "Hi-Jacked": {
    kind: "story", stage: 1, missable: false,
    guide: "A story trophy for completing the mission VCIA Takedown. Automatic and unmissable. The VCIA shows up again in a very different trophy, Catch Me If You Can, which is free-roam mischief rather than story.",
    sources: [
      { name: "Push Square — GTA 6 Trophy Guide and Roadmap", url: "https://www.pushsquare.com/guides/gta-6-trophy-guide-and-roadmap" },
      { name: "Insider Gaming — Complete GTA 6 Trophy List", url: "https://insider-gaming.com/complete-gta-6-trophy-list-how-to-get-all-trophies-achievements/" }
    ]
  },
  "Snow Storm": {
    kind: "story", stage: 1, missable: false,
    guide: "A story trophy for completing the mission Operation Savage Glory. Automatic and unmissable; one of the last of the named-mission bronzes the campaign hands out.",
    sources: [
      { name: "Push Square — GTA 6 Trophy Guide and Roadmap", url: "https://www.pushsquare.com/guides/gta-6-trophy-guide-and-roadmap" },
      { name: "GTABase — GTA 6 Trophies & Achievements List", url: "https://www.gtabase.com/articles/gta-6/gta-6-achievements-trophies-list-ps5-xbox-series" }
    ]
  },
  "A Long Road": {
    kind: "misc", stage: 2, missable: false,
    guide: "The long gold: reach 100% on the completion checklist, which only becomes viewable after the story, under Progress, then Stats, then 100% Completion. The checklist is kinder than it looks, closer to three-fifths of everything: it asks for 200 of the 277 base model vehicles scanned, 100 of the 255 animals studied, 70 of the 80 challenges and 15 of the 18 collectible card sets. What it does demand in full is every robbery, every underwater discovery, all shooting ranges, all drone races and all of Bret's quests, so clear those categories completely and sample the rest.",
    sources: [
      { name: "PowerPyx — GTA 6 Trophy Guide & Roadmap", url: "https://www.powerpyx.com/gta-6-grand-theft-auto-vi-trophy-guide-roadmap/" },
      { name: "Push Square — GTA 6 Trophy Guide and Roadmap", url: "https://www.pushsquare.com/guides/gta-6-trophy-guide-and-roadmap" }
    ]
  },
  "Cunning Stunts": {
    kind: "activities", stage: 2, missable: false,
    guide: "Complete 250 stunts of any kind. The state is full of them, close to 400 stunt events across stunt jumps, flights under bridges, knife flights and base jumps, so this is a volume trophy rather than a skill wall. The 100% checklist wants 300, so do not stop at 250: sweep stunt markers up as you travel between objectives and the count takes care of itself.",
    sources: [
      { name: "PowerPyx — GTA 6 Trophy Guide & Roadmap", url: "https://www.powerpyx.com/gta-6-grand-theft-auto-vi-trophy-guide-roadmap/" },
      { name: "EGamers — GTA 6 Trophy List: All 55 Trophies", url: "https://egamers.io/gta-6-trophy-list-all-55-trophies-and-achievements-plus-the-hardest-ones/" }
    ]
  },
  "Master of None": {
    kind: "activities", stage: 1, missable: false,
    guide: "Try each of the game's nine activity types once: fishing, hunting, golf, shooting ranges, pool and the rest of the leisure and sport spots scattered over Leonida. One attempt at each is enough, win or lose. It is worth doing early, because several activity types have trophies of their own (races, ranges, fishing) and this tour shows you where they live.",
    sources: [
      { name: "PowerPyx — GTA 6 Trophy Guide & Roadmap", url: "https://www.powerpyx.com/gta-6-grand-theft-auto-vi-trophy-guide-roadmap/" },
      { name: "Insider Gaming — Complete GTA 6 Trophy List", url: "https://insider-gaming.com/complete-gta-6-trophy-list-how-to-get-all-trophies-achievements/" }
    ]
  },
  "The Shootist": {
    kind: "activities", stage: 2, missable: false,
    guide: "Earn a gold medal in all 42 Shooting Range challenges. The ranges are one of the categories the 100% checklist requires in full, so these golds are never wasted effort. Learn one weapon class at a time, replay a challenge while its layout is fresh in your head, and move on as soon as the gold lands rather than chasing perfect runs.",
    sources: [
      { name: "PowerPyx — GTA 6 Trophy Guide & Roadmap", url: "https://www.powerpyx.com/gta-6-grand-theft-auto-vi-trophy-guide-roadmap/" },
      { name: "Push Square — GTA 6 Trophy Guide and Roadmap", url: "https://www.pushsquare.com/guides/gta-6-trophy-guide-and-roadmap" }
    ]
  },
  "Top Fun": {
    kind: "activities", stage: 2, missable: false,
    guide: "Win a Top Fun drone race at every one of the 14 locations. A win is what counts, not a medal tier, so retry a course until the line is learned and the win comes. Drone races are another category the 100% checklist wants complete, so a clean sweep here pays twice.",
    sources: [
      { name: "Insider Gaming — Complete GTA 6 Trophy List", url: "https://insider-gaming.com/complete-gta-6-trophy-list-how-to-get-all-trophies-achievements/" },
      { name: "PowerPyx — GTA 6 Trophy Guide & Roadmap", url: "https://www.powerpyx.com/gta-6-grand-theft-auto-vi-trophy-guide-roadmap/" }
    ]
  },
  "Earn Cash, Not Kudos": {
    kind: "activities", stage: 2, missable: false,
    guide: "Win 20 different races. Different is the key word: repeating one easy race twenty times does not move the counter, so work across the race types and map markers, one win each. Races you win while touring for Master of None and the stunt sweep all count toward the twenty.",
    sources: [
      { name: "Insider Gaming — Complete GTA 6 Trophy List", url: "https://insider-gaming.com/complete-gta-6-trophy-list-how-to-get-all-trophies-achievements/" },
      { name: "EGamers — GTA 6 Trophy List: All 55 Trophies", url: "https://egamers.io/gta-6-trophy-list-all-55-trophies-and-achievements-plus-the-hardest-ones/" }
    ]
  },
  "Baited My Tackle": {
    kind: "activities", stage: 2, missable: false,
    guide: "Beat Cal in a fishing challenge. Fishing is one of the nine activity types, so you will likely meet the challenge while sampling activities for Master of None; accept Cal's challenge when it is offered, land your catches cleanly, and the trophy follows the win. If you skipped it, the challenge can be taken on in free-roam afterwards.",
    sources: [
      { name: "Insider Gaming — Complete GTA 6 Trophy List", url: "https://insider-gaming.com/complete-gta-6-trophy-list-how-to-get-all-trophies-achievements/" },
      { name: "GTABase — GTA 6 Trophies & Achievements List", url: "https://www.gtabase.com/articles/gta-6/gta-6-achievements-trophies-list-ps5-xbox-series" }
    ]
  },
  "Stick Fiddler": {
    kind: "activities", stage: 2, missable: false,
    guide: "Complete one arcade game, start to finish, at any arcade cabinet. It only takes a single finished game, so pick whichever cabinet you bump into first while exploring; there is no score target beyond completion.",
    sources: [
      { name: "Insider Gaming — Complete GTA 6 Trophy List", url: "https://insider-gaming.com/complete-gta-6-trophy-list-how-to-get-all-trophies-achievements/" },
      { name: "EGamers — GTA 6 Trophy List: All 55 Trophies", url: "https://egamers.io/gta-6-trophy-list-all-55-trophies-and-achievements-plus-the-hardest-ones/" }
    ]
  },
  "Road to Rehabilitation": {
    kind: "side", stage: 3, missable: false,
    guide: "Complete the final mission of Andy's questline. Andy's strand is played as Lucia, and like the other named questlines it is side content rather than main story: work through each of Andy's missions as they appear on the map until the strand closes. Quest givers tied to trophies return after the story ends, so if you left this strand hanging it can still be finished in clean-up.",
    sources: [
      { name: "GTABase — GTA 6 Trophies & Achievements List", url: "https://www.gtabase.com/articles/gta-6/gta-6-achievements-trophies-list-ps5-xbox-series" },
      { name: "GTA Spotter — GTA VI Trophies and Achievements", url: "https://gtaspotter.com/en/guides/gta-6-trophies-and-achievements/" }
    ]
  },
  "This Was No Boat Accident": {
    kind: "side", stage: 3, missable: false,
    guide: "Complete the final mission of Kenton's questline. Follow Kenton's strand of side missions to its end; the trophy is for the strand's last job, not the first. It stays available after the story, so it belongs in the stage 3 clean-up alongside the other named questlines.",
    sources: [
      { name: "GTABase — GTA 6 Trophies & Achievements List", url: "https://www.gtabase.com/articles/gta-6/gta-6-achievements-trophies-list-ps5-xbox-series" },
      { name: "Insider Gaming — Complete GTA 6 Trophy List", url: "https://insider-gaming.com/complete-gta-6-trophy-list-how-to-get-all-trophies-achievements/" }
    ]
  },
  "The Lone Rider": {
    kind: "side", stage: 3, missable: false,
    guide: "Complete the final mission of Billy's questline. Play Billy's strand through to its closing mission; intermediate missions do not count. Like the other character strands it can be finished in free-roam after the campaign, which is why the roadmap parks it in stage 3.",
    sources: [
      { name: "GTABase — GTA 6 Trophies & Achievements List", url: "https://www.gtabase.com/articles/gta-6/gta-6-achievements-trophies-list-ps5-xbox-series" },
      { name: "Insider Gaming — Complete GTA 6 Trophy List", url: "https://insider-gaming.com/complete-gta-6-trophy-list-how-to-get-all-trophies-achievements/" }
    ]
  },
  "Strangers & Freaks": {
    kind: "side", stage: 3, missable: false,
    guide: "Complete 8 mission strands for strangers across Leonida. Not every side questline counts toward the eight, only proper stranger strands, so if the counter stalls, switch to a strand you have not started rather than grinding one giver. The strands stay open after the story, and finishing them is quick work once the map is fully explored, which is why this silver sits in stage 3.",
    sources: [
      { name: "PowerPyx — GTA 6 Trophy Guide & Roadmap", url: "https://www.powerpyx.com/gta-6-grand-theft-auto-vi-trophy-guide-roadmap/" },
      { name: "GTABase — GTA 6 Trophies & Achievements List", url: "https://www.gtabase.com/articles/gta-6/gta-6-achievements-trophies-list-ps5-xbox-series" }
    ]
  },
  "Supply & Demand": {
    kind: "side", stage: 3, missable: false,
    guide: "Complete the final mission of Randy's questline. Work Randy's side missions in order until the strand ends; only the last one pays out the trophy. It remains available after the story, so it is clean-up work, not a Chapter deadline.",
    sources: [
      { name: "GTABase — GTA 6 Trophies & Achievements List", url: "https://www.gtabase.com/articles/gta-6/gta-6-achievements-trophies-list-ps5-xbox-series" },
      { name: "Insider Gaming — Complete GTA 6 Trophy List", url: "https://insider-gaming.com/complete-gta-6-trophy-list-how-to-get-all-trophies-achievements/" }
    ]
  },
  "Spin On This!": {
    kind: "side", stage: 3, missable: false,
    guide: "Complete the final mission of Tyrone's questline. Tyrone's strand is played as Jason, so switch to him if the missions are not appearing. Finish the strand's closing mission; the earlier jobs are stepping stones. The strand can be completed after the story in stage 3.",
    sources: [
      { name: "GTABase — GTA 6 Trophies & Achievements List", url: "https://www.gtabase.com/articles/gta-6/gta-6-achievements-trophies-list-ps5-xbox-series" },
      { name: "GTA Spotter — GTA VI Trophies and Achievements", url: "https://gtaspotter.com/en/guides/gta-6-trophies-and-achievements/" }
    ]
  },
  "Positive Mental Attitude": {
    kind: "activities", stage: 1, missable: true,
    guide: "Meditate at all 18 meditation spots across Leonida. This is the one trophy the guides agree can be missed: the first spot is the balcony meditation with Lucia at Jason's house during Chapter 1, offered in the morning after the mission Down to Earth, and it cannot be done once Chapter 1 is behind you. Accept the invitation when it comes, before you push the story on. The remaining spots open up later, the last of them only once you can play as both protagonists, after Coffee Break in Chapter 2. Save manually at the start and end of every chapter so a missed moment is never fatal: there is no mission replay.",
    missableNote: "Potentially missable: the Chapter 1 balcony meditation at Jason's house. Do it before finishing Chapter 1.",
    sources: [
      { name: "PowerPyx — GTA 6 Trophy Guide & Roadmap", url: "https://www.powerpyx.com/gta-6-grand-theft-auto-vi-trophy-guide-roadmap/" },
      { name: "GTABase — GTA 6 Trophies & Achievements List", url: "https://www.gtabase.com/articles/gta-6/gta-6-achievements-trophies-list-ps5-xbox-series" },
      { name: "KeenGamer — GTA 6 Trophy Guide & Platinum Roadmap", url: "https://www.keengamer.com/articles/guides/gta-6-trophy-guide-platinum-roadmap-all-55-trophies/" }
    ]
  },
  "Fair Game": {
    kind: "side", stage: 3, missable: false,
    guide: "Hunt the unique animal Bret sends you after. Bret's hunting quests are played as Jason, and they punch above their weight: Bret's quests are one of the categories the 100% checklist requires in full, so finish the whole strand, not just the hunt that pays this trophy. Track the strand from Bret's map marker whenever you are in his part of the state.",
    sources: [
      { name: "GTA Spotter — GTA VI Trophies and Achievements", url: "https://gtaspotter.com/en/guides/gta-6-trophies-and-achievements/" },
      { name: "PowerPyx — GTA 6 Trophy Guide & Roadmap", url: "https://www.powerpyx.com/gta-6-grand-theft-auto-vi-trophy-guide-roadmap/" }
    ]
  },
  "Don't Touch My Deck": {
    kind: "collectibles", stage: 2, missable: false,
    guide: "Complete 3 full Collectible Card sets. There are 18 sets in the game, and cards are found all over Leonida, so three completed sets is an early milestone rather than the end of the hunt: the 100% checklist asks for 15 completed sets. Keep every card you find, check which sets are nearly done in your progress screens, and hunt the missing cards of your closest set first.",
    sources: [
      { name: "Push Square — GTA 6 Trophy Guide and Roadmap", url: "https://www.pushsquare.com/guides/gta-6-trophy-guide-and-roadmap" },
      { name: "PowerPyx — GTA 6 Trophy Guide & Roadmap", url: "https://www.powerpyx.com/gta-6-grand-theft-auto-vi-trophy-guide-roadmap/" }
    ]
  },
  "You WAiNKer!": {
    kind: "collectibles", stage: 2, missable: false,
    guide: "Use the WAiNK phone app to scan 100 locations. Landmarks, curiosities and sculptures all count, so the habit to build is simple: whenever you arrive somewhere new, get the phone out and scan before you move on. One hundred sounds like a lot, but spread over a full playthrough of exploring, story travel and clean-up it lands well before the end.",
    sources: [
      { name: "SixShore — GTA 6 Trophy and Achievement List", url: "https://sixshore.com/gta-6/guides/trophies-and-achievements/" },
      { name: "Insider Gaming — Complete GTA 6 Trophy List", url: "https://insider-gaming.com/complete-gta-6-trophy-list-how-to-get-all-trophies-achievements/" }
    ]
  },
  "One Last Thing": {
    kind: "activities", stage: 2, missable: false,
    guide: "Complete 50 Challenges. The game holds 80 challenges in eight groups of ten, and the 100% checklist needs 70 of them, so this bronze is a waypoint on a road you are already walking. Mix challenge types as you travel rather than farming one group, and leave the hardest few challenges for last, since you are allowed to skip ten entirely.",
    sources: [
      { name: "PowerPyx — GTA 6 Trophy Guide & Roadmap", url: "https://www.powerpyx.com/gta-6-grand-theft-auto-vi-trophy-guide-roadmap/" },
      { name: "GTA Spotter — GTA VI Trophies and Achievements", url: "https://gtaspotter.com/en/guides/gta-6-trophies-and-achievements/" }
    ]
  },
  "Hot Together": {
    kind: "crime", stage: 3, missable: false,
    guide: "With your partner beside you, build a 4-star Wanted Level, then lose the heat and escape cleanly. Commit enough mayhem together to reach four stars, then break line of sight, swap vehicles or duck into cover away from the search zone, and stay hidden until the stars drain. Doing it with the partner present for both the crime and the escape is the part players fumble, so start the trouble together.",
    sources: [
      { name: "EGamers — GTA 6 Trophy List: All 55 Trophies", url: "https://egamers.io/gta-6-trophy-list-all-55-trophies-and-achievements-plus-the-hardest-ones/" },
      { name: "Insider Gaming — Complete GTA 6 Trophy List", url: "https://insider-gaming.com/complete-gta-6-trophy-list-how-to-get-all-trophies-achievements/" }
    ]
  },
  "Retail Therapy": {
    kind: "crime", stage: 3, missable: false,
    guide: "Rob 3 shops back-to-back with your partner without your Wanted Level dropping in between. Plan a small route of three nearby shops, rob the first, and drive straight to the next while the heat is still on; if the stars fully clear before the third till, the chain breaks and you start again. A fast car and a partner who stays with you the whole way make this a two-minute job.",
    sources: [
      { name: "EGamers — GTA 6 Trophy List: All 55 Trophies", url: "https://egamers.io/gta-6-trophy-list-all-55-trophies-and-achievements-plus-the-hardest-ones/" },
      { name: "Insider Gaming — Complete GTA 6 Trophy List", url: "https://insider-gaming.com/complete-gta-6-trophy-list-how-to-get-all-trophies-achievements/" }
    ]
  },
  "Whip It Good": {
    kind: "collectibles", stage: 2, missable: false,
    guide: "Discover 100 vehicles. New models register as you encounter and drive them, so variety is the whole trick: steal the odd parked car instead of always calling your own, and detour for anything you have not seen before. The 100% checklist wants 200 of the 277 base models scanned, so treat 100 as the halfway mark and keep the habit up all game.",
    sources: [
      { name: "PowerPyx — GTA 6 Trophy Guide & Roadmap", url: "https://www.powerpyx.com/gta-6-grand-theft-auto-vi-trophy-guide-roadmap/" },
      { name: "Insider Gaming — Complete GTA 6 Trophy List", url: "https://insider-gaming.com/complete-gta-6-trophy-list-how-to-get-all-trophies-achievements/" }
    ]
  },
  "Gunslinger": {
    kind: "crime", stage: 3, missable: false,
    guide: "Take down 5 enemies inside a single use of Combat Focus. The ability is wasted on scattered targets, so save it for a packed moment: a gang operation, a robbery gone loud, or any mission beat where five or more enemies are in view at once. Trigger Combat Focus only when the fifth target is already on screen, then work left to right.",
    sources: [
      { name: "EGamers — GTA 6 Trophy List: All 55 Trophies", url: "https://egamers.io/gta-6-trophy-list-all-55-trophies-and-achievements-plus-the-hardest-ones/" },
      { name: "Insider Gaming — Complete GTA 6 Trophy List", url: "https://insider-gaming.com/complete-gta-6-trophy-list-how-to-get-all-trophies-achievements/" }
    ]
  },
  "Catch Me If You Can": {
    kind: "crime", stage: 3, missable: false,
    guide: "Make an unscheduled departure at VCIA, the airport authority you meet in the story mission VCIA Takedown. In plain terms: get onto the airfield side of VCIA in free-roam and take off in an aircraft you were never cleared to fly. Expect an instant wanted level, so line the plane up, commit, and climb away from the response.",
    sources: [
      { name: "Insider Gaming — Complete GTA 6 Trophy List", url: "https://insider-gaming.com/complete-gta-6-trophy-list-how-to-get-all-trophies-achievements/" },
      { name: "EGamers — GTA 6 Trophy List: All 55 Trophies", url: "https://egamers.io/gta-6-trophy-list-all-55-trophies-and-achievements-plus-the-hardest-ones/" }
    ]
  },
  "Challenging Tank": {
    kind: "crime", stage: 3, missable: false,
    guide: "The description, 'Kinda hot in these Rhinos', points at the Rhino tanks that join the response at the top end of a wanted level. Push your heat until the armour rolls out, then deal with a Rhino: destroy it with explosives or heavy weapons, or pull its crew and take it. It is an endgame free-roam stunt, so bring a stocked arsenal and an escape plan for afterwards.",
    sources: [
      { name: "EGamers — GTA 6 Trophy List: All 55 Trophies", url: "https://egamers.io/gta-6-trophy-list-all-55-trophies-and-achievements-plus-the-hardest-ones/" },
      { name: "Insider Gaming — Complete GTA 6 Trophy List", url: "https://insider-gaming.com/complete-gta-6-trophy-list-how-to-get-all-trophies-achievements/" }
    ]
  },
  "Sneakthief": {
    kind: "crime", stage: 3, missable: false,
    guide: "Rob a jewelry store without being detected. This is the quiet counterpart to the loud robbery trophies: go in without drawing a weapon in view of staff, keep the job silent, and be gone before anyone raises the alarm. If a witness spots you or a shot is fired, detection is blown, so leave and try a fresh store rather than forcing it.",
    sources: [
      { name: "EGamers — GTA 6 Trophy List: All 55 Trophies", url: "https://egamers.io/gta-6-trophy-list-all-55-trophies-and-achievements-plus-the-hardest-ones/" },
      { name: "Insider Gaming — Complete GTA 6 Trophy List", url: "https://insider-gaming.com/complete-gta-6-trophy-list-how-to-get-all-trophies-achievements/" }
    ]
  },
  "Maximum Withdrawal": {
    kind: "crime", stage: 2, missable: false,
    guide: "Rob 5 Bank Vaults and escape. The vault jobs open through an optional mission in Chapter 4, which is one more reason to pick up optional work during the story. There are 8 vaults in total and the 100% checklist requires every one of them, so do not stop at five: clear the map of vaults and this silver and a slice of A Long Road fall together.",
    sources: [
      { name: "SixShore — GTA 6 Trophy and Achievement List", url: "https://sixshore.com/gta-6/guides/trophies-and-achievements/" },
      { name: "PowerPyx — GTA 6 Trophy Guide & Roadmap", url: "https://www.powerpyx.com/gta-6-grand-theft-auto-vi-trophy-guide-roadmap/" }
    ]
  },
  "A Classic Blitz Play": {
    kind: "crime", stage: 3, missable: false,
    guide: "Rob an Armored Truck and escape. Armored trucks are free-roam targets: stop one, get its doors open with force or explosives, take the cash, then lose the wanted level that follows. It only takes one successful truck, so pick a quiet stretch of road away from patrols for your first attempt.",
    sources: [
      { name: "EGamers — GTA 6 Trophy List: All 55 Trophies", url: "https://egamers.io/gta-6-trophy-list-all-55-trophies-and-achievements-plus-the-hardest-ones/" },
      { name: "Insider Gaming — Complete GTA 6 Trophy List", url: "https://insider-gaming.com/complete-gta-6-trophy-list-how-to-get-all-trophies-achievements/" }
    ]
  },
  "The Goodtime State": {
    kind: "collectibles", stage: 2, missable: false,
    guide: "Explore all 52 areas of Leonida. Areas register as you enter them, and a thorough playthrough covers most of the map on its own; what remains is usually a handful of outlying corners to sweep during clean-up. Pair the sweep with the WAiNK scans and vehicle discoveries so the same road trip pays three trophies at once.",
    sources: [
      { name: "EGamers — GTA 6 Trophy List: All 55 Trophies", url: "https://egamers.io/gta-6-trophy-list-all-55-trophies-and-achievements-plus-the-hardest-ones/" },
      { name: "Insider Gaming — Complete GTA 6 Trophy List", url: "https://insider-gaming.com/complete-gta-6-trophy-list-how-to-get-all-trophies-achievements/" }
    ]
  },
  "Pest Control": {
    kind: "crime", stage: 2, missable: false,
    guide: "Rob an Illegal Operation belonging to each of the 9 gangs. One operation per gang is the trophy, but gang operations are also part of the robberies the 100% checklist counts, so hitting every gang early doubles as completion progress. Vary your targets as you unlock new territory instead of farming the first gang you meet.",
    sources: [
      { name: "KeenGamer — GTA 6 Trophy Guide & Platinum Roadmap", url: "https://www.keengamer.com/articles/guides/gta-6-trophy-guide-platinum-roadmap-all-55-trophies/" },
      { name: "PowerPyx — GTA 6 Trophy Guide & Roadmap", url: "https://www.powerpyx.com/gta-6-grand-theft-auto-vi-trophy-guide-roadmap/" }
    ]
  },
  "In The Beginning…": {
    kind: "activities", stage: 3, missable: false,
    guide: "Enjoy a cocktail with a view on Ocean Beach. This is one of the list's small scene trophies: head to the Ocean Beach spot the description names, order the drink at the bar there, and let the moment play out. It takes a minute, costs a little cash, and is easy to forget, so grab it whenever you are next on that stretch of sand.",
    sources: [
      { name: "Insider Gaming — Complete GTA 6 Trophy List", url: "https://insider-gaming.com/complete-gta-6-trophy-list-how-to-get-all-trophies-achievements/" },
      { name: "EGamers — GTA 6 Trophy List: All 55 Trophies", url: "https://egamers.io/gta-6-trophy-list-all-55-trophies-and-achievements-plus-the-hardest-ones/" }
    ]
  },
  "Capital Offense": {
    kind: "crime", stage: 3, missable: false,
    guide: "Smash your way out of a vehicle showroom, through the glass, in classic style. Take a car inside a showroom and drive it straight out through the storefront rather than the door. Any showroom with a car on the floor works; the trophy is about the exit, not the value of what you drive out.",
    sources: [
      { name: "Insider Gaming — Complete GTA 6 Trophy List", url: "https://insider-gaming.com/complete-gta-6-trophy-list-how-to-get-all-trophies-achievements/" },
      { name: "EGamers — GTA 6 Trophy List: All 55 Trophies", url: "https://egamers.io/gta-6-trophy-list-all-55-trophies-and-achievements-plus-the-hardest-ones/" }
    ]
  },
  "Let’s Go Bowling": {
    kind: "activities", stage: 3, missable: false,
    guide: "Play at the Kolt & Associates bowling alley, and follow through: finish the game you start there. Bowling is one of the leisure activities dotted around Leonida, so this is a one-visit trophy; drop in when you pass the alley, play your frames out to the end, and the bronze is yours.",
    sources: [
      { name: "Insider Gaming — Complete GTA 6 Trophy List", url: "https://insider-gaming.com/complete-gta-6-trophy-list-how-to-get-all-trophies-achievements/" },
      { name: "EGamers — GTA 6 Trophy List: All 55 Trophies", url: "https://egamers.io/gta-6-trophy-list-all-55-trophies-and-achievements-plus-the-hardest-ones/" }
    ]
  },
  "Personal Best": {
    kind: "misc", stage: 3, missable: false,
    guide: "The description, 'A partnership with mass appeal', is one of the list's cryptic ones, and community lists group it with the partner trophies: a shared moment between Jason and Lucia rather than a solo feat. Play the partner content the story and free-roam offer (the same pairing Hot Together and Retail Therapy need), and it unlocks along the way; it is not tied to a chapter deadline.",
    sources: [
      { name: "EGamers — GTA 6 Trophy List: All 55 Trophies", url: "https://egamers.io/gta-6-trophy-list-all-55-trophies-and-achievements-plus-the-hardest-ones/" },
      { name: "Insider Gaming — Complete GTA 6 Trophy List", url: "https://insider-gaming.com/complete-gta-6-trophy-list-how-to-get-all-trophies-achievements/" }
    ]
  },
  "Actions Speak Louder": {
    kind: "misc", stage: 2, missable: false,
    guide: "A cumulative choices trophy: PlayStation tracks a count that runs to 500, and the choices you make in dialogue and in the game's decision moments feed it. There is nothing to farm in one sitting; answer prompts as you play, in story and side content alike, and the counter fills across the playthrough. If it is short at the end, repeatable conversations and activities keep adding choices in free-roam.",
    sources: [
      { name: "Insider Gaming — Complete GTA 6 Trophy List", url: "https://insider-gaming.com/complete-gta-6-trophy-list-how-to-get-all-trophies-achievements/" },
      { name: "Exophase — GTA VI PS5 trophies (tracked counts)", url: "" }
    ]
  },
  "Bad Luck, I Guess": {
    kind: "misc", stage: 3, missable: false,
    guide: "'Second time's the charm' is the whole instruction: fail at something the game lets you retry, a challenge, a race, an activity attempt, and then succeed at it on the next try. Most players earn this without aiming at it; if it is still missing in clean-up, deliberately botch a first attempt at an easy challenge and put it right straight after.",
    sources: [
      { name: "Insider Gaming — Complete GTA 6 Trophy List", url: "https://insider-gaming.com/complete-gta-6-trophy-list-how-to-get-all-trophies-achievements/" },
      { name: "EGamers — GTA 6 Trophy List: All 55 Trophies", url: "https://egamers.io/gta-6-trophy-list-all-55-trophies-and-achievements-plus-the-hardest-ones/" }
    ]
  },
  "The Truth Is Out There": {
    kind: "misc", stage: 3, missable: false,
    guide: "'What the hell just happened?' is the trophy for witnessing one of Leonida's strange events, the weird sightings the series loves to hide off the beaten path. Explore at night and away from the main routes during clean-up, and investigate anything that looks out of place; the trophy pays when you see the event, not for solving it.",
    sources: [
      { name: "Insider Gaming — Complete GTA 6 Trophy List", url: "https://insider-gaming.com/complete-gta-6-trophy-list-how-to-get-all-trophies-achievements/" },
      { name: "EGamers — GTA 6 Trophy List: All 55 Trophies", url: "https://egamers.io/gta-6-trophy-list-all-55-trophies-and-achievements-plus-the-hardest-ones/" }
    ]
  },
  "Ten Pin": {
    kind: "crime", stage: 3, missable: false,
    guide: "Bowl someone over with a melee drive-by: from a moving vehicle, strike a pedestrian with a melee attack as you pass. Drive slowly past a busy sidewalk, swing as the target draws level, and the knockdown counts. It is a ten-second stunt once you line it up; a crowded beachfront pavement is the easiest hunting ground.",
    sources: [
      { name: "HowToVideogame — GTA 6 Trophy and Achievement List", url: "https://howtovideogame.com/gta-6-trophies/" },
      { name: "Insider Gaming — Complete GTA 6 Trophy List", url: "https://insider-gaming.com/complete-gta-6-trophy-list-how-to-get-all-trophies-achievements/" }
    ]
  },
  "Dime on the Dollar": {
    kind: "crime", stage: 2, missable: false,
    guide: "Earn $250,000 by laundering Marked Bills through your contacts. Marked Bills come from the robbery economy, vaults, trucks and operations, so this total builds while you work the crime trophies and the checklist's robbery requirements. Route the bills to your laundering contacts whenever you are carrying them rather than letting them sit, and the quarter million passes quickly.",
    sources: [
      { name: "EGamers — GTA 6 Trophy List: All 55 Trophies", url: "https://egamers.io/gta-6-trophy-list-all-55-trophies-and-achievements-plus-the-hardest-ones/" },
      { name: "Insider Gaming — Complete GTA 6 Trophy List", url: "https://insider-gaming.com/complete-gta-6-trophy-list-how-to-get-all-trophies-achievements/" }
    ]
  },
  "Treat Yo Self": {
    kind: "misc", stage: 2, missable: false,
    guide: "Spend $100,000 across all shops, in total, not in one spree. Clothes, weapons, vehicle work, food and drink all feed the same counter, so normal play does most of it. If you are short late in the run, a deliberate shopping round for garage cars and gear closes the gap and stocks you for the endgame at the same time.",
    sources: [
      { name: "EGamers — GTA 6 Trophy List: All 55 Trophies", url: "https://egamers.io/gta-6-trophy-list-all-55-trophies-and-achievements-plus-the-hardest-ones/" },
      { name: "Insider Gaming — Complete GTA 6 Trophy List", url: "https://insider-gaming.com/complete-gta-6-trophy-list-how-to-get-all-trophies-achievements/" }
    ]
  },
  "Little Boxes": {
    kind: "misc", stage: 2, missable: false,
    guide: "Purchase all 8 garage properties. Garages are bought from property listings as your money grows, and they double as vehicle storage, so buy them as they become affordable instead of saving for a single sweep. Eight is the whole set; the last one is usually a money question, and the robbery trophies fill the account that pays for it.",
    sources: [
      { name: "EGamers — GTA 6 Trophy List: All 55 Trophies", url: "https://egamers.io/gta-6-trophy-list-all-55-trophies-and-achievements-plus-the-hardest-ones/" },
      { name: "Insider Gaming — Complete GTA 6 Trophy List", url: "https://insider-gaming.com/complete-gta-6-trophy-list-how-to-get-all-trophies-achievements/" }
    ]
  },
  "On the Spot": {
    kind: "misc", stage: 2, missable: false,
    guide: "Register 10 vehicles to the Scooter Bros app. When you take a vehicle you like, register it in the app instead of just driving off; ten registrations is a small count next to the 100 vehicles Whip It Good wants discovered, so the two habits stack: discover it, register it, move on.",
    sources: [
      { name: "EGamers — GTA 6 Trophy List: All 55 Trophies", url: "https://egamers.io/gta-6-trophy-list-all-55-trophies-and-achievements-plus-the-hardest-ones/" },
      { name: "Insider Gaming — Complete GTA 6 Trophy List", url: "https://insider-gaming.com/complete-gta-6-trophy-list-how-to-get-all-trophies-achievements/" }
    ]
  }
};

// The roadmap to the platinum, built from the official descriptions and the guides cited
// in the trophy entries above. One playthrough, roughly 200 hours, difficulty about 4/10.
export const ROADMAP = [
  {
    stage: 1,
    title: "Stage 1 — Play the story, protect the one missable (about 60–80 hours)",
    text: "Play the campaign from Gone Fishing to the final mission and let the twelve story trophies land on their own: there are no difficulty settings and no mission replay, so save manually at the start and end of every chapter, and never use cheats, which disable trophies and saving. One thing must not slip: in Chapter 1, after Down to Earth, Lucia offers a balcony meditation at Jason's house in the morning — accept it, because Positive Mental Attitude's first spot cannot be done later. Along the way, sample every activity type once for Master of None, scan vehicles and WAiNK spots as you travel, and pick up optional missions, since a Chapter 4 optional mission opens the bank vault jobs."
  },
  {
    stage: 2,
    title: "Stage 2 — The 100% checklist and the big counters (about 100 hours)",
    text: "With the story done, the 100% Completion Checklist (Progress, then Stats) is viewable and A Long Road becomes the spine of the run. Clear in full the categories it demands completely: every robbery including all 8 bank vaults (Maximum Withdrawal), underwater discoveries, all 42 shooting range golds (The Shootist), all 14 drone race wins (Top Fun) and Bret's quests. Sample the rest to its thresholds: 250 stunts on the way to 300 (Cunning Stunts), 70 of the 80 challenges (One Last Thing at 50), 15 card sets on the way past 3 (Don't Touch My Deck), 100 WAiNK scans, 100 then 200 vehicles, and all 52 areas of Leonida."
  },
  {
    stage: 3,
    title: "Stage 3 — Strangers, questlines and clean-up (about 10–20 hours)",
    text: "Finish the named questlines and stranger strands: Andy, Kenton, Billy, Randy and Tyrone's final missions, Bret's unique-animal hunt, and any of the 8 stranger strands still open for Strangers & Freaks — every quest giver tied to a trophy is available again after the story. Then sweep the one-off stunts: the partner heat trophies (Hot Together, Retail Therapy), the quiet jewelry job (Sneakthief), the armored truck, the showroom exit, the Ocean Beach cocktail, bowling, the melee drive-by, and the strange-event sighting. When the last of the 54 lands, Vice Got a Price! follows on its own."
  }
];

export const KIND_LABELS = {
  story: "Story",
  side: "Side missions",
  activities: "Activities",
  collectibles: "Collectibles & exploration",
  crime: "Crime & combat",
  misc: "Milestones & misc"
};

// Which trophies PlayStation keeps hidden until they are earned (28 of the 55):
// the twelve story trophies and sixteen side trophies, as the published lists group them.
export const HIDDEN = new Set([
  "Just Like Paradise", "Paradise Lost", "T**s Ass Drug Money", "Vice City, Baby!",
  "Top Of The World, Ma", "You Gotta Know When to Get Off", "Trust", "Break the Bank",
  "Family Matters", "DWNFALL", "Hi-Jacked", "Snow Storm",
  "Road to Rehabilitation", "This Was No Boat Accident", "The Lone Rider",
  "Supply & Demand", "Spin On This!", "Fair Game", "Hot Together", "Retail Therapy",
  "Gunslinger", "Catch Me If You Can", "Challenging Tank", "In The Beginning…",
  "Personal Best", "Actions Speak Louder", "Bad Luck, I Guess", "The Truth Is Out There"
]);

