import computations from './computations';

console.log('hello, project.');
console.log(computations);

// Declare a variable and store some value.
const orgStr = 'JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled and multi-paradigm.';

// To replace single instance, use replace().
const newStr = orgStr.replace('JavaScript', 'TypeScript');
console.log(newStr);

// To replace all instances, use replaceAll().
const newStr2 = orgStr.replaceAll('JavaScript', 'TypeScript');
console.log(newStr2);

// In the example, the ||= will check if the songsCount is false (0).
// If false, then the right value will be assigned to the left variable.
const myPlaylist = { songsCount: 0, songs: [] };
myPlaylist.songsCount ||= 100;
console.log(myPlaylist); // This will print: {songsCount: 100, songs: Array(0)}
