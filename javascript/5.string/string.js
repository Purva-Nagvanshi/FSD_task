let st1=`Purvabharti`

//property 
//length 
console.log(`the length of ${st1} is  ${st1.length}  ` )

//method 

let aray=`akansha`
let n=0

// 1 . indexof() - first occurence of string character 
// 1 . lastIndexof() - last occurence of string character 

n=aray.lastIndexOf(`a`)
console.log(n)

//2.charat()

let m=``
m=aray.charAt(5)
console.log(m)

//case method

//3.toUppercase()
//3.toLowercase()

console.log(aray.toUpperCase())

//4.slice 
let new_name=st1.slice(-6)
console.log(new_name)

//5.substring
let new_name1=st1.substring(-6)
console.log(new_name1)

//6.replace
 new_name1=new_name1.replace(`a`,`e`)
 console.log(new_name1)

 
 //6.replace.all
 new_name1=new_name1.replaceAll(`a`,`e`)
 console.log(new_name1)

 