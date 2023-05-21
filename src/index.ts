import client from "./client/client.js";
//
// import {GuiWatcher} from "./lib/index.js";
//
// import IteratorGui from "./gui/IteratorGui/IteratorGui.js";
//
// client.on('ready', () => {
//     new GuiWatcher(client).bindGui(IteratorGui);
// });
//
// client.on('interactionCreate', async (interaction) => {
//     if (!interaction.isChatInputCommand()) return;
//     if (
//         interaction.commandName === 'ping') {
//         await IteratorGui.create(interaction);
//     }
// })

import {Gui, Introduce} from "./lib";
import * as DB from "./db";
import {SessionObjectUnknown} from "./lib/types/type";
import {Interaction} from "discord.js";

const guiSystem = Introduce(client, {
    alter(id: string, data: object): void {
        DB.reloadDb();
        DB.data.guis.find(e => e.id === id).data = data;
        DB.writeDb();
    },
    get(id: string): SessionObjectUnknown {
        DB.reloadDb()
        return DB.data.guis.find(e => e.id === id) as SessionObjectUnknown;
    },
    insert(id: string, key: string, data: object): void {
        DB.reloadDb();
        DB.data.guis.push({id, key, data});
        DB.writeDb();
    }
});


type TestGuiInitiator = {
    interaction: Interaction
}

type TestGuiData = {
    value: number
}

const testGui = new Gui<TestGuiInitiator, TestGuiData>("1234")