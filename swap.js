const prompt = require("prompt-sync")({sigint:true});

 let a= prompt("enter the first number");
 let  b= prompt("enter the second number");
 let temp= a;
 a=b;
 b=temp;
 console.log(`${a},${b}`);
 