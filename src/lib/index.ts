// import DiscordGui from "./DiscordGui.js";
// export { DiscordGui as Gui };
//
// import DiscordGuiWatcher from "./DiscordGuiWatcher.js";
// export { DiscordGuiWatcher as GuiWatcher };
//
// import GuiBuilder from "./GuiBuilder.js";
// export { GuiBuilder as GuiInitiator };
//
// import Component from "./Component.js";
// export { Component as Component };
//
// import ComponentWatcher from "./module/ComponentWatcher.js";
// export { ComponentWatcher as ComponentWatcher };


import {SessionObjectUnknown} from "./types/type";
import {Client} from "discord.js";
import {StorageService} from "./types/interface";
import System from "./ts/System";


export function Introduce(client: Client, storageSystem: StorageService) : System {
    return new System(client, storageSystem);
}

import Gui from "./ts/Gui";
export { Gui as Gui };
