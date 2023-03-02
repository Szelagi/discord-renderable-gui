import { ButtonBuilder, ModalBuilder, SelectMenuBuilder } from "discord.js";

export default interface ComponentInterface {
    key: string;

    make(): ButtonBuilder | SelectMenuBuilder | ModalBuilder;
}
