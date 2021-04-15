const prefix = 'e!'
module.exports =(client, message) => {
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    if(message.channel.type === "dm") console.log(`[${message.author.username}] ${message.content}`);
    if(message.channel.guild) console.log(`[${message.author.username}] + [${message.author.tag}] ${message.content}`);
    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let commandes = args.shift();
        let command = client.commands.get(commandes);

           if (!command) return;
              command.run(client, message, args);
}