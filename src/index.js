require("dotenv").config()
const { Client, IntentsBitField } = require("discord.js")

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent
  ]
})

client.on("clientReady", (c)=>{
  console.clear()
  console.log(`${c.user.tag} is now online!`)
})

const loginBot = (TOKEN)=>{
  try{
    client.login(TOKEN)
  } catch(error) {
    console.log(error)
  }
}

loginBot(process.env.DISCORD_TOKEN)
