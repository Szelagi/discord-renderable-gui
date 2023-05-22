import {BuilderOptionEnum} from "../types/enum";
import {Channel, Interaction, Message, TextChannel} from "discord.js";
import {BuilderResult} from "../types/type";
import {MessageCreateOptions} from "discord.js";

export default class Builder {
    static BuilderOptionEnum = BuilderOptionEnum;
    private createBuilderResult(type: BuilderOptionEnum, responseData: MessageCreateOptions) : BuilderResult {
        return {
            type,
            responseData
        }
    }
    callAsMessage(channel: TextChannel, responseData: MessageCreateOptions) {
        return this.createBuilderResult(BuilderOptionEnum.message, responseData);
    }

    callAsReplyMessage(message: Message, responseData: MessageCreateOptions) {
        return this.createBuilderResult(BuilderOptionEnum.replyMessage, responseData);
    }

    callAsReplyInteraction(interaction: Interaction, responseData: MessageCreateOptions) {
        return this.createBuilderResult(BuilderOptionEnum.replyInteraction, responseData);
    }
}