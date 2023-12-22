import { Invoice } from './classes/Invoice.js'
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js'
import { HasFormatter } from './interfaces/HasFormatter'
//whatever object we are making in the future has to implement the hasformatter interface

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// //both classes have the structure of has formatter
// docOne = new Invoice('yoshi', 'web work', 250);
// docTwo = new Payment('mario', 'pluming work', 350);
// //objects can be from several different classes as long as tey both 
// //contain hasformatter interface 
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);

// console.log(docs);





























// //interfaces
// interface IsPerson {
//     name: string;
//     age: number;
//     speak(a: string): void;
//     spend(a: number): number;

// }
// const one: IsPerson = {


//     name: 'eli',
//     age: 20,
//     speak(a: string): void {
//         console.log(a);
//     },
//     spend(b: number): number { return b; }


// };

// const Person = (person: IsPerson) => {
//     console.log('Isperson', person.name);

// }


// Person(one);















// // create new instance of a class
// const inOne = new Invoice('jack', 'in the bean stalk', 250);
// const inTwo = new Invoice('jill', 'in the bean stalk 2', 350);

// let invoices: Invoice[] = [];
// invoices.push(inOne);
// invoices.push(inTwo);

// console.log(invoices);


// invoices.forEach(inv => {
//     console.log(inv.client, inv.amount, inv.format());
// })















// const a = document.querySelector('a');
// //typescript doesnot actually know if the property can be null
// //for that we to put in a condition
// //if (a) { console.log(a.href); }
// console.log(a?.href);
// //if we are certain that this returns some kind of value
// //const a = document.querySelector('a')!;
// //typescript has special type for every dom element 
// //and it will make all the special type and properties available to us through intelience


// const form = document.querySelector('form');
// console.log(form);
const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul)
form.addEventListener('submit', (e: Event) => {

    e.preventDefault();//prevents the page refresh in the defaulth
    let values: [string, string, number]
    values = [tofrom.value, details.value, amount.valueAsNumber]

    let doc: HasFormatter;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);

    }
    else {
        doc = new Payment(...values);
    }

    list.render(doc, type.value, 'end')




    console.log(type.value);
    console.log(tofrom.value, details.value, amount.valueAsNumber);
})





















//generics allow as to create reuseable blocks of codes
//that can be used with different types

// const addUID = <T extends object>(obj: T) => {
//     let uid = Math.floor(Math.random() * 100);
//     return { ...obj, uid };

// }
// let One = addUID({ name: 'yoshi', age: 40 });

// console.log(One);

// //ENUMS
// enum persontype { book, auther, film }
// //generics with interface

// interface IsPerson<T> {
//     name: string;
//     type: persontype;
//     data: T


// }
// const one: IsPerson<string> = {


//     name: 'eli',
//     type: persontype.book,
//     data: "shaun"


// };
// const two: IsPerson<object> = {


//     name: 'eli',
//     type: persontype.film,
//     data: { name: "shaun" }


// };

// console.log(one, two);






// //tuples
// let tup: [string, number];
// tup = ['lie', 4445];