const fs = require('fs');
const path = require('path');
const { stdin, stdout } = process;

let content = '';




stdout.write('Введите текст \n');
stdin.on('data', data => {
    console.log(data.toString());
    if (data.includes('exit')) {
        process.exit();
    } else {
        content += data;
        fs.writeFile(
            path.join(__dirname, 'TEXT.txt'),
            content,
            (err) => {
                if (err) throw err;
                console.log('Добавьте новый текст в файл');

            })
    }
});
process.on('exit', () => stdout.write('Пока-пока :)'));

// stdout.write('Введите текст \n');
// stdin.on('data', data => content += data);
// fs.writeFile(
//     path.join(__dirname, 'text.txt'),
//     content,
//     (err) => {
//         if (err) throw err;
//         console.log('Файл был создан');
//     });