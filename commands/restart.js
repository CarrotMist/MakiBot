module.exports = {
	name: 'restart',
	description: 'Restarts the bot',
	args: false,
	execute(message, args, vars) {
		message.channel.send('Restarting.').then(message => vars.client.destroy()).then(() => vars.client.login(vars.config.token));
	}
}