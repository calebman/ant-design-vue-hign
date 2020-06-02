import MergeIcon from './components/basic/merge-icon'
const componentsContext = require.context('./components', true, /index\.js$/)
const components = componentsContext.keys()
  .map(k => componentsContext(k).default)
  .filter(o => o && o.install)
export default {
  install (Vue, options = {}) {
    components.forEach(c => {
      Vue.use(c, options)
    })
  }
}

export {
  MergeIcon
}
