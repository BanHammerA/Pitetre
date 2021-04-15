const Discord = require ("discord.js");
const Client = require('nekos.life');
const neko = new Client();
module.exports.run = async (client, message, args) => {
  if (message.channel.nsfw === true) {
    const taggedUser = message.mentions.users.first();
  let response = await neko.nsfw.nekoGif()
   const embedD = new Discord.MessageEmbed()
  .setTitle(message.author.username+" voilà pour toi (:")
  .setImage(response.url)
message.channel.send(embedD)
  } else {
    return message.channel.send("Ce n'est pas un salon NSFW :underage:")
  }
}
module.exports.help = {
  name:"nekoGif"
}