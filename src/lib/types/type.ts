import {BuilderOptionEnum} from "./enum";
import {
    Interaction,
    InteractionReplyOptions,
    Message,
    MessageCreateOptions,
    RepliableInteraction,
    TextChannel
} from "discord.js";

export type BuilderResult = {
    type: BuilderOptionEnum,
    channel?: TextChannel,
    message?: Message,
    interaction?: RepliableInteraction
    responseData: MessageCreateOptions | InteractionReplyOptions
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