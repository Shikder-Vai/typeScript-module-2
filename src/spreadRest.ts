const myFriends =["kalam", "salam", "basar","tushar"];
const newFriends = ["subhan", 'murshed', 'rasel'];
myFriends.push(...newFriends)
// console.log(myFriends);

const friendsList = ["kalam", "salam", "basar", "tushar"]
friendsList.map(friend => {
    // console.log(`hello ${friend}`)
})

//Rest Perametar
const sayHi = (...friends:string[]):void => {friends.forEach(friend=>console.log(`hi ${friend}`))
}
sayHi("kalam", "salam", "kolom")


const booksReaded = (...books: string[]) :void => {
    books.forEach(book=>console.log(`I readed this ${book} book`))
}
booksReaded("kishor senapoti", "imandipto dastan", "roktatto falistin")

const iNeedThis = (...wanted: string[]): void => {
    wanted.map(want => console.log(`I want this ${want}`))
}
iNeedThis("pc table", "big monitor", "ssd ", "work room setup")