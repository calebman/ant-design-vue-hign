### FormRulesGen 组件介绍

FormRulesGen是一个可以生成符合[async-validator](https://github.com/yiminghe/async-validator)校验框架配置规则的Vue组件，它的使用方式如下：

```js
<template>
  <validator-rules-gen v-model="rules"></validator-rules-gen>
</template>

<script>
export default {
  data () {
    return {
      rules: [
        { message: '至少3位数字', pattern: /^\d{3,}$/ },
        { message: '文本输入框1必须填写', required: true, trigger: ['change', 'blur'] }
      ]
    }
  }
}
</script>
```


