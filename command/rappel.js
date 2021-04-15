exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
	var time = args[0];
	var reminder = args.splice(1).join(' ');
  const member = message.author
	if (!time) return message.reply('Je ne peux pas te rappeler si tu ne me donnes pas de temps.');
	if (!reminder) return message.reply('Tu as oublié de rappel pourquoi je devrais te rappeler.');
	// This will not work if the bot is restarted or stopped

	time = await time.toString();

	if (time.indexOf('s') !== -1) { // Seconds
		var timesec = await time.replace(/s.*/, '');
		var timems = await timesec * 1000;
	} else if (time.indexOf('m') !== -1) { // Minutes
		var timemin = await time.replace(/m.*/, '');
		timems = await timemin * 60 * 1000;
	} else if (time.indexOf('h') !== -1) { // Hours
		var timehour = await time.replace(/h.*/, '');
		timems = await timehour * 60 * 60 * 1000;
	} else if (time.indexOf('d') !== -1) { // Days
		var timeday = await time.replace(/d.*/, '');
		timems = await timeday * 60 * 60 * 24 * 1000;
	}	else {
		return message.reply('Le temps de être sous format <nombre>[s/m/h/d]');
	}

	message.reply(`Je te rappelerai dans  \`${time}\` à propos de  \`${reminder}\``);
	setTimeout(function () {
    member.send(`Tu ma demandé il y'a \`${time}\` de te rappeler à propos de  \`${reminder}\``);
		message.reply(`Tu ma demandé il y'a \`${time}\` de te rappeler à propos de  \`${reminder}\``);
	}, parseInt(timems));

};
module.exports.help = {
  name:"rappel"
}