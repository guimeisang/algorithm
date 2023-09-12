// 需要一个唯一的值
function mySymbol(obj) {
  let unique = (Math.random() + new Date().getTime()).toString(32).slice(0, 8)
  if(obj.hasOwnProperty(unique)) {
    return mySymbol(obj)
  }else {
    return unique
  }
}

// call
Function.prototype.myCall = function(context) {
  // 如果没有传或传的值为空对象 context指向window
  context = context || window
  let fn = mySymbol(context)
  context[fn] = this
  // 处理参数，去除第一个参数this, 其他传入fn函数
  let arg = [...arguments].slice(1)
  context[fn](...arg)
  delete context[fn]
}

// apply
Function.prototype.myApply = function(context) {
  // 如果没有传或传的值为空对象 context指向window
  if (typeof context === "undefined" || context === null) {
    context = window
  }
  let fn = mySymbol(context)
  context[fn] = this //给context添加一个方法 指向this
      // 处理参数 去除第一个参数this 其它传入fn函数
  let arg = [...arguments].slice(1) //[...xxx]把类数组变成数组，arguments为啥不是数组自行搜索 slice返回一个新数组
  context[fn](arg) //执行fn
  delete context[fn] //删除方法
}

// bind
Function.prototype.bind = function(context) {
  // 返回绑定this的函数，所以需要闭包一个this
  let self = this
  // 可以支持柯力化传参
  let arg = [...arguments].slice(1)
  // 返回一个函数
  return function() {
    let newArg = [...arguments]
    return self.apply(context, arg.concat(newArg))
  }
}