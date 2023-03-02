import CreateBuilder from "./CreateBuilder";

type Dbg = {
    id: string;
    key: string;
    data: Object;
};

export default abstract class Gui<DataType> {
    data: DataType;
    abstract key: string;


    static create(createBuilder: CreateBuilder) {
        const dbg: Dbg = {
            id: null,
            key: null,
            data: {},
        };

        this.make();

        throw new Error();
    }

    async _init() {
        await this.init();
    }

    async _use() {
        await this.use();
    }

    async _render() {
        await this.render();
    }

    abstract init();

    abstract use();

    abstract render();

    // /*
    //     @guiBuilder: GuiBuilder || Interaction || Message
    //     @callback: (GuiBuilder, GuiData) => {...}
    //  */
    // static useModules = [];
    //
    // static async _use(guiData) {
    //     for (let module of this.useModules) {
    //         if (module.useBefore) await module.useBefore(guiData, this); //wsparcie modółów
    //     }
    //     await this.use(guiData);
    //     for (let module of this.useModules) {
    //         if (module.useAfter) await module.useAfter(guiData, this); //wsparcie modółów
    //     }
    // }
    //
    // static async _render(guiData) {
    //     for (let module of this.useModules) {
    //         if (module.renderBefore) await module.renderBefore(guiData, this); //wsparcie modółów
    //     }
    //     const response = await this.render(guiData);
    //     for (let module of this.useModules) {
    //         if (module.renderAfter) await module.renderAfter(guiData, this); //wsparcie modółów
    //     }
    //     return response;
    // }
    //
    // static async init(guiData, guiBuilder) {}
    //
    // static async use(guiData) {}
    //
    // static async render(guiData) {}
    //
    // static async create(guiBuilder, callback) {
    //     if (!(guiBuilder instanceof GuiBuilder))
    //         guiBuilder = new GuiBuilder().from(guiBuilder);
    //     const dbg = {
    //         id: undefined,
    //         instance: this.name,
    //         data: {},
    //     };
    //     const guiData = new GuiData().from(guiBuilder, dbg, {
    //         caller: CallerType.CREATE,
    //     });
    //     if (callback) await callback(guiData, guiBuilder);
    //     if (this.init) await this.init(guiData, guiBuilder);
    //     if (!this.render) {
    //         console.error(new Error("Klasa nie posiada metody renderacyjnej!"));
    //         process.exit(1);
    //     }
    //     const renderResponse = await this._render(guiData);
    //
    //     if (guiData.getInteraction() || guiData.getMessage()) {
    //         // console.log(guiData.getInteraction())
    //         const replyResponse = await guiData
    //             .getInteraction()
    //             .reply(renderResponse);
    //
    //         if (guiData.getInteraction()) {
    //             const message = await guiData.getInteraction().fetchReply();
    //             dbg.id = message.id;
    //         }
    //         // TODO; support Message response;
    //     }
    //     console.log("dbg", dbg);
    //     const data = guiData.dataManager.getSaveStatus ? dbg.data : {};
    //     await DbManager.insertGuiRecord(dbg.id, dbg.instance, data);
    // }
}
