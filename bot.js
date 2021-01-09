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
  if (message.content === `join`) {
    console.log('Connected.');
    message.member.voiceChannel.join().then(connection => console.log('Connected!'));
  }
  if (message.content === `AYAYA`){
   const channel = client.channels.get(config.GBid);
   if (!channel) return console.error("The channel does not exist!");
   channel.join().then(connection => {
    console.log("Successfully connected.");
   }).catch(e => {
      console.error(e);
    });
  }
});

client.login(config.TOKEN);