export class Config {
  constructor (config) {
    this.user_options = {
      'token': config.token,
      'store_id': config.store_id,
      'options': config.options
    }
    this.app_options = {
      'development': {
        'app_timeout': 1000,
        'app_protocol': 'http',
        'interestjs_base_path': '://localhost:3000',
        'interestjs_cusomer_path': '/api/v1/customers',
        'interestjs_interest_path': '/api/v1/interests'
      }
    }
  }
}
