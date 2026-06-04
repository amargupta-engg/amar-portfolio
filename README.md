# Amar Gupta — Portfolio

Personal portfolio site where I update my contributions and what I'm doing professionally. Built with Next.js 14 (App Router) + Tailwind CSS, deployed on Vercel.

## Stack
- **Framework:** Next.js 14 (App Router, JavaScript)
- **Styling:** Tailwind CSS
- **Icons:** lucide-react
- **Fonts:** Inter + Fraunces (via next/font)
- **Hosting:** Vercel

## Local Development

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Project Structure

```
amar-portfolio/
├── app/
│   ├── layout.js          # Root layout (fonts, metadata)
│   ├── page.js            # Home page
│   └── globals.css        # Tailwind + globals
├── components/
│   ├── Hero.js
│   ├── About.js
│   ├── Projects.js
│   ├── ProjectCard.js
│   ├── TechStack.js
│   ├── Experience.js
│   └── Footer.js
├── data/
│   └── content.js         # Single source of truth — edit here
├── public/
│   ├── Amar_Gupta_Resume.pdf
│   └── images/profile.png
└── tailwind.config.js
```

## Updating Content

All bio, projects, experience, awards, and tech stack live in **`data/content.js`**.
Edit that file, commit, push — Vercel auto-deploys.

## Deploy

1. Push to GitHub (`github.com/amargupta-engg/amar-portfolio`)
2. Go to vercel.com → Import Project → select the repo
3. Vercel detects Next.js automatically → Deploy
4. Live at `amar-portfolio-amargupta-engg.vercel.app` in ~30 seconds
