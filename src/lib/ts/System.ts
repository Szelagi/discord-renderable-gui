import {Client} from "discord.js";
import {StorageService} from "../types/interface";
import Gui from "./Gui";

export default class System {
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
    addGui(gui: Gui<object, object>): System {
        this.#guis.push(gui);
        return this;
    }
}