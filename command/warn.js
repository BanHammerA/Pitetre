const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

  //!warn @daeshan <reason>
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0])
  if(!wUser) return message.reply("Je n'ai pas réussi a trouvé l'utilisateur");
  if(wUser.hasPermission("MANAGE_MESSAGES")) return message.reply("Impossible ! Je ne peux avertir un modérateur ");
  let reason = args.join(" ").slice(22);
  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };

  warns[wUser.id].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
  });

  let warnEmbed = new Discord.MessageEmbed()
  .setDescription("Warns")
  .setAuthor(message.author.username)
  .setColor("#fc6400")
  .addField("Utilisateur avertit", `<@${wUser.id}>`)
  .addField("Dans le salon :", message.channel)
  .addField("Nombre d'avertissements ", warns[wUser.id].warns)
  .addField("Raison", reason);
  message.channel.send(warnEmbed);

}

module.exports.help = {
  name: "warn"
}