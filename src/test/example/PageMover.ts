import { ButtonBuilder, ButtonStyle } from "discord.js";

export default class PageMoverButton extends ButtonBuilder {
    constructor(
        side: Side,
        currentPageIndex: number,
        maxPageIndex: number,
        minPageIndex: number = 0
    ) {
        super();
        let isAvailable: boolean;
        if (side == Side.LEFT) {
            isAvailable = currentPageIndex > minPageIndex;
        } else {
            isAvailable = currentPageIndex < maxPageIndex;
        }
        super
            .setEmoji(side == Side.LEFT ? "⬅" : "➡")
            .setDisabled(!isAvailable)
            .setStyle(ButtonStyle.Secondary)
            .setCustomId("MYID");
    }
}

export enum Side {
    LEFT,
    RIGHT,
}
