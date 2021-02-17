const Discord = require('discord.js'); 

exports.run = (client, message , args) => {
    const images = ["https://media3.giphy.com/media/zkppEMFvRX5FC/giphy.gif?cid=ecf05e471fqf9zbz8yvbehriolzfyz1as0g51hf1knoklz55&rid=giphy.gif", "https://media2.giphy.com/media/H8XZI3PJm258c/giphy.gif?cid=ecf05e47ujhr0v7np1lis5jxdnwb5m5er9fogzew5nuj7pav&rid=giphy.gif", "https://media0.giphy.com/media/bm2O3nXTcKJeU/giphy.gif?cid=ecf05e47pr1sdwxmcdd5jvljn0wgz5fbiubckdkwqc4yt2qd&rid=giphy.gif", "https://images-ext-1.discordapp.net/external/m4yhWaGCeAJna_jf0XH6ZE0aj7dsxazPTiRvmGzb5Hw/https/images-ext-1.discordapp.net/external/g1MtSyzuKvY6AHocPcIDIWLWdxTC-w1O346wVUuj2x8/https/cdn.zerotwo.dev/KISS/840f569a-10e9-4ed2-ab73-1066fa580302.gif", "https://images-ext-2.discordapp.net/external/w-IOykuKP1pRxQXCTKEajOPTN4OkUhBNVIQA3VP7VaA/https/images-ext-2.discordapp.net/external/iwURKzODxDzn8OcOf2vdfHutrxS-1TLogrlpAMtnvww/https/cdn.weeb.sh/images/ryEvhTOwW.gif", "https://media2.giphy.com/media/jR22gdcPiOLaE/giphy.gif?cid=ecf05e4783zmz4fo5qkusmw0dyzy75o44whwvinbajbj2jre&rid=giphy.gif", "https://media2.giphy.com/media/wOtkVwroA6yzK/giphy.gif?cid=ecf05e474kf5ii98l8l9oa8a2ip184k7u8enepjmynh1c1jw&rid=giphy.gif"];
    const image = images[Math.floor(Math.random()*images.length)];
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.channel.send('Kimi öpeceksin?');
	const embed = new Discord.MessageEmbed()
	.setAuthor (' ')
	.setColor (`ORANGE`)
	.setDescription( message.author.username+` adlı kullanıcı, ${mesaj} adlı kullanıcıyı öptü.` )
	.setImage(image)
  return message.channel.send(embed);
  message.react('617413726768988160')
};

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: [`kiss`],
    kategori: 'eğlence',
	permLevel: 0
};

exports.help = {
	name: 'öp',
	description: 'İstediğiniz kişiyi öpersiniz.',
	usage: 'öp'
};