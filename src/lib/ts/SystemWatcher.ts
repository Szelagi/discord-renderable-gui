import {Client, Interaction, InteractionResponse, MessageComponent, RepliableInteraction} from "discord.js";
import {StorageService} from "../types/interface";
import GuiBuilder from "./GuiBuilder";
import Gui from "./Gui";

export default class SystemWatcher {
    #client: Client;
    #storageService: StorageService;
    #guiMap: Map<string, Gui<object, object>>;
    #prefix: string;
    constructor(client: Client, storageService: StorageService, prefix: string = "drg") {
        this.#client = client;
        this.#storageService = storageService;
        this.#guiMap = new Map();
        this.#prefix = prefix;
        client.on("interactionCreate", async (i) => {
            // button
            if (i.isButton() && i.isMessageComponent()) {
                if (!i.customId.startsWith(this.#prefix)) return;
                const id = i.message.id;
                if (!id) return;
                const sessionObject = await this.#storageService.get(id);
                if (!sessionObject) return;
                const gui = this.#guiMap.get(sessionObject.key);
                await gui._executeAs(sessionObject, i);

            }


            // if (i.isButton() && i.isMessageComponent()) {
            //     if (!i.customId.startsWith(this.#prefix)) return;
            //     if (i.aw)
            // }

        })
    }
    appendGui(gui: Gui<object, object>): SystemWatcher {
        this.#guiMap.set(gui.key, gui);
        return this;
    }

    get client(): Client {
        return this.#client;
    }

    get storageService(): StorageService {
        return this.#storageService;
    }

    get guis(): Gui<object, object>[] {
        return [...this.#guiMap.values()];
    }
}