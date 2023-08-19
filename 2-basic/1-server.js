import fs from 'fs';

// Synchronously

// write to a file
try {
    fs.writeFileSync('./2-basic/hello.txt', 'Hello from node js');
} catch (err) {
    console.error(err);
}

// read from a file
try {
    const data = fs.readFileSync('./2-basic/hello.txt', 'utf-8');
    console.log(data);
} catch (err) {
    console.error(err);
}

// Asynchronously
const textToSave = 'John Doe';
fs.writeFile('./2-basic/name.txt', textToSave, 'utf8', (err) => {
    if (err) {
        console.error(err);
    }
    console.log('File saved!');
});

// promises
const writeToFile = async () => {
    await fs.promises.writeFile(
        './2-basic/sample.txt',
        'Hello world!, How are you doing?'
    );
};

writeToFile();

// read file

// Promised
const readFromAFile = async () => {
    const data = await fs.promises.readFile('./2-basic/sample.txt', 'utf-8');
    console.log(data);
};

readFromAFile();

fs.readFile('./2-basic/name.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
    }
    console.log('Read file', data);
});
