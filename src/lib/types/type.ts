import {BuilderOptionEnum} from "./enum";
import {MessageCreateOptions} from "discord.js";

export type BuilderResult = {
    type: BuilderOptionEnum,
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