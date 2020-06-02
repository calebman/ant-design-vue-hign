import factory from './component-factory'
class ComponentRegistrar {
  constructor (repoName) {
    this.factory = factory
    this.componentDefs = []
    this.repo = {
      key: repoName,
      name: repoName,
      componentDefs: this.componentDefs
    }
    if (!this.factory.contains(repoName)) {
      this.factory.addRepo(this.repo)
    }
  }
  register ({ type, component, options }) {
    this.componentDefs.push({ type, component, options })
  }
  registers (componentDefs) {
    componentDefs.forEach(o => this.componentDefs.push(o))
  }
}

export default ComponentRegistrar
