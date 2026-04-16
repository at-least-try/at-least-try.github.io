# Portfolio Blueprint — at-least-try

## 1) Brand Direction (Your Positioning)

**Identity:** University of Toronto Computer Science student building software that solves real-world friction.

**Core message:**
> I only build products I personally find valuable to use.

**Narrative anchor (origin story):**
Your jogging backpack moment is excellent and should appear in an “About” subsection called **The Spark**.

---

## 2) Site Information Architecture (Recommended Structure)

1. **Hero / Landing**
   - Matrix-style central bot avatar (interactive, cursor-responsive)
   - One-line mission statement
   - CTA buttons: `View Projects`, `Contact`, `Download Resume`
2. **The Spark (Story Block)**
   - Short narrative about the jogging backpack idea
   - Transition into your design philosophy: observe pain points → build useful software
3. **Featured Projects**
   - Focus on Ripple, Life Admin, Life OS, Rail-Map Maker, FM Companion
   - Each card: problem, solution, stack, status, links
4. **Build Philosophy**
   - “Useful over flashy” principle
   - Product thinking, systems thinking, long-term maintainability
5. **Skills**
   - Split into `Technical` and `Creative / Cross-Disciplinary`
6. **Ideas in Motion (R&D Lab)**
   - Financial OS concept
   - AI fashion companion concept
7. **Experience / Timeline**
   - Milestones, project progression, collaboration highlights
8. **Contact + Socials**
   - GitHub, LinkedIn, Email, optional calendar link
9. **Footer**
   - Lightweight, clean, with “Built with …” stack credits

---

## 3) Visual & Interaction System

### Style direction
- Dark, minimal, futuristic
- Accent palette suggestion:
  - Primary background: `#06080F`
  - Surface: `#0E1322`
  - Neon accent A: `#00E5FF`
  - Neon accent B: `#7C4DFF`
  - Signal accent: `#00FF85`
  - Text primary: `#E6ECFF`

### Animation concepts (your ideas + additional)
- Particle field behind hero bot
- Abstract 3D geometry orbiting the avatar
- Cursor-reactive bot “arms” with wave/glow pulse shaders
- Glitch-code ribbons occasionally passing behind headings
- Project cards with 3D tilt + depth shadow + magnetic hover
- Scroll reveal sequences with stagger and parallax layers
- Section transition “scanline sweep” (subtle)
- Skill chips that light up with hover trail
- Live command-line ticker for current focus/build status
- Optional Easter egg: `konami` or keyboard command to trigger “debug mode” visual overlay

### Motion guardrails
- Keep motion functional, not noisy
- Use reduced-motion accessibility fallback
- Cap simultaneous high-cost animations

---

## 4) Best Framework + Hosting Recommendation

## Recommended stack (best fit)
- **Framework:** Next.js (App Router) + TypeScript
- **Styling:** Tailwind CSS + CSS variables for theme tokens
- **3D:** React Three Fiber + drei
- **Animation:** GSAP + ScrollTrigger
- **Smooth scroll:** Lenis
- **UI animation micro-interactions:** Framer Motion (optional, selective)
- **Content:** MDX or JSON-driven content files
- **Deployment:** GitHub Pages via static export (or Vercel if you later want server features)

### Why this stack
- Handles complex animation cleanly
- Strong ecosystem for interactive portfolio sites
- Easy componentization for batched development
- GitHub-friendly deployment with static export

### GitHub Pages compatibility note
If using Next.js on GitHub Pages, configure static export:
- `output: 'export'`
- `images: { unoptimized: true }`
- proper `basePath`/`assetPrefix` for repo deployment if not using custom domain

---

## 5) Skill Taxonomy (Ready to Drop Into Site)

## Technical Skills
- **Languages (Proficient):** Python, JavaScript, Java, Swift, HTML, Bash
- **Languages (Developing):** C, SQL, Kotlin
- **Frameworks/Libraries:** React, Vue, Node.js, Pandas
- **Platforms/Tools:** Firebase, Docker
- **Current Focus Areas:** LLM applications, machine learning systems, databases

## Creative & Cross-Disciplinary Skills
- **Music Production:** DAW workflows, VST instruments
- **Graphic Design:** Photoshop, Illustrator, Affinity Designer, Penpot, Figma
- **Video & Film:** CapCut, social media content production
- **3D Modeling:** Blender
- **Photography:** Fujifilm XT-5 (hobbyist)
- **Finance/Markets:** 2 years of stock trading experience; personal finance and market analysis interest

---

## 6) Project Section Blueprint (Content Model)

Use this schema for every project card:
- Name
- One-line value proposition
- Problem
- Your solution
- Tech stack
- Current stage (% complete)
- Next milestone
- Links (repo/live/demo/case study)

### Featured project drafts

## Ripple
- **Value:** Event discovery with swipe-style filtering so users can quickly find relevant local events.
- **Problem:** It is hard to keep up with nearby events and fit them into a schedule.
- **Status:** ~90%, polishing + testing; demo app coming soon.
- **Highlight:** Potential University of Toronto official/club-fair collaboration.

## Life OS
- **Value:** Personal second-brain operating system for tasks, routines, projects, and knowledge.
- **Status:** Private, ongoing.

## Life Admin
- **Value:** Specialized life-admin software for recurring obligations (renewals, tax, medical bills, subscriptions).
- **Status:** ~20% early development.
- **Repo:** https://github.com/at-least-try/app/tree/main

## Rail-Map Maker
- **Value:** Free, open-source metro map creator.
- **Status:** ~30% early development.
- **Repo:** https://github.com/at-least-try?tab=repositories

## FM Companion
- **Value:** Companion app for Football Manager storytelling, tactical notes, transfers, and strategy tracking.
- **Status:** Planning stage.
- **Repo:** https://github.com/at-least-try/fm_companion

---

## 7) Hero Copy (Draft)

**Headline options:**
1. Building software for real-world friction.
2. I turn everyday frustrations into usable products.
3. Systems-minded developer designing tools that matter.

**Subheadline draft:**
Computer Science student at the University of Toronto, focused on building practical software with thoughtful design, interaction, and long-term value.

**CTA set:**
- View Projects
- See My Process
- Let’s Build Something Useful

---

## 8) Implementation in Batches (Execution Plan)

## Batch 1 — Foundation
- Next.js + TypeScript + Tailwind setup
- Layout shell, theme tokens, typography scale
- Static sections with placeholder content
- GitHub Actions deploy to GitHub Pages

## Batch 2 — Project System
- JSON/MDX project data model
- Reusable project cards + status tags + links
- Filter/sort by status and domain

## Batch 3 — Motion Layer
- Lenis smooth scrolling
- GSAP ScrollTrigger section reveals
- Card hover tilt / expand interactions

## Batch 4 — 3D Hero
- React Three Fiber bot/avatar
- Particle field + shader glow lines
- Cursor-tracking interactions

## Batch 5 — Polish & Performance
- Accessibility pass (reduced motion, contrast, keyboard nav)
- Performance budgets (LCP/CLS, animation throttling)
- SEO + OpenGraph + analytics

---

## 9) What Is Required for “High-End” 3D/Scroll Effects

1. A component-based framework (Next.js recommended)
2. A GPU-friendly 3D layer (R3F + optimized scene complexity)
3. A robust animation engine (GSAP)
4. Scroll orchestration and smoothing (ScrollTrigger + Lenis)
5. Asset pipeline discipline (compressed textures, lazy loading)
6. Motion accessibility strategy (`prefers-reduced-motion`)
7. Performance testing on mid-tier laptop/mobile devices

---

## 10) Immediate Next Decisions You Should Make

1. Pick one of these two stack directions:
   - **A (Recommended):** Next.js + R3F + GSAP + Lenis + Tailwind
   - **B (Simpler):** Vite + React + Framer Motion + Three.js (manual routing/deploy tuning)
2. Choose hero avatar format for MVP:
   - 2D animated SVG bot first
   - or full 3D bot from day one
3. Decide content depth:
   - concise cards only
   - or full case-study pages per project
4. Confirm primary accent colors and typography

Once you choose these, implementation can begin in code with Batch 1.
