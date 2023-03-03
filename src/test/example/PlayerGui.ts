import MyView from "./MyView";

export default class PlayerGui {
    static init() {}

    static use(g) {
        g.render(
            new MyView(g, {
                player: "Szelagi",
            })
        );
    }
}
