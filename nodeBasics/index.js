import chalk from "chalk";
const myColor = chalk.hex("#FFB611");
const myText = "random text, use wisely";

console.log(chalk.magentaBright("Magenta bright text."));
console.log(myColor("Random color, no idea how it will look like."));
console.log(
  chalk.blue(
    "Tyred of typing, good thing I prepared " + chalk.red.underline("%s"),
  ),
  myText,
);
console.log(chalk.red.bgGreen.bold("Damn, this looks bad"));
