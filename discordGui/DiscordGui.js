class DiscordGui {
    static create(interaction, callback) {
        const renderData = this.render();
        interaction.reply(renderData);
    }
}

module.exports = DiscordGui;