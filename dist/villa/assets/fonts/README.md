# Fonts Folder Conventions

Place any custom web fonts here (for example, WOFF2 or WOFF). Prefer loading approved fonts via Google Fonts in development.

Example usage in `src/styles/_common.scss`:

```scss
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap');
```

Approved font families:

- `Playfair Display` for headings
- `Inter` for body text, navigation, buttons, forms, footer, and admin UI

When bundling for production, consider self-hosting fonts placed in this folder and referencing them with `@font-face` in a global stylesheet.
