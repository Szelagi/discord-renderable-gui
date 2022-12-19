import client from "./client/client.js";
import DiscordGuiWatcher from "./discordGui/DiscordGuiWatcher.js";
import Example1Gui from "./discordGui/gui/example1.js";
import GuiBuilder from "./discordGui/GuiBuilder.js";

client.on('ready', () => {
    new DiscordGuiWatcher(client, 'gui:')
        .bindGui(Example1Gui);
});

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isChatInputCommand()) return;
    if (interaction.commandName === 'ping') {
        Example1Gui.create(interaction);
    }
})