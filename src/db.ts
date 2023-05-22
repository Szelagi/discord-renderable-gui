// IMPORTANT
// Prototype Database (very not optimal, use for test only!)

import fs from "fs";

const filePath = "db/db.json";

const folders : string[] = filePath.split('/');
folders.pop();

for (let i = 0; i < folders.length; i++) {
    let path = folders[0];
    for (let j = 1; j <= i; j++) {
        path += "/" + folders[j];
    }
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path)
        console.log(`Created directory: ${path}`);
    }
}

if (!fs.existsSync(filePath)) {
    const defaultData = {
        guis: []
    }
    fs.appendFileSync(filePath, JSON.stringify(defaultData));
    console.log(`Created file: ${filePath}`);
}

export let data = getFileData();

export function reloadDb() {
    data = getFileData();
}

function getFileData() {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

export function writeDb() {
    fs.writeFileSync(filePath, JSON.stringify(data));
}

