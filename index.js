const Discord = require('discord.js'); // Import client from discord
const keep_alive = require('./keep_alive.js');

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

  // Send a message
  setInterval(() => {
    const channel = client.channels.cache.get('1276512333702627389'); // Replace with your channel ID
    if (channel) {
      channel.send('/tell Bypassing Aternos..');
    }
  }, 120000);
});

client.login(process.env.TOKEN); // Login bot using token
