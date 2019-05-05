module.exports = {
	name: 'xbox',
	description: '8 bit channels',
	args: false,
	execute(message, args, vars) {
		message.channel.send('Bro hop in my lobby');
		message.guild.channels.forEach(channel => { 
			if (channel.type === 'voice'){
				channel.setBitrate(8);
			}
		});
	}
}