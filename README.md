# Madagascar

A scroll-driven photo/video journal from Nosy Be.

## Preview locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Edit the story

- **Captions & order**: [lib/content.ts](lib/content.ts) — edit the `entries` array. Reorder, rewrite, delete freely.
- **Hero & outro**: top of the same file.
- **Media**: drop new files in [public/media/](public/media/). iPhone tip — turn on **Settings → Photos → Transfer to Mac or PC → Automatic** before AirDropping so JPGs come out correctly oriented.

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
gh repo create madagascar --public --source=. --remote=origin --push
```

Or via the GitHub website: create a new empty repo, then:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin git@github.com:<you>/madagascar.git
git branch -M main
git push -u origin main
```

## Deploy to Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and import the GitHub repo.
2. Framework preset is auto-detected as **Next.js** — no config needed.
3. Click **Deploy**. Your site will be live at `https://madagascar-<hash>.vercel.app` within a minute.

Every push to `main` redeploys automatically.

## Notes

- Total media is ~112 MB across 29 files — comfortably under Vercel Hobby limits.
- Videos are H.264 MP4 with `muted` + `playsInline` so they autoplay in every browser when scrolled into view.
- The design is dark (`stone-950` + amber accents). Change colors in [app/layout.tsx](app/layout.tsx) and [app/page.tsx](app/page.tsx).
