module.exports = {
	name: 'suggest',
	description: 'Makes a suggestion to the bot developers',
	args: false,
	execute(message, args, vars) {
		message.channel.send('Suggested.');
		vars.client.channels.get('573703924071137288').send('```' + message.content + '```');
	}
}