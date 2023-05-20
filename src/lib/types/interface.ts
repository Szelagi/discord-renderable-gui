import {BuilderResult} from "./type";
import Builder from "../ts/Builder";

export interface Initiator<T, F> {
    (params: T, data: F, builder: Builder) : BuilderResult
}