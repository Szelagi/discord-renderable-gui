import {BuilderOptionEnum} from "../types/enum";
import {Channel, Interaction, Message} from "discord.js";
import {BuilderResult} from "../types/type";

export default class Builder {
    static BuilderOptionEnum = BuilderOptionEnum;
    private createBuilderResult(type: BuilderOptionEnum) : BuilderResult {
        return {
            type
        }
    }
    callAsMessage(channel) {
        return this.createBuilderResult(BuilderOptionEnum.message);
    }

    callAsReplyMessage(message) {
        return this.createBuilderResult(BuilderOptionEnum.replyMessage);
    }

    callAsReplyInteraction(interaction) {
        return this.createBuilderResult(BuilderOptionEnum.replyInteraction);
    }
}