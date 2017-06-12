const {get} = require('../lib/store.js')
const {reduce} = require('ramda')

module.exports = function(state){
  const todos = state.todos
  return formatPercent(todos)
}

function formatPercent(todos){
  return `${countCompleted(todos)/todos.length*100} percent done`
}

function countCompleted(todoList){
  return reduce(reducer, 0, todoList)
}

function reducer(acc, obj){
  if(obj.completed)
    return acc+1
  return acc
}
