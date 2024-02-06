

function addnumbers(a: number,b: number):number{
    return a + b;
}

const addnumbersArrow = (a: number,b: number):string => {
    return `${a + b}`;
}   

function multiply(firstNumber: number, secondNumber?: number, base: number = 2){
    return firstNumber * base;

}

// const result1 : number = addnumbers(1,2);
// const result2: string = addnumbersArrow(1,2);


// const multiplyResult : number = multiply(5);


// console.log ({result1,result2,multiplyResult});


interface Character {
    name: string;
    hp: number;
    showHp:() => void;
}
const healCharacter = (character: Character, amount : number) => {
   
    character.hp += amount;

}

const jasinto: Character = {
    name: 'Jasinto',
    hp: 50,
    showHp() {console.log(`Puntos de vida ${this.hp}`);}
}

healCharacter(jasinto,10);
healCharacter(jasinto,50);

jasinto.showHp();

export {};