const Discord = require ("discord.js");
let cooldown = new Set();
let cdseconds = 5;
const Client = require('nekos.life');
const neko = new Client();
const prefix = "e!"
module.exports.run = async (client, message, args) => {
  if (!message.content.startsWith(prefix+"wallpaper")) return;
  let response = await neko.sfw.wallpaper()  
  const embed = new Discord.MessageEmbed()
  .setImage(response.url)
  message.reply(embed);
  
}
module.exports.help = {
  name:"wallpaper",
  aliases:['wp']
}