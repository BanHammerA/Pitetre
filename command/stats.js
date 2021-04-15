const Discord = require("discord.js")
 const os = require('os')
 const cpuStat = require("cpu-stat");
 const moment = require("moment") 


 module.exports.run = async (bot, message, args) => {

            let { version } = require("discord.js");
     
            cpuStat.usagePercent(function(err, percent, seconds) {
              if (err) {
                return console.log(err);
              }
             
             let secs = Math.floor(bot.uptime % 60);
             let days = Math.floor((bot.uptime % 31536000) / 86400);
             let hours = Math.floor((bot.uptime / 3600) % 24);
             let mins = Math.floor((bot.uptime / 60) % 60);
     
              let embedStats = new Discord.MessageEmbed()
             .setTitle("*** Stats ***")
             .setColor("#00ff00")
             .addField("nom du bot", ` 🤖${bot.user.username}`, true)
             .addField("Créateur du bot", "<:BAN_Cat:715370877000220724>  <@494603897550274573>", true )
             .addField("Serveurs", `🛡 ${bot.guilds.cache.size}`, true)
             .addField("Salons", `📁 ${bot.channels.cache.size}`, true)
             .addField("Nombre d'utilisateurs", ` 🌐${bot.users.cache.size}`, true)
             .addField("Librairie du bot", "💻 Discord.js v12.2.0", true)
             .addField("Crée le ", `⏲ ${bot.user.createdAt}`)
             .addField("• Mem Usage", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`, true)
             .addField("• Uptime ", `${hours}h ${mins}m ${secs}s`, true)
             .addField("• Discord.js", `v${version}`, true)
             .addField("• Node", `${process.version}`, true)
             .addField("• CPU", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
             .addField("• CPU usage", `\`${percent.toFixed(2)}%\``,true)
             .addField("• Arch", `\`${os.arch()}\``,true)
             .addField("• Platform", `\`\`Windows 10\`\``,true)
             .setFooter("法 Mahō Sensō ❀ BOT stats")
     
             message.channel.send(embedStats)
             })


 }

    module.exports.help = {
        name: "bot-info"
    }