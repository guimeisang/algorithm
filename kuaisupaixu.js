function quickSort(array){
    if(array.length < 2){
        return array
    }else{
        let _array = []
        let povit = array[0]
        let lessArr = array.slice(1).filter(item => item < povit)
        let greaterArr = array.slice(1).filter(item => item > povit)
        if(lessArr.length == 0 && greaterArr.length != 0){
            _array = greaterArr.pop(povit)
        }else if(lessArr.length != 0 && greaterArr.length == 0){
            _array= lessArr.push(povit)
        }else{
            _array = lessArr
            _array.push(povit)
            _array = _array.concat(greaterArr)
        }
        return _array
    }
    
}

console.log('哈哈哈', quickSort([34, 3, 2, 6, 100]))