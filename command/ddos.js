const Discord = require('discord.js');
const { Client } = require('discord.js');
const client = new Client();

module.exports.run = (client, message, args) => {
 const member = message.mentions.members.first();
 let number = Math.floor(Math.random() * 50)
 let numbera = Math.floor(Math.random() * 50)
 let numberae = Math.floor(Math.random() * 150)
     if(!member) return message.channel.send("Vous voulez hacker qui ? ")

     var ddos = new Discord.MessageEmbed()
    .setTitle("Ddos by  "+ message.author.username)
    .setColor("RANDOM")
    .addField("IP:", `192.${number}.${numbera}.${numberae} `)
    .addField("Personne hackée ",`<@${member.id}>`)
    .addField("Port:", "80")
    .setTimestamp()
    .setFooter(client.user.username)
    message.channel.send(ddos);
    var charge = ".";
    var chargeC = "▒";
    message.channel.send("[" + charge.repeat(40) + "]").then((message) => { for (i = 0; i <= 40; i++) { message.edit("[" + chargeC.repeat(i) + charge.repeat(40 - i) + "]  -  " + i * 100 / 40 + "%"); } }) 
}


 module.exports.help = {
    name: 'ddos'
};