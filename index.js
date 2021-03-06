const config = require('./config.json');
const fs = require('fs');
const Discord = require('discord.js');

const prefix = '!';

const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

const passableVariables = new Object();
passableVariables.doBullyKyle = false;
var bullyKylePhrases = ["fuck off", "shut the fuck up kyle", "bro shut up", "hear sum?", "retard says what? kyle: what?", "kyles in paris", ":clap: :clap: :clap: :clap: :clap: :clap: ", "uhh i hate muble rap trash", "guys its called an arnold palmer, trust me i know what im talking about", "class other than barbarian? what?", "hahaha shut up.", "weewoo retard alert", "kyles be like: hur durr", "sorry guys its the tourettes"];
passableVariables.client = client;
passableVariables.config = config;


for (const file of commandFiles) {
    const command = require('./commands/' + file);
    client.commands.set(command.name, command);
    console.log('Loaded command: ' + command.name + '.');
}

client.on('ready', () => {
    console.log('Bot online.');
});

client.on('message', message => {
    if (!message.author.bot) {
        if (message.content.startsWith(prefix)) {
            var args = message.content.slice(prefix.length).split(/ +/);
            var commandName = args.shift().toLowerCase();

            if (client.commands.has(commandName)) {
                const command = client.commands.get(commandName);

                if (command.args && !args.length) {
                    if (command.usage) {
                        message.channel.send('You didn\'t provide arguments to match `' + prefix + command.name + command.usage + '`.');
                    } else {
                        message.channel.send('You didn\'t provide arguments.');
                    }
                }

                try {
                    command.execute(message, args, passableVariables);
                } catch (e) {
                    console.error(e);
                    message.channel.send('Error.\n\n' + e);
                }
            }
        }

        if (message.content.includes('@' + client.user.id)) {
            message.channel.send('Use `' + prefix + '` to interact with me.');
        }

        if (passableVariables.doBullyKyle && message.author.id == '227902744386600960') {
            message.channel.send(bullyKylePhrases[Math.random() * bullyKylePhrases.length | 0]);
        }

        if (message.content.toLowerCase().replace(/\s/g, '').includes('gamer')) {
            message.channel.send('i hate gamer culture');
        }

        if (message.content.startsWith(prefix) && !message.author.bot) {
            const args = message.content.slice(prefix.length).split(/ +/);
            const commandName = args.shift().toLowerCase();
        }

        if (client.commands.has(commandName)) {
            const command = client.commands.get(commandName);

            if (command.args && !args.length) {
                if (command.usage) {
                    message.reply('You didn\'t provide arguments to match `' + prefix + command.name + command.usage + '`.');
                } else {
                    message.reply('You didn\'t provide arguments.');
                }
            }
        }
	}
});

client.login(config.token);

process.on('uncaughtException', (err) => {
    console.error('Uncaught exception: ' + err.stack.replace(new RegExp(__dirname + '/', 'g'), './'))
});

process.on('unhandledRejection', (err) => {
    console.error('Uncaught promise error: ' + err);
});