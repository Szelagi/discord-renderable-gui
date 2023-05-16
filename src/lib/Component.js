import Config from './config.json' assert { type: "json"};
import DiscordGui from "./DiscordGui.js";
// experimental feature!
const { prefix, splitter } = Config;

import {ButtonBuilder} from "discord.js";

class Component {
    uid = null;
    guiData = null;
    constructor(guiData, key) {
        this.guiData = guiData;
        const data = guiData.dataManager.getData();
        const uid = Object.keys(data._components).length;
        this.uid = uid;
        data._components[uid] = {
            _key: key
        };
        guiData.dataManager.saveData();
    }
    setParams(params) {
        const data = this.guiData.dataManager.getData();
        const componentData = data._components[this.uid];
        const key = componentData._key;
        data._components[this.uid] = {_key: key, ...params};
        this.guiData.dataManager.saveData();
    }
    render(args) {}
    static async execute(guiData) {}
    static async checkUse(guiData) {
        const [_, uid] = guiData.getInteraction().customId.split(splitter);
        const data = guiData.dataManager.getData();
        const key = data._components[uid]._key;
        if (key === this.key) {
            const args = guiData.dataManager.getData()._components[uid];
            await this.execute(guiData, args);
        }
    }
    getCustomId() {
        return prefix + splitter + this.uid;
    }
}

export default Component;

