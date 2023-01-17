import Component from "./discordGui/Component.js";
import {ButtonBuilder, ButtonStyle} from "discord.js";

class KickComponent extends Component {
    constructor(guiData) {
        super(guiData);
    }
    render(params) {
        return new ButtonBuilder()
            .setLabel('Renderable Button')
            .setStyle(ButtonStyle.Primary)
            .setCustomId(this.getCustomId());
    }
    static async execute() {
        console.log('My Button Use!');
    }
}

export default KickComponent;