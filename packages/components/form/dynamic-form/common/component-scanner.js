import factory from './component-factory'
import { basicComponents as antdBasicComponents, layoutComponents as antdLayoutComponents } from './supports'
class ComponentScanner {
  scanComponents () {
    factory.addRepos([
      { key: 'basic', name: '基础组件', componentDefs: antdBasicComponents },
      { key: 'layout', name: '布局组件', componentDefs: antdLayoutComponents }
    ])
  }
}

export default ComponentScanner
