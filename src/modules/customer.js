import FacadeCustomer from '@facades/customer'

export default (config, opts) => {
  let session = window.sessionStorage
  return {
    identify: (customer) => {
      if (session.getItem('InterestCustomer')) {
        return new Promise((resolve, reject) => {
          resolve(JSON.parse(session.getItem('InterestCustomer')))
        })
      }

      let customerObj = {}
      // has customer
      if (customer.customer_id) {
        return FacadeCustomer(config).get_customer(customer.customer_id).then((ctm) => {
          if (ctm.data.errors) {
            return ctm.data.errors
          }

          // customer exist
          if (ctm.data.data.length > 0) {
            let customer = ctm.data.data[0]
            customerObj = {
              id: customer.id,
              token: customer.token,
              customer_id: customer.customer_id,
              customer_name: customer.customer_name,
              customer_email: customer.customer_email,
              metadata: customer.metadata
            }
            session.setItem('InterestCustomer', JSON.stringify(customerObj))
            return customerObj

          // new customer
          } else {
            return FacadeCustomer(config).add_customer(customer).then((ctm) => {
              let customer = ctm.data.data[0]
              customerObj = {
                id: customer.id,
                token: customer.token,
                customer_id: customer.customer_id,
                customer_name: customer.customer_name,
                customer_email: customer.customer_email,
                metadata: customer.metadata
              }
              session.setItem('InterestCustomer', JSON.stringify(customerObj))
              return customerObj
            })
          }
        })

      // anonymous customer
      } else {
        return FacadeCustomer(config).add_customer({
          id: '',
          email: '',
          name: ''
        }).then((ctm) => {
          if (ctm.data.errors) {
            throw ctm.data.errors
          }
          let customer = ctm.data.data[0]
          customerObj = {
            id: customer.id,
            token: customer.token
          }
          session.setItem('InterestCustomer', JSON.stringify(customerObj))
          return customerObj
        })
      }
    },
    unidentify: () => {
      return new Promise((resolve, reject) => {
        session.removeItem('InterestCustomer')
        resolve({})
      })
    }
  }
}
