import FacadeInterests from '@facades/interest'
export default (config, opts) => {
  return {
    list: (listID) => {
      return FacadeInterests(config).list(listID)
    },
    get: (listID, interestId) => {
      return FacadeInterests(config).get(listID, interestId)
    },
    add: (listID, interest) => {
      return FacadeInterests(config).add(listID, interest)
    },
    update: (feature, list) => {
      // return FacadeInterests(config).update(feature, list)
    },
    remove: (feature, listName) => {
      // return FacadeInterests(config).remove(feature, listName)
    }
  }
}
