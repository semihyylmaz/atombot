const Discord = require('discord.js');
const db = require('wio.db');
const { prefix } = require("./config.json");


exports.run = async (client, message, args) => {

  const amount = parseInt(args[1]);


  let x = /(-)/
  
  let user = message.mentions.users.first();

  if (!user) return message.reply('Kime para yollayacağını etiketlemen lazım!');
  if (user.bot === true) return message.reply('Parayı bir bota yollarsan sen zararlı çıkarsın!');
  
  let mesaj = args.slice(1).join(' ');
  if (!mesaj) return message.reply('Yollayacağın miktarı yazman gerek!');

  if (user.id === message.author.id) return message.reply(`Kendine paramı yollayacaksın ciddimisin?`);


if (isNaN(args[1])) return message.channel.send("Lütfen bir sayı gir.")
if (mesaj.match(x)) return message.reply('Tek zeki sensin zaten!');
    
    

  let elmas = await db.fetch(`elmascıklar_${message.author.id}`);
  let altın = await db.fetch(`altıncıklar_${message.author.id}`);
  let para = await db.fetch(`paracık_${message.author.id}`);


  let prefix = await db.fetch(`prefix_${message.guild.id}`) 

 

  if (para < mesaj) {
    let bulunanP = await db.fetch(`paracık_${message.author.id}`)
    message.channel.send(`${message.author} Yeterince paran bulunmuyor, sende olan para:  ${bulunanP === null  ? "`0`" : `${bulunanP}`}`)
} else if  (para > mesaj) {

  const embed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setDescription(`${message.author}, ${user} Adlı kullanıcıya para yollandı, yollanılan miktar: ${amount}`)
  message.channel.send(embed)
  db.add(`paracık_${user.id}`, amount)
  db.add(`paracık_${message.author.id}`, -amount)
  

}
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['para-ver', 'parayolla'],
  permLevel: 0,
  kategori: "profil"
};

exports.help = {
  name: 'para-yolla',
  description: 'İstediğiniz kişiye para yollayabilirsiniz.',
  usage: 'para-yolla <@üye> <miktar>'
};