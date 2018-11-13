const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
const adminprefix = "M";
const devs = ['228139766573432832','228139766573432832'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
    
if (message.content.startsWith(adminprefix + 'setPlaying')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} Done. **`)
} else 
  if (message.content.startsWith(adminprefix + 'setName')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : Done.`)
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
} else
  if (message.content.startsWith(adminprefix + 'setAvatar')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : Done.`);
      } else     
if (message.content.startsWith(adminprefix + 'setStream')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)
}
});
client.login(process.env.BOT_TOKEN)
