# Deployment Guide - Vercel Environments

This guide explains how to set up and manage multiple environments (Production, Staging, Dev) with automatic deployments on Vercel.

## 🚀 Quick Setup

### 1. Connect GitHub Repository to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Navigate to your project dashboard
3. Go to **Settings → Git**
4. Click **"Connect Git Repository"** or **"Add Git Repository"**
5. Select your GitHub repository
6. Authorize Vercel to access your repository

### 2. Configure Production Branch

1. In **Settings → Git**
2. Under **"Production Branch"**, select `main` (or your preferred production branch)
3. This branch will automatically deploy to production on every push

### 3. Create Environment Branches

```bash
# Create staging branch
git checkout -b staging
git push -u origin staging

# Create dev branch
git checkout -b dev
git push -u origin dev

# Return to main
git checkout main
```

## 📦 Environment Structure

After setup, you'll have:

- **Production** (`main` branch)
  - URL: `your-project.vercel.app`
  - Auto-deploys on push to `main`
  - Deploy manually: `yarn deploy`

- **Staging** (`staging` branch)
  - URL: `your-project-git-staging-yourusername.vercel.app`
  - Auto-deploys on push to `staging`
  - Deploy manually: `yarn deploy:staging`

- **Dev** (`dev` branch)
  - URL: `your-project-git-dev-yourusername.vercel.app`
  - Auto-deploys on push to `dev`
  - Deploy manually: `yarn deploy:dev`

## 🔧 Environment Variables

Configure environment variables in **Vercel Dashboard → Settings → Environment Variables**:

### Setting Variables

1. Click **"Add New"**
2. Enter variable name and value
3. Select which environments to apply:
   - **Production** - Only `main` branch
   - **Preview** - All branches except `main` (includes staging & dev)
   - **Development** - Local development only
   - **Specific Branch** - Choose individual branches

### Example Configuration

```
RESEND_API_KEY
├── Production: res_prod_key_123
├── Preview: res_preview_key_456
└── Development: res_dev_key_789

CONTACT_EMAIL
├── Production: contact@yourdomain.com
├── Preview: staging@yourdomain.com
└── Development: dev@yourdomain.com
```

## 🌐 Custom Domains (Optional)

Assign custom domains to each environment:

1. Go to **Settings → Domains**
2. Add domains:
   - `yourdomain.com` → Production (`main` branch)
   - `staging.yourdomain.com` → Staging branch
   - `dev.yourdomain.com` → Dev branch

## 📝 Deployment Commands

### Automatic Deployments (Recommended)

Just push to the branch:

```bash
git push origin main      # Deploys to production
git push origin staging   # Deploys to staging
git push origin dev       # Deploys to dev
```

### Manual Deployments (CLI)

```bash
# Production
yarn deploy

# Staging
git checkout staging
yarn deploy:staging

# Dev
git checkout dev
yarn deploy:dev

# Generic preview
yarn deploy:preview
```

## 🔄 Workflow Examples

### Deploying a Feature to Staging

```bash
# Create feature branch from staging
git checkout staging
git checkout -b feature/new-feature

# Make changes, commit
git add .
git commit -m "Add new feature"

# Push to GitHub (creates preview deployment)
git push -u origin feature/new-feature

# Merge to staging when ready
git checkout staging
git merge feature/new-feature
git push origin staging  # Auto-deploys to staging
```

### Promoting from Staging to Production

```bash
# Merge staging into main
git checkout main
git merge staging
git push origin main  # Auto-deploys to production
```

## 🎯 Environment Detection in Code

To detect which environment you're running in:

```typescript
// lib/env.ts
export const getEnvironment = () => {
  if (typeof window === "undefined") {
    // Server-side
    return process.env.VERCEL_ENV || "development";
  }
  // Client-side - detect from URL or pass via props
  return process.env.NEXT_PUBLIC_VERCEL_ENV || "production";
};

// Usage
const env = getEnvironment();
// Returns: 'production', 'preview', or 'development'
```

## 📊 Monitoring Deployments

- View all deployments: **Vercel Dashboard → Deployments**
- See deployment logs: Click on any deployment
- Redeploy previous version: Click **"..." → Redeploy"**
- View build logs: Click on deployment → **"Build Logs"**

## 🔍 Troubleshooting

### Deployment Not Triggering

- Check GitHub integration is connected
- Verify branch exists on GitHub
- Check Vercel project settings → Git

### Wrong Environment Variables

- Verify variable is set for correct environment
- Check branch name matches configuration
- Redeploy after changing variables

### Preview URL Not Working

- Wait for deployment to complete
- Check build logs for errors
- Verify branch is pushed to GitHub

## 📚 Additional Resources

- [Vercel Git Integration](https://vercel.com/docs/deployments/git)
- [Environment Variables](https://vercel.com/docs/projects/environment-variables)
- [Branch Deployments](https://vercel.com/docs/deployments/git#branch-deployments)
- [Custom Domains](https://vercel.com/docs/projects/domains)
