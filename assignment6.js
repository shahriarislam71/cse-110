const prompt = require("prompt-sync")();

// Question-7
let dict1 = {'Harry':15, 'Draco':8, 'Nevil':19}
let dict2 = {'Ginie':18, 'Luna': 14}
let dict3 = {}
for (let i in dict1){
    dict3[i] = dict1[i]
}
for (let j in dict2){
    dict3[j] = dict2[j]
}
console.log(dict3)

// Question-8
const input8 = JSON.parse(prompt("Enter a dictonary"))
let sum = 0
let counter8 = 0
for (let i in input8){
    sum+=input8[i]
    counter8+=1
}
let avg = sum/counter8
console.log(avg)

// Question-9
const exam_marks = {'Cierra Vega': 175, 'Alden Cantrell': 200, 'Kierra Gentry': 165, 'Pierre Cox': 190}
const newDict9 = {}
let input9 = parseInt(prompt("Enter a number"))
for (let i in exam_marks){
    if (exam_marks[i] >= input9){
        newDict9[i] = exam_marks[i]
    }
}
console.log(newDict9)

// Question-10
const dict10 = {'sci fi': 12, 'mystery': 15, 'horror': 8, 'mythology': 10, 'young_adult': 4, 'adventure':14}
let max = 0
let counter = 0
// searching the max if the input have all positive & negative numbers
for (let i in dict10){
    if (dict10[i]>max){
        max = dict10[i]
        counter = i
    }
}
// searching the max if the input have all negative numbers
if (max == 0){
    // find the first value of input
    for (let j in dict10){
        max = dict10[j]
        break
    }
    // this loop is for the negative max
    for (let k in dict10){
        if (dict10[k]>max){
            max = dict10[k]
            counter = k
        }
    }
}
console.log(`The highest selling book genre is '${counter}' and the number of books sold are ${max}`)

// Question-11
let input11 = prompt("Enter a string")
let lowerInput = input11.toLowerCase()
let splitlowerInput = lowerInput.split("")
const dict11 = {}

for (let i in lowerInput){
  if (lowerInput.charCodeAt(i)>= 97 && lowerInput.charCodeAt(i)<=122){
    let counter11 = 0
    for (let j in lowerInput){
        if (lowerInput[i] === lowerInput[j]){
            counter11+=1
        }
    }
    dict11[lowerInput[i]] = counter11
  }
}
console.log(dict11)

// Question-12
const dict_1 = {'A': [1, 2, 3], 'b': ['1', '2'], "c": [4, 5, 6, 7]}
let counter12 = 0 
for (let i in dict_1){
    for (let j in dict_1[i]){
        counter12+=1
    }
}
console.log(counter12)

// Question-13
// Tuple is expressed in javascript as an array
var list_1 = [["a", 1], ["b", 2], ["a", 3], ["b", 1], ["a", 2], ["c", 1]];

// Initialize an empty dictionary
var result_dict = {};

// Iterate through the list of tuples
for (var i = 0; i < list_1.length; i++) {
    var key = list_1[i][0];
    var value = list_1[i][1];

    // If the key is not in the dictionary, create a new entry with an empty list
    if (!result_dict[key]) {
        result_dict[key] = [];
    }

    // Add the value to the list associated with the key
    result_dict[key].push(value);
}

// Print the resulting dictionary
console.log(result_dict);