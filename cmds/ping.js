module.exports = {
    name: "ping",
    execute(client, Discord, message, args) {
    const r = new Discord.MessageEmbed()
            .setColor('#ffb347')
            .setTitle(`  ☃️   Ping   ☃️  `)
            .setDescription(`Latency is ${Date.now() - message.createdTimestamp}ms and the API Latency is ${Math.round(client.ws.ping)}ms`)
            .setTimestamp()
        message.channel.send(r);
    }
};