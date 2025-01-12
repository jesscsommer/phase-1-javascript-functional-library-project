const myEach = (collection, callback) => {
    let array = collection
    if (Array.isArray(collection) === false) {
         array = Object.values(collection)
    }
    for (let elem of array){
        callback(elem)
    }
    return collection
}

const myMap = (collection, callback) => {
    let startArray = collection
    const endArray = []
    if (Array.isArray(collection) === false) {
         startArray = Object.values(collection)
    }
    for (let elem of startArray){
       endArray.push(callback(elem))
    }
    return endArray
}

const myReduce = (collection, callback, acc) => {
    let accumulator = acc
    let startArray = collection
    if (Array.isArray(collection) === false){
        startArray = Object.values(collection)
    } 
    if (!acc) {
        accumulator = startArray[0]
        startArray = startArray.slice(1)
    }
    for (let elem of startArray){
        accumulator = callback(accumulator, elem)
    }
    return accumulator
}

const myFind = (collection, predicate) => {
    let startArray = collection
    if (Array.isArray(collection) === false){
        startArray = Object.values(collection)
    } 
    for (let elem of startArray){
        if (predicate(elem) === true) {
            return elem
        }
    }
    return undefined
}

const myFilter = (collection, predicate) => {
    let startArray = collection
    let endArray = []
    if (Array.isArray(collection) === false){
        startArray = Object.values(collection)
    } 
    for (let elem of startArray){
        if (predicate(elem) === true) {
            endArray.push(elem)
        }
    }
    return endArray
}

const mySize = (collection) => {
    let startArray = collection
    let counter = 0
    if (Array.isArray(collection) === false){
        startArray = Object.values(collection)
    } 
    for (let elem of startArray){
        counter +=1
    }
    return counter
}

const myFirst =  (array, integer) => {
    if (!!integer === false) {
        return array[0]
    } else {
        return array.slice(0, integer)
    }
}

const myLast =  (array, integer) => {
    if (!!integer === false) {
        return array.slice(-1)[0]
    } else {
        return array.slice(array.length-integer, array.length)
    }
}

const myKeys = (obj) => {
    const endArray = []
    for (let key in obj) {
        endArray.push(key)
    }
    return endArray
}

const myValues = (obj) => {
    const endArray = []
    for (let key in obj){
        endArray.push(obj[key])
    }
    return endArray
}