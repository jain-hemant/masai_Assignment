// fill in javascript code here
let form = document.querySelector("form")
let eName = document.getElementById("name")
let eId = document.getElementById("employeeID")
let dept = document.getElementById("department")
let exp = document.getElementById("exp")
let email = document.getElementById("email")
let mobile = document.getElementById("mbl")
let count = 0
let dataBase = []
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let checkData = getData() || []
    let obj = {}
    obj.name = eName.value
    obj.id = eId.value
    obj.dept = dept.value
    obj.exp = exp.value
    obj.email = email.value
    obj.mobile = email.value           
    checkData.push(obj)
    // console.log("checkData",checkData);
    localStorage.setItem("data",JSON.stringify(checkData) )

})

function getData(){
    let data = localStorage.getItem("data")
    if(data){
        let parseData = JSON.parse(data)
        console.log("parse data",parseData);
        return parseData;
    }
    return null
}

