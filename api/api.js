const { applicationId, guildId, token } = require("../config.json");
const { REST, Routes } = require("discord.js");

const sendToDiscordApi = (commands) => {
  const rest = new REST().setToken(token);

  (async () => {
    try {
      console.log(
        `Started refreshing ${commands.length} application (/) commands.`
      );

      const data = await rest.put(
        Routes.applicationGuildCommands(applicationId, guildId),
        { body: commands }
      );

      console.log(
        `Successfully reloaded ${data.length} application (/) commands.`
      );
    } catch (error) {
      console.error(error);
    }
  })();
};

module.exports = { sendToDiscordApi };
