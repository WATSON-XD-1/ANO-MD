import fg from 'api-dylux'
let handler = async (m, { conn, text, args }) => {
  if (!text) throw `✳️Enter the Username of a TikTok user `
  let res = await fg.ttStalk(args[0])
  let txt = `
┌──「 *𝐒𝐈𝐋𝐕𝐀 𝐌𝐃 𝐁𝐎𝐓 TIKTOK STALK* 
▢ *🔖Number:* ${res.name}
▢ *🔖Username:* ${res.username}
▢ *👥followers:* ${res.followers}
▢ *🫂following:* ${res.following}
▢ *📌Desc:* ${res.desc}

▢ *🔗 Link* : https://tiktok.com/${res.username}
💌 follow: https://tiktok.com/silva.edits6
└────────────`
  await conn.sendFile(m.chat, res.profile, 'tt.png', txt, m)
}
handler.help = ['tiktokstalk']
handler.tags = ['downloader']
handler.command = /^t(tstalk|iktokstalk)$/i

export default handler
