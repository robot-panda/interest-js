// interest = require('../dist/bundle')
var interestjs = Interest.default()
interestjs.init({})
interestjs.lists.add(123, {name: 'test', metadata: {}}).then((data) => {console.log(data)}).catch((e) => {console.log('erro:',e)})
