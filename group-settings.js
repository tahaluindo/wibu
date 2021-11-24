const { WAConnection: _WAConnection, MessageType, Presence, Mimetype, ChatModification, GroupSettingChange, ReconnectMode } = require('@adiwajshing/baileys')
const simple = require("./lib/simple.js");
const WAConnection = simple.WAConnection(_WAConnection);
const client = new WAConnection()
const util = require('util')
const figlet = require('figlet')
const moment = require("moment-timezone");
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const fs = require("fs");
const { color } = require("./lib/color");
const fetch = require("node-fetch");
const extream = JSON.parse(fs.readFileSync('./database/extream.json'))
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
const settings = JSON.parse(fs.readFileSync('./settings.json'))
  
  
  
  
  
  module.exports = async(client, anu) => {
  	
   if(extream.includes(anu.jid)) return
   if(!JSON.parse(fs.readFileSync('./database/welkom.json')).includes(anu.jid)) return
   metdata = await client.groupMetadata(anu.jid);
   const from = metdata.id
   fake1 = settings.copyright
   prefix = settings.prefix
   
   
	
    ///Button Location
const sendButLocation = async (id, text1, desc1, gam1, but = []) => {
					kma = gam1
					mhan = await client.prepareMessage(id, kma, MessageType.location, {thumbnail:kma})
					buttonMessages = {
						locationMessage: mhan.message.locationMessage,
						contentText: text1,
						footerText: desc1,
						buttons: but,
						headerType: 6
						}
						client.sendMessage(id, buttonMessages, MessageType.buttonsMessage)
						}
    
    
    
    
    
    if (anu.announce == "false") {
    	try {
			    ppimg = await client.getProfilePicture(metdata.id)
				} catch {
				ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				buffer = await getBuffer(ppimg)
   
      teks = `- [ Group Opened ] -\n\n_Group telah dibuka oleh admin_\n_Sekarang semua member bisa mengirim pesan_`;
      let but1 = [{
										"buttonId": `INFO BOT`,
										"buttonText": {
											"displayText": `ɪɴғᴏ ʙᴏᴛ`
											},
										"type": "RESPONSE"
										},{
										"buttonId": `$${prefix}menu`,
										"buttonText": {
											"displayText": `ᴍᴇɴᴜ`
											},
										"type": "RESPONSE"
										}]
      
      
      sendButLocation(metdata.id, teks,`n\${fake1}, buffer, but1)      
      console.log(`- [ Group Opened ] - In ${metdata.subject}`);
      
    } else if (anu.announce == "true") {
    	try {
			    ppimg = await client.getProfilePicture(metdata.id)
				} catch {
				ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				buffer = await getBuffer(ppimg)
   
      teks = `- [ Group Closed ] -\n\n_Group telah ditutup oleh admin_\n_Sekarang hanya admin yang dapat mengirim pesan_`;
      console.log(`- [ Group Closed ] - In ${metdata.subject}`);
      let but2 = [{
										"buttonId": `INFO BOT`,
										"buttonText": {
											"displayText": `ɪɴғᴏ ʙᴏᴛ`
											},
										"type": "RESPONSE"
										},{
										"buttonId": `${prefix}menu`,
										"buttonText": {
											"displayText": `ᴍᴇɴᴜ`
											},
										"type": "RESPONSE"
										}]
      
      
      sendButLocation(metdata.id, teks,`n\© ${fake1}, buffer, but2)      
      
    } else if (!anu.desc == "") {
    	try {
			    ppimg = await client.getProfilePicture(metdata.id)
				} catch {
				ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				buffer = await getBuffer(ppimg)
   
      tag = anu.descOwner.split("@")[0] + "@s.whatsapp.net";
      teks = `- [ Group Description Change ] -\n\nDeskripsi Group telah diubah oleh Admin @${anu.descOwner.split("@")[0]}\nDeskripsi Baru : ${anu.desc}`;
      console.log(`- [ Group Description Change ] - In ${metdata.subject}`);
            let but3 = [{
										"buttonId": `INFO BOT`,
										"buttonText": {
											"displayText": `ɪɴғᴏ ʙᴏᴛ`
											},
										"type": "RESPONSE"
										},{
										"buttonId": `${prefix}menu`,
										"buttonText": {
											"displayText": `ᴍᴇɴᴜ`
											},
										"type": "RESPONSE"
										}]
      
      
      sendButLocation(metdata.id, teks,`n\${fake1}, buffer, but3)      
           
    } else if (anu.restrict == "false") {
    	try {
			    ppimg = await client.getProfilePicture(metdata.id)
				} catch {
				ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				buffer = await getBuffer(ppimg)
   
      teks = `- [ Group Setting Change ] -\n\nEdit Group info telah dibuka untuk member\nSekarang semua member dapat mengedit info Group Ini`;
      
      console.log(`- [ Group Setting Change ] - In ${metdata.subject}`);
      
      let but3 = [{
										"buttonId": `INFO BOT`,
										"buttonText": {
											"displayText": `ɪɴғᴏ ʙᴏᴛ`
											},
										"type": "RESPONSE"
										},{
										"buttonId": `${prefix}menu`,
										"buttonText": {
											"displayText": `ᴍᴇɴᴜ`
											},
										"type": "RESPONSE"
										}]
      
      
      sendButLocation(metdata.id, teks,`n\${fake1}, buffer, but4)      
      
      
      
    } else if (anu.restrict == "true") {
    	try {
			    ppimg = await client.getProfilePicture(metdata.id)
				} catch {
				ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				buffer = await getBuffer(ppimg)
   
      teks = `- [ Group Setting Change ] -\n\nEdit Group info telah ditutup untuk member\nSekarang hanya admin group yang dapat mengedit info Group Ini`;
      console.log(`- [ Group Setting Change ] - In ${metdata.subject}`);
      
      let but5 = [{
										"buttonId": `INFO BOT`,
										"buttonText": {
											"displayText": ɪɴғᴏ ʙᴏᴛ`
											},
										"type": "RESPONSE"
										},{
										"buttonId": `${prefix}menu`,
										"buttonText": {
											"displayText": `ᴍᴇɴᴜ`
											},
										"type": "RESPONSE"
										}]
      
      
      sendButLocation(metdata.id, teks,`n\${fake1}, buffer, but5)      
      
      
    }
  });
  }
  