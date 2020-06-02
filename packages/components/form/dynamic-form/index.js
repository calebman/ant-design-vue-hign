// import AntdComponents from './antd-components'
import ComponentRegistrar from './common/component-registrar'
import ComponentScanner from './common/component-scanner'
import AntDynamicForm from './AntDynamicForm'
import AIconInput from '~/components/basic/a-icon-input'
import MergeIcon from '~/components/basic/merge-icon'
import IconPicker from '~/components/picker/icon-picker'
/**
 * 引用必要组件
 */
function useComponents (Vue, options) {
  // Vue.use(AntdComponents)
  Vue.use(MergeIcon, options)
  Vue.use(AIconInput, options)
  Vue.use(IconPicker, options)
  Vue.component(AntDynamicForm.name, AntDynamicForm)
}

/**
 * 扫描注册的拖拽组件
 */
function scannerComponents (Vue, options) {
  new ComponentScanner().scanComponents()
}

/**
 * 注册可拖拽组件
 */
function registerComponent (typeName, { type, component, options }) {
  new ComponentRegistrar(typeName).register({ type, component, options })
}
function registerComponents (typeName, componentDefs) {
  new ComponentRegistrar(typeName).registers(componentDefs)
}

export default {
  registerComponent,
  registerComponents,
  install (Vue, options) {
    useComponents(Vue, options)
    scannerComponents(Vue, options)
  }
}
