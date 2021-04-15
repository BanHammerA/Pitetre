const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
if (!message.guild.me.hasPermission("BAN_MEMBERS")) {
    return message.channel.send(`**${message.author.username}**, Je n'ai pas la permission de ban un membre.`).then(m => m.delete({ timeout: 10000 }));
}
let vide = new Discord.MessageEmbed()
        .setColor("#00ff00")
        .setTitle("Ban Commande")
        .addField("Description:", `Bannir un membre`, true)
        .addField("Usage:", `e!ban [user] [raison]`, true)
        .addField("Example:", `e!ban @Pseudo#0000 spam`)

        if(!message.member.hasPermission("KICK_MEMBERS") && message.author.id !== "494603897550274573") return message.channel.send("Tu ne possèdes pas la permission de faire ceci !");

        let member = message.mentions.members.first();
        if(!member) return message.channel.send(vide)
        if(!member.bannable) return message.channel.send("Ce membre ne peut pas être banni ")
        if(member.user.id === "494603897550274573") return message.channel.send("Je ne peux pas bannir mon créateur!")
        if(member)
        if(member.id === message.author.id) return message.channel.send("Tu ne peux pas te bannir")
        let res = args.slice(1).join(" ");

        if(!res) {
            res = "Pas de raison";
        } else {
            res = res
        }

       await member.ban({
           reason: (res)
}).catch(err => {
         if (err) return message.channel.send(`Je n'ai pas pu le bannir car : ${err}`);
  });
        let bean = new Discord.MessageEmbed()
        .setColor("#00ff00")
        .setTitle(`Ban | ${member.user.tag}`)
        .addField("Utilisateur", member, true)
        .addField("Modérateur ", message.author, true)
        .addField("Raison", res)
        .setTimestamp()

        message.channel.send(bean)
      let memberCountChannel = bot.channels.cache.find(
      c => c.id == "715228100140597249"
    );
    memberCountChannel.send(bean)

        message.delete()

      }
      module.exports.help = {
        name: "ban"
      }