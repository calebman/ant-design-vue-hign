# IconPicker 图标选择器组件

## 基本用法

::: demo 使用 `v-model` 进行双向绑定，可设置禁用、可清除状态。
```html
<template>
  <div>
    <p>
      <a-checkbox v-model="options.disabled">禁用</a-checkbox>
      <a-checkbox v-model="options.allowClear">清除按钮</a-checkbox>
      <span>当前选中值：{{ pickerIcon }}</span>
    </p>
    <icon-picker v-model="pickerIcon" placeholder="请选择一个图标" v-bind="options"></icon-picker>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pickerIcon: '',
      options: {
        disabled: false,
        allowClear: false
      }
    }
  }
}
</script>
```
:::

## 拓展图标可选项

::: tip 拓展图标格式
拓展图标的格式请按照 `{ key: String, title: String, icons: Array }` 格式传递，其中 `icons` 子项内容即选择器的选中值
:::

### 组件内设置

可在组件内设置 `extraIcons` 来拓展 `IconPicker` 的图标选项

::: demo 拓展的图标 `tab` 页将被前置，注意，自定义图标的 `type` 不一定能被 `AIcon` 识别，建议拓展 `MergeIcon` 后使用该组件渲染，具体操作[点击此处](/components/basic/merge-icon/)。
```html
<template>
  <icon-picker placeholder="请选择一个图标" :extraIcons="extraIcons"></icon-picker>
</template>
<script>
export default {
  data() {
    return {
      extraIcons: [
        {
          key: 'extraIcons',
          title: '局部拓展',
          icons: [
            'custom-biaoqian',
            'custom-gongju',
            'custom-danhangshurukuang',
            'custom-zhage',
            'custom-duohangwenben',
            'custom-mima'
          ]
        }
      ]
    }
  }
}
</script>
```
:::

### 全局设置

不想在每一个使用到 `IconPicker` 的地方都定义一遍拓展图标，可使用以下方式来全局设置

1. 全局引入方式

```js
import AntDesignVueHigh from 'ant-design-vue-hign'
Vue.use(AntDesignVueHigh, {
  IconPicker: {
    customIcons: [
      {
        key: 'extends',
        title: '全局拓展',
        icons: [
          'custom-biaoqian',
          'custom-gongju',
          'custom-danhangshurukuang',
          'custom-zhage',
          'custom-duohangwenben',
          'custom-mima'
        ]
      }
    ]
  }
})
```

2. 按需加载方式

```js
import { IconPicker } from 'ant-design-vue-hign'
Vue.use(IconPicker, {
  customIcons: [
    {
      key: 'extends',
      title: '全局拓展',
      icons: [
        'custom-biaoqian',
        'custom-gongju',
        'custom-danhangshurukuang',
        'custom-zhage',
        'custom-duohangwenben',
        'custom-mima'
      ]
    }
  ]
})
```