const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
    client.user.setGame(`. FủLiĨ "#1813`,'https://www.twitch.tv/MeeRcY')
client.user.setStatus("idle")
    
});
client.login(process.env.BOT_TOKEN);
