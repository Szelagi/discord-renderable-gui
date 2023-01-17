class Component {
    uid = null;
    constructor(guiData) {
        const data = guiData.dataManager.getData();
        const uid = Object.keys(data._components).length;
        data._components[uid] = {};
        guiData.dataManager.saveData();
    }
    setParams(params) {
        const data = guiData.dataManager.getData();
        data._components[this.uid] = params;
        guiData.dataManager.saveData();
    }
    render(args) {}
    static async execute(guiData, ) {}
    static async activate(guiData) {
        const [name, uid] = guiData.getInteraction().customId.split(':');
        if (name == this.name) {
            const args = guiData.dataManager.getData()._components[uid];
            await this.execute(guiData, args);
            return true;
        }
        return false;
    }
    getCustomId() {
        cons prefix =
        return this.name + ':' + this.uid;
    }
}

export default Component;

