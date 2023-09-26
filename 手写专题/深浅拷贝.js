function deepClone(obj) {
  var newObj = Array.isArray(obj) ? [] : {}
  for (const k in obj) {
    if(typeof obj[k] === 'object') {
      newObj[k] = deepClone(obj[k])
    }else {
      newObj[k] = obj[k]
    }
  }
  return newObj
}