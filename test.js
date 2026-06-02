// // object creation USING 

// // 1 object literal syntax
// //  var object={
// //     name:"sreehari",
// //     age:18,
// //  };

// // 2 functional constructor 

// // function Man(name,age){
// //     this.name=name;
// //     this.age=age;
// // }
// // var object = new Man("sreehari",18)

// // console.log(object.name); 

// // const Person = {
// //   //  --- Properties (Data) ---
// //   name: "Spruce",
// //   age: "h",
// //   country: "Nigeria",
// //   profession: "Engineer",

//   //  --- Methods (Actions related to Person data) ---
//   // isValidAge: function () {
//   //   return typeof this.age === "number" && this.age > 0;
//   // },

//   // getBirthYear: function () {
//   //   if (!this.isValidAge()) {
//   //     return "Invalid age!";
//   //   }
//   //   return new Date().getFullYear() - this.age;
//   // },

//   // getZodiacSign: function () {
//   //   if (!this.isValidAge()) {
//   //     return "Oops, can't get zodiac for an invalid age!";
//   //   }

//   //   const birthYear = this.getBirthYear();
//   //   const zodiacSigns = [
//   //     "Capricorn",
//   //     "Aquarius",
//   //     "Pisces",
//   //     "Aries",
//   //     "Taurus",
//   //     "Gemini",
//   //     "Cancer",
//   //     "Leo",
//   //     "Virgo",
//   //     "Libra",
//   //     "Scorpio",
//   //     "Sagittarius",
// //     ];
// //     return zodiacSigns[birthYear % 12];
// //   },

// //   greet: function () {
// //      if (!this.isValidAge()) {
// //       return "Invalid age!";
// //     }
// //     return (
// //       `Hello, I'm ${this.name}. I'm ${
// //         this.age
// //       } years old, born in ${this.getBirthYear()}, ` +
// //       `working as a ${this.profession} from ${
// //         this.country
// //       }.  My zodiac sign is ${this.getZodiacSign()}.`
// //     );
// //   },
// // };

// // console.log(Person.greet());




// // let age = 23 ; 
// // let city = "kylm"
// // console.log("i am  " + age +  "i am from "+ city);

// // let monthlysalary = 22000;
// // let monthlyexpense= 20000; 
// // let savings= monthlysalary - monthlyexpense

// // console.log( `my montly savings is ${savings}`)

// // console.log("hai");

// // function Savings(ms,me){
// //   return ms- me
// // }
//   // console.log("my monthly savings is " + Savings(2000,1000)); 

// // function canAfford(salary,itemprice){

// //   // return (salary>=itemprice) ? "yes, you can afford" : "no, you can't afford"

  
// // }
// // console.log(canAfford(50000,20000));
// // console.log(canAfford(1000, 5000));
// // console.log(canAfford(3000, 3000));

 
 
//   // let claimAmounts = [5000, 12000, 800, 45000, 3200];
  
//   //   for(i=0;i<claimAmounts.length;i++){
//   //     if(claimAmounts[i]>10000){
//   //   console.log(claimAmounts[i])
//   // }

//   // } 
// // let claimAmounts = [5000, 12000, 800, 45000, 3200];
// //   for(i=0;i<claimAmounts.length;i++){
// //   console.log(claimAmounts[i])
// // }

// //  let claimAmounts = [5000, 12000, 800, 45000, 3200];

// // claimAmounts.forEach(function(claim) {
// //   console.log(claim);
// // }); 

// // let Workers = ["w1","w2","w3","w4","w5"];

// //  Workers.forEach(function(emp){
// // console.log(emp);
// //  }
// // );
  
// datas=[200,300,400,500,600,1000,30000];

// // let newdatas= datas.filter(function(num){
// //   return  num >500
// // })
// // console.log(newdatas);

// //  datas.forEach((num) => {
// //   console.log(num)
  
// //  });

//  FILTER EACH METHOD 
// //  let newdatas = datas.filter(function(num){
// //   return num >
// //    400
// //  }) 
// //  console.log(newdatas);


// newdatas=[]

// for(i=0;i<datas.length;i++){

//   updateddates=datas[i]*2;

//   newdatas.push(updateddates)
// }
// console.log(newdatas);
// datas = [200,300,400, 500,600];


// let newdatas=datas.map(function(num){
//   return num *1.10 
// })

//  console.log(newdatas); 


let claimAmounts = [5000, 12000, 800, 45000, 3200];

