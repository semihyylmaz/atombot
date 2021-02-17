const Discord = require('discord.js')

    exports.run = (client, message, args) => {
        let kullanıcı = message.mentions.members.first();

        if(!kullanıcı) return message.channel.send(`${message.author} - Kahve Ismarlayacağın Kullanıcıyı Etiketle :smile:`)

        if(kullanıcı){
            const kahve = new Discord.MessageEmbed()
            .setDescription(`${message.author}, ${kullanıcı} **Kişisine Flite White ısmarladı**`)
            .setColor('RANDOM')
            .setImage('https://cdn.vox-cdn.com/thumbor/dTVDqXGOSiMQwEIozcIj_ByaUlw=/0x0:1000x750/1400x788/filters:focal(0x0:1000x750):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/45140100/6792268281_d0822743b8_b.0.0.jpg')
            .setFooter('Afiyet olsun :)');
            message.channel.send(kahve)
        }
    }

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['flitewhite','flatwhite-ısmarla','flatwhiteısmarla'],
    permLevel: 0
}

exports.help = {
    name: 'flitewhite'
}
