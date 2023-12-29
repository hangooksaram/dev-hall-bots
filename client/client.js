const { Client, GatewayIntentBits } = require("discord.js");
const { token } = require("../config.json");
const { Events } = require("discord.js");
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});

client.once(Events.ClientReady, (readyClient) => {
  console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.login(token);

module.exports = client;
