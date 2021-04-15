const Discord = require('discord.js')
module.exports.run = async(client, message, args) => {
    const memberRoll = args[0]
        var result = Math.floor(Math.random() * memberRoll);  
        const embedRoll = new Discord.MessageEmbed()
    .setFooter(message.author.username)
    .setColor("RANDOM")
    .setTitle(('',':game_die: vous avez roll  ' + result))
    if(isNaN(memberRoll)) return message.channel.send('Ce n\'est pas un nombre')
    if(!memberRoll) return message.channel.send("Vous devez dire un nombre")
    message.channel.send(embedRoll)   

}
module.exports.help = {
    name: 'roll'
}