var createView = require('../../create')
var render = require('../../render')
var h = require('../../node_modules/virtual-dom/virtual-hyperscript')

console.log('hello?')

function hello(state) { return h('p', state.msg) }

var state = { msg: 'hello cruel world!' }
var v = createView(document.body, hello, state)
window.state = state

