class DataManager {
    #save = false;
    #data = null;
    constructor(data) {
        this.#data = data;
    }
    getData() {
        return this.#data;
    }
    setData(data) {
        this.#data = data;
        this.#save = true;
    }
    saveData(logic = true) {
        this.#save = logic;
    }
    getSaveStatus() {
        return this.#save;
    }
}

module.exports = DataManager;