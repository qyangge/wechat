const { Wechaty } = require("wechaty");
const { PuppetPadplus } = require("wechaty-puppet-padplus");
const config = require("./config");
//ipad协议
const bot = new Wechaty({
  puppet: new PuppetPadplus({
    token: config.TOKEN
  }),
  name: "WeChat-Robot"
});
//web协议
// const bot = new Wechaty({
//   name: "WeChat-Robot"
// });
bot.on("login", "./listeners/on-login.js");
bot.on("message", "./listeners/on-message");
bot.on("scan", "./listeners/on-scan");
bot.on("friendship", "./listeners/on-friendship");
bot.on("room-join", "./listeners/on-room-join");
bot.on("room-leave", "./listeners/on-room-leave");
bot
  .start()
  .then(() => console.log("开始登陆微信"))
  .catch(e => console.error(e));
module.exports = bot;
