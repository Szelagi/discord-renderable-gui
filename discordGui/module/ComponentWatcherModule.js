class ComponentWatcherModule {
    #components = null;
    constructor(...components) {
        this.#components = components;
    }
    useBefore(g) {
        for (let component of this.#components) {
            component.activate();
        }
        console.log('usee')
    }
    renderBefore(g) {
        g.dataManager.getData()._components = {};
        g.dataManager.saveData();
        console.log(g.dataManager.getData())
    }
}

export default ComponentWatcherModule;