import {BuilderOptionEnum} from "../types/enum";
import {Channel, Interaction, Message} from "discord.js";

export default class Builder {
    #type : BuilderOptionEnum;
    #channel : Channel;
    #message : Message; //maybe the wrong type
    #interaction : Interaction; //maybe the wrong type

    static enumType = BuilderOptionEnum;

    get type() {
        return this.#type;
    }

    get channel() {
        return this.#channel;
    }

    get message() {
        return this.#message;
    }

    get interaction() {
        return this.#interaction;
    }

    callAsMessage(channel) {
        this.#type = BuilderOptionEnum.message;
        this.#channel = channel;
    }

    callAsReplyMessage(message) {
        this.#type = BuilderOptionEnum.replyMessage;
        this.#message = message;
    }

    callAsReplyInteraction(interaction) {
        this.#type = BuilderOptionEnum.replyInteraction;
        this.#interaction = interaction;
    }
}