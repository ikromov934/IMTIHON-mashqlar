


//2 - mashiq
const num = 1;
const string1 = num.toString();
const toArr = string1.split("");

function sum(number) {

  const reversed = toArr.reverse();

  const string = reversed.join("");

  if (string == string1) {

    console.log(true);
  } else {

    console.log(false);
  }
}

sum(toArr);