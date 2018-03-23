import FacadeLists from '@facades/list'
export default (config, opts) => {
  return {
    list: (feature) => {
      return FacadeLists(config).list(feature)
    },
    get: (feature, listName) => {
      return FacadeLists(config).get(feature, listName)
    },
    add: (feature, list) => {
      return FacadeLists(config).add(feature, list)
    },
    update: (feature, list) => {
      return FacadeLists(config).update(feature, list)
    },
    remove: (feature, listName) => {
      return FacadeLists(config).remove(feature, listName)
    }
  }
}
