import computations from "./computations";

console.log('hello, project.');

// In the example, the ||= will check if the songsCount is false (0).
// If false, then the right value will be assigned to the left variable.
let myPlaylist = { songsCount: 0, songs: [] };
myPlaylist.songsCount ||= 100;
console.log(myPlaylist); // This will print: {songsCount: 100, songs: Array(0)}
