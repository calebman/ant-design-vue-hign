---
home: true
heroImage: /assets/logo.png
actionText: 快速上手 →
actionLink: /guide/
features:
- title: 更适应业务
  details: 从 Stylus 样式过渡到 Less 样式，统一使用预处理器，让 node_modules 不再过度臃肿。
- title: Ant Design 风格
  details: 组件库基于 Ant Design 开发，且保证原组件的 API 不受影响。
- title: 各种功能优化
  details: 新增底部栏目设置，优化行内代码、代码块以及其他各种显示效果和动画，真正实现风格迁移。
footerColumn: 4
footerWrap: 
- headline: 生态系统
  items:
  - title: AntDesignVueHign
    link: https://github.com/calebman/ant-design-vue-hign/
    details: AntDesignVue 高阶组件
  - title: Document
    link: https://github.com/calebman/ant-design-vue-hign/tree/master/docs
    details: 文档源文件
- headline: 资源链接
  items:
  - title: Ant Design Vue
    link: https://antdv.com/
  - title: VuePress
    link: https://vuepress.vuejs.org/zh/
- headline: 社区交流
  items:
  - title: 报告 Bug
    link: https://github.com/calebman/ant-design-vue-hign/issues
    details: Github issue
- headline: 作者博客
  items:
  - title: 主页
    link: https://blog.chenjianhui.site/
    details: 作者博客主页
  - title: 掘金
    link: https://juejin.im/user/59bc7c00f265da0644289a4b
    details: 一个帮助开发者成长的社区
footer: MIT Licensed | Copyright © 2019-present JianhuiChen
---

# 快速上手

## 安装依赖

使用 `yarn` 安装 `AntDesignVueHign` 组件：
```bash
yarn add ant-design-vue-hign
```
或者使用 `npm` 安装它：
```bash
npm i ant-design-vue-hign -s
```
如果你的网络环境不佳，推荐使用 [cnpm](https://github.com/cnpm/cnpm)。

## 使用组件

使用 `vue-cli` 构建项目，打开 `src/main.js` 通过合适的方式引入它

注意 `AntDesignVueHign` 强依赖 `AntDesignVue` 组件库，使用组件库需要同时引入 AntDesignVue

如果你对 AntDesignVue 的使用不是很了解，[请点这里](https://www.antdv.com/docs/vue/introduce-cn/)

1. 全局引入

```js
import Vue from 'vue'
import Antd from 'ant-design-vue'
import AntDesignVueHigh from 'ant-design-vue-hign'
import App from './App.vue'
import 'ant-design-vue/dist/antd.less'
Vue.use(Antd)
Vue.use(AntDesignVueHigh)
new Vue({
  render: h => h(App)
}).$mount('#app')
```

2. 按需加载

```js
import { IconPicker } from 'ant-design-vue-hign'
Vue.use(IconPicker)
```

## 效果预览

<p align="center"><img src="https://s2.ax1x.com/2020/02/28/3B3lOf.png"/></p>

## 贡献者

<p></p>

<a-tooltip title="JianhuiChen">
  <a-avatar src="https://s2.ax1x.com/2020/02/28/3rs23q.jpg" :size="54"/>
</a-tooltip>
&ensp;
<a-tooltip title="JianhuiChen">
  <a-avatar src="https://s2.ax1x.com/2020/02/28/3rs23q.jpg" :size="54"/>
</a-tooltip>

<p>&nbsp; </p>  

[我也想为贡献者之一？](https://github.com/calebman/ant-design-vue-hign/pulls)

<p>&nbsp; </p>