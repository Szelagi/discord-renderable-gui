import {Client} from "discord.js";
import {StorageService} from "../types/interface";
import GuiBuilder from "./GuiBuilder";
import Gui from "./Gui";

export default class SystemWatcher {
    #client: Client;
    #storageService: StorageService;
    #guis: Gui<object, object>[];
    constructor(client: Client, storageService: StorageService) {
        this.#client = client;
        this.#storageService = storageService;
        this.#guis = [];
        client.on("interactionCreate", (i) => {
            //...
        })
    }
    appendGui(gui: Gui<object, object>): SystemWatcher {
        this.#guis.push(gui);
        return this;
    }

    get client(): Client {
        return this.#client;
    }

    get storageService(): StorageService {
        return this.#storageService;
    }

    get guis(): Gui<object, object>[] {
        return this.#guis;
    }
}