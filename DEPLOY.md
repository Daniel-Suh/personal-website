# Deploying to GitHub Pages

## One-time setup

1. **Create a GitHub repository** at github.com/new
   - Name it `personal-website` (or `jeongseok-suh.github.io` for a root domain site)
   - Set it to Public (required for free GitHub Pages)

2. **Push this project:**
   ```bash
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```

3. **Enable GitHub Pages** in the repo settings:
   - Go to **Settings → Pages**
   - Source: **Deploy from a branch**
   - Branch: `main` / `(root)`
   - Click **Save**

Your site will be live at:
```
https://<your-username>.github.io/<repo-name>/
```
(or `https://<your-username>.github.io/` if the repo is named `<your-username>.github.io`)

## Deploying updates

Just push to `main` — GitHub Pages redeploys automatically:
```bash
git add .
git commit -m "update site"
git push
```

## Optional: Custom domain

1. Add a `CNAME` file to the project root containing your domain:
   ```
   yourdomain.com
   ```
2. In **Settings → Pages**, enter your custom domain.
3. Point your DNS: add a `CNAME` record from `www` → `<your-username>.github.io`, or A records for the apex domain (see GitHub docs for current IPs).
4. Enable **Enforce HTTPS** once DNS propagates.
