import AntDesignVueHigh from '../../packages/index'
const envConf = require('./config/env')
const componentsContext = require.context('../../packages/components', true, /.*Demo\.vue$/)
const demoComponents = componentsContext.keys()
  .map(k => {
    const demoComponent = componentsContext(k).default
    demoComponent.name = k.substring(k.lastIndexOf('/') + 1, k.lastIndexOf('.vue'))
    return demoComponent
  })
export default ({
  Vue
}) => {
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
      ],
      jsonUrl: `${envConf.base}assets/fonts/iconfont.json`
    },
    MergeIcon: {
      scriptUrl: `${envConf.base}assets/fonts/iconfont.js`
    }
  })
  demoComponents.forEach(d => Vue.component(d.name, d))
}