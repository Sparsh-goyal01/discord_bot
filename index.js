require('dotenv').config();
const { Client, Events, GatewayIntentBits } = require("discord.js");

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on('messageCreate', (message) =>{
    if(message.author.bot) return;
    // Short URL Handling
    if(message.content.startsWith("create")){
        const url = message.content.split("create")[1];
        return message.reply({
            content: "Generating short Url " + url,
        });
    }
    // Normal reply from Bot
    message.reply({
        content: "Hi from Sparsh's Bot!!",
    });
});

client.on(Events.ClientReady, readyclient =>{
    console.log(`Logged in as ${readyclient.user.tag}!`);
});

// Interaction Create to use commands
client.on('interactionCreate', (interaction) =>{
    interaction.reply("Pong!!");
});

// greet the user
client.on('interactionCreate', async interaction =>{
    if(interaction.isChatInputCommand()) return;

    if(interaction.commandName === 'greet'){
        await interaction.reply(`Hello ${interaction.user}! Welcome to the server`);
    }
});

client.login(process.env.DISCORD_TOKEN);
console.log("Bot started!");