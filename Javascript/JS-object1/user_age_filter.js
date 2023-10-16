function execution(data){
    let ans = ""
    for(key in data){
        // console.log(data[key]["name"])
        if(data[key]["age"] > 30){
            ans += data[key]["name"] + " "
        }
    }
    console.log(ans)
}

function data_store(user_name,user_age){
    let arr_obj = []
    for(let i=0; i<user_name.length; i++){
        let obj = {}
        obj.name = user_name[i] 
        obj.age = user_age[i]
        arr_obj.push(obj)
    }
    return(arr_obj)
}

let user_name = ["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"]
let user_age = [32, 30, 26, 28, 44]
let data = data_store(user_name,user_age)
let result = execution(data)