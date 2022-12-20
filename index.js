import client from "./client/client.js";
import Disg from "./discordGui/index.js";
import Example1Gui from "./example1.js";


client.on('ready', () => {
    new Disg.Watcher(client, 'gui:')
        .bindGui(Example1Gui);
});

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isChatInputCommand()) return;
    if (
        interaction.commandName === 'ping') {
        await Example1Gui.create(interaction);
    }
})