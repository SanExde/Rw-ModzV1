import { family100 } from '@bochilteam/scraper'
const winScore = 4999

async function handler(m, { conn, usedPrefix, isPrems }) {
    let chat = global.db.data.chats[m.chat]
    if (chat.game == false && m.isGroup) return
    this.game = this.game ? this.game : {}
    let id = 'family100_' + m.chat
    if (id in this.game) {
        this.reply(m.chat, 'Masih ada kuis yang belum terjawab di chat ini', this.game[id].msg)
        throw false
    }
    if (global.db.data.users[m.sender].limit < 1 && global.db.data.users[m.sender].money > 50000 && !isPrems) {
        throw `Beli limit dulu lah, duid lu banyak kan 😏`
    } else if (global.db.data.users[m.sender].limit > 0 && !isPrems) {
        global.db.data.users[m.sender].limit -= 1
    } else {

    }
    const json = await family100()
    let caption = `
*Soal:* ${json.soal}
Terdapat *${json.jawaban.length}* jawaban${json.jawaban.find(v => v.includes(' ')) ? `
(beberapa jawaban terdapat spasi)
`: ''}
+${winScore} Money tiap jawaban benar
    `.trim()
    this.game[id] = {
        id,
        msg: await this.sendButton(m.chat, caption, packname + ' - ' + author, null, [['Nyerah', 'nyerah']], m),
        ...json,
        terjawab: Array.from(json.jawaban, () => false),
        winScore,
    }
}
handler.menufun = ['family100']
handler.tagsfun = ['game']
handler.command = /^family100$/i

handler.premium = true

export default handler