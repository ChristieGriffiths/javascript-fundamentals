/* 

Use a for loop to iterate numbers from 1 to 20, and for each of them, print whether the number is even or odd.

You should get the following output:

1 is odd
2 is even
3 is odd
(...)

*/ 

let i = 0

while (i <= 20) {
  i += 1;
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd.`);
  }
} 