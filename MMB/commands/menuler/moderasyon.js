const Discord = require('discord.js');

let botid = ('790986017456914432') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const cmf = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(`${client.user.username} Moderasyon Komutları`)
    .addField('a!ping', 'Botun Pingini Gösterir')//ne kadar Ekstra komutunuz varsa o kadar .addField('prefix+komut', 'açıklama/kullanım amacı') koyun
    .addField('a!oylama-kanal', 'Oylama Kanalı Belirler')
    .addField('a!oylama', 'Ayarladığınız Oylama Kanalında Oylama Başlatır')
    .addField('a!sil', 'Mesajları Siler')
    .addField('a!slowmode [Saniye]', 'Komutu Kullandığınız Kanalda SlowMode Açar')
    .addField('a!üyedurum', 'Sunucuda kaç kişi olduğunu ve botların toplam sayısını gösterir')
    .addField('a!istatistik', 'Botun genel durumunu gösterir')
    .addField('a!ban [etiket] [sebep]', 'Etiketlediğiniz kişiye sunucudan banlar')
    .addField('a!banlist', 'Yasaklanan kişilerin listesini gösterir')
    .setFooter('Şuanda otorol komutları çalışmamakta.')
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
  name: 'moderasyon',
  description: 'Tüm komutları listeler',
  usage: 'moderasyon'
};