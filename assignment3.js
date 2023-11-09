const prompt = require("prompt-sync")();

// Question-1(a)
let i = 24, sum = ""
while(i>=-6){
    if (i>=0){
        sum = sum+" "+ i+","
    }
    else{
        sum = sum+" "+i
    }
    i-=6
}
console.log(sum)

// Question-1(b)
i = -10 
let sum1 = ""
while(i<=20){
    if (i!=20){
        sum1 = sum1+" "+ i+","
    }
    else{
        sum1 = sum1+" "+ i
    }
    i+=5
}
console.log(sum1)

// Question-1(c)
i = 18 
let sum3 = ""
while(i<=63){
    if (i!=63){
        sum3 = sum3+" "+ i+","
    }
    else{
        sum3 = sum3+" "+ i
    }
    i+=9
}
console.log(sum3)

// Question-2
let carName = prompt("Enter a car name")
let number_2 = parseInt(prompt("Enter a number"))
i = 0
while (i<number_2){
    console.log(carName)
    i+=1
}

// Question-3
let number_3 = parseInt(prompt("Enter a number"))
i = 0
let sum_3 = 0
while (i<number_3){
    let inputNumber_3 = parseInt(prompt("Enter a number"))
    sum_3 = sum_3 + inputNumber
    i+=1
}
console.log(sum_3)

// Question-4
i = 0
let sum_4 = 0
while (i<=600){
    if ((i%7==0 && i%9==0)){

    }
    else if ((i%7==0 || i%9==0)){
        sum_4+=i
    }
    i+=1
}
console.log(sum_4)

// Question-5
i =10
let sum_5 = ""
while (i<=50){
    if (i%2!=0){
       sum_5+=i+" "
    }
    i+=1
}
console.log(sum_5)

// Question-6
let number_6 = parseInt(prompt("Enter a number"))
i = 1
let sum_6 = 0
while (i<=number_6){
    if (i%2 != 0){
       sum_6+=i**2
    }
    else{
        sum_6+=-(i**2)
    }
    i+=1
}
console.log(sum_6)

// Question-7
let number_7 = parseInt(prompt("Enter a number"))
i = 0
let sum_7 = 0
let counter_7 = 0
while (i<number_7){
    let inputNumber_7 = parseInt(prompt("Enter number"))
    if (inputNumber%2!=0){
        sum_7+=inputNumber_7
        counter_7+=1
    }
    i+=1
}
let avg = sum_7/counter_7
console.log(" The total of the odd numbers is" ,sum_7,"and their average is ",avg)

// Question-8
let number_8 = parseInt(prompt("Enter a number"))
i = 0
let sum_8 = 0
while (i<=number_8){
    if (i%7==0){
       sum_8+=i
    }
    i+=1
}
console.log(sum_8)

// Question-9
let number_9 = parseInt(prompt("Enter a number"))
i = 0
let sum_9 = 0
while (i<number_9){
    let inputNumber_9 = parseInt(prompt("Enter a number"))
    sum_9+=inputNumber_9
    console.log(sum_9)
    i+=1
}

// Question_10
let number_10 = parseInt(prompt("Enter a number"))
let sum_10 = ""
while (number_10!=0){
    let output = number_10%10
    if (number_10.toString().length==1){
        sum_10+=output
    } 
    else{
        sum_10+=output+","
    }
    number_10 = parseInt(number_10/10)
}
console.log(sum_10)

// Question-11
let number_11 = parseInt(prompt("Enter a number"))
let counter_11 = 0
while (number_11!=0){
    number_11 = parseInt(number_11/10)
    counter_11+=1
}
console.log(counter_11)

// Question-12
let number_12 = parseInt(prompt("Enter a number"))
let output_12 = number_12
let sum_12 = ""
while (output_12.toString().length != 1) {
    let numLength = (output_12.toString().length) - 1
    number_12 = parseInt(output_12 / (10**numLength))
    sum_12 += number_12 + ","
    output_12 = output_12%(10**numLength)
}
sum_12+=output_12
console.log(sum_12)

// Question-13
let number_13 = parseInt(prompt("Enter a number"))
i = 0
let sum_13 = "",counter = 0
while (i<=number_13){
    if (number_13%i == 0){
        sum_13+=i+"\n"
        counter+=1
    }
    i+=1
}
console.log(sum_13,"\n",counter)

// Question-14
let number_14 = parseInt(prompt("Enter a number"))
i = 0
let sum_14 = 0
while (i<number_14){
    if (number_14%i == 0){
        sum_14+=i
    }
    i+=1
}
if (sum_14==number_14){
    console.log("Perfect Number")
}
else{
    console.log("Not a perfect number")
}

// Question-15
let number_15 = parseInt(prompt("Enter a number")),counter_15=0
i = 2
while (i<number_15){
    if (number_15%i == 0){
        counter_15+=1
    }
    i+=1
}
if (counter_15 == 0){
    console.log("Prime Number")
}
else{
    console.log("Not a prime number")
}

// Question-16
let number_16 = parseInt(prompt("Enter a number"))
let avg_16 = 0
let max = 0, min = 0
i = 0
while (i<number_16){
    let inputNumber_16 = parseInt(prompt("Enter a number"))
    avg_16+=inputNumber_16/number_16
    if (max<inputNumber_16){
        max = inputNumber_16
    }
    if (min>inputNumber_16){
        min = inputNumber_16
    }
    i+=1
}
console.log(max,"\n",min,"\n",avg_16)

// Question-17
let number_17 = parseInt(prompt("Enter a number"))
i = 0
while (i<number_17){
    let j = 0
    let sum_17 = ""
    while (j<number_17){
        sum_17+='+'
        j+=1
    }
    console.log(sum_17)
    i+=1
}

// Question-18
let number_18_1 = parseInt(prompt("Enter a number"))
let number_18_2 = parseInt(prompt("Enter a number"))
i = 0
while (i<number_18_1){
    j = 1
    let sum_18 = ""
    while (j<=number_18_2){
        sum_18+=j
        j+=1
    }
    console.log(sum_18)
    i+=1
}

// Question-19
let number_19 = parseInt(prompt("Enter a number"))
i = 1
while (i<=number_19){
    j = 1
    let sum_19 = ""
    while (j<=i){
        sum_19+=j
        j+=1
    }
    i+=1
    console.log(sum_19)
}