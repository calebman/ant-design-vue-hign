/**
 * 提供载入指定目录的所有 README.md 并根据其结构生成左侧菜单栏的插件
 */
const fs = require('fs')
const path = require('path')

/**
 * 加载指定目录的所有 README.md 并生成路由与文件列表结构对象
 * @param options 配置信息
 * @param {*} routePath 基础路由路径
 */
function loadDocFiles({ basePath, routePath, docFileName, titleMap, maxDeep = 3 }, files = [], deep = 1) {
  const routes = []
  let fileNames = fs.readdirSync(basePath)
  for (let i in fileNames) {
    let fileName = fileNames[i]
    let absolutePath = path.join(basePath, fileName)
    if (fs.statSync(absolutePath).isDirectory()) {
      // check README.md
      let childRoutePath = routePath + fileName + '/'
      let dirDocAbsolutePath = path.join(absolutePath, docFileName)
      let existMDFile = fs.existsSync(dirDocAbsolutePath)
      if (existMDFile) {
        files.push({ path: childRoutePath, filePath: dirDocAbsolutePath })
      }
      if (deep <= maxDeep) {
        let result = loadDocFiles({ basePath: absolutePath, docFileName, titleMap, routePath: childRoutePath }, files, deep + 1)
        if (result.routes.length > 0) {
          routes.push({ title: titleMap[childRoutePath] || fileName, path: childRoutePath, collapsable: false, children: result.routes })
        } else if (existMDFile) {
          routes.push(childRoutePath)
        }
      }

    }
  }
  return { files, routes }
}

/**
 * 构建赋值侧边栏路由
 * @param options 配置信息
 * @param ctx vuepress上下文
 */
function generatorSidebar({ basePath, routePath, docFileName, titleMap, maxDeep = 3 }, ctx) {
  let { routes } = loadDocFiles({ basePath, routePath, docFileName, titleMap })
  let siteData = ctx.getSiteData()
  if(!siteData.themeConfig.sidebar[routePath]) {
    siteData.themeConfig.sidebar[routePath] = []
  }
  routes.forEach(r => {
    siteData.themeConfig.sidebar[routePath].push(r)
  })
}

module.exports = (options = {}, ctx) => {
  let {
    basePath = path.resolve(process.cwd(), 'packages/components/'),
    routePath = '/components/',
    docFileName = 'README.md',
    maxDeep = 3
  } = options
  let titleMap = {}
  return {
    extendPageData($page) {
      const {
        _filePath,           // 源文件的绝对路径
        _computed,           // 在构建期访问全局的计算属性，如：_computed.$localePath.
        _content,            // 源文件的原始内容字符串
        _strippedContent,    // 源文件剔除掉 frontmatter 的内容字符串
        key,                 // 页面唯一的 hash key
        frontmatter,         // 页面的 frontmatter 对象
        regularPath,         // 当前页面遵循文件层次结构的默认链接
        path,                // 当前页面的实际链接（在 permalink 不存在时，使用 regularPath ）
      } = $page
      titleMap[regularPath] = $page.title || frontmatter.title
    },
    async additionalPages() {
      console.log('Apply plugin components-routes-plugin additionalPages loadDocFiles')
      return loadDocFiles({ basePath, routePath, docFileName, titleMap, maxDeep })['files']
    },
    async ready() {
      console.log('Apply plugin components-routes-plugin ready generatorSidebar')
      generatorSidebar({ basePath, routePath, docFileName, titleMap, maxDeep }, ctx)
    }
  }
}