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

client.on('message', message => {
  if (message.content === `AYAYA`){
    console.log();
    const channel = client.channels.get(message.member.voiceChannelID);
    if (!channel) return console.error("The channel does not exist!");
    channel.join().then(connection => {
    console.log("Successfully connected.");
   }).catch(e => {
      console.error(e);
    });
  }
});

client.login(config.TOKEN);