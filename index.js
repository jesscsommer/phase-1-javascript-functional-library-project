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

//TODO Pick up at myReduce and build following functions

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