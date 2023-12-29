const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("안녕2")
    .setDescription("안녕 changed"),
  async execute(interaction) {
    await interaction.reply("새로운 유저가 등장했습니다. changed");
  },
};
