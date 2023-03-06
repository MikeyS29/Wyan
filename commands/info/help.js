const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "help",
    aliases: ["h"],
    description: "Show all of the Commands",
    run: async (client, message, args, prefix) => {
        return message.reply({embeds: [new MessageEmbed()
            .setColor("#2f3136")
            .setTitle(`Wyann`)
            .setDescription(`Note: want to know all the aliases of command then use \`&a\` or \`&aliases\` command.\nBytheway I'm busy to playing rickroll in high quality.
            `)
            .addFields(
                { name: ' Music commands', value: '\`&play\` \`&playskip\` \`&playtop\` \`&nowplaying\` \`&pause\` \`&resume\` \`&volume\` \`&stop\` \`&shuffle\` \`&seek\` \`&speed\` \`&skip\` \`&skipto\` \`&forward\` \`&rewind\` \`&join\` \`&move\` \`&leave\` \`&queue\` \`&remove\` \`&clearqueue\` \`&queueloop\` \`&trackloop\` \`&filter\` \`&bassboost\`', inline: true },
                { name: 'Info commands', value: '\`&bot-info\` \`&changelog\` \`&help\` \`&ping\` \`&uptime\`', inline: true },
                { name: 'More info', value: 'Wyann is a Music bot.\n\n<:dotgreen:995271222860468224> Support Server: [Join from here](https://discord.gg/chrop)\n<:dotgreen:995271222860468224> Created with: [Discord.js](https://discord.js.org/)', inline: false },
            )
            .setImage('https://cdn.discordapp.com/avatars/1078347414928371794/d4df18ff5b11565442d5e51d661c0f10.png?size=1024')
            .setFooter({ text: 'A music bot coded by CHR BILLA', iconURL: 'https://cdn.discordapp.com/avatars/762568681099755570/c14d0600a7dc201835dd3d18d2703c30.png?size=1024' })
        ]}).catch(() => null);
    },
};