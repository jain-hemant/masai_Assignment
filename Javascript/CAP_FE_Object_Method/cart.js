let items = ["Rice", "Dal", "Salt"]
let qty = [2, 3, 1]
let price = [60, 50, 20]
N = items.length
let data = []
for(let i=0; i<N; i++){
    let obj = {}
    obj.item = items[i]
    obj.qty = qty[i]
    obj.price = price[i]
    obj.total = qty[i]*price[i]
    data.push(obj)
}
function total(data){
    let total = 0
    for(key in data){
        total += data[key]["total"]
    }
    console.log(total);
}
total(data)
// console.log(data)
