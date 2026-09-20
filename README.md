# MoveOption

Static marketing website for MoveOption.

## Run locally

Open `index.html` in a browser, or serve this directory with any static web server.

## Included

- Responsive landing page in English, Portuguese, French and Thai
- Interactive market cards and language selector
- Linked English legal documents in `documents/`
- Local brand assets in `assets/`

## Deployment

The site is ready for GitHub Pages with `www.moveoption.com` as its canonical domain.

1. In **Settings → Pages**, publish the `main` branch from the repository root and set the custom domain to `www.moveoption.com`.
2. In Cloudflare DNS, create a `CNAME` record for `www` pointing to `contatomarlonbarreto1-pixel.github.io` (keep it DNS-only until GitHub issues the certificate).
3. Redirect `moveoption.com` to `https://www.moveoption.com` in Cloudflare, then enable **Enforce HTTPS** in GitHub Pages.
