"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { BaseInteraction, Message } from "discord.js";
// import GuiBuilder from "../GuiBuilder.js";
// import DataManager from "../manager/DataManager.js";
// import DisplayManager from "../manager/DisplayManager.js";
//
// interface Gui {
//     init(gb: GuiBuilder);
// }
//
//
// class ZT implements Gui {
//     init(gb: GuiBuilder) {
//     }
//
// }
//
// class GuiData implements Gui {
//
//
//
//     private interaction: BaseInteraction = null;
//     private message: Message = null;
//     public dataManager: DataManager;
//
//     from(interaction, dbg, props) {
//         const { caller, watcher } = props;
//         this.caller = caller || null;
//         this.watcher = watcher || null;
//
//         if (interaction instanceof BaseInteraction) {
//             this.#interaction = interaction;
//         }
//         if (interaction instanceof Message) {
//             this.#message = interaction;
//         }
//         if (interaction instanceof GuiBuilder) {
//             this.#interaction = interaction.getInteraction();
//             this.#message = interaction.getMessage();
//         }
//         this.dataManager = new DataManager(dbg?.data);
//         this.displayManager = new DisplayManager();
//         return this;
//     }
//     getInteraction() {
//         return this.#interaction;
//     }
//     getMessage() {
//         return this.#message;
//     }
//
//     init(gb: GuiBuilder) {
//     }
// };
//
// export default GuiData;
//# sourceMappingURL=GuiData.js.map