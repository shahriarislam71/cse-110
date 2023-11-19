const prompt = require("prompt-sync")();

// Question-1
// use const for list
const list1 = []
for (let i = 0; i<5; i++){
    let input1 = parseInt(prompt("Enter a number"))
    list1[i] = input1
    console.log("Numbers in the list: ",list1)  
}

// Question-2
// JSON.parse used to convert something to object
let input2 = JSON.parse(prompt("Enter a list"))
let newlist = []
if (input2.length>4){
    for (let i = 2 ; i<(input2.length)-2;i++){
        newlist.push(input2[i])
      }
}
console.log(newlist)

// Question-3
let list3 = []
for (let i = 4; i>=0; i--){
  let input3 = parseInt(prompt("Enter a number"))
  list3[i] = input3
}
console.log(list3)

// Question-4
let input4 = JSON.parse(prompt("Enter a number"))
let list4 = []
for (let i in input4){
  list4[i] = (input4[i])**2
}
console.log(list4)

// Question-5
let input5 = JSON.parse(prompt("Enter a number"))
let list5 = []
let stringCounter = 0
for (let i in input5){
  if (input5[i] != ("")){
    list5[stringCounter] = input5[i]
    stringCounter+=1
  }
}
console.log(list5)

// Question-6
let input6 = prompt(">>>")
let split6 = input6.split(",")
let index = 0
let max = 0
let list6 = []
for (let i in split6){
  list6[i] = parseInt(split6[i])
  if (parseInt(split6[i])>max){
    max = parseInt(split6[i])
    index = i
  }
}
console.log(`My list: [${list6}]
Largest number in the list is ${max} which was found at index ${index}.`)

// Question-7
let input7_1 = JSON.parse(prompt("Enter a list"))
let input7_2 = JSON.parse(prompt("Enter a list"))
let list7 = []
for (let i in input7_1){
    if (i == input7_1.length-1){
        for (let j = input7_1.length-1; j<input7_2.length+(input7_1.length-1);j++){
            list7[j] = input7_2[j-(input7_1.length-1)]
        }
    }
    else{
        list7[i] = input7_1[i]
    }
}
console.log(list7)

// Question-8
let input8_1 = JSON.parse(prompt("Enter a list"))
let input8_2 = JSON.parse(prompt("Enter a list"))
let list8 = []
let index8_1 = 0
for (let i in input8_1){
    if (input8_1[i]%2==0){
        list8[index8_1] = input8_1[i]
        index8_1+=1
    }
}
let index8_2 = index8_1
for (let j in input8_2){
    if (input8_2[j]%2==0){
        list8[index8_2] = input8_2[j]
        index8_2+=1
    }
}
console.log(list8)

// Qestion-9
let input9 = (prompt("Enter a list"))
let originalList9 = []
let modifiedList9 = []
let index9_1 = 0
let sum = ""
for (let i = 0; i<input9.length ; i++){
    if (i == input9.length-1){
        sum+=input9[i]
        originalList9[index9_1] = sum
    }
    else if (input9[i] !== " "){
        sum+=input9[i]
    }
    else{
        originalList9[index9_1] = sum
        index9_1+=1
        sum = ""
    }
} 
let index9_2 = 0
for (let j in originalList9){
    if (originalList9[j]%2 != 0){
      modifiedList9[index9_2] = originalList9[j]
      index9_2+=1
    }
}
console.log(`Original List : [${originalList9}]
Modified List : [${modifiedList9}]`)

// Question-10
let input10 = prompt("Enter a number")
let split10 = input10.split(",")
let originalList = []
let modifiedList = []
let index10 = 0
for (let i in split10){
    originalList[i] = parseInt(split10[i])
    if (modifiedList.includes(parseInt(split10[i])) != true ){
      modifiedList[index10] = parseInt(split10[i])
      index10+=1
    } 
}
console.log(`Original List : [${originalList}]
Modified List : [${modifiedList}]`)

// Question-11
let input11_1 = JSON.parse(prompt("Enter a list"))
let input11_2 = JSON.parse(prompt("Enter a list"))
let flag = false
for (let i in input11_1){
  if (input11_2.includes(input11_1[i]) == true){
    flag = true
    break
  }
}
if (flag == true){
    console.log("True")
}
else{
    console.log("False")
}