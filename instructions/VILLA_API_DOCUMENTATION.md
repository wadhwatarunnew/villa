# The Villa Tent API Documentation

Version: 1.0

## Purpose

This document defines the backend API contract for The Villa Tent website and admin dashboard.

The backend stack is PHP with MySQL. The API should return JSON responses and support public website content, lead capture, and authenticated admin management.

## Base URL

Development:

```text
http://localhost/villa-api
```

Production:

```text
https://www.thevillatent.com/api
```

## Response Format

Success response:

```json
{
  "success": true,
  "message": "Request completed successfully.",
  "data": {}
}
```

Error response:

```json
{
  "success": false,
  "message": "Validation failed.",
  "errors": {}
}
```

## HTTP Status Codes

- `200` OK
- `201` Created
- `400` Bad request
- `401` Unauthorized
- `403` Forbidden
- `404` Not found
- `422` Validation error
- `500` Server error

## Authentication

Admin APIs require token authentication.

Header:

```text
Authorization: Bearer <token>
```

Public APIs do not require authentication.

## Public Content APIs

### Get Homepage Content

```text
GET /homepage
```

Returns:

- Hero banners
- Tent collections
- Featured projects
- Statistics
- Trusted brands
- SEO metadata

### Get Tents

```text
GET /tents
```

Query parameters:

- `page`
- `limit`
- `category`
- `search`

### Get Tent Detail

```text
GET /tents/{slug}
```

Returns:

- Tent details
- Features
- Specifications
- Gallery
- Related tents
- SEO metadata

### Get Projects

```text
GET /projects
```

Query parameters:

- `page`
- `limit`
- `location`
- `tent_type`
- `search`

### Get Project Detail

```text
GET /projects/{slug}
```

### Get Gallery

```text
GET /gallery
```

Query parameters:

- `page`
- `limit`
- `category`

### Get Blogs

```text
GET /blogs
```

Query parameters:

- `page`
- `limit`
- `category`
- `tag`
- `search`

### Get Blog Detail

```text
GET /blogs/{slug}
```

## Lead Capture APIs

### Submit Contact Form

```text
POST /contact
```

Payload:

```json
{
  "name": "Client Name",
  "email": "client@example.com",
  "phone": "+91 9999999999",
  "company": "Company Name",
  "country": "India",
  "message": "Project requirement"
}
```

### Submit Quote Request

```text
POST /quotes
```

Payload:

```json
{
  "name": "Client Name",
  "email": "client@example.com",
  "phone": "+91 9999999999",
  "company": "Company Name",
  "project_location": "Goa",
  "tent_type": "Luxury Resort Tent",
  "quantity": 10,
  "budget_range": "25L-50L",
  "timeline": "3 months",
  "requirements": "Resort tent setup"
}
```

### Submit Brochure Download

```text
POST /brochure-downloads
```

Payload:

```json
{
  "name": "Client Name",
  "email": "client@example.com",
  "phone": "+91 9999999999",
  "company": "Company Name"
}
```

## Admin Auth APIs

### Login

```text
POST /admin/login
```

Payload:

```json
{
  "email": "admin@example.com",
  "password": "password"
}
```

### Logout

```text
POST /admin/logout
```

### Get Profile

```text
GET /admin/profile
```

## Admin CRUD APIs

Use the same pattern for admin resources:

```text
GET /admin/{resource}
GET /admin/{resource}/{id}
POST /admin/{resource}
PUT /admin/{resource}/{id}
DELETE /admin/{resource}/{id}
```

Resources:

- `hero-banners`
- `tents`
- `projects`
- `gallery`
- `blogs`
- `leads`
- `quotes`
- `brochure-downloads`
- `seo`
- `settings`

## File Upload API

```text
POST /admin/uploads
```

Supported file types:

- JPG
- PNG
- WebP
- SVG
- PDF

Rules:

- Validate MIME type.
- Restrict maximum file size.
- Store uploaded files outside executable PHP directories when possible.
- Return the public asset URL.

## Validation Rules

- Required fields must be validated server-side.
- Emails must be valid.
- Phone numbers must be sanitized.
- Slugs must be unique.
- Uploaded files must be checked by MIME type and extension.

## Pagination Format

```json
{
  "items": [],
  "pagination": {
    "page": 1,
    "limit": 12,
    "total": 120,
    "total_pages": 10
  }
}
```

## Final Rule

The API must be predictable, secure, and easy for the Angular frontend to consume. All frontend API calls should go through Angular services, never directly from UI components.
