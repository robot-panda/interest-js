import BrowserStorage from 'store'

export default (config, opts) => {
  return {
    identify: (customer) => {
      return new Promise((resolve, reject) => {
        let customerObj = {
          id: customer.id || null,
          name: customer.name || '',
          email: customer.email || '',
          metadata: customer.metadata || {}
        }

        BrowserStorage.set('InterestCustomer', customerObj)
        resolve(customerObj)
      })
    },
    unidentify: () => {
      return new Promise((resolve, reject) => {
        BrowserStorage.remove('InterestCustomer')
        resolve({})
      })
    }
  }
}
