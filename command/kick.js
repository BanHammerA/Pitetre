const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {

  if (!message.member.hasPermission("KICK_MEMBERS")  && message.author.id !== "291221132256870400") return message.channel.send("Tu ne possèdes pas la permission !");
    
  let xdemb = new Discord.MessageEmbed()
  .setColor("#00ff00")
  .setTitle("Commande de Kick")
  .addField("Description:", `Kick un membre`, true)
  .addField("Usage:", "e!kick [utilisateur] [raison]", true)
  .addField("Example:" ,"e!kick @pseudo#0000 spam")

    let member = message.mentions.members.first();
    if(!member) return message.channel.send(xdemb)
      
    if(!member.kickable) 
      return message.channel.send("Je ne peux pas le bannir !");
   if(member.user.id === "291221132256870400") return message.channel.send("Je ne peux pas kick mon créateur (:!")

    
    let reason = args.slice(1).join(' ');
    if(!reason) {
      reason = "Pas de raison";
    }
    else {
      reason = `${reason}`
    }
    
    await member.kick(reason)
      .catch(error => message.reply(`Désolé, je n'ai pas pu le kick car : ${error}`));

      let kick = new Discord.MessageEmbed()
      .setColor("#00ff00")
      .setTitle(`Kick | ${member.user.tag}`)
      .addField("Utilisateur", member, true)
      .addField("Modérateur", message.author, true)
      .addField("Raison", reason)
      .setTimestamp()
      .setFooter(member.id)

      message.channel.send(kick)
       let memberCountChannel = bot.channels.cache.find(
      c => c.id == "715228100140597249"
    );
    memberCountChannel.send(kick)

    message.delete();
    
}
      module.exports.help = {
        name: "kick"
      }