const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  
  
 if(!message.member.roles.cache.has('763798894672478218')) return message.channel.send('Bu kodu kullanmak için yeterli yetkin yok!')
  
  let member = message.mentions.members.first();
  let isim = args[1]
  let yaş = args[2]
  let tag = 'ꒃ';
  let al = "763798894592655419"; ///alınacak rol idsi
  let al2 = "763798894592655418"; ///alınacak rol idsi
  let ver = "763798894613495880"; ///verileverilecekcek rol idsi
  let ver2 = "763798894613495879"; ///verilecek rol idsi
  let ver3 = "770974550803742751"; ///verilecek rol idsi

  if (!member) return message.channel.send("Bir Kullanıcı Etiketle");
  if (!isim) return message.channel.send("Bir İsim Girmelisin!");
  
setTimeout(function(){member.setNickname(`${tag} ${isim} | ${yaş}`) },1000)
setTimeout(function(){member.roles.remove(al)},1500)
setTimeout(function(){member.roles.remove(al2)},1500)
setTimeout(function(){member.roles.add(ver)},2000)
setTimeout(function(){member.roles.add(ver2)},2500)
setTimeout(function(){member.roles.add(ver3)},3000)
  
  const embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription
(`${member.user} adlı kişi ${message.author} tarafından başarıyla <@&763798894613495880> rolü verilerek kayıt edildi. `)
  message.channel.send(embed)


  const chat = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setDescription(`Ailemize hoş geldin ${member.user} Tagımızı "ꒃ" alarak bize destek olabilirsin.`)
client.channels.cache.get("763798895418933256").send(chat)
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["e" , "man"],
  permLevel: 0
}
exports.help = {
  name: 'erkek',
  description: "Erkek Kayıt Sıstemı",
  usage: 'Erkek isim yaş'
}