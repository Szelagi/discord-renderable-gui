import GuiBuilder from "./GuiBuilder";
import {Initiator} from "../types/interface";
import Builder from "./Builder";
import {BuilderOptionEnum} from "../types/enum";
import {InteractionReplyOptions, MessageCreateOptions} from "discord.js";
import SystemWatcher from "./SystemWatcher";

export default class Gui<T extends object, F extends object> {
    #key: string;
    #initiator: Initiator<T, F>
    #executor;
    #watchers;
    #systemWatcher: SystemWatcher;
    constructor(guiBuilder: GuiBuilder<T, F>) {
        this.#key = guiBuilder.key;
        this.#initiator = guiBuilder.initiator;
        this.#executor = guiBuilder.executor;
        this.#watchers = guiBuilder.watchers;
        this.#systemWatcher = guiBuilder.systemWatcher;
        this.#systemWatcher.appendGui(this);
    }
    async create(initiatorParams: T) {
        const data : F = {} as F;
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