const Discord = require('discord.js')
const math = require('mathjs')
module.exports.run = async(client, message, args, tools) => {
  if(!args[0]) return message.channel.send(' <a:nzdzon:711928863780765725> Veuillez ajouter un calcul a faire !<a:nzdzon:711928863780765725> ');

  let resp;
  try {
    resp = math.eval(args.join(' '));
  } catch (e) {
    return message.channel.send('<a:nzdzon:711928863780765725> Veuillez envoyer un calcul valide. <a:nzdzon:711928863780765725>')
  }
  const embed = new Discord.MessageEmbed()
  .setTitle('Calculation :thinking:')
  .addField('Demande : ',`\`\`\`diff\n${args.join('')}\`\`\``)
  .addField('Réponse :',`\`\`\`diff\n${resp}\`\`\``)
  .setFooter(message.author.username, message.author.displayAvatarURL())
  message.channel.send(embed)
}
module.exports.help = {
  name:"math"
}