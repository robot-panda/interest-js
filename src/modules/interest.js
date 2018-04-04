import FacadeInterests from '@facades/interest'
export default (config, opts) => {
  return {
    list: (customerId, interestId = '') => {
      return FacadeInterests(config).list_interests(customerId, interestId).then((interest) => {
        if (interest.data.errors) {
          throw interest.data.errors
        }
        return interest
      })
    },
    get: (interestId) => {
      return FacadeInterests(config).get_interest(interestId).then((interest) => {
        if (interest.data.errors) {
          throw interest.data.errors
        }
        return interest
      })
    },
    add: (featureName, interest) => {
      return FacadeInterests(config).add_interest(featureName, interest).then((interest) => {
        if (interest.data.errors) {
          throw interest.data.errors
        }
        return interest
      })
    },
    update: (interestId, interest) => {
      return FacadeInterests(config).update(interestId, interest).then((interest) => {
        if (interest.data.errors) {
          throw interest.data.errors
        }
        return interest
      })
    },
    remove: (interestId) => {
      return FacadeInterests(config).remove(interestId).then((interest) => {
        if (interest.data.errors) {
          throw interest.data.errors
        }
        return interest
      })
    }
  }
}
