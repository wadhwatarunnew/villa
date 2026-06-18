Images folder conventions

This folder stores project images (logos, gallery items, placeholders, etc.). Recommended structure:

- logos/ — brand logos (SVG/PNG)
- gallery/ — user-visible gallery images (JPEG/WEBP)
- placeholders/ — small placeholder images used in layout (SVG/PNG)
- social/ — social preview images (1200x630 PNG/JPEG)

Guidelines

- Prefer SVG for logos and icons. Use optimized SVGs (svgo) for smaller size.
- For photos, use WebP (lossy) with fallbacks to JPEG if needed. Provide multiple sizes if responsive images are required.
- Naming: use kebab-case, descriptive names, and include dimensions when helpful (e.g., hero-1600x900.jpg).
- Compression: run images through an optimizer (mozjpeg, guetzli, cwebp) before committing.
- Access images via Angular assets path: `/assets/images/<subfolder>/<name>.<ext>` or via `src/assets` imports when bundling.

Commit strategy

- Commit small representative images and use external hosting or a separate media repo for large photo libraries.
- Keep a `.gitkeep` in empty folders so the structure remains in git.

Example usage in templates:

```html
<img src="/assets/images/logos/logo.svg" alt="Villa logo" />
```
