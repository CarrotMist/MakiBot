module.exports = {
	name: 'eval',
	description: 'Evaluates a command. For the bot owner only',
	args: false,
	execute(message, args, vars) {
		if (message.author.id == config.owner) {
			try {
				const evaluated = eval(args.join(" "));

				if (typeof evaluated != 'string') {
					evaluated = util.inspect(evaluated);
					evaluated = evaluated.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203)).replace(vars.config.token, 'mfa.VkO_2G4Qv3T--NO--lWetW_tjND--TOKEN--QFTm6YGtzq9PH--4U--tG0');
				}

				message.reply(evaluated, { code:'x1' });
			} catch (err) {
				message.reply('`ERROR` ```x1\n' + err.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203)).replace(vars.config.token, 'mfa.VkO_2G4Qv3T--NO--lWetW_tjND--TOKEN--QFTm6YGtzq9PH--4U--tG0') + '\n```');
			}
		}
	}
}