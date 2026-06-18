# The Villa Tent Admin Dashboard

Version: 1.0

## Purpose

The admin dashboard allows authorized staff to manage website content, leads, quote requests, SEO metadata, and global settings for The Villa Tent website.

The dashboard should be fast, secure, simple to operate, and consistent with the main Villa Tent design system.

## Admin Users

- Super Admin
- Content Manager
- Sales Manager
- SEO Manager

## Access Rules

- Admin routes must be protected by an authentication guard.
- Users must only access modules allowed by their role.
- Admin sessions should expire after inactivity.
- Logout must clear all local authentication state.
- API requests from the admin panel must include an authorization token.

## Dashboard Home

Route:

```text
/admin
```

Required widgets:

- Total leads
- New leads
- Quote requests
- Brochure downloads
- Published tents
- Published projects
- Published blogs
- Recent inquiries
- Quick actions

Quick actions:

- Add tent
- Add project
- Add blog
- View leads
- Update SEO

## Admin Layout

Required layout components:

- `admin-sidebar`
- `admin-header`
- `admin-card`
- `admin-table`
- `admin-form`
- `admin-modal`
- `admin-pagination`
- `admin-confirm-dialog`

Sidebar sections:

- Dashboard
- Hero Banners
- Tents
- Projects
- Gallery
- Blogs
- Leads
- Quotes
- Brochures
- SEO
- Settings
- Profile

## Hero Banner Management

Route:

```text
/admin/hero-banners
```

Fields:

- Title
- Subtitle
- Button label
- Button URL
- Desktop image
- Mobile image
- Sort order
- Status

Rules:

- At least one active hero banner should exist.
- Images must include alt text.
- Mobile image is recommended for performance.

## Tent Management

Route:

```text
/admin/tents
```

Fields:

- Name
- Slug
- Short description
- Full description
- Featured image
- Gallery images
- Category
- Features
- Specifications
- Floor plan
- SEO title
- SEO description
- Status

Required actions:

- List
- Create
- Edit
- Delete
- Publish
- Unpublish
- Reorder featured tents

## Project Management

Route:

```text
/admin/projects
```

Fields:

- Project name
- Slug
- Location
- Client name
- Project year
- Short description
- Full description
- Featured image
- Gallery images
- Project highlights
- Related tents
- SEO title
- SEO description
- Status

## Gallery Management

Route:

```text
/admin/gallery
```

Fields:

- Image
- Alt text
- Category
- Caption
- Sort order
- Status

Gallery categories:

- Tents
- Projects
- Interiors
- Resorts
- Events

## Blog Management

Route:

```text
/admin/blogs
```

Fields:

- Title
- Slug
- Excerpt
- Content
- Featured image
- Category
- Tags
- Author
- Published date
- SEO title
- SEO description
- Status

Rules:

- Blog content should support rich text.
- Slugs must be unique.
- Draft and published states are required.

## Lead Management

Route:

```text
/admin/leads
```

Lead sources:

- Contact form
- Quote form
- Brochure form
- Phone inquiry
- WhatsApp inquiry

Fields:

- Name
- Email
- Phone
- Company
- Country
- Message
- Source
- Status
- Assigned user
- Notes
- Created date

Lead statuses:

- New
- Contacted
- Qualified
- Proposal sent
- Won
- Lost

## Quote Management

Route:

```text
/admin/quotes
```

Fields:

- Name
- Email
- Phone
- Company
- Project location
- Tent type
- Quantity
- Budget range
- Timeline
- Requirements
- Status

## SEO Management

Route:

```text
/admin/seo
```

Fields per page:

- Page path
- Meta title
- Meta description
- Canonical URL
- Open Graph title
- Open Graph description
- Open Graph image
- Schema JSON

Rules:

- Meta title should be 50-60 characters.
- Meta description should be 140-160 characters.
- Canonical URL is required for public pages.

## Settings

Route:

```text
/admin/settings
```

Settings groups:

- Company profile
- Contact details
- Social links
- WhatsApp number
- Email addresses
- Global SEO defaults
- Analytics scripts
- SMTP settings

## Forms

Admin forms must include:

- Required field validation
- Clear error messages
- Save and cancel actions
- Loading state
- Success notification
- Failure notification

## Tables

Admin tables must include:

- Search
- Filter
- Sort
- Pagination
- Status badge
- Row actions
- Empty state

## Security

- Validate all inputs on frontend and backend.
- Sanitize rich text before saving and rendering.
- Restrict file uploads by type and size.
- Never expose database errors to users.
- Log important admin actions.

## Final Rule

The admin dashboard should be operational and content-focused. It should prioritize clarity, speed, and reliable content management over decorative visual design.
