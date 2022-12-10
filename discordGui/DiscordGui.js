const db = require('./db');
const GuiBuilder = require('./GuiBuilder');
const GuiData = require('./GuiData');

class DiscordGui {
    /*
        @guiBuilder: GuiBuilder || Interaction || Message
        @callback: (GuiBuilder, GuiData) => {...}
     */
    static async create(guiBuilder, callback) {
        if (!(guiBuilder instanceof GuiBuilder))
            guiBuilder = new GuiBuilder().from(guiBuilder);
        const dbGui = {
            id: undefined,
            instace: this.constructor.name,
            data: {}
        }
        const guiData = new GuiData().from(guiBuilder, dbGui);
        if (callback) await callback(guiBuilder, guiData);
        if (this.init) await this.init(guiBuilder, guiData);
        if (!this.render) {
            console.error('Klasa nie posiada metody renderacyjnej!');
            process.exit(1);
        }
        const renderResponse = await this.render(guiData);

        // zapisanie wszystkiego

        if (guiBuilder.getInteraction() || guiBuilder.getMessage()) {
            guiBuilder.getInteraction().reply(renderResponse);
        }


        // const renderData = this.render();
        // interaction.reply(renderData);
    }
}

module.exports = DiscordGui;