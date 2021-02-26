const Gender = {
  MEN: "male",
  WOMEN: "female",
  OTHER: "other",
} as const;
type Gender = typeof Gender[keyof typeof Gender];

class Person {
  name: string;
  age: number;
  gender: Gender;
  constructor(name: string, age: number, gender: Gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const me = new Person("Jay", 44, Gender.MEN);

function sayHello(param: Person): void {
  console.log(
    `Hello ${param.name}! You are ${param.age} years old & ${param.gender}`
  );
}

sayHello(me);

export {};
