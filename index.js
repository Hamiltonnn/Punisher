/* Copyright by Laiwn For LC-Practice */
const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "/";
client.login("");

client.on("ready", () => {
    console.log("_____ON_____");
    client.user.setActivity("!!!!!!!!!!!!");
});

client.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "lobby").send(` **${member.user.username}** join the **LC discord** ! :heart:`);
})

client.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "lobby").send(` **${member.user.username}** leave the **LC discord** ! :wave: :sob:`);
})

client.on('guildMemberAdd', member => {
    var role = member.guild.roles.find("name", "Member");
    member.addRole(role)
})


client.on("message", message => {

    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);

    let args = message.content.split(" ").slice(1);

    if (command == "say") {
        message.delete()
        const embed = new Discord.RichEmbed()
        .setDescription(message.author.username + " : " + args.join(" "))
        message.channel.send({embed})
    } else

    if (message.content === prefix + "info") {
        var info_embed = new Discord.RichEmbed()
        .setColor("#fbfd12")
        .addField(":clipboard: Server:", "LC-Practice")
        .addField(":mag_right: Ip:", "lc-practice.com")
        .addField(":dagger: Version:", "1.7 | 1.8")
        .addField("Chill & Fairplay", "PvP Server")
        message.channel.send(info_embed);
        console.log("fg");
    }

    if (command === "annonce") {
        if (message.member.hasPermission("ADMINISTRATOR")) {
            const embed = new Discord.RichEmbed()
            .setTitle("Annonce:")
            .setDescription(args.join(" "))
            message.channel.send({embed})
        }
    }


client.on('message', message => {

    if (message.content === "request mail") {
        message.reply('soon')
    }

    if (message.content === "unban mail") {
        message.reply("hades.appeal@gmail.com")
    }

    if (message.content === prefix + "help") {
        var help_embed = new Discord.RichEmbed()
        .setColor("#07f246")
        .setTitle("!!!!!!!!!!")
        .addField("!!!!!!!!!!!!")
        .addField("!!", "!!!!!!!!")
        message.channel.send(help_embed);
        console.log("A user has made the help command")
    }

    if (message.content === prefix + "staff") {
        var staff_embed = new Discord.RichEmbed()
        .setColor("#12fddf")
        .setTitle(":arrow_right_hook:️ STAFF (1/1) :leftwards_arrow_with_hook:️")
        .addField(".mute   |   .unmute   |   .annonce", "Command for staff user")
        .addField(".ban   |   .unban   |   .kick  |  .say", "Command for staff user")
        message.channel.send(staff_embed);
    }

    if (message.content.startsWith(prefix + "kick")) {

        if (!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send("You d'ont have a Permission !");

        if (message.mentions.users.size === 0) {
            return message.channel.send("Mientionne un utilisateur du discord.")
        }

        var kick = message.guild.member(message.mentions.users.first());
        if (!kick) {
            return message.channel.send("L'utilisateur n'existe pas.")
        }

        if (!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
            return message.channel.send("Vous n'avez pas la permission de kick un membre.");
        }

        kick.kick().then(member => {
            message.channel.send(`${member.user.username} has been kicked by ${message.author.username} !`)
        });
    }

    if (message.content.startsWith(prefix + "ban")) {
        if (!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("You do not have the perm !");

        if (message.mentions.users.size === 0) {
            return message.channel.send("Mientionne un utilisateur du discord.");
        }

        var ban = message.guild.member(message.mentions.users.first());
        if (!ban) {
            return message.channel.send("L'utilisateur n'existe pas.");
        }

        if (!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) {
            return message.channel.send("Vous n'avez pas la permission de bannir un membre.");
        }
        
        ban.ban().then(member => {
            message.channel.send(`${member.user.username} has been destroy by ${message.author.username} !`)
        });
    };

    if (message.content.startsWith(prefix + "mute")) {
        if (!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("You do not have the perm !");

        if (message.mentions.users.size === 0) {
            return message.channel.send('You must mention a user!');
        }

        var mute = message.guild.member(message.mentions.users.first());
        if (!mute) {
            return message.channel.send("I did not find the user or he does not exist!");
        }

        if (!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.channel.send("You do not have the perm !");
        message.channel.overwritePermissions(mute, { SEND_MESSAGES: false }).then(member => {
            message.channel.send(`${mute.user.username} is mute. :paintbrush: `);
        })
    }

    if (message.content.startsWith(prefix + "unmute")) {
        if (!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("You do not have the perm !");

        if (message.mentions.users.size === 0) {
            return message.channel.send('You must mention a user!');
        }

        var mute = message.guild.member(message.mentions.users.first());
        if (!mute) {
            return message.channel.send("I did not find the user or he does not exist!");
        }

        if (!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.channel.send("You do not have the perm !");
        message.channel.overwritePermissions(mute, { SEND_MESSAGES: true }).then(member => {
            message.channel.send(`${mute.user.username} no longer mute. :paintbrush: `);
        })
    }

    if (!message.content.startsWith(prefix)) return;

    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "ip":
        var ip_embed = new Discord.RichEmbed()
        .setColor(990000)
        .setTitle(`IP: lc-practice.com`)
        message.reply("IP for join LC-Practice (look your private messsage)")
        message.author.send({ embed: ip_embed });
        break;
    }

    if (!message.content.startsWith(prefix)) return;
    switch (args[0].toLowerCase()) {
        case "mail":
        var mail_embed = new Discord.RichEmbed()
        .setColor(990000)
        message.reply("request mail or unban mail ?")
        break;
    } 

/*    if(message.content.startsWith(prefix + "gif")) {

        var chien = [

            "https://media.giphy.com/media/JhncGNdBoyeKk/giphy.gif",
            "https://media.giphy.com/media/JnZcg39f4Woyk/giphy.gif",
            "https://media.giphy.com/media/8qMO1TvtKQhEI/giphy.gif",
            "https://media.giphy.com/media/26AHPziuyt6zy4adi/giphy.gif",
            "https://media.giphy.com/media/l2JdTa0yVuHBpzIE8/giphy.gif",
            "https://media.giphy.com/media/Oj6uU1GJTC5OM/giphy.gif",
            "https://media.giphy.com/media/xUOxffjFjrdEwGx4IM/giphy.gif",
            "https://media.giphy.com/media/n0RwyVCFyx6gg/giphy.gif",
            "https://media.giphy.com/media/91t7c8D1HzQB2/giphy.gif",
            "https://media.giphy.com/media/An971sivlHbOw/giphy.gif",
            "https://media.giphy.com/media/26tPo9rksWnfPo4HS/giphy.gif",
            "https://media.giphy.com/media/3EjqRNFJmn0C4/giphy.gif",
        ];

        var gif = chien[Math.floor(Math.random() * chien.length)];

        var dog_embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setImage(gif)
        message.channel.send(dog_embed);
    }
*/
    if (!message.content.startsWith(prefix)) return;
""
    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "discord":
        var discord_embed = new Discord.RichEmbed()
        .setColor(990000)
        .setTitle(`Discord, invite your friends : https://discord.gg/UKmMX3g`)
        message.reply("Discord for join the LC discord (look your private messsage)")
        message.author.send({ embed: discord_embed });
        break;

    }
    
client.on('message', message => {
        
       if (message.content.toLowerCase().startsWith(prefix + "destroyed")){
           message.channel.send("```??!--..Destroyer Has Been Destroy..--??!```");
            if (message.member.hasPermission("ADMINISTRATOR")){
                bot.destroy();
            }else{
                message.reply("n'essai pa *fdp*");
           }
      }
      
})})})
