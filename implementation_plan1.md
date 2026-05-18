# Design Brief: Zakia Azharrifa Kn — Portfolio

**Register:** Brand. **Surface:** Single-page portfolio, the design IS the credential.

---

## Visual Direction Probes

Three directions were explored. Pick the one closest to your instinct, or tell me what to mix.

````carousel
![Probe A: Amber Architectural](/home/haydar/.gemini/antigravity/brain/cfae5e40-213e-453b-96de-2b243b8e18a4/probe_amber_architectural_1779081805275.png)
<!-- slide -->
![Probe B: Dark Terracotta Studio](/home/haydar/.gemini/antigravity/brain/cfae5e40-213e-453b-96de-2b243b8e18a4/probe_dark_terracotta_1779081934350.png)
<!-- slide -->
![Probe C: Geometric Green Split](/home/haydar/.gemini/antigravity/brain/cfae5e40-213e-453b-96de-2b243b8e18a4/probe_geometric_split_1779081955553.png)
````

| | Probe A | Probe B | Probe C |
|---|---|---|---|
| **Theme** | Light, warm sand, amber ochre | Dark, near-black, cream + terracotta | Light sand + forest green split |
| **Mood** | Confident, architectural, clean | Sculptural, dramatic, creative studio | Geometric, structured, award-winning |
| **Font voice** | Compressed bold sans | Large italic serif | Condensed black sans |
| **Risk level** | Medium | High | Medium |

---

## 1. Feature Summary

A single-page portfolio for **Zakia Azharrifa Kn**, a UI/UX Designer and Information Systems student. Audience: prospective clients, recruiters, hiring managers. The page must establish credibility, showcase 6 real design projects, and communicate visual taste in the first 10 seconds.

## 2. Primary User Action

Explore a project ("Demo Project" link to Figma prototype) or land on the contact section to reach out.

## 3. Design Direction (Pending Your Probe Preference)

**My recommendation: Probe B (Dark Terracotta) — modified.**

Rationale: A UI/UX designer's portfolio is itself a proof of taste. The dark studio register is uncommon for Indonesian student portfolios (which trend light-pink-pastel), immediately distinguishing Zakia. The editorial serif creates typographic confidence. The terracotta accent reads warm and creative, not cold-tech or generic-SaaS.

Modifications from probe B:
- Reduce the italic serif usage to headings only (not body). Body stays in a clean humanist sans.
- Replace the "boutique London studio" tone with something that feels more personal and direct.
- The nav bar needs real structure (not all-caps sans only).

> [!IMPORTANT]
> **You need to confirm one of the three directions (A, B, or C) before I build anything.** Tell me which feels right, or what to adjust.

**Color strategy:** Committed (Probe B) or Restrained with a focused accent (Probe A).

**Scene sentence:** A recruiter at a tech company opens the portfolio at midday in a shared office — they have 8 tabs open and they're looking for the tab that makes them stop scrolling. The dark-warm surface makes this tab look different from the other 7.

**Named anchors:** Pentagram portfolio, Are.na studio pages, Savvas Laz portfolio.

**Fonts (direction-dependent):**
- Probe A/C: [Bebas Neue](https://fonts.google.com/specimen/Bebas+Neue) or **Barlow Condensed** (Black) for display + **Nunito Sans** for body (humanist, warm, readable)
- Probe B: **Bodoni Moda** (italic display) + **Nunito Sans** (body)

> [!NOTE]
> Geist (current layout) stays removed. All three directions benefit from new font choices.

---

## 4. Scope

- **Fidelity:** Production-ready
- **Breadth:** Full single-page scroll (all 9 sections from techspec.md)
- **Interactivity:** Smooth scroll, scroll-triggered reveals, hover states on project cards
- **Time intent:** Ship-quality

---

## 5. Layout Strategy

**Section-by-section spatial approach:**

| Section | Layout |
|---|---|
| **Nav** | Fixed top, transparent → solid on scroll. Logo left, links right. |
| **Hero** | Two-column: name/title/bio left, portrait right. Name in massive display. |
| **Specialization** | Not a card grid. Two large items with strong typographic number labels (01, 02) and short descriptions. Full-width strip. |
| **Projects** | Asymmetric list, not identical card grid. Alternating: image-left/text-right, text-left/image-right. Each project gets different vertical breathing room. |
| **About** | Single-column editorial read, photos flow alongside as a gallery strip. |
| **Expertise** | Two-column table, semantic, no icon-per-point visual clutter. |
| **Software** | Inline wordmark row, not a badge grid. |
| **Certifications** | Minimal list, year + issuer + title. No badges. |
| **Contact** | Large email as headline, social links below. |

---

## 6. Key States

- **Default:** All sections visible in order
- **Loading:** No skeleton states needed (static page)
- **Scroll-triggered reveals:** Elements enter from slightly below (opacity + translate), staggered
- **Nav on scroll:** Background becomes solid/slightly opaque
- **Project card hover:** Subtle lift effect (transform only, not layout)
- **CTA button hover:** Color fill slides in from left

---

## 7. Interaction Model

- Smooth scroll on all anchor links
- Scroll-triggered entrance animations on each section (IntersectionObserver)
- Project cards: hover reveals a subtle overlay with "View Project →"
- Contact email: hover shows underline animation

---

## 8. Content Requirements

**All real content from techspec.md is used.** Key copy:

- **Hero bio:** "I design interfaces that are not only visually appealing but also comfortable and easy to use. By combining user research, modern aesthetics, and meaningful interactions, I help build products that are memorable and purposeful."
- **6 projects:** Cookie, SCM Website, Wireframe Santry Cyber, Website Kamal Group, Trains Ticket, Gonyam
- **Expertise:** UI Design (Wireframing, Prototyping, Visual Design, Responsive Design) + UX Methods (User Research, User Persona, Journey Mapping, HCD)
- **Software:** Figma, Adobe Photoshop, Adobe Illustrator, Canva
- **Contact:** zakiaazharrifakn@gmail.com, LinkedIn, GitHub

**Images needed:**
- Portrait photo: placeholder circle (user must provide real photo later)
- Project previews: styled mockup placeholders using colored panels + text (no stock photos for UX projects; mock device frames as CSS)
- About section: 3 photo placeholders

---

## 9. Open Questions for You

> [!IMPORTANT]
> **Pick a direction.** Which of the 3 probes resonates? Or tell me: "Probe B but lighter" / "Probe A but darker" / "mix A and C".

Everything else I'll decide and run with.

---

## Proposed Changes

### [MODIFY] globals.css
Full design token system: OKLCH palette, typography scale, spacing rhythm, motion tokens.

### [MODIFY] layout.tsx
New font imports (direction-dependent). Updated metadata (title, description, og tags).

### [MODIFY] page.tsx → becomes full portfolio page
All 9 sections, scroll animations via IntersectionObserver, semantic HTML throughout.

---

## Verification

- Run `npm run dev`, open in browser, screenshot each section
- Check mobile layout at 390px
- Confirm all 6 project links resolve (Figma URLs from techspec)
