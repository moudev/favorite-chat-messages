import { getCurrentTwitchEmotes, getCurrentChannelInformation } from "./twitch"

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

  const emotes = {}

  global
    .concat(channel)
    .forEach((emote) => {
      emotes[emote.code] = {
        id: emote.id,
        provider: "betterttv",
        code: emote.code,
        type: emote.imageType,
        url: `https://cdn.betterttv.net/emote/${emote.id}/1x`
      }
    })

  return emotes
}

async function getFrankerfacezGlobalEmotes() {
  // https://github.com/night/betterttv/blob/7.4.40/src/modules/frankerfacez/global-emotes.js#L34
  const res = await fetch("https://api.betterttv.net/3/cached/frankerfacez/emotes/global")
  const emotes = await res.json()

  return emotes
}

async function getFrankerfacezCurrentChannelEmotes(userId) {
  // https://github.com/night/betterttv/blob/7.4.40/src/modules/frankerfacez/channel-emotes.js#L35
  const res = await fetch(`https://api.betterttv.net/3/cached/frankerfacez/users/twitch/${userId}`)
  const emotes = await res.json()

  return emotes
}

async function getFrankerfacezEmotes(userId) {
  const global = await getFrankerfacezGlobalEmotes()
  const channel = await getFrankerfacezCurrentChannelEmotes(userId)

  const emotes = {}

  global
    .concat(channel)
    .forEach((emote) => {
      emotes[emote.code] = {
        id: emote.id,
        provider: "frankerfacez",
        code: emote.code,
        type: emote.imageType,
        url: `https://cdn.betterttv.net/frankerfacez_emote/${emote.id}/1`
      }
    })

  return emotes
}

async function getAllEmotes() {
  const { channelID } = getCurrentChannelInformation()

  let emotes = {}

  const twitch = getCurrentTwitchEmotes()

  emotes = {
    ...twitch
  }

  // https://github.com/night/betterttv/blob/7.4.40/src/index.js#L29
  if (window.BetterTTV || window.__betterttv) {
    const betterttv = await getBetterttvEmotes(channelID)
    const frankerfacez = await getFrankerfacezEmotes(channelID)

    emotes = {
      ...emotes,
      ...betterttv,
      ...frankerfacez
    }
  }

  return emotes
}

export { getBetterttvEmotes, getFrankerfacezEmotes, getAllEmotes }