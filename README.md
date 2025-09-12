# Discord.js Bot Template

A clean and modular Discord.js v14+ bot template designed to help you build and scale your own Discord bots efficiently. This template includes essential features like command handling, event handling, and a structured folder system, making it ideal for both beginners and experienced developers.

## Features

✅ Modular command handler  
✅ Dynamic event loader  
✅ Configurable via config.json  
✅ Easy to extend and customize  

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/caelondev/DiscordJS-Bot-Template.git
   cd DiscordJS-Bot-Template
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure your bot:**
   - Fill in `config.json` with your configurations
   - Create a `.env` file
   ```.env
   DISCORD_TOKEN = YOUR_DISCORD_TOKEN
   ```

4. **Run the bot:**
   ```bash
   node init.js
   ```

## Folder Structure

```
📦root
 ┣ 📂src
 ┃ ┣ 📂commands/
 ┃ ┃ ┣ 📂 misc/
 ┃ ┃ ┃ ┗ 📄 ping.js
 ┃ ┃ ┗ 📂 moderation/
 ┃ ┃   ┗ 📄 ban.js
 ┃ ┣ 📂events/
 ┃ ┣ 📂utils/
 ┃ ┗ 📄index.js
 ┣ 📄.gitignore
 ┣ 📄config.json
 ┣ 📄package.json
 ┣ 📄LICENSE
 ┗ 📄README.md
```

- **src/commands/** – Your bot's commands
- **src/events/** – Your bot's event listeners  
- **src/utils/** – Helper functions and utilities
- **config.json** – Bot configuration file

## Usage

- Add commands in the `src/commands/` folder as separate `.js` files
- Add events in the `src/events/` folder as separate `.js` files
- The bot automatically loads commands and events on startup

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature/YourFeature`
5. Open a pull request

## License

This project is licensed under the [MIT License](LICENSE).

## Support

If you encounter issues or have suggestions, feel free to [open an issue](https://github.com/caelondev/DiscordJS-Bot-Template/issues).
