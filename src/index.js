import { Config } from '@modules/config'
import InitModule from '@modules/init'
import CustomerModule from '@modules/customer'
import ListModule from '@modules/list'
import InterestsModule from '@modules/interest'

export default () => {
  var CONFIG = new Config({})
  return {
    init: opts => InitModule(CONFIG, opts),
    customer: CustomerModule(CONFIG, {}),
    lists: ListModule(CONFIG, {}),
    interests: InterestsModule(CONFIG, {})
  }
}
