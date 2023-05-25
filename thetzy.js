/*
› Create By Azril 
› Base Ori Azril

🔥 KALAU MAU RENAME TARO CREDITS GUA : 𝐀𝐙𝐑𝐈𝐋 - 𝐓𝐙𝐘 */

const fs = require('fs')
const chalk = require('chalk')
//=================================================//
//—————「 Set Random Image Menu 」—————//
//gausah di apa² in!
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
//=================================================//
//—————「 Set Kebutuhan Button & Kontak 」—————//
//ubah aja kalau ada yang gapunya gsh di hps anggap aja credits :), note tanda ' gausah di hapus!
global.youtube = 'https://youtube.com/@'
global.ig = 'https://www.instagram.com/='
global.mygc = '?'
global.myweb = '?'
global.linkgrupss = 
global.linkpro = 'mailto:support@whatsapp.com?subject=Deactivate%20My%20Account%20Number&body=Please%20Deactivate%20The%20My%20Account%20Number%20%2B62XXXXXXXX%20Immediately%20Because%20The%20Number%20Has%20Been%20Lost'
global.linkun = 'mailto:support@whatsapp.com?subject=المساعدة%20في%20إلغاء%20حظر%20رقمي&body=Admins%20Whatsapp%20😰kenapa%20nomer%20saya%20(%20+62xx%20)%20di%20blokir%20padahal%20saya%20tidak%20melakukan apa%20apa%20nomer%20saya%20hanya%20di%20pinjam%20oleh%20saudara%20saya%20yang%20tinggal%20di%20amerika😢1hari%20kemuadian%20nomernya%20di%20blokir mohon%20atas%20ketidaknyamananya%20di%20perbaiki 😩salam%20hangat'
global.email = 'raihanekanugroho@gmail.com '
global.region = 'Indonesia'
global.f1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.f2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.f3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.f4 = 'application/zip'
global.f5 = 'application/pdf'
global.f6 = 'application/vnd.android.package-archive'
//—————「 Set Nama Own & Bot 」—————//
global.nomerOwner = "6281344845604" //Bebas ganti 
global.namaOwner = "Rehan Betmut" //Bebas ganti
global.footer = 'Rehan Official' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
global.packname = 'Rehan Official'
global.ownerr = ['Rehan Betmut']
global.author = 'Rehan Official'
global.prefa = ['','!','.',',','🐤','🗿']
global.sp = '⭔'
global.mess = {
    wait: '⏳ _*DONE✅, WAJIB JEDA 1 MENIT GAK JEDA APUS AKSES*_',
    success: "_SUKSES✅_",
    group: "Kamu belum dapat akses, beli akses di wa.me/6281344845604",
    owner: "Kamu belum dapat akses, beli akses di wa.me/6281344845604",
    admin: "Kamu belum dapat akses, beli akses di wa.me/6281344845604",
    badmin: "_BOTNYA DIJADIKAN ADMIN DULU_", 
    nsfw: '⚠️ _*Fitur NSFW tidak diaktifkan, chat admin grup supaya diaktifkan*_',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
}
global.timeBug = 1 // 1 Menit
//=================================================//
global.thumb = { url: 'https://telegra.ph/file/c2e84a4776ee6c47aa3a5.jpg' }
global.visoka = { url: 'https://a.uguu.se/fVFNCwix.mp4' }
global.menuimg = { url: 'https://a.uguu.se/fVFNCwix.mp4' }
global.zy = { url: 'https://telegra.ph/file/842cc1a7658a1c2b94c0c.jpg' }
global.logonya = fs.readFileSync("./media/gambarnye/thezyren.jpg")
global.thumbnailvid = { url: 'https://a.uguu.se/dLvmNpRp.mp4' }
global.bgv = { url: 'https://a.uguu.se/YHuhGMUw.mp4' }
global.removebgkey = "o9jGwRuAbYFGprJDwZhEAsU1" //Login di https://www.remove.bg
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
