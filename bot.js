import Discord from "discord.js";

const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", message => {
  if (message.content === "ping") {
    message.reply("pong");
  }
});

client.on("messageDelete", message => {
  
  message.reply('👀');
});

// Get Bot Token+
client.login(process.env.BOT_TOKEN);
