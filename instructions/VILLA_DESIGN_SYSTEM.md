# VILLA_DESIGN_SYSTEM.md

# The Villa Tent Design System

Version: 1.0

Technology:

* Angular 20
* Tailwind CSS
* SCSS

---

# Brand Identity

The Villa Tent is a premium hospitality and luxury tent solutions company.

The design language should feel:

* Premium
* Natural
* Hospitality Focused
* Modern
* Clean
* Trustworthy

Avoid:

* Overuse of gradients
* Neon colors
* Excessive animations
* Multiple color schemes

Layout rule:

* Mix `grid` and `flex` as needed for each component.
* Do not force a single layout model across the whole site.

---

# Brand Colors

## Primary Green

Purpose:
Primary actions and branding.

```css
#007735
```

Usage:

* Primary Buttons
* Links
* Active Menu
* CTA Buttons
* Icons

---

## Light Sand

Purpose:
Warm hospitality background.

```css
#F2E6C9
```

Usage:

* Alternate Sections
* CTA Backgrounds
* Form Backgrounds
* Highlights

---

## Primary Brown

Purpose:
Luxury hospitality accent.

```css
#63380E
```

Usage:

* Top Utility Bar
* Footer Copyright
* Hover States
* Decorative Elements

---

## White

```css
#FFFFFF
```

Usage:

* Body Background
* Footer
* Cards

---

## Text Color

```css
#1F2937
```

Usage:

* Headings
* Body Text

---

# Color Distribution

White:
50-60%

Light Sand:
20-25%

Brown:
15-20%

Green:
10-15%

---

# Typography

Typography guidance now lives here as the source of truth for the project.

## Font Import

```html
<link rel="preconnect" href="https://fonts.googleapis.com">

<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet">
```

## Primary Heading Font

Playfair Display

Usage:

* Hero Banner
* H1
* H2

Example:

Luxury Resort Tent Solutions

---

## Body Font

Inter

Usage:

* Navigation
* Paragraphs
* Forms
* Cards

## CSS Variables

```scss
:root {
	--font-heading: 'Playfair Display', serif;
	--font-body: 'Inter', sans-serif;
}
```

---

# Font Scale

## H1

56px

Desktop

40px

Tablet

32px

Mobile

---

## H2

42px

Desktop

32px

Tablet

28px

Mobile

---

## H3

32px

Desktop

26px

Tablet

22px

Mobile

---

## H4

24px

Desktop

20px

Tablet

18px

Mobile

---

## Body

16px

---

## Small Text

14px

Line Height:

1.6

---

# Font Weights

Light:
300

Regular:
400

Medium:
500

Semi Bold:
600

Bold:
700

---

## Recommended Line Heights

Body Large:

1.8

Body Regular:

1.7

Small Text:

1.6

---

# Section Spacing

Desktop

Top:
80px

Bottom:
80px

---

Tablet

Top:
60px

Bottom:
60px

---

Mobile

Top:
50px

Bottom:
50px

---

# Container Width

Max Width:

1440px

Content Width:

1280px

Padding:

24px

---

# Border Radius

Buttons:

8px

Inputs:

8px

Cards:

16px

Images:

16px

---

# Shadows

Card Shadow

```css
0 4px 20px rgba(0,0,0,.08)
```

Hover Shadow

```css
0 10px 30px rgba(0,0,0,.12)
```

---

# Button Styles

## Primary Button

Background:

#007735

Text:

White

Border Radius:

8px

Height:

48px

---

## Secondary Button

Background:

Transparent

Border:

#63380E

Text:

#63380E

---

# Header Design

Top Utility Bar

Background:

#63380E

Height:

40px

---

Navigation

Background:

White

Sticky:

Yes

---

Navigation Items

Home

About

Tents

Projects

Gallery

Blogs

Contact

---

CTA Buttons

Download Brochure

Get A Quote

---

# Footer Design

Background:

White

Sections:

* Logo
* Quick Links
* Tent Collections
* Contact Details

---

Copyright

Background:

#63380E

Text:

White

---

# Cards

## Tent Cards

Image

Title

Description

Explore

Visible:
4 Cards

---

## Project Cards

Image

Location

Title

View Project

Visible:
4 Cards

---

## Blog Cards

Image

Date

Title

Read More

---

# Icons

Library:

Angular Material Icons

Use Icons In:

* Statistics
* Features
* Contact Information

Do Not Use Icons In Navbar

---

# Responsive Breakpoints

Mobile

0-767px

Tablet

768-1023px

Desktop

1024px+

Large Desktop

1440px+

---

# Image Guidelines

Format:

WebP

Quality:

80%

Lazy Loading:

Enabled

Aspect Ratio:

16:9

Card Ratio:

4:3

---

# Accessibility

Minimum Contrast:

WCAG AA

Keyboard Navigation:

Supported

Alt Tags:

Required

Focus States:

Required

---

# Design Principles

1. Consistency
2. Simplicity
3. Hospitality Focus
4. Fast Loading
5. SEO Friendly
6. Mobile First
7. Reusable Components
8. White Space First Design

---

# Final Design Goal

Create a premium hospitality website experience that reflects luxury, trust, craftsmanship, and global hospitality expertise while maintaining fast performance and excellent usability.
