const Person={
    name:"Sreehari",
    age:24,
    city: "kylm",
    profession:"IT",

   isvalidAge:function(){
   return typeof this.age ==="number" && this.age>0;
},

getBirthYear: function(){
    if(!this.isvalidAge()){
        return "Invalid Age ";
    }
        return new Date().getFullYear()-this.age;
},
getZodiacsign:function(){
    if(!this.isvalidAge()){
        return "OOPS its not possibe"
}else {
 const birthYear = this.getBirthYear();
    const zodiacSigns = [
      "Capricorn",
      "Aquarius",
      "Pisces",
      "Aries",
      "Taurus",
      "Gemini",
      "Cancer",
      "Leo",
      "Virgo",
      "Libra",
      "Scorpio",
      "Sagittarius",
    ];
    return zodiacSigns[birthYear % 12];
  }
},

greet:function(){
 if(!this.isvalidAge()){
    return "onnum nadakilla"
}
    return(
        `hello,I am ${this.name}. I am ${this.age}years Old ,born in ${this.getBirthYear()} live in ${this.city}, working in ${this.profession},My zodiac sign Is ${this.getZodiacsign()}`);
}
};
console.log(Person.greet());
