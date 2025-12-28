# Quick Start Guide - Deploy to Vercel

## What You Have

Your portfolio is ready to deploy! This folder contains all the source code needed.

## Step 1: Extract & Setup (On Your Machine)

```bash
# Extract the downloaded file
tar -xzf minimal-portfolio-clean.tar.gz
cd minimal-portfolio-clean

# Install dependencies
pnpm install
# or
npm install
```

## Step 2: Test Locally (Optional)

```bash
# Start development server
pnpm dev
# Visit http://localhost:3000
```

## Step 3: Push to GitHub

```bash
# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio commit"

# Add your GitHub repository
git remote add origin https://github.com/YOUR_USERNAME/minimal-portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 4: Deploy to Vercel

1. Go to https://vercel.com/new
2. Click "Import Git Repository"
3. Select your GitHub repository
4. Click "Import"
5. **Build Settings:**
   - Framework: Other
   - Build Command: `pnpm build`
   - Output Directory: `dist`
6. Click "Deploy"

## Step 5: Connect Your Domain

1. After deployment, go to Vercel project settings
2. Click "Domains"
3. Add your domain: `jasdish.com`
4. Add the DNS records to your domain registrar
5. Wait for DNS propagation (24-48 hours)

## That's It!

Your portfolio is now live at jasdish.com! 🎉

Every time you push to GitHub, Vercel will automatically rebuild and deploy.

---

**Need Help?**
- See `DEPLOYMENT.md` for detailed instructions
- Vercel Docs: https://vercel.com/docs
