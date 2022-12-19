export default class DiscordGuiWatcher {
    #classGuis = new Set();
    #customIdPrefix = '';
    constructor(client, customIdPrefix) {
        this.#customIdPrefix = customIdPrefix;
        client.on('interactionCreate', async (i) => {
            try {
                if (i.customId && !i.customId.startsWith(this.#customIdPrefix)) return;
            } catch(e) {
                console.error(e);
            }
        });
    }
    bindGui(classGui) {
        this.#classGuis.add(classGui);
        return this;
    }
}