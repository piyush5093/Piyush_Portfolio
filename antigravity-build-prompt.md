# MASTER BUILD PROMPT — Piyush Patil Portfolio (Advanced / Premium Tier)

> **How to use this file:**
> 1. Open Cursor → create a new empty project folder → open it in Cursor.
> 2. Drag in this file AND `content.md` (your content file) into the chat as context.
> 3. Paste the prompt in the "THE PROMPT" section below into Cursor's chat as your first message.
> 4. Build in phases as instructed at the bottom — don't ask for everything in one shot.

---

## THE PROMPT (paste this into Cursor)

```
You are building a premium, advanced developer portfolio website for a full-stack developer. This needs to look like a $5000 professional product — not a template, not a generic AI-generated site. Read content.md fully before writing any code — it contains all real content (bio, projects, experience, skills, education, links). Do not invent or hallucinate any content, links, or numbers that are not in content.md.

═══════════════════════════════════════
TECH STACK
═══════════════════════════════════════
- React 18 + Vite
- Tailwind CSS (utility-first, no inline styles except for dynamic values)
- Framer Motion for all animations and transitions
- Lucide React for icons
- React Router not needed — this is a single-page scrolling site with anchor navigation
- Use a clean component structure: separate files per section (Hero.jsx, About.jsx, Skills.jsx, Experience.jsx, Projects.jsx, Certifications.jsx, Contact.jsx, etc.) inside src/components/

═══════════════════════════════════════
DESIGN DIRECTION (read carefully — this defines the whole aesthetic)
═══════════════════════════════════════
Build this in the "premium dark SaaS portfolio" style — think Linear, Vercel, Stripe, and top Awwwards-featured developer portfolios. Specifically:

1. **Dark mode as the default and primary theme** (not just a toggle — design FOR dark first).
   - Background: deep near-black navy (#0a0a0f or #0d0d14), NOT pure black (#000).
   - Surface/card backgrounds: slightly lighter (#13131a or #16161f) for layering.
   - One accent color used consistently throughout (pick a vivid but tasteful one — electric blue/indigo #6366f1, or emerald/mint #34d399, or violet #8b5cf6). Use it for: links, buttons, glowing highlights, active states, gradient accents. Do not use more than one accent hue family.
   - Text: off-white (#f5f5f7) for headings, muted gray (#a1a1aa) for body text — never pure white on pure black (too harsh).

2. **Bento grid layout for the Skills, Stats, and "About" areas.**
   - Use a CSS grid of asymmetric cards (some wide, some tall, some small squares) — like Apple's product pages or Linear's homepage.
   - Each bento cell has its own subtle background, rounded corners (16-24px radius), and a soft 1px border (rgba white at low opacity).
   - Example bento cells: "350+ DSA Problems solved" as a big number card, a skills cloud card, a "currently open to SDE roles" status card, a small GitHub stats card, etc.

3. **Glassmorphism — used sparingly and functionally, not everywhere.**
   - Apply frosted-glass effect (backdrop-blur + semi-transparent background + thin light border) ONLY to: the sticky navbar, and modal/lightbox overlays if you add a project detail view.
   - Do NOT apply heavy glass effects to every card — that's outdated and hurts readability. Use it as an accent, not a foundation.

4. **Typography**
   - Use a modern variable sans-serif: "Inter", "Geist", or "Satoshi" (load from Google Fonts or system fallback if unavailable).
   - Large, confident hero heading (clamp(2.5rem, 6vw, 5rem)).
   - Generous line-height and letter-spacing on headings (slightly tight tracking on big text, like -0.02em).
   - Use a secondary monospace font (like "JetBrains Mono" or "Fira Code") ONLY for: tech stack badges, code snippets, and small label text (e.g. "AVAILABLE FOR HIRE") — this signals "developer" subtly without being kitschy.

5. **Micro-animations and motion (the "feels alive" layer)**
   - Hero section: staggered fade-up entrance animation for heading, subtext, and CTA buttons on page load (Framer Motion `staggerChildren`).
   - Scroll-triggered reveals: every section fades + slides up slightly into view as the user scrolls (use Framer Motion's `whileInView`, NOT a heavy scroll library — keep it light).
   - Project cards: on hover, lift slightly (translateY -4px to -8px) with an enhanced shadow/glow in the accent color, and scale the screenshot image slightly (scale 1.03) inside its container with overflow hidden.
   - Buttons: on hover, subtle scale (1.02-1.05) and a soft glow using the accent color's box-shadow.
   - Skill badges: subtle hover lift + color shift.
   - A subtle animated gradient blob or aurora effect drifting slowly in the hero background (CSS only, low opacity, behind the content, NOT distracting — performance-safe, no heavy WebGL/Three.js needed).
   - Keep ALL animations fast and subtle (200-400ms transitions, easing like easeOut). Nothing should feel slow or laggy. No animation should block the user from reading content quickly.

6. **Layout & spacing**
   - Generous whitespace/negative space between sections — don't cram.
   - Max content width ~1280px, centered, with responsive padding.
   - Each major section gets clear visual separation (subtle divider, background shift, or just spacing — your call, keep it tasteful).

7. **Navigation**
   - Sticky glassmorphic navbar at the top with smooth-scroll anchor links to each section (Home, About, Skills, Experience, Projects, Certifications, Contact).
   - Active section should highlight in the navbar as the user scrolls (scroll-spy behavior).
   - Mobile: collapse into a clean hamburger menu with a slide-in or fade-in panel.

8. **Resume download button** — prominent button in the Hero/Nav that lets visitors download the resume PDF directly (placeholder link is fine, I'll wire up the real file).

═══════════════════════════════════════
SECTION-BY-SECTION BUILD SPEC
═══════════════════════════════════════

### 1. HERO
- Full viewport height (or close to it).
- Greeting label (small, mono font, accent color) — e.g. "👋 AVAILABLE FOR SDE ROLES"
- Large heading: name + role, with the role or a key word in the accent color or gradient text.
- 2-3 line intro paragraph (from content.md bio).
- Two CTA buttons: "View Projects" (primary, filled, accent color) and "Download Resume" (secondary, outlined/ghost style).
- Social icon row: GitHub, LinkedIn, LeetCode, Email — icon-only buttons with hover glow.
- Profile photo: place it in a rounded/blob-shaped container (not a plain square), maybe with a subtle glowing ring or gradient border behind it.
- Subtle animated background (aurora/gradient blob, as described above).
- Scroll-down indicator at the bottom (small animated chevron or mouse-scroll icon).

### 2. ABOUT
- Short narrative version of the bio, slightly expanded from the one-liner.
- Pair with a bento-style stats grid: CGPA, DSA problems solved, years of relevant experience/internships, number of shipped projects — pull exact numbers from content.md, do not estimate.

### 3. SKILLS
- Bento grid or categorized pill/badge layout grouped exactly as in content.md (Languages, Frontend, Backend, Databases, AI/GenAI, Core CS, Tools).
- Each category as its own card with a relevant icon (use Lucide icons — e.g. a database icon for Databases, a brain/sparkles icon for AI/GenAI).
- Skill badges inside each card with subtle hover interaction.

### 4. EXPERIENCE
- Vertical timeline layout (a vertical line with connector dots, internship cards branching off it).
- Each entry: company name, role, dates, tech stack as small badges, and bullet points — exact content from content.md, do not rewrite the achievements.
- Animate each timeline entry to fade in as it scrolls into view, in sequence.

### 5. PROJECTS (the most important section — spend the most design effort here)
- Section intro: short header like "Featured Work" or "Things I've Built."
- **Featured projects** (CodeVerse, FlowSync, AlgoAI, Codeverse-Adventure): large cards, ideally 2 per row on desktop, full width on mobile. Each card includes:
  - Project screenshot/image at the top (rounded corners, subtle border, scales slightly on hover)
  - Project title
  - 2-3 sentence description (use the "What it does" text from content.md)
  - 3-4 key highlight bullets OR just the top 2-3 most impressive ones if space is tight
  - Tech stack as small pill badges (mono font, subtle background)
  - Two buttons: "Live Demo" (primary, opens in new tab) and "GitHub" (secondary, with GitHub icon, opens in new tab)
  - If a project is on Render free tier (CodeMeet, MediSlot), add a tiny note/badge near the Live Demo button: "⏳ may take ~20s to wake up" — styled subtly, not alarming.
- **Secondary projects** (CodeMeet, MediSlot, Thumbster, ChatInsider): smaller cards in a 3-4 column bento-style grid below the featured ones. Each still gets: title, 1-2 line description, tech badges, and GitHub + Demo buttons (or GitHub + "View Screenshots" for ChatInsider, which has no live demo — see content.md note).
- Use a filter/tag system if it doesn't overcomplicate things (optional — only add if it can be done cleanly): tabs like "All / AI Projects / Full-Stack / Tools" that filter the grid with a smooth animation.

### 6. CERTIFICATIONS & ACHIEVEMENTS
- Compact bento or horizontal scroll-card layout listing each certification with an icon (award/badge icon) and issuing platform.
- Include the "350+ DSA problems solved" stat prominently here too (or just reference it, since it's already in the About bento).

### 7. EDUCATION
- Simple clean timeline or stacked card layout: degree, institution, score, years — exact data from content.md table.

### 8. CONTACT / FOOTER
- Strong closing CTA: "Let's build something" or similar — heading + short line inviting outreach.
- Email displayed clearly + a "Copy email" button (with a toast/checkmark confirmation on click) and a mailto: link.
- Social icons repeated here (GitHub, LinkedIn, LeetCode).
- Simple footer line: name + year, maybe "Built with React & Tailwind."

═══════════════════════════════════════
TECHNICAL & QUALITY REQUIREMENTS
═══════════════════════════════════════
- Fully responsive: test the layout logic for mobile (< 640px), tablet (640-1024px), and desktop (> 1024px). Bento grids must gracefully stack on mobile — no horizontal overflow, no tiny unreadable text.
- Performance: no heavy 3D/WebGL libraries. Keep animations CSS/Framer-Motion based and lightweight. Images should be reasonably sized (we'll add real screenshots later — use clean placeholder divs with a label like "Project Screenshot" and the right aspect ratio for now if no image is provided yet).
- Accessibility: proper semantic HTML (nav, section, header, footer tags), alt text placeholders on images, sufficient color contrast for body text even in dark mode, visible focus states on interactive elements.
- Clean, readable code: consistent component structure, no inline magic numbers where a Tailwind utility would do, comments only where logic is non-obvious.
- No placeholder/lorem-ipsum text anywhere — every piece of text must come from content.md. If something is genuinely missing from content.md, leave a clear TODO comment rather than inventing content.

Do not start coding yet — first confirm you've read content.md, then give me a short outline of the component structure and color palette you plan to use, and wait for my go-ahead before generating all the files.
```

---

## HOW TO BUILD THIS WITH CURSOR (phased approach)

Don't ask Cursor to build the entire site in one giant message and walk away — even with this detailed a prompt, you'll get a better result by reviewing in stages:

**Phase 1 — Scaffold & confirm direction**
Paste the prompt above. Let Cursor respond with its planned component structure and color palette first (the prompt asks it to do this). Sanity-check it, then say "Looks good, build it."

**Phase 2 — Review the Hero + Navbar first**
Once the first build is done, run it (`npm run dev`) and look at just the Hero and Navbar. This sets the tone for everything else. Ask for adjustments here before moving on — e.g. "Make the hero heading bigger" or "The accent color feels too dark, try a brighter indigo."

**Phase 3 — Review Projects section**
This is the section that matters most to recruiters. Check spacing, card sizing, and whether the featured vs secondary distinction reads clearly. Ask for specific tweaks.

**Phase 4 — Pass through remaining sections**
Skills, Experience, Certifications, Education, Contact — quick pass on each.

**Phase 5 — Add real assets**
Replace placeholder screenshot divs with your real project screenshots and profile photo. Tell Cursor exactly where each file goes, e.g.:
> "Add my photo at public/profile.jpg to the Hero section, replacing the placeholder."

**Phase 6 — Mobile check**
Resize your browser or use Cursor's preview in mobile width. Ask Cursor to fix any cramped or broken sections specifically: "On mobile, the skills bento grid cards are too cramped, fix the breakpoints."

**Phase 7 — Deploy**
Ask Cursor: "Set this project up for deployment on Vercel and walk me through the steps." Push to GitHub, connect to Vercel, done — free hosting, auto-deploys on every push.

---

## QUICK REFERENCE — Things to have ready before Phase 5

- [ ] Profile photo (square, clear headshot)
- [ ] CodeVerse screenshot
- [ ] FlowSync screenshot (or pull `screenshot.png` from the repo)
- [ ] AlgoAI screenshot
- [ ] Codeverse-Adventure screenshot
- [ ] CodeMeet screenshot (or pull `screenshot-for-readme.png` from the repo)
- [ ] MediSlot screenshot
- [ ] Thumbster screenshot
- [ ] ChatInsider screenshots (2-3 from the 5 already in the repo)
- [ ] Resume PDF (you already have this)
