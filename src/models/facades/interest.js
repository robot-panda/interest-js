import axios from 'axios/lib/axios'
export default (config) => {
  let app = config.app_options.development
  let path = `${app.app_protocol}${app.interestjs_base_path}${app.interestjs_interest_path}`

  return {
    list_interests: (customerId, id) => {
      return axios.get(`${path}/list?account_customer_id=${customerId}&entity_id=${id}`)
    },
    get_interest: (id) => {
      return axios.get(`${path}/list?entity_id=${id}`)
    },
    add_interest: (featureName, interest) => {
      return axios({
        method: 'post',
        url: `${path}/add`,
        data: {
          feature_name: featureName,
          account_customer_id: interest.account_customer_id,
          entity_id: interest.entity_id,
          entity_name: interest.entity_name,
          entity_type: interest.entity_type,
          entity_category: interest.entity_category,
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
        id: interestId,
        metadata: interest.metadata
      })
    },
    remove: (interestId) => {
      return axios.delete(`${path}/remove?id=${interestId}`)
    }
  }
}
