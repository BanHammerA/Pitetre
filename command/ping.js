const Discord = require('discord.js')
module.exports.run = async(client, message) => {
    const now = Date.now()
await message.channel.send("Calcule du ping en cours...").then(async(m) => await m.edit(`Pong :ping_pong: ! Latence : ${Date.now() - now} ms`) *50000)
}
module.exports.help = {
    name: 'ping',
    cooldown: 5
}