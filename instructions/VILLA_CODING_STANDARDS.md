# VILLA_CODING_STANDARDS.md

# The Villa Tent Coding Standards

Version: 1.0

Technology Stack:

* Angular 20
* Tailwind CSS
* SCSS
* TypeScript
* PHP
* MySQL

---

# Development Principles

1. Reusability
2. Scalability
3. Consistency
4. Performance
5. Maintainability
6. Accessibility
7. SEO Friendly Development

---

# Angular Standards

## Use Standalone Components

Always:

```typescript
standalone: true
```

Avoid NgModules unless absolutely required.

---

## Folder Structure

```text
app/

core/

shared/

layouts/

features/

admin/
```

Never place everything inside one folder.

---

# Component Naming Convention

Prefix:

```text
villa
```

Examples:

```text
villa-header

villa-footer

villa-tent-card

villa-project-card

villa-contact-form
```

---

# Component Structure

Every component must contain:

```text
component.html

component.scss

component.ts
```

Example:

```text
villa-header/

villa-header.component.html

villa-header.component.scss

villa-header.component.ts
```

---

# HTML Standards

## Semantic HTML

Always use:

```html
<header>

<nav>

<main>

<section>

<footer>
```

Avoid unnecessary div nesting.

---

## Accessibility

Every image:

```html
<img alt="">
```

Every button:

```html
<button>
```

No clickable divs.

---

# SCSS Standards

## Use BEM

Example:

```scss
.villa-card {}

.villa-card__title {}

.villa-card__content {}

.villa-card--featured {}
```

---

## Avoid

```scss
.red

.green

.blue

.test

.box1
```

Use meaningful names.

---

# Variables

Never hardcode colors.

Use:

```scss
var(--villa-primary)

var(--villa-brown)

var(--villa-sand)
```

---

# Tailwind Standards

Use Tailwind for:

* Layout
* Grid
* Flex
* Spacing

Layout rule:

* Use `grid` for overall page or section structure.
* Use `flex` for one-dimensional alignment inside sections.
* Combine both in the same component when it improves clarity, spacing, and responsiveness.

Example:

```html
<div class="container mx-auto">
```

---

# SCSS Usage

Use SCSS for:

* Complex Components
* Hover States
* Animations
* Reusable Styles

---

# TypeScript Standards

## Strong Typing

Avoid:

```typescript
any
```

Use:

```typescript
Project

Tent

Blog
```

interfaces.

---

## Interfaces

Example:

```typescript
export interface Tent {
  id: number;
  title: string;
  image: string;
  description: string;
}
```

---

# Service Standards

One service per module.

Example:

```text
tent.service.ts

project.service.ts

blog.service.ts
```

---

# API Calls

Never call APIs directly in components.

Wrong:

```typescript
this.http.get(...)
```

Correct:

```typescript
this.tentService.getTents()
```

---

# Environment Variables

Use:

```typescript
environment.apiUrl
```

Never hardcode URLs.

---

# Routing Standards

Use feature-based routes.

Example:

```text
/tents

/tents/the-villa-tent

/projects

/projects/the-oberoi
```

---

# SEO Standards

Every page must have:

* Title
* Description
* Canonical URL

Use:

```typescript
seo.service.ts
```

---

# Image Standards

Format:

WebP

Width:

Optimized

Lazy Loading:

Enabled

Example:

```html
<img loading="lazy">
```

---

# Forms Standards

Use Reactive Forms.

Never use template-driven forms for large forms.

Example:

```typescript
FormBuilder

FormGroup

Validators
```

---

# Error Handling

Always:

```typescript
catchError()
```

Handle API failures gracefully.

---

# Logging

Development:

```typescript
console.log()
```

Production:

Remove all console logs.

---

# Naming Conventions

## Components

```text
villa-header.component.ts
```

## Services

```text
tent.service.ts
```

## Models

```text
tent.model.ts
```

## Interfaces

```text
tent.interface.ts
```

---

# CSS Rules

Avoid:

```scss
!important
```

Avoid:

```scss
position:absolute
```

unless required.

---

# Responsive Standards

Mobile First

Breakpoints:

```text
Mobile:
0-767

Tablet:
768-1023

Desktop:
1024+
```

---

# Performance Rules

Lazy Load Routes

Optimize Images

Avoid Large Libraries

Minimize DOM Nodes

Reuse Components

---

# Admin Dashboard Rules

Use same design system.

Same colors:

Green:
#007735

Sand:
#F2E6C9

Brown:
#63380E

---

# Code Review Checklist

Before Commit:

✓ No console logs

✓ No unused imports

✓ Responsive

✓ SEO Added

✓ Images Optimized

✓ Accessibility Checked

✓ Types Added

✓ Reusable Components Used

---

# Final Rule

Every screen should follow:

* Same Header
* Same Footer
* Same Typography
* Same Colors
* Same Component Structure
* Same Coding Pattern

No page should feel different from the rest of The Villa Tent ecosystem.
