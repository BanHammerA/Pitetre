const Discord = require("discord.js");
module.exports = client => {
    console.log("Les commandes et les events son opérationnels ! Mise en ligne en cours...")
    
        let statuses = [
            "e!help",
            ` plus de ${client.users.cache.size} utilisateurs`,
            `${client.guilds.cache.size} serveurs`
            
        ]

     setInterval(function() {   
        let status = statuses[Math.floor(Math.random() * statuses.length)]; 
     client.user.setActivity(status, {type: "STREAMING", url :"https://www.twitch.tv/zaac_tv"});
     }, 60000)
     
// A pretty useful method to create a delay without blocking the whole script.

}