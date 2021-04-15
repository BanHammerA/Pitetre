const Discord = require('discord.js')
const cooldown = new  Set()
exports.run = function (client, message, args) {
     if (cooldown.has(message.author.id)) {
    let cooldownemb = new Discord.MessageEmbed()
    .setAuthor(`${message.author.username} Cooldown..`, message.author.displayAvatarURL)
    .setDescription(`Vous devez attendre `)
    .setColor(`RED`)
    .setFooter(`Ce message sera supprimé dans 5 secondes`)
    return message.channel.send(cooldownemb).then(message => {
    setTimeout(function() {
        message.delete();
      }, 5000);
    })
    
    }
    cooldown.add(message.author.id);

    setTimeout(() => {
        cooldown.delete(message.author.id);
    }, 10000);
    if (!args[0]){
       return message.channel.send('Vous devez entrer le texte à inverser !');
    };
  
  const embed = new Discord.MessageEmbed()
  .setTitle('Revenversement !')
  .setColor('RANDOM')
  .setDescription(('**-> ' + args.join(' ').split('').reverse().join('') +'**' ))
   message.channel.send(embed)
};

exports.help = {
    name: 'reverse'
}