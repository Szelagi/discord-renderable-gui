const { token: TOKEN} = require('./config.json');
const { REST } = require('discord.js');

const rest = new REST({ version: '10' }).setToken(TOKEN);
module.exports = rest;