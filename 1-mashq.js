
let num = [-40, 5, 10, 30, -30, -80, -10, 80];

//1 - mashiq

function countNumbers(num) {
  let minus = 0;
  let pilus = 0;

  for (let i = 0; i < num.length; i++) {
    if (num[i] < 0) {
      minus += num[i];
    } else {
      pilus++;
    }
  }
  return [pilus, minus];
}

let result = countNumbers(num);

console.log(result);