const myName = 'Carlos';
const myAge =  12;

const suma = function(a: number, b: number){
  return a + b;
}

class Persona{
  private age;
  private name;

  constructor(age: number, name: String){
    this.age = age;
    this.name = name;
  }

  getSummary(){
    return `my name is ${this.name} y mi edad es ${this.age}`;
  }
}

const alumno = new Persona(25, 'Jorge Gonzalez');
