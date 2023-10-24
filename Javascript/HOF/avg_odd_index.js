let arr = [10, 24, 56, 72, -10, -88, 100, 564]
let summ = 0
let counter = 0
arr.map((ele, index) => {
    if(index%2!=0){
        summ +=  ele
        counter += 1
    }

})
console.log((summ/counter))