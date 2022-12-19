import CLIENT_CONFIG from "./config.json" assert { type: "json"};// experimental feature!
import rest from "./rest.js";
import { Client, GatewayIntentBits } from "discord.js";

const client = new Client({ intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]});

client.on('ready', async () => {
    console.log(`Logged in as ${client.user.tag}!`);
    //await require('./command')(client, rest);
});

// client.on('interactionCreate', async interaction => {
//     if (!interaction.isChatInputCommand()) return;
//     if (interaction.commandName === 'ping') {
//         await interaction.reply('Pong!');
//         console.log(interaction)
//     }
// });

client.login(CLIENT_CONFIG.token);

export default client;
