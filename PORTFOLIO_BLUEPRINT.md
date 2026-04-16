# Portfolio Website Blueprint (GitHub-hosted, animation-first)

## 1) Recommended stack options (pick one)

### Option A — **Next.js + React Three Fiber + GSAP** (best balance)
- **Framework**: Next.js 15 (App Router)
- **3D**: Three.js via React Three Fiber + Drei
- **Scroll/hover motion**: GSAP + ScrollTrigger + Framer Motion
- **Smooth scroll**: Lenis
- **Styling**: Tailwind CSS + CSS variables
- **Content**: MDX project entries (easy to maintain)
- **Hosting**: GitHub Pages (static export) or Vercel
- **Why choose**: Most flexible for your “matrix bot + interactive UI” vision while still maintainable.

### Option B — **Astro + React islands + Three.js** (performance-first)
- **Framework**: Astro
- **3D**: Three.js / R3F in selected interactive islands
- **Motion**: GSAP + ScrollTrigger
- **Smooth scroll**: Lenis
- **Hosting**: GitHub Pages
- **Why choose**: Very fast content pages, only hydrates interactive parts.

### Option C — **Vue (Nuxt) + TresJS + GSAP** (if you prefer Vue)
- **Framework**: Nuxt 3
- **3D**: TresJS (Three for Vue)
- **Motion**: GSAP/ScrollTrigger
- **Hosting**: GitHub Pages static build
- **Why choose**: Great if your strongest preference is Vue ecosystem.

## 2) What is required for your 3D + scroll vision

### Core requirements
1. **WebGL layer** for hero/avatar (Three.js scene).
2. **Animation orchestration layer** (GSAP timelines + ScrollTrigger).
3. **Smooth scroll engine** (Lenis) integrated with ScrollTrigger updates.
4. **Performance budget**:
   - Target 60fps on desktop, graceful fallback on mobile.
   - Use low-poly models + compressed textures.
   - Respect reduced-motion users.
5. **Content model** for projects:
   - Markdown/JSON entries with status, links, problem, solution, stack.
6. **Deployment pipeline**:
   - GitHub Actions build and deploy to GitHub Pages.

### Best host for this project
- **Best overall**: **Vercel** (easier DX, better previews, easiest for Next.js).
- **If you want fully GitHub-native**: **GitHub Pages** (works great with static export).
- **Recommendation for your ask**: Start on **GitHub Pages** now, migrate to Vercel later only if you need server features.

## 3) Site architecture (professional + storytelling)

### Global layout
1. **Hero / Command Center**
   - Matrix-like bot avatar in center.
   - Glitch code particles + subtle scan lines.
   - Cursor-reactive “code arms” (shader ribbons/line trails).
   - CTA: “Explore Projects”, “View GitHub”, “Read My Story”.

2. **Origin Story (Why I Build)**
   - Your backpack-running moment as short narrative timeline.
   - Core value statement: “I build tools I personally find valuable.”

3. **Featured Projects (case-study cards)**
   - 3–6 spotlight cards with 3D tilt/expand.
   - Each opens a project detail panel/page with:
     - Problem
     - Approach
     - Tech
     - Current status
     - Next milestone

4. **Project Archive**
   - Filter by status: Planning / In Progress / Testing / Shipped.
   - Filter by domain: Productivity / Events / Finance / Fun tools.

5. **Skills Matrix**
   - Two grouped columns:
     - **Tech (Programming)**
     - **Creative + Other Disciplines**
   - Show “Proficient” vs “Developing” badges.

6. **Vision Lab (Ideas in motion)**
   - Cards for future concepts (finance companion, fashion AI companion).
   - “Open for collaboration” tag.

7. **Contact / Links**
   - GitHub, LinkedIn, email, resume.
   - “Currently open to internships/collabs”.

## 4) Your skills section (clean split)

### Tech — Proficient
- Python, JavaScript, Java, Swift, HTML/CSS, Bash
- React, Vue, Node.js, Firebase, Pandas

### Tech — Developing
- C, SQL, Kotlin
- Docker, LLM app engineering, Machine Learning systems, database architecture

### Creative + Other
- **Music Production**: DAWs, VST instruments
- **Graphic Design**: Photoshop, Illustrator, Affinity Designer, Penpot/Figma
- **Video/Film**: CapCut, short-form content production
- **3D Modeling**: Blender
- **Photography**: Fujifilm XT-5 hobbyist workflow
- **Finance**: 2 years of stock trading + practical market literacy

## 5) Project copy structure template (use this format for each project)

For each project card/detail page:
- **One-liner** (what it is)
- **Problem** (real-life pain point)
- **Why I built it** (personal motivation)
- **Solution** (core mechanics)
- **Tech stack**
- **Status + timeline**
- **Links** (repo/demo/waitlist)

### Example status language for your current projects
- **Ripple** — Under development (~90%), final polish + testing prep, partnership exploration with UofT.
- **Life OS** — Private long-term system for integrated life management.
- **Life Admin** — Early development (~20%); admin deadlines manager.
- **Rail-Map Maker** — Open-source prototype (~30%).
- **FM Companion** — Planning stage.

## 6) Animation idea bank (including your vision + more)

### Must-have ideas (your picks)
- Particle field / abstract 3D object in hero
- Cursor-reactive avatar
- 3D project cards on hover
- Scroll-triggered section reveals
- Lenis smooth inertia scrolling
- Dark minimal theme with neon accent pops

### Additional high-impact ideas
1. **Terminal boot sequence preloader** (2–3 seconds, skippable).
2. **Dynamic section nav indicator** (“System Map” at side).
3. **Magnetic buttons** for CTA interactions.
4. **Code rain depth layers** (foreground/background parallax).
5. **Project card “inspect mode”**: hold click to open quick metrics overlay.
6. **Ambient reactive glow** that follows pointer velocity.
7. **Micro-interaction sounds toggle** (off by default).
8. **Theme intensity slider** (low / medium / full effects).
9. **“Reduced motion” auto-detection** with elegant static fallback.
10. **Easter egg command palette** (`Ctrl/Cmd + K`) with commands like `open ripple`.

## 7) Visual direction

- **Palette**: charcoal black base + cyan/violet accents + occasional magenta signals.
- **Typography**:
  - Display: Orbitron / Space Grotesk
  - Body: Inter / Syne
  - Code accents: JetBrains Mono
- **Style keywords**: minimal, futuristic, intentional, high signal-to-noise.
- Keep whitespace generous to stay professional despite heavy effects.

## 8) Avatar strategy (no face photo yet)

- Start with a **synthetic bot identity** (SVG + shader effects).
- Later options:
  1. Photo-to-illustration static avatar
  2. Stylized 3D bust (Blender)
  3. Real-time Live2D-style reactive character
- Keep avatar in its own component for easy future replacement.

## 9) Implementation in batches

### Batch 1 — Foundation
- Framework setup, dark theme, typography, layout sections
- Projects JSON/MDX data model
- Basic responsive design + accessibility pass

### Batch 2 — Motion baseline
- GSAP reveals + ScrollTrigger
- Lenis smooth scrolling
- 3D hover cards + button micro-interactions

### Batch 3 — Hero command center
- Matrix bot + code arms + particle system
- Cursor-reactive behavior
- Performance optimization + fallback modes

### Batch 4 — Project depth
- Detail pages, filters, tags, progress statuses
- GitHub stats/API badges (optional)

### Batch 5 — Polish + launch
- SEO, Open Graph, analytics, Lighthouse optimization
- Final content pass and deployment automation

## 10) Suggested next decision (before coding)

1. Choose stack: **Option A / B / C**.
2. Choose hosting start: **GitHub Pages** (recommended for now).
3. Confirm voice/persona copy tone: **minimal professional** vs **bold futuristic**.
4. Confirm first 3 featured projects: likely Ripple, Life Admin, Rail-Map Maker.

---

If you want, this blueprint can be converted directly into:
- site copy draft,
- folder structure,
- and a development checklist for your first build sprint.
