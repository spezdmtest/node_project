const fs = require("fs");
const path = require("path");
// fs.mkdir(path.join(__dirname, "test"), (err) => {
//     if (err) {
//         throw err
//     }
//     console.log("Папка создана");
// });

const filePath = path.join(__dirname, "test", "test.txt");
// fs.writeFile(filePath, "Hello NodeJS!", (err) => {
//     if (err) {
//         throw err;
//     }
//     console.log("Файл создан");
// })

// fs.writeFile(filePath, "\nHello Again!", (err) => {
//     if (err) {
//         throw err;
//     }
//     console.log("Файл создан");
// })

// fs.appendFile(filePath, "\nHello Again!", (err) => {
//     if (err) {
//         throw err;
//     }
//     console.log("Файл создан");
// })

fs.readFile(filePath, (err, content) => {
    if (err) {
        throw err;
    }
    const data = Buffer.from(content);
    console.log("Console: ", data.toString());
})