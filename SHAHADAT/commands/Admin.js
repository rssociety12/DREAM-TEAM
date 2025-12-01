const axios = require("axios");
const request = require("request");
const fs = require("fs-extra");
const moment = require("moment-timezone");

module.exports.config = {
 name: "admin",
 version: "1.0.0",
 hasPermssion: 0,
 credits: "𝐀𝐡𝐦𝐞𝐝 𝐑𝐚𝐣𝐮",
 description: "Show Owner Info",
 commandCategory: "info",
 usages: "admin",
 cooldowns: 5
};

module.exports.run = async function({ api, event }) {
 const time = moment().tz("Asia/Dhaka").format("DD/MM/YYYY hh:mm:ss A");

 const callback = () => api.sendMessage({
 body: `
══════════════════════
 🌟 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢 🌟
══════════════════════
👤 𝐍𝐚𝐦𝐞 : 𝐀𝐡𝐦𝐞𝐝 𝐑𝐚𝐣𝐮
🚹 𝐆𝐞𝐧𝐝𝐞𝐫 : 𝐌𝐚𝐥𝐞
❤️ 𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧 : 𝐀𝐤𝐡𝐢𝐫 𝐉𝐚𝐦𝐚𝐢
🎂 𝐀𝐠𝐞 : 𝟏𝟖+
🕌 𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧 : 𝐈𝐬𝐥𝐚𝐦
🎓 𝐄𝐝𝐮𝐜𝐚𝐭𝐢𝐨𝐧 : 𝐇𝐒𝐂 (𝟐𝟎𝟐𝟔)
🏡 𝐀𝐝𝐝𝐫𝐞𝐬𝐬 : 𝐍𝐨𝐚𝐤𝐡𝐚𝐥𝐢,𝐅𝐞𝐧𝐢
══════════════════════
📘 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸:
https://www.facebook.com/share/14Q1apA4xg9/

💬 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽:
https://wa.me/01815896135
══════════════════════
🕒 𝐔𝐩𝐝𝐚𝐭𝐞𝐝 𝐓𝐢𝐦𝐞: ${time}
══════════════════════
 `,
 attachment: fs.createReadStream(__dirname + "/cache/owner.jpg")
 }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/owner.jpg"));

 return request("https://img.sanishtech.com/u/fc3408ba0b4d8f707a1ba9f530530ef5.png")
 .pipe(fs.createWriteStream(__dirname + '/cache/owner.jpg'))
 .on('close', () => callback());
};
