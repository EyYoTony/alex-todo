const {get} = require('../lib/store.js')
const {map, compose, join, isNil, reduce} = require('ramda')
const percent = require('./percentage')

module.exports = function(todos){
  todos = isNil(todos) ? get().todos : todos
  return compose(
    printTodos,
    joinTodos,
    stringifyTodos,
  )(todos)
}

function printTodos(formattedTodo){
  return `
      TODOS
--------------------
  ${formattedTodo}
--------------------
  ${get().todos.length-countCompleted(get().todos)} Unfinished Todos
  ${percent(get())}
  `
}

function countCompleted(todoList){
  return reduce(reducer, 0, todoList)
}

function reducer(acc, obj){
  if(obj.completed)
    return acc+1
  return acc
}

function joinTodos(strList){
  return join('\n  ', strList)
}

function stringifyTodos(todos){
  return map(obj => `[${obj.completed ? "X" : " "}] - ${obj.id} ${obj.text}`,todos)
}

function getTodos(state){
  return state.todos
}
