export class Person {
    constructor(
        public name: string,
        private address: string = 'No Adress'){};
    
};

// export class Hero extends Person {
//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string
//     ){
//         super(realName, "New York");
//     }
// };

export class Hero {

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person, 
    ){
        // this.person = new Person(realName, "New York");
    }
};

const tony = new Person("Tony Stark", "New York")
const ironman = new Hero('IronMan',45,'Tony',tony);


console.log(ironman)