import {BuilderOptionEnum} from "../types/enum";
import {Interaction, Message, MessageCreateOptions, TextChannel} from "discord.js";
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
            type: BuilderOptionEnum.message,
            responseData,
            message,
        }
    }

    callAsReplyInteraction(interaction: Interaction, responseData: MessageCreateOptions) : BuilderResult {
        return {
            type: BuilderOptionEnum.message,
            responseData,
            interaction,
        }
    }
}