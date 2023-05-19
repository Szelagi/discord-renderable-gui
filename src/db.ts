// IMPORTANT
// Prototype Database (very not optimal, use for test only!)

import fs from "fs";

const filePath = "db/db.json";

if (!fs.existsSync(filePath)) {
    const defaultData = {
        guis: []
    }
    fs.writeFileSync(filePath, JSON.stringify(defaultData));
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

