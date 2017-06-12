const {get, set} = require('../lib/store.js')
const {join, append, compose} = require('ramda')
const ls = require('./ls')

module.exports = compose(
  ls,
  setState,
  createState,
  createTodoObj,
  joinText
)

function setState(state){
  set(state)
}

function createState(obj){
  return {'counter': obj.id, 'todos': append(obj, get().todos)}
}

function createTodoObj(text){
  return {
    'id': get().counter + 1,
    'text': text,
    'complete': false
  }
}

function joinText(textList){
  return join(" ", textList)
}
