
// Gui as object of class version
// my note: initiator(params, data, builder)
import Builder from "./Builder";

class Gui {
    #key : string;
    #initiator;
    #executor;
    #watchers;

    constructor(key) {
        this.#key = key;
        this.#watchers = [];
    }

    setInitiator(initiator) {
        this.#initiator = initiator;
    }

    setExecutor(executor) {
        this.#executor = executor;
    }

    addWatcher(...watcher) {

    }

    async create(initiatorParams) {
        const dbg = {
            id: undefined,
            key: this.#key,
            data: {}
        }
        const builder = new Builder();
        await this.#initiator(initiatorParams, dbg.data, builder);
        if (!builder.type) throw new Error('Unset builder option!');

    }
}