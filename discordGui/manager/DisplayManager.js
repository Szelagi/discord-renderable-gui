class DisplayManager {
    #state = false;
    #type = null;
    update() {
        this.#state = true;
        this.#type = DisplayManager.TYPES.update;
    }
    none() {
        this.#state = false;
        this.#type = null;
    }
    getState() {
        return this.#state;
    }
    getType() {
        return this.#type;
    }
    static TYPES = {
        update: 'update'
    }
    static async activate(guiData, guiClass) {
        const displayManager = guiData.displayManager;
        if (!displayManager.getState()) return;
        const interaction = guiData.getInteraction();
        const renderData = await guiClass._render(guiData);
        switch (displayManager.getType()) {
            case DisplayManager.TYPES.update:
                await interaction.update(renderData);
                break;
        }
    }
}

export default DisplayManager;