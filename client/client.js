const { token: TOKEN} = require('./config.json');
const rest = require('./rest');


const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]});

client.on('ready', async () => {
    console.log(`Logged in as ${client.user.tag}!`);
    await require('./command')(client, rest);
});

// client.on('interactionCreate', async interaction => {
//     if (!interaction.isChatInputCommand()) return;
//     if (interaction.commandName === 'ping') {
//         await interaction.reply('Pong!');
//         console.log(interaction)
//     }
// });

client.login(TOKEN);
module.exports = client;
