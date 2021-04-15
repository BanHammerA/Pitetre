const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    function checkDays(date) {
        let now = new Date();
        let diff = now.getTime() - date.getTime();
        let days = Math.floor(diff / 86400000);
        return days + (days == 1 ? " jour" : " jours")
    };
    const embed = new Discord.MessageEmbed()   
        .setAuthor(message.guild.name, message.guild.iconURL)
        .addField("Nom :", message.guild.name, true)
        .addField("ID :", message.guild.id, true)
        .addField("Créateur :", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
        .addField("Total de membres :", `${message.guild.members.cache.size}`, true)
        .addField("nombre de salons :", message.guild.channels.cache.size, true)
        .addField("nombre de rôles :", message.guild.roles.cache.size, true)
        .addField("Date de création :", `${message.channel.guild.createdAt.toUTCString().substr(0, 16)} (${checkDays(message.channel.guild.createdAt)})`, true)
        .setFooter('Commande executée par '+message.author.username, message.author.displayAvatarURL())
    message.channel.send({embed});
}

module.exports.help = {
    name: "server-info"
}