const Discord = require('discord.js')
module.exports.run = async(client, message, args) => {
  if(!args[0]) return message.reply('Veuillez envoyez un message de suggestion');
 
  
    const sayMessage = args.join(" ");
    let embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle('Une nouvelle idée vient d\'être donnée !')
    .setDescription(sayMessage, message.author.username)
    .setTimestamp()
    .setFooter(message.author.tag, message.author.displayAvatarURL())
    .setThumbnail(message.author.avatarURL())
      if ( message.guild.id === '518849889409564673') {
            const sendEmbed = await message.guild.channels.cache.get('729646237292429312').send(embed)

    }
     const sendEmbed = await message.guild.channels.cache.get('748157092421959680').send(embed)
    await sendEmbed.react('✅')
    await sendEmbed.react('🤔')
    await sendEmbed.react('❌')
      message.delete();
}
module.exports.help = {
  name:"suggestion"
}