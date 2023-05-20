import DbManager from "./DbManager.ts";
import GuiBuilder from "./GuiBuilder.js";
import GuiData from "./GuiData.js";
import CallerType from "./CallerType.js";


// (old) Gui as abstract class version
export default class DiscordGui {
    /*
        @guiBuilder: GuiBuilder || Interaction || Message
        @callback: (GuiBuilder, GuiData) => {...}
     */
    static useModules = [];

    static async _use(guiData) {
        for (let module of this.useModules) {
            if (module.useBefore) await module.useBefore(guiData, this);//wsparcie modółów
        }
        await this.use(guiData);
        for (let module of this.useModules) {
            if (module.useAfter) await module.useAfter(guiData, this);//wsparcie modółów
        }
    }

    static async _render(guiData) {
        for (let module of this.useModules) {
            if (module.renderBefore) await module.renderBefore(guiData, this);//wsparcie modółów
        }
        const response = await this.render(guiData);
        for (let module of this.useModules) {
            if (module.renderAfter) await module.renderAfter(guiData, this);//wsparcie modółów
        }
        return response;
    }

    static async init(guiData, guiBuilder) {
    };

    static async use(guiData) {
    };

    static async render(guiData) {
    };

    static async create(guiBuilder, callback) {
        if (!(guiBuilder instanceof GuiBuilder))
            guiBuilder = new GuiBuilder().from(guiBuilder);
        const dbg = {
            id: undefined,
            instance: this.name,
            data: {}
        }
        const guiData = new GuiData().from(guiBuilder, dbg, {
            caller: CallerType.CREATE
        });
        if (callback) await callback(guiData, guiBuilder);
        if (this.init) await this.init(guiData, guiBuilder);
        if (!this.render) {
            console.error(new Error('Klasa nie posiada metody renderacyjnej!'));
            process.exit(1);
        }
        const renderResponse = await this._render(guiData);

        if (guiData.getInteraction() || guiData.getMessage()) {
            // console.log(guiData.getInteraction())
            const replyResponse = await guiData.getInteraction().reply(renderResponse);

            if (guiData.getInteraction()) {
                const message = await guiData.getInteraction().fetchReply();
                dbg.id = message.id;
            }
            // TODO; support Message response;
        }
        console.log('dbg', dbg)
        const data = guiData.dataManager.getSaveStatus ? dbg.data : {};
        await DbManager.insertGuiRecord(dbg.id, dbg.instance, data);
    }
}