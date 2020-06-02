<template>
  <div id="app">
    <a-layout>
      <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">Header</a-layout-header>
      <a-layout :style="{ padding: '0 50px', marginTop: '64px' }">
        <a-layout-content>
          <div class="demo-container" v-for="name in demoNames" :key="`demo_${name}`" :id="name">
            <a-card :bordered="false">
              <span slot="title">
                <merge-icon type="home" style="margin-right: 8px;"></merge-icon>
                {{ name }}
              </span>
              <component :is="demos[name]"></component>
            </a-card>
          </div>
        </a-layout-content>
        <div class="fixed-anchor">
          <a-anchor>
            <a-anchor-link
              v-for="name in demoNames"
              :key="`link_${name}`"
              :href="`#${name}`"
              :title="name"
            />
          </a-anchor>
        </div>
      </a-layout>
      <a-layout-footer :style="{ textAlign: 'center' }">
        <div>
          <span>组件代码贡献者：</span>
          <span v-for="contributor in contributors" :key="contributor.avatar" class="contribuator">
            <a-tooltip :title="contributor.name">
              <a-avatar :src="contributor.avatar" size="large"/>
            </a-tooltip>
          </span>
        </div>
        <div>该页面作为 ant-design-vue-hign 组件库的示例测试页面</div>
      </a-layout-footer>
    </a-layout>
    <a-back-top />
  </div>
</template>

<script>
// Inject demos
const componentsContext = require.context('./demos', true, /.*\.vue$/)
const demos = {}
componentsContext.keys().forEach(k => {
  const name = k.substring(k.indexOf('/') + 1, k.lastIndexOf('.vue'))
  demos[name] = componentsContext(k).default
})
export default {
  name: 'App',
  data () {
    return {
      demos,
      demoNames: Object.keys(demos),
      contributors: [
        {
          name: 'JianhuiChen',
          avatar: 'https://s2.ax1x.com/2020/02/28/3rs23q.jpg'
        },
        {
          name: 'JianhuiChen2',
          avatar: 'https://s2.ax1x.com/2020/02/29/3yu9OK.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="less">
.demo-container {
  margin: 8px auto;
  max-width: 1140px;
}
.fixed-anchor {
  width: 240px;
  position: fixed;
  top: 100px;
  right: 10px;
}
.contribuator {
  margin-right: 8px;
  cursor: pointer;
}
</style>
