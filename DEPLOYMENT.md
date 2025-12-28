# Deployment Guide - Vercel

This is your ready-to-deploy portfolio. Follow these steps to deploy to Vercel with your custom domain.

## Prerequisites

1. **GitHub Account** - Already set up ✓
2. **Vercel Account** - Create at https://vercel.com (free)
3. **Custom Domain** - jasdish.com (already owned)

## Step 1: Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio commit"

# Add remote (replace with your repo URL)
git remote add origin https://github.com/YOUR_USERNAME/minimal-portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Vercel

1. Go to https://vercel.com/new
2. Click "Import Git Repository"
3. Paste your GitHub repository URL
4. Click "Import"
5. **Framework Preset:** Select "Other"
6. **Build Command:** `pnpm build`
7. **Output Directory:** `dist`
8. Click "Deploy"

## Step 3: Connect Custom Domain

1. After deployment, go to your Vercel project settings
2. Click "Domains"
3. Add your domain: `jasdish.com`
4. Vercel will provide DNS records to add
5. Go to your domain registrar (GoDaddy, Namecheap, etc.)
6. Add the DNS records provided by Vercel
7. Wait 24-48 hours for DNS propagation

## Step 4: Enable HTTPS

Vercel automatically provides SSL certificates. Your site will be secure at https://jasdish.com

## Automatic Deployments

Every time you push to GitHub, Vercel will automatically rebuild and deploy your portfolio!

## Environment Variables (if needed)

1. In Vercel dashboard, go to Settings → Environment Variables
2. Add any required variables
3. Redeploy

## Troubleshooting

- **Build fails:** Check that `pnpm` is installed and `package.json` is correct
- **Domain not working:** Verify DNS records are correctly added and wait for propagation
- **Site shows old version:** Clear browser cache or do a hard refresh (Ctrl+Shift+R)

## Need Help?

- Vercel Docs: https://vercel.com/docs
- GitHub Help: https://docs.github.com
