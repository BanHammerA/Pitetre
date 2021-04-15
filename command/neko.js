const Discord = require ("discord.js");
const Client = require('nekos.life');
const neko = new Client();
module.exports.run = async (client, message, args) => {
    const taggedUser = message.mentions.users.first();
  let response = await neko.sfw.nekoGif()
  const embed = new Discord.MessageEmbed()
// Et pour le title :
  .setDescription(message.author.username + ' **Est un chat ! :3**' ) 
  .setImage(response.url)
  message.reply(embed);
  
}
module.exports.help = {
  name:"nekoSFW"
}