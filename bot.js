const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.js')

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

  client.user.setStatus('available')
  client.user.setActivity("Game"); 
    client.user.setPresence({
        game: {
            name: 'loli breathing',
            type: "LISTENING",
        }
    });
});

client.on('message', async message => {
  if (message.content === `AYAYA`){
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
    } else {
      message.channel.send('You need to join a voice channel first!');
    }
  }
});

client.login(config.TOKEN);