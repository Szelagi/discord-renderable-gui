const { BaseInteraction, Message } = require('discord.js');
const GuiBuilder = require('./GuiBuilder');
const DataManager = require('./manager/DataManager');

class GuiData {
    #interaction = null;
    #message = null;
    dataManager = null;
    from(i, dbGui) {
        if (i instanceof BaseInteraction) {
            this.#interaction = i;
        }
        if (i instanceof Message) {
            this.#message = i;
        }
        if (i instanceof GuiBuilder) {
            this.#interaction = i.getInteraction();
            this.#message = i.getMessage();
        }
        this.dataManager = new DataManager(dbGui?.data);
        return this;
    }
    getInteraction() {
        return this.#interaction;
    }
    getMessage() {
        return this.#message;
    }
};

module.exports = GuiData;