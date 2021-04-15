const Discord = require('discord.js')
module.exports.run = async(client, message, args) => {
     
    if(args[0] === 'ping') {
        message.channel.send(`La commande ping permet de connaître la latence du bot`)
    } else {
    if(args[0] === 'help') {
        message.channel.send(`La commande help permet d\'envoyer la liste des commandes`)
    } else { 
       if(args[0] === 'hug') {
        message.channel.send(`La commande hug permet de faire un câlin à la personne mentionnée !`)
    } else { 
 if(args[0] === 'baka') {
        message.channel.send(`La commande baka permet de traiter une personne d\'idiot`)
    } else { 
  if(args[0] === 'avatar') {
        message.channel.send(`La commande avatar permet d\'afficher votre avatar`)
    } else { 
  if(args[0] === 'neko') {
        message.channel.send(`La commande avatar permet d\'afficher votre avatar`)
    } else { 

    const embedHelp = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('LISTE DES COMMANDES')  
    .setURL('https://discord.gg')
    .setDescription("Voici la liste des commandes du bot  法 Mahō Sensō ❀  :tada:  , le prefix de celui ci est 'e!'  ")
    .addField('-> :tada: FUN :tada:','``hug``, ``baka``, ``avatar``, ``8ball``, ``wallpaper``, ``roll``, ``pat``, ``kiss``, ``cat``, ``nekoSFW``, ``slap``, ``random-waifu``, ``reverse``, ``morse``, ``ddos``, ``lc (lovelac)`` ')
    .addField('-> :tools: Utilitaire :tools:','``help``, ``server-info``, ``ping``, ``user-info``, ``server-list``, ``rappel``,``math``,``suggestion``')
    .addField('-> :star: Modération :star:','``ban``, ``kick``, ``clear``, ``sondage``, ``say``, ``warn`` , ``tempmute``, ``unmute``')
        .addField('-> <:emoji_bg:726524094958534746>  NSFW (+18) <:emoji_bg:726524094958534746> ',' ``hentai`` , ``neko``, ``nekoGif``, ``futanari``, ``kitsune``, ``cum-arts``')
    .setFooter(message.author.username)
    .setTimestamp() 
    .setThumbnail(client.user.displayAvatarURL())

    message.channel.send(embedHelp)
      }}
    }}   
  }}
};
module.exports.help = {
    name: 'help'
}