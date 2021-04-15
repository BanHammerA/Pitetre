const Discord = require ("discord.js");
const Client = require('nekos.life');
const neko = new Client();
module.exports.run = async (client, message, args) => {
    const taggedUser = message.mentions.users.first();
  let response = await neko.sfw.baka()
   const embedD = new Discord.MessageEmbed()
  .setTitle(message.author.username + ' Est bête ?' )
  .setImage(response.url)
  if(!taggedUser) return message.channel.send(embedD)
  
  const embed = new Discord.MessageEmbed()

// Et pour le title :
  .setDescription(message.author.username + ' traîte  **' + `${taggedUser.username}` +'** de baka :)' ) 
  .setImage(response.url)
  message.reply(embed);
  


}
module.exports.help = {
  name:"baka"
}