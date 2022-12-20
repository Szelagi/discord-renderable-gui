import { BaseInteraction, Message } from "discord.js";
import GuiBuilder from "./GuiBuilder.js";
import DataManager from "./manager/DataManager.js";

export default class GuiData {
    #interaction = null;
    #message = null;
    dataManager = null;
    watcher = null;
    from({interaction, dbg, watcher}) {
        if (interaction instanceof BaseInteraction) {
            this.#interaction = interaction;
        }
        if (interaction instanceof Message) {
            this.#message = interaction;
        }
        if (interaction instanceof GuiBuilder) {
            this.#interaction = interaction.getInteraction();
            this.#message = interaction.getMessage();
        }
        this.dataManager = new DataManager(dbg?.data);
        return this;
    }
    getInteraction() {
        return this.#interaction;
    }
    getMessage() {
        return this.#message;
    }
};