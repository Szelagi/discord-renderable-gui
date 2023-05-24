
// GuiBuilder as object of class version
// my note: initiator(params, data, builder)
import Builder from "./Builder";
import {Executor, Initiator, StorageService} from "../types/interface";
import {BuilderResult, SessionObject} from "../types/type";
import {BuilderOptionEnum} from "../types/enum";
import {ChatInputCommandInteraction, MessageCreateOptions, MessageInteraction, RepliableInteraction} from "discord.js";
import {InteractionReplyOptions} from "discord.js";
import SystemWatcher from "./SystemWatcher";
import Gui from "./Gui";

export default class GuiBuilder<InputParams extends object, SessionData extends object> {
    #key : string;
    #systemWatcher : SystemWatcher;
    #initiator : Initiator<InputParams, SessionData>;
    #executor: Executor<SessionData>;
    #watchers;

    constructor(key: string, systemWatcher: SystemWatcher) {
        this.#key = key;
        this.#watchers = [];
        this.#systemWatcher = systemWatcher;
    }

    setInitiator(initiator: Initiator<InputParams, SessionData>) {
        this.#initiator = initiator;
        return this;
    }

    setExecutor(executor: Executor<SessionData>) {
        this.#executor = executor;
        return this;
    }

    addWatcher(...watcher) {
        return this;
    }


    get key(): string {
        return this.#key;
    }

    get systemWatcher(): SystemWatcher {
        return this.#systemWatcher;
    }

    get initiator(): Initiator<InputParams, SessionData> {
        return this.#initiator;
    }

    get executor() {
        return this.#executor;
    }

    get watchers() {
        return this.#watchers;
    }

    build() : Gui<InputParams, SessionData> {
        if (this.key.length === 0) throw new Error("Invalid builder key");
        if (!this.#initiator) throw new Error("Builder do not have Initiator method");
        if (!this.#executor) throw new Error("Builder do not have Executor method");
        return new Gui<InputParams, SessionData>(this);
    }
}