# OAI Conference 2026 — Website

Redesigned website for the [Optimized AI Conference](https://oaiconference.com) (March 30–31, 2026 · Atlanta, GA).

Built with **Astro v6** + **Tailwind CSS v4**. Dark theme, 22 static pages, zero JavaScript frameworks.

## Quick Start

### Prerequisites

- **Node.js 22+** — [Download](https://nodejs.org/)
- **npm** (comes with Node)
- **Docker** (optional, for containerized deployment)

### Development (Mac & Windows)

```bash
cd oai-site
npm install
npm run dev
```

Open **http://localhost:4321**

### Production Build

```bash
npm run build     # Output: oai-site/dist/
npm run preview   # Preview the build locally
```

### Docker (Mac & Windows & Linux)

```bash
cd oai-site

# Build the image
docker build -t oai-conference .

# Run on any port
docker run -p 8080:80 oai-conference
```

Open **http://localhost:8080**

> **Windows note:** Use PowerShell or WSL. Docker Desktop must be running.

> **Mac note:** Docker Desktop or OrbStack both work.

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Homepage | `/` | Hero, workshops, speakers, tickets, schedule, testimonials |
| Speakers | `/speakers` | 70+ speaker cards with initials avatars |
| Workshops | `/workshops` | 11 workshop cards with detail links |
| Workshop Detail | `/workshops/[slug]` | 11 dynamic pages with speaker bio, overview, requirements |
| Program | `/program` | Day 1/Day 2 schedule, virtual event recordings |
| About | `/about` | Conference mission, stats, pricing overview |
| Event Details | `/event-details` | Date, venue, ticket tiers |
| Contact | `/contact` | Contact form (client-side confirmation) |
| Sign Up | `/sign-up` | Email signup for past talk recordings |
| Call for Speakers | `/call-for-speakers` | Speaker application form + topics |
| Code of Conduct | `/code-of-conduct` | Full policy text |
| 404 | Any invalid URL | Custom branded error page |

## Tech Stack

- **Framework:** [Astro](https://astro.build) v6 — static site generator, zero JS by default
- **Styling:** [Tailwind CSS](https://tailwindcss.com) v4 — utility-first CSS with custom theme tokens
- **Fonts:** [Sora](https://fonts.google.com/specimen/Sora) (display) + [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) (body) via Google Fonts
- **Deployment:** Multi-stage Docker (Node 22 build → nginx Alpine serve)

## Design System

| Token | Value |
|-------|-------|
| Primary | `#FF6B35` (orange) |
| Secondary | `#00D4AA` (teal) |
| Background | `#0A0A0B` |
| Surface | `#111113` |
| Text Primary | `#FAFAFA` |
| Text Secondary | `#A1A1AA` |
| Border | `#2A2A2E` |

## Project Structure

```
oai-site/
├── src/
│   ├── components/    # 12 reusable Astro components
│   ├── data/          # 6 typed TypeScript data modules
│   ├── layouts/       # BaseLayout with nav + footer
│   ├── pages/         # All page routes
│   └── styles/        # Global CSS with Tailwind theme
├── Dockerfile         # Multi-stage production build
├── nginx.conf         # Static serving config
└── package.json
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server (http://localhost:4321) |
| `npm run build` | Build static site to `dist/` |
| `npm run preview` | Preview production build locally |
| `docker build -t oai-conference .` | Build Docker image |
| `docker run -p 8080:80 oai-conference` | Run in container |
