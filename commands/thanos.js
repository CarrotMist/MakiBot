module.exports = {
	name: 'thanos',
	description: 'Kills half of the members of this channel',
	args: false,
	execute(message, args, vars) {
		const memberList = vars.client.channels.get('573692744602484740').members;
		const userList = new Array();
		let count = 0;

		for (let [snowflake, guildMember] of memberList) {
			console.log('Snowflake: ' + snowflake);
			count++;
			userList[count - 1] = snowflake;
		}

		for (let i = 0; i < count / 2; i++) {
			const selection = (Math.random() * (count / 2)) | 0;
			message.reply('Killing: ' + userList[selection]);
			userList[selection].destroy();
			userList.splice(selection, selection + 1);
		}
	}
}