const Command = require("../../src/structures/Command")
module.exports = class NotifyCommand extends Command {
    constructor (client) {
        super(client, {
            name: "notify",
            aliases: ["notificar"]
        })
    }

    run(message, args) {
        
        if (message.member.roles.has("482366922822909982")) {
            message.member.roles.remove("482366922822909982").then(() => {
                message.reply("you will no longer receive Chino news")
            })
        } else {
            message.member.roles.add("482366922822909982").then(() => {
                message.reply("now you will receive more news from Chino")
            })
        }
    }
}