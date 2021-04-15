const Discord = require("discord.js");
const prefix = "e!"
exports.run = (client, message, args) => {
    let user = (message.mentions.users.first() || message.author);
    const embed = new Discord.MessageEmbed()
      .setImage(user.displayAvatarURL({dynamic: true, size: 2048}))
      .setColor(0x00A2E8);
    message.channel.send(embed);
  const timer = new Set();  
/* infos sur le new Set() :
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Set
*/

client.on("message", message => {

if (message.content === prefix +"avatar"){
       var authorId = message.author.id;
    if (timer.has(authorId)) { // si timer contient l'id de l'auteur : 
        message.reply("Vous avez déjà utilisé cette commande il y a moins de ___ "); //on répond que blablabla
    
    } else {   //sinon : 

  timer.add(authorId); //on ajoute son id
    
//Le code que vous voulez...

}

setTimeout(function() { //au bout du temps prévu 
    timer.delete(authorId); // on supprime l'id 
}, 3600000); //  3600000 ms = 1 heure

}
});
 
};
module.exports.help = {
    name:"avatar"
};