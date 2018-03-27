// interest = require('../dist/bundle')
var interestjs = Interest.default()
interestjs.init({})
interestjs.lists.add(123, {name: 'test', metadata: {}}).then((data) => {console.log(data)}).catch((e) => {console.log('erro:',e)})



var interestjs = Interest.default()
interestjs.init({})
interestjs.interests.get(1).then((data) => {console.log(data)}).catch((e) => {console.log(e)})


var interestjs = Interest.default()
interestjs.init({})
interestjs.interests.add(1, {
  feature_id: 1,
  account_customer_id: 1,
  entity_id: 122,
  metadata: {}
})
