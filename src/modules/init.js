import FacadeAccount from '@facades/account'
export default (config, opts) => {
  FacadeAccount(config).get_account({
    id: opts.account_id,
    token: opts.token,
    metadata: opts.metadata
  }).then((account) => {
    let acc = account.data.data[0] || {
      token: '',
      id: '',
      metadata: {}
    }
    config.user_options.token = acc.token
    config.user_options.account_id = acc.id
    config.user_options.metadata = acc.metadata
  }).catch((e) => {
    console.log(e)
  })

  return config
}
