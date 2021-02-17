const Discord = require('discord.js');

let botid = ('790986017456914432') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const cmf = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(`${client.user.username} İçecek Komutları`)
    .setThumbnail('https://i.pinimg.com/originals/70/73/c4/7073c4f0700d34ed61d1b1112d85c93e.jpg')
    .addField('a!kahve', 'Etiketlediğiniz kişiye Türk Kahvesi ısmarlar.')//ne kadar Ekstra komutunuz varsa o kadar .addField('prefix+komut', 'açıklama/kullanım amacı') koyun
    .addField('a!macchiato', 'Etiketlediğiniz kişiye Macchiato ısmarlar.')
    .addField('a!espresso', 'Etiketlediğiniz kişiye Espresso ısmarlar.')
    .addField('!çaysimit', 'Etiketlediğiniz kişiye Çay ve Simit ısmarlar.')
    .addField('!flitewhite', 'Etiketlediğiniz kişiye Flite White ısmarlar.')
    .addField('!glühwein', 'Etiketlediğiniz kişiye Glühwein ısmarlar')
    .addField(`» Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=8) **|** [Destek Sunucusu](https://discord.gg/5mHAGqqurG) **|** [Bota Oy Ver (Vote)](https://discordbots.org/bot/${botid}/vote)`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
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
  name: 'içecekmenu',
  description: 'İçecekleri listeler.',
  usage: 'içecekmenu'
};