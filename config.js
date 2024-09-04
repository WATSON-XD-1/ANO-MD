import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone' 
import fs from 'fs' 

//OwnerShip
global.owner = [
  [process.env.OWNER_NUMBER || '263781330745', process.env.OWNER_NAME || 'ANO 𝐌𝐃 𝐁𝐎𝐓', true],
  ['263781339745', 'ANO 𝐌𝐃', true]
]
global.mods = []
global.prems = []

global.author = process.env.OWNER_NAME || 'ANO 𝐌𝐃 𝐁𝐎𝐓'
global.botname = process.env.BOT_NAME || 'ANO 𝐌𝐃'
global.oname = author
global.bname = botname

//Extra Shortcuts
global.smlink = process.env.SOCIAL_MEDIA_LINK || 'https://github.com/WATSON-XD1'
global.gclink = process.env.GROUP_LINK || 'https://whatsapp.com/channel/0029VajjzuB9sBI890YffB1b'
global.chlink = process.env.CHANNEL_LINK || 'https://whatsapp.com/channel/0029VajjzuB9sBI890YffB1b'
 
//Apikeys
global.shizokeys = 'shizo'

//Sticker Watermarks
global.packname = process.env.BOT_NAME || 'ANO 𝐌𝐃'
global.stkpack = process.env.BOT_NAME || 'ANO 𝐌𝐃'
global.stkowner = process.env.OWNER_NAME || '© ANO 𝐌𝐃 𝐁𝐎𝐓'

//Watermark
global.maker = process.env.MAKER || 'Made with ANO 𝐌𝐃 𝐁𝐎𝐓'

//global emojis
global.wait = '*⌛ _ANO MD BOT..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

//management
global.bug = '*!! Sorry 💢 !!*\nSomething went wrong 🌋'
global.stop = '*!! 🎭 Unfortunately ANO MD BOT💔 !!*\nBot system is not Responding 🙃'

//TimeLines
global.botdate = `*⫹⫺ Date:*  ${moment.tz('Africa/Nairobi').format('DD/MM/YY')}`
global.bottime = `*⫹⫺ Time:* ${moment.tz('Africa/Nairobi').format('HH:mm:ss')}`

//Hosting Management
global.serverHost = 1
global.getQrWeb = 0
global.renderHost = 0
global.replitHost = 0

global.pairingNumber = "263781330745" //put your bot number here

global.mods = ['263789622747','263781330745']
global.prems = ['263789622747','263781330745']
global.allowed = ['263789622747','263781330745']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = [
  '29d4b59a4aa687ca',
  '5LTV57azwaid7dXfz5fzJu',
  'cb15ed422c71a2fb',
  '5bd33b276d41d6b4',
  'HIRO',
  'kurrxd09',
  'ebb6251cc00f9c63',
]
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['GataDios']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = [
  '29d4b59a4aa687ca',
  '5LTV57azwaid7dXfz5fzJu',
  'cb15ed422c71a2fb',
  '5bd33b276d41d6b4',
  'HIRO',
  'kurrxd09',
  'ebb6251cc00f9c63',
]

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
