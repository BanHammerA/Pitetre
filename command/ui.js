const Discord = require('discord.js');
const dateFormat = require('dateformat');

dateFormat('dddd, mmmm dS, yyyy, h:MM:ss TT');

exports.run = async (bot, msg) => {
    //Makes sure command is sent in a guild
    if (!msg.guild) {
        return  msg.channel.send('La commande est utilisable que dans un serveur !');
    }


    let user = (msg.mentions.users.first() || msg.author);
    let member = msg.guild.member(user);


    //How long ago the account was created
    const millisCreated = new Date().getTime() - user.createdAt.getTime();
    const daysCreated = millisCreated / 1000 / 60 / 60 / 24;

    //How long about the user joined the server
    const millisJoined = new Date().getTime() - member.joinedAt.getTime();
    const daysJoined = millisJoined / 1000 / 60 / 60 / 24;

    // Slice off the first item (the @everyone)
    let roles = member.roles.cache.array().slice(1).sort((a, b) => a.comparePositionTo(b)).reverse().map(role => role.name);
    if (roles.length < 1) roles = ['Aucun'];

    const embed = new Discord.MessageEmbed()
      .setTitle('Informations ')
    .addField('Statut',`${user.presence.status[0].toUpperCase() + user.presence.status.slice(1)}`)
    .addField('Jeu :',`${(user.presence.game && user.presence.game && user.presence.game.name) || 'Ne joue pas.'}`)
    .addField('Compte crée le : ',`${dateFormat(user.createdAt)}`)
    .addField('Jours depuis la création:', `${daysCreated.toFixed(0)}`)
    .addField('A rejoint le :',`${dateFormat(member.joinedAt)}`)
    .addField('Jours depuis son arrivée',`${daysJoined.toFixed(0)}`)
    .addField('Rôles',`${roles.join(', ')}`)
    .setThumbnail(user.displayAvatarURL())
    .setFooter(`ID : ${user.id}`)
    msg.channel.send(embed);
    
};



module.exports.help = {
    name: 'user-info'
}