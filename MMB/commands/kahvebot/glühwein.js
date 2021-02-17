const Discord = require('discord.js')

    exports.run = (client, message, args) => {
        let kullanıcı = message.mentions.members.first();

        if(!kullanıcı) return message.channel.send(`${message.author} - Kahve Ismarlayacağın Kullanıcıyı Etiketle :smile:`)

        if(kullanıcı){
            const kahve = new Discord.MessageEmbed()
            .setDescription(`${message.author}, ${kullanıcı} **Kişisine Glühwein ısmarladı**`)
            .setColor('RANDOM')
            .setImage('https://images.squarespace-cdn.com/content/v1/5bc7c48d840b1615ebbd2c96/1541389773982-ZACAW9NV2DJY9AMVK7YZ/ke17ZwdGBToddI8pDm48kDkIV86Ttaaa0k4aGEITfLl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UdNIHO9YMFEcrl-66Z30GZwMFISc9kOjnz133SA4r6uDyle_XYq8wjluc2FaLpi0qA/Gluhwein+AdobeStock_178139223.jpeg?format=1000w')
            .setFooter('Afiyet olsun :)');
            message.channel.send(kahve)
        }
    }

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['glühwein','glühwein-ısmarla','glühweinısmarla'],
    permLevel: 0
}

exports.help = {
    name: 'glühwein'
}
