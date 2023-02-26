import client from "./client/client.js";

//import MusicPlayer from "./gui/musicPlayer/MusicPlayer.js";
import IteratorGui from "./gui/IteratorGui/IteratorGui.js";
import { GuiWatcher } from "./discordGui/index.js";

client.on("ready", () => {
    console.log(client.user.tag, ": ready");
    //new GuiWatcher(client).bindGui(MusicPlayer);
    new GuiWatcher(client).bindGui(IteratorGui);
});
client.on("interactionCreate", async (interaction) => {
    if (!interaction.isChatInputCommand()) return;
    if (interaction.commandName === "ping") {
        //await MusicPlayer.create(interaction);
        await IteratorGui.create(interaction);
    }
});
