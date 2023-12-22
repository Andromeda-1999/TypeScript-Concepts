"use strict";
const var_a = 'lucas';
console.log(var_a);
const input_tags = document.querySelectorAll('input');
console.log(input_tags);
input_tags.forEach(input => {
    console.log(input);
});
//TYPE BASIC
// strict  type
let var_1 = 'october';
let age = 40;
let isBool = false;
//variable type cannot be changed later in code
//age ='june';
//isBool = true;
//typescript inferes the value inside the variable to check its data type 
// const area = (dia) => { return dia * Math.PI }
// console.log(area('solo')); // this will return NaN
const area = (dia) => { return dia * Math.PI; };
console.log(area(20)); // this will return number
//OBJECTS AND ARRAY
//Array are always of the data type of the elements u put in the array
let arr1 = ['java', 'c++', 'c#'];
arr1.push('java');
//arr1.push(10);
arr1[0] = '20';
//mixed array put all the data type in while first declaring it
let arr2 = ['java', 'c++', 'c#', 1];
arr2.push(10);
arr2.push('java');
//objects
let object1 = {
    name: 'mare',
    colour: 'orange',
    age: 14
};
object1.colour = 'red';
//object1.colour=10; //dont change data type of
//object1.array=['java', 'c++', 'c#']; cant add on properties
//while changing the values of the object the properties data type  
//and adding some other random property is not allowed either
object1 = {
    name: 'siovan',
    colour: 'cyan',
    age: 24
};
//match the structure of the intial object that we created
//EXPLICIT TYPE
let char;
let age_by;
let colouris;
//age_by="arry";
age_by = 20;
//arrays
//we cannot push on a empty unintialized array best practice intialize
let char1 = [];
let num1 = [];
num1.push(10);
//char1.push(10);//dont
//Union types
let mix1 = [];
mix1.push(10);
mix1.push('java');
console.log(mix1);
let mix_var;
mix_var = '123';
mix_var = 123;
let ob1;
ob1 = {
    char1: 'string',
    age_by1: 10,
    colouris1: true
};
//objects 
let obj2;
obj2 = {
    char: 'string',
    age_by: 10,
    colouris: true
};
console.log(obj2);
//ANY TYPE
let ageofme = 'yorkshire';
ageofme = 'string';
ageofme = 10;
ageofme = true;
let mean = [];
mean.push('string1');
mean.push(1);
mean.push(true);
let obj3;
obj3 = {
    char: 10,
    age_by: 'rush',
    colouris: true
};
console.log(obj3);
//better work flow and tsconfig
//tsc -init
//function type
let fun1;
//fun1="hello"
//fun1 must be a function 
//function can return void or any other data type and can also have union type operators 
fun1 = (a1, a2, a3 = '10') => {
    console.log(a1 * a2);
    console.log(a3);
};
fun1(20, 10);
//TYPE ALLIASES
//define types from before to increase reuseability
let fun2;
fun2 = (a1, a2, a3, user) => {
    console.log(a1 * a2);
    console.log(a3);
    console.log(user);
};
fun2(10, 20, 30, {
    age1: 10,
    ago: 'wide'
});
//FUNCTION SIGNATURE
//general structure of a function what arguments it takes in and what type 
//of data it returns 
//let funion: Function;
//() => void // no argument returns no data
//example 1 
let funion1;
funion1 = (age, name) => {
    console.log(`${age} and ${name}`);
};
//example 2
let funion2;
funion2 = (age, name, check) => {
    if (check === true)
        return (age * name);
    else
        return (age + name);
};
//example 3
let funion3;
funion3 = (detail) => {
    console.log(`${detail.age1} and ${detail.ago}`);
};
