class DiscordGuiWatcher {
    #classGuis = new Set();
    constructor(client, interactionPrefix) {
        client.on('interactionCreate', async (interaction) => {
            //if (interaction.)
        });
    }
    bindGui(classGui) {
        this.#classGuis.add(classGui);
        return this;
    }
}

module.exports = DiscordGuiWatcher;