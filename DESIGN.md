---
name: Feira Ser, Saber e Empreender 2025
description: Retrospective landing page of the Colégio Estadual Cívico-Militar Antonio Diniz Pereira fair, built on the geometry of the Paraná state flag.
colors:
  verde: "#006B38"
  verde-sinal: "#00A651"
  verde-tinta: "#D5EBDD"
  azul: "#0B4EA2"
  azul-tinta: "#D4E2F5"
  marinho: "#0A2240"
  cinza-azul: "#4A5B73"
  nevoa: "#EEF3F9"
  branco: "#FFFFFF"
  amarelo: "#F5C400"
  amarelo-escuro: "#DDB000"
typography:
  display:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "clamp(2.5rem, 1.1rem + 5.6vw, 6rem)"
    fontWeight: 900
    lineHeight: 0.95
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 118"
  headline:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "clamp(2.1rem, 1.3rem + 3.4vw, 4.2rem)"
    fontWeight: 850
    lineHeight: 1.02
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 112"
  title:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "clamp(1.35rem, 1.1rem + 1vw, 1.9rem)"
    fontWeight: 750
    lineHeight: 1.02
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 105"
  body:
    fontFamily: "Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "clamp(1.02rem, .97rem + .25vw, 1.15rem)"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 800
    lineHeight: 1.15
    fontVariation: "'wdth' 110"
rounded:
  media: "4px"
  action: "6px"
  sphere: "50%"
spacing:
  gutter: "clamp(16px, 5vw, 80px)"
  section: "clamp(56px, 8vw, 112px)"
  container: "1240px"
  corte: "8.75vw"
components:
  button-primary:
    backgroundColor: "{colors.amarelo}"
    textColor: "{colors.marinho}"
    typography: "{typography.label}"
    rounded: "{rounded.action}"
    padding: "0 30px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.amarelo-escuro}"
    textColor: "{colors.marinho}"
  viewer-control:
    backgroundColor: "{colors.branco}"
    textColor: "{colors.marinho}"
    rounded: "{rounded.sphere}"
    size: "52px"
  viewer-control-hover:
    backgroundColor: "{colors.amarelo}"
  nav-link:
    textColor: "{colors.branco}"
    padding: "6px 0"
  media-tile:
    backgroundColor: "{colors.nevoa}"
    rounded: "{rounded.media}"
  play-badge:
    backgroundColor: "{colors.branco}"
    textColor: "{colors.marinho}"
    rounded: "{rounded.sphere}"
    size: "44px"
  footer:
    backgroundColor: "{colors.marinho}"
    textColor: "{colors.azul-tinta}"
---

# Design System: Feira Ser, Saber e Empreender 2025

## Overview

**Creative North Star: "A Bandeira do Paraná"**

The page is drawn with the state flag every family in Paraná already knows: a green field, a white band rising from lower left to upper right, and a blue sphere carrying the Cruzeiro do Sul. The flag is not decoration placed on a template; it is the layout. Section edges, image crops and dividers all borrow the band's single rise, and full-bleed fields of green and blue alternate with plain white reading ground as the visitor scrolls.

Colour is flat and civic: no gradients, no glass, no textured fills. Display type is a wide, heavy grotesque (Archivo stretched past 100% width) that reads like painted signage on a school wall; running text is Atkinson Hyperlegible so families on phones read the students' texts without effort. Yellow is the only warm note and it belongs to action and focus alone.

Motion has one entrance and one reveal. On load the white band wipes in along its length, the sphere settles with a short rotation, and the five stars light one after another; later, the gallery develops once from blurred and desaturated to full colour as it enters the viewport. Everything else is still. Reduced-motion users get the final state immediately.

**Key Characteristics:**
- Full-bleed flat colour fields (green, blue, navy) cut by one diagonal angle.
- Wide, heavy Archivo display over hyperlegible body text.
- Yellow rationed to actions, focus and selection.
- Circles only where the flag has them: the sphere, the crest, round controls.
- One load choreography, one gallery reveal; nothing loops except muted gallery video while visible.

## Colors

Flat flag colours on white: deep green and sphere blue carry whole sections, navy carries text, yellow carries action.

### Primary
- **Campo Verde (deep flag green)** (`verde`): the ground of the header, the first viewport, the green-field student story and the Instagram band; also the colour of section-level emphasis words on white ("Feira", the three ideas, story headings). Darkened from the flag green so white text on it passes contrast comfortably.
- **Verde Sinal (flag green)** (`verde-sinal`): signal-only green for thin rules, currently the leaning dividers between the three ideas. Never a text or field colour.

### Secondary
- **Azul da Esfera (sphere blue)** (`azul`): the sphere behind the crest and the full-bleed "two days" section. One blue field per page beyond the sphere itself.

### Tertiary
- **Amarelo de Ação (action yellow)** (`amarelo`): primary buttons, focus outline, text selection, skip link, viewer control hover. **Amarelo Pressionado** (`amarelo-escuro`): hover state of the primary button only.

### Neutral
- **Branco da Faixa (band white)** (`branco`): the band, the page's reading ground, stars, round viewer controls.
- **Marinho (uniform navy)** (`marinho`): primary text on white and yellow, the footer field, the photo viewer backdrop at 94% opacity.
- **Cinza-azul (slate)** (`cinza-azul`): secondary text on white: intros, story paragraphs, idea definitions, captions.
- **Tinta Verde (green tint)** (`verde-tinta`): secondary text on green fields.
- **Tinta Azul (blue tint)** (`azul-tinta`): secondary text on blue and navy fields, footer body.
- **Névoa (mist)** (`nevoa`): placeholder ground behind images and video before they load; scrollbar track.

### Named Rules
**The Yellow Is Action Rule.** Yellow appears only on something the visitor can press or is currently focusing or selecting. Never on headings, fields, badges or decoration.

**The Tint Pairs Rule.** Secondary text takes the tint of the field it sits on: slate on white, green tint on green, blue tint on blue and navy. Never grey on a coloured field.

**The Flat Flag Rule.** Every field is one solid flag colour. No gradients, no glass, no overlaid textures.

## Typography

**Display Font:** Archivo (with Arial Narrow, sans-serif), variable width 62 to 125, weights 500 to 900
**Body Font:** Atkinson Hyperlegible (with system-ui, sans-serif), 400 and 700

**Character:** A wide, heavy civic grotesque set tight, like a painted wall sign, over a body face designed for legibility, so headlines feel official and paragraphs stay easy for every reader.

### Hierarchy
- **Display** (900, width 118%, clamp 2.5rem to 6rem, line-height 0.95): the fair name on the band only. Its companion line "Feira" sits above at 750, width 112%, clamp 1.6rem to 3rem, in Campo Verde.
- **Headline** (850, width 112%, clamp 2.1rem to 4.2rem, line-height 1.02): every section heading. Larger display moments of the same family: the three ideas (900, up to 3.4rem), day numerals (900, width 120%, up to 6rem, tabular figures), the Instagram handle (900, width 116%, up to 5rem).
- **Title** (750, width 105%, clamp 1.35rem to 1.9rem): sub-headings such as the day names; story headings step up to 850 and up to 2.6rem.
- **Body** (400, clamp 1.02rem to 1.15rem, line-height 1.65): all running text, capped at 62ch for stories and intros, 52ch for the lead.
- **Label** (800, width 110%, 0.9rem to 1.08rem): button text, footer term labels, the school name in the header. Sentence case, never uppercase.

### Named Rules
**The Wide Voice Rule.** Display roles always use Archivo stretched to 104% or wider with negative tracking (-0.015em to -0.03em). Narrowing to 100% is allowed only where a long single word would overflow a phone screen.

**The Balanced Heading Rule.** Headings use balanced wrapping; long closing statements use pretty wrapping.

## Layout

A single column of full-bleed bands. Content inside each band is held to a 1240px measure and centred, with a fluid gutter (16px to 80px) and vertical section padding of 56px to 112px.

The diagonal cut (`corte`, 8.75vw, the rise of a 5deg angle across the full width) is the page's structural seam. Coloured fields (green story, blue days, green Instagram) are clipped as parallelograms that rise to the right at top and bottom, and add one `corte` of padding to keep content clear of the slope. The first viewport ends with only its bottom edge cut.

The first viewport is a two-column grid: band text spanning the width, the sphere pinned in the right column overlapping the band, the lead and action below on green. At 720px and below the sphere moves above the band, right-aligned, overlapping it by 38% of its size, and the action button grows to full width.

Content grids are asymmetric: the three ideas use 1fr 1fr 1.4fr; stories use 5fr text to 7fr, with a wide 2:1 image above; the gallery is a four-column grid whose first item spans 2 by 2. At 900px stories, ideas and the gallery collapse (gallery to two columns); at 360px the gallery becomes one column.

## Elevation & Depth

The system is flat. Depth comes from overlap and colour fields: the sphere sits on top of the band, coloured fields slide under white at a slant, and the viewer opens over a near-opaque navy backdrop. The one shadow belongs to the primary button, a soft navy drop that lifts with it on hover.

### Shadow Vocabulary
- **Action lift** (`box-shadow: 0 6px 16px -6px rgba(10, 34, 64, .45)`, hover `0 12px 22px -8px rgba(10, 34, 64, .5)`): primary button only.
- **Viewer backdrop** (`rgba(10, 34, 64, .94)`): the photo and video viewer.

### Named Rules
**The Only Lift Rule.** Only the yellow action button casts a shadow. Images, tiles and fields never do.

## Shapes

Three shape families, all taken from the flag. The parallelogram: every coloured field and every story image is clipped along the band's rise (story images rise 17.5% across their width; in the green story the cut moves to the bottom edge, inverted, so the image reads as part of the field). The circle: the sphere, the crest, the round viewer controls and the play badge. The near-square: gallery tiles and the viewer media at a barely softened 4px, and the yellow button at 6px.

Dividers lean instead of standing upright: vertical rules between the three ideas and the two days are skewed, and when the layout stacks they become horizontal rules tilted to the band's 5deg.

## Components

### Buttons
Confident and few: there is one kind of action button and it is always yellow.
- **Shape:** gently softened rectangle (6px), 52px tall, 30px side padding.
- **Primary:** Amarelo de Ação ground, Marinho label in Archivo 800 at width 110%.
- **Hover / Focus:** hover darkens to Amarelo Pressionado and lifts 2px with a deeper shadow over 0.3s on the page's single ease-out curve; active returns to rest. Focus is the global 3px yellow outline at 3px offset.
- **Viewer controls:** 52px white circles with 2.4px navy stroke icons (close, previous, next), turning yellow on hover. On phones previous and next move to the bottom centre.

### Navigation
- **Style:** bold body-face links (700, 0.98rem) in white on the green header, crest and two-line school name on the left.
- **Hover:** a 2px white bottom border appears; no colour change.
- **Mobile:** links wrap to a full-width row under the crest at 0.9rem; below 360px the school-type line hides.

### Gallery Tiles
- **Corner Style:** 4px.
- **Background:** Névoa while loading; media fills by cover crop at 3:4 (the feature tile fills its 2 by 2 cell, 4:3 when stacked).
- **Behaviour:** zoom-in cursor, media scales to 1.04 on hover over 0.6s. Video tiles carry a white 44px round play badge at the lower left and play muted only while half visible. A body-face caption in slate sits below each tile.
- **Reveal:** once, as the gallery enters, tiles fade from blur and desaturation up into place with a short stagger.

### Signature: The Flag Hero
The green field, a white band skewed 5deg spanning past both viewport edges, the fair name in navy on the band, and the 26vw (190px to 390px) blue sphere holding the crest at 50% with five white stars in Cruzeiro do Sul positions. Entrance: band wipes in (1s), sphere scales and unrotates (1.1s), title slides in (0.9s), stars light at 0.1s intervals from 0.9s.

### Signature: Story Plates
Each student text is an article with a wide image clipped along the band's rise above a 5:7 heading-and-text grid. One story in the sequence becomes a full-bleed green field with its image cut on the opposite edge, white heading and green-tint text.

### Photo Viewer
A full-screen dialog over 94% navy, media capped to the viewport less 180px with 4px corners, caption in blue tint. Arrow keys and horizontal swipe change items; clicking the backdrop closes it.

## Do's and Don'ts

### Do:
- **Do** cut every new coloured field as a parallelogram rising to the right by one `corte` (8.75vw), and pad it by the same amount.
- **Do** keep Archivo display roles at 104% width or wider, weight 650 to 900, with negative tracking.
- **Do** pair secondary text with its field's tint: slate on white, green tint on green, blue tint on blue and navy.
- **Do** use the single ease-out curve `cubic-bezier(.16, 1, .3, 1)` for every transition and entrance.
- **Do** give every image a Névoa placeholder ground and real width and height attributes.
- **Do** honour reduced motion by showing final states with no animation.

### Don't:
- **Don't** use yellow for anything that is not an action, focus or selection.
- **Don't** introduce gradients, glass, blur panels or textured fills on fields.
- **Don't** add a second diagonal angle; slopes come from the 5deg band rise (the leaning idea and day rules are its tripled skew).
- **Don't** add shadows to images, tiles or fields; the yellow button owns the only lift.
- **Don't** set labels or headings in uppercase.
- **Don't** split the hero into copy beside an image or line up a row of equal cards.
