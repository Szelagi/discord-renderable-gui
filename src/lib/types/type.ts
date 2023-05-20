import {BuilderOptionEnum} from "./enum";

export type BuilderResult = {
    type: BuilderOptionEnum
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