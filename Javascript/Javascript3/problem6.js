function alpha(char){   
    let u_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"  
    let l_case = "abcdefghijklmnopqrstuvwxyz"  
    for(let i=0; i<26; i++){
        if(char == u_case[i]){
            return l_case[i]
        }
        if(char == l_case[i]){
            return u_case[i]
        }
    }
}
function convert(text){  
    let val = ""
    let N = text.length
    for(let i=0; i<N; i++){
        val += alpha(text[i])
    }
    return val
}
function input(){
    let ans = convert("Test")
    console.log(ans)
}
input()
