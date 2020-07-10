function add(x,y){
    return x + y
}
console.log(add(2,5))

function  multiply(x,y){
    let total = 0
    for (let i =0; i < y; i++){
        total = add(x,total)
    }
    return total
}
console.log(multiply(3,6))
function power(x,y){
    let total = 1
    for (let i= 0; i < y; i++){
        total = multiply(x,total)
    }
    return total
}
console.log(power(4,6))
function factorial(x){
    let total = 1
    for (let i = x; i > 1; i--){
        total = multiply(i,total)

    }
    return total
    
}
console.log(factorial(5))