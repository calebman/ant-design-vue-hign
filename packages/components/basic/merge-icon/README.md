# MergeIcon 图标合并组件

## 基本使用

::: demo 支持传入 `ant-design-vue` 所有的图标类型，并兼容 [AIcon](https://www.antdv.com/components/icon/#API) 的所有API
```html
<template>
  <div>
    <merge-icon type="account-book" />
    <merge-icon type="number" />
    <merge-icon type="home" :style="{ fontSize: '30px' }"/>
    <merge-icon type="setting" theme="filled" />
    <merge-icon type="smile" theme="outlined" />
  </div>
</template>
```
:::

## 拓展使用 iconfont 图标库

`MergeIcon` 具有合并 `iconfont` 图标的能力

::: demo 使用 `iconfont.cn` 生成的 `js` 地址构造 `MergeIcon` 后可同时使用 `ant-design-vue` 与 `iconfont` 的图标
```html
<template>
  <div>
    <merge-icon type="home" />
    <merge-icon type="setting" theme="filled" />
    <merge-icon type="custom-danhangshurukuang" />
    <merge-icon type="custom-mima" :style="{ fontSize: '30px' }"/>
    <merge-icon type="custom-gongju" />
  </div>
</template>
```
:::

可通过以下两种方式配置自定义图标库，见 iconfont.cn [使用帮助](https://www.iconfont.cn/help/detail?spm=a313x.7781069.1998910419.15&helptype=code) 查看如何生成 js 地址。

### 全局配置方式

```js
import AntDesignVueHigh from 'ant-design-vue-hign'
Vue.use(AntDesignVueHigh, {
  MergeIcon: {
    scriptUrl: '//at.alicdn.com/t/font_1764432_hg97dcycug.js'
  }
})
```

### 按需加载方式

```js
import { MergeIcon } from 'ant-design-vue-hign'
Vue.use(MergeIcon, {
  scriptUrl: '//at.alicdn.com/t/font_1764432_hg97dcycug.js'
})
```