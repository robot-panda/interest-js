import InterestJs from 'insterestjs'

/* @param config Object */
InterestJs.init({
  token: 'thisisatoken',
  store_id: 123,
  options: {}
})

// clear customer
InterestJs.customer.unidentify()

// set customer
/* @param customer Object */
InterestJs.customer.identify({
  id: 321,
  name: 'Pipo Bizelli',
  email: 'pipo@basico.com',
  metadata: {}
}).then((customer) => {
  console.log(customer)
})

// List ----------------------------------------------------------------------->

// get all lists by feature
/* @param feature String */
InterestJs.lists.list('feature').then((lists) => {
  console.log(lists) // lists by feature
})

// get all lists by feature
/* @param feature String */
/* @param list_name String */
InterestJs.lists.get('feature', 'list').then((list) => {
  console.log(list)
})

// create a list
/* @param feature String */
/* @param list Object */
InterestJs.lists.add('feature', {
  feature: 'feature',
  name: 'list',
  metadata: {}
}).then((lists) => {
  console.log(lists) // all lists from this feature
})

// update a list
/* @param list_id Number */
/* @param list Object */
InterestJs.lists.update(123, {
  feature: 'feature',
  name: 'list',
  metadata: {}
}).then((lists) => {
  console.log(lists) // all lists from this feature
})

// remove a list
/* @param feature String */
/* @param list_name String */
InterestJs.lists.remove('feature', 'list').then((lists) => {
  console.log(lists) // all lists from this feature
})

// Interest ------------------------------------------------------------------->

// verify interest in list
/* @param feature String */
/* @param interest_id Number */
InterestJs.interests.get('list', 123).then((insterest) => {
  console.log(insterest)
})

// send interest
/* @param interest Object */
InterestJs.interests.add('list', {
  type: 'product',
  entity_id: 123,
  entity_name: 'camiseta gola c pima',
  entity_category: 'camisetas',
  metadata: {}
}).then((interest) => {
  console.log(interest) // interest or error
})

// send interest
/* @param interest_id Number */
/* @param interest Object */
InterestJs.interests.update(3214, {
  type: 'product',
  entity_id: 123,
  entity_name: 'camiseta gola v pima',
  metadata: {}
}).then((interest) => {
  console.log(interest) // interest or error
})

/* @param list String */
InterestJs.interests.list('list').then((interests) => {
  console.log(interests) // all interests in the paramter list
})

/* @param list String */
/* @return list Object */
/* @param interest_id Number */
InterestJs.interests.remove('list', 123).then((list) => {
  console.log(list) // list
})
