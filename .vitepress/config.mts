import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Flex Queue Madness Wiki",
  description: "Stuff & Things that are neat to know.",
  srcDir: 'content',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Software', link: '/software' }
    ],

    sidebar: [
      {
        text: 'Software',
        items: [
          { text: 'FFMPEG', link: '/software/ffmpeg' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Flex-Queue-Madness/wiki' }
    ]
  },
  markdown: {
    theme: {
      light: 'catppuccin-latte',
      dark: 'catppuccin-frappe'
    }
  }
})
