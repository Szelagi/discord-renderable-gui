import {BuilderOptionEnum} from "./enum";
import {Interaction, Message, MessageCreateOptions, TextChannel} from "discord.js";

export type BuilderResult = {
    type: BuilderOptionEnum,
    channel?: TextChannel,
    message?: Message,
    interaction?: Interaction
    responseData: MessageCreateOptions
}

export type SessionObjectUnknown = {
    id: string;
    key: string;
    data: object;
}

export type SessionObject<T> = {
    id: string;
    key: string;
    data: T
}