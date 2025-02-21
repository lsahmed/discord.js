const { REST, Routes } = require('discord.js');
const dotenv = require('dotenv');

const commands = [
    {
        name: 'ping',

        description: 'replies with pong',

    },
    {
        name: 'create',
        description: 'creates a short URL',
        options: [
            {
                type: 3,

                name: "url",

                description: "Provide the URL",

                required: true,

            }
        ]
    }
];

dotenv.config();
const TOKEN = process.env.TOKEN;
const rest = new REST({ version: '10' }).setToken(TOKEN);

// IIFE (Immediately Invoked Function Expression)
(async () => {
    try {
        console.log('Started refreshing application (/) commands.');
        await rest.put(Routes.applicationCommands("1280902790352212009"), { body: commands });
        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();