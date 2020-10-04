var Discord = require('discord.js');
var botName = require('./package.json');
var bot = new Discord.Client();

bot.on('message', message =>{

    // Variables
    var sender = message.author; //The person who sent the message
    var msg = message.content;
    var prefix = "-" //The text before commands, you can put anything that you prefer

    if(message.author.id != "762224657997758495"

            if(msg === 386227337575792640 
                message.send('GUYS ATA HU THODI DER ME!!!!!') // Sends a message to the channel, with the content
            }
            else{
                message.channel.send("Hey, Knight Noobde Ye Command Nahi Dali Abhi Tak Tune🤦:) ")
            }
        }
        else{
            message.delete();
            message.channel.send(sender + " this bot only accepts commands which starts with '>' dot.");
        }
    }
});

bot.login(process.env.Bot_Token
