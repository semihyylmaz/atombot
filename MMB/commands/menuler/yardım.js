const Discord = require('discord.js');

let botid = ('790986017456914432') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const cmf = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(`${client.user.username} Genel Komutları`)
    .addField('a!moderasyon', 'Moderasyon Komutları Çok Yakında')//ne kadar Ekstra komutunuz varsa o kadar .addField('prefix+komut', 'açıklama/kullanım amacı') koyun
    .addField('a!içecekmenu', 'İçecekleri Listeler')
    .addField('a!eğlence', 'Eğlence Komutlarını Listeler')
    .addField('a!ekonomi', 'Ekonomi Komutlarını Listeler')
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
  name: 'yardım',
  description: 'Tüm komutları listeler',
  usage: 'yardım'
};