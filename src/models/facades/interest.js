import axios from 'axios/lib/axios'
export default (config) => {
  let app = config.app_options.development
  let path = `${app.app_protocol}${app.interestjs_base_path}${app.interestjs_interest_path}`

  return {
    list_interests: (customerId, id) => {
      return axios.get(`${path}/list?token=${config.user_options.token}&account_customer_id=${customerId}&entity_id=${id}`)
    },
    get_interest: (id) => {
      return axios.get(`${path}/list?token=${config.user_options.token}&entity_id=${id}`)
    },
    add_interest: (featureName, interest) => {
      return axios({
        method: 'post',
        url: `${path}/add`,
        data: {
          token: config.user_options.token,
          feature_name: featureName,
          account_customer_id: interest.account_customer_id,
          entity_id: interest.entity_id,
          entity_name: interest.entity_name,
          entity_type: interest.entity_type,
          entity_category: interest.entity_category,
          entity_image_url: interest.entity_image_url,
          entity_url: interest.entity_url,
          metadata: interest.metadata
        },
        headers: {
          'Content-Type': 'application/vnd.api+json',
          'Accept': 'application/vnd.api+json'
        }
      })
    },
    update: (interestId, interest) => {
      return axios.put(`${path}/update`, {
        token: config.user_options.token,
        id: interestId,
        metadata: interest.metadata
      })
    },
    remove: (interestId) => {
      return axios.delete(`${path}/remove?token=${config.user_options.token}&id=${interestId}`)
    }
  }
}
