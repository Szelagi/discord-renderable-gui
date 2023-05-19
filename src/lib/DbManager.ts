/*
    Biblioteka wykorzystuje lokalną bazę danych, ale została tak zaprojektowana,
    aby bardzo łatwo można było ją przerobić na inną bazę danych.
 */

import * as DB from "../db";

export default class DbManager {
    /**
     * @param id: String
     * @param instance: String
     * @param data: Object
     * @returns {Promise<boolean>}
     */
    static async insertGuiRecord(id, instance, data) {
        DB.reloadDb();
        DB.data.guis.push({id, instance, data});
        DB.writeDb();
        return true;
    }

    /**
     * @param id: String
     * @returns {Promise<Object>} {id: String, instance: String, data: Object}
     */
    static async getGuiRecord(id) {
        DB.reloadDb()
        return DB.data.guis.find(e => e.id === id);
    }

    /**
     * @param id: String
     * @param obj: {id?: String, instance?: String, data: Object}
     * @returns {Promise<boolean>}
     */
    static async alterGuiRecord(id, obj) {
        DB.reloadDb();
        DB.data.guis.find(e => e.id === id).data = obj;
        DB.writeDb();
    }
}