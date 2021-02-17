const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
    if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send(':x: bu özelliği kullanabilmek için `Yönetici` yetkisine sahip olmalısınız')

    let üyesayi = message.guild.memberCount;
    let botlar = message.guild.members.cache.filter(m => m.user.bot).size;
    let kullanıcılar = üyesayi - botlar;
const embed = new Discord.MessageEmbed()
.setColor(`#CE2D0B`)
.setTimestamp()
.addField(`Toplam Üye`, `**${üyesayi}**`, true)
.addField(`Kullanıcılar`, `**${kullanıcılar}**`, true)
.addField(`Botlar`, `**${botlar}**`, true)
.addField(`Üye Durumları`, `**${message.guild.members.cache.filter(o => o.presence.status === 'online').size}** Çevrimiçi\n**${message.guild.members.cache.filter(i => i.presence.status === 'idle').size}** Boşta\n**${message.guild.members.cache.filter(dnd => dnd.presence.status === 'dnd').size}** Rahatsız Etmeyin\n**${message.guild.members.cache.filter(off => off.presence.status === 'offline').size}** Çevrimdışı/Görünmez`, true)
message.channel.send(embed)
}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["üyedurum","üyeler","durumlar","durum"],
  permLevel: 0
};

module.exports.help = {
  name: 'üyedurum',
  description: 'Üye Durumlarını ve sunucudaki üye sayısını gösterir',
  usage: 'üyedurum'
};