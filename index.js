const { Client, GatewayIntentBits } = require('discord.js');
const dotenv = require('dotenv');

const client = new Client({
    intents : [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages, 
        GatewayIntentBits.MessageContent
    ],
});

client.once("ready", ()=>{
    console.log("Bot is logged in as:",client.user.username);
    
})

// For a message reply
client.on("messageCreate", (message)=>{
    if(!message.author.bot && (message.content.toLowerCase() == "hello" || "hi")){
        message.reply({
            content: 'Hi How r u doing?',
        });
    }
    else {
        return;
    }
});

//for (/) commands 
client.on("interactionCreate", (interaction)=>{
    if(interaction.commandName == "ping"){
        interaction.reply('Pong!');
    }
    else if(interaction.commandName == "create"){
        const url = interaction.options.getString('url');
        interaction.reply(`Generating short url for ${url}`);
    }
    
});

dotenv.config();
const TOKEN = process.env.TOKEN;
client.login(TOKEN);
