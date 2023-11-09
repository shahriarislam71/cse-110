const prompt = require ("prompt-sync")();
// Question-1
// prompt is used to take user input from the user in javascript
let num1 = parseInt(prompt("Enter number1"))
let num2 = parseInt(prompt("Enter number2"))
let sum = num1+num2
let prod = num1*num2
let diff = num1-num2
console.log("sum = ",sum,"\nProduct = ",prod,"\nDifference = ",diff)

// Question-2
let value = parseFloat(prompt("Enter a number"))
let area = Math.PI*value**2
let circumference = 2*Math.PI*value
console.log("Area : ",area,"\nCircumference",circumference)

// Question-3
let number1 = parseInt(prompt("Enter number1"))
let number2 = parseInt(prompt("Enter number2"))
if (number1==number2){
    console.log("Numbers are equal")
}
else if (number1>number2){
    console.log("Number1 is greater")
}
else{
    console.log("Number2 is greater")
}

// Question-4
let number1_4 = parseInt(prompt("Enter number1"))
let number2_4 = parseInt(prompt("Enter number2"))
if (number1_4>number2_4){
    let total = number1_4-number2_4
    console.log(total)
} 
else{
    let total = number2_4-number1_4
    console.log(total)
}

// Question-5
let number1_5 = parseInt(prompt("Enter number1"))
if (number1_5%2==0){
    console.log("The number is even")
}
else{
    console.log("The number is odd")
}

// Question-6
let number1_6 = parseInt(prompt("Enter number1"))
if (number1_6%2==0 || number1_6%5==0){
    console.log(number1_6)
}
console.log("Not a multiple of 2 OR 5")

// Question-7
let number1_7 = parseInt(prompt("Enter number1"))
if (number1_7%2==0 && number1_7%5==0){
    console.log("Multiple of 2 and 5 both")
}
else if (number1_7%2 || number1_7%5){
    console.log(number1_7)
}
else{
    console.log("Not a multiple we want")
}

// Question-8
let number1_8 = parseInt(prompt("Enter number1"))
if (number1_8%2==0 && number1_8%5==0){
    console.log(number1_8)
}
else{
    console.log("Not multiple of 2 and 5 both")
}

// Question-9
let number1_9 = parseInt(prompt("Enter number1"))
// Math.trunc is used to delete the number that is after the (.)value like Math.trunc(2.43)==2
hours = Math.trunc(number1_9/3600)
number1_9 = number1_9%3600
minute = Math.trunc(number1_9/60)
second = number1_9%60
console.log("Hours : ",hours, "Minutes : ",minute, "Seconds : ",second)

// Question-10
let number1_10 = parseInt(prompt("Enter number1"))
if (number1_10<=40){
    let total = number1_10*200
    console.log(total)
}
else{
    let extra_number = number1_10-40
    total = 8000+(extra_number*300)
    console.log(total)
}

// Question-11
let value_11 = parseInt(prompt("Enter number1"))
if (value_11<100){
    let total = 3000-(125*(value_11**2))
    console.log(total)
}
else{
    total = (12000/(4+(value_11**2/14900)))
    console.log(total)
}

// Question-12
let breakfast_time = parseFloat(prompt("Enter a breakfast time"))
console.log(breakfast_time)
if ((breakfast_time>=4 && breakfast_time<=6) && breakfast_time==parseInt(breakfast_time)){
    console.log("Breakfast")
}
else if ((breakfast_time>=12 && breakfast_time<=13) && breakfast_time==parseInt(breakfast_time)) {
    console.log("Lunch")
}
else if((breakfast_time>=16 && breakfast_time<=17) && breakfast_time==parseInt(breakfast_time)){
    console.log("Snacks")
}
else if((breakfast_time>=19 && breakfast_time<=20) && breakfast_time==parseInt(breakfast_time)){
    console.log("Dinner")
}
else if ((breakfast_time>=0 && breakfast_time<=23) && breakfast_time==parseInt(breakfast_time)){
    console.log("Patience is a virtue")
}
else{
    console.log("Wrong time")
}

// Question-13
let mark = parseInt(prompt("Enter your marks"))
if (mark<0 || mark>100){
    console.log("Invalid mark")
}
else if (mark>=0 && mark<50){
    console.log("F")
}
else if (mark>=50 && mark<=59){
    console.log("E")
}
else if (mark>=60 && mark<=69){
    console.log("D")
}
else if (mark>=70 && mark<=79){
    console.log("C")
}
else if (mark>=80 && mark<=89){
    console.log("B")
}
else{
    console.log("A")
}

// SQuestion-14
let distance = parseInt(prompt("Enter a distance"))
let time = parseInt(prompt("Enter a time"))
let velocity = (distance*3600)/(time*1000)
if (velocity<60){
    console.log(velocity, "km/h","\nToo slow. Needs more changes.")
}
else if (velocity>=60 && velocity<=90){
    console.log(velocity, "km/h","\nVelocity is okay. The car is ready!")
}
else{
    console.log(velocity, "km/h","\nToo fast. Only a few changes should suffice.")

}

// Question-15
let cg = parseFloat(prompt("Enter your cg"))
let credit = parseInt(prompt("Enter your credit"))
if ((cg>=3.8 && cg<=3.89) && credit>30){
    console.log("The student is eligible for a waiver of 25 percent")
}
else if ((cg>=3.9 && cg<=3.94) && credit>30){
    console.log("The student is eligible for a waiver of 50 percent")
}
else if ((cg>=3.95 && cg<=3.99) && credit>30){
    console.log("The student is eligible for a waiver of 75 percent")
}
else if ((cg==4) && credit>30){
    console.log("The student is eligible for a waiver of 100 percent")
}
else{
    console.log("The student is not eligible for a waiver")
}