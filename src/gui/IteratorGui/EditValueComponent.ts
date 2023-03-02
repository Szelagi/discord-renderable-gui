import { Component } from "../../discordGui/index.js";
import { ButtonBuilder, ButtonStyle } from "discord.js";

type Param = {
    number: number;
    maxValue: number;
};

class EditValueComponent extends Component {
    static key = "editValueComponent";
    number: number;
    maxValue: number;

    constructor(g, number, maxValue) {
        super(g, EditValueComponent.key);
        super.setParams({
            number,
            maxValue,
        });
        this.number = number;
        this.maxValue = maxValue;
    }

    static isDisable(number, maxValue) {
        if (number > 0) {
            return number >= maxValue;
        } else {
            return number <= maxValue;
        }
    }

    static async execute(g, p: Param) {
        const data = g.dataManager.getData();
        if (!EditValueComponent.isDisable(p.number, p.maxValue)) {
            data.value += p.number;
        }
        await g.displayManager.update();
    }

    render() {
        const style =
            this.number > 0 ? ButtonStyle.Success : ButtonStyle.Danger;
        const isDisable = EditValueComponent.isDisable(
            this.number,
            this.maxValue
        );
        console.log(isDisable);
        return new ButtonBuilder()
            .setLabel(this.number.toString())
            .setStyle(style)
            .setCustomId(this.getCustomId())
            .setDisabled(isDisable);
    }
}

export default EditValueComponent;
