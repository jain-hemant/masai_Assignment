let form = document.querySelector("form")
let task = document.getElementById("task")
let priority = document.getElementById("priority")
let tbody = document.querySelector("tbody")
let bag = []
form.addEventListener("submit",(e)=>{
    tbody.innerText = null
    e.preventDefault()
    let obj = {}
    obj.task = task.value
    obj.priority = priority.value
    bag.push(obj)
    bag.map((el)=>{
        let row = document.createElement("tr")
        let td1 = document.createElement("td")
        let td2 = document.createElement("td")
        td1.innerText = el.task
        td2.innerText = el.priority
        if(el.priority=="High"){
            row.style.backgroundColor = "red"
        }
        else{
            row.style.backgroundColor = "green"
        }
        row.append(td1,td2)
        tbody.append(row)

    })
    
})