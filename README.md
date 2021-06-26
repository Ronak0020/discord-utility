<div align="center">
    <p>
        <a href="https://nodei.co/npm/utils-discord/"><img src="https://nodei.co/npm/utils-discord.png?downloads=true&stars=true" alt="npm installnfo" /></a>
    </p>
  <p>
    <a href="https://www.npmjs.com/package/utils-discord"><img src="https://img.shields.io/npm/v/utils-discord.svg?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/discord.js"><img src="https://img.shields.io/npm/dt/utils-discord.svg?maxAge=3600" alt="NPM downloads" /></a>
  </p>
</div>

# Discord-Utility

A package containing some basic and common yet important and useful utility functions such as Shuffle Array, Remove Duplicates, Verification, etc.

#### This module is still in development. If you encounter any bugs, feel free to open an issue ticket in github

### Introduction

`utils-discord` is a module especially made for discord.js bot development to make the development easy by providing important utility functions premade. utils-discord is easy to use and makes your code become shorter and easier to make bots.

### Updates (Last few updates)
- Added parameter `trim: false` in `formatTime()` (check below)
- Added `getChannel()` and `getRole()`
- Added Buttons Text customizations (check `createEmbedPages()`)
- Added **Watermark** for embeds
- Added `DiscordUtility.formatTime()`
- Added buttons support for embed pages (check `DiscordUtility.createEmbedPages()`)

### Features

- Easy to use
- Supports discord buttons
- Tons of premade functions to implement in your code easily
- Includes Mongoose functions. Make bot using MongoDB easily
- Functions are customizable such as `DiscordUtility.createEmbedPages()`. You can use emoji you want for navigation.
- Support always available!

### Functions List

- [DiscordUtility.setWatermark()](#discordutilitysetwatermark)
- [DiscordUtility.delay()](#discordutilitydelay)
- [DiscordUtility.shorten()](#discordutilityshorten)
- [DiscordUtility.randomNumber()](#discordutilityrandomNumber)
- [DiscordUtility.trimArray()](#discordutilitytrimarray)
- [DiscordUtility.shuffleArray()](#discordutilityshufflearray)
- [DiscordUtility.removeDuplicates()](#discordutilityremoveDuplicates)
- [DiscordUtility.list()](#discordutilitylist)
- [DiscordUtility.sortByName()](#discordutilitysortbyname)
- [DiscordUtility.firstUpperCase()](#discordutilityfirstuppercase)
- [DiscordUtility.formatNumber()](#discordutilityformatnumber)
- [DiscordUtility.base64()](#discordutilitybase64)
- [DiscordUtility.createHash()](#discordutilitycreatehash)
- [DiscordUtility.verify()](#discordutilityverify)
- [DiscordUtility.reactMessage()](#discordutilityreactmessage)
- [DiscordUtility.awaitPlayers()](#discordutilityawaitplayers)
- [DiscordUtility.formatBytes()](#discordutilityformatbytes)
- [DiscordUtility.promptMessage()](#discordutilitypromptmessage)
- [DiscordUtility.getMember()](#discordutilitygetmember)
- [DiscordUtility.getChannel()](#discordutilitygetchannel)
- [DiscordUtility.getRole()](#discordutilitygetrole)
- [DiscordUtility.getUser()](#discordutilitygetuser)
- [DiscordUtility.createId()](#discordutilitycreateid)
- [DiscordUtility.generateRoman()](#discordutilitygenerateroman)
- [DiscordUtility.generateNumeral()](#discordutilitygeneratenumeral)
- [DiscordUtility.figlet()](#discordutilityfiglet)
- [DiscordUtility.formatDays()](#discordutilityformatdays)
- [DiscordUtility.formatTime()](#discordutilityformattime)
- [DiscordUtility.generateEmbed()](#discordutilitygenerateembed)
- [DiscordUtility.createEmbedPages()](#discordutilitycreateembedpages)
- [DiscordUtility.mongoConnect()](#discordutilitymongoconnect)
- [DiscordUtility.mongoFind()](#discordutilitymongofind)
- [DiscordUtility.mongoSave()](#discordutilitymongosave)
- [DiscordUtility.mongoDelete()](#discordutilitymongodelete)
- [DiscordUtility.mongoUpdate()](#discordutilitymongoupdate)
- [DiscordUtility.mongoCreate()](#discordutilitymongocreate)

## Usage

### Installation

```npm install utils-discord --save```

### Use

```js
const DiscordUtility = require("utils-discord");
```

### Methods

#### DiscordUtility.setWatermark()

| Parameter | Type | Description |
| --- | --- | --- |
| string | String | Watermark text to add in all the embeds generated using Discordutility.generateEmbed() OR DiscordUtility.createEmbedPages() (check them below) |

##### Example

```js
DiscordUtility.setWatermark("[Support Server](link) | [Invite Me](link)");
// return Promise
```
**Note: You need to use this function only once in main file. The watermark text limit is 100 characters. If not set, it will not disply watermark**

#### DiscordUtility.delay()

| Parameter | Type | Description |
| --- | --- | --- |
| time | Number | Amount of time in milliseconds to delay a function |

##### Example

```js
await DiscordUtility.delay(1000);
// return Promise
```

#### DiscordUtility.shorten()

| Parameter | Type | Description |
| --- | --- | --- |
| text | String | The text you want to shorten |
| maxLen | Number | Maximum length of text to return. Default: 2000 |

##### Example

```js
let string = "Hello! This is an example code to explain the use of `DiscordUtility.shorten()` method!"
DiscordUtility.shorten(string, 15);
// returns "Hello! This is ..."
```

#### DiscordUtility.randomNumber()

| Parameter | Type | Description |
| --- | --- | --- |
| min | Number | Minimum number to generate |
| max | Number | Maximum number to generate |

##### Example

```js
DiscordUtility.randomNumber(10, 15);
// returns 13
```

#### DiscordUtility.trimArray()

| Parameter | Type | Description |
| --- | --- | --- |
| array | Array | Array to trim |
| maxLen | Number | Maximum length of array to return |

##### Example

```js
let array = ["element1", "element2", "element3", "element4", "element5", "element6", "element7", "element8"]
DiscordUtility.trimArray(array, 5);
// returns ["element1", "element2", "element3", "element4", "element5"]
```

#### DiscordUtility.shuffleArray()

| Parameter | Type | Description |
| --- | --- | --- |
| array | Array | Array to shuffle |

##### Example

```js
let array = ["element1", "element2", "element3", "element4", "element5", "element6", "element7", "element8"]
DiscordUtility.shuffleArray(array, 5);
// returns ["element7", "element3", "element1", "element8", "element6", "element4", "element2", "element5"]
```

#### DiscordUtility.removeDuplicates()

| Parameter | Type | Description |
| --- | --- | --- |
| array | Array | Array to remove duplicate elements from |

##### Example

```js
let array = ["element1", "element1", "element2", "element3", "element4", "element4", "element4", "element5"]
DiscordUtility.removeDuplicates(array);
// returns ["element1", "element2", "element3", "element4", "element5"]
```

#### DiscordUtility.list()

| Parameter | Type | Description |
| --- | --- | --- |
| array | Array | Array to shuffle |
| conj | String | Conjuction to join last two elements with. Default: "and" |

##### Example

```js
let array = ["element1", "element2", "element3", "element4", "element5", "element6", "element7", "element8"]
DiscordUtility.list(array, "lastly");
// returns "element1, element2, element3, element4, element5, element6, element7 lastly element8"
```

#### DiscordUtility.sortByName()

| Parameter | Type | Description |
| --- | --- | --- |
| array | Array | Array to sort element of |

##### Example

```js
let array = ["Shander", "Luffy", "Kaneki", "Ronak"]
DiscordUtility.sortByName(array);
// returns ["Kaneki", "Luffy", "Ronak", "Shander"]
```

#### DiscordUtility.firstUpperCase()

| Parameter | Type | Description |
| --- | --- | --- |
| text | String | String to convert each word's first letter UPPERCASE |
| split | String | Optional. Split the string to convert word's first letter UPPERCASE Default: " " |

##### Example

```js
let string = "this is a test string";
//If you want to convert elemtns of array to uppercase
//Change the "string" value to <Array>.join(" ");
DiscordUtility.firstUpperCase(string);
// returns "This Is A Test String"
```

#### DiscordUtility.formatNumber()

| Parameter | Type | Description |
| --- | --- | --- |
| number | Number | Number to format |
| minimumFractionDigits | Number | Optional. Minimum fraction digits to format to. Default: 2 |

##### Example

```js
let number = 2967.5779;
DiscordUtility.formatNumber(number);
// returns 2967.58
//To get more decimal digits, simply add the number of digits you want after "number" DiscordUtility.formatNumber(number, 4)
//(for 4 decimal digits)
```

#### DiscordUtility.base64()

| Parameter | Type | Description |
| --- | --- | --- |
| text | String | text to convert in base64 format. |
| mode | String | Optional. Whether to "encode" or "decode". Default: "encode" |

##### Example

```js
let string = "My name is ronak";
DiscordUtility.base64(string);
//returns "TXkgbmFtZSBpcyByb25haw=="

//To decode
let decodeString = "TXkgbmFtZSBpcyByb25haw==";
DiscordUtility.base64(decodeString, "decode");
//returns "My name is ronak"
```

#### DiscordUtility.createHash()

| Parameter | Type | Description |
| --- | --- | --- |
| text | String | text to convert in base64 format. |
| algorithm | String | What algorythm to use for the conversion |

##### Example

```js
let string = "Password";
DiscordUtility.createHash(string, "sha256");
//returns "e7cf3ef4f17c3999a94f2c6f612e8a888e5b1026878e4e19398b23bd38ec221a"
```

#### DiscordUtility.verify()

| Parameter | Type | Description |
| --- | --- | --- |
| channel | Discord.Message | Channel to create verification in. |
| user | Discord.User | Discord.User who is needs to verify. |
| options | Object | Optional. Desired time for the verification to last, extra "yes" and "no" (Array) |

##### Example

```js
let channel = message.channel;
let user = message.mentions.users.first();

DiscordUtility.verify(channel, user);
//returns true (If user sends "yes/y/ye/yeah") else false (if user sends "no/n/nah" or time ends)
```

#### DiscordUtility.reactMessage()

| Parameter | Type | Description |
| --- | --- | --- |
| message | Discord.Message | Message to react on. |
| user | Discord.ClientUser | Discord.ClientUser. |
| emoji | String | Emoji to react with |
| fallbackEmoji | String | Optional. Fall back emoji, if main emoji not found, react with it. Default: "✅" |

##### Example

```js
let message = await message.channel.messages.fetch("message-id");
let user = client.user;
let emoji = "custom-emoji-id";

DiscordUtility.reactMessage(message, user, emoji);
//returns Promise<MessageReaction>
```

#### DiscordUtility.awaitPlayers()

| Parameter | Type | Description |
| --- | --- | --- |
| msg | Discord.Message | Your Discord.Message |
| join | String | String that will be used for joining the queue |
| emoji | String | Emoji to react with once a user has been allowed to join the queue |
| max | Number | Maximum number of users that can join a queue |
| min | Number | Optional. Minimum number of users required for the queue. Default: 1 |

##### Example

```js
let msg = message;
let join = "join game";
let emoji = "custom-emoji-id";
let max = 5

DiscordUtility.awaitPlayers(msg, join, emoji, max);
//returns false (if not reached the minimum player req) else Array of player IDs who have joined.
```

#### DiscordUtility.formatBytes()

| Parameter | Type | Description |
| --- | --- | --- |
| bytes | Number | Byte to format. |

##### Example

```js
let bytes = 1537693;
DiscordUtility.formatBytes(bytes);
// returns "1.47 MB"
```

#### DiscordUtility.promptMessage()

| Parameter | Type | Description |
| --- | --- | --- |
| message | Discord.Message | Discord.Message. |
| author | Discord.User | Author of message OR who needs to verify. |
| time | Number | Time the verification will last for in SECONDS |
| validReactions | Array | Array of reactions to create verifications for. |

##### Example

```js
let message = message;
let author = message.author;
let time = 30;
let validReactions = ["✅", "❌"];

DiscordUtility.promptMessage(message, author, time, validReactions).then(async(emoji) => {
    if(emoji === ""✅) {
        //do something
    } else if(emoji === "❌") {
        //do something
    }
});
//returns emoji the AUTHOR reacted with
```

#### DiscordUtility.getMember()

| Parameter | Type | Description |
| --- | --- | --- |
| message | Discord.Message | Discord.Message. |
| toFind | String | Find member with this data. |

##### Example

```js
let toFind = message.content; //Use your "args" if you have defined that.
DiscordUtility.getMember(message, toFind);
//returns Discord.GuildMember
```

#### DiscordUtility.getChannel()

| Parameter | Type | Description |
| --- | --- | --- |
| message | Discord.Message | Discord.Message. |
| toFind | String | Find channel with this data. |

##### Example

```js
let toFind = message.content; //Use your "args" if you have defined that.
DiscordUtility.getChannel(message, toFind);
//returns Discord.GuildChannel
```

#### DiscordUtility.getRole()

| Parameter | Type | Description |
| --- | --- | --- |
| message | Discord.Message | Discord.Message. |
| toFind | String | Find role with this data. |

##### Example

```js
let toFind = message.content; //Use your "args" if you have defined that.
DiscordUtility.getRole(message, toFind);
//returns Discord.Role
```

#### DiscordUtility.getUser()

| Parameter | Type | Description |
| --- | --- | --- |
| client | Discord.Client | Your bot client. |
| message | Discord.Message | Discord.Message. |
| toFind | String | Find member with this data. |

##### Example

```js
let client = new Discord.Client();
let message = message;
let toFind = message.content.slice(prefix.length).trim().split(" ").slice(1).join(" "); //Use your "args" if you have defined that.
DiscordUtility.getUser(client, message, toFind);
//returns Discord.User
```

#### DiscordUtility.createId()

| Parameter | Type | Description |
| --- | --- | --- |
| length | Number | Optional. The length of id. Default: 4 |

##### Example

```js
DiscordUtility.makeId()
//returns "g5a8"
```

#### DiscordUtility.generateRoman()

| Parameter | Type | Description |
| --- | --- | --- |
| num | Number | Number to convert into roman digits |

##### Example

```js
DiscordUtility.generateRoman(20)
//returns "XX"
```

#### DiscordUtility.generateNumeral()

| Parameter | Type | Description |
| --- | --- | --- |
| roman | String | Roman Number to convert into arabic digits |

##### Example

```js
DiscordUtility.generateNumeral("XLII")
//returns 42
```

#### DiscordUtility.figlet()

| Parameter | Type | Description |
| --- | --- | --- |
| string | String | String to convert into Figlet text |

##### Example

```js
DiscordUtility.figlet("Ronak")
//returns 42
```

#### DiscordUtility.formatDays()

| Parameter | Type | Description |
| --- | --- | --- |
| unicode | Number | Duration unicode to convert into Days, Hours, Minutes and seconds |

##### Example

```js
DiscordUtility.formatDays(264860372)
//returns "3 days, 1 hours, 34 minutes and 20 seconds"
```

#### DiscordUtility.formatTime()

| Parameter | Type | Description |
| --- | --- | --- |
| milliseconds | Number | Duration ms to format |
| trim | Boolean | Optional. Whether to trim the duration and remove duration equal to 0 or not. Default: false |
| format | String | Optional. Format type. Default: "h:mm:ss" |

##### Example

```js
DiscordUtility.formatTime(60000)
//returns "0:01:00"

//When trim is true:
DiscordUtility.formatTime(60000, true)
//returns "01:00"
```

#### DiscordUtility.generateEmbed()

| Parameter | Type | Description |
| --- | --- | --- |
| options | Object | Object containing all the embed data |

##### Example

```js
let options = {
    title: "A title",
    description: "A desscription for the embed",
    footer: client.user.username,
    footerImage: client.user.displayAvatarURL()
    color: "#0000ff",
    watermark: true //A watermark text must be set using `DiscordUtility.setWatermark()` in main file of the bot.
}
let embed = DiscordUtility.generateEmbed(options);
message.channel.send(embed);
//returns Discord.MessageEmbed
```

#### DiscordUtility.createEmbedPages()

| Parameter | Type | Description |
| --- | --- | --- |
| client | Discord.Client | Your Discord.js Client |
| message | Discord.Message | Your discord.js Message |
| array | Array | Array of data that need to be converted into pages |
| options | Object | Optional. Object containing all the embed pages data |

##### Example

```js
require("discord-buttons")(client) //Must be done in your main file (usually index.js)
//If you want to use buttons in embed.
//Make sure to install discord buttons using `npm install discord-buttons`


let options = {
    title: "A title",
    footer: client.user.username,
    footerImage: client.user.displayAvatarURL()
    color: "#efc67a",
    args: message.content.split(" ")[1],
    buttons: true, //only if you want to use buttons instead of reactions. else, leave it.
    // IF YOU WANT TO CHANGE EMOJIS
    emojis: {
        forward: "👉"
    }
    //Read below for all emojis options
}
let array = ["element1", "element2", "element3", "element4", "element5", "element6", "element7", "element8"];
Utils.createEmbedPages(client, message, array, options)
//returns Discord.MessageEmbed

// ======== Default Options for embed =========
// null means Not set.
options.buttons = false //make it true to use buttons instead of reactions for page navigation
options.watermark = false //Use `DiscordUtility.setWatermark()` in main file to set a watermark and view in embeds if this is true
options.title = null, //embed.title
options.color = "#0000ff", //embed.color
options.args = null, //Whether to use numbers for page navigation or not. To enable, replace "null" with the argument of the message
options.joinBy = "\n", //How to join the arrays in embed
options.perpage = 5, //How many elements to show perpage
options.image = null, //embed.image (will be visible in all embed pages)
options.thumbnail = null, //embed.thumbnail imageURL
options.footer = client.user.username, //embed.footer
options.footerImage = client.user.displayAvatarURL(), //embed.footer imageURL
options.author = null, //embed.author
options.authorImage = null, //embed.author imageURL
options.timestamp = null, //Whether to view Timestamp in embed. true/false
options.user = message.author; //User who will be able to react
// ========== EMOJIS ==========
options.emojis.forward = "▶", //Emojis used to navigate to next page
options.emojis.backward = "◀", //Emojis used to navigate to previous page
options.emojis.delete = "🗑", //Emojis used to delete the embed pages message
options.emojis.first = "⏪", //Emojis used to navigate to first page
options.emojis.last = "⏩" //Emojis used to navigate to last page
// =========== Button Text ===========
options.buttonText.next = "Next",
options.buttonText.previous = "Previous",
options.buttonText.first = "First",
options.buttonText.last = "Last",
options.buttonText.delete = "Delete",
```

### Basic Mongoose Utils

#### DiscordUtility.mongoConnect()

| Parameter | Type | Description |
| --- | --- | --- |
| url | String | Your mongoDB URI |

##### Example

```js
DiscordUtility.mongoConnect("mongodb://Username:Password@PORT")
//returns Promise mongoose.connect()
```

#### DiscordUtility.mongoFind()

| Parameter | Type | Description |
| --- | --- | --- |
| schema | Mongoose.Schema | Your mongoDB Schema |
| options | Object | Data you want to find in database. |

##### Example

```js
const Schema = new mongoose.Schema({
    guildID: {type: String},
    prefix: {type: String, default: "!"}
});
const guildSchema = mongoose.model("guildConfig", Schema);

DiscordUtility.mongoFind(guildSchema, {guildID: "1234567890"})
//returns Data
```

#### DiscordUtility.mongoSave()

| Parameter | Type | Description |
| --- | --- | --- |
| data | Mongoose.Collection | Your mongoDB Schema data |

##### Example

```js
const Schema = new mongoose.Schema({
    guildID: {type: String},
    prefix: {type: String, default: "!"}
});
const guildSchema = mongoose.model("guildConfig", Schema);

let data = await DiscordUtility.mongoFind(guildSchema, {guildID: "1234567890"});
data.prefix = "?";
DiscordUtility.mongoSave(data);
//returns Promise
```

#### DiscordUtility.mongoDelete()

| Parameter | Type | Description |
| --- | --- | --- |
| data | Mongoose.Collection | Your mongoDB Schema data |

##### Example

```js
const Schema = new mongoose.Schema({
    guildID: {type: String},
    prefix: {type: String, default: "!"}
});
const guildSchema = mongoose.model("guildConfig", Schema);

let data = await DiscordUtility.mongoFind(guildSchema, {guildID: "1234567890"});
DiscordUtility.mongoDelete(data);
//returns Promise
```

#### DiscordUtility.mongoUpdate()

| Parameter | Type | Description |
| --- | --- | --- |
| schema | Mongoose.Schema | Your mongoDB Schema |
| options | Object | Options to search a datadabse for |
| value | Object | Values to change. |

##### Example

```js
const Schema = new mongoose.Schema({
    guildID: {type: String},
    prefix: {type: String, default: "!"},
    data: {type: Object, default: {messages: 1, date: Date.now(), author: "Rem"}}
});
const guildSchema = mongoose.model("guildConfig", Schema);

let data = await DiscordUtility.mongoFind(guildSchema, {guildID: "1234567890"});
let options = {guildID: "1234567890"};
let value = {"data.messages": 2};
DiscordUtility.mongoUpdate(data, options, value);
//returns Promise
```

#### DiscordUtility.mongoCreate()

| Parameter | Type | Description |
| --- | --- | --- |
| schema | Mongoose.Schema | Your mongoDB Schema |
| options | Object | Options to create the database. |

##### Example

```js
const Schema = new mongoose.Schema({
    guildID: {type: String},
    prefix: {type: String, default: "!"}
});
const guildSchema = mongoose.model("guildConfig", Schema);

let data = await DiscordUtility.mongoFind(guildSchema, {guildID: "1234567890"});
if(!data) { //If the database for the server is not available
    data = await DiscordUtility.mongoCreate(guildSchema, {guildID: "1234567890"});
}
//returns Promise
```

## Support

If you are facing any issues or if you have found a bug in this package, feel free to open an issue in the github repository. [Click Here](https://github.com/Ronak0020/discord-utility/issues)
You can contribute to this package. Feel free to create a pull request
You can also reach out to me through discord. My user tag is -> **♡ Rem ♡#2135**
