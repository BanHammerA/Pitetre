const Discord = require('discord.js')
exports.run = (client, message, args) => {
  let slots = [":key:", ":nazar_amulet:", ":gem:"];
  let result1 = Math.floor((Math.random() * slots.length));
  let result2 = Math.floor((Math.random() * slots.length));
  let result3 = Math.floor((Math.random() * slots.length));
  let name = message.author.displayName;
  let icon = message.author.displayAvatarURL();

 if (result1 === result2 && result1 === result3)  {
    let embed = new Discord.MessageEmbed()
       .setFooter('Tu as gagné !', icon)
       .setTitle(':slot_machine: Slots :slot_machine:')
       .addField('Resultat:', slots[result1] + slots[result2] + slots[result3], true)
       .setColor(0xF4E842)
    message.channel.send(embed);

  } else {
    let embed2 = new Discord.MessageEmbed()
       .setFooter('Tu as perdu !',icon )
       .setTitle(':slot_machine: Slots :slot_machine:')
       .addField('Resultat:', slots[result1] + slots[result2] + slots[result3], true)
       .setColor(0xF4E842)
    message.channel.send(embed2);
  }
}

module.exports.help = {
    name:"slot"
}