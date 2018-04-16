import axios from 'axios'
export default (config) => {
  let app = config.app_options.development
  let path = `${app.app_protocol}${app.interestjs_base_path}${app.interestjs_account_path}`
  return {
    list: () => {
      return axios.get(`${path}/list`)
    },
    get_account: (account) => {
      return axios.get(`${path}/list?token=${account.token}`)
    },
    add_interest: (email, pass) => {
      return axios({
        method: 'post',
        url: `${path}/add`,
        data: {
          email: email,
          password: pass
        },
        headers: {
          'Content-Type': 'application/vnd.api+json',
          'Accept': 'application/vnd.api+json'
        }
      })
    },
    update: (accountId, account) => {
      return axios.put(`${path}/update`, {
        id: accountId,
        metadata: account.metadata
      })
    },
    remove: (accountId) => {
      return axios.delete(`${path}/remove?id=${accountId}`)
    }
  }
}
