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
  data () {
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
