import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

/* 
The Node.js file system module allows you to work
with the file system on your computer. 
*/

// Get the current module's directory path
const __filename = fileURLToPath(import.meta.url);
const PATH = dirname(__filename);

/* 
write file
==========
replaces the specified file and content if it exists. If the file does not exist,
a new file, containing the specified content, will be created
*/

// Write to the file
const nameToSave = 'John Doe';
const filePath = path.join(PATH, 'name.txt');
fs.writeFile(filePath, nameToSave, 'utf8', (err) => {
    if (err) {
        console.error(err);
    }
    console.log('File saved!');
});

/* 
read file
=========
used to read files on your computer.
*/
// Read from the file
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
    }
    console.log('Read file', data);
});

/*
appendFile
==========
appends the specified content at the end of the specified file
*/
// Append content to the file
const contentToAppend = ' This is some additional content.';
fs.appendFile(filePath, contentToAppend, 'utf8', (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('appended to a file successfully!');
    }
});

/*
open
====
method takes a "flag" as the second argument, if the flag is "w" for "writing",
the specified file is opened for writing and "r" for reading.If the file does not exist,
an empty file is created
*/

// open a file
fs.open(filePath, 'r', (err, fileDescriptor) => {
    if (err) {
        console.error('Error opening file:', err);
    } else {
        console.log(
            'File opened successfully! File Descriptor:',
            fileDescriptor
        );

        // read the file
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.error(err);
            }
            console.log('read a file successfully after opening it', data);
        });

        // Close the file
        fs.close(fileDescriptor, (err) => {
            if (err) {
                console.error('Error closing file:', err);
            } else {
                console.log('File closed successfully!');
            }
        });
    }
});
/*
unlink
======
method deletes the specified file
*/
// delete a file
fs.unlink(filePath, (err) => {
    if (err) {
        console.error('Error deleting file:', err);
    } else {
        console.log('File deleted successfully!');
    }
});
