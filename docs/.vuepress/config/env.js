const isProd = process.env.NODE_ENV === 'production'
const prodConf = {
  base: '/ant-design-vue-hign/'
}
const devConf = {
  base: '/'
}
module.exports = isProd ? prodConf : devConf