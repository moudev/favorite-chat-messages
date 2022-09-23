# One click Twitch message

Create collections of messages and send them with a single click.

## Development

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
    script.src = 'http://127.0.0.1:5173/one-click-twitch-message.umd.js';
    const head = document.getElementsByTagName('head')[0];
    if (!head) return;
    head.appendChild(script);
})()
```
