import {Component} from "../../discordGui/index.js";
import {ButtonBuilder, ButtonStyle} from "discord.js";


class MoveComponent extends Component {
    static key = "asjadsjasdads";
    constructor(g, isForward) {
        super(g, MoveComponent.key);

        console.log("NEW");


        const data = g.dataManager.getData();
        let list = data.list;
        let position = data.position;

        let label;
        if (isForward) {
            label = '>';
        } else {
            label = '<';
        }
        this
            .setLabel(label)
            .setStyle(ButtonStyle.Secondary)
            .setDisabled(MoveComponent.isDisabled(list, position, isForward));

    }
    static isDisabled(list, position, forword) {
        if (forword) {
            return position >= (list.length - 1);
        } else {
            console.log(position, (list.length - 1) )
            return position < (list.length - 1 );
        }
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

new MoveComponent();

export default MoveComponent;