const arrayString = ["melancia","limao","laranja"]

const arrayNumber = [12,45,3]

const arrayMix = ["ben", 36, false]

const arrayUmValor = [5]

const arrayVazio = []

//console.log(arrayString.length)
//console.log(arrayString[3])
//console.log(arrayMix.includes("ben"))
//console.log(arrayUmValor[0])

const copia = arrayString
console.log(copia)
copia.push("mamão")
console.log("Array Original", arrayString);
console.log("Copia", copia);
//copia.pop()
//copia.pop()
//console.log(copia)
//copia.splice(2,2)
//console.log(copia)

//-----------------------------------------


let soNumeros = [10, 20, 30, 40, 50, 60]
let copia2 = soNumeros.slice()

copia2.pop()
copia2.push(6)
copia2.splice(2,1)

console.log(`soNumeros ficou assim: ${soNumeros}`)
console.log(`copia2 ficou assim: ${copia2}`)