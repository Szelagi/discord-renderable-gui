import GuiData from "./GuiData.js";
import {ButtonInteraction} from "discord.js";
import DbManager from "./DbManager.ts";
import CallerType from "./CallerType.js";
import DisplayManager from "./manager/DisplayManager.js";
import Config from './config.json' assert {type: 'json'}; // experimental feature!

const prefix = Config.prefix;

export default class DiscordGuiWatcher {
    #classGuis = [];

    constructor(client) {
        client.on('interactionCreate', async (i) => {
            try {
                if (i.customId && !i.customId.startsWith(prefix)) return;
                if (i instanceof ButtonInteraction) {
                    const messageId = i.message.id;
                    const dbg = await DbManager.getGuiRecord(messageId);
                    if (!dbg) return;
                    const guiData = new GuiData().from(i, dbg, {
                        caller: CallerType.COMPONENT,
                        watcher: this,
                    });
                    const GuiClass = this.#classGuis.find(e => e.name === dbg.instance);
                    if (!GuiClass) return;
                    await GuiClass._use(guiData);
                    await DisplayManager.activate(guiData, GuiClass);//renderacja
                    if (guiData.dataManager.getSaveStatus()) {
                        await DbManager.alterGuiRecord(dbg.id, guiData.dataManager.getData());//zapisanie danych
                    }

                }
            } catch (e) {
                console.error(e);
            }
        });
    }

    bindGui(classGui) {
        this.#classGuis.push(classGui);
        return this;
    }
}