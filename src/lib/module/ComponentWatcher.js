class ComponentWatcher {
    #components = null;
    constructor(...components) {
        this.#components = components;
    }
    useBefore(guiData) {
        for (let component of this.#components) {
            component.checkUse(guiData);
        }
    }
    renderBefore(g) {
        g.dataManager.getData()._components = {};
        g.dataManager.saveData();
        console.log(g.dataManager.getData())
    }
}

export default ComponentWatcher;