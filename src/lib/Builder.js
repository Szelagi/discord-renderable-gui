export default class Builder {
    #type;
    #channel;
    #message;
    #interaction

    static _enumType = {
        message: 'message',
        replyMessage: 'reply-message',
        replyInteraction: 'reply-interaction'
    }

    static get enumType() {
        return this._enumType;
    }

    get type() {
        return this.#type;
    }

    get channel() {
        return this.#channel;
    }

    get message() {
        return this.#message;
    }

    get interaction() {
        return this.#interaction;
    }

    callAsMessage(channel) {
        this.#type = this.constructor._enumType.message;
        this.#channel = channel;
    }

    callAsReplyMessage(message) {
        this.#type = this.constructor._enumType.replyMessage;
        this.#message = message;
    }

    callAsReplyInteraction(interaction) {
        this.#type = this.constructor._enumType.replyInteraction;
        this.#interaction = interaction;
    }
}