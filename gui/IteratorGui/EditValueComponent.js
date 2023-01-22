import {Component} from "../../discordGui/index.js";
import {ButtonBuilder, ButtonStyle} from "discord.js";

class EditValueComponent extends Component {
    static key = 'editValueComponent';
    constructor(g, number, maxValue) {
        super(g, EditValueComponent.key);
        super.setParams({
            number,
            maxValue
        })
        this.number = number;
        this.maxValue = maxValue;
    }
    render() {
        const style = this.number > 0 ? ButtonStyle.Success : ButtonStyle.Danger;
        const isDisable = EditValueComponent.isDisable(this.number, this.maxValue);
        console.log(isDisable)
        return new ButtonBuilder()
            .setLabel(this.number.toString())
            .setStyle(style)
            .setCustomId(this.getCustomId())
            .setDisabled(isDisable);
    }

    static isDisable(number, maxValue) {
        if (number > 0) {
            return number >= maxValue;
        } else {
            return number <= maxValue;
        }
    }

    static async execute(g, p) {
        const data = g.dataManager.getData();
        if (!EditValueComponent.isDisable(p.number, p.maxValue)) {
            data.value += p.number;
        }
        await g.displayManager.update();
    }
}

export default EditValueComponent;