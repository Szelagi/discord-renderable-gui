import { BaseInteraction, Message } from "discord.js";

export default class GuiBuilder {
    #channel = null;
    #user = null;
    #member = null;
    #guild = null;
    #interaction = null;
    #message = null;
    from(i) {
        if (!(i instanceof BaseInteraction || i instanceof Message)){
            console.error(new Error(
                "[GuiBuilder].from() : Typ musi mieć instancje klasy BaseInteraction lub Message!"
            ));
            process.exit(1);
        }
        this.#guild = i.guild;
        this.#channel = i.channel;
        this.#member = i.member;
        if (i instanceof BaseInteraction) {
            this.#user = i.user;
            this.#interaction = i;
        }
        if (i instanceof Message) {
            this.#user = i.author;
            this.#message = i;
        }
        return this;
    }
    setChannel(channel) {
        this.#channel = channel;
        return this;
    }
    setUser(user) {
        this.#user = user;
        return this;
    }
    setMember(member) {
        this.#member = member;
        return this;
    }
    setGuild(guild) {
        this.#guild = guild;
        return this;
    }
    getChannel() {
        return this.#channel;
    }
    getUser() {
        return this.#user;
    }
    getMember() {
        return this.#member;
    }
    getGuild() {
        return this.#guild;
    }
    getInteraction() {
        return this.#interaction;
    }
    getMessage() {
        return this.#message;
    }
}