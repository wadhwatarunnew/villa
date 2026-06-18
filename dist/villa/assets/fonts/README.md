Place any custom web fonts here (e.g., WOFF2, WOFF). Prefer loading fonts via Google Fonts in development.

Example usage in `src/styles/_common.scss`:

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

When bundling for production, consider self-hosting fonts placed in this folder and referencing them with `@font-face` in a global stylesheet.
