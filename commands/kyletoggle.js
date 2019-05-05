module.exports = {
	name: 'kyletoggle',
	description: 'Toggles bullying Kyle',
	args: false,
	execute(message, args, vars) {
		vars.doBullyKyle = !vars.doBullyKyle;
		
		if (vars.doBullyKyle) {
			message.reply('fuck that guy');
		} else {
			message.reply('yo guys dont bully kyle');
		}
	}
}