import axios from 'axios/lib/axios'
export default (config) => {
  let app = config.app_options.development
  let path = `${app.app_protocol}${app.interestjs_base_path}${app.interestjs_customer_path}`

  return {
    get_customer: (customerId) => {
      return axios.get(`${path}/list?customer_id=${customerId}&token=${config.user_options.token}`)
    },
    add_customer: (customer) => {
      return axios({
        method: 'post',
        url: `${path}/add`,
        data: {
          token: config.user_options.token,
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
        token: config.user_options.token,
        id: customerId,
        metadata: customer.metadata
      })
    },
    remove: (customerId) => {
      return axios.delete(`${path}/remove?id=${customerId}&token=${config.user_options.token}`)
    }
  }
}
