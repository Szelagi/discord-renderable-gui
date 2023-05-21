
// Gui as object of class version
// my note: initiator(params, data, builder)
import Builder from "./Builder";
import {Initiator} from "../types/interface";
import {BuilderResult, SessionObject} from "../types/type";

export default class Gui<Input, Data> {
    #key : string;
    #initiator : Initiator<Input, Data>;
    #executor;
    #watchers;

    constructor(key: string) {
        this.#key = key;
        this.#watchers = [];
    }

    setInitiator(initiator: Initiator<Input, Data>) {
        this.#initiator = initiator;
        return this;
    }

    setExecutor(executor) {
        this.#executor = executor;
        return this;
    }

    addWatcher(...watcher) {
        return this;
    }

    async create(initiatorParams) {
        const dbg : SessionObject<Data> = {
            id: null,
            key: this.#key,
            data: {} as Data
        }
        const builder = new Builder();
        const builderResult = await this.#initiator(initiatorParams, dbg.data, builder);
    }
}