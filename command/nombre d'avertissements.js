const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Tu ne peux pas faire cela.");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0])
  if(!wUser) return message.reply("Je n'ai pas trouvé l'utilisateur en question");
  let warnlevel = warns[wUser.id].warns;
 
const embed = new Discord.MessageEmbed()
.setTitle("Avertissements")
.setDescription(`Voici le nombre d'avertissements que <@${wUser.id}> a reçu ** ${warnlevel} ** avertissements ! `)
.setFooter(message.author.username)
.setTimestamp()
  message.channel.send(embed), (err) => {
    if (err) message.channel.send("Il n'a aucun avertissement.")
}
}

module.exports.help = {
  name: "warns"
}