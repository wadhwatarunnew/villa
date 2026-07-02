# Feature Library & Standalone Component Guide

## Goal
Each feature should own its own local structure so the app stays scalable and easy to maintain.


## Recommended structure
src/villa/features/<feature-name>/
  - components/
  - pages/
    - <feature-name>-page/
  - <feature-name>.module.ts
  - <feature-name>-routing.module.ts

## Rules
1. Put reusable child components in components/.
2. Put route-level page containers in pages/.
3. Use standalone components for page-level and child components.
4. Keep shared or cross-feature UI in src/villa/shared/.
5. Keep feature modules lazy-loaded through the main villa routing.
6. For admin/auth and similar UI, mirror the same structure under the feature folder: use a `pages/<page-name>/` folder for the standalone page and `components/` for page-specific subcomponents.

## Home example
- pages/home-page/ contains the main page component
- components/ contains home-specific child components
- home.module.ts imports the standalone page component
- home-routing.module.ts routes to the standalone page component
