module.exports.run = client => {
	console.log(`${client.user.tag} is online!`);
	client.user.setActivity('CREDITS : RLX');
};
