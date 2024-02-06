
const skills: string[] = ['Bash','Counter','Healing'];


interface Personaje {
    name: string;
    vida: number
    skills: string []
    pueblo?: string
}

const jasinto : Personaje = {
    name: 'Jasinto',
    vida: 100,
    skills:  ['Bash','Counter','Healing'],
    pueblo: ''
}

jasinto.pueblo = 'lavanda';


console.table(jasinto);




export {};