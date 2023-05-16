import {ComponentWatcher, Gui} from "../../lib/index.js";
import {ActionRowBuilder} from "discord.js";
import EditValueComponent from "./EditValueComponent.js";

const componentWatcher = new ComponentWatcher(EditValueComponent);

class IteratorGui extends Gui {
    static useModules = [componentWatcher];

    static async init(g) {
        const d = g.dataManager.getData();
        d.value = 0;
        g.dataManager.saveData();
    }

    static async use(g) {

    }

    static async render(g) {
        const {value} = g.dataManager.getData();
        const removeComponent = new EditValueComponent(g, 5, 30).render();
        const addComponent = new EditValueComponent(g, -5, -35).render();
        return {
            content: `Wartość: ${value}`,
            components: [
                new ActionRowBuilder().setComponents(removeComponent, addComponent)
            ]
        }
    }
}

export default IteratorGui;