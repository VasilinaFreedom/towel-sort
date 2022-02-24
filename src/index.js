
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(arguments.length===0){return []}
    if(matrix.length===0){return []}
      else if(matrix.length ===2){
        let arr1 = []
      arr1.unshift(matrix[0])
      let a1= arr1.flat()
      let arr2 = []
      arr2.unshift(matrix[1])
      let a2= arr2.flat()
      a2.reverse()
      let newArr = a1.concat(a2)
      return newArr
      }
      else if(matrix.length===3){
      let arr1 = []
      arr1.unshift(matrix[0])
      let a1= arr1.flat()
      let arr2 = []
      arr2.unshift(matrix[1])
      let a2= arr2.flat()
      a2.reverse()
      let arr3 = []
      arr3.unshift(matrix[2])
      let a3= arr3.flat()
      let newArr = a1.concat(a2,a3)
      return newArr
    }
    else if(matrix.length===4){
        let arr1 = []
        arr1.unshift(matrix[0])
        let a1= arr1.flat()
        let arr2 = []
        arr2.unshift(matrix[1])
        let a2= arr2.flat()
        a2.reverse()
        let arr3 = []
        arr3.unshift(matrix[2])
        let a3= arr3.flat()
        let arr4 = []
        arr4.unshift(matrix[3])
        let a4= arr4.flat()
        a4.reverse()
        let newArr = a1.concat(a2,a3, a4)
        return newArr
    }
}
