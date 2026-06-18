# The Villa Tent Database Structure

Version: 1.0

## Purpose

This document defines the MySQL database structure for The Villa Tent website, admin dashboard, content management, SEO, and lead generation workflows.

## Database

Recommended database name:

```text
villa_tent_db
```

Recommended character set:

```text
utf8mb4
```

Recommended collation:

```text
utf8mb4_unicode_ci
```

## Common Columns

Most content tables should include:

```text
id
created_at
updated_at
deleted_at
status
sort_order
```

Status values:

- Draft
- Published
- Unpublished
- Archived

## Users Table

Table:

```text
users
```

Columns:

- `id`
- `name`
- `email`
- `password_hash`
- `role`
- `status`
- `last_login_at`
- `created_at`
- `updated_at`

Roles:

- `super_admin`
- `content_manager`
- `sales_manager`
- `seo_manager`

## Hero Banners Table

Table:

```text
hero_banners
```

Columns:

- `id`
- `title`
- `subtitle`
- `button_label`
- `button_url`
- `desktop_image`
- `mobile_image`
- `image_alt`
- `sort_order`
- `status`
- `created_at`
- `updated_at`

## Tent Categories Table

Table:

```text
tent_categories
```

Columns:

- `id`
- `name`
- `slug`
- `description`
- `sort_order`
- `status`
- `created_at`
- `updated_at`

## Tents Table

Table:

```text
tents
```

Columns:

- `id`
- `category_id`
- `name`
- `slug`
- `short_description`
- `description`
- `featured_image`
- `image_alt`
- `floor_plan`
- `features`
- `specifications`
- `is_featured`
- `sort_order`
- `status`
- `created_at`
- `updated_at`
- `deleted_at`

Notes:

- `features` may be JSON.
- `specifications` may be JSON.
- `slug` must be unique.

## Projects Table

Table:

```text
projects
```

Columns:

- `id`
- `name`
- `slug`
- `location`
- `country`
- `client_name`
- `project_year`
- `short_description`
- `description`
- `featured_image`
- `image_alt`
- `highlights`
- `is_featured`
- `sort_order`
- `status`
- `created_at`
- `updated_at`
- `deleted_at`

## Project Tents Table

Table:

```text
project_tents
```

Columns:

- `id`
- `project_id`
- `tent_id`

Purpose:

Connect projects with related tent products.

## Gallery Table

Table:

```text
gallery_items
```

Columns:

- `id`
- `title`
- `category`
- `image`
- `image_alt`
- `caption`
- `sort_order`
- `status`
- `created_at`
- `updated_at`

## Blog Categories Table

Table:

```text
blog_categories
```

Columns:

- `id`
- `name`
- `slug`
- `description`
- `status`
- `created_at`
- `updated_at`

## Blogs Table

Table:

```text
blogs
```

Columns:

- `id`
- `category_id`
- `title`
- `slug`
- `excerpt`
- `content`
- `featured_image`
- `image_alt`
- `author_name`
- `tags`
- `published_at`
- `status`
- `created_at`
- `updated_at`
- `deleted_at`

## Leads Table

Table:

```text
leads
```

Columns:

- `id`
- `name`
- `email`
- `phone`
- `company`
- `country`
- `message`
- `source`
- `lead_status`
- `assigned_to`
- `notes`
- `created_at`
- `updated_at`

## Quotes Table

Table:

```text
quotes
```

Columns:

- `id`
- `name`
- `email`
- `phone`
- `company`
- `project_location`
- `tent_type`
- `quantity`
- `budget_range`
- `timeline`
- `requirements`
- `quote_status`
- `assigned_to`
- `created_at`
- `updated_at`

## Brochure Downloads Table

Table:

```text
brochure_downloads
```

Columns:

- `id`
- `name`
- `email`
- `phone`
- `company`
- `downloaded_file`
- `created_at`

## SEO Metadata Table

Table:

```text
seo_metadata
```

Columns:

- `id`
- `page_type`
- `page_id`
- `page_path`
- `meta_title`
- `meta_description`
- `canonical_url`
- `og_title`
- `og_description`
- `og_image`
- `schema_json`
- `created_at`
- `updated_at`

## Settings Table

Table:

```text
settings
```

Columns:

- `id`
- `setting_key`
- `setting_value`
- `setting_group`
- `created_at`
- `updated_at`

## Recommended Indexes

- Unique index on all `slug` columns.
- Index `status` on public content tables.
- Index `created_at` on leads and quote tables.
- Index `page_path` on `seo_metadata`.
- Index foreign keys such as `category_id`, `project_id`, and `tent_id`.

## Backup Rules

- Take daily database backups.
- Keep at least 7 daily backups.
- Keep at least 4 weekly backups.
- Test restore process before launch.

## Final Rule

The database should support content management, SEO, lead tracking, and future growth without forcing frontend structure into the database.
