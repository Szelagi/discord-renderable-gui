const DiscordGui = require('../DiscordGui');
const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

class Example1Gui extends DiscordGui {
    static init() {

    }
    static use() {

    }
    static render() {
        const row = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setCustomId('gui:test')
                .setStyle(ButtonStyle.Primary)
                .setLabel('Test Button')
        );
        return {
            content: String(Math.floor(Math.random()*9999)),
            components: [row],
        };
    }
};

module.exports = Example1Gui;