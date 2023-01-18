// Tutorial: https://youtu.be/abRY4lbgaF4
require('dotenv').config()

const Discord = require("discord.js")
const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// when the bot starts up
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
  console.log("Bot is online!")
})

// when someone types a message
client.on("message", msg => {
  // check if the message is ping
  if (msg.content === "ping") {
    // if the message is ping, reply with pong
    msg.reply("pong");
  }
})

// Add bot token in the "quotes" below
client.login(process.env.DISCORD_TOKEN)