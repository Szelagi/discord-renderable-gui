import { BaseInteraction, Message } from "discord.js";
import GuiBuilder from "./GuiBuilder.js";
import DataManager from "./manager/DataManager.js";
import DisplayManager from "./manager/DisplayManager.js";

export default class GuiData {
    #interaction = null;
    #message = null;
    dataManager = null;
    watcher = null;
    caller = null;
    from(interaction, dbg, props) {
        const { caller, watcher } = props;
        this.caller = caller || null;
        this.watcher = watcher || null;

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
        this.displayManager = new DisplayManager();
        return this;
    }
    getInteraction() {
        return this.#interaction;
    }
    getMessage() {
        return this.#message;
    }
};