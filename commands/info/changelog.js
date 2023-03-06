const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "changelog",
    aliases: ["change"],
    description: "Show all of the Commands",
    run: async (client, message, args, prefix) => {
        return message.reply({embeds: [new MessageEmbed()
            .setColor("#2f3136")
            .setTitle(`Wyann`)
            .addFields(
                { name: 'Version 1.4', value: `1. Changes on looks.\n2. Faster then before\n3. Youtube-sr package modified added.`, inline: false },
                { name: 'Version 1.3', value: `1. Everything in embedded format.\n2. Discord js 13.6 upgrade.\n3. More cleaner then before.`, inline: false },
                { name: 'Version 1.0', value: `1. Initial release.`, inline: false },
            )
            .setImage('https://cdn.discordapp.com/avatars/1078347414928371794/d4df18ff5b11565442d5e51d661c0f10.png?size=1024')
            .setFooter({ text: 'A music bot coded by CHR BILLA', iconURL: 'https://cdn.discordapp.com/avatars/762568681099755570/c14d0600a7dc201835dd3d18d2703c30.png?size=1024' })
        ]}).catch(() => null);
    },
};