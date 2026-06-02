// function getbirthyear(age){
//     const currentyear=2026;
//    const birthyear= currentyear-age;
//     return(birthyear)
// }
// getbirthyear()


function GetAge(birthyear){
  const CurrentYear =2026;
  const Age=CurrentYear - birthyear;
  return Age
}

function validateAge(){
     if(typeof age !== "number"|| age<=0 || age>120){
        return "Invalid ahne "
     }else{
        return age;
     }
}

console.log(GetAge("hai"))
