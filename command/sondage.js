const Discord = require('discord.js')
 module.exports.run = async(client, message, args) => {
    if(!args[0]) return message.reply('Vous devez donner un sujet de sondage après la commande !')
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Vous n'avez pas la permission de crée un sondage !")
    const sondageEmbed = new Discord.MessageEmbed()
    .setTitle('Nouveau Sondage !')
    .setColor('#450074')
    .addField('Sondage : ', args.join(" "))
    .setFooter('Sondage de ' + message.author.username, message.author.displayAvatarURL)
    const sendEmbed = await message.channel.send(sondageEmbed)
    await sendEmbed.react('✅')
    await sendEmbed.react('🤔')
    await sendEmbed.react('❌')
          message.delete().catch();

}

module.exports.help = {
    name: "sondage"
}