const testSchema = require('../../Schemas/test')
const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
  .setName('test')
  .setDescription('Testing'),

  async execute(interaction, client) {
    const embed = new EmbedBuilder()
    .setTitle('Test')
    .setDescription('Test')
    .setColor('Random')

    const data = await testSchema.findOne({ Guild: interaction.guild.id, User: interaction.user.id })

    if(!data) {
      await testSchema.create({
        Guild: interaction.guild.id,
        User: interaction.user.id
      })

      await interaction.reply('Creado')
    }

    if(data) {
      interaction.reply({ content: 'Stfu hoe hoe', ephemeral: true })
    }
  }
}