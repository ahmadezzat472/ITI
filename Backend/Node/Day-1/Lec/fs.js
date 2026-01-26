// fs file system module
const fs = require("fs"); // common js modules



// read file synchronously
// const data = fs.readFileSync("data.json", "utf-8");

// const parsedData = JSON.parse(data);

// console.log(parsedData[0]);
// console.log(typeof parsedData);
// read file asynchronously
// fs.promises.readFile("data.json", "utf-8").then(data => {
//     const parsedData = JSON.parse(data);
//     console.log(parsedData[0]);
//     console.log(typeof parsedData);
// });


// write file 

const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));

data.push({
    name: "shosh",
    age: 27,
    city: "giza"
});

// fs.writeFileSync("data.json", JSON.stringify(data))


fs.promises.writeFile("data.json", JSON.stringify(data)).catch(err => {
    console.log(err);
});


