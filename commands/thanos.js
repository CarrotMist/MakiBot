module.exports = {
	name: 'thanos',
	description: 'Kills half of the members of this channel',
	args: true,
	execute(message, args, vars) {
	(async() => {
		const arg = await message.content.slice(message.content.indexOf(" ")+1);
		//console.log(arg);
		var memberList = await message.guild.channels.find(channel => channel.name === arg).members;
		var userList = new Array();
		var count = 0;

		for (let [snowflake, guildMember] of memberList) {
			//console.log('Snowflake: ' + snowflake);
			count++;
			userList[count - 1] = snowflake;
			//console.log(count);
			//console.log(userList);
		}
		
		const temp_channel = await message.guild.createChannel('Fading Away', 'voice');
		for (let i = 0; i < count / 2; i++) {
			const selection = (Math.random() * (count / 2)) | 0;
			const user = message.guild.members.get(userList[selection]);
			//message.reply('Killing: ' + userList[selection]);
			await user.setVoiceChannel(temp_channel);
			userList.splice(selection, selection + 1);
		}
		await temp_channel.delete();
		message.channel.send('Perfectly balanced, as all things should be.')
	})();
	}
}