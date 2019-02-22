const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("526846216458338306")
setInterval(function() {
channel.send(`mahmoud the best mahmoud the best`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
