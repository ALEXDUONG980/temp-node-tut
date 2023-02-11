// npm --version

// npm instal -g <packageName>

// npm init

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)