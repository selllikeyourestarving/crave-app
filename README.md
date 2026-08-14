# Crave v2
A mobile-first, responsive recipe discovery prototype.

### New in this version
- 15 curated recipes with real food photography
- 5-step craving quiz: mood, cuisine, flavor, centerpiece, effort
- Personalized recommendation scoring
- Local taste profile that learns favorite flavors
- Saved recipes using localStorage
- High-quality recipe detail pages
- Guided Cook Mode
- Ad placement designed into the discovery flow
- Responsive phone + laptop layout
- GitHub Pages deployment workflow
- No framework or build step

### Run
Open `index.html`, or run `python3 -m http.server 8000`.

### GitHub Pages
Upload the folder to a GitHub repository's `main` branch. In Settings → Pages, choose GitHub Actions. The included workflow deploys the site.

### Production next steps
Connect a real database, accounts, nutrition/allergen data, server-side AI/recommendations, analytics, real ad SDKs, and a CMS. Never expose private AI API keys in browser JavaScript.

Images are loaded from Unsplash's CDN and therefore require internet access.
