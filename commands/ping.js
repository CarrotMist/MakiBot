module.exports = {
	name: 'ping',
	description: 'Pong! Tests that the bot is working',
	args: false,
	execute(message, args, vars) {
		message.reply('Pong!');
	}
}