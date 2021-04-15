const Discord = require ("discord.js");
const Client = require('nekos.life');
const neko = new Client();
module.exports.run = async (client, message, args) => {
    const taggedUser = message.mentions.users.first();
  let response = await neko.sfw.slap()
   const embedD = new Discord.MessageEmbed()
  .setTitle(message.author.username + ' Se claque lui même' )
  .setImage(response.url)
  if(!taggedUser) return message.channel.send(embedD)
  
  const embed = new Discord.MessageEmbed()

// Et pour le title :
  .setDescription(message.author.username + ' donne une claque à **' + `${taggedUser.username}`+'**' ) 
  .setImage(response.url)
  message.reply(embed);
  
}
module.exports.help = {
  name:"slap"
}