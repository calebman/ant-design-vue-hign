<!-- 基于标签页的布局  -->
<template>
  <a-tabs v-bind="element.options">
    <a-tab-pane v-for="item in element.children" v-bind="item.options" :key="item._key">
      <template slot="tab">
        <a-tooltip
          v-if="item.options.tabIcon"
          placement="topLeft"
          :title="item.options.tabIcon.tip"
        >
          <merge-icon style="margin-left: 8px" :type="item.options.tabIcon.icon" />
        </a-tooltip>
        {{ item.options.name }}
      </template>
      <slot :child="item"></slot>
    </a-tab-pane>
  </a-tabs>
</template>

<script>
export default {
  name: 'TabsLayout',
  props: {
    element: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>
