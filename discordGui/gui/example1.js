const DiscordGui = require('../DiscordGui');

class Example1Gui extends DiscordGui {
    static use() {

    }
    static render() {
        return 'Tekst Renderowany';
    }
};

module.exports = Example1Gui;