const Discord = require('discord.js');

var fortunes = [
    "Oui",
    "Non",
    "Peut être ? :)",
    "Je sais pas, réessaye encore",
    "法 Mahō Sensō ❀ a cessé de fonctionner...",
  "Et si tu me répondais toi avant ?"
];


module.exports.run = async (bot, message, args) => {

if(!args[0]){
  return message.channel.send(":x: " + "| Merci d'enter une question pour que j'y réponde")
}
  

  const embedRoll = new Discord.MessageEmbed()
    .setFooter(message.author.username)
    .setColor("RANDOM")
    .setTitle((fortunes[Math.floor(Math.random() * fortunes.length)]))
                        message.channel.send(embedRoll)  
}

module.exports.help = {
    name: "8ball"
}