// Tutorial: https://youtu.be/abRY4lbgaF4
require('dotenv').config()
const express = require('express')
const Discord = require("discord.js")
const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// when the bot starts up
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
  console.log("Bot is online!")
})

// when someone types a message
client.on("messageCreate", msg => {
  // check if the message is ping
  msg.reply("pong");
})

// Add bot token in the "quotes" below
client.login(process.env.DISCORD_TOKEN)

const app = express()
const port = process.env.PORT ?? 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})