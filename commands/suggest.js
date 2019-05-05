module.exports = {
	name: 'suggest',
	description: 'Makes a suggestion to the bot developers',
	args: false,
	execute(message, args, vars) {
		message.channel.send('Suggested.');
		var suggestion = message.content.slice(message.content.indexOf(" ") + 1);
		vars.client.channels.get('573703924071137288').send('```css\n' + suggestion + '\n```');
	}
}