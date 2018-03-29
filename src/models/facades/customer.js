import axios from 'axios/lib/axios'
export default (config) => {
  let app = config.app_options.development
  let path = `${app.app_protocol}${app.interestjs_base_path}${app.interestjs_customer_path}`

  return {
    get_customer: (customerId) => {
      return axios.get(`${path}/list?customer_id=${customerId}`)
    },
    add_customer: (customer) => {
      return axios({
        method: 'post',
        url: `${path}/add`,
        data: {
          account_id: config.user_options.account_id,
          customer_id: customer.customer_id,
          customer_email: customer.customer_email,
          customer_name: customer.customer_name
        },
        headers: {
          'Content-Type': 'application/vnd.api+json',
          'Accept': 'application/vnd.api+json'
        }
      })
    },
    update: (customerId, customer) => {
      return axios.put(`${path}/update`, {
        id: customerId,
        metadata: customer.metadata
      })
    },
    remove: (customerId) => {
      return axios.delete(`${path}/remove?id=${customerId}`)
    }
  }
}
