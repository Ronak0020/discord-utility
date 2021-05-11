<div align="center">
    <p>
        <a href="https://nodei.co/npm/utils-discord/"><img src="https://nodei.co/npm/utils-discord.png?downloads=true&stars=true" alt="npm installnfo" /></a>
    </p>
</div>


# Discord-Utility
A package containing some basic and common yet important and useful utility functions such as Shuffle Array, Remove Duplicates, Verification, etc.
#### This module is still in development. If you encounter any bugs, feel free to open an issue ticket in github.

### Introduction
`utils-discord` is a module especially made for discord.js bot development to make the development easy by providing important utility functions premade. utils-discord is easy to use and makes your code become shorter and easy to make.

### Features
- Easy to use
- Tons of premade functions to implement in your code easily
- Includes Mongoose functions. Make bot using MongoDB easily
- Functions are customizable such as `DiscordUtility.reactMessage()`. You can use emoji you want.
- Support always available!

### Functions List
* [DiscordUtility.delay()](#discordutilitydelay)
* [DiscordUtility.shorten()](#discordutilityshorten)
* [DiscordUtility.randomNumber()](#discordutilityrandomNumber)
* [DiscordUtility.trimArray()](#discordutilitytrimarray)
* [DiscordUtility.shuffleArray()](#discordutilityshufflearray)
* [DiscordUtility.removeDuplicates()](#discordutilityremoveDuplicates)
* [DiscordUtility.list()](#discordutilitylist)
* [DiscordUtility.sortByName()](#discordutilitysortbyname)
* [DiscordUtility.firstUpperCase()](#discordutilityfirstuppercase)
* [DiscordUtility.formatNumber()](#discordutilityformatnumber)
* [DiscordUtility.base64()](#discordutilitybase64)
* [DiscordUtility.createHash()](#discordutilitycreatehash)
* [DiscordUtility.verify()](#discordutilityverify)
* [DiscordUtility.reactMessage()](#discordutilityreactmessage)
* [DiscordUtility.awaitPlayers()](#discordutilityawaitplayers)
* [DiscordUtility.formatBytes()](#discordutilityformatbytes)
* [DiscordUtility.promptMessage()](#discordutilitypromptmessage)
* [DiscordUtility.getMember()](#discordutilitygetmember)
* [DiscordUtility.getUser()](#discordutilitygetuser)
* [DiscordUtility.createId()](#discordutilitycreateid)
* [DiscordUtility.generateRoman()](#discordutilitygenerateroman)
* [DiscordUtility.generateNumeral()](#discordutilitygeneratenumeral)
* [DiscordUtility.figlet()](#discordutilityfiglet)
* [DiscordUtility.uptime()](#discordutilityuptime)

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
| mode | String | Optional. Whether to "encode" or "decode". Default: "encode" |

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

# More Information Will Be released soon. Please Be Patient. Thank you!
