// function myfunction(a,b) {
//     return a +// // variables
// var x=90;
// console.log(x)

// let y=90;
// console.log(y);
// y=900;
// console.log(y);

// const result= 9+9;
// console.log(result);

// result=6-3
// console.log(result);

// Data Types
// number
// let x=90;
// console.log(x);
// console.log(typeof x);

// string
// const result= "Hello World";
// console.log(result);
// console.log(typeof result);

// Float
// const result=5.78
// console.log(result);
// console.log(typeof result)

// undefined
// let a;
// console.log(a);
// console.log(typeof a);

// null(object)
// const y=null;
// console.log(y);
// console.log(typeof y);

// Boolean
// const isTrue=true;
// console.log(isTrue);
// console.log(typeof isTrue);

// const isMarried=false;
// console.log(isMarried);
// console.log(typeof isMarried);

// BigInt
// const x=4234566n;
// console.log(x);
// console.log(typeof x);

// Symbol
// const result=Symbol("who are you");
// console.log(result);
// console.log(typeof result);

// OBJECT TYPES

// const obj={
//     fName:"Ram Thapa",
//     age: 24,
//     isMarried:true,
//     occupation: "Developer",
//     salary:45000,
// };
// console.log(obj);
// console.log(typeof obj);

// const arr =[3, 4, 5, 6, 7, 8];
// console.log(arr);
// console.log(typeof arr);

// const date=new Date();
// console.log(date);
// console.log(typeof date);

// TYPE CONVERSION

// const x="123";
// const val= Number(x);
// console.log(val);
// console.log(typeof val);

// const x="8.98";
// const output=parseFloat(x);
// console.log(output);
// console.log(typeof output);

// const x=1+"1";
// console.log(x);
// console.log(typeof result);

// const y=8-"4";
// console.log(y);
// console.log(typeof y)

// const x=9;
// const result= x.toString();
// console.log(result);
// console.log(typeof result);

// const x=9;
// const result= String(x);
// console.log(result);
// console.log(typeof result);

// let x=2;
// console.log(false+x);

// let result=true;
// let output=String(result);
// console.log(output);
// console.log(typeof output);

// let date=new Date();
// let result=date.toString();
// console.log(result);
// console.log(typeof result);

// // STRING METHOD

// const result= "Hello World";
// // Length
// console.log(result.length);

// // charAT
// console.log(result.charAt(2));

// // indexof
// console.log(result.indexOf("o"));

// // Last indexOf
// console.log(result.lastIndexOf("O"));

// // LowerCase
// console.log(result.toLowerCase());

// // UpperCase
// console.log(result.toUpperCase());

// // Split
// console.log(result.split(""));

// // includes
// console.log(result.includes("Worlds"));

// // replace
// console.log(result.replace("World","Everyone"));

// // slice
// console.log(result.slice(1,6));

// // subString
// console.log(result.substring(1,6));

// // trim
// const output="         haina k ho esto yo";
// console.log(output.trim());

// // concatination
// console.log(result.concat(" I am Javascript"));

// OPERATORS
// Assignment Operators

// let y=90;
// y=y+120;
// console.log(y);

// let y=90;
// y +=120;
// console.log(y);

// Comparison Operators
// let a=10;
// let b=5;
// let c="10";

// console.log(a==b);
// console.log(a===b);
// console.log(a!=b);
// console.log(a!==c);
// console.log(a>b);
// console.log(a<b);
// console.log(a<=5);
// console.log(a>=b);

// Logical Operators
// let x=true;
// let y=false;
// console.log(x&&y);
// console.log(x||y);
// console.log(!x);

// const str1 ="Hello";
// const str2 ="World";
// console.log(str1+""+str2);

// const str1 ="Hello";
// const str2 ="World";
// console.log(str1+" "+str2);

// Conditional (Ternary) Operators
// let agevote = 19;
// let result = agevote>=18 ? "Vote Halna Payeu": "Payenau";
// console.log(result);

//Template Literal
// const result="Hello World"
// const output= "I Love JavaScript"
// const Str3="Lets Start"
// console.log(result+" "+output+" "+Str3)

// const result="Hello World";
// const output= "I Love JavaScript";
// const Str3="Lets Start";
// console.log(`${result} ${output} ${Str3}`);

// const a=1;
// const b=2;
// const c=3;
// const ans=a+b+c;
// console.log(`The sum of three number is: ${ans}`);

// Unary Operators
// let ans="234"
// console.log(ans);
// console.log(typeof ans)

// let ans="234";
// let output= -ans;
// console.log(output);
// console.log(typeof output)


// //concat
// console.log (arr.concat ("hiiiiiiiii"));

// let arr = [];
// let sum = 0;

// for(let i=1; i<=10;  i++){
//     arr.push(i);  
// }
// console.log(arr);

// for (let i = 0; i<arr.length; i++) {
//     sum += arr[i];
// }

// let result = sum * 2

// console.log(`the sum of arr is:${sum}`);
// console.log(`the ans is : ${result}`);

//object

// const person = {
//     name: "Ram Thapa",
//     age :23,
//     occupation: "Agriculture",
//     isMarried: false,
//     address:{
//     street:"Bafal",    
//     city : "kathmandu",
//     country : "Nepal",
//     },

//     greet: function (){
//         console.log(
//             `Hello My name is:$(this.name).And I am : $ (this.age)years old`
//         );
//     },
// };


// console.log(person.address.city);
// person.greet();

// //Destructue

// const{
//     name,
//     age,
// occupation,
// isMarried,
// address : { street , city ,country},
// }=person;

// console.log(name, age, occupation, isMarried, street, city, country);
// person.greet();

//function
b ;
// }
//  let result = myfunction(8,9);
//  console.log(result);

function cirlce(radius){
    return Math.PI* radius*radius;
}

let result = cirlce(5);
console.log(`The area of circle is:${result}`);