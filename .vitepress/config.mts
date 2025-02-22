import { defineConfig } from 'vitepress'
import * as path from 'path'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Flex Q Madness Wiki",
  description: "Stuff & Things that are neat to know.",
  srcDir: 'content',
  themeConfig: {
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Software', link: '/software' },
      { text: 'Games', link: '/games' },
      { text: 'Politik', link: '/politik' }
    ],
    sidebar: {
      '/software/': [
        {
          text: 'Software',
          items: [
            { text: 'FFMPEG', link: '/software/ffmpeg' }
          ]
        }
      ],
      '/games/': [
        {
          text: 'Games',
          items: [
            { text: 'Minecraft', link: '/games/minecraft' },
            { text: 'Rayman', link: '/games/rayman' }
          ]
        }
      ],
      '/games/minecraft/': [
        { text: 'Games Übersicht', link: '/games/' },
        {
          text: 'Minecraft',
          items: [
            { text: 'Index', link: '/games/minecraft' },
            { text: 'Prism Launcher', link: '/games/minecraft/prism-launcher' },
            { text: 'Mod List', link: '/games/minecraft/mods' }
          ]
        }
      ],
      '/games/rayman/': [
        { text: 'Games Übersicht', link: '/games/' },
        {
          text: 'Rayman',
          items: [
            { text: 'Index', link: '/games/rayman' }
          ]
        }
      ],
      '/politik/': [
        {
          text: 'Politik',
          items: [
            { text: 'Artikel und Statistiken', link: '/politik/gegenargumente' }
          ]
        }
      ],
    },
    outline: {
      level: 'deep',
      label: 'ToC'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/flexqmadness/wiki' }
    ]
  },
  markdown: {
    theme: {
      light: 'catppuccin-latte',
      dark: 'catppuccin-frappe'
    }
  },
  vite: {
    publicDir: '../static/',
    resolve: {
      alias: {
        /*  The path is set to go back a directory level because
         *  the base path at build time is the '.vitepress' directory.
         */
        "@/components": path.resolve(__dirname, "../components/"),
      },
    },
  },
})
