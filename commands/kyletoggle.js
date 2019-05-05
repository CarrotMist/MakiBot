module.exports = {
	name: 'kyletoggle',
	description: 'Toggles bullying Kyle',
	args: false,
	execute(message, args, vars) {
		vars.doBullyKyle = !vars.doBullyKyle;
		
		if (vars.doBullyKyle) {
			message.channel.send('fuck that guy');
		} else {
			message.channel.send('yo guys dont bully kyle');
		}
	}
}