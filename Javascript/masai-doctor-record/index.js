let form = document.querySelector("form")
form.addEventListener("submit",getInput)
window.addEventListener("load",showData)

function getInput(e){
    e.preventDefault() 
    // console.log(e.target.name.value)
    let name = document.getElementById("name").value
    // name = name.value
    // console.log(name);
    
    let doctor_type = document.getElementById("doctor_id").value
    let specialization = document.getElementById("specialization").value
    let experience = document.getElementById("experience").value
    let email = document.getElementById("email").value
    let mobile = document.getElementById("mobile").value
    // console.log(name,doctor_type,specialization,experience,email,mobile)
    let role = ""
        if(experience>5){
            role = "Senior"
        }
        else if(experience>=2 && experience<=5){
            role = "Junior"
        }
        else{
            role = "Trainee"
        }
    let data = {
        name : name,
        doctor_id : doctor_type,
        specialization : specialization,
        experience : experience,
        email : email,
        mobile : mobile,
        role : role
    }
    addNew(data) 
    showData() 
}

function addNew(data){
    let doctorData = localStorage.getItem("doctors")
    // console.log(doctorData);
    doctorData = doctorData ? JSON.parse(doctorData):[]
    doctorData.push(data)
    // console.log(doctorData);
    localStorage.setItem("doctors",JSON.stringify(doctorData))    
}
function showData(){
    let tbody =  document.querySelector("tbody")
    tbody.innerText = ""
    let doctorData = localStorage.getItem("doctors")
    doctorData = doctorData ? JSON.parse(doctorData):[]
    doctorData.forEach(el => {
        let tr = document.createElement("tr")
        let td1 = document.createElement("td")
        let td2 = document.createElement("td")
        let td3 = document.createElement("td")
        let td4 = document.createElement("td")
        let td5 = document.createElement("td")
        let td6 = document.createElement("td")
        let td7 = document.createElement("td")
        let td8 = document.createElement("td")
        td8.setAttribute("class","btnDeleteBox")
        let btnDelete = document.createElement("button") 
        btnDelete.setAttribute("class","btnDelete")
        btnDelete.innerText = "Delete"       
        td1.innerText = el.name
        td2.innerText = el.doctor_id
        td3.innerText = el.specialization
        td4.innerText = el.experience
        td5.innerText = el.email
        td6.innerText = el.mobile        
        td7.innerText = el.role
        td8.append(btnDelete)
        tr.append(td1,td2,td3,td4,td5,td6,td7,td8)
        tbody.append(tr)
    });
}

