const fs = require("fs");




fs.writeFile("text.txt", "Hello world!", () => {
  console.log("file created!");
});



fs.writeFileSync("text.txt", "Hello world!");




const res = fs.readFileSync("text.txt", "utf-8");
fs.readFile("text.txt", "utf-8", (res) => {
  console.log(res);
});




