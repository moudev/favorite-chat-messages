# One click Twitch message

Create collections of messages and send them with a single click.

## Development

Execute the two commands at the same time on different consoles.

In a console build the files and watch the changes:

```bash
npm run dev
```

In another console to serve the files:

```bash
npm run serve
```

Install [tampermonkey](https://www.tampermonkey.net/) plugin and create a new script:

```javascript
// ==UserScript==
// @name         One Click Twitch Message
// @description  Create collections of messages and send them with a single click.
// @version      0.0.1
// @match        https://*.twitch.tv/*
// @grant        none
// ==/UserScript==

(function oneClickTwitchMessage() {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'http://127.0.0.1:5173/one-click-twitch-message.js';
    const head = document.getElementsByTagName('head')[0];
    if (!head) return;
    head.appendChild(script);

    const style = document.createElement("link")
    style.rel="stylesheet"
    style.href="http://127.0.0.1:5173/one-click-twitch-message.css"
    head.appendChild(style);
})()
```
