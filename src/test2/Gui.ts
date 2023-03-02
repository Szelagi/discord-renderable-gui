import { Channel, Integration, User } from "discord.js";

type CreateType = {
    channel: Channel;
    user?: User;
};

export default class Gui {
    constructor() {}

    static create(type: Integration): void {}
}
