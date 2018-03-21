export default (config, opts) => {
  config.token = opts.token
  config.store_id = opts.store_id
  config.options = opts.options
  return config
}
