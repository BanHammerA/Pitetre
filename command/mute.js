const Discord = require("discord.js");
exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("VIEW_AUDIT_LOG")) return message.channel.send('non')
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[1]);
   if(!user) return message.channel.send("L'utilisateur ?")
   const PTDR = new Discord.MessageEmbed()
   .setColor('RED')
   .setTitle('Error 405...')
   .setDescription('Veuillez réessayez.')
   .setTimestamp()
   .setFooter(message.author.username)
   message.channel.send(PTDR)
}
  exports.help = {
    name: 'mute'
  };