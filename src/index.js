import client from "./client/client.js";

import {GuiWatcher} from "./lib/index.js";

import MusicPlayer from "./gui/musicPlayer/MusicPlayer.js";

client.on('ready', () => {
    new GuiWatcher(client).bindGui(MusicPlayer);
});

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isChatInputCommand()) return;
    if (
        interaction.commandName === 'ping') {
        await MusicPlayer.create(interaction);
    }
})