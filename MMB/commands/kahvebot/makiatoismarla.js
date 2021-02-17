const Discord = require('discord.js')

    exports.run = (client, message, args) => {
        let kullanıcı = message.mentions.members.first();

        if(!kullanıcı) return message.channel.send(`${message.author} - Kahve Ismarlayacağın Kullanıcıyı Etiketle :smile:`)

        if(kullanıcı){
            const kahve = new Discord.MessageEmbed()
            .setDescription(`${message.author}, ${kullanıcı} **Kişisine Macchiato ısmarladı**`)
            .setColor('RANDOM')
            .setImage('https://cdn.kiwilimon.com/recetaimagen/36988/th5-640x640-46353.jpg')
            .setFooter('Afiyet olsun :)');
            message.channel.send(kahve)
        }
    }

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['macchiato','macchiato-ısmarla','macchiatoısmarla'],
    permLevel: 0
}

exports.help = {
    name: 'macchiato'
}
