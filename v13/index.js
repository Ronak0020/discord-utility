const crypto = require('crypto');
const yes = ['yes', 'y', 'ye', 'yeah', 'yup', 'yea', 'ya', 'hai', 'si', 'sí', 'oui', 'はい', 'correct'];
const no = ['no', 'n', 'nah', 'nope', 'nop', 'iie', 'いいえ', 'non', 'fuck off'];
const Discord = require("discord.js");
const mongoose = require("mongoose");
const moment = require("moment");
require("moment-duration-format")(moment);
const figlet = require("figlet");

module.exports = class DiscordUtility {

    constructor() {
        this.defaultEmbed = {
            watermark: null,
            footer: null,
            footerImage: null,
            timestamp: null,
            author: null,
            authorImage: null,
            thumbnail: null,
            color: null,
            header: null
        }
    }

    /**
     * Set default options for embeds.
     * @param {Object} options The options for default embed you want in all embeds.
     */

    static defaultEmbed(options) {
        if(options.watermark) this.defaultEmbed.watermark = options.watermark;
        if(options.footer) this.defaultEmbed.footer = options.footer;
        if(options.footerImage) this.defaultEmbed.footerImage = options.footerImage;
        if(options.timestamp) this.defaultEmbed.timestamp = options.timestamp;
        if(options.author) this.defaultEmbed.author = options.author;
        if(options.authorImage) this.defaultEmbed.authorImage = options.authorImage;
        if(options.thumbnail) this.defaultEmbed.thumbnail = options.thumbnail;
        if(options.header) this.defaultEmbed.header = options.header;
        if(options.color) this.defaultEmbed.color = options.color;
    }

    /**
     * Delay a process by "time" milliseconds
     * @param {Number} time - Time must be in milliseconds
     * @returns Promise
     */

    static delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }

    /**
     * Trims a string to get a specified length of string.
     * @param {String} text String to shorten
     * @param {Number} maxLen (Optional) Maximum length of String to return. Default: 2000
     * @returns Trimmed String
     */

    static shorten(text, maxLen = 2000) {
        return text.length > maxLen ? `${text.substr(0, maxLen - 3)}...` : text;
    }

    /**
     * Generates a random number between two specified numbers.
     * @param {Number} min Minimum number range
     * @param {Number} max Maximum Number range
     * @returns Generated Number
     */

    static randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    /**
     * Trim an array to the specified length.
     * By default, trims and returns first 10 elements of the array.
     * @param {Array} array Array to trim
     * @param {Number} maxLen (Optional) Maximum length of array to trim. Default: 10 (Will return first 10 elements from array)
     * @returns Trimmed Array
     */

    static trimArray(array, maxLen = 10) {
        if (array.length > maxLen) {
            const len = array.length - maxLen;
            array = array.slice(0, maxLen);
            array.push(`${len} more...`);
        }
        return array;
    }

    /**
     * Shuffles an array.
     * @param {Array} array Array to shuffle elements in.
     * @returns Shuffled Array
     */

    static shuffleArray(array) {
        const arr = array.slice(0);
        for (let i = arr.length - 1; i >= 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        return arr;
    }

    /**
     * Returns array without any duplicate values.
     * @param {Array} array Array of duplicate elements
     * @returns Array without duplicates
     */

    static removeDuplicates(array) {
        return [...new Set(array)];
    }

    /**
     * Check if both the arrays are exactly same.
     * @param {Array} array1 first array to compare
     * @param {Array} array2 second array to compare
     * @returns Boolean
     */

    static isEqualArray(array1, array2) {
        if (array1.length !== array2.length) return false;
        for (let i = 0; i < array1.length; i++) {
            if (array1[i] !== array2[i]) return false;
            return true;
        }
    }

    /**
     * Check for all the common elements in an array and get them.
     * @param {Array} array1 First array to check in.
     * @param {Array} array2 Second array to check in.
     * @returns Array if exists else false
     */

    static hasCommonElement(array1, array2) {
        let commons = [];
        for (let i = 0; i < array1.length; i++) {
            for (let j = 0; j < array2.length; j++) {
                if (array1[i] === array2[j]) {
                    commons.push(array1[i]);
                }
            }
        }
        if (commons.length > 0) return commons;
        else return false;
    }

    /**
     * Make a list of elements of an array.
     * @param {Array} array Array of elements
     * @param {String} conj (Optional) Conjuction to join the last two elements of array. Default: "and"
     * @returns List of array elements
     */

    static list(array, conj = 'and') {
        const len = array.length;
        if (len === 0) return '';
        if (len === 1) return arr[0];
        return `${array.slice(0, -1).join(', ')}${len > 1 ? `${len > 2 ? ',' : ''} ${conj} ` : ''}${array.slice(-1)}`;
    }

    /**
     * Sort elements of an array by name.
     * @param {Array} arr Array to sort elements of.
     * @returns Sorted Array
     */

    static sortByName(arr) {
        return arr.sort((a, b) => {
            return a.toLowerCase() > b.toLowerCase() ? 1 : -1;
        });
    }

    /**
     * Make first letter of words capital.
     * @param {String} text String to capitalise from
     * @param {String} split (Optional) Split the String to get first word to capitalise.
     * @returns Capitalised String
     */

    static firstUpperCase(text, split = ' ') {
        return text.split(split).map(word => `${word.charAt(0).toUpperCase()}${word.slice(1)}`).join(' ');
    }

    /**
     * Format a number in 2 digits.
     * @param {Number} number The number to format
     * @param {Number} minimumFractionDigits (Optional) Minimum fraction digits. Default: 0
     * @returns Formatted Number
     */

    static formatNumber(number, minimumFractionDigits = 0) {
        return Number.parseFloat(number).toLocaleString(undefined, {
            minimumFractionDigits,
            maximumFractionDigits: 2
        });
    }

    /**
     * Encode String or Decode to normal string.
     * @param {String} text String to encode/decode
     * @param {String} mode (Optional) Mode of action. Either 'encode' or 'decode'. Default: 'encode'
     * @returns Encoded/Decoded String
     */

    static base64(text, mode = 'encode') {
        if (mode === 'encode') return Buffer.from(text).toString('base64');
        if (mode === 'decode') return Buffer.from(text, 'base64').toString('utf8') || null;
        throw new TypeError(`${mode} is not a supported base64 mode.`);
    }

    /**
     * Generate Hash codes of a string
     * @param {String} text String to transform into hash
     * @param {String} algorithm Type of algorithm. Example: 'md5', 'sha224', 'sha2', 'sha256', etc.
     * @returns Generaged hash of the provided String
     */

    static createHash(text, algorithm) {
        return crypto.createHash(algorithm).update(text).digest('hex');
    }

    /**
     * Make a text-based cerification.
     * @param {Discord.Channel} channel Channel to create verification in
     * @param {Discord.User} user Discord.User who needs to verify
     * @param {Object} options (Optional) { time: The time for verification to last (in milliseconds) }
     * @returns Boolean? Whether verification was "yes" (true) or "no" (false)
     */

    static async verify(channel, user, { time = 30000, extraYes = [], extraNo = [] } = {}) {
        const filter = res => {
            const value = res.content.toLowerCase();
            return (user ? res.author.id === user.id : true)
                && (yes.includes(value) || no.includes(value) || extraYes.includes(value) || extraNo.includes(value));
        };
        const verify = await channel.awaitMessages({ filter,
            max: 1,
            time
        });
        if (!verify.size) return 0;
        const choice = verify.first().content.toLowerCase();
        if (yes.includes(choice) || extraYes.includes(choice)) return true;
        if (no.includes(choice) || extraNo.includes(choice)) return false;
        return false;
    }

    /**
     * React to a message if the bot is able to.
     * @param {Discord.Message} message Message to react on.
     * @param {Discord.ClientUser} user Discord client user.
     * @param {String} emoji Emoji to react with
     * @param {String} fallbackEmoji (Optional) If reaction fails with custom emoji, use this emoji instead. Default: ✅
     * @returns Promise<MessageReaction>
     */

    static async reactMessage(message, user, emoji, fallbackEmoji = "✅") {
        const dm = !message.guild;
        if (fallbackEmoji && (!dm && !message.channel.permissionsFor(user).has(Discord.Permissions.FLAGS.USE_EXTERNAL_EMOJIS))) {
            emoji = fallbackEmoji;
        }
        if (dm || message.channel.permissionsFor(user).has([Discord.Permissions.FLAGS.ADD_REACTIONS, Discord.Permissions.FLAGS.READ_MESSAGE_HISTORY])) {
            try {
                await message.react(emoji);
            } catch {
                return null;
            }
        }
        return null;
    }

    /**
     * Create a queue to join. Can be for playing games or for events
     * @param {Discord.Message} msg Discord.Message
     * @param {String} join Message that will be used for joining the queue. For example: "join game"
     * @param {String} emoji Emoji that will be used to react on msgs when user types "join game" and is accepted in queue.
     * @param {Number} max Maximum amount of players that can join
     * @param {Number} min (Optional) Minimum amount of players required in queue. Default: 1
     * @returns Array of user IDs who joined the queue.
     */

    static async awaitPlayers(msg, join, emoji, max, min = 1) {
        if (max === 1) return [msg.member.user.id];
        await msg.channel.send(
            `You will need at least ${min - 1} more player(s) (at max ${max - 1}). To join, type \`${join}\`.`
        );
        const joined = [];
        joined.push(msg.member.user.id);
        const filter = async (res) => {
            if (res.author.bot) return false;
            if (joined.includes(res.author.id)) return false;
            if (res.content.toLowerCase() !== join) return false;
            joined.push(res.author.id);
            await this.reactMessage(res, res.author, emoji, '✅');
            return true;
        };
        const verify = await msg.channel.awaitMessages({filter, max: max - 1, time: 60000 });
        verify.set(msg.id, msg);
        if (verify.size < min) return false;
        return verify.map(player => player.author.id);
    }

    /**
     * Convert Bytes into KB/MB/GB/TB...
     * @param {Number} bytes Bytes to format into KB/MB/Gb...
     * @returns Formatted String of bytes
     */

    static formatBytes(bytes) {
        if (bytes === 0) return '0 Bytes';
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        const i = Math.floor(Math.log(bytes) / Math.log(1024));
        return `${parseFloat((bytes / Math.pow(1024, i)).toFixed(2))} ${sizes[i]}`;
    }

    /**
     * Create a reaction based verification
     * @param {Discord.Message} message Discord message to create verification on
     * @param {Discord.User} author Author of message OR user who is alowed to verify using emoji
     * @param {Number} time Duration the verification will last for IN SECONDS
     * @param {Array} validReactions Array of emoji that will be reacted on message for verification
     * @returns String of Reacted emoji
     */

    static async promptMessage(message, author, time, validReactions) {
        time *= 1000;
        for (const reaction of validReactions) await message.react(reaction);
        const filter = (reaction, user) => validReactions.includes(reaction.emoji.name) && user.id === author.id;
        return message
            .awaitReactions({filter, max: 1, time: time })
            .then(collected => collected.first() && collected.first().emoji.name);
    }

    /**
     * Fetch a member from the guild.
     * @param {Discord.Message} message Discord message
     * @param {String} toFind The username/displayname/usertag/user mention you are searching for
     * @returns Discord.GuildMember
     */

    static getMember(message, toFind = '') {
        toFind = toFind.toLowerCase();
        let target = message.guild.members.cache.get(toFind);
        if (!target && message.mentions.members)
            target = message.mentions.members.first();
        if (!target && toFind) {
            target = message.guild.members.cache.find(member => {
                return member.displayName.toLowerCase().includes(toFind) ||
                    member.user.tag.toLowerCase().includes(toFind)
            });
        }
        if (!target) return false;
        return target;
    }

    /**
     * Get a channel using its name/mention/id
     * @param {Discord.Message} message Discord.Message
     * @param {String} toFind ID or Name or Mention of the channel
     * @returns Discord.GuildChannel
     */

    static getChannel(message, toFind = '') {
        toFind = toFind.toLowerCase();
        let target = message.guild.channels.cache.get(toFind);
        if (!target && message.mentions?.channels)
            target = message.mentions.channels.first();
        if (!target && toFind) {
            target = message.guild.channels.cache.find(channel => {
                return channel.name.toLowerCase().includes(toFind.toLowerCase());
            });
        }
        if (!target) return false;
        return target;
    }

    /**
     * Get a role using its name/mention/id
     * @param {Discord.Message} message Discord.Message
     * @param {String} toFind ID or Name or Mention of the role
     * @returns Discord.Role
     */

    static getRole(message, toFind = '') {
        toFind = toFind.toLowerCase();
        let target = message.guild.roles.cache.get(toFind);
        if (!target && message.mentions?.roles)
            target = message.mentions.roles.first();
        if (!target && toFind) {
            target = message.guild.roles.cache.find(role => {
                return role.name.toLowerCase().includes(toFind.toLowerCase());
            });
        }
        if (!target) return false;
        return target;
    }

    /**
     * 
     * @param {Discord.Client} client Your bot client
     * @param {Discord.Message} message Discord.Message
     * @param {String} toFind The username/usertag/user mention you are searching for
     * @returns Discord.User
     */

    static getUser(client, message, toFind = '') {
        toFind = toFind.toLowerCase();
        let target = client.users.cache.get(toFind);
        if (!target && message.mentions.users)
            target = message.mentions.users.first();
        if (!target && toFind) {
            target = client.users.cache.find(member => {
                return member.username.toLowerCase().includes(toFind) ||
                    member.tag.toLowerCase().includes(toFind)
            });
        }
        if (!target) return false
        return target;
    }

    /**
     * Generate a random "length" letters long ID
     * @param {Number} length Length of ID that should be created. Default: 4
     * @returns String of generated ID
     */

    static createId(length = 4) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    /**
     * Generate Roman form of the given number
     * @param {Number} num The number to convert in roman
     * @returns Roman number string of provided number
     */

    static generateRoman(num) {
        const lookup = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
        let roman = '';
        let i;
        for (i in lookup) {
            while (num >= lookup[i]) {
                roman += i;
                num -= lookup[i];
            }
        }
        return roman;
    }

    /**
     * Generate Arabic Number from Roman numbers
     * @param {String} roman Roman number to convert in normal numeral digits
     * @returns Number
     */

    static generateNumeral(roman) {
        roman = roman.toUpperCase();
        const lookup = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
        let arabic = 0;
        let i = roman.length;
        while (i--) {
            if (lookup[roman[i]] < lookup[roman[i + 1]]) {
                arabic -= lookup[roman[i]];
            }
            else {
                arabic += lookup[roman[i]];
            }
        }
        return arabic;
    }

    /**
     * Convert normal texts into Figlet Texts
     * @param {String} string String to convert into figlet text
     * @returns Converted String
     */

    static figlet(string) {
        figlet(`${string}`, function (err, data) {
            if (err) {
                return false;
            }
            return data;
        });
    }

    /**
     * Format your discord client's uptime in Days Hours Minutes Seconds
     * @param {Number} unicode Duration Unicode to convert
     * @returns Duration String as days, hours, minutes and seconds
     */

    static formatDays(unicode) {
        const roundTowardsZero = unicode > 0 ? Math.floor : Math.ceil;
        const days = roundTowardsZero(unicode / 86400000),
            hours = roundTowardsZero(unicode / 3600000) % 24,
            minutes = roundTowardsZero(unicode / 60000) % 60;
        let seconds = roundTowardsZero(unicode / 1000) % 60;
        if (seconds === 0) seconds++;
        const isDay = days > 0,
            isHour = hours > 0,
            isMinute = minutes > 0;
        const dayUnit =
            days < 2 ? "day" : "days",
            hourUnit =
                hours < 2 ? "hour" : "hours",
            minuteUnit =
                minutes < 2 ? "minute" : "minutes",
            secondUnit =
                seconds < 2 ? "second" : "seconds";

        const pattern =
            (!isDay ? '' : `{days} ${dayUnit}, `) +
            (!isHour ? '' : `{hours} ${hourUnit}, `) +
            (!isMinute ? '' : `{minutes} ${minuteUnit}, `) +
            `{seconds} ${secondUnit}`;
        const content = pattern
            .replace('{days}', days.toString())
            .replace('{hours}', hours.toString())
            .replace('{minutes}', minutes.toString())
            .replace('{seconds}', seconds.toString());
        return content;
    }

    /**
     * Convert ms into duration
     * @param {Number} milliseconds Milliseconds to format into duration
     * @param {Boolean} trim Optional. Whether to get only time whihc is > 0 or get complete h:mm:ss format
     * @param {String} format Optional. In what format you want to convert time in.
     * @returns Duration
     */

    static formatTime(milliseconds, trim = false, format = "h:mm:ss") {
        return moment.duration(milliseconds, "milliseconds").format(format, { trim: trim });
    }

    /**
     * Generate an embed easily using this function.
     * @param {Object} options Object containing the data for the embed.
     * @returns Discord.MessageEmbed
     */

    static generateEmbed(options) {
        let description = options.description;
        let title = options.title;
        let color = options.color || this.defaultEmbed.color;
        let footer = options.footer || this.defaultEmbed.footer;
        let footerImage = options.footerImage || this.defaultEmbed.footerImage;
        let author = options.author || this.defaultEmbed.author;
        let authorImage = options.authorImage || this.defaultEmbed.authorImage;
        let thumbnail = options.thumbnail || this.defaultEmbed.thumbnail;
        let image = options.image;
        let url = options.url;
        let fields = options.fields;
        let header = options.header || this.defaultEmbed.header;
        let timestamp = options.timestamp || this.defaultEmbed.timestamp;
        let watermark = this.defaultEmbed.watermark || null,

        let embed = new Discord.MessageEmbed();
        if (title) embed.setTitle(title);
        if (description) embed.setDescription(description);
        if (options.watermark && this.defaultEmbed.watermark) embed.setDescription(`${embed.description}\n\n${watermark ? `\n\n${watermark}` : ""}`)
        if (color) {
            embed.setColor(color);
        } else embed.setColor("#FF0000");
        if(header) embed.setDescription(`${options.header}${embed.description}`);
        if (footer) embed.setFooter(footer, footerImage ? footerImage : null);
        if (author) embed.setAuthor(author, authorImage ? authorImage : null);
        if (thumbnail) embed.setThumbnail(thumbnail);
        if (image) embed.setImage(image);
        if (url) embed.setURL(url);
        if (fields) embed.addFields(fields);
        if (timestamp) embed.setTimestamp();
        return embed;
    }

    /**
     * Create Embed Pages easily using this util function
     * @param {Discord.Client} client Your Discord.Client()
     * @param {Discord.Message} message your Discord.Message()
     * @param {Array} array Array of information to arrange in pages
     * @param {Object} options Object of extra options
     */

    static async createEmbedPages(client, message, array, options = { emojis: {} }) {
        options.emojis = options.emojis ? options.emojis : {}
        options.buttonText = options.buttonText ? options.buttonText : {}
        let title = options.title || null,
            header = options.header || this.defaultEmbed.header || null,
            color = options.color || this.defaultEmbed.color || "#0000ff",
            args = options.args || false,
            joinBy = options.joinBy || "\n",
            perpage = options.perpage || 5,
            image = options.image || null,
            thumbnail = options.thumbnail || this.defaultEmbed.thumbnail || null,
            footer = options.footer || this.defaultEmbed.footer || client.user.username,
            footerImage = options.footerImage || this.defaultEmbed.footerImage || client.user.displayAvatarURL(),
            author = options.author || this.defaultEmbed.author || null,
            authorImage = options.authorImage || this.defaultEmbed.authorImage || null,
            timestamp = options.timestamp || this.defaultEmbed.timestamp || null,
            buttons = options.buttons || false,
            watermark = this.defaultEmbed.watermark || null,
            user = options.user || message.member.user;

        let forward = options.emojis.forward || "▶",
            backward = options.emojis.backward || "◀",
            end = options.emojis.delete || "🗑",
            firstPage = options.emojis.first || "⏪",
            lastPage = options.emojis.last || "⏩";

        let buttonNext = options.buttonText.next || "Next",
            buttonPrev = options.buttonText.previous || "Previous",
            buttonEnd = options.buttonText.delete || "Delete",
            buttonFirst = options.buttonText.first || "First",
            buttonLast = options.buttonText.last || "Last"

        let pageno = parseInt(args) ? args : 1;
        parseInt(args) <= Math.ceil(array.length / perpage) ? pageno : pageno = 1;

        let first = !isNaN(parseInt(args)) ? perpage * (parseInt(pageno) - 1) : 0;
        let second = !isNaN(parseInt(args)) ? perpage * parseInt(pageno) : perpage;

        const embed = new Discord.MessageEmbed();
        embed.setColor(color)
        embed.setDescription(`${header ? `${header}` : ""}${array.slice(first, second).join(joinBy)}`);
        if (options.watermark && watermark) embed.setDescription(`${embed.description}\n\n${watermark ? `\n\n${watermark}` : ""}`);
        if (title) embed.setTitle(title)
        if (thumbnail) embed.setThumbnail(thumbnail)
        embed.setFooter(`${footer} | Page: ${pageno}/${Math.ceil(array.length / perpage)}`, footerImage)
        if (timestamp) embed.setTimestamp();
        if (author) embed.setAuthor(author, authorImage)
        if (image) embed.setImage(image);

        let starting = new Discord.MessageButton()
            .setCustomId("starting")
            .setLabel(buttonFirst)
            .setStyle("PRIMARY");

        let back = new Discord.MessageButton()
            .setCustomId("back")
            .setLabel(buttonPrev)
            .setStyle("SECONDARY");

        let next = new Discord.MessageButton()
            .setCustomId("next")
            .setLabel(buttonNext)
            .setStyle("SECONDARY");

        let ending = new Discord.MessageButton()
            .setCustomId("ending")
            .setLabel(buttonLast)
            .setStyle("PRIMARY");

        let stoppage = new Discord.MessageButton()
            .setCustomId("stoppage")
            .setLabel(buttonEnd)
            .setStyle("DANGER");

        let msg;
        if (array.length < perpage && !buttons) {
            msg = await message.channel.send({ embeds: [embed] });
        } else if (array.length > perpage && buttons) {
            msg = await message.channel.send({ components: [new Discord.MessageActionRow().addComponents([starting, back, next, ending, stoppage])], embeds: [embed] });
        } else {
            msg = await message.channel.send({ embeds: [embed] });
        }

        if (array.length > perpage) {
            if (!buttons) {
                await msg.react(backward);
                await msg.react(forward);
                await msg.react(firstPage);
                await msg.react(lastPage);
                await msg.react(end);

                const collector = msg.createReactionCollector({ filter: (reaction, member) => member.id === user.id,
                    time: 120000
                });
                collector.on('collect', async (r) => {
                    const reactionadd = array.slice(first + perpage, second + perpage).length;
                    const reactionremove = array.slice(first - perpage, second - perpage).length;

                    if (r.emoji.name === forward && reactionadd !== 0) {
                        pageno++
                        r.users.remove(message.member.user.id);

                        first += perpage;
                        second += perpage;
                        embed.setDescription(`${header ? `${header}` : ""}${array.slice(first, second).join(joinBy)}${watermark ? `\n\n${watermark}` : ""}`);
                        embed.setFooter(`${footer} | Page: ${pageno}/${Math.ceil(array.length / perpage)}`, footerImage);
                        msg.edit({ embed: embed });
                    } else if (r.emoji.name === backward && reactionremove !== 0) {
                        r.users.remove(message.member.user.id);
                        pageno--
                        first -= perpage;
                        second -= perpage;
                        embed.setDescription(`${header ? `${header}` : ""}${array.slice(first, second).join(joinBy)}${watermark ? `\n\n${watermark}` : ""}`);
                        embed.setFooter(`${footer} | Page: ${pageno}/${Math.ceil(array.length / perpage)}`, footerImage);
                        msg.edit({ embed: embed })
                    } else if (r.emoji.name === firstPage) {
                        r.users.remove(message.member.user.id);
                        pageno = 1;
                        first = 0;
                        second = perpage;
                        embed.setDescription(`${header ? `${header}` : ""}${array.slice(first, second).join(joinBy)}${watermark ? `\n\n${watermark}` : ""}`);
                        embed.setFooter(`${footer} | Page: ${pageno}/${Math.ceil(array.length / perpage)}`, footerImage);
                        msg.edit({ embed: embed })
                    } else if (r.emoji.name === lastPage) {
                        r.users.remove(message.member.user.id);
                        pageno = Math.ceil(array.length / perpage);
                        first = (pageno * perpage) - perpage;
                        second = pageno * perpage;
                        embed.setDescription(`${header ? `${header}` : ""}${array.slice(first, second).join(joinBy)}${watermark ? `\n\n${watermark}` : ""}`);
                        embed.setFooter(`${footer} | Page: ${pageno}/${Math.ceil(array.length / perpage)}`, footerImage);
                        msg.edit({ embed: embed })
                    } else if (r.emoji.name === end) {
                        await msg.delete();
                    }
                });
                collector.on('end', (_, reason) => {
                    if (reason === "time") msg.reactions.removeAll();
                })
            } else {
                const filter = (button) => button.user.id === message.member.user.id;
                const collector = await msg.channel.createMessageComponentCollector({ filter,  time: 120000 });
                collector.on("collect", async (button) => {
                    await button.deferUpdate();
                    const reactionadd = array.slice(first + perpage, second + perpage).length;
                    const reactionremove = array.slice(first - perpage, second - perpage).length;
                    if (button.customId === "starting") {
                        pageno = 1;
                        first = 0;
                        second = perpage;
                        embed.setDescription(`${header ? `${header}` : ""}${array.slice(first, second).join(joinBy)}${watermark ? `\n\n${watermark}` : ""}`);
                        embed.setFooter(`${footer} | Page: ${pageno}/${Math.ceil(array.length / perpage)}`, footerImage);
                        msg.edit({ components: [new Discord.MessageActionRow().addComponents([starting, back, next, ending, stoppage])], embeds: [embed] })
                    } else if (button.customId === "back" && reactionremove !== 0) {
                        pageno--
                        first -= perpage;
                        second -= perpage;
                        embed.setDescription(`${header ? `${header}` : ""}${array.slice(first, second).join(joinBy)}${watermark ? `\n\n${watermark}` : ""}`);
                        embed.setFooter(`${footer} | Page: ${pageno}/${Math.ceil(array.length / perpage)}`, footerImage);
                        msg.edit({ components: [new Discord.MessageActionRow().addComponents([starting, back, next, ending, stoppage])], embeds: [embed] })
                    } else if (button.customId === "next" && reactionadd !== 0) {
                        pageno++
                        first += perpage;
                        second += perpage;
                        embed.setDescription(`${header ? `${header}` : ""}${array.slice(first, second).join(joinBy)}${watermark ? `\n\n${watermark}` : ""}`);
                        embed.setFooter(`${footer} | Page: ${pageno}/${Math.ceil(array.length / perpage)}`, footerImage);
                        msg.edit({ components: [new Discord.MessageActionRow().addComponents([starting, back, next, ending, stoppage])], embeds: [embed] })
                    } else if (button.customId === "ending") {
                        pageno = Math.ceil(array.length / perpage);
                        first = (pageno * perpage) - perpage;
                        second = pageno * perpage;
                        embed.setDescription(`${header ? `${header}` : ""}${array.slice(first, second).join(joinBy)}${watermark ? `\n\n${watermark}` : ""}`);
                        embed.setFooter(`${footer} | Page: ${pageno}/${Math.ceil(array.length / perpage)}`, footerImage);
                        msg.edit({ components: [new Discord.MessageActionRow().addComponents([starting, back, next, ending, stoppage])], embeds: [embed] })
                    } else if (button.customId === "stoppage") {
                        await msg.delete();
                    }
                });
                collector.on("end", async (collected) => {
                    try {
                        await msg.edit({ embeds: [embed], components: [] })
                    } catch (error) {
                    }
                })
            }
        }
    }

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━▲━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // ━━━━━━━━━━━━━━━━━━ MONGOOSE FUNCTION ━━━━━━━━━━━━━━━━━━
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━▼━━━━━━━━━━━━━━━━━━━━━━━━━━━



    /**
     * Connect to your MongoDB database/Cluster
     * @param {String} url Your MongoDB Connection URI
     * @returns Promise Connection to your MongoDB database
     */

    static mongoConnect(url) {
        return mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    }

    /**
     * Search for a specific database in MongoDB
     * @param {mongoose.Schema} schema mongoose.Schema to search in
     * @param {Object} options Object to search schema for.
     * @returns Data
     */

    static async mongoFind(schema, options) {
        let data = await schema.findOne(options).catch(e => {
            throw new TypeError("Something went wrong:", e)
        })
        if (!data) return false;
        return data;
    }

    /**
     * Save a collection in database of MongoDB
     * @param {mongoose.Collection} data data you want to save
     * @returns Boolean? true if data was saved else false if there were errors
     */

    static async mongoSave(data) {
        try {
            await data.save().catch(e => {
                throw new TypeError("Something went wrong:", e)
            })
        } catch (error) {
            throw new TypeError("Something went wrong:", error)
        }
        return true;
    }

    /**
     * Update a collection in your MongoDB database.
     * @param {mongoose.Schema} schema Your schema to uodate the data in.
     * @param {Object} options Search collection options
     * @param {Object} value Data to change.
     * @returns Boolean true if success, false if failed
     */

    static async mongoUpdate(schema, options, value) {
        try {
            await schema.updateOne(options, { "$set": value }).catch(e => {
                throw new TypeError("Something went wrong:", e)
            })
        } catch (error) {
            throw new TypeError("Something wet wrong:", error)
        }
        return true;
    }

    /**
     * Delete a database collection from a MongoDB database.
     * @param {mongoose.Collection} data Collection to delete
     * @returns Boolean true if success, false if failed
     */

    static async mongoDelete(data) {
        try {
            await data.delete().catch(e => {
                throw new TypeError("Something went wrong:", e)
            })
        } catch (error) {
            throw new TypeError("Something wet wrong:", error)
        }
        return true;
    }

    /**
     * Create a new Collection in your MongoDB database
     * @param {mongoose.Schema} schema Your schema to create a new collection in
     * @param {Object} options Options to save data which are not set default in Schema
     * @returns Boolean true if success, false if failed
     */

    static async mongoCreate(schema, options) {
        try {
            let newSchema = new schema(options);
            await newSchema.save().catch(e => {
                throw new TypeError("Something went wrong:", e)
            })
        } catch (error) {
            throw new TypeError("Something wet wrong:", error)
        }
        return true;
    }
}