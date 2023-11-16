const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
  .setName('ping')
  .setDescription('Hace ping al bot'),
  guildOnly: true,

  async execute(interaction, client) {

    const embed = new EmbedBuilder()
    .setTitle('Pong!')
    .setDescription(`Ping: ${client.ws.ping}ms`)
    .setColor('Random')

    interaction.reply({ embeds: [embed]})
  }
}