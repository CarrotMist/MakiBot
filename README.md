# Simple Discord Bot Template

## About
This is a rather simple Discord bot built on [Node.js](https://nodejs.org) using the [Discord.js](https://github.com/hydrabolt/discord.js) api.

## Installation
For starters you need [Node.js](https://nodejs.org) and you'll want the current version.

Once you're sure you have node.js open the folder all the files are located and `shift + right click` > `Open command window here`.
You'll then want to run the following command:
```
npm install
```
Ignore any warnings about unmet peer dependencies, as they're all optional from Discord.js.

### Setup Bot
Rename `config.example.json` to `config.json` and inside it you'll want to replace the token in there with your bot token that you get from [the Discord developers portal](https://discordapp.com/developers/applications/me). If you don't already have an app in there, create one. then press the button to turn the app into a bot user. `click to reveal` your token and paste that into the config.json.

Also in the developers portal, use the "OAuth2" tab to invite your bot to your server.

Next you'll want to put your owner ID in the config.json. to get that, enable "Developer Mode" in Discord under `Settings > Appearance > Advanced > Developer Mode`. After that you can just right click your username and "Copy ID".

Set whatever prefix you'd like.

If all went well, you should be able to run "start.bat" and see "Bot online." in the console window.