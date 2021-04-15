module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("tu n'a pas la permission pour !")
    let toMute = message.mentions.members.first() || message.guild.members.cache.get(args[1]);
    let rolename = args[1]
    let role = message.guild.roles.cache.find(r => r.name === "🤫┆cachotier")
    toMute.roles.remove(role.id)

    if(!role || !toMute.roles.cache.has(role.id)) return message.channel.send("Il n'est pas mute!");
    message.channel.send("Il a été unmute!");

    await(toMute.roles.remove(`${role}`));

    message.delete();

}
    
module.exports.help = {
    name: "unmute"
}