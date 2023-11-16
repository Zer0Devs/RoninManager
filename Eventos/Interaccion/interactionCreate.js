const { CommandInteraction, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, Events, ChannelType, PermissionsBitField, ModalBuilder, TextInputBuilder, TextInputStyle } = require("discord.js");

var timeout = []

module.exports = {
  name: "interactionCreate",

  async execute(interaction, client) {
    if (interaction.isChatInputCommand()) {
      const command = client.commands.get(interaction.commandName);
      if (command.dev && interaction.user.id !== '817515739711406140') {
        return interaction.reply({
          embeds: [
            new EmbedBuilder()
              .setColor('Random')
              .setDescription('Solo devs')
          ],
          ephemeral: true
        })
      }
      if (command.mantenimiento && interaction.guild.id !== '944630585874346005') {
        return interaction.reply({
          embeds: [
            new EmbedBuilder()
              .setColor('Random')
              .setDescription('Este comando esta en mantenimiento')
          ],
          ephemeral: true
        })
      }
      if (!command) {

        return interaction.reply({ content: "Este comando no furula, dale restart amigo" })
      }
      else {
      }
      command.execute(interaction, client);

    }
    else if (interaction.isSelectMenu()) { // Changed here
    }   
    else if (interaction.isButton()) {
    }
  }
}