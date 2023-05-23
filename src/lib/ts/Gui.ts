
// Gui as object of class version
// my note: initiator(params, data, builder)
import Builder from "./Builder";
import {Initiator, StorageService} from "../types/interface";
import {BuilderResult, SessionObject} from "../types/type";
import {BuilderOptionEnum} from "../types/enum";
import {ChatInputCommandInteraction, MessageCreateOptions, MessageInteraction, RepliableInteraction} from "discord.js";
import {InteractionReplyOptions} from "discord.js";
import SystemWatcher from "./SystemWatcher";

export default class Gui<Input, Data> {
    #key : string;
    #systemWatcher : SystemWatcher;
    #initiator : Initiator<Input, Data>;
    #executor;
    #watchers;

    constructor(key: string, systemWatcher: SystemWatcher) {
        this.#key = key;
        this.#watchers = [];
        this.#systemWatcher = systemWatcher;
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

    async create(initiatorParams: Input) {
        const data : Data = {} as Data;
        const builder = new Builder();
        const builderResult = await this.#initiator(initiatorParams, data, builder);
        let id: string;
        switch (builderResult.type) {
            case BuilderOptionEnum.replyInteraction: {
                // Compatible with MessageCreateOptions type
                // https://old.discordjs.dev/#/docs/discord.js/main/typedef/InteractionReplyOptions
                const responseTyped = builderResult.responseData as InteractionReplyOptions;
                try {
                    console.log(builderResult)
                    responseTyped.fetchReply = true;
                    const interaction = await builderResult.interaction.reply(responseTyped);
                    const message = await interaction.fetch();
                    id = message.id;
                } catch (e) {
                    console.error(e);
                    return;
                }
                break;
            }
            case BuilderOptionEnum.replyMessage: {
                const responseTyped = builderResult.responseData as MessageCreateOptions;
                try {
                    const message = await builderResult.message.reply(responseTyped);
                    id = message.id;
                } catch (e) {
                    console.error(e);
                    return;
                }
                break;
            }
            case BuilderOptionEnum.message: {
                const responseTyped = builderResult.responseData as MessageCreateOptions;
                try {
                    const message = await builderResult.message.reply(responseTyped);
                    id = message.id;
                } catch (e) {
                    console.error(e)
                    return;
                }
                break;
            }
        }
        await this.#systemWatcher.storageService.insert(id, this.#key, data as object);
    }
}