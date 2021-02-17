const Discord = require('discord.js')

    exports.run = (client, message, args) => {
        let kullanıcı = message.mentions.members.first();

        if(!kullanıcı) return message.channel.send(`${message.author} - Kahve Ismarlayacağın Kullanıcıyı Etiketle :smile:`)

        if(kullanıcı){
            const kahve = new Discord.MessageEmbed()
            .setDescription(`${message.author}, ${kullanıcı} **Kişisine Espresso ısmarladı**`)
            .setColor('RANDOM')
            .setImage('https://seyler.ekstat.com/img/max/800/z/zuVcx1ycABGnpYb3-636880859133845398.jpg')
            .setFooter('Afiyet olsun :)');
            message.channel.send(kahve)
        }
    }

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['espresso','espresso-ısmarla','espressoısmarla'],
    permLevel: 0
}

exports.help = {
    name: 'espresso'
}
