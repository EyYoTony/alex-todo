const {get, set} = require('../lib/store')
const {reject, compose, head} = require('ramda')
const ls = require('./ls')

module.exports = compose(
  ls,
  setState,
  removeObj,
  parseInput
)

function setState(todoList){
  set({'counter': get().counter-1, 'todos': todoList})
}

function removeObj(id){
  return reject(x => x.id === id, get().todos)
}

function parseInput(rest){
  return parseInt(head(rest), 10)
}
