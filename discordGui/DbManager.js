/*
    Biblioteka wykorzystuje lokalną bazę danych lowdb, ale została tak zaprojektowana,
    aby bardzo łatwo można było ją przerobić na inną bazę danych.
 */

import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'

// File path
const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, '../db.json')

// Configure lowdb to write to JSONFile
const adapter = new JSONFile(file)
const db = new Low(adapter)

export default class DbManager {
    /**
     * @param id: String
     * @param instance: String
     * @param data: Object
     * @returns {Promise<boolean>}
     */
    static async insertGuiRecord(id, instance, data) {
        await db.read();
        db.data.guis.push({id, instance, data});
        await db.write();
        return true;
    }
    /**
     * @param id: String
     * @returns {Promise<Object>} {id: String, instance: String, data: Object}
     */
    static async getGuiRecord(id) {
        await db.read();
        return db.data.guis.find(e => e.id = id);
    }

    /**
     * @param id: String
     * @param obj: {id?: String, instance?: String, data: Object}
     * @returns {Promise<boolean>}
     */
    static async alterGuiRecord(id, obj) {

    }
}