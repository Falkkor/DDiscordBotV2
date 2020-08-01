const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const fs = require('fs');

module.exports = class ExpanseCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'expansequote',
            aliases: ['expansequote, expanse-quote'],
            group: 'expanse',
            memberName: 'expansequote',
            description: 'Get a random expanse quote'
        });
    }
    run(message) {

        const jsonQuotes = fs.readFileSync(
            'resources/quotes/expanse.json',
            'utf8'
        );
        const quoteArray = JSON.parse(jsonQuotes).quotes;

        const randomQuote =
            quoteArray[Math.floor(Math.random() * quoteArray.length)];

        const quoteEmbed = new MessageEmbed()
            .setTitle(randomQuote.author)
            .setDescription(randomQuote.text)
            .setColor('#ff0000');
        return message.channel.send(quoteEmbed);
    }
};
