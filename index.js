const { prefix, token } = require("./config.json");
const { Client, Intents, MessageEmbed } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.login(token);

client.once("ready", () => {
  console.log("Ready!");
});
client.once("reconnecting", () => {
  console.log("Reconnecting!");
});
client.once("disconnect", () => {
  console.log("Disconnect!");
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;

  if (message.content.startsWith(`${prefix}name`)) {
    message.reply(`Your name is ${message.author.username}`); // sends reply in channel to author
    return;
  } else if (message.content.startsWith(`${prefix}greeting`)) {
    message.channel.send(
      "Hello! I'm here to help build a bridge between your Discord fam and your IRL fam. Try typing &Health, &Culture, or &Volunteer to find ways to connect to the LGBTQ+ community in Colorado or in some cases, globally. Soon we'll be able to bridge you to all of the United States. Hopefully later - the world. Communities that don't just tolerate but celebrate and respect should be easily available to all. BridgeSearch to find your way."
    ); // sends general message to channel
    return;
  } else if (message.content.startsWith(`${prefix}secret`)) {
    message.author.send(
      "Do you want to search privately so the other peeps don't see? We can also chat in your direct messages."
    ); // sends direct message to author
    return;
  } else if (message.content.startsWith(`${prefix}Health`)) {
    const quoteEmbed = new MessageEmbed()
      .setColor("AQUA")
      .setTitle(`Bridge 🌉 for ${message.author.username}`)
      .setURL(
        "https://one-colorado.org/lgbtq-issues/lgbtq-healthcare-colorado/"
      )
      .setDescription(
        "Visit One-Colorado. Lesbian, gay, bisexual, transgender, and queer (LGBTQ) Coloradans often face many challenges and barriers to achieving a healthy life. While LGBTQ individuals have many of the same concerns as the general population, like affordability, access, and quality of care, they also face several unique challenges that affect the ability to live healthy and affirmed lives."
      );
    message.channel.send({ embeds: [quoteEmbed] }); // sends embedded message to channel
    return;
  } else {
    message.channel.send(
      "You need to enter a valid command! Try typing &Health, &Culture, or &Volunteer"
    ); // if invalid command, send this error message to the channel
  }
});
