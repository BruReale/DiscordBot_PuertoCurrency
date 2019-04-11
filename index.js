const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
  
    if (msg.content === 'puto') {
    msg.reply('Oye viejo, deberias ser el Oasis >:C');
  }
});

client.login('NTY1NjkyNDExMDA3ODYwNzM2.XK6Isg.YdknXF1gspJMqw9fBGsF8vRX2rc');