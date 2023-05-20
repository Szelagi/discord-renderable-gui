
// Gui as object of class version
// my note: initiator(params, data, builder)
import Builder from "./Builder";
import {Initiator} from "../types/interface";

export default class Gui<Input, Data> {
    #key : string;
    #initiator : Initiator<Input, Data>;
    #executor;
    #watchers;

    constructor(key: string) {
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
            id: '',
            key: this.#key,
            data: {} as Data
        }
        const data: Data = dbg.data as Data
        const builder = new Builder();
        await this.#initiator(initiatorParams, dbg.data, builder);
        if (!builder.type) throw new Error('Unset builder option!');

    }
}