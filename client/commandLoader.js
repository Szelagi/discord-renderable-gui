import { SlashCommandBuilder, Routes } from "discord.js";

const pingCommand = new SlashCommandBuilder()
    .setName('ping')
    .setDescription('make ping');

const commands = [
    pingCommand.toJSON()
];

export default async function (client, rest) {
    try {
        const clientId = client.user.id;
        console.log('Started refreshing application (/) commands.');
        await rest.put(
            Routes.applicationCommands(clientId),
            { body: commands },
        );
        console.log('Successfully reloaded application (/) commands.');
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
    //client.on('...')
}