function lower_case(list){
    let u_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"  
    let l_case = "abcdefghijklmnopqrstuvwxyz"
    for(let i=0; i<list.length; i++){
        list[i] = list[i].toLowerCase()
    }
    return list
}


let arr = ["MA", "SA", "I", "SCH", "OOL"]
let ans = lower_case(arr)
console.log(ans)



