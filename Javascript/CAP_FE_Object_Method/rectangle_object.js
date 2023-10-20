function find_area(rect){
    let area = rect["height"] * rect["width"]
    return area
}
function find_perimeter(rect){
    let perimeter = 2*(rect["height"] + rect["width"])
    return perimeter
}

function Execution(ht,wd){
    
    let rectangle = {
        "height" : ht,
        "width" : wd
    }
    let area = find_area(rectangle)
    let perimeter = find_perimeter(rectangle)
    let ans = String("Rectangle of area is : "+ area+ " and perimeter is : "+ perimeter)
    return(ans)
}

//  Main Fuction Call Here

let output = Execution(20,10)
console.log(output)
