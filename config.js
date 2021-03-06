require('dotenv').config()
module.exports = {
  config: {
    BOT_TOKEN: process.env.TOKEN,
    PREFIX: process.env.PREFIX || 'c!',
    MAIN_BOT_ID: process.env.MAIN_BOT_ID || '481282441294905344',
    OWNER_IDS: process.env.OWNER_IDS || ['395788326835322882'],
    GUILD_ID: process.env.GUILD_ID || '468877023926943764',
    STAFF_ROLE_ID: process.env.STAFF_ROLE_ID || '554039524309860362',
    INFO_CHANNEL_ID: process.env.INFO_CHANNEL_ID || '483056680980971531',
    NOTIFY_ROLE_ID: process.env.NOTIFY_ROLE_ID || '482366922822909982',
    WELCOME_ROLE_ID: process.env.WELCOME_ROLE_ID || '468884032399081473',
    WELCOME_CHANNEL_ID: process.env.WELCOME_CHANNEL_ID || '468878407711719435',
    LEAVE_CHANNEL_ID: process.env.LEAVE_CHANNEL_ID || '468878407711719435',
    LOG_PRIVATE_CHANNEL_ID: process.env.LOG_PRIVATE_CHANNEL_ID || '468880753195745291',
    LOG_PUBLIC_CHANNEL_ID: process.env.LOG_CHANNEL_ID || '468881393787863052',
    MUTE_ROLE_ID: process.env.MUTE_ROLE_ID || '703018773216755752',
    BOT_ROLE_ID: process.env.BOT_ROLE_ID || '481833458306514944'
  },
  options: {
    allowedMentions: {
      everyone: false,
      roles: false,
      users: true,
      repliedUser: true
    },
    defaultImageFormat: 'png',
    defaultImageSize: 1024,
    getAllUsers: true,
    maxShards: 2,
    intents: 6015,
    restMode: true
  }
}