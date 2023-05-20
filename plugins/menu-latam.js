import axios from 'axios';
import FormData from 'form-data';
import fetch from 'node-fetch';
import fs from 'fs';
import uploadFile from '../lib/uploadFile.js';
import uploadImage from '../lib/uploadImage.js';
import { webp2png } from '../lib/webp2mp4.js';
import { Sticker, StickerTypes } from 'wa-sticker-formatter';

let handler = async (m, { conn, groupMetadata, usedPrefix, text, args, isPrems, isOwner, command }) => {
    try {
        let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
        let template = (args[0] || '').toLowerCase();
        
        if (!args[0] || !template) {
            let caption = `*Contoh Penggunaan*\n${usedPrefix + command} waifu\n\n*List:*\n• ${usedPrefix + command} animwp\n• ${usedPrefix + command} dogis\n• ${usedPrefix + command} kuack\n• ${usedPrefix + command} michis\n• ${usedPrefix + command} neko_h\n• ${usedPrefix + command} nekonime1\n• ${usedPrefix + command} nekonime3\n• ${usedPrefix + command} waifu\n• ${usedPrefix + command} waifu_h`;

            conn.reply(m.chat, caption, m);
            return;
        }

        switch (template) {
            case 'neko_h':
            case 'waifu_h':
                let hen = await fetch(`https://latam-api.vercel.app/api/${template}?apikey=nekosmic`);
                let tai = await hen.json();
                conn.sendButtonImg(m.chat, tai.hidrogeno, wm, 'Nih.jpg', 'To Sticker', '.s', m);
                break;

            case 'kuack':
            case 'animwp':
            case 'dogis':
            case 'michis':
            case 'nekonime1':
            case 'nekonime3':
            case 'waifu':
                let kua = await fetch(`https://latam-api.vercel.app/api/${template}?apikey=nekosmic`);
                let ack = await kua.json();
                conn.sendButtonImg(m.chat, ack.imagen, wm, 'Nih.jpg', 'To Sticker', '.s', m);
                break;
        }
    } catch (e) {
        throw e;
    }
};

handler.help = ['latam <command> <teks>'];
handler.tags = ['tools'];
handler.command = /^latam$/i;

export default handler;
