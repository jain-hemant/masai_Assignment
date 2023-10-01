function average(list){
    let N = list.length
    let total = 0
    // console.log(N)
    for(let i=0; i<N; i++){
        total += list[i]
    }
    console.log(total/N)
}
let arr = [1,2,3,4,5]
average(arr)