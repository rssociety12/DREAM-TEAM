module.exports.config = {
 name: "info",
 version: "1.2.6",
 hasPermssion: 0,
 credits: "𝐀𝐡𝐦𝐞𝐝 𝐑𝐚𝐣𝐮",
 description: "Bot information command",
 commandCategory: "For users",
 hide: true,
 usages: "",
 cooldowns: 5,
};

module.exports.run = async function ({ api, event, args, Users, Threads }) {
 const { threadID } = event;
 const request = require("request");
 const fs = require("fs-extra");
 const moment = require("moment-timezone");

 const { configPath } = global.client;
 delete require.cache[require.resolve(configPath)];
 const config = require(configPath);

 const { commands } = global.client;
 const threadSetting = (await Threads.getData(String(threadID))).data || {};
 const prefix = threadSetting.hasOwnProperty("PREFIX") ? threadSetting.PREFIX : config.PREFIX;

 const uptime = process.uptime();
 const hours = Math.floor(uptime / 3600);
 const minutes = Math.floor((uptime % 3600) / 60);
 const seconds = Math.floor(uptime % 60);

 const totalUsers = global.data.allUserID.length;
 const totalThreads = global.data.allThreadID.length;

 const msg = `
─┄┅═════❁🌺❁═════┅┄─
🌟 BOT INFORMATION 🌟
─┄┅═════❁🌺❁═════┅┄─
Bot Name : DREAM TEAM BOT
Prefix : ${config.PREFIX}
Thread Prefix : ${prefix}
Modules : ${commands.size}
Ping : ${Date.now() - event.timestamp}ms

─┄┅═════❁🌺❁═════┅┄─
🌟 OWNER INFORMATION 🌟
─┄┅═════❁🌺❁═════┅┄─
Name : RAJU OFCL 
Facebook : https://www.facebook.com/share/14Q1apA4xg9/
Messenger : https://m.me/j/AbbMdf885eIA4qaM/
WhatsApp : wa.me/+8801815896135

─┄┅═════❁🌺❁═════┅┄─
🌟 ACTIVITIES 🌟
─┄┅═════❁🌺❁═════┅┄─
Active Time : ${hours}h ${minutes}m ${seconds}s
Groups : ${totalThreads}
Total Users : ${totalUsers}

─┄┅═════❁🌺❁═════┅┄─
Thanks for using RAJU OFCL BOT
─┄┅═════❁🌺❁═════┅┄─
`;

 // Imgur Images
 const imgLinks = [
 "https://img.sanishtech.com/u/fc3408ba0b4d8f707a1ba9f530530ef5.png",
 ];

 const imgLink = imgLinks[Math.floor(Math.random() * imgLinks.length)];

 const callback = () => {
 api.sendMessage({
 body: msg,
 attachment: fs.createReadStream(__dirname + "/cache/info.jpg")
 }, threadID, () => fs.unlinkSync(__dirname + "/cache/info.jpg"));
 };

 return request(encodeURI(imgLink))
 .pipe(fs.createWriteStream(__dirname + "/cache/info.jpg"))
 .on("close", callback);
};
