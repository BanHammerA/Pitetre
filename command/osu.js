const Discord = require('discord.js')
const osu = require('node-osu');
const api = new osu.Api("95206b2b9ea61afbc45117d5831c1ff08bc4cf81" , {
    notFoundAsError: true,
    completeScores: false 
})
module.exports.run = async(client, message, args) => {
  let username = args[0]
  
  
  if (!args[0]) return message.channel.send('Mettez un utilisateur correct ! (osu!)')
  
api.getUser({u: username}).then(user => {
  const embed = new Discord.MessageEmbed()
  .setTitle('Informations du joueur: ')
  .setThumbnail(`http://s.ppy.sh/a/${user.id}}`)
  .setColor("00ff00")
  .addField('Pseudo: ', user.name, true)
  .addField('PP: ', Math.round(user.pp.raw), true)
  .addField('Rank: ', user.pp.rank, true)
  .addField('Level: ', Math.round(user.level), true)
  .addField('Pays: ', user.country, true)
  .addField('Classement pays:' , user.pp.countryRank, true)
  .addField('Parties jouées: ', user.counts.plays, true)
  .addField('Accuracy:', `${user.accuracyFormatted}`, true)
  message.channel.send(embed)
  
})

}

module.exports.help = {
  name: "osu!"
}