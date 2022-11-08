import twemoji from "twemoji"

function manageLocalStorage(action = "get", data = null, key = "twitch-messages") {
  if (action === "get") {
    const result = localStorage.getItem(key)
    return JSON.parse(result ? result : "[]")
  } else if(action === "set") {  
    return localStorage.setItem(key, JSON.stringify(data))
  }
}

function renderEmoji(charCode) {
  // https://github.com/night/betterttv/blob/7.4.40/src/modules/emotes/emojis.js#L48
  const emoji = twemoji.parse(charCode, {
    folder: 'svg',
    ext: '.svg',
    callback: (icon, options) => {
      if (icon.length === 0) {
        return false;
      }

      switch (icon) {
        case 'a9': // ©
        case 'ae': // ®
        case '2122': // ™
          return false;
        default:
          break;
      }

      return false;
    },
  })

  return emoji
}

export { manageLocalStorage, renderEmoji }
