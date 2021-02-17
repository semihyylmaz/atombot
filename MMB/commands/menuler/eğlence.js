const Discord = require('discord.js');

let botid = ('790986017456914432') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const cmf = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(`${client.user.username} Eğlence Komutları`)
    .addField('a!aşkölçer', 'Etiketlediğiniz kişiyle aşkınızı ölçer')//ne kadar Ekstra komutunuz varsa o kadar .addField('prefix+komut', 'açıklama/kullanım amacı') koyun
    .addField('a!çevir [dil Kodu] [Kelime]', 'Yazdığınız kelimeyi dil koduna göre çevirir')
    .addField('a!corona [Ülke]', 'Yazdığınız ülkenin güncel covid-19 bilgilerini söyler')
    .addField('a!döviz [Döviz Kodu]', 'Yazdığınız koda göre güncel kuru getirir')
    .addField('a!trump [cümle]', 'Yazdığınız cümleyi trump yazıyor gibi gösterir (Türkçe Karakter Kullanmayınız.)')
    .addField('a!havadurumu [İl/İlçe]', 'Yazdığınız il veya ilçeye göre güncel havadurumunu söyler')
    .addField('a!kitap-ara', 'İsmini yazdığınız kitabın bilgilerini gösterir')
    .addField('a!öp [etiket]', 'Bahsettiğiniz kişi ile öoüşürsünüz')
    .addField('a!rastgelegif [İstediğiniz kelime]', 'Yazdığınız kelimeye göre rastgele gif getirir')
    .addField('a!söz', 'Rastgele özlü sözler getirir')
    .addField('a!steamfiyat [Oyun]', 'Yazdığınız oyun ismine göre oyunun güncel bilgilerini gösterir')
    .addField('a!avatar [etiket]', 'Bahsettiğiniz kişinin/sizin avatarını getirir')
    .addField('a!yazankazanır [etiket]', 'Bahsettiğiniz kişiyle ilk yazan kazanır oynarsınız')
    .addField('a!düello [etiket]', 'Bahsettiğiniz kişiyle düello atarsınız')
    .addField('a!csgokasa', 'Csgo kasası açarsınız')
    .addField('a!bitcoin', 'Ülkelerin güncel Bitcoin kurlarını gösterir')
    .addField('a!dc', 'Bot size doğruluk cesaret oyunu soruları atar')
    .addField('a!adamasmaca', 'Botla adam asmaca oynarsınız')
    .addField('a!sor ', 'Yapay zeka ile cevap verir / Çalışmamakta')
    .addField('a!slots', 'Slot Makinesinde şansınızı denersiniz')
    .addField('a!burç-yorum [burç]', 'Girdiğiniz burcun günlük yorumunu gösterir')
    .addField('a!çıkmateklifi [etiket]', 'Bahsettiğiniz kişiye özelden çıkma teklifi yollar')
    .setTimestamp()
    message.channel.send(cmf);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'eğlence',
  description: 'Tüm komutları listeler',
  usage: 'eğlence'
};