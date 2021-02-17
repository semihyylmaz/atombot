const Discord = require('discord.js');
const db = require('wio.db');
const ayarlar = require("./config.json");

var prefix = ("config.prefix")

exports.run = async (client, message, args) => {

  if (message.author.id != "301364274989629441") return message.reply('Bunu Sadece Sahibim Kullanabilir');


	const amount = parseInt(args[1]);

  let user = message.mentions.users.first();

  if (!user) return message.reply('Kime para yollayacağımı etiketlemen lazım!');
  if (user.bot === true) return message.reply('Parayı bir bota yollarsan sen zararlı çıkarsın!');
  
  let mesaj = args.slice(1).join(' ');
  if (!mesaj) return message.reply('Yollayacağın miktarı yazman gerek!');

  if (isNaN(args[1])) return message.channel.send("Bir yazımı yollayacaksın? Lütfen bir miktar gir!.")
    

  let elmas = await db.fetch(`elmascıklar_${user.id}`);
  let altın = await db.fetch(`altıncıklar_${user.id}`);
  let para = await db.fetch(`paracık_${message.author.id}`);


  let prefix = await db.fetch(`prefix_${message.guild.id}`)


const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setDescription(`${message.author}, Başarıyla ${user} adlı kullanıcıya para yollandı \n Yollanılan miktar: ${amount}`)
message.channel.send(embed)
db.add(`paracık_${user.id}`, amount);




}

  


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['admin-para-ver', 'adminparayolla'],
  permLevel: 5,
  kategori: "yapımcı"
};

exports.help = {
  name: 'admin-para-yolla',
  description: 'İstediğiniz kişiye para yollayabilirsiniz.',
  usage: 'admin-para-yolla elmas/altın/para <@üye> <miktar>'
};