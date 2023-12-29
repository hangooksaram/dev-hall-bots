const { loadCommandFiles } = require("./commandHandling/loadCommandFiles.js");
const {
  receiveCommandInteractions,
} = require("./commandHandling/receiveCommandInteractions.js");
const { sendPeriodicPost } = require("./periodicPost/periodicPost.js");

loadCommandFiles();
receiveCommandInteractions();

setTimeout(() => {
  sendPeriodicPost();
}, 1000);
