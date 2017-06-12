const {get, set} = require('../lib/store')
const {map, compose, head} = require('ramda')
const ls = require('./ls')

module.exports = compose(
  ls,
  setState,
  flipCheck,
  parseInput
)

function setState(todoList){
  set({'counter': get().counter, 'todos': todoList})
}

function mapFn(id, obj){
  const outObj = obj
  if(id === obj.id){
    outObj.completed = !obj.completed
  }
  return outObj
}

function flipCheck(id){
  return map(x => mapFn(id, x), get().todos)
}

function parseInput(rest){
  return parseInt(head(rest), 10)
}
