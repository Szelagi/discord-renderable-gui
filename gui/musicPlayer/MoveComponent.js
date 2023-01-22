import {Component} from "../../discordGui/index.js";
import {ButtonBuilder, ButtonStyle} from "discord.js";


class MoveComponent extends Component {
    static key = "asjadsjasdads";
    constructor(g, isForward) {
        super(g, MoveComponent.key);
        super.setParams({
            isForward
        })
        const data = g.dataManager.getData();
        this.isForward = isForward;
        this.list = data.list;
        this.position = data.position;
    }
    static isDisabled(list, position, forword) {
        if (forword) {
            return position >= (list.length - 1);
        } else {
            console.log(position, (list.length - 1) )
            return position < (list.length - 1 );
        }
    }
    render() {
        let label;
        if (this.isForward) {
            label = '>';
        } else {
            label = '<';
        }
        return new ButtonBuilder()
            .setLabel(label)
            .setStyle(ButtonStyle.Secondary)
            .setCustomId(this.getCustomId())
            .setDisabled(MoveComponent.isDisabled(this.list, this.position, this.isForward));
    }
    static async execute(g, p) {
        const data = g.dataManager?.getData();
        if (p.isForward) {
            data.position++;
        } else {
            data.position--;
        }
        g.dataManager.saveData();
        g.displayManager.update();
    }
}

export default MoveComponent;