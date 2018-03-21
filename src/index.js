import { Config } from '@modules/config'
import InitModule from '@modules/init'
import CustomerModule from '@modules/customer'
import InterestsModule from '@modules/interest'

export default () => {
  var CONFIG = new Config({})
  return {
    init: opts => InitModule(CONFIG, opts),
    customer: CustomerModule(CONFIG, {}),
    interests: InterestsModule(CONFIG, {})
  }
}
