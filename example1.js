import DiscordGui from "./discordGui/DiscordGui.js";
import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from "discord.js";

import KickComponent from "./kickComponent.js";


import ComponentWatcherModule from "./discordGui/module/ComponentWatcherModule.js";

const componentWatcher = new ComponentWatcherModule(
    KickComponent
);


export default class Example1Gui extends DiscordGui {
    static useModules = [componentWatcher];
    static init(guiData) {
        const data = guiData.dataManager.getData();
        data.value = 5;
        guiData.dataManager.saveData();
    }
    static use(guiData) {
        console.log('hello discord from ' + guiData.watcher.customIdPrefix);
        console.log('value = ' + guiData.dataManager.getData().value)
        const data = guiData.dataManager.getData();
        data.value += 1;
        guiData.dataManager.saveData();
        guiData.displayManager.update();
    }
    static render(guiData) {
        const data = guiData.dataManager.getData();

        const out = `Wartość = ${data.value}`;

        const row = new ActionRowBuilder().addComponents(
            new KickComponent(guiData).render()
        );
        return {
            content: out,
            components: [row],
        };
    }
};