const {get, set} = require('../lib/store.js')
const {compose, slice, head, map, join} = require('ramda')
const ls = require('./ls')

module.exports = compose(
  ls,
  setState,
  changeText,
  formatData
)

function setState(todoList){
  set({'counter': get().counter-1, 'todos': todoList})
}

function mapFn(id, text, obj){
  const outObj = obj
  if(id === obj.id){
    outObj.text = text
  }
  return outObj
}

function changeText(dataList){
  return map(x => mapFn(dataList[0], dataList[1], x), get().todos)
}

//output = [id, text]
function formatData(rest){
  return [parseInt(head(rest), 10), join(" ", slice(1, Infinity, rest))]
}
