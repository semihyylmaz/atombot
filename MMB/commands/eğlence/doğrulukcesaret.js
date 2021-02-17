const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
    var dogruluk = ['Telefonunda arattığın en son şey nedir ?', 'Bir sabah karşı cins olarak uyansaydın ilk yapacağın şey ne olurdu ?', 'Sokakta yere bir şey düşürdüğünde hiç bir şey olmamış gibi alıp ağzına attın mı ?', 'Sevgilini aldattın mı ?', 'En utanç verici anın ?', 'Hayal kırıklığına uğradın mı ?', 'Gördüğün rüyalar içinde seni en çok etkileyeni bize anlat.', 'Çok fazla konuştuğunu düşündüğün için telefonunu açmadığın bir arkadaşın var mı?', 'Bir yangın anında hepimiz aynı binada kalsak buradakilerden en son kimi kurtarırdın?',]
    var cesaret = ['İğrenç bir ses tonuyla şarkı söyle', 'Bugün yaptığın bir şeyle alakalı uydurma kısa, komik bir hikaye anlat', 'Whatsappındaki son mesajlaşmanı bize oku', 'Çok yüksek bir sesle 3 saniye bağır', 'Sana söylenmiş çok önemli bir sırrı bizimle paylaş.', 'Bir bütün çiğ soğan ye.', '2 dakika boyunca horoz taklidi yap.', 'Ağzına bir buz alıp, komple bitene kadar ağzını açma.', 'Arka arkaya dinlenmeden beş bardak su iç.', 'Banyoya gidip tüm kıyafetlerini ters giyip geri gel.']
    var dogrulukcevap = dogruluk[Math.floor(Math.random() * dogruluk.length)];
    var cesaretcevap = cesaret[Math.floor(Math.random() * cesaret.length)]

    message.channel.send('\`Doğruluk\` mu yoksa \`cesaret\` mi? `Sadece (D) veya (C) Olarak Cevaplayınız`')
        const response = await message.channel.awaitMessages(neblm => neblm.author.id === message.author.id, { max: 1, time: 30000 });
        const choice = response.first().content
        if (choice == 'doğruluk' || choice == 'd') return message.channel.send(`${dogrulukcevap}`)
        if (choice !== 'cesaret' && choice !== 'c') {
            message.channel.send(`Lütfen sadece **doğruluk (d)** veya **cesaret (c)** ile cevap verin.`) 
        }
        if (choice == 'cesaret' || choice == 'c') uwu = true
    
    if (uwu) {
        message.channel.send(`${cesaretcevap}`)

    }

}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['doğruluk-cesaret', 'dc'],
    permLevel: 0
};

exports.help = {
    name: 'doğrulukcesaret',
    description: 'Doğruluk cesaret oynarsınız',
    usage: 'doğrulukcesaret'
};