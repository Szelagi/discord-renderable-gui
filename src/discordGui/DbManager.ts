/*
    Biblioteka wykorzystuje lokalną bazę danych lowdb, ale została tak zaprojektowana,
    aby bardzo łatwo można było ją przerobić na inną bazę danych.
 */

const db = {
    guis: [],
};

export default class DbManager {
    /**
     * @param id: String
     * @param instance: String
     * @param data: Object
     * @returns {Promise<boolean>}
     */
    static async insertGuiRecord(id, instance, data) {
        db.guis.push({ id, instance, data });
        // await db.read();
        // db.data.guis.push({ id, instance, data });
        // await db.write();
        // return true;
    }

    /**
     * @param id: String
     * @returns {Promise<Object>} {id: String, instance: String, data: Object}
     */
    static async getGuiRecord(id) {
        return db.guis.find((e) => e.id === id);
        // await db.read();
        // return db.data.guis.find((e) => e.id === id);
    }

    /**
     * @param id: String
     * @param obj: {id?: String, instance?: String, data: Object}
     * @returns {Promise<boolean>}
     */
    static async alterGuiRecord(id, data) {
        db.guis.find((e) => e.id === id).data = data;
        // await db.read();
        // db.data.guis.find((e) => e.id === id).data = obj;
        // await db.write();
    }
}
