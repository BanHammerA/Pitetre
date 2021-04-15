const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
      if(!message.member.hasPermission("MANAGE_MESSAGES")) return;
      const sayMessage = args.join(" ");
      let embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(sayMessage, message.author.username)
    .setTimestamp()
      .setFooter(message.author.username)
      message.delete().catch();
      message.channel.send(embed)

}

module.exports.help = {
  name: "say"
}