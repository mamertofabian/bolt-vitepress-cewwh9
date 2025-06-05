import { defineConfig } from 'vitepress'
import { nav } from './config/nav'
import { sidebar } from './config/sidebar'
import { site } from './config/site'

export default defineConfig({
  ...site,
  themeConfig: {
    nav,
    sidebar,
  },
})