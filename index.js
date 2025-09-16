//-----------JAVASCRIPT HOSTING-----------//



//Hosting 2 প্রকার 1.Variable 2.Function



//Variable Hosting//

fName = "Alok Barman";
console.log(fName);        //Automaticly Global Veriable//


var fullName;    //Declaration//
fullName="tomal";   //Initialisation//
console.log(fullName);    //Use//


let fastName = "Kamal";
console.log(fastName);


a = 20;
console.log(a);
var a;            //এখানে আমরা লিখেছি এভাবে কিন্তু JAVASCRIPT var a; এটাকে a = 20; উপরে নিয়ে যাবে । এই JAVASCRIPT এর কোডকে সাজিয়ে নেয়া কে হোসটিং বলে। হোসটিং var এর ক্ষেত্রে কাজ করে।

let games ;
console.log(games);
games="Football";
console.log(games);  

/*
game ="Cricket"
console.log(game);
let game;             //এখানে হোসটিং কাজ করছে না কারণ হোসটিং let এর ক্ষেত্রে কাজ করে না । let আমরা Reassiganing করতে পারিে এই কারণে ReferenceError দেখাচ্ছে// 
*/
let game;
game ="Cricket"
console.log(game);

/*
phone = "Apple 17"
console.log(phone);
const phone;     //এখানে হোসটিং কাজ করছে না কারণ হোসটিং const এর ক্ষেত্রে কাজ করে না । const আমরা Reassiganing করতে পারিে না এই কারণে SyntaxError দেখাচ্ছে//
*/
const phone = "Apple 17"
console.log(phone);

//Function Hosting //

home("Amrica")
function home(UK){
    console.log(`My home ${UK}.`);
}       //এখানে আমরা লিখেছি এভাবে কিন্তু JAVASCRIPT town("Amrica") এটাকে নিচে নিয়ে যাচ্ছে । 

 function town(USA){
    console.log(`I Love ${USA}.`);
} 
town("Amrica");       // ঠিক এভাবে //


/*
student('Alok')
let student = function(name){
console.log(`My Name Is ${name}.`);
}
*/   //এখানে হোসটিং কাজ করছে না//  
let student = function(name){
console.log(`My Name Is ${name}.`);
}
student('Alok')


/*
serial(21)
const serial = function(number){
    console.log(`My roll ${number}.`);
}
*/    //এখানে হোসটিং কাজ করছে না// 

const serial = function(number){
    console.log(`My roll ${number}.`);
}
serial(21)


//Best Practice (let and Const) var not recommend//