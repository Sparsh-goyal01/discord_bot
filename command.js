require('dotenv').config();
const { REST, Routes } = require("discord.js");
const TOKEN = process.env.DISCORD_TOKEN;
const CLIENT_ID = process.env.DISCORD_CLIENT_ID;


const commands = [{
        name: "ping",
        description: "replies with pong",
    },
    // Registering new command for Short Url generation 
    {
        name: "create",
        description: "create a short URL",
    },

];

// IIFE = Immediately invoked function Expression called
const rest = new REST({version: '10'}).setToken(TOKEN);

(async() =>{
    try{
        console.log("Started refreshing the application (/) commands.");

        await rest.put(Routes.applicationCommands(CLIENT_ID), {body: commands});

        console.log("Successfully reloaded application (/) commands.");
    }
    catch(error){
        console.error(error);
    }

}) ();




