import {TOKEN} from "../env.js";
import rest from "./rest.js";
import {Client, GatewayIntentBits} from "discord.js";
import commandLoader from "./commandLoader.js";

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
});

client.on('ready', async () => {
    console.log(`Logged in as ${client.user.tag}!`);
    await commandLoader(client, rest);
});

// client.on('interactionCreate', async interaction => {
//     if (!interaction.isChatInputCommand()) return;
//     if (interaction.commandName === 'ping') {
//         await interaction.reply('Pong!');
//         console.log(interaction)
//     }
// });

client.login(TOKEN).catch(e => {
    console.error(e);
    process.exit(1);
});

export default client;
