import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vue DnR",
  description: "A vue draggable and resizable component library.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
       
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/simon1uo/vue-dnr' }
    ]
  }
})
