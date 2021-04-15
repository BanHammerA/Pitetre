const Discord = require("discord.js");
const ms = require("ms");

exports.run = async (client, message, args) => {

    let tomute = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
    if(!tomute) return message.reply("Je n'ai pas pu trouver l'utilisateur.");
    if(message.author.id === message.mentions.users.first()) return message.reply("Tu ne peux pas te mute:facepalm:");
    let muteRole = message.guild.roles.cache.find(val => val.name === "🤫┆cachotier");
    if (!muteRole) {
        try {
            muteRole = await message.guild.roles.create({
                data:{
                name:"cachotier",
                color: "GRAY",
                permissions:[]
                }
            });
    
            message.guild.channels.cache.forEach(async (channel, id) => {
                await channel.createOverwrite(muteRole, {
                    SEND_MESSAGES: false,
                    MANAGE_MESSAGES: false,
                    READ_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch(e) {
            console.log(e.stack);
        }
    }
    let mutetime = args[1];
    if(!mutetime) return message.reply("Et le temps ? Merci de refaire la commande en ajoutant un temps [s|m|h|d] ");
    
    const embed = new Discord.MessageEmbed()
    .setColor(0x00FFFF)
    .setTimestamp()
    .addField('Action:', 'Temp Mute')
    .addField('utilisateur:', `${tomute.username}#${tomute.discriminator} (${tomute.id})`)
    .addField('Moderateur:', `${message.author.username}#${message.author.discriminator}`)
    .addField('temps', ms(ms(mutetime)))
    .setFooter(`Bot crée par Ban_Hammer`);
    message.channel.send({embed});

    message.guild.member(tomute).roles.add(muteRole);

    setTimeout(function(){
        message.guild.member(tomute).roles.remove(muteRole)
    }, ms(mutetime));
}

  exports.help = {
    name: 'tempmute',
    description: 'Temporary mute the mentioned user',
    usage: 'tempmute @user (time)'
  };