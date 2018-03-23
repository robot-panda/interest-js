import axios from 'axios/lib/axios'
export default (config) => {
  let app = config.app_options.development
  let path = `${app.app_protocol}${app.interestjs_base_path}${app.interestjs_lists_path}`

  return {
    list: (feature) => {
      return axios.get(`${path}?feature_id=$eq.${feature}`)
    },
    get: (feature, list) => {
      return axios.get(`${path}?feature_id=$eq.${feature}&name=$eq.${list}`)
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
