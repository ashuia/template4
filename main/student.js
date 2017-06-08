let Person = require('./person')
// Write your code here
module.exports = Student
function Student(name,age,klass){
  this.Person=Person;
  this.Person(name,age);
  this.klass=klass;
  this.introduce=function(){
      var str;
      str="My name is "+this.name+". I am "+this.age+" years old."+" I am a Student. I am at Class "+klass+".";
      return str;
  }
}
