// const prompt = require("prompt-sync")({sigint:true});
// const number = parseInt(prompt('Enter the number of terms: '));
// let n1,n2,nextterm;
// for(let i =0;i<=number;i++){
//     console.log(i);
    
// }
let first=0;
let second=1;
let next;
n=10;
for(i=0;i<n;i++){
    if(i<=1){
        next=i;
    }else{
        next=first+second;
        first = second
    second=next
    }
    console.log(next);
}