# Crave — Responsive Recipe Discovery Prototype

A mobile-first, responsive static website for a recipe discovery concept:

> **Tell us what you're craving. We'll find your dinner.**

## Included

- Responsive mobile + desktop layout
- Four-step craving quiz
- Cuisine, mood, flavor, and effort selections
- Personalized recipe ranking
- Six+ polished recipe cards
- Full recipe detail pages
- Save/unsave recipes with browser localStorage
- No backend required
- No build step required

## Run locally

Open `index.html` in a browser.

For best results during development, use a simple local server such as VS Code Live Server or:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy to GitHub Pages

1. Create a new GitHub repository.
2. Upload the contents of this folder.
3. Make sure `index.html` is in the repository root.
4. In GitHub, open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select your main branch and `/ (root)`.
7. Save.

GitHub will give you a public URL after deployment.

## Next production steps

This prototype intentionally uses local recipe data so it can run as a static site. For a production app, consider adding:

- A real recipe database
- User accounts
- Cloud-synced saved recipes
- A recommendation/AI API
- Real food photography
- Nutrition and allergen data
- Ad network integration
- Analytics
- PWA/iOS install support
- Guided cooking mode
- Taste-profile learning
