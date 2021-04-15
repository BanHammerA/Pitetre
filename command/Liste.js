const Discord = require('discord.js')
module.exports.run = async(client, message) => { 
  const embed = new Discord.MessageEmbed()
  .setTitle('Nombre de serveurs ' + client.guilds.cache.size, true)
  .setURL("https://discord.gg")
  .setDescription(client.guilds.cache.map(r => r.name + ` | **${r.memberCount}** membres ! ` ))
   message.channel.send(embed)
  }
module.exports.help ={
  name:"server-list"
}