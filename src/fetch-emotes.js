async function getBetterttvGlobalEmotes() {
  // https://github.com/night/betterttv/blob/7.4.40/src/modules/emotes/global-emotes.js#L26
  const res = await fetch("https://api.betterttv.net/3/cached/emotes/global")
  const emotes = await res.json()

  return emotes
}

async function getBetterttvCurrentChannelEmotes(userId) {
  // https://github.com/night/betterttv/blob/7.4.40/src/watchers/channel.js#L15  
  const res = await fetch(`https://api.betterttv.net/3/cached/users/twitch/${userId}`)
  const emotes = await res.json()

  return []
    .concat(emotes.sharedEmotes)
    .concat(emotes.channelEmotes)
}

async function getBetterttvEmotes(userId) {
  const global = await getBetterttvGlobalEmotes()
  const channel = await getBetterttvCurrentChannelEmotes(userId)

  return []
    .concat(global)
    .concat(channel)
}

export { getBetterttvGlobalEmotes, getBetterttvCurrentChannelEmotes, getBetterttvEmotes }