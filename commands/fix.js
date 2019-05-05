module.exports = {
	name: 'fix',
	description: '64 bit channels',
	args: false,
	execute(message, args, vars) {
		message.channel.send('Reverse reverse!');
		message.guild.channels.forEach(channel => { 
			if (channel.type === 'voice'){ //&& !channel.id === '573695574809772039'
				channel.setBitrate(64);
			}
		});
	}
}