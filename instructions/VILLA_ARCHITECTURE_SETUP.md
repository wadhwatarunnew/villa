# VILLA_ARCHITECTURE_SETUP.md

## The Villa Tent - Angular Frontend Architecture Setup

### Technology Stack
- Angular 20
- Tailwind CSS
- SCSS
- TypeScript
- RxJS

### Angular Architecture Overview
- `VillaModule` as the root module
- `CoreModule` for singleton services, guards, and villa-wide providers
- `SharedModule` for reusable components, directives, pipes, and shared UI modules
- Feature modules for each major domain
- `VillaRoutingModule` for global route configuration and lazy loading

### Project Structure
src/
- villa/
  - core/
    - guards/
    - interceptors/
    - services/
    - models/
  - shared/
    - components/
    - directives/
    - pipes/
    - modules/
  - layouts/
    - public-layout/
  - features/
    - home/
    - about/
    - tents/
    - projects/
    - gallery/
    - blogs/
    - contact/
    - quote/
  - villa-routing.module.ts
  - villa.component.ts
  - villa.module.ts
- assets/
- styles/
- environments/
  - environment.ts
  - environment.prod.ts

### Routing and Lazy Loading
- Configure feature routes in `app-routing.module.ts`
- Use lazy loading for feature modules
- Example routes:
  - `/` -> Home
  - `/about` -> About
  - `/tents` -> Tents
  - `/projects` -> Projects
  - `/gallery` -> Gallery
  - `/blogs` -> Blogs
  - `/contact` -> Contact
  - `/quote` -> Quote
- Use route guards for restricted pages when needed

### Modules
- `CoreModule`
  - singleton services
  - guards and interceptors
- `SharedModule`
  - reusable components, pipes, and directives
  - exports for common UI modules
- Feature modules
  - each feature has its own module and routing
  - lazy loaded to keep bundle size smaller
  - each feature should use its own local folder structure for components and pages

### Feature Library Structure
- Every feature under `src/villa/features/<feature-name>/` should follow this pattern:
  - `components/` for reusable child components
  - `pages/` for route-level page containers
  - `pages/<feature-name>-page/` for the main page component for that feature
  - `<feature-name>.module.ts` and `<feature-name>-routing.module.ts` at the feature root
- Prefer Angular standalone components for the page component and its child components whenever possible.
- Keep shared and cross-feature UI in `src/villa/shared/`.

Example for Home:
- `src/villa/features/home/pages/home-page/`
- `src/villa/features/home/components/`
- `src/villa/features/home/home.module.ts`
- `src/villa/features/home/home-routing.module.ts`

### Component Structure
  - `*.component.html`
  - `*.component.scss`
  - `*.component.ts`
- Prefer standalone components for feature page and child components
- Use shared presentational components for repeated UI patterns
- Keep page-specific containers in feature modules
- Keep business logic in container components and services

### Header & Footer
 - Place global layout components (Header, Footer) under `src/villa/layouts/` or `src/villa/shared/components/`.
 - Implement each as a presentational component with `*.component.html`, `*.component.scss`, and `*.component.ts`.
 - Use the selectors `villa-header` and `villa-footer` in layout templates so layouts wrap feature `router-outlet`s:

   - Example (customer layout):

     ```html
     <villa-header></villa-header>
     <main>
       <router-outlet></router-outlet>
     </main>
     <villa-footer></villa-footer>
     ```

 - Keep header/footer logic minimal — navigation, branding, and small UI state. For complex header behavior (auth, notifications), delegate to services in `CoreModule`.

### Styles, Fonts & Images

- Create a global SCSS folder at `src/styles/` for shared partials like `_variables.scss` and `_common.scss`.
- Add variables for colours, spacing, and `font-family` in `_variables.scss` and import them into `src/styles.scss`.
- Load development fonts via Google Fonts in `_common.scss` or self-host in `src/assets/fonts/` and reference with `@font-face`.
- Put site images under `src/assets/images/` (e.g., logos, placeholders, gallery images). Commit a `.gitkeep` or a `README.md` to document expected contents.

Example `src/styles.scss` imports:

```scss
@tailwind base;
@tailwind components;
@tailwind utilities;

@import './styles/variables';
@import './styles/common';
```

These conventions keep global styles predictable and allow Tailwind utilities alongside SCSS variables.
