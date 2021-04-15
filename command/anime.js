const Discord = require('discord.js');
const Kitsu = require('kitsu.js');
const kitsu = new Kitsu();
var aq = require('animequote');
const fetch = require("node-fetch")
 module.exports.run = async (client, message, args) => {
    //checking args
   if (!args[0]) {
     return message.channel.send("Veuillez donner le nom d'un anime.");
      
    }
    //main part
        var search = message.content.split(/\s+/g).slice(1).join(" ");
        kitsu.searchAnime(search).then(async result => {
            if (result.length === 0) {
                return message.channel.send(`Pas de résultat pour **${search}**!`);
            }
          
          var anime = result[0]

            let embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setAuthor(`${anime.titles.french? anime.titles.french : search} | ${anime.showType}`, anime.posterImage.original)
                .setDescription(anime.synopsis.replace(/<[^>]*>/g, '').split('\n')[0])
                .addField('❯\u2000\Informations', `•\u2000\**Nom en Japonais:** ${anime.titles.romaji}\n\•\u2000\**Âge requis:** ${anime.ageRating}\n\•\u2000\**NSFW :** ${anime.nsfw ? 'Oui' : 'Non'}`, true)
                .addField('❯\u2000\Statistiques', `•\u2000\**Notations :** ${anime.averageRating}\n\•\u2000\**Rang de notation:** ${anime.ratingRank}\n\•\u2000\**Rang de Popularité :** ${anime.popularityRank}`, true)
                .addField('❯\u2000\Statuts', `•\u2000\**Episodes:** ${anime.episodeCount ? anime.episodeCount : 'N/A'}\n\•\u2000\**A commencé le :** ${anime.startDate}\n\•\u2000\**S'est fini le :** ${anime.endDate ? anime.endDate : "En cours..."}`, true)
            
                .setThumbnail(anime.posterImage.original, 100, 200);
          

            return message.channel.send(embed)
        }).catch(err => {
            console.log(err) //cathing error
            return message.channel.send(`Pas de résultats pour :**${search}**!`);
        });
    }


module.exports.help= {
  name:"anime"
}