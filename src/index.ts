// like typedef in c++
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

// 이게 ts 모듈화의 기본.. 이게 없으면 모든 변수/상수 선언들이 globally 선언된다나?
export {};
