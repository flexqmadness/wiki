import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Flex Queue Madness Wiki",
  description: "Stuff & Things that are neat to know.",
  srcDir: 'content',
  themeConfig: {
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Software', link: '/software' },
      { text: 'Games', link: '/games' }
    ],
    sidebar: [
      {
        text: 'Software',
        items: [
          { text: 'FFMPEG', link: '/software/ffmpeg' }
        ]
      },
      {
        text: 'Games',
        items: [
          { text: 'Rayman', link: '/games/rayman' },
          { text: 'Minecraft', link: '/games/minecraft' }
        ]
      },
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
