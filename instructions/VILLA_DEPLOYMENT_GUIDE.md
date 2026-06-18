# The Villa Tent Deployment Guide

Version: 1.0

## Purpose

This document defines the deployment process for The Villa Tent Angular frontend and PHP/MySQL backend on GoDaddy Linux Hosting.

## Environments

Recommended environments:

- Local development
- Staging
- Production

Production domain:

```text
https://www.thevillatent.com
```

## Frontend Build

Build the Angular application:

```bash
npm install
npm run build
```

Expected output:

```text
dist/villa
```

Before deployment:

- Run linting.
- Run tests if available.
- Verify production environment values.
- Check image optimization.
- Check SEO metadata.

## Angular Environment

Production environment should include:

```typescript
export const environment = {
  production: true,
  apiUrl: 'https://www.thevillatent.com/api'
};
```

Do not hardcode API URLs inside components or services.

## Hosting Upload

Upload the frontend build output to the public web root:

```text
public_html/
```

If the Angular app is deployed at the root domain, the contents of `dist/villa` should be uploaded directly into `public_html`.

## Angular Routing Rewrite

Create or update `.htaccess` in `public_html`:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

This allows direct browser access to Angular routes such as `/tents`, `/projects`, and `/get-a-quote`.

## Backend Deployment

Recommended backend folder:

```text
public_html/api
```

Backend requirements:

- PHP supported by GoDaddy Linux Hosting
- MySQL database
- Secure database credentials
- Upload folder permissions
- CORS configured for the production domain

## Database Deployment

Steps:

1. Create a MySQL database.
2. Create a database user with strong password.
3. Import schema.
4. Import seed data if required.
5. Configure backend database connection.
6. Test API connection.

## File Permissions

Recommended permissions:

- Folders: `755`
- Files: `644`
- Upload folders: writable only where required

Never make the full project writable.

## Production Checklist

- Angular production build uploaded.
- `.htaccess` routing works.
- API base URL points to production.
- Database connection works.
- Contact form submits successfully.
- Quote form submits successfully.
- Brochure form submits successfully.
- Admin login works.
- Images load correctly.
- Sitemap is available.
- Robots file is available.
- Canonical URLs are correct.
- SSL is active.

## SEO Files

Required production files:

```text
/sitemap.xml
/robots.txt
```

Robots file should block admin and API routes from crawling:

```text
User-agent: *
Disallow: /admin
Disallow: /api
Allow: /
Sitemap: https://www.thevillatent.com/sitemap.xml
```

## Performance Checklist

- Use WebP images.
- Enable lazy loading.
- Compress large assets.
- Enable browser caching where hosting allows.
- Avoid uploading source maps to production unless needed.
- Remove development console logs.

## Security Checklist

- Use HTTPS.
- Protect admin APIs with authentication.
- Validate all backend inputs.
- Sanitize rich text content.
- Restrict file upload types.
- Keep database credentials outside public frontend files.
- Disable directory listing.
- Do not expose PHP errors in production.

## Rollback Plan

Before each deployment:

- Backup current frontend files.
- Backup backend files.
- Backup database.

If deployment fails:

1. Restore previous frontend files.
2. Restore previous backend files if changed.
3. Restore database backup if migrations failed.
4. Re-test public website and admin login.

## Final Rule

Deployment is complete only when the public website, admin dashboard, forms, API, SEO files, and SSL are verified on the production domain.
