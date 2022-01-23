const { prefix, token } = require("./config.json");
const { Client, Intents, MessageEmbed } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
const fetch = require("node-fetch");

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
  } else if (message.content.startsWith(`${prefix}Greeting`)) {
    message.channel.send(
      "Hello! I'm here to help build a bridge between your Discord fam and your IRL fam. Try typing `&Health`, `&Culture`, or `&Volunteer` to find a bridge to LGBTQAI+ communities around the world. Soon we'll be able to find bridges near you. Type `&Secret` to chat in private. Communities that don't just tolerate but celebrate and respect should be easily available to all. BridgeSearch to find your way."
    ); // sends general message to channel
    return;
  } else if (message.content.startsWith(`${prefix}Secret`)) {
    const msgEmbed = new MessageEmbed()
      .setColor("LUMINOUS_VIVID_PINK")
      .setTitle("Bridge Out in Private")
      .setImage(
        "https://media.istockphoto.com/photos/poyab-bridge-under-construction-freiburg-switzerland-picture-id1133439347?k=20&m=1133439347&s=612x612&w=0&h=4BLfNRzNhVFNgqg6ArZTmIFod49UYy9T68EOOYPfmMk="
      )
      .setDescription(
        "Soon we will be able to bridge out and chat privately. Please excuse us while we polish off this feature for smooth a commute."
      );
    message.author.send({ embeds: [msgEmbed] }); // sends direct message to author
    return;
  } else if (message.content.startsWith(`${prefix}Health`)) {
    const msgEmbed = new MessageEmbed()
      .setColor("AQUA")
      .setTitle(`Health Bridge 🌉 for ${message.author.username}`)
      .setURL(
        "https://one-colorado.org/lgbtq-issues/lgbtq-healthcare-colorado/"
      )
      .setDescription(
        "Visit One-Colorado. Lesbian, gay, bisexual, transgender, and queer (LGBTQ) Coloradans often face many challenges and barriers to achieving a healthy life. While LGBTQ individuals have many of the same concerns as the general population, like affordability, access, and quality of care, they also face several unique challenges that affect the ability to live healthy and affirmed lives."
      )
      .setImage(
        "https://3pzmyspd25-flywheel.netdna-ssl.com/wp-content/uploads/2018/07/Rainbow-Heart-e1532035343110-uai-500x333.png"
      );
    message.channel.send({ embeds: [msgEmbed] });
    return; // sends embedded message to channel
  } else if (message.content.startsWith(`${prefix}Volunteer`)) {
    const msgEmbed = new MessageEmbed()
      .setColor("NAVY")
      .setTitle(`Volunteer Bridge 🌉 for ${message.author.username}`)
      .setURL(
        "https://www.volunteermatch.org/search?l=Denver%2C+CO%2C+USA&k=LGBTQ"
      )
      .setDescription(
        "We believe everyone should have the chance to make a difference. That's why we make it easy for good people and good causes to connect. We've connected millions of people with a great place to volunteer and helped tens of thousands of organizations better leverage volunteers to create real impact. "
      )
      .setImage(
        "https://media.sproutsocial.com/uploads/2014/02/case-study-volunteermatch.png"
      );
    message.channel.send({ embeds: [msgEmbed] });
    return;
  } else if (message.content.startsWith(`${prefix}Culture`)) {
    const msgEmbed = new MessageEmbed()
      .setColor("YELLOW")
      .setTitle(`Culture Bridge 🌉 for ${message.author.username}`)
      .setURL("https://stonewallforever.org/")
      .setDescription(
        "Stonewall Forever is a living monument to 50 years of Pride. It was created through a partnership between NYC’s LGBT Community Center and the National Parks Service with support from Google to expand access to LGBTQ history, in commemoration of the 50th anniversary of the Stonewall Riots."
      )
      .setImage(
        "https://d26eb5y2jukpbz.cloudfront.net/ebs/archive/2020/large/OS_DC20_026M_18.jpg"
      );
    message.channel.send({ embeds: [msgEmbed] });
    return;
  } else if (message.content.startsWith(`${prefix}Meetup`)) {
    const msgEmbed = new MessageEmbed()
      .setColor("ORANGE")
      .setTitle(`IRL Bridge 🌉 for ${message.author.username}`)
      .setURL("https://www.meetup.com/topics/witi/%22")
      .setDescription(
        "Meet with other Women interested in Technology in your local area. Gather to promote women's community and involvement in the technology industries."
      )
      .setImage(
        "https://20fathoms.org/wp-content/uploads/2021/06/84a96f8e71b75bafc14f5b5344a8c0dd-nOqqey.tmp_.jpg%22)"
      );
    message.channel.send({ embeds: [msgEmbed] });
    return;
  } else if (message.content.startsWith(`${prefix}`)) {
    let url = `https://g.tenor.com/v1/search?q=programming&key=XXTG3107U1I2&limit=10`;
    let response = await (await fetch(url)).json();
    const index = Math.floor(Math.random() * response.results.length);
    message.reply(
      response.results[index].url +
        "\n" +
        " You need to enter a valid command! Try typing `&Health`, `&Culture`, `&Meetup`, or `&Volunteer`. Type `&Secret` if you'd like to chat in private. "
    ); // if invalid command, send this error message and random gif to the channel
  }
});
