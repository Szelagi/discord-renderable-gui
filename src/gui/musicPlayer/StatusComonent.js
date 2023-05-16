import {Component} from "../../lib/index.js";
import {ButtonBuilder, ButtonStyle} from "discord.js";

class StatusComonent extends Component {
    static key = 'sdajbknsdjkfn';

    constructor(g) {
        super(g, StatusComonent.key);
        this.g = g;
    }

    static async execute(g) {
        const data = g.dataManager.getData();
        data.isPlay = !data.isPlay;
        g.dataManager.saveData();
        g.displayManager.update();
    }

    render() {
        const data = this.g.dataManager.getData();
        let label;
        if (data.isPlay) {
            label = '(>)';
        } else {
            label = '(=)';
        }
        return new ButtonBuilder()
            .setLabel(label)
            .setStyle(ButtonStyle.Primary)
            .setCustomId(this.getCustomId());
    }
}

export default StatusComonent;