const { ApplicationCommandOptionType, PermissionFlagsBits } = require("discord.js")
const { description } = require("../misc/ping")

module.exports = {
  name: "ban",
  description: "Bans a member from the user",
  // devOnly: boolean
  // testOnly: boolean
  // deleted: boolean
  options: [
    {
      name: "target-user",
      description: "The user to ban",
      type: ApplicationCommandOptionType.Mentionable,
      required: true
    },
    {
      name: "reason",
      description: "The reason for banning",
      type: ApplicationCommandOptionType.String,
    }
  ],
  permissionsRequired: [
    PermissionFlagsBits.Administrator,
    PermissionFlagsBits.BanMembers
  ],

  callback: (client, interaction)=>{
    interaction.reply(`ban...`)
    
  }
}

