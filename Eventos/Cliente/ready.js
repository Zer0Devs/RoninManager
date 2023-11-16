require('dotenv').config()
const {Client} = require('discord.js');
const wait = require('node:timers/promises').setTimeout;
var colors = require('colors');

module.exports = {
    name: "ready",
    once: true,
    async execute(client) {

      await console.log(`[   SHUI-READY    ]`.underline.red + " --- Empezando ".red + `  ${client.user.tag}`.red);

      const activities = [
        'Managing Ronin Support',
        'Updating Staff List',
        'Greeting new members',
        'Managing Staff System'
      ];

      setInterval(() => {
        const status = activities[Math.floor(Math.random() * activities.length)];
        client.user.setPresence({ activities: [{ name: `${status}`}], status: 'dnd'});
      }, 40000);

    },
};