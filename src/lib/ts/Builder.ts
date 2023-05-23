import {BuilderOptionEnum} from "../types/enum";
import {
    Interaction,
    InteractionReplyOptions,
    Message,
    MessageCreateOptions,
    RepliableInteraction,
    TextChannel
} from "discord.js";
import {BuilderResult} from "../types/type";

export default class Builder {
    static BuilderOptionEnum = BuilderOptionEnum;
    callAsMessage(channel: TextChannel, responseData: MessageCreateOptions): BuilderResult {
        return {
            type: BuilderOptionEnum.message,
            responseData,
            channel,
        }
    }

    callAsReplyMessage(message: Message, responseData: MessageCreateOptions) : BuilderResult {
        return {
            type: BuilderOptionEnum.replyMessage,
            responseData,
            message,
        }
    }

    callAsReplyInteraction(interaction: RepliableInteraction, responseData: MessageCreateOptions | InteractionReplyOptions) : BuilderResult {
        return {
            type: BuilderOptionEnum.replyInteraction,
            responseData,
            interaction,
        }
    }
}