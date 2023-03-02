import {
    BaseInteraction,
    Channel,
    Guild,
    GuildMember,
    Message,
    User,
} from "discord.js";

type FromModifyType = {
    channel?: Channel;
    user?: User;
    member?: GuildMember;
    guild?: Guild;
    params?: Object;
};

type FromManualType = {
    channel: Channel;
    user?: User;
    member?: GuildMember;
    guild?: Guild;
    params?: Object;
};

export default class CreateBuilder {
    private channel: Channel = null;
    private user: User = null;
    private member: GuildMember = null;
    private guild: Guild = null;
    private interaction: BaseInteraction = null;
    private message: Message = null;
    private params: Object = {};

    public from(i: BaseInteraction | Message, modifyType?: FromModifyType) {
        this.guild = i.guild;
        this.channel = i.channel;
        if (i instanceof BaseInteraction) {
            this.user = i.user;
            this.interaction = i;
            if (i.member instanceof GuildMember) {
                this.member = i.member;
            }
        }
        if (i instanceof Message) {
            this.user = i.author;
            this.message = i;
            this.member = i.member;
        }
        // Modify
        if (modifyType) {
            if (modifyType.channel) this.channel = modifyType.channel;
            if (modifyType.guild) this.guild = modifyType.guild;
            if (modifyType.member) {
                this.user = modifyType.member.user;
                this.member = modifyType.member;
            }
            if (modifyType.user && !modifyType.user) {
                this.user = modifyType.user;
                this.member = null;
            }
            if (modifyType.params) this.params = modifyType.params;
        }
        return this;
    }

    public manual(manual: FromManualType) {
        this.channel = manual.channel;
        if (manual.guild) this.guild = manual.guild;
        if (manual.member) {
            this.user = manual.member.user;
            this.member = manual.member;
        }
        if (manual.user && !manual.member) {
            this.user = manual.user;
            this.member = null;
        }
        if (manual.params) this.params = manual.params;
        return this;
    }

    public getChannel() {
        return this.channel;
    }

    public getUser() {
        return this.user;
    }

    public getMember() {
        return this.member;
    }

    public getGuild() {
        return this.guild;
    }

    public getInteraction() {
        return this.interaction;
    }

    public getMessage() {
        return this.message;
    }

    public getParams() {
        return this.params;
    }
}
