# Deployment Design Document

## Overview

This design outlines the deployment architecture for the portfolio website using free hosting services. The solution uses Vercel as the primary hosting platform due to its excellent support for Vite projects, zero-configuration deployments, automatic HTTPS, and free subdomain (username.vercel.app). The deployment will be fully automated through Git integration.

## Architecture

### Deployment Flow

```
Local Development → Git Push → GitHub Repository → Vercel Webhook → Build Process → Production Deployment
```

### Platform Selection: Vercel

**Rationale:**
- Native Vite support with zero configuration
- Free tier includes unlimited bandwidth and deployments
- Automatic HTTPS and CDN distribution
- Free subdomain (*.vercel.app)
- Instant rollbacks and preview deployments
- Excellent performance with edge network

**Alternatives Considered:**
- **Netlify**: Similar features, also excellent choice
- **GitHub Pages**: Requires manual build process, no server-side features
- **Cloudflare Pages**: Good option but slightly more complex setup

## Components and Interfaces

### 1. Build Configuration

**File: `vercel.json` (optional)**
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

Most settings are auto-detected by Vercel, but this file allows customization if needed.

### 2. Git Repository Integration

- **Repository**: GitHub (or GitLab/Bitbucket)
- **Branch Strategy**: 
  - `main` branch → Production deployment
  - Other branches → Preview deployments (automatic)

### 3. Environment Variables

If the portfolio needs any environment variables (API keys, etc.), they will be configured in Vercel dashboard:
- Navigate to Project Settings → Environment Variables
- Add variables for Production, Preview, and Development environments

### 4. Build Process

**Build Command:** `npm run build`
- TypeScript compilation via `tsc -b`
- Vite production build
- Output: Static files in `dist/` directory

**Build Settings:**
- Node.js Version: 18.x or later (auto-detected)
- Install Command: `npm install`
- Output Directory: `dist`

### 5. Domain Configuration

**Free Domain Options:**

1. **Vercel Subdomain** (Automatic)
   - Format: `project-name.vercel.app` or `username.vercel.app`
   - Automatically provisioned on first deployment
   - HTTPS enabled by default

2. **Custom Domain** (Optional Future Upgrade)
   - Can add custom domain later (requires purchasing domain)
   - Vercel provides automatic SSL certificates

## Data Models

### Deployment Configuration

```typescript
interface DeploymentConfig {
  platform: 'vercel';
  repository: {
    provider: 'github' | 'gitlab' | 'bitbucket';
    url: string;
    branch: string;
  };
  build: {
    command: string;
    outputDirectory: string;
    installCommand: string;
  };
  domain: {
    primary: string; // e.g., 'portfolio.vercel.app'
    custom?: string[]; // Optional custom domains
  };
}
```

### Deployment Status

```typescript
interface DeploymentStatus {
  id: string;
  status: 'queued' | 'building' | 'ready' | 'error';
  url: string;
  createdAt: Date;
  buildTime: number; // milliseconds
  commit: {
    sha: string;
    message: string;
    author: string;
  };
}
```

## Error Handling

### Build Failures

**Scenario:** TypeScript compilation errors or build failures

**Handling:**
1. Vercel preserves the previous working deployment
2. Build logs are available in Vercel dashboard
3. Email notification sent to project owner
4. Fix errors locally, push new commit to trigger rebuild

### Deployment Failures

**Scenario:** Network issues or platform outages

**Handling:**
1. Vercel automatically retries failed deployments
2. Status page available at vercel-status.com
3. Previous deployment remains active
4. Manual retry option in dashboard

### Runtime Errors

**Scenario:** 404 errors or routing issues in SPA

**Handling:**
1. Configure SPA fallback in `vercel.json`:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```
2. This ensures all routes serve the React app

## Testing Strategy

### Pre-Deployment Testing

1. **Local Build Verification**
   ```bash
   npm run build
   npm run preview
   ```
   - Verify build completes without errors
   - Test production build locally on http://localhost:4173

2. **Build Output Validation**
   - Check `dist/` directory contains all assets
   - Verify `index.html` references correct asset paths
   - Confirm total bundle size is reasonable (<5MB)

### Post-Deployment Testing

1. **Deployment Verification**
   - Visit deployed URL
   - Verify all pages load correctly
   - Test navigation and routing
   - Check responsive design on mobile

2. **Performance Testing**
   - Use Lighthouse in Chrome DevTools
   - Target scores: Performance >90, Accessibility >90
   - Verify HTTPS is active (lock icon in browser)

3. **Cross-Browser Testing**
   - Test in Chrome, Firefox, Safari, Edge
   - Verify consistent rendering and functionality

### Continuous Monitoring

1. **Vercel Analytics** (Free tier available)
   - Monitor page views and performance
   - Track Core Web Vitals
   - Identify slow pages

2. **Manual Checks**
   - Periodically visit site to ensure uptime
   - Test after major updates

## Deployment Steps Summary

1. **Prepare Repository**
   - Ensure code is pushed to GitHub
   - Verify `package.json` has correct build script
   - Test local build

2. **Connect to Vercel**
   - Sign up at vercel.com with GitHub account
   - Import repository
   - Configure project settings (auto-detected)

3. **Deploy**
   - Trigger initial deployment
   - Verify deployment succeeds
   - Access site via provided URL

4. **Configure Domain**
   - Use default `.vercel.app` subdomain
   - Optionally customize subdomain name

5. **Enable Automatic Deployments**
   - Already enabled by default
   - Every push to main branch triggers deployment

## Performance Optimizations

### Vercel Edge Network

- Automatic CDN distribution
- Assets cached globally
- Optimal routing to nearest edge location

### Build Optimizations

- Vite automatically handles:
  - Code splitting
  - Tree shaking
  - Asset optimization
  - Minification

### Caching Strategy

- Static assets cached with long TTL
- HTML cached with short TTL for quick updates
- Vercel handles cache invalidation on new deployments

## Security Considerations

1. **HTTPS**: Automatic SSL certificates
2. **Environment Variables**: Stored securely in Vercel, not in code
3. **Access Control**: Only authorized GitHub users can trigger deployments
4. **DDoS Protection**: Included in Vercel's infrastructure
5. **Content Security**: No sensitive data in client-side code

## Documentation Requirements

### README Updates

Add deployment section covering:
- Quick start deployment guide
- How to update the site
- Troubleshooting common issues
- Link to live site

### Deployment Guide

Create `DEPLOYMENT.md` with:
- Detailed step-by-step instructions
- Screenshots of Vercel setup
- Configuration options
- Custom domain setup (for future)
- Rollback procedures
