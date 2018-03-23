import axios from 'axios/lib/axios'
export default (config) => {
  let app = config.app_options.development
  let path = `${app.app_protocol}${app.interestjs_base_path}${app.interestjs_interest_path}`

  return {
    list: (listId) => {
      return axios.get(`${path}?account_list_id=$eq.${listId}`)
    },
    get: (listId, interestId) => {
      return axios.get(`${path}?account_list_id=$eq.${listId}&id=$eq.${interestId}`)
    },
    add: (feature, list) => {
      return axios.post(path, {
        feature_id: feature,
        name: list.name,
        metadata: list.metadata
      })
    },
    update: () => {},
    remove: () => {}
  }
}
