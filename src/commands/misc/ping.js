module.exports = {
  name: "ping",
  description: "Pong!",
  // devOnly: boolean
  // testOnly: boolean
  // options: Array[Object]
  // deleted: boolean

  callback: (client, interaction)=>{
    interaction.reply(`Pong! Latency: ${client.ws.ping}ms`)
    
  }
}
