const Discord = require("discord.js");
 module.exports.run = async(client , message , args) => {
		message.guild.fetchBans().then(bans => {
			if(bans.size < 1) {
				const noBansEmbed = new Discord.MessageEmbed()
				.setColor("BLACK")
				.setTitle("Aucune personne n'est bannie sur le serveur!")
				return message.channel.send({embed: noBansEmbed});
			} else {
				message.channel.send("=====Liste des personnes bannies=====");
				message.channel.send(`${bans.size} sont bannies:`);
				const bansArray = bans.array();
				for (var i = 0; i < bansArray.length; i++) {
					message.channel.send(`${bansArray[i].user.tag} - _${bansArray[i].user.id}_ + ${reason}`);
				}
			}
		});
	
}
module.exports.help = {
  name:"banlist"
 }