let arr = [3,4,5,6,7]
let ans = []
arr.filter((ele,index)=>{
    if(index%2==0){
        ans.push(ele)
    }
})
console.log(ans.join("-"))
