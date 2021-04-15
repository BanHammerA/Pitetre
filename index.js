const bdd = require("./bdd.json");
let cooldown = new Set();
const moment = require("moment");
let cdseconds = 5;
const Client = require("nekos.life");
const { sfw } = new Client();
const translate = require("google-translate-api");
const math = require("mathjs");
const Discord = require("discord.js");
const fs = require("fs");
const ms = require('ms');
const client = new Discord.Client();
const Kitsu = require("kitsu.js");
const kitsu = new Kitsu();
const md5 = require('md5');
const os = require('os');
const cpuStat = require('cpu-stat');
const ytdl = require("ytdl-core");
var aq = require("animequote");
const fetch = require("node-fetch");
const osu = require('node-osu');
const request = require('request')
const warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));
client.login(".");
client.commands = new Discord.Collection();
client.cooldowns = new Discord.Collection();

fs.readdir("./events/", (err, files) => {
  if (err) return console.log(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    console.log(`${files.length} events opérationnels !`);
    const eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});
fs.readdir("./command/", (err, files) => {
  if (err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if (jsfile.length <= 0) {
    console.log("Aucune commande trouvé !");
    return;
  }
  jsfile.forEach((f, i) => {
    let props = require(`./command/${f}`);
    console.log(`${i + 1} : ${f} est opérationnel !`);
    client.commands.set(props.help.name, props);
  });
});
fs.readdir("./command/NSFW", (err, files) => {
  if (err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if (jsfile.length <= 0) {
    console.log("Aucune commande trouvé !");
    return;
  }
  jsfile.forEach((f, i) => {
    let props = require(`./command/NSFW/${f}`);
    console.log(`${i + 1} : ${f} est opérationnel !`);
    client.commands.set(props.help.name, props);
  });
});

client.on("guildMemberAdd", function(member) {
  var fortunes = [
    "**:point_right:" +
      member.user.tag +
      "** **➜Débarque sur** " +
      "**__" +
      member.guild.name +
      "__**" +
      ", **Alias➜ **  " +
      member.toString(),
    "**:point_right:" +
      member.user.tag +
      "** **➜Arrive sur** " +
      "**__" +
      member.guild.name +
      "__**" +
      ", **Aka➜ ** " +
      member.toString(),
    "**:point_right:" +
      member.user.tag +
      "** **➜Vient de venir sur** " +
      "**__" +
      member.guild.name +
      "__**" +
      ", **Surnommé(e)➜ ** " +
      member.toString(),
    "**:point_right:" +
      member.user.tag +
      "** **➜Apparaît sur ** " +
      "**__" +
      member.guild.name +
      "__**" +
      ", **dénommé(e)➜ ** " +
      member.toString()
  ];
  let embed = new Discord.MessageEmbed()
    .setDescription(fortunes[Math.floor(Math.random() * fortunes.length)])
    .setColor("#2f3136");

  member.guild.channels.cache.get("720667375917072497").send(embed).catch(err => member.guild.channels.cache.get("720667375917072497").send(err));
});

client.on("guildMemberAdd", function(member) {
  let embed = new Discord.MessageEmbed()
    .setTitle(
      "Kangei sur 法 Mahō Sensō ❀ ",
      "https://images-ext-1.discordapp.net/external/X6-mNpU-ARADcNP5o8ZBK_LYvKEiNS2sfudEPJJ1Rwk/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/631975291203485727/196b7a81aab48e52b593e097656b496a.png?width=60&height=60"
    )
    .setURL("https://discord.com")
    .setAuthor("法 Mahō Sensō ❀ BOT ✔✅ ")
    .addField(
      "Bienvenue",
      "Nous sommes heureux de t'accueillir! <a:Owwww:715558810688815175>, <a:Mh_dj:719508772149788692> "
    )
    .addField(
      "Règlement",
      "Il faut lire le règlement dans <#715228028053225575>, <a:TakagiSmile:715545062901022791> "
    )
    .addField(
      "Et pour finir les rôles",
      " Prendre tes rôles dans <#715228030225612822>.<a:Bang:715558723602612254> "
    )
    .addField(
      "Voilà !",
      "Maintenant que c'est fait, je te souhaite de bien t'amuser sur notre serveur !  "
    )
    .setFooter(member.user.tag)
    .setColor("GREEN")
    .setTimestamp()
    .setThumbnail(
      "https://tenor.com/view/shiro-anime-girl-happy-gif-15949519.gif"
    );
  member.send(embed);
});


client.on("message",async  message => {
if(message.content.startsWith('"Nouvelle présentation"')) {
	try {
	        await message.react("🤮")
			await message.react("🥴")
			await message.react("😕")
			await message.react("😙")
			await message.react("🤩")
		} catch (error) {
			console.error('Problème avec un émoji' + error);
		}
	}
});
client.on("guildCreate", guild => {
    bdd[guild.id] = {}
    Savebdd()
})

function Savebdd() {
    fs.writeFile("./bdd.json", JSON.stringify(bdd, null, 4), (err) => {
        if (err) console.log("Une erreur est survenue.");
    });
  }
