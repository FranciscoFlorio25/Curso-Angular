export interface Passenger {
    name: string;
    children?: string[]
}

const passenger1: Passenger = {
    name: 'Francisco'
}

const passenger2: Passenger = {
    name: 'Rigoberto',
    children: ['Jasinta','Jasinto']
}

const printChildren = (passenger: Passenger) => {

    //const howManyChildren = passenger.children?.length || 0;
    const howManyChildren = passenger2.children?.length;

    console.log(passenger2.name, howManyChildren);

    return howManyChildren;
}


printChildren(passenger2)