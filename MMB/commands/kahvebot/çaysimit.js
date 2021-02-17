const Discord = require('discord.js')

    exports.run = (client, message, args) => {
        let kullanıcı = message.mentions.members.first();

        if(!kullanıcı) return message.channel.send(`${message.author} - Kahve Ismarlayacağın Kullanıcıyı Etiketle :smile:`)

        if(kullanıcı){
            const kahve = new Discord.MessageEmbed()
            .setDescription(`${message.author}, ${kullanıcı} **Kişisine Çay ve Simit ısmarladı**`)
            .setColor('RANDOM')
            .setImage('https://pbs.twimg.com/media/DaaT0zCW0AAKJye.jpg')
            .setFooter('Afiyet olsun :)');
            message.channel.send(kahve)
        }
    }

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['çaysimit','çaysimit-ısmarla','çaysimitısmarla'],
    permLevel: 0
}

exports.help = {
    name: 'çaysimit'
}
