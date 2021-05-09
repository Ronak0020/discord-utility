# Discord-Utility
A package containing some basic and common yet important and useful utility functions such as Shuffle Array, Remove Duplicates, Verification, etc.
#### This module is still n development. If you encounter any bugs, feel free to open an issue ticket in github.

### Introdiction
`utils-discord` is a module especially made for discord.js bot development to make the development easy by providing important utility functions premade. utils-discord is easy to use and makes your code become shorter and easy to make.

### Fatures
- Easy to use
- Tons of premade functions to implement in your code easily
- Includes Mongoose functions. Make bot using MongoDB easily
- Functions are customizable such as `DiscordUtility.reactMessage()`. You can use emoji you want.
- Support always available!

### Functions List
* [DiscordUtility.delay()](https://github.com/Ronak0020/discord-utility#discordutilitydelay)
* [DiscordUtility.shorten()](https://github.com/Ronak0020/discord-utility#shorten)
* [DiscordUtility.randomNumber()](https://github.com/Ronak0020/discord-utility#randomNumber)
* [DiscordUtility.trimArray()](https://github.com/Ronak0020/discord-utility#trimarray)
* [DiscordUtility.shuffleArray()](https://github.com/Ronak0020/discord-utility#shufflearray)
* [DiscordUtility.removeDuplicates()](https://github.com/Ronak0020/discord-utility#removeDuplicates)
* [DiscordUtility.list()](https://github.com/Ronak0020/discord-utility#list)
* [DiscordUtility.sortByName()](https://github.com/Ronak0020/discord-utility#sortbyname)
* [DiscordUtility.firstUpperCase()](https://github.com/Ronak0020/discord-utility#firstuppercase)
* [DiscordUtility.formatNumber()](https://github.com/Ronak0020/discord-utility#formatnumber)
* [DiscordUtility.base64()](https://github.com/Ronak0020/discord-utility#base64)
* [DiscordUtility.createHash()](https://github.com/Ronak0020/discord-utility#createhash)
* [DiscordUtility.verify()](https://github.com/Ronak0020/discord-utility#verify)
* [DiscordUtility.reactMessage()](https://github.com/Ronak0020/discord-utility#reactmessage)
* [DiscordUtility.awaitPlayers()](https://github.com/Ronak0020/discord-utility#awaitplayers)
* [DiscordUtility.formatBytes()](https://github.com/Ronak0020/discord-utility#formatbytes)
* [DiscordUtility.promptMessage()](https://github.com/Ronak0020/discord-utility#promptmessage)
* [DiscordUtility.getMember()](https://github.com/Ronak0020/discord-utility#getmember)
* [DiscordUtility.getUser()](https://github.com/Ronak0020/discord-utility#getuser)
* [DiscordUtility.createId()](https://github.com/Ronak0020/discord-utility#createid)
* [DiscordUtility.generateRoman()](https://github.com/Ronak0020/discord-utility#generateroman)
* [DiscordUtility.generateNumeral()](https://github.com/Ronak0020/discord-utility#generatenumeral)
* [DiscordUtility.figlet()](https://github.com/Ronak0020/discord-utility#figlet)
* [DiscordUtility.uptime()](https://github.com/Ronak0020/discord-utility#uptime)

## Usage
### Installation
```npm install utils-discord --save```

### Use
```js
const DiscordUtility = require("utils-discord");
```

### Methods
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