# Portfolio Content — Piyush Sharad Patil

> Feed this whole file into Cursor along with your resume PDF when prompting it to build your portfolio.

---

## 1. Bio / Intro (Hero Section)

**Name:** Piyush Sharad Patil
**Title:** Full Stack Developer
**Location:** Pune, Maharashtra, India
**Status:** Final-year B.E. (IT) student, actively seeking SDE roles

**Short intro (for hero section):**
Full Stack Developer who builds AI-integrated, production-ready web apps with the MERN stack. I've shipped 8 real projects — from AI-powered coding education platforms to team productivity tools — and solved 350+ DSA problems along the way. Currently looking for SDE roles where I can ship things that matter.

**One-liner (for tab title / meta description):**
Piyush Patil — Full Stack Developer | MERN · AI Integrations · 350+ DSA

**Fun tagline (optional, for footer or about section):**
"Clean code. Real impact. Ship it."

---

## 2. Contact & Links

- **Email:** piyushpatil5093@gmail.com
- **Phone:** +91-7498411534
- **LinkedIn:** https://www.linkedin.com/in/piyush-patil-292842279
- **GitHub:** https://github.com/piyush5093
- **LeetCode:** https://leetcode.com/u/piyush5093/
- **GeeksforGeeks:** https://www.geeksforgeeks.org/user/pp362bw8l/

---

## 3. Skills (grouped for Skills section)

**Languages:** Java, JavaScript, TypeScript, Python, C++

**Frontend:** React.js, HTML5, CSS3, Tailwind CSS, Bootstrap, Redux, Redux Toolkit, Framer Motion

**Backend:** Node.js, Express.js, REST APIs, Microservices, Authentication & Authorization, JWT

**Databases:** MongoDB, MySQL

**AI/ML & GenAI:** Prompt Engineering, Generative AI, Gemini AI, Groq (Llama 3), AI/ML Fundamentals, AI Integration

**Core CS:** Data Structures & Algorithms, OOP, DBMS, Operating Systems, Computer Networks, System Design

**Tools & Platforms:** Git, GitHub, Docker, Postman, Vercel, Render

---

## 4. Work Experience

### Software Development Engineer Intern — Bluestock Fintech (Remote)
**Dec 2024 – Jan 2025** | React.js, JavaScript, HTML, CSS

- Improved UI responsiveness across 6+ modules using React.js, ensuring design consistency.
- Reduced page load time by 30% through frontend performance optimization and code refactoring.
- Collaborated with frontend and design teams to deliver scalable, responsive user interfaces.

### MERN Stack Developer Intern — Edunet Foundation (EY GDS & AICTE) (Remote)
**Dec 2024 – Jan 2025** | MongoDB, Express.js, React.js, Node.js

- Built a full-stack Doctor Appointment Booking system with authentication for patients and doctors.
- Designed REST APIs and MongoDB schema to efficiently manage appointment and user data.
- Built responsive UI using React.js and Bootstrap for cross-device usability.

---

## 5. Projects (full list — all 8)

> Order below is suggested by impressiveness/completeness. Feel free to feature the top 3-4 prominently and put the rest in a "More Projects" grid.

---

### 1. CodeVerse — AI-Integrated Coding Education Platform
**Tech:** React.js (v18), Redux Toolkit, React Router DOM, Tailwind CSS, Framer Motion, Node.js, Express.js, MongoDB Atlas, Mongoose, JWT, Cloudinary, Razorpay, Gemini AI, Brevo API

- **What it does:** A full ed-tech platform where students can browse and enroll in courses, track progress, and watch video lectures, while instructors get a full course-creation and analytics dashboard. The standout feature is a context-aware Gemini AI chatbot that detects which course a student is viewing and gives relevant coding help in real time — plus an embedded DSA visualizer (sorting, graphs, trees) and a gamified coding adventure game built right into the platform.
- **Key highlights:**
  - Context-aware Gemini AI tutor that adapts answers based on the page/course the student is on
  - Embedded interactive DSA Visualizer Sandbox (sorting, searching, graphs, trees) with execution-speed controls
  - Embedded "CodeVerse Adventure" coding game (iframe-integrated, fullscreen-capable)
  - Full Razorpay payment gateway (UPI + cards) for course purchases
  - Instructor dashboard: course builder, video uploads via Cloudinary, revenue stats, draft/publish control
  - Fail-safe email/OTP system with automatic SMTP fallback
- **GitHub:** https://github.com/piyush5093/CodeVerse
- **Live Demo:** https://code-verse-lweh.vercel.app/

---

### 2. AlgoAI — Premium DSA Visualizer & AI Tutor
**Tech:** React, Vite, Tailwind CSS, Groq API (Llama 3)

- **What it does:** An interactive platform that makes learning Data Structures & Algorithms intuitive by visually animating how algorithms work step-by-step — like a "Python Tutor" for DSA — combined with an AI tutor you can ask questions to without leaving the visualizer.
- **Key highlights:**
  - 10+ algorithm/data-structure visualizations: sorting (Merge, Quick, Bubble, Insertion, Selection), searching (Linear, Binary), Linked Lists, Stacks, Queues, BSTs, Dijkstra's shortest path
  - Code execution simulator that animates memory allocation and pointers line-by-line
  - Groq-powered AI chat assistant for algorithm questions and complexity analysis
  - Interactive quiz mode generated from the algorithms studied
  - Glassmorphic dark-themed "premium" UI
- **GitHub:** https://github.com/piyush5093/AlgoAI
- **Live Demo:** https://algo-ai-rosy.vercel.app/

---

### 3. FlowSync — AI-Powered Team Standup Manager
**Tech:** React (v19), Vite, Tailwind CSS (v4), Framer Motion, Recharts, Node.js, Express.js, MongoDB, Mongoose, Groq SDK (Llama 3.1), JWT

- **What it does:** An async standup platform that replaces time-consuming daily meetings. Team members submit quick voice or text updates; AI automatically analyzes sentiment, summarizes accomplishments, and flags blockers — giving managers a real-time "pulse" view of the whole team without anyone needing to sit through a meeting.
- **Key highlights:**
  - Voice-to-text updates via the browser's Web Speech API
  - Groq Llama 3.1 AI instantly returns sentiment, a summary, and blocker detection for every update
  - Manager dashboard: live team metrics, AI-generated daily team summaries, blocker bell notifications, private coaching notes per member, sparkline activity charts
  - Team leaderboard ranking members by submission consistency
  - JWT auth with role-based access (manager vs member) and a unique team invite-code system
- **GitHub:** https://github.com/piyush5093/FlowSync
- **Live Demo:** https://flow-sync-lake.vercel.app/

---

### 4. CodeVerse Adventure — Gamified Coding Learning Platform
**Tech:** React 18, Vite, Phaser.js, Monaco Editor, Framer Motion, Tailwind CSS, Zustand, Node.js, Express.js, Judge0 API

- **What it does:** A "Duolingo meets adventure game" for learning to code. Players write real, executable code (in Python, Java, C++, or JavaScript) to solve in-game challenges, and their code directly controls what happens in the game world — bridges appear, platforms rise, gates unlock — across 10 progressively harder levels.
- **Key highlights:**
  - Real code execution via the Judge0 API, not a quiz — actual runnable code
  - 10 levels × 5 tasks each (50 challenges total), covering loops, arrays, strings, recursion, sorting, and debugging
  - Phaser.js-powered 2D game world that visually reacts to successful code submissions
  - Monaco Editor (the engine behind VS Code) for professional-grade syntax highlighting
  - Achievement system and neon sci-fi dark UI
  - Embedded directly inside the CodeVerse platform via iframe
- **GitHub:** https://github.com/piyush5093/Codeverse-Adventure
- **Live Demo:** https://codeverse-adventure.vercel.app/

---

### 5. CodeMeet — Full-Stack Technical Interview Platform
**Tech:** React, Node.js, Express.js, Clerk (Auth), Stream (Video), Monaco Editor, TanStack Query, Inngest, MongoDB

- **What it does:** A platform for running live 1-on-1 technical coding interviews — combining a real VSCode-style code editor with video calling, in a single room. Built to mirror how real technical interviews are run at tech companies.
- **Key highlights:**
  - VSCode-powered code editor with secure, isolated code execution and automatic pass/fail feedback against test cases
  - Live 1-on-1 video interview rooms with mic/camera toggle, screen sharing, and recording
  - Room locking (max 2 participants) plus real-time chat messaging during interviews
  - Authentication via Clerk; background jobs (e.g. notifications) handled asynchronously via Inngest
  - Solo "practice problems" mode for self-paced interview prep
  - Dashboard with live interview stats
- **GitHub:** https://github.com/piyush5093/CodeMeet
- **Live Demo:** https://codemeet-win7.onrender.com/ *(hosted on Render free tier — may take ~20-30 seconds to wake up on first load)*

---

### 6. Thumbster — AI Thumbnail Generator
**Tech:** TypeScript, React (client), Node.js (server)

- **What it does:** An AI-powered thumbnail generator that creates custom thumbnails based on what the user needs — built to help creators quickly generate eye-catching thumbnails (e.g. for YouTube videos) without manual design work.
- **Key highlights:**
  - Full client/server architecture in TypeScript
  - AI-driven generation pipeline tailored to user-specified requirements
- **GitHub:** https://github.com/piyush5093/Thumbster
- **Live Demo:** https://thumbster-server.vercel.app/

> Note: This repo doesn't have a detailed README yet — consider adding one with setup instructions and a feature list, and add 1-2 sentences here about what makes your AI prompt/generation approach distinct (e.g. style options, customization, what model you used) once you have that detail handy.

---

### 7. MediSlot — Doctor Appointment & Virtual Health Record System
**Tech:** Node.js, Express.js, EJS, MongoDB, HTML, CSS, JavaScript

- **What it does:** A secure system for managing personal health records digitally — letting patients store medical history, prescriptions, and appointments in one place, and book doctor appointments with reminders. This is the project built during the Edunet Foundation (EY GDS) internship.
- **Key highlights:**
  - Secure user authentication for both patients and doctors
  - Digital medical profile with history, diagnoses, and treatment tracking
  - Prescription tracker (medication + dosage)
  - Appointment scheduler with reminders
  - Emergency contact storage for quick access
- **GitHub:** https://github.com/piyush5093/MediSlot
- **Live Demo:** https://medislot-ey2e.onrender.com/ *(hosted on Render free tier — may take ~20-30 seconds to wake up on first load)*

---

### 8. ChatInsider — WhatsApp Chat Analytics Tool
**Tech:** Python, Pandas, Matplotlib, Seaborn

- **What it does:** A Python-based analytics tool that turns raw WhatsApp chat exports into visual insights — message timelines, daily/weekly trends, most active days, and top contributors in group chats. Includes Hinglish-aware stopword filtering for cleaner text analysis.
- **Key highlights:**
  - Monthly/weekly/daily timeline analysis with bar charts
  - Identifies most active users and most active days in group chats
  - Cleans system messages and filters stopwords (including Hinglish)
  - Pure data-analysis project — a good example of Python + data skills outside the MERN stack
- **GitHub:** https://github.com/piyush5093/ChatInsider
- *(No live demo — it's a local script-based tool. Screenshots are available directly in the repo if you want to pull them for your portfolio card instead of a live preview.)*

---

## 6. Certifications & Achievements

- Oracle Java Foundation Certification — Oracle
- MERN Stack Development Certification — Apna College
- DSA (Java) Certification — Apna College
- AI/ML Certification — Apna College
- 350+ DSA Problems solved (LeetCode + GeeksforGeeks)

---

## 7. Education

| Degree | Institution | Score | Year |
|---|---|---|---|
| B.E. Information Technology | PES's Modern College of Engineering, Pune | CGPA: 9.34 | 2022 – 2026 |
| XII (HSC) | Moolji Jaitha College, Jalgaon | 83% | 2021 – 2022 |
| X (SSC) | H.J. Patil Madhyamik Vidyalaya, Jalgaon | 93.60% | 2019 – 2020 |

---

## 8. Notes for Cursor / build instructions

- Featured/hero projects (put these first, with full screenshots): **CodeVerse, FlowSync, AlgoAI, Codeverse-Adventure**
- Secondary projects (smaller cards, still full details): **CodeMeet, MediSlot, Thumbster, ChatInsider**
- Two projects (MediSlot, CodeMeet) are hosted on Render's free tier — add a small note/badge like "⏳ may take a few seconds to wake up" near their demo buttons so recruiters don't think the link is broken.
- ChatInsider has no live demo — use its in-repo screenshots instead of a "Live Demo" button; replace that button with a "View Screenshots" or "View Code" link.
- Every project card should have: title, 1-line description, tech badges, 2 buttons (GitHub + Live Demo, or GitHub + Screenshots where no demo exists).
