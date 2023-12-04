import { useState } from 'react';

const useHash = (initialValue = null) => {
  const [storeValue, setStoreValue] = useState(() => {
    try {
      const item = window.location.hash
      return item ? item.slice(1) : initialValue
    } catch (error) {
      console.log(error)
      return initialValue
    }
  })

  const setValue = value => {
    try {
      setStoreValue(value)
      history.pushState(null, null, `#${value}`)
    } catch (error) {
      console.log(error)
    }
  }

  return [storedValue, setValue]
}