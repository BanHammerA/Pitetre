const Discord = require ("discord.js");
const Client = require('nekos.life');
const neko = new Client();
module.exports.run = async (client, message, args) => {
    const taggedUser = message.mentions.users.first();
  let response = await neko.sfw.smug()
  const embed = new Discord.MessageEmbed()
// Et pour le title :
  .setDescription(message.author.username + ' **:)**' ) 
  .setImage(response.url)
  message.channel.send(embed);
  
}
module.exports.help = {
  name:"smug"
}