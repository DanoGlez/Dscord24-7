const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const constatns = require('../../utils/constants.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('status')
		.setDescription('Estado del bot de discord.'),
	async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('Estado del bot')
            .setDescription('El bot esta en linea y funcionando correctamente.')
            .setFields([
                {
                    name: 'Latencia',
                    value: `${Date.now() - interaction.createdTimestamp}ms`,
                    inline: true
                },
                {
                    name: 'API Latencia',
                    value: `${Math.round(interaction.client.ws.ping)}ms`,
                    inline: true
                }
            ])
            .setColor(constatns.brandColor)
            .setFooter({
                text: 'Infames',
                iconURL: interaction.client.user.avatarURL()
            })
            .setTimestamp();
		await interaction.reply({ embeds: [embed] });
	},
};