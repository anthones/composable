// const nextCharForNumberString = str => {
//   const trimmed = str.trim();
//   const num = parseInt(trimmed, 10);
//   const absNum = Math.abs(num);
//   const nextNumber = absNum + 10;
//   return String.fromCharCode(nextNumber);
// };

// const nextCharForNumberString = str =>
//   String.fromCharCode(Math.abs(parseInt(str.trim(), 10)) + 10);

const nextCharForNumberString = str =>
  [str]
    .map(s => s.trim())
    .map(s => parseInt(s, 10))
    .map(n => Math.abs(n))
    .map(x => x + 10)
    .map(x => String.fromCharCode(x))
    .reduce((_, x) => x);

const Box = x => ({
  map: f => Box(f(x)),
  fold: f => f(x),
  inspect: () => `Box(${x})`,
});

// const nextCharForNumberString = str =>
//   Box(str)
//     .map(s => s.trim())
//     .map(s => parseInt(s, 10))
//     .map(n => Math.abs(n))
//     .map(x => x + 10)
//     .fold(x => String.fromCharCode(x));

console.log(nextCharForNumberString("     65         "));
