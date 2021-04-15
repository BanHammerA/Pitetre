const Discord = require("discord.js");
const osu = require('node-osu');

// Cached variables
let osuApi;

exports.run = (client, message, args) => {
    const { config } = client;
    osuApi = osuApi || new osu.Api(config.osuToken);

    osuApi.getUser({ u: args.join(' ') }).then(user => {
        //console.log(user)
        const embed = new Discord.MessageEmbed()
            .setColor(config.embedColor)
            .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Osu%21Logo_%282015%29.png/600px-Osu%21Logo_%282015%29.png")
            .setAuthor(`${user.name} (${user.id})`, `https://a.ppy.sh/${user.id}`, `https://osu.ppy.sh/users/${user.id}`)
            .setDescription(`User Stats as of ${new Date().toLocaleString()}`)
            .addField("AIM", `${Math.round(user.accuracy * 100) / 100}%`, false)
            .addField("Score total", user.scores.total, false)
            .addField("Ranked Score", user.scores.ranked, false)
            .addField("Niveau", Math.floor(user.level), true)
            .addField("Play Count", user.counts.plays, true)
            .addField("Rank A Plays", user.counts.A, true)
            .addField("Rank S Plays", user.counts.S, true)
            .addField("Rank SS Plays", user.counts.SS, true);
        message.channel.send(embed);
    })
}

exports.help = {
    name: "osu"
}