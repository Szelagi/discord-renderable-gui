// import DiscordGui from "./DiscordGui.js";
// export { DiscordGui as GuiBuilder };
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
import SystemWatcher from "./ts/SystemWatcher";


export function Introduce(client: Client, storageSystem: StorageService) : SystemWatcher {
    return new SystemWatcher(client, storageSystem);
}

import GuiBuilder from "./ts/GuiBuilder";
export { GuiBuilder as GuiBuilder };
