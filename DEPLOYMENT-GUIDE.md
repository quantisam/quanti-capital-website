# Quanti Capital - Vercel Deployment Guide

## 🎯 You'll Be Live in 30 Minutes!

This guide will walk you through deploying your Quanti Capital website to Vercel.

---

## ✅ What You Need

1. GitHub account (free) - github.com
2. Vercel account (free) - vercel.com
3. Your website files (you have these!)
4. 30 minutes

---

## 📋 STEP-BY-STEP DEPLOYMENT

### STEP 1: Install Git (If You Don't Have It)

**Windows:**
1. Download Git from: https://git-scm.com/download/win
2. Install with default settings
3. Open "Git Bash" from Start menu

**Mac:**
1. Open Terminal
2. Run: `git --version`
3. If not installed, it will prompt you to install

**Linux:**
```bash
sudo apt-get install git
```

---

### STEP 2: Create GitHub Repository

1. Go to https://github.com
2. Sign up (if you don't have an account) or Sign in
3. Click **"New repository"** (green button, top right)
4. Repository name: `quanti-capital-website`
5. Description: `Quanti Capital corporate website`
6. Choose **Public** (or Private, your choice)
7. ✅ Check "Add a README file"
8. Click **"Create repository"**

---

### STEP 3: Upload Your Code to GitHub

#### Option A: Using GitHub Website (Easiest)

1. In your new repository, click **"Add file"** → **"Upload files"**
2. Drag all files from `quanti-capital-vercel` folder
3. **Important:** Make sure you upload:
   - `package.json`
   - `vite.config.js`
   - `tailwind.config.js`
   - `postcss.config.js`
   - `index.html`
   - `src/` folder (with all files inside)
4. Scroll down, add commit message: "Initial commit"
5. Click **"Commit changes"**

#### Option B: Using Git Command Line (Advanced)

```bash
# Navigate to the quanti-capital-vercel folder
cd path/to/quanti-capital-vercel

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Connect to GitHub (replace YOUR-USERNAME)
git remote add origin https://github.com/YOUR-USERNAME/quanti-capital-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

### STEP 4: Deploy to Vercel

1. Go to https://vercel.com
2. Click **"Sign Up"** (or "Log in" if you have an account)
3. Choose **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub

#### Import Your Project

1. On Vercel dashboard, click **"Add New..."** → **"Project"**
2. Find `quanti-capital-website` in the list
3. Click **"Import"**

#### Configure Project

1. **Framework Preset:** Should auto-detect as "Vite"
2. **Root Directory:** Leave as `./`
3. **Build Command:** `npm run build` (should be auto-filled)
4. **Output Directory:** `dist` (should be auto-filled)
5. **Install Command:** `npm install` (should be auto-filled)

6. Click **"Deploy"**

#### Wait for Deployment (2-3 minutes)

- Vercel will:
  - Install dependencies
  - Build your React app
  - Deploy to their global CDN
  
- You'll see progress logs in real-time

#### 🎉 Success!

When deployment finishes, you'll see:
- ✅ "Congratulations!"
- A URL like: `quanti-capital-website.vercel.app`
- Click **"Visit"** to see your live website!

---

### STEP 5: Connect Your Custom Domain (quanticapital.org)

1. On your Vercel project page, go to **"Settings"**
2. Click **"Domains"** in sidebar
3. Add domain: `quanticapital.org`
4. Add domain: `www.quanticapital.org`
5. Click **"Add"**

#### Vercel Will Show You DNS Records

You'll see something like:

```
Type    Name    Value
A       @       76.76.21.21
CNAME   www     cname.vercel-dns.com
```

#### Update Your DNS (at your domain registrar)

1. Log into wherever you bought `quanticapital.org` (GoDaddy, Namecheap, etc.)
2. Find **DNS Settings** or **Manage DNS**
3. Add the A record Vercel showed you:
   - Type: `A`
   - Name: `@` (or leave blank)
   - Value: `76.76.21.21` (use the IP Vercel shows you)
   - TTL: `3600` (or default)

4. Add the CNAME record:
   - Type: `CNAME`
   - Name: `www`
   - Value: `cname.vercel-dns.com` (use what Vercel shows)
   - TTL: `3600`

5. **Save changes**

#### Wait for DNS Propagation (5 minutes - 48 hours)

- Usually happens in 15-30 minutes
- Vercel will automatically detect when it's ready
- You'll get an email when domain is active

---

## 🎨 MAKING CHANGES TO YOUR WEBSITE

### Easy Updates (After Initial Setup)

#### Option 1: GitHub Website

1. Go to your GitHub repository
2. Navigate to the file you want to edit
3. Click the pencil icon (Edit)
4. Make your changes
5. Scroll down, click **"Commit changes"**
6. **Vercel automatically redeploys!** (takes 2-3 min)

#### Option 2: Local Development

**One-time setup:**
```bash
# Clone your repository
git clone https://github.com/YOUR-USERNAME/quanti-capital-website.git
cd quanti-capital-website

# Install dependencies
npm install

# Start development server
npm run dev
```

**Your website will open at:** `http://localhost:5173`

**Making changes:**
1. Edit files in `src/App.jsx` (or other files)
2. Save - changes appear instantly in browser
3. When happy:
```bash
git add .
git commit -m "Updated homepage content"
git push
```
4. Vercel automatically deploys your changes!

---

## 🔧 COMMON CUSTOMIZATIONS

### Change Text Content

Edit: `src/App.jsx`

Find the text you want to change and update it. For example:

```jsx
// Change hero title
<h1 className="text-5xl...">
  Breaking Bottlenecks in Critical Materials Trade
</h1>
```

### Change Colors

Edit: `src/App.jsx`

Find color classes and update:
- `bg-black` → `bg-zinc-900` (lighter black)
- `text-zinc-600` → `text-zinc-700` (darker grey)

### Add New Section

In `src/App.jsx`, find where sections are and add your own:

```jsx
<section className="py-24 px-6 lg:px-12">
  <div className="max-w-7xl mx-auto">
    <h2>Your New Section</h2>
    <p>Your content here</p>
  </div>
</section>
```

---

## 📞 CONTACT FORM SETUP (Optional)

Vercel doesn't include form handling by default. Options:

**Option 1: Formspree (Easiest - FREE)**
1. Go to https://formspree.io
2. Create account
3. Create form, get endpoint URL
4. I can show you how to add it

**Option 2: Vercel Serverless Function**
- More advanced
- I can help set this up

---

## 🚨 TROUBLESHOOTING

### Build Failed

**Check the build logs on Vercel**
- Usually a missing dependency or syntax error
- Copy error message and I can help fix it

### Website Not Loading

1. Check deployment status on Vercel
2. Clear browser cache (Ctrl+Shift+R)
3. Try incognito/private browsing

### Domain Not Working

1. DNS can take up to 48 hours (usually much faster)
2. Check DNS settings match what Vercel showed
3. Try visiting the `.vercel.app` URL directly

### Changes Not Appearing

1. Make sure you pushed to GitHub
2. Check Vercel deployment status
3. Clear browser cache

---

## 💰 PRICING

**Free Forever Tier Includes:**
- ✅ Unlimited projects
- ✅ 100GB bandwidth/month
- ✅ Custom domains
- ✅ SSL certificates (HTTPS)
- ✅ Automatic deployments
- ✅ Preview deployments

**You won't need paid tier unless:**
- You get 100,000+ visitors/month
- You need team collaboration features

---

## 📊 ANALYTICS (Optional)

**Add Vercel Analytics (FREE):**

1. On your Vercel project, go to **"Analytics"** tab
2. Click **"Enable"**
3. See visitor stats, page views, etc.

**Add Google Analytics:**
1. Get your GA4 tracking ID
2. I can show you how to add it to the website

---

## ✅ POST-DEPLOYMENT CHECKLIST

After your site is live:

- [ ] Test on desktop
- [ ] Test on mobile
- [ ] Test all links
- [ ] Test all section anchors (#brokerage, #logistics, etc.)
- [ ] Set up contact form (if needed)
- [ ] Add analytics (if wanted)
- [ ] Submit to Google Search Console
- [ ] Update social media links to new website

---

## 🎯 NEXT STEPS

1. **Deploy now** - Follow steps 1-4 above
2. **Connect domain** - Step 5 (do this after deployment works)
3. **Test everything** - Make sure you're happy with it
4. **Make it yours** - Update content, images, etc.

---

## 🆘 NEED HELP?

If you get stuck at any step:

1. Check the error message carefully
2. Google the specific error
3. Check Vercel docs: vercel.com/docs
4. Let me know what step you're on and what error you're seeing

---

## 🎉 YOU'RE READY!

Start with **STEP 1** and work your way through. You'll have your professional website live in about 30 minutes.

Good luck! 🚀

---

**Created for Quanti Capital**  
*Last updated: November 2024*
