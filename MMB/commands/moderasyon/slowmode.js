const Discord = require('discord.js');

exports.run = async(client, message, args) => {  //yapımcı avnnn
  if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send(':x: bu özelliği kullanabilmek için `Yönetici` yetkisine sahip olmalısınız')

if (message.channel.type !== "text") return;
const limit = args[0] ? args[0] : 0;
  if(!limit) {
              var embed = new Discord.MessageEmbed()
                .setDescription(`✅ Doğru Kullanım: \`!slowmode <sure>\``)
                .setColor('RED')
                .setTimestamp()
            message.channel.send({embed})
            return
          }
if (limit > 21600) {
    return message.channel.send(new Discord.MessageEmbed().setDescription("⏰ Süre Limiti Makisimum **21.600** Saniye Olabilir!").setColor('RED'));
}
    message.channel.send(new Discord.MessageEmbed().setDescription(`✅ Yavaş Mod **${limit}** Saniye Olarak Ayarlandı!`).setColor('RED'));
var request = require('request');
request({
    url: `https://discordapp.com/api/v7/channels/${message.channel.id}`,
    method: "PATCH",
    json: {
        rate_limit_per_user: limit
    },
    headers: {
        "Authorization": `Bot ${client.token}`
    },
})};
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["slow-mode", "slowmode", "yavas-mod", 'yavasmod', 'yavaşmod'],
  permLevel: 2,
};


exports.help = {
  name: 'slowmode',
  description: 'Sohbete yazma sınır (süre) ekler.',
  usage: 'slow-mode [1/10]',
}; //1ve10 arasında bir sayı girin.