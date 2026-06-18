# VILLA_COMPONENT_GUIDELINES.md

# The Villa Tent Component Guidelines

Version: 1.0

Framework:

* Angular 20
* Tailwind CSS
* SCSS
* TypeScript

---

# Purpose

This document defines the component architecture, naming conventions, reusability rules, and development standards for all frontend components used in The Villa Tent website and admin dashboard.

Goals:

* Reusable Components
* Consistent UI
* Faster Development
* Easy Maintenance
* Scalability

---

# Component Categories

## Layout Components

Used across entire application.

Examples:

```text
villa-header

villa-footer

villa-page-banner

villa-breadcrumb

villa-sidebar

villa-admin-header
```

---

## Shared Components

Reusable across multiple modules.

Examples:

```text
villa-button

villa-input

villa-select

villa-textarea

villa-modal

villa-loader

villa-pagination

villa-empty-state
```

---

## Business Components

Website-specific components.

Examples:

```text
villa-tent-card

villa-project-card

villa-blog-card

villa-gallery-card

villa-brand-slider

villa-statistics

villa-contact-form

villa-quote-form
```

---

## Feature Components

Page-specific components.

Examples:

```text
hero-banner

featured-projects

why-choose-us

tent-overview

project-gallery

related-blogs
```

---

# Component Structure

Every component must follow:

```text
component-name/

component-name.component.html

component-name.component.scss

component-name.component.ts
```

Example:

```text
villa-tent-card/

villa-tent-card.component.html

villa-tent-card.component.scss

villa-tent-card.component.ts
```

---

# Component Naming Rules

Prefix:

```text
villa
```

Correct:

```text
villa-header

villa-footer

villa-project-card
```

Wrong:

```text
header

footer

project
```

---

# Folder Structure

```text
shared/

components/

villa-button/

villa-modal/

villa-loader/

villa-pagination/
```

---

# HTML Standards

Use Semantic HTML.

Correct:

```html
<header>
<nav>
<section>
<article>
<footer>
```

Avoid:

```html
<div>
<div>
<div>
```

for everything.

---

# Component Responsibility

One component should have one responsibility.

Correct:

```text
villa-project-card
```

Only project card logic.

Wrong:

```text
project-card + modal + gallery + api logic
```

inside one component.

---

# Input Rules

Use Inputs for dynamic data.

Example:

```typescript
@Input() project!: Project;
```

---

# Output Rules

Use Outputs for communication.

Example:

```typescript
@Output() viewProject = new EventEmitter<number>();
```

---

# Reusable Card Components

## Tent Card

Fields:

```text
Image

Title

Description

Explore Button
```

Used:

* Homepage
* Tent Listing
* Related Tents

---

## Project Card

Fields:

```text
Image

Project Name

Location

View Project
```

Used:

* Homepage
* Project Listing
* Related Projects

---

## Blog Card

Fields:

```text
Image

Date

Title

Read More
```

Used:

* Homepage
* Blog Listing

---

# Shared Form Components

## Villa Input

Supports:

```text
Text

Email

Phone

Number
```

---

## Villa Select

Supports:

```text
Single Select

Search Select
```

---

## Villa Textarea

Supports:

```text
Message

Description

Comments
```

---

# Button Component

Create one button component.

Variants:

```text
Primary

Secondary

Outline

Ghost
```

Example:

```html
<villa-button
variant="primary">
</villa-button>
```

---

# Modal Component

Reusable modal.

Used for:

```text
Gallery Preview

Image Preview

Confirmation Dialogs
```

---

# Loader Component

Single loader for project.

```html
<villa-loader></villa-loader>
```

---

# Pagination Component

Reusable pagination.

Used:

```text
Projects

Blogs

Gallery

Tents
```

---

# Banner Component

Reusable page banner.

Inputs:

```text
Title

Description

Background Image

Breadcrumb
```

Used:

```text
About

Tents

Projects

Blogs

Contact

Quote
```

---

# CTA Component

Reusable CTA section.

Contains:

```text
Image

Heading

Description

Button
```

Used:

```text
Homepage

Projects

Contact

Quote
```

---

# Component Styling Rules

Use:

```scss
BEM Methodology
```

Example:

```scss
.villa-card {}

.villa-card__title {}

.villa-card__image {}

.villa-card__content {}
```

---

# Avoid

```scss
.box

.red

.green

.test
```

---

# Component Communication

Parent

↓

Child

Use:

```typescript
@Input()
```

Child

↓

Parent

Use:

```typescript
@Output()
```

---

# API Rules

Never call API directly inside UI component.

Wrong:

```typescript
http.get(...)
```

Correct:

```typescript
projectService.getProjects()
```

---

# Responsive Standards

Every component must support:

```text
Mobile

Tablet

Desktop
```

---

# Accessibility Rules

Every component must include:

```text
Keyboard Support

Alt Text

Focus States

Screen Reader Labels
```

---

# Performance Rules

Use:

```text
Lazy Loading

TrackBy

Optimized Images

OnPush Strategy
```

where applicable.

---

# Website Components List

## Layout

```text
villa-header

villa-footer

villa-page-banner
```

---

## Homepage

```text
hero-banner

tent-collection

why-choose-us

featured-projects

statistics-section

brand-slider

consultation-section
```

---

## Tents

```text
villa-tent-card

tent-filter

tent-gallery

related-tents
```

---

## Projects

```text
villa-project-card

project-gallery

project-details

related-projects
```

---

## Blogs

```text
villa-blog-card

blog-details

related-blogs
```

---

## Contact

```text
contact-info

contact-form

google-map
```

---

# Admin Components

```text
admin-sidebar

admin-header

admin-card

admin-table

admin-form

admin-modal
```

---

# Final Rule

If a component can be reused more than once, create it as a shared component.

Never duplicate HTML, SCSS, or TypeScript code.

Always build reusable, scalable, and maintainable components.
