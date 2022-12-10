const client = require('./client/client');
const DiscordGuiWatcher = require('./discordGui/DiscordGuiWatcher');
const Example1Gui = require('./discordGui/gui/example1');
const GuiBuilder = require('./discordGui/GuiBuilder');

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