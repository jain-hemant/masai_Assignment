let stud = [
	{
		grade: "V",
		students: [
			{name: "Nrupul", marks: [10, 20, 30]},
			{name: "Prateek", marks: [2, 3, 40]}
		]
	},
	{
		grade: "VI",
		students: [
			{name: "Aman", marks: [10, 20, 30]},
			{name: "Albert", marks: [20, 30, 40]}
		]
	},
	{
		grade: "VII",
		students: [
			{name: "Yogesh", marks: [10, 20, 30]},
			{name: "Sandhya", marks: [20, 30, 4]}
		]
	}
]
let output = {
	"grade" : "",
	"name" : "",
	"marks" : 0
}
for(let i=0; i<stud.length; i++){
    let ans_grade = stud[i]["grade"]	
	let max_score = []
    for(let j=0; j<stud[0]["students"].length; j++){
		let marks_sum = 0
		let name = stud[i]["students"][j]["name"]	
		let marks = stud[i]["students"][j]["marks"]
		// console.log(marks)
		for(let k=0; k<marks.length; k++){
			marks_sum += marks[k]
		}
		// console.log(ans_grade,name,marks_sum)
		if(output["marks"]< marks_sum){
			output["grade"] = ans_grade  
			output["name"] =  name
			output["marks"] = marks_sum
		}		
	}
	console.log(output)
	output["grade"] = ""  
	output["name"] =  ""
	output["marks"] = 0
}

