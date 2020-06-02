import icons from './icons'
import IconPicker from './IconPicker'
IconPicker.install = function (Vue, options = {}) {
  const { jsonUrl, customIcons } = options.IconPicker || {}
  if (Array.isArray(customIcons) && customIcons.length > 0) {
    customIcons.forEach(o => icons.splice(0, 0, o))
  } else if (jsonUrl) {

  }
  Vue.component(IconPicker.name, IconPicker)
}
export default IconPicker
