export default (config, opts) => {
  config.user_options.token = opts.token
  config.user_options.store_id = opts.store_id
  config.user_options.options = opts.options
  return config
}
