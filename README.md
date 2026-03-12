# Kin for Brands — Marketing Landing Page

A minimal, production-quality static landing page for Kin for Brands. Built with React, TypeScript, Vite, and Radix Themes. Fully static output, ready for deployment to Cloudflare Pages.

## What This Project Is

- **Stack**: React 18, TypeScript (strict mode), Vite 5, Radix Themes (bronze accent)
- **Output**: Fully static HTML/CSS/JS in `dist/` — no server required
- **Page**: Single landing page (Home)
- **Design**: Clean SaaS aesthetic, dark/light mode via system preference, minimal dependencies

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build

```bash
npm run build
```

Output is written to `dist/`. Preview the production build locally with:

```bash
npm run preview
```

## Cloudflare Pages Deployment

### Initial Setup

1. **Push the repo to GitHub**
   - Create a new repository on GitHub
   - Initialize git (if needed): `git init && git add . && git commit -m "Initial commit"`
   - Add remote: `git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git`
   - Push: `git push -u origin main`

2. **Create a new Cloudflare Pages project**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com) → Pages → Create a project
   - Choose **Connect to Git**
   - Select your GitHub repository and authorize Cloudflare

3. **Configure build settings**
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: (leave empty unless the project lives in a subdirectory)
   - **Environment variables**: None required for a static build

4. **Deploy**
   - Click **Save and Deploy**
   - Cloudflare will run `npm install` and `npm run build`, then serve the contents of `dist/`

### Preview Deployments

When you push to a branch other than your production branch (e.g. `main`):

- Cloudflare Pages automatically creates a **preview deployment** for that branch
- Each preview gets a unique URL (e.g. `abc123.your-project.pages.dev`)
- Use previews to test changes before merging to production
- Preview URLs are shown in the Cloudflare Pages dashboard and in pull request comments (if GitHub integration is enabled)

To enable GitHub PR comments with preview URLs, ensure your Cloudflare Pages project is connected to the correct repo and that the GitHub integration has access to post comments.

## Scripts

| Script              | Description                                |
| ------------------- | ------------------------------------------ |
| `npm run dev`       | Start Vite dev server                      |
| `npm run build`     | Type-check and build for production        |
| `npm run preview`   | Serve the production build locally         |
| `npm run lint`      | Run ESLint (fails on warnings)             |
| `npm run typecheck` | Run TypeScript compiler in check-only mode |
| `npm run format`    | Format all files with Prettier             |

## Code Quality

- **TypeScript**: Strict mode, no implicit `any`, no unused variables
- **ESLint**: Strict config, TypeScript rules, import ordering, `--max-warnings 0`
- **Prettier**: Enforced formatting
- **Pre-commit**: Husky + lint-staged run `eslint`, `prettier --check`, and `typecheck` — commits fail if any check fails

## Project Structure

```
src/
├── pages/
│   └── Home.tsx    # Single landing page
├── app.tsx         # Root layout
└── main.tsx        # Entry point
```

## License

Private — KinforBrands © 2026
