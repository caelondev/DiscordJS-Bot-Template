const getConfig = require("../../utils/getConfig")
const getLocalCommands = require("../../utils/getLocalCommands")
const config = getConfig()
const drawLine = require("../../utils/drawLine")
const getApplicationCommands = require("../../utils/getApplicationCommands")
const areCommandsDifferent = require("../../utils/areCommandsDifferent")

module.exports = async (client) => {
  try {
    const localCommands = getLocalCommands()
    const applicationCommands = await getApplicationCommands(client, config.testServer)

    // Check if there are any commands to register
    const pendingCommands = localCommands.filter(cmd => {
      const existing = applicationCommands.cache.find(ac => ac.name === cmd.name)
      return !existing && !cmd.deleted
    })

    if (pendingCommands.length > 0) {
      drawLine()
      console.log("⏳ Registering commands\n")
    }

    for (const localCommand of localCommands) {
      const { name, description, options } = localCommand

      const existingCommand = await applicationCommands.cache.find(
        (cmd) => cmd.name === name
      )

      if (existingCommand) {
        if (localCommand.deleted) {
          await applicationCommands.delete(existingCommand.id)
          console.log(`⚠️ Command removed: '${name}' 🗑️`)
          continue
        }

        if (areCommandsDifferent(existingCommand, localCommand)) {
          await applicationCommands.edit(existingCommand.id, {
            description,
            options
          })
        }
      } else {
        if (localCommand.deleted) {
          console.log(`⏭️ Skipping command: '${name}' (marked for deletion)`)
          continue
        }

        await applicationCommands.create({
          name,
          description,
          options
        })

        console.log(`✅ Registered command: '${name}'`)
      }
    }

  } catch (error) {
    drawLine()
    console.log(`There was an error: ${error}`)
    drawLine()
  }
}
