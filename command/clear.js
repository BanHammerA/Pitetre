const Discord = require('discord.js')
module.exports.run = async(client, message, args) => {
      if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Vous n'avez pas la permission !")
    if(!args[0]) return message.reply("Syntaxe: e!clear <entez le nombre de messages à supprimer>")

  message.channel.bulkDelete(args[0]).then(() => {
    const embed = new Discord.MessageEmbed()
    .setTitle('<a:ouidz:711928832906493974> Réussi ! <a:ouidz:711928832906493974>')
    .setDescription("J'ai réussi a supprimé "+(args[0])+" messages !")
    message.channel.send(embed).then(message => {
                  setTimeout(function () {
                      message.delete();
                  }, 5000)
              });
});
}
module.exports.help = {
    name: 'clear'
}