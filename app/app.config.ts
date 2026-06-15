export default defineAppConfig({
  ui: {
    colors: {
      primary: 'orange',
      neutral: 'slate'
    },
    footer: {
      slots: {
        root: 'border-t border-default',
        left: 'text-sm text-muted'
      }
    }
  },
  seo: {
    siteName: '飞牛QwenPaw - NasPK Build By 尘墨成'
  },
  header: {
    title: '',
    to: '/',
    logo: {
      alt: '飞牛QwenPaw',
      light: '/logo.svg',
      dark: '/logo_dark.svg'
    },
    search: true,
    colorMode: true,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/naspk-com/QwenPaw',
      'target': '_blank',
      'aria-label': 'GitHub 项目'
    }]
  },
  footer: {
    credits: `© ${new Date().getFullYear()} NasPK.com 版权所有`,
    colorMode: false,
    links: [{
      'label': '浙ICP备2021030970号-5',
      'to': 'https://beian.miit.gov.cn/',
      'target': '_blank',
      'aria-label': 'ICP备案'
    }, {
      'icon': 'i-custom-fnnas',
      'to': 'https://developer.fnnas.com/',
      'target': '_blank',
      'aria-label': '飞牛开发者平台'
    }, {
      'icon': 'i-lucide-globe',
      'to': 'https://www.dustinky.com',
      'target': '_blank',
      'aria-label': '尘墨成官网'
    }, {
      'icon': 'i-simple-icons-bilibili',
      'to': 'https://space.bilibili.com/293679297',
      'target': '_blank',
      'aria-label': '尘墨成B站主页'
    }, {
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/dustink66',
      'target': '_blank',
      'aria-label': '尘墨成GitHub'
    }]
  }
})
