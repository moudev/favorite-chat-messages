# Favorite chat messages

Firefox plugin. Save your favorite messages and send them with one click to the Twitch chat.

Based on [betterttv](https://github.com/night/betterttv) plugin.

## Development

Install [tampermonkey](https://www.tampermonkey.net/) plugin in your Firefox browser and create a new script:

```javascript
// ==UserScript==
// @name         Favorite chat messages
// @description  Create a collection of favorite messages and send them with only one click
// @version      0.0.1
// @match        https://*.twitch.tv/*
// @grant        none
// ==/UserScript==

(function FavoriteChatMessages() {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'http://127.0.0.1:5173/favorite-chat-messages.js';
    const head = document.getElementsByTagName('head')[0];
    if (!head) return;
    head.appendChild(script);

    const style = document.createElement("link")
    style.rel="stylesheet"
    style.href="http://127.0.0.1:5173/favorite-chat-messages.css"
    head.appendChild(style);
})()
```

### Dev server

This command does the build with webpack and then serves the files. Files specified in the tampermonkey script. When you make a change it's necessary to reload the chat. Webpack does the build automatically when you make a change.

```bash
npm run dev
```

## Scripts

### build:pre-firefox

Webpack builds the javascript files and saves them in the src/build directory. These files are packed in the final firefox plugin build. This command only creates the build of the files.

```bash
npm run build:pre-firefox
```

### build:firefox

Command to create the plugin file. Make sure before executing this command, execute the `build:pre-firefox` script to use the recent version of the javascript files.

```bash
npm run build:firefox
```

### publish

This command executes `build:pre-firefox` and `build:firefox` in one step.

```bash
npm run publish
```

## Lint

```bash
npm run lint
```

```bash
npm run lint:fix
```

## Screenshots

![favorite-messages-1](https://user-images.githubusercontent.com/13499566/208272152-a6d32291-c368-42a0-8a4c-52d184dc077a.PNG)

</br>

![favorite-messages-options](https://user-images.githubusercontent.com/13499566/208272150-908ddc14-5de5-46e9-b11f-a51be6a8a257.PNG)