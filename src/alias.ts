//Normal method
const clint: {
    name: string,
    age: number,
    mail: string,
    profession: string,
    marridStatus: boolean
} = {
    name: "abul kalam",
    age: 45,
    mail: "abul@gmail.com",
    profession: "manager",
    marridStatus: true
}
const clint1: {
    name: string,
    age: number,
    mail: string,
    profession: string,
    marridStatus: boolean
} = {
    name: "abul basar",
    age: 24,
    mail: "bashar@gmail.com",
    profession: "seo",
    marridStatus: false
}
// console.log(clint);
// console.log(clint1);

//Alias Method
type ClintType = {
    name: string,
    age: number,
    mail: string,
    profession: string,
    marridStatus: boolean
}

const clint2: ClintType = {
    name: "abul kalam",
    age: 45,
    mail: "abul@gmail.com",
    profession: "manager",
    marridStatus: true
}
const clint3:ClintType= {
    name: "abul basar",
    age: 24,
    mail: "bashar@gmail.com",
    profession: "seo",
    marridStatus: false
}
// console.log(clint2);
// console.log(clint3);

type Books = {
    name: string,
    pages: number,
    writer: string,
    isOnline ?: boolean
}
const book1: Books = {
    name: 'kuyasha',
    pages: 122,
    writer: "abul mia",
    isOnline: true
}
const book2: Books = {
    name: 'dhuyasha',
    pages: 162,
    writer: "kabul mia",
    isOnline: false
}
const book3: Books = {
    name: 'shuyasha',
    pages: 142,
    writer: "abul mia",
}

type CourseNameType = string
const courseName: CourseNameType = "Next Level Development"

type IsIGo = boolean;
const iWillgo: IsIGo = true;

type OparetionType = (x: number, y: number) => number
const calculatot = (num1: number, num2: number, oparetion: OparetionType) => {
    return oparetion(num1,num2)
}


console.log(calculatot(40, 10, (x, y) => x - y))
console.log(calculatot(12,35,(x,y)=>x + y));