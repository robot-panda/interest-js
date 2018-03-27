export class Config {
  constructor (config) {
    this.user_options = {
      'token': config.token,
      'account_id': config.account_id,
      'metadata': config.metadata
    }
    this.app_options = {
      'development': {
        'app_timeout': 1000,
        'app_protocol': 'http',
        'interestjs_base_path': '://localhost:3000',
        'interestjs_account_path': '/api/v1/accounts',
        'interestjs_customer_path': '/api/v1/customers',
        'interestjs_interest_path': '/api/v1/interests'
      }
    }
  }
}
