import Gui from "./Gui";

export default class A<Param> {
    constructor(gui: Gui, execute: (params: Param) => void) {}
}
