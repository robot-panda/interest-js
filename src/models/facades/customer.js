import axios from 'axios/lib/axios'
export default (config) => {
  let app = config.app_options.development
  let path = `${app.app_protocol}${app.interestjs_base_path}${app.interestjs_customer_path}`

  return {
    get: (customerId) => {

    }
  }
}
