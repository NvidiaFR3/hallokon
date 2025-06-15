const fs = require("fs");
const os = require("os");

let handler = async (m, Nvidia, { isCreator, isPremium }) => {
const { unixTimestampSeconds, generateMessageTag, processTime, webApi, getRandom, getBuffer, fetchJson, runtime, clockString, sleep, isUrl, getTime, formatDate, tanggal, formatp, jsonformat, reSize, toHD, logic, generateProfilePicture, bytesToSize, checkBandwidth, getSizeMedia, parseMention, getGroupAdmins, readFileTxt, readFileJson, getHashedPassword, generateAuthToken, cekMenfes, generateToken, batasiTeks, randomText, isEmoji, getTypeUrlMedia, pickRandom, toIDR, capital } = require('../library/data3');
const menutxt = `
🤖 Bot    : ${global.botname2}
📊 Ver    : ${global.versi}     
🔄 Mode   : ${Nvidia.public ? "Public": "Self"} 
👑 Owner  : @${global.owner}  
⌚ Uptime : ${runtime(os.uptime())}
🎭 Status : ${isCreator ? "Owner" : isPremium ? "Premium" : "Free User"}
 
━━━ 🛒 *SHOP MENU* ?? ━━━ 
  ┃⭔ .buypanel
  ┃⭔ .buyadp
  ┃⭔ .buyownpanel
  ┃⭔ .buyptpanel
  ┃⭔ .buyvps
  ┃⭔ .buysc
  ┃⭔ .liststok/stok 
  ┃⭔ .buystok
  ┃⭔ .jasainstallpanel 
  ┃⭔ .buydo
  ┃⭔ .buyjasajpm
  ┃⭔ .jasainstalltema
  ┃⭔ .jasahbpanel
  ┗━━━━━━━━━━━━━━━━━
  
━━━ 🔧 *OTHER TOOLS* 🔧 ━━━
  ┃⭔ .updomain
  ┃⭔ .updomain-v2
  ┃⭔ .upapikey
  ┃⭔ .upapikey-v2
  ┃⭔ .upcapikey
  ┃⭔ .upcapikey-v2
  ┃⭔ .addcase
  ┃⭔ .getsv
  ┃⭔ .backup
  ┃⭔ .delcase
  ┃⭔ .createvps 
  ┃⭔ .bratvid
  ┃⭔ .brat
  ┃⭔ .cekidch
  ┃⭔ .cekidgc
  ┃⭔ .qc
  ┃⭔ .readviewonce
  ┃⭔ .stickerwm
  ┃⭔ .sticker
  ┃⭔ .ambilsw
  ┃⭔ .addserverpanel
  ┃⭔ .delserverpanel
  ┃⭔ .emojimix
  ┃⭔ .str
  ┃⭔ .cekcuaca
  ┗━━━━━━━━━━━━━━━━━

━━━ 🔍 *SEARCH TOOLS* 🔍 ━━━
  ┃⭔ .yts
  ┃⭔ .apkmod
  ┃⭔ .pinterest
  ┃⭔ .ffstalk
  ┃⭔ .mlstalk
  ┃⭔ .artinama
  ┃⭔ .cekgempa
  ┃⭔ .cekpanel
  ┃⭔ .cekhost
  ┃⭔ .githubstalk
  ┃⭔ .xnxxs
  ┃⭔ .videy
  ┃⭔ .cekipvps  
  ┃⭔ .jadwalsholat
  ┗━━━━━━━━━━━━━━━━━

━━━ 💡 *UTILITIES* 💡 ━━━
  ┃⭔ .autoai
  ┃⭔ .ai
  ┃⭔ .gpt
  ┃⭔ .tourl
  ┃⭔ .tourl2
  ┃⭔ .ssweb
  ┃⭔ .translate
  ┃⭔ .tohd
  ┃⭔ .shortlink
  ┃⭔ .shortlink2
  ┃⭔ .enc
  ┃⭔ .cetakqr
  ┃⭔ .nulis
  ┃⭔ .npm
  ┃⭔ .toimg
  ┃⭔ .a2f
  ┃⭔ .-a2fqr
  ┃⭔ .encjawa
  ┃⭔ .getpp
  ┃⭔ .cekid
  ┃⭔ .tofile
  ┃⭔ .timezone
  ┃⭔ .tofile
  ┗━━━━━━━━━━━━━━━━━

━━━ 📥 *DOWNLOAD TOOLS* 📥 ━━━
  ┃⭔ .tiktok
  ┃⭔ .tiktokmp3
  ┃⭔ .instagram
  ┃⭔ .ytmp3
  ┃⭔ .ytmp4
  ┃⭔ .play
  ┃⭔ .playvid
  ┃⭔ .playspotify 
  ┃⭔ .gitclone
  ┃⭔ .mediafire
  ┃⭔ .xnxxdl
  ┗━━━━━━━━━━━━━━━━━

━━━ 🛍 *STORE MENU* 🛍 ━━━
  ┃⭔ .addrespon
  ┃⭔ .delrespon
  ┃⭔ .listrespon
  ┃⭔ .done
  ┃⭔ .proses
  ┃⭔ .jpm
  ┃⭔ .jpm2
  ┃⭔ .jpmtesti
  ┃⭔ .jpmslide
  ┃⭔ .jpmslideht
  ┃⭔ .sendtesti
  ┃⭔ .pushkontak
  ┃⭔ .pushkontak2
  ┃⭔ .payment
  ┃⭔ .produk
  ┃⭔ .subdomain
  ┃⭔ .jpin
  ┃⭔ .getlayanan
  ┃⭔ .nokos 
  ┃⭔ .kode
  ┃⭔ .batal
  ┃⭔ .listsc
  ┃⭔ .editsc  
  ┃⭔ .addsc
  ┃⭔ .delsc  
  ┃⭔ .addstok
  ┃⭔ .delstok 
  ┃⭔ .setharga
  ┃⭔ .adddo
  ┃⭔ .deldo
  ┃⭔ .promosi
  ┃⭔ .satelit
  ┗━━━━━━━━━━━━━━━━━

━━━ 🦖 *PTERODACTYL MENU* 🦖 ━━━
  ┃⭔ .addseller
  ┃⭔ .delseller
  ┃⭔ .listseller
  ┃⭔ .addakses
  ┃⭔ .delakses
  ┃⭔ .listakses
  ┃⭔ .1gb
  ┃⭔ .2gb
  ┃⭔ .3gb
  ┃⭔ .4gb
  ┃⭔ .5gb
  ┃⭔ .6gb
  ┃⭔ .7gb
  ┃⭔ .8gb
  ┃⭔ .9gb
  ┃⭔ .10gb
  ┃⭔ .unlimited
  ┃⭔ .cadmin
  ┃⭔ .cpatner
  ┃⭔ .cowner
  ┃⭔ .clearserver
  ┃⭔ .clearuser
  ┃⭔ .clearadmin
  ┃⭔ .deladmin
  ┃⭔ .listpanel
  ┃⭔ .listadmin
  ┗━━━━━━━━━━━━━━━━━

━━━ 🔧 *PTERODACTYL V2 MENU* 🔧 ━━━
  ┃⭔ .1gb-v2
  ┃⭔ .2gb-v2
  ┃⭔ .3gb-v2
  ┃⭔ .4gb-v2
  ┃⭔ .5gb-v2
  ┃⭔ .6gb-v2
  ┃⭔ .7gb-v2
  ┃⭔ .8gb-v2
  ┃⭔ .9gb-v2
  ┃⭔ .10gb-v2
  ┃⭔ .unlimited-v2
  ┃⭔ .cadmin-v2
  ┃⭔ .delpanel-v2
  ┃⭔ .deladmin-v2
  ┃⭔ .listpanel-v2
  ┃⭔ .listadmin-v2
  ┗━━━━━━━━━━━━━━━━━
  
  ━━━ 🔧 *PTERODACTYL V3 MENU* 🔧 ━━━
  ┃⭔ .1gb-v3
  ┃⭔ .2gb-v3
  ┃⭔ .3gb-v3
  ┃⭔ .4gb-v3
  ┃⭔ .5gb-v3
  ┃⭔ .6gb-v3
  ┃⭔ .7gb-v3
  ┃⭔ .8gb-v3
  ┃⭔ .9gb-v3
  ┃⭔ .10gb-v3
  ┃⭔ .unlimited-v3
  ┃⭔ .cadmin-v3
  ┃⭔ .delpanel-v3
  ┃⭔ .deladmin-v3
  ┃⭔ .listpanel-v3
  ┃⭔ .listadmin-v3
  ┗━━━━━━━━━━━━━━━━━
  
 ━━━ 🔧 *PTERODACTYL V4 MENU* 🔧 ━━━
  ┃⭔ .1gb-v4
  ┃⭔ .2gb-v4
  ┃⭔ .3gb-v4
  ┃⭔ .4gb-v4
  ┃⭔ .5gb-v4
  ┃⭔ .6gb-v4
  ┃⭔ .7gb-v4
  ┃⭔ .8gb-v4
  ┃⭔ .9gb-v4
  ┃⭔ .10gb-v4
  ┃⭔ .unlimited-v4
  ┃⭔ .cadmin-v4
  ┃⭔ .delpanel-v4
  ┃⭔ .deladmin-v4
  ┃⭔ .listpanel-v4
  ┃⭔ .listadmin-v4
  ┗━━━━━━━━━━━━━━━━━
  
 ━━━ 🔧 *PTERODACTYL v5 MENU* 🔧 ━━━
  ┃⭔ .1gb-v5
  ┃⭔ .2gb-v5
  ┃⭔ .3gb-v5
  ┃⭔ .4gb-v5
  ┃⭔ .5gb-v5
  ┃⭔ .6gb-v5
  ┃⭔ .7gb-v5
  ┃⭔ .8gb-v5
  ┃⭔ .9gb-v5
  ┃⭔ .10gb-v5
  ┃⭔ .unlimited-v5
  ┃⭔ .cadmin-v5
  ┃⭔ .delpanel-v5
  ┃⭔ .deladmin-v5
  ┃⭔ .listpanel-v5
  ┃⭔ .listadmin-v5
  ┗━━━━━━━━━━━━━━━━━
  
━━━ 👤 *PTERODACTYL BUYYER MENU* 👤 ━━━
  ┃⭔ .1gb-buyyer
  ┃⭔ .2gb-buyyer
  ┃⭔ .3gb-buyyer
  ┃⭔ .4gb-buyyer
  ┃⭔ .5gb-buyyer
  ┃⭔ .6gb-buyyer
  ┃⭔ .7gb-buyyer
  ┃⭔ .8gb-buyyer
  ┃⭔ .9gb-buyyer
  ┃⭔ .10gb-buyyer
  ┃⭔ .unlimited-buyyer
  ┗━━━━━━━━━━━━━━━━━
  
━━━ 🚩 *PTERODACTLY BUTTON* 🚩 ━━━
  ┃⭔ .cpanel
  ┃⭔ .cpanel-v2
  ┃⭔ .cpanel-v3
  ┃⭔ .cpanel-v4
  ┃⭔ .cpanel-v5
  ┃⭔ .toadmin
  ┗━━━━━━━━━━━━━━━━━

━━━ 🛠 *PTERODACTYL INSTALLER* 🛠 ━━━
  ┃⭔ .installmenu
  ┃⭔ .addseller
  ┃⭔ .delseller
  ┃⭔ .listseller
  ┃⭔ .hackbackpanel
  ┃⭔ .installpanel
  ┃⭔ .installtemastellar
  ┃⭔ .installtemabilling
  ┃⭔ .installdepend
  ┃⭔ .installnebula
  ┃⭔ .installtemaelysium
  ┃⭔ .installtemaenigma
  ┃⭔ .installtemanightcore 
  ┃⭔ .uninstallpanel
  ┃⭔ .uninstalltema
  ┗━━━━━━━━━━━━━━━━━

━━━ 💬 *GROUP TOOLS* 💬 ━━━
  ┃⭔ .add
  ┃⭔ .kick
  ┃⭔ .close
  ┃⭔ .open
  ┃⭔ .hidetag
  ┃⭔ .kudetagc
  ┃⭔ .leave
  ┃⭔ .tagall
  ┃⭔ .promote
  ┃⭔ .demote
  ┃⭔ .resetlinkgc
  ┃⭔ .on
  ┃⭔ .off
  ┃⭔ .linkgc
  ┃⭔ .tagrandom
  ┗━━━━━━━━━━━━━━━━━
  
━━━ 🗡️ *BUG MENU* 🗡️ ━━━
  ┃⭔ .bugmenu
  ┗━━━━━━━━━━━━━━━━━

━━━ 👑 *OWNER MENU* 👑 ━━━
  ┃⭔ .autopromosi
  ┃⭔ .autoreadsw
  ┃⭔ .autotyping
  ┃⭔ .addowner
  ┃⭔ .listowner
  ┃⭔ .delowner
  ┃⭔ .self/public
  ┃⭔ .antipromosi
  ┃⭔ .setimgmenu
  ┃⭔ .setimgfake
  ┃⭔ .setppbott
  ┃⭔ .clearsession
  ┃⭔ .clearchat
  ┃⭔ .resetdb
  ┃⭔ .restartbot
  ┃⭔ .getsc
  ┃⭔ .getcase
  ┃⭔ .listgc
  ┃⭔ .joingc
  ┃⭔ .joinch
  ┃⭔ .upchannel
  ┃⭔ .upchannel2
  ┃⭔ .upswtag
  ┃⭔ .upsw
  ┃⭔ .spamchat
  ┃⭔ .closetime
  ┃⭔ .opentime
  ┃⭔ .creategc
  ┃⭔ .addplugins
  ┃⭔ .delplugins
  ┃⭔ .getplugins
  ┗━━━━━━━━━━━━━━━━━
`;

  const interactiveMetaButton = {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
      name: 'single_select',
      paramsJson: JSON.stringify({
        title: 'Beli Produk',
        sections: [
          {
            title: '🛒 Produk Unggulan',
            highlight_label: 'Recommended',
            rows: [
              { title: 'Panel Pterodactyl', id: '.buypanel' },
              { title: 'Admin Panel Pterodactyl', id: '.buyadp' }
            ]
          },
          {
            title: '📦 Produk Tambahan',
            rows: [
              { title: 'VPS (Virtual Private Server)', id: '.buyvps' },
              { title: 'Script Bot WhatsApp', id: '.buysc' }
            ]
          }
        ]
      })
    }
  };

  const buttonMessage = {
    footer: `${botname}`,
    buttons: [
      {
        buttonId: '.owner',
        buttonText: { displayText: 'Contact Owner' },
        type: 1
      },
      interactiveMetaButton
    ],
    headerType: 1,
    viewOnce: true,
    document: fs.readFileSync('./package.json'),
    fileName: `By ${namaOwner} </>`,
    mimetype: 'application/json',
    fileLength: 99999999,
    caption: menutxt,
    contextInfo: {
      isForwarded: true,
      mentionedJid: [m.sender, `${global.owner}@s.whatsapp.net`],
      forwardedNewsletterMessageInfo: {
        newsletterJid: global.idSaluran,
        newsletterName: global.namaSaluran
      },
      externalAdReply: {
        title: `${botname} - ${versi}`,
        body: `Runtime : ${runtime(process.uptime())}`,
        thumbnailUrl: global.image.menu,
        sourceUrl: linkSaluran,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  };

  await Nvidia.sendMessage(m.chat, buttonMessage, { quoted: m });
};

handler.command = ["allmenu"];
module.exports = handler;