

// program 1

// let user  = 7

// if (user % 2 == 0){
//     console.log("number is even")
// }
// else{
//     console.log("number is odd")
// }


// program 2

// let a = 5
// let b = 9

// if (a>=b){
//     console.log("a is greter ")
// }
// else{
//   console.log("b is greter ")
// }



// program 3

// function isLeapYear(year) {
//     if (year % 4 === 0) {

//         if (year % 100 === 0) {

//             if (year % 400 === 0) {
//                 return "Leap year";  

//             } else {
//                 return "not Leap year";  
//             }

//         } else {
//             return "Leap year";  
//         }

//     } else {
//         return "not Leap year";  
//     }
// }

// console.log(isLeapYear(2021)); 



//  program 4


// let user = 5 ;

// let output = 0;

// for (let i = 1; i <= user; i++){
//     output += i;
// }
// console.log(output);


//  program 5

// let user = 4

// let fac = 1

// for (let i=1; i<=user;i++){
//         fac *=i;
// }
// console.log("factorial is : ",fac)


// program 6

// let user = 5

// for (let i=1; i<=10; i++){
//         console.log(user,"*",i,"=",user*i);
// }


// program 7

// let num = 1234;

// let reversed = num.toString().split('').reverse().join();

// console.log(reversed);


// program 8


// let user = 121

// if (user == user.toString().split('').reverse().join('')){
//         console.log("number is pelindrome ")
// }
// else{
//     console.log("not pelindrome")
// }


// program 9

// let user = 7
// let isPrime = true
// if (user <=1){
//     console.log("number is not prime")
//    }

// for(let i=2; i<=6; i++){
        
//     if (user % i == 0){
//         isPrime = false
//         break
//     }
// }
// if(isPrime){
//  console.log("number is prime")
// }
// else{
//   console.log("number not prime")
   
// }



// program 10

// let user = 123456
// let len = 0
// str = user.toString()

// for(let i=1; i <= str.length; i++){
//         len=i
// }
// console.log(len)


// program 11

let num = 123
let toString = String(num)
let sum = 0
for(let i = 0; i < toString.length; i++){
        sum += parseInt(toString[i])
}
console.log(sum)

