const number = 5;
var i = 1;

console.log("Multiply table using `for` cycle:");
for (; i < 11; i++) {
  console.log(number + " x " + i + " = " + number * i);
}

i = 1; // Resetting i, so I don't get fucked

console.log("\nMultiply table using `while` cycle:");
while (i < 11) {
  console.log(number + " x " + i + " = " + number * i);
  i++;
}

i = 1;

console.log("\nMultiply table using `do while` cycle:");
do {
  console.log(number + " x " + i + " = " + number * i);
  i++;
} while (i < 11);
