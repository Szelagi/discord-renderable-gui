import { BaseInteraction, Message } from "discord.js";
import GuiBuilder from "./GuiBuilder.js";
import DataManager from "./manager/DataManager.js";

export default class GuiData {
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