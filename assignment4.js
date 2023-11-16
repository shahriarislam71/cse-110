const prompt = require("prompt-sync")();

// Question-1
// In javascript reversed slicing is not allowed that is allowed in python
let input1 = prompt("enter a string")
let len = input1.length
let reversed = ""
for (let i = len-1; i>=0; i--){
  reversed+=input1[i]
}
console.log(reversed)

// question-2
let input2_1 = prompt("Enter a string")
let input2_2 = parseInt(prompt("Enter a string"))
let reversed2 = ""
for (let i = input2_2; i>=0; i--){
  if (input2_1.length>1){
    reversed2+=input2_1[i]
  }
  else{
    console.log("Invalid Input")
    break
  }
}
let remaining_input = input2_1.slice(input2_2+1,)
if ((input2_1.length)-1 == input2_2){
  console.log(reversed2)
}
else{
  reversed2+=remaining_input
  console.log(reversed2)
}

// question-3
let input3 = prompt("Enter a string")
let flag = "True"
for (let i in input3){
  if (input3[i] == "0" || input3[i] == "1"){
    flag = "True"
  }
  else{
    flag = "False"
    break
  }
}
if (flag == "True"){
  console.log("Binary Number")
}
else{
  console.log("Not a binary number")
}

// Question-4
let input4 = prompt("Enter a string")
if (input4.endsWith("er")){
  console.log((input4.slice(0,input4.length-2))+"est")
}
else if(input4.endsWith("est")){
  console.log(input4)
}
else if (input4.length>3){
  console.log(input4+"er")
}
else{
  console.log(input4)
}

// Question-5
let input5 = prompt("Enter a number")
let concat = ""
for  (let i in input5){
  concat+=input5[i]
  console.log(concat)
}

// Question-6
let input6 = prompt("Enter a number")
for (let i in input6){
  let output6 = input6.charCodeAt(i)
  console.log(`${input6[i]} : ${output6}`)
}

// Question-7
let input7 = prompt("Enter a number")
let modifiedOutput = input7.toLowerCase()
let concat7 = ""
for (let i in modifiedOutput){
  // It  convert character to ascii value 
  let charcode = modifiedOutput.charCodeAt(i)
  if (charcode == 122){
    // It  convert ascii value to character
    concat7+=String.fromCharCode(charcode-25)
  }
  else{
    concat7+=String.fromCharCode(charcode+1)
  }
} 
console.log(concat7)

// Question-8
let input8 = prompt("Enter a number")
let lowerInput8 = input8.toLowerCase()
let concat8 = ""
for (let i in lowerInput8){
  if (i%2 != 0){
    let evenString = lowerInput8.charCodeAt(i)
    concat8+=String.fromCharCode(evenString-32)
  }
}
console.log(concat8)

// Question-9
let input9 = prompt("Enter a number")
let concat9 = "" + input9.slice(0,1)
for (let i = 0; i<(input9.length)-1;i++){
  if (concat9.slice(-1) != input9[i+1]){
    concat9+=input9[i+1]
  }
}
console.log(concat9)

// Question-10
let input10 = prompt("Enter a number")
let split10 = input10.split(",")
let concat10 = ""
for (let i in split10) {
  concat10 += split10[i]
}

let counter = 0
for (let j in concat10) {
  counter += 1
  if (concat10[j] == " ") {
    break
  }
}
let output10 = ""
let leftString = concat10.slice(0, counter-1)
let rigthstring = concat10.slice(counter,)
if (leftString.length >= rigthstring.length) {
  let restLeftString = leftString.slice(rigthstring.length,)
  for (let k = 0; k < rigthstring.length; k++) {
    output10 += leftString[k]
    output10 += rigthstring[k]
  }
  output10 += restLeftString
  console.log(output10)
}
else {
  let restRightString = rigthstring.slice(leftString.length,)
  for (let l = 0; l < leftString.length; l++) {
    output10 += leftString[l]
    output10 += rigthstring[l]
  }
  output10 += restRightString
  console.log(output10)
}

