import FacadeCustomer from '@facades/customer'

export default (config, opts) => {
  let session = window.sessionStorage
  return {
    identify: (customer) => {
      if (session.getItem('InterestCustomer')) {
        return Promise.resolve(JSON.parse(session.getItem('InterestCustomer')))
      }

      let customerObj = {}
      if (customer.customer_id) {
        return FacadeCustomer(config).get_customer(customer.customer_id).then((ctm) => {
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
          } else {
            FacadeCustomer(config).add_customer(customer).then((ctm) => {
              let customer = ctm.data.data
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
      } else {
        return FacadeCustomer(config).add_customer({
          id: '',
          email: '',
          name: ''
        }).then((ctm) => {
          let customer = ctm.data.data
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
        session.remove('InterestCustomer')
        resolve({})
      })
    }
  }
}
