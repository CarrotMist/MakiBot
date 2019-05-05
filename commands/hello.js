module.exports = {
	name: 'hello',
	description: 'Greetings',
	args: false,
	execute(message, args, vars) {
		message.channel.send('Hi there' + message.author.nickname + '.');
	}
}