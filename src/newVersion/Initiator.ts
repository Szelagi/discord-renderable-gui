import Gui from "./Gui";
import CreateBuilder from "./CreateBuilder";

interface InitiatorParams {
    gui: Gui;
    builder: CreateBuilder;
}

export default function Initiator({ gui, builder }: InitiatorParams) {}