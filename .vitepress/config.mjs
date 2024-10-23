import { defineConfig } from 'vitepress'
import { set_sidebar } from "../utils/auto-gen-sidebar.mjs";	// 改成自己的路径

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base:"/docs/",
  head:[["link",{rel:"icon",href:"/docs/go.jpg"}]],
  title: "子夜文库",
  description: "面向网络安全学习人员的知识文库",
  themeConfig: {
    outlineTitle: "文章标题",
    outline:[2,6],
    logo: '/go.jpg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '漏洞相关', link: '/markdown-examples' },
      { text: '前端相关', link: '/test/test1/1' },
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],
    sidebar: { "/test/test1": set_sidebar("/test/test1") },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/sunwu57' },
      { icon: { svg: '<svg t="1704626282666" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="..."></path></svg>' }, link: 'https://twitter.com/vuejs' }
    ],
    footer: {
      copyright: 'Copyright © by 皖ICP备2021016801号 All Rights Reserved.'
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    }
  }

})
