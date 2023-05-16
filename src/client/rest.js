import {TOKEN} from "../env.js";
import {REST} from "discord.js";

const rest = new REST({version: '10'}).setToken(TOKEN);

export default rest;
