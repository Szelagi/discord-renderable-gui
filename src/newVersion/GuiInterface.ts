export default interface GuiInterface {
    key: string;

    init(): void;

    use(): void;

    render(): Object;
}
