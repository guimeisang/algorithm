// useCallback 并不会执行函数，它只是在deps变化的时候返回第一个参数的函数；
// react 重新渲染的依据是props是否有变化，如果每次都创新新的函数，那么不是每次都会重新渲染。
// 所以用useCallback包括的函数参数，deps没变的时候，始终返回同一个函数，避免没必要的渲染。
const getKey = React.useCallback<GetKey<T>>(
  (item: T) => {
    if(typeof itemKey === 'function') {
      return itemKey(item)
    }
    return item?.[itemKey]
  },
  [itemKey],
)