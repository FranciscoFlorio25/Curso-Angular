
interface Details{
    author: string;
    year: number;
}

interface AudioPlayer{
    audioVolume:number;
    songDuration:number;
    song: string;
    details: Details; 
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "The Summoning",
    details: {
        author: "Sleep Token",
        year: 2023,
    }
}

const song = 'New Song';
const {song: anotherSong, songDuration, details} = audioPlayer;
const {author,year} = details;

// console.log('Song: ', anotherSong);
// console.log('Duration: ', songDuration);
 console.log('Author: ', author);
 console.log('Year: ', year);

const [,,trunks=  'Not found']: string[] = ['Goku','Vegeta', 'Trunks'];

console.error('Personaje 3: ', trunks)

export {};