const sentence = "hello there from lighthouse labs";


let delay = 0;
for (let char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay += 50);
}
setTimeout(() => {
    process.stdout.write('\n');
  }, delay);


// sentence.forEach((letter, index) => {
//   setTimeout(() => {
//     process.stdout.write(letter);
//   }, 50 * index);
// });
// let delay = 0;
// for (let i = 0; i < sentence.length; i++) {
//   let letter = sentence[i];

//   setTimeout(() => {
//     process.stdout.write(letter);
//   }, delay += 50);
// }

// setTimeout(() => {
//   console.log('');
// }, delay);