# Shin-hanga Art Bible: A Quiet Coastal Mystery

**Project premise:** an original point-and-click adventure set in a fictional Japanese coastal rail town in the 1920s. The player investigates a quiet, uncanny absence through observation, conversation, and small acts of care—not combat or horror.

**How to read this document:**

- **Source fact** records a historical or technical claim backed by a source in the reference list.
- **Design inference** is an original production recommendation. It may be inspired by the research, but it is not a claim about historical shin-hanga practice.

This distinction is deliberate: the game should learn from shin-hanga's visual logic without pretending to be a museum reconstruction or an undiscovered print by a historical artist.

---

## 1. Historical foundation

### What shin-hanga is

**Source fact — movement and method.** *Shin-hanga* means “new prints.” It flourished from roughly 1912 to the early 1940s, retaining the older ukiyo-e division of labour: a publisher commissioned the design while specialist artisans carved blocks and printed the image. Publisher Watanabe Shōzaburō was a central force in the movement. [S1] [S2]

**Source fact — subjects and modernity.** Shin-hanga often returned to landscapes and images of beautiful women (*bijin-ga*), but expanded its visual language through modern Japanese and international influences. [S1] [S3]

**Source fact — light as a designed variable.** Yoshida Hiroshi's *Sailboats* series uses the same woodblocks in six colour schemes to show different times of day, a useful historical example of mood changing through palette and light rather than through a new location. [S4]

**Source fact — weather, architecture, and a small human figure.** Kawase Hasui's 1925 *The Temple Zōjōji in Shiba* places a mostly umbrella-hidden woman in snow before a temple gate. It is a useful example of how a lone figure can give a large setting emotional scale. [S3]

**Source fact — texture is part of the image.** In Itō Shinsui's *Before the Mirror*, deliberately visible rubbing lines create textural contrast with broad areas of red and black. [S5]

### What this project takes from it

**Design inference.** The game’s visual target is not “a moving woodblock print.” It is a playable, original world governed by the same broad priorities: a decisive frame, controlled colour, poetic weather, material texture, and a human presence that makes a place feel inhabited.

**Design inference.** Contemporary needs win where they conflict with imitation. Readability, accessible contrast, clear interaction feedback, and respectful fiction take precedence over any period-style effect.

---

## 2. Visual grammar

### Frame and composition

**Design inference — use these rules for every explorable scene.**

- Treat each room as a composed print before placing interactables. Give it one dominant shape or direction: a rail line, seawall, staircase, roofline, fishing net, cliff edge, or column of rain.
- Prefer an off-centre focal point and leave one meaningful quiet zone. Empty sky, water, snow, sand, or shadow should make the player pause rather than signal missing content.
- Use foreground occluders—umbrella rim, reeds, noren curtain, mooring post, rain-slick window frame—to create depth and curiosity without hiding the navigation path.
- Crop confidently at the frame edge. A boat, temple roof, train, or person may continue beyond the view, suggesting a town larger than the current screen.
- Keep one unbroken traversal lane through the image. The player must be able to read “where I can walk next” at a glance, even in rain, night, or fog.

### Shape, line, and depth

**Design inference.** Build scenes from broad, clean colour silhouettes first. Add selective linework only where it clarifies form, material, or interaction; do not outline every object. Reserve the sharpest edge contrast for the player, the current clue, and the active exit.

**Design inference.** Use depth in three readable planes:

1. **Foreground:** one tactile framing element; low-detail motion such as rain, cloth, reeds, or a rope.
2. **Play plane:** the player, paths, doors, people, and interactables; highest clarity and lowest texture interference.
3. **Distance:** simplified roofs, water, hills, or sky; limited motion and lower local contrast.

### Colour, light, and weather

**Design inference — base palette.** Begin with a small scene palette, then allow one narrative accent. Suggested starting swatches are not historical prescriptions:

| Role | Suggested family | Use |
| --- | --- | --- |
| Paper light | warm ivory `#E8DFC7` | sky haze, walls, UI ground |
| Deep key | blue-black `#1E2A35` | silhouettes, night water, text |
| Water shadow | indigo `#344D69` | sea, rain, distant mountains |
| Weather midtone | blue-grey `#8092A0` | fog, wet timber, overcast depth |
| Earth | muted umber `#80604A` | roofs, docks, baskets, wood |
| Lantern accent | persimmon `#C7653C` | story light, important warmth |
| Living accent | pine `#496651` | vegetation, shrine approach, workwear |

**Design inference — lighting states.** Every location receives one default state and at most two story variants. Alter global palette, value grouping, and a handful of landmarks rather than repainting the world wholesale.

| State | Primary contrast | Emotional use | Interaction rule |
| --- | --- | --- | --- |
| Misty dawn | cool light against dark roofs | beginning, uncertainty | silhouettes must not conceal exits |
| Overcast rain | desaturated midtones with reflected accents | observation, waiting | puddle/reflection effects stay behind hit targets |
| Clear late afternoon | warm light against long cool shadow | connection, revelation | use long shadows to point toward routes |
| Blue evening | indigo field with sparse warm lamps | solitude, intimate dialogue | interactive lamps and thresholds receive a readable halo |
| Snow or moonlight | quiet pale field with near-black anchors | suspended time, final clues | retain colour/shape cues; do not rely on white alone |

**Design inference.** Make weather a narrative state, not decoration. Rain can reveal fresh footprints; a low tide can open the caves; a cleared sky can expose a signal across the bay. Each weather change must also preserve a clear route and a readable interaction layer.

### Print material without faux-ageing

**Design inference.** Let material appear as restrained, screen-stable texture: low-contrast paper fibre in large light fields, faint pigment variation within broad areas, and occasional directional rubbing texture. Keep texture static or drifting extremely slowly; never let it shimmer, crawl, or reduce text contrast.

**Design inference.** Do not add universal grunge, torn edges, random ink splatter, or distressed “vintage Japan” filters. Material should support the scene’s weather and scale, not turn the setting into a souvenir.

---

## 3. Reference roles and originality boundary

These artists are study lenses, not styles to copy. Use multiple references for a scene, change the composition and subject matter, and create original final art.

| Reference role | Learn from | Do not reproduce |
| --- | --- | --- |
| Kawase Hasui | landscape mood, seasonal weather, architecture set against a small solitary figure | a recognisable viewpoint, composition, or colour arrangement from a specific print |
| Yoshida Hiroshi | controlled palette variants and time-of-day storytelling | a specific *Sailboats* image or its serial composition |
| Itō Shinsui | close human-scale framing and contrast between broad colour and texture | named models, poses, garment patterns, or facial rendering from a print |
| Hashiguchi Goyō | intimate observation and the meeting of traditional technique with modern influences | direct figure studies, crops, or decorative details |

**Design inference — originality gate.** Before an asset is approved, its artist must be able to name two or more source influences and explain what is original about the final composition, subject, shape language, and colour arrangement. If it reads as an attribution-ready pastiche of one artist or print, redesign it.

---

## 4. The coastal rail town

The town has no real-world name, no replica map, and no claim to represent a specific Japanese community. Its geography is designed for legible point-and-click exploration: rail line at the upper edge, commercial street in the centre, water at the lower edge, and a shrine approach climbing the hillside.

| Motif | Default season / weather | Scene role | Mystery function |
| --- | --- | --- | --- |
| Station platform | early spring, misty dawn | arrival hub; distant train rhythm | timetables, unclaimed luggage, a missing passenger’s last sighting |
| Seawall | late autumn, clear late afternoon | long side-on walking scene; tide horizon | coded signal lamps and a view toward an unreachable island |
| Fishing lanes | early-summer rain | dense social lane with shop thresholds | overheard rumours, borrowed tools, an altered delivery ledger |
| Hill shrine exterior | first snow, blue evening | quiet vertical route and meeting place | an old boundary marker; never a puzzle that mocks or desecrates worship |
| Family inn | rainy evening | warm dialogue hub and rest state | guest register, photographs, conflicting memories |
| Bathhouse exterior/interior | humid overcast afternoon | transitional, intimate community space | a vanished personal item and changing local gossip; preserve privacy and dignity |
| Tidal caves | low tide, silver overcast | gated exploration scene | tide-dependent access to evidence, echo-based clue, concealed mooring |
| Small commercial street | clear festival-adjacent afternoon or rain-dark evening | services, errands, interpersonal clues | repairs, letters, trades, and the town’s changing public story |

**Design inference.** The town’s secret should be environmental and human-scale: a disappearance, a misdirected message, a family debt, a damaged signal, or a shared decision kept quiet. Supernatural ambiguity may colour the atmosphere, but the primary resolution should respect the characters’ agency and not blame a living tradition or religion.

### Characters

**Design inference.** Character portraits should use calm, deliberate framing and a limited palette, but dialogue sprites must prioritize expression and accessibility. Give each recurring character one silhouette cue, one work/material cue, and one warm or cool accent; avoid reducing people to “traditional” costume markers.

**Design inference — historical research gate.** Before finalising garments, occupations, signage, rail operations, domestic interiors, or food, create a separate source sheet for the intended 1920s regional context. Do not infer everyday material culture from prints alone.

### Props and signage

**Design inference.** Make clue props feel used rather than collectible: damp timetable, fishing ledger, spare lantern glass, carefully repaired parasol, mailed photograph, tide chart, paper-wrapped medicine, or train ticket. Every prop should reveal a relationship, routine, or route.

**Design inference.** Any Japanese-language signage must be written, translated, and reviewed by a qualified native-language consultant before final art. Prototype with clearly marked placeholder text rather than decorative pseudo-Japanese glyphs.

---

## 5. Point-and-click interaction and UI

### Interaction layer

**Design inference.** The visual scene remains quiet until the player asks it a question. On hover or focus, use one subtle response: a slight value lift, a restrained ink-outline pulse, a short label, or a small motion. Never cover the art with persistent sparkle trails or a field of icons.

**Design inference.** Keep hit areas slightly more generous than their illustrated shapes. If a small clue matters, provide a nearby contextual hotspot or a focus mode; do not make accuracy a test of the player’s eyesight.

**Design inference.** Use state changes sparingly and legibly: the tide lowers, one lamp becomes lit, a train arrives, an umbrella is left behind. Each is a compositional change the player can notice without an exposition popup.

### UI language

**Design inference.** UI should feel like a companion field-note system, not a decorative faux-antique interface. Use warm paper backgrounds, restrained indigo type, one accessible sans/serif pairing, and clear contemporary controls. Avoid brush-script body text, simulated seals as buttons, or red “Japanese” ornament used without meaning.

**Design inference.** The journal records facts, leads, and map destinations in plain language. Its visual texture may echo paper, but its hierarchy, text size, focus order, and contrast must meet modern usability needs.

### Accessibility baseline

**Design inference.** Every important clue needs at least two channels: colour plus shape, sound plus caption, or visual change plus journal update. Offer adjustable text size, high-contrast interaction outlines, reduced weather motion, and no-timer puzzle alternatives.

---

## 6. Animation and audio direction

**Design inference — animation.** Favour a few slow, intentional motions: rain passing behind a figure, train steam, noren shifting, a lantern flicker, water lapping at a mooring, or a character taking one breath before speaking. Hold stillness long enough for the composition to land. Use stepped or limited animation only if it remains smooth and readable; it should never imply low quality or mimic printing defects.

**Design inference — audio.** Build an acoustic map of quiet rails, harbour water, wet shoes, wind through pines, distant voices, and interior room tone. Music enters sparingly at discoveries and relationships. Avoid generic “East Asian” sound libraries, theatrical temple sounds, or ritual audio outside an appropriately researched narrative context.

---

## 7. Cultural authenticity and licensing guardrails

### Respectful fiction

**Design inference.** The town is Japanese in setting, but it must not turn Japanese culture into a puzzle-box aesthetic. People have jobs, private histories, humour, disagreements, and changing opinions beyond their relationship to the mystery.

**Design inference.** Keep shrine scenes exterior and observational by default. Do not use prayer, purification, funerals, deity objects, or named local traditions as a lock-and-key mechanic. If a story requirement makes any of those necessary, pause art/narrative production and engage a relevant cultural and religious consultant.

**Design inference.** Folklore may inspire an original rumour, symbol, or ambiguous story, but do not attach wrongdoing, curses, or violence to a living belief or identifiable community. A named yōkai, region, historical event, or practice requires a fresh research pass and consultation plan.

### Reference and asset policy

**Design inference.** Museum pages and collection images are research references, not game assets. Do not scan, trace, photobash, colour-pick wholesale, or reproduce a protected image. Record provenance for every reference in the art tracker.

**Design inference.** Before using any public-domain or open-access image in marketing, UI, or the game, verify the rights statement on the exact collection record and preserve its required attribution. Default to original production art even where reuse might be legally available.

---

## 8. Production checklist

Use this checklist at concept, final-art, and narrative review.

- [ ] **Research traceability:** Historical claims cite a source; design choices are marked as inferences.
- [ ] **Originality:** The asset is not a close copy of a named artist, print, composition, pose, or palette arrangement.
- [ ] **Composition:** One dominant shape, one quiet zone, a readable route, and clear interactables are present.
- [ ] **Light and weather:** The scene’s state communicates mood or story and preserves navigation/readability.
- [ ] **Texture:** Material variation is restrained, stable on screen, and does not impair text or hit targets.
- [ ] **Narrative:** The scene reveals human relationships or a clue; it does not use culture or religion as exotic set dressing.
- [ ] **Material culture:** Any historically specific prop, clothing, sign, food, occupation, or transport detail has a separate source check.
- [ ] **Language:** Japanese text has native-speaker review; no pseudo-Japanese ornament appears.
- [ ] **Accessibility:** Critical information has a non-colour cue and weather/motion can be reduced.
- [ ] **Licensing:** Reference provenance and rights status are logged; production art is original.

---

## 9. Acceptance review for the first playable area

The first playable station-to-seawall route is ready for art-direction approval when a reviewer can answer “yes” to all of the following:

1. Does the route feel calm and contemplative before its mystery becomes explicit?
2. Can a first-time player find the next exit and the key interaction without visual hunting?
3. Do weather, palette, and sound communicate a meaningful state change rather than only decoration?
4. Can every historical statement and every external visual reference be traced?
5. Does the scene feel original rather than like an imitation of a single print or artist?
6. Are sacred, linguistic, and everyday cultural details either responsibly researched or deliberately fictionalized?

---

## References

**[S1]** Library of Congress, “On the Cutting Edge: Japanese Hanga Tradition.” Describes shin-hanga’s approximate 1912–early-1940s flourishing, Watanabe Shōzaburō’s role, and the movement’s blend of traditional and modern visual language. <https://www.loc.gov/loc/lcib/0704/cwaj.html>

**[S2]** Library of Congress, “Beyond Ukiyo-e: Modern & Contemporary Japanese Prints.” Describes the traditional publisher/artist/carver/printer collaboration continued by shin-hanga and its traditional subject matter. <https://www.loc.gov/exhibits/ukiyo-e/beyond.html>

**[S3]** The Metropolitan Museum of Art, “Kawase Hasui: *The Temple Zōjōji in Shiba*.” Collection note on Hasui, shin-hanga, and the snow scene’s solitary figure. <https://www.metmuseum.org/art/collection/search/39587>

**[S4]** Museum of Fine Arts, Boston, “The Creative Process in Modern Japanese Printmaking.” Discusses Yoshida Hiroshi’s *Sailboats* and its six time-of-day colour schemes. <https://www.mfa.org/exhibitions/creative-process-modern-japanese-printmaking>

**[S5]** The Metropolitan Museum of Art, “Itō Shinsui: *Before the Mirror*.” Collection note on Shinsui’s Watanabe collaboration and intentionally emphasized rubbing lines. <https://www.metmuseum.org/art/collection/search/908748>

**[S6]** Library of Congress, “The Floating World of Ukiyo-e: Overview.” Background on ukiyo-e’s collaborative artist/carver/printer/publisher workflow, useful context for the precursor tradition. <https://www.loc.gov/exhibits/ukiyo-e/intro.html>

### Reference-use note

The links above document research and point to collection pages. They do not grant a blanket right to reuse collection images. Check the exact record and rights statement for any contemplated use; the project’s default remains original art.

[S1]: https://www.loc.gov/loc/lcib/0704/cwaj.html "Library of Congress: On the Cutting Edge"
[S2]: https://www.loc.gov/exhibits/ukiyo-e/beyond.html "Library of Congress: Beyond Ukiyo-e"
[S3]: https://www.metmuseum.org/art/collection/search/39587 "The Met: Kawase Hasui, The Temple Zōjōji in Shiba"
[S4]: https://www.mfa.org/exhibitions/creative-process-modern-japanese-printmaking "Museum of Fine Arts, Boston: The Creative Process in Modern Japanese Printmaking"
[S5]: https://www.metmuseum.org/art/collection/search/908748 "The Met: Itō Shinsui, Before the Mirror"
[S6]: https://www.loc.gov/exhibits/ukiyo-e/intro.html "Library of Congress: The Floating World of Ukiyo-e"
