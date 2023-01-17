import {Component} from "../../discordGui/index.js";
import {ButtonBuilder, ButtonStyle} from "discord.js";

class EditValueComponent extends Component {
    static key = 'editValueComponent';
    constructor(g, number) {
        super(g, EditValueComponent.key);
        super.setParams({
            number
        })
        this.number = number;

    }
    render() {
        const style = this.number > 0 ? ButtonStyle.Success : ButtonStyle.Danger;
        return new ButtonBuilder()
            .setLabel(this.number.toString())
            .setStyle(style)
            .setCustomId(this.getCustomId())
    }
    static async execute(g, p) {
        const data = g.dataManager.getData();
        data.value += p.number;
        await g.displayManager.update();
    }
}

export default EditValueComponent;