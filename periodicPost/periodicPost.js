const client = require("../client/client.js");

const channelId = "1189421547413311498"; // 메시지를 보낼 채널의 ID
const interval = 1000; // 1분(60초) 간격

const sendPeriodicPost = () => {
  setInterval(() => {
    const channel = client.channels.cache.get(channelId);
    if (channel) {
      channel.send("hi");
    } else {
      console.error("채널을 찾을 수 없습니다.");
    }
  }, interval);
};

module.exports = { sendPeriodicPost };
