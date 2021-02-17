const Discord = require('discord.js');

let botid = ('790986017456914432') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const cmf = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(`${client.user.username} Ekonomi Komutları`)
    .setDescription('Bu komutlar şuanda bakımda | Çok Yakında Daha İyi İçerikle Sizlerleyiz.')
    .setTimestamp()
    message.channel.send(cmf);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'ekonomi',
  description: 'Tüm komutları listeler',
  usage: 'ekonomi'
};