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
* [DiscordUtility.delay()](https://github.com/Ronak0020/discord-utility#discordutilitydelay)
* [DiscordUtility.shorten()](https://github.com/Ronak0020/discord-utility#discordutilityshorten)
* [DiscordUtility.randomNumber()](https://github.com/Ronak0020/discord-utility#discordutilityrandomNumber)
* [DiscordUtility.trimArray()](https://github.com/Ronak0020/discord-utility#discordutilitytrimarray)
* [DiscordUtility.shuffleArray()](https://github.com/Ronak0020/discord-utility#discordutilityshufflearray)
* [DiscordUtility.removeDuplicates()](https://github.com/Ronak0020/discord-utility#discordutilityremoveDuplicates)
* [DiscordUtility.list()](https://github.com/Ronak0020/discord-utility#discordutilitylist)
* [DiscordUtility.sortByName()](https://github.com/Ronak0020/discord-utility#discordutilitysortbyname)
* [DiscordUtility.firstUpperCase()](https://github.com/Ronak0020/discord-utility#discordutilityfirstuppercase)
* [DiscordUtility.formatNumber()](https://github.com/Ronak0020/discord-utility#discordutilityformatnumber)
* [DiscordUtility.base64()](https://github.com/Ronak0020/discord-utility#discordutilitybase64)
* [DiscordUtility.createHash()](https://github.com/Ronak0020/discord-utility#discordutilitycreatehash)
* [DiscordUtility.verify()](https://github.com/Ronak0020/discord-utility#discordutilityverify)
* [DiscordUtility.reactMessage()](https://github.com/Ronak0020/discord-utility#discordutilityreactmessage)
* [DiscordUtility.awaitPlayers()](https://github.com/Ronak0020/discord-utility#discordutilityawaitplayers)
* [DiscordUtility.formatBytes()](https://github.com/Ronak0020/discord-utility#discordutilityformatbytes)
* [DiscordUtility.promptMessage()](https://github.com/Ronak0020/discord-utility#discordutilitypromptmessage)
* [DiscordUtility.getMember()](https://github.com/Ronak0020/discord-utility#discordutilitygetmember)
* [DiscordUtility.getUser()](https://github.com/Ronak0020/discord-utility#discordutilitygetuser)
* [DiscordUtility.createId()](https://github.com/Ronak0020/discord-utility#discordutilitycreateid)
* [DiscordUtility.generateRoman()](https://github.com/Ronak0020/discord-utility#discordutilitygenerateroman)
* [DiscordUtility.generateNumeral()](https://github.com/Ronak0020/discord-utility#discordutilitygeneratenumeral)
* [DiscordUtility.figlet()](https://github.com/Ronak0020/discord-utility#discordutilityfiglet)
* [DiscordUtility.uptime()](https://github.com/Ronak0020/discord-utility#discordutilityuptime)

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
DiscordUtility.shuffleArray(array, 5);
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
DiscordUtility.shuffleArray(array, 5);
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

# More Information Will Be released soon. Please Be Patient. Thank you!