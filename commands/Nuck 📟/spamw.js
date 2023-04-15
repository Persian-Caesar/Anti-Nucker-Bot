const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  ChannelType,
  PermissionsBitField
} = require("discord.js");
const {
    errorMessage
} = require(`${process.cwd()}/functions/functions`);
module.exports = {
  name: 'spamw',
  aliases: ['webhook spam','spam webhook','spw'],
  category: 'Nuck 📟',
  description: 'Spam webhook in guild.',
  usage: "",
  cooldown: 8,
run: async function(client, message, args, prefix){
  let db = client.db;
  if(!message.member.permissions.has([PermissionsBitField.Flags.Administrator]) && !client.config.owner.some(r => r.includes(message.author.id))) return errorMessage(client, message, `> You can't use this command.`)
  try{
    await message.reply({
      content: `${client.emotes.start}| Starting spam webhook in guild.`
    })
    try{
      message.guild.channels.cache.filter(c=> c.type === ChannelType.GuildText).forEach(async(c)=>{
            setInterval(()=>{
             try{
              c.createWebhook({ name: `Spamming`, avatar: client.user.displayAvatarURL({ dynamic: true }) })
             }catch{
             }
            }, 1000)
      })
    }catch(e){
      return errorMessage(client, message, `\`\`\`js\n${e}\n\`\`\``)
    }
  }catch(e){
     return errorMessage(client, message, `\`\`\`js\n${e}\n\`\`\``)
  }
  }
}
/**
 * @Info
 * Bot Coded by Mr.SIN RE#1528 :) | https://dsc.gg/persian-caesar
 * @Info
 * Work for Persian Caesar | https://dsc.gg/persian-caesar
 * @Info
 * Please Mention Us "Persian Caesar", When Have Problem With Using This Code!
 * @Info
 */