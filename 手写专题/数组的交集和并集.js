const a = [1, 2, 3, 4, 5]
const b = [2, 4, 6, 8, 10]

// 使用ES5写法

// 交集
const jiaoji = a.filter(function(v) { return b.indexOf(v) > -1 })

// 差集
const chaji = a.filter(function(v) { return b.indexOf(v) === -1 })

// 补集
const buji = a.filter(function(v) {return !(b.indexOf(v) > -1)}).concat(b.filter(function(v) {return !(a.indexOf(v) > -1)}))

// 并集
const bingji = a.concat(b.filter(function(v) {return !(a.indexOf(v) > -1)}))


// 使用ES6写法
const sa = new Set(a)
const sb = new Set(b)

// 交集
const intersect = a.filter(x => sb.has(x))

// 差集
const minus = a.filter(x => !sb.has(x))

// 补集
const complement = [...a.filter(x => !sb.has(x), ...b.filter(x => !sa.has(x)))]

// 并集
const unionSet = Array.from(new Set([...a, ...b]))