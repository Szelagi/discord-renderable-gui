import CLIENT_CONFIG from "./config.json" assert { type: "json"};// experimental feature!
import { REST } from "discord.js";

const rest = new REST({ version: '10' }).setToken(CLIENT_CONFIG.token);

export default rest;
