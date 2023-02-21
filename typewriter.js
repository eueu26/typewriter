const sentence = "hello there from lighthouse labs";

// for (let char of sentence) {
//   setTimeout(() => {

//     console.log(char);
//   }, 1000);

// }

// sentence.forEach((letter, index) => {
//   setTimeout(() => {
//     process.stdout.write(letter);
//   }, 50 * index);
// });

for (let i = 0; i < sentence.length; i++) {
  let letter = sentence[i];

  setTimeout(() => {
    process.stdout.write(letter \n);
  }, 50 * i);
}
