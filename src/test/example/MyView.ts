import PageMoverButton, { Side } from "./PageMover";

export default class MyView {
    constructor(g, buildData) {
        const leftButton = new PageMoverButton(
            Side.LEFT,
            buildData.pageIndex,
            10
        );
        const rightButton = new PageMoverButton(
            Side.RIGHT,
            buildData.pageIndex,
            10
        );
    }
}
