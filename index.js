const config = require('./config.json');
const Discord = require('discord.js');
const util = require('util');
var kyle = 0;
var fuckKyle = ["fuck off", "shut the fuck up kyle", "bro shut up", "hear sum?", "retard says what? kyle: what?", "kyles in paris", ":clap: :clap: :clap: :clap: :clap: :clap: ", "uhh i hate muble rap trash", "guys its called an arnold palmer, trust me i know what im talking about", "class other than barbarian? what?", "hahaha shut up.", "weewoo retard alert", "kyles be like: hur durr", "sorry guys its the tourettes"]
const bot = new Discord.Client({
    disableEveryone: true,
    disabledEvents: ['TYPING_START']
});

bot.on("ready", () => {
    bot.user.setGame('fuck off'); //you can set a default game
    console.log(`Bot is online!\n${bot.users.size} users, in ${bot.guilds.size} servers connected.`);
});

bot.on("guildCreate", guild => {
    console.log(`I've joined the guild ${guild.name} (${guild.id}), owned by ${guild.owner.user.username} (${guild.owner.user.id}).`);
});

bot.on("message", async message => { 

    if(message.author.bot || message.system) return; // Ignore bots
    
    if(message.channel.type === 'dm') { // Direct Message
        return; //Optionally handle direct messages
    } 

    console.log(message.content); // Log chat to console for debugging/testing
    
    if (message.content.indexOf(config.prefix) === 0) { // Message starts with your prefix
       
        let msg = message.content.slice(config.prefix.length); // slice of the prefix on the message

        let args = msg.split(" "); // break the message into part by spaces

        let cmd = args[0].toLowerCase(); // set the first word as the command in lowercase just in case

        args.shift(); // delete the first word from the args

////////////////PREFIXED COMMANDS\\\\\\\\\\\\\\\\\\\\\\\\\\   
        if (cmd === 'hi' || cmd === 'hello') { // the first command [I don't like ping > pong]
            message.channel.send(`Hi there ${message.author.toString()}`);
            return; 
        }

        else if (cmd === 'ping') { // ping > pong just in case..
            return message.channel.send('pong');
        }
		
		else if (cmd === 'thanos') { // disconnects half the server
			var memberList = bot.channels.get('573692744602484740').members;
			var userList = new Array();
			var count = 0;
            for (let [snowflake, guildMember] of memberList){ 
				console.log('snowflake: ' + snowflake);
				count++;
				userList[count-1] = snowflake;
				console.log(count);
				console.log(userList);
			}
			
			var i;
			for (i = 0; i < count/2; i++) { 
				var selection = (Math.random() * (count/2)) | 0;
				message.channel.send('killing: ' + userList[selection]);
				userList[selection].destroy();
				userList.splice(selection, selection+1);
			} 
			
			return;
        }
		
		else if (cmd === 'suggest') { // creates a formal suggestion example of sending in a specific channel
			var x = message.content;
			x = x.substring(8, x.length - 1);
            return message.channel.send('Suggestion added!') && bot.channels.get('573703924071137288').send('```'+x+'```');
        }
			
		else if (cmd === 'kyletoggle') { // toggles the shut the fuck up kyle instance
			if (kyle === 1){
				kyle = 0
				return message.channel.send('yo guys dont bully kyle');
			}
			else{
				kyle = 1
				return message.channel.send('fuck that guy');
			}
            return message.channel.send('fuck that guy');
        }

        // Make sure this command always checks for you. YOU NEVER WANT ANYONE ELSE TO USE THIS COMMAND
        else if (cmd === "eval" && message.author.id === config.owner){ // < checks the message author's id to yours in config.json.
            const code = args.join(" ");
            return evalCmd(message, code);
        }
		
		else if (cmd === "restart" && message.author.id === config.owner){ // < checks the message author's id to yours in config.json.
            return resetBot(message.channel);
        }

        else { // if the command doesn't match anything you can say something or just ignore it
            message.channel.send(`I don't know what command that is.`);
            return;
        }
        
    } else if (message.content.indexOf("<@"+bot.user.id) === 0 || message.content.indexOf("<@!"+bot.user.id) === 0) { // Catch @Mentions

        return message.channel.send(`Use \`${config.prefix}\` to interact with me.`); //help people learn your prefix
    }
	
///////////////NON PREFIXED COMMANDS\\\\\\\\\\\\\\\\\\\\\\\\
	
	if (kyle === 1 && message.author.id === '178273444041981952'){ // < checks if it's kyle 227902744386600960
			var y = Math.random() * 15;
            message.channel.send(fuckKyle[1]);
        return;
    }
	
	if (message.content.includes('amer')){ // < checks for gamer
            message.channel.send(`i hate gamer culture`);
            return;
        }	
    return;
});

function evalCmd(message, code) {
    if(message.author.id !== config.owner) return;
    try {
        let evaled = eval(code);
        if (typeof evaled !== "string")
            evaled = util.inspect(evaled);
            message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
        message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
}

// Turn bot off (destroy), then turn it back on
function resetBot(channel) {
    // send channel a message that you're resetting bot [optional]
    channel.send('Restarting...')
    .then(msg => bot.destroy())
    .then(() => bot.login(config.token));
}

function clean(text) {
    if (typeof(text) !== 'string') {
        text = util.inspect(text, { depth: 0 });
    }
    text = text
        .replace(/`/g, '`' + String.fromCharCode(8203))
        .replace(/@/g, '@' + String.fromCharCode(8203))
        .replace(config.token, 'mfa.VkO_2G4Qv3T--NO--lWetW_tjND--TOKEN--QFTm6YGtzq9PH--4U--tG0') //Don't let it post your token
    return text;
}

// Catch Errors before they crash the app.
process.on('uncaughtException', (err) => {
    const errorMsg = err.stack.replace(new RegExp(`${__dirname}/`, 'g'), './');
    console.error('Uncaught Exception: ', errorMsg);
    // process.exit(1); //Eh, should be fine, but maybe handle this?
});

process.on('unhandledRejection', err => {
    console.error('Uncaught Promise Error: ', err);
    // process.exit(1); //Eh, should be fine, but maybe handle this?
});

bot.login(config.token);