import GuiBuilder from "./GuiBuilder";
import {Executor, Initiator} from "../types/interface";
import Builder from "./Builder";
import {BuilderOptionEnum} from "../types/enum";
import {InteractionReplyOptions, MessageCreateOptions, RepliableInteraction} from "discord.js";
import SystemWatcher from "./SystemWatcher";
import {SessionObject, SessionObjectUnknown} from "../types/type";

export default class Gui<T extends object, F extends object> {
    #key: string;
    #initiator: Initiator<T, F>
    #executor: Executor<F>;
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
    async _executeAs(sessionObject: SessionObject<F>, interaction: RepliableInteraction) {
        if (interaction.isButton() && interaction.isMessageComponent()) {
            await this.#executor(sessionObject.data, interaction);
            await this.#systemWatcher.storageService.alter(sessionObject.id, sessionObject.data);
        } else {
            throw new Error(`Invalid gui execution!`);
        }
    }
    // async tryExecuteAs(interaction: RepliableInteraction) {
    //     return new Promise(async (resolve, reject) => {
    //         if (interaction.isButton() && interaction.isMessageComponent()) {
    //             const id = interaction.message.id;
    //             const sessionObject = this.#systemWatcher.storageService.get(id) as SessionObject<F>;
    //             if (!sessionObject) return;
    //             await this.#executor(sessionObject.data, interaction);
    //             resolve(sessionObject);
    //         }
    //         reject();
    //     });
    // }
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

    get key(): string {
        return this.#key;
    }
}