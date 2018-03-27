import FacadeInterests from '@facades/interest'
export default (config, opts) => {
  return {
    list: (listID) => {
      return FacadeInterests(config).list(listID)
    },
    get: (interestId) => {
      return FacadeInterests(config).get_interest(interestId)
    },
    add: (featureId, interest) => {
      return FacadeInterests(config).add_interest(featureId, interest)
    },
    update: (interestId, interest) => {
      return FacadeInterests(config).update(interestId, interest)
    },
    remove: (interestId) => {
      return FacadeInterests(config).remove(interestId)
    }
  }
}
