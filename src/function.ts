//Normal function
function add (num1:number, num2:number):number{
    return num1 + num2
}
add(1,2)

function book(firstName:string, lastName:string):string{
    return `the book name is ${firstName + lastName}`
}
book("kishor", "senapoti")

function multiply (num1:number, num2:number):number{
    const total = num1 * num2
    return total
}
multiply(12,14)

//Arrow Function
const add2 =(num1:number, num2:number):number=> num1+num2;
add2(45,65)

const bookName = (fastName:string,lastName:string):string=>{
    return `the book name is ${ fastName + lastName}`
}

const evenNum =(num1:number, num2:number):number=>num1-num2;

//This function
const profile :{
    name:string,
    age:number,
    balance:number,
    addBalance(money:number):number
}={
    name:"Shikder",
    age:23,
    balance: 5,
    addBalance(money:number){
        return this.balance + money
    }
}
profile.addBalance(455)
