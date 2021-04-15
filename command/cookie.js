const request = require('request');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    if (!args[0]) return message.reply("J'ai besoin d'un sujet de recherche !");
    
    request({url: 'https://djsdocs.sorta.moe/main/stable/embed?q=' + encodeURIComponent(args.join(' ')), json: true}, (req, res, json) => {
      message.channel.send({embed: json});
    });
  } catch (err) {
    message.channel.send("There was an error!\n" + err).catch();
  }
};

exports.help = {
    name:"discordjs"
}