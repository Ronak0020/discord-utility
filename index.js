let Discord = require("discord.js");

let UtilsDiscord;

if(Number(Discord.version.split(".")[0]) < 13) UtilsDiscord = require("./v12/index");
if(Number(Discord.version.split(".")[0]) >= 13) UtilsDiscord = require("./v13/index");

module.exports = UtilsDiscord;
