const Discord = require('discord.js'); // Import client from discord
const keep_alive = require('./keep_alive.js');

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

  // Send a message
  setInterval(() => {
    const channel = client.channels.cache.get('1276515657558654986'); // Replace with your channel ID
    if (channel) {
      channel.send('Bypassing Aternos..');
    }
  }, 120000);
});

client.on('message', msg => {
  // Check if message isn't from the bot itself
  if (msg.author == client.user) {
    return;
  } else if (msg.content === 'ping') {
    msg.reply('Pong!');
  } else {
    msg.reply(msg.content);
    console.log(msg.content);
  }
});

client.login(process.env.TOKEN); // Login bot using token
