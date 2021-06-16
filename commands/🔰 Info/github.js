const {
	MessageEmbed
} = require("discord.js")
const config = require("../../botconfig/config.json")
const ee = require("../../botconfig/embed.json")
const emoji = require(`../../botconfig/emojis.json`);
module.exports = {
	name: "github",
	category: "🔰 Info",
	aliases: ["git"],
	cooldown: 2,
	usage: "github",
	description: "Shows you the Github and Source Code Information about this Bot",
	run: async (client, message, args, user, text, prefix) => {
		try {
			message.channel.send(new MessageEmbed()
				.setTitle(`This Bot is made by \`ᵖʰشـــڤـــانـــ#0509\` and **this** is the Source Code link to this Bot`)
				.setURL("https://github.com/VISTx69")
				.addField("Discord.js: ", "[\`v12.5.1\`](https://discord.js.org)", true)
				.addField("Erela.js: ", "[\`v2.3.2\`](https://solaris.codes/projects/erelajs/)", true)
				.addField("Node.js: ", "[\`v15.3.4\`](https://nodejs.org/en/)", true)
				.addField("Rox link: ", "[invite[()
			        .setColor(ee.color)
				.setFooter(ee.footertext, ee.footericon)
			);
		} catch (e) {
			console.log(String(e.stack).bgRed)
			return message.channel.send(new MessageEmbed()
				.setColor(ee.wrongcolor)
				.setFooter(ee.footertext, ee.footericon)
				.setTitle(`${emoji.msg.ERROR} ERROR | An error occurred`)
				.setDescription(`\`\`\`${e.message}\`\`\``)
			);
		}
	}
}
/**
 * @INFO
 * Bot Coded by Tomato#6966 | https://github.com/Tomato6966/discord-js-lavalink-Music-Bot-erela-js
 * @INFO
 * Work for Milrato Development | https://milrato.eu
 * @INFO
 * Please mention Him / Milrato Development, when using this Code!
 * @INFO
 */
