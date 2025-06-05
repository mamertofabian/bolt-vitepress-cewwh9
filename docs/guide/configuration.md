# Configuration Guide

## Site Configuration

The `.vitepress/config.ts` file is the heart of your VitePress site. Here's how to configure various aspects:

## Basic Config - test

```ts
export default {
  title: 'My Site',
  description: 'A VitePress Site'
}
```

## Theme Configuration

You can customize the theme using the `themeConfig` option:

```ts
export default {
  themeConfig: {
    nav: [...],
    sidebar: [...],
    footer: {...}
  }
}
```