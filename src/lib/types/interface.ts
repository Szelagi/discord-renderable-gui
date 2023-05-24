import {BuilderResult, SessionObjectUnknown} from "./type";
import Builder from "../ts/Builder";
import {MessageCreateOptions, RepliableInteraction} from "discord.js";

export interface Initiator<T, F> {
    (params: T, data: F, builder: Builder) : BuilderResult
}

export interface Executor<T> {
    (data: T, interaction: RepliableInteraction): void;
}

export interface StorageService {
    insert(id: string, key: string, data: object): void;
    get(id: string): SessionObjectUnknown;
    alter(id: string, data: object): void;
}

export interface ViewRenderer<T> {
    (params: T | void): MessageCreateOptions
}