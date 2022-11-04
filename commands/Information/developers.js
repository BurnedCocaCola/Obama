const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "developers",
    aliases: ["dev", "creator"],
    description: "Shows The Developers Of Economy Bot",
    run: async (client, message, args) => {

        const embed = new MessageEmbed()
        .setAuthor(`Economy Bot Developers`)
        .setDescription(
`
\u200b
<a:developer_badge:906786359925170176>  [\`RLX\`](https://discord.com/users/753168925167976479) - [\`Server\`](https://discord.gg/zp8nTQqD9h)
\u200b
<a:developer_badge:906786359925170176> [\`MathisCool\`](https://discord.com/users/820142398935793685) - [\`Server\`](https://discord.gg/zp8nTQqD9h)
\u200b
`
)
.setFooter(`Thanks For Using ${client.user.username}.`, client.user.displayAvatarURL())
.setColor(`#303037`)
message.channel.send({ embeds: [embed] })

    }
}