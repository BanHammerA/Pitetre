const Discord = require ("discord.js");
const Client = require('nekos.life');
const neko = new Client();
module.exports.run = async (client, message, args) => {
  let response = await neko.sfw.waifu()
   const embedD = new Discord.MessageEmbed()
  .setTitle(message.author.username + ' voici ta waifu :)' )
  .setImage(response.url)
  message.channel.send(embedD)


}
module.exports.help = {
  name:"random-waifu"
}