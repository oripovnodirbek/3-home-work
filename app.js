alert('hello JavaScript')

// string //
console.log('hello world')

let email = 'nodirbekoripov@gmail.com '
console.log(email)

//string concatination  yani qo'shish
let ism = 'Nodirbek'
let familiya = 'Oripov'
let fullName = ism + ' ' + familiya
console.log(fullName)

// getting characters turgan orni boyicha tanlash
console.log(fullName[4])

// string length => uzunlik 
console.log(fullName.length)

// string methods =>funksiya
console.log(fullName.toUpperCase())

let index = email.indexOf('@')
console.log(index)
//string//

// ko'p qo'llaniladigan string metodlar//

// lastindexOf() => tanlagan charactersni eng oxiridagisini pozitsasini aytadi.
// let result = email.lastIndexOf('i')
// console.log(result)

// slice() => kesib olish desa ham boladi va 1 ta pozitsiya kiritsak undan keyingi barcha charactersni oladi.
// let result = email.slice(5, 8)
// console.log(result)

// substr() =>istaganimizcha characterlarni olishga yordam beradi.
// let result = email.substr(2, 10)
// console.log(result)

// replace => almashtirish
// let result = email.replace('n', 'q')
// console.log(result)

// trim() => boshi va oxiridagi bosh joylarni olib tashlaydi.
// let result = email.trim()
// console.log(result)

//  math operators + , * , - , / , ** , % 
let radius = 50
let pi = 3.14 

console.log(radius / pi)

console.log(radius * pi)

console.log(radius - pi)

console.log(radius + pi)

console.log(radius ** pi)

console.log(radius % pi)

let likes = 10
likes = likes + 1
console.log(likes)

//  template string 
let yosh = 19
let f_i_O = ' Oripov Nodirbek'
let qoshish = `mani ismim ${f_i_O}, man ${yosh} daman.`
console.log(qoshish)


//  array => bir nechta malumotni bitta qilib olish.
let mehmon1 = 'Aziz'
let mehmon2 = 'Bobur'
let mehmon3 = 'Ilhom'
const mehmonlar = [mehmon1, mehmon2, mehmon3]
console.log(mehmonlar[1])

mehmonlar[0] = 'Azam'
console.log(mehmonlar)

// undefined => ozgaruvchi elon qilinib unga qiymat berilmasa u undefinet .
let age 
console.log(age, age + 3, `my age is ${age}` )

//  null => bu data turi va qiymati 0 ga teng.
let log = null
console.log(log, log + 3, `my age is ${log}` )

// boleans => true & false
let son = 20 
// console.log(son == 20)
// console.log(son == 18)
console.log(son != 18)

//  kuchli taqqoslash 
console.log(son === 20)
console.log(son === '20')

// prompt => brauerdan malumot oladi.
let ismingiz = prompt('Ismingizni kiriting')
let boshharf = ismingiz.charAt().toUpperCase()
let boshqaharf = ismingiz.slice(1).toLowerCase()
let qosh = boshharf + boshqaharf
alert(`Salom ${qosh}`)
