const Discord = require ("discord.js");
const Client = require('nekos.life');
const neko = new Client();
module.exports.run = async (client, message, args) => {
    const taggedUser = message.mentions.users.first();
  let response = await neko.sfw.pat()
   const embedD = new Discord.MessageEmbed()
  .setTitle(message.author.username + ' :3' )
  .setImage(response.url)
  if(!taggedUser) return message.channel.send(embedD)
  
  const embed = new Discord.MessageEmbed()

// Et pour le title :
  .setDescription(message.author.username + ' pat pat  **' + `${taggedUser.username}`+'**' ) 
  .setImage(response.url)
  message.reply(embed);
  
}
module.exports.help = {
  name:"pat"
}