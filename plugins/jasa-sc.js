let handler = async (m, { conn, command }) => {
    conn.reply(m.chat, `*「 RECODED BY ZERENITY 」*

*⭔ Single Auth ( 1 file session )*
_https://github.com/clicknetcafe/sanxd_

*⭔ Multi Auth ( multiple file session )*
_https://github.com/clicknetcafe/azamit-md-multi_

*⭔ Azami node_modules*
_https://cutt.ly/azaibot-md-modules_

*Original Base From :*
_https://github.com/BochilGaming_
`, m)
}

handler.command = /^(sc|sourcecode)$/i

export default handler