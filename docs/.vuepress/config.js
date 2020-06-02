const path = require('path')
const envConf = require('./config/env')
const rootPath = path.join(__dirname, '../../')
module.exports = function () {
  return {
    theme: "antdocs",
    title: 'AntDesignVueHign',
    description: '基于ant-design-vue的高阶组件库',
    base: envConf.base,
    head: [
      ["link",{ rel: "icon",href: "/assets/logo.png" }]
    ],
    port: '6700',
    dest: 'docs/.vuepress/dist/ant-design-vue-hign/',
    extraWatchFiles: [
      `${rootPath}/packages/**/*.md`,
      `${rootPath}/docs/**/*.md`
    ],
    markdown: {
      lineNumbers: false
    },
    themeConfig: {
      smoothScroll: true,
      nav: require("./config/nav"),
      sidebar: require("./config/sidebar"),
      lastUpdated: '上次更新',
      repo: 'calebman/ant-design-vue-hign',
      editLinks: false
    },
    plugins: [
      [
        require('./components-routes-plugin'),
        {
          routePath: '/guide/'
        }
      ],
      'demo-container'
    ],
    less: {
      javascriptEnabled: true
    },
    chainWebpack: (config, isServer) => {
      config.resolve.alias
        .set('~', path.resolve(process.cwd(), 'packages'))
    }
  }
}