require('dotenv').config();
const { Client, Events, GatewayIntentBits } = require("discord.js");

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on('messageCreate', (message) =>{
    if(message.author.bot) return;
    message.reply({
        content: "Hi from Sparsh's Bot!!",
    });
});

client.on(Events.ClientReady, readyclient =>{
    console.log(`Logged in as ${readyclient.user.tag}!`);
});

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