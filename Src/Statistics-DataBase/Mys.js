const { Client, GatewayIntentBits, Partials } = require("discord.js")

const client = global.client = new Client({
  fetchAllMembers: true,
  intents: Object.keys(GatewayIntentBits),
  partials: Object.keys(Partials),
})

client.invites = new Map();

const { Main } = require('../../Global/Services/Main')
const { ClientServices } = require('../../Global/Services/Client');

const DB = require('../../Global/DataBase/MongoDriver');


(async () => {
  await DB.Connect();
})();



ClientServices.sistemGereksinimleri()

client.login(System.MainFrame.DataBase).then(() => console.log(`🟢 ${client.user.username} Başarıyla Giriş Yaptı!`))
.catch((err) => console.log(`🔴 Bot Giriş Yapamadı / Sebep: ${err}`))


ClientServices.BotVoiceJoin()
ClientServices.Activity()

Main.KomutYükle()
Main.EventYükle()

require("../../Global/Library/Format").Format.Convert();
require('../../Global/Helpers/Prototype/Prototype')

process.on('unhandledRejection', (error) => {
  console.error('Unhandled Promise Rejection:', error);
});