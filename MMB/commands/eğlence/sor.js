const Discord = require('discord.js');
const Cleverbot = require('cleverbot.io');
var bot = new Cleverbot('kvISf25WAVOV1H0i','CpkqsZcDKitBygg8kIf38qA3KmmNLwqm');

exports.run = (client, message, params) => {
bot.setNick('Valley');
let yazi = params.slice(0).join(' ');
 if (yazi.length < 1) return message.reply('Bir mesaj yazmalısın.');
   message.channel.send(`🔄 Mesaj Yükleniyor Lütfen Bekleyiniz Bu İşlem Biraz Uzun SüreBilir`);
bot.create(function (err, session) {
    bot.ask(yazi, function (err, response) {
        console.log(response)
    
        message.channel.send(response)
    });
});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sor',
  description: 'sor',
  usage: 'sor'
};