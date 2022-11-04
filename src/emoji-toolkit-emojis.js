// file created based in json file: https://github.com/joypixels/emoji-toolkit/blob/7.0.0/emoji.json
/**
// https://github.com/night/betterttv/blob/7.4.40/src/modules/emotes/emojis.js
// https://github.com/night/betterttv/blob/7.4.40/webpack.config.js#L227
function convertEmojiToolkitCodePointToChar(codePoint) {
  if (codePoint.includes('-')) {
    return codePoint
      .split('-')
      .map((subCodePoint) => convertEmojiToolkitCodePointToChar(subCodePoint))
      .join('');
  }

  const charCode = parseInt(codePoint, 16);
  if (charCode >= 0x10000 && charCode <= 0x10ffff) {
    const high = Math.floor((charCode - 0x10000) / 0x400) + 0xd800;
    const low = ((charCode - 0x10000) % 0x400) + 0xdc00;
    return String.fromCharCode(high) + String.fromCharCode(low);
  }

  return String.fromCharCode(charCode);
}

function jsonTransform(emojis) {
  const result = {};

  for (const emojiData of Object.values(emojis)) {
    const char = convertEmojiToolkitCodePointToChar(emojiData.code_points.fully_qualified);
    const data = {
      char,
      slug: emojiData.shortname.replace(/:/g, ''),
      category: emojiData.category,
    };

    result[data.slug] = data;

    for (const alternativeShortName of emojiData.shortname_alternates) {
      // :tf: is a legacy betterttv global emote
      if (alternativeShortName === ':tf:') {
        continue;
      }

      result[alternativeShortName.replace(/:/g, '')] = {
        ...data,
        isAlternative: true,
      };
    }
  }

  return result;
}

// EMOJIS
const result = jsonTransform(emotes)
 */

const emojis = {
  "100": { "char": "💯", "slug": "100", "category": "symbols" },
  "1234": { "char": "🔢", "slug": "1234", "category": "symbols" },
  "interrobang": { "char": "⁉️", "slug": "interrobang", "category": "symbols" },
  "tm": { "char": "™️", "slug": "tm", "category": "symbols" },
  "trade_mark": {
    "char": "™️",
    "slug": "tm",
    "category": "symbols",
    "isAlternative": true
  },
  "information_source": {
    "char": "ℹ️",
    "slug": "information_source",
    "category": "symbols"
  },
  "information": {
    "char": "ℹ️",
    "slug": "information_source",
    "category": "symbols",
    "isAlternative": true
  },
  "left_right_arrow": {
    "char": "↔️",
    "slug": "left_right_arrow",
    "category": "symbols"
  },
  "arrow_up_down": {
    "char": "↕️",
    "slug": "arrow_up_down",
    "category": "symbols"
  },
  "up_down_arrow": {
    "char": "↕️",
    "slug": "arrow_up_down",
    "category": "symbols",
    "isAlternative": true
  },
  "arrow_upper_left": {
    "char": "↖️",
    "slug": "arrow_upper_left",
    "category": "symbols"
  },
  "up_left_arrow": {
    "char": "↖️",
    "slug": "arrow_upper_left",
    "category": "symbols",
    "isAlternative": true
  },
  "arrow_upper_right": {
    "char": "↗️",
    "slug": "arrow_upper_right",
    "category": "symbols"
  },
  "arrow_lower_right": {
    "char": "↘️",
    "slug": "arrow_lower_right",
    "category": "symbols"
  },
  "arrow_lower_left": {
    "char": "↙️",
    "slug": "arrow_lower_left",
    "category": "symbols"
  },
  "keyboard": { "char": "⌨️", "slug": "keyboard", "category": "objects" },
  "sunny": { "char": "☀️", "slug": "sunny", "category": "nature" },
  "sun": {
    "char": "☀️",
    "slug": "sunny",
    "category": "nature",
    "isAlternative": true
  },
  "cloud": { "char": "☁️", "slug": "cloud", "category": "nature" },
  "umbrella2": { "char": "☂️", "slug": "umbrella2", "category": "nature" },
  "snowman2": { "char": "☃️", "slug": "snowman2", "category": "nature" },
  "comet": { "char": "☄️", "slug": "comet", "category": "nature" },
  "ballot_box_with_check": {
    "char": "☑️",
    "slug": "ballot_box_with_check",
    "category": "symbols"
  },
  "umbrella": { "char": "☔", "slug": "umbrella", "category": "nature" },
  "coffee": { "char": "☕", "slug": "coffee", "category": "food" },
  "hot_beverage": {
    "char": "☕",
    "slug": "coffee",
    "category": "food",
    "isAlternative": true
  },
  "shamrock": { "char": "☘️", "slug": "shamrock", "category": "nature" },
  "skull_crossbones": {
    "char": "☠️",
    "slug": "skull_crossbones",
    "category": "people"
  },
  "skull_and_crossbones": {
    "char": "☠️",
    "slug": "skull_crossbones",
    "category": "people",
    "isAlternative": true
  },
  "radioactive": { "char": "☢️", "slug": "radioactive", "category": "symbols" },
  "radioactive_sign": {
    "char": "☢️",
    "slug": "radioactive",
    "category": "symbols",
    "isAlternative": true
  },
  "biohazard": { "char": "☣️", "slug": "biohazard", "category": "symbols" },
  "biohazard_sign": {
    "char": "☣️",
    "slug": "biohazard",
    "category": "symbols",
    "isAlternative": true
  },
  "orthodox_cross": {
    "char": "☦️",
    "slug": "orthodox_cross",
    "category": "symbols"
  },
  "wheel_of_dharma": {
    "char": "☸️",
    "slug": "wheel_of_dharma",
    "category": "symbols"
  },
  "frowning2": { "char": "☹️", "slug": "frowning2", "category": "people" },
  "white_frowning_face": {
    "char": "☹️",
    "slug": "frowning2",
    "category": "people",
    "isAlternative": true
  },
  "frowning_face": {
    "char": "☹️",
    "slug": "frowning2",
    "category": "people",
    "isAlternative": true
  },
  "female_sign": { "char": "♀️", "slug": "female_sign", "category": "symbols" },
  "male_sign": { "char": "♂️", "slug": "male_sign", "category": "symbols" },
  "aries": { "char": "♈", "slug": "aries", "category": "symbols" },
  "taurus": { "char": "♉", "slug": "taurus", "category": "symbols" },
  "sagittarius": { "char": "♐", "slug": "sagittarius", "category": "symbols" },
  "capricorn": { "char": "♑", "slug": "capricorn", "category": "symbols" },
  "aquarius": { "char": "♒", "slug": "aquarius", "category": "symbols" },
  "pisces": { "char": "♓", "slug": "pisces", "category": "symbols" },
  "spades": { "char": "♠️", "slug": "spades", "category": "symbols" },
  "spade_suit": {
    "char": "♠️",
    "slug": "spades",
    "category": "symbols",
    "isAlternative": true
  },
  "clubs": { "char": "♣️", "slug": "clubs", "category": "symbols" },
  "club_suit": {
    "char": "♣️",
    "slug": "clubs",
    "category": "symbols",
    "isAlternative": true
  },
  "hearts": { "char": "♥️", "slug": "hearts", "category": "symbols" },
  "heart_suit": {
    "char": "♥️",
    "slug": "hearts",
    "category": "symbols",
    "isAlternative": true
  },
  "diamonds": { "char": "♦️", "slug": "diamonds", "category": "symbols" },
  "diamond_suit": {
    "char": "♦️",
    "slug": "diamonds",
    "category": "symbols",
    "isAlternative": true
  },
  "hotsprings": { "char": "♨️", "slug": "hotsprings", "category": "symbols" },
  "hot_springs": {
    "char": "♨️",
    "slug": "hotsprings",
    "category": "symbols",
    "isAlternative": true
  },
  "hammer_pick": { "char": "⚒️", "slug": "hammer_pick", "category": "objects" },
  "hammer_and_pick": {
    "char": "⚒️",
    "slug": "hammer_pick",
    "category": "objects",
    "isAlternative": true
  },
  "anchor": { "char": "⚓", "slug": "anchor", "category": "travel" },
  "crossed_swords": {
    "char": "⚔️",
    "slug": "crossed_swords",
    "category": "objects"
  },
  "medical_symbol": {
    "char": "⚕️",
    "slug": "medical_symbol",
    "category": "symbols"
  },
  "scales": { "char": "⚖️", "slug": "scales", "category": "objects" },
  "balance_scale": {
    "char": "⚖️",
    "slug": "scales",
    "category": "objects",
    "isAlternative": true
  },
  "alembic": { "char": "⚗️", "slug": "alembic", "category": "objects" },
  "gear": { "char": "⚙️", "slug": "gear", "category": "objects" },
  "scissors": { "char": "✂️", "slug": "scissors", "category": "objects" },
  "white_check_mark": {
    "char": "✅",
    "slug": "white_check_mark",
    "category": "symbols"
  },
  "airplane": { "char": "✈️", "slug": "airplane", "category": "travel" },
  "envelope": { "char": "✉️", "slug": "envelope", "category": "objects" },
  "black_nib": { "char": "✒️", "slug": "black_nib", "category": "objects" },
  "heavy_check_mark": {
    "char": "✔️",
    "slug": "heavy_check_mark",
    "category": "symbols"
  },
  "check_mark": {
    "char": "✔️",
    "slug": "heavy_check_mark",
    "category": "symbols",
    "isAlternative": true
  },
  "heavy_multiplication_x": {
    "char": "✖️",
    "slug": "heavy_multiplication_x",
    "category": "symbols"
  },
  "star_of_david": {
    "char": "✡️",
    "slug": "star_of_david",
    "category": "symbols"
  },
  "sparkles": { "char": "✨", "slug": "sparkles", "category": "nature" },
  "eight_spoked_asterisk": {
    "char": "✳️",
    "slug": "eight_spoked_asterisk",
    "category": "symbols"
  },
  "eight_pointed_black_star": {
    "char": "✴️",
    "slug": "eight_pointed_black_star",
    "category": "symbols"
  },
  "snowflake": { "char": "❄️", "slug": "snowflake", "category": "nature" },
  "sparkle": { "char": "❇️", "slug": "sparkle", "category": "symbols" },
  "question": { "char": "❓", "slug": "question", "category": "symbols" },
  "question_mark": {
    "char": "❓",
    "slug": "question",
    "category": "symbols",
    "isAlternative": true
  },
  "grey_question": {
    "char": "❔",
    "slug": "grey_question",
    "category": "symbols"
  },
  "grey_exclamation": {
    "char": "❕",
    "slug": "grey_exclamation",
    "category": "symbols"
  },
  "exclamation": { "char": "❗", "slug": "exclamation", "category": "symbols" },
  "heart_exclamation": {
    "char": "❣️",
    "slug": "heart_exclamation",
    "category": "symbols"
  },
  "heavy_heart_exclamation_mark_ornament": {
    "char": "❣️",
    "slug": "heart_exclamation",
    "category": "symbols",
    "isAlternative": true
  },
  "heart": { "char": "❤️", "slug": "heart", "category": "symbols" },
  "red_heart": {
    "char": "❤️",
    "slug": "heart",
    "category": "symbols",
    "isAlternative": true
  },
  "heavy_plus_sign": {
    "char": "➕",
    "slug": "heavy_plus_sign",
    "category": "symbols"
  },
  "heavy_minus_sign": {
    "char": "➖",
    "slug": "heavy_minus_sign",
    "category": "symbols"
  },
  "heavy_division_sign": {
    "char": "➗",
    "slug": "heavy_division_sign",
    "category": "symbols"
  },
  "arrow_heading_up": {
    "char": "⤴️",
    "slug": "arrow_heading_up",
    "category": "symbols"
  },
  "arrow_heading_down": {
    "char": "⤵️",
    "slug": "arrow_heading_down",
    "category": "symbols"
  },
  "wavy_dash": { "char": "〰️", "slug": "wavy_dash", "category": "symbols" },
  "congratulations": {
    "char": "㊗️",
    "slug": "congratulations",
    "category": "symbols"
  },
  "secret": { "char": "㊙️", "slug": "secret", "category": "symbols" },
  "grinning": { "char": "😀", "slug": "grinning", "category": "people" },
  "grinning_face": {
    "char": "😀",
    "slug": "grinning",
    "category": "people",
    "isAlternative": true
  },
  "smiley": { "char": "😃", "slug": "smiley", "category": "people" },
  "smile": { "char": "😄", "slug": "smile", "category": "people" },
  "grin": { "char": "😁", "slug": "grin", "category": "people" },
  "laughing": { "char": "😆", "slug": "laughing", "category": "people" },
  "satisfied": {
    "char": "😆",
    "slug": "laughing",
    "category": "people",
    "isAlternative": true
  },
  "face_holding_back_tears": {
    "char": "🥹",
    "slug": "face_holding_back_tears",
    "category": "people"
  },
  "sweat_smile": { "char": "😅", "slug": "sweat_smile", "category": "people" },
  "joy": { "char": "😂", "slug": "joy", "category": "people" },
  "rofl": { "char": "🤣", "slug": "rofl", "category": "people" },
  "rolling_on_the_floor_laughing": {
    "char": "🤣",
    "slug": "rofl",
    "category": "people",
    "isAlternative": true
  },
  "smiling_face_with_tear": {
    "char": "🥲",
    "slug": "smiling_face_with_tear",
    "category": "people"
  },
  "relaxed": { "char": "☺️", "slug": "relaxed", "category": "people" },
  "smiling_face": {
    "char": "☺️",
    "slug": "relaxed",
    "category": "people",
    "isAlternative": true
  },
  "blush": { "char": "😊", "slug": "blush", "category": "people" },
  "innocent": { "char": "😇", "slug": "innocent", "category": "people" },
  "slight_smile": {
    "char": "🙂",
    "slug": "slight_smile",
    "category": "people"
  },
  "slightly_smiling_face": {
    "char": "🙂",
    "slug": "slight_smile",
    "category": "people",
    "isAlternative": true
  },
  "upside_down": { "char": "🙃", "slug": "upside_down", "category": "people" },
  "upside_down_face": {
    "char": "🙃",
    "slug": "upside_down",
    "category": "people",
    "isAlternative": true
  },
  "wink": { "char": "😉", "slug": "wink", "category": "people" },
  "winking_face": {
    "char": "😉",
    "slug": "wink",
    "category": "people",
    "isAlternative": true
  },
  "relieved": { "char": "😌", "slug": "relieved", "category": "people" },
  "relieved_face": {
    "char": "😌",
    "slug": "relieved",
    "category": "people",
    "isAlternative": true
  },
  "heart_eyes": { "char": "😍", "slug": "heart_eyes", "category": "people" },
  "smiling_face_with_3_hearts": {
    "char": "🥰",
    "slug": "smiling_face_with_3_hearts",
    "category": "people"
  },
  "kissing_heart": {
    "char": "😘",
    "slug": "kissing_heart",
    "category": "people"
  },
  "kissing": { "char": "😗", "slug": "kissing", "category": "people" },
  "kissing_face": {
    "char": "😗",
    "slug": "kissing",
    "category": "people",
    "isAlternative": true
  },
  "kissing_smiling_eyes": {
    "char": "😙",
    "slug": "kissing_smiling_eyes",
    "category": "people"
  },
  "kissing_closed_eyes": {
    "char": "😚",
    "slug": "kissing_closed_eyes",
    "category": "people"
  },
  "yum": { "char": "😋", "slug": "yum", "category": "people" },
  "stuck_out_tongue": {
    "char": "😛",
    "slug": "stuck_out_tongue",
    "category": "people"
  },
  "stuck_out_tongue_closed_eyes": {
    "char": "😝",
    "slug": "stuck_out_tongue_closed_eyes",
    "category": "people"
  },
  "stuck_out_tongue_winking_eye": {
    "char": "😜",
    "slug": "stuck_out_tongue_winking_eye",
    "category": "people"
  },
  "zany_face": { "char": "🤪", "slug": "zany_face", "category": "people" },
  "face_with_raised_eyebrow": {
    "char": "🤨",
    "slug": "face_with_raised_eyebrow",
    "category": "people"
  },
  "face_with_monocle": {
    "char": "🧐",
    "slug": "face_with_monocle",
    "category": "people"
  },
  "nerd": { "char": "🤓", "slug": "nerd", "category": "people" },
  "nerd_face": {
    "char": "🤓",
    "slug": "nerd",
    "category": "people",
    "isAlternative": true
  },
  "sunglasses": { "char": "😎", "slug": "sunglasses", "category": "people" },
  "disguised_face": {
    "char": "🥸",
    "slug": "disguised_face",
    "category": "people"
  },
  "star_struck": { "char": "🤩", "slug": "star_struck", "category": "people" },
  "partying_face": {
    "char": "🥳",
    "slug": "partying_face",
    "category": "people"
  },
  "smirk": { "char": "😏", "slug": "smirk", "category": "people" },
  "smirking_face": {
    "char": "😏",
    "slug": "smirk",
    "category": "people",
    "isAlternative": true
  },
  "unamused": { "char": "😒", "slug": "unamused", "category": "people" },
  "unamused_face": {
    "char": "😒",
    "slug": "unamused",
    "category": "people",
    "isAlternative": true
  },
  "disappointed": {
    "char": "😞",
    "slug": "disappointed",
    "category": "people"
  },
  "pensive": { "char": "😔", "slug": "pensive", "category": "people" },
  "pensive_face": {
    "char": "😔",
    "slug": "pensive",
    "category": "people",
    "isAlternative": true
  },
  "worried": { "char": "😟", "slug": "worried", "category": "people" },
  "worried_face": {
    "char": "😟",
    "slug": "worried",
    "category": "people",
    "isAlternative": true
  },
  "confused": { "char": "😕", "slug": "confused", "category": "people" },
  "confused_face": {
    "char": "😕",
    "slug": "confused",
    "category": "people",
    "isAlternative": true
  },
  "slight_frown": {
    "char": "🙁",
    "slug": "slight_frown",
    "category": "people"
  },
  "slightly_frowning_face": {
    "char": "🙁",
    "slug": "slight_frown",
    "category": "people",
    "isAlternative": true
  },
  "persevere": { "char": "😣", "slug": "persevere", "category": "people" },
  "confounded": { "char": "😖", "slug": "confounded", "category": "people" },
  "tired_face": { "char": "😫", "slug": "tired_face", "category": "people" },
  "weary": { "char": "😩", "slug": "weary", "category": "people" },
  "weary_face": {
    "char": "😩",
    "slug": "weary",
    "category": "people",
    "isAlternative": true
  },
  "pleading_face": {
    "char": "🥺",
    "slug": "pleading_face",
    "category": "people"
  },
  "cry": { "char": "😢", "slug": "cry", "category": "people" },
  "crying_face": {
    "char": "😢",
    "slug": "cry",
    "category": "people",
    "isAlternative": true
  },
  "sob": { "char": "😭", "slug": "sob", "category": "people" },
  "triumph": { "char": "😤", "slug": "triumph", "category": "people" },
  "angry": { "char": "😠", "slug": "angry", "category": "people" },
  "angry_face": {
    "char": "😠",
    "slug": "angry",
    "category": "people",
    "isAlternative": true
  },
  "rage": { "char": "😡", "slug": "rage", "category": "people" },
  "pouting_face": {
    "char": "😡",
    "slug": "rage",
    "category": "people",
    "isAlternative": true
  },
  "face_with_symbols_over_mouth": {
    "char": "🤬",
    "slug": "face_with_symbols_over_mouth",
    "category": "people"
  },
  "exploding_head": {
    "char": "🤯",
    "slug": "exploding_head",
    "category": "people"
  },
  "flushed": { "char": "😳", "slug": "flushed", "category": "people" },
  "flushed_face": {
    "char": "😳",
    "slug": "flushed",
    "category": "people",
    "isAlternative": true
  },
  "hot_face": { "char": "🥵", "slug": "hot_face", "category": "people" },
  "cold_face": { "char": "🥶", "slug": "cold_face", "category": "people" },
  "face_in_clouds": {
    "char": "😶‍🌫️",
    "slug": "face_in_clouds",
    "category": "people"
  },
  "scream": { "char": "😱", "slug": "scream", "category": "people" },
  "fearful": { "char": "😨", "slug": "fearful", "category": "people" },
  "fearful_face": {
    "char": "😨",
    "slug": "fearful",
    "category": "people",
    "isAlternative": true
  },
  "cold_sweat": { "char": "😰", "slug": "cold_sweat", "category": "people" },
  "disappointed_relieved": {
    "char": "😥",
    "slug": "disappointed_relieved",
    "category": "people"
  },
  "sweat": { "char": "😓", "slug": "sweat", "category": "people" },
  "hugging": { "char": "🤗", "slug": "hugging", "category": "people" },
  "hugging_face": {
    "char": "🤗",
    "slug": "hugging",
    "category": "people",
    "isAlternative": true
  },
  "thinking": { "char": "🤔", "slug": "thinking", "category": "people" },
  "thinking_face": {
    "char": "🤔",
    "slug": "thinking",
    "category": "people",
    "isAlternative": true
  },
  "face_with_peeking_eye": {
    "char": "🫣",
    "slug": "face_with_peeking_eye",
    "category": "people"
  },
  "face_with_hand_over_mouth": {
    "char": "🤭",
    "slug": "face_with_hand_over_mouth",
    "category": "people"
  },
  "face_with_open_eyes_and_hand_over_mouth": {
    "char": "🫢",
    "slug": "face_with_open_eyes_and_hand_over_mouth",
    "category": "people"
  },
  "saluting_face": {
    "char": "🫡",
    "slug": "saluting_face",
    "category": "people"
  },
  "shushing_face": {
    "char": "🤫",
    "slug": "shushing_face",
    "category": "people"
  },
  "melting_face": { "char": "🫠", "slug": "melting_face", "category": "people" },
  "lying_face": { "char": "🤥", "slug": "lying_face", "category": "people" },
  "liar": {
    "char": "🤥",
    "slug": "lying_face",
    "category": "people",
    "isAlternative": true
  },
  "no_mouth": { "char": "😶", "slug": "no_mouth", "category": "people" },
  "dotted_line_face": {
    "char": "🫥",
    "slug": "dotted_line_face",
    "category": "people"
  },
  "neutral_face": {
    "char": "😐",
    "slug": "neutral_face",
    "category": "people"
  },
  "face_with_diagonal_mouth": {
    "char": "🫤",
    "slug": "face_with_diagonal_mouth",
    "category": "people"
  },
  "expressionless": {
    "char": "😑",
    "slug": "expressionless",
    "category": "people"
  },
  "grimacing": { "char": "😬", "slug": "grimacing", "category": "people" },
  "rolling_eyes": {
    "char": "🙄",
    "slug": "rolling_eyes",
    "category": "people"
  },
  "face_with_rolling_eyes": {
    "char": "🙄",
    "slug": "rolling_eyes",
    "category": "people",
    "isAlternative": true
  },
  "hushed": { "char": "😯", "slug": "hushed", "category": "people" },
  "hushed_face": {
    "char": "😯",
    "slug": "hushed",
    "category": "people",
    "isAlternative": true
  },
  "frowning": { "char": "😦", "slug": "frowning", "category": "people" },
  "anguished": { "char": "😧", "slug": "anguished", "category": "people" },
  "open_mouth": { "char": "😮", "slug": "open_mouth", "category": "people" },
  "astonished": { "char": "😲", "slug": "astonished", "category": "people" },
  "yawning_face": {
    "char": "🥱",
    "slug": "yawning_face",
    "category": "people"
  },
  "sleeping": { "char": "😴", "slug": "sleeping", "category": "people" },
  "sleeping_face": {
    "char": "😴",
    "slug": "sleeping",
    "category": "people",
    "isAlternative": true
  },
  "drooling_face": {
    "char": "🤤",
    "slug": "drooling_face",
    "category": "people"
  },
  "drool": {
    "char": "🤤",
    "slug": "drooling_face",
    "category": "people",
    "isAlternative": true
  },
  "sleepy": { "char": "😪", "slug": "sleepy", "category": "people" },
  "sleepy_face": {
    "char": "😪",
    "slug": "sleepy",
    "category": "people",
    "isAlternative": true
  },
  "face_exhaling": {
    "char": "😮‍💨",
    "slug": "face_exhaling",
    "category": "people"
  },
  "dizzy_face": { "char": "😵", "slug": "dizzy_face", "category": "people" },
  "face_with_spiral_eyes": {
    "char": "😵‍💫",
    "slug": "face_with_spiral_eyes",
    "category": "people"
  },
  "zipper_mouth": {
    "char": "🤐",
    "slug": "zipper_mouth",
    "category": "people"
  },
  "zipper_mouth_face": {
    "char": "🤐",
    "slug": "zipper_mouth",
    "category": "people",
    "isAlternative": true
  },
  "woozy_face": { "char": "🥴", "slug": "woozy_face", "category": "people" },
  "nauseated_face": {
    "char": "🤢",
    "slug": "nauseated_face",
    "category": "people"
  },
  "sick": {
    "char": "🤢",
    "slug": "nauseated_face",
    "category": "people",
    "isAlternative": true
  },
  "face_vomiting": {
    "char": "🤮",
    "slug": "face_vomiting",
    "category": "people"
  },
  "sneezing_face": {
    "char": "🤧",
    "slug": "sneezing_face",
    "category": "people"
  },
  "sneeze": {
    "char": "🤧",
    "slug": "sneezing_face",
    "category": "people",
    "isAlternative": true
  },
  "mask": { "char": "😷", "slug": "mask", "category": "people" },
  "thermometer_face": {
    "char": "🤒",
    "slug": "thermometer_face",
    "category": "people"
  },
  "face_with_thermometer": {
    "char": "🤒",
    "slug": "thermometer_face",
    "category": "people",
    "isAlternative": true
  },
  "head_bandage": {
    "char": "🤕",
    "slug": "head_bandage",
    "category": "people"
  },
  "face_with_head_bandage": {
    "char": "🤕",
    "slug": "head_bandage",
    "category": "people",
    "isAlternative": true
  },
  "money_mouth": { "char": "🤑", "slug": "money_mouth", "category": "people" },
  "money_mouth_face": {
    "char": "🤑",
    "slug": "money_mouth",
    "category": "people",
    "isAlternative": true
  },
  "cowboy": { "char": "🤠", "slug": "cowboy", "category": "people" },
  "face_with_cowboy_hat": {
    "char": "🤠",
    "slug": "cowboy",
    "category": "people",
    "isAlternative": true
  },
  "smiling_imp": { "char": "😈", "slug": "smiling_imp", "category": "people" },
  "imp": { "char": "👿", "slug": "imp", "category": "people" },
  "japanese_ogre": {
    "char": "👹",
    "slug": "japanese_ogre",
    "category": "people"
  },
  "ogre": {
    "char": "👹",
    "slug": "japanese_ogre",
    "category": "people",
    "isAlternative": true
  },
  "japanese_goblin": {
    "char": "👺",
    "slug": "japanese_goblin",
    "category": "people"
  },
  "goblin": {
    "char": "👺",
    "slug": "japanese_goblin",
    "category": "people",
    "isAlternative": true
  },
  "clown": { "char": "🤡", "slug": "clown", "category": "people" },
  "clown_face": {
    "char": "🤡",
    "slug": "clown",
    "category": "people",
    "isAlternative": true
  },
  "poop": { "char": "💩", "slug": "poop", "category": "people" },
  "shit": {
    "char": "💩",
    "slug": "poop",
    "category": "people",
    "isAlternative": true
  },
  "hankey": {
    "char": "💩",
    "slug": "poop",
    "category": "people",
    "isAlternative": true
  },
  "poo": {
    "char": "💩",
    "slug": "poop",
    "category": "people",
    "isAlternative": true
  },
  "pile_of_poo": {
    "char": "💩",
    "slug": "poop",
    "category": "people",
    "isAlternative": true
  },
  "ghost": { "char": "👻", "slug": "ghost", "category": "people" },
  "skull": { "char": "💀", "slug": "skull", "category": "people" },
  "skeleton": {
    "char": "💀",
    "slug": "skull",
    "category": "people",
    "isAlternative": true
  },
  "alien": { "char": "👽", "slug": "alien", "category": "people" },
  "space_invader": {
    "char": "👾",
    "slug": "space_invader",
    "category": "people"
  },
  "alien_monster": {
    "char": "👾",
    "slug": "space_invader",
    "category": "people",
    "isAlternative": true
  },
  "robot": { "char": "🤖", "slug": "robot", "category": "people" },
  "robot_face": {
    "char": "🤖",
    "slug": "robot",
    "category": "people",
    "isAlternative": true
  },
  "jack_o_lantern": {
    "char": "🎃",
    "slug": "jack_o_lantern",
    "category": "people"
  },
  "smiley_cat": { "char": "😺", "slug": "smiley_cat", "category": "people" },
  "grinning_cat": {
    "char": "😺",
    "slug": "smiley_cat",
    "category": "people",
    "isAlternative": true
  },
  "smile_cat": { "char": "😸", "slug": "smile_cat", "category": "people" },
  "joy_cat": { "char": "😹", "slug": "joy_cat", "category": "people" },
  "heart_eyes_cat": {
    "char": "😻",
    "slug": "heart_eyes_cat",
    "category": "people"
  },
  "smirk_cat": { "char": "😼", "slug": "smirk_cat", "category": "people" },
  "kissing_cat": { "char": "😽", "slug": "kissing_cat", "category": "people" },
  "scream_cat": { "char": "🙀", "slug": "scream_cat", "category": "people" },
  "weary_cat": {
    "char": "🙀",
    "slug": "scream_cat",
    "category": "people",
    "isAlternative": true
  },
  "crying_cat_face": {
    "char": "😿",
    "slug": "crying_cat_face",
    "category": "people"
  },
  "crying_cat": {
    "char": "😿",
    "slug": "crying_cat_face",
    "category": "people",
    "isAlternative": true
  },
  "pouting_cat": { "char": "😾", "slug": "pouting_cat", "category": "people" },
  "heart_hands": { "char": "🫶", "slug": "heart_hands", "category": "people" },
  "heart_hands_tone1": {
    "char": "🫶🏻",
    "slug": "heart_hands_tone1",
    "category": "people"
  },
  "heart_hands_light_skin_tone": {
    "char": "🫶🏻",
    "slug": "heart_hands_tone1",
    "category": "people",
    "isAlternative": true
  },
  "heart_hands_tone2": {
    "char": "🫶🏼",
    "slug": "heart_hands_tone2",
    "category": "people"
  },
  "heart_hands_medium_light_skin_tone": {
    "char": "🫶🏼",
    "slug": "heart_hands_tone2",
    "category": "people",
    "isAlternative": true
  },
  "heart_hands_tone3": {
    "char": "🫶🏽",
    "slug": "heart_hands_tone3",
    "category": "people"
  },
  "heart_hands_medium_skin_tone": {
    "char": "🫶🏽",
    "slug": "heart_hands_tone3",
    "category": "people",
    "isAlternative": true
  },
  "heart_hands_tone4": {
    "char": "🫶🏾",
    "slug": "heart_hands_tone4",
    "category": "people"
  },
  "heart_hands_medium_dark_skin_tone": {
    "char": "🫶🏾",
    "slug": "heart_hands_tone4",
    "category": "people",
    "isAlternative": true
  },
  "heart_hands_tone5": {
    "char": "🫶🏿",
    "slug": "heart_hands_tone5",
    "category": "people"
  },
  "heart_hands_dark_skin_tone": {
    "char": "🫶🏿",
    "slug": "heart_hands_tone5",
    "category": "people",
    "isAlternative": true
  },
  "palms_up_together": {
    "char": "🤲",
    "slug": "palms_up_together",
    "category": "people"
  },
  "palms_up_together_tone1": {
    "char": "🤲🏻",
    "slug": "palms_up_together_tone1",
    "category": "people"
  },
  "palms_up_together_light_skin_tone": {
    "char": "🤲🏻",
    "slug": "palms_up_together_tone1",
    "category": "people",
    "isAlternative": true
  },
  "palms_up_together_tone2": {
    "char": "🤲🏼",
    "slug": "palms_up_together_tone2",
    "category": "people"
  },
  "palms_up_together_medium_light_skin_tone": {
    "char": "🤲🏼",
    "slug": "palms_up_together_tone2",
    "category": "people",
    "isAlternative": true
  },
  "palms_up_together_tone3": {
    "char": "🤲🏽",
    "slug": "palms_up_together_tone3",
    "category": "people"
  },
  "palms_up_together_medium_skin_tone": {
    "char": "🤲🏽",
    "slug": "palms_up_together_tone3",
    "category": "people",
    "isAlternative": true
  },
  "palms_up_together_tone4": {
    "char": "🤲🏾",
    "slug": "palms_up_together_tone4",
    "category": "people"
  },
  "palms_up_together_medium_dark_skin_tone": {
    "char": "🤲🏾",
    "slug": "palms_up_together_tone4",
    "category": "people",
    "isAlternative": true
  },
  "palms_up_together_tone5": {
    "char": "🤲🏿",
    "slug": "palms_up_together_tone5",
    "category": "people"
  },
  "palms_up_together_dark_skin_tone": {
    "char": "🤲🏿",
    "slug": "palms_up_together_tone5",
    "category": "people",
    "isAlternative": true
  },
  "open_hands": { "char": "👐", "slug": "open_hands", "category": "people" },
  "open_hands_tone1": {
    "char": "👐🏻",
    "slug": "open_hands_tone1",
    "category": "people"
  },
  "open_hands_tone2": {
    "char": "👐🏼",
    "slug": "open_hands_tone2",
    "category": "people"
  },
  "open_hands_tone3": {
    "char": "👐🏽",
    "slug": "open_hands_tone3",
    "category": "people"
  },
  "open_hands_tone4": {
    "char": "👐🏾",
    "slug": "open_hands_tone4",
    "category": "people"
  },
  "open_hands_tone5": {
    "char": "👐🏿",
    "slug": "open_hands_tone5",
    "category": "people"
  },
  "raised_hands": {
    "char": "🙌",
    "slug": "raised_hands",
    "category": "people"
  },
  "raising_hands": {
    "char": "🙌",
    "slug": "raised_hands",
    "category": "people",
    "isAlternative": true
  },
  "raised_hands_tone1": {
    "char": "🙌🏻",
    "slug": "raised_hands_tone1",
    "category": "people"
  },
  "raised_hands_tone2": {
    "char": "🙌🏼",
    "slug": "raised_hands_tone2",
    "category": "people"
  },
  "raised_hands_tone3": {
    "char": "🙌🏽",
    "slug": "raised_hands_tone3",
    "category": "people"
  },
  "raised_hands_tone4": {
    "char": "🙌🏾",
    "slug": "raised_hands_tone4",
    "category": "people"
  },
  "raised_hands_tone5": {
    "char": "🙌🏿",
    "slug": "raised_hands_tone5",
    "category": "people"
  },
  "clap": { "char": "👏", "slug": "clap", "category": "people" },
  "clap_tone1": { "char": "👏🏻", "slug": "clap_tone1", "category": "people" },
  "clap_tone2": { "char": "👏🏼", "slug": "clap_tone2", "category": "people" },
  "clap_tone3": { "char": "👏🏽", "slug": "clap_tone3", "category": "people" },
  "clap_tone4": { "char": "👏🏾", "slug": "clap_tone4", "category": "people" },
  "clap_tone5": { "char": "👏🏿", "slug": "clap_tone5", "category": "people" },
  "handshake": { "char": "🤝", "slug": "handshake", "category": "people" },
  "shaking_hands": {
    "char": "🤝",
    "slug": "handshake",
    "category": "people",
    "isAlternative": true
  },
  "handshake_tone1": {
    "char": "🤝🏻",
    "slug": "handshake_tone1",
    "category": "people"
  },
  "handshake_light_skin_tone": {
    "char": "🤝🏻",
    "slug": "handshake_tone1",
    "category": "people",
    "isAlternative": true
  },
  "handshake_tone1_tone2": {
    "char": "🫱🏻‍🫲🏼",
    "slug": "handshake_tone1_tone2",
    "category": "people"
  },
  "handshake_light_skin_tone_medium_light_skin_tone": {
    "char": "🫱🏻‍🫲🏼",
    "slug": "handshake_tone1_tone2",
    "category": "people",
    "isAlternative": true
  },
  "handshake_tone1_tone3": {
    "char": "🫱🏻‍🫲🏽",
    "slug": "handshake_tone1_tone3",
    "category": "people"
  },
  "handshake_light_skin_tone_medium_skin_tone": {
    "char": "🫱🏻‍🫲🏽",
    "slug": "handshake_tone1_tone3",
    "category": "people",
    "isAlternative": true
  },
  "handshake_tone1_tone4": {
    "char": "🫱🏻‍🫲🏾",
    "slug": "handshake_tone1_tone4",
    "category": "people"
  },
  "handshake_light_skin_tone_medium_dark_skin_tone": {
    "char": "🫱🏻‍🫲🏾",
    "slug": "handshake_tone1_tone4",
    "category": "people",
    "isAlternative": true
  },
  "handshake_tone1_tone5": {
    "char": "🫱🏻‍🫲🏿",
    "slug": "handshake_tone1_tone5",
    "category": "people"
  },
  "handshake_light_skin_tone_dark_skin_tone": {
    "char": "🫱🏻‍🫲🏿",
    "slug": "handshake_tone1_tone5",
    "category": "people",
    "isAlternative": true
  },
  "handshake_tone2_tone1": {
    "char": "🫱🏼‍🫲🏻",
    "slug": "handshake_tone2_tone1",
    "category": "people"
  },
  "handshake_medium_light_skin_tone_light_skin_tone": {
    "char": "🫱🏼‍🫲🏻",
    "slug": "handshake_tone2_tone1",
    "category": "people",
    "isAlternative": true
  },
  "handshake_tone2": {
    "char": "🤝🏼",
    "slug": "handshake_tone2",
    "category": "people"
  },
  "handshake_medium_light_skin_tone": {
    "char": "🤝🏼",
    "slug": "handshake_tone2",
    "category": "people",
    "isAlternative": true
  },
  "handshake_tone2_tone3": {
    "char": "🫱🏼‍🫲🏽",
    "slug": "handshake_tone2_tone3",
    "category": "people"
  },
  "handshake_medium_light_skin_tone_medium_skin_tone": {
    "char": "🫱🏼‍🫲🏽",
    "slug": "handshake_tone2_tone3",
    "category": "people",
    "isAlternative": true
  },
  "handshake_tone2_tone4": {
    "char": "🫱🏼‍🫲🏾",
    "slug": "handshake_tone2_tone4",
    "category": "people"
  },
  "handshake_medium_light_skin_tone_medium_dark_skin_tone": {
    "char": "🫱🏼‍🫲🏾",
    "slug": "handshake_tone2_tone4",
    "category": "people",
    "isAlternative": true
  },
  "handshake_tone2_tone5": {
    "char": "🫱🏼‍🫲🏿",
    "slug": "handshake_tone2_tone5",
    "category": "people"
  },
  "handshake_medium_light_skin_tone_dark_skin_tone": {
    "char": "🫱🏼‍🫲🏿",
    "slug": "handshake_tone2_tone5",
    "category": "people",
    "isAlternative": true
  },
  "handshake_tone3_tone1": {
    "char": "🫱🏽‍🫲🏻",
    "slug": "handshake_tone3_tone1",
    "category": "people"
  },
  "handshake_medium_skin_tone_light_skin_tone": {
    "char": "🫱🏽‍🫲🏻",
    "slug": "handshake_tone3_tone1",
    "category": "people",
    "isAlternative": true
  },
  "handshake_tone3_tone2": {
    "char": "🫱🏽‍🫲🏼",
    "slug": "handshake_tone3_tone2",
    "category": "people"
  },
  "handshake_medium_skin_tone_medium_light_skin_tone": {
    "char": "🫱🏽‍🫲🏼",
    "slug": "handshake_tone3_tone2",
    "category": "people",
    "isAlternative": true
  },
  "handshake_tone3": {
    "char": "🤝🏽",
    "slug": "handshake_tone3",
    "category": "people"
  },
  "handshake_medium_skin_tone": {
    "char": "🤝🏽",
    "slug": "handshake_tone3",
    "category": "people",
    "isAlternative": true
  },
  "handshake_tone3_tone4": {
    "char": "🫱🏽‍🫲🏾",
    "slug": "handshake_tone3_tone4",
    "category": "people"
  },
  "handshake_medium_skin_tone_medium_dark_skin_tone": {
    "char": "🫱🏽‍🫲🏾",
    "slug": "handshake_tone3_tone4",
    "category": "people",
    "isAlternative": true
  },
  "handshake_tone3_tone5": {
    "char": "🫱🏽‍🫲🏿",
    "slug": "handshake_tone3_tone5",
    "category": "people"
  },
  "handshake_medium_skin_tone_dark_skin_tone": {
    "char": "🫱🏽‍🫲🏿",
    "slug": "handshake_tone3_tone5",
    "category": "people",
    "isAlternative": true
  },
  "handshake_tone4_tone1": {
    "char": "🫱🏾‍🫲🏻",
    "slug": "handshake_tone4_tone1",
    "category": "people"
  },
  "handshake_medium_dark_skin_tone_light_skin_tone": {
    "char": "🫱🏾‍🫲🏻",
    "slug": "handshake_tone4_tone1",
    "category": "people",
    "isAlternative": true
  },
  "handshake_tone4_tone2": {
    "char": "🫱🏾‍🫲🏼",
    "slug": "handshake_tone4_tone2",
    "category": "people"
  },
  "handshake_medium_dark_skin_tone_medium_light_skin_tone": {
    "char": "🫱🏾‍🫲🏼",
    "slug": "handshake_tone4_tone2",
    "category": "people",
    "isAlternative": true
  },
  "handshake_tone4_tone3": {
    "char": "🫱🏾‍🫲🏽",
    "slug": "handshake_tone4_tone3",
    "category": "people"
  },
  "handshake_medium_dark_skin_tone_medium_skin_tone": {
    "char": "🫱🏾‍🫲🏽",
    "slug": "handshake_tone4_tone3",
    "category": "people",
    "isAlternative": true
  },
  "handshake_tone4": {
    "char": "🤝🏾",
    "slug": "handshake_tone4",
    "category": "people"
  },
  "handshake_medium_dark_skin_tone": {
    "char": "🤝🏾",
    "slug": "handshake_tone4",
    "category": "people",
    "isAlternative": true
  },
  "handshake_tone4_tone5": {
    "char": "🫱🏾‍🫲🏿",
    "slug": "handshake_tone4_tone5",
    "category": "people"
  },
  "handshake_medium_dark_skin_tone_dark_skin_tone": {
    "char": "🫱🏾‍🫲🏿",
    "slug": "handshake_tone4_tone5",
    "category": "people",
    "isAlternative": true
  },
  "handshake_tone5_tone1": {
    "char": "🫱🏿‍🫲🏻",
    "slug": "handshake_tone5_tone1",
    "category": "people"
  },
  "handshake_dark_skin_tone_light_skin_tone": {
    "char": "🫱🏿‍🫲🏻",
    "slug": "handshake_tone5_tone1",
    "category": "people",
    "isAlternative": true
  },
  "handshake_tone5_tone2": {
    "char": "🫱🏿‍🫲🏼",
    "slug": "handshake_tone5_tone2",
    "category": "people"
  },
  "handshake_dark_skin_tone_medium_light_skin_tone": {
    "char": "🫱🏿‍🫲🏼",
    "slug": "handshake_tone5_tone2",
    "category": "people",
    "isAlternative": true
  },
  "handshake_tone5_tone3": {
    "char": "🫱🏿‍🫲🏽",
    "slug": "handshake_tone5_tone3",
    "category": "people"
  },
  "handshake_dark_skin_tone_medium_skin_tone": {
    "char": "🫱🏿‍🫲🏽",
    "slug": "handshake_tone5_tone3",
    "category": "people",
    "isAlternative": true
  },
  "handshake_tone5_tone4": {
    "char": "🫱🏿‍🫲🏾",
    "slug": "handshake_tone5_tone4",
    "category": "people"
  },
  "handshake_dark_skin_tone_medium_dark_skin_tone": {
    "char": "🫱🏿‍🫲🏾",
    "slug": "handshake_tone5_tone4",
    "category": "people",
    "isAlternative": true
  },
  "handshake_tone5": {
    "char": "🤝🏿",
    "slug": "handshake_tone5",
    "category": "people"
  },
  "handshake_dark_skin_tone": {
    "char": "🤝🏿",
    "slug": "handshake_tone5",
    "category": "people",
    "isAlternative": true
  },
  "thumbsup": { "char": "👍", "slug": "thumbsup", "category": "people" },
  "+1": {
    "char": "👍",
    "slug": "thumbsup",
    "category": "people",
    "isAlternative": true
  },
  "thumbup": {
    "char": "👍",
    "slug": "thumbsup",
    "category": "people",
    "isAlternative": true
  },
  "thumbs_up": {
    "char": "👍",
    "slug": "thumbsup",
    "category": "people",
    "isAlternative": true
  },
  "thumbsup_tone1": {
    "char": "👍🏻",
    "slug": "thumbsup_tone1",
    "category": "people"
  },
  "+1_tone1": {
    "char": "👍🏻",
    "slug": "thumbsup_tone1",
    "category": "people",
    "isAlternative": true
  },
  "thumbup_tone1": {
    "char": "👍🏻",
    "slug": "thumbsup_tone1",
    "category": "people",
    "isAlternative": true
  },
  "thumbsup_tone2": {
    "char": "👍🏼",
    "slug": "thumbsup_tone2",
    "category": "people"
  },
  "+1_tone2": {
    "char": "👍🏼",
    "slug": "thumbsup_tone2",
    "category": "people",
    "isAlternative": true
  },
  "thumbup_tone2": {
    "char": "👍🏼",
    "slug": "thumbsup_tone2",
    "category": "people",
    "isAlternative": true
  },
  "thumbsup_tone3": {
    "char": "👍🏽",
    "slug": "thumbsup_tone3",
    "category": "people"
  },
  "+1_tone3": {
    "char": "👍🏽",
    "slug": "thumbsup_tone3",
    "category": "people",
    "isAlternative": true
  },
  "thumbup_tone3": {
    "char": "👍🏽",
    "slug": "thumbsup_tone3",
    "category": "people",
    "isAlternative": true
  },
  "thumbsup_tone4": {
    "char": "👍🏾",
    "slug": "thumbsup_tone4",
    "category": "people"
  },
  "+1_tone4": {
    "char": "👍🏾",
    "slug": "thumbsup_tone4",
    "category": "people",
    "isAlternative": true
  },
  "thumbup_tone4": {
    "char": "👍🏾",
    "slug": "thumbsup_tone4",
    "category": "people",
    "isAlternative": true
  },
  "thumbsup_tone5": {
    "char": "👍🏿",
    "slug": "thumbsup_tone5",
    "category": "people"
  },
  "+1_tone5": {
    "char": "👍🏿",
    "slug": "thumbsup_tone5",
    "category": "people",
    "isAlternative": true
  },
  "thumbup_tone5": {
    "char": "👍🏿",
    "slug": "thumbsup_tone5",
    "category": "people",
    "isAlternative": true
  },
  "thumbsdown": { "char": "👎", "slug": "thumbsdown", "category": "people" },
  "-1": {
    "char": "👎",
    "slug": "thumbsdown",
    "category": "people",
    "isAlternative": true
  },
  "thumbdown": {
    "char": "👎",
    "slug": "thumbsdown",
    "category": "people",
    "isAlternative": true
  },
  "thumbs_down": {
    "char": "👎",
    "slug": "thumbsdown",
    "category": "people",
    "isAlternative": true
  },
  "thumbsdown_tone1": {
    "char": "👎🏻",
    "slug": "thumbsdown_tone1",
    "category": "people"
  },
  "-1_tone1": {
    "char": "👎🏻",
    "slug": "thumbsdown_tone1",
    "category": "people",
    "isAlternative": true
  },
  "thumbdown_tone1": {
    "char": "👎🏻",
    "slug": "thumbsdown_tone1",
    "category": "people",
    "isAlternative": true
  },
  "thumbsdown_tone2": {
    "char": "👎🏼",
    "slug": "thumbsdown_tone2",
    "category": "people"
  },
  "-1_tone2": {
    "char": "👎🏼",
    "slug": "thumbsdown_tone2",
    "category": "people",
    "isAlternative": true
  },
  "thumbdown_tone2": {
    "char": "👎🏼",
    "slug": "thumbsdown_tone2",
    "category": "people",
    "isAlternative": true
  },
  "thumbsdown_tone3": {
    "char": "👎🏽",
    "slug": "thumbsdown_tone3",
    "category": "people"
  },
  "-1_tone3": {
    "char": "👎🏽",
    "slug": "thumbsdown_tone3",
    "category": "people",
    "isAlternative": true
  },
  "thumbdown_tone3": {
    "char": "👎🏽",
    "slug": "thumbsdown_tone3",
    "category": "people",
    "isAlternative": true
  },
  "thumbsdown_tone4": {
    "char": "👎🏾",
    "slug": "thumbsdown_tone4",
    "category": "people"
  },
  "-1_tone4": {
    "char": "👎🏾",
    "slug": "thumbsdown_tone4",
    "category": "people",
    "isAlternative": true
  },
  "thumbdown_tone4": {
    "char": "👎🏾",
    "slug": "thumbsdown_tone4",
    "category": "people",
    "isAlternative": true
  },
  "thumbsdown_tone5": {
    "char": "👎🏿",
    "slug": "thumbsdown_tone5",
    "category": "people"
  },
  "-1_tone5": {
    "char": "👎🏿",
    "slug": "thumbsdown_tone5",
    "category": "people",
    "isAlternative": true
  },
  "thumbdown_tone5": {
    "char": "👎🏿",
    "slug": "thumbsdown_tone5",
    "category": "people",
    "isAlternative": true
  },
  "punch": { "char": "👊", "slug": "punch", "category": "people" },
  "oncoming_fist": {
    "char": "👊",
    "slug": "punch",
    "category": "people",
    "isAlternative": true
  },
  "punch_tone1": { "char": "👊🏻", "slug": "punch_tone1", "category": "people" },
  "punch_tone2": { "char": "👊🏼", "slug": "punch_tone2", "category": "people" },
  "punch_tone3": { "char": "👊🏽", "slug": "punch_tone3", "category": "people" },
  "punch_tone4": { "char": "👊🏾", "slug": "punch_tone4", "category": "people" },
  "punch_tone5": { "char": "👊🏿", "slug": "punch_tone5", "category": "people" },
  "fist": { "char": "✊", "slug": "fist", "category": "people" },
  "raised_fist": {
    "char": "✊",
    "slug": "fist",
    "category": "people",
    "isAlternative": true
  },
  "fist_tone1": { "char": "✊🏻", "slug": "fist_tone1", "category": "people" },
  "fist_tone2": { "char": "✊🏼", "slug": "fist_tone2", "category": "people" },
  "fist_tone3": { "char": "✊🏽", "slug": "fist_tone3", "category": "people" },
  "fist_tone4": { "char": "✊🏾", "slug": "fist_tone4", "category": "people" },
  "fist_tone5": { "char": "✊🏿", "slug": "fist_tone5", "category": "people" },
  "left_facing_fist": {
    "char": "🤛",
    "slug": "left_facing_fist",
    "category": "people"
  },
  "left_fist": {
    "char": "🤛",
    "slug": "left_facing_fist",
    "category": "people",
    "isAlternative": true
  },
  "left_facing_fist_tone1": {
    "char": "🤛🏻",
    "slug": "left_facing_fist_tone1",
    "category": "people"
  },
  "left_fist_tone1": {
    "char": "🤛🏻",
    "slug": "left_facing_fist_tone1",
    "category": "people",
    "isAlternative": true
  },
  "left_facing_fist_tone2": {
    "char": "🤛🏼",
    "slug": "left_facing_fist_tone2",
    "category": "people"
  },
  "left_fist_tone2": {
    "char": "🤛🏼",
    "slug": "left_facing_fist_tone2",
    "category": "people",
    "isAlternative": true
  },
  "left_facing_fist_tone3": {
    "char": "🤛🏽",
    "slug": "left_facing_fist_tone3",
    "category": "people"
  },
  "left_fist_tone3": {
    "char": "🤛🏽",
    "slug": "left_facing_fist_tone3",
    "category": "people",
    "isAlternative": true
  },
  "left_facing_fist_tone4": {
    "char": "🤛🏾",
    "slug": "left_facing_fist_tone4",
    "category": "people"
  },
  "left_fist_tone4": {
    "char": "🤛🏾",
    "slug": "left_facing_fist_tone4",
    "category": "people",
    "isAlternative": true
  },
  "left_facing_fist_tone5": {
    "char": "🤛🏿",
    "slug": "left_facing_fist_tone5",
    "category": "people"
  },
  "left_fist_tone5": {
    "char": "🤛🏿",
    "slug": "left_facing_fist_tone5",
    "category": "people",
    "isAlternative": true
  },
  "right_facing_fist": {
    "char": "🤜",
    "slug": "right_facing_fist",
    "category": "people"
  },
  "right_fist": {
    "char": "🤜",
    "slug": "right_facing_fist",
    "category": "people",
    "isAlternative": true
  },
  "right_facing_fist_tone1": {
    "char": "🤜🏻",
    "slug": "right_facing_fist_tone1",
    "category": "people"
  },
  "right_fist_tone1": {
    "char": "🤜🏻",
    "slug": "right_facing_fist_tone1",
    "category": "people",
    "isAlternative": true
  },
  "right_facing_fist_tone2": {
    "char": "🤜🏼",
    "slug": "right_facing_fist_tone2",
    "category": "people"
  },
  "right_fist_tone2": {
    "char": "🤜🏼",
    "slug": "right_facing_fist_tone2",
    "category": "people",
    "isAlternative": true
  },
  "right_facing_fist_tone3": {
    "char": "🤜🏽",
    "slug": "right_facing_fist_tone3",
    "category": "people"
  },
  "right_fist_tone3": {
    "char": "🤜🏽",
    "slug": "right_facing_fist_tone3",
    "category": "people",
    "isAlternative": true
  },
  "right_facing_fist_tone4": {
    "char": "🤜🏾",
    "slug": "right_facing_fist_tone4",
    "category": "people"
  },
  "right_fist_tone4": {
    "char": "🤜🏾",
    "slug": "right_facing_fist_tone4",
    "category": "people",
    "isAlternative": true
  },
  "right_facing_fist_tone5": {
    "char": "🤜🏿",
    "slug": "right_facing_fist_tone5",
    "category": "people"
  },
  "right_fist_tone5": {
    "char": "🤜🏿",
    "slug": "right_facing_fist_tone5",
    "category": "people",
    "isAlternative": true
  },
  "fingers_crossed": {
    "char": "🤞",
    "slug": "fingers_crossed",
    "category": "people"
  },
  "hand_with_index_and_middle_finger_crossed": {
    "char": "🤞",
    "slug": "fingers_crossed",
    "category": "people",
    "isAlternative": true
  },
  "fingers_crossed_tone1": {
    "char": "🤞🏻",
    "slug": "fingers_crossed_tone1",
    "category": "people"
  },
  "hand_with_index_and_middle_fingers_crossed_tone1": {
    "char": "🤞🏻",
    "slug": "fingers_crossed_tone1",
    "category": "people",
    "isAlternative": true
  },
  "fingers_crossed_tone2": {
    "char": "🤞🏼",
    "slug": "fingers_crossed_tone2",
    "category": "people"
  },
  "hand_with_index_and_middle_fingers_crossed_tone2": {
    "char": "🤞🏼",
    "slug": "fingers_crossed_tone2",
    "category": "people",
    "isAlternative": true
  },
  "fingers_crossed_tone3": {
    "char": "🤞🏽",
    "slug": "fingers_crossed_tone3",
    "category": "people"
  },
  "hand_with_index_and_middle_fingers_crossed_tone3": {
    "char": "🤞🏽",
    "slug": "fingers_crossed_tone3",
    "category": "people",
    "isAlternative": true
  },
  "fingers_crossed_tone4": {
    "char": "🤞🏾",
    "slug": "fingers_crossed_tone4",
    "category": "people"
  },
  "hand_with_index_and_middle_fingers_crossed_tone4": {
    "char": "🤞🏾",
    "slug": "fingers_crossed_tone4",
    "category": "people",
    "isAlternative": true
  },
  "fingers_crossed_tone5": {
    "char": "🤞🏿",
    "slug": "fingers_crossed_tone5",
    "category": "people"
  },
  "hand_with_index_and_middle_fingers_crossed_tone5": {
    "char": "🤞🏿",
    "slug": "fingers_crossed_tone5",
    "category": "people",
    "isAlternative": true
  },
  "v": { "char": "✌️", "slug": "v", "category": "people" },
  "victory_hand": {
    "char": "✌️",
    "slug": "v",
    "category": "people",
    "isAlternative": true
  },
  "v_tone1": { "char": "✌🏻", "slug": "v_tone1", "category": "people" },
  "v_tone2": { "char": "✌🏼", "slug": "v_tone2", "category": "people" },
  "v_tone3": { "char": "✌🏽", "slug": "v_tone3", "category": "people" },
  "v_tone4": { "char": "✌🏾", "slug": "v_tone4", "category": "people" },
  "v_tone5": { "char": "✌🏿", "slug": "v_tone5", "category": "people" },
  "hand_with_index_finger_and_thumb_crossed": {
    "char": "🫰",
    "slug": "hand_with_index_finger_and_thumb_crossed",
    "category": "people"
  },
  "hand_with_index_finger_and_thumb_crossed_tone1": {
    "char": "🫰🏻",
    "slug": "hand_with_index_finger_and_thumb_crossed_tone1",
    "category": "people"
  },
  "hand_with_index_finger_and_thumb_crossed_light_skin_tone": {
    "char": "🫰🏻",
    "slug": "hand_with_index_finger_and_thumb_crossed_tone1",
    "category": "people",
    "isAlternative": true
  },
  "hand_with_index_finger_and_thumb_crossed_tone2": {
    "char": "🫰🏼",
    "slug": "hand_with_index_finger_and_thumb_crossed_tone2",
    "category": "people"
  },
  "hand_with_index_finger_and_thumb_crossed_medium_light_skin_tone": {
    "char": "🫰🏼",
    "slug": "hand_with_index_finger_and_thumb_crossed_tone2",
    "category": "people",
    "isAlternative": true
  },
  "hand_with_index_finger_and_thumb_crossed_tone3": {
    "char": "🫰🏽",
    "slug": "hand_with_index_finger_and_thumb_crossed_tone3",
    "category": "people"
  },
  "hand_with_index_finger_and_thumb_crossed_medium_skin_tone": {
    "char": "🫰🏽",
    "slug": "hand_with_index_finger_and_thumb_crossed_tone3",
    "category": "people",
    "isAlternative": true
  },
  "hand_with_index_finger_and_thumb_crossed_tone4": {
    "char": "🫰🏾",
    "slug": "hand_with_index_finger_and_thumb_crossed_tone4",
    "category": "people"
  },
  "hand_with_index_finger_and_thumb_crossed_medium_dark_skin_tone": {
    "char": "🫰🏾",
    "slug": "hand_with_index_finger_and_thumb_crossed_tone4",
    "category": "people",
    "isAlternative": true
  },
  "hand_with_index_finger_and_thumb_crossed_tone5": {
    "char": "🫰🏿",
    "slug": "hand_with_index_finger_and_thumb_crossed_tone5",
    "category": "people"
  },
  "hand_with_index_finger_and_thumb_crossed_dark_skin_tone": {
    "char": "🫰🏿",
    "slug": "hand_with_index_finger_and_thumb_crossed_tone5",
    "category": "people",
    "isAlternative": true
  },
  "love_you_gesture": {
    "char": "🤟",
    "slug": "love_you_gesture",
    "category": "people"
  },
  "love_you_gesture_tone1": {
    "char": "🤟🏻",
    "slug": "love_you_gesture_tone1",
    "category": "people"
  },
  "love_you_gesture_light_skin_tone": {
    "char": "🤟🏻",
    "slug": "love_you_gesture_tone1",
    "category": "people",
    "isAlternative": true
  },
  "love_you_gesture_tone2": {
    "char": "🤟🏼",
    "slug": "love_you_gesture_tone2",
    "category": "people"
  },
  "love_you_gesture_medium_light_skin_tone": {
    "char": "🤟🏼",
    "slug": "love_you_gesture_tone2",
    "category": "people",
    "isAlternative": true
  },
  "love_you_gesture_tone3": {
    "char": "🤟🏽",
    "slug": "love_you_gesture_tone3",
    "category": "people"
  },
  "love_you_gesture_medium_skin_tone": {
    "char": "🤟🏽",
    "slug": "love_you_gesture_tone3",
    "category": "people",
    "isAlternative": true
  },
  "love_you_gesture_tone4": {
    "char": "🤟🏾",
    "slug": "love_you_gesture_tone4",
    "category": "people"
  },
  "love_you_gesture_medium_dark_skin_tone": {
    "char": "🤟🏾",
    "slug": "love_you_gesture_tone4",
    "category": "people",
    "isAlternative": true
  },
  "love_you_gesture_tone5": {
    "char": "🤟🏿",
    "slug": "love_you_gesture_tone5",
    "category": "people"
  },
  "love_you_gesture_dark_skin_tone": {
    "char": "🤟🏿",
    "slug": "love_you_gesture_tone5",
    "category": "people",
    "isAlternative": true
  },
  "metal": { "char": "🤘", "slug": "metal", "category": "people" },
  "sign_of_the_horns": {
    "char": "🤘",
    "slug": "metal",
    "category": "people",
    "isAlternative": true
  },
  "metal_tone1": { "char": "🤘🏻", "slug": "metal_tone1", "category": "people" },
  "sign_of_the_horns_tone1": {
    "char": "🤘🏻",
    "slug": "metal_tone1",
    "category": "people",
    "isAlternative": true
  },
  "metal_tone2": { "char": "🤘🏼", "slug": "metal_tone2", "category": "people" },
  "sign_of_the_horns_tone2": {
    "char": "🤘🏼",
    "slug": "metal_tone2",
    "category": "people",
    "isAlternative": true
  },
  "metal_tone3": { "char": "🤘🏽", "slug": "metal_tone3", "category": "people" },
  "sign_of_the_horns_tone3": {
    "char": "🤘🏽",
    "slug": "metal_tone3",
    "category": "people",
    "isAlternative": true
  },
  "metal_tone4": { "char": "🤘🏾", "slug": "metal_tone4", "category": "people" },
  "sign_of_the_horns_tone4": {
    "char": "🤘🏾",
    "slug": "metal_tone4",
    "category": "people",
    "isAlternative": true
  },
  "metal_tone5": { "char": "🤘🏿", "slug": "metal_tone5", "category": "people" },
  "sign_of_the_horns_tone5": {
    "char": "🤘🏿",
    "slug": "metal_tone5",
    "category": "people",
    "isAlternative": true
  },
  "ok_hand": { "char": "👌", "slug": "ok_hand", "category": "people" },
  "ok_hand_tone1": {
    "char": "👌🏻",
    "slug": "ok_hand_tone1",
    "category": "people"
  },
  "ok_hand_tone2": {
    "char": "👌🏼",
    "slug": "ok_hand_tone2",
    "category": "people"
  },
  "ok_hand_tone3": {
    "char": "👌🏽",
    "slug": "ok_hand_tone3",
    "category": "people"
  },
  "ok_hand_tone4": {
    "char": "👌🏾",
    "slug": "ok_hand_tone4",
    "category": "people"
  },
  "ok_hand_tone5": {
    "char": "👌🏿",
    "slug": "ok_hand_tone5",
    "category": "people"
  },
  "pinched_fingers": {
    "char": "🤌",
    "slug": "pinched_fingers",
    "category": "people"
  },
  "pinched_fingers_tone2": {
    "char": "🤌🏼",
    "slug": "pinched_fingers_tone2",
    "category": "people"
  },
  "pinched_fingers_medium_light_skin_tone": {
    "char": "🤌🏼",
    "slug": "pinched_fingers_tone2",
    "category": "people",
    "isAlternative": true
  },
  "pinched_fingers_tone1": {
    "char": "🤌🏻",
    "slug": "pinched_fingers_tone1",
    "category": "people"
  },
  "pinched_fingers_light_skin_tone": {
    "char": "🤌🏻",
    "slug": "pinched_fingers_tone1",
    "category": "people",
    "isAlternative": true
  },
  "pinched_fingers_tone3": {
    "char": "🤌🏽",
    "slug": "pinched_fingers_tone3",
    "category": "people"
  },
  "pinched_fingers_medium_skin_tone": {
    "char": "🤌🏽",
    "slug": "pinched_fingers_tone3",
    "category": "people",
    "isAlternative": true
  },
  "pinched_fingers_tone4": {
    "char": "🤌🏾",
    "slug": "pinched_fingers_tone4",
    "category": "people"
  },
  "pinched_fingers_medium_dark_skin_tone": {
    "char": "🤌🏾",
    "slug": "pinched_fingers_tone4",
    "category": "people",
    "isAlternative": true
  },
  "pinched_fingers_tone5": {
    "char": "🤌🏿",
    "slug": "pinched_fingers_tone5",
    "category": "people"
  },
  "pinched_fingers_dark_skin_tone": {
    "char": "🤌🏿",
    "slug": "pinched_fingers_tone5",
    "category": "people",
    "isAlternative": true
  },
  "pinching_hand": {
    "char": "🤏",
    "slug": "pinching_hand",
    "category": "people"
  },
  "pinching_hand_tone1": {
    "char": "🤏🏻",
    "slug": "pinching_hand_tone1",
    "category": "people"
  },
  "pinching_hand_light_skin_tone": {
    "char": "🤏🏻",
    "slug": "pinching_hand_tone1",
    "category": "people",
    "isAlternative": true
  },
  "pinching_hand_tone2": {
    "char": "🤏🏼",
    "slug": "pinching_hand_tone2",
    "category": "people"
  },
  "pinching_hand_medium_light_skin_tone": {
    "char": "🤏🏼",
    "slug": "pinching_hand_tone2",
    "category": "people",
    "isAlternative": true
  },
  "pinching_hand_tone3": {
    "char": "🤏🏽",
    "slug": "pinching_hand_tone3",
    "category": "people"
  },
  "pinching_hand_medium_skin_tone": {
    "char": "🤏🏽",
    "slug": "pinching_hand_tone3",
    "category": "people",
    "isAlternative": true
  },
  "pinching_hand_tone4": {
    "char": "🤏🏾",
    "slug": "pinching_hand_tone4",
    "category": "people"
  },
  "pinching_hand_medium_dark_skin_tone": {
    "char": "🤏🏾",
    "slug": "pinching_hand_tone4",
    "category": "people",
    "isAlternative": true
  },
  "pinching_hand_tone5": {
    "char": "🤏🏿",
    "slug": "pinching_hand_tone5",
    "category": "people"
  },
  "pinching_hand_dark_skin_tone": {
    "char": "🤏🏿",
    "slug": "pinching_hand_tone5",
    "category": "people",
    "isAlternative": true
  },
  "palm_down_hand": {
    "char": "🫳",
    "slug": "palm_down_hand",
    "category": "people"
  },
  "palm_down_hand_tone1": {
    "char": "🫳🏻",
    "slug": "palm_down_hand_tone1",
    "category": "people"
  },
  "palm_down_hand_light_skin_tone": {
    "char": "🫳🏻",
    "slug": "palm_down_hand_tone1",
    "category": "people",
    "isAlternative": true
  },
  "palm_down_hand_tone2": {
    "char": "🫳🏼",
    "slug": "palm_down_hand_tone2",
    "category": "people"
  },
  "palm_down_hand_medium_light_skin_tone": {
    "char": "🫳🏼",
    "slug": "palm_down_hand_tone2",
    "category": "people",
    "isAlternative": true
  },
  "palm_down_hand_tone3": {
    "char": "🫳🏽",
    "slug": "palm_down_hand_tone3",
    "category": "people"
  },
  "palm_down_hand_medium_skin_tone": {
    "char": "🫳🏽",
    "slug": "palm_down_hand_tone3",
    "category": "people",
    "isAlternative": true
  },
  "palm_down_hand_tone4": {
    "char": "🫳🏾",
    "slug": "palm_down_hand_tone4",
    "category": "people"
  },
  "palm_down_hand_medium_dark_skin_tone": {
    "char": "🫳🏾",
    "slug": "palm_down_hand_tone4",
    "category": "people",
    "isAlternative": true
  },
  "palm_down_hand_tone5": {
    "char": "🫳🏿",
    "slug": "palm_down_hand_tone5",
    "category": "people"
  },
  "palm_down_hand_dark_skin_tone": {
    "char": "🫳🏿",
    "slug": "palm_down_hand_tone5",
    "category": "people",
    "isAlternative": true
  },
  "palm_up_hand": { "char": "🫴", "slug": "palm_up_hand", "category": "people" },
  "palm_up_hand_tone1": {
    "char": "🫴🏻",
    "slug": "palm_up_hand_tone1",
    "category": "people"
  },
  "palm_up_hand_light_skin_tone": {
    "char": "🫴🏻",
    "slug": "palm_up_hand_tone1",
    "category": "people",
    "isAlternative": true
  },
  "palm_up_hand_tone2": {
    "char": "🫴🏼",
    "slug": "palm_up_hand_tone2",
    "category": "people"
  },
  "palm_up_hand_medium_light_skin_tone": {
    "char": "🫴🏼",
    "slug": "palm_up_hand_tone2",
    "category": "people",
    "isAlternative": true
  },
  "palm_up_hand_tone3": {
    "char": "🫴🏽",
    "slug": "palm_up_hand_tone3",
    "category": "people"
  },
  "palm_up_hand_medium_skin_tone": {
    "char": "🫴🏽",
    "slug": "palm_up_hand_tone3",
    "category": "people",
    "isAlternative": true
  },
  "palm_up_hand_tone4": {
    "char": "🫴🏾",
    "slug": "palm_up_hand_tone4",
    "category": "people"
  },
  "palm_up_hand_medium_dark_skin_tone": {
    "char": "🫴🏾",
    "slug": "palm_up_hand_tone4",
    "category": "people",
    "isAlternative": true
  },
  "palm_up_hand_tone5": {
    "char": "🫴🏿",
    "slug": "palm_up_hand_tone5",
    "category": "people"
  },
  "palm_up_hand_dark_skin_tone": {
    "char": "🫴🏿",
    "slug": "palm_up_hand_tone5",
    "category": "people",
    "isAlternative": true
  },
  "point_left": { "char": "👈", "slug": "point_left", "category": "people" },
  "point_left_tone1": {
    "char": "👈🏻",
    "slug": "point_left_tone1",
    "category": "people"
  },
  "point_left_tone2": {
    "char": "👈🏼",
    "slug": "point_left_tone2",
    "category": "people"
  },
  "point_left_tone3": {
    "char": "👈🏽",
    "slug": "point_left_tone3",
    "category": "people"
  },
  "point_left_tone4": {
    "char": "👈🏾",
    "slug": "point_left_tone4",
    "category": "people"
  },
  "point_left_tone5": {
    "char": "👈🏿",
    "slug": "point_left_tone5",
    "category": "people"
  },
  "point_right": { "char": "👉", "slug": "point_right", "category": "people" },
  "point_right_tone1": {
    "char": "👉🏻",
    "slug": "point_right_tone1",
    "category": "people"
  },
  "point_right_tone2": {
    "char": "👉🏼",
    "slug": "point_right_tone2",
    "category": "people"
  },
  "point_right_tone3": {
    "char": "👉🏽",
    "slug": "point_right_tone3",
    "category": "people"
  },
  "point_right_tone4": {
    "char": "👉🏾",
    "slug": "point_right_tone4",
    "category": "people"
  },
  "point_right_tone5": {
    "char": "👉🏿",
    "slug": "point_right_tone5",
    "category": "people"
  },
  "point_up_2": { "char": "👆", "slug": "point_up_2", "category": "people" },
  "point_up_2_tone1": {
    "char": "👆🏻",
    "slug": "point_up_2_tone1",
    "category": "people"
  },
  "point_up_2_tone2": {
    "char": "👆🏼",
    "slug": "point_up_2_tone2",
    "category": "people"
  },
  "point_up_2_tone3": {
    "char": "👆🏽",
    "slug": "point_up_2_tone3",
    "category": "people"
  },
  "point_up_2_tone4": {
    "char": "👆🏾",
    "slug": "point_up_2_tone4",
    "category": "people"
  },
  "point_up_2_tone5": {
    "char": "👆🏿",
    "slug": "point_up_2_tone5",
    "category": "people"
  },
  "point_down": { "char": "👇", "slug": "point_down", "category": "people" },
  "point_down_tone1": {
    "char": "👇🏻",
    "slug": "point_down_tone1",
    "category": "people"
  },
  "point_down_tone2": {
    "char": "👇🏼",
    "slug": "point_down_tone2",
    "category": "people"
  },
  "point_down_tone3": {
    "char": "👇🏽",
    "slug": "point_down_tone3",
    "category": "people"
  },
  "point_down_tone4": {
    "char": "👇🏾",
    "slug": "point_down_tone4",
    "category": "people"
  },
  "point_down_tone5": {
    "char": "👇🏿",
    "slug": "point_down_tone5",
    "category": "people"
  },
  "point_up": { "char": "☝️", "slug": "point_up", "category": "people" },
  "point_up_tone1": {
    "char": "☝🏻",
    "slug": "point_up_tone1",
    "category": "people"
  },
  "point_up_tone2": {
    "char": "☝🏼",
    "slug": "point_up_tone2",
    "category": "people"
  },
  "point_up_tone3": {
    "char": "☝🏽",
    "slug": "point_up_tone3",
    "category": "people"
  },
  "point_up_tone4": {
    "char": "☝🏾",
    "slug": "point_up_tone4",
    "category": "people"
  },
  "point_up_tone5": {
    "char": "☝🏿",
    "slug": "point_up_tone5",
    "category": "people"
  },
  "raised_hand": { "char": "✋", "slug": "raised_hand", "category": "people" },
  "raised_hand_tone1": {
    "char": "✋🏻",
    "slug": "raised_hand_tone1",
    "category": "people"
  },
  "raised_hand_tone2": {
    "char": "✋🏼",
    "slug": "raised_hand_tone2",
    "category": "people"
  },
  "raised_hand_tone3": {
    "char": "✋🏽",
    "slug": "raised_hand_tone3",
    "category": "people"
  },
  "raised_hand_tone4": {
    "char": "✋🏾",
    "slug": "raised_hand_tone4",
    "category": "people"
  },
  "raised_hand_tone5": {
    "char": "✋🏿",
    "slug": "raised_hand_tone5",
    "category": "people"
  },
  "raised_back_of_hand": {
    "char": "🤚",
    "slug": "raised_back_of_hand",
    "category": "people"
  },
  "back_of_hand": {
    "char": "🤚",
    "slug": "raised_back_of_hand",
    "category": "people",
    "isAlternative": true
  },
  "raised_back_of_hand_tone1": {
    "char": "🤚🏻",
    "slug": "raised_back_of_hand_tone1",
    "category": "people"
  },
  "back_of_hand_tone1": {
    "char": "🤚🏻",
    "slug": "raised_back_of_hand_tone1",
    "category": "people",
    "isAlternative": true
  },
  "raised_back_of_hand_tone2": {
    "char": "🤚🏼",
    "slug": "raised_back_of_hand_tone2",
    "category": "people"
  },
  "back_of_hand_tone2": {
    "char": "🤚🏼",
    "slug": "raised_back_of_hand_tone2",
    "category": "people",
    "isAlternative": true
  },
  "raised_back_of_hand_tone3": {
    "char": "🤚🏽",
    "slug": "raised_back_of_hand_tone3",
    "category": "people"
  },
  "back_of_hand_tone3": {
    "char": "🤚🏽",
    "slug": "raised_back_of_hand_tone3",
    "category": "people",
    "isAlternative": true
  },
  "raised_back_of_hand_tone4": {
    "char": "🤚🏾",
    "slug": "raised_back_of_hand_tone4",
    "category": "people"
  },
  "back_of_hand_tone4": {
    "char": "🤚🏾",
    "slug": "raised_back_of_hand_tone4",
    "category": "people",
    "isAlternative": true
  },
  "raised_back_of_hand_tone5": {
    "char": "🤚🏿",
    "slug": "raised_back_of_hand_tone5",
    "category": "people"
  },
  "back_of_hand_tone5": {
    "char": "🤚🏿",
    "slug": "raised_back_of_hand_tone5",
    "category": "people",
    "isAlternative": true
  },
  "hand_splayed": {
    "char": "🖐️",
    "slug": "hand_splayed",
    "category": "people"
  },
  "raised_hand_with_fingers_splayed": {
    "char": "🖐️",
    "slug": "hand_splayed",
    "category": "people",
    "isAlternative": true
  },
  "hand_splayed_tone1": {
    "char": "🖐🏻",
    "slug": "hand_splayed_tone1",
    "category": "people"
  },
  "raised_hand_with_fingers_splayed_tone1": {
    "char": "🖐🏻",
    "slug": "hand_splayed_tone1",
    "category": "people",
    "isAlternative": true
  },
  "hand_splayed_tone2": {
    "char": "🖐🏼",
    "slug": "hand_splayed_tone2",
    "category": "people"
  },
  "raised_hand_with_fingers_splayed_tone2": {
    "char": "🖐🏼",
    "slug": "hand_splayed_tone2",
    "category": "people",
    "isAlternative": true
  },
  "hand_splayed_tone3": {
    "char": "🖐🏽",
    "slug": "hand_splayed_tone3",
    "category": "people"
  },
  "raised_hand_with_fingers_splayed_tone3": {
    "char": "🖐🏽",
    "slug": "hand_splayed_tone3",
    "category": "people",
    "isAlternative": true
  },
  "hand_splayed_tone4": {
    "char": "🖐🏾",
    "slug": "hand_splayed_tone4",
    "category": "people"
  },
  "raised_hand_with_fingers_splayed_tone4": {
    "char": "🖐🏾",
    "slug": "hand_splayed_tone4",
    "category": "people",
    "isAlternative": true
  },
  "hand_splayed_tone5": {
    "char": "🖐🏿",
    "slug": "hand_splayed_tone5",
    "category": "people"
  },
  "raised_hand_with_fingers_splayed_tone5": {
    "char": "🖐🏿",
    "slug": "hand_splayed_tone5",
    "category": "people",
    "isAlternative": true
  },
  "vulcan": { "char": "🖖", "slug": "vulcan", "category": "people" },
  "raised_hand_with_part_between_middle_and_ring_fingers": {
    "char": "🖖",
    "slug": "vulcan",
    "category": "people",
    "isAlternative": true
  },
  "vulcan_salute": {
    "char": "🖖",
    "slug": "vulcan",
    "category": "people",
    "isAlternative": true
  },
  "vulcan_tone1": {
    "char": "🖖🏻",
    "slug": "vulcan_tone1",
    "category": "people"
  },
  "raised_hand_with_part_between_middle_and_ring_fingers_tone1": {
    "char": "🖖🏻",
    "slug": "vulcan_tone1",
    "category": "people",
    "isAlternative": true
  },
  "vulcan_tone2": {
    "char": "🖖🏼",
    "slug": "vulcan_tone2",
    "category": "people"
  },
  "raised_hand_with_part_between_middle_and_ring_fingers_tone2": {
    "char": "🖖🏼",
    "slug": "vulcan_tone2",
    "category": "people",
    "isAlternative": true
  },
  "vulcan_tone3": {
    "char": "🖖🏽",
    "slug": "vulcan_tone3",
    "category": "people"
  },
  "raised_hand_with_part_between_middle_and_ring_fingers_tone3": {
    "char": "🖖🏽",
    "slug": "vulcan_tone3",
    "category": "people",
    "isAlternative": true
  },
  "vulcan_tone4": {
    "char": "🖖🏾",
    "slug": "vulcan_tone4",
    "category": "people"
  },
  "raised_hand_with_part_between_middle_and_ring_fingers_tone4": {
    "char": "🖖🏾",
    "slug": "vulcan_tone4",
    "category": "people",
    "isAlternative": true
  },
  "vulcan_tone5": {
    "char": "🖖🏿",
    "slug": "vulcan_tone5",
    "category": "people"
  },
  "raised_hand_with_part_between_middle_and_ring_fingers_tone5": {
    "char": "🖖🏿",
    "slug": "vulcan_tone5",
    "category": "people",
    "isAlternative": true
  },
  "wave": { "char": "👋", "slug": "wave", "category": "people" },
  "waving_hand": {
    "char": "👋",
    "slug": "wave",
    "category": "people",
    "isAlternative": true
  },
  "wave_tone1": { "char": "👋🏻", "slug": "wave_tone1", "category": "people" },
  "wave_tone2": { "char": "👋🏼", "slug": "wave_tone2", "category": "people" },
  "wave_tone3": { "char": "👋🏽", "slug": "wave_tone3", "category": "people" },
  "wave_tone4": { "char": "👋🏾", "slug": "wave_tone4", "category": "people" },
  "wave_tone5": { "char": "👋🏿", "slug": "wave_tone5", "category": "people" },
  "call_me": { "char": "🤙", "slug": "call_me", "category": "people" },
  "call_me_hand": {
    "char": "🤙",
    "slug": "call_me",
    "category": "people",
    "isAlternative": true
  },
  "call_me_tone1": {
    "char": "🤙🏻",
    "slug": "call_me_tone1",
    "category": "people"
  },
  "call_me_hand_tone1": {
    "char": "🤙🏻",
    "slug": "call_me_tone1",
    "category": "people",
    "isAlternative": true
  },
  "call_me_tone2": {
    "char": "🤙🏼",
    "slug": "call_me_tone2",
    "category": "people"
  },
  "call_me_hand_tone2": {
    "char": "🤙🏼",
    "slug": "call_me_tone2",
    "category": "people",
    "isAlternative": true
  },
  "call_me_tone3": {
    "char": "🤙🏽",
    "slug": "call_me_tone3",
    "category": "people"
  },
  "call_me_hand_tone3": {
    "char": "🤙🏽",
    "slug": "call_me_tone3",
    "category": "people",
    "isAlternative": true
  },
  "call_me_tone4": {
    "char": "🤙🏾",
    "slug": "call_me_tone4",
    "category": "people"
  },
  "call_me_hand_tone4": {
    "char": "🤙🏾",
    "slug": "call_me_tone4",
    "category": "people",
    "isAlternative": true
  },
  "call_me_tone5": {
    "char": "🤙🏿",
    "slug": "call_me_tone5",
    "category": "people"
  },
  "call_me_hand_tone5": {
    "char": "🤙🏿",
    "slug": "call_me_tone5",
    "category": "people",
    "isAlternative": true
  },
  "leftwards_hand": {
    "char": "🫲",
    "slug": "leftwards_hand",
    "category": "people"
  },
  "leftwards_hand_tone1": {
    "char": "🫲🏻",
    "slug": "leftwards_hand_tone1",
    "category": "people"
  },
  "leftwards_hand_light_skin_tone": {
    "char": "🫲🏻",
    "slug": "leftwards_hand_tone1",
    "category": "people",
    "isAlternative": true
  },
  "leftwards_hand_tone2": {
    "char": "🫲🏼",
    "slug": "leftwards_hand_tone2",
    "category": "people"
  },
  "leftwards_hand_medium_light_skin_tone": {
    "char": "🫲🏼",
    "slug": "leftwards_hand_tone2",
    "category": "people",
    "isAlternative": true
  },
  "leftwards_hand_tone3": {
    "char": "🫲🏽",
    "slug": "leftwards_hand_tone3",
    "category": "people"
  },
  "leftwards_hand_medium_skin_tone": {
    "char": "🫲🏽",
    "slug": "leftwards_hand_tone3",
    "category": "people",
    "isAlternative": true
  },
  "leftwards_hand_tone4": {
    "char": "🫲🏾",
    "slug": "leftwards_hand_tone4",
    "category": "people"
  },
  "leftwards_hand_medium_dark_skin_tone": {
    "char": "🫲🏾",
    "slug": "leftwards_hand_tone4",
    "category": "people",
    "isAlternative": true
  },
  "leftwards_hand_tone5": {
    "char": "🫲🏿",
    "slug": "leftwards_hand_tone5",
    "category": "people"
  },
  "leftwards_hand_dark_skin_tone": {
    "char": "🫲🏿",
    "slug": "leftwards_hand_tone5",
    "category": "people",
    "isAlternative": true
  },
  "rightwards_hand": {
    "char": "🫱",
    "slug": "rightwards_hand",
    "category": "people"
  },
  "rightwards_hand_tone1": {
    "char": "🫱🏻",
    "slug": "rightwards_hand_tone1",
    "category": "people"
  },
  "rightwards_hand_light_skin_tone": {
    "char": "🫱🏻",
    "slug": "rightwards_hand_tone1",
    "category": "people",
    "isAlternative": true
  },
  "rightwards_hand_tone2": {
    "char": "🫱🏼",
    "slug": "rightwards_hand_tone2",
    "category": "people"
  },
  "rightwards_hand_medium_light_skin_tone": {
    "char": "🫱🏼",
    "slug": "rightwards_hand_tone2",
    "category": "people",
    "isAlternative": true
  },
  "rightwards_hand_tone3": {
    "char": "🫱🏽",
    "slug": "rightwards_hand_tone3",
    "category": "people"
  },
  "rightwards_hand_medium_skin_tone": {
    "char": "🫱🏽",
    "slug": "rightwards_hand_tone3",
    "category": "people",
    "isAlternative": true
  },
  "rightwards_hand_tone4": {
    "char": "🫱🏾",
    "slug": "rightwards_hand_tone4",
    "category": "people"
  },
  "rightwards_hand_medium_dark_skin_tone": {
    "char": "🫱🏾",
    "slug": "rightwards_hand_tone4",
    "category": "people",
    "isAlternative": true
  },
  "rightwards_hand_tone5": {
    "char": "🫱🏿",
    "slug": "rightwards_hand_tone5",
    "category": "people"
  },
  "rightwards_hand_dark_skin_tone": {
    "char": "🫱🏿",
    "slug": "rightwards_hand_tone5",
    "category": "people",
    "isAlternative": true
  },
  "muscle": { "char": "💪", "slug": "muscle", "category": "people" },
  "flexed_biceps": {
    "char": "💪",
    "slug": "muscle",
    "category": "people",
    "isAlternative": true
  },
  "muscle_tone1": {
    "char": "💪🏻",
    "slug": "muscle_tone1",
    "category": "people"
  },
  "muscle_tone2": {
    "char": "💪🏼",
    "slug": "muscle_tone2",
    "category": "people"
  },
  "muscle_tone3": {
    "char": "💪🏽",
    "slug": "muscle_tone3",
    "category": "people"
  },
  "muscle_tone4": {
    "char": "💪🏾",
    "slug": "muscle_tone4",
    "category": "people"
  },
  "muscle_tone5": {
    "char": "💪🏿",
    "slug": "muscle_tone5",
    "category": "people"
  },
  "mechanical_arm": {
    "char": "🦾",
    "slug": "mechanical_arm",
    "category": "people"
  },
  "middle_finger": {
    "char": "🖕",
    "slug": "middle_finger",
    "category": "people"
  },
  "reversed_hand_with_middle_finger_extended": {
    "char": "🖕",
    "slug": "middle_finger",
    "category": "people",
    "isAlternative": true
  },
  "middle_finger_tone1": {
    "char": "🖕🏻",
    "slug": "middle_finger_tone1",
    "category": "people"
  },
  "reversed_hand_with_middle_finger_extended_tone1": {
    "char": "🖕🏻",
    "slug": "middle_finger_tone1",
    "category": "people",
    "isAlternative": true
  },
  "middle_finger_tone2": {
    "char": "🖕🏼",
    "slug": "middle_finger_tone2",
    "category": "people"
  },
  "reversed_hand_with_middle_finger_extended_tone2": {
    "char": "🖕🏼",
    "slug": "middle_finger_tone2",
    "category": "people",
    "isAlternative": true
  },
  "middle_finger_tone3": {
    "char": "🖕🏽",
    "slug": "middle_finger_tone3",
    "category": "people"
  },
  "reversed_hand_with_middle_finger_extended_tone3": {
    "char": "🖕🏽",
    "slug": "middle_finger_tone3",
    "category": "people",
    "isAlternative": true
  },
  "middle_finger_tone4": {
    "char": "🖕🏾",
    "slug": "middle_finger_tone4",
    "category": "people"
  },
  "reversed_hand_with_middle_finger_extended_tone4": {
    "char": "🖕🏾",
    "slug": "middle_finger_tone4",
    "category": "people",
    "isAlternative": true
  },
  "middle_finger_tone5": {
    "char": "🖕🏿",
    "slug": "middle_finger_tone5",
    "category": "people"
  },
  "reversed_hand_with_middle_finger_extended_tone5": {
    "char": "🖕🏿",
    "slug": "middle_finger_tone5",
    "category": "people",
    "isAlternative": true
  },
  "writing_hand": {
    "char": "✍️",
    "slug": "writing_hand",
    "category": "people"
  },
  "writing_hand_tone1": {
    "char": "✍🏻",
    "slug": "writing_hand_tone1",
    "category": "people"
  },
  "writing_hand_tone2": {
    "char": "✍🏼",
    "slug": "writing_hand_tone2",
    "category": "people"
  },
  "writing_hand_tone3": {
    "char": "✍🏽",
    "slug": "writing_hand_tone3",
    "category": "people"
  },
  "writing_hand_tone4": {
    "char": "✍🏾",
    "slug": "writing_hand_tone4",
    "category": "people"
  },
  "writing_hand_tone5": {
    "char": "✍🏿",
    "slug": "writing_hand_tone5",
    "category": "people"
  },
  "pray": { "char": "🙏", "slug": "pray", "category": "people" },
  "folded_hands": {
    "char": "🙏",
    "slug": "pray",
    "category": "people",
    "isAlternative": true
  },
  "pray_tone1": { "char": "🙏🏻", "slug": "pray_tone1", "category": "people" },
  "pray_tone2": { "char": "🙏🏼", "slug": "pray_tone2", "category": "people" },
  "pray_tone3": { "char": "🙏🏽", "slug": "pray_tone3", "category": "people" },
  "pray_tone4": { "char": "🙏🏾", "slug": "pray_tone4", "category": "people" },
  "pray_tone5": { "char": "🙏🏿", "slug": "pray_tone5", "category": "people" },
  "index_pointing_at_the_viewer": {
    "char": "🫵",
    "slug": "index_pointing_at_the_viewer",
    "category": "people"
  },
  "index_pointing_at_the_viewer_tone1": {
    "char": "🫵🏻",
    "slug": "index_pointing_at_the_viewer_tone1",
    "category": "people"
  },
  "index_pointing_at_the_viewer_light_skin_tone": {
    "char": "🫵🏻",
    "slug": "index_pointing_at_the_viewer_tone1",
    "category": "people",
    "isAlternative": true
  },
  "index_pointing_at_the_viewer_tone2": {
    "char": "🫵🏼",
    "slug": "index_pointing_at_the_viewer_tone2",
    "category": "people"
  },
  "index_pointing_at_the_viewer_medium_light_skin_tone": {
    "char": "🫵🏼",
    "slug": "index_pointing_at_the_viewer_tone2",
    "category": "people",
    "isAlternative": true
  },
  "index_pointing_at_the_viewer_tone3": {
    "char": "🫵🏽",
    "slug": "index_pointing_at_the_viewer_tone3",
    "category": "people"
  },
  "index_pointing_at_the_viewer_medium_skin_tone": {
    "char": "🫵🏽",
    "slug": "index_pointing_at_the_viewer_tone3",
    "category": "people",
    "isAlternative": true
  },
  "index_pointing_at_the_viewer_tone4": {
    "char": "🫵🏾",
    "slug": "index_pointing_at_the_viewer_tone4",
    "category": "people"
  },
  "index_pointing_at_the_viewer_medium_dark_skin_tone": {
    "char": "🫵🏾",
    "slug": "index_pointing_at_the_viewer_tone4",
    "category": "people",
    "isAlternative": true
  },
  "index_pointing_at_the_viewer_tone5": {
    "char": "🫵🏿",
    "slug": "index_pointing_at_the_viewer_tone5",
    "category": "people"
  },
  "index_pointing_at_the_viewer_dark_skin_tone": {
    "char": "🫵🏿",
    "slug": "index_pointing_at_the_viewer_tone5",
    "category": "people",
    "isAlternative": true
  },
  "foot": { "char": "🦶", "slug": "foot", "category": "people" },
  "foot_tone1": { "char": "🦶🏻", "slug": "foot_tone1", "category": "people" },
  "foot_light_skin_tone": {
    "char": "🦶🏻",
    "slug": "foot_tone1",
    "category": "people",
    "isAlternative": true
  },
  "foot_tone2": { "char": "🦶🏼", "slug": "foot_tone2", "category": "people" },
  "foot_medium_light_skin_tone": {
    "char": "🦶🏼",
    "slug": "foot_tone2",
    "category": "people",
    "isAlternative": true
  },
  "foot_tone3": { "char": "🦶🏽", "slug": "foot_tone3", "category": "people" },
  "foot_medium_skin_tone": {
    "char": "🦶🏽",
    "slug": "foot_tone3",
    "category": "people",
    "isAlternative": true
  },
  "foot_tone4": { "char": "🦶🏾", "slug": "foot_tone4", "category": "people" },
  "foot_medium_dark_skin_tone": {
    "char": "🦶🏾",
    "slug": "foot_tone4",
    "category": "people",
    "isAlternative": true
  },
  "foot_tone5": { "char": "🦶🏿", "slug": "foot_tone5", "category": "people" },
  "foot_dark_skin_tone": {
    "char": "🦶🏿",
    "slug": "foot_tone5",
    "category": "people",
    "isAlternative": true
  },
  "leg": { "char": "🦵", "slug": "leg", "category": "people" },
  "leg_tone1": { "char": "🦵🏻", "slug": "leg_tone1", "category": "people" },
  "leg_light_skin_tone": {
    "char": "🦵🏻",
    "slug": "leg_tone1",
    "category": "people",
    "isAlternative": true
  },
  "leg_tone2": { "char": "🦵🏼", "slug": "leg_tone2", "category": "people" },
  "leg_medium_light_skin_tone": {
    "char": "🦵🏼",
    "slug": "leg_tone2",
    "category": "people",
    "isAlternative": true
  },
  "leg_tone3": { "char": "🦵🏽", "slug": "leg_tone3", "category": "people" },
  "leg_medium_skin_tone": {
    "char": "🦵🏽",
    "slug": "leg_tone3",
    "category": "people",
    "isAlternative": true
  },
  "leg_tone4": { "char": "🦵🏾", "slug": "leg_tone4", "category": "people" },
  "leg_medium_dark_skin_tone": {
    "char": "🦵🏾",
    "slug": "leg_tone4",
    "category": "people",
    "isAlternative": true
  },
  "leg_tone5": { "char": "🦵🏿", "slug": "leg_tone5", "category": "people" },
  "leg_dark_skin_tone": {
    "char": "🦵🏿",
    "slug": "leg_tone5",
    "category": "people",
    "isAlternative": true
  },
  "mechanical_leg": {
    "char": "🦿",
    "slug": "mechanical_leg",
    "category": "people"
  },
  "lipstick": { "char": "💄", "slug": "lipstick", "category": "people" },
  "kiss": { "char": "💋", "slug": "kiss", "category": "people" },
  "kiss_mark": {
    "char": "💋",
    "slug": "kiss",
    "category": "people",
    "isAlternative": true
  },
  "lips": { "char": "👄", "slug": "lips", "category": "people" },
  "mouth": {
    "char": "👄",
    "slug": "lips",
    "category": "people",
    "isAlternative": true
  },
  "biting_lip": { "char": "🫦", "slug": "biting_lip", "category": "people" },
  "tooth": { "char": "🦷", "slug": "tooth", "category": "people" },
  "tongue": { "char": "👅", "slug": "tongue", "category": "people" },
  "ear": { "char": "👂", "slug": "ear", "category": "people" },
  "ear_tone1": { "char": "👂🏻", "slug": "ear_tone1", "category": "people" },
  "ear_tone2": { "char": "👂🏼", "slug": "ear_tone2", "category": "people" },
  "ear_tone3": { "char": "👂🏽", "slug": "ear_tone3", "category": "people" },
  "ear_tone4": { "char": "👂🏾", "slug": "ear_tone4", "category": "people" },
  "ear_tone5": { "char": "👂🏿", "slug": "ear_tone5", "category": "people" },
  "ear_with_hearing_aid": {
    "char": "🦻",
    "slug": "ear_with_hearing_aid",
    "category": "people"
  },
  "ear_with_hearing_aid_tone1": {
    "char": "🦻🏻",
    "slug": "ear_with_hearing_aid_tone1",
    "category": "people"
  },
  "ear_with_hearing_aid_light_skin_tone": {
    "char": "🦻🏻",
    "slug": "ear_with_hearing_aid_tone1",
    "category": "people",
    "isAlternative": true
  },
  "ear_with_hearing_aid_tone2": {
    "char": "🦻🏼",
    "slug": "ear_with_hearing_aid_tone2",
    "category": "people"
  },
  "ear_with_hearing_aid_medium_light_skin_tone": {
    "char": "🦻🏼",
    "slug": "ear_with_hearing_aid_tone2",
    "category": "people",
    "isAlternative": true
  },
  "ear_with_hearing_aid_tone3": {
    "char": "🦻🏽",
    "slug": "ear_with_hearing_aid_tone3",
    "category": "people"
  },
  "ear_with_hearing_aid_medium_skin_tone": {
    "char": "🦻🏽",
    "slug": "ear_with_hearing_aid_tone3",
    "category": "people",
    "isAlternative": true
  },
  "ear_with_hearing_aid_tone4": {
    "char": "🦻🏾",
    "slug": "ear_with_hearing_aid_tone4",
    "category": "people"
  },
  "ear_with_hearing_aid_medium_dark_skin_tone": {
    "char": "🦻🏾",
    "slug": "ear_with_hearing_aid_tone4",
    "category": "people",
    "isAlternative": true
  },
  "ear_with_hearing_aid_tone5": {
    "char": "🦻🏿",
    "slug": "ear_with_hearing_aid_tone5",
    "category": "people"
  },
  "ear_with_hearing_aid_dark_skin_tone": {
    "char": "🦻🏿",
    "slug": "ear_with_hearing_aid_tone5",
    "category": "people",
    "isAlternative": true
  },
  "nose": { "char": "👃", "slug": "nose", "category": "people" },
  "nose_tone1": { "char": "👃🏻", "slug": "nose_tone1", "category": "people" },
  "nose_tone2": { "char": "👃🏼", "slug": "nose_tone2", "category": "people" },
  "nose_tone3": { "char": "👃🏽", "slug": "nose_tone3", "category": "people" },
  "nose_tone4": { "char": "👃🏾", "slug": "nose_tone4", "category": "people" },
  "nose_tone5": { "char": "👃🏿", "slug": "nose_tone5", "category": "people" },
  "footprints": { "char": "👣", "slug": "footprints", "category": "people" },
  "eye": { "char": "👁️", "slug": "eye", "category": "people" },
  "eyes": { "char": "👀", "slug": "eyes", "category": "people" },
  "anatomical_heart": {
    "char": "🫀",
    "slug": "anatomical_heart",
    "category": "people"
  },
  "lungs": { "char": "🫁", "slug": "lungs", "category": "people" },
  "brain": { "char": "🧠", "slug": "brain", "category": "people" },
  "speaking_head": {
    "char": "🗣️",
    "slug": "speaking_head",
    "category": "people"
  },
  "speaking_head_in_silhouette": {
    "char": "🗣️",
    "slug": "speaking_head",
    "category": "people",
    "isAlternative": true
  },
  "bust_in_silhouette": {
    "char": "👤",
    "slug": "bust_in_silhouette",
    "category": "people"
  },
  "busts_in_silhouette": {
    "char": "👥",
    "slug": "busts_in_silhouette",
    "category": "people"
  },
  "people_hugging": {
    "char": "🫂",
    "slug": "people_hugging",
    "category": "people"
  },
  "baby": { "char": "👶", "slug": "baby", "category": "people" },
  "baby_tone1": { "char": "👶🏻", "slug": "baby_tone1", "category": "people" },
  "baby_tone2": { "char": "👶🏼", "slug": "baby_tone2", "category": "people" },
  "baby_tone3": { "char": "👶🏽", "slug": "baby_tone3", "category": "people" },
  "baby_tone4": { "char": "👶🏾", "slug": "baby_tone4", "category": "people" },
  "baby_tone5": { "char": "👶🏿", "slug": "baby_tone5", "category": "people" },
  "child": { "char": "🧒", "slug": "child", "category": "people" },
  "child_tone1": { "char": "🧒🏻", "slug": "child_tone1", "category": "people" },
  "child_light_skin_tone": {
    "char": "🧒🏻",
    "slug": "child_tone1",
    "category": "people",
    "isAlternative": true
  },
  "child_tone2": { "char": "🧒🏼", "slug": "child_tone2", "category": "people" },
  "child_medium_light_skin_tone": {
    "char": "🧒🏼",
    "slug": "child_tone2",
    "category": "people",
    "isAlternative": true
  },
  "child_tone3": { "char": "🧒🏽", "slug": "child_tone3", "category": "people" },
  "child_medium_skin_tone": {
    "char": "🧒🏽",
    "slug": "child_tone3",
    "category": "people",
    "isAlternative": true
  },
  "child_tone4": { "char": "🧒🏾", "slug": "child_tone4", "category": "people" },
  "child_medium_dark_skin_tone": {
    "char": "🧒🏾",
    "slug": "child_tone4",
    "category": "people",
    "isAlternative": true
  },
  "child_tone5": { "char": "🧒🏿", "slug": "child_tone5", "category": "people" },
  "child_dark_skin_tone": {
    "char": "🧒🏿",
    "slug": "child_tone5",
    "category": "people",
    "isAlternative": true
  },
  "girl": { "char": "👧", "slug": "girl", "category": "people" },
  "girl_tone1": { "char": "👧🏻", "slug": "girl_tone1", "category": "people" },
  "girl_tone2": { "char": "👧🏼", "slug": "girl_tone2", "category": "people" },
  "girl_tone3": { "char": "👧🏽", "slug": "girl_tone3", "category": "people" },
  "girl_tone4": { "char": "👧🏾", "slug": "girl_tone4", "category": "people" },
  "girl_tone5": { "char": "👧🏿", "slug": "girl_tone5", "category": "people" },
  "boy": { "char": "👦", "slug": "boy", "category": "people" },
  "boy_tone1": { "char": "👦🏻", "slug": "boy_tone1", "category": "people" },
  "boy_tone2": { "char": "👦🏼", "slug": "boy_tone2", "category": "people" },
  "boy_tone3": { "char": "👦🏽", "slug": "boy_tone3", "category": "people" },
  "boy_tone4": { "char": "👦🏾", "slug": "boy_tone4", "category": "people" },
  "boy_tone5": { "char": "👦🏿", "slug": "boy_tone5", "category": "people" },
  "adult": { "char": "🧑", "slug": "adult", "category": "people" },
  "person": {
    "char": "🧑",
    "slug": "adult",
    "category": "people",
    "isAlternative": true
  },
  "adult_tone1": { "char": "🧑🏻", "slug": "adult_tone1", "category": "people" },
  "adult_light_skin_tone": {
    "char": "🧑🏻",
    "slug": "adult_tone1",
    "category": "people",
    "isAlternative": true
  },
  "adult_tone2": { "char": "🧑🏼", "slug": "adult_tone2", "category": "people" },
  "adult_medium_light_skin_tone": {
    "char": "🧑🏼",
    "slug": "adult_tone2",
    "category": "people",
    "isAlternative": true
  },
  "adult_tone3": { "char": "🧑🏽", "slug": "adult_tone3", "category": "people" },
  "adult_medium_skin_tone": {
    "char": "🧑🏽",
    "slug": "adult_tone3",
    "category": "people",
    "isAlternative": true
  },
  "adult_tone4": { "char": "🧑🏾", "slug": "adult_tone4", "category": "people" },
  "adult_medium_dark_skin_tone": {
    "char": "🧑🏾",
    "slug": "adult_tone4",
    "category": "people",
    "isAlternative": true
  },
  "adult_tone5": { "char": "🧑🏿", "slug": "adult_tone5", "category": "people" },
  "adult_dark_skin_tone": {
    "char": "🧑🏿",
    "slug": "adult_tone5",
    "category": "people",
    "isAlternative": true
  },
  "woman": { "char": "👩", "slug": "woman", "category": "people" },
  "woman_tone1": { "char": "👩🏻", "slug": "woman_tone1", "category": "people" },
  "woman_tone2": { "char": "👩🏼", "slug": "woman_tone2", "category": "people" },
  "woman_tone3": { "char": "👩🏽", "slug": "woman_tone3", "category": "people" },
  "woman_tone4": { "char": "👩🏾", "slug": "woman_tone4", "category": "people" },
  "woman_tone5": { "char": "👩🏿", "slug": "woman_tone5", "category": "people" },
  "man": { "char": "👨", "slug": "man", "category": "people" },
  "man_tone1": { "char": "👨🏻", "slug": "man_tone1", "category": "people" },
  "man_tone2": { "char": "👨🏼", "slug": "man_tone2", "category": "people" },
  "man_tone3": { "char": "👨🏽", "slug": "man_tone3", "category": "people" },
  "man_tone4": { "char": "👨🏾", "slug": "man_tone4", "category": "people" },
  "man_tone5": { "char": "👨🏿", "slug": "man_tone5", "category": "people" },
  "person_curly_hair": {
    "char": "🧑‍🦱",
    "slug": "person_curly_hair",
    "category": "people"
  },
  "person_tone1_curly_hair": {
    "char": "🧑🏻‍🦱",
    "slug": "person_tone1_curly_hair",
    "category": "people"
  },
  "person_light_skin_tone_curly_hair": {
    "char": "🧑🏻‍🦱",
    "slug": "person_tone1_curly_hair",
    "category": "people",
    "isAlternative": true
  },
  "person_tone2_curly_hair": {
    "char": "🧑🏼‍🦱",
    "slug": "person_tone2_curly_hair",
    "category": "people"
  },
  "person_medium_light_skin_tone_curly_hair": {
    "char": "🧑🏼‍🦱",
    "slug": "person_tone2_curly_hair",
    "category": "people",
    "isAlternative": true
  },
  "person_tone3_curly_hair": {
    "char": "🧑🏽‍🦱",
    "slug": "person_tone3_curly_hair",
    "category": "people"
  },
  "person_medium_skin_tone_curly_hair": {
    "char": "🧑🏽‍🦱",
    "slug": "person_tone3_curly_hair",
    "category": "people",
    "isAlternative": true
  },
  "person_tone4_curly_hair": {
    "char": "🧑🏾‍🦱",
    "slug": "person_tone4_curly_hair",
    "category": "people"
  },
  "person_medium_dark_skin_tone_curly_hair": {
    "char": "🧑🏾‍🦱",
    "slug": "person_tone4_curly_hair",
    "category": "people",
    "isAlternative": true
  },
  "person_tone5_curly_hair": {
    "char": "🧑🏿‍🦱",
    "slug": "person_tone5_curly_hair",
    "category": "people"
  },
  "person_dark_skin_tone_curly_hair": {
    "char": "🧑🏿‍🦱",
    "slug": "person_tone5_curly_hair",
    "category": "people",
    "isAlternative": true
  },
  "woman_curly_haired": {
    "char": "👩‍🦱",
    "slug": "woman_curly_haired",
    "category": "people"
  },
  "woman_curly_haired_tone1": {
    "char": "👩🏻‍🦱",
    "slug": "woman_curly_haired_tone1",
    "category": "people"
  },
  "woman_curly_haired_light_skin_tone": {
    "char": "👩🏻‍🦱",
    "slug": "woman_curly_haired_tone1",
    "category": "people",
    "isAlternative": true
  },
  "woman_curly_haired_tone2": {
    "char": "👩🏼‍🦱",
    "slug": "woman_curly_haired_tone2",
    "category": "people"
  },
  "woman_curly_haired_medium_light_skin_tone": {
    "char": "👩🏼‍🦱",
    "slug": "woman_curly_haired_tone2",
    "category": "people",
    "isAlternative": true
  },
  "woman_curly_haired_tone3": {
    "char": "👩🏽‍🦱",
    "slug": "woman_curly_haired_tone3",
    "category": "people"
  },
  "woman_curly_haired_medium_skin_tone": {
    "char": "👩🏽‍🦱",
    "slug": "woman_curly_haired_tone3",
    "category": "people",
    "isAlternative": true
  },
  "woman_curly_haired_tone4": {
    "char": "👩🏾‍🦱",
    "slug": "woman_curly_haired_tone4",
    "category": "people"
  },
  "woman_curly_haired_medium_dark_skin_tone": {
    "char": "👩🏾‍🦱",
    "slug": "woman_curly_haired_tone4",
    "category": "people",
    "isAlternative": true
  },
  "woman_curly_haired_tone5": {
    "char": "👩🏿‍🦱",
    "slug": "woman_curly_haired_tone5",
    "category": "people"
  },
  "woman_curly_haired_dark_skin_tone": {
    "char": "👩🏿‍🦱",
    "slug": "woman_curly_haired_tone5",
    "category": "people",
    "isAlternative": true
  },
  "man_curly_haired": {
    "char": "👨‍🦱",
    "slug": "man_curly_haired",
    "category": "people"
  },
  "man_curly_haired_tone1": {
    "char": "👨🏻‍🦱",
    "slug": "man_curly_haired_tone1",
    "category": "people"
  },
  "man_curly_haired_light_skin_tone": {
    "char": "👨🏻‍🦱",
    "slug": "man_curly_haired_tone1",
    "category": "people",
    "isAlternative": true
  },
  "man_curly_haired_tone2": {
    "char": "👨🏼‍🦱",
    "slug": "man_curly_haired_tone2",
    "category": "people"
  },
  "man_curly_haired_medium_light_skin_tone": {
    "char": "👨🏼‍🦱",
    "slug": "man_curly_haired_tone2",
    "category": "people",
    "isAlternative": true
  },
  "man_curly_haired_tone3": {
    "char": "👨🏽‍🦱",
    "slug": "man_curly_haired_tone3",
    "category": "people"
  },
  "man_curly_haired_medium_skin_tone": {
    "char": "👨🏽‍🦱",
    "slug": "man_curly_haired_tone3",
    "category": "people",
    "isAlternative": true
  },
  "man_curly_haired_tone4": {
    "char": "👨🏾‍🦱",
    "slug": "man_curly_haired_tone4",
    "category": "people"
  },
  "man_curly_haired_medium_dark_skin_tone": {
    "char": "👨🏾‍🦱",
    "slug": "man_curly_haired_tone4",
    "category": "people",
    "isAlternative": true
  },
  "man_curly_haired_tone5": {
    "char": "👨🏿‍🦱",
    "slug": "man_curly_haired_tone5",
    "category": "people"
  },
  "man_curly_haired_dark_skin_tone": {
    "char": "👨🏿‍🦱",
    "slug": "man_curly_haired_tone5",
    "category": "people",
    "isAlternative": true
  },
  "person_red_hair": {
    "char": "🧑‍🦰",
    "slug": "person_red_hair",
    "category": "people"
  },
  "person_tone1_red_hair": {
    "char": "🧑🏻‍🦰",
    "slug": "person_tone1_red_hair",
    "category": "people"
  },
  "person_light_skin_tone_red_hair": {
    "char": "🧑🏻‍🦰",
    "slug": "person_tone1_red_hair",
    "category": "people",
    "isAlternative": true
  },
  "person_tone2_red_hair": {
    "char": "🧑🏼‍🦰",
    "slug": "person_tone2_red_hair",
    "category": "people"
  },
  "person_medium_light_skin_tone_red_hair": {
    "char": "🧑🏼‍🦰",
    "slug": "person_tone2_red_hair",
    "category": "people",
    "isAlternative": true
  },
  "person_tone3_red_hair": {
    "char": "🧑🏽‍🦰",
    "slug": "person_tone3_red_hair",
    "category": "people"
  },
  "person_medium_skin_tone_red_hair": {
    "char": "🧑🏽‍🦰",
    "slug": "person_tone3_red_hair",
    "category": "people",
    "isAlternative": true
  },
  "person_tone4_red_hair": {
    "char": "🧑🏾‍🦰",
    "slug": "person_tone4_red_hair",
    "category": "people"
  },
  "person_medium_dark_skin_tone_red_hair": {
    "char": "🧑🏾‍🦰",
    "slug": "person_tone4_red_hair",
    "category": "people",
    "isAlternative": true
  },
  "person_tone5_red_hair": {
    "char": "🧑🏿‍🦰",
    "slug": "person_tone5_red_hair",
    "category": "people"
  },
  "person_dark_skin_tone_red_hair": {
    "char": "🧑🏿‍🦰",
    "slug": "person_tone5_red_hair",
    "category": "people",
    "isAlternative": true
  },
  "woman_red_haired": {
    "char": "👩‍🦰",
    "slug": "woman_red_haired",
    "category": "people"
  },
  "woman_red_haired_tone1": {
    "char": "👩🏻‍🦰",
    "slug": "woman_red_haired_tone1",
    "category": "people"
  },
  "woman_red_haired_light_skin_tone": {
    "char": "👩🏻‍🦰",
    "slug": "woman_red_haired_tone1",
    "category": "people",
    "isAlternative": true
  },
  "woman_red_haired_tone2": {
    "char": "👩🏼‍🦰",
    "slug": "woman_red_haired_tone2",
    "category": "people"
  },
  "woman_red_haired_medium_light_skin_tone": {
    "char": "👩🏼‍🦰",
    "slug": "woman_red_haired_tone2",
    "category": "people",
    "isAlternative": true
  },
  "woman_red_haired_tone3": {
    "char": "👩🏽‍🦰",
    "slug": "woman_red_haired_tone3",
    "category": "people"
  },
  "woman_red_haired_medium_skin_tone": {
    "char": "👩🏽‍🦰",
    "slug": "woman_red_haired_tone3",
    "category": "people",
    "isAlternative": true
  },
  "woman_red_haired_tone4": {
    "char": "👩🏾‍🦰",
    "slug": "woman_red_haired_tone4",
    "category": "people"
  },
  "woman_red_haired_medium_dark_skin_tone": {
    "char": "👩🏾‍🦰",
    "slug": "woman_red_haired_tone4",
    "category": "people",
    "isAlternative": true
  },
  "woman_red_haired_tone5": {
    "char": "👩🏿‍🦰",
    "slug": "woman_red_haired_tone5",
    "category": "people"
  },
  "woman_red_haired_dark_skin_tone": {
    "char": "👩🏿‍🦰",
    "slug": "woman_red_haired_tone5",
    "category": "people",
    "isAlternative": true
  },
  "man_red_haired": {
    "char": "👨‍🦰",
    "slug": "man_red_haired",
    "category": "people"
  },
  "man_red_hair": {
    "char": "👨‍🦰",
    "slug": "man_red_haired",
    "category": "people",
    "isAlternative": true
  },
  "man_red_haired_tone1": {
    "char": "👨🏻‍🦰",
    "slug": "man_red_haired_tone1",
    "category": "people"
  },
  "man_red_haired_light_skin_tone": {
    "char": "👨🏻‍🦰",
    "slug": "man_red_haired_tone1",
    "category": "people",
    "isAlternative": true
  },
  "man_red_haired_tone2": {
    "char": "👨🏼‍🦰",
    "slug": "man_red_haired_tone2",
    "category": "people"
  },
  "man_red_haired_medium_light_skin_tone": {
    "char": "👨🏼‍🦰",
    "slug": "man_red_haired_tone2",
    "category": "people",
    "isAlternative": true
  },
  "man_red_haired_tone3": {
    "char": "👨🏽‍🦰",
    "slug": "man_red_haired_tone3",
    "category": "people"
  },
  "man_red_haired_medium_skin_tone": {
    "char": "👨🏽‍🦰",
    "slug": "man_red_haired_tone3",
    "category": "people",
    "isAlternative": true
  },
  "man_red_haired_tone4": {
    "char": "👨🏾‍🦰",
    "slug": "man_red_haired_tone4",
    "category": "people"
  },
  "man_red_haired_medium_dark_skin_tone": {
    "char": "👨🏾‍🦰",
    "slug": "man_red_haired_tone4",
    "category": "people",
    "isAlternative": true
  },
  "man_red_haired_tone5": {
    "char": "👨🏿‍🦰",
    "slug": "man_red_haired_tone5",
    "category": "people"
  },
  "man_red_haired_dark_skin_tone": {
    "char": "👨🏿‍🦰",
    "slug": "man_red_haired_tone5",
    "category": "people",
    "isAlternative": true
  },
  "blond_haired_person": {
    "char": "👱",
    "slug": "blond_haired_person",
    "category": "people"
  },
  "person_with_blond_hair": {
    "char": "👱",
    "slug": "blond_haired_person",
    "category": "people",
    "isAlternative": true
  },
  "blond_haired_person_tone1": {
    "char": "👱🏻",
    "slug": "blond_haired_person_tone1",
    "category": "people"
  },
  "person_with_blond_hair_tone1": {
    "char": "👱🏻",
    "slug": "blond_haired_person_tone1",
    "category": "people",
    "isAlternative": true
  },
  "blond_haired_person_tone2": {
    "char": "👱🏼",
    "slug": "blond_haired_person_tone2",
    "category": "people"
  },
  "person_with_blond_hair_tone2": {
    "char": "👱🏼",
    "slug": "blond_haired_person_tone2",
    "category": "people",
    "isAlternative": true
  },
  "blond_haired_person_tone3": {
    "char": "👱🏽",
    "slug": "blond_haired_person_tone3",
    "category": "people"
  },
  "person_with_blond_hair_tone3": {
    "char": "👱🏽",
    "slug": "blond_haired_person_tone3",
    "category": "people",
    "isAlternative": true
  },
  "blond_haired_person_tone4": {
    "char": "👱🏾",
    "slug": "blond_haired_person_tone4",
    "category": "people"
  },
  "person_with_blond_hair_tone4": {
    "char": "👱🏾",
    "slug": "blond_haired_person_tone4",
    "category": "people",
    "isAlternative": true
  },
  "blond_haired_person_tone5": {
    "char": "👱🏿",
    "slug": "blond_haired_person_tone5",
    "category": "people"
  },
  "person_with_blond_hair_tone5": {
    "char": "👱🏿",
    "slug": "blond_haired_person_tone5",
    "category": "people",
    "isAlternative": true
  },
  "blond-haired_woman": {
    "char": "👱‍♀️",
    "slug": "blond-haired_woman",
    "category": "people"
  },
  "blond-haired_woman_tone1": {
    "char": "👱🏻‍♀️",
    "slug": "blond-haired_woman_tone1",
    "category": "people"
  },
  "blond-haired_woman_light_skin_tone": {
    "char": "👱🏻‍♀️",
    "slug": "blond-haired_woman_tone1",
    "category": "people",
    "isAlternative": true
  },
  "blond-haired_woman_tone2": {
    "char": "👱🏼‍♀️",
    "slug": "blond-haired_woman_tone2",
    "category": "people"
  },
  "blond-haired_woman_medium_light_skin_tone": {
    "char": "👱🏼‍♀️",
    "slug": "blond-haired_woman_tone2",
    "category": "people",
    "isAlternative": true
  },
  "blond-haired_woman_tone3": {
    "char": "👱🏽‍♀️",
    "slug": "blond-haired_woman_tone3",
    "category": "people"
  },
  "blond-haired_woman_medium_skin_tone": {
    "char": "👱🏽‍♀️",
    "slug": "blond-haired_woman_tone3",
    "category": "people",
    "isAlternative": true
  },
  "blond-haired_woman_tone4": {
    "char": "👱🏾‍♀️",
    "slug": "blond-haired_woman_tone4",
    "category": "people"
  },
  "blond-haired_woman_medium_dark_skin_tone": {
    "char": "👱🏾‍♀️",
    "slug": "blond-haired_woman_tone4",
    "category": "people",
    "isAlternative": true
  },
  "blond-haired_woman_tone5": {
    "char": "👱🏿‍♀️",
    "slug": "blond-haired_woman_tone5",
    "category": "people"
  },
  "blond-haired_woman_dark_skin_tone": {
    "char": "👱🏿‍♀️",
    "slug": "blond-haired_woman_tone5",
    "category": "people",
    "isAlternative": true
  },
  "blond-haired_man": {
    "char": "👱‍♂️",
    "slug": "blond-haired_man",
    "category": "people"
  },
  "blond-haired_man_tone1": {
    "char": "👱🏻‍♂️",
    "slug": "blond-haired_man_tone1",
    "category": "people"
  },
  "blond-haired_man_light_skin_tone": {
    "char": "👱🏻‍♂️",
    "slug": "blond-haired_man_tone1",
    "category": "people",
    "isAlternative": true
  },
  "blond-haired_man_tone2": {
    "char": "👱🏼‍♂️",
    "slug": "blond-haired_man_tone2",
    "category": "people"
  },
  "blond-haired_man_medium_light_skin_tone": {
    "char": "👱🏼‍♂️",
    "slug": "blond-haired_man_tone2",
    "category": "people",
    "isAlternative": true
  },
  "blond-haired_man_tone3": {
    "char": "👱🏽‍♂️",
    "slug": "blond-haired_man_tone3",
    "category": "people"
  },
  "blond-haired_man_medium_skin_tone": {
    "char": "👱🏽‍♂️",
    "slug": "blond-haired_man_tone3",
    "category": "people",
    "isAlternative": true
  },
  "blond-haired_man_tone4": {
    "char": "👱🏾‍♂️",
    "slug": "blond-haired_man_tone4",
    "category": "people"
  },
  "blond-haired_man_medium_dark_skin_tone": {
    "char": "👱🏾‍♂️",
    "slug": "blond-haired_man_tone4",
    "category": "people",
    "isAlternative": true
  },
  "blond-haired_man_tone5": {
    "char": "👱🏿‍♂️",
    "slug": "blond-haired_man_tone5",
    "category": "people"
  },
  "blond-haired_man_dark_skin_tone": {
    "char": "👱🏿‍♂️",
    "slug": "blond-haired_man_tone5",
    "category": "people",
    "isAlternative": true
  },
  "person_white_hair": {
    "char": "🧑‍🦳",
    "slug": "person_white_hair",
    "category": "people"
  },
  "person_tone1_white_hair": {
    "char": "🧑🏻‍🦳",
    "slug": "person_tone1_white_hair",
    "category": "people"
  },
  "person_light_skin_tone_white_hair": {
    "char": "🧑🏻‍🦳",
    "slug": "person_tone1_white_hair",
    "category": "people",
    "isAlternative": true
  },
  "person_tone2_white_hair": {
    "char": "🧑🏼‍🦳",
    "slug": "person_tone2_white_hair",
    "category": "people"
  },
  "person_medium_light_skin_tone_white_hair": {
    "char": "🧑🏼‍🦳",
    "slug": "person_tone2_white_hair",
    "category": "people",
    "isAlternative": true
  },
  "person_tone3_white_hair": {
    "char": "🧑🏽‍🦳",
    "slug": "person_tone3_white_hair",
    "category": "people"
  },
  "person_medium_skin_tone_white_hair": {
    "char": "🧑🏽‍🦳",
    "slug": "person_tone3_white_hair",
    "category": "people",
    "isAlternative": true
  },
  "person_tone4_white_hair": {
    "char": "🧑🏾‍🦳",
    "slug": "person_tone4_white_hair",
    "category": "people"
  },
  "person_medium_dark_skin_tone_white_hair": {
    "char": "🧑🏾‍🦳",
    "slug": "person_tone4_white_hair",
    "category": "people",
    "isAlternative": true
  },
  "person_tone5_white_hair": {
    "char": "🧑🏿‍🦳",
    "slug": "person_tone5_white_hair",
    "category": "people"
  },
  "person_dark_skin_tone_white_hair": {
    "char": "🧑🏿‍🦳",
    "slug": "person_tone5_white_hair",
    "category": "people",
    "isAlternative": true
  },
  "woman_white_haired": {
    "char": "👩‍🦳",
    "slug": "woman_white_haired",
    "category": "people"
  },
  "woman_white_haired_tone1": {
    "char": "👩🏻‍🦳",
    "slug": "woman_white_haired_tone1",
    "category": "people"
  },
  "woman_white_haired_light_skin_tone": {
    "char": "👩🏻‍🦳",
    "slug": "woman_white_haired_tone1",
    "category": "people",
    "isAlternative": true
  },
  "woman_white_haired_tone2": {
    "char": "👩🏼‍🦳",
    "slug": "woman_white_haired_tone2",
    "category": "people"
  },
  "woman_white_haired_medium_light_skin_tone": {
    "char": "👩🏼‍🦳",
    "slug": "woman_white_haired_tone2",
    "category": "people",
    "isAlternative": true
  },
  "woman_white_haired_tone3": {
    "char": "👩🏽‍🦳",
    "slug": "woman_white_haired_tone3",
    "category": "people"
  },
  "woman_white_haired_medium_skin_tone": {
    "char": "👩🏽‍🦳",
    "slug": "woman_white_haired_tone3",
    "category": "people",
    "isAlternative": true
  },
  "woman_white_haired_tone4": {
    "char": "👩🏾‍🦳",
    "slug": "woman_white_haired_tone4",
    "category": "people"
  },
  "woman_white_haired_medium_dark_skin_tone": {
    "char": "👩🏾‍🦳",
    "slug": "woman_white_haired_tone4",
    "category": "people",
    "isAlternative": true
  },
  "woman_white_haired_tone5": {
    "char": "👩🏿‍🦳",
    "slug": "woman_white_haired_tone5",
    "category": "people"
  },
  "woman_white_haired_dark_skin_tone": {
    "char": "👩🏿‍🦳",
    "slug": "woman_white_haired_tone5",
    "category": "people",
    "isAlternative": true
  },
  "man_white_haired": {
    "char": "👨‍🦳",
    "slug": "man_white_haired",
    "category": "people"
  },
  "man_white_haired_tone1": {
    "char": "👨🏻‍🦳",
    "slug": "man_white_haired_tone1",
    "category": "people"
  },
  "man_white_haired_light_skin_tone": {
    "char": "👨🏻‍🦳",
    "slug": "man_white_haired_tone1",
    "category": "people",
    "isAlternative": true
  },
  "man_white_haired_tone2": {
    "char": "👨🏼‍🦳",
    "slug": "man_white_haired_tone2",
    "category": "people"
  },
  "man_white_haired_medium_light_skin_tone": {
    "char": "👨🏼‍🦳",
    "slug": "man_white_haired_tone2",
    "category": "people",
    "isAlternative": true
  },
  "man_white_haired_tone3": {
    "char": "👨🏽‍🦳",
    "slug": "man_white_haired_tone3",
    "category": "people"
  },
  "man_white_haired_medium_skin_tone": {
    "char": "👨🏽‍🦳",
    "slug": "man_white_haired_tone3",
    "category": "people",
    "isAlternative": true
  },
  "man_white_haired_tone4": {
    "char": "👨🏾‍🦳",
    "slug": "man_white_haired_tone4",
    "category": "people"
  },
  "man_white_haired_medium_dark_skin_tone": {
    "char": "👨🏾‍🦳",
    "slug": "man_white_haired_tone4",
    "category": "people",
    "isAlternative": true
  },
  "man_white_haired_tone5": {
    "char": "👨🏿‍🦳",
    "slug": "man_white_haired_tone5",
    "category": "people"
  },
  "man_white_haired_dark_skin_tone": {
    "char": "👨🏿‍🦳",
    "slug": "man_white_haired_tone5",
    "category": "people",
    "isAlternative": true
  },
  "person_bald": { "char": "🧑‍🦲", "slug": "person_bald", "category": "people" },
  "person_tone1_bald": {
    "char": "🧑🏻‍🦲",
    "slug": "person_tone1_bald",
    "category": "people"
  },
  "person_light_skin_tone_bald": {
    "char": "🧑🏻‍🦲",
    "slug": "person_tone1_bald",
    "category": "people",
    "isAlternative": true
  },
  "person_tone2_bald": {
    "char": "🧑🏼‍🦲",
    "slug": "person_tone2_bald",
    "category": "people"
  },
  "person_medium_light_skin_tone_bald": {
    "char": "🧑🏼‍🦲",
    "slug": "person_tone2_bald",
    "category": "people",
    "isAlternative": true
  },
  "person_tone3_bald": {
    "char": "🧑🏽‍🦲",
    "slug": "person_tone3_bald",
    "category": "people"
  },
  "person_medium_skin_tone_bald": {
    "char": "🧑🏽‍🦲",
    "slug": "person_tone3_bald",
    "category": "people",
    "isAlternative": true
  },
  "person_tone4_bald": {
    "char": "🧑🏾‍🦲",
    "slug": "person_tone4_bald",
    "category": "people"
  },
  "person_medium_dark_skin_tone_bald": {
    "char": "🧑🏾‍🦲",
    "slug": "person_tone4_bald",
    "category": "people",
    "isAlternative": true
  },
  "person_tone5_bald": {
    "char": "🧑🏿‍🦲",
    "slug": "person_tone5_bald",
    "category": "people"
  },
  "person_dark_skin_tone_bald": {
    "char": "🧑🏿‍🦲",
    "slug": "person_tone5_bald",
    "category": "people",
    "isAlternative": true
  },
  "woman_bald": { "char": "👩‍🦲", "slug": "woman_bald", "category": "people" },
  "woman_bald_tone1": {
    "char": "👩🏻‍🦲",
    "slug": "woman_bald_tone1",
    "category": "people"
  },
  "woman_bald_light_skin_tone": {
    "char": "👩🏻‍🦲",
    "slug": "woman_bald_tone1",
    "category": "people",
    "isAlternative": true
  },
  "woman_bald_tone2": {
    "char": "👩🏼‍🦲",
    "slug": "woman_bald_tone2",
    "category": "people"
  },
  "woman_bald_medium_light_skin_tone": {
    "char": "👩🏼‍🦲",
    "slug": "woman_bald_tone2",
    "category": "people",
    "isAlternative": true
  },
  "woman_bald_tone3": {
    "char": "👩🏽‍🦲",
    "slug": "woman_bald_tone3",
    "category": "people"
  },
  "woman_bald_medium_skin_tone": {
    "char": "👩🏽‍🦲",
    "slug": "woman_bald_tone3",
    "category": "people",
    "isAlternative": true
  },
  "woman_bald_tone4": {
    "char": "👩🏾‍🦲",
    "slug": "woman_bald_tone4",
    "category": "people"
  },
  "woman_bald_medium_dark_skin_tone": {
    "char": "👩🏾‍🦲",
    "slug": "woman_bald_tone4",
    "category": "people",
    "isAlternative": true
  },
  "woman_bald_tone5": {
    "char": "👩🏿‍🦲",
    "slug": "woman_bald_tone5",
    "category": "people"
  },
  "woman_bald_dark_skin_tone": {
    "char": "👩🏿‍🦲",
    "slug": "woman_bald_tone5",
    "category": "people",
    "isAlternative": true
  },
  "man_bald": { "char": "👨‍🦲", "slug": "man_bald", "category": "people" },
  "man_bald_tone1": {
    "char": "👨🏻‍🦲",
    "slug": "man_bald_tone1",
    "category": "people"
  },
  "man_bald_light_skin_tone": {
    "char": "👨🏻‍🦲",
    "slug": "man_bald_tone1",
    "category": "people",
    "isAlternative": true
  },
  "man_bald_tone2": {
    "char": "👨🏼‍🦲",
    "slug": "man_bald_tone2",
    "category": "people"
  },
  "man_bald_medium_light_skin_tone": {
    "char": "👨🏼‍🦲",
    "slug": "man_bald_tone2",
    "category": "people",
    "isAlternative": true
  },
  "man_bald_tone3": {
    "char": "👨🏽‍🦲",
    "slug": "man_bald_tone3",
    "category": "people"
  },
  "man_bald_medium_skin_tone": {
    "char": "👨🏽‍🦲",
    "slug": "man_bald_tone3",
    "category": "people",
    "isAlternative": true
  },
  "man_bald_tone4": {
    "char": "👨🏾‍🦲",
    "slug": "man_bald_tone4",
    "category": "people"
  },
  "man_bald_medium_dark_skin_tone": {
    "char": "👨🏾‍🦲",
    "slug": "man_bald_tone4",
    "category": "people",
    "isAlternative": true
  },
  "man_bald_tone5": {
    "char": "👨🏿‍🦲",
    "slug": "man_bald_tone5",
    "category": "people"
  },
  "man_bald_dark_skin_tone": {
    "char": "👨🏿‍🦲",
    "slug": "man_bald_tone5",
    "category": "people",
    "isAlternative": true
  },
  "bearded_person": {
    "char": "🧔",
    "slug": "bearded_person",
    "category": "people"
  },
  "person_beard": {
    "char": "🧔",
    "slug": "bearded_person",
    "category": "people",
    "isAlternative": true
  },
  "bearded_person_tone1": {
    "char": "🧔🏻",
    "slug": "bearded_person_tone1",
    "category": "people"
  },
  "bearded_person_light_skin_tone": {
    "char": "🧔🏻",
    "slug": "bearded_person_tone1",
    "category": "people",
    "isAlternative": true
  },
  "bearded_person_tone2": {
    "char": "🧔🏼",
    "slug": "bearded_person_tone2",
    "category": "people"
  },
  "bearded_person_medium_light_skin_tone": {
    "char": "🧔🏼",
    "slug": "bearded_person_tone2",
    "category": "people",
    "isAlternative": true
  },
  "bearded_person_tone3": {
    "char": "🧔🏽",
    "slug": "bearded_person_tone3",
    "category": "people"
  },
  "bearded_person_medium_skin_tone": {
    "char": "🧔🏽",
    "slug": "bearded_person_tone3",
    "category": "people",
    "isAlternative": true
  },
  "bearded_person_tone4": {
    "char": "🧔🏾",
    "slug": "bearded_person_tone4",
    "category": "people"
  },
  "bearded_person_medium_dark_skin_tone": {
    "char": "🧔🏾",
    "slug": "bearded_person_tone4",
    "category": "people",
    "isAlternative": true
  },
  "bearded_person_tone5": {
    "char": "🧔🏿",
    "slug": "bearded_person_tone5",
    "category": "people"
  },
  "bearded_person_dark_skin_tone": {
    "char": "🧔🏿",
    "slug": "bearded_person_tone5",
    "category": "people",
    "isAlternative": true
  },
  "woman_beard": { "char": "🧔‍♀️", "slug": "woman_beard", "category": "people" },
  "woman_tone1_beard": {
    "char": "🧔🏻‍♀️",
    "slug": "woman_tone1_beard",
    "category": "people"
  },
  "woman_light_skin_tone_beard": {
    "char": "🧔🏻‍♀️",
    "slug": "woman_tone1_beard",
    "category": "people",
    "isAlternative": true
  },
  "woman_tone2_beard": {
    "char": "🧔🏼‍♀️",
    "slug": "woman_tone2_beard",
    "category": "people"
  },
  "woman_medium_light_skin_tone_beard": {
    "char": "🧔🏼‍♀️",
    "slug": "woman_tone2_beard",
    "category": "people",
    "isAlternative": true
  },
  "woman_tone3_beard": {
    "char": "🧔🏽‍♀️",
    "slug": "woman_tone3_beard",
    "category": "people"
  },
  "woman_medium_skin_tone_beard": {
    "char": "🧔🏽‍♀️",
    "slug": "woman_tone3_beard",
    "category": "people",
    "isAlternative": true
  },
  "woman_tone4_beard": {
    "char": "🧔🏾‍♀️",
    "slug": "woman_tone4_beard",
    "category": "people"
  },
  "woman_medium_dark_skin_tone_beard": {
    "char": "🧔🏾‍♀️",
    "slug": "woman_tone4_beard",
    "category": "people",
    "isAlternative": true
  },
  "woman_tone5_beard": {
    "char": "🧔🏿‍♀️",
    "slug": "woman_tone5_beard",
    "category": "people"
  },
  "woman_dark_skin_tone_beard": {
    "char": "🧔🏿‍♀️",
    "slug": "woman_tone5_beard",
    "category": "people",
    "isAlternative": true
  },
  "man_beard": { "char": "🧔‍♂️", "slug": "man_beard", "category": "people" },
  "man_tone1_beard": {
    "char": "🧔🏻‍♂️",
    "slug": "man_tone1_beard",
    "category": "people"
  },
  "man_light_skin_tone_beard": {
    "char": "🧔🏻‍♂️",
    "slug": "man_tone1_beard",
    "category": "people",
    "isAlternative": true
  },
  "man_tone2_beard": {
    "char": "🧔🏼‍♂️",
    "slug": "man_tone2_beard",
    "category": "people"
  },
  "man_medium_light_skin_tone_beard": {
    "char": "🧔🏼‍♂️",
    "slug": "man_tone2_beard",
    "category": "people",
    "isAlternative": true
  },
  "man_tone3_beard": {
    "char": "🧔🏽‍♂️",
    "slug": "man_tone3_beard",
    "category": "people"
  },
  "man_medium_skin_tone_beard": {
    "char": "🧔🏽‍♂️",
    "slug": "man_tone3_beard",
    "category": "people",
    "isAlternative": true
  },
  "man_tone4_beard": {
    "char": "🧔🏾‍♂️",
    "slug": "man_tone4_beard",
    "category": "people"
  },
  "man_medium_dark_skin_tone_beard": {
    "char": "🧔🏾‍♂️",
    "slug": "man_tone4_beard",
    "category": "people",
    "isAlternative": true
  },
  "man_tone5_beard": {
    "char": "🧔🏿‍♂️",
    "slug": "man_tone5_beard",
    "category": "people"
  },
  "man_dark_skin_tone_beard": {
    "char": "🧔🏿‍♂️",
    "slug": "man_tone5_beard",
    "category": "people",
    "isAlternative": true
  },
  "older_adult": { "char": "🧓", "slug": "older_adult", "category": "people" },
  "older_person": {
    "char": "🧓",
    "slug": "older_adult",
    "category": "people",
    "isAlternative": true
  },
  "older_adult_tone1": {
    "char": "🧓🏻",
    "slug": "older_adult_tone1",
    "category": "people"
  },
  "older_adult_light_skin_tone": {
    "char": "🧓🏻",
    "slug": "older_adult_tone1",
    "category": "people",
    "isAlternative": true
  },
  "older_adult_tone2": {
    "char": "🧓🏼",
    "slug": "older_adult_tone2",
    "category": "people"
  },
  "older_adult_medium_light_skin_tone": {
    "char": "🧓🏼",
    "slug": "older_adult_tone2",
    "category": "people",
    "isAlternative": true
  },
  "older_adult_tone3": {
    "char": "🧓🏽",
    "slug": "older_adult_tone3",
    "category": "people"
  },
  "older_adult_medium_skin_tone": {
    "char": "🧓🏽",
    "slug": "older_adult_tone3",
    "category": "people",
    "isAlternative": true
  },
  "older_adult_tone4": {
    "char": "🧓🏾",
    "slug": "older_adult_tone4",
    "category": "people"
  },
  "older_adult_medium_dark_skin_tone": {
    "char": "🧓🏾",
    "slug": "older_adult_tone4",
    "category": "people",
    "isAlternative": true
  },
  "older_adult_tone5": {
    "char": "🧓🏿",
    "slug": "older_adult_tone5",
    "category": "people"
  },
  "older_adult_dark_skin_tone": {
    "char": "🧓🏿",
    "slug": "older_adult_tone5",
    "category": "people",
    "isAlternative": true
  },
  "older_woman": { "char": "👵", "slug": "older_woman", "category": "people" },
  "grandma": {
    "char": "👵",
    "slug": "older_woman",
    "category": "people",
    "isAlternative": true
  },
  "old_woman": {
    "char": "👵",
    "slug": "older_woman",
    "category": "people",
    "isAlternative": true
  },
  "older_woman_tone1": {
    "char": "👵🏻",
    "slug": "older_woman_tone1",
    "category": "people"
  },
  "grandma_tone1": {
    "char": "👵🏻",
    "slug": "older_woman_tone1",
    "category": "people",
    "isAlternative": true
  },
  "older_woman_tone2": {
    "char": "👵🏼",
    "slug": "older_woman_tone2",
    "category": "people"
  },
  "grandma_tone2": {
    "char": "👵🏼",
    "slug": "older_woman_tone2",
    "category": "people",
    "isAlternative": true
  },
  "older_woman_tone3": {
    "char": "👵🏽",
    "slug": "older_woman_tone3",
    "category": "people"
  },
  "grandma_tone3": {
    "char": "👵🏽",
    "slug": "older_woman_tone3",
    "category": "people",
    "isAlternative": true
  },
  "older_woman_tone4": {
    "char": "👵🏾",
    "slug": "older_woman_tone4",
    "category": "people"
  },
  "grandma_tone4": {
    "char": "👵🏾",
    "slug": "older_woman_tone4",
    "category": "people",
    "isAlternative": true
  },
  "older_woman_tone5": {
    "char": "👵🏿",
    "slug": "older_woman_tone5",
    "category": "people"
  },
  "grandma_tone5": {
    "char": "👵🏿",
    "slug": "older_woman_tone5",
    "category": "people",
    "isAlternative": true
  },
  "older_man": { "char": "👴", "slug": "older_man", "category": "people" },
  "old_man": {
    "char": "👴",
    "slug": "older_man",
    "category": "people",
    "isAlternative": true
  },
  "older_man_tone1": {
    "char": "👴🏻",
    "slug": "older_man_tone1",
    "category": "people"
  },
  "older_man_tone2": {
    "char": "👴🏼",
    "slug": "older_man_tone2",
    "category": "people"
  },
  "older_man_tone3": {
    "char": "👴🏽",
    "slug": "older_man_tone3",
    "category": "people"
  },
  "older_man_tone4": {
    "char": "👴🏾",
    "slug": "older_man_tone4",
    "category": "people"
  },
  "older_man_tone5": {
    "char": "👴🏿",
    "slug": "older_man_tone5",
    "category": "people"
  },
  "man_with_chinese_cap": {
    "char": "👲",
    "slug": "man_with_chinese_cap",
    "category": "people"
  },
  "man_with_gua_pi_mao": {
    "char": "👲",
    "slug": "man_with_chinese_cap",
    "category": "people",
    "isAlternative": true
  },
  "man_with_chinese_cap_tone1": {
    "char": "👲🏻",
    "slug": "man_with_chinese_cap_tone1",
    "category": "people"
  },
  "man_with_gua_pi_mao_tone1": {
    "char": "👲🏻",
    "slug": "man_with_chinese_cap_tone1",
    "category": "people",
    "isAlternative": true
  },
  "man_with_chinese_cap_tone2": {
    "char": "👲🏼",
    "slug": "man_with_chinese_cap_tone2",
    "category": "people"
  },
  "man_with_gua_pi_mao_tone2": {
    "char": "👲🏼",
    "slug": "man_with_chinese_cap_tone2",
    "category": "people",
    "isAlternative": true
  },
  "man_with_chinese_cap_tone3": {
    "char": "👲🏽",
    "slug": "man_with_chinese_cap_tone3",
    "category": "people"
  },
  "man_with_gua_pi_mao_tone3": {
    "char": "👲🏽",
    "slug": "man_with_chinese_cap_tone3",
    "category": "people",
    "isAlternative": true
  },
  "man_with_chinese_cap_tone4": {
    "char": "👲🏾",
    "slug": "man_with_chinese_cap_tone4",
    "category": "people"
  },
  "man_with_gua_pi_mao_tone4": {
    "char": "👲🏾",
    "slug": "man_with_chinese_cap_tone4",
    "category": "people",
    "isAlternative": true
  },
  "man_with_chinese_cap_tone5": {
    "char": "👲🏿",
    "slug": "man_with_chinese_cap_tone5",
    "category": "people"
  },
  "man_with_gua_pi_mao_tone5": {
    "char": "👲🏿",
    "slug": "man_with_chinese_cap_tone5",
    "category": "people",
    "isAlternative": true
  },
  "person_wearing_turban": {
    "char": "👳",
    "slug": "person_wearing_turban",
    "category": "people"
  },
  "man_with_turban": {
    "char": "👳",
    "slug": "person_wearing_turban",
    "category": "people",
    "isAlternative": true
  },
  "person_wearing_turban_tone1": {
    "char": "👳🏻",
    "slug": "person_wearing_turban_tone1",
    "category": "people"
  },
  "man_with_turban_tone1": {
    "char": "👳🏻",
    "slug": "person_wearing_turban_tone1",
    "category": "people",
    "isAlternative": true
  },
  "person_wearing_turban_tone2": {
    "char": "👳🏼",
    "slug": "person_wearing_turban_tone2",
    "category": "people"
  },
  "man_with_turban_tone2": {
    "char": "👳🏼",
    "slug": "person_wearing_turban_tone2",
    "category": "people",
    "isAlternative": true
  },
  "person_wearing_turban_tone3": {
    "char": "👳🏽",
    "slug": "person_wearing_turban_tone3",
    "category": "people"
  },
  "man_with_turban_tone3": {
    "char": "👳🏽",
    "slug": "person_wearing_turban_tone3",
    "category": "people",
    "isAlternative": true
  },
  "person_wearing_turban_tone4": {
    "char": "👳🏾",
    "slug": "person_wearing_turban_tone4",
    "category": "people"
  },
  "man_with_turban_tone4": {
    "char": "👳🏾",
    "slug": "person_wearing_turban_tone4",
    "category": "people",
    "isAlternative": true
  },
  "person_wearing_turban_tone5": {
    "char": "👳🏿",
    "slug": "person_wearing_turban_tone5",
    "category": "people"
  },
  "man_with_turban_tone5": {
    "char": "👳🏿",
    "slug": "person_wearing_turban_tone5",
    "category": "people",
    "isAlternative": true
  },
  "woman_wearing_turban": {
    "char": "👳‍♀️",
    "slug": "woman_wearing_turban",
    "category": "people"
  },
  "woman_wearing_turban_tone1": {
    "char": "👳🏻‍♀️",
    "slug": "woman_wearing_turban_tone1",
    "category": "people"
  },
  "woman_wearing_turban_light_skin_tone": {
    "char": "👳🏻‍♀️",
    "slug": "woman_wearing_turban_tone1",
    "category": "people",
    "isAlternative": true
  },
  "woman_wearing_turban_tone2": {
    "char": "👳🏼‍♀️",
    "slug": "woman_wearing_turban_tone2",
    "category": "people"
  },
  "woman_wearing_turban_medium_light_skin_tone": {
    "char": "👳🏼‍♀️",
    "slug": "woman_wearing_turban_tone2",
    "category": "people",
    "isAlternative": true
  },
  "woman_wearing_turban_tone3": {
    "char": "👳🏽‍♀️",
    "slug": "woman_wearing_turban_tone3",
    "category": "people"
  },
  "woman_wearing_turban_medium_skin_tone": {
    "char": "👳🏽‍♀️",
    "slug": "woman_wearing_turban_tone3",
    "category": "people",
    "isAlternative": true
  },
  "woman_wearing_turban_tone4": {
    "char": "👳🏾‍♀️",
    "slug": "woman_wearing_turban_tone4",
    "category": "people"
  },
  "woman_wearing_turban_medium_dark_skin_tone": {
    "char": "👳🏾‍♀️",
    "slug": "woman_wearing_turban_tone4",
    "category": "people",
    "isAlternative": true
  },
  "woman_wearing_turban_tone5": {
    "char": "👳🏿‍♀️",
    "slug": "woman_wearing_turban_tone5",
    "category": "people"
  },
  "woman_wearing_turban_dark_skin_tone": {
    "char": "👳🏿‍♀️",
    "slug": "woman_wearing_turban_tone5",
    "category": "people",
    "isAlternative": true
  },
  "man_wearing_turban": {
    "char": "👳‍♂️",
    "slug": "man_wearing_turban",
    "category": "people"
  },
  "man_wearing_turban_tone1": {
    "char": "👳🏻‍♂️",
    "slug": "man_wearing_turban_tone1",
    "category": "people"
  },
  "man_wearing_turban_light_skin_tone": {
    "char": "👳🏻‍♂️",
    "slug": "man_wearing_turban_tone1",
    "category": "people",
    "isAlternative": true
  },
  "man_wearing_turban_tone2": {
    "char": "👳🏼‍♂️",
    "slug": "man_wearing_turban_tone2",
    "category": "people"
  },
  "man_wearing_turban_medium_light_skin_tone": {
    "char": "👳🏼‍♂️",
    "slug": "man_wearing_turban_tone2",
    "category": "people",
    "isAlternative": true
  },
  "man_wearing_turban_tone3": {
    "char": "👳🏽‍♂️",
    "slug": "man_wearing_turban_tone3",
    "category": "people"
  },
  "man_wearing_turban_medium_skin_tone": {
    "char": "👳🏽‍♂️",
    "slug": "man_wearing_turban_tone3",
    "category": "people",
    "isAlternative": true
  },
  "man_wearing_turban_tone4": {
    "char": "👳🏾‍♂️",
    "slug": "man_wearing_turban_tone4",
    "category": "people"
  },
  "man_wearing_turban_medium_dark_skin_tone": {
    "char": "👳🏾‍♂️",
    "slug": "man_wearing_turban_tone4",
    "category": "people",
    "isAlternative": true
  },
  "man_wearing_turban_tone5": {
    "char": "👳🏿‍♂️",
    "slug": "man_wearing_turban_tone5",
    "category": "people"
  },
  "man_wearing_turban_dark_skin_tone": {
    "char": "👳🏿‍♂️",
    "slug": "man_wearing_turban_tone5",
    "category": "people",
    "isAlternative": true
  },
  "woman_with_headscarf": {
    "char": "🧕",
    "slug": "woman_with_headscarf",
    "category": "people"
  },
  "woman_with_headscarf_tone1": {
    "char": "🧕🏻",
    "slug": "woman_with_headscarf_tone1",
    "category": "people"
  },
  "woman_with_headscarf_light_skin_tone": {
    "char": "🧕🏻",
    "slug": "woman_with_headscarf_tone1",
    "category": "people",
    "isAlternative": true
  },
  "woman_with_headscarf_tone2": {
    "char": "🧕🏼",
    "slug": "woman_with_headscarf_tone2",
    "category": "people"
  },
  "woman_with_headscarf_medium_light_skin_tone": {
    "char": "🧕🏼",
    "slug": "woman_with_headscarf_tone2",
    "category": "people",
    "isAlternative": true
  },
  "woman_with_headscarf_tone3": {
    "char": "🧕🏽",
    "slug": "woman_with_headscarf_tone3",
    "category": "people"
  },
  "woman_with_headscarf_medium_skin_tone": {
    "char": "🧕🏽",
    "slug": "woman_with_headscarf_tone3",
    "category": "people",
    "isAlternative": true
  },
  "woman_with_headscarf_tone4": {
    "char": "🧕🏾",
    "slug": "woman_with_headscarf_tone4",
    "category": "people"
  },
  "woman_with_headscarf_medium_dark_skin_tone": {
    "char": "🧕🏾",
    "slug": "woman_with_headscarf_tone4",
    "category": "people",
    "isAlternative": true
  },
  "woman_with_headscarf_tone5": {
    "char": "🧕🏿",
    "slug": "woman_with_headscarf_tone5",
    "category": "people"
  },
  "woman_with_headscarf_dark_skin_tone": {
    "char": "🧕🏿",
    "slug": "woman_with_headscarf_tone5",
    "category": "people",
    "isAlternative": true
  },
  "police_officer": {
    "char": "👮",
    "slug": "police_officer",
    "category": "people"
  },
  "cop": {
    "char": "👮",
    "slug": "police_officer",
    "category": "people",
    "isAlternative": true
  },
  "police_officer_tone1": {
    "char": "👮🏻",
    "slug": "police_officer_tone1",
    "category": "people"
  },
  "cop_tone1": {
    "char": "👮🏻",
    "slug": "police_officer_tone1",
    "category": "people",
    "isAlternative": true
  },
  "police_officer_tone2": {
    "char": "👮🏼",
    "slug": "police_officer_tone2",
    "category": "people"
  },
  "cop_tone2": {
    "char": "👮🏼",
    "slug": "police_officer_tone2",
    "category": "people",
    "isAlternative": true
  },
  "police_officer_tone3": {
    "char": "👮🏽",
    "slug": "police_officer_tone3",
    "category": "people"
  },
  "cop_tone3": {
    "char": "👮🏽",
    "slug": "police_officer_tone3",
    "category": "people",
    "isAlternative": true
  },
  "police_officer_tone4": {
    "char": "👮🏾",
    "slug": "police_officer_tone4",
    "category": "people"
  },
  "cop_tone4": {
    "char": "👮🏾",
    "slug": "police_officer_tone4",
    "category": "people",
    "isAlternative": true
  },
  "police_officer_tone5": {
    "char": "👮🏿",
    "slug": "police_officer_tone5",
    "category": "people"
  },
  "cop_tone5": {
    "char": "👮🏿",
    "slug": "police_officer_tone5",
    "category": "people",
    "isAlternative": true
  },
  "woman_police_officer": {
    "char": "👮‍♀️",
    "slug": "woman_police_officer",
    "category": "people"
  },
  "woman_police_officer_tone1": {
    "char": "👮🏻‍♀️",
    "slug": "woman_police_officer_tone1",
    "category": "people"
  },
  "woman_police_officer_light_skin_tone": {
    "char": "👮🏻‍♀️",
    "slug": "woman_police_officer_tone1",
    "category": "people",
    "isAlternative": true
  },
  "woman_police_officer_tone2": {
    "char": "👮🏼‍♀️",
    "slug": "woman_police_officer_tone2",
    "category": "people"
  },
  "woman_police_officer_medium_light_skin_tone": {
    "char": "👮🏼‍♀️",
    "slug": "woman_police_officer_tone2",
    "category": "people",
    "isAlternative": true
  },
  "woman_police_officer_tone3": {
    "char": "👮🏽‍♀️",
    "slug": "woman_police_officer_tone3",
    "category": "people"
  },
  "woman_police_officer_medium_skin_tone": {
    "char": "👮🏽‍♀️",
    "slug": "woman_police_officer_tone3",
    "category": "people",
    "isAlternative": true
  },
  "woman_police_officer_tone4": {
    "char": "👮🏾‍♀️",
    "slug": "woman_police_officer_tone4",
    "category": "people"
  },
  "woman_police_officer_medium_dark_skin_tone": {
    "char": "👮🏾‍♀️",
    "slug": "woman_police_officer_tone4",
    "category": "people",
    "isAlternative": true
  },
  "woman_police_officer_tone5": {
    "char": "👮🏿‍♀️",
    "slug": "woman_police_officer_tone5",
    "category": "people"
  },
  "woman_police_officer_dark_skin_tone": {
    "char": "👮🏿‍♀️",
    "slug": "woman_police_officer_tone5",
    "category": "people",
    "isAlternative": true
  },
  "man_police_officer": {
    "char": "👮‍♂️",
    "slug": "man_police_officer",
    "category": "people"
  },
  "man_police_officer_tone1": {
    "char": "👮🏻‍♂️",
    "slug": "man_police_officer_tone1",
    "category": "people"
  },
  "man_police_officer_light_skin_tone": {
    "char": "👮🏻‍♂️",
    "slug": "man_police_officer_tone1",
    "category": "people",
    "isAlternative": true
  },
  "man_police_officer_tone2": {
    "char": "👮🏼‍♂️",
    "slug": "man_police_officer_tone2",
    "category": "people"
  },
  "man_police_officer_medium_light_skin_tone": {
    "char": "👮🏼‍♂️",
    "slug": "man_police_officer_tone2",
    "category": "people",
    "isAlternative": true
  },
  "man_police_officer_tone3": {
    "char": "👮🏽‍♂️",
    "slug": "man_police_officer_tone3",
    "category": "people"
  },
  "man_police_officer_medium_skin_tone": {
    "char": "👮🏽‍♂️",
    "slug": "man_police_officer_tone3",
    "category": "people",
    "isAlternative": true
  },
  "man_police_officer_tone4": {
    "char": "👮🏾‍♂️",
    "slug": "man_police_officer_tone4",
    "category": "people"
  },
  "man_police_officer_medium_dark_skin_tone": {
    "char": "👮🏾‍♂️",
    "slug": "man_police_officer_tone4",
    "category": "people",
    "isAlternative": true
  },
  "man_police_officer_tone5": {
    "char": "👮🏿‍♂️",
    "slug": "man_police_officer_tone5",
    "category": "people"
  },
  "man_police_officer_dark_skin_tone": {
    "char": "👮🏿‍♂️",
    "slug": "man_police_officer_tone5",
    "category": "people",
    "isAlternative": true
  },
  "construction_worker": {
    "char": "👷",
    "slug": "construction_worker",
    "category": "people"
  },
  "construction_worker_tone1": {
    "char": "👷🏻",
    "slug": "construction_worker_tone1",
    "category": "people"
  },
  "construction_worker_tone2": {
    "char": "👷🏼",
    "slug": "construction_worker_tone2",
    "category": "people"
  },
  "construction_worker_tone3": {
    "char": "👷🏽",
    "slug": "construction_worker_tone3",
    "category": "people"
  },
  "construction_worker_tone4": {
    "char": "👷🏾",
    "slug": "construction_worker_tone4",
    "category": "people"
  },
  "construction_worker_tone5": {
    "char": "👷🏿",
    "slug": "construction_worker_tone5",
    "category": "people"
  },
  "woman_construction_worker": {
    "char": "👷‍♀️",
    "slug": "woman_construction_worker",
    "category": "people"
  },
  "woman_construction_worker_tone1": {
    "char": "👷🏻‍♀️",
    "slug": "woman_construction_worker_tone1",
    "category": "people"
  },
  "woman_construction_worker_light_skin_tone": {
    "char": "👷🏻‍♀️",
    "slug": "woman_construction_worker_tone1",
    "category": "people",
    "isAlternative": true
  },
  "woman_construction_worker_tone2": {
    "char": "👷🏼‍♀️",
    "slug": "woman_construction_worker_tone2",
    "category": "people"
  },
  "woman_construction_worker_medium_light_skin_tone": {
    "char": "👷🏼‍♀️",
    "slug": "woman_construction_worker_tone2",
    "category": "people",
    "isAlternative": true
  },
  "woman_construction_worker_tone3": {
    "char": "👷🏽‍♀️",
    "slug": "woman_construction_worker_tone3",
    "category": "people"
  },
  "woman_construction_worker_medium_skin_tone": {
    "char": "👷🏽‍♀️",
    "slug": "woman_construction_worker_tone3",
    "category": "people",
    "isAlternative": true
  },
  "woman_construction_worker_tone4": {
    "char": "👷🏾‍♀️",
    "slug": "woman_construction_worker_tone4",
    "category": "people"
  },
  "woman_construction_worker_medium_dark_skin_tone": {
    "char": "👷🏾‍♀️",
    "slug": "woman_construction_worker_tone4",
    "category": "people",
    "isAlternative": true
  },
  "woman_construction_worker_tone5": {
    "char": "👷🏿‍♀️",
    "slug": "woman_construction_worker_tone5",
    "category": "people"
  },
  "woman_construction_worker_dark_skin_tone": {
    "char": "👷🏿‍♀️",
    "slug": "woman_construction_worker_tone5",
    "category": "people",
    "isAlternative": true
  },
  "man_construction_worker": {
    "char": "👷‍♂️",
    "slug": "man_construction_worker",
    "category": "people"
  },
  "man_construction_worker_tone1": {
    "char": "👷🏻‍♂️",
    "slug": "man_construction_worker_tone1",
    "category": "people"
  },
  "man_construction_worker_light_skin_tone": {
    "char": "👷🏻‍♂️",
    "slug": "man_construction_worker_tone1",
    "category": "people",
    "isAlternative": true
  },
  "man_construction_worker_tone2": {
    "char": "👷🏼‍♂️",
    "slug": "man_construction_worker_tone2",
    "category": "people"
  },
  "man_construction_worker_medium_light_skin_tone": {
    "char": "👷🏼‍♂️",
    "slug": "man_construction_worker_tone2",
    "category": "people",
    "isAlternative": true
  },
  "man_construction_worker_tone3": {
    "char": "👷🏽‍♂️",
    "slug": "man_construction_worker_tone3",
    "category": "people"
  },
  "man_construction_worker_medium_skin_tone": {
    "char": "👷🏽‍♂️",
    "slug": "man_construction_worker_tone3",
    "category": "people",
    "isAlternative": true
  },
  "man_construction_worker_tone4": {
    "char": "👷🏾‍♂️",
    "slug": "man_construction_worker_tone4",
    "category": "people"
  },
  "man_construction_worker_medium_dark_skin_tone": {
    "char": "👷🏾‍♂️",
    "slug": "man_construction_worker_tone4",
    "category": "people",
    "isAlternative": true
  },
  "man_construction_worker_tone5": {
    "char": "👷🏿‍♂️",
    "slug": "man_construction_worker_tone5",
    "category": "people"
  },
  "man_construction_worker_dark_skin_tone": {
    "char": "👷🏿‍♂️",
    "slug": "man_construction_worker_tone5",
    "category": "people",
    "isAlternative": true
  },
  "guard": { "char": "💂", "slug": "guard", "category": "people" },
  "guardsman": {
    "char": "💂",
    "slug": "guard",
    "category": "people",
    "isAlternative": true
  },
  "guard_tone1": { "char": "💂🏻", "slug": "guard_tone1", "category": "people" },
  "guardsman_tone1": {
    "char": "💂🏻",
    "slug": "guard_tone1",
    "category": "people",
    "isAlternative": true
  },
  "guard_tone2": { "char": "💂🏼", "slug": "guard_tone2", "category": "people" },
  "guardsman_tone2": {
    "char": "💂🏼",
    "slug": "guard_tone2",
    "category": "people",
    "isAlternative": true
  },
  "guard_tone3": { "char": "💂🏽", "slug": "guard_tone3", "category": "people" },
  "guardsman_tone3": {
    "char": "💂🏽",
    "slug": "guard_tone3",
    "category": "people",
    "isAlternative": true
  },
  "guard_tone4": { "char": "💂🏾", "slug": "guard_tone4", "category": "people" },
  "guardsman_tone4": {
    "char": "💂🏾",
    "slug": "guard_tone4",
    "category": "people",
    "isAlternative": true
  },
  "guard_tone5": { "char": "💂🏿", "slug": "guard_tone5", "category": "people" },
  "guardsman_tone5": {
    "char": "💂🏿",
    "slug": "guard_tone5",
    "category": "people",
    "isAlternative": true
  },
  "woman_guard": { "char": "💂‍♀️", "slug": "woman_guard", "category": "people" },
  "woman_guard_tone1": {
    "char": "💂🏻‍♀️",
    "slug": "woman_guard_tone1",
    "category": "people"
  },
  "woman_guard_light_skin_tone": {
    "char": "💂🏻‍♀️",
    "slug": "woman_guard_tone1",
    "category": "people",
    "isAlternative": true
  },
  "woman_guard_tone2": {
    "char": "💂🏼‍♀️",
    "slug": "woman_guard_tone2",
    "category": "people"
  },
  "woman_guard_medium_light_skin_tone": {
    "char": "💂🏼‍♀️",
    "slug": "woman_guard_tone2",
    "category": "people",
    "isAlternative": true
  },
  "woman_guard_tone3": {
    "char": "💂🏽‍♀️",
    "slug": "woman_guard_tone3",
    "category": "people"
  },
  "woman_guard_medium_skin_tone": {
    "char": "💂🏽‍♀️",
    "slug": "woman_guard_tone3",
    "category": "people",
    "isAlternative": true
  },
  "woman_guard_tone4": {
    "char": "💂🏾‍♀️",
    "slug": "woman_guard_tone4",
    "category": "people"
  },
  "woman_guard_medium_dark_skin_tone": {
    "char": "💂🏾‍♀️",
    "slug": "woman_guard_tone4",
    "category": "people",
    "isAlternative": true
  },
  "woman_guard_tone5": {
    "char": "💂🏿‍♀️",
    "slug": "woman_guard_tone5",
    "category": "people"
  },
  "woman_guard_dark_skin_tone": {
    "char": "💂🏿‍♀️",
    "slug": "woman_guard_tone5",
    "category": "people",
    "isAlternative": true
  },
  "man_guard": { "char": "💂‍♂️", "slug": "man_guard", "category": "people" },
  "man_guard_tone1": {
    "char": "💂🏻‍♂️",
    "slug": "man_guard_tone1",
    "category": "people"
  },
  "man_guard_light_skin_tone": {
    "char": "💂🏻‍♂️",
    "slug": "man_guard_tone1",
    "category": "people",
    "isAlternative": true
  },
  "man_guard_tone2": {
    "char": "💂🏼‍♂️",
    "slug": "man_guard_tone2",
    "category": "people"
  },
  "man_guard_medium_light_skin_tone": {
    "char": "💂🏼‍♂️",
    "slug": "man_guard_tone2",
    "category": "people",
    "isAlternative": true
  },
  "man_guard_tone3": {
    "char": "💂🏽‍♂️",
    "slug": "man_guard_tone3",
    "category": "people"
  },
  "man_guard_medium_skin_tone": {
    "char": "💂🏽‍♂️",
    "slug": "man_guard_tone3",
    "category": "people",
    "isAlternative": true
  },
  "man_guard_tone4": {
    "char": "💂🏾‍♂️",
    "slug": "man_guard_tone4",
    "category": "people"
  },
  "man_guard_medium_dark_skin_tone": {
    "char": "💂🏾‍♂️",
    "slug": "man_guard_tone4",
    "category": "people",
    "isAlternative": true
  },
  "man_guard_tone5": {
    "char": "💂🏿‍♂️",
    "slug": "man_guard_tone5",
    "category": "people"
  },
  "man_guard_dark_skin_tone": {
    "char": "💂🏿‍♂️",
    "slug": "man_guard_tone5",
    "category": "people",
    "isAlternative": true
  },
  "detective": { "char": "🕵️", "slug": "detective", "category": "people" },
  "spy": {
    "char": "🕵️",
    "slug": "detective",
    "category": "people",
    "isAlternative": true
  },
  "sleuth_or_spy": {
    "char": "🕵️",
    "slug": "detective",
    "category": "people",
    "isAlternative": true
  },
  "detective_tone1": {
    "char": "🕵🏻",
    "slug": "detective_tone1",
    "category": "people"
  },
  "spy_tone1": {
    "char": "🕵🏻",
    "slug": "detective_tone1",
    "category": "people",
    "isAlternative": true
  },
  "sleuth_or_spy_tone1": {
    "char": "🕵🏻",
    "slug": "detective_tone1",
    "category": "people",
    "isAlternative": true
  },
  "detective_tone2": {
    "char": "🕵🏼",
    "slug": "detective_tone2",
    "category": "people"
  },
  "spy_tone2": {
    "char": "🕵🏼",
    "slug": "detective_tone2",
    "category": "people",
    "isAlternative": true
  },
  "sleuth_or_spy_tone2": {
    "char": "🕵🏼",
    "slug": "detective_tone2",
    "category": "people",
    "isAlternative": true
  },
  "detective_tone3": {
    "char": "🕵🏽",
    "slug": "detective_tone3",
    "category": "people"
  },
  "spy_tone3": {
    "char": "🕵🏽",
    "slug": "detective_tone3",
    "category": "people",
    "isAlternative": true
  },
  "sleuth_or_spy_tone3": {
    "char": "🕵🏽",
    "slug": "detective_tone3",
    "category": "people",
    "isAlternative": true
  },
  "detective_tone4": {
    "char": "🕵🏾",
    "slug": "detective_tone4",
    "category": "people"
  },
  "spy_tone4": {
    "char": "🕵🏾",
    "slug": "detective_tone4",
    "category": "people",
    "isAlternative": true
  },
  "sleuth_or_spy_tone4": {
    "char": "🕵🏾",
    "slug": "detective_tone4",
    "category": "people",
    "isAlternative": true
  },
  "detective_tone5": {
    "char": "🕵🏿",
    "slug": "detective_tone5",
    "category": "people"
  },
  "spy_tone5": {
    "char": "🕵🏿",
    "slug": "detective_tone5",
    "category": "people",
    "isAlternative": true
  },
  "sleuth_or_spy_tone5": {
    "char": "🕵🏿",
    "slug": "detective_tone5",
    "category": "people",
    "isAlternative": true
  },
  "woman_detective": {
    "char": "🕵️‍♀️",
    "slug": "woman_detective",
    "category": "people"
  },
  "woman_detective_tone1": {
    "char": "🕵🏻‍♀️",
    "slug": "woman_detective_tone1",
    "category": "people"
  },
  "woman_detective_light_skin_tone": {
    "char": "🕵🏻‍♀️",
    "slug": "woman_detective_tone1",
    "category": "people",
    "isAlternative": true
  },
  "woman_detective_tone2": {
    "char": "🕵🏼‍♀️",
    "slug": "woman_detective_tone2",
    "category": "people"
  },
  "woman_detective_medium_light_skin_tone": {
    "char": "🕵🏼‍♀️",
    "slug": "woman_detective_tone2",
    "category": "people",
    "isAlternative": true
  },
  "woman_detective_tone3": {
    "char": "🕵🏽‍♀️",
    "slug": "woman_detective_tone3",
    "category": "people"
  },
  "woman_detective_medium_skin_tone": {
    "char": "🕵🏽‍♀️",
    "slug": "woman_detective_tone3",
    "category": "people",
    "isAlternative": true
  },
  "woman_detective_tone4": {
    "char": "🕵🏾‍♀️",
    "slug": "woman_detective_tone4",
    "category": "people"
  },
  "woman_detective_medium_dark_skin_tone": {
    "char": "🕵🏾‍♀️",
    "slug": "woman_detective_tone4",
    "category": "people",
    "isAlternative": true
  },
  "woman_detective_tone5": {
    "char": "🕵🏿‍♀️",
    "slug": "woman_detective_tone5",
    "category": "people"
  },
  "woman_detective_dark_skin_tone": {
    "char": "🕵🏿‍♀️",
    "slug": "woman_detective_tone5",
    "category": "people",
    "isAlternative": true
  },
  "man_detective": {
    "char": "🕵️‍♂️",
    "slug": "man_detective",
    "category": "people"
  },
  "man_detective_tone1": {
    "char": "🕵🏻‍♂️",
    "slug": "man_detective_tone1",
    "category": "people"
  },
  "man_detective_light_skin_tone": {
    "char": "🕵🏻‍♂️",
    "slug": "man_detective_tone1",
    "category": "people",
    "isAlternative": true
  },
  "man_detective_tone2": {
    "char": "🕵🏼‍♂️",
    "slug": "man_detective_tone2",
    "category": "people"
  },
  "man_detective_medium_light_skin_tone": {
    "char": "🕵🏼‍♂️",
    "slug": "man_detective_tone2",
    "category": "people",
    "isAlternative": true
  },
  "man_detective_tone3": {
    "char": "🕵🏽‍♂️",
    "slug": "man_detective_tone3",
    "category": "people"
  },
  "man_detective_medium_skin_tone": {
    "char": "🕵🏽‍♂️",
    "slug": "man_detective_tone3",
    "category": "people",
    "isAlternative": true
  },
  "man_detective_tone4": {
    "char": "🕵🏾‍♂️",
    "slug": "man_detective_tone4",
    "category": "people"
  },
  "man_detective_medium_dark_skin_tone": {
    "char": "🕵🏾‍♂️",
    "slug": "man_detective_tone4",
    "category": "people",
    "isAlternative": true
  },
  "man_detective_tone5": {
    "char": "🕵🏿‍♂️",
    "slug": "man_detective_tone5",
    "category": "people"
  },
  "man_detective_dark_skin_tone": {
    "char": "🕵🏿‍♂️",
    "slug": "man_detective_tone5",
    "category": "people",
    "isAlternative": true
  },
  "health_worker": {
    "char": "🧑‍⚕️",
    "slug": "health_worker",
    "category": "people"
  },
  "health_worker_tone1": {
    "char": "🧑🏻‍⚕️",
    "slug": "health_worker_tone1",
    "category": "people"
  },
  "health_worker_light_skin_tone": {
    "char": "🧑🏻‍⚕️",
    "slug": "health_worker_tone1",
    "category": "people",
    "isAlternative": true
  },
  "health_worker_tone2": {
    "char": "🧑🏼‍⚕️",
    "slug": "health_worker_tone2",
    "category": "people"
  },
  "health_worker_medium_light_skin_tone": {
    "char": "🧑🏼‍⚕️",
    "slug": "health_worker_tone2",
    "category": "people",
    "isAlternative": true
  },
  "health_worker_tone3": {
    "char": "🧑🏽‍⚕️",
    "slug": "health_worker_tone3",
    "category": "people"
  },
  "health_worker_medium_skin_tone": {
    "char": "🧑🏽‍⚕️",
    "slug": "health_worker_tone3",
    "category": "people",
    "isAlternative": true
  },
  "health_worker_tone4": {
    "char": "🧑🏾‍⚕️",
    "slug": "health_worker_tone4",
    "category": "people"
  },
  "health_worker_medium_dark_skin_tone": {
    "char": "🧑🏾‍⚕️",
    "slug": "health_worker_tone4",
    "category": "people",
    "isAlternative": true
  },
  "health_worker_tone5": {
    "char": "🧑🏿‍⚕️",
    "slug": "health_worker_tone5",
    "category": "people"
  },
  "health_worker_dark_skin_tone": {
    "char": "🧑🏿‍⚕️",
    "slug": "health_worker_tone5",
    "category": "people",
    "isAlternative": true
  },
  "woman_health_worker": {
    "char": "👩‍⚕️",
    "slug": "woman_health_worker",
    "category": "people"
  },
  "woman_health_worker_tone1": {
    "char": "👩🏻‍⚕️",
    "slug": "woman_health_worker_tone1",
    "category": "people"
  },
  "woman_health_worker_light_skin_tone": {
    "char": "👩🏻‍⚕️",
    "slug": "woman_health_worker_tone1",
    "category": "people",
    "isAlternative": true
  },
  "woman_health_worker_tone2": {
    "char": "👩🏼‍⚕️",
    "slug": "woman_health_worker_tone2",
    "category": "people"
  },
  "woman_health_worker_medium_light_skin_tone": {
    "char": "👩🏼‍⚕️",
    "slug": "woman_health_worker_tone2",
    "category": "people",
    "isAlternative": true
  },
  "woman_health_worker_tone3": {
    "char": "👩🏽‍⚕️",
    "slug": "woman_health_worker_tone3",
    "category": "people"
  },
  "woman_health_worker_medium_skin_tone": {
    "char": "👩🏽‍⚕️",
    "slug": "woman_health_worker_tone3",
    "category": "people",
    "isAlternative": true
  },
  "woman_health_worker_tone4": {
    "char": "👩🏾‍⚕️",
    "slug": "woman_health_worker_tone4",
    "category": "people"
  },
  "woman_health_worker_medium_dark_skin_tone": {
    "char": "👩🏾‍⚕️",
    "slug": "woman_health_worker_tone4",
    "category": "people",
    "isAlternative": true
  },
  "woman_health_worker_tone5": {
    "char": "👩🏿‍⚕️",
    "slug": "woman_health_worker_tone5",
    "category": "people"
  },
  "woman_health_worker_dark_skin_tone": {
    "char": "👩🏿‍⚕️",
    "slug": "woman_health_worker_tone5",
    "category": "people",
    "isAlternative": true
  },
  "man_health_worker": {
    "char": "👨‍⚕️",
    "slug": "man_health_worker",
    "category": "people"
  },
  "man_health_worker_tone1": {
    "char": "👨🏻‍⚕️",
    "slug": "man_health_worker_tone1",
    "category": "people"
  },
  "man_health_worker_light_skin_tone": {
    "char": "👨🏻‍⚕️",
    "slug": "man_health_worker_tone1",
    "category": "people",
    "isAlternative": true
  },
  "man_health_worker_tone2": {
    "char": "👨🏼‍⚕️",
    "slug": "man_health_worker_tone2",
    "category": "people"
  },
  "man_health_worker_medium_light_skin_tone": {
    "char": "👨🏼‍⚕️",
    "slug": "man_health_worker_tone2",
    "category": "people",
    "isAlternative": true
  },
  "man_health_worker_tone3": {
    "char": "👨🏽‍⚕️",
    "slug": "man_health_worker_tone3",
    "category": "people"
  },
  "man_health_worker_medium_skin_tone": {
    "char": "👨🏽‍⚕️",
    "slug": "man_health_worker_tone3",
    "category": "people",
    "isAlternative": true
  },
  "man_health_worker_tone4": {
    "char": "👨🏾‍⚕️",
    "slug": "man_health_worker_tone4",
    "category": "people"
  },
  "man_health_worker_medium_dark_skin_tone": {
    "char": "👨🏾‍⚕️",
    "slug": "man_health_worker_tone4",
    "category": "people",
    "isAlternative": true
  },
  "man_health_worker_tone5": {
    "char": "👨🏿‍⚕️",
    "slug": "man_health_worker_tone5",
    "category": "people"
  },
  "man_health_worker_dark_skin_tone": {
    "char": "👨🏿‍⚕️",
    "slug": "man_health_worker_tone5",
    "category": "people",
    "isAlternative": true
  },
  "farmer": { "char": "🧑‍🌾", "slug": "farmer", "category": "people" },
  "farmer_tone1": {
    "char": "🧑🏻‍🌾",
    "slug": "farmer_tone1",
    "category": "people"
  },
  "farmer_light_skin_tone": {
    "char": "🧑🏻‍🌾",
    "slug": "farmer_tone1",
    "category": "people",
    "isAlternative": true
  },
  "farmer_tone2": {
    "char": "🧑🏼‍🌾",
    "slug": "farmer_tone2",
    "category": "people"
  },
  "farmer_medium_light_skin_tone": {
    "char": "🧑🏼‍🌾",
    "slug": "farmer_tone2",
    "category": "people",
    "isAlternative": true
  },
  "farmer_tone3": {
    "char": "🧑🏽‍🌾",
    "slug": "farmer_tone3",
    "category": "people"
  },
  "farmer_medium_skin_tone": {
    "char": "🧑🏽‍🌾",
    "slug": "farmer_tone3",
    "category": "people",
    "isAlternative": true
  },
  "farmer_tone4": {
    "char": "🧑🏾‍🌾",
    "slug": "farmer_tone4",
    "category": "people"
  },
  "farmer_medium_dark_skin_tone": {
    "char": "🧑🏾‍🌾",
    "slug": "farmer_tone4",
    "category": "people",
    "isAlternative": true
  },
  "farmer_tone5": {
    "char": "🧑🏿‍🌾",
    "slug": "farmer_tone5",
    "category": "people"
  },
  "farmer_dark_skin_tone": {
    "char": "🧑🏿‍🌾",
    "slug": "farmer_tone5",
    "category": "people",
    "isAlternative": true
  },
  "woman_farmer": {
    "char": "👩‍🌾",
    "slug": "woman_farmer",
    "category": "people"
  },
  "woman_farmer_tone1": {
    "char": "👩🏻‍🌾",
    "slug": "woman_farmer_tone1",
    "category": "people"
  },
  "woman_farmer_light_skin_tone": {
    "char": "👩🏻‍🌾",
    "slug": "woman_farmer_tone1",
    "category": "people",
    "isAlternative": true
  },
  "woman_farmer_tone2": {
    "char": "👩🏼‍🌾",
    "slug": "woman_farmer_tone2",
    "category": "people"
  },
  "woman_farmer_medium_light_skin_tone": {
    "char": "👩🏼‍🌾",
    "slug": "woman_farmer_tone2",
    "category": "people",
    "isAlternative": true
  },
  "woman_farmer_tone3": {
    "char": "👩🏽‍🌾",
    "slug": "woman_farmer_tone3",
    "category": "people"
  },
  "woman_farmer_medium_skin_tone": {
    "char": "👩🏽‍🌾",
    "slug": "woman_farmer_tone3",
    "category": "people",
    "isAlternative": true
  },
  "woman_farmer_tone4": {
    "char": "👩🏾‍🌾",
    "slug": "woman_farmer_tone4",
    "category": "people"
  },
  "woman_farmer_medium_dark_skin_tone": {
    "char": "👩🏾‍🌾",
    "slug": "woman_farmer_tone4",
    "category": "people",
    "isAlternative": true
  },
  "woman_farmer_tone5": {
    "char": "👩🏿‍🌾",
    "slug": "woman_farmer_tone5",
    "category": "people"
  },
  "woman_farmer_dark_skin_tone": {
    "char": "👩🏿‍🌾",
    "slug": "woman_farmer_tone5",
    "category": "people",
    "isAlternative": true
  },
  "man_farmer": { "char": "👨‍🌾", "slug": "man_farmer", "category": "people" },
  "man_farmer_tone1": {
    "char": "👨🏻‍🌾",
    "slug": "man_farmer_tone1",
    "category": "people"
  },
  "man_farmer_light_skin_tone": {
    "char": "👨🏻‍🌾",
    "slug": "man_farmer_tone1",
    "category": "people",
    "isAlternative": true
  },
  "man_farmer_tone2": {
    "char": "👨🏼‍🌾",
    "slug": "man_farmer_tone2",
    "category": "people"
  },
  "man_farmer_medium_light_skin_tone": {
    "char": "👨🏼‍🌾",
    "slug": "man_farmer_tone2",
    "category": "people",
    "isAlternative": true
  },
  "man_farmer_tone3": {
    "char": "👨🏽‍🌾",
    "slug": "man_farmer_tone3",
    "category": "people"
  },
  "man_farmer_medium_skin_tone": {
    "char": "👨🏽‍🌾",
    "slug": "man_farmer_tone3",
    "category": "people",
    "isAlternative": true
  },
  "man_farmer_tone4": {
    "char": "👨🏾‍🌾",
    "slug": "man_farmer_tone4",
    "category": "people"
  },
  "man_farmer_medium_dark_skin_tone": {
    "char": "👨🏾‍🌾",
    "slug": "man_farmer_tone4",
    "category": "people",
    "isAlternative": true
  },
  "man_farmer_tone5": {
    "char": "👨🏿‍🌾",
    "slug": "man_farmer_tone5",
    "category": "people"
  },
  "man_farmer_dark_skin_tone": {
    "char": "👨🏿‍🌾",
    "slug": "man_farmer_tone5",
    "category": "people",
    "isAlternative": true
  },
  "cook": { "char": "🧑‍🍳", "slug": "cook", "category": "people" },
  "cook_tone1": { "char": "🧑🏻‍🍳", "slug": "cook_tone1", "category": "people" },
  "cook_light_skin_tone": {
    "char": "🧑🏻‍🍳",
    "slug": "cook_tone1",
    "category": "people",
    "isAlternative": true
  },
  "cook_tone2": { "char": "🧑🏼‍🍳", "slug": "cook_tone2", "category": "people" },
  "cook_medium_light_skin_tone": {
    "char": "🧑🏼‍🍳",
    "slug": "cook_tone2",
    "category": "people",
    "isAlternative": true
  },
  "cook_tone3": { "char": "🧑🏽‍🍳", "slug": "cook_tone3", "category": "people" },
  "cook_medium_skin_tone": {
    "char": "🧑🏽‍🍳",
    "slug": "cook_tone3",
    "category": "people",
    "isAlternative": true
  },
  "cook_tone4": { "char": "🧑🏾‍🍳", "slug": "cook_tone4", "category": "people" },
  "cook_medium_dark_skin_tone": {
    "char": "🧑🏾‍🍳",
    "slug": "cook_tone4",
    "category": "people",
    "isAlternative": true
  },
  "cook_tone5": { "char": "🧑🏿‍🍳", "slug": "cook_tone5", "category": "people" },
  "cook_dark_skin_tone": {
    "char": "🧑🏿‍🍳",
    "slug": "cook_tone5",
    "category": "people",
    "isAlternative": true
  },
  "woman_cook": { "char": "👩‍🍳", "slug": "woman_cook", "category": "people" },
  "woman_cook_tone1": {
    "char": "👩🏻‍🍳",
    "slug": "woman_cook_tone1",
    "category": "people"
  },
  "woman_cook_light_skin_tone": {
    "char": "👩🏻‍🍳",
    "slug": "woman_cook_tone1",
    "category": "people",
    "isAlternative": true
  },
  "woman_cook_tone2": {
    "char": "👩🏼‍🍳",
    "slug": "woman_cook_tone2",
    "category": "people"
  },
  "woman_cook_medium_light_skin_tone": {
    "char": "👩🏼‍🍳",
    "slug": "woman_cook_tone2",
    "category": "people",
    "isAlternative": true
  },
  "woman_cook_tone3": {
    "char": "👩🏽‍🍳",
    "slug": "woman_cook_tone3",
    "category": "people"
  },
  "woman_cook_medium_skin_tone": {
    "char": "👩🏽‍🍳",
    "slug": "woman_cook_tone3",
    "category": "people",
    "isAlternative": true
  },
  "woman_cook_tone4": {
    "char": "👩🏾‍🍳",
    "slug": "woman_cook_tone4",
    "category": "people"
  },
  "woman_cook_medium_dark_skin_tone": {
    "char": "👩🏾‍🍳",
    "slug": "woman_cook_tone4",
    "category": "people",
    "isAlternative": true
  },
  "woman_cook_tone5": {
    "char": "👩🏿‍🍳",
    "slug": "woman_cook_tone5",
    "category": "people"
  },
  "woman_cook_dark_skin_tone": {
    "char": "👩🏿‍🍳",
    "slug": "woman_cook_tone5",
    "category": "people",
    "isAlternative": true
  },
  "man_cook": { "char": "👨‍🍳", "slug": "man_cook", "category": "people" },
  "man_cook_tone1": {
    "char": "👨🏻‍🍳",
    "slug": "man_cook_tone1",
    "category": "people"
  },
  "man_cook_light_skin_tone": {
    "char": "👨🏻‍🍳",
    "slug": "man_cook_tone1",
    "category": "people",
    "isAlternative": true
  },
  "man_cook_tone2": {
    "char": "👨🏼‍🍳",
    "slug": "man_cook_tone2",
    "category": "people"
  },
  "man_cook_medium_light_skin_tone": {
    "char": "👨🏼‍🍳",
    "slug": "man_cook_tone2",
    "category": "people",
    "isAlternative": true
  },
  "man_cook_tone3": {
    "char": "👨🏽‍🍳",
    "slug": "man_cook_tone3",
    "category": "people"
  },
  "man_cook_medium_skin_tone": {
    "char": "👨🏽‍🍳",
    "slug": "man_cook_tone3",
    "category": "people",
    "isAlternative": true
  },
  "man_cook_tone4": {
    "char": "👨🏾‍🍳",
    "slug": "man_cook_tone4",
    "category": "people"
  },
  "man_cook_medium_dark_skin_tone": {
    "char": "👨🏾‍🍳",
    "slug": "man_cook_tone4",
    "category": "people",
    "isAlternative": true
  },
  "man_cook_tone5": {
    "char": "👨🏿‍🍳",
    "slug": "man_cook_tone5",
    "category": "people"
  },
  "man_cook_dark_skin_tone": {
    "char": "👨🏿‍🍳",
    "slug": "man_cook_tone5",
    "category": "people",
    "isAlternative": true
  },
  "student": { "char": "🧑‍🎓", "slug": "student", "category": "people" },
  "student_tone1": {
    "char": "🧑🏻‍🎓",
    "slug": "student_tone1",
    "category": "people"
  },
  "student_light_skin_tone": {
    "char": "🧑🏻‍🎓",
    "slug": "student_tone1",
    "category": "people",
    "isAlternative": true
  },
  "student_tone2": {
    "char": "🧑🏼‍🎓",
    "slug": "student_tone2",
    "category": "people"
  },
  "student_medium_light_skin_tone": {
    "char": "🧑🏼‍🎓",
    "slug": "student_tone2",
    "category": "people",
    "isAlternative": true
  },
  "student_tone3": {
    "char": "🧑🏽‍🎓",
    "slug": "student_tone3",
    "category": "people"
  },
  "student_medium_skin_tone": {
    "char": "🧑🏽‍🎓",
    "slug": "student_tone3",
    "category": "people",
    "isAlternative": true
  },
  "student_tone4": {
    "char": "🧑🏾‍🎓",
    "slug": "student_tone4",
    "category": "people"
  },
  "student_medium_dark_skin_tone": {
    "char": "🧑🏾‍🎓",
    "slug": "student_tone4",
    "category": "people",
    "isAlternative": true
  },
  "student_tone5": {
    "char": "🧑🏿‍🎓",
    "slug": "student_tone5",
    "category": "people"
  },
  "student_dark_skin_tone": {
    "char": "🧑🏿‍🎓",
    "slug": "student_tone5",
    "category": "people",
    "isAlternative": true
  },
  "woman_student": {
    "char": "👩‍🎓",
    "slug": "woman_student",
    "category": "people"
  },
  "woman_student_tone1": {
    "char": "👩🏻‍🎓",
    "slug": "woman_student_tone1",
    "category": "people"
  },
  "woman_student_light_skin_tone": {
    "char": "👩🏻‍🎓",
    "slug": "woman_student_tone1",
    "category": "people",
    "isAlternative": true
  },
  "woman_student_tone2": {
    "char": "👩🏼‍🎓",
    "slug": "woman_student_tone2",
    "category": "people"
  },
  "woman_student_medium_light_skin_tone": {
    "char": "👩🏼‍🎓",
    "slug": "woman_student_tone2",
    "category": "people",
    "isAlternative": true
  },
  "woman_student_tone3": {
    "char": "👩🏽‍🎓",
    "slug": "woman_student_tone3",
    "category": "people"
  },
  "woman_student_medium_skin_tone": {
    "char": "👩🏽‍🎓",
    "slug": "woman_student_tone3",
    "category": "people",
    "isAlternative": true
  },
  "woman_student_tone4": {
    "char": "👩🏾‍🎓",
    "slug": "woman_student_tone4",
    "category": "people"
  },
  "woman_student_medium_dark_skin_tone": {
    "char": "👩🏾‍🎓",
    "slug": "woman_student_tone4",
    "category": "people",
    "isAlternative": true
  },
  "woman_student_tone5": {
    "char": "👩🏿‍🎓",
    "slug": "woman_student_tone5",
    "category": "people"
  },
  "woman_student_dark_skin_tone": {
    "char": "👩🏿‍🎓",
    "slug": "woman_student_tone5",
    "category": "people",
    "isAlternative": true
  },
  "man_student": { "char": "👨‍🎓", "slug": "man_student", "category": "people" },
  "man_student_tone1": {
    "char": "👨🏻‍🎓",
    "slug": "man_student_tone1",
    "category": "people"
  },
  "man_student_light_skin_tone": {
    "char": "👨🏻‍🎓",
    "slug": "man_student_tone1",
    "category": "people",
    "isAlternative": true
  },
  "man_student_tone2": {
    "char": "👨🏼‍🎓",
    "slug": "man_student_tone2",
    "category": "people"
  },
  "man_student_medium_light_skin_tone": {
    "char": "👨🏼‍🎓",
    "slug": "man_student_tone2",
    "category": "people",
    "isAlternative": true
  },
  "man_student_tone3": {
    "char": "👨🏽‍🎓",
    "slug": "man_student_tone3",
    "category": "people"
  },
  "man_student_medium_skin_tone": {
    "char": "👨🏽‍🎓",
    "slug": "man_student_tone3",
    "category": "people",
    "isAlternative": true
  },
  "man_student_tone4": {
    "char": "👨🏾‍🎓",
    "slug": "man_student_tone4",
    "category": "people"
  },
  "man_student_medium_dark_skin_tone": {
    "char": "👨🏾‍🎓",
    "slug": "man_student_tone4",
    "category": "people",
    "isAlternative": true
  },
  "man_student_tone5": {
    "char": "👨🏿‍🎓",
    "slug": "man_student_tone5",
    "category": "people"
  },
  "man_student_dark_skin_tone": {
    "char": "👨🏿‍🎓",
    "slug": "man_student_tone5",
    "category": "people",
    "isAlternative": true
  },
  "singer": { "char": "🧑‍🎤", "slug": "singer", "category": "people" },
  "singer_tone1": {
    "char": "🧑🏻‍🎤",
    "slug": "singer_tone1",
    "category": "people"
  },
  "singer_light_skin_tone": {
    "char": "🧑🏻‍🎤",
    "slug": "singer_tone1",
    "category": "people",
    "isAlternative": true
  },
  "singer_tone2": {
    "char": "🧑🏼‍🎤",
    "slug": "singer_tone2",
    "category": "people"
  },
  "singer_medium_light_skin_tone": {
    "char": "🧑🏼‍🎤",
    "slug": "singer_tone2",
    "category": "people",
    "isAlternative": true
  },
  "singer_tone3": {
    "char": "🧑🏽‍🎤",
    "slug": "singer_tone3",
    "category": "people"
  },
  "singer_medium_skin_tone": {
    "char": "🧑🏽‍🎤",
    "slug": "singer_tone3",
    "category": "people",
    "isAlternative": true
  },
  "singer_tone4": {
    "char": "🧑🏾‍🎤",
    "slug": "singer_tone4",
    "category": "people"
  },
  "singer_medium_dark_skin_tone": {
    "char": "🧑🏾‍🎤",
    "slug": "singer_tone4",
    "category": "people",
    "isAlternative": true
  },
  "singer_tone5": {
    "char": "🧑🏿‍🎤",
    "slug": "singer_tone5",
    "category": "people"
  },
  "singer_dark_skin_tone": {
    "char": "🧑🏿‍🎤",
    "slug": "singer_tone5",
    "category": "people",
    "isAlternative": true
  },
  "woman_singer": {
    "char": "👩‍🎤",
    "slug": "woman_singer",
    "category": "people"
  },
  "woman_singer_tone1": {
    "char": "👩🏻‍🎤",
    "slug": "woman_singer_tone1",
    "category": "people"
  },
  "woman_singer_light_skin_tone": {
    "char": "👩🏻‍🎤",
    "slug": "woman_singer_tone1",
    "category": "people",
    "isAlternative": true
  },
  "woman_singer_tone2": {
    "char": "👩🏼‍🎤",
    "slug": "woman_singer_tone2",
    "category": "people"
  },
  "woman_singer_medium_light_skin_tone": {
    "char": "👩🏼‍🎤",
    "slug": "woman_singer_tone2",
    "category": "people",
    "isAlternative": true
  },
  "woman_singer_tone3": {
    "char": "👩🏽‍🎤",
    "slug": "woman_singer_tone3",
    "category": "people"
  },
  "woman_singer_medium_skin_tone": {
    "char": "👩🏽‍🎤",
    "slug": "woman_singer_tone3",
    "category": "people",
    "isAlternative": true
  },
  "woman_singer_tone4": {
    "char": "👩🏾‍🎤",
    "slug": "woman_singer_tone4",
    "category": "people"
  },
  "woman_singer_medium_dark_skin_tone": {
    "char": "👩🏾‍🎤",
    "slug": "woman_singer_tone4",
    "category": "people",
    "isAlternative": true
  },
  "woman_singer_tone5": {
    "char": "👩🏿‍🎤",
    "slug": "woman_singer_tone5",
    "category": "people"
  },
  "woman_singer_dark_skin_tone": {
    "char": "👩🏿‍🎤",
    "slug": "woman_singer_tone5",
    "category": "people",
    "isAlternative": true
  },
  "man_singer": { "char": "👨‍🎤", "slug": "man_singer", "category": "people" },
  "man_singer_tone1": {
    "char": "👨🏻‍🎤",
    "slug": "man_singer_tone1",
    "category": "people"
  },
  "man_singer_light_skin_tone": {
    "char": "👨🏻‍🎤",
    "slug": "man_singer_tone1",
    "category": "people",
    "isAlternative": true
  },
  "man_singer_tone2": {
    "char": "👨🏼‍🎤",
    "slug": "man_singer_tone2",
    "category": "people"
  },
  "man_singer_medium_light_skin_tone": {
    "char": "👨🏼‍🎤",
    "slug": "man_singer_tone2",
    "category": "people",
    "isAlternative": true
  },
  "man_singer_tone3": {
    "char": "👨🏽‍🎤",
    "slug": "man_singer_tone3",
    "category": "people"
  },
  "man_singer_medium_skin_tone": {
    "char": "👨🏽‍🎤",
    "slug": "man_singer_tone3",
    "category": "people",
    "isAlternative": true
  },
  "man_singer_tone4": {
    "char": "👨🏾‍🎤",
    "slug": "man_singer_tone4",
    "category": "people"
  },
  "man_singer_medium_dark_skin_tone": {
    "char": "👨🏾‍🎤",
    "slug": "man_singer_tone4",
    "category": "people",
    "isAlternative": true
  },
  "man_singer_tone5": {
    "char": "👨🏿‍🎤",
    "slug": "man_singer_tone5",
    "category": "people"
  },
  "man_singer_dark_skin_tone": {
    "char": "👨🏿‍🎤",
    "slug": "man_singer_tone5",
    "category": "people",
    "isAlternative": true
  },
  "teacher": { "char": "🧑‍🏫", "slug": "teacher", "category": "people" },
  "teacher_tone1": {
    "char": "🧑🏻‍🏫",
    "slug": "teacher_tone1",
    "category": "people"
  },
  "teacher_light_skin_tone": {
    "char": "🧑🏻‍🏫",
    "slug": "teacher_tone1",
    "category": "people",
    "isAlternative": true
  },
  "teacher_tone2": {
    "char": "🧑🏼‍🏫",
    "slug": "teacher_tone2",
    "category": "people"
  },
  "teacher_medium_light_skin_tone": {
    "char": "🧑🏼‍🏫",
    "slug": "teacher_tone2",
    "category": "people",
    "isAlternative": true
  },
  "teacher_tone3": {
    "char": "🧑🏽‍🏫",
    "slug": "teacher_tone3",
    "category": "people"
  },
  "teacher_medium_skin_tone": {
    "char": "🧑🏽‍🏫",
    "slug": "teacher_tone3",
    "category": "people",
    "isAlternative": true
  },
  "teacher_tone4": {
    "char": "🧑🏾‍🏫",
    "slug": "teacher_tone4",
    "category": "people"
  },
  "teacher_medium_dark_skin_tone": {
    "char": "🧑🏾‍🏫",
    "slug": "teacher_tone4",
    "category": "people",
    "isAlternative": true
  },
  "teacher_tone5": {
    "char": "🧑🏿‍🏫",
    "slug": "teacher_tone5",
    "category": "people"
  },
  "teacher_dark_skin_tone": {
    "char": "🧑🏿‍🏫",
    "slug": "teacher_tone5",
    "category": "people",
    "isAlternative": true
  },
  "woman_teacher": {
    "char": "👩‍🏫",
    "slug": "woman_teacher",
    "category": "people"
  },
  "woman_teacher_tone1": {
    "char": "👩🏻‍🏫",
    "slug": "woman_teacher_tone1",
    "category": "people"
  },
  "woman_teacher_light_skin_tone": {
    "char": "👩🏻‍🏫",
    "slug": "woman_teacher_tone1",
    "category": "people",
    "isAlternative": true
  },
  "woman_teacher_tone2": {
    "char": "👩🏼‍🏫",
    "slug": "woman_teacher_tone2",
    "category": "people"
  },
  "woman_teacher_medium_light_skin_tone": {
    "char": "👩🏼‍🏫",
    "slug": "woman_teacher_tone2",
    "category": "people",
    "isAlternative": true
  },
  "woman_teacher_tone3": {
    "char": "👩🏽‍🏫",
    "slug": "woman_teacher_tone3",
    "category": "people"
  },
  "woman_teacher_medium_skin_tone": {
    "char": "👩🏽‍🏫",
    "slug": "woman_teacher_tone3",
    "category": "people",
    "isAlternative": true
  },
  "woman_teacher_tone4": {
    "char": "👩🏾‍🏫",
    "slug": "woman_teacher_tone4",
    "category": "people"
  },
  "woman_teacher_medium_dark_skin_tone": {
    "char": "👩🏾‍🏫",
    "slug": "woman_teacher_tone4",
    "category": "people",
    "isAlternative": true
  },
  "woman_teacher_tone5": {
    "char": "👩🏿‍🏫",
    "slug": "woman_teacher_tone5",
    "category": "people"
  },
  "woman_teacher_dark_skin_tone": {
    "char": "👩🏿‍🏫",
    "slug": "woman_teacher_tone5",
    "category": "people",
    "isAlternative": true
  },
  "man_teacher": { "char": "👨‍🏫", "slug": "man_teacher", "category": "people" },
  "man_teacher_tone1": {
    "char": "👨🏻‍🏫",
    "slug": "man_teacher_tone1",
    "category": "people"
  },
  "man_teacher_light_skin_tone": {
    "char": "👨🏻‍🏫",
    "slug": "man_teacher_tone1",
    "category": "people",
    "isAlternative": true
  },
  "man_teacher_tone2": {
    "char": "👨🏼‍🏫",
    "slug": "man_teacher_tone2",
    "category": "people"
  },
  "man_teacher_medium_light_skin_tone": {
    "char": "👨🏼‍🏫",
    "slug": "man_teacher_tone2",
    "category": "people",
    "isAlternative": true
  },
  "man_teacher_tone3": {
    "char": "👨🏽‍🏫",
    "slug": "man_teacher_tone3",
    "category": "people"
  },
  "man_teacher_medium_skin_tone": {
    "char": "👨🏽‍🏫",
    "slug": "man_teacher_tone3",
    "category": "people",
    "isAlternative": true
  },
  "man_teacher_tone4": {
    "char": "👨🏾‍🏫",
    "slug": "man_teacher_tone4",
    "category": "people"
  },
  "man_teacher_medium_dark_skin_tone": {
    "char": "👨🏾‍🏫",
    "slug": "man_teacher_tone4",
    "category": "people",
    "isAlternative": true
  },
  "man_teacher_tone5": {
    "char": "👨🏿‍🏫",
    "slug": "man_teacher_tone5",
    "category": "people"
  },
  "man_teacher_dark_skin_tone": {
    "char": "👨🏿‍🏫",
    "slug": "man_teacher_tone5",
    "category": "people",
    "isAlternative": true
  },
  "factory_worker": {
    "char": "🧑‍🏭",
    "slug": "factory_worker",
    "category": "people"
  },
  "factory_worker_tone1": {
    "char": "🧑🏻‍🏭",
    "slug": "factory_worker_tone1",
    "category": "people"
  },
  "factory_worker_light_skin_tone": {
    "char": "🧑🏻‍🏭",
    "slug": "factory_worker_tone1",
    "category": "people",
    "isAlternative": true
  },
  "factory_worker_tone2": {
    "char": "🧑🏼‍🏭",
    "slug": "factory_worker_tone2",
    "category": "people"
  },
  "factory_worker_medium_light_skin_tone": {
    "char": "🧑🏼‍🏭",
    "slug": "factory_worker_tone2",
    "category": "people",
    "isAlternative": true
  },
  "factory_worker_tone3": {
    "char": "🧑🏽‍🏭",
    "slug": "factory_worker_tone3",
    "category": "people"
  },
  "factory_worker_medium_skin_tone": {
    "char": "🧑🏽‍🏭",
    "slug": "factory_worker_tone3",
    "category": "people",
    "isAlternative": true
  },
  "factory_worker_tone4": {
    "char": "🧑🏾‍🏭",
    "slug": "factory_worker_tone4",
    "category": "people"
  },
  "factory_worker_medium_dark_skin_tone": {
    "char": "🧑🏾‍🏭",
    "slug": "factory_worker_tone4",
    "category": "people",
    "isAlternative": true
  },
  "factory_worker_tone5": {
    "char": "🧑🏿‍🏭",
    "slug": "factory_worker_tone5",
    "category": "people"
  },
  "factory_worker_dark_skin_tone": {
    "char": "🧑🏿‍🏭",
    "slug": "factory_worker_tone5",
    "category": "people",
    "isAlternative": true
  },
  "woman_factory_worker": {
    "char": "👩‍🏭",
    "slug": "woman_factory_worker",
    "category": "people"
  },
  "woman_factory_worker_tone1": {
    "char": "👩🏻‍🏭",
    "slug": "woman_factory_worker_tone1",
    "category": "people"
  },
  "woman_factory_worker_light_skin_tone": {
    "char": "👩🏻‍🏭",
    "slug": "woman_factory_worker_tone1",
    "category": "people",
    "isAlternative": true
  },
  "woman_factory_worker_tone2": {
    "char": "👩🏼‍🏭",
    "slug": "woman_factory_worker_tone2",
    "category": "people"
  },
  "woman_factory_worker_medium_light_skin_tone": {
    "char": "👩🏼‍🏭",
    "slug": "woman_factory_worker_tone2",
    "category": "people",
    "isAlternative": true
  },
  "woman_factory_worker_tone3": {
    "char": "👩🏽‍🏭",
    "slug": "woman_factory_worker_tone3",
    "category": "people"
  },
  "woman_factory_worker_medium_skin_tone": {
    "char": "👩🏽‍🏭",
    "slug": "woman_factory_worker_tone3",
    "category": "people",
    "isAlternative": true
  },
  "woman_factory_worker_tone4": {
    "char": "👩🏾‍🏭",
    "slug": "woman_factory_worker_tone4",
    "category": "people"
  },
  "woman_factory_worker_medium_dark_skin_tone": {
    "char": "👩🏾‍🏭",
    "slug": "woman_factory_worker_tone4",
    "category": "people",
    "isAlternative": true
  },
  "woman_factory_worker_tone5": {
    "char": "👩🏿‍🏭",
    "slug": "woman_factory_worker_tone5",
    "category": "people"
  },
  "woman_factory_worker_dark_skin_tone": {
    "char": "👩🏿‍🏭",
    "slug": "woman_factory_worker_tone5",
    "category": "people",
    "isAlternative": true
  },
  "man_factory_worker": {
    "char": "👨‍🏭",
    "slug": "man_factory_worker",
    "category": "people"
  },
  "man_factory_worker_tone1": {
    "char": "👨🏻‍🏭",
    "slug": "man_factory_worker_tone1",
    "category": "people"
  },
  "man_factory_worker_light_skin_tone": {
    "char": "👨🏻‍🏭",
    "slug": "man_factory_worker_tone1",
    "category": "people",
    "isAlternative": true
  },
  "man_factory_worker_tone2": {
    "char": "👨🏼‍🏭",
    "slug": "man_factory_worker_tone2",
    "category": "people"
  },
  "man_factory_worker_medium_light_skin_tone": {
    "char": "👨🏼‍🏭",
    "slug": "man_factory_worker_tone2",
    "category": "people",
    "isAlternative": true
  },
  "man_factory_worker_tone3": {
    "char": "👨🏽‍🏭",
    "slug": "man_factory_worker_tone3",
    "category": "people"
  },
  "man_factory_worker_medium_skin_tone": {
    "char": "👨🏽‍🏭",
    "slug": "man_factory_worker_tone3",
    "category": "people",
    "isAlternative": true
  },
  "man_factory_worker_tone4": {
    "char": "👨🏾‍🏭",
    "slug": "man_factory_worker_tone4",
    "category": "people"
  },
  "man_factory_worker_medium_dark_skin_tone": {
    "char": "👨🏾‍🏭",
    "slug": "man_factory_worker_tone4",
    "category": "people",
    "isAlternative": true
  },
  "man_factory_worker_tone5": {
    "char": "👨🏿‍🏭",
    "slug": "man_factory_worker_tone5",
    "category": "people"
  },
  "man_factory_worker_dark_skin_tone": {
    "char": "👨🏿‍🏭",
    "slug": "man_factory_worker_tone5",
    "category": "people",
    "isAlternative": true
  },
  "technologist": {
    "char": "🧑‍💻",
    "slug": "technologist",
    "category": "people"
  },
  "technologist_tone1": {
    "char": "🧑🏻‍💻",
    "slug": "technologist_tone1",
    "category": "people"
  },
  "technologist_light_skin_tone": {
    "char": "🧑🏻‍💻",
    "slug": "technologist_tone1",
    "category": "people",
    "isAlternative": true
  },
  "technologist_tone2": {
    "char": "🧑🏼‍💻",
    "slug": "technologist_tone2",
    "category": "people"
  },
  "technologist_medium_light_skin_tone": {
    "char": "🧑🏼‍💻",
    "slug": "technologist_tone2",
    "category": "people",
    "isAlternative": true
  },
  "technologist_tone3": {
    "char": "🧑🏽‍💻",
    "slug": "technologist_tone3",
    "category": "people"
  },
  "technologist_medium_skin_tone": {
    "char": "🧑🏽‍💻",
    "slug": "technologist_tone3",
    "category": "people",
    "isAlternative": true
  },
  "technologist_tone4": {
    "char": "🧑🏾‍💻",
    "slug": "technologist_tone4",
    "category": "people"
  },
  "technologist_medium_dark_skin_tone": {
    "char": "🧑🏾‍💻",
    "slug": "technologist_tone4",
    "category": "people",
    "isAlternative": true
  },
  "technologist_tone5": {
    "char": "🧑🏿‍💻",
    "slug": "technologist_tone5",
    "category": "people"
  },
  "technologist_dark_skin_tone": {
    "char": "🧑🏿‍💻",
    "slug": "technologist_tone5",
    "category": "people",
    "isAlternative": true
  },
  "woman_technologist": {
    "char": "👩‍💻",
    "slug": "woman_technologist",
    "category": "people"
  },
  "woman_technologist_tone1": {
    "char": "👩🏻‍💻",
    "slug": "woman_technologist_tone1",
    "category": "people"
  },
  "woman_technologist_light_skin_tone": {
    "char": "👩🏻‍💻",
    "slug": "woman_technologist_tone1",
    "category": "people",
    "isAlternative": true
  },
  "woman_technologist_tone2": {
    "char": "👩🏼‍💻",
    "slug": "woman_technologist_tone2",
    "category": "people"
  },
  "woman_technologist_medium_light_skin_tone": {
    "char": "👩🏼‍💻",
    "slug": "woman_technologist_tone2",
    "category": "people",
    "isAlternative": true
  },
  "woman_technologist_tone3": {
    "char": "👩🏽‍💻",
    "slug": "woman_technologist_tone3",
    "category": "people"
  },
  "woman_technologist_medium_skin_tone": {
    "char": "👩🏽‍💻",
    "slug": "woman_technologist_tone3",
    "category": "people",
    "isAlternative": true
  },
  "woman_technologist_tone4": {
    "char": "👩🏾‍💻",
    "slug": "woman_technologist_tone4",
    "category": "people"
  },
  "woman_technologist_medium_dark_skin_tone": {
    "char": "👩🏾‍💻",
    "slug": "woman_technologist_tone4",
    "category": "people",
    "isAlternative": true
  },
  "woman_technologist_tone5": {
    "char": "👩🏿‍💻",
    "slug": "woman_technologist_tone5",
    "category": "people"
  },
  "woman_technologist_dark_skin_tone": {
    "char": "👩🏿‍💻",
    "slug": "woman_technologist_tone5",
    "category": "people",
    "isAlternative": true
  },
  "man_technologist": {
    "char": "👨‍💻",
    "slug": "man_technologist",
    "category": "people"
  },
  "man_technologist_tone1": {
    "char": "👨🏻‍💻",
    "slug": "man_technologist_tone1",
    "category": "people"
  },
  "man_technologist_light_skin_tone": {
    "char": "👨🏻‍💻",
    "slug": "man_technologist_tone1",
    "category": "people",
    "isAlternative": true
  },
  "man_technologist_tone2": {
    "char": "👨🏼‍💻",
    "slug": "man_technologist_tone2",
    "category": "people"
  },
  "man_technologist_medium_light_skin_tone": {
    "char": "👨🏼‍💻",
    "slug": "man_technologist_tone2",
    "category": "people",
    "isAlternative": true
  },
  "man_technologist_tone3": {
    "char": "👨🏽‍💻",
    "slug": "man_technologist_tone3",
    "category": "people"
  },
  "man_technologist_medium_skin_tone": {
    "char": "👨🏽‍💻",
    "slug": "man_technologist_tone3",
    "category": "people",
    "isAlternative": true
  },
  "man_technologist_tone4": {
    "char": "👨🏾‍💻",
    "slug": "man_technologist_tone4",
    "category": "people"
  },
  "man_technologist_medium_dark_skin_tone": {
    "char": "👨🏾‍💻",
    "slug": "man_technologist_tone4",
    "category": "people",
    "isAlternative": true
  },
  "man_technologist_tone5": {
    "char": "👨🏿‍💻",
    "slug": "man_technologist_tone5",
    "category": "people"
  },
  "man_technologist_dark_skin_tone": {
    "char": "👨🏿‍💻",
    "slug": "man_technologist_tone5",
    "category": "people",
    "isAlternative": true
  },
  "office_worker": {
    "char": "🧑‍💼",
    "slug": "office_worker",
    "category": "people"
  },
  "office_worker_tone1": {
    "char": "🧑🏻‍💼",
    "slug": "office_worker_tone1",
    "category": "people"
  },
  "office_worker_light_skin_tone": {
    "char": "🧑🏻‍💼",
    "slug": "office_worker_tone1",
    "category": "people",
    "isAlternative": true
  },
  "office_worker_tone2": {
    "char": "🧑🏼‍💼",
    "slug": "office_worker_tone2",
    "category": "people"
  },
  "office_worker_medium_light_skin_tone": {
    "char": "🧑🏼‍💼",
    "slug": "office_worker_tone2",
    "category": "people",
    "isAlternative": true
  },
  "office_worker_tone3": {
    "char": "🧑🏽‍💼",
    "slug": "office_worker_tone3",
    "category": "people"
  },
  "office_worker_medium_skin_tone": {
    "char": "🧑🏽‍💼",
    "slug": "office_worker_tone3",
    "category": "people",
    "isAlternative": true
  },
  "office_worker_tone4": {
    "char": "🧑🏾‍💼",
    "slug": "office_worker_tone4",
    "category": "people"
  },
  "office_worker_medium_dark_skin_tone": {
    "char": "🧑🏾‍💼",
    "slug": "office_worker_tone4",
    "category": "people",
    "isAlternative": true
  },
  "office_worker_tone5": {
    "char": "🧑🏿‍💼",
    "slug": "office_worker_tone5",
    "category": "people"
  },
  "office_worker_dark_skin_tone": {
    "char": "🧑🏿‍💼",
    "slug": "office_worker_tone5",
    "category": "people",
    "isAlternative": true
  },
  "woman_office_worker": {
    "char": "👩‍💼",
    "slug": "woman_office_worker",
    "category": "people"
  },
  "woman_office_worker_tone1": {
    "char": "👩🏻‍💼",
    "slug": "woman_office_worker_tone1",
    "category": "people"
  },
  "woman_office_worker_light_skin_tone": {
    "char": "👩🏻‍💼",
    "slug": "woman_office_worker_tone1",
    "category": "people",
    "isAlternative": true
  },
  "woman_office_worker_tone2": {
    "char": "👩🏼‍💼",
    "slug": "woman_office_worker_tone2",
    "category": "people"
  },
  "woman_office_worker_medium_light_skin_tone": {
    "char": "👩🏼‍💼",
    "slug": "woman_office_worker_tone2",
    "category": "people",
    "isAlternative": true
  },
  "woman_office_worker_tone3": {
    "char": "👩🏽‍💼",
    "slug": "woman_office_worker_tone3",
    "category": "people"
  },
  "woman_office_worker_medium_skin_tone": {
    "char": "👩🏽‍💼",
    "slug": "woman_office_worker_tone3",
    "category": "people",
    "isAlternative": true
  },
  "woman_office_worker_tone4": {
    "char": "👩🏾‍💼",
    "slug": "woman_office_worker_tone4",
    "category": "people"
  },
  "woman_office_worker_medium_dark_skin_tone": {
    "char": "👩🏾‍💼",
    "slug": "woman_office_worker_tone4",
    "category": "people",
    "isAlternative": true
  },
  "woman_office_worker_tone5": {
    "char": "👩🏿‍💼",
    "slug": "woman_office_worker_tone5",
    "category": "people"
  },
  "woman_office_worker_dark_skin_tone": {
    "char": "👩🏿‍💼",
    "slug": "woman_office_worker_tone5",
    "category": "people",
    "isAlternative": true
  },
  "man_office_worker": {
    "char": "👨‍💼",
    "slug": "man_office_worker",
    "category": "people"
  },
  "man_office_worker_tone1": {
    "char": "👨🏻‍💼",
    "slug": "man_office_worker_tone1",
    "category": "people"
  },
  "man_office_worker_light_skin_tone": {
    "char": "👨🏻‍💼",
    "slug": "man_office_worker_tone1",
    "category": "people",
    "isAlternative": true
  },
  "man_office_worker_tone2": {
    "char": "👨🏼‍💼",
    "slug": "man_office_worker_tone2",
    "category": "people"
  },
  "man_office_worker_medium_light_skin_tone": {
    "char": "👨🏼‍💼",
    "slug": "man_office_worker_tone2",
    "category": "people",
    "isAlternative": true
  },
  "man_office_worker_tone3": {
    "char": "👨🏽‍💼",
    "slug": "man_office_worker_tone3",
    "category": "people"
  },
  "man_office_worker_medium_skin_tone": {
    "char": "👨🏽‍💼",
    "slug": "man_office_worker_tone3",
    "category": "people",
    "isAlternative": true
  },
  "man_office_worker_tone4": {
    "char": "👨🏾‍💼",
    "slug": "man_office_worker_tone4",
    "category": "people"
  },
  "man_office_worker_medium_dark_skin_tone": {
    "char": "👨🏾‍💼",
    "slug": "man_office_worker_tone4",
    "category": "people",
    "isAlternative": true
  },
  "man_office_worker_tone5": {
    "char": "👨🏿‍💼",
    "slug": "man_office_worker_tone5",
    "category": "people"
  },
  "man_office_worker_dark_skin_tone": {
    "char": "👨🏿‍💼",
    "slug": "man_office_worker_tone5",
    "category": "people",
    "isAlternative": true
  },
  "mechanic": { "char": "🧑‍🔧", "slug": "mechanic", "category": "people" },
  "mechanic_tone1": {
    "char": "🧑🏻‍🔧",
    "slug": "mechanic_tone1",
    "category": "people"
  },
  "mechanic_light_skin_tone": {
    "char": "🧑🏻‍🔧",
    "slug": "mechanic_tone1",
    "category": "people",
    "isAlternative": true
  },
  "mechanic_tone2": {
    "char": "🧑🏼‍🔧",
    "slug": "mechanic_tone2",
    "category": "people"
  },
  "mechanic_medium_light_skin_tone": {
    "char": "🧑🏼‍🔧",
    "slug": "mechanic_tone2",
    "category": "people",
    "isAlternative": true
  },
  "mechanic_tone3": {
    "char": "🧑🏽‍🔧",
    "slug": "mechanic_tone3",
    "category": "people"
  },
  "mechanic_medium_skin_tone": {
    "char": "🧑🏽‍🔧",
    "slug": "mechanic_tone3",
    "category": "people",
    "isAlternative": true
  },
  "mechanic_tone4": {
    "char": "🧑🏾‍🔧",
    "slug": "mechanic_tone4",
    "category": "people"
  },
  "mechanic_medium_dark_skin_tone": {
    "char": "🧑🏾‍🔧",
    "slug": "mechanic_tone4",
    "category": "people",
    "isAlternative": true
  },
  "mechanic_tone5": {
    "char": "🧑🏿‍🔧",
    "slug": "mechanic_tone5",
    "category": "people"
  },
  "mechanic_dark_skin_tone": {
    "char": "🧑🏿‍🔧",
    "slug": "mechanic_tone5",
    "category": "people",
    "isAlternative": true
  },
  "woman_mechanic": {
    "char": "👩‍🔧",
    "slug": "woman_mechanic",
    "category": "people"
  },
  "woman_mechanic_tone1": {
    "char": "👩🏻‍🔧",
    "slug": "woman_mechanic_tone1",
    "category": "people"
  },
  "woman_mechanic_light_skin_tone": {
    "char": "👩🏻‍🔧",
    "slug": "woman_mechanic_tone1",
    "category": "people",
    "isAlternative": true
  },
  "woman_mechanic_tone2": {
    "char": "👩🏼‍🔧",
    "slug": "woman_mechanic_tone2",
    "category": "people"
  },
  "woman_mechanic_medium_light_skin_tone": {
    "char": "👩🏼‍🔧",
    "slug": "woman_mechanic_tone2",
    "category": "people",
    "isAlternative": true
  },
  "woman_mechanic_tone3": {
    "char": "👩🏽‍🔧",
    "slug": "woman_mechanic_tone3",
    "category": "people"
  },
  "woman_mechanic_medium_skin_tone": {
    "char": "👩🏽‍🔧",
    "slug": "woman_mechanic_tone3",
    "category": "people",
    "isAlternative": true
  },
  "woman_mechanic_tone4": {
    "char": "👩🏾‍🔧",
    "slug": "woman_mechanic_tone4",
    "category": "people"
  },
  "woman_mechanic_medium_dark_skin_tone": {
    "char": "👩🏾‍🔧",
    "slug": "woman_mechanic_tone4",
    "category": "people",
    "isAlternative": true
  },
  "woman_mechanic_tone5": {
    "char": "👩🏿‍🔧",
    "slug": "woman_mechanic_tone5",
    "category": "people"
  },
  "woman_mechanic_dark_skin_tone": {
    "char": "👩🏿‍🔧",
    "slug": "woman_mechanic_tone5",
    "category": "people",
    "isAlternative": true
  },
  "man_mechanic": {
    "char": "👨‍🔧",
    "slug": "man_mechanic",
    "category": "people"
  },
  "man_mechanic_tone1": {
    "char": "👨🏻‍🔧",
    "slug": "man_mechanic_tone1",
    "category": "people"
  },
  "man_mechanic_light_skin_tone": {
    "char": "👨🏻‍🔧",
    "slug": "man_mechanic_tone1",
    "category": "people",
    "isAlternative": true
  },
  "man_mechanic_tone2": {
    "char": "👨🏼‍🔧",
    "slug": "man_mechanic_tone2",
    "category": "people"
  },
  "man_mechanic_medium_light_skin_tone": {
    "char": "👨🏼‍🔧",
    "slug": "man_mechanic_tone2",
    "category": "people",
    "isAlternative": true
  },
  "man_mechanic_tone3": {
    "char": "👨🏽‍🔧",
    "slug": "man_mechanic_tone3",
    "category": "people"
  },
  "man_mechanic_medium_skin_tone": {
    "char": "👨🏽‍🔧",
    "slug": "man_mechanic_tone3",
    "category": "people",
    "isAlternative": true
  },
  "man_mechanic_tone4": {
    "char": "👨🏾‍🔧",
    "slug": "man_mechanic_tone4",
    "category": "people"
  },
  "man_mechanic_medium_dark_skin_tone": {
    "char": "👨🏾‍🔧",
    "slug": "man_mechanic_tone4",
    "category": "people",
    "isAlternative": true
  },
  "man_mechanic_tone5": {
    "char": "👨🏿‍🔧",
    "slug": "man_mechanic_tone5",
    "category": "people"
  },
  "man_mechanic_dark_skin_tone": {
    "char": "👨🏿‍🔧",
    "slug": "man_mechanic_tone5",
    "category": "people",
    "isAlternative": true
  },
  "scientist": { "char": "🧑‍🔬", "slug": "scientist", "category": "people" },
  "scientist_tone1": {
    "char": "🧑🏻‍🔬",
    "slug": "scientist_tone1",
    "category": "people"
  },
  "scientist_light_skin_tone": {
    "char": "🧑🏻‍🔬",
    "slug": "scientist_tone1",
    "category": "people",
    "isAlternative": true
  },
  "scientist_tone2": {
    "char": "🧑🏼‍🔬",
    "slug": "scientist_tone2",
    "category": "people"
  },
  "scientist_medium_light_skin_tone": {
    "char": "🧑🏼‍🔬",
    "slug": "scientist_tone2",
    "category": "people",
    "isAlternative": true
  },
  "scientist_tone3": {
    "char": "🧑🏽‍🔬",
    "slug": "scientist_tone3",
    "category": "people"
  },
  "scientist_medium_skin_tone": {
    "char": "🧑🏽‍🔬",
    "slug": "scientist_tone3",
    "category": "people",
    "isAlternative": true
  },
  "scientist_tone4": {
    "char": "🧑🏾‍🔬",
    "slug": "scientist_tone4",
    "category": "people"
  },
  "scientist_medium_dark_skin_tone": {
    "char": "🧑🏾‍🔬",
    "slug": "scientist_tone4",
    "category": "people",
    "isAlternative": true
  },
  "scientist_tone5": {
    "char": "🧑🏿‍🔬",
    "slug": "scientist_tone5",
    "category": "people"
  },
  "scientist_dark_skin_tone": {
    "char": "🧑🏿‍🔬",
    "slug": "scientist_tone5",
    "category": "people",
    "isAlternative": true
  },
  "woman_scientist": {
    "char": "👩‍🔬",
    "slug": "woman_scientist",
    "category": "people"
  },
  "woman_scientist_tone1": {
    "char": "👩🏻‍🔬",
    "slug": "woman_scientist_tone1",
    "category": "people"
  },
  "woman_scientist_light_skin_tone": {
    "char": "👩🏻‍🔬",
    "slug": "woman_scientist_tone1",
    "category": "people",
    "isAlternative": true
  },
  "woman_scientist_tone2": {
    "char": "👩🏼‍🔬",
    "slug": "woman_scientist_tone2",
    "category": "people"
  },
  "woman_scientist_medium_light_skin_tone": {
    "char": "👩🏼‍🔬",
    "slug": "woman_scientist_tone2",
    "category": "people",
    "isAlternative": true
  },
  "woman_scientist_tone3": {
    "char": "👩🏽‍🔬",
    "slug": "woman_scientist_tone3",
    "category": "people"
  },
  "woman_scientist_medium_skin_tone": {
    "char": "👩🏽‍🔬",
    "slug": "woman_scientist_tone3",
    "category": "people",
    "isAlternative": true
  },
  "woman_scientist_tone4": {
    "char": "👩🏾‍🔬",
    "slug": "woman_scientist_tone4",
    "category": "people"
  },
  "woman_scientist_medium_dark_skin_tone": {
    "char": "👩🏾‍🔬",
    "slug": "woman_scientist_tone4",
    "category": "people",
    "isAlternative": true
  },
  "woman_scientist_tone5": {
    "char": "👩🏿‍🔬",
    "slug": "woman_scientist_tone5",
    "category": "people"
  },
  "woman_scientist_dark_skin_tone": {
    "char": "👩🏿‍🔬",
    "slug": "woman_scientist_tone5",
    "category": "people",
    "isAlternative": true
  },
  "man_scientist": {
    "char": "👨‍🔬",
    "slug": "man_scientist",
    "category": "people"
  },
  "man_scientist_tone1": {
    "char": "👨🏻‍🔬",
    "slug": "man_scientist_tone1",
    "category": "people"
  },
  "man_scientist_light_skin_tone": {
    "char": "👨🏻‍🔬",
    "slug": "man_scientist_tone1",
    "category": "people",
    "isAlternative": true
  },
  "man_scientist_tone2": {
    "char": "👨🏼‍🔬",
    "slug": "man_scientist_tone2",
    "category": "people"
  },
  "man_scientist_medium_light_skin_tone": {
    "char": "👨🏼‍🔬",
    "slug": "man_scientist_tone2",
    "category": "people",
    "isAlternative": true
  },
  "man_scientist_tone3": {
    "char": "👨🏽‍🔬",
    "slug": "man_scientist_tone3",
    "category": "people"
  },
  "man_scientist_medium_skin_tone": {
    "char": "👨🏽‍🔬",
    "slug": "man_scientist_tone3",
    "category": "people",
    "isAlternative": true
  },
  "man_scientist_tone4": {
    "char": "👨🏾‍🔬",
    "slug": "man_scientist_tone4",
    "category": "people"
  },
  "man_scientist_medium_dark_skin_tone": {
    "char": "👨🏾‍🔬",
    "slug": "man_scientist_tone4",
    "category": "people",
    "isAlternative": true
  },
  "man_scientist_tone5": {
    "char": "👨🏿‍🔬",
    "slug": "man_scientist_tone5",
    "category": "people"
  },
  "man_scientist_dark_skin_tone": {
    "char": "👨🏿‍🔬",
    "slug": "man_scientist_tone5",
    "category": "people",
    "isAlternative": true
  },
  "artist": { "char": "🧑‍🎨", "slug": "artist", "category": "people" },
  "artist_tone1": {
    "char": "🧑🏻‍🎨",
    "slug": "artist_tone1",
    "category": "people"
  },
  "artist_light_skin_tone": {
    "char": "🧑🏻‍🎨",
    "slug": "artist_tone1",
    "category": "people",
    "isAlternative": true
  },
  "artist_tone2": {
    "char": "🧑🏼‍🎨",
    "slug": "artist_tone2",
    "category": "people"
  },
  "artist_medium_light_skin_tone": {
    "char": "🧑🏼‍🎨",
    "slug": "artist_tone2",
    "category": "people",
    "isAlternative": true
  },
  "artist_tone3": {
    "char": "🧑🏽‍🎨",
    "slug": "artist_tone3",
    "category": "people"
  },
  "artist_medium_skin_tone": {
    "char": "🧑🏽‍🎨",
    "slug": "artist_tone3",
    "category": "people",
    "isAlternative": true
  },
  "artist_tone4": {
    "char": "🧑🏾‍🎨",
    "slug": "artist_tone4",
    "category": "people"
  },
  "artist_medium_dark_skin_tone": {
    "char": "🧑🏾‍🎨",
    "slug": "artist_tone4",
    "category": "people",
    "isAlternative": true
  },
  "artist_tone5": {
    "char": "🧑🏿‍🎨",
    "slug": "artist_tone5",
    "category": "people"
  },
  "artist_dark_skin_tone": {
    "char": "🧑🏿‍🎨",
    "slug": "artist_tone5",
    "category": "people",
    "isAlternative": true
  },
  "woman_artist": {
    "char": "👩‍🎨",
    "slug": "woman_artist",
    "category": "people"
  },
  "woman_artist_tone1": {
    "char": "👩🏻‍🎨",
    "slug": "woman_artist_tone1",
    "category": "people"
  },
  "woman_artist_light_skin_tone": {
    "char": "👩🏻‍🎨",
    "slug": "woman_artist_tone1",
    "category": "people",
    "isAlternative": true
  },
  "woman_artist_tone2": {
    "char": "👩🏼‍🎨",
    "slug": "woman_artist_tone2",
    "category": "people"
  },
  "woman_artist_medium_light_skin_tone": {
    "char": "👩🏼‍🎨",
    "slug": "woman_artist_tone2",
    "category": "people",
    "isAlternative": true
  },
  "woman_artist_tone3": {
    "char": "👩🏽‍🎨",
    "slug": "woman_artist_tone3",
    "category": "people"
  },
  "woman_artist_medium_skin_tone": {
    "char": "👩🏽‍🎨",
    "slug": "woman_artist_tone3",
    "category": "people",
    "isAlternative": true
  },
  "woman_artist_tone4": {
    "char": "👩🏾‍🎨",
    "slug": "woman_artist_tone4",
    "category": "people"
  },
  "woman_artist_medium_dark_skin_tone": {
    "char": "👩🏾‍🎨",
    "slug": "woman_artist_tone4",
    "category": "people",
    "isAlternative": true
  },
  "woman_artist_tone5": {
    "char": "👩🏿‍🎨",
    "slug": "woman_artist_tone5",
    "category": "people"
  },
  "woman_artist_dark_skin_tone": {
    "char": "👩🏿‍🎨",
    "slug": "woman_artist_tone5",
    "category": "people",
    "isAlternative": true
  },
  "man_artist": { "char": "👨‍🎨", "slug": "man_artist", "category": "people" },
  "man_artist_tone1": {
    "char": "👨🏻‍🎨",
    "slug": "man_artist_tone1",
    "category": "people"
  },
  "man_artist_light_skin_tone": {
    "char": "👨🏻‍🎨",
    "slug": "man_artist_tone1",
    "category": "people",
    "isAlternative": true
  },
  "man_artist_tone2": {
    "char": "👨🏼‍🎨",
    "slug": "man_artist_tone2",
    "category": "people"
  },
  "man_artist_medium_light_skin_tone": {
    "char": "👨🏼‍🎨",
    "slug": "man_artist_tone2",
    "category": "people",
    "isAlternative": true
  },
  "man_artist_tone3": {
    "char": "👨🏽‍🎨",
    "slug": "man_artist_tone3",
    "category": "people"
  },
  "man_artist_medium_skin_tone": {
    "char": "👨🏽‍🎨",
    "slug": "man_artist_tone3",
    "category": "people",
    "isAlternative": true
  },
  "man_artist_tone4": {
    "char": "👨🏾‍🎨",
    "slug": "man_artist_tone4",
    "category": "people"
  },
  "man_artist_medium_dark_skin_tone": {
    "char": "👨🏾‍🎨",
    "slug": "man_artist_tone4",
    "category": "people",
    "isAlternative": true
  },
  "man_artist_tone5": {
    "char": "👨🏿‍🎨",
    "slug": "man_artist_tone5",
    "category": "people"
  },
  "man_artist_dark_skin_tone": {
    "char": "👨🏿‍🎨",
    "slug": "man_artist_tone5",
    "category": "people",
    "isAlternative": true
  },
  "firefighter": { "char": "🧑‍🚒", "slug": "firefighter", "category": "people" },
  "firefighter_tone1": {
    "char": "🧑🏻‍🚒",
    "slug": "firefighter_tone1",
    "category": "people"
  },
  "firefighter_light_skin_tone": {
    "char": "🧑🏻‍🚒",
    "slug": "firefighter_tone1",
    "category": "people",
    "isAlternative": true
  },
  "firefighter_tone2": {
    "char": "🧑🏼‍🚒",
    "slug": "firefighter_tone2",
    "category": "people"
  },
  "firefighter_medium_light_skin_tone": {
    "char": "🧑🏼‍🚒",
    "slug": "firefighter_tone2",
    "category": "people",
    "isAlternative": true
  },
  "firefighter_tone3": {
    "char": "🧑🏽‍🚒",
    "slug": "firefighter_tone3",
    "category": "people"
  },
  "firefighter_medium_skin_tone": {
    "char": "🧑🏽‍🚒",
    "slug": "firefighter_tone3",
    "category": "people",
    "isAlternative": true
  },
  "firefighter_tone4": {
    "char": "🧑🏾‍🚒",
    "slug": "firefighter_tone4",
    "category": "people"
  },
  "firefighter_medium_dark_skin_tone": {
    "char": "🧑🏾‍🚒",
    "slug": "firefighter_tone4",
    "category": "people",
    "isAlternative": true
  },
  "firefighter_tone5": {
    "char": "🧑🏿‍🚒",
    "slug": "firefighter_tone5",
    "category": "people"
  },
  "firefighter_dark_skin_tone": {
    "char": "🧑🏿‍🚒",
    "slug": "firefighter_tone5",
    "category": "people",
    "isAlternative": true
  },
  "woman_firefighter": {
    "char": "👩‍🚒",
    "slug": "woman_firefighter",
    "category": "people"
  },
  "woman_firefighter_tone1": {
    "char": "👩🏻‍🚒",
    "slug": "woman_firefighter_tone1",
    "category": "people"
  },
  "woman_firefighter_light_skin_tone": {
    "char": "👩🏻‍🚒",
    "slug": "woman_firefighter_tone1",
    "category": "people",
    "isAlternative": true
  },
  "woman_firefighter_tone2": {
    "char": "👩🏼‍🚒",
    "slug": "woman_firefighter_tone2",
    "category": "people"
  },
  "woman_firefighter_medium_light_skin_tone": {
    "char": "👩🏼‍🚒",
    "slug": "woman_firefighter_tone2",
    "category": "people",
    "isAlternative": true
  },
  "woman_firefighter_tone3": {
    "char": "👩🏽‍🚒",
    "slug": "woman_firefighter_tone3",
    "category": "people"
  },
  "woman_firefighter_medium_skin_tone": {
    "char": "👩🏽‍🚒",
    "slug": "woman_firefighter_tone3",
    "category": "people",
    "isAlternative": true
  },
  "woman_firefighter_tone4": {
    "char": "👩🏾‍🚒",
    "slug": "woman_firefighter_tone4",
    "category": "people"
  },
  "woman_firefighter_medium_dark_skin_tone": {
    "char": "👩🏾‍🚒",
    "slug": "woman_firefighter_tone4",
    "category": "people",
    "isAlternative": true
  },
  "woman_firefighter_tone5": {
    "char": "👩🏿‍🚒",
    "slug": "woman_firefighter_tone5",
    "category": "people"
  },
  "woman_firefighter_dark_skin_tone": {
    "char": "👩🏿‍🚒",
    "slug": "woman_firefighter_tone5",
    "category": "people",
    "isAlternative": true
  },
  "man_firefighter": {
    "char": "👨‍🚒",
    "slug": "man_firefighter",
    "category": "people"
  },
  "man_firefighter_tone1": {
    "char": "👨🏻‍🚒",
    "slug": "man_firefighter_tone1",
    "category": "people"
  },
  "man_firefighter_light_skin_tone": {
    "char": "👨🏻‍🚒",
    "slug": "man_firefighter_tone1",
    "category": "people",
    "isAlternative": true
  },
  "man_firefighter_tone2": {
    "char": "👨🏼‍🚒",
    "slug": "man_firefighter_tone2",
    "category": "people"
  },
  "man_firefighter_medium_light_skin_tone": {
    "char": "👨🏼‍🚒",
    "slug": "man_firefighter_tone2",
    "category": "people",
    "isAlternative": true
  },
  "man_firefighter_tone3": {
    "char": "👨🏽‍🚒",
    "slug": "man_firefighter_tone3",
    "category": "people"
  },
  "man_firefighter_medium_skin_tone": {
    "char": "👨🏽‍🚒",
    "slug": "man_firefighter_tone3",
    "category": "people",
    "isAlternative": true
  },
  "man_firefighter_tone4": {
    "char": "👨🏾‍🚒",
    "slug": "man_firefighter_tone4",
    "category": "people"
  },
  "man_firefighter_medium_dark_skin_tone": {
    "char": "👨🏾‍🚒",
    "slug": "man_firefighter_tone4",
    "category": "people",
    "isAlternative": true
  },
  "man_firefighter_tone5": {
    "char": "👨🏿‍🚒",
    "slug": "man_firefighter_tone5",
    "category": "people"
  },
  "man_firefighter_dark_skin_tone": {
    "char": "👨🏿‍🚒",
    "slug": "man_firefighter_tone5",
    "category": "people",
    "isAlternative": true
  },
  "pilot": { "char": "🧑‍✈️", "slug": "pilot", "category": "people" },
  "pilot_tone1": { "char": "🧑🏻‍✈️", "slug": "pilot_tone1", "category": "people" },
  "pilot_light_skin_tone": {
    "char": "🧑🏻‍✈️",
    "slug": "pilot_tone1",
    "category": "people",
    "isAlternative": true
  },
  "pilot_tone2": { "char": "🧑🏼‍✈️", "slug": "pilot_tone2", "category": "people" },
  "pilot_medium_light_skin_tone": {
    "char": "🧑🏼‍✈️",
    "slug": "pilot_tone2",
    "category": "people",
    "isAlternative": true
  },
  "pilot_tone3": { "char": "🧑🏽‍✈️", "slug": "pilot_tone3", "category": "people" },
  "pilot_medium_skin_tone": {
    "char": "🧑🏽‍✈️",
    "slug": "pilot_tone3",
    "category": "people",
    "isAlternative": true
  },
  "pilot_tone4": { "char": "🧑🏾‍✈️", "slug": "pilot_tone4", "category": "people" },
  "pilot_medium_dark_skin_tone": {
    "char": "🧑🏾‍✈️",
    "slug": "pilot_tone4",
    "category": "people",
    "isAlternative": true
  },
  "pilot_tone5": { "char": "🧑🏿‍✈️", "slug": "pilot_tone5", "category": "people" },
  "pilot_dark_skin_tone": {
    "char": "🧑🏿‍✈️",
    "slug": "pilot_tone5",
    "category": "people",
    "isAlternative": true
  },
  "woman_pilot": { "char": "👩‍✈️", "slug": "woman_pilot", "category": "people" },
  "woman_pilot_tone1": {
    "char": "👩🏻‍✈️",
    "slug": "woman_pilot_tone1",
    "category": "people"
  },
  "woman_pilot_light_skin_tone": {
    "char": "👩🏻‍✈️",
    "slug": "woman_pilot_tone1",
    "category": "people",
    "isAlternative": true
  },
  "woman_pilot_tone2": {
    "char": "👩🏼‍✈️",
    "slug": "woman_pilot_tone2",
    "category": "people"
  },
  "woman_pilot_medium_light_skin_tone": {
    "char": "👩🏼‍✈️",
    "slug": "woman_pilot_tone2",
    "category": "people",
    "isAlternative": true
  },
  "woman_pilot_tone3": {
    "char": "👩🏽‍✈️",
    "slug": "woman_pilot_tone3",
    "category": "people"
  },
  "woman_pilot_medium_skin_tone": {
    "char": "👩🏽‍✈️",
    "slug": "woman_pilot_tone3",
    "category": "people",
    "isAlternative": true
  },
  "woman_pilot_tone4": {
    "char": "👩🏾‍✈️",
    "slug": "woman_pilot_tone4",
    "category": "people"
  },
  "woman_pilot_medium_dark_skin_tone": {
    "char": "👩🏾‍✈️",
    "slug": "woman_pilot_tone4",
    "category": "people",
    "isAlternative": true
  },
  "woman_pilot_tone5": {
    "char": "👩🏿‍✈️",
    "slug": "woman_pilot_tone5",
    "category": "people"
  },
  "woman_pilot_dark_skin_tone": {
    "char": "👩🏿‍✈️",
    "slug": "woman_pilot_tone5",
    "category": "people",
    "isAlternative": true
  },
  "man_pilot": { "char": "👨‍✈️", "slug": "man_pilot", "category": "people" },
  "man_pilot_tone1": {
    "char": "👨🏻‍✈️",
    "slug": "man_pilot_tone1",
    "category": "people"
  },
  "man_pilot_light_skin_tone": {
    "char": "👨🏻‍✈️",
    "slug": "man_pilot_tone1",
    "category": "people",
    "isAlternative": true
  },
  "man_pilot_tone2": {
    "char": "👨🏼‍✈️",
    "slug": "man_pilot_tone2",
    "category": "people"
  },
  "man_pilot_medium_light_skin_tone": {
    "char": "👨🏼‍✈️",
    "slug": "man_pilot_tone2",
    "category": "people",
    "isAlternative": true
  },
  "man_pilot_tone3": {
    "char": "👨🏽‍✈️",
    "slug": "man_pilot_tone3",
    "category": "people"
  },
  "man_pilot_medium_skin_tone": {
    "char": "👨🏽‍✈️",
    "slug": "man_pilot_tone3",
    "category": "people",
    "isAlternative": true
  },
  "man_pilot_tone4": {
    "char": "👨🏾‍✈️",
    "slug": "man_pilot_tone4",
    "category": "people"
  },
  "man_pilot_medium_dark_skin_tone": {
    "char": "👨🏾‍✈️",
    "slug": "man_pilot_tone4",
    "category": "people",
    "isAlternative": true
  },
  "man_pilot_tone5": {
    "char": "👨🏿‍✈️",
    "slug": "man_pilot_tone5",
    "category": "people"
  },
  "man_pilot_dark_skin_tone": {
    "char": "👨🏿‍✈️",
    "slug": "man_pilot_tone5",
    "category": "people",
    "isAlternative": true
  },
  "astronaut": { "char": "🧑‍🚀", "slug": "astronaut", "category": "people" },
  "astronaut_tone1": {
    "char": "🧑🏻‍🚀",
    "slug": "astronaut_tone1",
    "category": "people"
  },
  "astronaut_light_skin_tone": {
    "char": "🧑🏻‍🚀",
    "slug": "astronaut_tone1",
    "category": "people",
    "isAlternative": true
  },
  "astronaut_tone2": {
    "char": "🧑🏼‍🚀",
    "slug": "astronaut_tone2",
    "category": "people"
  },
  "astronaut_medium_light_skin_tone": {
    "char": "🧑🏼‍🚀",
    "slug": "astronaut_tone2",
    "category": "people",
    "isAlternative": true
  },
  "astronaut_tone3": {
    "char": "🧑🏽‍🚀",
    "slug": "astronaut_tone3",
    "category": "people"
  },
  "astronaut_medium_skin_tone": {
    "char": "🧑🏽‍🚀",
    "slug": "astronaut_tone3",
    "category": "people",
    "isAlternative": true
  },
  "astronaut_tone4": {
    "char": "🧑🏾‍🚀",
    "slug": "astronaut_tone4",
    "category": "people"
  },
  "astronaut_medium_dark_skin_tone": {
    "char": "🧑🏾‍🚀",
    "slug": "astronaut_tone4",
    "category": "people",
    "isAlternative": true
  },
  "astronaut_tone5": {
    "char": "🧑🏿‍🚀",
    "slug": "astronaut_tone5",
    "category": "people"
  },
  "astronaut_dark_skin_tone": {
    "char": "🧑🏿‍🚀",
    "slug": "astronaut_tone5",
    "category": "people",
    "isAlternative": true
  },
  "woman_astronaut": {
    "char": "👩‍🚀",
    "slug": "woman_astronaut",
    "category": "people"
  },
  "woman_astronaut_tone1": {
    "char": "👩🏻‍🚀",
    "slug": "woman_astronaut_tone1",
    "category": "people"
  },
  "woman_astronaut_light_skin_tone": {
    "char": "👩🏻‍🚀",
    "slug": "woman_astronaut_tone1",
    "category": "people",
    "isAlternative": true
  },
  "woman_astronaut_tone2": {
    "char": "👩🏼‍🚀",
    "slug": "woman_astronaut_tone2",
    "category": "people"
  },
  "woman_astronaut_medium_light_skin_tone": {
    "char": "👩🏼‍🚀",
    "slug": "woman_astronaut_tone2",
    "category": "people",
    "isAlternative": true
  },
  "woman_astronaut_tone3": {
    "char": "👩🏽‍🚀",
    "slug": "woman_astronaut_tone3",
    "category": "people"
  },
  "woman_astronaut_medium_skin_tone": {
    "char": "👩🏽‍🚀",
    "slug": "woman_astronaut_tone3",
    "category": "people",
    "isAlternative": true
  },
  "woman_astronaut_tone4": {
    "char": "👩🏾‍🚀",
    "slug": "woman_astronaut_tone4",
    "category": "people"
  },
  "woman_astronaut_medium_dark_skin_tone": {
    "char": "👩🏾‍🚀",
    "slug": "woman_astronaut_tone4",
    "category": "people",
    "isAlternative": true
  },
  "woman_astronaut_tone5": {
    "char": "👩🏿‍🚀",
    "slug": "woman_astronaut_tone5",
    "category": "people"
  },
  "woman_astronaut_dark_skin_tone": {
    "char": "👩🏿‍🚀",
    "slug": "woman_astronaut_tone5",
    "category": "people",
    "isAlternative": true
  },
  "man_astronaut": {
    "char": "👨‍🚀",
    "slug": "man_astronaut",
    "category": "people"
  },
  "man_astronaut_tone1": {
    "char": "👨🏻‍🚀",
    "slug": "man_astronaut_tone1",
    "category": "people"
  },
  "man_astronaut_light_skin_tone": {
    "char": "👨🏻‍🚀",
    "slug": "man_astronaut_tone1",
    "category": "people",
    "isAlternative": true
  },
  "man_astronaut_tone2": {
    "char": "👨🏼‍🚀",
    "slug": "man_astronaut_tone2",
    "category": "people"
  },
  "man_astronaut_medium_light_skin_tone": {
    "char": "👨🏼‍🚀",
    "slug": "man_astronaut_tone2",
    "category": "people",
    "isAlternative": true
  },
  "man_astronaut_tone3": {
    "char": "👨🏽‍🚀",
    "slug": "man_astronaut_tone3",
    "category": "people"
  },
  "man_astronaut_medium_skin_tone": {
    "char": "👨🏽‍🚀",
    "slug": "man_astronaut_tone3",
    "category": "people",
    "isAlternative": true
  },
  "man_astronaut_tone4": {
    "char": "👨🏾‍🚀",
    "slug": "man_astronaut_tone4",
    "category": "people"
  },
  "man_astronaut_medium_dark_skin_tone": {
    "char": "👨🏾‍🚀",
    "slug": "man_astronaut_tone4",
    "category": "people",
    "isAlternative": true
  },
  "man_astronaut_tone5": {
    "char": "👨🏿‍🚀",
    "slug": "man_astronaut_tone5",
    "category": "people"
  },
  "man_astronaut_dark_skin_tone": {
    "char": "👨🏿‍🚀",
    "slug": "man_astronaut_tone5",
    "category": "people",
    "isAlternative": true
  },
  "judge": { "char": "🧑‍⚖️", "slug": "judge", "category": "people" },
  "judge_tone1": { "char": "🧑🏻‍⚖️", "slug": "judge_tone1", "category": "people" },
  "judge_light_skin_tone": {
    "char": "🧑🏻‍⚖️",
    "slug": "judge_tone1",
    "category": "people",
    "isAlternative": true
  },
  "judge_tone2": { "char": "🧑🏼‍⚖️", "slug": "judge_tone2", "category": "people" },
  "judge_medium_light_skin_tone": {
    "char": "🧑🏼‍⚖️",
    "slug": "judge_tone2",
    "category": "people",
    "isAlternative": true
  },
  "judge_tone3": { "char": "🧑🏽‍⚖️", "slug": "judge_tone3", "category": "people" },
  "judge_medium_skin_tone": {
    "char": "🧑🏽‍⚖️",
    "slug": "judge_tone3",
    "category": "people",
    "isAlternative": true
  },
  "judge_tone4": { "char": "🧑🏾‍⚖️", "slug": "judge_tone4", "category": "people" },
  "judge_medium_dark_skin_tone": {
    "char": "🧑🏾‍⚖️",
    "slug": "judge_tone4",
    "category": "people",
    "isAlternative": true
  },
  "judge_tone5": { "char": "🧑🏿‍⚖️", "slug": "judge_tone5", "category": "people" },
  "judge_dark_skin_tone": {
    "char": "🧑🏿‍⚖️",
    "slug": "judge_tone5",
    "category": "people",
    "isAlternative": true
  },
  "woman_judge": { "char": "👩‍⚖️", "slug": "woman_judge", "category": "people" },
  "woman_judge_tone1": {
    "char": "👩🏻‍⚖️",
    "slug": "woman_judge_tone1",
    "category": "people"
  },
  "woman_judge_light_skin_tone": {
    "char": "👩🏻‍⚖️",
    "slug": "woman_judge_tone1",
    "category": "people",
    "isAlternative": true
  },
  "woman_judge_tone2": {
    "char": "👩🏼‍⚖️",
    "slug": "woman_judge_tone2",
    "category": "people"
  },
  "woman_judge_medium_light_skin_tone": {
    "char": "👩🏼‍⚖️",
    "slug": "woman_judge_tone2",
    "category": "people",
    "isAlternative": true
  },
  "woman_judge_tone3": {
    "char": "👩🏽‍⚖️",
    "slug": "woman_judge_tone3",
    "category": "people"
  },
  "woman_judge_medium_skin_tone": {
    "char": "👩🏽‍⚖️",
    "slug": "woman_judge_tone3",
    "category": "people",
    "isAlternative": true
  },
  "woman_judge_tone4": {
    "char": "👩🏾‍⚖️",
    "slug": "woman_judge_tone4",
    "category": "people"
  },
  "woman_judge_medium_dark_skin_tone": {
    "char": "👩🏾‍⚖️",
    "slug": "woman_judge_tone4",
    "category": "people",
    "isAlternative": true
  },
  "woman_judge_tone5": {
    "char": "👩🏿‍⚖️",
    "slug": "woman_judge_tone5",
    "category": "people"
  },
  "woman_judge_dark_skin_tone": {
    "char": "👩🏿‍⚖️",
    "slug": "woman_judge_tone5",
    "category": "people",
    "isAlternative": true
  },
  "man_judge": { "char": "👨‍⚖️", "slug": "man_judge", "category": "people" },
  "man_judge_tone1": {
    "char": "👨🏻‍⚖️",
    "slug": "man_judge_tone1",
    "category": "people"
  },
  "man_judge_light_skin_tone": {
    "char": "👨🏻‍⚖️",
    "slug": "man_judge_tone1",
    "category": "people",
    "isAlternative": true
  },
  "man_judge_tone2": {
    "char": "👨🏼‍⚖️",
    "slug": "man_judge_tone2",
    "category": "people"
  },
  "man_judge_medium_light_skin_tone": {
    "char": "👨🏼‍⚖️",
    "slug": "man_judge_tone2",
    "category": "people",
    "isAlternative": true
  },
  "man_judge_tone3": {
    "char": "👨🏽‍⚖️",
    "slug": "man_judge_tone3",
    "category": "people"
  },
  "man_judge_medium_skin_tone": {
    "char": "👨🏽‍⚖️",
    "slug": "man_judge_tone3",
    "category": "people",
    "isAlternative": true
  },
  "man_judge_tone4": {
    "char": "👨🏾‍⚖️",
    "slug": "man_judge_tone4",
    "category": "people"
  },
  "man_judge_medium_dark_skin_tone": {
    "char": "👨🏾‍⚖️",
    "slug": "man_judge_tone4",
    "category": "people",
    "isAlternative": true
  },
  "man_judge_tone5": {
    "char": "👨🏿‍⚖️",
    "slug": "man_judge_tone5",
    "category": "people"
  },
  "man_judge_dark_skin_tone": {
    "char": "👨🏿‍⚖️",
    "slug": "man_judge_tone5",
    "category": "people",
    "isAlternative": true
  },
  "person_with_veil": {
    "char": "👰",
    "slug": "person_with_veil",
    "category": "people"
  },
  "person_with_veil_tone1": {
    "char": "👰🏻",
    "slug": "person_with_veil_tone1",
    "category": "people"
  },
  "person_with_veil_tone2": {
    "char": "👰🏼",
    "slug": "person_with_veil_tone2",
    "category": "people"
  },
  "person_with_veil_tone3": {
    "char": "👰🏽",
    "slug": "person_with_veil_tone3",
    "category": "people"
  },
  "person_with_veil_tone4": {
    "char": "👰🏾",
    "slug": "person_with_veil_tone4",
    "category": "people"
  },
  "person_with_veil_tone5": {
    "char": "👰🏿",
    "slug": "person_with_veil_tone5",
    "category": "people"
  },
  "woman_with_veil": {
    "char": "👰‍♀️",
    "slug": "woman_with_veil",
    "category": "people"
  },
  "woman_with_veil_tone1": {
    "char": "👰🏻‍♀️",
    "slug": "woman_with_veil_tone1",
    "category": "people"
  },
  "woman_with_veil_light_skin_tone": {
    "char": "👰🏻‍♀️",
    "slug": "woman_with_veil_tone1",
    "category": "people",
    "isAlternative": true
  },
  "woman_with_veil_tone2": {
    "char": "👰🏼‍♀️",
    "slug": "woman_with_veil_tone2",
    "category": "people"
  },
  "woman_with_veil_medium_light_skin_tone": {
    "char": "👰🏼‍♀️",
    "slug": "woman_with_veil_tone2",
    "category": "people",
    "isAlternative": true
  },
  "woman_with_veil_tone3": {
    "char": "👰🏽‍♀️",
    "slug": "woman_with_veil_tone3",
    "category": "people"
  },
  "woman_with_veil_medium_skin_tone": {
    "char": "👰🏽‍♀️",
    "slug": "woman_with_veil_tone3",
    "category": "people",
    "isAlternative": true
  },
  "woman_with_veil_tone4": {
    "char": "👰🏾‍♀️",
    "slug": "woman_with_veil_tone4",
    "category": "people"
  },
  "woman_with_veil_medium_dark_skin_tone": {
    "char": "👰🏾‍♀️",
    "slug": "woman_with_veil_tone4",
    "category": "people",
    "isAlternative": true
  },
  "woman_with_veil_tone5": {
    "char": "👰🏿‍♀️",
    "slug": "woman_with_veil_tone5",
    "category": "people"
  },
  "woman_with_veil_dark_skin_tone": {
    "char": "👰🏿‍♀️",
    "slug": "woman_with_veil_tone5",
    "category": "people",
    "isAlternative": true
  },
  "man_with_veil": {
    "char": "👰‍♂️",
    "slug": "man_with_veil",
    "category": "people"
  },
  "man_with_veil_tone1": {
    "char": "👰🏻‍♂️",
    "slug": "man_with_veil_tone1",
    "category": "people"
  },
  "man_with_veil_light_skin_tone": {
    "char": "👰🏻‍♂️",
    "slug": "man_with_veil_tone1",
    "category": "people",
    "isAlternative": true
  },
  "man_with_veil_tone2": {
    "char": "👰🏼‍♂️",
    "slug": "man_with_veil_tone2",
    "category": "people"
  },
  "man_with_veil_medium_light_skin_tone": {
    "char": "👰🏼‍♂️",
    "slug": "man_with_veil_tone2",
    "category": "people",
    "isAlternative": true
  },
  "man_with_veil_tone3": {
    "char": "👰🏽‍♂️",
    "slug": "man_with_veil_tone3",
    "category": "people"
  },
  "man_with_veil_medium_skin_tone": {
    "char": "👰🏽‍♂️",
    "slug": "man_with_veil_tone3",
    "category": "people",
    "isAlternative": true
  },
  "man_with_veil_tone4": {
    "char": "👰🏾‍♂️",
    "slug": "man_with_veil_tone4",
    "category": "people"
  },
  "man_with_veil_medium_dark_skin_tone": {
    "char": "👰🏾‍♂️",
    "slug": "man_with_veil_tone4",
    "category": "people",
    "isAlternative": true
  },
  "man_with_veil_tone5": {
    "char": "👰🏿‍♂️",
    "slug": "man_with_veil_tone5",
    "category": "people"
  },
  "man_with_veil_dark_skin_tone": {
    "char": "👰🏿‍♂️",
    "slug": "man_with_veil_tone5",
    "category": "people",
    "isAlternative": true
  },
  "person_in_tuxedo": {
    "char": "🤵",
    "slug": "person_in_tuxedo",
    "category": "people"
  },
  "person_in_tuxedo_tone1": {
    "char": "🤵🏻",
    "slug": "person_in_tuxedo_tone1",
    "category": "people"
  },
  "tuxedo_tone1": {
    "char": "🤵🏻",
    "slug": "person_in_tuxedo_tone1",
    "category": "people",
    "isAlternative": true
  },
  "person_in_tuxedo_tone2": {
    "char": "🤵🏼",
    "slug": "person_in_tuxedo_tone2",
    "category": "people"
  },
  "tuxedo_tone2": {
    "char": "🤵🏼",
    "slug": "person_in_tuxedo_tone2",
    "category": "people",
    "isAlternative": true
  },
  "person_in_tuxedo_tone3": {
    "char": "🤵🏽",
    "slug": "person_in_tuxedo_tone3",
    "category": "people"
  },
  "tuxedo_tone3": {
    "char": "🤵🏽",
    "slug": "person_in_tuxedo_tone3",
    "category": "people",
    "isAlternative": true
  },
  "person_in_tuxedo_tone4": {
    "char": "🤵🏾",
    "slug": "person_in_tuxedo_tone4",
    "category": "people"
  },
  "tuxedo_tone4": {
    "char": "🤵🏾",
    "slug": "person_in_tuxedo_tone4",
    "category": "people",
    "isAlternative": true
  },
  "person_in_tuxedo_tone5": {
    "char": "🤵🏿",
    "slug": "person_in_tuxedo_tone5",
    "category": "people"
  },
  "tuxedo_tone5": {
    "char": "🤵🏿",
    "slug": "person_in_tuxedo_tone5",
    "category": "people",
    "isAlternative": true
  },
  "woman_in_tuxedo": {
    "char": "🤵‍♀️",
    "slug": "woman_in_tuxedo",
    "category": "people"
  },
  "woman_in_tuxedo_tone1": {
    "char": "🤵🏻‍♀️",
    "slug": "woman_in_tuxedo_tone1",
    "category": "people"
  },
  "woman_in_tuxedo_light_skin_tone": {
    "char": "🤵🏻‍♀️",
    "slug": "woman_in_tuxedo_tone1",
    "category": "people",
    "isAlternative": true
  },
  "woman_in_tuxedo_tone2": {
    "char": "🤵🏼‍♀️",
    "slug": "woman_in_tuxedo_tone2",
    "category": "people"
  },
  "woman_in_tuxedo_medium_light_skin_tone": {
    "char": "🤵🏼‍♀️",
    "slug": "woman_in_tuxedo_tone2",
    "category": "people",
    "isAlternative": true
  },
  "woman_in_tuxedo_tone3": {
    "char": "🤵🏽‍♀️",
    "slug": "woman_in_tuxedo_tone3",
    "category": "people"
  },
  "woman_in_tuxedo_medium_skin_tone": {
    "char": "🤵🏽‍♀️",
    "slug": "woman_in_tuxedo_tone3",
    "category": "people",
    "isAlternative": true
  },
  "woman_in_tuxedo_tone4": {
    "char": "🤵🏾‍♀️",
    "slug": "woman_in_tuxedo_tone4",
    "category": "people"
  },
  "woman_in_tuxedo_medium_dark_skin_tone": {
    "char": "🤵🏾‍♀️",
    "slug": "woman_in_tuxedo_tone4",
    "category": "people",
    "isAlternative": true
  },
  "woman_in_tuxedo_tone5": {
    "char": "🤵🏿‍♀️",
    "slug": "woman_in_tuxedo_tone5",
    "category": "people"
  },
  "woman_in_tuxedo_dark_skin_tone": {
    "char": "🤵🏿‍♀️",
    "slug": "woman_in_tuxedo_tone5",
    "category": "people",
    "isAlternative": true
  },
  "man_in_tuxedo": {
    "char": "🤵‍♂️",
    "slug": "man_in_tuxedo",
    "category": "people"
  },
  "man_in_tuxedo_tone1": {
    "char": "🤵🏻‍♂️",
    "slug": "man_in_tuxedo_tone1",
    "category": "people"
  },
  "man_in_tuxedo_light_skin_tone": {
    "char": "🤵🏻‍♂️",
    "slug": "man_in_tuxedo_tone1",
    "category": "people",
    "isAlternative": true
  },
  "man_in_tuxedo_tone2": {
    "char": "🤵🏼‍♂️",
    "slug": "man_in_tuxedo_tone2",
    "category": "people"
  },
  "man_in_tuxedo_medium_light_skin_tone": {
    "char": "🤵🏼‍♂️",
    "slug": "man_in_tuxedo_tone2",
    "category": "people",
    "isAlternative": true
  },
  "man_in_tuxedo_tone3": {
    "char": "🤵🏽‍♂️",
    "slug": "man_in_tuxedo_tone3",
    "category": "people"
  },
  "man_in_tuxedo_medium_skin_tone": {
    "char": "🤵🏽‍♂️",
    "slug": "man_in_tuxedo_tone3",
    "category": "people",
    "isAlternative": true
  },
  "man_in_tuxedo_tone4": {
    "char": "🤵🏾‍♂️",
    "slug": "man_in_tuxedo_tone4",
    "category": "people"
  },
  "man_in_tuxedo_medium_dark_skin_tone": {
    "char": "🤵🏾‍♂️",
    "slug": "man_in_tuxedo_tone4",
    "category": "people",
    "isAlternative": true
  },
  "man_in_tuxedo_tone5": {
    "char": "🤵🏿‍♂️",
    "slug": "man_in_tuxedo_tone5",
    "category": "people"
  },
  "man_in_tuxedo_dark_skin_tone": {
    "char": "🤵🏿‍♂️",
    "slug": "man_in_tuxedo_tone5",
    "category": "people",
    "isAlternative": true
  },
  "person_with_crown": {
    "char": "🫅",
    "slug": "person_with_crown",
    "category": "people"
  },
  "person_with_crown_tone1": {
    "char": "🫅🏻",
    "slug": "person_with_crown_tone1",
    "category": "people"
  },
  "person_with_crown_light_skin_tone": {
    "char": "🫅🏻",
    "slug": "person_with_crown_tone1",
    "category": "people",
    "isAlternative": true
  },
  "person_with_crown_tone2": {
    "char": "🫅🏼",
    "slug": "person_with_crown_tone2",
    "category": "people"
  },
  "person_with_crown_medium_light_skin_tone": {
    "char": "🫅🏼",
    "slug": "person_with_crown_tone2",
    "category": "people",
    "isAlternative": true
  },
  "person_with_crown_tone3": {
    "char": "🫅🏽",
    "slug": "person_with_crown_tone3",
    "category": "people"
  },
  "person_with_crown_medium_skin_tone": {
    "char": "🫅🏽",
    "slug": "person_with_crown_tone3",
    "category": "people",
    "isAlternative": true
  },
  "person_with_crown_tone4": {
    "char": "🫅🏾",
    "slug": "person_with_crown_tone4",
    "category": "people"
  },
  "person_with_crown_medium_dark_skin_tone": {
    "char": "🫅🏾",
    "slug": "person_with_crown_tone4",
    "category": "people",
    "isAlternative": true
  },
  "person_with_crown_tone5": {
    "char": "🫅🏿",
    "slug": "person_with_crown_tone5",
    "category": "people"
  },
  "person_with_crown_dark_skin_tone": {
    "char": "🫅🏿",
    "slug": "person_with_crown_tone5",
    "category": "people",
    "isAlternative": true
  },
  "princess": { "char": "👸", "slug": "princess", "category": "people" },
  "princess_tone1": {
    "char": "👸🏻",
    "slug": "princess_tone1",
    "category": "people"
  },
  "princess_tone2": {
    "char": "👸🏼",
    "slug": "princess_tone2",
    "category": "people"
  },
  "princess_tone3": {
    "char": "👸🏽",
    "slug": "princess_tone3",
    "category": "people"
  },
  "princess_tone4": {
    "char": "👸🏾",
    "slug": "princess_tone4",
    "category": "people"
  },
  "princess_tone5": {
    "char": "👸🏿",
    "slug": "princess_tone5",
    "category": "people"
  },
  "prince": { "char": "🤴", "slug": "prince", "category": "people" },
  "prince_tone1": {
    "char": "🤴🏻",
    "slug": "prince_tone1",
    "category": "people"
  },
  "prince_tone2": {
    "char": "🤴🏼",
    "slug": "prince_tone2",
    "category": "people"
  },
  "prince_tone3": {
    "char": "🤴🏽",
    "slug": "prince_tone3",
    "category": "people"
  },
  "prince_tone4": {
    "char": "🤴🏾",
    "slug": "prince_tone4",
    "category": "people"
  },
  "prince_tone5": {
    "char": "🤴🏿",
    "slug": "prince_tone5",
    "category": "people"
  },
  "superhero": { "char": "🦸", "slug": "superhero", "category": "people" },
  "superhero_tone1": {
    "char": "🦸🏻",
    "slug": "superhero_tone1",
    "category": "people"
  },
  "superhero_light_skin_tone": {
    "char": "🦸🏻",
    "slug": "superhero_tone1",
    "category": "people",
    "isAlternative": true
  },
  "superhero_tone2": {
    "char": "🦸🏼",
    "slug": "superhero_tone2",
    "category": "people"
  },
  "superhero_medium_light_skin_tone": {
    "char": "🦸🏼",
    "slug": "superhero_tone2",
    "category": "people",
    "isAlternative": true
  },
  "superhero_tone3": {
    "char": "🦸🏽",
    "slug": "superhero_tone3",
    "category": "people"
  },
  "superhero_medium_skin_tone": {
    "char": "🦸🏽",
    "slug": "superhero_tone3",
    "category": "people",
    "isAlternative": true
  },
  "superhero_tone4": {
    "char": "🦸🏾",
    "slug": "superhero_tone4",
    "category": "people"
  },
  "superhero_medium_dark_skin_tone": {
    "char": "🦸🏾",
    "slug": "superhero_tone4",
    "category": "people",
    "isAlternative": true
  },
  "superhero_tone5": {
    "char": "🦸🏿",
    "slug": "superhero_tone5",
    "category": "people"
  },
  "superhero_dark_skin_tone": {
    "char": "🦸🏿",
    "slug": "superhero_tone5",
    "category": "people",
    "isAlternative": true
  },
  "woman_superhero": {
    "char": "🦸‍♀️",
    "slug": "woman_superhero",
    "category": "people"
  },
  "woman_superhero_tone1": {
    "char": "🦸🏻‍♀️",
    "slug": "woman_superhero_tone1",
    "category": "people"
  },
  "woman_superhero_light_skin_tone": {
    "char": "🦸🏻‍♀️",
    "slug": "woman_superhero_tone1",
    "category": "people",
    "isAlternative": true
  },
  "woman_superhero_tone2": {
    "char": "🦸🏼‍♀️",
    "slug": "woman_superhero_tone2",
    "category": "people"
  },
  "woman_superhero_medium_light_skin_tone": {
    "char": "🦸🏼‍♀️",
    "slug": "woman_superhero_tone2",
    "category": "people",
    "isAlternative": true
  },
  "woman_superhero_tone3": {
    "char": "🦸🏽‍♀️",
    "slug": "woman_superhero_tone3",
    "category": "people"
  },
  "woman_superhero_medium_skin_tone": {
    "char": "🦸🏽‍♀️",
    "slug": "woman_superhero_tone3",
    "category": "people",
    "isAlternative": true
  },
  "woman_superhero_tone4": {
    "char": "🦸🏾‍♀️",
    "slug": "woman_superhero_tone4",
    "category": "people"
  },
  "woman_superhero_medium_dark_skin_tone": {
    "char": "🦸🏾‍♀️",
    "slug": "woman_superhero_tone4",
    "category": "people",
    "isAlternative": true
  },
  "woman_superhero_tone5": {
    "char": "🦸🏿‍♀️",
    "slug": "woman_superhero_tone5",
    "category": "people"
  },
  "woman_superhero_dark_skin_tone": {
    "char": "🦸🏿‍♀️",
    "slug": "woman_superhero_tone5",
    "category": "people",
    "isAlternative": true
  },
  "man_superhero": {
    "char": "🦸‍♂️",
    "slug": "man_superhero",
    "category": "people"
  },
  "man_superhero_tone1": {
    "char": "🦸🏻‍♂️",
    "slug": "man_superhero_tone1",
    "category": "people"
  },
  "man_superhero_light_skin_tone": {
    "char": "🦸🏻‍♂️",
    "slug": "man_superhero_tone1",
    "category": "people",
    "isAlternative": true
  },
  "man_superhero_tone2": {
    "char": "🦸🏼‍♂️",
    "slug": "man_superhero_tone2",
    "category": "people"
  },
  "man_superhero_medium_light_skin_tone": {
    "char": "🦸🏼‍♂️",
    "slug": "man_superhero_tone2",
    "category": "people",
    "isAlternative": true
  },
  "man_superhero_tone3": {
    "char": "🦸🏽‍♂️",
    "slug": "man_superhero_tone3",
    "category": "people"
  },
  "man_superhero_medium_skin_tone": {
    "char": "🦸🏽‍♂️",
    "slug": "man_superhero_tone3",
    "category": "people",
    "isAlternative": true
  },
  "man_superhero_tone4": {
    "char": "🦸🏾‍♂️",
    "slug": "man_superhero_tone4",
    "category": "people"
  },
  "man_superhero_medium_dark_skin_tone": {
    "char": "🦸🏾‍♂️",
    "slug": "man_superhero_tone4",
    "category": "people",
    "isAlternative": true
  },
  "man_superhero_tone5": {
    "char": "🦸🏿‍♂️",
    "slug": "man_superhero_tone5",
    "category": "people"
  },
  "man_superhero_dark_skin_tone": {
    "char": "🦸🏿‍♂️",
    "slug": "man_superhero_tone5",
    "category": "people",
    "isAlternative": true
  },
  "supervillain": {
    "char": "🦹",
    "slug": "supervillain",
    "category": "people"
  },
  "supervillain_tone1": {
    "char": "🦹🏻",
    "slug": "supervillain_tone1",
    "category": "people"
  },
  "supervillain_light_skin_tone": {
    "char": "🦹🏻",
    "slug": "supervillain_tone1",
    "category": "people",
    "isAlternative": true
  },
  "supervillain_tone2": {
    "char": "🦹🏼",
    "slug": "supervillain_tone2",
    "category": "people"
  },
  "supervillain_medium_light_skin_tone": {
    "char": "🦹🏼",
    "slug": "supervillain_tone2",
    "category": "people",
    "isAlternative": true
  },
  "supervillain_tone3": {
    "char": "🦹🏽",
    "slug": "supervillain_tone3",
    "category": "people"
  },
  "supervillain_medium_skin_tone": {
    "char": "🦹🏽",
    "slug": "supervillain_tone3",
    "category": "people",
    "isAlternative": true
  },
  "supervillain_tone4": {
    "char": "🦹🏾",
    "slug": "supervillain_tone4",
    "category": "people"
  },
  "supervillain_medium_dark_skin_tone": {
    "char": "🦹🏾",
    "slug": "supervillain_tone4",
    "category": "people",
    "isAlternative": true
  },
  "supervillain_tone5": {
    "char": "🦹🏿",
    "slug": "supervillain_tone5",
    "category": "people"
  },
  "supervillain_dark_skin_tone": {
    "char": "🦹🏿",
    "slug": "supervillain_tone5",
    "category": "people",
    "isAlternative": true
  },
  "woman_supervillain": {
    "char": "🦹‍♀️",
    "slug": "woman_supervillain",
    "category": "people"
  },
  "woman_supervillain_tone1": {
    "char": "🦹🏻‍♀️",
    "slug": "woman_supervillain_tone1",
    "category": "people"
  },
  "woman_supervillain_light_skin_tone": {
    "char": "🦹🏻‍♀️",
    "slug": "woman_supervillain_tone1",
    "category": "people",
    "isAlternative": true
  },
  "woman_supervillain_tone2": {
    "char": "🦹🏼‍♀️",
    "slug": "woman_supervillain_tone2",
    "category": "people"
  },
  "woman_supervillain_medium_light_skin_tone": {
    "char": "🦹🏼‍♀️",
    "slug": "woman_supervillain_tone2",
    "category": "people",
    "isAlternative": true
  },
  "woman_supervillain_tone3": {
    "char": "🦹🏽‍♀️",
    "slug": "woman_supervillain_tone3",
    "category": "people"
  },
  "woman_supervillain_medium_skin_tone": {
    "char": "🦹🏽‍♀️",
    "slug": "woman_supervillain_tone3",
    "category": "people",
    "isAlternative": true
  },
  "woman_supervillain_tone4": {
    "char": "🦹🏾‍♀️",
    "slug": "woman_supervillain_tone4",
    "category": "people"
  },
  "woman_supervillain_medium_dark_skin_tone": {
    "char": "🦹🏾‍♀️",
    "slug": "woman_supervillain_tone4",
    "category": "people",
    "isAlternative": true
  },
  "woman_supervillain_tone5": {
    "char": "🦹🏿‍♀️",
    "slug": "woman_supervillain_tone5",
    "category": "people"
  },
  "woman_supervillain_dark_skin_tone": {
    "char": "🦹🏿‍♀️",
    "slug": "woman_supervillain_tone5",
    "category": "people",
    "isAlternative": true
  },
  "man_supervillain": {
    "char": "🦹‍♂️",
    "slug": "man_supervillain",
    "category": "people"
  },
  "man_supervillain_tone1": {
    "char": "🦹🏻‍♂️",
    "slug": "man_supervillain_tone1",
    "category": "people"
  },
  "man_supervillain_light_skin_tone": {
    "char": "🦹🏻‍♂️",
    "slug": "man_supervillain_tone1",
    "category": "people",
    "isAlternative": true
  },
  "man_supervillain_tone2": {
    "char": "🦹🏼‍♂️",
    "slug": "man_supervillain_tone2",
    "category": "people"
  },
  "man_supervillain_medium_light_skin_tone": {
    "char": "🦹🏼‍♂️",
    "slug": "man_supervillain_tone2",
    "category": "people",
    "isAlternative": true
  },
  "man_supervillain_tone3": {
    "char": "🦹🏽‍♂️",
    "slug": "man_supervillain_tone3",
    "category": "people"
  },
  "man_supervillain_medium_skin_tone": {
    "char": "🦹🏽‍♂️",
    "slug": "man_supervillain_tone3",
    "category": "people",
    "isAlternative": true
  },
  "man_supervillain_tone4": {
    "char": "🦹🏾‍♂️",
    "slug": "man_supervillain_tone4",
    "category": "people"
  },
  "man_supervillain_medium_dark_skin_tone": {
    "char": "🦹🏾‍♂️",
    "slug": "man_supervillain_tone4",
    "category": "people",
    "isAlternative": true
  },
  "man_supervillain_tone5": {
    "char": "🦹🏿‍♂️",
    "slug": "man_supervillain_tone5",
    "category": "people"
  },
  "man_supervillain_dark_skin_tone": {
    "char": "🦹🏿‍♂️",
    "slug": "man_supervillain_tone5",
    "category": "people",
    "isAlternative": true
  },
  "ninja": { "char": "🥷", "slug": "ninja", "category": "people" },
  "ninja_tone1": { "char": "🥷🏻", "slug": "ninja_tone1", "category": "people" },
  "ninja_light_skin_tone": {
    "char": "🥷🏻",
    "slug": "ninja_tone1",
    "category": "people",
    "isAlternative": true
  },
  "ninja_tone2": { "char": "🥷🏼", "slug": "ninja_tone2", "category": "people" },
  "ninja_medium_light_skin_tone": {
    "char": "🥷🏼",
    "slug": "ninja_tone2",
    "category": "people",
    "isAlternative": true
  },
  "ninja_tone3": { "char": "🥷🏽", "slug": "ninja_tone3", "category": "people" },
  "ninja_medium_skin_tone": {
    "char": "🥷🏽",
    "slug": "ninja_tone3",
    "category": "people",
    "isAlternative": true
  },
  "ninja_tone4": { "char": "🥷🏾", "slug": "ninja_tone4", "category": "people" },
  "ninja_medium_dark_skin_tone": {
    "char": "🥷🏾",
    "slug": "ninja_tone4",
    "category": "people",
    "isAlternative": true
  },
  "ninja_tone5": { "char": "🥷🏿", "slug": "ninja_tone5", "category": "people" },
  "ninja_dark_skin_tone": {
    "char": "🥷🏿",
    "slug": "ninja_tone5",
    "category": "people",
    "isAlternative": true
  },
  "mx_claus": { "char": "🧑‍🎄", "slug": "mx_claus", "category": "people" },
  "mx_claus_tone1": {
    "char": "🧑🏻‍🎄",
    "slug": "mx_claus_tone1",
    "category": "people"
  },
  "mx_claus_light_skin_tone": {
    "char": "🧑🏻‍🎄",
    "slug": "mx_claus_tone1",
    "category": "people",
    "isAlternative": true
  },
  "mx_claus_tone2": {
    "char": "🧑🏼‍🎄",
    "slug": "mx_claus_tone2",
    "category": "people"
  },
  "mx_claus_medium_light_skin_tone": {
    "char": "🧑🏼‍🎄",
    "slug": "mx_claus_tone2",
    "category": "people",
    "isAlternative": true
  },
  "mx_claus_tone3": {
    "char": "🧑🏽‍🎄",
    "slug": "mx_claus_tone3",
    "category": "people"
  },
  "mx_claus_medium_skin_tone": {
    "char": "🧑🏽‍🎄",
    "slug": "mx_claus_tone3",
    "category": "people",
    "isAlternative": true
  },
  "mx_claus_tone4": {
    "char": "🧑🏾‍🎄",
    "slug": "mx_claus_tone4",
    "category": "people"
  },
  "mx_claus_medium_dark_skin_tone": {
    "char": "🧑🏾‍🎄",
    "slug": "mx_claus_tone4",
    "category": "people",
    "isAlternative": true
  },
  "mx_claus_tone5": {
    "char": "🧑🏿‍🎄",
    "slug": "mx_claus_tone5",
    "category": "people"
  },
  "mx_claus_dark_skin_tone": {
    "char": "🧑🏿‍🎄",
    "slug": "mx_claus_tone5",
    "category": "people",
    "isAlternative": true
  },
  "mrs_claus": { "char": "🤶", "slug": "mrs_claus", "category": "people" },
  "mother_christmas": {
    "char": "🤶",
    "slug": "mrs_claus",
    "category": "people",
    "isAlternative": true
  },
  "mrs_claus_tone1": {
    "char": "🤶🏻",
    "slug": "mrs_claus_tone1",
    "category": "people"
  },
  "mother_christmas_tone1": {
    "char": "🤶🏻",
    "slug": "mrs_claus_tone1",
    "category": "people",
    "isAlternative": true
  },
  "mrs_claus_tone2": {
    "char": "🤶🏼",
    "slug": "mrs_claus_tone2",
    "category": "people"
  },
  "mother_christmas_tone2": {
    "char": "🤶🏼",
    "slug": "mrs_claus_tone2",
    "category": "people",
    "isAlternative": true
  },
  "mrs_claus_tone3": {
    "char": "🤶🏽",
    "slug": "mrs_claus_tone3",
    "category": "people"
  },
  "mother_christmas_tone3": {
    "char": "🤶🏽",
    "slug": "mrs_claus_tone3",
    "category": "people",
    "isAlternative": true
  },
  "mrs_claus_tone4": {
    "char": "🤶🏾",
    "slug": "mrs_claus_tone4",
    "category": "people"
  },
  "mother_christmas_tone4": {
    "char": "🤶🏾",
    "slug": "mrs_claus_tone4",
    "category": "people",
    "isAlternative": true
  },
  "mrs_claus_tone5": {
    "char": "🤶🏿",
    "slug": "mrs_claus_tone5",
    "category": "people"
  },
  "mother_christmas_tone5": {
    "char": "🤶🏿",
    "slug": "mrs_claus_tone5",
    "category": "people",
    "isAlternative": true
  },
  "santa": { "char": "🎅", "slug": "santa", "category": "people" },
  "santa_claus": {
    "char": "🎅",
    "slug": "santa",
    "category": "people",
    "isAlternative": true
  },
  "santa_tone1": { "char": "🎅🏻", "slug": "santa_tone1", "category": "people" },
  "santa_tone2": { "char": "🎅🏼", "slug": "santa_tone2", "category": "people" },
  "santa_tone3": { "char": "🎅🏽", "slug": "santa_tone3", "category": "people" },
  "santa_tone4": { "char": "🎅🏾", "slug": "santa_tone4", "category": "people" },
  "santa_tone5": { "char": "🎅🏿", "slug": "santa_tone5", "category": "people" },
  "mage": { "char": "🧙", "slug": "mage", "category": "people" },
  "mage_tone1": { "char": "🧙🏻", "slug": "mage_tone1", "category": "people" },
  "mage_light_skin_tone": {
    "char": "🧙🏻",
    "slug": "mage_tone1",
    "category": "people",
    "isAlternative": true
  },
  "mage_tone2": { "char": "🧙🏼", "slug": "mage_tone2", "category": "people" },
  "mage_medium_light_skin_tone": {
    "char": "🧙🏼",
    "slug": "mage_tone2",
    "category": "people",
    "isAlternative": true
  },
  "mage_tone3": { "char": "🧙🏽", "slug": "mage_tone3", "category": "people" },
  "mage_medium_skin_tone": {
    "char": "🧙🏽",
    "slug": "mage_tone3",
    "category": "people",
    "isAlternative": true
  },
  "mage_tone4": { "char": "🧙🏾", "slug": "mage_tone4", "category": "people" },
  "mage_medium_dark_skin_tone": {
    "char": "🧙🏾",
    "slug": "mage_tone4",
    "category": "people",
    "isAlternative": true
  },
  "mage_tone5": { "char": "🧙🏿", "slug": "mage_tone5", "category": "people" },
  "mage_dark_skin_tone": {
    "char": "🧙🏿",
    "slug": "mage_tone5",
    "category": "people",
    "isAlternative": true
  },
  "woman_mage": { "char": "🧙‍♀️", "slug": "woman_mage", "category": "people" },
  "woman_mage_tone1": {
    "char": "🧙🏻‍♀️",
    "slug": "woman_mage_tone1",
    "category": "people"
  },
  "woman_mage_light_skin_tone": {
    "char": "🧙🏻‍♀️",
    "slug": "woman_mage_tone1",
    "category": "people",
    "isAlternative": true
  },
  "woman_mage_tone2": {
    "char": "🧙🏼‍♀️",
    "slug": "woman_mage_tone2",
    "category": "people"
  },
  "woman_mage_medium_light_skin_tone": {
    "char": "🧙🏼‍♀️",
    "slug": "woman_mage_tone2",
    "category": "people",
    "isAlternative": true
  },
  "woman_mage_tone3": {
    "char": "🧙🏽‍♀️",
    "slug": "woman_mage_tone3",
    "category": "people"
  },
  "woman_mage_medium_skin_tone": {
    "char": "🧙🏽‍♀️",
    "slug": "woman_mage_tone3",
    "category": "people",
    "isAlternative": true
  },
  "woman_mage_tone4": {
    "char": "🧙🏾‍♀️",
    "slug": "woman_mage_tone4",
    "category": "people"
  },
  "woman_mage_medium_dark_skin_tone": {
    "char": "🧙🏾‍♀️",
    "slug": "woman_mage_tone4",
    "category": "people",
    "isAlternative": true
  },
  "woman_mage_tone5": {
    "char": "🧙🏿‍♀️",
    "slug": "woman_mage_tone5",
    "category": "people"
  },
  "woman_mage_dark_skin_tone": {
    "char": "🧙🏿‍♀️",
    "slug": "woman_mage_tone5",
    "category": "people",
    "isAlternative": true
  },
  "man_mage": { "char": "🧙‍♂️", "slug": "man_mage", "category": "people" },
  "man_mage_tone1": {
    "char": "🧙🏻‍♂️",
    "slug": "man_mage_tone1",
    "category": "people"
  },
  "man_mage_light_skin_tone": {
    "char": "🧙🏻‍♂️",
    "slug": "man_mage_tone1",
    "category": "people",
    "isAlternative": true
  },
  "man_mage_tone2": {
    "char": "🧙🏼‍♂️",
    "slug": "man_mage_tone2",
    "category": "people"
  },
  "man_mage_medium_light_skin_tone": {
    "char": "🧙🏼‍♂️",
    "slug": "man_mage_tone2",
    "category": "people",
    "isAlternative": true
  },
  "man_mage_tone3": {
    "char": "🧙🏽‍♂️",
    "slug": "man_mage_tone3",
    "category": "people"
  },
  "man_mage_medium_skin_tone": {
    "char": "🧙🏽‍♂️",
    "slug": "man_mage_tone3",
    "category": "people",
    "isAlternative": true
  },
  "man_mage_tone4": {
    "char": "🧙🏾‍♂️",
    "slug": "man_mage_tone4",
    "category": "people"
  },
  "man_mage_medium_dark_skin_tone": {
    "char": "🧙🏾‍♂️",
    "slug": "man_mage_tone4",
    "category": "people",
    "isAlternative": true
  },
  "man_mage_tone5": {
    "char": "🧙🏿‍♂️",
    "slug": "man_mage_tone5",
    "category": "people"
  },
  "man_mage_dark_skin_tone": {
    "char": "🧙🏿‍♂️",
    "slug": "man_mage_tone5",
    "category": "people",
    "isAlternative": true
  },
  "elf": { "char": "🧝", "slug": "elf", "category": "people" },
  "elf_tone1": { "char": "🧝🏻", "slug": "elf_tone1", "category": "people" },
  "elf_light_skin_tone": {
    "char": "🧝🏻",
    "slug": "elf_tone1",
    "category": "people",
    "isAlternative": true
  },
  "elf_tone2": { "char": "🧝🏼", "slug": "elf_tone2", "category": "people" },
  "elf_medium_light_skin_tone": {
    "char": "🧝🏼",
    "slug": "elf_tone2",
    "category": "people",
    "isAlternative": true
  },
  "elf_tone3": { "char": "🧝🏽", "slug": "elf_tone3", "category": "people" },
  "elf_medium_skin_tone": {
    "char": "🧝🏽",
    "slug": "elf_tone3",
    "category": "people",
    "isAlternative": true
  },
  "elf_tone4": { "char": "🧝🏾", "slug": "elf_tone4", "category": "people" },
  "elf_medium_dark_skin_tone": {
    "char": "🧝🏾",
    "slug": "elf_tone4",
    "category": "people",
    "isAlternative": true
  },
  "elf_tone5": { "char": "🧝🏿", "slug": "elf_tone5", "category": "people" },
  "elf_dark_skin_tone": {
    "char": "🧝🏿",
    "slug": "elf_tone5",
    "category": "people",
    "isAlternative": true
  },
  "woman_elf": { "char": "🧝‍♀️", "slug": "woman_elf", "category": "people" },
  "woman_elf_tone1": {
    "char": "🧝🏻‍♀️",
    "slug": "woman_elf_tone1",
    "category": "people"
  },
  "woman_elf_light_skin_tone": {
    "char": "🧝🏻‍♀️",
    "slug": "woman_elf_tone1",
    "category": "people",
    "isAlternative": true
  },
  "woman_elf_tone2": {
    "char": "🧝🏼‍♀️",
    "slug": "woman_elf_tone2",
    "category": "people"
  },
  "woman_elf_medium_light_skin_tone": {
    "char": "🧝🏼‍♀️",
    "slug": "woman_elf_tone2",
    "category": "people",
    "isAlternative": true
  },
  "woman_elf_tone3": {
    "char": "🧝🏽‍♀️",
    "slug": "woman_elf_tone3",
    "category": "people"
  },
  "woman_elf_medium_skin_tone": {
    "char": "🧝🏽‍♀️",
    "slug": "woman_elf_tone3",
    "category": "people",
    "isAlternative": true
  },
  "woman_elf_tone4": {
    "char": "🧝🏾‍♀️",
    "slug": "woman_elf_tone4",
    "category": "people"
  },
  "woman_elf_medium_dark_skin_tone": {
    "char": "🧝🏾‍♀️",
    "slug": "woman_elf_tone4",
    "category": "people",
    "isAlternative": true
  },
  "woman_elf_tone5": {
    "char": "🧝🏿‍♀️",
    "slug": "woman_elf_tone5",
    "category": "people"
  },
  "woman_elf_dark_skin_tone": {
    "char": "🧝🏿‍♀️",
    "slug": "woman_elf_tone5",
    "category": "people",
    "isAlternative": true
  },
  "man_elf": { "char": "🧝‍♂️", "slug": "man_elf", "category": "people" },
  "man_elf_tone1": {
    "char": "🧝🏻‍♂️",
    "slug": "man_elf_tone1",
    "category": "people"
  },
  "man_elf_light_skin_tone": {
    "char": "🧝🏻‍♂️",
    "slug": "man_elf_tone1",
    "category": "people",
    "isAlternative": true
  },
  "man_elf_tone2": {
    "char": "🧝🏼‍♂️",
    "slug": "man_elf_tone2",
    "category": "people"
  },
  "man_elf_medium_light_skin_tone": {
    "char": "🧝🏼‍♂️",
    "slug": "man_elf_tone2",
    "category": "people",
    "isAlternative": true
  },
  "man_elf_tone3": {
    "char": "🧝🏽‍♂️",
    "slug": "man_elf_tone3",
    "category": "people"
  },
  "man_elf_medium_skin_tone": {
    "char": "🧝🏽‍♂️",
    "slug": "man_elf_tone3",
    "category": "people",
    "isAlternative": true
  },
  "man_elf_tone4": {
    "char": "🧝🏾‍♂️",
    "slug": "man_elf_tone4",
    "category": "people"
  },
  "man_elf_medium_dark_skin_tone": {
    "char": "🧝🏾‍♂️",
    "slug": "man_elf_tone4",
    "category": "people",
    "isAlternative": true
  },
  "man_elf_tone5": {
    "char": "🧝🏿‍♂️",
    "slug": "man_elf_tone5",
    "category": "people"
  },
  "man_elf_dark_skin_tone": {
    "char": "🧝🏿‍♂️",
    "slug": "man_elf_tone5",
    "category": "people",
    "isAlternative": true
  },
  "troll": { "char": "🧌", "slug": "troll", "category": "people" },
  "vampire": { "char": "🧛", "slug": "vampire", "category": "people" },
  "vampire_tone1": {
    "char": "🧛🏻",
    "slug": "vampire_tone1",
    "category": "people"
  },
  "vampire_light_skin_tone": {
    "char": "🧛🏻",
    "slug": "vampire_tone1",
    "category": "people",
    "isAlternative": true
  },
  "vampire_tone2": {
    "char": "🧛🏼",
    "slug": "vampire_tone2",
    "category": "people"
  },
  "vampire_medium_light_skin_tone": {
    "char": "🧛🏼",
    "slug": "vampire_tone2",
    "category": "people",
    "isAlternative": true
  },
  "vampire_tone3": {
    "char": "🧛🏽",
    "slug": "vampire_tone3",
    "category": "people"
  },
  "vampire_medium_skin_tone": {
    "char": "🧛🏽",
    "slug": "vampire_tone3",
    "category": "people",
    "isAlternative": true
  },
  "vampire_tone4": {
    "char": "🧛🏾",
    "slug": "vampire_tone4",
    "category": "people"
  },
  "vampire_medium_dark_skin_tone": {
    "char": "🧛🏾",
    "slug": "vampire_tone4",
    "category": "people",
    "isAlternative": true
  },
  "vampire_tone5": {
    "char": "🧛🏿",
    "slug": "vampire_tone5",
    "category": "people"
  },
  "vampire_dark_skin_tone": {
    "char": "🧛🏿",
    "slug": "vampire_tone5",
    "category": "people",
    "isAlternative": true
  },
  "woman_vampire": {
    "char": "🧛‍♀️",
    "slug": "woman_vampire",
    "category": "people"
  },
  "woman_vampire_tone1": {
    "char": "🧛🏻‍♀️",
    "slug": "woman_vampire_tone1",
    "category": "people"
  },
  "woman_vampire_light_skin_tone": {
    "char": "🧛🏻‍♀️",
    "slug": "woman_vampire_tone1",
    "category": "people",
    "isAlternative": true
  },
  "woman_vampire_tone2": {
    "char": "🧛🏼‍♀️",
    "slug": "woman_vampire_tone2",
    "category": "people"
  },
  "woman_vampire_medium_light_skin_tone": {
    "char": "🧛🏼‍♀️",
    "slug": "woman_vampire_tone2",
    "category": "people",
    "isAlternative": true
  },
  "woman_vampire_tone3": {
    "char": "🧛🏽‍♀️",
    "slug": "woman_vampire_tone3",
    "category": "people"
  },
  "woman_vampire_medium_skin_tone": {
    "char": "🧛🏽‍♀️",
    "slug": "woman_vampire_tone3",
    "category": "people",
    "isAlternative": true
  },
  "woman_vampire_tone4": {
    "char": "🧛🏾‍♀️",
    "slug": "woman_vampire_tone4",
    "category": "people"
  },
  "woman_vampire_medium_dark_skin_tone": {
    "char": "🧛🏾‍♀️",
    "slug": "woman_vampire_tone4",
    "category": "people",
    "isAlternative": true
  },
  "woman_vampire_tone5": {
    "char": "🧛🏿‍♀️",
    "slug": "woman_vampire_tone5",
    "category": "people"
  },
  "woman_vampire_dark_skin_tone": {
    "char": "🧛🏿‍♀️",
    "slug": "woman_vampire_tone5",
    "category": "people",
    "isAlternative": true
  },
  "man_vampire": { "char": "🧛‍♂️", "slug": "man_vampire", "category": "people" },
  "man_vampire_tone1": {
    "char": "🧛🏻‍♂️",
    "slug": "man_vampire_tone1",
    "category": "people"
  },
  "man_vampire_light_skin_tone": {
    "char": "🧛🏻‍♂️",
    "slug": "man_vampire_tone1",
    "category": "people",
    "isAlternative": true
  },
  "man_vampire_tone2": {
    "char": "🧛🏼‍♂️",
    "slug": "man_vampire_tone2",
    "category": "people"
  },
  "man_vampire_medium_light_skin_tone": {
    "char": "🧛🏼‍♂️",
    "slug": "man_vampire_tone2",
    "category": "people",
    "isAlternative": true
  },
  "man_vampire_tone3": {
    "char": "🧛🏽‍♂️",
    "slug": "man_vampire_tone3",
    "category": "people"
  },
  "man_vampire_medium_skin_tone": {
    "char": "🧛🏽‍♂️",
    "slug": "man_vampire_tone3",
    "category": "people",
    "isAlternative": true
  },
  "man_vampire_tone4": {
    "char": "🧛🏾‍♂️",
    "slug": "man_vampire_tone4",
    "category": "people"
  },
  "man_vampire_medium_dark_skin_tone": {
    "char": "🧛🏾‍♂️",
    "slug": "man_vampire_tone4",
    "category": "people",
    "isAlternative": true
  },
  "man_vampire_tone5": {
    "char": "🧛🏿‍♂️",
    "slug": "man_vampire_tone5",
    "category": "people"
  },
  "man_vampire_dark_skin_tone": {
    "char": "🧛🏿‍♂️",
    "slug": "man_vampire_tone5",
    "category": "people",
    "isAlternative": true
  },
  "zombie": { "char": "🧟", "slug": "zombie", "category": "people" },
  "woman_zombie": {
    "char": "🧟‍♀️",
    "slug": "woman_zombie",
    "category": "people"
  },
  "man_zombie": { "char": "🧟‍♂️", "slug": "man_zombie", "category": "people" },
  "genie": { "char": "🧞", "slug": "genie", "category": "people" },
  "woman_genie": { "char": "🧞‍♀️", "slug": "woman_genie", "category": "people" },
  "man_genie": { "char": "🧞‍♂️", "slug": "man_genie", "category": "people" },
  "merperson": { "char": "🧜", "slug": "merperson", "category": "people" },
  "merperson_tone1": {
    "char": "🧜🏻",
    "slug": "merperson_tone1",
    "category": "people"
  },
  "merperson_light_skin_tone": {
    "char": "🧜🏻",
    "slug": "merperson_tone1",
    "category": "people",
    "isAlternative": true
  },
  "merperson_tone2": {
    "char": "🧜🏼",
    "slug": "merperson_tone2",
    "category": "people"
  },
  "merperson_medium_light_skin_tone": {
    "char": "🧜🏼",
    "slug": "merperson_tone2",
    "category": "people",
    "isAlternative": true
  },
  "merperson_tone3": {
    "char": "🧜🏽",
    "slug": "merperson_tone3",
    "category": "people"
  },
  "merperson_medium_skin_tone": {
    "char": "🧜🏽",
    "slug": "merperson_tone3",
    "category": "people",
    "isAlternative": true
  },
  "merperson_tone4": {
    "char": "🧜🏾",
    "slug": "merperson_tone4",
    "category": "people"
  },
  "merperson_medium_dark_skin_tone": {
    "char": "🧜🏾",
    "slug": "merperson_tone4",
    "category": "people",
    "isAlternative": true
  },
  "merperson_tone5": {
    "char": "🧜🏿",
    "slug": "merperson_tone5",
    "category": "people"
  },
  "merperson_dark_skin_tone": {
    "char": "🧜🏿",
    "slug": "merperson_tone5",
    "category": "people",
    "isAlternative": true
  },
  "mermaid": { "char": "🧜‍♀️", "slug": "mermaid", "category": "people" },
  "mermaid_tone1": {
    "char": "🧜🏻‍♀️",
    "slug": "mermaid_tone1",
    "category": "people"
  },
  "mermaid_light_skin_tone": {
    "char": "🧜🏻‍♀️",
    "slug": "mermaid_tone1",
    "category": "people",
    "isAlternative": true
  },
  "mermaid_tone2": {
    "char": "🧜🏼‍♀️",
    "slug": "mermaid_tone2",
    "category": "people"
  },
  "mermaid_medium_light_skin_tone": {
    "char": "🧜🏼‍♀️",
    "slug": "mermaid_tone2",
    "category": "people",
    "isAlternative": true
  },
  "mermaid_tone3": {
    "char": "🧜🏽‍♀️",
    "slug": "mermaid_tone3",
    "category": "people"
  },
  "mermaid_medium_skin_tone": {
    "char": "🧜🏽‍♀️",
    "slug": "mermaid_tone3",
    "category": "people",
    "isAlternative": true
  },
  "mermaid_tone4": {
    "char": "🧜🏾‍♀️",
    "slug": "mermaid_tone4",
    "category": "people"
  },
  "mermaid_medium_dark_skin_tone": {
    "char": "🧜🏾‍♀️",
    "slug": "mermaid_tone4",
    "category": "people",
    "isAlternative": true
  },
  "mermaid_tone5": {
    "char": "🧜🏿‍♀️",
    "slug": "mermaid_tone5",
    "category": "people"
  },
  "mermaid_dark_skin_tone": {
    "char": "🧜🏿‍♀️",
    "slug": "mermaid_tone5",
    "category": "people",
    "isAlternative": true
  },
  "merman": { "char": "🧜‍♂️", "slug": "merman", "category": "people" },
  "merman_tone1": {
    "char": "🧜🏻‍♂️",
    "slug": "merman_tone1",
    "category": "people"
  },
  "merman_light_skin_tone": {
    "char": "🧜🏻‍♂️",
    "slug": "merman_tone1",
    "category": "people",
    "isAlternative": true
  },
  "merman_tone2": {
    "char": "🧜🏼‍♂️",
    "slug": "merman_tone2",
    "category": "people"
  },
  "merman_medium_light_skin_tone": {
    "char": "🧜🏼‍♂️",
    "slug": "merman_tone2",
    "category": "people",
    "isAlternative": true
  },
  "merman_tone3": {
    "char": "🧜🏽‍♂️",
    "slug": "merman_tone3",
    "category": "people"
  },
  "merman_medium_skin_tone": {
    "char": "🧜🏽‍♂️",
    "slug": "merman_tone3",
    "category": "people",
    "isAlternative": true
  },
  "merman_tone4": {
    "char": "🧜🏾‍♂️",
    "slug": "merman_tone4",
    "category": "people"
  },
  "merman_medium_dark_skin_tone": {
    "char": "🧜🏾‍♂️",
    "slug": "merman_tone4",
    "category": "people",
    "isAlternative": true
  },
  "merman_tone5": {
    "char": "🧜🏿‍♂️",
    "slug": "merman_tone5",
    "category": "people"
  },
  "merman_dark_skin_tone": {
    "char": "🧜🏿‍♂️",
    "slug": "merman_tone5",
    "category": "people",
    "isAlternative": true
  },
  "fairy": { "char": "🧚", "slug": "fairy", "category": "people" },
  "fairy_tone1": { "char": "🧚🏻", "slug": "fairy_tone1", "category": "people" },
  "fairy_light_skin_tone": {
    "char": "🧚🏻",
    "slug": "fairy_tone1",
    "category": "people",
    "isAlternative": true
  },
  "fairy_tone2": { "char": "🧚🏼", "slug": "fairy_tone2", "category": "people" },
  "fairy_medium_light_skin_tone": {
    "char": "🧚🏼",
    "slug": "fairy_tone2",
    "category": "people",
    "isAlternative": true
  },
  "fairy_tone3": { "char": "🧚🏽", "slug": "fairy_tone3", "category": "people" },
  "fairy_medium_skin_tone": {
    "char": "🧚🏽",
    "slug": "fairy_tone3",
    "category": "people",
    "isAlternative": true
  },
  "fairy_tone4": { "char": "🧚🏾", "slug": "fairy_tone4", "category": "people" },
  "fairy_medium_dark_skin_tone": {
    "char": "🧚🏾",
    "slug": "fairy_tone4",
    "category": "people",
    "isAlternative": true
  },
  "fairy_tone5": { "char": "🧚🏿", "slug": "fairy_tone5", "category": "people" },
  "fairy_dark_skin_tone": {
    "char": "🧚🏿",
    "slug": "fairy_tone5",
    "category": "people",
    "isAlternative": true
  },
  "woman_fairy": { "char": "🧚‍♀️", "slug": "woman_fairy", "category": "people" },
  "woman_fairy_tone1": {
    "char": "🧚🏻‍♀️",
    "slug": "woman_fairy_tone1",
    "category": "people"
  },
  "woman_fairy_light_skin_tone": {
    "char": "🧚🏻‍♀️",
    "slug": "woman_fairy_tone1",
    "category": "people",
    "isAlternative": true
  },
  "woman_fairy_tone2": {
    "char": "🧚🏼‍♀️",
    "slug": "woman_fairy_tone2",
    "category": "people"
  },
  "woman_fairy_medium_light_skin_tone": {
    "char": "🧚🏼‍♀️",
    "slug": "woman_fairy_tone2",
    "category": "people",
    "isAlternative": true
  },
  "woman_fairy_tone3": {
    "char": "🧚🏽‍♀️",
    "slug": "woman_fairy_tone3",
    "category": "people"
  },
  "woman_fairy_medium_skin_tone": {
    "char": "🧚🏽‍♀️",
    "slug": "woman_fairy_tone3",
    "category": "people",
    "isAlternative": true
  },
  "woman_fairy_tone4": {
    "char": "🧚🏾‍♀️",
    "slug": "woman_fairy_tone4",
    "category": "people"
  },
  "woman_fairy_medium_dark_skin_tone": {
    "char": "🧚🏾‍♀️",
    "slug": "woman_fairy_tone4",
    "category": "people",
    "isAlternative": true
  },
  "woman_fairy_tone5": {
    "char": "🧚🏿‍♀️",
    "slug": "woman_fairy_tone5",
    "category": "people"
  },
  "woman_fairy_dark_skin_tone": {
    "char": "🧚🏿‍♀️",
    "slug": "woman_fairy_tone5",
    "category": "people",
    "isAlternative": true
  },
  "man_fairy": { "char": "🧚‍♂️", "slug": "man_fairy", "category": "people" },
  "man_fairy_tone1": {
    "char": "🧚🏻‍♂️",
    "slug": "man_fairy_tone1",
    "category": "people"
  },
  "man_fairy_light_skin_tone": {
    "char": "🧚🏻‍♂️",
    "slug": "man_fairy_tone1",
    "category": "people",
    "isAlternative": true
  },
  "man_fairy_tone2": {
    "char": "🧚🏼‍♂️",
    "slug": "man_fairy_tone2",
    "category": "people"
  },
  "man_fairy_medium_light_skin_tone": {
    "char": "🧚🏼‍♂️",
    "slug": "man_fairy_tone2",
    "category": "people",
    "isAlternative": true
  },
  "man_fairy_tone3": {
    "char": "🧚🏽‍♂️",
    "slug": "man_fairy_tone3",
    "category": "people"
  },
  "man_fairy_medium_skin_tone": {
    "char": "🧚🏽‍♂️",
    "slug": "man_fairy_tone3",
    "category": "people",
    "isAlternative": true
  },
  "man_fairy_tone4": {
    "char": "🧚🏾‍♂️",
    "slug": "man_fairy_tone4",
    "category": "people"
  },
  "man_fairy_medium_dark_skin_tone": {
    "char": "🧚🏾‍♂️",
    "slug": "man_fairy_tone4",
    "category": "people",
    "isAlternative": true
  },
  "man_fairy_tone5": {
    "char": "🧚🏿‍♂️",
    "slug": "man_fairy_tone5",
    "category": "people"
  },
  "man_fairy_dark_skin_tone": {
    "char": "🧚🏿‍♂️",
    "slug": "man_fairy_tone5",
    "category": "people",
    "isAlternative": true
  },
  "angel": { "char": "👼", "slug": "angel", "category": "people" },
  "baby_angel": {
    "char": "👼",
    "slug": "angel",
    "category": "people",
    "isAlternative": true
  },
  "angel_tone1": { "char": "👼🏻", "slug": "angel_tone1", "category": "people" },
  "angel_tone2": { "char": "👼🏼", "slug": "angel_tone2", "category": "people" },
  "angel_tone3": { "char": "👼🏽", "slug": "angel_tone3", "category": "people" },
  "angel_tone4": { "char": "👼🏾", "slug": "angel_tone4", "category": "people" },
  "angel_tone5": { "char": "👼🏿", "slug": "angel_tone5", "category": "people" },
  "pregnant_person": {
    "char": "🫄",
    "slug": "pregnant_person",
    "category": "people"
  },
  "pregnant_person_tone1": {
    "char": "🫄🏻",
    "slug": "pregnant_person_tone1",
    "category": "people"
  },
  "pregnant_person_light_skin_tone": {
    "char": "🫄🏻",
    "slug": "pregnant_person_tone1",
    "category": "people",
    "isAlternative": true
  },
  "pregnant_person_tone2": {
    "char": "🫄🏼",
    "slug": "pregnant_person_tone2",
    "category": "people"
  },
  "pregnant_person_medium_light_skin_tone": {
    "char": "🫄🏼",
    "slug": "pregnant_person_tone2",
    "category": "people",
    "isAlternative": true
  },
  "pregnant_person_tone3": {
    "char": "🫄🏽",
    "slug": "pregnant_person_tone3",
    "category": "people"
  },
  "pregnant_person_medium_skin_tone": {
    "char": "🫄🏽",
    "slug": "pregnant_person_tone3",
    "category": "people",
    "isAlternative": true
  },
  "pregnant_person_tone4": {
    "char": "🫄🏾",
    "slug": "pregnant_person_tone4",
    "category": "people"
  },
  "pregnant_person_medium_dark_skin_tone": {
    "char": "🫄🏾",
    "slug": "pregnant_person_tone4",
    "category": "people",
    "isAlternative": true
  },
  "pregnant_person_tone5": {
    "char": "🫄🏿",
    "slug": "pregnant_person_tone5",
    "category": "people"
  },
  "pregnant_person_dark_skin_tone": {
    "char": "🫄🏿",
    "slug": "pregnant_person_tone5",
    "category": "people",
    "isAlternative": true
  },
  "pregnant_woman": {
    "char": "🤰",
    "slug": "pregnant_woman",
    "category": "people"
  },
  "expecting_woman": {
    "char": "🤰",
    "slug": "pregnant_woman",
    "category": "people",
    "isAlternative": true
  },
  "pregnant_woman_tone1": {
    "char": "🤰🏻",
    "slug": "pregnant_woman_tone1",
    "category": "people"
  },
  "expecting_woman_tone1": {
    "char": "🤰🏻",
    "slug": "pregnant_woman_tone1",
    "category": "people",
    "isAlternative": true
  },
  "pregnant_woman_tone2": {
    "char": "🤰🏼",
    "slug": "pregnant_woman_tone2",
    "category": "people"
  },
  "expecting_woman_tone2": {
    "char": "🤰🏼",
    "slug": "pregnant_woman_tone2",
    "category": "people",
    "isAlternative": true
  },
  "pregnant_woman_tone3": {
    "char": "🤰🏽",
    "slug": "pregnant_woman_tone3",
    "category": "people"
  },
  "expecting_woman_tone3": {
    "char": "🤰🏽",
    "slug": "pregnant_woman_tone3",
    "category": "people",
    "isAlternative": true
  },
  "pregnant_woman_tone4": {
    "char": "🤰🏾",
    "slug": "pregnant_woman_tone4",
    "category": "people"
  },
  "expecting_woman_tone4": {
    "char": "🤰🏾",
    "slug": "pregnant_woman_tone4",
    "category": "people",
    "isAlternative": true
  },
  "pregnant_woman_tone5": {
    "char": "🤰🏿",
    "slug": "pregnant_woman_tone5",
    "category": "people"
  },
  "expecting_woman_tone5": {
    "char": "🤰🏿",
    "slug": "pregnant_woman_tone5",
    "category": "people",
    "isAlternative": true
  },
  "pregnant_man": { "char": "🫃", "slug": "pregnant_man", "category": "people" },
  "pregnant_man_tone1": {
    "char": "🫃🏻",
    "slug": "pregnant_man_tone1",
    "category": "people"
  },
  "pregnant_man_light_skin_tone": {
    "char": "🫃🏻",
    "slug": "pregnant_man_tone1",
    "category": "people",
    "isAlternative": true
  },
  "pregnant_man_tone2": {
    "char": "🫃🏼",
    "slug": "pregnant_man_tone2",
    "category": "people"
  },
  "pregnant_man_medium_light_skin_tone": {
    "char": "🫃🏼",
    "slug": "pregnant_man_tone2",
    "category": "people",
    "isAlternative": true
  },
  "pregnant_man_tone3": {
    "char": "🫃🏽",
    "slug": "pregnant_man_tone3",
    "category": "people"
  },
  "pregnant_man_medium_skin_tone": {
    "char": "🫃🏽",
    "slug": "pregnant_man_tone3",
    "category": "people",
    "isAlternative": true
  },
  "pregnant_man_tone4": {
    "char": "🫃🏾",
    "slug": "pregnant_man_tone4",
    "category": "people"
  },
  "pregnant_man_medium_dark_skin_tone": {
    "char": "🫃🏾",
    "slug": "pregnant_man_tone4",
    "category": "people",
    "isAlternative": true
  },
  "pregnant_man_tone5": {
    "char": "🫃🏿",
    "slug": "pregnant_man_tone5",
    "category": "people"
  },
  "pregnant_man_dark_skin_tone": {
    "char": "🫃🏿",
    "slug": "pregnant_man_tone5",
    "category": "people",
    "isAlternative": true
  },
  "breast_feeding": {
    "char": "🤱",
    "slug": "breast_feeding",
    "category": "people"
  },
  "breast_feeding_tone1": {
    "char": "🤱🏻",
    "slug": "breast_feeding_tone1",
    "category": "people"
  },
  "breast_feeding_light_skin_tone": {
    "char": "🤱🏻",
    "slug": "breast_feeding_tone1",
    "category": "people",
    "isAlternative": true
  },
  "breast_feeding_tone2": {
    "char": "🤱🏼",
    "slug": "breast_feeding_tone2",
    "category": "people"
  },
  "breast_feeding_medium_light_skin_tone": {
    "char": "🤱🏼",
    "slug": "breast_feeding_tone2",
    "category": "people",
    "isAlternative": true
  },
  "breast_feeding_tone3": {
    "char": "🤱🏽",
    "slug": "breast_feeding_tone3",
    "category": "people"
  },
  "breast_feeding_medium_skin_tone": {
    "char": "🤱🏽",
    "slug": "breast_feeding_tone3",
    "category": "people",
    "isAlternative": true
  },
  "breast_feeding_tone4": {
    "char": "🤱🏾",
    "slug": "breast_feeding_tone4",
    "category": "people"
  },
  "breast_feeding_medium_dark_skin_tone": {
    "char": "🤱🏾",
    "slug": "breast_feeding_tone4",
    "category": "people",
    "isAlternative": true
  },
  "breast_feeding_tone5": {
    "char": "🤱🏿",
    "slug": "breast_feeding_tone5",
    "category": "people"
  },
  "breast_feeding_dark_skin_tone": {
    "char": "🤱🏿",
    "slug": "breast_feeding_tone5",
    "category": "people",
    "isAlternative": true
  },
  "person_feeding_baby": {
    "char": "🧑‍🍼",
    "slug": "person_feeding_baby",
    "category": "people"
  },
  "person_feeding_baby_tone1": {
    "char": "🧑🏻‍🍼",
    "slug": "person_feeding_baby_tone1",
    "category": "people"
  },
  "person_feeding_baby_light_skin_tone": {
    "char": "🧑🏻‍🍼",
    "slug": "person_feeding_baby_tone1",
    "category": "people",
    "isAlternative": true
  },
  "person_feeding_baby_tone2": {
    "char": "🧑🏼‍🍼",
    "slug": "person_feeding_baby_tone2",
    "category": "people"
  },
  "person_feeding_baby_medium_light_skin_tone": {
    "char": "🧑🏼‍🍼",
    "slug": "person_feeding_baby_tone2",
    "category": "people",
    "isAlternative": true
  },
  "person_feeding_baby_tone3": {
    "char": "🧑🏽‍🍼",
    "slug": "person_feeding_baby_tone3",
    "category": "people"
  },
  "person_feeding_baby_medium_skin_tone": {
    "char": "🧑🏽‍🍼",
    "slug": "person_feeding_baby_tone3",
    "category": "people",
    "isAlternative": true
  },
  "person_feeding_baby_tone4": {
    "char": "🧑🏾‍🍼",
    "slug": "person_feeding_baby_tone4",
    "category": "people"
  },
  "person_feeding_baby_medium_dark_skin_tone": {
    "char": "🧑🏾‍🍼",
    "slug": "person_feeding_baby_tone4",
    "category": "people",
    "isAlternative": true
  },
  "person_feeding_baby_tone5": {
    "char": "🧑🏿‍🍼",
    "slug": "person_feeding_baby_tone5",
    "category": "people"
  },
  "person_feeding_baby_dark_skin_tone": {
    "char": "🧑🏿‍🍼",
    "slug": "person_feeding_baby_tone5",
    "category": "people",
    "isAlternative": true
  },
  "woman_feeding_baby": {
    "char": "👩‍🍼",
    "slug": "woman_feeding_baby",
    "category": "people"
  },
  "woman_feeding_baby_tone1": {
    "char": "👩🏻‍🍼",
    "slug": "woman_feeding_baby_tone1",
    "category": "people"
  },
  "woman_feeding_baby_light_skin_tone": {
    "char": "👩🏻‍🍼",
    "slug": "woman_feeding_baby_tone1",
    "category": "people",
    "isAlternative": true
  },
  "woman_feeding_baby_tone2": {
    "char": "👩🏼‍🍼",
    "slug": "woman_feeding_baby_tone2",
    "category": "people"
  },
  "woman_feeding_baby_medium_light_skin_tone": {
    "char": "👩🏼‍🍼",
    "slug": "woman_feeding_baby_tone2",
    "category": "people",
    "isAlternative": true
  },
  "woman_feeding_baby_tone3": {
    "char": "👩🏽‍🍼",
    "slug": "woman_feeding_baby_tone3",
    "category": "people"
  },
  "woman_feeding_baby_medium_skin_tone": {
    "char": "👩🏽‍🍼",
    "slug": "woman_feeding_baby_tone3",
    "category": "people",
    "isAlternative": true
  },
  "woman_feeding_baby_tone4": {
    "char": "👩🏾‍🍼",
    "slug": "woman_feeding_baby_tone4",
    "category": "people"
  },
  "woman_feeding_baby_medium_dark_skin_tone": {
    "char": "👩🏾‍🍼",
    "slug": "woman_feeding_baby_tone4",
    "category": "people",
    "isAlternative": true
  },
  "woman_feeding_baby_tone5": {
    "char": "👩🏿‍🍼",
    "slug": "woman_feeding_baby_tone5",
    "category": "people"
  },
  "woman_feeding_baby_dark_skin_tone": {
    "char": "👩🏿‍🍼",
    "slug": "woman_feeding_baby_tone5",
    "category": "people",
    "isAlternative": true
  },
  "man_feeding_baby": {
    "char": "👨‍🍼",
    "slug": "man_feeding_baby",
    "category": "people"
  },
  "man_feeding_baby_tone1": {
    "char": "👨🏻‍🍼",
    "slug": "man_feeding_baby_tone1",
    "category": "people"
  },
  "man_feeding_baby_light_skin_tone": {
    "char": "👨🏻‍🍼",
    "slug": "man_feeding_baby_tone1",
    "category": "people",
    "isAlternative": true
  },
  "man_feeding_baby_tone2": {
    "char": "👨🏼‍🍼",
    "slug": "man_feeding_baby_tone2",
    "category": "people"
  },
  "man_feeding_baby_medium_light_skin_tone": {
    "char": "👨🏼‍🍼",
    "slug": "man_feeding_baby_tone2",
    "category": "people",
    "isAlternative": true
  },
  "man_feeding_baby_tone3": {
    "char": "👨🏽‍🍼",
    "slug": "man_feeding_baby_tone3",
    "category": "people"
  },
  "man_feeding_baby_medium_skin_tone": {
    "char": "👨🏽‍🍼",
    "slug": "man_feeding_baby_tone3",
    "category": "people",
    "isAlternative": true
  },
  "man_feeding_baby_tone4": {
    "char": "👨🏾‍🍼",
    "slug": "man_feeding_baby_tone4",
    "category": "people"
  },
  "man_feeding_baby_medium_dark_skin_tone": {
    "char": "👨🏾‍🍼",
    "slug": "man_feeding_baby_tone4",
    "category": "people",
    "isAlternative": true
  },
  "man_feeding_baby_tone5": {
    "char": "👨🏿‍🍼",
    "slug": "man_feeding_baby_tone5",
    "category": "people"
  },
  "man_feeding_baby_dark_skin_tone": {
    "char": "👨🏿‍🍼",
    "slug": "man_feeding_baby_tone5",
    "category": "people",
    "isAlternative": true
  },
  "person_bowing": {
    "char": "🙇",
    "slug": "person_bowing",
    "category": "people"
  },
  "bow": {
    "char": "🙇",
    "slug": "person_bowing",
    "category": "people",
    "isAlternative": true
  },
  "person_bowing_tone1": {
    "char": "🙇🏻",
    "slug": "person_bowing_tone1",
    "category": "people"
  },
  "bow_tone1": {
    "char": "🙇🏻",
    "slug": "person_bowing_tone1",
    "category": "people",
    "isAlternative": true
  },
  "person_bowing_tone2": {
    "char": "🙇🏼",
    "slug": "person_bowing_tone2",
    "category": "people"
  },
  "bow_tone2": {
    "char": "🙇🏼",
    "slug": "person_bowing_tone2",
    "category": "people",
    "isAlternative": true
  },
  "person_bowing_tone3": {
    "char": "🙇🏽",
    "slug": "person_bowing_tone3",
    "category": "people"
  },
  "bow_tone3": {
    "char": "🙇🏽",
    "slug": "person_bowing_tone3",
    "category": "people",
    "isAlternative": true
  },
  "person_bowing_tone4": {
    "char": "🙇🏾",
    "slug": "person_bowing_tone4",
    "category": "people"
  },
  "bow_tone4": {
    "char": "🙇🏾",
    "slug": "person_bowing_tone4",
    "category": "people",
    "isAlternative": true
  },
  "person_bowing_tone5": {
    "char": "🙇🏿",
    "slug": "person_bowing_tone5",
    "category": "people"
  },
  "bow_tone5": {
    "char": "🙇🏿",
    "slug": "person_bowing_tone5",
    "category": "people",
    "isAlternative": true
  },
  "woman_bowing": {
    "char": "🙇‍♀️",
    "slug": "woman_bowing",
    "category": "people"
  },
  "woman_bowing_tone1": {
    "char": "🙇🏻‍♀️",
    "slug": "woman_bowing_tone1",
    "category": "people"
  },
  "woman_bowing_light_skin_tone": {
    "char": "🙇🏻‍♀️",
    "slug": "woman_bowing_tone1",
    "category": "people",
    "isAlternative": true
  },
  "woman_bowing_tone2": {
    "char": "🙇🏼‍♀️",
    "slug": "woman_bowing_tone2",
    "category": "people"
  },
  "woman_bowing_medium_light_skin_tone": {
    "char": "🙇🏼‍♀️",
    "slug": "woman_bowing_tone2",
    "category": "people",
    "isAlternative": true
  },
  "woman_bowing_tone3": {
    "char": "🙇🏽‍♀️",
    "slug": "woman_bowing_tone3",
    "category": "people"
  },
  "woman_bowing_medium_skin_tone": {
    "char": "🙇🏽‍♀️",
    "slug": "woman_bowing_tone3",
    "category": "people",
    "isAlternative": true
  },
  "woman_bowing_tone4": {
    "char": "🙇🏾‍♀️",
    "slug": "woman_bowing_tone4",
    "category": "people"
  },
  "woman_bowing_medium_dark_skin_tone": {
    "char": "🙇🏾‍♀️",
    "slug": "woman_bowing_tone4",
    "category": "people",
    "isAlternative": true
  },
  "woman_bowing_tone5": {
    "char": "🙇🏿‍♀️",
    "slug": "woman_bowing_tone5",
    "category": "people"
  },
  "woman_bowing_dark_skin_tone": {
    "char": "🙇🏿‍♀️",
    "slug": "woman_bowing_tone5",
    "category": "people",
    "isAlternative": true
  },
  "man_bowing": { "char": "🙇‍♂️", "slug": "man_bowing", "category": "people" },
  "man_bowing_tone1": {
    "char": "🙇🏻‍♂️",
    "slug": "man_bowing_tone1",
    "category": "people"
  },
  "man_bowing_light_skin_tone": {
    "char": "🙇🏻‍♂️",
    "slug": "man_bowing_tone1",
    "category": "people",
    "isAlternative": true
  },
  "man_bowing_tone2": {
    "char": "🙇🏼‍♂️",
    "slug": "man_bowing_tone2",
    "category": "people"
  },
  "man_bowing_medium_light_skin_tone": {
    "char": "🙇🏼‍♂️",
    "slug": "man_bowing_tone2",
    "category": "people",
    "isAlternative": true
  },
  "man_bowing_tone3": {
    "char": "🙇🏽‍♂️",
    "slug": "man_bowing_tone3",
    "category": "people"
  },
  "man_bowing_medium_skin_tone": {
    "char": "🙇🏽‍♂️",
    "slug": "man_bowing_tone3",
    "category": "people",
    "isAlternative": true
  },
  "man_bowing_tone4": {
    "char": "🙇🏾‍♂️",
    "slug": "man_bowing_tone4",
    "category": "people"
  },
  "man_bowing_medium_dark_skin_tone": {
    "char": "🙇🏾‍♂️",
    "slug": "man_bowing_tone4",
    "category": "people",
    "isAlternative": true
  },
  "man_bowing_tone5": {
    "char": "🙇🏿‍♂️",
    "slug": "man_bowing_tone5",
    "category": "people"
  },
  "man_bowing_dark_skin_tone": {
    "char": "🙇🏿‍♂️",
    "slug": "man_bowing_tone5",
    "category": "people",
    "isAlternative": true
  },
  "person_tipping_hand": {
    "char": "💁",
    "slug": "person_tipping_hand",
    "category": "people"
  },
  "information_desk_person": {
    "char": "💁",
    "slug": "person_tipping_hand",
    "category": "people",
    "isAlternative": true
  },
  "person_tipping_hand_tone1": {
    "char": "💁🏻",
    "slug": "person_tipping_hand_tone1",
    "category": "people"
  },
  "information_desk_person_tone1": {
    "char": "💁🏻",
    "slug": "person_tipping_hand_tone1",
    "category": "people",
    "isAlternative": true
  },
  "person_tipping_hand_tone2": {
    "char": "💁🏼",
    "slug": "person_tipping_hand_tone2",
    "category": "people"
  },
  "information_desk_person_tone2": {
    "char": "💁🏼",
    "slug": "person_tipping_hand_tone2",
    "category": "people",
    "isAlternative": true
  },
  "person_tipping_hand_tone3": {
    "char": "💁🏽",
    "slug": "person_tipping_hand_tone3",
    "category": "people"
  },
  "information_desk_person_tone3": {
    "char": "💁🏽",
    "slug": "person_tipping_hand_tone3",
    "category": "people",
    "isAlternative": true
  },
  "person_tipping_hand_tone4": {
    "char": "💁🏾",
    "slug": "person_tipping_hand_tone4",
    "category": "people"
  },
  "information_desk_person_tone4": {
    "char": "💁🏾",
    "slug": "person_tipping_hand_tone4",
    "category": "people",
    "isAlternative": true
  },
  "person_tipping_hand_tone5": {
    "char": "💁🏿",
    "slug": "person_tipping_hand_tone5",
    "category": "people"
  },
  "information_desk_person_tone5": {
    "char": "💁🏿",
    "slug": "person_tipping_hand_tone5",
    "category": "people",
    "isAlternative": true
  },
  "woman_tipping_hand": {
    "char": "💁‍♀️",
    "slug": "woman_tipping_hand",
    "category": "people"
  },
  "woman_tipping_hand_tone1": {
    "char": "💁🏻‍♀️",
    "slug": "woman_tipping_hand_tone1",
    "category": "people"
  },
  "woman_tipping_hand_light_skin_tone": {
    "char": "💁🏻‍♀️",
    "slug": "woman_tipping_hand_tone1",
    "category": "people",
    "isAlternative": true
  },
  "woman_tipping_hand_tone2": {
    "char": "💁🏼‍♀️",
    "slug": "woman_tipping_hand_tone2",
    "category": "people"
  },
  "woman_tipping_hand_medium_light_skin_tone": {
    "char": "💁🏼‍♀️",
    "slug": "woman_tipping_hand_tone2",
    "category": "people",
    "isAlternative": true
  },
  "woman_tipping_hand_tone3": {
    "char": "💁🏽‍♀️",
    "slug": "woman_tipping_hand_tone3",
    "category": "people"
  },
  "woman_tipping_hand_medium_skin_tone": {
    "char": "💁🏽‍♀️",
    "slug": "woman_tipping_hand_tone3",
    "category": "people",
    "isAlternative": true
  },
  "woman_tipping_hand_tone4": {
    "char": "💁🏾‍♀️",
    "slug": "woman_tipping_hand_tone4",
    "category": "people"
  },
  "woman_tipping_hand_medium_dark_skin_tone": {
    "char": "💁🏾‍♀️",
    "slug": "woman_tipping_hand_tone4",
    "category": "people",
    "isAlternative": true
  },
  "woman_tipping_hand_tone5": {
    "char": "💁🏿‍♀️",
    "slug": "woman_tipping_hand_tone5",
    "category": "people"
  },
  "woman_tipping_hand_dark_skin_tone": {
    "char": "💁🏿‍♀️",
    "slug": "woman_tipping_hand_tone5",
    "category": "people",
    "isAlternative": true
  },
  "man_tipping_hand": {
    "char": "💁‍♂️",
    "slug": "man_tipping_hand",
    "category": "people"
  },
  "man_tipping_hand_tone1": {
    "char": "💁🏻‍♂️",
    "slug": "man_tipping_hand_tone1",
    "category": "people"
  },
  "man_tipping_hand_light_skin_tone": {
    "char": "💁🏻‍♂️",
    "slug": "man_tipping_hand_tone1",
    "category": "people",
    "isAlternative": true
  },
  "man_tipping_hand_tone2": {
    "char": "💁🏼‍♂️",
    "slug": "man_tipping_hand_tone2",
    "category": "people"
  },
  "man_tipping_hand_medium_light_skin_tone": {
    "char": "💁🏼‍♂️",
    "slug": "man_tipping_hand_tone2",
    "category": "people",
    "isAlternative": true
  },
  "man_tipping_hand_tone3": {
    "char": "💁🏽‍♂️",
    "slug": "man_tipping_hand_tone3",
    "category": "people"
  },
  "man_tipping_hand_medium_skin_tone": {
    "char": "💁🏽‍♂️",
    "slug": "man_tipping_hand_tone3",
    "category": "people",
    "isAlternative": true
  },
  "man_tipping_hand_tone4": {
    "char": "💁🏾‍♂️",
    "slug": "man_tipping_hand_tone4",
    "category": "people"
  },
  "man_tipping_hand_medium_dark_skin_tone": {
    "char": "💁🏾‍♂️",
    "slug": "man_tipping_hand_tone4",
    "category": "people",
    "isAlternative": true
  },
  "man_tipping_hand_tone5": {
    "char": "💁🏿‍♂️",
    "slug": "man_tipping_hand_tone5",
    "category": "people"
  },
  "man_tipping_hand_dark_skin_tone": {
    "char": "💁🏿‍♂️",
    "slug": "man_tipping_hand_tone5",
    "category": "people",
    "isAlternative": true
  },
  "person_gesturing_no": {
    "char": "🙅",
    "slug": "person_gesturing_no",
    "category": "people"
  },
  "no_good": {
    "char": "🙅",
    "slug": "person_gesturing_no",
    "category": "people",
    "isAlternative": true
  },
  "person_gesturing_no_tone1": {
    "char": "🙅🏻",
    "slug": "person_gesturing_no_tone1",
    "category": "people"
  },
  "no_good_tone1": {
    "char": "🙅🏻",
    "slug": "person_gesturing_no_tone1",
    "category": "people",
    "isAlternative": true
  },
  "person_gesturing_no_tone2": {
    "char": "🙅🏼",
    "slug": "person_gesturing_no_tone2",
    "category": "people"
  },
  "no_good_tone2": {
    "char": "🙅🏼",
    "slug": "person_gesturing_no_tone2",
    "category": "people",
    "isAlternative": true
  },
  "person_gesturing_no_tone3": {
    "char": "🙅🏽",
    "slug": "person_gesturing_no_tone3",
    "category": "people"
  },
  "no_good_tone3": {
    "char": "🙅🏽",
    "slug": "person_gesturing_no_tone3",
    "category": "people",
    "isAlternative": true
  },
  "person_gesturing_no_tone4": {
    "char": "🙅🏾",
    "slug": "person_gesturing_no_tone4",
    "category": "people"
  },
  "no_good_tone4": {
    "char": "🙅🏾",
    "slug": "person_gesturing_no_tone4",
    "category": "people",
    "isAlternative": true
  },
  "person_gesturing_no_tone5": {
    "char": "🙅🏿",
    "slug": "person_gesturing_no_tone5",
    "category": "people"
  },
  "no_good_tone5": {
    "char": "🙅🏿",
    "slug": "person_gesturing_no_tone5",
    "category": "people",
    "isAlternative": true
  },
  "woman_gesturing_no": {
    "char": "🙅‍♀️",
    "slug": "woman_gesturing_no",
    "category": "people"
  },
  "woman_gesturing_no_tone1": {
    "char": "🙅🏻‍♀️",
    "slug": "woman_gesturing_no_tone1",
    "category": "people"
  },
  "woman_gesturing_no_light_skin_tone": {
    "char": "🙅🏻‍♀️",
    "slug": "woman_gesturing_no_tone1",
    "category": "people",
    "isAlternative": true
  },
  "woman_gesturing_no_tone2": {
    "char": "🙅🏼‍♀️",
    "slug": "woman_gesturing_no_tone2",
    "category": "people"
  },
  "woman_gesturing_no_medium_light_skin_tone": {
    "char": "🙅🏼‍♀️",
    "slug": "woman_gesturing_no_tone2",
    "category": "people",
    "isAlternative": true
  },
  "woman_gesturing_no_tone3": {
    "char": "🙅🏽‍♀️",
    "slug": "woman_gesturing_no_tone3",
    "category": "people"
  },
  "woman_gesturing_no_medium_skin_tone": {
    "char": "🙅🏽‍♀️",
    "slug": "woman_gesturing_no_tone3",
    "category": "people",
    "isAlternative": true
  },
  "woman_gesturing_no_tone4": {
    "char": "🙅🏾‍♀️",
    "slug": "woman_gesturing_no_tone4",
    "category": "people"
  },
  "woman_gesturing_no_medium_dark_skin_tone": {
    "char": "🙅🏾‍♀️",
    "slug": "woman_gesturing_no_tone4",
    "category": "people",
    "isAlternative": true
  },
  "woman_gesturing_no_tone5": {
    "char": "🙅🏿‍♀️",
    "slug": "woman_gesturing_no_tone5",
    "category": "people"
  },
  "woman_gesturing_no_dark_skin_tone": {
    "char": "🙅🏿‍♀️",
    "slug": "woman_gesturing_no_tone5",
    "category": "people",
    "isAlternative": true
  },
  "man_gesturing_no": {
    "char": "🙅‍♂️",
    "slug": "man_gesturing_no",
    "category": "people"
  },
  "man_gesturing_no_tone1": {
    "char": "🙅🏻‍♂️",
    "slug": "man_gesturing_no_tone1",
    "category": "people"
  },
  "man_gesturing_no_light_skin_tone": {
    "char": "🙅🏻‍♂️",
    "slug": "man_gesturing_no_tone1",
    "category": "people",
    "isAlternative": true
  },
  "man_gesturing_no_tone2": {
    "char": "🙅🏼‍♂️",
    "slug": "man_gesturing_no_tone2",
    "category": "people"
  },
  "man_gesturing_no_medium_light_skin_tone": {
    "char": "🙅🏼‍♂️",
    "slug": "man_gesturing_no_tone2",
    "category": "people",
    "isAlternative": true
  },
  "man_gesturing_no_tone3": {
    "char": "🙅🏽‍♂️",
    "slug": "man_gesturing_no_tone3",
    "category": "people"
  },
  "man_gesturing_no_medium_skin_tone": {
    "char": "🙅🏽‍♂️",
    "slug": "man_gesturing_no_tone3",
    "category": "people",
    "isAlternative": true
  },
  "man_gesturing_no_tone4": {
    "char": "🙅🏾‍♂️",
    "slug": "man_gesturing_no_tone4",
    "category": "people"
  },
  "man_gesturing_no_medium_dark_skin_tone": {
    "char": "🙅🏾‍♂️",
    "slug": "man_gesturing_no_tone4",
    "category": "people",
    "isAlternative": true
  },
  "man_gesturing_no_tone5": {
    "char": "🙅🏿‍♂️",
    "slug": "man_gesturing_no_tone5",
    "category": "people"
  },
  "man_gesturing_no_dark_skin_tone": {
    "char": "🙅🏿‍♂️",
    "slug": "man_gesturing_no_tone5",
    "category": "people",
    "isAlternative": true
  },
  "person_gesturing_ok": {
    "char": "🙆",
    "slug": "person_gesturing_ok",
    "category": "people"
  },
  "ok_woman": {
    "char": "🙆",
    "slug": "person_gesturing_ok",
    "category": "people",
    "isAlternative": true
  },
  "person_gesturing_ok_tone1": {
    "char": "🙆🏻",
    "slug": "person_gesturing_ok_tone1",
    "category": "people"
  },
  "ok_woman_tone1": {
    "char": "🙆🏻",
    "slug": "person_gesturing_ok_tone1",
    "category": "people",
    "isAlternative": true
  },
  "person_gesturing_ok_tone2": {
    "char": "🙆🏼",
    "slug": "person_gesturing_ok_tone2",
    "category": "people"
  },
  "ok_woman_tone2": {
    "char": "🙆🏼",
    "slug": "person_gesturing_ok_tone2",
    "category": "people",
    "isAlternative": true
  },
  "person_gesturing_ok_tone3": {
    "char": "🙆🏽",
    "slug": "person_gesturing_ok_tone3",
    "category": "people"
  },
  "ok_woman_tone3": {
    "char": "🙆🏽",
    "slug": "person_gesturing_ok_tone3",
    "category": "people",
    "isAlternative": true
  },
  "person_gesturing_ok_tone4": {
    "char": "🙆🏾",
    "slug": "person_gesturing_ok_tone4",
    "category": "people"
  },
  "ok_woman_tone4": {
    "char": "🙆🏾",
    "slug": "person_gesturing_ok_tone4",
    "category": "people",
    "isAlternative": true
  },
  "person_gesturing_ok_tone5": {
    "char": "🙆🏿",
    "slug": "person_gesturing_ok_tone5",
    "category": "people"
  },
  "ok_woman_tone5": {
    "char": "🙆🏿",
    "slug": "person_gesturing_ok_tone5",
    "category": "people",
    "isAlternative": true
  },
  "woman_gesturing_ok": {
    "char": "🙆‍♀️",
    "slug": "woman_gesturing_ok",
    "category": "people"
  },
  "woman_gesturing_ok_tone1": {
    "char": "🙆🏻‍♀️",
    "slug": "woman_gesturing_ok_tone1",
    "category": "people"
  },
  "woman_gesturing_ok_light_skin_tone": {
    "char": "🙆🏻‍♀️",
    "slug": "woman_gesturing_ok_tone1",
    "category": "people",
    "isAlternative": true
  },
  "woman_gesturing_ok_tone2": {
    "char": "🙆🏼‍♀️",
    "slug": "woman_gesturing_ok_tone2",
    "category": "people"
  },
  "woman_gesturing_ok_medium_light_skin_tone": {
    "char": "🙆🏼‍♀️",
    "slug": "woman_gesturing_ok_tone2",
    "category": "people",
    "isAlternative": true
  },
  "woman_gesturing_ok_tone3": {
    "char": "🙆🏽‍♀️",
    "slug": "woman_gesturing_ok_tone3",
    "category": "people"
  },
  "woman_gesturing_ok_medium_skin_tone": {
    "char": "🙆🏽‍♀️",
    "slug": "woman_gesturing_ok_tone3",
    "category": "people",
    "isAlternative": true
  },
  "woman_gesturing_ok_tone4": {
    "char": "🙆🏾‍♀️",
    "slug": "woman_gesturing_ok_tone4",
    "category": "people"
  },
  "woman_gesturing_ok_medium_dark_skin_tone": {
    "char": "🙆🏾‍♀️",
    "slug": "woman_gesturing_ok_tone4",
    "category": "people",
    "isAlternative": true
  },
  "woman_gesturing_ok_tone5": {
    "char": "🙆🏿‍♀️",
    "slug": "woman_gesturing_ok_tone5",
    "category": "people"
  },
  "woman_gesturing_ok_dark_skin_tone": {
    "char": "🙆🏿‍♀️",
    "slug": "woman_gesturing_ok_tone5",
    "category": "people",
    "isAlternative": true
  },
  "man_gesturing_ok": {
    "char": "🙆‍♂️",
    "slug": "man_gesturing_ok",
    "category": "people"
  },
  "man_gesturing_ok_tone1": {
    "char": "🙆🏻‍♂️",
    "slug": "man_gesturing_ok_tone1",
    "category": "people"
  },
  "man_gesturing_ok_light_skin_tone": {
    "char": "🙆🏻‍♂️",
    "slug": "man_gesturing_ok_tone1",
    "category": "people",
    "isAlternative": true
  },
  "man_gesturing_ok_tone2": {
    "char": "🙆🏼‍♂️",
    "slug": "man_gesturing_ok_tone2",
    "category": "people"
  },
  "man_gesturing_ok_medium_light_skin_tone": {
    "char": "🙆🏼‍♂️",
    "slug": "man_gesturing_ok_tone2",
    "category": "people",
    "isAlternative": true
  },
  "man_gesturing_ok_tone3": {
    "char": "🙆🏽‍♂️",
    "slug": "man_gesturing_ok_tone3",
    "category": "people"
  },
  "man_gesturing_ok_medium_skin_tone": {
    "char": "🙆🏽‍♂️",
    "slug": "man_gesturing_ok_tone3",
    "category": "people",
    "isAlternative": true
  },
  "man_gesturing_ok_tone4": {
    "char": "🙆🏾‍♂️",
    "slug": "man_gesturing_ok_tone4",
    "category": "people"
  },
  "man_gesturing_ok_medium_dark_skin_tone": {
    "char": "🙆🏾‍♂️",
    "slug": "man_gesturing_ok_tone4",
    "category": "people",
    "isAlternative": true
  },
  "man_gesturing_ok_tone5": {
    "char": "🙆🏿‍♂️",
    "slug": "man_gesturing_ok_tone5",
    "category": "people"
  },
  "man_gesturing_ok_dark_skin_tone": {
    "char": "🙆🏿‍♂️",
    "slug": "man_gesturing_ok_tone5",
    "category": "people",
    "isAlternative": true
  },
  "person_raising_hand": {
    "char": "🙋",
    "slug": "person_raising_hand",
    "category": "people"
  },
  "raising_hand": {
    "char": "🙋",
    "slug": "person_raising_hand",
    "category": "people",
    "isAlternative": true
  },
  "person_raising_hand_tone1": {
    "char": "🙋🏻",
    "slug": "person_raising_hand_tone1",
    "category": "people"
  },
  "raising_hand_tone1": {
    "char": "🙋🏻",
    "slug": "person_raising_hand_tone1",
    "category": "people",
    "isAlternative": true
  },
  "person_raising_hand_tone2": {
    "char": "🙋🏼",
    "slug": "person_raising_hand_tone2",
    "category": "people"
  },
  "raising_hand_tone2": {
    "char": "🙋🏼",
    "slug": "person_raising_hand_tone2",
    "category": "people",
    "isAlternative": true
  },
  "person_raising_hand_tone3": {
    "char": "🙋🏽",
    "slug": "person_raising_hand_tone3",
    "category": "people"
  },
  "raising_hand_tone3": {
    "char": "🙋🏽",
    "slug": "person_raising_hand_tone3",
    "category": "people",
    "isAlternative": true
  },
  "person_raising_hand_tone4": {
    "char": "🙋🏾",
    "slug": "person_raising_hand_tone4",
    "category": "people"
  },
  "raising_hand_tone4": {
    "char": "🙋🏾",
    "slug": "person_raising_hand_tone4",
    "category": "people",
    "isAlternative": true
  },
  "person_raising_hand_tone5": {
    "char": "🙋🏿",
    "slug": "person_raising_hand_tone5",
    "category": "people"
  },
  "raising_hand_tone5": {
    "char": "🙋🏿",
    "slug": "person_raising_hand_tone5",
    "category": "people",
    "isAlternative": true
  },
  "woman_raising_hand": {
    "char": "🙋‍♀️",
    "slug": "woman_raising_hand",
    "category": "people"
  },
  "woman_raising_hand_tone1": {
    "char": "🙋🏻‍♀️",
    "slug": "woman_raising_hand_tone1",
    "category": "people"
  },
  "woman_raising_hand_light_skin_tone": {
    "char": "🙋🏻‍♀️",
    "slug": "woman_raising_hand_tone1",
    "category": "people",
    "isAlternative": true
  },
  "woman_raising_hand_tone2": {
    "char": "🙋🏼‍♀️",
    "slug": "woman_raising_hand_tone2",
    "category": "people"
  },
  "woman_raising_hand_medium_light_skin_tone": {
    "char": "🙋🏼‍♀️",
    "slug": "woman_raising_hand_tone2",
    "category": "people",
    "isAlternative": true
  },
  "woman_raising_hand_tone3": {
    "char": "🙋🏽‍♀️",
    "slug": "woman_raising_hand_tone3",
    "category": "people"
  },
  "woman_raising_hand_medium_skin_tone": {
    "char": "🙋🏽‍♀️",
    "slug": "woman_raising_hand_tone3",
    "category": "people",
    "isAlternative": true
  },
  "woman_raising_hand_tone4": {
    "char": "🙋🏾‍♀️",
    "slug": "woman_raising_hand_tone4",
    "category": "people"
  },
  "woman_raising_hand_medium_dark_skin_tone": {
    "char": "🙋🏾‍♀️",
    "slug": "woman_raising_hand_tone4",
    "category": "people",
    "isAlternative": true
  },
  "woman_raising_hand_tone5": {
    "char": "🙋🏿‍♀️",
    "slug": "woman_raising_hand_tone5",
    "category": "people"
  },
  "woman_raising_hand_dark_skin_tone": {
    "char": "🙋🏿‍♀️",
    "slug": "woman_raising_hand_tone5",
    "category": "people",
    "isAlternative": true
  },
  "man_raising_hand": {
    "char": "🙋‍♂️",
    "slug": "man_raising_hand",
    "category": "people"
  },
  "man_raising_hand_tone1": {
    "char": "🙋🏻‍♂️",
    "slug": "man_raising_hand_tone1",
    "category": "people"
  },
  "man_raising_hand_light_skin_tone": {
    "char": "🙋🏻‍♂️",
    "slug": "man_raising_hand_tone1",
    "category": "people",
    "isAlternative": true
  },
  "man_raising_hand_tone2": {
    "char": "🙋🏼‍♂️",
    "slug": "man_raising_hand_tone2",
    "category": "people"
  },
  "man_raising_hand_medium_light_skin_tone": {
    "char": "🙋🏼‍♂️",
    "slug": "man_raising_hand_tone2",
    "category": "people",
    "isAlternative": true
  },
  "man_raising_hand_tone3": {
    "char": "🙋🏽‍♂️",
    "slug": "man_raising_hand_tone3",
    "category": "people"
  },
  "man_raising_hand_medium_skin_tone": {
    "char": "🙋🏽‍♂️",
    "slug": "man_raising_hand_tone3",
    "category": "people",
    "isAlternative": true
  },
  "man_raising_hand_tone4": {
    "char": "🙋🏾‍♂️",
    "slug": "man_raising_hand_tone4",
    "category": "people"
  },
  "man_raising_hand_medium_dark_skin_tone": {
    "char": "🙋🏾‍♂️",
    "slug": "man_raising_hand_tone4",
    "category": "people",
    "isAlternative": true
  },
  "man_raising_hand_tone5": {
    "char": "🙋🏿‍♂️",
    "slug": "man_raising_hand_tone5",
    "category": "people"
  },
  "man_raising_hand_dark_skin_tone": {
    "char": "🙋🏿‍♂️",
    "slug": "man_raising_hand_tone5",
    "category": "people",
    "isAlternative": true
  },
  "deaf_person": { "char": "🧏", "slug": "deaf_person", "category": "people" },
  "deaf_person_tone1": {
    "char": "🧏🏻",
    "slug": "deaf_person_tone1",
    "category": "people"
  },
  "deaf_person_light_skin_tone": {
    "char": "🧏🏻",
    "slug": "deaf_person_tone1",
    "category": "people",
    "isAlternative": true
  },
  "deaf_person_tone2": {
    "char": "🧏🏼",
    "slug": "deaf_person_tone2",
    "category": "people"
  },
  "deaf_person_medium_light_skin_tone": {
    "char": "🧏🏼",
    "slug": "deaf_person_tone2",
    "category": "people",
    "isAlternative": true
  },
  "deaf_person_tone3": {
    "char": "🧏🏽",
    "slug": "deaf_person_tone3",
    "category": "people"
  },
  "deaf_person_medium_skin_tone": {
    "char": "🧏🏽",
    "slug": "deaf_person_tone3",
    "category": "people",
    "isAlternative": true
  },
  "deaf_person_tone4": {
    "char": "🧏🏾",
    "slug": "deaf_person_tone4",
    "category": "people"
  },
  "deaf_person_medium_dark_skin_tone": {
    "char": "🧏🏾",
    "slug": "deaf_person_tone4",
    "category": "people",
    "isAlternative": true
  },
  "deaf_person_tone5": {
    "char": "🧏🏿",
    "slug": "deaf_person_tone5",
    "category": "people"
  },
  "deaf_person_dark_skin_tone": {
    "char": "🧏🏿",
    "slug": "deaf_person_tone5",
    "category": "people",
    "isAlternative": true
  },
  "deaf_woman": { "char": "🧏‍♀️", "slug": "deaf_woman", "category": "people" },
  "deaf_woman_tone1": {
    "char": "🧏🏻‍♀️",
    "slug": "deaf_woman_tone1",
    "category": "people"
  },
  "deaf_woman_light_skin_tone": {
    "char": "🧏🏻‍♀️",
    "slug": "deaf_woman_tone1",
    "category": "people",
    "isAlternative": true
  },
  "deaf_woman_tone2": {
    "char": "🧏🏼‍♀️",
    "slug": "deaf_woman_tone2",
    "category": "people"
  },
  "deaf_woman_medium_light_skin_tone": {
    "char": "🧏🏼‍♀️",
    "slug": "deaf_woman_tone2",
    "category": "people",
    "isAlternative": true
  },
  "deaf_woman_tone3": {
    "char": "🧏🏽‍♀️",
    "slug": "deaf_woman_tone3",
    "category": "people"
  },
  "deaf_woman_medium_skin_tone": {
    "char": "🧏🏽‍♀️",
    "slug": "deaf_woman_tone3",
    "category": "people",
    "isAlternative": true
  },
  "deaf_woman_tone4": {
    "char": "🧏🏾‍♀️",
    "slug": "deaf_woman_tone4",
    "category": "people"
  },
  "deaf_woman_medium_dark_skin_tone": {
    "char": "🧏🏾‍♀️",
    "slug": "deaf_woman_tone4",
    "category": "people",
    "isAlternative": true
  },
  "deaf_woman_tone5": {
    "char": "🧏🏿‍♀️",
    "slug": "deaf_woman_tone5",
    "category": "people"
  },
  "deaf_woman_dark_skin_tone": {
    "char": "🧏🏿‍♀️",
    "slug": "deaf_woman_tone5",
    "category": "people",
    "isAlternative": true
  },
  "deaf_man": { "char": "🧏‍♂️", "slug": "deaf_man", "category": "people" },
  "deaf_man_tone1": {
    "char": "🧏🏻‍♂️",
    "slug": "deaf_man_tone1",
    "category": "people"
  },
  "deaf_man_light_skin_tone": {
    "char": "🧏🏻‍♂️",
    "slug": "deaf_man_tone1",
    "category": "people",
    "isAlternative": true
  },
  "deaf_man_tone2": {
    "char": "🧏🏼‍♂️",
    "slug": "deaf_man_tone2",
    "category": "people"
  },
  "deaf_man_medium_light_skin_tone": {
    "char": "🧏🏼‍♂️",
    "slug": "deaf_man_tone2",
    "category": "people",
    "isAlternative": true
  },
  "deaf_man_tone3": {
    "char": "🧏🏽‍♂️",
    "slug": "deaf_man_tone3",
    "category": "people"
  },
  "deaf_man_medium_skin_tone": {
    "char": "🧏🏽‍♂️",
    "slug": "deaf_man_tone3",
    "category": "people",
    "isAlternative": true
  },
  "deaf_man_tone4": {
    "char": "🧏🏾‍♂️",
    "slug": "deaf_man_tone4",
    "category": "people"
  },
  "deaf_man_medium_dark_skin_tone": {
    "char": "🧏🏾‍♂️",
    "slug": "deaf_man_tone4",
    "category": "people",
    "isAlternative": true
  },
  "deaf_man_tone5": {
    "char": "🧏🏿‍♂️",
    "slug": "deaf_man_tone5",
    "category": "people"
  },
  "deaf_man_dark_skin_tone": {
    "char": "🧏🏿‍♂️",
    "slug": "deaf_man_tone5",
    "category": "people",
    "isAlternative": true
  },
  "person_facepalming": {
    "char": "🤦",
    "slug": "person_facepalming",
    "category": "people"
  },
  "face_palm": {
    "char": "🤦",
    "slug": "person_facepalming",
    "category": "people",
    "isAlternative": true
  },
  "facepalm": {
    "char": "🤦",
    "slug": "person_facepalming",
    "category": "people",
    "isAlternative": true
  },
  "person_facepalming_tone1": {
    "char": "🤦🏻",
    "slug": "person_facepalming_tone1",
    "category": "people"
  },
  "face_palm_tone1": {
    "char": "🤦🏻",
    "slug": "person_facepalming_tone1",
    "category": "people",
    "isAlternative": true
  },
  "facepalm_tone1": {
    "char": "🤦🏻",
    "slug": "person_facepalming_tone1",
    "category": "people",
    "isAlternative": true
  },
  "person_facepalming_tone2": {
    "char": "🤦🏼",
    "slug": "person_facepalming_tone2",
    "category": "people"
  },
  "face_palm_tone2": {
    "char": "🤦🏼",
    "slug": "person_facepalming_tone2",
    "category": "people",
    "isAlternative": true
  },
  "facepalm_tone2": {
    "char": "🤦🏼",
    "slug": "person_facepalming_tone2",
    "category": "people",
    "isAlternative": true
  },
  "person_facepalming_tone3": {
    "char": "🤦🏽",
    "slug": "person_facepalming_tone3",
    "category": "people"
  },
  "face_palm_tone3": {
    "char": "🤦🏽",
    "slug": "person_facepalming_tone3",
    "category": "people",
    "isAlternative": true
  },
  "facepalm_tone3": {
    "char": "🤦🏽",
    "slug": "person_facepalming_tone3",
    "category": "people",
    "isAlternative": true
  },
  "person_facepalming_tone4": {
    "char": "🤦🏾",
    "slug": "person_facepalming_tone4",
    "category": "people"
  },
  "face_palm_tone4": {
    "char": "🤦🏾",
    "slug": "person_facepalming_tone4",
    "category": "people",
    "isAlternative": true
  },
  "facepalm_tone4": {
    "char": "🤦🏾",
    "slug": "person_facepalming_tone4",
    "category": "people",
    "isAlternative": true
  },
  "person_facepalming_tone5": {
    "char": "🤦🏿",
    "slug": "person_facepalming_tone5",
    "category": "people"
  },
  "face_palm_tone5": {
    "char": "🤦🏿",
    "slug": "person_facepalming_tone5",
    "category": "people",
    "isAlternative": true
  },
  "facepalm_tone5": {
    "char": "🤦🏿",
    "slug": "person_facepalming_tone5",
    "category": "people",
    "isAlternative": true
  },
  "woman_facepalming": {
    "char": "🤦‍♀️",
    "slug": "woman_facepalming",
    "category": "people"
  },
  "woman_facepalming_tone1": {
    "char": "🤦🏻‍♀️",
    "slug": "woman_facepalming_tone1",
    "category": "people"
  },
  "woman_facepalming_light_skin_tone": {
    "char": "🤦🏻‍♀️",
    "slug": "woman_facepalming_tone1",
    "category": "people",
    "isAlternative": true
  },
  "woman_facepalming_tone2": {
    "char": "🤦🏼‍♀️",
    "slug": "woman_facepalming_tone2",
    "category": "people"
  },
  "woman_facepalming_medium_light_skin_tone": {
    "char": "🤦🏼‍♀️",
    "slug": "woman_facepalming_tone2",
    "category": "people",
    "isAlternative": true
  },
  "woman_facepalming_tone3": {
    "char": "🤦🏽‍♀️",
    "slug": "woman_facepalming_tone3",
    "category": "people"
  },
  "woman_facepalming_medium_skin_tone": {
    "char": "🤦🏽‍♀️",
    "slug": "woman_facepalming_tone3",
    "category": "people",
    "isAlternative": true
  },
  "woman_facepalming_tone4": {
    "char": "🤦🏾‍♀️",
    "slug": "woman_facepalming_tone4",
    "category": "people"
  },
  "woman_facepalming_medium_dark_skin_tone": {
    "char": "🤦🏾‍♀️",
    "slug": "woman_facepalming_tone4",
    "category": "people",
    "isAlternative": true
  },
  "woman_facepalming_tone5": {
    "char": "🤦🏿‍♀️",
    "slug": "woman_facepalming_tone5",
    "category": "people"
  },
  "woman_facepalming_dark_skin_tone": {
    "char": "🤦🏿‍♀️",
    "slug": "woman_facepalming_tone5",
    "category": "people",
    "isAlternative": true
  },
  "man_facepalming": {
    "char": "🤦‍♂️",
    "slug": "man_facepalming",
    "category": "people"
  },
  "man_facepalming_tone1": {
    "char": "🤦🏻‍♂️",
    "slug": "man_facepalming_tone1",
    "category": "people"
  },
  "man_facepalming_light_skin_tone": {
    "char": "🤦🏻‍♂️",
    "slug": "man_facepalming_tone1",
    "category": "people",
    "isAlternative": true
  },
  "man_facepalming_tone2": {
    "char": "🤦🏼‍♂️",
    "slug": "man_facepalming_tone2",
    "category": "people"
  },
  "man_facepalming_medium_light_skin_tone": {
    "char": "🤦🏼‍♂️",
    "slug": "man_facepalming_tone2",
    "category": "people",
    "isAlternative": true
  },
  "man_facepalming_tone3": {
    "char": "🤦🏽‍♂️",
    "slug": "man_facepalming_tone3",
    "category": "people"
  },
  "man_facepalming_medium_skin_tone": {
    "char": "🤦🏽‍♂️",
    "slug": "man_facepalming_tone3",
    "category": "people",
    "isAlternative": true
  },
  "man_facepalming_tone4": {
    "char": "🤦🏾‍♂️",
    "slug": "man_facepalming_tone4",
    "category": "people"
  },
  "man_facepalming_medium_dark_skin_tone": {
    "char": "🤦🏾‍♂️",
    "slug": "man_facepalming_tone4",
    "category": "people",
    "isAlternative": true
  },
  "man_facepalming_tone5": {
    "char": "🤦🏿‍♂️",
    "slug": "man_facepalming_tone5",
    "category": "people"
  },
  "man_facepalming_dark_skin_tone": {
    "char": "🤦🏿‍♂️",
    "slug": "man_facepalming_tone5",
    "category": "people",
    "isAlternative": true
  },
  "person_shrugging": {
    "char": "🤷",
    "slug": "person_shrugging",
    "category": "people"
  },
  "shrug": {
    "char": "🤷",
    "slug": "person_shrugging",
    "category": "people",
    "isAlternative": true
  },
  "person_shrugging_tone1": {
    "char": "🤷🏻",
    "slug": "person_shrugging_tone1",
    "category": "people"
  },
  "shrug_tone1": {
    "char": "🤷🏻",
    "slug": "person_shrugging_tone1",
    "category": "people",
    "isAlternative": true
  },
  "person_shrugging_tone2": {
    "char": "🤷🏼",
    "slug": "person_shrugging_tone2",
    "category": "people"
  },
  "shrug_tone2": {
    "char": "🤷🏼",
    "slug": "person_shrugging_tone2",
    "category": "people",
    "isAlternative": true
  },
  "person_shrugging_tone3": {
    "char": "🤷🏽",
    "slug": "person_shrugging_tone3",
    "category": "people"
  },
  "shrug_tone3": {
    "char": "🤷🏽",
    "slug": "person_shrugging_tone3",
    "category": "people",
    "isAlternative": true
  },
  "person_shrugging_tone4": {
    "char": "🤷🏾",
    "slug": "person_shrugging_tone4",
    "category": "people"
  },
  "shrug_tone4": {
    "char": "🤷🏾",
    "slug": "person_shrugging_tone4",
    "category": "people",
    "isAlternative": true
  },
  "person_shrugging_tone5": {
    "char": "🤷🏿",
    "slug": "person_shrugging_tone5",
    "category": "people"
  },
  "shrug_tone5": {
    "char": "🤷🏿",
    "slug": "person_shrugging_tone5",
    "category": "people",
    "isAlternative": true
  },
  "woman_shrugging": {
    "char": "🤷‍♀️",
    "slug": "woman_shrugging",
    "category": "people"
  },
  "woman_shrugging_tone1": {
    "char": "🤷🏻‍♀️",
    "slug": "woman_shrugging_tone1",
    "category": "people"
  },
  "woman_shrugging_light_skin_tone": {
    "char": "🤷🏻‍♀️",
    "slug": "woman_shrugging_tone1",
    "category": "people",
    "isAlternative": true
  },
  "woman_shrugging_tone2": {
    "char": "🤷🏼‍♀️",
    "slug": "woman_shrugging_tone2",
    "category": "people"
  },
  "woman_shrugging_medium_light_skin_tone": {
    "char": "🤷🏼‍♀️",
    "slug": "woman_shrugging_tone2",
    "category": "people",
    "isAlternative": true
  },
  "woman_shrugging_tone3": {
    "char": "🤷🏽‍♀️",
    "slug": "woman_shrugging_tone3",
    "category": "people"
  },
  "woman_shrugging_medium_skin_tone": {
    "char": "🤷🏽‍♀️",
    "slug": "woman_shrugging_tone3",
    "category": "people",
    "isAlternative": true
  },
  "woman_shrugging_tone4": {
    "char": "🤷🏾‍♀️",
    "slug": "woman_shrugging_tone4",
    "category": "people"
  },
  "woman_shrugging_medium_dark_skin_tone": {
    "char": "🤷🏾‍♀️",
    "slug": "woman_shrugging_tone4",
    "category": "people",
    "isAlternative": true
  },
  "woman_shrugging_tone5": {
    "char": "🤷🏿‍♀️",
    "slug": "woman_shrugging_tone5",
    "category": "people"
  },
  "woman_shrugging_dark_skin_tone": {
    "char": "🤷🏿‍♀️",
    "slug": "woman_shrugging_tone5",
    "category": "people",
    "isAlternative": true
  },
  "man_shrugging": {
    "char": "🤷‍♂️",
    "slug": "man_shrugging",
    "category": "people"
  },
  "man_shrugging_tone1": {
    "char": "🤷🏻‍♂️",
    "slug": "man_shrugging_tone1",
    "category": "people"
  },
  "man_shrugging_light_skin_tone": {
    "char": "🤷🏻‍♂️",
    "slug": "man_shrugging_tone1",
    "category": "people",
    "isAlternative": true
  },
  "man_shrugging_tone2": {
    "char": "🤷🏼‍♂️",
    "slug": "man_shrugging_tone2",
    "category": "people"
  },
  "man_shrugging_medium_light_skin_tone": {
    "char": "🤷🏼‍♂️",
    "slug": "man_shrugging_tone2",
    "category": "people",
    "isAlternative": true
  },
  "man_shrugging_tone3": {
    "char": "🤷🏽‍♂️",
    "slug": "man_shrugging_tone3",
    "category": "people"
  },
  "man_shrugging_medium_skin_tone": {
    "char": "🤷🏽‍♂️",
    "slug": "man_shrugging_tone3",
    "category": "people",
    "isAlternative": true
  },
  "man_shrugging_tone4": {
    "char": "🤷🏾‍♂️",
    "slug": "man_shrugging_tone4",
    "category": "people"
  },
  "man_shrugging_medium_dark_skin_tone": {
    "char": "🤷🏾‍♂️",
    "slug": "man_shrugging_tone4",
    "category": "people",
    "isAlternative": true
  },
  "man_shrugging_tone5": {
    "char": "🤷🏿‍♂️",
    "slug": "man_shrugging_tone5",
    "category": "people"
  },
  "man_shrugging_dark_skin_tone": {
    "char": "🤷🏿‍♂️",
    "slug": "man_shrugging_tone5",
    "category": "people",
    "isAlternative": true
  },
  "person_pouting": {
    "char": "🙎",
    "slug": "person_pouting",
    "category": "people"
  },
  "person_with_pouting_face": {
    "char": "🙎",
    "slug": "person_pouting",
    "category": "people",
    "isAlternative": true
  },
  "person_pouting_tone1": {
    "char": "🙎🏻",
    "slug": "person_pouting_tone1",
    "category": "people"
  },
  "person_with_pouting_face_tone1": {
    "char": "🙎🏻",
    "slug": "person_pouting_tone1",
    "category": "people",
    "isAlternative": true
  },
  "person_pouting_tone2": {
    "char": "🙎🏼",
    "slug": "person_pouting_tone2",
    "category": "people"
  },
  "person_with_pouting_face_tone2": {
    "char": "🙎🏼",
    "slug": "person_pouting_tone2",
    "category": "people",
    "isAlternative": true
  },
  "person_pouting_tone3": {
    "char": "🙎🏽",
    "slug": "person_pouting_tone3",
    "category": "people"
  },
  "person_with_pouting_face_tone3": {
    "char": "🙎🏽",
    "slug": "person_pouting_tone3",
    "category": "people",
    "isAlternative": true
  },
  "person_pouting_tone4": {
    "char": "🙎🏾",
    "slug": "person_pouting_tone4",
    "category": "people"
  },
  "person_with_pouting_face_tone4": {
    "char": "🙎🏾",
    "slug": "person_pouting_tone4",
    "category": "people",
    "isAlternative": true
  },
  "person_pouting_tone5": {
    "char": "🙎🏿",
    "slug": "person_pouting_tone5",
    "category": "people"
  },
  "person_with_pouting_face_tone5": {
    "char": "🙎🏿",
    "slug": "person_pouting_tone5",
    "category": "people",
    "isAlternative": true
  },
  "woman_pouting": {
    "char": "🙎‍♀️",
    "slug": "woman_pouting",
    "category": "people"
  },
  "woman_pouting_tone1": {
    "char": "🙎🏻‍♀️",
    "slug": "woman_pouting_tone1",
    "category": "people"
  },
  "woman_pouting_light_skin_tone": {
    "char": "🙎🏻‍♀️",
    "slug": "woman_pouting_tone1",
    "category": "people",
    "isAlternative": true
  },
  "woman_pouting_tone2": {
    "char": "🙎🏼‍♀️",
    "slug": "woman_pouting_tone2",
    "category": "people"
  },
  "woman_pouting_medium_light_skin_tone": {
    "char": "🙎🏼‍♀️",
    "slug": "woman_pouting_tone2",
    "category": "people",
    "isAlternative": true
  },
  "woman_pouting_tone3": {
    "char": "🙎🏽‍♀️",
    "slug": "woman_pouting_tone3",
    "category": "people"
  },
  "woman_pouting_medium_skin_tone": {
    "char": "🙎🏽‍♀️",
    "slug": "woman_pouting_tone3",
    "category": "people",
    "isAlternative": true
  },
  "woman_pouting_tone4": {
    "char": "🙎🏾‍♀️",
    "slug": "woman_pouting_tone4",
    "category": "people"
  },
  "woman_pouting_medium_dark_skin_tone": {
    "char": "🙎🏾‍♀️",
    "slug": "woman_pouting_tone4",
    "category": "people",
    "isAlternative": true
  },
  "woman_pouting_tone5": {
    "char": "🙎🏿‍♀️",
    "slug": "woman_pouting_tone5",
    "category": "people"
  },
  "woman_pouting_dark_skin_tone": {
    "char": "🙎🏿‍♀️",
    "slug": "woman_pouting_tone5",
    "category": "people",
    "isAlternative": true
  },
  "man_pouting": { "char": "🙎‍♂️", "slug": "man_pouting", "category": "people" },
  "man_pouting_tone1": {
    "char": "🙎🏻‍♂️",
    "slug": "man_pouting_tone1",
    "category": "people"
  },
  "man_pouting_light_skin_tone": {
    "char": "🙎🏻‍♂️",
    "slug": "man_pouting_tone1",
    "category": "people",
    "isAlternative": true
  },
  "man_pouting_tone2": {
    "char": "🙎🏼‍♂️",
    "slug": "man_pouting_tone2",
    "category": "people"
  },
  "man_pouting_medium_light_skin_tone": {
    "char": "🙎🏼‍♂️",
    "slug": "man_pouting_tone2",
    "category": "people",
    "isAlternative": true
  },
  "man_pouting_tone3": {
    "char": "🙎🏽‍♂️",
    "slug": "man_pouting_tone3",
    "category": "people"
  },
  "man_pouting_medium_skin_tone": {
    "char": "🙎🏽‍♂️",
    "slug": "man_pouting_tone3",
    "category": "people",
    "isAlternative": true
  },
  "man_pouting_tone4": {
    "char": "🙎🏾‍♂️",
    "slug": "man_pouting_tone4",
    "category": "people"
  },
  "man_pouting_medium_dark_skin_tone": {
    "char": "🙎🏾‍♂️",
    "slug": "man_pouting_tone4",
    "category": "people",
    "isAlternative": true
  },
  "man_pouting_tone5": {
    "char": "🙎🏿‍♂️",
    "slug": "man_pouting_tone5",
    "category": "people"
  },
  "man_pouting_dark_skin_tone": {
    "char": "🙎🏿‍♂️",
    "slug": "man_pouting_tone5",
    "category": "people",
    "isAlternative": true
  },
  "person_frowning": {
    "char": "🙍",
    "slug": "person_frowning",
    "category": "people"
  },
  "person_frowning_tone1": {
    "char": "🙍🏻",
    "slug": "person_frowning_tone1",
    "category": "people"
  },
  "person_frowning_tone2": {
    "char": "🙍🏼",
    "slug": "person_frowning_tone2",
    "category": "people"
  },
  "person_frowning_tone3": {
    "char": "🙍🏽",
    "slug": "person_frowning_tone3",
    "category": "people"
  },
  "person_frowning_tone4": {
    "char": "🙍🏾",
    "slug": "person_frowning_tone4",
    "category": "people"
  },
  "person_frowning_tone5": {
    "char": "🙍🏿",
    "slug": "person_frowning_tone5",
    "category": "people"
  },
  "woman_frowning": {
    "char": "🙍‍♀️",
    "slug": "woman_frowning",
    "category": "people"
  },
  "woman_frowning_tone1": {
    "char": "🙍🏻‍♀️",
    "slug": "woman_frowning_tone1",
    "category": "people"
  },
  "woman_frowning_light_skin_tone": {
    "char": "🙍🏻‍♀️",
    "slug": "woman_frowning_tone1",
    "category": "people",
    "isAlternative": true
  },
  "woman_frowning_tone2": {
    "char": "🙍🏼‍♀️",
    "slug": "woman_frowning_tone2",
    "category": "people"
  },
  "woman_frowning_medium_light_skin_tone": {
    "char": "🙍🏼‍♀️",
    "slug": "woman_frowning_tone2",
    "category": "people",
    "isAlternative": true
  },
  "woman_frowning_tone3": {
    "char": "🙍🏽‍♀️",
    "slug": "woman_frowning_tone3",
    "category": "people"
  },
  "woman_frowning_medium_skin_tone": {
    "char": "🙍🏽‍♀️",
    "slug": "woman_frowning_tone3",
    "category": "people",
    "isAlternative": true
  },
  "woman_frowning_tone4": {
    "char": "🙍🏾‍♀️",
    "slug": "woman_frowning_tone4",
    "category": "people"
  },
  "woman_frowning_medium_dark_skin_tone": {
    "char": "🙍🏾‍♀️",
    "slug": "woman_frowning_tone4",
    "category": "people",
    "isAlternative": true
  },
  "woman_frowning_tone5": {
    "char": "🙍🏿‍♀️",
    "slug": "woman_frowning_tone5",
    "category": "people"
  },
  "woman_frowning_dark_skin_tone": {
    "char": "🙍🏿‍♀️",
    "slug": "woman_frowning_tone5",
    "category": "people",
    "isAlternative": true
  },
  "man_frowning": {
    "char": "🙍‍♂️",
    "slug": "man_frowning",
    "category": "people"
  },
  "man_frowning_tone1": {
    "char": "🙍🏻‍♂️",
    "slug": "man_frowning_tone1",
    "category": "people"
  },
  "man_frowning_light_skin_tone": {
    "char": "🙍🏻‍♂️",
    "slug": "man_frowning_tone1",
    "category": "people",
    "isAlternative": true
  },
  "man_frowning_tone2": {
    "char": "🙍🏼‍♂️",
    "slug": "man_frowning_tone2",
    "category": "people"
  },
  "man_frowning_medium_light_skin_tone": {
    "char": "🙍🏼‍♂️",
    "slug": "man_frowning_tone2",
    "category": "people",
    "isAlternative": true
  },
  "man_frowning_tone3": {
    "char": "🙍🏽‍♂️",
    "slug": "man_frowning_tone3",
    "category": "people"
  },
  "man_frowning_medium_skin_tone": {
    "char": "🙍🏽‍♂️",
    "slug": "man_frowning_tone3",
    "category": "people",
    "isAlternative": true
  },
  "man_frowning_tone4": {
    "char": "🙍🏾‍♂️",
    "slug": "man_frowning_tone4",
    "category": "people"
  },
  "man_frowning_medium_dark_skin_tone": {
    "char": "🙍🏾‍♂️",
    "slug": "man_frowning_tone4",
    "category": "people",
    "isAlternative": true
  },
  "man_frowning_tone5": {
    "char": "🙍🏿‍♂️",
    "slug": "man_frowning_tone5",
    "category": "people"
  },
  "man_frowning_dark_skin_tone": {
    "char": "🙍🏿‍♂️",
    "slug": "man_frowning_tone5",
    "category": "people",
    "isAlternative": true
  },
  "person_getting_haircut": {
    "char": "💇",
    "slug": "person_getting_haircut",
    "category": "people"
  },
  "haircut": {
    "char": "💇",
    "slug": "person_getting_haircut",
    "category": "people",
    "isAlternative": true
  },
  "person_getting_haircut_tone1": {
    "char": "💇🏻",
    "slug": "person_getting_haircut_tone1",
    "category": "people"
  },
  "haircut_tone1": {
    "char": "💇🏻",
    "slug": "person_getting_haircut_tone1",
    "category": "people",
    "isAlternative": true
  },
  "person_getting_haircut_tone2": {
    "char": "💇🏼",
    "slug": "person_getting_haircut_tone2",
    "category": "people"
  },
  "haircut_tone2": {
    "char": "💇🏼",
    "slug": "person_getting_haircut_tone2",
    "category": "people",
    "isAlternative": true
  },
  "person_getting_haircut_tone3": {
    "char": "💇🏽",
    "slug": "person_getting_haircut_tone3",
    "category": "people"
  },
  "haircut_tone3": {
    "char": "💇🏽",
    "slug": "person_getting_haircut_tone3",
    "category": "people",
    "isAlternative": true
  },
  "person_getting_haircut_tone4": {
    "char": "💇🏾",
    "slug": "person_getting_haircut_tone4",
    "category": "people"
  },
  "haircut_tone4": {
    "char": "💇🏾",
    "slug": "person_getting_haircut_tone4",
    "category": "people",
    "isAlternative": true
  },
  "person_getting_haircut_tone5": {
    "char": "💇🏿",
    "slug": "person_getting_haircut_tone5",
    "category": "people"
  },
  "haircut_tone5": {
    "char": "💇🏿",
    "slug": "person_getting_haircut_tone5",
    "category": "people",
    "isAlternative": true
  },
  "woman_getting_haircut": {
    "char": "💇‍♀️",
    "slug": "woman_getting_haircut",
    "category": "people"
  },
  "woman_getting_haircut_tone1": {
    "char": "💇🏻‍♀️",
    "slug": "woman_getting_haircut_tone1",
    "category": "people"
  },
  "woman_getting_haircut_light_skin_tone": {
    "char": "💇🏻‍♀️",
    "slug": "woman_getting_haircut_tone1",
    "category": "people",
    "isAlternative": true
  },
  "woman_getting_haircut_tone2": {
    "char": "💇🏼‍♀️",
    "slug": "woman_getting_haircut_tone2",
    "category": "people"
  },
  "woman_getting_haircut_medium_light_skin_tone": {
    "char": "💇🏼‍♀️",
    "slug": "woman_getting_haircut_tone2",
    "category": "people",
    "isAlternative": true
  },
  "woman_getting_haircut_tone3": {
    "char": "💇🏽‍♀️",
    "slug": "woman_getting_haircut_tone3",
    "category": "people"
  },
  "woman_getting_haircut_medium_skin_tone": {
    "char": "💇🏽‍♀️",
    "slug": "woman_getting_haircut_tone3",
    "category": "people",
    "isAlternative": true
  },
  "woman_getting_haircut_tone4": {
    "char": "💇🏾‍♀️",
    "slug": "woman_getting_haircut_tone4",
    "category": "people"
  },
  "woman_getting_haircut_medium_dark_skin_tone": {
    "char": "💇🏾‍♀️",
    "slug": "woman_getting_haircut_tone4",
    "category": "people",
    "isAlternative": true
  },
  "woman_getting_haircut_tone5": {
    "char": "💇🏿‍♀️",
    "slug": "woman_getting_haircut_tone5",
    "category": "people"
  },
  "woman_getting_haircut_dark_skin_tone": {
    "char": "💇🏿‍♀️",
    "slug": "woman_getting_haircut_tone5",
    "category": "people",
    "isAlternative": true
  },
  "man_getting_haircut": {
    "char": "💇‍♂️",
    "slug": "man_getting_haircut",
    "category": "people"
  },
  "man_getting_haircut_tone1": {
    "char": "💇🏻‍♂️",
    "slug": "man_getting_haircut_tone1",
    "category": "people"
  },
  "man_getting_haircut_light_skin_tone": {
    "char": "💇🏻‍♂️",
    "slug": "man_getting_haircut_tone1",
    "category": "people",
    "isAlternative": true
  },
  "man_getting_haircut_tone2": {
    "char": "💇🏼‍♂️",
    "slug": "man_getting_haircut_tone2",
    "category": "people"
  },
  "man_getting_haircut_medium_light_skin_tone": {
    "char": "💇🏼‍♂️",
    "slug": "man_getting_haircut_tone2",
    "category": "people",
    "isAlternative": true
  },
  "man_getting_haircut_tone3": {
    "char": "💇🏽‍♂️",
    "slug": "man_getting_haircut_tone3",
    "category": "people"
  },
  "man_getting_haircut_medium_skin_tone": {
    "char": "💇🏽‍♂️",
    "slug": "man_getting_haircut_tone3",
    "category": "people",
    "isAlternative": true
  },
  "man_getting_haircut_tone4": {
    "char": "💇🏾‍♂️",
    "slug": "man_getting_haircut_tone4",
    "category": "people"
  },
  "man_getting_haircut_medium_dark_skin_tone": {
    "char": "💇🏾‍♂️",
    "slug": "man_getting_haircut_tone4",
    "category": "people",
    "isAlternative": true
  },
  "man_getting_haircut_tone5": {
    "char": "💇🏿‍♂️",
    "slug": "man_getting_haircut_tone5",
    "category": "people"
  },
  "man_getting_haircut_dark_skin_tone": {
    "char": "💇🏿‍♂️",
    "slug": "man_getting_haircut_tone5",
    "category": "people",
    "isAlternative": true
  },
  "person_getting_massage": {
    "char": "💆",
    "slug": "person_getting_massage",
    "category": "people"
  },
  "massage": {
    "char": "💆",
    "slug": "person_getting_massage",
    "category": "people",
    "isAlternative": true
  },
  "person_getting_massage_tone1": {
    "char": "💆🏻",
    "slug": "person_getting_massage_tone1",
    "category": "people"
  },
  "massage_tone1": {
    "char": "💆🏻",
    "slug": "person_getting_massage_tone1",
    "category": "people",
    "isAlternative": true
  },
  "person_getting_massage_tone2": {
    "char": "💆🏼",
    "slug": "person_getting_massage_tone2",
    "category": "people"
  },
  "massage_tone2": {
    "char": "💆🏼",
    "slug": "person_getting_massage_tone2",
    "category": "people",
    "isAlternative": true
  },
  "person_getting_massage_tone3": {
    "char": "💆🏽",
    "slug": "person_getting_massage_tone3",
    "category": "people"
  },
  "massage_tone3": {
    "char": "💆🏽",
    "slug": "person_getting_massage_tone3",
    "category": "people",
    "isAlternative": true
  },
  "person_getting_massage_tone4": {
    "char": "💆🏾",
    "slug": "person_getting_massage_tone4",
    "category": "people"
  },
  "massage_tone4": {
    "char": "💆🏾",
    "slug": "person_getting_massage_tone4",
    "category": "people",
    "isAlternative": true
  },
  "person_getting_massage_tone5": {
    "char": "💆🏿",
    "slug": "person_getting_massage_tone5",
    "category": "people"
  },
  "massage_tone5": {
    "char": "💆🏿",
    "slug": "person_getting_massage_tone5",
    "category": "people",
    "isAlternative": true
  },
  "woman_getting_face_massage": {
    "char": "💆‍♀️",
    "slug": "woman_getting_face_massage",
    "category": "people"
  },
  "woman_getting_face_massage_tone1": {
    "char": "💆🏻‍♀️",
    "slug": "woman_getting_face_massage_tone1",
    "category": "people"
  },
  "woman_getting_face_massage_light_skin_tone": {
    "char": "💆🏻‍♀️",
    "slug": "woman_getting_face_massage_tone1",
    "category": "people",
    "isAlternative": true
  },
  "woman_getting_face_massage_tone2": {
    "char": "💆🏼‍♀️",
    "slug": "woman_getting_face_massage_tone2",
    "category": "people"
  },
  "woman_getting_face_massage_medium_light_skin_tone": {
    "char": "💆🏼‍♀️",
    "slug": "woman_getting_face_massage_tone2",
    "category": "people",
    "isAlternative": true
  },
  "woman_getting_face_massage_tone3": {
    "char": "💆🏽‍♀️",
    "slug": "woman_getting_face_massage_tone3",
    "category": "people"
  },
  "woman_getting_face_massage_medium_skin_tone": {
    "char": "💆🏽‍♀️",
    "slug": "woman_getting_face_massage_tone3",
    "category": "people",
    "isAlternative": true
  },
  "woman_getting_face_massage_tone4": {
    "char": "💆🏾‍♀️",
    "slug": "woman_getting_face_massage_tone4",
    "category": "people"
  },
  "woman_getting_face_massage_medium_dark_skin_tone": {
    "char": "💆🏾‍♀️",
    "slug": "woman_getting_face_massage_tone4",
    "category": "people",
    "isAlternative": true
  },
  "woman_getting_face_massage_tone5": {
    "char": "💆🏿‍♀️",
    "slug": "woman_getting_face_massage_tone5",
    "category": "people"
  },
  "woman_getting_face_massage_dark_skin_tone": {
    "char": "💆🏿‍♀️",
    "slug": "woman_getting_face_massage_tone5",
    "category": "people",
    "isAlternative": true
  },
  "man_getting_face_massage": {
    "char": "💆‍♂️",
    "slug": "man_getting_face_massage",
    "category": "people"
  },
  "man_getting_face_massage_tone1": {
    "char": "💆🏻‍♂️",
    "slug": "man_getting_face_massage_tone1",
    "category": "people"
  },
  "man_getting_face_massage_light_skin_tone": {
    "char": "💆🏻‍♂️",
    "slug": "man_getting_face_massage_tone1",
    "category": "people",
    "isAlternative": true
  },
  "man_getting_face_massage_tone2": {
    "char": "💆🏼‍♂️",
    "slug": "man_getting_face_massage_tone2",
    "category": "people"
  },
  "man_getting_face_massage_medium_light_skin_tone": {
    "char": "💆🏼‍♂️",
    "slug": "man_getting_face_massage_tone2",
    "category": "people",
    "isAlternative": true
  },
  "man_getting_face_massage_tone3": {
    "char": "💆🏽‍♂️",
    "slug": "man_getting_face_massage_tone3",
    "category": "people"
  },
  "man_getting_face_massage_medium_skin_tone": {
    "char": "💆🏽‍♂️",
    "slug": "man_getting_face_massage_tone3",
    "category": "people",
    "isAlternative": true
  },
  "man_getting_face_massage_tone4": {
    "char": "💆🏾‍♂️",
    "slug": "man_getting_face_massage_tone4",
    "category": "people"
  },
  "man_getting_face_massage_medium_dark_skin_tone": {
    "char": "💆🏾‍♂️",
    "slug": "man_getting_face_massage_tone4",
    "category": "people",
    "isAlternative": true
  },
  "man_getting_face_massage_tone5": {
    "char": "💆🏿‍♂️",
    "slug": "man_getting_face_massage_tone5",
    "category": "people"
  },
  "man_getting_face_massage_dark_skin_tone": {
    "char": "💆🏿‍♂️",
    "slug": "man_getting_face_massage_tone5",
    "category": "people",
    "isAlternative": true
  },
  "person_in_steamy_room": {
    "char": "🧖",
    "slug": "person_in_steamy_room",
    "category": "people"
  },
  "person_in_steamy_room_tone1": {
    "char": "🧖🏻",
    "slug": "person_in_steamy_room_tone1",
    "category": "people"
  },
  "person_in_steamy_room_light_skin_tone": {
    "char": "🧖🏻",
    "slug": "person_in_steamy_room_tone1",
    "category": "people",
    "isAlternative": true
  },
  "person_in_steamy_room_tone2": {
    "char": "🧖🏼",
    "slug": "person_in_steamy_room_tone2",
    "category": "people"
  },
  "person_in_steamy_room_medium_light_skin_tone": {
    "char": "🧖🏼",
    "slug": "person_in_steamy_room_tone2",
    "category": "people",
    "isAlternative": true
  },
  "person_in_steamy_room_tone3": {
    "char": "🧖🏽",
    "slug": "person_in_steamy_room_tone3",
    "category": "people"
  },
  "person_in_steamy_room_medium_skin_tone": {
    "char": "🧖🏽",
    "slug": "person_in_steamy_room_tone3",
    "category": "people",
    "isAlternative": true
  },
  "person_in_steamy_room_tone4": {
    "char": "🧖🏾",
    "slug": "person_in_steamy_room_tone4",
    "category": "people"
  },
  "person_in_steamy_room_medium_dark_skin_tone": {
    "char": "🧖🏾",
    "slug": "person_in_steamy_room_tone4",
    "category": "people",
    "isAlternative": true
  },
  "person_in_steamy_room_tone5": {
    "char": "🧖🏿",
    "slug": "person_in_steamy_room_tone5",
    "category": "people"
  },
  "person_in_steamy_room_dark_skin_tone": {
    "char": "🧖🏿",
    "slug": "person_in_steamy_room_tone5",
    "category": "people",
    "isAlternative": true
  },
  "woman_in_steamy_room": {
    "char": "🧖‍♀️",
    "slug": "woman_in_steamy_room",
    "category": "people"
  },
  "woman_in_steamy_room_tone1": {
    "char": "🧖🏻‍♀️",
    "slug": "woman_in_steamy_room_tone1",
    "category": "people"
  },
  "woman_in_steamy_room_light_skin_tone": {
    "char": "🧖🏻‍♀️",
    "slug": "woman_in_steamy_room_tone1",
    "category": "people",
    "isAlternative": true
  },
  "woman_in_steamy_room_tone2": {
    "char": "🧖🏼‍♀️",
    "slug": "woman_in_steamy_room_tone2",
    "category": "people"
  },
  "woman_in_steamy_room_medium_light_skin_tone": {
    "char": "🧖🏼‍♀️",
    "slug": "woman_in_steamy_room_tone2",
    "category": "people",
    "isAlternative": true
  },
  "woman_in_steamy_room_tone3": {
    "char": "🧖🏽‍♀️",
    "slug": "woman_in_steamy_room_tone3",
    "category": "people"
  },
  "woman_in_steamy_room_medium_skin_tone": {
    "char": "🧖🏽‍♀️",
    "slug": "woman_in_steamy_room_tone3",
    "category": "people",
    "isAlternative": true
  },
  "woman_in_steamy_room_tone4": {
    "char": "🧖🏾‍♀️",
    "slug": "woman_in_steamy_room_tone4",
    "category": "people"
  },
  "woman_in_steamy_room_medium_dark_skin_tone": {
    "char": "🧖🏾‍♀️",
    "slug": "woman_in_steamy_room_tone4",
    "category": "people",
    "isAlternative": true
  },
  "woman_in_steamy_room_tone5": {
    "char": "🧖🏿‍♀️",
    "slug": "woman_in_steamy_room_tone5",
    "category": "people"
  },
  "woman_in_steamy_room_dark_skin_tone": {
    "char": "🧖🏿‍♀️",
    "slug": "woman_in_steamy_room_tone5",
    "category": "people",
    "isAlternative": true
  },
  "man_in_steamy_room": {
    "char": "🧖‍♂️",
    "slug": "man_in_steamy_room",
    "category": "people"
  },
  "man_in_steamy_room_tone1": {
    "char": "🧖🏻‍♂️",
    "slug": "man_in_steamy_room_tone1",
    "category": "people"
  },
  "man_in_steamy_room_light_skin_tone": {
    "char": "🧖🏻‍♂️",
    "slug": "man_in_steamy_room_tone1",
    "category": "people",
    "isAlternative": true
  },
  "man_in_steamy_room_tone2": {
    "char": "🧖🏼‍♂️",
    "slug": "man_in_steamy_room_tone2",
    "category": "people"
  },
  "man_in_steamy_room_medium_light_skin_tone": {
    "char": "🧖🏼‍♂️",
    "slug": "man_in_steamy_room_tone2",
    "category": "people",
    "isAlternative": true
  },
  "man_in_steamy_room_tone3": {
    "char": "🧖🏽‍♂️",
    "slug": "man_in_steamy_room_tone3",
    "category": "people"
  },
  "man_in_steamy_room_medium_skin_tone": {
    "char": "🧖🏽‍♂️",
    "slug": "man_in_steamy_room_tone3",
    "category": "people",
    "isAlternative": true
  },
  "man_in_steamy_room_tone4": {
    "char": "🧖🏾‍♂️",
    "slug": "man_in_steamy_room_tone4",
    "category": "people"
  },
  "man_in_steamy_room_medium_dark_skin_tone": {
    "char": "🧖🏾‍♂️",
    "slug": "man_in_steamy_room_tone4",
    "category": "people",
    "isAlternative": true
  },
  "man_in_steamy_room_tone5": {
    "char": "🧖🏿‍♂️",
    "slug": "man_in_steamy_room_tone5",
    "category": "people"
  },
  "man_in_steamy_room_dark_skin_tone": {
    "char": "🧖🏿‍♂️",
    "slug": "man_in_steamy_room_tone5",
    "category": "people",
    "isAlternative": true
  },
  "nail_care": { "char": "💅", "slug": "nail_care", "category": "people" },
  "nail_polish": {
    "char": "💅",
    "slug": "nail_care",
    "category": "people",
    "isAlternative": true
  },
  "nail_care_tone1": {
    "char": "💅🏻",
    "slug": "nail_care_tone1",
    "category": "people"
  },
  "nail_care_tone2": {
    "char": "💅🏼",
    "slug": "nail_care_tone2",
    "category": "people"
  },
  "nail_care_tone3": {
    "char": "💅🏽",
    "slug": "nail_care_tone3",
    "category": "people"
  },
  "nail_care_tone4": {
    "char": "💅🏾",
    "slug": "nail_care_tone4",
    "category": "people"
  },
  "nail_care_tone5": {
    "char": "💅🏿",
    "slug": "nail_care_tone5",
    "category": "people"
  },
  "selfie": { "char": "🤳", "slug": "selfie", "category": "people" },
  "selfie_tone1": {
    "char": "🤳🏻",
    "slug": "selfie_tone1",
    "category": "people"
  },
  "selfie_tone2": {
    "char": "🤳🏼",
    "slug": "selfie_tone2",
    "category": "people"
  },
  "selfie_tone3": {
    "char": "🤳🏽",
    "slug": "selfie_tone3",
    "category": "people"
  },
  "selfie_tone4": {
    "char": "🤳🏾",
    "slug": "selfie_tone4",
    "category": "people"
  },
  "selfie_tone5": {
    "char": "🤳🏿",
    "slug": "selfie_tone5",
    "category": "people"
  },
  "dancer": { "char": "💃", "slug": "dancer", "category": "people" },
  "woman_dancing": {
    "char": "💃",
    "slug": "dancer",
    "category": "people",
    "isAlternative": true
  },
  "dancer_tone1": {
    "char": "💃🏻",
    "slug": "dancer_tone1",
    "category": "people"
  },
  "dancer_tone2": {
    "char": "💃🏼",
    "slug": "dancer_tone2",
    "category": "people"
  },
  "dancer_tone3": {
    "char": "💃🏽",
    "slug": "dancer_tone3",
    "category": "people"
  },
  "dancer_tone4": {
    "char": "💃🏾",
    "slug": "dancer_tone4",
    "category": "people"
  },
  "dancer_tone5": {
    "char": "💃🏿",
    "slug": "dancer_tone5",
    "category": "people"
  },
  "man_dancing": { "char": "🕺", "slug": "man_dancing", "category": "people" },
  "male_dancer": {
    "char": "🕺",
    "slug": "man_dancing",
    "category": "people",
    "isAlternative": true
  },
  "man_dancing_tone1": {
    "char": "🕺🏻",
    "slug": "man_dancing_tone1",
    "category": "people"
  },
  "male_dancer_tone1": {
    "char": "🕺🏻",
    "slug": "man_dancing_tone1",
    "category": "people",
    "isAlternative": true
  },
  "man_dancing_tone2": {
    "char": "🕺🏼",
    "slug": "man_dancing_tone2",
    "category": "people"
  },
  "male_dancer_tone2": {
    "char": "🕺🏼",
    "slug": "man_dancing_tone2",
    "category": "people",
    "isAlternative": true
  },
  "man_dancing_tone3": {
    "char": "🕺🏽",
    "slug": "man_dancing_tone3",
    "category": "people"
  },
  "male_dancer_tone3": {
    "char": "🕺🏽",
    "slug": "man_dancing_tone3",
    "category": "people",
    "isAlternative": true
  },
  "man_dancing_tone5": {
    "char": "🕺🏿",
    "slug": "man_dancing_tone5",
    "category": "people"
  },
  "male_dancer_tone5": {
    "char": "🕺🏿",
    "slug": "man_dancing_tone5",
    "category": "people",
    "isAlternative": true
  },
  "man_dancing_tone4": {
    "char": "🕺🏾",
    "slug": "man_dancing_tone4",
    "category": "people"
  },
  "male_dancer_tone4": {
    "char": "🕺🏾",
    "slug": "man_dancing_tone4",
    "category": "people",
    "isAlternative": true
  },
  "people_with_bunny_ears_partying": {
    "char": "👯",
    "slug": "people_with_bunny_ears_partying",
    "category": "people"
  },
  "dancers": {
    "char": "👯",
    "slug": "people_with_bunny_ears_partying",
    "category": "people",
    "isAlternative": true
  },
  "women_with_bunny_ears_partying": {
    "char": "👯‍♀️",
    "slug": "women_with_bunny_ears_partying",
    "category": "people"
  },
  "men_with_bunny_ears_partying": {
    "char": "👯‍♂️",
    "slug": "men_with_bunny_ears_partying",
    "category": "people"
  },
  "levitate": { "char": "🕴️", "slug": "levitate", "category": "people" },
  "man_in_business_suit_levitating": {
    "char": "🕴️",
    "slug": "levitate",
    "category": "people",
    "isAlternative": true
  },
  "levitate_tone1": {
    "char": "🕴🏻",
    "slug": "levitate_tone1",
    "category": "people"
  },
  "man_in_business_suit_levitating_tone1": {
    "char": "🕴🏻",
    "slug": "levitate_tone1",
    "category": "people",
    "isAlternative": true
  },
  "man_in_business_suit_levitating_light_skin_tone": {
    "char": "🕴🏻",
    "slug": "levitate_tone1",
    "category": "people",
    "isAlternative": true
  },
  "levitate_tone2": {
    "char": "🕴🏼",
    "slug": "levitate_tone2",
    "category": "people"
  },
  "man_in_business_suit_levitating_tone2": {
    "char": "🕴🏼",
    "slug": "levitate_tone2",
    "category": "people",
    "isAlternative": true
  },
  "man_in_business_suit_levitating_medium_light_skin_tone": {
    "char": "🕴🏼",
    "slug": "levitate_tone2",
    "category": "people",
    "isAlternative": true
  },
  "levitate_tone3": {
    "char": "🕴🏽",
    "slug": "levitate_tone3",
    "category": "people"
  },
  "man_in_business_suit_levitating_tone3": {
    "char": "🕴🏽",
    "slug": "levitate_tone3",
    "category": "people",
    "isAlternative": true
  },
  "man_in_business_suit_levitating_medium_skin_tone": {
    "char": "🕴🏽",
    "slug": "levitate_tone3",
    "category": "people",
    "isAlternative": true
  },
  "levitate_tone4": {
    "char": "🕴🏾",
    "slug": "levitate_tone4",
    "category": "people"
  },
  "man_in_business_suit_levitating_tone4": {
    "char": "🕴🏾",
    "slug": "levitate_tone4",
    "category": "people",
    "isAlternative": true
  },
  "man_in_business_suit_levitating_medium_dark_skin_tone": {
    "char": "🕴🏾",
    "slug": "levitate_tone4",
    "category": "people",
    "isAlternative": true
  },
  "levitate_tone5": {
    "char": "🕴🏿",
    "slug": "levitate_tone5",
    "category": "people"
  },
  "man_in_business_suit_levitating_tone5": {
    "char": "🕴🏿",
    "slug": "levitate_tone5",
    "category": "people",
    "isAlternative": true
  },
  "man_in_business_suit_levitating_dark_skin_tone": {
    "char": "🕴🏿",
    "slug": "levitate_tone5",
    "category": "people",
    "isAlternative": true
  },
  "person_in_manual_wheelchair": {
    "char": "🧑‍🦽",
    "slug": "person_in_manual_wheelchair",
    "category": "people"
  },
  "person_in_manual_wheelchair_tone1": {
    "char": "🧑🏻‍🦽",
    "slug": "person_in_manual_wheelchair_tone1",
    "category": "people"
  },
  "person_in_manual_wheelchair_light_skin_tone": {
    "char": "🧑🏻‍🦽",
    "slug": "person_in_manual_wheelchair_tone1",
    "category": "people",
    "isAlternative": true
  },
  "person_in_manual_wheelchair_tone2": {
    "char": "🧑🏼‍🦽",
    "slug": "person_in_manual_wheelchair_tone2",
    "category": "people"
  },
  "person_in_manual_wheelchair_medium_light_skin_tone": {
    "char": "🧑🏼‍🦽",
    "slug": "person_in_manual_wheelchair_tone2",
    "category": "people",
    "isAlternative": true
  },
  "person_in_manual_wheelchair_tone3": {
    "char": "🧑🏽‍🦽",
    "slug": "person_in_manual_wheelchair_tone3",
    "category": "people"
  },
  "person_in_manual_wheelchair_medium_skin_tone": {
    "char": "🧑🏽‍🦽",
    "slug": "person_in_manual_wheelchair_tone3",
    "category": "people",
    "isAlternative": true
  },
  "person_in_manual_wheelchair_tone4": {
    "char": "🧑🏾‍🦽",
    "slug": "person_in_manual_wheelchair_tone4",
    "category": "people"
  },
  "person_in_manual_wheelchair_medium_dark_skin_tone": {
    "char": "🧑🏾‍🦽",
    "slug": "person_in_manual_wheelchair_tone4",
    "category": "people",
    "isAlternative": true
  },
  "person_in_manual_wheelchair_tone5": {
    "char": "🧑🏿‍🦽",
    "slug": "person_in_manual_wheelchair_tone5",
    "category": "people"
  },
  "person_in_manual_wheelchair_dark_skin_tone": {
    "char": "🧑🏿‍🦽",
    "slug": "person_in_manual_wheelchair_tone5",
    "category": "people",
    "isAlternative": true
  },
  "woman_in_manual_wheelchair": {
    "char": "👩‍🦽",
    "slug": "woman_in_manual_wheelchair",
    "category": "people"
  },
  "woman_in_manual_wheelchair_tone1": {
    "char": "👩🏻‍🦽",
    "slug": "woman_in_manual_wheelchair_tone1",
    "category": "people"
  },
  "woman_in_manual_wheelchair_light_skin_tone": {
    "char": "👩🏻‍🦽",
    "slug": "woman_in_manual_wheelchair_tone1",
    "category": "people",
    "isAlternative": true
  },
  "woman_in_manual_wheelchair_tone2": {
    "char": "👩🏼‍🦽",
    "slug": "woman_in_manual_wheelchair_tone2",
    "category": "people"
  },
  "woman_in_manual_wheelchair_medium_light_skin_tone": {
    "char": "👩🏼‍🦽",
    "slug": "woman_in_manual_wheelchair_tone2",
    "category": "people",
    "isAlternative": true
  },
  "woman_in_manual_wheelchair_tone3": {
    "char": "👩🏽‍🦽",
    "slug": "woman_in_manual_wheelchair_tone3",
    "category": "people"
  },
  "woman_in_manual_wheelchair_medium_skin_tone": {
    "char": "👩🏽‍🦽",
    "slug": "woman_in_manual_wheelchair_tone3",
    "category": "people",
    "isAlternative": true
  },
  "woman_in_manual_wheelchair_tone4": {
    "char": "👩🏾‍🦽",
    "slug": "woman_in_manual_wheelchair_tone4",
    "category": "people"
  },
  "woman_in_manual_wheelchair_medium_dark_skin_tone": {
    "char": "👩🏾‍🦽",
    "slug": "woman_in_manual_wheelchair_tone4",
    "category": "people",
    "isAlternative": true
  },
  "woman_in_manual_wheelchair_tone5": {
    "char": "👩🏿‍🦽",
    "slug": "woman_in_manual_wheelchair_tone5",
    "category": "people"
  },
  "woman_in_manual_wheelchair_dark_skin_tone": {
    "char": "👩🏿‍🦽",
    "slug": "woman_in_manual_wheelchair_tone5",
    "category": "people",
    "isAlternative": true
  },
  "man_in_manual_wheelchair": {
    "char": "👨‍🦽",
    "slug": "man_in_manual_wheelchair",
    "category": "people"
  },
  "man_in_manual_wheelchair_tone1": {
    "char": "👨🏻‍🦽",
    "slug": "man_in_manual_wheelchair_tone1",
    "category": "people"
  },
  "man_in_manual_wheelchair_light_skin_tone": {
    "char": "👨🏻‍🦽",
    "slug": "man_in_manual_wheelchair_tone1",
    "category": "people",
    "isAlternative": true
  },
  "man_in_manual_wheelchair_tone2": {
    "char": "👨🏼‍🦽",
    "slug": "man_in_manual_wheelchair_tone2",
    "category": "people"
  },
  "man_in_manual_wheelchair_medium_light_skin_tone": {
    "char": "👨🏼‍🦽",
    "slug": "man_in_manual_wheelchair_tone2",
    "category": "people",
    "isAlternative": true
  },
  "man_in_manual_wheelchair_tone3": {
    "char": "👨🏽‍🦽",
    "slug": "man_in_manual_wheelchair_tone3",
    "category": "people"
  },
  "man_in_manual_wheelchair_medium_skin_tone": {
    "char": "👨🏽‍🦽",
    "slug": "man_in_manual_wheelchair_tone3",
    "category": "people",
    "isAlternative": true
  },
  "man_in_manual_wheelchair_tone4": {
    "char": "👨🏾‍🦽",
    "slug": "man_in_manual_wheelchair_tone4",
    "category": "people"
  },
  "man_in_manual_wheelchair_medium_dark_skin_tone": {
    "char": "👨🏾‍🦽",
    "slug": "man_in_manual_wheelchair_tone4",
    "category": "people",
    "isAlternative": true
  },
  "man_in_manual_wheelchair_tone5": {
    "char": "👨🏿‍🦽",
    "slug": "man_in_manual_wheelchair_tone5",
    "category": "people"
  },
  "man_in_manual_wheelchair_dark_skin_tone": {
    "char": "👨🏿‍🦽",
    "slug": "man_in_manual_wheelchair_tone5",
    "category": "people",
    "isAlternative": true
  },
  "person_in_motorized_wheelchair": {
    "char": "🧑‍🦼",
    "slug": "person_in_motorized_wheelchair",
    "category": "people"
  },
  "person_in_motorized_wheelchair_tone1": {
    "char": "🧑🏻‍🦼",
    "slug": "person_in_motorized_wheelchair_tone1",
    "category": "people"
  },
  "person_in_motorized_wheelchair_light_skin_tone": {
    "char": "🧑🏻‍🦼",
    "slug": "person_in_motorized_wheelchair_tone1",
    "category": "people",
    "isAlternative": true
  },
  "person_in_motorized_wheelchair_tone2": {
    "char": "🧑🏼‍🦼",
    "slug": "person_in_motorized_wheelchair_tone2",
    "category": "people"
  },
  "person_in_motorized_wheelchair_medium_light_skin_tone": {
    "char": "🧑🏼‍🦼",
    "slug": "person_in_motorized_wheelchair_tone2",
    "category": "people",
    "isAlternative": true
  },
  "person_in_motorized_wheelchair_tone3": {
    "char": "🧑🏽‍🦼",
    "slug": "person_in_motorized_wheelchair_tone3",
    "category": "people"
  },
  "person_in_motorized_wheelchair_medium_skin_tone": {
    "char": "🧑🏽‍🦼",
    "slug": "person_in_motorized_wheelchair_tone3",
    "category": "people",
    "isAlternative": true
  },
  "person_in_motorized_wheelchair_tone4": {
    "char": "🧑🏾‍🦼",
    "slug": "person_in_motorized_wheelchair_tone4",
    "category": "people"
  },
  "person_in_motorized_wheelchair_medium_dark_skin_tone": {
    "char": "🧑🏾‍🦼",
    "slug": "person_in_motorized_wheelchair_tone4",
    "category": "people",
    "isAlternative": true
  },
  "person_in_motorized_wheelchair_tone5": {
    "char": "🧑🏿‍🦼",
    "slug": "person_in_motorized_wheelchair_tone5",
    "category": "people"
  },
  "person_in_motorized_wheelchair_dark_skin_tone": {
    "char": "🧑🏿‍🦼",
    "slug": "person_in_motorized_wheelchair_tone5",
    "category": "people",
    "isAlternative": true
  },
  "woman_in_motorized_wheelchair": {
    "char": "👩‍🦼",
    "slug": "woman_in_motorized_wheelchair",
    "category": "people"
  },
  "woman_in_motorized_wheelchair_tone1": {
    "char": "👩🏻‍🦼",
    "slug": "woman_in_motorized_wheelchair_tone1",
    "category": "people"
  },
  "woman_in_motorized_wheelchair_light_skin_tone": {
    "char": "👩🏻‍🦼",
    "slug": "woman_in_motorized_wheelchair_tone1",
    "category": "people",
    "isAlternative": true
  },
  "woman_in_motorized_wheelchair_tone2": {
    "char": "👩🏼‍🦼",
    "slug": "woman_in_motorized_wheelchair_tone2",
    "category": "people"
  },
  "woman_in_motorized_wheelchair_medium_light_skin_tone": {
    "char": "👩🏼‍🦼",
    "slug": "woman_in_motorized_wheelchair_tone2",
    "category": "people",
    "isAlternative": true
  },
  "woman_in_motorized_wheelchair_tone3": {
    "char": "👩🏽‍🦼",
    "slug": "woman_in_motorized_wheelchair_tone3",
    "category": "people"
  },
  "woman_in_motorized_wheelchair_medium_skin_tone": {
    "char": "👩🏽‍🦼",
    "slug": "woman_in_motorized_wheelchair_tone3",
    "category": "people",
    "isAlternative": true
  },
  "woman_in_motorized_wheelchair_tone4": {
    "char": "👩🏾‍🦼",
    "slug": "woman_in_motorized_wheelchair_tone4",
    "category": "people"
  },
  "woman_in_motorized_wheelchair_medium_dark_skin_tone": {
    "char": "👩🏾‍🦼",
    "slug": "woman_in_motorized_wheelchair_tone4",
    "category": "people",
    "isAlternative": true
  },
  "woman_in_motorized_wheelchair_tone5": {
    "char": "👩🏿‍🦼",
    "slug": "woman_in_motorized_wheelchair_tone5",
    "category": "people"
  },
  "woman_in_motorized_wheelchair_dark_skin_tone": {
    "char": "👩🏿‍🦼",
    "slug": "woman_in_motorized_wheelchair_tone5",
    "category": "people",
    "isAlternative": true
  },
  "man_in_motorized_wheelchair": {
    "char": "👨‍🦼",
    "slug": "man_in_motorized_wheelchair",
    "category": "people"
  },
  "man_in_motorized_wheelchair_tone1": {
    "char": "👨🏻‍🦼",
    "slug": "man_in_motorized_wheelchair_tone1",
    "category": "people"
  },
  "man_in_motorized_wheelchair_light_skin_tone": {
    "char": "👨🏻‍🦼",
    "slug": "man_in_motorized_wheelchair_tone1",
    "category": "people",
    "isAlternative": true
  },
  "man_in_motorized_wheelchair_tone2": {
    "char": "👨🏼‍🦼",
    "slug": "man_in_motorized_wheelchair_tone2",
    "category": "people"
  },
  "man_in_motorized_wheelchair_medium_light_skin_tone": {
    "char": "👨🏼‍🦼",
    "slug": "man_in_motorized_wheelchair_tone2",
    "category": "people",
    "isAlternative": true
  },
  "man_in_motorized_wheelchair_tone3": {
    "char": "👨🏽‍🦼",
    "slug": "man_in_motorized_wheelchair_tone3",
    "category": "people"
  },
  "man_in_motorized_wheelchair_medium_skin_tone": {
    "char": "👨🏽‍🦼",
    "slug": "man_in_motorized_wheelchair_tone3",
    "category": "people",
    "isAlternative": true
  },
  "man_in_motorized_wheelchair_tone4": {
    "char": "👨🏾‍🦼",
    "slug": "man_in_motorized_wheelchair_tone4",
    "category": "people"
  },
  "man_in_motorized_wheelchair_medium_dark_skin_tone": {
    "char": "👨🏾‍🦼",
    "slug": "man_in_motorized_wheelchair_tone4",
    "category": "people",
    "isAlternative": true
  },
  "man_in_motorized_wheelchair_tone5": {
    "char": "👨🏿‍🦼",
    "slug": "man_in_motorized_wheelchair_tone5",
    "category": "people"
  },
  "man_in_motorized_wheelchair_dark_skin_tone": {
    "char": "👨🏿‍🦼",
    "slug": "man_in_motorized_wheelchair_tone5",
    "category": "people",
    "isAlternative": true
  },
  "person_walking": {
    "char": "🚶",
    "slug": "person_walking",
    "category": "people"
  },
  "walking": {
    "char": "🚶",
    "slug": "person_walking",
    "category": "people",
    "isAlternative": true
  },
  "person_walking_tone1": {
    "char": "🚶🏻",
    "slug": "person_walking_tone1",
    "category": "people"
  },
  "walking_tone1": {
    "char": "🚶🏻",
    "slug": "person_walking_tone1",
    "category": "people",
    "isAlternative": true
  },
  "person_walking_tone2": {
    "char": "🚶🏼",
    "slug": "person_walking_tone2",
    "category": "people"
  },
  "walking_tone2": {
    "char": "🚶🏼",
    "slug": "person_walking_tone2",
    "category": "people",
    "isAlternative": true
  },
  "person_walking_tone3": {
    "char": "🚶🏽",
    "slug": "person_walking_tone3",
    "category": "people"
  },
  "walking_tone3": {
    "char": "🚶🏽",
    "slug": "person_walking_tone3",
    "category": "people",
    "isAlternative": true
  },
  "person_walking_tone4": {
    "char": "🚶🏾",
    "slug": "person_walking_tone4",
    "category": "people"
  },
  "walking_tone4": {
    "char": "🚶🏾",
    "slug": "person_walking_tone4",
    "category": "people",
    "isAlternative": true
  },
  "person_walking_tone5": {
    "char": "🚶🏿",
    "slug": "person_walking_tone5",
    "category": "people"
  },
  "walking_tone5": {
    "char": "🚶🏿",
    "slug": "person_walking_tone5",
    "category": "people",
    "isAlternative": true
  },
  "woman_walking": {
    "char": "🚶‍♀️",
    "slug": "woman_walking",
    "category": "people"
  },
  "woman_walking_tone1": {
    "char": "🚶🏻‍♀️",
    "slug": "woman_walking_tone1",
    "category": "people"
  },
  "woman_walking_light_skin_tone": {
    "char": "🚶🏻‍♀️",
    "slug": "woman_walking_tone1",
    "category": "people",
    "isAlternative": true
  },
  "woman_walking_tone2": {
    "char": "🚶🏼‍♀️",
    "slug": "woman_walking_tone2",
    "category": "people"
  },
  "woman_walking_medium_light_skin_tone": {
    "char": "🚶🏼‍♀️",
    "slug": "woman_walking_tone2",
    "category": "people",
    "isAlternative": true
  },
  "woman_walking_tone3": {
    "char": "🚶🏽‍♀️",
    "slug": "woman_walking_tone3",
    "category": "people"
  },
  "woman_walking_medium_skin_tone": {
    "char": "🚶🏽‍♀️",
    "slug": "woman_walking_tone3",
    "category": "people",
    "isAlternative": true
  },
  "woman_walking_tone4": {
    "char": "🚶🏾‍♀️",
    "slug": "woman_walking_tone4",
    "category": "people"
  },
  "woman_walking_medium_dark_skin_tone": {
    "char": "🚶🏾‍♀️",
    "slug": "woman_walking_tone4",
    "category": "people",
    "isAlternative": true
  },
  "woman_walking_tone5": {
    "char": "🚶🏿‍♀️",
    "slug": "woman_walking_tone5",
    "category": "people"
  },
  "woman_walking_dark_skin_tone": {
    "char": "🚶🏿‍♀️",
    "slug": "woman_walking_tone5",
    "category": "people",
    "isAlternative": true
  },
  "man_walking": { "char": "🚶‍♂️", "slug": "man_walking", "category": "people" },
  "man_walking_tone1": {
    "char": "🚶🏻‍♂️",
    "slug": "man_walking_tone1",
    "category": "people"
  },
  "man_walking_light_skin_tone": {
    "char": "🚶🏻‍♂️",
    "slug": "man_walking_tone1",
    "category": "people",
    "isAlternative": true
  },
  "man_walking_tone2": {
    "char": "🚶🏼‍♂️",
    "slug": "man_walking_tone2",
    "category": "people"
  },
  "man_walking_medium_light_skin_tone": {
    "char": "🚶🏼‍♂️",
    "slug": "man_walking_tone2",
    "category": "people",
    "isAlternative": true
  },
  "man_walking_tone3": {
    "char": "🚶🏽‍♂️",
    "slug": "man_walking_tone3",
    "category": "people"
  },
  "man_walking_medium_skin_tone": {
    "char": "🚶🏽‍♂️",
    "slug": "man_walking_tone3",
    "category": "people",
    "isAlternative": true
  },
  "man_walking_tone4": {
    "char": "🚶🏾‍♂️",
    "slug": "man_walking_tone4",
    "category": "people"
  },
  "man_walking_medium_dark_skin_tone": {
    "char": "🚶🏾‍♂️",
    "slug": "man_walking_tone4",
    "category": "people",
    "isAlternative": true
  },
  "man_walking_tone5": {
    "char": "🚶🏿‍♂️",
    "slug": "man_walking_tone5",
    "category": "people"
  },
  "man_walking_dark_skin_tone": {
    "char": "🚶🏿‍♂️",
    "slug": "man_walking_tone5",
    "category": "people",
    "isAlternative": true
  },
  "person_with_probing_cane": {
    "char": "🧑‍🦯",
    "slug": "person_with_probing_cane",
    "category": "people"
  },
  "person_with_probing_cane_tone1": {
    "char": "🧑🏻‍🦯",
    "slug": "person_with_probing_cane_tone1",
    "category": "people"
  },
  "person_with_probing_cane_light_skin_tone": {
    "char": "🧑🏻‍🦯",
    "slug": "person_with_probing_cane_tone1",
    "category": "people",
    "isAlternative": true
  },
  "person_with_probing_cane_tone2": {
    "char": "🧑🏼‍🦯",
    "slug": "person_with_probing_cane_tone2",
    "category": "people"
  },
  "person_with_probing_cane_medium_light_skin_tone": {
    "char": "🧑🏼‍🦯",
    "slug": "person_with_probing_cane_tone2",
    "category": "people",
    "isAlternative": true
  },
  "person_with_probing_cane_tone3": {
    "char": "🧑🏽‍🦯",
    "slug": "person_with_probing_cane_tone3",
    "category": "people"
  },
  "person_with_probing_cane_medium_skin_tone": {
    "char": "🧑🏽‍🦯",
    "slug": "person_with_probing_cane_tone3",
    "category": "people",
    "isAlternative": true
  },
  "person_with_probing_cane_tone4": {
    "char": "🧑🏾‍🦯",
    "slug": "person_with_probing_cane_tone4",
    "category": "people"
  },
  "person_with_probing_cane_medium_dark_skin_tone": {
    "char": "🧑🏾‍🦯",
    "slug": "person_with_probing_cane_tone4",
    "category": "people",
    "isAlternative": true
  },
  "person_with_probing_cane_tone5": {
    "char": "🧑🏿‍🦯",
    "slug": "person_with_probing_cane_tone5",
    "category": "people"
  },
  "person_with_probing_cane_dark_skin_tone": {
    "char": "🧑🏿‍🦯",
    "slug": "person_with_probing_cane_tone5",
    "category": "people",
    "isAlternative": true
  },
  "woman_with_probing_cane": {
    "char": "👩‍🦯",
    "slug": "woman_with_probing_cane",
    "category": "people"
  },
  "woman_with_probing_cane_tone1": {
    "char": "👩🏻‍🦯",
    "slug": "woman_with_probing_cane_tone1",
    "category": "people"
  },
  "woman_with_probing_cane_light_skin_tone": {
    "char": "👩🏻‍🦯",
    "slug": "woman_with_probing_cane_tone1",
    "category": "people",
    "isAlternative": true
  },
  "woman_with_probing_cane_tone2": {
    "char": "👩🏼‍🦯",
    "slug": "woman_with_probing_cane_tone2",
    "category": "people"
  },
  "woman_with_probing_cane_medium_light_skin_tone": {
    "char": "👩🏼‍🦯",
    "slug": "woman_with_probing_cane_tone2",
    "category": "people",
    "isAlternative": true
  },
  "woman_with_probing_cane_tone3": {
    "char": "👩🏽‍🦯",
    "slug": "woman_with_probing_cane_tone3",
    "category": "people"
  },
  "woman_with_probing_cane_medium_skin_tone": {
    "char": "👩🏽‍🦯",
    "slug": "woman_with_probing_cane_tone3",
    "category": "people",
    "isAlternative": true
  },
  "woman_with_probing_cane_tone4": {
    "char": "👩🏾‍🦯",
    "slug": "woman_with_probing_cane_tone4",
    "category": "people"
  },
  "woman_with_probing_cane_medium_dark_skin_tone": {
    "char": "👩🏾‍🦯",
    "slug": "woman_with_probing_cane_tone4",
    "category": "people",
    "isAlternative": true
  },
  "woman_with_probing_cane_tone5": {
    "char": "👩🏿‍🦯",
    "slug": "woman_with_probing_cane_tone5",
    "category": "people"
  },
  "woman_with_probing_cane_dark_skin_tone": {
    "char": "👩🏿‍🦯",
    "slug": "woman_with_probing_cane_tone5",
    "category": "people",
    "isAlternative": true
  },
  "man_with_probing_cane": {
    "char": "👨‍🦯",
    "slug": "man_with_probing_cane",
    "category": "people"
  },
  "man_with_probing_cane_tone1": {
    "char": "👨🏻‍🦯",
    "slug": "man_with_probing_cane_tone1",
    "category": "people"
  },
  "man_with_probing_cane_light_skin_tone": {
    "char": "👨🏻‍🦯",
    "slug": "man_with_probing_cane_tone1",
    "category": "people",
    "isAlternative": true
  },
  "man_with_probing_cane_tone2": {
    "char": "👨🏼‍🦯",
    "slug": "man_with_probing_cane_tone2",
    "category": "people"
  },
  "man_with_probing_cane_medium_light_skin_tone": {
    "char": "👨🏼‍🦯",
    "slug": "man_with_probing_cane_tone2",
    "category": "people",
    "isAlternative": true
  },
  "man_with_probing_cane_tone3": {
    "char": "👨🏽‍🦯",
    "slug": "man_with_probing_cane_tone3",
    "category": "people"
  },
  "man_with_probing_cane_medium_skin_tone": {
    "char": "👨🏽‍🦯",
    "slug": "man_with_probing_cane_tone3",
    "category": "people",
    "isAlternative": true
  },
  "man_with_probing_cane_tone4": {
    "char": "👨🏾‍🦯",
    "slug": "man_with_probing_cane_tone4",
    "category": "people"
  },
  "man_with_probing_cane_medium_dark_skin_tone": {
    "char": "👨🏾‍🦯",
    "slug": "man_with_probing_cane_tone4",
    "category": "people",
    "isAlternative": true
  },
  "man_with_probing_cane_tone5": {
    "char": "👨🏿‍🦯",
    "slug": "man_with_probing_cane_tone5",
    "category": "people"
  },
  "man_with_probing_cane_dark_skin_tone": {
    "char": "👨🏿‍🦯",
    "slug": "man_with_probing_cane_tone5",
    "category": "people",
    "isAlternative": true
  },
  "person_kneeling": {
    "char": "🧎",
    "slug": "person_kneeling",
    "category": "people"
  },
  "person_kneeling_tone1": {
    "char": "🧎🏻",
    "slug": "person_kneeling_tone1",
    "category": "people"
  },
  "person_kneeling_light_skin_tone": {
    "char": "🧎🏻",
    "slug": "person_kneeling_tone1",
    "category": "people",
    "isAlternative": true
  },
  "person_kneeling_tone2": {
    "char": "🧎🏼",
    "slug": "person_kneeling_tone2",
    "category": "people"
  },
  "person_kneeling_medium_light_skin_tone": {
    "char": "🧎🏼",
    "slug": "person_kneeling_tone2",
    "category": "people",
    "isAlternative": true
  },
  "person_kneeling_tone3": {
    "char": "🧎🏽",
    "slug": "person_kneeling_tone3",
    "category": "people"
  },
  "person_kneeling_medium_skin_tone": {
    "char": "🧎🏽",
    "slug": "person_kneeling_tone3",
    "category": "people",
    "isAlternative": true
  },
  "person_kneeling_tone4": {
    "char": "🧎🏾",
    "slug": "person_kneeling_tone4",
    "category": "people"
  },
  "person_kneeling_medium_dark_skin_tone": {
    "char": "🧎🏾",
    "slug": "person_kneeling_tone4",
    "category": "people",
    "isAlternative": true
  },
  "person_kneeling_tone5": {
    "char": "🧎🏿",
    "slug": "person_kneeling_tone5",
    "category": "people"
  },
  "person_kneeling_dark_skin_tone": {
    "char": "🧎🏿",
    "slug": "person_kneeling_tone5",
    "category": "people",
    "isAlternative": true
  },
  "woman_kneeling": {
    "char": "🧎‍♀️",
    "slug": "woman_kneeling",
    "category": "people"
  },
  "woman_kneeling_tone1": {
    "char": "🧎🏻‍♀️",
    "slug": "woman_kneeling_tone1",
    "category": "people"
  },
  "woman_kneeling_light_skin_tone": {
    "char": "🧎🏻‍♀️",
    "slug": "woman_kneeling_tone1",
    "category": "people",
    "isAlternative": true
  },
  "woman_kneeling_tone2": {
    "char": "🧎🏼‍♀️",
    "slug": "woman_kneeling_tone2",
    "category": "people"
  },
  "woman_kneeling_medium_light_skin_tone": {
    "char": "🧎🏼‍♀️",
    "slug": "woman_kneeling_tone2",
    "category": "people",
    "isAlternative": true
  },
  "woman_kneeling_tone3": {
    "char": "🧎🏽‍♀️",
    "slug": "woman_kneeling_tone3",
    "category": "people"
  },
  "woman_kneeling_medium_skin_tone": {
    "char": "🧎🏽‍♀️",
    "slug": "woman_kneeling_tone3",
    "category": "people",
    "isAlternative": true
  },
  "woman_kneeling_tone4": {
    "char": "🧎🏾‍♀️",
    "slug": "woman_kneeling_tone4",
    "category": "people"
  },
  "woman_kneeling_medium_dark_skin_tone": {
    "char": "🧎🏾‍♀️",
    "slug": "woman_kneeling_tone4",
    "category": "people",
    "isAlternative": true
  },
  "woman_kneeling_tone5": {
    "char": "🧎🏿‍♀️",
    "slug": "woman_kneeling_tone5",
    "category": "people"
  },
  "woman_kneeling_dark_skin_tone": {
    "char": "🧎🏿‍♀️",
    "slug": "woman_kneeling_tone5",
    "category": "people",
    "isAlternative": true
  },
  "man_kneeling": {
    "char": "🧎‍♂️",
    "slug": "man_kneeling",
    "category": "people"
  },
  "man_kneeling_tone1": {
    "char": "🧎🏻‍♂️",
    "slug": "man_kneeling_tone1",
    "category": "people"
  },
  "man_kneeling_light_skin_tone": {
    "char": "🧎🏻‍♂️",
    "slug": "man_kneeling_tone1",
    "category": "people",
    "isAlternative": true
  },
  "man_kneeling_tone2": {
    "char": "🧎🏼‍♂️",
    "slug": "man_kneeling_tone2",
    "category": "people"
  },
  "man_kneeling_medium_light_skin_tone": {
    "char": "🧎🏼‍♂️",
    "slug": "man_kneeling_tone2",
    "category": "people",
    "isAlternative": true
  },
  "man_kneeling_tone3": {
    "char": "🧎🏽‍♂️",
    "slug": "man_kneeling_tone3",
    "category": "people"
  },
  "man_kneeling_medium_skin_tone": {
    "char": "🧎🏽‍♂️",
    "slug": "man_kneeling_tone3",
    "category": "people",
    "isAlternative": true
  },
  "man_kneeling_tone4": {
    "char": "🧎🏾‍♂️",
    "slug": "man_kneeling_tone4",
    "category": "people"
  },
  "man_kneeling_medium_dark_skin_tone": {
    "char": "🧎🏾‍♂️",
    "slug": "man_kneeling_tone4",
    "category": "people",
    "isAlternative": true
  },
  "man_kneeling_tone5": {
    "char": "🧎🏿‍♂️",
    "slug": "man_kneeling_tone5",
    "category": "people"
  },
  "man_kneeling_dark_skin_tone": {
    "char": "🧎🏿‍♂️",
    "slug": "man_kneeling_tone5",
    "category": "people",
    "isAlternative": true
  },
  "person_running": {
    "char": "🏃",
    "slug": "person_running",
    "category": "people"
  },
  "runner": {
    "char": "🏃",
    "slug": "person_running",
    "category": "people",
    "isAlternative": true
  },
  "person_running_tone1": {
    "char": "🏃🏻",
    "slug": "person_running_tone1",
    "category": "people"
  },
  "runner_tone1": {
    "char": "🏃🏻",
    "slug": "person_running_tone1",
    "category": "people",
    "isAlternative": true
  },
  "person_running_tone2": {
    "char": "🏃🏼",
    "slug": "person_running_tone2",
    "category": "people"
  },
  "runner_tone2": {
    "char": "🏃🏼",
    "slug": "person_running_tone2",
    "category": "people",
    "isAlternative": true
  },
  "person_running_tone3": {
    "char": "🏃🏽",
    "slug": "person_running_tone3",
    "category": "people"
  },
  "runner_tone3": {
    "char": "🏃🏽",
    "slug": "person_running_tone3",
    "category": "people",
    "isAlternative": true
  },
  "person_running_tone4": {
    "char": "🏃🏾",
    "slug": "person_running_tone4",
    "category": "people"
  },
  "runner_tone4": {
    "char": "🏃🏾",
    "slug": "person_running_tone4",
    "category": "people",
    "isAlternative": true
  },
  "person_running_tone5": {
    "char": "🏃🏿",
    "slug": "person_running_tone5",
    "category": "people"
  },
  "runner_tone5": {
    "char": "🏃🏿",
    "slug": "person_running_tone5",
    "category": "people",
    "isAlternative": true
  },
  "woman_running": {
    "char": "🏃‍♀️",
    "slug": "woman_running",
    "category": "people"
  },
  "woman_running_tone1": {
    "char": "🏃🏻‍♀️",
    "slug": "woman_running_tone1",
    "category": "people"
  },
  "woman_running_light_skin_tone": {
    "char": "🏃🏻‍♀️",
    "slug": "woman_running_tone1",
    "category": "people",
    "isAlternative": true
  },
  "woman_running_tone2": {
    "char": "🏃🏼‍♀️",
    "slug": "woman_running_tone2",
    "category": "people"
  },
  "woman_running_medium_light_skin_tone": {
    "char": "🏃🏼‍♀️",
    "slug": "woman_running_tone2",
    "category": "people",
    "isAlternative": true
  },
  "woman_running_tone3": {
    "char": "🏃🏽‍♀️",
    "slug": "woman_running_tone3",
    "category": "people"
  },
  "woman_running_medium_skin_tone": {
    "char": "🏃🏽‍♀️",
    "slug": "woman_running_tone3",
    "category": "people",
    "isAlternative": true
  },
  "woman_running_tone4": {
    "char": "🏃🏾‍♀️",
    "slug": "woman_running_tone4",
    "category": "people"
  },
  "woman_running_medium_dark_skin_tone": {
    "char": "🏃🏾‍♀️",
    "slug": "woman_running_tone4",
    "category": "people",
    "isAlternative": true
  },
  "woman_running_tone5": {
    "char": "🏃🏿‍♀️",
    "slug": "woman_running_tone5",
    "category": "people"
  },
  "woman_running_dark_skin_tone": {
    "char": "🏃🏿‍♀️",
    "slug": "woman_running_tone5",
    "category": "people",
    "isAlternative": true
  },
  "man_running": { "char": "🏃‍♂️", "slug": "man_running", "category": "people" },
  "man_running_tone1": {
    "char": "🏃🏻‍♂️",
    "slug": "man_running_tone1",
    "category": "people"
  },
  "man_running_light_skin_tone": {
    "char": "🏃🏻‍♂️",
    "slug": "man_running_tone1",
    "category": "people",
    "isAlternative": true
  },
  "man_running_tone2": {
    "char": "🏃🏼‍♂️",
    "slug": "man_running_tone2",
    "category": "people"
  },
  "man_running_medium_light_skin_tone": {
    "char": "🏃🏼‍♂️",
    "slug": "man_running_tone2",
    "category": "people",
    "isAlternative": true
  },
  "man_running_tone3": {
    "char": "🏃🏽‍♂️",
    "slug": "man_running_tone3",
    "category": "people"
  },
  "man_running_medium_skin_tone": {
    "char": "🏃🏽‍♂️",
    "slug": "man_running_tone3",
    "category": "people",
    "isAlternative": true
  },
  "man_running_tone4": {
    "char": "🏃🏾‍♂️",
    "slug": "man_running_tone4",
    "category": "people"
  },
  "man_running_medium_dark_skin_tone": {
    "char": "🏃🏾‍♂️",
    "slug": "man_running_tone4",
    "category": "people",
    "isAlternative": true
  },
  "man_running_tone5": {
    "char": "🏃🏿‍♂️",
    "slug": "man_running_tone5",
    "category": "people"
  },
  "man_running_dark_skin_tone": {
    "char": "🏃🏿‍♂️",
    "slug": "man_running_tone5",
    "category": "people",
    "isAlternative": true
  },
  "person_standing": {
    "char": "🧍",
    "slug": "person_standing",
    "category": "people"
  },
  "person_standing_tone1": {
    "char": "🧍🏻",
    "slug": "person_standing_tone1",
    "category": "people"
  },
  "person_standing_light_skin_tone": {
    "char": "🧍🏻",
    "slug": "person_standing_tone1",
    "category": "people",
    "isAlternative": true
  },
  "person_standing_tone2": {
    "char": "🧍🏼",
    "slug": "person_standing_tone2",
    "category": "people"
  },
  "person_standing_medium_light_skin_tone": {
    "char": "🧍🏼",
    "slug": "person_standing_tone2",
    "category": "people",
    "isAlternative": true
  },
  "person_standing_tone3": {
    "char": "🧍🏽",
    "slug": "person_standing_tone3",
    "category": "people"
  },
  "person_standing_medium_skin_tone": {
    "char": "🧍🏽",
    "slug": "person_standing_tone3",
    "category": "people",
    "isAlternative": true
  },
  "person_standing_tone4": {
    "char": "🧍🏾",
    "slug": "person_standing_tone4",
    "category": "people"
  },
  "person_standing_medium_dark_skin_tone": {
    "char": "🧍🏾",
    "slug": "person_standing_tone4",
    "category": "people",
    "isAlternative": true
  },
  "person_standing_tone5": {
    "char": "🧍🏿",
    "slug": "person_standing_tone5",
    "category": "people"
  },
  "person_standing_dark_skin_tone": {
    "char": "🧍🏿",
    "slug": "person_standing_tone5",
    "category": "people",
    "isAlternative": true
  },
  "woman_standing": {
    "char": "🧍‍♀️",
    "slug": "woman_standing",
    "category": "people"
  },
  "woman_standing_tone1": {
    "char": "🧍🏻‍♀️",
    "slug": "woman_standing_tone1",
    "category": "people"
  },
  "woman_standing_light_skin_tone": {
    "char": "🧍🏻‍♀️",
    "slug": "woman_standing_tone1",
    "category": "people",
    "isAlternative": true
  },
  "woman_standing_tone2": {
    "char": "🧍🏼‍♀️",
    "slug": "woman_standing_tone2",
    "category": "people"
  },
  "woman_standing_medium_light_skin_tone": {
    "char": "🧍🏼‍♀️",
    "slug": "woman_standing_tone2",
    "category": "people",
    "isAlternative": true
  },
  "woman_standing_tone3": {
    "char": "🧍🏽‍♀️",
    "slug": "woman_standing_tone3",
    "category": "people"
  },
  "woman_standing_medium_skin_tone": {
    "char": "🧍🏽‍♀️",
    "slug": "woman_standing_tone3",
    "category": "people",
    "isAlternative": true
  },
  "woman_standing_tone4": {
    "char": "🧍🏾‍♀️",
    "slug": "woman_standing_tone4",
    "category": "people"
  },
  "woman_standing_medium_dark_skin_tone": {
    "char": "🧍🏾‍♀️",
    "slug": "woman_standing_tone4",
    "category": "people",
    "isAlternative": true
  },
  "woman_standing_tone5": {
    "char": "🧍🏿‍♀️",
    "slug": "woman_standing_tone5",
    "category": "people"
  },
  "woman_standing_dark_skin_tone": {
    "char": "🧍🏿‍♀️",
    "slug": "woman_standing_tone5",
    "category": "people",
    "isAlternative": true
  },
  "man_standing": {
    "char": "🧍‍♂️",
    "slug": "man_standing",
    "category": "people"
  },
  "man_standing_tone1": {
    "char": "🧍🏻‍♂️",
    "slug": "man_standing_tone1",
    "category": "people"
  },
  "man_standing_light_skin_tone": {
    "char": "🧍🏻‍♂️",
    "slug": "man_standing_tone1",
    "category": "people",
    "isAlternative": true
  },
  "man_standing_tone2": {
    "char": "🧍🏼‍♂️",
    "slug": "man_standing_tone2",
    "category": "people"
  },
  "man_standing_medium_light_skin_tone": {
    "char": "🧍🏼‍♂️",
    "slug": "man_standing_tone2",
    "category": "people",
    "isAlternative": true
  },
  "man_standing_tone3": {
    "char": "🧍🏽‍♂️",
    "slug": "man_standing_tone3",
    "category": "people"
  },
  "man_standing_medium_skin_tone": {
    "char": "🧍🏽‍♂️",
    "slug": "man_standing_tone3",
    "category": "people",
    "isAlternative": true
  },
  "man_standing_tone4": {
    "char": "🧍🏾‍♂️",
    "slug": "man_standing_tone4",
    "category": "people"
  },
  "man_standing_medium_dark_skin_tone": {
    "char": "🧍🏾‍♂️",
    "slug": "man_standing_tone4",
    "category": "people",
    "isAlternative": true
  },
  "man_standing_tone5": {
    "char": "🧍🏿‍♂️",
    "slug": "man_standing_tone5",
    "category": "people"
  },
  "man_standing_dark_skin_tone": {
    "char": "🧍🏿‍♂️",
    "slug": "man_standing_tone5",
    "category": "people",
    "isAlternative": true
  },
  "people_holding_hands": {
    "char": "🧑‍🤝‍🧑",
    "slug": "people_holding_hands",
    "category": "people"
  },
  "people_holding_hands_tone1": {
    "char": "🧑🏻‍🤝‍🧑🏻",
    "slug": "people_holding_hands_tone1",
    "category": "people"
  },
  "people_holding_hands_light_skin_tone": {
    "char": "🧑🏻‍🤝‍🧑🏻",
    "slug": "people_holding_hands_tone1",
    "category": "people",
    "isAlternative": true
  },
  "people_holding_hands_tone1_tone2": {
    "char": "🧑🏻‍🤝‍🧑🏼",
    "slug": "people_holding_hands_tone1_tone2",
    "category": "people"
  },
  "people_holding_hands_light_skin_tone_medium_light_skin_tone": {
    "char": "🧑🏻‍🤝‍🧑🏼",
    "slug": "people_holding_hands_tone1_tone2",
    "category": "people",
    "isAlternative": true
  },
  "people_holding_hands_tone1_tone3": {
    "char": "🧑🏻‍🤝‍🧑🏽",
    "slug": "people_holding_hands_tone1_tone3",
    "category": "people"
  },
  "people_holding_hands_light_skin_tone_medium_skin_tone": {
    "char": "🧑🏻‍🤝‍🧑🏽",
    "slug": "people_holding_hands_tone1_tone3",
    "category": "people",
    "isAlternative": true
  },
  "people_holding_hands_tone1_tone4": {
    "char": "🧑🏻‍🤝‍🧑🏾",
    "slug": "people_holding_hands_tone1_tone4",
    "category": "people"
  },
  "people_holding_hands_light_skin_tone_medium_dark_skin_tone": {
    "char": "🧑🏻‍🤝‍🧑🏾",
    "slug": "people_holding_hands_tone1_tone4",
    "category": "people",
    "isAlternative": true
  },
  "people_holding_hands_tone1_tone5": {
    "char": "🧑🏻‍🤝‍🧑🏿",
    "slug": "people_holding_hands_tone1_tone5",
    "category": "people"
  },
  "people_holding_hands_light_skin_tone_dark_skin_tone": {
    "char": "🧑🏻‍🤝‍🧑🏿",
    "slug": "people_holding_hands_tone1_tone5",
    "category": "people",
    "isAlternative": true
  },
  "people_holding_hands_tone2_tone1": {
    "char": "🧑🏼‍🤝‍🧑🏻",
    "slug": "people_holding_hands_tone2_tone1",
    "category": "people"
  },
  "people_holding_hands_medium_light_skin_tone_light_skin_tone": {
    "char": "🧑🏼‍🤝‍🧑🏻",
    "slug": "people_holding_hands_tone2_tone1",
    "category": "people",
    "isAlternative": true
  },
  "people_holding_hands_tone2": {
    "char": "🧑🏼‍🤝‍🧑🏼",
    "slug": "people_holding_hands_tone2",
    "category": "people"
  },
  "people_holding_hands_medium_light_skin_tone": {
    "char": "🧑🏼‍🤝‍🧑🏼",
    "slug": "people_holding_hands_tone2",
    "category": "people",
    "isAlternative": true
  },
  "people_holding_hands_tone2_tone3": {
    "char": "🧑🏼‍🤝‍🧑🏽",
    "slug": "people_holding_hands_tone2_tone3",
    "category": "people"
  },
  "people_holding_hands_medium_light_skin_tone_medium_skin_tone": {
    "char": "🧑🏼‍🤝‍🧑🏽",
    "slug": "people_holding_hands_tone2_tone3",
    "category": "people",
    "isAlternative": true
  },
  "people_holding_hands_tone2_tone4": {
    "char": "🧑🏼‍🤝‍🧑🏾",
    "slug": "people_holding_hands_tone2_tone4",
    "category": "people"
  },
  "people_holding_hands_medium_light_skin_tone_medium_dark_skin_tone": {
    "char": "🧑🏼‍🤝‍🧑🏾",
    "slug": "people_holding_hands_tone2_tone4",
    "category": "people",
    "isAlternative": true
  },
  "people_holding_hands_tone2_tone5": {
    "char": "🧑🏼‍🤝‍🧑🏿",
    "slug": "people_holding_hands_tone2_tone5",
    "category": "people"
  },
  "people_holding_hands_medium_light_skin_tone_dark_skin_tone": {
    "char": "🧑🏼‍🤝‍🧑🏿",
    "slug": "people_holding_hands_tone2_tone5",
    "category": "people",
    "isAlternative": true
  },
  "people_holding_hands_tone3_tone1": {
    "char": "🧑🏽‍🤝‍🧑🏻",
    "slug": "people_holding_hands_tone3_tone1",
    "category": "people"
  },
  "people_holding_hands_medium_skin_tone_light_skin_tone": {
    "char": "🧑🏽‍🤝‍🧑🏻",
    "slug": "people_holding_hands_tone3_tone1",
    "category": "people",
    "isAlternative": true
  },
  "people_holding_hands_tone3_tone2": {
    "char": "🧑🏽‍🤝‍🧑🏼",
    "slug": "people_holding_hands_tone3_tone2",
    "category": "people"
  },
  "people_holding_hands_medium_skin_tone_medium_light_skin_tone": {
    "char": "🧑🏽‍🤝‍🧑🏼",
    "slug": "people_holding_hands_tone3_tone2",
    "category": "people",
    "isAlternative": true
  },
  "people_holding_hands_tone3": {
    "char": "🧑🏽‍🤝‍🧑🏽",
    "slug": "people_holding_hands_tone3",
    "category": "people"
  },
  "people_holding_hands_medium_skin_tone": {
    "char": "🧑🏽‍🤝‍🧑🏽",
    "slug": "people_holding_hands_tone3",
    "category": "people",
    "isAlternative": true
  },
  "people_holding_hands_tone3_tone4": {
    "char": "🧑🏽‍🤝‍🧑🏾",
    "slug": "people_holding_hands_tone3_tone4",
    "category": "people"
  },
  "people_holding_hands_medium_skin_tone_medium_dark_skin_tone": {
    "char": "🧑🏽‍🤝‍🧑🏾",
    "slug": "people_holding_hands_tone3_tone4",
    "category": "people",
    "isAlternative": true
  },
  "people_holding_hands_tone3_tone5": {
    "char": "🧑🏽‍🤝‍🧑🏿",
    "slug": "people_holding_hands_tone3_tone5",
    "category": "people"
  },
  "people_holding_hands_medium_skin_tone_dark_skin_tone": {
    "char": "🧑🏽‍🤝‍🧑🏿",
    "slug": "people_holding_hands_tone3_tone5",
    "category": "people",
    "isAlternative": true
  },
  "people_holding_hands_tone4_tone1": {
    "char": "🧑🏾‍🤝‍🧑🏻",
    "slug": "people_holding_hands_tone4_tone1",
    "category": "people"
  },
  "people_holding_hands_medium_dark_skin_tone_light_skin_tone": {
    "char": "🧑🏾‍🤝‍🧑🏻",
    "slug": "people_holding_hands_tone4_tone1",
    "category": "people",
    "isAlternative": true
  },
  "people_holding_hands_tone4_tone2": {
    "char": "🧑🏾‍🤝‍🧑🏼",
    "slug": "people_holding_hands_tone4_tone2",
    "category": "people"
  },
  "people_holding_hands_medium_dark_skin_tone_medium_light_skin_tone": {
    "char": "🧑🏾‍🤝‍🧑🏼",
    "slug": "people_holding_hands_tone4_tone2",
    "category": "people",
    "isAlternative": true
  },
  "people_holding_hands_tone4_tone3": {
    "char": "🧑🏾‍🤝‍🧑🏽",
    "slug": "people_holding_hands_tone4_tone3",
    "category": "people"
  },
  "people_holding_hands_medium_dark_skin_tone_medium_skin_tone": {
    "char": "🧑🏾‍🤝‍🧑🏽",
    "slug": "people_holding_hands_tone4_tone3",
    "category": "people",
    "isAlternative": true
  },
  "people_holding_hands_tone4": {
    "char": "🧑🏾‍🤝‍🧑🏾",
    "slug": "people_holding_hands_tone4",
    "category": "people"
  },
  "people_holding_hands_medium_dark_skin_tone": {
    "char": "🧑🏾‍🤝‍🧑🏾",
    "slug": "people_holding_hands_tone4",
    "category": "people",
    "isAlternative": true
  },
  "people_holding_hands_tone4_tone5": {
    "char": "🧑🏾‍🤝‍🧑🏿",
    "slug": "people_holding_hands_tone4_tone5",
    "category": "people"
  },
  "people_holding_hands_medium_dark_skin_tone_dark_skin_tone": {
    "char": "🧑🏾‍🤝‍🧑🏿",
    "slug": "people_holding_hands_tone4_tone5",
    "category": "people",
    "isAlternative": true
  },
  "people_holding_hands_tone5_tone1": {
    "char": "🧑🏿‍🤝‍🧑🏻",
    "slug": "people_holding_hands_tone5_tone1",
    "category": "people"
  },
  "people_holding_hands_dark_skin_tone_light_skin_tone": {
    "char": "🧑🏿‍🤝‍🧑🏻",
    "slug": "people_holding_hands_tone5_tone1",
    "category": "people",
    "isAlternative": true
  },
  "people_holding_hands_tone5_tone2": {
    "char": "🧑🏿‍🤝‍🧑🏼",
    "slug": "people_holding_hands_tone5_tone2",
    "category": "people"
  },
  "people_holding_hands_dark_skin_tone_medium_light_skin_tone": {
    "char": "🧑🏿‍🤝‍🧑🏼",
    "slug": "people_holding_hands_tone5_tone2",
    "category": "people",
    "isAlternative": true
  },
  "people_holding_hands_tone5_tone3": {
    "char": "🧑🏿‍🤝‍🧑🏽",
    "slug": "people_holding_hands_tone5_tone3",
    "category": "people"
  },
  "people_holding_hands_dark_skin_tone_medium_skin_tone": {
    "char": "🧑🏿‍🤝‍🧑🏽",
    "slug": "people_holding_hands_tone5_tone3",
    "category": "people",
    "isAlternative": true
  },
  "people_holding_hands_tone5_tone4": {
    "char": "🧑🏿‍🤝‍🧑🏾",
    "slug": "people_holding_hands_tone5_tone4",
    "category": "people"
  },
  "people_holding_hands_dark_skin_tone_medium_dark_skin_tone": {
    "char": "🧑🏿‍🤝‍🧑🏾",
    "slug": "people_holding_hands_tone5_tone4",
    "category": "people",
    "isAlternative": true
  },
  "people_holding_hands_tone5": {
    "char": "🧑🏿‍🤝‍🧑🏿",
    "slug": "people_holding_hands_tone5",
    "category": "people"
  },
  "people_holding_hands_dark_skin_tone": {
    "char": "🧑🏿‍🤝‍🧑🏿",
    "slug": "people_holding_hands_tone5",
    "category": "people",
    "isAlternative": true
  },
  "couple": { "char": "👫", "slug": "couple", "category": "people" },
  "woman_and_man_holding_hands_tone1": {
    "char": "👫🏻",
    "slug": "woman_and_man_holding_hands_tone1",
    "category": "people"
  },
  "woman_and_man_holding_hands_light_skin_tone": {
    "char": "👫🏻",
    "slug": "woman_and_man_holding_hands_tone1",
    "category": "people",
    "isAlternative": true
  },
  "woman_and_man_holding_hands_tone1_tone2": {
    "char": "👩🏻‍🤝‍👨🏼",
    "slug": "woman_and_man_holding_hands_tone1_tone2",
    "category": "people"
  },
  "woman_and_man_holding_hands_light_skin_tone_medium_light_skin_tone": {
    "char": "👩🏻‍🤝‍👨🏼",
    "slug": "woman_and_man_holding_hands_tone1_tone2",
    "category": "people",
    "isAlternative": true
  },
  "woman_and_man_holding_hands_tone1_tone3": {
    "char": "👩🏻‍🤝‍👨🏽",
    "slug": "woman_and_man_holding_hands_tone1_tone3",
    "category": "people"
  },
  "woman_and_man_holding_hands_light_skin_tone_medium_skin_tone": {
    "char": "👩🏻‍🤝‍👨🏽",
    "slug": "woman_and_man_holding_hands_tone1_tone3",
    "category": "people",
    "isAlternative": true
  },
  "woman_and_man_holding_hands_tone1_tone4": {
    "char": "👩🏻‍🤝‍👨🏾",
    "slug": "woman_and_man_holding_hands_tone1_tone4",
    "category": "people"
  },
  "woman_and_man_holding_hands_light_skin_tone_medium_dark_skin_tone": {
    "char": "👩🏻‍🤝‍👨🏾",
    "slug": "woman_and_man_holding_hands_tone1_tone4",
    "category": "people",
    "isAlternative": true
  },
  "woman_and_man_holding_hands_tone1_tone5": {
    "char": "👩🏻‍🤝‍👨🏿",
    "slug": "woman_and_man_holding_hands_tone1_tone5",
    "category": "people"
  },
  "woman_and_man_holding_hands_light_skin_tone_dark_skin_tone": {
    "char": "👩🏻‍🤝‍👨🏿",
    "slug": "woman_and_man_holding_hands_tone1_tone5",
    "category": "people",
    "isAlternative": true
  },
  "woman_and_man_holding_hands_tone2_tone1": {
    "char": "👩🏼‍🤝‍👨🏻",
    "slug": "woman_and_man_holding_hands_tone2_tone1",
    "category": "people"
  },
  "woman_and_man_holding_hands_medium_light_skin_tone_light_skin_tone": {
    "char": "👩🏼‍🤝‍👨🏻",
    "slug": "woman_and_man_holding_hands_tone2_tone1",
    "category": "people",
    "isAlternative": true
  },
  "woman_and_man_holding_hands_tone2": {
    "char": "👫🏼",
    "slug": "woman_and_man_holding_hands_tone2",
    "category": "people"
  },
  "woman_and_man_holding_hands_medium_light_skin_tone": {
    "char": "👫🏼",
    "slug": "woman_and_man_holding_hands_tone2",
    "category": "people",
    "isAlternative": true
  },
  "woman_and_man_holding_hands_tone2_tone3": {
    "char": "👩🏼‍🤝‍👨🏽",
    "slug": "woman_and_man_holding_hands_tone2_tone3",
    "category": "people"
  },
  "woman_and_man_holding_hands_medium_light_skin_tone_medium_skin_tone": {
    "char": "👩🏼‍🤝‍👨🏽",
    "slug": "woman_and_man_holding_hands_tone2_tone3",
    "category": "people",
    "isAlternative": true
  },
  "woman_and_man_holding_hands_tone2_tone4": {
    "char": "👩🏼‍🤝‍👨🏾",
    "slug": "woman_and_man_holding_hands_tone2_tone4",
    "category": "people"
  },
  "woman_and_man_holding_hands_medium_light_skin_tone_medium_dark_skin_tone": {
    "char": "👩🏼‍🤝‍👨🏾",
    "slug": "woman_and_man_holding_hands_tone2_tone4",
    "category": "people",
    "isAlternative": true
  },
  "woman_and_man_holding_hands_tone2_tone5": {
    "char": "👩🏼‍🤝‍👨🏿",
    "slug": "woman_and_man_holding_hands_tone2_tone5",
    "category": "people"
  },
  "woman_and_man_holding_hands_medium_light_skin_tone_dark_skin_tone": {
    "char": "👩🏼‍🤝‍👨🏿",
    "slug": "woman_and_man_holding_hands_tone2_tone5",
    "category": "people",
    "isAlternative": true
  },
  "woman_and_man_holding_hands_tone3_tone1": {
    "char": "👩🏽‍🤝‍👨🏻",
    "slug": "woman_and_man_holding_hands_tone3_tone1",
    "category": "people"
  },
  "woman_and_man_holding_hands_medium_skin_tone_light_skin_tone": {
    "char": "👩🏽‍🤝‍👨🏻",
    "slug": "woman_and_man_holding_hands_tone3_tone1",
    "category": "people",
    "isAlternative": true
  },
  "woman_and_man_holding_hands_tone3_tone2": {
    "char": "👩🏽‍🤝‍👨🏼",
    "slug": "woman_and_man_holding_hands_tone3_tone2",
    "category": "people"
  },
  "woman_and_man_holding_hands_medium_skin_tone_medium_light_skin_tone": {
    "char": "👩🏽‍🤝‍👨🏼",
    "slug": "woman_and_man_holding_hands_tone3_tone2",
    "category": "people",
    "isAlternative": true
  },
  "woman_and_man_holding_hands_tone3": {
    "char": "👫🏽",
    "slug": "woman_and_man_holding_hands_tone3",
    "category": "people"
  },
  "woman_and_man_holding_hands_medium_skin_tone": {
    "char": "👫🏽",
    "slug": "woman_and_man_holding_hands_tone3",
    "category": "people",
    "isAlternative": true
  },
  "woman_and_man_holding_hands_tone3_tone4": {
    "char": "👩🏽‍🤝‍👨🏾",
    "slug": "woman_and_man_holding_hands_tone3_tone4",
    "category": "people"
  },
  "woman_and_man_holding_hands_medium_skin_tone_medium_dark_skin_tone": {
    "char": "👩🏽‍🤝‍👨🏾",
    "slug": "woman_and_man_holding_hands_tone3_tone4",
    "category": "people",
    "isAlternative": true
  },
  "woman_and_man_holding_hands_tone3_tone5": {
    "char": "👩🏽‍🤝‍👨🏿",
    "slug": "woman_and_man_holding_hands_tone3_tone5",
    "category": "people"
  },
  "woman_and_man_holding_hands_medium_skin_tone_dark_skin_tone": {
    "char": "👩🏽‍🤝‍👨🏿",
    "slug": "woman_and_man_holding_hands_tone3_tone5",
    "category": "people",
    "isAlternative": true
  },
  "woman_and_man_holding_hands_tone4_tone1": {
    "char": "👩🏾‍🤝‍👨🏻",
    "slug": "woman_and_man_holding_hands_tone4_tone1",
    "category": "people"
  },
  "woman_and_man_holding_hands_medium_dark_skin_tone_light_skin_tone": {
    "char": "👩🏾‍🤝‍👨🏻",
    "slug": "woman_and_man_holding_hands_tone4_tone1",
    "category": "people",
    "isAlternative": true
  },
  "woman_and_man_holding_hands_tone4_tone2": {
    "char": "👩🏾‍🤝‍👨🏼",
    "slug": "woman_and_man_holding_hands_tone4_tone2",
    "category": "people"
  },
  "woman_and_man_holding_hands_medium_dark_skin_tone_medium_light_skin_tone": {
    "char": "👩🏾‍🤝‍👨🏼",
    "slug": "woman_and_man_holding_hands_tone4_tone2",
    "category": "people",
    "isAlternative": true
  },
  "woman_and_man_holding_hands_tone4_tone3": {
    "char": "👩🏾‍🤝‍👨🏽",
    "slug": "woman_and_man_holding_hands_tone4_tone3",
    "category": "people"
  },
  "woman_and_man_holding_hands_medium_dark_skin_tone_medium_skin_tone": {
    "char": "👩🏾‍🤝‍👨🏽",
    "slug": "woman_and_man_holding_hands_tone4_tone3",
    "category": "people",
    "isAlternative": true
  },
  "woman_and_man_holding_hands_tone4": {
    "char": "👫🏾",
    "slug": "woman_and_man_holding_hands_tone4",
    "category": "people"
  },
  "woman_and_man_holding_hands_medium_dark_skin_tone": {
    "char": "👫🏾",
    "slug": "woman_and_man_holding_hands_tone4",
    "category": "people",
    "isAlternative": true
  },
  "woman_and_man_holding_hands_tone4_tone5": {
    "char": "👩🏾‍🤝‍👨🏿",
    "slug": "woman_and_man_holding_hands_tone4_tone5",
    "category": "people"
  },
  "woman_and_man_holding_hands_medium_dark_skin_tone_dark_skin_tone": {
    "char": "👩🏾‍🤝‍👨🏿",
    "slug": "woman_and_man_holding_hands_tone4_tone5",
    "category": "people",
    "isAlternative": true
  },
  "woman_and_man_holding_hands_tone5_tone1": {
    "char": "👩🏿‍🤝‍👨🏻",
    "slug": "woman_and_man_holding_hands_tone5_tone1",
    "category": "people"
  },
  "woman_and_man_holding_hands_dark_skin_tone_light_skin_tone": {
    "char": "👩🏿‍🤝‍👨🏻",
    "slug": "woman_and_man_holding_hands_tone5_tone1",
    "category": "people",
    "isAlternative": true
  },
  "woman_and_man_holding_hands_tone5_tone2": {
    "char": "👩🏿‍🤝‍👨🏼",
    "slug": "woman_and_man_holding_hands_tone5_tone2",
    "category": "people"
  },
  "woman_and_man_holding_hands_dark_skin_tone_medium_light_skin_tone": {
    "char": "👩🏿‍🤝‍👨🏼",
    "slug": "woman_and_man_holding_hands_tone5_tone2",
    "category": "people",
    "isAlternative": true
  },
  "woman_and_man_holding_hands_tone5_tone3": {
    "char": "👩🏿‍🤝‍👨🏽",
    "slug": "woman_and_man_holding_hands_tone5_tone3",
    "category": "people"
  },
  "woman_and_man_holding_hands_dark_skin_tone_medium_skin_tone": {
    "char": "👩🏿‍🤝‍👨🏽",
    "slug": "woman_and_man_holding_hands_tone5_tone3",
    "category": "people",
    "isAlternative": true
  },
  "woman_and_man_holding_hands_tone5_tone4": {
    "char": "👩🏿‍🤝‍👨🏾",
    "slug": "woman_and_man_holding_hands_tone5_tone4",
    "category": "people"
  },
  "woman_and_man_holding_hands_dark_skin_tone_medium_dark_skin_tone": {
    "char": "👩🏿‍🤝‍👨🏾",
    "slug": "woman_and_man_holding_hands_tone5_tone4",
    "category": "people",
    "isAlternative": true
  },
  "woman_and_man_holding_hands_tone5": {
    "char": "👫🏿",
    "slug": "woman_and_man_holding_hands_tone5",
    "category": "people"
  },
  "woman_and_man_holding_hands_dark_skin_tone": {
    "char": "👫🏿",
    "slug": "woman_and_man_holding_hands_tone5",
    "category": "people",
    "isAlternative": true
  },
  "two_women_holding_hands": {
    "char": "👭",
    "slug": "two_women_holding_hands",
    "category": "people"
  },
  "women_holding_hands_tone1": {
    "char": "👭🏻",
    "slug": "women_holding_hands_tone1",
    "category": "people"
  },
  "women_holding_hands_light_skin_tone": {
    "char": "👭🏻",
    "slug": "women_holding_hands_tone1",
    "category": "people",
    "isAlternative": true
  },
  "women_holding_hands_tone1_tone2": {
    "char": "👩🏻‍🤝‍👩🏼",
    "slug": "women_holding_hands_tone1_tone2",
    "category": "people"
  },
  "women_holding_hands_light_skin_tone_medium_light_skin_tone": {
    "char": "👩🏻‍🤝‍👩🏼",
    "slug": "women_holding_hands_tone1_tone2",
    "category": "people",
    "isAlternative": true
  },
  "women_holding_hands_tone1_tone3": {
    "char": "👩🏻‍🤝‍👩🏽",
    "slug": "women_holding_hands_tone1_tone3",
    "category": "people"
  },
  "women_holding_hands_light_skin_tone_medium_skin_tone": {
    "char": "👩🏻‍🤝‍👩🏽",
    "slug": "women_holding_hands_tone1_tone3",
    "category": "people",
    "isAlternative": true
  },
  "women_holding_hands_tone1_tone4": {
    "char": "👩🏻‍🤝‍👩🏾",
    "slug": "women_holding_hands_tone1_tone4",
    "category": "people"
  },
  "women_holding_hands_light_skin_tone_medium_dark_skin_tone": {
    "char": "👩🏻‍🤝‍👩🏾",
    "slug": "women_holding_hands_tone1_tone4",
    "category": "people",
    "isAlternative": true
  },
  "women_holding_hands_tone1_tone5": {
    "char": "👩🏻‍🤝‍👩🏿",
    "slug": "women_holding_hands_tone1_tone5",
    "category": "people"
  },
  "women_holding_hands_light_skin_tone_dark_skin_tone": {
    "char": "👩🏻‍🤝‍👩🏿",
    "slug": "women_holding_hands_tone1_tone5",
    "category": "people",
    "isAlternative": true
  },
  "women_holding_hands_tone2_tone1": {
    "char": "👩🏼‍🤝‍👩🏻",
    "slug": "women_holding_hands_tone2_tone1",
    "category": "people"
  },
  "women_holding_hands_medium_light_skin_tone_light_skin_tone": {
    "char": "👩🏼‍🤝‍👩🏻",
    "slug": "women_holding_hands_tone2_tone1",
    "category": "people",
    "isAlternative": true
  },
  "women_holding_hands_tone2": {
    "char": "👭🏼",
    "slug": "women_holding_hands_tone2",
    "category": "people"
  },
  "women_holding_hands_medium_light_skin_tone": {
    "char": "👭🏼",
    "slug": "women_holding_hands_tone2",
    "category": "people",
    "isAlternative": true
  },
  "women_holding_hands_tone2_tone3": {
    "char": "👩🏼‍🤝‍👩🏽",
    "slug": "women_holding_hands_tone2_tone3",
    "category": "people"
  },
  "women_holding_hands_medium_light_skin_tone_medium_skin_tone": {
    "char": "👩🏼‍🤝‍👩🏽",
    "slug": "women_holding_hands_tone2_tone3",
    "category": "people",
    "isAlternative": true
  },
  "women_holding_hands_tone2_tone4": {
    "char": "👩🏼‍🤝‍👩🏾",
    "slug": "women_holding_hands_tone2_tone4",
    "category": "people"
  },
  "women_holding_hands_medium_light_skin_tone_medium_dark_skin_tone": {
    "char": "👩🏼‍🤝‍👩🏾",
    "slug": "women_holding_hands_tone2_tone4",
    "category": "people",
    "isAlternative": true
  },
  "women_holding_hands_tone2_tone5": {
    "char": "👩🏼‍🤝‍👩🏿",
    "slug": "women_holding_hands_tone2_tone5",
    "category": "people"
  },
  "women_holding_hands_medium_light_skin_tone_dark_skin_tone": {
    "char": "👩🏼‍🤝‍👩🏿",
    "slug": "women_holding_hands_tone2_tone5",
    "category": "people",
    "isAlternative": true
  },
  "women_holding_hands_tone3_tone1": {
    "char": "👩🏽‍🤝‍👩🏻",
    "slug": "women_holding_hands_tone3_tone1",
    "category": "people"
  },
  "women_holding_hands_medium_skin_tone_light_skin_tone": {
    "char": "👩🏽‍🤝‍👩🏻",
    "slug": "women_holding_hands_tone3_tone1",
    "category": "people",
    "isAlternative": true
  },
  "women_holding_hands_tone3_tone2": {
    "char": "👩🏽‍🤝‍👩🏼",
    "slug": "women_holding_hands_tone3_tone2",
    "category": "people"
  },
  "women_holding_hands_medium_skin_tone_medium_light_skin_tone": {
    "char": "👩🏽‍🤝‍👩🏼",
    "slug": "women_holding_hands_tone3_tone2",
    "category": "people",
    "isAlternative": true
  },
  "women_holding_hands_tone3": {
    "char": "👭🏽",
    "slug": "women_holding_hands_tone3",
    "category": "people"
  },
  "women_holding_hands_medium_skin_tone": {
    "char": "👭🏽",
    "slug": "women_holding_hands_tone3",
    "category": "people",
    "isAlternative": true
  },
  "women_holding_hands_tone3_tone4": {
    "char": "👩🏽‍🤝‍👩🏾",
    "slug": "women_holding_hands_tone3_tone4",
    "category": "people"
  },
  "women_holding_hands_medium_skin_tone_medium_dark_skin_tone": {
    "char": "👩🏽‍🤝‍👩🏾",
    "slug": "women_holding_hands_tone3_tone4",
    "category": "people",
    "isAlternative": true
  },
  "women_holding_hands_tone3_tone5": {
    "char": "👩🏽‍🤝‍👩🏿",
    "slug": "women_holding_hands_tone3_tone5",
    "category": "people"
  },
  "women_holding_hands_medium_skin_tone_dark_skin_tone": {
    "char": "👩🏽‍🤝‍👩🏿",
    "slug": "women_holding_hands_tone3_tone5",
    "category": "people",
    "isAlternative": true
  },
  "women_holding_hands_tone4_tone1": {
    "char": "👩🏾‍🤝‍👩🏻",
    "slug": "women_holding_hands_tone4_tone1",
    "category": "people"
  },
  "women_holding_hands_medium_dark_skin_tone_light_skin_tone": {
    "char": "👩🏾‍🤝‍👩🏻",
    "slug": "women_holding_hands_tone4_tone1",
    "category": "people",
    "isAlternative": true
  },
  "women_holding_hands_tone4_tone2": {
    "char": "👩🏾‍🤝‍👩🏼",
    "slug": "women_holding_hands_tone4_tone2",
    "category": "people"
  },
  "women_holding_hands_medium_dark_skin_tone_medium_light_skin_tone": {
    "char": "👩🏾‍🤝‍👩🏼",
    "slug": "women_holding_hands_tone4_tone2",
    "category": "people",
    "isAlternative": true
  },
  "women_holding_hands_tone4_tone3": {
    "char": "👩🏾‍🤝‍👩🏽",
    "slug": "women_holding_hands_tone4_tone3",
    "category": "people"
  },
  "women_holding_hands_medium_dark_skin_tone_medium_skin_tone": {
    "char": "👩🏾‍🤝‍👩🏽",
    "slug": "women_holding_hands_tone4_tone3",
    "category": "people",
    "isAlternative": true
  },
  "women_holding_hands_tone4": {
    "char": "👭🏾",
    "slug": "women_holding_hands_tone4",
    "category": "people"
  },
  "women_holding_hands_medium_dark_skin_tone": {
    "char": "👭🏾",
    "slug": "women_holding_hands_tone4",
    "category": "people",
    "isAlternative": true
  },
  "women_holding_hands_tone4_tone5": {
    "char": "👩🏾‍🤝‍👩🏿",
    "slug": "women_holding_hands_tone4_tone5",
    "category": "people"
  },
  "women_holding_hands_medium_dark_skin_tone_dark_skin_tone": {
    "char": "👩🏾‍🤝‍👩🏿",
    "slug": "women_holding_hands_tone4_tone5",
    "category": "people",
    "isAlternative": true
  },
  "women_holding_hands_tone5_tone1": {
    "char": "👩🏿‍🤝‍👩🏻",
    "slug": "women_holding_hands_tone5_tone1",
    "category": "people"
  },
  "women_holding_hands_dark_skin_tone_light_skin_tone": {
    "char": "👩🏿‍🤝‍👩🏻",
    "slug": "women_holding_hands_tone5_tone1",
    "category": "people",
    "isAlternative": true
  },
  "women_holding_hands_tone5_tone2": {
    "char": "👩🏿‍🤝‍👩🏼",
    "slug": "women_holding_hands_tone5_tone2",
    "category": "people"
  },
  "women_holding_hands_dark_skin_tone_medium_light_skin_tone": {
    "char": "👩🏿‍🤝‍👩🏼",
    "slug": "women_holding_hands_tone5_tone2",
    "category": "people",
    "isAlternative": true
  },
  "women_holding_hands_tone5_tone3": {
    "char": "👩🏿‍🤝‍👩🏽",
    "slug": "women_holding_hands_tone5_tone3",
    "category": "people"
  },
  "women_holding_hands_dark_skin_tone_medium_skin_tone": {
    "char": "👩🏿‍🤝‍👩🏽",
    "slug": "women_holding_hands_tone5_tone3",
    "category": "people",
    "isAlternative": true
  },
  "women_holding_hands_tone5_tone4": {
    "char": "👩🏿‍🤝‍👩🏾",
    "slug": "women_holding_hands_tone5_tone4",
    "category": "people"
  },
  "women_holding_hands_dark_skin_tone_medium_dark_skin_tone": {
    "char": "👩🏿‍🤝‍👩🏾",
    "slug": "women_holding_hands_tone5_tone4",
    "category": "people",
    "isAlternative": true
  },
  "women_holding_hands_tone5": {
    "char": "👭🏿",
    "slug": "women_holding_hands_tone5",
    "category": "people"
  },
  "women_holding_hands_dark_skin_tone": {
    "char": "👭🏿",
    "slug": "women_holding_hands_tone5",
    "category": "people",
    "isAlternative": true
  },
  "two_men_holding_hands": {
    "char": "👬",
    "slug": "two_men_holding_hands",
    "category": "people"
  },
  "men_holding_hands_tone1": {
    "char": "👬🏻",
    "slug": "men_holding_hands_tone1",
    "category": "people"
  },
  "men_holding_hands_light_skin_tone": {
    "char": "👬🏻",
    "slug": "men_holding_hands_tone1",
    "category": "people",
    "isAlternative": true
  },
  "men_holding_hands_tone1_tone2": {
    "char": "👨🏻‍🤝‍👨🏼",
    "slug": "men_holding_hands_tone1_tone2",
    "category": "people"
  },
  "men_holding_hands_light_skin_tone_medium_light_skin_tone": {
    "char": "👨🏻‍🤝‍👨🏼",
    "slug": "men_holding_hands_tone1_tone2",
    "category": "people",
    "isAlternative": true
  },
  "men_holding_hands_tone1_tone3": {
    "char": "👨🏻‍🤝‍👨🏽",
    "slug": "men_holding_hands_tone1_tone3",
    "category": "people"
  },
  "men_holding_hands_light_skin_tone_medium_skin_tone": {
    "char": "👨🏻‍🤝‍👨🏽",
    "slug": "men_holding_hands_tone1_tone3",
    "category": "people",
    "isAlternative": true
  },
  "men_holding_hands_tone1_tone4": {
    "char": "👨🏻‍🤝‍👨🏾",
    "slug": "men_holding_hands_tone1_tone4",
    "category": "people"
  },
  "men_holding_hands_light_skin_tone_medium_dark_skin_tone": {
    "char": "👨🏻‍🤝‍👨🏾",
    "slug": "men_holding_hands_tone1_tone4",
    "category": "people",
    "isAlternative": true
  },
  "men_holding_hands_tone1_tone5": {
    "char": "👨🏻‍🤝‍👨🏿",
    "slug": "men_holding_hands_tone1_tone5",
    "category": "people"
  },
  "men_holding_hands_light_skin_tone_dark_skin_tone": {
    "char": "👨🏻‍🤝‍👨🏿",
    "slug": "men_holding_hands_tone1_tone5",
    "category": "people",
    "isAlternative": true
  },
  "men_holding_hands_tone2_tone1": {
    "char": "👨🏼‍🤝‍👨🏻",
    "slug": "men_holding_hands_tone2_tone1",
    "category": "people"
  },
  "men_holding_hands_medium_light_skin_tone_light_skin_tone": {
    "char": "👨🏼‍🤝‍👨🏻",
    "slug": "men_holding_hands_tone2_tone1",
    "category": "people",
    "isAlternative": true
  },
  "men_holding_hands_tone2": {
    "char": "👬🏼",
    "slug": "men_holding_hands_tone2",
    "category": "people"
  },
  "men_holding_hands_medium_light_skin_tone": {
    "char": "👬🏼",
    "slug": "men_holding_hands_tone2",
    "category": "people",
    "isAlternative": true
  },
  "men_holding_hands_tone2_tone3": {
    "char": "👨🏼‍🤝‍👨🏽",
    "slug": "men_holding_hands_tone2_tone3",
    "category": "people"
  },
  "men_holding_hands_medium_light_skin_tone_medium_skin_tone": {
    "char": "👨🏼‍🤝‍👨🏽",
    "slug": "men_holding_hands_tone2_tone3",
    "category": "people",
    "isAlternative": true
  },
  "men_holding_hands_tone2_tone4": {
    "char": "👨🏼‍🤝‍👨🏾",
    "slug": "men_holding_hands_tone2_tone4",
    "category": "people"
  },
  "men_holding_hands_medium_light_skin_tone_medium_dark_skin_tone": {
    "char": "👨🏼‍🤝‍👨🏾",
    "slug": "men_holding_hands_tone2_tone4",
    "category": "people",
    "isAlternative": true
  },
  "men_holding_hands_tone2_tone5": {
    "char": "👨🏼‍🤝‍👨🏿",
    "slug": "men_holding_hands_tone2_tone5",
    "category": "people"
  },
  "men_holding_hands_medium_light_skin_tone_dark_skin_tone": {
    "char": "👨🏼‍🤝‍👨🏿",
    "slug": "men_holding_hands_tone2_tone5",
    "category": "people",
    "isAlternative": true
  },
  "men_holding_hands_tone3_tone1": {
    "char": "👨🏽‍🤝‍👨🏻",
    "slug": "men_holding_hands_tone3_tone1",
    "category": "people"
  },
  "men_holding_hands_medium_skin_tone_light_skin_tone": {
    "char": "👨🏽‍🤝‍👨🏻",
    "slug": "men_holding_hands_tone3_tone1",
    "category": "people",
    "isAlternative": true
  },
  "men_holding_hands_tone3_tone2": {
    "char": "👨🏽‍🤝‍👨🏼",
    "slug": "men_holding_hands_tone3_tone2",
    "category": "people"
  },
  "men_holding_hands_medium_skin_tone_medium_light_skin_tone": {
    "char": "👨🏽‍🤝‍👨🏼",
    "slug": "men_holding_hands_tone3_tone2",
    "category": "people",
    "isAlternative": true
  },
  "men_holding_hands_tone3": {
    "char": "👬🏽",
    "slug": "men_holding_hands_tone3",
    "category": "people"
  },
  "men_holding_hands_medium_skin_tone": {
    "char": "👬🏽",
    "slug": "men_holding_hands_tone3",
    "category": "people",
    "isAlternative": true
  },
  "men_holding_hands_tone3_tone4": {
    "char": "👨🏽‍🤝‍👨🏾",
    "slug": "men_holding_hands_tone3_tone4",
    "category": "people"
  },
  "men_holding_hands_medium_skin_tone_medium_dark_skin_tone": {
    "char": "👨🏽‍🤝‍👨🏾",
    "slug": "men_holding_hands_tone3_tone4",
    "category": "people",
    "isAlternative": true
  },
  "men_holding_hands_tone3_tone5": {
    "char": "👨🏽‍🤝‍👨🏿",
    "slug": "men_holding_hands_tone3_tone5",
    "category": "people"
  },
  "men_holding_hands_medium_skin_tone_dark_skin_tone": {
    "char": "👨🏽‍🤝‍👨🏿",
    "slug": "men_holding_hands_tone3_tone5",
    "category": "people",
    "isAlternative": true
  },
  "men_holding_hands_tone4_tone1": {
    "char": "👨🏾‍🤝‍👨🏻",
    "slug": "men_holding_hands_tone4_tone1",
    "category": "people"
  },
  "men_holding_hands_medium_dark_skin_tone_light_skin_tone": {
    "char": "👨🏾‍🤝‍👨🏻",
    "slug": "men_holding_hands_tone4_tone1",
    "category": "people",
    "isAlternative": true
  },
  "men_holding_hands_tone4_tone2": {
    "char": "👨🏾‍🤝‍👨🏼",
    "slug": "men_holding_hands_tone4_tone2",
    "category": "people"
  },
  "men_holding_hands_medium_dark_skin_tone_medium_light_skin_tone": {
    "char": "👨🏾‍🤝‍👨🏼",
    "slug": "men_holding_hands_tone4_tone2",
    "category": "people",
    "isAlternative": true
  },
  "men_holding_hands_tone4_tone3": {
    "char": "👨🏾‍🤝‍👨🏽",
    "slug": "men_holding_hands_tone4_tone3",
    "category": "people"
  },
  "men_holding_hands_medium_dark_skin_tone_medium_skin_tone": {
    "char": "👨🏾‍🤝‍👨🏽",
    "slug": "men_holding_hands_tone4_tone3",
    "category": "people",
    "isAlternative": true
  },
  "men_holding_hands_tone4": {
    "char": "👬🏾",
    "slug": "men_holding_hands_tone4",
    "category": "people"
  },
  "men_holding_hands_medium_dark_skin_tone": {
    "char": "👬🏾",
    "slug": "men_holding_hands_tone4",
    "category": "people",
    "isAlternative": true
  },
  "men_holding_hands_tone4_tone5": {
    "char": "👨🏾‍🤝‍👨🏿",
    "slug": "men_holding_hands_tone4_tone5",
    "category": "people"
  },
  "men_holding_hands_medium_dark_skin_tone_dark_skin_tone": {
    "char": "👨🏾‍🤝‍👨🏿",
    "slug": "men_holding_hands_tone4_tone5",
    "category": "people",
    "isAlternative": true
  },
  "men_holding_hands_tone5_tone1": {
    "char": "👨🏿‍🤝‍👨🏻",
    "slug": "men_holding_hands_tone5_tone1",
    "category": "people"
  },
  "men_holding_hands_dark_skin_tone_light_skin_tone": {
    "char": "👨🏿‍🤝‍👨🏻",
    "slug": "men_holding_hands_tone5_tone1",
    "category": "people",
    "isAlternative": true
  },
  "men_holding_hands_tone5_tone2": {
    "char": "👨🏿‍🤝‍👨🏼",
    "slug": "men_holding_hands_tone5_tone2",
    "category": "people"
  },
  "men_holding_hands_dark_skin_tone_medium_light_skin_tone": {
    "char": "👨🏿‍🤝‍👨🏼",
    "slug": "men_holding_hands_tone5_tone2",
    "category": "people",
    "isAlternative": true
  },
  "men_holding_hands_tone5_tone3": {
    "char": "👨🏿‍🤝‍👨🏽",
    "slug": "men_holding_hands_tone5_tone3",
    "category": "people"
  },
  "men_holding_hands_dark_skin_tone_medium_skin_tone": {
    "char": "👨🏿‍🤝‍👨🏽",
    "slug": "men_holding_hands_tone5_tone3",
    "category": "people",
    "isAlternative": true
  },
  "men_holding_hands_tone5_tone4": {
    "char": "👨🏿‍🤝‍👨🏾",
    "slug": "men_holding_hands_tone5_tone4",
    "category": "people"
  },
  "men_holding_hands_dark_skin_tone_medium_dark_skin_tone": {
    "char": "👨🏿‍🤝‍👨🏾",
    "slug": "men_holding_hands_tone5_tone4",
    "category": "people",
    "isAlternative": true
  },
  "men_holding_hands_tone5": {
    "char": "👬🏿",
    "slug": "men_holding_hands_tone5",
    "category": "people"
  },
  "men_holding_hands_dark_skin_tone": {
    "char": "👬🏿",
    "slug": "men_holding_hands_tone5",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart": {
    "char": "💑",
    "slug": "couple_with_heart",
    "category": "people"
  },
  "couple_with_heart_tone1": {
    "char": "💑🏻",
    "slug": "couple_with_heart_tone1",
    "category": "people"
  },
  "couple_with_heart_light_skin_tone": {
    "char": "💑🏻",
    "slug": "couple_with_heart_tone1",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_person_person_tone1_tone2": {
    "char": "🧑🏻‍❤️‍🧑🏼",
    "slug": "couple_with_heart_person_person_tone1_tone2",
    "category": "people"
  },
  "couple_with_heart_person_person_light_skin_tone_medium_light_skin_tone": {
    "char": "🧑🏻‍❤️‍🧑🏼",
    "slug": "couple_with_heart_person_person_tone1_tone2",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_person_person_tone1_tone3": {
    "char": "🧑🏻‍❤️‍🧑🏽",
    "slug": "couple_with_heart_person_person_tone1_tone3",
    "category": "people"
  },
  "couple_with_heart_person_person_light_skin_tone_medium_skin_tone": {
    "char": "🧑🏻‍❤️‍🧑🏽",
    "slug": "couple_with_heart_person_person_tone1_tone3",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_person_person_tone1_tone4": {
    "char": "🧑🏻‍❤️‍🧑🏾",
    "slug": "couple_with_heart_person_person_tone1_tone4",
    "category": "people"
  },
  "couple_with_heart_person_person_light_skin_tone_medium_dark_skin_tone": {
    "char": "🧑🏻‍❤️‍🧑🏾",
    "slug": "couple_with_heart_person_person_tone1_tone4",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_person_person_tone1_tone5": {
    "char": "🧑🏻‍❤️‍🧑🏿",
    "slug": "couple_with_heart_person_person_tone1_tone5",
    "category": "people"
  },
  "couple_with_heart_person_person_light_skin_tone_dark_skin_tone": {
    "char": "🧑🏻‍❤️‍🧑🏿",
    "slug": "couple_with_heart_person_person_tone1_tone5",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_person_person_tone2_tone1": {
    "char": "🧑🏼‍❤️‍🧑🏻",
    "slug": "couple_with_heart_person_person_tone2_tone1",
    "category": "people"
  },
  "couple_with_heart_person_person_medium_light_skin_tone_light_skin_tone": {
    "char": "🧑🏼‍❤️‍🧑🏻",
    "slug": "couple_with_heart_person_person_tone2_tone1",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_tone2": {
    "char": "💑🏼",
    "slug": "couple_with_heart_tone2",
    "category": "people"
  },
  "couple_with_heart_medium_light_skin_tone": {
    "char": "💑🏼",
    "slug": "couple_with_heart_tone2",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_person_person_tone2_tone3": {
    "char": "🧑🏼‍❤️‍🧑🏽",
    "slug": "couple_with_heart_person_person_tone2_tone3",
    "category": "people"
  },
  "couple_with_heart_person_person_medium_light_skin_tone_medium_skin_tone": {
    "char": "🧑🏼‍❤️‍🧑🏽",
    "slug": "couple_with_heart_person_person_tone2_tone3",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_person_person_tone2_tone4": {
    "char": "🧑🏼‍❤️‍🧑🏾",
    "slug": "couple_with_heart_person_person_tone2_tone4",
    "category": "people"
  },
  "couple_with_heart_person_person_medium_light_skin_tone_medium_dark_skin_tone": {
    "char": "🧑🏼‍❤️‍🧑🏾",
    "slug": "couple_with_heart_person_person_tone2_tone4",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_person_person_tone2_tone5": {
    "char": "🧑🏼‍❤️‍🧑🏿",
    "slug": "couple_with_heart_person_person_tone2_tone5",
    "category": "people"
  },
  "couple_with_heart_person_person_medium_light_skin_tone_dark_skin_tone": {
    "char": "🧑🏼‍❤️‍🧑🏿",
    "slug": "couple_with_heart_person_person_tone2_tone5",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_person_person_tone3_tone1": {
    "char": "🧑🏽‍❤️‍🧑🏻",
    "slug": "couple_with_heart_person_person_tone3_tone1",
    "category": "people"
  },
  "couple_with_heart_person_person_medium_skin_tone_light_skin_tone": {
    "char": "🧑🏽‍❤️‍🧑🏻",
    "slug": "couple_with_heart_person_person_tone3_tone1",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_person_person_tone3_tone2": {
    "char": "🧑🏽‍❤️‍🧑🏼",
    "slug": "couple_with_heart_person_person_tone3_tone2",
    "category": "people"
  },
  "couple_with_heart_person_person_medium_skin_tone_medium_light_skin_tone": {
    "char": "🧑🏽‍❤️‍🧑🏼",
    "slug": "couple_with_heart_person_person_tone3_tone2",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_tone3": {
    "char": "💑🏽",
    "slug": "couple_with_heart_tone3",
    "category": "people"
  },
  "couple_with_heart_medium_skin_tone": {
    "char": "💑🏽",
    "slug": "couple_with_heart_tone3",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_person_person_tone3_tone4": {
    "char": "🧑🏽‍❤️‍🧑🏾",
    "slug": "couple_with_heart_person_person_tone3_tone4",
    "category": "people"
  },
  "couple_with_heart_person_person_medium_skin_tone_medium_dark_skin_tone": {
    "char": "🧑🏽‍❤️‍🧑🏾",
    "slug": "couple_with_heart_person_person_tone3_tone4",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_person_person_tone3_tone5": {
    "char": "🧑🏽‍❤️‍🧑🏿",
    "slug": "couple_with_heart_person_person_tone3_tone5",
    "category": "people"
  },
  "couple_with_heart_person_person_medium_skin_tone_dark_skin_tone": {
    "char": "🧑🏽‍❤️‍🧑🏿",
    "slug": "couple_with_heart_person_person_tone3_tone5",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_person_person_tone4_tone1": {
    "char": "🧑🏾‍❤️‍🧑🏻",
    "slug": "couple_with_heart_person_person_tone4_tone1",
    "category": "people"
  },
  "couple_with_heart_person_person_medium_dark_skin_tone_light_skin_tone": {
    "char": "🧑🏾‍❤️‍🧑🏻",
    "slug": "couple_with_heart_person_person_tone4_tone1",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_person_person_tone4_tone2": {
    "char": "🧑🏾‍❤️‍🧑🏼",
    "slug": "couple_with_heart_person_person_tone4_tone2",
    "category": "people"
  },
  "couple_with_heart_person_person_medium_dark_skin_tone_medium_light_skin_tone": {
    "char": "🧑🏾‍❤️‍🧑🏼",
    "slug": "couple_with_heart_person_person_tone4_tone2",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_person_person_tone4_tone3": {
    "char": "🧑🏾‍❤️‍🧑🏽",
    "slug": "couple_with_heart_person_person_tone4_tone3",
    "category": "people"
  },
  "couple_with_heart_person_person_medium_dark_skin_tone_medium_skin_tone": {
    "char": "🧑🏾‍❤️‍🧑🏽",
    "slug": "couple_with_heart_person_person_tone4_tone3",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_tone4": {
    "char": "💑🏾",
    "slug": "couple_with_heart_tone4",
    "category": "people"
  },
  "couple_with_heart_medium_dark_skin_tone": {
    "char": "💑🏾",
    "slug": "couple_with_heart_tone4",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_person_person_tone4_tone5": {
    "char": "🧑🏾‍❤️‍🧑🏿",
    "slug": "couple_with_heart_person_person_tone4_tone5",
    "category": "people"
  },
  "couple_with_heart_person_person_medium_dark_skin_tone_dark_skin_tone": {
    "char": "🧑🏾‍❤️‍🧑🏿",
    "slug": "couple_with_heart_person_person_tone4_tone5",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_person_person_tone5_tone1": {
    "char": "🧑🏿‍❤️‍🧑🏻",
    "slug": "couple_with_heart_person_person_tone5_tone1",
    "category": "people"
  },
  "couple_with_heart_person_person_dark_skin_tone_light_skin_tone": {
    "char": "🧑🏿‍❤️‍🧑🏻",
    "slug": "couple_with_heart_person_person_tone5_tone1",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_person_person_tone5_tone2": {
    "char": "🧑🏿‍❤️‍🧑🏼",
    "slug": "couple_with_heart_person_person_tone5_tone2",
    "category": "people"
  },
  "couple_with_heart_person_person_dark_skin_tone_medium_light_skin_tone": {
    "char": "🧑🏿‍❤️‍🧑🏼",
    "slug": "couple_with_heart_person_person_tone5_tone2",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_person_person_tone5_tone3": {
    "char": "🧑🏿‍❤️‍🧑🏽",
    "slug": "couple_with_heart_person_person_tone5_tone3",
    "category": "people"
  },
  "couple_with_heart_person_person_dark_skin_tone_medium_skin_tone": {
    "char": "🧑🏿‍❤️‍🧑🏽",
    "slug": "couple_with_heart_person_person_tone5_tone3",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_person_person_tone5_tone4": {
    "char": "🧑🏿‍❤️‍🧑🏾",
    "slug": "couple_with_heart_person_person_tone5_tone4",
    "category": "people"
  },
  "couple_with_heart_person_person_dark_skin_tone_medium_dark_skin_tone": {
    "char": "🧑🏿‍❤️‍🧑🏾",
    "slug": "couple_with_heart_person_person_tone5_tone4",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_tone5": {
    "char": "💑🏿",
    "slug": "couple_with_heart_tone5",
    "category": "people"
  },
  "couple_with_heart_dark_skin_tone": {
    "char": "💑🏿",
    "slug": "couple_with_heart_tone5",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_woman_man": {
    "char": "👩‍❤️‍👨",
    "slug": "couple_with_heart_woman_man",
    "category": "people"
  },
  "couple_with_heart_woman_man_tone1": {
    "char": "👩🏻‍❤️‍👨🏻",
    "slug": "couple_with_heart_woman_man_tone1",
    "category": "people"
  },
  "couple_with_heart_woman_man_light_skin_tone": {
    "char": "👩🏻‍❤️‍👨🏻",
    "slug": "couple_with_heart_woman_man_tone1",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_woman_man_tone1_tone2": {
    "char": "👩🏻‍❤️‍👨🏼",
    "slug": "couple_with_heart_woman_man_tone1_tone2",
    "category": "people"
  },
  "couple_with_heart_woman_man_light_skin_tone_medium_light_skin_tone": {
    "char": "👩🏻‍❤️‍👨🏼",
    "slug": "couple_with_heart_woman_man_tone1_tone2",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_woman_man_tone1_tone3": {
    "char": "👩🏻‍❤️‍👨🏽",
    "slug": "couple_with_heart_woman_man_tone1_tone3",
    "category": "people"
  },
  "couple_with_heart_woman_man_light_skin_tone_medium_skin_tone": {
    "char": "👩🏻‍❤️‍👨🏽",
    "slug": "couple_with_heart_woman_man_tone1_tone3",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_woman_man_tone1_tone4": {
    "char": "👩🏻‍❤️‍👨🏾",
    "slug": "couple_with_heart_woman_man_tone1_tone4",
    "category": "people"
  },
  "couple_with_heart_woman_man_light_skin_tone_medium_dark_skin_tone": {
    "char": "👩🏻‍❤️‍👨🏾",
    "slug": "couple_with_heart_woman_man_tone1_tone4",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_woman_man_tone1_tone5": {
    "char": "👩🏻‍❤️‍👨🏿",
    "slug": "couple_with_heart_woman_man_tone1_tone5",
    "category": "people"
  },
  "couple_with_heart_woman_man_light_skin_tone_dark_skin_tone": {
    "char": "👩🏻‍❤️‍👨🏿",
    "slug": "couple_with_heart_woman_man_tone1_tone5",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_woman_man_tone2_tone1": {
    "char": "👩🏼‍❤️‍👨🏻",
    "slug": "couple_with_heart_woman_man_tone2_tone1",
    "category": "people"
  },
  "couple_with_heart_woman_man_medium_light_skin_tone_light_skin_tone": {
    "char": "👩🏼‍❤️‍👨🏻",
    "slug": "couple_with_heart_woman_man_tone2_tone1",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_woman_man_tone2": {
    "char": "👩🏼‍❤️‍👨🏼",
    "slug": "couple_with_heart_woman_man_tone2",
    "category": "people"
  },
  "couple_with_heart_woman_man_medium_light_skin_tone": {
    "char": "👩🏼‍❤️‍👨🏼",
    "slug": "couple_with_heart_woman_man_tone2",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_woman_man_tone2_tone3": {
    "char": "👩🏼‍❤️‍👨🏽",
    "slug": "couple_with_heart_woman_man_tone2_tone3",
    "category": "people"
  },
  "couple_with_heart_woman_man_medium_light_skin_tone_medium_skin_tone": {
    "char": "👩🏼‍❤️‍👨🏽",
    "slug": "couple_with_heart_woman_man_tone2_tone3",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_woman_man_tone2_tone4": {
    "char": "👩🏼‍❤️‍👨🏾",
    "slug": "couple_with_heart_woman_man_tone2_tone4",
    "category": "people"
  },
  "couple_with_heart_woman_man_medium_light_skin_tone_medium_dark_skin_tone": {
    "char": "👩🏼‍❤️‍👨🏾",
    "slug": "couple_with_heart_woman_man_tone2_tone4",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_woman_man_tone2_tone5": {
    "char": "👩🏼‍❤️‍👨🏿",
    "slug": "couple_with_heart_woman_man_tone2_tone5",
    "category": "people"
  },
  "couple_with_heart_woman_man_medium_light_skin_tone_dark_skin_tone": {
    "char": "👩🏼‍❤️‍👨🏿",
    "slug": "couple_with_heart_woman_man_tone2_tone5",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_woman_man_tone3_tone1": {
    "char": "👩🏽‍❤️‍👨🏻",
    "slug": "couple_with_heart_woman_man_tone3_tone1",
    "category": "people"
  },
  "couple_with_heart_woman_man_medium_skin_tone_light_skin_tone": {
    "char": "👩🏽‍❤️‍👨🏻",
    "slug": "couple_with_heart_woman_man_tone3_tone1",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_woman_man_tone3_tone2": {
    "char": "👩🏽‍❤️‍👨🏼",
    "slug": "couple_with_heart_woman_man_tone3_tone2",
    "category": "people"
  },
  "couple_with_heart_woman_man_medium_skin_tone_medium_light_skin_tone": {
    "char": "👩🏽‍❤️‍👨🏼",
    "slug": "couple_with_heart_woman_man_tone3_tone2",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_woman_man_tone3": {
    "char": "👩🏽‍❤️‍👨🏽",
    "slug": "couple_with_heart_woman_man_tone3",
    "category": "people"
  },
  "couple_with_heart_woman_man_medium_skin_tone": {
    "char": "👩🏽‍❤️‍👨🏽",
    "slug": "couple_with_heart_woman_man_tone3",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_woman_man_tone3_tone4": {
    "char": "👩🏽‍❤️‍👨🏾",
    "slug": "couple_with_heart_woman_man_tone3_tone4",
    "category": "people"
  },
  "couple_with_heart_woman_man_medium_skin_tone_medium_dark_skin_tone": {
    "char": "👩🏽‍❤️‍👨🏾",
    "slug": "couple_with_heart_woman_man_tone3_tone4",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_woman_man_tone3_tone5": {
    "char": "👩🏽‍❤️‍👨🏿",
    "slug": "couple_with_heart_woman_man_tone3_tone5",
    "category": "people"
  },
  "couple_with_heart_woman_man_medium_skin_tone_dark_skin_tone": {
    "char": "👩🏽‍❤️‍👨🏿",
    "slug": "couple_with_heart_woman_man_tone3_tone5",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_woman_man_tone4_tone1": {
    "char": "👩🏾‍❤️‍👨🏻",
    "slug": "couple_with_heart_woman_man_tone4_tone1",
    "category": "people"
  },
  "couple_with_heart_woman_man_medium_dark_skin_tone_light_skin_tone": {
    "char": "👩🏾‍❤️‍👨🏻",
    "slug": "couple_with_heart_woman_man_tone4_tone1",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_woman_man_tone4_tone2": {
    "char": "👩🏾‍❤️‍👨🏼",
    "slug": "couple_with_heart_woman_man_tone4_tone2",
    "category": "people"
  },
  "couple_with_heart_woman_man_medium_dark_skin_tone_medium_light_skin_tone": {
    "char": "👩🏾‍❤️‍👨🏼",
    "slug": "couple_with_heart_woman_man_tone4_tone2",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_woman_man_tone4_tone3": {
    "char": "👩🏾‍❤️‍👨🏽",
    "slug": "couple_with_heart_woman_man_tone4_tone3",
    "category": "people"
  },
  "couple_with_heart_woman_man_medium_dark_skin_tone_medium_skin_tone": {
    "char": "👩🏾‍❤️‍👨🏽",
    "slug": "couple_with_heart_woman_man_tone4_tone3",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_woman_man_tone4": {
    "char": "👩🏾‍❤️‍👨🏾",
    "slug": "couple_with_heart_woman_man_tone4",
    "category": "people"
  },
  "couple_with_heart_woman_man_medium_dark_skin_tone": {
    "char": "👩🏾‍❤️‍👨🏾",
    "slug": "couple_with_heart_woman_man_tone4",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_woman_man_tone4_tone5": {
    "char": "👩🏾‍❤️‍👨🏿",
    "slug": "couple_with_heart_woman_man_tone4_tone5",
    "category": "people"
  },
  "couple_with_heart_woman_man_medium_dark_skin_tone_dark_skin_tone": {
    "char": "👩🏾‍❤️‍👨🏿",
    "slug": "couple_with_heart_woman_man_tone4_tone5",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_woman_man_tone5_tone1": {
    "char": "👩🏿‍❤️‍👨🏻",
    "slug": "couple_with_heart_woman_man_tone5_tone1",
    "category": "people"
  },
  "couple_with_heart_woman_man_dark_skin_tone_light_skin_tone": {
    "char": "👩🏿‍❤️‍👨🏻",
    "slug": "couple_with_heart_woman_man_tone5_tone1",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_woman_man_tone5_tone2": {
    "char": "👩🏿‍❤️‍👨🏼",
    "slug": "couple_with_heart_woman_man_tone5_tone2",
    "category": "people"
  },
  "couple_with_heart_woman_man_dark_skin_tone_medium_light_skin_tone": {
    "char": "👩🏿‍❤️‍👨🏼",
    "slug": "couple_with_heart_woman_man_tone5_tone2",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_woman_man_tone5_tone3": {
    "char": "👩🏿‍❤️‍👨🏽",
    "slug": "couple_with_heart_woman_man_tone5_tone3",
    "category": "people"
  },
  "couple_with_heart_woman_man_dark_skin_tone_medium_skin_tone": {
    "char": "👩🏿‍❤️‍👨🏽",
    "slug": "couple_with_heart_woman_man_tone5_tone3",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_woman_man_tone5_tone4": {
    "char": "👩🏿‍❤️‍👨🏾",
    "slug": "couple_with_heart_woman_man_tone5_tone4",
    "category": "people"
  },
  "couple_with_heart_woman_man_dark_skin_tone_medium_dark_skin_tone": {
    "char": "👩🏿‍❤️‍👨🏾",
    "slug": "couple_with_heart_woman_man_tone5_tone4",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_woman_man_tone5": {
    "char": "👩🏿‍❤️‍👨🏿",
    "slug": "couple_with_heart_woman_man_tone5",
    "category": "people"
  },
  "couple_with_heart_woman_man_dark_skin_tone": {
    "char": "👩🏿‍❤️‍👨🏿",
    "slug": "couple_with_heart_woman_man_tone5",
    "category": "people",
    "isAlternative": true
  },
  "couple_ww": { "char": "👩‍❤️‍👩", "slug": "couple_ww", "category": "people" },
  "couple_with_heart_ww": {
    "char": "👩‍❤️‍👩",
    "slug": "couple_ww",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_woman_woman_tone1": {
    "char": "👩🏻‍❤️‍👩🏻",
    "slug": "couple_with_heart_woman_woman_tone1",
    "category": "people"
  },
  "couple_with_heart_woman_woman_light_skin_tone": {
    "char": "👩🏻‍❤️‍👩🏻",
    "slug": "couple_with_heart_woman_woman_tone1",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_woman_woman_tone1_tone2": {
    "char": "👩🏻‍❤️‍👩🏼",
    "slug": "couple_with_heart_woman_woman_tone1_tone2",
    "category": "people"
  },
  "couple_with_heart_woman_woman_light_skin_tone_medium_light_skin_tone": {
    "char": "👩🏻‍❤️‍👩🏼",
    "slug": "couple_with_heart_woman_woman_tone1_tone2",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_woman_woman_tone1_tone3": {
    "char": "👩🏻‍❤️‍👩🏽",
    "slug": "couple_with_heart_woman_woman_tone1_tone3",
    "category": "people"
  },
  "couple_with_heart_woman_woman_light_skin_tone_medium_skin_tone": {
    "char": "👩🏻‍❤️‍👩🏽",
    "slug": "couple_with_heart_woman_woman_tone1_tone3",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_woman_woman_tone1_tone4": {
    "char": "👩🏻‍❤️‍👩🏾",
    "slug": "couple_with_heart_woman_woman_tone1_tone4",
    "category": "people"
  },
  "couple_with_heart_woman_woman_light_skin_tone_medium_dark_skin_tone": {
    "char": "👩🏻‍❤️‍👩🏾",
    "slug": "couple_with_heart_woman_woman_tone1_tone4",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_woman_woman_tone1_tone5": {
    "char": "👩🏻‍❤️‍👩🏿",
    "slug": "couple_with_heart_woman_woman_tone1_tone5",
    "category": "people"
  },
  "couple_with_heart_woman_woman_light_skin_tone_dark_skin_tone": {
    "char": "👩🏻‍❤️‍👩🏿",
    "slug": "couple_with_heart_woman_woman_tone1_tone5",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_woman_woman_tone2_tone1": {
    "char": "👩🏼‍❤️‍👩🏻",
    "slug": "couple_with_heart_woman_woman_tone2_tone1",
    "category": "people"
  },
  "couple_with_heart_woman_woman_medium_light_skin_tone_light_skin_tone": {
    "char": "👩🏼‍❤️‍👩🏻",
    "slug": "couple_with_heart_woman_woman_tone2_tone1",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_woman_woman_tone2": {
    "char": "👩🏼‍❤️‍👩🏼",
    "slug": "couple_with_heart_woman_woman_tone2",
    "category": "people"
  },
  "couple_with_heart_woman_woman_medium_light_skin_tone": {
    "char": "👩🏼‍❤️‍👩🏼",
    "slug": "couple_with_heart_woman_woman_tone2",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_woman_woman_tone2_tone3": {
    "char": "👩🏼‍❤️‍👩🏽",
    "slug": "couple_with_heart_woman_woman_tone2_tone3",
    "category": "people"
  },
  "couple_with_heart_woman_woman_medium_light_skin_tone_medium_skin_tone": {
    "char": "👩🏼‍❤️‍👩🏽",
    "slug": "couple_with_heart_woman_woman_tone2_tone3",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_woman_woman_tone2_tone4": {
    "char": "👩🏼‍❤️‍👩🏾",
    "slug": "couple_with_heart_woman_woman_tone2_tone4",
    "category": "people"
  },
  "couple_with_heart_woman_woman_medium_light_skin_tone_medium_dark_skin_tone": {
    "char": "👩🏼‍❤️‍👩🏾",
    "slug": "couple_with_heart_woman_woman_tone2_tone4",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_woman_woman_tone2_tone5": {
    "char": "👩🏼‍❤️‍👩🏿",
    "slug": "couple_with_heart_woman_woman_tone2_tone5",
    "category": "people"
  },
  "couple_with_heart_woman_woman_medium_light_skin_tone_dark_skin_tone": {
    "char": "👩🏼‍❤️‍👩🏿",
    "slug": "couple_with_heart_woman_woman_tone2_tone5",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_woman_woman_tone3_tone1": {
    "char": "👩🏽‍❤️‍👩🏻",
    "slug": "couple_with_heart_woman_woman_tone3_tone1",
    "category": "people"
  },
  "couple_with_heart_woman_woman_medium_skin_tone_light_skin_tone": {
    "char": "👩🏽‍❤️‍👩🏻",
    "slug": "couple_with_heart_woman_woman_tone3_tone1",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_woman_woman_tone3_tone2": {
    "char": "👩🏽‍❤️‍👩🏼",
    "slug": "couple_with_heart_woman_woman_tone3_tone2",
    "category": "people"
  },
  "couple_with_heart_woman_woman_medium_skin_tone_medium_light_skin_tone": {
    "char": "👩🏽‍❤️‍👩🏼",
    "slug": "couple_with_heart_woman_woman_tone3_tone2",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_woman_woman_tone3": {
    "char": "👩🏽‍❤️‍👩🏽",
    "slug": "couple_with_heart_woman_woman_tone3",
    "category": "people"
  },
  "couple_with_heart_woman_woman_medium_skin_tone": {
    "char": "👩🏽‍❤️‍👩🏽",
    "slug": "couple_with_heart_woman_woman_tone3",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_woman_woman_tone3_tone4": {
    "char": "👩🏽‍❤️‍👩🏾",
    "slug": "couple_with_heart_woman_woman_tone3_tone4",
    "category": "people"
  },
  "couple_with_heart_woman_woman_medium_skin_tone_medium_dark_skin_tone": {
    "char": "👩🏽‍❤️‍👩🏾",
    "slug": "couple_with_heart_woman_woman_tone3_tone4",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_woman_woman_tone3_tone5": {
    "char": "👩🏽‍❤️‍👩🏿",
    "slug": "couple_with_heart_woman_woman_tone3_tone5",
    "category": "people"
  },
  "couple_with_heart_woman_woman_medium_skin_tone_dark_skin_tone": {
    "char": "👩🏽‍❤️‍👩🏿",
    "slug": "couple_with_heart_woman_woman_tone3_tone5",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_woman_woman_tone4_tone1": {
    "char": "👩🏾‍❤️‍👩🏻",
    "slug": "couple_with_heart_woman_woman_tone4_tone1",
    "category": "people"
  },
  "couple_with_heart_woman_woman_medium_dark_skin_tone_light_skin_tone": {
    "char": "👩🏾‍❤️‍👩🏻",
    "slug": "couple_with_heart_woman_woman_tone4_tone1",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_woman_woman_tone4_tone2": {
    "char": "👩🏾‍❤️‍👩🏼",
    "slug": "couple_with_heart_woman_woman_tone4_tone2",
    "category": "people"
  },
  "couple_with_heart_woman_woman_medium_dark_skin_tone_medium_light_skin_tone": {
    "char": "👩🏾‍❤️‍👩🏼",
    "slug": "couple_with_heart_woman_woman_tone4_tone2",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_woman_woman_tone4_tone3": {
    "char": "👩🏾‍❤️‍👩🏽",
    "slug": "couple_with_heart_woman_woman_tone4_tone3",
    "category": "people"
  },
  "couple_with_heart_woman_woman_medium_dark_skin_tone_medium_skin_tone": {
    "char": "👩🏾‍❤️‍👩🏽",
    "slug": "couple_with_heart_woman_woman_tone4_tone3",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_woman_woman_tone4": {
    "char": "👩🏾‍❤️‍👩🏾",
    "slug": "couple_with_heart_woman_woman_tone4",
    "category": "people"
  },
  "couple_with_heart_woman_woman_medium_dark_skin_tone": {
    "char": "👩🏾‍❤️‍👩🏾",
    "slug": "couple_with_heart_woman_woman_tone4",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_woman_woman_tone4_tone5": {
    "char": "👩🏾‍❤️‍👩🏿",
    "slug": "couple_with_heart_woman_woman_tone4_tone5",
    "category": "people"
  },
  "couple_with_heart_woman_woman_medium_dark_skin_tone_dark_skin_tone": {
    "char": "👩🏾‍❤️‍👩🏿",
    "slug": "couple_with_heart_woman_woman_tone4_tone5",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_woman_woman_tone5_tone1": {
    "char": "👩🏿‍❤️‍👩🏻",
    "slug": "couple_with_heart_woman_woman_tone5_tone1",
    "category": "people"
  },
  "couple_with_heart_woman_woman_dark_skin_tone_light_skin_tone": {
    "char": "👩🏿‍❤️‍👩🏻",
    "slug": "couple_with_heart_woman_woman_tone5_tone1",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_woman_woman_tone5_tone2": {
    "char": "👩🏿‍❤️‍👩🏼",
    "slug": "couple_with_heart_woman_woman_tone5_tone2",
    "category": "people"
  },
  "couple_with_heart_woman_woman_dark_skin_tone_medium_light_skin_tone": {
    "char": "👩🏿‍❤️‍👩🏼",
    "slug": "couple_with_heart_woman_woman_tone5_tone2",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_woman_woman_tone5_tone3": {
    "char": "👩🏿‍❤️‍👩🏽",
    "slug": "couple_with_heart_woman_woman_tone5_tone3",
    "category": "people"
  },
  "couple_with_heart_woman_woman_dark_skin_tone_medium_skin_tone": {
    "char": "👩🏿‍❤️‍👩🏽",
    "slug": "couple_with_heart_woman_woman_tone5_tone3",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_woman_woman_tone5_tone4": {
    "char": "👩🏿‍❤️‍👩🏾",
    "slug": "couple_with_heart_woman_woman_tone5_tone4",
    "category": "people"
  },
  "couple_with_heart_woman_woman_dark_skin_tone_medium_dark_skin_tone": {
    "char": "👩🏿‍❤️‍👩🏾",
    "slug": "couple_with_heart_woman_woman_tone5_tone4",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_woman_woman_tone5": {
    "char": "👩🏿‍❤️‍👩🏿",
    "slug": "couple_with_heart_woman_woman_tone5",
    "category": "people"
  },
  "couple_with_heart_woman_woman_dark_skin_tone": {
    "char": "👩🏿‍❤️‍👩🏿",
    "slug": "couple_with_heart_woman_woman_tone5",
    "category": "people",
    "isAlternative": true
  },
  "couple_mm": { "char": "👨‍❤️‍👨", "slug": "couple_mm", "category": "people" },
  "couple_with_heart_mm": {
    "char": "👨‍❤️‍👨",
    "slug": "couple_mm",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_man_man_tone1": {
    "char": "👨🏻‍❤️‍👨🏻",
    "slug": "couple_with_heart_man_man_tone1",
    "category": "people"
  },
  "couple_with_heart_man_man_light_skin_tone": {
    "char": "👨🏻‍❤️‍👨🏻",
    "slug": "couple_with_heart_man_man_tone1",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_man_man_tone1_tone2": {
    "char": "👨🏻‍❤️‍👨🏼",
    "slug": "couple_with_heart_man_man_tone1_tone2",
    "category": "people"
  },
  "couple_with_heart_man_man_light_skin_tone_medium_light_skin_tone": {
    "char": "👨🏻‍❤️‍👨🏼",
    "slug": "couple_with_heart_man_man_tone1_tone2",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_man_man_tone1_tone3": {
    "char": "👨🏻‍❤️‍👨🏽",
    "slug": "couple_with_heart_man_man_tone1_tone3",
    "category": "people"
  },
  "couple_with_heart_man_man_light_skin_tone_medium_skin_tone": {
    "char": "👨🏻‍❤️‍👨🏽",
    "slug": "couple_with_heart_man_man_tone1_tone3",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_man_man_tone1_tone4": {
    "char": "👨🏻‍❤️‍👨🏾",
    "slug": "couple_with_heart_man_man_tone1_tone4",
    "category": "people"
  },
  "couple_with_heart_man_man_light_skin_tone_medium_dark_skin_tone": {
    "char": "👨🏻‍❤️‍👨🏾",
    "slug": "couple_with_heart_man_man_tone1_tone4",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_man_man_tone1_tone5": {
    "char": "👨🏻‍❤️‍👨🏿",
    "slug": "couple_with_heart_man_man_tone1_tone5",
    "category": "people"
  },
  "couple_with_heart_man_man_light_skin_tone_dark_skin_tone": {
    "char": "👨🏻‍❤️‍👨🏿",
    "slug": "couple_with_heart_man_man_tone1_tone5",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_man_man_tone2_tone1": {
    "char": "👨🏼‍❤️‍👨🏻",
    "slug": "couple_with_heart_man_man_tone2_tone1",
    "category": "people"
  },
  "couple_with_heart_man_man_medium_light_skin_tone_light_skin_tone": {
    "char": "👨🏼‍❤️‍👨🏻",
    "slug": "couple_with_heart_man_man_tone2_tone1",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_man_man_tone2": {
    "char": "👨🏼‍❤️‍👨🏼",
    "slug": "couple_with_heart_man_man_tone2",
    "category": "people"
  },
  "couple_with_heart_man_man_medium_light_skin_tone": {
    "char": "👨🏼‍❤️‍👨🏼",
    "slug": "couple_with_heart_man_man_tone2",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_man_man_tone2_tone3": {
    "char": "👨🏼‍❤️‍👨🏽",
    "slug": "couple_with_heart_man_man_tone2_tone3",
    "category": "people"
  },
  "couple_with_heart_man_man_medium_light_skin_tone_medium_skin_tone": {
    "char": "👨🏼‍❤️‍👨🏽",
    "slug": "couple_with_heart_man_man_tone2_tone3",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_man_man_tone2_tone4": {
    "char": "👨🏼‍❤️‍👨🏾",
    "slug": "couple_with_heart_man_man_tone2_tone4",
    "category": "people"
  },
  "couple_with_heart_man_man_medium_light_skin_tone_medium_dark_skin_tone": {
    "char": "👨🏼‍❤️‍👨🏾",
    "slug": "couple_with_heart_man_man_tone2_tone4",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_man_man_tone2_tone5": {
    "char": "👨🏼‍❤️‍👨🏿",
    "slug": "couple_with_heart_man_man_tone2_tone5",
    "category": "people"
  },
  "couple_with_heart_man_man_medium_light_skin_tone_dark_skin_tone": {
    "char": "👨🏼‍❤️‍👨🏿",
    "slug": "couple_with_heart_man_man_tone2_tone5",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_man_man_tone3_tone1": {
    "char": "👨🏽‍❤️‍👨🏻",
    "slug": "couple_with_heart_man_man_tone3_tone1",
    "category": "people"
  },
  "couple_with_heart_man_man_medium_skin_tone_light_skin_tone": {
    "char": "👨🏽‍❤️‍👨🏻",
    "slug": "couple_with_heart_man_man_tone3_tone1",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_man_man_tone3_tone2": {
    "char": "👨🏽‍❤️‍👨🏼",
    "slug": "couple_with_heart_man_man_tone3_tone2",
    "category": "people"
  },
  "couple_with_heart_man_man_medium_skin_tone_medium_light_skin_tone": {
    "char": "👨🏽‍❤️‍👨🏼",
    "slug": "couple_with_heart_man_man_tone3_tone2",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_man_man_tone3": {
    "char": "👨🏽‍❤️‍👨🏽",
    "slug": "couple_with_heart_man_man_tone3",
    "category": "people"
  },
  "couple_with_heart_man_man_medium_skin_tone": {
    "char": "👨🏽‍❤️‍👨🏽",
    "slug": "couple_with_heart_man_man_tone3",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_man_man_tone3_tone4": {
    "char": "👨🏽‍❤️‍👨🏾",
    "slug": "couple_with_heart_man_man_tone3_tone4",
    "category": "people"
  },
  "couple_with_heart_man_man_medium_skin_tone_medium_dark_skin_tone": {
    "char": "👨🏽‍❤️‍👨🏾",
    "slug": "couple_with_heart_man_man_tone3_tone4",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_man_man_tone3_tone5": {
    "char": "👨🏽‍❤️‍👨🏿",
    "slug": "couple_with_heart_man_man_tone3_tone5",
    "category": "people"
  },
  "couple_with_heart_man_man_medium_skin_tone_dark_skin_tone": {
    "char": "👨🏽‍❤️‍👨🏿",
    "slug": "couple_with_heart_man_man_tone3_tone5",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_man_man_tone4_tone1": {
    "char": "👨🏾‍❤️‍👨🏻",
    "slug": "couple_with_heart_man_man_tone4_tone1",
    "category": "people"
  },
  "couple_with_heart_man_man_medium_dark_skin_tone_light_skin_tone": {
    "char": "👨🏾‍❤️‍👨🏻",
    "slug": "couple_with_heart_man_man_tone4_tone1",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_man_man_tone4_tone2": {
    "char": "👨🏾‍❤️‍👨🏼",
    "slug": "couple_with_heart_man_man_tone4_tone2",
    "category": "people"
  },
  "couple_with_heart_man_man_medium_dark_skin_tone_medium_light_skin_tone": {
    "char": "👨🏾‍❤️‍👨🏼",
    "slug": "couple_with_heart_man_man_tone4_tone2",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_man_man_tone4_tone3": {
    "char": "👨🏾‍❤️‍👨🏽",
    "slug": "couple_with_heart_man_man_tone4_tone3",
    "category": "people"
  },
  "couple_with_heart_man_man_medium_dark_skin_tone_medium_skin_tone": {
    "char": "👨🏾‍❤️‍👨🏽",
    "slug": "couple_with_heart_man_man_tone4_tone3",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_man_man_tone4": {
    "char": "👨🏾‍❤️‍👨🏾",
    "slug": "couple_with_heart_man_man_tone4",
    "category": "people"
  },
  "couple_with_heart_man_man_medium_dark_skin_tone": {
    "char": "👨🏾‍❤️‍👨🏾",
    "slug": "couple_with_heart_man_man_tone4",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_man_man_tone4_tone5": {
    "char": "👨🏾‍❤️‍👨🏿",
    "slug": "couple_with_heart_man_man_tone4_tone5",
    "category": "people"
  },
  "couple_with_heart_man_man_medium_dark_skin_tone_dark_skin_tone": {
    "char": "👨🏾‍❤️‍👨🏿",
    "slug": "couple_with_heart_man_man_tone4_tone5",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_man_man_tone5_tone1": {
    "char": "👨🏿‍❤️‍👨🏻",
    "slug": "couple_with_heart_man_man_tone5_tone1",
    "category": "people"
  },
  "couple_with_heart_man_man_dark_skin_tone_light_skin_tone": {
    "char": "👨🏿‍❤️‍👨🏻",
    "slug": "couple_with_heart_man_man_tone5_tone1",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_man_man_tone5_tone2": {
    "char": "👨🏿‍❤️‍👨🏼",
    "slug": "couple_with_heart_man_man_tone5_tone2",
    "category": "people"
  },
  "couple_with_heart_man_man_dark_skin_tone_medium_light_skin_tone": {
    "char": "👨🏿‍❤️‍👨🏼",
    "slug": "couple_with_heart_man_man_tone5_tone2",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_man_man_tone5_tone3": {
    "char": "👨🏿‍❤️‍👨🏽",
    "slug": "couple_with_heart_man_man_tone5_tone3",
    "category": "people"
  },
  "couple_with_heart_man_man_dark_skin_tone_medium_skin_tone": {
    "char": "👨🏿‍❤️‍👨🏽",
    "slug": "couple_with_heart_man_man_tone5_tone3",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_man_man_tone5_tone4": {
    "char": "👨🏿‍❤️‍👨🏾",
    "slug": "couple_with_heart_man_man_tone5_tone4",
    "category": "people"
  },
  "couple_with_heart_man_man_dark_skin_tone_medium_dark_skin_tone": {
    "char": "👨🏿‍❤️‍👨🏾",
    "slug": "couple_with_heart_man_man_tone5_tone4",
    "category": "people",
    "isAlternative": true
  },
  "couple_with_heart_man_man_tone5": {
    "char": "👨🏿‍❤️‍👨🏿",
    "slug": "couple_with_heart_man_man_tone5",
    "category": "people"
  },
  "couple_with_heart_man_man_dark_skin_tone": {
    "char": "👨🏿‍❤️‍👨🏿",
    "slug": "couple_with_heart_man_man_tone5",
    "category": "people",
    "isAlternative": true
  },
  "couplekiss": { "char": "💏", "slug": "couplekiss", "category": "people" },
  "kiss_tone1": { "char": "💏🏻", "slug": "kiss_tone1", "category": "people" },
  "kiss_light_skin_tone": {
    "char": "💏🏻",
    "slug": "kiss_tone1",
    "category": "people",
    "isAlternative": true
  },
  "kiss_person_person_tone1_tone2": {
    "char": "🧑🏻‍❤️‍💋‍🧑🏼",
    "slug": "kiss_person_person_tone1_tone2",
    "category": "people"
  },
  "kiss_person_person_light_skin_tone_medium_light_skin_tone": {
    "char": "🧑🏻‍❤️‍💋‍🧑🏼",
    "slug": "kiss_person_person_tone1_tone2",
    "category": "people",
    "isAlternative": true
  },
  "kiss_person_person_tone1_tone3": {
    "char": "🧑🏻‍❤️‍💋‍🧑🏽",
    "slug": "kiss_person_person_tone1_tone3",
    "category": "people"
  },
  "kiss_person_person_light_skin_tone_medium_skin_tone": {
    "char": "🧑🏻‍❤️‍💋‍🧑🏽",
    "slug": "kiss_person_person_tone1_tone3",
    "category": "people",
    "isAlternative": true
  },
  "kiss_person_person_tone1_tone4": {
    "char": "🧑🏻‍❤️‍💋‍🧑🏾",
    "slug": "kiss_person_person_tone1_tone4",
    "category": "people"
  },
  "kiss_person_person_light_skin_tone_medium_dark_skin_tone": {
    "char": "🧑🏻‍❤️‍💋‍🧑🏾",
    "slug": "kiss_person_person_tone1_tone4",
    "category": "people",
    "isAlternative": true
  },
  "kiss_person_person_tone1_tone5": {
    "char": "🧑🏻‍❤️‍💋‍🧑🏿",
    "slug": "kiss_person_person_tone1_tone5",
    "category": "people"
  },
  "kiss_person_person_light_skin_tone_dark_skin_tone": {
    "char": "🧑🏻‍❤️‍💋‍🧑🏿",
    "slug": "kiss_person_person_tone1_tone5",
    "category": "people",
    "isAlternative": true
  },
  "kiss_person_person_tone2_tone1": {
    "char": "🧑🏼‍❤️‍💋‍🧑🏻",
    "slug": "kiss_person_person_tone2_tone1",
    "category": "people"
  },
  "kiss_person_person_medium_light_skin_tone_light_skin_tone": {
    "char": "🧑🏼‍❤️‍💋‍🧑🏻",
    "slug": "kiss_person_person_tone2_tone1",
    "category": "people",
    "isAlternative": true
  },
  "kiss_tone2": { "char": "💏🏼", "slug": "kiss_tone2", "category": "people" },
  "kiss_medium_light_skin_tone": {
    "char": "💏🏼",
    "slug": "kiss_tone2",
    "category": "people",
    "isAlternative": true
  },
  "kiss_person_person_tone2_tone3": {
    "char": "🧑🏼‍❤️‍💋‍🧑🏽",
    "slug": "kiss_person_person_tone2_tone3",
    "category": "people"
  },
  "kiss_person_person_medium_light_skin_tone_medium_skin_tone": {
    "char": "🧑🏼‍❤️‍💋‍🧑🏽",
    "slug": "kiss_person_person_tone2_tone3",
    "category": "people",
    "isAlternative": true
  },
  "kiss_person_person_tone2_tone4": {
    "char": "🧑🏼‍❤️‍💋‍🧑🏾",
    "slug": "kiss_person_person_tone2_tone4",
    "category": "people"
  },
  "kiss_person_person_medium_light_skin_tone_medium_dark_skin_tone": {
    "char": "🧑🏼‍❤️‍💋‍🧑🏾",
    "slug": "kiss_person_person_tone2_tone4",
    "category": "people",
    "isAlternative": true
  },
  "kiss_person_person_tone2_tone5": {
    "char": "🧑🏼‍❤️‍💋‍🧑🏿",
    "slug": "kiss_person_person_tone2_tone5",
    "category": "people"
  },
  "kiss_person_person_medium_light_skin_tone_dark_skin_tone": {
    "char": "🧑🏼‍❤️‍💋‍🧑🏿",
    "slug": "kiss_person_person_tone2_tone5",
    "category": "people",
    "isAlternative": true
  },
  "kiss_person_person_tone3_tone1": {
    "char": "🧑🏽‍❤️‍💋‍🧑🏻",
    "slug": "kiss_person_person_tone3_tone1",
    "category": "people"
  },
  "kiss_person_person_medium_skin_tone_light_skin_tone": {
    "char": "🧑🏽‍❤️‍💋‍🧑🏻",
    "slug": "kiss_person_person_tone3_tone1",
    "category": "people",
    "isAlternative": true
  },
  "kiss_person_person_tone3_tone2": {
    "char": "🧑🏽‍❤️‍💋‍🧑🏼",
    "slug": "kiss_person_person_tone3_tone2",
    "category": "people"
  },
  "kiss_person_person_medium_skin_tone_medium_light_skin_tone": {
    "char": "🧑🏽‍❤️‍💋‍🧑🏼",
    "slug": "kiss_person_person_tone3_tone2",
    "category": "people",
    "isAlternative": true
  },
  "kiss_tone3": { "char": "💏🏽", "slug": "kiss_tone3", "category": "people" },
  "kiss_medium_skin_tone": {
    "char": "💏🏽",
    "slug": "kiss_tone3",
    "category": "people",
    "isAlternative": true
  },
  "kiss_person_person_tone3_tone4": {
    "char": "🧑🏽‍❤️‍💋‍🧑🏾",
    "slug": "kiss_person_person_tone3_tone4",
    "category": "people"
  },
  "kiss_person_person_medium_skin_tone_medium_dark_skin_tone": {
    "char": "🧑🏽‍❤️‍💋‍🧑🏾",
    "slug": "kiss_person_person_tone3_tone4",
    "category": "people",
    "isAlternative": true
  },
  "kiss_person_person_tone3_tone5": {
    "char": "🧑🏽‍❤️‍💋‍🧑🏿",
    "slug": "kiss_person_person_tone3_tone5",
    "category": "people"
  },
  "kiss_person_person_medium_skin_tone_dark_skin_tone": {
    "char": "🧑🏽‍❤️‍💋‍🧑🏿",
    "slug": "kiss_person_person_tone3_tone5",
    "category": "people",
    "isAlternative": true
  },
  "kiss_person_person_tone4_tone1": {
    "char": "🧑🏾‍❤️‍💋‍🧑🏻",
    "slug": "kiss_person_person_tone4_tone1",
    "category": "people"
  },
  "kiss_person_person_medium_dark_skin_tone_light_skin_tone": {
    "char": "🧑🏾‍❤️‍💋‍🧑🏻",
    "slug": "kiss_person_person_tone4_tone1",
    "category": "people",
    "isAlternative": true
  },
  "kiss_person_person_tone4_tone2": {
    "char": "🧑🏾‍❤️‍💋‍🧑🏼",
    "slug": "kiss_person_person_tone4_tone2",
    "category": "people"
  },
  "kiss_person_person_medium_dark_skin_tone_medium_light_skin_tone": {
    "char": "🧑🏾‍❤️‍💋‍🧑🏼",
    "slug": "kiss_person_person_tone4_tone2",
    "category": "people",
    "isAlternative": true
  },
  "kiss_person_person_tone4_tone3": {
    "char": "🧑🏾‍❤️‍💋‍🧑🏽",
    "slug": "kiss_person_person_tone4_tone3",
    "category": "people"
  },
  "kiss_person_person_medium_dark_skin_tone_medium_skin_tone": {
    "char": "🧑🏾‍❤️‍💋‍🧑🏽",
    "slug": "kiss_person_person_tone4_tone3",
    "category": "people",
    "isAlternative": true
  },
  "kiss_tone4": { "char": "💏🏾", "slug": "kiss_tone4", "category": "people" },
  "kiss_medium_dark_skin_tone": {
    "char": "💏🏾",
    "slug": "kiss_tone4",
    "category": "people",
    "isAlternative": true
  },
  "kiss_person_person_tone4_tone5": {
    "char": "🧑🏾‍❤️‍💋‍🧑🏿",
    "slug": "kiss_person_person_tone4_tone5",
    "category": "people"
  },
  "kiss_person_person_medium_dark_skin_tone_dark_skin_tone": {
    "char": "🧑🏾‍❤️‍💋‍🧑🏿",
    "slug": "kiss_person_person_tone4_tone5",
    "category": "people",
    "isAlternative": true
  },
  "kiss_person_person_tone5_tone1": {
    "char": "🧑🏿‍❤️‍💋‍🧑🏻",
    "slug": "kiss_person_person_tone5_tone1",
    "category": "people"
  },
  "kiss_person_person_dark_skin_tone_light_skin_tone": {
    "char": "🧑🏿‍❤️‍💋‍🧑🏻",
    "slug": "kiss_person_person_tone5_tone1",
    "category": "people",
    "isAlternative": true
  },
  "kiss_person_person_tone5_tone2": {
    "char": "🧑🏿‍❤️‍💋‍🧑🏼",
    "slug": "kiss_person_person_tone5_tone2",
    "category": "people"
  },
  "kiss_person_person_dark_skin_tone_medium_light_skin_tone": {
    "char": "🧑🏿‍❤️‍💋‍🧑🏼",
    "slug": "kiss_person_person_tone5_tone2",
    "category": "people",
    "isAlternative": true
  },
  "kiss_person_person_tone5_tone3": {
    "char": "🧑🏿‍❤️‍💋‍🧑🏽",
    "slug": "kiss_person_person_tone5_tone3",
    "category": "people"
  },
  "kiss_person_person_dark_skin_tone_medium_skin_tone": {
    "char": "🧑🏿‍❤️‍💋‍🧑🏽",
    "slug": "kiss_person_person_tone5_tone3",
    "category": "people",
    "isAlternative": true
  },
  "kiss_person_person_tone5_tone4": {
    "char": "🧑🏿‍❤️‍💋‍🧑🏾",
    "slug": "kiss_person_person_tone5_tone4",
    "category": "people"
  },
  "kiss_person_person_dark_skin_tone_medium_dark_skin_tone": {
    "char": "🧑🏿‍❤️‍💋‍🧑🏾",
    "slug": "kiss_person_person_tone5_tone4",
    "category": "people",
    "isAlternative": true
  },
  "kiss_tone5": { "char": "💏🏿", "slug": "kiss_tone5", "category": "people" },
  "kiss_dark_skin_tone": {
    "char": "💏🏿",
    "slug": "kiss_tone5",
    "category": "people",
    "isAlternative": true
  },
  "kiss_woman_man": {
    "char": "👩‍❤️‍💋‍👨",
    "slug": "kiss_woman_man",
    "category": "people"
  },
  "kiss_woman_man_tone1": {
    "char": "👩🏻‍❤️‍💋‍👨🏻",
    "slug": "kiss_woman_man_tone1",
    "category": "people"
  },
  "kiss_woman_man_light_skin_tone": {
    "char": "👩🏻‍❤️‍💋‍👨🏻",
    "slug": "kiss_woman_man_tone1",
    "category": "people",
    "isAlternative": true
  },
  "kiss_woman_man_tone1_tone2": {
    "char": "👩🏻‍❤️‍💋‍👨🏼",
    "slug": "kiss_woman_man_tone1_tone2",
    "category": "people"
  },
  "kiss_woman_man_light_skin_tone_medium_light_skin_tone": {
    "char": "👩🏻‍❤️‍💋‍👨🏼",
    "slug": "kiss_woman_man_tone1_tone2",
    "category": "people",
    "isAlternative": true
  },
  "kiss_woman_man_tone1_tone3": {
    "char": "👩🏻‍❤️‍💋‍👨🏽",
    "slug": "kiss_woman_man_tone1_tone3",
    "category": "people"
  },
  "kiss_woman_man_light_skin_tone_medium_skin_tone": {
    "char": "👩🏻‍❤️‍💋‍👨🏽",
    "slug": "kiss_woman_man_tone1_tone3",
    "category": "people",
    "isAlternative": true
  },
  "kiss_woman_man_tone1_tone4": {
    "char": "👩🏻‍❤️‍💋‍👨🏾",
    "slug": "kiss_woman_man_tone1_tone4",
    "category": "people"
  },
  "kiss_woman_man_light_skin_tone_medium_dark_skin_tone": {
    "char": "👩🏻‍❤️‍💋‍👨🏾",
    "slug": "kiss_woman_man_tone1_tone4",
    "category": "people",
    "isAlternative": true
  },
  "kiss_woman_man_tone1_tone5": {
    "char": "👩🏻‍❤️‍💋‍👨🏿",
    "slug": "kiss_woman_man_tone1_tone5",
    "category": "people"
  },
  "kiss_woman_man_light_skin_tone_dark_skin_tone": {
    "char": "👩🏻‍❤️‍💋‍👨🏿",
    "slug": "kiss_woman_man_tone1_tone5",
    "category": "people",
    "isAlternative": true
  },
  "kiss_woman_man_tone2_tone1": {
    "char": "👩🏼‍❤️‍💋‍👨🏻",
    "slug": "kiss_woman_man_tone2_tone1",
    "category": "people"
  },
  "kiss_woman_man_medium_light_skin_tone_light_skin_tone": {
    "char": "👩🏼‍❤️‍💋‍👨🏻",
    "slug": "kiss_woman_man_tone2_tone1",
    "category": "people",
    "isAlternative": true
  },
  "kiss_woman_man_tone2": {
    "char": "👩🏼‍❤️‍💋‍👨🏼",
    "slug": "kiss_woman_man_tone2",
    "category": "people"
  },
  "kiss_woman_man_medium_light_skin_tone": {
    "char": "👩🏼‍❤️‍💋‍👨🏼",
    "slug": "kiss_woman_man_tone2",
    "category": "people",
    "isAlternative": true
  },
  "kiss_woman_man_tone2_tone3": {
    "char": "👩🏼‍❤️‍💋‍👨🏽",
    "slug": "kiss_woman_man_tone2_tone3",
    "category": "people"
  },
  "kiss_woman_man_medium_light_skin_tone_medium_skin_tone": {
    "char": "👩🏼‍❤️‍💋‍👨🏽",
    "slug": "kiss_woman_man_tone2_tone3",
    "category": "people",
    "isAlternative": true
  },
  "kiss_woman_man_tone2_tone4": {
    "char": "👩🏼‍❤️‍💋‍👨🏾",
    "slug": "kiss_woman_man_tone2_tone4",
    "category": "people"
  },
  "kiss_woman_man_medium_light_skin_tone_medium_dark_skin_tone": {
    "char": "👩🏼‍❤️‍💋‍👨🏾",
    "slug": "kiss_woman_man_tone2_tone4",
    "category": "people",
    "isAlternative": true
  },
  "kiss_woman_man_tone2_tone5": {
    "char": "👩🏼‍❤️‍💋‍👨🏿",
    "slug": "kiss_woman_man_tone2_tone5",
    "category": "people"
  },
  "kiss_woman_man_medium_light_skin_tone_dark_skin_tone": {
    "char": "👩🏼‍❤️‍💋‍👨🏿",
    "slug": "kiss_woman_man_tone2_tone5",
    "category": "people",
    "isAlternative": true
  },
  "kiss_woman_man_tone3_tone1": {
    "char": "👩🏽‍❤️‍💋‍👨🏻",
    "slug": "kiss_woman_man_tone3_tone1",
    "category": "people"
  },
  "kiss_woman_man_medium_skin_tone_light_skin_tone": {
    "char": "👩🏽‍❤️‍💋‍👨🏻",
    "slug": "kiss_woman_man_tone3_tone1",
    "category": "people",
    "isAlternative": true
  },
  "kiss_woman_man_tone3_tone2": {
    "char": "👩🏽‍❤️‍💋‍👨🏼",
    "slug": "kiss_woman_man_tone3_tone2",
    "category": "people"
  },
  "kiss_woman_man_medium_skin_tone_medium_light_skin_tone": {
    "char": "👩🏽‍❤️‍💋‍👨🏼",
    "slug": "kiss_woman_man_tone3_tone2",
    "category": "people",
    "isAlternative": true
  },
  "kiss_woman_man_tone3": {
    "char": "👩🏽‍❤️‍💋‍👨🏽",
    "slug": "kiss_woman_man_tone3",
    "category": "people"
  },
  "kiss_woman_man_medium_skin_tone": {
    "char": "👩🏽‍❤️‍💋‍👨🏽",
    "slug": "kiss_woman_man_tone3",
    "category": "people",
    "isAlternative": true
  },
  "kiss_woman_man_tone3_tone4": {
    "char": "👩🏽‍❤️‍💋‍👨🏾",
    "slug": "kiss_woman_man_tone3_tone4",
    "category": "people"
  },
  "kiss_woman_man_medium_skin_tone_medium_dark_skin_tone": {
    "char": "👩🏽‍❤️‍💋‍👨🏾",
    "slug": "kiss_woman_man_tone3_tone4",
    "category": "people",
    "isAlternative": true
  },
  "kiss_woman_man_tone3_tone5": {
    "char": "👩🏽‍❤️‍💋‍👨🏿",
    "slug": "kiss_woman_man_tone3_tone5",
    "category": "people"
  },
  "kiss_woman_man_medium_skin_tone_dark_skin_tone": {
    "char": "👩🏽‍❤️‍💋‍👨🏿",
    "slug": "kiss_woman_man_tone3_tone5",
    "category": "people",
    "isAlternative": true
  },
  "kiss_woman_man_tone4_tone1": {
    "char": "👩🏾‍❤️‍💋‍👨🏻",
    "slug": "kiss_woman_man_tone4_tone1",
    "category": "people"
  },
  "kiss_woman_man_medium_dark_skin_tone_light_skin_tone": {
    "char": "👩🏾‍❤️‍💋‍👨🏻",
    "slug": "kiss_woman_man_tone4_tone1",
    "category": "people",
    "isAlternative": true
  },
  "kiss_woman_man_tone4_tone2": {
    "char": "👩🏾‍❤️‍💋‍👨🏼",
    "slug": "kiss_woman_man_tone4_tone2",
    "category": "people"
  },
  "kiss_woman_man_medium_dark_skin_tone_medium_light_skin_tone": {
    "char": "👩🏾‍❤️‍💋‍👨🏼",
    "slug": "kiss_woman_man_tone4_tone2",
    "category": "people",
    "isAlternative": true
  },
  "kiss_woman_man_tone4_tone3": {
    "char": "👩🏾‍❤️‍💋‍👨🏽",
    "slug": "kiss_woman_man_tone4_tone3",
    "category": "people"
  },
  "kiss_woman_man_medium_dark_skin_tone_medium_skin_tone": {
    "char": "👩🏾‍❤️‍💋‍👨🏽",
    "slug": "kiss_woman_man_tone4_tone3",
    "category": "people",
    "isAlternative": true
  },
  "kiss_woman_man_tone4": {
    "char": "👩🏾‍❤️‍💋‍👨🏾",
    "slug": "kiss_woman_man_tone4",
    "category": "people"
  },
  "kiss_woman_man_medium_dark_skin_tone": {
    "char": "👩🏾‍❤️‍💋‍👨🏾",
    "slug": "kiss_woman_man_tone4",
    "category": "people",
    "isAlternative": true
  },
  "kiss_woman_man_tone4_tone5": {
    "char": "👩🏾‍❤️‍💋‍👨🏿",
    "slug": "kiss_woman_man_tone4_tone5",
    "category": "people"
  },
  "kiss_woman_man_medium_dark_skin_tone_dark_skin_tone": {
    "char": "👩🏾‍❤️‍💋‍👨🏿",
    "slug": "kiss_woman_man_tone4_tone5",
    "category": "people",
    "isAlternative": true
  },
  "kiss_woman_man_tone5_tone1": {
    "char": "👩🏿‍❤️‍💋‍👨🏻",
    "slug": "kiss_woman_man_tone5_tone1",
    "category": "people"
  },
  "kiss_woman_man_dark_skin_tone_light_skin_tone": {
    "char": "👩🏿‍❤️‍💋‍👨🏻",
    "slug": "kiss_woman_man_tone5_tone1",
    "category": "people",
    "isAlternative": true
  },
  "kiss_woman_man_tone5_tone2": {
    "char": "👩🏿‍❤️‍💋‍👨🏼",
    "slug": "kiss_woman_man_tone5_tone2",
    "category": "people"
  },
  "kiss_woman_man_dark_skin_tone_medium_light_skin_tone": {
    "char": "👩🏿‍❤️‍💋‍👨🏼",
    "slug": "kiss_woman_man_tone5_tone2",
    "category": "people",
    "isAlternative": true
  },
  "kiss_woman_man_tone5_tone3": {
    "char": "👩🏿‍❤️‍💋‍👨🏽",
    "slug": "kiss_woman_man_tone5_tone3",
    "category": "people"
  },
  "kiss_woman_man_dark_skin_tone_medium_skin_tone": {
    "char": "👩🏿‍❤️‍💋‍👨🏽",
    "slug": "kiss_woman_man_tone5_tone3",
    "category": "people",
    "isAlternative": true
  },
  "kiss_woman_man_tone5_tone4": {
    "char": "👩🏿‍❤️‍💋‍👨🏾",
    "slug": "kiss_woman_man_tone5_tone4",
    "category": "people"
  },
  "kiss_woman_man_dark_skin_tone_medium_dark_skin_tone": {
    "char": "👩🏿‍❤️‍💋‍👨🏾",
    "slug": "kiss_woman_man_tone5_tone4",
    "category": "people",
    "isAlternative": true
  },
  "kiss_woman_man_tone5": {
    "char": "👩🏿‍❤️‍💋‍👨🏿",
    "slug": "kiss_woman_man_tone5",
    "category": "people"
  },
  "kiss_woman_man_dark_skin_tone": {
    "char": "👩🏿‍❤️‍💋‍👨🏿",
    "slug": "kiss_woman_man_tone5",
    "category": "people",
    "isAlternative": true
  },
  "kiss_ww": { "char": "👩‍❤️‍💋‍👩", "slug": "kiss_ww", "category": "people" },
  "couplekiss_ww": {
    "char": "👩‍❤️‍💋‍👩",
    "slug": "kiss_ww",
    "category": "people",
    "isAlternative": true
  },
  "kiss_woman_woman_tone1": {
    "char": "👩🏻‍❤️‍💋‍👩🏻",
    "slug": "kiss_woman_woman_tone1",
    "category": "people"
  },
  "kiss_woman_woman_light_skin_tone": {
    "char": "👩🏻‍❤️‍💋‍👩🏻",
    "slug": "kiss_woman_woman_tone1",
    "category": "people",
    "isAlternative": true
  },
  "kiss_woman_woman_tone1_tone2": {
    "char": "👩🏻‍❤️‍💋‍👩🏼",
    "slug": "kiss_woman_woman_tone1_tone2",
    "category": "people"
  },
  "kiss_woman_woman_light_skin_tone_medium_light_skin_tone": {
    "char": "👩🏻‍❤️‍💋‍👩🏼",
    "slug": "kiss_woman_woman_tone1_tone2",
    "category": "people",
    "isAlternative": true
  },
  "kiss_woman_woman_tone1_tone3": {
    "char": "👩🏻‍❤️‍💋‍👩🏽",
    "slug": "kiss_woman_woman_tone1_tone3",
    "category": "people"
  },
  "kiss_woman_woman_light_skin_tone_medium_skin_tone": {
    "char": "👩🏻‍❤️‍💋‍👩🏽",
    "slug": "kiss_woman_woman_tone1_tone3",
    "category": "people",
    "isAlternative": true
  },
  "kiss_woman_woman_tone1_tone4": {
    "char": "👩🏻‍❤️‍💋‍👩🏾",
    "slug": "kiss_woman_woman_tone1_tone4",
    "category": "people"
  },
  "kiss_woman_woman_light_skin_tone_medium_dark_skin_tone": {
    "char": "👩🏻‍❤️‍💋‍👩🏾",
    "slug": "kiss_woman_woman_tone1_tone4",
    "category": "people",
    "isAlternative": true
  },
  "kiss_woman_woman_tone1_tone5": {
    "char": "👩🏻‍❤️‍💋‍👩🏿",
    "slug": "kiss_woman_woman_tone1_tone5",
    "category": "people"
  },
  "kiss_woman_woman_light_skin_tone_dark_skin_tone": {
    "char": "👩🏻‍❤️‍💋‍👩🏿",
    "slug": "kiss_woman_woman_tone1_tone5",
    "category": "people",
    "isAlternative": true
  },
  "kiss_woman_woman_tone2_tone1": {
    "char": "👩🏼‍❤️‍💋‍👩🏻",
    "slug": "kiss_woman_woman_tone2_tone1",
    "category": "people"
  },
  "kiss_woman_woman_medium_light_skin_tone_light_skin_tone": {
    "char": "👩🏼‍❤️‍💋‍👩🏻",
    "slug": "kiss_woman_woman_tone2_tone1",
    "category": "people",
    "isAlternative": true
  },
  "kiss_woman_woman_tone2": {
    "char": "👩🏼‍❤️‍💋‍👩🏼",
    "slug": "kiss_woman_woman_tone2",
    "category": "people"
  },
  "kiss_woman_woman_medium_light_skin_tone": {
    "char": "👩🏼‍❤️‍💋‍👩🏼",
    "slug": "kiss_woman_woman_tone2",
    "category": "people",
    "isAlternative": true
  },
  "kiss_woman_woman_tone2_tone3": {
    "char": "👩🏼‍❤️‍💋‍👩🏽",
    "slug": "kiss_woman_woman_tone2_tone3",
    "category": "people"
  },
  "kiss_woman_woman_medium_light_skin_tone_medium_skin_tone": {
    "char": "👩🏼‍❤️‍💋‍👩🏽",
    "slug": "kiss_woman_woman_tone2_tone3",
    "category": "people",
    "isAlternative": true
  },
  "kiss_woman_woman_tone2_tone4": {
    "char": "👩🏼‍❤️‍💋‍👩🏾",
    "slug": "kiss_woman_woman_tone2_tone4",
    "category": "people"
  },
  "kiss_woman_woman_medium_light_skin_tone_medium_dark_skin_tone": {
    "char": "👩🏼‍❤️‍💋‍👩🏾",
    "slug": "kiss_woman_woman_tone2_tone4",
    "category": "people",
    "isAlternative": true
  },
  "kiss_woman_woman_tone2_tone5": {
    "char": "👩🏼‍❤️‍💋‍👩🏿",
    "slug": "kiss_woman_woman_tone2_tone5",
    "category": "people"
  },
  "kiss_woman_woman_medium_light_skin_tone_dark_skin_tone": {
    "char": "👩🏼‍❤️‍💋‍👩🏿",
    "slug": "kiss_woman_woman_tone2_tone5",
    "category": "people",
    "isAlternative": true
  },
  "kiss_woman_woman_tone3_tone1": {
    "char": "👩🏽‍❤️‍💋‍👩🏻",
    "slug": "kiss_woman_woman_tone3_tone1",
    "category": "people"
  },
  "kiss_woman_woman_medium_skin_tone_light_skin_tone": {
    "char": "👩🏽‍❤️‍💋‍👩🏻",
    "slug": "kiss_woman_woman_tone3_tone1",
    "category": "people",
    "isAlternative": true
  },
  "kiss_woman_woman_tone3_tone2": {
    "char": "👩🏽‍❤️‍💋‍👩🏼",
    "slug": "kiss_woman_woman_tone3_tone2",
    "category": "people"
  },
  "kiss_woman_woman_medium_skin_tone_medium_light_skin_tone": {
    "char": "👩🏽‍❤️‍💋‍👩🏼",
    "slug": "kiss_woman_woman_tone3_tone2",
    "category": "people",
    "isAlternative": true
  },
  "kiss_woman_woman_tone3": {
    "char": "👩🏽‍❤️‍💋‍👩🏽",
    "slug": "kiss_woman_woman_tone3",
    "category": "people"
  },
  "kiss_woman_woman_medium_skin_tone": {
    "char": "👩🏽‍❤️‍💋‍👩🏽",
    "slug": "kiss_woman_woman_tone3",
    "category": "people",
    "isAlternative": true
  },
  "kiss_woman_woman_tone3_tone4": {
    "char": "👩🏽‍❤️‍💋‍👩🏾",
    "slug": "kiss_woman_woman_tone3_tone4",
    "category": "people"
  },
  "kiss_woman_woman_medium_skin_tone_medium_dark_skin_tone": {
    "char": "👩🏽‍❤️‍💋‍👩🏾",
    "slug": "kiss_woman_woman_tone3_tone4",
    "category": "people",
    "isAlternative": true
  },
  "kiss_woman_woman_tone3_tone5": {
    "char": "👩🏽‍❤️‍💋‍👩🏿",
    "slug": "kiss_woman_woman_tone3_tone5",
    "category": "people"
  },
  "kiss_woman_woman_medium_skin_tone_dark_skin_tone": {
    "char": "👩🏽‍❤️‍💋‍👩🏿",
    "slug": "kiss_woman_woman_tone3_tone5",
    "category": "people",
    "isAlternative": true
  },
  "kiss_woman_woman_tone4_tone1": {
    "char": "👩🏾‍❤️‍💋‍👩🏻",
    "slug": "kiss_woman_woman_tone4_tone1",
    "category": "people"
  },
  "kiss_woman_woman_medium_dark_skin_tone_light_skin_tone": {
    "char": "👩🏾‍❤️‍💋‍👩🏻",
    "slug": "kiss_woman_woman_tone4_tone1",
    "category": "people",
    "isAlternative": true
  },
  "kiss_woman_woman_tone4_tone2": {
    "char": "👩🏾‍❤️‍💋‍👩🏼",
    "slug": "kiss_woman_woman_tone4_tone2",
    "category": "people"
  },
  "kiss_woman_woman_medium_dark_skin_tone_medium_light_skin_tone": {
    "char": "👩🏾‍❤️‍💋‍👩🏼",
    "slug": "kiss_woman_woman_tone4_tone2",
    "category": "people",
    "isAlternative": true
  },
  "kiss_woman_woman_tone4_tone3": {
    "char": "👩🏾‍❤️‍💋‍👩🏽",
    "slug": "kiss_woman_woman_tone4_tone3",
    "category": "people"
  },
  "kiss_woman_woman_medium_dark_skin_tone_medium_skin_tone": {
    "char": "👩🏾‍❤️‍💋‍👩🏽",
    "slug": "kiss_woman_woman_tone4_tone3",
    "category": "people",
    "isAlternative": true
  },
  "kiss_woman_woman_tone4": {
    "char": "👩🏾‍❤️‍💋‍👩🏾",
    "slug": "kiss_woman_woman_tone4",
    "category": "people"
  },
  "kiss_woman_woman_medium_dark_skin_tone": {
    "char": "👩🏾‍❤️‍💋‍👩🏾",
    "slug": "kiss_woman_woman_tone4",
    "category": "people",
    "isAlternative": true
  },
  "kiss_woman_woman_tone4_tone5": {
    "char": "👩🏾‍❤️‍💋‍👩🏿",
    "slug": "kiss_woman_woman_tone4_tone5",
    "category": "people"
  },
  "kiss_woman_woman_medium_dark_skin_tone_dark_skin_tone": {
    "char": "👩🏾‍❤️‍💋‍👩🏿",
    "slug": "kiss_woman_woman_tone4_tone5",
    "category": "people",
    "isAlternative": true
  },
  "kiss_woman_woman_tone5_tone1": {
    "char": "👩🏿‍❤️‍💋‍👩🏻",
    "slug": "kiss_woman_woman_tone5_tone1",
    "category": "people"
  },
  "kiss_woman_woman_dark_skin_tone_light_skin_tone": {
    "char": "👩🏿‍❤️‍💋‍👩🏻",
    "slug": "kiss_woman_woman_tone5_tone1",
    "category": "people",
    "isAlternative": true
  },
  "kiss_woman_woman_tone5_tone2": {
    "char": "👩🏿‍❤️‍💋‍👩🏼",
    "slug": "kiss_woman_woman_tone5_tone2",
    "category": "people"
  },
  "kiss_woman_woman_dark_skin_tone_medium_light_skin_tone": {
    "char": "👩🏿‍❤️‍💋‍👩🏼",
    "slug": "kiss_woman_woman_tone5_tone2",
    "category": "people",
    "isAlternative": true
  },
  "kiss_woman_woman_tone5_tone3": {
    "char": "👩🏿‍❤️‍💋‍👩🏽",
    "slug": "kiss_woman_woman_tone5_tone3",
    "category": "people"
  },
  "kiss_woman_woman_dark_skin_tone_medium_skin_tone": {
    "char": "👩🏿‍❤️‍💋‍👩🏽",
    "slug": "kiss_woman_woman_tone5_tone3",
    "category": "people",
    "isAlternative": true
  },
  "kiss_woman_woman_tone5_tone4": {
    "char": "👩🏿‍❤️‍💋‍👩🏾",
    "slug": "kiss_woman_woman_tone5_tone4",
    "category": "people"
  },
  "kiss_woman_woman_dark_skin_tone_medium_dark_skin_tone": {
    "char": "👩🏿‍❤️‍💋‍👩🏾",
    "slug": "kiss_woman_woman_tone5_tone4",
    "category": "people",
    "isAlternative": true
  },
  "kiss_woman_woman_tone5": {
    "char": "👩🏿‍❤️‍💋‍👩🏿",
    "slug": "kiss_woman_woman_tone5",
    "category": "people"
  },
  "kiss_woman_woman_dark_skin_tone": {
    "char": "👩🏿‍❤️‍💋‍👩🏿",
    "slug": "kiss_woman_woman_tone5",
    "category": "people",
    "isAlternative": true
  },
  "kiss_mm": { "char": "👨‍❤️‍💋‍👨", "slug": "kiss_mm", "category": "people" },
  "couplekiss_mm": {
    "char": "👨‍❤️‍💋‍👨",
    "slug": "kiss_mm",
    "category": "people",
    "isAlternative": true
  },
  "kiss_man_man": {
    "char": "👨‍❤️‍💋‍👨",
    "slug": "kiss_mm",
    "category": "people",
    "isAlternative": true
  },
  "kiss_man_man_tone1": {
    "char": "👨🏻‍❤️‍💋‍👨🏻",
    "slug": "kiss_man_man_tone1",
    "category": "people"
  },
  "kiss_man_man_light_skin_tone": {
    "char": "👨🏻‍❤️‍💋‍👨🏻",
    "slug": "kiss_man_man_tone1",
    "category": "people",
    "isAlternative": true
  },
  "kiss_man_man_tone1_tone2": {
    "char": "👨🏻‍❤️‍💋‍👨🏼",
    "slug": "kiss_man_man_tone1_tone2",
    "category": "people"
  },
  "kiss_man_man_light_skin_tone_medium_light_skin_tone": {
    "char": "👨🏻‍❤️‍💋‍👨🏼",
    "slug": "kiss_man_man_tone1_tone2",
    "category": "people",
    "isAlternative": true
  },
  "kiss_man_man_tone1_tone3": {
    "char": "👨🏻‍❤️‍💋‍👨🏽",
    "slug": "kiss_man_man_tone1_tone3",
    "category": "people"
  },
  "kiss_man_man_light_skin_tone_medium_skin_tone": {
    "char": "👨🏻‍❤️‍💋‍👨🏽",
    "slug": "kiss_man_man_tone1_tone3",
    "category": "people",
    "isAlternative": true
  },
  "kiss_man_man_tone1_tone4": {
    "char": "👨🏻‍❤️‍💋‍👨🏾",
    "slug": "kiss_man_man_tone1_tone4",
    "category": "people"
  },
  "kiss_man_man_light_skin_tone_medium_dark_skin_tone": {
    "char": "👨🏻‍❤️‍💋‍👨🏾",
    "slug": "kiss_man_man_tone1_tone4",
    "category": "people",
    "isAlternative": true
  },
  "kiss_man_man_tone1_tone5": {
    "char": "👨🏻‍❤️‍💋‍👨🏿",
    "slug": "kiss_man_man_tone1_tone5",
    "category": "people"
  },
  "kiss_man_man_light_skin_tone_dark_skin_tone": {
    "char": "👨🏻‍❤️‍💋‍👨🏿",
    "slug": "kiss_man_man_tone1_tone5",
    "category": "people",
    "isAlternative": true
  },
  "kiss_man_man_tone2_tone1": {
    "char": "👨🏼‍❤️‍💋‍👨🏻",
    "slug": "kiss_man_man_tone2_tone1",
    "category": "people"
  },
  "kiss_man_man_medium_light_skin_tone_light_skin_tone": {
    "char": "👨🏼‍❤️‍💋‍👨🏻",
    "slug": "kiss_man_man_tone2_tone1",
    "category": "people",
    "isAlternative": true
  },
  "kiss_man_man_tone2": {
    "char": "👨🏼‍❤️‍💋‍👨🏼",
    "slug": "kiss_man_man_tone2",
    "category": "people"
  },
  "kiss_man_man_medium_light_skin_tone": {
    "char": "👨🏼‍❤️‍💋‍👨🏼",
    "slug": "kiss_man_man_tone2",
    "category": "people",
    "isAlternative": true
  },
  "kiss_man_man_tone2_tone3": {
    "char": "👨🏼‍❤️‍💋‍👨🏽",
    "slug": "kiss_man_man_tone2_tone3",
    "category": "people"
  },
  "kiss_man_man_medium_light_skin_tone_medium_skin_tone": {
    "char": "👨🏼‍❤️‍💋‍👨🏽",
    "slug": "kiss_man_man_tone2_tone3",
    "category": "people",
    "isAlternative": true
  },
  "kiss_man_man_tone2_tone4": {
    "char": "👨🏼‍❤️‍💋‍👨🏾",
    "slug": "kiss_man_man_tone2_tone4",
    "category": "people"
  },
  "kiss_man_man_medium_light_skin_tone_medium_dark_skin_tone": {
    "char": "👨🏼‍❤️‍💋‍👨🏾",
    "slug": "kiss_man_man_tone2_tone4",
    "category": "people",
    "isAlternative": true
  },
  "kiss_man_man_tone2_tone5": {
    "char": "👨🏼‍❤️‍💋‍👨🏿",
    "slug": "kiss_man_man_tone2_tone5",
    "category": "people"
  },
  "kiss_man_man_medium_light_skin_tone_dark_skin_tone": {
    "char": "👨🏼‍❤️‍💋‍👨🏿",
    "slug": "kiss_man_man_tone2_tone5",
    "category": "people",
    "isAlternative": true
  },
  "kiss_man_man_tone3_tone1": {
    "char": "👨🏽‍❤️‍💋‍👨🏻",
    "slug": "kiss_man_man_tone3_tone1",
    "category": "people"
  },
  "kiss_man_man_medium_skin_tone_light_skin_tone": {
    "char": "👨🏽‍❤️‍💋‍👨🏻",
    "slug": "kiss_man_man_tone3_tone1",
    "category": "people",
    "isAlternative": true
  },
  "kiss_man_man_tone3_tone2": {
    "char": "👨🏽‍❤️‍💋‍👨🏼",
    "slug": "kiss_man_man_tone3_tone2",
    "category": "people"
  },
  "kiss_man_man_medium_skin_tone_medium_light_skin_tone": {
    "char": "👨🏽‍❤️‍💋‍👨🏼",
    "slug": "kiss_man_man_tone3_tone2",
    "category": "people",
    "isAlternative": true
  },
  "kiss_man_man_tone3": {
    "char": "👨🏽‍❤️‍💋‍👨🏽",
    "slug": "kiss_man_man_tone3",
    "category": "people"
  },
  "kiss_man_man_medium_skin_tone": {
    "char": "👨🏽‍❤️‍💋‍👨🏽",
    "slug": "kiss_man_man_tone3",
    "category": "people",
    "isAlternative": true
  },
  "kiss_man_man_tone3_tone4": {
    "char": "👨🏽‍❤️‍💋‍👨🏾",
    "slug": "kiss_man_man_tone3_tone4",
    "category": "people"
  },
  "kiss_man_man_medium_skin_tone_medium_dark_skin_tone": {
    "char": "👨🏽‍❤️‍💋‍👨🏾",
    "slug": "kiss_man_man_tone3_tone4",
    "category": "people",
    "isAlternative": true
  },
  "kiss_man_man_tone3_tone5": {
    "char": "👨🏽‍❤️‍💋‍👨🏿",
    "slug": "kiss_man_man_tone3_tone5",
    "category": "people"
  },
  "kiss_man_man_medium_skin_tone_dark_skin_tone": {
    "char": "👨🏽‍❤️‍💋‍👨🏿",
    "slug": "kiss_man_man_tone3_tone5",
    "category": "people",
    "isAlternative": true
  },
  "kiss_man_man_tone4_tone1": {
    "char": "👨🏾‍❤️‍💋‍👨🏻",
    "slug": "kiss_man_man_tone4_tone1",
    "category": "people"
  },
  "kiss_man_man_medium_dark_skin_tone_light_skin_tone": {
    "char": "👨🏾‍❤️‍💋‍👨🏻",
    "slug": "kiss_man_man_tone4_tone1",
    "category": "people",
    "isAlternative": true
  },
  "kiss_man_man_tone4_tone2": {
    "char": "👨🏾‍❤️‍💋‍👨🏼",
    "slug": "kiss_man_man_tone4_tone2",
    "category": "people"
  },
  "kiss_man_man_medium_dark_skin_tone_medium_light_skin_tone": {
    "char": "👨🏾‍❤️‍💋‍👨🏼",
    "slug": "kiss_man_man_tone4_tone2",
    "category": "people",
    "isAlternative": true
  },
  "kiss_man_man_tone4_tone3": {
    "char": "👨🏾‍❤️‍💋‍👨🏽",
    "slug": "kiss_man_man_tone4_tone3",
    "category": "people"
  },
  "kiss_man_man_medium_dark_skin_tone_medium_skin_tone": {
    "char": "👨🏾‍❤️‍💋‍👨🏽",
    "slug": "kiss_man_man_tone4_tone3",
    "category": "people",
    "isAlternative": true
  },
  "kiss_man_man_tone4": {
    "char": "👨🏾‍❤️‍💋‍👨🏾",
    "slug": "kiss_man_man_tone4",
    "category": "people"
  },
  "kiss_man_man_medium_dark_skin_tone": {
    "char": "👨🏾‍❤️‍💋‍👨🏾",
    "slug": "kiss_man_man_tone4",
    "category": "people",
    "isAlternative": true
  },
  "kiss_man_man_tone4_tone5": {
    "char": "👨🏾‍❤️‍💋‍👨🏿",
    "slug": "kiss_man_man_tone4_tone5",
    "category": "people"
  },
  "kiss_man_man_medium_dark_skin_tone_dark_skin_tone": {
    "char": "👨🏾‍❤️‍💋‍👨🏿",
    "slug": "kiss_man_man_tone4_tone5",
    "category": "people",
    "isAlternative": true
  },
  "kiss_man_man_tone5_tone1": {
    "char": "👨🏿‍❤️‍💋‍👨🏻",
    "slug": "kiss_man_man_tone5_tone1",
    "category": "people"
  },
  "kiss_man_man_dark_skin_tone_light_skin_tone": {
    "char": "👨🏿‍❤️‍💋‍👨🏻",
    "slug": "kiss_man_man_tone5_tone1",
    "category": "people",
    "isAlternative": true
  },
  "kiss_man_man_tone5_tone2": {
    "char": "👨🏿‍❤️‍💋‍👨🏼",
    "slug": "kiss_man_man_tone5_tone2",
    "category": "people"
  },
  "kiss_man_man_dark_skin_tone_medium_light_skin_tone": {
    "char": "👨🏿‍❤️‍💋‍👨🏼",
    "slug": "kiss_man_man_tone5_tone2",
    "category": "people",
    "isAlternative": true
  },
  "kiss_man_man_tone5_tone3": {
    "char": "👨🏿‍❤️‍💋‍👨🏽",
    "slug": "kiss_man_man_tone5_tone3",
    "category": "people"
  },
  "kiss_man_man_dark_skin_tone_medium_skin_tone": {
    "char": "👨🏿‍❤️‍💋‍👨🏽",
    "slug": "kiss_man_man_tone5_tone3",
    "category": "people",
    "isAlternative": true
  },
  "kiss_man_man_tone5_tone4": {
    "char": "👨🏿‍❤️‍💋‍👨🏾",
    "slug": "kiss_man_man_tone5_tone4",
    "category": "people"
  },
  "kiss_man_man_dark_skin_tone_medium_dark_skin_tone": {
    "char": "👨🏿‍❤️‍💋‍👨🏾",
    "slug": "kiss_man_man_tone5_tone4",
    "category": "people",
    "isAlternative": true
  },
  "kiss_man_man_tone5": {
    "char": "👨🏿‍❤️‍💋‍👨🏿",
    "slug": "kiss_man_man_tone5",
    "category": "people"
  },
  "kiss_man_man_dark_skin_tone": {
    "char": "👨🏿‍❤️‍💋‍👨🏿",
    "slug": "kiss_man_man_tone5",
    "category": "people",
    "isAlternative": true
  },
  "family": { "char": "👪", "slug": "family", "category": "people" },
  "family_man_woman_boy": {
    "char": "👨‍👩‍👦",
    "slug": "family_man_woman_boy",
    "category": "people"
  },
  "family_mwg": { "char": "👨‍👩‍👧", "slug": "family_mwg", "category": "people" },
  "family_mwgb": { "char": "👨‍👩‍👧‍👦", "slug": "family_mwgb", "category": "people" },
  "family_mwbb": { "char": "👨‍👩‍👦‍👦", "slug": "family_mwbb", "category": "people" },
  "family_mwgg": { "char": "👨‍👩‍👧‍👧", "slug": "family_mwgg", "category": "people" },
  "family_wwb": { "char": "👩‍👩‍👦", "slug": "family_wwb", "category": "people" },
  "family_wwg": { "char": "👩‍👩‍👧", "slug": "family_wwg", "category": "people" },
  "family_wwgb": { "char": "👩‍👩‍👧‍👦", "slug": "family_wwgb", "category": "people" },
  "family_wwbb": { "char": "👩‍👩‍👦‍👦", "slug": "family_wwbb", "category": "people" },
  "family_wwgg": { "char": "👩‍👩‍👧‍👧", "slug": "family_wwgg", "category": "people" },
  "family_mmb": { "char": "👨‍👨‍👦", "slug": "family_mmb", "category": "people" },
  "family_mmg": { "char": "👨‍👨‍👧", "slug": "family_mmg", "category": "people" },
  "family_mmgb": { "char": "👨‍👨‍👧‍👦", "slug": "family_mmgb", "category": "people" },
  "family_mmbb": { "char": "👨‍👨‍👦‍👦", "slug": "family_mmbb", "category": "people" },
  "family_mmgg": { "char": "👨‍👨‍👧‍👧", "slug": "family_mmgg", "category": "people" },
  "family_woman_boy": {
    "char": "👩‍👦",
    "slug": "family_woman_boy",
    "category": "people"
  },
  "family_woman_girl": {
    "char": "👩‍👧",
    "slug": "family_woman_girl",
    "category": "people"
  },
  "family_woman_girl_boy": {
    "char": "👩‍👧‍👦",
    "slug": "family_woman_girl_boy",
    "category": "people"
  },
  "family_woman_boy_boy": {
    "char": "👩‍👦‍👦",
    "slug": "family_woman_boy_boy",
    "category": "people"
  },
  "family_woman_girl_girl": {
    "char": "👩‍👧‍👧",
    "slug": "family_woman_girl_girl",
    "category": "people"
  },
  "family_man_boy": {
    "char": "👨‍👦",
    "slug": "family_man_boy",
    "category": "people"
  },
  "family_man_girl": {
    "char": "👨‍👧",
    "slug": "family_man_girl",
    "category": "people"
  },
  "family_man_girl_boy": {
    "char": "👨‍👧‍👦",
    "slug": "family_man_girl_boy",
    "category": "people"
  },
  "family_man_boy_boy": {
    "char": "👨‍👦‍👦",
    "slug": "family_man_boy_boy",
    "category": "people"
  },
  "family_man_girl_girl": {
    "char": "👨‍👧‍👧",
    "slug": "family_man_girl_girl",
    "category": "people"
  },
  "knot": { "char": "🪢", "slug": "knot", "category": "people" },
  "yarn": { "char": "🧶", "slug": "yarn", "category": "people" },
  "thread": { "char": "🧵", "slug": "thread", "category": "people" },
  "sewing_needle": {
    "char": "🪡",
    "slug": "sewing_needle",
    "category": "people"
  },
  "coat": { "char": "🧥", "slug": "coat", "category": "people" },
  "lab_coat": { "char": "🥼", "slug": "lab_coat", "category": "people" },
  "safety_vest": { "char": "🦺", "slug": "safety_vest", "category": "people" },
  "womans_clothes": {
    "char": "👚",
    "slug": "womans_clothes",
    "category": "people"
  },
  "shirt": { "char": "👕", "slug": "shirt", "category": "people" },
  "t_shirt": {
    "char": "👕",
    "slug": "shirt",
    "category": "people",
    "isAlternative": true
  },
  "jeans": { "char": "👖", "slug": "jeans", "category": "people" },
  "briefs": { "char": "🩲", "slug": "briefs", "category": "people" },
  "shorts": { "char": "🩳", "slug": "shorts", "category": "people" },
  "necktie": { "char": "👔", "slug": "necktie", "category": "people" },
  "dress": { "char": "👗", "slug": "dress", "category": "people" },
  "bikini": { "char": "👙", "slug": "bikini", "category": "people" },
  "one_piece_swimsuit": {
    "char": "🩱",
    "slug": "one_piece_swimsuit",
    "category": "people"
  },
  "kimono": { "char": "👘", "slug": "kimono", "category": "people" },
  "sari": { "char": "🥻", "slug": "sari", "category": "people" },
  "thong_sandal": {
    "char": "🩴",
    "slug": "thong_sandal",
    "category": "people"
  },
  "womans_flat_shoe": {
    "char": "🥿",
    "slug": "womans_flat_shoe",
    "category": "people"
  },
  "flat_shoe": {
    "char": "🥿",
    "slug": "womans_flat_shoe",
    "category": "people",
    "isAlternative": true
  },
  "high_heel": { "char": "👠", "slug": "high_heel", "category": "people" },
  "sandal": { "char": "👡", "slug": "sandal", "category": "people" },
  "womans_sandal": {
    "char": "👡",
    "slug": "sandal",
    "category": "people",
    "isAlternative": true
  },
  "boot": { "char": "👢", "slug": "boot", "category": "people" },
  "womans_boot": {
    "char": "👢",
    "slug": "boot",
    "category": "people",
    "isAlternative": true
  },
  "mans_shoe": { "char": "👞", "slug": "mans_shoe", "category": "people" },
  "athletic_shoe": {
    "char": "👟",
    "slug": "athletic_shoe",
    "category": "people"
  },
  "running_shoe": {
    "char": "👟",
    "slug": "athletic_shoe",
    "category": "people",
    "isAlternative": true
  },
  "hiking_boot": { "char": "🥾", "slug": "hiking_boot", "category": "people" },
  "socks": { "char": "🧦", "slug": "socks", "category": "people" },
  "gloves": { "char": "🧤", "slug": "gloves", "category": "people" },
  "scarf": { "char": "🧣", "slug": "scarf", "category": "people" },
  "tophat": { "char": "🎩", "slug": "tophat", "category": "people" },
  "top_hat": {
    "char": "🎩",
    "slug": "tophat",
    "category": "people",
    "isAlternative": true
  },
  "billed_cap": { "char": "🧢", "slug": "billed_cap", "category": "people" },
  "womans_hat": { "char": "👒", "slug": "womans_hat", "category": "people" },
  "mortar_board": {
    "char": "🎓",
    "slug": "mortar_board",
    "category": "people"
  },
  "helmet_with_cross": {
    "char": "⛑️",
    "slug": "helmet_with_cross",
    "category": "people"
  },
  "helmet_with_white_cross": {
    "char": "⛑️",
    "slug": "helmet_with_cross",
    "category": "people",
    "isAlternative": true
  },
  "military_helmet": {
    "char": "🪖",
    "slug": "military_helmet",
    "category": "people"
  },
  "crown": { "char": "👑", "slug": "crown", "category": "people" },
  "ring": { "char": "💍", "slug": "ring", "category": "people" },
  "pouch": { "char": "👝", "slug": "pouch", "category": "people" },
  "clutch_bag": {
    "char": "👝",
    "slug": "pouch",
    "category": "people",
    "isAlternative": true
  },
  "purse": { "char": "👛", "slug": "purse", "category": "people" },
  "handbag": { "char": "👜", "slug": "handbag", "category": "people" },
  "briefcase": { "char": "💼", "slug": "briefcase", "category": "people" },
  "school_satchel": {
    "char": "🎒",
    "slug": "school_satchel",
    "category": "people"
  },
  "backpack": {
    "char": "🎒",
    "slug": "school_satchel",
    "category": "people",
    "isAlternative": true
  },
  "luggage": { "char": "🧳", "slug": "luggage", "category": "people" },
  "eyeglasses": { "char": "👓", "slug": "eyeglasses", "category": "people" },
  "glasses": {
    "char": "👓",
    "slug": "eyeglasses",
    "category": "people",
    "isAlternative": true
  },
  "dark_sunglasses": {
    "char": "🕶️",
    "slug": "dark_sunglasses",
    "category": "people"
  },
  "goggles": { "char": "🥽", "slug": "goggles", "category": "people" },
  "closed_umbrella": {
    "char": "🌂",
    "slug": "closed_umbrella",
    "category": "people"
  },
  "curly_haired": {
    "char": "🦱",
    "slug": "curly_haired",
    "category": "people"
  },
  "curly_hair": {
    "char": "🦱",
    "slug": "curly_haired",
    "category": "people",
    "isAlternative": true
  },
  "red_haired": { "char": "🦰", "slug": "red_haired", "category": "people" },
  "red_hair": {
    "char": "🦰",
    "slug": "red_haired",
    "category": "people",
    "isAlternative": true
  },
  "white_haired": {
    "char": "🦳",
    "slug": "white_haired",
    "category": "people"
  },
  "white_hair": {
    "char": "🦳",
    "slug": "white_haired",
    "category": "people",
    "isAlternative": true
  },
  "bald": { "char": "🦲", "slug": "bald", "category": "people" },
  "dog": { "char": "🐶", "slug": "dog", "category": "nature" },
  "dog_face": {
    "char": "🐶",
    "slug": "dog",
    "category": "nature",
    "isAlternative": true
  },
  "cat": { "char": "🐱", "slug": "cat", "category": "nature" },
  "cat_face": {
    "char": "🐱",
    "slug": "cat",
    "category": "nature",
    "isAlternative": true
  },
  "mouse": { "char": "🐭", "slug": "mouse", "category": "nature" },
  "mouse_face": {
    "char": "🐭",
    "slug": "mouse",
    "category": "nature",
    "isAlternative": true
  },
  "hamster": { "char": "🐹", "slug": "hamster", "category": "nature" },
  "rabbit": { "char": "🐰", "slug": "rabbit", "category": "nature" },
  "rabbit_face": {
    "char": "🐰",
    "slug": "rabbit",
    "category": "nature",
    "isAlternative": true
  },
  "fox": { "char": "🦊", "slug": "fox", "category": "nature" },
  "fox_face": {
    "char": "🦊",
    "slug": "fox",
    "category": "nature",
    "isAlternative": true
  },
  "bear": { "char": "🐻", "slug": "bear", "category": "nature" },
  "panda_face": { "char": "🐼", "slug": "panda_face", "category": "nature" },
  "panda": {
    "char": "🐼",
    "slug": "panda_face",
    "category": "nature",
    "isAlternative": true
  },
  "polar_bear": { "char": "🐻‍❄️", "slug": "polar_bear", "category": "nature" },
  "koala": { "char": "🐨", "slug": "koala", "category": "nature" },
  "tiger": { "char": "🐯", "slug": "tiger", "category": "nature" },
  "tiger_face": {
    "char": "🐯",
    "slug": "tiger",
    "category": "nature",
    "isAlternative": true
  },
  "lion_face": { "char": "🦁", "slug": "lion_face", "category": "nature" },
  "lion": {
    "char": "🦁",
    "slug": "lion_face",
    "category": "nature",
    "isAlternative": true
  },
  "cow": { "char": "🐮", "slug": "cow", "category": "nature" },
  "cow_face": {
    "char": "🐮",
    "slug": "cow",
    "category": "nature",
    "isAlternative": true
  },
  "pig": { "char": "🐷", "slug": "pig", "category": "nature" },
  "pig_face": {
    "char": "🐷",
    "slug": "pig",
    "category": "nature",
    "isAlternative": true
  },
  "pig_nose": { "char": "🐽", "slug": "pig_nose", "category": "nature" },
  "frog": { "char": "🐸", "slug": "frog", "category": "nature" },
  "monkey_face": { "char": "🐵", "slug": "monkey_face", "category": "nature" },
  "see_no_evil": { "char": "🙈", "slug": "see_no_evil", "category": "nature" },
  "hear_no_evil": {
    "char": "🙉",
    "slug": "hear_no_evil",
    "category": "nature"
  },
  "speak_no_evil": {
    "char": "🙊",
    "slug": "speak_no_evil",
    "category": "nature"
  },
  "monkey": { "char": "🐒", "slug": "monkey", "category": "nature" },
  "chicken": { "char": "🐔", "slug": "chicken", "category": "nature" },
  "penguin": { "char": "🐧", "slug": "penguin", "category": "nature" },
  "bird": { "char": "🐦", "slug": "bird", "category": "nature" },
  "baby_chick": { "char": "🐤", "slug": "baby_chick", "category": "nature" },
  "hatching_chick": {
    "char": "🐣",
    "slug": "hatching_chick",
    "category": "nature"
  },
  "hatched_chick": {
    "char": "🐥",
    "slug": "hatched_chick",
    "category": "nature"
  },
  "duck": { "char": "🦆", "slug": "duck", "category": "nature" },
  "eagle": { "char": "🦅", "slug": "eagle", "category": "nature" },
  "owl": { "char": "🦉", "slug": "owl", "category": "nature" },
  "bat": { "char": "🦇", "slug": "bat", "category": "nature" },
  "wolf": { "char": "🐺", "slug": "wolf", "category": "nature" },
  "boar": { "char": "🐗", "slug": "boar", "category": "nature" },
  "horse": { "char": "🐴", "slug": "horse", "category": "nature" },
  "horse_face": {
    "char": "🐴",
    "slug": "horse",
    "category": "nature",
    "isAlternative": true
  },
  "unicorn": { "char": "🦄", "slug": "unicorn", "category": "nature" },
  "unicorn_face": {
    "char": "🦄",
    "slug": "unicorn",
    "category": "nature",
    "isAlternative": true
  },
  "bee": { "char": "🐝", "slug": "bee", "category": "nature" },
  "honeybee": {
    "char": "🐝",
    "slug": "bee",
    "category": "nature",
    "isAlternative": true
  },
  "bug": { "char": "🐛", "slug": "bug", "category": "nature" },
  "butterfly": { "char": "🦋", "slug": "butterfly", "category": "nature" },
  "snail": { "char": "🐌", "slug": "snail", "category": "nature" },
  "worm": { "char": "🪱", "slug": "worm", "category": "nature" },
  "lady_beetle": { "char": "🐞", "slug": "lady_beetle", "category": "nature" },
  "ant": { "char": "🐜", "slug": "ant", "category": "nature" },
  "fly": { "char": "🪰", "slug": "fly", "category": "nature" },
  "mosquito": { "char": "🦟", "slug": "mosquito", "category": "nature" },
  "cockroach": { "char": "🪳", "slug": "cockroach", "category": "nature" },
  "beetle": { "char": "🪲", "slug": "beetle", "category": "nature" },
  "cricket": { "char": "🦗", "slug": "cricket", "category": "nature" },
  "spider": { "char": "🕷️", "slug": "spider", "category": "nature" },
  "spider_web": { "char": "🕸️", "slug": "spider_web", "category": "nature" },
  "scorpion": { "char": "🦂", "slug": "scorpion", "category": "nature" },
  "turtle": { "char": "🐢", "slug": "turtle", "category": "nature" },
  "snake": { "char": "🐍", "slug": "snake", "category": "nature" },
  "lizard": { "char": "🦎", "slug": "lizard", "category": "nature" },
  "t_rex": { "char": "🦖", "slug": "t_rex", "category": "nature" },
  "sauropod": { "char": "🦕", "slug": "sauropod", "category": "nature" },
  "octopus": { "char": "🐙", "slug": "octopus", "category": "nature" },
  "squid": { "char": "🦑", "slug": "squid", "category": "nature" },
  "shrimp": { "char": "🦐", "slug": "shrimp", "category": "nature" },
  "lobster": { "char": "🦞", "slug": "lobster", "category": "nature" },
  "crab": { "char": "🦀", "slug": "crab", "category": "nature" },
  "blowfish": { "char": "🐡", "slug": "blowfish", "category": "nature" },
  "tropical_fish": {
    "char": "🐠",
    "slug": "tropical_fish",
    "category": "nature"
  },
  "fish": { "char": "🐟", "slug": "fish", "category": "nature" },
  "seal": { "char": "🦭", "slug": "seal", "category": "nature" },
  "dolphin": { "char": "🐬", "slug": "dolphin", "category": "nature" },
  "whale": { "char": "🐳", "slug": "whale", "category": "nature" },
  "whale2": { "char": "🐋", "slug": "whale2", "category": "nature" },
  "shark": { "char": "🦈", "slug": "shark", "category": "nature" },
  "crocodile": { "char": "🐊", "slug": "crocodile", "category": "nature" },
  "tiger2": { "char": "🐅", "slug": "tiger2", "category": "nature" },
  "leopard": { "char": "🐆", "slug": "leopard", "category": "nature" },
  "zebra": { "char": "🦓", "slug": "zebra", "category": "nature" },
  "gorilla": { "char": "🦍", "slug": "gorilla", "category": "nature" },
  "orangutan": { "char": "🦧", "slug": "orangutan", "category": "nature" },
  "elephant": { "char": "🐘", "slug": "elephant", "category": "nature" },
  "mammoth": { "char": "🦣", "slug": "mammoth", "category": "nature" },
  "bison": { "char": "🦬", "slug": "bison", "category": "nature" },
  "hippopotamus": {
    "char": "🦛",
    "slug": "hippopotamus",
    "category": "nature"
  },
  "rhino": { "char": "🦏", "slug": "rhino", "category": "nature" },
  "rhinoceros": {
    "char": "🦏",
    "slug": "rhino",
    "category": "nature",
    "isAlternative": true
  },
  "dromedary_camel": {
    "char": "🐪",
    "slug": "dromedary_camel",
    "category": "nature"
  },
  "camel": { "char": "🐫", "slug": "camel", "category": "nature" },
  "giraffe": { "char": "🦒", "slug": "giraffe", "category": "nature" },
  "kangaroo": { "char": "🦘", "slug": "kangaroo", "category": "nature" },
  "water_buffalo": {
    "char": "🐃",
    "slug": "water_buffalo",
    "category": "nature"
  },
  "ox": { "char": "🐂", "slug": "ox", "category": "nature" },
  "cow2": { "char": "🐄", "slug": "cow2", "category": "nature" },
  "racehorse": { "char": "🐎", "slug": "racehorse", "category": "nature" },
  "pig2": { "char": "🐖", "slug": "pig2", "category": "nature" },
  "ram": { "char": "🐏", "slug": "ram", "category": "nature" },
  "sheep": { "char": "🐑", "slug": "sheep", "category": "nature" },
  "ewe": {
    "char": "🐑",
    "slug": "sheep",
    "category": "nature",
    "isAlternative": true
  },
  "llama": { "char": "🦙", "slug": "llama", "category": "nature" },
  "goat": { "char": "🐐", "slug": "goat", "category": "nature" },
  "deer": { "char": "🦌", "slug": "deer", "category": "nature" },
  "dog2": { "char": "🐕", "slug": "dog2", "category": "nature" },
  "poodle": { "char": "🐩", "slug": "poodle", "category": "nature" },
  "guide_dog": { "char": "🦮", "slug": "guide_dog", "category": "nature" },
  "service_dog": { "char": "🐕‍🦺", "slug": "service_dog", "category": "nature" },
  "cat2": { "char": "🐈", "slug": "cat2", "category": "nature" },
  "black_cat": { "char": "🐈‍⬛", "slug": "black_cat", "category": "nature" },
  "feather": { "char": "🪶", "slug": "feather", "category": "nature" },
  "rooster": { "char": "🐓", "slug": "rooster", "category": "nature" },
  "turkey": { "char": "🦃", "slug": "turkey", "category": "nature" },
  "dodo": { "char": "🦤", "slug": "dodo", "category": "nature" },
  "peacock": { "char": "🦚", "slug": "peacock", "category": "nature" },
  "parrot": { "char": "🦜", "slug": "parrot", "category": "nature" },
  "swan": { "char": "🦢", "slug": "swan", "category": "nature" },
  "flamingo": { "char": "🦩", "slug": "flamingo", "category": "nature" },
  "dove": { "char": "🕊️", "slug": "dove", "category": "nature" },
  "dove_of_peace": {
    "char": "🕊️",
    "slug": "dove",
    "category": "nature",
    "isAlternative": true
  },
  "rabbit2": { "char": "🐇", "slug": "rabbit2", "category": "nature" },
  "raccoon": { "char": "🦝", "slug": "raccoon", "category": "nature" },
  "skunk": { "char": "🦨", "slug": "skunk", "category": "nature" },
  "badger": { "char": "🦡", "slug": "badger", "category": "nature" },
  "beaver": { "char": "🦫", "slug": "beaver", "category": "nature" },
  "otter": { "char": "🦦", "slug": "otter", "category": "nature" },
  "sloth": { "char": "🦥", "slug": "sloth", "category": "nature" },
  "mouse2": { "char": "🐁", "slug": "mouse2", "category": "nature" },
  "rat": { "char": "🐀", "slug": "rat", "category": "nature" },
  "chipmunk": { "char": "🐿️", "slug": "chipmunk", "category": "nature" },
  "hedgehog": { "char": "🦔", "slug": "hedgehog", "category": "nature" },
  "feet": { "char": "🐾", "slug": "feet", "category": "nature" },
  "paw_prints": {
    "char": "🐾",
    "slug": "feet",
    "category": "nature",
    "isAlternative": true
  },
  "dragon": { "char": "🐉", "slug": "dragon", "category": "nature" },
  "dragon_face": { "char": "🐲", "slug": "dragon_face", "category": "nature" },
  "cactus": { "char": "🌵", "slug": "cactus", "category": "nature" },
  "christmas_tree": {
    "char": "🎄",
    "slug": "christmas_tree",
    "category": "nature"
  },
  "evergreen_tree": {
    "char": "🌲",
    "slug": "evergreen_tree",
    "category": "nature"
  },
  "deciduous_tree": {
    "char": "🌳",
    "slug": "deciduous_tree",
    "category": "nature"
  },
  "palm_tree": { "char": "🌴", "slug": "palm_tree", "category": "nature" },
  "seedling": { "char": "🌱", "slug": "seedling", "category": "nature" },
  "herb": { "char": "🌿", "slug": "herb", "category": "nature" },
  "four_leaf_clover": {
    "char": "🍀",
    "slug": "four_leaf_clover",
    "category": "nature"
  },
  "bamboo": { "char": "🎍", "slug": "bamboo", "category": "nature" },
  "tanabata_tree": {
    "char": "🎋",
    "slug": "tanabata_tree",
    "category": "nature"
  },
  "leaves": { "char": "🍃", "slug": "leaves", "category": "nature" },
  "fallen_leaf": { "char": "🍂", "slug": "fallen_leaf", "category": "nature" },
  "maple_leaf": { "char": "🍁", "slug": "maple_leaf", "category": "nature" },
  "empty_nest": { "char": "🪹", "slug": "empty_nest", "category": "nature" },
  "nest_with_eggs": {
    "char": "🪺",
    "slug": "nest_with_eggs",
    "category": "nature"
  },
  "mushroom": { "char": "🍄", "slug": "mushroom", "category": "nature" },
  "shell": { "char": "🐚", "slug": "shell", "category": "nature" },
  "spiral_shell": {
    "char": "🐚",
    "slug": "shell",
    "category": "nature",
    "isAlternative": true
  },
  "coral": { "char": "🪸", "slug": "coral", "category": "nature" },
  "rock": { "char": "🪨", "slug": "rock", "category": "nature" },
  "wood": { "char": "🪵", "slug": "wood", "category": "nature" },
  "ear_of_rice": { "char": "🌾", "slug": "ear_of_rice", "category": "nature" },
  "sheaf_of_rice": {
    "char": "🌾",
    "slug": "ear_of_rice",
    "category": "nature",
    "isAlternative": true
  },
  "potted_plant": {
    "char": "🪴",
    "slug": "potted_plant",
    "category": "nature"
  },
  "bouquet": { "char": "💐", "slug": "bouquet", "category": "nature" },
  "tulip": { "char": "🌷", "slug": "tulip", "category": "nature" },
  "rose": { "char": "🌹", "slug": "rose", "category": "nature" },
  "wilted_rose": { "char": "🥀", "slug": "wilted_rose", "category": "nature" },
  "wilted_flower": {
    "char": "🥀",
    "slug": "wilted_rose",
    "category": "nature",
    "isAlternative": true
  },
  "lotus": { "char": "🪷", "slug": "lotus", "category": "nature" },
  "hibiscus": { "char": "🌺", "slug": "hibiscus", "category": "nature" },
  "cherry_blossom": {
    "char": "🌸",
    "slug": "cherry_blossom",
    "category": "nature"
  },
  "blossom": { "char": "🌼", "slug": "blossom", "category": "nature" },
  "sunflower": { "char": "🌻", "slug": "sunflower", "category": "nature" },
  "sun_with_face": {
    "char": "🌞",
    "slug": "sun_with_face",
    "category": "nature"
  },
  "full_moon_with_face": {
    "char": "🌝",
    "slug": "full_moon_with_face",
    "category": "nature"
  },
  "first_quarter_moon_with_face": {
    "char": "🌛",
    "slug": "first_quarter_moon_with_face",
    "category": "nature"
  },
  "last_quarter_moon_with_face": {
    "char": "🌜",
    "slug": "last_quarter_moon_with_face",
    "category": "nature"
  },
  "new_moon_with_face": {
    "char": "🌚",
    "slug": "new_moon_with_face",
    "category": "nature"
  },
  "new_moon_face": {
    "char": "🌚",
    "slug": "new_moon_with_face",
    "category": "nature",
    "isAlternative": true
  },
  "full_moon": { "char": "🌕", "slug": "full_moon", "category": "nature" },
  "waning_gibbous_moon": {
    "char": "🌖",
    "slug": "waning_gibbous_moon",
    "category": "nature"
  },
  "last_quarter_moon": {
    "char": "🌗",
    "slug": "last_quarter_moon",
    "category": "nature"
  },
  "waning_crescent_moon": {
    "char": "🌘",
    "slug": "waning_crescent_moon",
    "category": "nature"
  },
  "new_moon": { "char": "🌑", "slug": "new_moon", "category": "nature" },
  "waxing_crescent_moon": {
    "char": "🌒",
    "slug": "waxing_crescent_moon",
    "category": "nature"
  },
  "first_quarter_moon": {
    "char": "🌓",
    "slug": "first_quarter_moon",
    "category": "nature"
  },
  "waxing_gibbous_moon": {
    "char": "🌔",
    "slug": "waxing_gibbous_moon",
    "category": "nature"
  },
  "crescent_moon": {
    "char": "🌙",
    "slug": "crescent_moon",
    "category": "nature"
  },
  "earth_americas": {
    "char": "🌎",
    "slug": "earth_americas",
    "category": "nature"
  },
  "earth_africa": {
    "char": "🌍",
    "slug": "earth_africa",
    "category": "nature"
  },
  "earth_asia": { "char": "🌏", "slug": "earth_asia", "category": "nature" },
  "ringed_planet": {
    "char": "🪐",
    "slug": "ringed_planet",
    "category": "nature"
  },
  "dizzy": { "char": "💫", "slug": "dizzy", "category": "nature" },
  "star": { "char": "⭐", "slug": "star", "category": "nature" },
  "star2": { "char": "🌟", "slug": "star2", "category": "nature" },
  "glowing_star": {
    "char": "🌟",
    "slug": "star2",
    "category": "nature",
    "isAlternative": true
  },
  "zap": { "char": "⚡", "slug": "zap", "category": "nature" },
  "high_voltage": {
    "char": "⚡",
    "slug": "zap",
    "category": "nature",
    "isAlternative": true
  },
  "boom": { "char": "💥", "slug": "boom", "category": "nature" },
  "collision": {
    "char": "💥",
    "slug": "boom",
    "category": "nature",
    "isAlternative": true
  },
  "fire": { "char": "🔥", "slug": "fire", "category": "nature" },
  "flame": {
    "char": "🔥",
    "slug": "fire",
    "category": "nature",
    "isAlternative": true
  },
  "cloud_tornado": {
    "char": "🌪️",
    "slug": "cloud_tornado",
    "category": "nature"
  },
  "cloud_with_tornado": {
    "char": "🌪️",
    "slug": "cloud_tornado",
    "category": "nature",
    "isAlternative": true
  },
  "tornado": {
    "char": "🌪️",
    "slug": "cloud_tornado",
    "category": "nature",
    "isAlternative": true
  },
  "rainbow": { "char": "🌈", "slug": "rainbow", "category": "nature" },
  "white_sun_small_cloud": {
    "char": "🌤️",
    "slug": "white_sun_small_cloud",
    "category": "nature"
  },
  "white_sun_with_small_cloud": {
    "char": "🌤️",
    "slug": "white_sun_small_cloud",
    "category": "nature",
    "isAlternative": true
  },
  "partly_sunny": {
    "char": "⛅",
    "slug": "partly_sunny",
    "category": "nature"
  },
  "white_sun_cloud": {
    "char": "🌥️",
    "slug": "white_sun_cloud",
    "category": "nature"
  },
  "white_sun_behind_cloud": {
    "char": "🌥️",
    "slug": "white_sun_cloud",
    "category": "nature",
    "isAlternative": true
  },
  "white_sun_rain_cloud": {
    "char": "🌦️",
    "slug": "white_sun_rain_cloud",
    "category": "nature"
  },
  "white_sun_behind_cloud_with_rain": {
    "char": "🌦️",
    "slug": "white_sun_rain_cloud",
    "category": "nature",
    "isAlternative": true
  },
  "cloud_rain": { "char": "🌧️", "slug": "cloud_rain", "category": "nature" },
  "cloud_with_rain": {
    "char": "🌧️",
    "slug": "cloud_rain",
    "category": "nature",
    "isAlternative": true
  },
  "thunder_cloud_rain": {
    "char": "⛈️",
    "slug": "thunder_cloud_rain",
    "category": "nature"
  },
  "thunder_cloud_and_rain": {
    "char": "⛈️",
    "slug": "thunder_cloud_rain",
    "category": "nature",
    "isAlternative": true
  },
  "cloud_lightning": {
    "char": "🌩️",
    "slug": "cloud_lightning",
    "category": "nature"
  },
  "cloud_with_lightning": {
    "char": "🌩️",
    "slug": "cloud_lightning",
    "category": "nature",
    "isAlternative": true
  },
  "cloud_snow": { "char": "🌨️", "slug": "cloud_snow", "category": "nature" },
  "cloud_with_snow": {
    "char": "🌨️",
    "slug": "cloud_snow",
    "category": "nature",
    "isAlternative": true
  },
  "snowman": { "char": "⛄", "slug": "snowman", "category": "nature" },
  "wind_blowing_face": {
    "char": "🌬️",
    "slug": "wind_blowing_face",
    "category": "nature"
  },
  "wind_face": {
    "char": "🌬️",
    "slug": "wind_blowing_face",
    "category": "nature",
    "isAlternative": true
  },
  "dash": { "char": "💨", "slug": "dash", "category": "nature" },
  "dashing_away": {
    "char": "💨",
    "slug": "dash",
    "category": "nature",
    "isAlternative": true
  },
  "droplet": { "char": "💧", "slug": "droplet", "category": "nature" },
  "sweat_drops": { "char": "💦", "slug": "sweat_drops", "category": "nature" },
  "bubbles": { "char": "🫧", "slug": "bubbles", "category": "nature" },
  "ocean": { "char": "🌊", "slug": "ocean", "category": "nature" },
  "water_wave": {
    "char": "🌊",
    "slug": "ocean",
    "category": "nature",
    "isAlternative": true
  },
  "fog": { "char": "🌫️", "slug": "fog", "category": "nature" },
  "green_apple": { "char": "🍏", "slug": "green_apple", "category": "food" },
  "apple": { "char": "🍎", "slug": "apple", "category": "food" },
  "red_apple": {
    "char": "🍎",
    "slug": "apple",
    "category": "food",
    "isAlternative": true
  },
  "pear": { "char": "🍐", "slug": "pear", "category": "food" },
  "tangerine": { "char": "🍊", "slug": "tangerine", "category": "food" },
  "lemon": { "char": "🍋", "slug": "lemon", "category": "food" },
  "banana": { "char": "🍌", "slug": "banana", "category": "food" },
  "watermelon": { "char": "🍉", "slug": "watermelon", "category": "food" },
  "grapes": { "char": "🍇", "slug": "grapes", "category": "food" },
  "blueberries": { "char": "🫐", "slug": "blueberries", "category": "food" },
  "strawberry": { "char": "🍓", "slug": "strawberry", "category": "food" },
  "melon": { "char": "🍈", "slug": "melon", "category": "food" },
  "cherries": { "char": "🍒", "slug": "cherries", "category": "food" },
  "peach": { "char": "🍑", "slug": "peach", "category": "food" },
  "mango": { "char": "🥭", "slug": "mango", "category": "food" },
  "pineapple": { "char": "🍍", "slug": "pineapple", "category": "food" },
  "coconut": { "char": "🥥", "slug": "coconut", "category": "food" },
  "kiwi": { "char": "🥝", "slug": "kiwi", "category": "food" },
  "kiwifruit": {
    "char": "🥝",
    "slug": "kiwi",
    "category": "food",
    "isAlternative": true
  },
  "kiwi_fruit": {
    "char": "🥝",
    "slug": "kiwi",
    "category": "food",
    "isAlternative": true
  },
  "tomato": { "char": "🍅", "slug": "tomato", "category": "food" },
  "eggplant": { "char": "🍆", "slug": "eggplant", "category": "food" },
  "avocado": { "char": "🥑", "slug": "avocado", "category": "food" },
  "olive": { "char": "🫒", "slug": "olive", "category": "food" },
  "broccoli": { "char": "🥦", "slug": "broccoli", "category": "food" },
  "leafy_green": { "char": "🥬", "slug": "leafy_green", "category": "food" },
  "bell_pepper": { "char": "🫑", "slug": "bell_pepper", "category": "food" },
  "cucumber": { "char": "🥒", "slug": "cucumber", "category": "food" },
  "hot_pepper": { "char": "🌶️", "slug": "hot_pepper", "category": "food" },
  "corn": { "char": "🌽", "slug": "corn", "category": "food" },
  "ear_of_corn": {
    "char": "🌽",
    "slug": "corn",
    "category": "food",
    "isAlternative": true
  },
  "carrot": { "char": "🥕", "slug": "carrot", "category": "food" },
  "garlic": { "char": "🧄", "slug": "garlic", "category": "food" },
  "onion": { "char": "🧅", "slug": "onion", "category": "food" },
  "potato": { "char": "🥔", "slug": "potato", "category": "food" },
  "sweet_potato": { "char": "🍠", "slug": "sweet_potato", "category": "food" },
  "croissant": { "char": "🥐", "slug": "croissant", "category": "food" },
  "bagel": { "char": "🥯", "slug": "bagel", "category": "food" },
  "bread": { "char": "🍞", "slug": "bread", "category": "food" },
  "french_bread": { "char": "🥖", "slug": "french_bread", "category": "food" },
  "baguette_bread": {
    "char": "🥖",
    "slug": "french_bread",
    "category": "food",
    "isAlternative": true
  },
  "flatbread": { "char": "🫓", "slug": "flatbread", "category": "food" },
  "pretzel": { "char": "🥨", "slug": "pretzel", "category": "food" },
  "cheese": { "char": "🧀", "slug": "cheese", "category": "food" },
  "cheese_wedge": {
    "char": "🧀",
    "slug": "cheese",
    "category": "food",
    "isAlternative": true
  },
  "egg": { "char": "🥚", "slug": "egg", "category": "food" },
  "cooking": { "char": "🍳", "slug": "cooking", "category": "food" },
  "butter": { "char": "🧈", "slug": "butter", "category": "food" },
  "pancakes": { "char": "🥞", "slug": "pancakes", "category": "food" },
  "waffle": { "char": "🧇", "slug": "waffle", "category": "food" },
  "bacon": { "char": "🥓", "slug": "bacon", "category": "food" },
  "cut_of_meat": { "char": "🥩", "slug": "cut_of_meat", "category": "food" },
  "poultry_leg": { "char": "🍗", "slug": "poultry_leg", "category": "food" },
  "meat_on_bone": { "char": "🍖", "slug": "meat_on_bone", "category": "food" },
  "bone": { "char": "🦴", "slug": "bone", "category": "food" },
  "hotdog": { "char": "🌭", "slug": "hotdog", "category": "food" },
  "hot_dog": {
    "char": "🌭",
    "slug": "hotdog",
    "category": "food",
    "isAlternative": true
  },
  "hamburger": { "char": "🍔", "slug": "hamburger", "category": "food" },
  "fries": { "char": "🍟", "slug": "fries", "category": "food" },
  "french_fries": {
    "char": "🍟",
    "slug": "fries",
    "category": "food",
    "isAlternative": true
  },
  "pizza": { "char": "🍕", "slug": "pizza", "category": "food" },
  "sandwich": { "char": "🥪", "slug": "sandwich", "category": "food" },
  "stuffed_flatbread": {
    "char": "🥙",
    "slug": "stuffed_flatbread",
    "category": "food"
  },
  "stuffed_pita": {
    "char": "🥙",
    "slug": "stuffed_flatbread",
    "category": "food",
    "isAlternative": true
  },
  "falafel": { "char": "🧆", "slug": "falafel", "category": "food" },
  "taco": { "char": "🌮", "slug": "taco", "category": "food" },
  "burrito": { "char": "🌯", "slug": "burrito", "category": "food" },
  "tamale": { "char": "🫔", "slug": "tamale", "category": "food" },
  "salad": { "char": "🥗", "slug": "salad", "category": "food" },
  "green_salad": {
    "char": "🥗",
    "slug": "salad",
    "category": "food",
    "isAlternative": true
  },
  "shallow_pan_of_food": {
    "char": "🥘",
    "slug": "shallow_pan_of_food",
    "category": "food"
  },
  "paella": {
    "char": "🥘",
    "slug": "shallow_pan_of_food",
    "category": "food",
    "isAlternative": true
  },
  "fondue": { "char": "🫕", "slug": "fondue", "category": "food" },
  "canned_food": { "char": "🥫", "slug": "canned_food", "category": "food" },
  "jar": { "char": "🫙", "slug": "jar", "category": "food" },
  "spaghetti": { "char": "🍝", "slug": "spaghetti", "category": "food" },
  "ramen": { "char": "🍜", "slug": "ramen", "category": "food" },
  "steaming_bowl": {
    "char": "🍜",
    "slug": "ramen",
    "category": "food",
    "isAlternative": true
  },
  "stew": { "char": "🍲", "slug": "stew", "category": "food" },
  "pot_of_food": {
    "char": "🍲",
    "slug": "stew",
    "category": "food",
    "isAlternative": true
  },
  "curry": { "char": "🍛", "slug": "curry", "category": "food" },
  "curry_rice": {
    "char": "🍛",
    "slug": "curry",
    "category": "food",
    "isAlternative": true
  },
  "sushi": { "char": "🍣", "slug": "sushi", "category": "food" },
  "bento": { "char": "🍱", "slug": "bento", "category": "food" },
  "bento_box": {
    "char": "🍱",
    "slug": "bento",
    "category": "food",
    "isAlternative": true
  },
  "dumpling": { "char": "🥟", "slug": "dumpling", "category": "food" },
  "oyster": { "char": "🦪", "slug": "oyster", "category": "food" },
  "fried_shrimp": { "char": "🍤", "slug": "fried_shrimp", "category": "food" },
  "rice_ball": { "char": "🍙", "slug": "rice_ball", "category": "food" },
  "rice": { "char": "🍚", "slug": "rice", "category": "food" },
  "cooked_rice": {
    "char": "🍚",
    "slug": "rice",
    "category": "food",
    "isAlternative": true
  },
  "rice_cracker": { "char": "🍘", "slug": "rice_cracker", "category": "food" },
  "fish_cake": { "char": "🍥", "slug": "fish_cake", "category": "food" },
  "fortune_cookie": {
    "char": "🥠",
    "slug": "fortune_cookie",
    "category": "food"
  },
  "moon_cake": { "char": "🥮", "slug": "moon_cake", "category": "food" },
  "oden": { "char": "🍢", "slug": "oden", "category": "food" },
  "dango": { "char": "🍡", "slug": "dango", "category": "food" },
  "shaved_ice": { "char": "🍧", "slug": "shaved_ice", "category": "food" },
  "ice_cream": { "char": "🍨", "slug": "ice_cream", "category": "food" },
  "icecream": { "char": "🍦", "slug": "icecream", "category": "food" },
  "pie": { "char": "🥧", "slug": "pie", "category": "food" },
  "cupcake": { "char": "🧁", "slug": "cupcake", "category": "food" },
  "cake": { "char": "🍰", "slug": "cake", "category": "food" },
  "shortcake": {
    "char": "🍰",
    "slug": "cake",
    "category": "food",
    "isAlternative": true
  },
  "birthday": { "char": "🎂", "slug": "birthday", "category": "food" },
  "birthday_cake": {
    "char": "🎂",
    "slug": "birthday",
    "category": "food",
    "isAlternative": true
  },
  "custard": { "char": "🍮", "slug": "custard", "category": "food" },
  "pudding": {
    "char": "🍮",
    "slug": "custard",
    "category": "food",
    "isAlternative": true
  },
  "flan": {
    "char": "🍮",
    "slug": "custard",
    "category": "food",
    "isAlternative": true
  },
  "lollipop": { "char": "🍭", "slug": "lollipop", "category": "food" },
  "candy": { "char": "🍬", "slug": "candy", "category": "food" },
  "chocolate_bar": {
    "char": "🍫",
    "slug": "chocolate_bar",
    "category": "food"
  },
  "popcorn": { "char": "🍿", "slug": "popcorn", "category": "food" },
  "doughnut": { "char": "🍩", "slug": "doughnut", "category": "food" },
  "cookie": { "char": "🍪", "slug": "cookie", "category": "food" },
  "chestnut": { "char": "🌰", "slug": "chestnut", "category": "food" },
  "peanuts": { "char": "🥜", "slug": "peanuts", "category": "food" },
  "shelled_peanut": {
    "char": "🥜",
    "slug": "peanuts",
    "category": "food",
    "isAlternative": true
  },
  "beans": { "char": "🫘", "slug": "beans", "category": "food" },
  "honey_pot": { "char": "🍯", "slug": "honey_pot", "category": "food" },
  "milk": { "char": "🥛", "slug": "milk", "category": "food" },
  "glass_of_milk": {
    "char": "🥛",
    "slug": "milk",
    "category": "food",
    "isAlternative": true
  },
  "pouring_liquid": {
    "char": "🫗",
    "slug": "pouring_liquid",
    "category": "food"
  },
  "baby_bottle": { "char": "🍼", "slug": "baby_bottle", "category": "food" },
  "teapot": { "char": "🫖", "slug": "teapot", "category": "food" },
  "tea": { "char": "🍵", "slug": "tea", "category": "food" },
  "mate": { "char": "🧉", "slug": "mate", "category": "food" },
  "beverage_box": { "char": "🧃", "slug": "beverage_box", "category": "food" },
  "cup_with_straw": {
    "char": "🥤",
    "slug": "cup_with_straw",
    "category": "food"
  },
  "bubble_tea": { "char": "🧋", "slug": "bubble_tea", "category": "food" },
  "sake": { "char": "🍶", "slug": "sake", "category": "food" },
  "beer": { "char": "🍺", "slug": "beer", "category": "food" },
  "beer_mug": {
    "char": "🍺",
    "slug": "beer",
    "category": "food",
    "isAlternative": true
  },
  "beers": { "char": "🍻", "slug": "beers", "category": "food" },
  "champagne_glass": {
    "char": "🥂",
    "slug": "champagne_glass",
    "category": "food"
  },
  "clinking_glass": {
    "char": "🥂",
    "slug": "champagne_glass",
    "category": "food",
    "isAlternative": true
  },
  "wine_glass": { "char": "🍷", "slug": "wine_glass", "category": "food" },
  "tumbler_glass": {
    "char": "🥃",
    "slug": "tumbler_glass",
    "category": "food"
  },
  "whisky": {
    "char": "🥃",
    "slug": "tumbler_glass",
    "category": "food",
    "isAlternative": true
  },
  "cocktail": { "char": "🍸", "slug": "cocktail", "category": "food" },
  "tropical_drink": {
    "char": "🍹",
    "slug": "tropical_drink",
    "category": "food"
  },
  "champagne": { "char": "🍾", "slug": "champagne", "category": "food" },
  "bottle_with_popping_cork": {
    "char": "🍾",
    "slug": "champagne",
    "category": "food",
    "isAlternative": true
  },
  "ice_cube": { "char": "🧊", "slug": "ice_cube", "category": "food" },
  "spoon": { "char": "🥄", "slug": "spoon", "category": "food" },
  "fork_and_knife": {
    "char": "🍴",
    "slug": "fork_and_knife",
    "category": "food"
  },
  "fork_knife_plate": {
    "char": "🍽️",
    "slug": "fork_knife_plate",
    "category": "food"
  },
  "fork_and_knife_with_plate": {
    "char": "🍽️",
    "slug": "fork_knife_plate",
    "category": "food",
    "isAlternative": true
  },
  "bowl_with_spoon": {
    "char": "🥣",
    "slug": "bowl_with_spoon",
    "category": "food"
  },
  "takeout_box": { "char": "🥡", "slug": "takeout_box", "category": "food" },
  "chopsticks": { "char": "🥢", "slug": "chopsticks", "category": "food" },
  "salt": { "char": "🧂", "slug": "salt", "category": "food" },
  "soccer": { "char": "⚽", "slug": "soccer", "category": "activity" },
  "soccer_ball": {
    "char": "⚽",
    "slug": "soccer",
    "category": "activity",
    "isAlternative": true
  },
  "basketball": { "char": "🏀", "slug": "basketball", "category": "activity" },
  "football": { "char": "🏈", "slug": "football", "category": "activity" },
  "baseball": { "char": "⚾", "slug": "baseball", "category": "activity" },
  "softball": { "char": "🥎", "slug": "softball", "category": "activity" },
  "tennis": { "char": "🎾", "slug": "tennis", "category": "activity" },
  "volleyball": { "char": "🏐", "slug": "volleyball", "category": "activity" },
  "rugby_football": {
    "char": "🏉",
    "slug": "rugby_football",
    "category": "activity"
  },
  "flying_disc": {
    "char": "🥏",
    "slug": "flying_disc",
    "category": "activity"
  },
  "8ball": { "char": "🎱", "slug": "8ball", "category": "activity" },
  "yo_yo": { "char": "🪀", "slug": "yo_yo", "category": "activity" },
  "ping_pong": { "char": "🏓", "slug": "ping_pong", "category": "activity" },
  "table_tennis": {
    "char": "🏓",
    "slug": "ping_pong",
    "category": "activity",
    "isAlternative": true
  },
  "badminton": { "char": "🏸", "slug": "badminton", "category": "activity" },
  "hockey": { "char": "🏒", "slug": "hockey", "category": "activity" },
  "ice_hockey": {
    "char": "🏒",
    "slug": "hockey",
    "category": "activity",
    "isAlternative": true
  },
  "field_hockey": {
    "char": "🏑",
    "slug": "field_hockey",
    "category": "activity"
  },
  "lacrosse": { "char": "🥍", "slug": "lacrosse", "category": "activity" },
  "cricket_game": {
    "char": "🏏",
    "slug": "cricket_game",
    "category": "activity"
  },
  "cricket_bat_ball": {
    "char": "🏏",
    "slug": "cricket_game",
    "category": "activity",
    "isAlternative": true
  },
  "boomerang": { "char": "🪃", "slug": "boomerang", "category": "activity" },
  "goal": { "char": "🥅", "slug": "goal", "category": "activity" },
  "goal_net": {
    "char": "🥅",
    "slug": "goal",
    "category": "activity",
    "isAlternative": true
  },
  "golf": { "char": "⛳", "slug": "golf", "category": "activity" },
  "flag_in_hole": {
    "char": "⛳",
    "slug": "golf",
    "category": "activity",
    "isAlternative": true
  },
  "kite": { "char": "🪁", "slug": "kite", "category": "activity" },
  "playground_slide": {
    "char": "🛝",
    "slug": "playground_slide",
    "category": "activity"
  },
  "bow_and_arrow": {
    "char": "🏹",
    "slug": "bow_and_arrow",
    "category": "activity"
  },
  "archery": {
    "char": "🏹",
    "slug": "bow_and_arrow",
    "category": "activity",
    "isAlternative": true
  },
  "fishing_pole_and_fish": {
    "char": "🎣",
    "slug": "fishing_pole_and_fish",
    "category": "activity"
  },
  "fishing_pole": {
    "char": "🎣",
    "slug": "fishing_pole_and_fish",
    "category": "activity",
    "isAlternative": true
  },
  "diving_mask": {
    "char": "🤿",
    "slug": "diving_mask",
    "category": "activity"
  },
  "boxing_glove": {
    "char": "🥊",
    "slug": "boxing_glove",
    "category": "activity"
  },
  "boxing_gloves": {
    "char": "🥊",
    "slug": "boxing_glove",
    "category": "activity",
    "isAlternative": true
  },
  "martial_arts_uniform": {
    "char": "🥋",
    "slug": "martial_arts_uniform",
    "category": "activity"
  },
  "karate_uniform": {
    "char": "🥋",
    "slug": "martial_arts_uniform",
    "category": "activity",
    "isAlternative": true
  },
  "running_shirt_with_sash": {
    "char": "🎽",
    "slug": "running_shirt_with_sash",
    "category": "activity"
  },
  "running_shirt": {
    "char": "🎽",
    "slug": "running_shirt_with_sash",
    "category": "activity",
    "isAlternative": true
  },
  "skateboard": { "char": "🛹", "slug": "skateboard", "category": "activity" },
  "roller_skate": {
    "char": "🛼",
    "slug": "roller_skate",
    "category": "activity"
  },
  "sled": { "char": "🛷", "slug": "sled", "category": "activity" },
  "ice_skate": { "char": "⛸️", "slug": "ice_skate", "category": "activity" },
  "curling_stone": {
    "char": "🥌",
    "slug": "curling_stone",
    "category": "activity"
  },
  "ski": { "char": "🎿", "slug": "ski", "category": "activity" },
  "skis": {
    "char": "🎿",
    "slug": "ski",
    "category": "activity",
    "isAlternative": true
  },
  "skier": { "char": "⛷️", "slug": "skier", "category": "activity" },
  "snowboarder": {
    "char": "🏂",
    "slug": "snowboarder",
    "category": "activity"
  },
  "snowboarder_tone1": {
    "char": "🏂🏻",
    "slug": "snowboarder_tone1",
    "category": "activity"
  },
  "snowboarder_light_skin_tone": {
    "char": "🏂🏻",
    "slug": "snowboarder_tone1",
    "category": "activity",
    "isAlternative": true
  },
  "snowboarder_tone2": {
    "char": "🏂🏼",
    "slug": "snowboarder_tone2",
    "category": "activity"
  },
  "snowboarder_medium_light_skin_tone": {
    "char": "🏂🏼",
    "slug": "snowboarder_tone2",
    "category": "activity",
    "isAlternative": true
  },
  "snowboarder_tone3": {
    "char": "🏂🏽",
    "slug": "snowboarder_tone3",
    "category": "activity"
  },
  "snowboarder_medium_skin_tone": {
    "char": "🏂🏽",
    "slug": "snowboarder_tone3",
    "category": "activity",
    "isAlternative": true
  },
  "snowboarder_tone4": {
    "char": "🏂🏾",
    "slug": "snowboarder_tone4",
    "category": "activity"
  },
  "snowboarder_medium_dark_skin_tone": {
    "char": "🏂🏾",
    "slug": "snowboarder_tone4",
    "category": "activity",
    "isAlternative": true
  },
  "snowboarder_tone5": {
    "char": "🏂🏿",
    "slug": "snowboarder_tone5",
    "category": "activity"
  },
  "snowboarder_dark_skin_tone": {
    "char": "🏂🏿",
    "slug": "snowboarder_tone5",
    "category": "activity",
    "isAlternative": true
  },
  "parachute": { "char": "🪂", "slug": "parachute", "category": "activity" },
  "person_lifting_weights": {
    "char": "🏋️",
    "slug": "person_lifting_weights",
    "category": "activity"
  },
  "lifter": {
    "char": "🏋️",
    "slug": "person_lifting_weights",
    "category": "activity",
    "isAlternative": true
  },
  "weight_lifter": {
    "char": "🏋️",
    "slug": "person_lifting_weights",
    "category": "activity",
    "isAlternative": true
  },
  "person_lifting_weights_tone1": {
    "char": "🏋🏻",
    "slug": "person_lifting_weights_tone1",
    "category": "activity"
  },
  "lifter_tone1": {
    "char": "🏋🏻",
    "slug": "person_lifting_weights_tone1",
    "category": "activity",
    "isAlternative": true
  },
  "weight_lifter_tone1": {
    "char": "🏋🏻",
    "slug": "person_lifting_weights_tone1",
    "category": "activity",
    "isAlternative": true
  },
  "person_lifting_weights_tone2": {
    "char": "🏋🏼",
    "slug": "person_lifting_weights_tone2",
    "category": "activity"
  },
  "lifter_tone2": {
    "char": "🏋🏼",
    "slug": "person_lifting_weights_tone2",
    "category": "activity",
    "isAlternative": true
  },
  "weight_lifter_tone2": {
    "char": "🏋🏼",
    "slug": "person_lifting_weights_tone2",
    "category": "activity",
    "isAlternative": true
  },
  "person_lifting_weights_tone3": {
    "char": "🏋🏽",
    "slug": "person_lifting_weights_tone3",
    "category": "activity"
  },
  "lifter_tone3": {
    "char": "🏋🏽",
    "slug": "person_lifting_weights_tone3",
    "category": "activity",
    "isAlternative": true
  },
  "weight_lifter_tone3": {
    "char": "🏋🏽",
    "slug": "person_lifting_weights_tone3",
    "category": "activity",
    "isAlternative": true
  },
  "person_lifting_weights_tone4": {
    "char": "🏋🏾",
    "slug": "person_lifting_weights_tone4",
    "category": "activity"
  },
  "lifter_tone4": {
    "char": "🏋🏾",
    "slug": "person_lifting_weights_tone4",
    "category": "activity",
    "isAlternative": true
  },
  "weight_lifter_tone4": {
    "char": "🏋🏾",
    "slug": "person_lifting_weights_tone4",
    "category": "activity",
    "isAlternative": true
  },
  "person_lifting_weights_tone5": {
    "char": "🏋🏿",
    "slug": "person_lifting_weights_tone5",
    "category": "activity"
  },
  "lifter_tone5": {
    "char": "🏋🏿",
    "slug": "person_lifting_weights_tone5",
    "category": "activity",
    "isAlternative": true
  },
  "weight_lifter_tone5": {
    "char": "🏋🏿",
    "slug": "person_lifting_weights_tone5",
    "category": "activity",
    "isAlternative": true
  },
  "woman_lifting_weights": {
    "char": "🏋️‍♀️",
    "slug": "woman_lifting_weights",
    "category": "activity"
  },
  "woman_lifting_weights_tone1": {
    "char": "🏋🏻‍♀️",
    "slug": "woman_lifting_weights_tone1",
    "category": "activity"
  },
  "woman_lifting_weights_light_skin_tone": {
    "char": "🏋🏻‍♀️",
    "slug": "woman_lifting_weights_tone1",
    "category": "activity",
    "isAlternative": true
  },
  "woman_lifting_weights_tone2": {
    "char": "🏋🏼‍♀️",
    "slug": "woman_lifting_weights_tone2",
    "category": "activity"
  },
  "woman_lifting_weights_medium_light_skin_tone": {
    "char": "🏋🏼‍♀️",
    "slug": "woman_lifting_weights_tone2",
    "category": "activity",
    "isAlternative": true
  },
  "woman_lifting_weights_tone3": {
    "char": "🏋🏽‍♀️",
    "slug": "woman_lifting_weights_tone3",
    "category": "activity"
  },
  "woman_lifting_weights_medium_skin_tone": {
    "char": "🏋🏽‍♀️",
    "slug": "woman_lifting_weights_tone3",
    "category": "activity",
    "isAlternative": true
  },
  "woman_lifting_weights_tone4": {
    "char": "🏋🏾‍♀️",
    "slug": "woman_lifting_weights_tone4",
    "category": "activity"
  },
  "woman_lifting_weights_medium_dark_skin_tone": {
    "char": "🏋🏾‍♀️",
    "slug": "woman_lifting_weights_tone4",
    "category": "activity",
    "isAlternative": true
  },
  "woman_lifting_weights_tone5": {
    "char": "🏋🏿‍♀️",
    "slug": "woman_lifting_weights_tone5",
    "category": "activity"
  },
  "woman_lifting_weights_dark_skin_tone": {
    "char": "🏋🏿‍♀️",
    "slug": "woman_lifting_weights_tone5",
    "category": "activity",
    "isAlternative": true
  },
  "man_lifting_weights": {
    "char": "🏋️‍♂️",
    "slug": "man_lifting_weights",
    "category": "activity"
  },
  "man_lifting_weights_tone1": {
    "char": "🏋🏻‍♂️",
    "slug": "man_lifting_weights_tone1",
    "category": "activity"
  },
  "man_lifting_weights_light_skin_tone": {
    "char": "🏋🏻‍♂️",
    "slug": "man_lifting_weights_tone1",
    "category": "activity",
    "isAlternative": true
  },
  "man_lifting_weights_tone2": {
    "char": "🏋🏼‍♂️",
    "slug": "man_lifting_weights_tone2",
    "category": "activity"
  },
  "man_lifting_weights_medium_light_skin_tone": {
    "char": "🏋🏼‍♂️",
    "slug": "man_lifting_weights_tone2",
    "category": "activity",
    "isAlternative": true
  },
  "man_lifting_weights_tone3": {
    "char": "🏋🏽‍♂️",
    "slug": "man_lifting_weights_tone3",
    "category": "activity"
  },
  "man_lifting_weights_medium_skin_tone": {
    "char": "🏋🏽‍♂️",
    "slug": "man_lifting_weights_tone3",
    "category": "activity",
    "isAlternative": true
  },
  "man_lifting_weights_tone4": {
    "char": "🏋🏾‍♂️",
    "slug": "man_lifting_weights_tone4",
    "category": "activity"
  },
  "man_lifting_weights_medium_dark_skin_tone": {
    "char": "🏋🏾‍♂️",
    "slug": "man_lifting_weights_tone4",
    "category": "activity",
    "isAlternative": true
  },
  "man_lifting_weights_tone5": {
    "char": "🏋🏿‍♂️",
    "slug": "man_lifting_weights_tone5",
    "category": "activity"
  },
  "man_lifting_weights_dark_skin_tone": {
    "char": "🏋🏿‍♂️",
    "slug": "man_lifting_weights_tone5",
    "category": "activity",
    "isAlternative": true
  },
  "people_wrestling": {
    "char": "🤼",
    "slug": "people_wrestling",
    "category": "activity"
  },
  "wrestlers": {
    "char": "🤼",
    "slug": "people_wrestling",
    "category": "activity",
    "isAlternative": true
  },
  "wrestling": {
    "char": "🤼",
    "slug": "people_wrestling",
    "category": "activity",
    "isAlternative": true
  },
  "women_wrestling": {
    "char": "🤼‍♀️",
    "slug": "women_wrestling",
    "category": "activity"
  },
  "men_wrestling": {
    "char": "🤼‍♂️",
    "slug": "men_wrestling",
    "category": "activity"
  },
  "person_doing_cartwheel": {
    "char": "🤸",
    "slug": "person_doing_cartwheel",
    "category": "activity"
  },
  "cartwheel": {
    "char": "🤸",
    "slug": "person_doing_cartwheel",
    "category": "activity",
    "isAlternative": true
  },
  "person_doing_cartwheel_tone1": {
    "char": "🤸🏻",
    "slug": "person_doing_cartwheel_tone1",
    "category": "activity"
  },
  "cartwheel_tone1": {
    "char": "🤸🏻",
    "slug": "person_doing_cartwheel_tone1",
    "category": "activity",
    "isAlternative": true
  },
  "person_doing_cartwheel_tone2": {
    "char": "🤸🏼",
    "slug": "person_doing_cartwheel_tone2",
    "category": "activity"
  },
  "cartwheel_tone2": {
    "char": "🤸🏼",
    "slug": "person_doing_cartwheel_tone2",
    "category": "activity",
    "isAlternative": true
  },
  "person_doing_cartwheel_tone3": {
    "char": "🤸🏽",
    "slug": "person_doing_cartwheel_tone3",
    "category": "activity"
  },
  "cartwheel_tone3": {
    "char": "🤸🏽",
    "slug": "person_doing_cartwheel_tone3",
    "category": "activity",
    "isAlternative": true
  },
  "person_doing_cartwheel_tone4": {
    "char": "🤸🏾",
    "slug": "person_doing_cartwheel_tone4",
    "category": "activity"
  },
  "cartwheel_tone4": {
    "char": "🤸🏾",
    "slug": "person_doing_cartwheel_tone4",
    "category": "activity",
    "isAlternative": true
  },
  "person_doing_cartwheel_tone5": {
    "char": "🤸🏿",
    "slug": "person_doing_cartwheel_tone5",
    "category": "activity"
  },
  "cartwheel_tone5": {
    "char": "🤸🏿",
    "slug": "person_doing_cartwheel_tone5",
    "category": "activity",
    "isAlternative": true
  },
  "woman_cartwheeling": {
    "char": "🤸‍♀️",
    "slug": "woman_cartwheeling",
    "category": "activity"
  },
  "woman_cartwheeling_tone1": {
    "char": "🤸🏻‍♀️",
    "slug": "woman_cartwheeling_tone1",
    "category": "activity"
  },
  "woman_cartwheeling_light_skin_tone": {
    "char": "🤸🏻‍♀️",
    "slug": "woman_cartwheeling_tone1",
    "category": "activity",
    "isAlternative": true
  },
  "woman_cartwheeling_tone2": {
    "char": "🤸🏼‍♀️",
    "slug": "woman_cartwheeling_tone2",
    "category": "activity"
  },
  "woman_cartwheeling_medium_light_skin_tone": {
    "char": "🤸🏼‍♀️",
    "slug": "woman_cartwheeling_tone2",
    "category": "activity",
    "isAlternative": true
  },
  "woman_cartwheeling_tone3": {
    "char": "🤸🏽‍♀️",
    "slug": "woman_cartwheeling_tone3",
    "category": "activity"
  },
  "woman_cartwheeling_medium_skin_tone": {
    "char": "🤸🏽‍♀️",
    "slug": "woman_cartwheeling_tone3",
    "category": "activity",
    "isAlternative": true
  },
  "woman_cartwheeling_tone4": {
    "char": "🤸🏾‍♀️",
    "slug": "woman_cartwheeling_tone4",
    "category": "activity"
  },
  "woman_cartwheeling_medium_dark_skin_tone": {
    "char": "🤸🏾‍♀️",
    "slug": "woman_cartwheeling_tone4",
    "category": "activity",
    "isAlternative": true
  },
  "woman_cartwheeling_tone5": {
    "char": "🤸🏿‍♀️",
    "slug": "woman_cartwheeling_tone5",
    "category": "activity"
  },
  "woman_cartwheeling_dark_skin_tone": {
    "char": "🤸🏿‍♀️",
    "slug": "woman_cartwheeling_tone5",
    "category": "activity",
    "isAlternative": true
  },
  "man_cartwheeling": {
    "char": "🤸‍♂️",
    "slug": "man_cartwheeling",
    "category": "activity"
  },
  "man_cartwheeling_tone1": {
    "char": "🤸🏻‍♂️",
    "slug": "man_cartwheeling_tone1",
    "category": "activity"
  },
  "man_cartwheeling_light_skin_tone": {
    "char": "🤸🏻‍♂️",
    "slug": "man_cartwheeling_tone1",
    "category": "activity",
    "isAlternative": true
  },
  "man_cartwheeling_tone2": {
    "char": "🤸🏼‍♂️",
    "slug": "man_cartwheeling_tone2",
    "category": "activity"
  },
  "man_cartwheeling_medium_light_skin_tone": {
    "char": "🤸🏼‍♂️",
    "slug": "man_cartwheeling_tone2",
    "category": "activity",
    "isAlternative": true
  },
  "man_cartwheeling_tone3": {
    "char": "🤸🏽‍♂️",
    "slug": "man_cartwheeling_tone3",
    "category": "activity"
  },
  "man_cartwheeling_medium_skin_tone": {
    "char": "🤸🏽‍♂️",
    "slug": "man_cartwheeling_tone3",
    "category": "activity",
    "isAlternative": true
  },
  "man_cartwheeling_tone4": {
    "char": "🤸🏾‍♂️",
    "slug": "man_cartwheeling_tone4",
    "category": "activity"
  },
  "man_cartwheeling_medium_dark_skin_tone": {
    "char": "🤸🏾‍♂️",
    "slug": "man_cartwheeling_tone4",
    "category": "activity",
    "isAlternative": true
  },
  "man_cartwheeling_tone5": {
    "char": "🤸🏿‍♂️",
    "slug": "man_cartwheeling_tone5",
    "category": "activity"
  },
  "man_cartwheeling_dark_skin_tone": {
    "char": "🤸🏿‍♂️",
    "slug": "man_cartwheeling_tone5",
    "category": "activity",
    "isAlternative": true
  },
  "person_bouncing_ball": {
    "char": "⛹️",
    "slug": "person_bouncing_ball",
    "category": "activity"
  },
  "basketball_player": {
    "char": "⛹️",
    "slug": "person_bouncing_ball",
    "category": "activity",
    "isAlternative": true
  },
  "person_with_ball": {
    "char": "⛹️",
    "slug": "person_bouncing_ball",
    "category": "activity",
    "isAlternative": true
  },
  "person_bouncing_ball_tone1": {
    "char": "⛹🏻",
    "slug": "person_bouncing_ball_tone1",
    "category": "activity"
  },
  "basketball_player_tone1": {
    "char": "⛹🏻",
    "slug": "person_bouncing_ball_tone1",
    "category": "activity",
    "isAlternative": true
  },
  "person_with_ball_tone1": {
    "char": "⛹🏻",
    "slug": "person_bouncing_ball_tone1",
    "category": "activity",
    "isAlternative": true
  },
  "person_bouncing_ball_tone2": {
    "char": "⛹🏼",
    "slug": "person_bouncing_ball_tone2",
    "category": "activity"
  },
  "basketball_player_tone2": {
    "char": "⛹🏼",
    "slug": "person_bouncing_ball_tone2",
    "category": "activity",
    "isAlternative": true
  },
  "person_with_ball_tone2": {
    "char": "⛹🏼",
    "slug": "person_bouncing_ball_tone2",
    "category": "activity",
    "isAlternative": true
  },
  "person_bouncing_ball_tone3": {
    "char": "⛹🏽",
    "slug": "person_bouncing_ball_tone3",
    "category": "activity"
  },
  "basketball_player_tone3": {
    "char": "⛹🏽",
    "slug": "person_bouncing_ball_tone3",
    "category": "activity",
    "isAlternative": true
  },
  "person_with_ball_tone3": {
    "char": "⛹🏽",
    "slug": "person_bouncing_ball_tone3",
    "category": "activity",
    "isAlternative": true
  },
  "person_bouncing_ball_tone4": {
    "char": "⛹🏾",
    "slug": "person_bouncing_ball_tone4",
    "category": "activity"
  },
  "basketball_player_tone4": {
    "char": "⛹🏾",
    "slug": "person_bouncing_ball_tone4",
    "category": "activity",
    "isAlternative": true
  },
  "person_with_ball_tone4": {
    "char": "⛹🏾",
    "slug": "person_bouncing_ball_tone4",
    "category": "activity",
    "isAlternative": true
  },
  "person_bouncing_ball_tone5": {
    "char": "⛹🏿",
    "slug": "person_bouncing_ball_tone5",
    "category": "activity"
  },
  "basketball_player_tone5": {
    "char": "⛹🏿",
    "slug": "person_bouncing_ball_tone5",
    "category": "activity",
    "isAlternative": true
  },
  "person_with_ball_tone5": {
    "char": "⛹🏿",
    "slug": "person_bouncing_ball_tone5",
    "category": "activity",
    "isAlternative": true
  },
  "woman_bouncing_ball": {
    "char": "⛹️‍♀️",
    "slug": "woman_bouncing_ball",
    "category": "activity"
  },
  "woman_bouncing_ball_tone1": {
    "char": "⛹🏻‍♀️",
    "slug": "woman_bouncing_ball_tone1",
    "category": "activity"
  },
  "woman_bouncing_ball_light_skin_tone": {
    "char": "⛹🏻‍♀️",
    "slug": "woman_bouncing_ball_tone1",
    "category": "activity",
    "isAlternative": true
  },
  "woman_bouncing_ball_tone2": {
    "char": "⛹🏼‍♀️",
    "slug": "woman_bouncing_ball_tone2",
    "category": "activity"
  },
  "woman_bouncing_ball_medium_light_skin_tone": {
    "char": "⛹🏼‍♀️",
    "slug": "woman_bouncing_ball_tone2",
    "category": "activity",
    "isAlternative": true
  },
  "woman_bouncing_ball_tone3": {
    "char": "⛹🏽‍♀️",
    "slug": "woman_bouncing_ball_tone3",
    "category": "activity"
  },
  "woman_bouncing_ball_medium_skin_tone": {
    "char": "⛹🏽‍♀️",
    "slug": "woman_bouncing_ball_tone3",
    "category": "activity",
    "isAlternative": true
  },
  "woman_bouncing_ball_tone4": {
    "char": "⛹🏾‍♀️",
    "slug": "woman_bouncing_ball_tone4",
    "category": "activity"
  },
  "woman_bouncing_ball_medium_dark_skin_tone": {
    "char": "⛹🏾‍♀️",
    "slug": "woman_bouncing_ball_tone4",
    "category": "activity",
    "isAlternative": true
  },
  "woman_bouncing_ball_tone5": {
    "char": "⛹🏿‍♀️",
    "slug": "woman_bouncing_ball_tone5",
    "category": "activity"
  },
  "woman_bouncing_ball_dark_skin_tone": {
    "char": "⛹🏿‍♀️",
    "slug": "woman_bouncing_ball_tone5",
    "category": "activity",
    "isAlternative": true
  },
  "man_bouncing_ball": {
    "char": "⛹️‍♂️",
    "slug": "man_bouncing_ball",
    "category": "activity"
  },
  "man_bouncing_ball_tone1": {
    "char": "⛹🏻‍♂️",
    "slug": "man_bouncing_ball_tone1",
    "category": "activity"
  },
  "man_bouncing_ball_light_skin_tone": {
    "char": "⛹🏻‍♂️",
    "slug": "man_bouncing_ball_tone1",
    "category": "activity",
    "isAlternative": true
  },
  "man_bouncing_ball_tone2": {
    "char": "⛹🏼‍♂️",
    "slug": "man_bouncing_ball_tone2",
    "category": "activity"
  },
  "man_bouncing_ball_medium_light_skin_tone": {
    "char": "⛹🏼‍♂️",
    "slug": "man_bouncing_ball_tone2",
    "category": "activity",
    "isAlternative": true
  },
  "man_bouncing_ball_tone3": {
    "char": "⛹🏽‍♂️",
    "slug": "man_bouncing_ball_tone3",
    "category": "activity"
  },
  "man_bouncing_ball_medium_skin_tone": {
    "char": "⛹🏽‍♂️",
    "slug": "man_bouncing_ball_tone3",
    "category": "activity",
    "isAlternative": true
  },
  "man_bouncing_ball_tone4": {
    "char": "⛹🏾‍♂️",
    "slug": "man_bouncing_ball_tone4",
    "category": "activity"
  },
  "man_bouncing_ball_medium_dark_skin_tone": {
    "char": "⛹🏾‍♂️",
    "slug": "man_bouncing_ball_tone4",
    "category": "activity",
    "isAlternative": true
  },
  "man_bouncing_ball_tone5": {
    "char": "⛹🏿‍♂️",
    "slug": "man_bouncing_ball_tone5",
    "category": "activity"
  },
  "man_bouncing_ball_dark_skin_tone": {
    "char": "⛹🏿‍♂️",
    "slug": "man_bouncing_ball_tone5",
    "category": "activity",
    "isAlternative": true
  },
  "person_fencing": {
    "char": "🤺",
    "slug": "person_fencing",
    "category": "activity"
  },
  "fencer": {
    "char": "🤺",
    "slug": "person_fencing",
    "category": "activity",
    "isAlternative": true
  },
  "fencing": {
    "char": "🤺",
    "slug": "person_fencing",
    "category": "activity",
    "isAlternative": true
  },
  "person_playing_handball": {
    "char": "🤾",
    "slug": "person_playing_handball",
    "category": "activity"
  },
  "handball": {
    "char": "🤾",
    "slug": "person_playing_handball",
    "category": "activity",
    "isAlternative": true
  },
  "person_playing_handball_tone1": {
    "char": "🤾🏻",
    "slug": "person_playing_handball_tone1",
    "category": "activity"
  },
  "handball_tone1": {
    "char": "🤾🏻",
    "slug": "person_playing_handball_tone1",
    "category": "activity",
    "isAlternative": true
  },
  "person_playing_handball_tone2": {
    "char": "🤾🏼",
    "slug": "person_playing_handball_tone2",
    "category": "activity"
  },
  "handball_tone2": {
    "char": "🤾🏼",
    "slug": "person_playing_handball_tone2",
    "category": "activity",
    "isAlternative": true
  },
  "person_playing_handball_tone3": {
    "char": "🤾🏽",
    "slug": "person_playing_handball_tone3",
    "category": "activity"
  },
  "handball_tone3": {
    "char": "🤾🏽",
    "slug": "person_playing_handball_tone3",
    "category": "activity",
    "isAlternative": true
  },
  "person_playing_handball_tone4": {
    "char": "🤾🏾",
    "slug": "person_playing_handball_tone4",
    "category": "activity"
  },
  "handball_tone4": {
    "char": "🤾🏾",
    "slug": "person_playing_handball_tone4",
    "category": "activity",
    "isAlternative": true
  },
  "person_playing_handball_tone5": {
    "char": "🤾🏿",
    "slug": "person_playing_handball_tone5",
    "category": "activity"
  },
  "handball_tone5": {
    "char": "🤾🏿",
    "slug": "person_playing_handball_tone5",
    "category": "activity",
    "isAlternative": true
  },
  "woman_playing_handball": {
    "char": "🤾‍♀️",
    "slug": "woman_playing_handball",
    "category": "activity"
  },
  "woman_playing_handball_tone1": {
    "char": "🤾🏻‍♀️",
    "slug": "woman_playing_handball_tone1",
    "category": "activity"
  },
  "woman_playing_handball_light_skin_tone": {
    "char": "🤾🏻‍♀️",
    "slug": "woman_playing_handball_tone1",
    "category": "activity",
    "isAlternative": true
  },
  "woman_playing_handball_tone2": {
    "char": "🤾🏼‍♀️",
    "slug": "woman_playing_handball_tone2",
    "category": "activity"
  },
  "woman_playing_handball_medium_light_skin_tone": {
    "char": "🤾🏼‍♀️",
    "slug": "woman_playing_handball_tone2",
    "category": "activity",
    "isAlternative": true
  },
  "woman_playing_handball_tone3": {
    "char": "🤾🏽‍♀️",
    "slug": "woman_playing_handball_tone3",
    "category": "activity"
  },
  "woman_playing_handball_medium_skin_tone": {
    "char": "🤾🏽‍♀️",
    "slug": "woman_playing_handball_tone3",
    "category": "activity",
    "isAlternative": true
  },
  "woman_playing_handball_tone4": {
    "char": "🤾🏾‍♀️",
    "slug": "woman_playing_handball_tone4",
    "category": "activity"
  },
  "woman_playing_handball_medium_dark_skin_tone": {
    "char": "🤾🏾‍♀️",
    "slug": "woman_playing_handball_tone4",
    "category": "activity",
    "isAlternative": true
  },
  "woman_playing_handball_tone5": {
    "char": "🤾🏿‍♀️",
    "slug": "woman_playing_handball_tone5",
    "category": "activity"
  },
  "woman_playing_handball_dark_skin_tone": {
    "char": "🤾🏿‍♀️",
    "slug": "woman_playing_handball_tone5",
    "category": "activity",
    "isAlternative": true
  },
  "man_playing_handball": {
    "char": "🤾‍♂️",
    "slug": "man_playing_handball",
    "category": "activity"
  },
  "man_playing_handball_tone1": {
    "char": "🤾🏻‍♂️",
    "slug": "man_playing_handball_tone1",
    "category": "activity"
  },
  "man_playing_handball_light_skin_tone": {
    "char": "🤾🏻‍♂️",
    "slug": "man_playing_handball_tone1",
    "category": "activity",
    "isAlternative": true
  },
  "man_playing_handball_tone2": {
    "char": "🤾🏼‍♂️",
    "slug": "man_playing_handball_tone2",
    "category": "activity"
  },
  "man_playing_handball_medium_light_skin_tone": {
    "char": "🤾🏼‍♂️",
    "slug": "man_playing_handball_tone2",
    "category": "activity",
    "isAlternative": true
  },
  "man_playing_handball_tone3": {
    "char": "🤾🏽‍♂️",
    "slug": "man_playing_handball_tone3",
    "category": "activity"
  },
  "man_playing_handball_medium_skin_tone": {
    "char": "🤾🏽‍♂️",
    "slug": "man_playing_handball_tone3",
    "category": "activity",
    "isAlternative": true
  },
  "man_playing_handball_tone4": {
    "char": "🤾🏾‍♂️",
    "slug": "man_playing_handball_tone4",
    "category": "activity"
  },
  "man_playing_handball_medium_dark_skin_tone": {
    "char": "🤾🏾‍♂️",
    "slug": "man_playing_handball_tone4",
    "category": "activity",
    "isAlternative": true
  },
  "man_playing_handball_tone5": {
    "char": "🤾🏿‍♂️",
    "slug": "man_playing_handball_tone5",
    "category": "activity"
  },
  "man_playing_handball_dark_skin_tone": {
    "char": "🤾🏿‍♂️",
    "slug": "man_playing_handball_tone5",
    "category": "activity",
    "isAlternative": true
  },
  "person_golfing": {
    "char": "🏌️",
    "slug": "person_golfing",
    "category": "activity"
  },
  "golfer": {
    "char": "🏌️",
    "slug": "person_golfing",
    "category": "activity",
    "isAlternative": true
  },
  "person_golfing_tone1": {
    "char": "🏌🏻",
    "slug": "person_golfing_tone1",
    "category": "activity"
  },
  "person_golfing_light_skin_tone": {
    "char": "🏌🏻",
    "slug": "person_golfing_tone1",
    "category": "activity",
    "isAlternative": true
  },
  "person_golfing_tone2": {
    "char": "🏌🏼",
    "slug": "person_golfing_tone2",
    "category": "activity"
  },
  "person_golfing_medium_light_skin_tone": {
    "char": "🏌🏼",
    "slug": "person_golfing_tone2",
    "category": "activity",
    "isAlternative": true
  },
  "person_golfing_tone3": {
    "char": "🏌🏽",
    "slug": "person_golfing_tone3",
    "category": "activity"
  },
  "person_golfing_medium_skin_tone": {
    "char": "🏌🏽",
    "slug": "person_golfing_tone3",
    "category": "activity",
    "isAlternative": true
  },
  "person_golfing_tone4": {
    "char": "🏌🏾",
    "slug": "person_golfing_tone4",
    "category": "activity"
  },
  "person_golfing_medium_dark_skin_tone": {
    "char": "🏌🏾",
    "slug": "person_golfing_tone4",
    "category": "activity",
    "isAlternative": true
  },
  "person_golfing_tone5": {
    "char": "🏌🏿",
    "slug": "person_golfing_tone5",
    "category": "activity"
  },
  "person_golfing_dark_skin_tone": {
    "char": "🏌🏿",
    "slug": "person_golfing_tone5",
    "category": "activity",
    "isAlternative": true
  },
  "woman_golfing": {
    "char": "🏌️‍♀️",
    "slug": "woman_golfing",
    "category": "activity"
  },
  "woman_golfing_tone1": {
    "char": "🏌🏻‍♀️",
    "slug": "woman_golfing_tone1",
    "category": "activity"
  },
  "woman_golfing_light_skin_tone": {
    "char": "🏌🏻‍♀️",
    "slug": "woman_golfing_tone1",
    "category": "activity",
    "isAlternative": true
  },
  "woman_golfing_tone2": {
    "char": "🏌🏼‍♀️",
    "slug": "woman_golfing_tone2",
    "category": "activity"
  },
  "woman_golfing_medium_light_skin_tone": {
    "char": "🏌🏼‍♀️",
    "slug": "woman_golfing_tone2",
    "category": "activity",
    "isAlternative": true
  },
  "woman_golfing_tone3": {
    "char": "🏌🏽‍♀️",
    "slug": "woman_golfing_tone3",
    "category": "activity"
  },
  "woman_golfing_medium_skin_tone": {
    "char": "🏌🏽‍♀️",
    "slug": "woman_golfing_tone3",
    "category": "activity",
    "isAlternative": true
  },
  "woman_golfing_tone4": {
    "char": "🏌🏾‍♀️",
    "slug": "woman_golfing_tone4",
    "category": "activity"
  },
  "woman_golfing_medium_dark_skin_tone": {
    "char": "🏌🏾‍♀️",
    "slug": "woman_golfing_tone4",
    "category": "activity",
    "isAlternative": true
  },
  "woman_golfing_tone5": {
    "char": "🏌🏿‍♀️",
    "slug": "woman_golfing_tone5",
    "category": "activity"
  },
  "woman_golfing_dark_skin_tone": {
    "char": "🏌🏿‍♀️",
    "slug": "woman_golfing_tone5",
    "category": "activity",
    "isAlternative": true
  },
  "man_golfing": {
    "char": "🏌️‍♂️",
    "slug": "man_golfing",
    "category": "activity"
  },
  "man_golfing_tone1": {
    "char": "🏌🏻‍♂️",
    "slug": "man_golfing_tone1",
    "category": "activity"
  },
  "man_golfing_light_skin_tone": {
    "char": "🏌🏻‍♂️",
    "slug": "man_golfing_tone1",
    "category": "activity",
    "isAlternative": true
  },
  "man_golfing_tone2": {
    "char": "🏌🏼‍♂️",
    "slug": "man_golfing_tone2",
    "category": "activity"
  },
  "man_golfing_medium_light_skin_tone": {
    "char": "🏌🏼‍♂️",
    "slug": "man_golfing_tone2",
    "category": "activity",
    "isAlternative": true
  },
  "man_golfing_tone3": {
    "char": "🏌🏽‍♂️",
    "slug": "man_golfing_tone3",
    "category": "activity"
  },
  "man_golfing_medium_skin_tone": {
    "char": "🏌🏽‍♂️",
    "slug": "man_golfing_tone3",
    "category": "activity",
    "isAlternative": true
  },
  "man_golfing_tone4": {
    "char": "🏌🏾‍♂️",
    "slug": "man_golfing_tone4",
    "category": "activity"
  },
  "man_golfing_medium_dark_skin_tone": {
    "char": "🏌🏾‍♂️",
    "slug": "man_golfing_tone4",
    "category": "activity",
    "isAlternative": true
  },
  "man_golfing_tone5": {
    "char": "🏌🏿‍♂️",
    "slug": "man_golfing_tone5",
    "category": "activity"
  },
  "man_golfing_dark_skin_tone": {
    "char": "🏌🏿‍♂️",
    "slug": "man_golfing_tone5",
    "category": "activity",
    "isAlternative": true
  },
  "horse_racing": {
    "char": "🏇",
    "slug": "horse_racing",
    "category": "activity"
  },
  "horse_racing_tone1": {
    "char": "🏇🏻",
    "slug": "horse_racing_tone1",
    "category": "activity"
  },
  "horse_racing_tone2": {
    "char": "🏇🏼",
    "slug": "horse_racing_tone2",
    "category": "activity"
  },
  "horse_racing_tone3": {
    "char": "🏇🏽",
    "slug": "horse_racing_tone3",
    "category": "activity"
  },
  "horse_racing_tone4": {
    "char": "🏇🏾",
    "slug": "horse_racing_tone4",
    "category": "activity"
  },
  "horse_racing_tone5": {
    "char": "🏇🏿",
    "slug": "horse_racing_tone5",
    "category": "activity"
  },
  "person_in_lotus_position": {
    "char": "🧘",
    "slug": "person_in_lotus_position",
    "category": "activity"
  },
  "person_in_lotus_position_tone1": {
    "char": "🧘🏻",
    "slug": "person_in_lotus_position_tone1",
    "category": "activity"
  },
  "person_in_lotus_position_light_skin_tone": {
    "char": "🧘🏻",
    "slug": "person_in_lotus_position_tone1",
    "category": "activity",
    "isAlternative": true
  },
  "person_in_lotus_position_tone2": {
    "char": "🧘🏼",
    "slug": "person_in_lotus_position_tone2",
    "category": "activity"
  },
  "person_in_lotus_position_medium_light_skin_tone": {
    "char": "🧘🏼",
    "slug": "person_in_lotus_position_tone2",
    "category": "activity",
    "isAlternative": true
  },
  "person_in_lotus_position_tone3": {
    "char": "🧘🏽",
    "slug": "person_in_lotus_position_tone3",
    "category": "activity"
  },
  "person_in_lotus_position_medium_skin_tone": {
    "char": "🧘🏽",
    "slug": "person_in_lotus_position_tone3",
    "category": "activity",
    "isAlternative": true
  },
  "person_in_lotus_position_tone4": {
    "char": "🧘🏾",
    "slug": "person_in_lotus_position_tone4",
    "category": "activity"
  },
  "person_in_lotus_position_medium_dark_skin_tone": {
    "char": "🧘🏾",
    "slug": "person_in_lotus_position_tone4",
    "category": "activity",
    "isAlternative": true
  },
  "person_in_lotus_position_tone5": {
    "char": "🧘🏿",
    "slug": "person_in_lotus_position_tone5",
    "category": "activity"
  },
  "person_in_lotus_position_dark_skin_tone": {
    "char": "🧘🏿",
    "slug": "person_in_lotus_position_tone5",
    "category": "activity",
    "isAlternative": true
  },
  "woman_in_lotus_position": {
    "char": "🧘‍♀️",
    "slug": "woman_in_lotus_position",
    "category": "activity"
  },
  "woman_in_lotus_position_tone1": {
    "char": "🧘🏻‍♀️",
    "slug": "woman_in_lotus_position_tone1",
    "category": "activity"
  },
  "woman_in_lotus_position_light_skin_tone": {
    "char": "🧘🏻‍♀️",
    "slug": "woman_in_lotus_position_tone1",
    "category": "activity",
    "isAlternative": true
  },
  "woman_in_lotus_position_tone2": {
    "char": "🧘🏼‍♀️",
    "slug": "woman_in_lotus_position_tone2",
    "category": "activity"
  },
  "woman_in_lotus_position_medium_light_skin_tone": {
    "char": "🧘🏼‍♀️",
    "slug": "woman_in_lotus_position_tone2",
    "category": "activity",
    "isAlternative": true
  },
  "woman_in_lotus_position_tone3": {
    "char": "🧘🏽‍♀️",
    "slug": "woman_in_lotus_position_tone3",
    "category": "activity"
  },
  "woman_in_lotus_position_medium_skin_tone": {
    "char": "🧘🏽‍♀️",
    "slug": "woman_in_lotus_position_tone3",
    "category": "activity",
    "isAlternative": true
  },
  "woman_in_lotus_position_tone4": {
    "char": "🧘🏾‍♀️",
    "slug": "woman_in_lotus_position_tone4",
    "category": "activity"
  },
  "woman_in_lotus_position_medium_dark_skin_tone": {
    "char": "🧘🏾‍♀️",
    "slug": "woman_in_lotus_position_tone4",
    "category": "activity",
    "isAlternative": true
  },
  "woman_in_lotus_position_tone5": {
    "char": "🧘🏿‍♀️",
    "slug": "woman_in_lotus_position_tone5",
    "category": "activity"
  },
  "woman_in_lotus_position_dark_skin_tone": {
    "char": "🧘🏿‍♀️",
    "slug": "woman_in_lotus_position_tone5",
    "category": "activity",
    "isAlternative": true
  },
  "man_in_lotus_position": {
    "char": "🧘‍♂️",
    "slug": "man_in_lotus_position",
    "category": "activity"
  },
  "man_in_lotus_position_tone1": {
    "char": "🧘🏻‍♂️",
    "slug": "man_in_lotus_position_tone1",
    "category": "activity"
  },
  "man_in_lotus_position_light_skin_tone": {
    "char": "🧘🏻‍♂️",
    "slug": "man_in_lotus_position_tone1",
    "category": "activity",
    "isAlternative": true
  },
  "man_in_lotus_position_tone2": {
    "char": "🧘🏼‍♂️",
    "slug": "man_in_lotus_position_tone2",
    "category": "activity"
  },
  "man_in_lotus_position_medium_light_skin_tone": {
    "char": "🧘🏼‍♂️",
    "slug": "man_in_lotus_position_tone2",
    "category": "activity",
    "isAlternative": true
  },
  "man_in_lotus_position_tone3": {
    "char": "🧘🏽‍♂️",
    "slug": "man_in_lotus_position_tone3",
    "category": "activity"
  },
  "man_in_lotus_position_medium_skin_tone": {
    "char": "🧘🏽‍♂️",
    "slug": "man_in_lotus_position_tone3",
    "category": "activity",
    "isAlternative": true
  },
  "man_in_lotus_position_tone4": {
    "char": "🧘🏾‍♂️",
    "slug": "man_in_lotus_position_tone4",
    "category": "activity"
  },
  "man_in_lotus_position_medium_dark_skin_tone": {
    "char": "🧘🏾‍♂️",
    "slug": "man_in_lotus_position_tone4",
    "category": "activity",
    "isAlternative": true
  },
  "man_in_lotus_position_tone5": {
    "char": "🧘🏿‍♂️",
    "slug": "man_in_lotus_position_tone5",
    "category": "activity"
  },
  "man_in_lotus_position_dark_skin_tone": {
    "char": "🧘🏿‍♂️",
    "slug": "man_in_lotus_position_tone5",
    "category": "activity",
    "isAlternative": true
  },
  "person_surfing": {
    "char": "🏄",
    "slug": "person_surfing",
    "category": "activity"
  },
  "surfer": {
    "char": "🏄",
    "slug": "person_surfing",
    "category": "activity",
    "isAlternative": true
  },
  "person_surfing_tone1": {
    "char": "🏄🏻",
    "slug": "person_surfing_tone1",
    "category": "activity"
  },
  "surfer_tone1": {
    "char": "🏄🏻",
    "slug": "person_surfing_tone1",
    "category": "activity",
    "isAlternative": true
  },
  "person_surfing_tone2": {
    "char": "🏄🏼",
    "slug": "person_surfing_tone2",
    "category": "activity"
  },
  "surfer_tone2": {
    "char": "🏄🏼",
    "slug": "person_surfing_tone2",
    "category": "activity",
    "isAlternative": true
  },
  "person_surfing_tone3": {
    "char": "🏄🏽",
    "slug": "person_surfing_tone3",
    "category": "activity"
  },
  "surfer_tone3": {
    "char": "🏄🏽",
    "slug": "person_surfing_tone3",
    "category": "activity",
    "isAlternative": true
  },
  "person_surfing_tone4": {
    "char": "🏄🏾",
    "slug": "person_surfing_tone4",
    "category": "activity"
  },
  "surfer_tone4": {
    "char": "🏄🏾",
    "slug": "person_surfing_tone4",
    "category": "activity",
    "isAlternative": true
  },
  "person_surfing_tone5": {
    "char": "🏄🏿",
    "slug": "person_surfing_tone5",
    "category": "activity"
  },
  "surfer_tone5": {
    "char": "🏄🏿",
    "slug": "person_surfing_tone5",
    "category": "activity",
    "isAlternative": true
  },
  "woman_surfing": {
    "char": "🏄‍♀️",
    "slug": "woman_surfing",
    "category": "activity"
  },
  "woman_surfing_tone1": {
    "char": "🏄🏻‍♀️",
    "slug": "woman_surfing_tone1",
    "category": "activity"
  },
  "woman_surfing_light_skin_tone": {
    "char": "🏄🏻‍♀️",
    "slug": "woman_surfing_tone1",
    "category": "activity",
    "isAlternative": true
  },
  "woman_surfing_tone2": {
    "char": "🏄🏼‍♀️",
    "slug": "woman_surfing_tone2",
    "category": "activity"
  },
  "woman_surfing_medium_light_skin_tone": {
    "char": "🏄🏼‍♀️",
    "slug": "woman_surfing_tone2",
    "category": "activity",
    "isAlternative": true
  },
  "woman_surfing_tone3": {
    "char": "🏄🏽‍♀️",
    "slug": "woman_surfing_tone3",
    "category": "activity"
  },
  "woman_surfing_medium_skin_tone": {
    "char": "🏄🏽‍♀️",
    "slug": "woman_surfing_tone3",
    "category": "activity",
    "isAlternative": true
  },
  "woman_surfing_tone4": {
    "char": "🏄🏾‍♀️",
    "slug": "woman_surfing_tone4",
    "category": "activity"
  },
  "woman_surfing_medium_dark_skin_tone": {
    "char": "🏄🏾‍♀️",
    "slug": "woman_surfing_tone4",
    "category": "activity",
    "isAlternative": true
  },
  "woman_surfing_tone5": {
    "char": "🏄🏿‍♀️",
    "slug": "woman_surfing_tone5",
    "category": "activity"
  },
  "woman_surfing_dark_skin_tone": {
    "char": "🏄🏿‍♀️",
    "slug": "woman_surfing_tone5",
    "category": "activity",
    "isAlternative": true
  },
  "man_surfing": {
    "char": "🏄‍♂️",
    "slug": "man_surfing",
    "category": "activity"
  },
  "man_surfing_tone1": {
    "char": "🏄🏻‍♂️",
    "slug": "man_surfing_tone1",
    "category": "activity"
  },
  "man_surfing_light_skin_tone": {
    "char": "🏄🏻‍♂️",
    "slug": "man_surfing_tone1",
    "category": "activity",
    "isAlternative": true
  },
  "man_surfing_tone2": {
    "char": "🏄🏼‍♂️",
    "slug": "man_surfing_tone2",
    "category": "activity"
  },
  "man_surfing_medium_light_skin_tone": {
    "char": "🏄🏼‍♂️",
    "slug": "man_surfing_tone2",
    "category": "activity",
    "isAlternative": true
  },
  "man_surfing_tone3": {
    "char": "🏄🏽‍♂️",
    "slug": "man_surfing_tone3",
    "category": "activity"
  },
  "man_surfing_medium_skin_tone": {
    "char": "🏄🏽‍♂️",
    "slug": "man_surfing_tone3",
    "category": "activity",
    "isAlternative": true
  },
  "man_surfing_tone4": {
    "char": "🏄🏾‍♂️",
    "slug": "man_surfing_tone4",
    "category": "activity"
  },
  "man_surfing_medium_dark_skin_tone": {
    "char": "🏄🏾‍♂️",
    "slug": "man_surfing_tone4",
    "category": "activity",
    "isAlternative": true
  },
  "man_surfing_tone5": {
    "char": "🏄🏿‍♂️",
    "slug": "man_surfing_tone5",
    "category": "activity"
  },
  "man_surfing_dark_skin_tone": {
    "char": "🏄🏿‍♂️",
    "slug": "man_surfing_tone5",
    "category": "activity",
    "isAlternative": true
  },
  "person_swimming": {
    "char": "🏊",
    "slug": "person_swimming",
    "category": "activity"
  },
  "swimmer": {
    "char": "🏊",
    "slug": "person_swimming",
    "category": "activity",
    "isAlternative": true
  },
  "person_swimming_tone1": {
    "char": "🏊🏻",
    "slug": "person_swimming_tone1",
    "category": "activity"
  },
  "swimmer_tone1": {
    "char": "🏊🏻",
    "slug": "person_swimming_tone1",
    "category": "activity",
    "isAlternative": true
  },
  "person_swimming_tone2": {
    "char": "🏊🏼",
    "slug": "person_swimming_tone2",
    "category": "activity"
  },
  "swimmer_tone2": {
    "char": "🏊🏼",
    "slug": "person_swimming_tone2",
    "category": "activity",
    "isAlternative": true
  },
  "person_swimming_tone3": {
    "char": "🏊🏽",
    "slug": "person_swimming_tone3",
    "category": "activity"
  },
  "swimmer_tone3": {
    "char": "🏊🏽",
    "slug": "person_swimming_tone3",
    "category": "activity",
    "isAlternative": true
  },
  "person_swimming_tone4": {
    "char": "🏊🏾",
    "slug": "person_swimming_tone4",
    "category": "activity"
  },
  "swimmer_tone4": {
    "char": "🏊🏾",
    "slug": "person_swimming_tone4",
    "category": "activity",
    "isAlternative": true
  },
  "person_swimming_tone5": {
    "char": "🏊🏿",
    "slug": "person_swimming_tone5",
    "category": "activity"
  },
  "swimmer_tone5": {
    "char": "🏊🏿",
    "slug": "person_swimming_tone5",
    "category": "activity",
    "isAlternative": true
  },
  "woman_swimming": {
    "char": "🏊‍♀️",
    "slug": "woman_swimming",
    "category": "activity"
  },
  "woman_swimming_tone1": {
    "char": "🏊🏻‍♀️",
    "slug": "woman_swimming_tone1",
    "category": "activity"
  },
  "woman_swimming_light_skin_tone": {
    "char": "🏊🏻‍♀️",
    "slug": "woman_swimming_tone1",
    "category": "activity",
    "isAlternative": true
  },
  "woman_swimming_tone2": {
    "char": "🏊🏼‍♀️",
    "slug": "woman_swimming_tone2",
    "category": "activity"
  },
  "woman_swimming_medium_light_skin_tone": {
    "char": "🏊🏼‍♀️",
    "slug": "woman_swimming_tone2",
    "category": "activity",
    "isAlternative": true
  },
  "woman_swimming_tone3": {
    "char": "🏊🏽‍♀️",
    "slug": "woman_swimming_tone3",
    "category": "activity"
  },
  "woman_swimming_medium_skin_tone": {
    "char": "🏊🏽‍♀️",
    "slug": "woman_swimming_tone3",
    "category": "activity",
    "isAlternative": true
  },
  "woman_swimming_tone4": {
    "char": "🏊🏾‍♀️",
    "slug": "woman_swimming_tone4",
    "category": "activity"
  },
  "woman_swimming_medium_dark_skin_tone": {
    "char": "🏊🏾‍♀️",
    "slug": "woman_swimming_tone4",
    "category": "activity",
    "isAlternative": true
  },
  "woman_swimming_tone5": {
    "char": "🏊🏿‍♀️",
    "slug": "woman_swimming_tone5",
    "category": "activity"
  },
  "woman_swimming_dark_skin_tone": {
    "char": "🏊🏿‍♀️",
    "slug": "woman_swimming_tone5",
    "category": "activity",
    "isAlternative": true
  },
  "man_swimming": {
    "char": "🏊‍♂️",
    "slug": "man_swimming",
    "category": "activity"
  },
  "man_swimming_tone1": {
    "char": "🏊🏻‍♂️",
    "slug": "man_swimming_tone1",
    "category": "activity"
  },
  "man_swimming_light_skin_tone": {
    "char": "🏊🏻‍♂️",
    "slug": "man_swimming_tone1",
    "category": "activity",
    "isAlternative": true
  },
  "man_swimming_tone2": {
    "char": "🏊🏼‍♂️",
    "slug": "man_swimming_tone2",
    "category": "activity"
  },
  "man_swimming_medium_light_skin_tone": {
    "char": "🏊🏼‍♂️",
    "slug": "man_swimming_tone2",
    "category": "activity",
    "isAlternative": true
  },
  "man_swimming_tone3": {
    "char": "🏊🏽‍♂️",
    "slug": "man_swimming_tone3",
    "category": "activity"
  },
  "man_swimming_medium_skin_tone": {
    "char": "🏊🏽‍♂️",
    "slug": "man_swimming_tone3",
    "category": "activity",
    "isAlternative": true
  },
  "man_swimming_tone4": {
    "char": "🏊🏾‍♂️",
    "slug": "man_swimming_tone4",
    "category": "activity"
  },
  "man_swimming_medium_dark_skin_tone": {
    "char": "🏊🏾‍♂️",
    "slug": "man_swimming_tone4",
    "category": "activity",
    "isAlternative": true
  },
  "man_swimming_tone5": {
    "char": "🏊🏿‍♂️",
    "slug": "man_swimming_tone5",
    "category": "activity"
  },
  "man_swimming_dark_skin_tone": {
    "char": "🏊🏿‍♂️",
    "slug": "man_swimming_tone5",
    "category": "activity",
    "isAlternative": true
  },
  "person_playing_water_polo": {
    "char": "🤽",
    "slug": "person_playing_water_polo",
    "category": "activity"
  },
  "water_polo": {
    "char": "🤽",
    "slug": "person_playing_water_polo",
    "category": "activity",
    "isAlternative": true
  },
  "person_playing_water_polo_tone1": {
    "char": "🤽🏻",
    "slug": "person_playing_water_polo_tone1",
    "category": "activity"
  },
  "water_polo_tone1": {
    "char": "🤽🏻",
    "slug": "person_playing_water_polo_tone1",
    "category": "activity",
    "isAlternative": true
  },
  "person_playing_water_polo_tone2": {
    "char": "🤽🏼",
    "slug": "person_playing_water_polo_tone2",
    "category": "activity"
  },
  "water_polo_tone2": {
    "char": "🤽🏼",
    "slug": "person_playing_water_polo_tone2",
    "category": "activity",
    "isAlternative": true
  },
  "person_playing_water_polo_tone3": {
    "char": "🤽🏽",
    "slug": "person_playing_water_polo_tone3",
    "category": "activity"
  },
  "water_polo_tone3": {
    "char": "🤽🏽",
    "slug": "person_playing_water_polo_tone3",
    "category": "activity",
    "isAlternative": true
  },
  "person_playing_water_polo_tone4": {
    "char": "🤽🏾",
    "slug": "person_playing_water_polo_tone4",
    "category": "activity"
  },
  "water_polo_tone4": {
    "char": "🤽🏾",
    "slug": "person_playing_water_polo_tone4",
    "category": "activity",
    "isAlternative": true
  },
  "person_playing_water_polo_tone5": {
    "char": "🤽🏿",
    "slug": "person_playing_water_polo_tone5",
    "category": "activity"
  },
  "water_polo_tone5": {
    "char": "🤽🏿",
    "slug": "person_playing_water_polo_tone5",
    "category": "activity",
    "isAlternative": true
  },
  "woman_playing_water_polo": {
    "char": "🤽‍♀️",
    "slug": "woman_playing_water_polo",
    "category": "activity"
  },
  "woman_playing_water_polo_tone1": {
    "char": "🤽🏻‍♀️",
    "slug": "woman_playing_water_polo_tone1",
    "category": "activity"
  },
  "woman_playing_water_polo_light_skin_tone": {
    "char": "🤽🏻‍♀️",
    "slug": "woman_playing_water_polo_tone1",
    "category": "activity",
    "isAlternative": true
  },
  "woman_playing_water_polo_tone2": {
    "char": "🤽🏼‍♀️",
    "slug": "woman_playing_water_polo_tone2",
    "category": "activity"
  },
  "woman_playing_water_polo_medium_light_skin_tone": {
    "char": "🤽🏼‍♀️",
    "slug": "woman_playing_water_polo_tone2",
    "category": "activity",
    "isAlternative": true
  },
  "woman_playing_water_polo_tone3": {
    "char": "🤽🏽‍♀️",
    "slug": "woman_playing_water_polo_tone3",
    "category": "activity"
  },
  "woman_playing_water_polo_medium_skin_tone": {
    "char": "🤽🏽‍♀️",
    "slug": "woman_playing_water_polo_tone3",
    "category": "activity",
    "isAlternative": true
  },
  "woman_playing_water_polo_tone4": {
    "char": "🤽🏾‍♀️",
    "slug": "woman_playing_water_polo_tone4",
    "category": "activity"
  },
  "woman_playing_water_polo_medium_dark_skin_tone": {
    "char": "🤽🏾‍♀️",
    "slug": "woman_playing_water_polo_tone4",
    "category": "activity",
    "isAlternative": true
  },
  "woman_playing_water_polo_tone5": {
    "char": "🤽🏿‍♀️",
    "slug": "woman_playing_water_polo_tone5",
    "category": "activity"
  },
  "woman_playing_water_polo_dark_skin_tone": {
    "char": "🤽🏿‍♀️",
    "slug": "woman_playing_water_polo_tone5",
    "category": "activity",
    "isAlternative": true
  },
  "man_playing_water_polo": {
    "char": "🤽‍♂️",
    "slug": "man_playing_water_polo",
    "category": "activity"
  },
  "man_playing_water_polo_tone1": {
    "char": "🤽🏻‍♂️",
    "slug": "man_playing_water_polo_tone1",
    "category": "activity"
  },
  "man_playing_water_polo_light_skin_tone": {
    "char": "🤽🏻‍♂️",
    "slug": "man_playing_water_polo_tone1",
    "category": "activity",
    "isAlternative": true
  },
  "man_playing_water_polo_tone2": {
    "char": "🤽🏼‍♂️",
    "slug": "man_playing_water_polo_tone2",
    "category": "activity"
  },
  "man_playing_water_polo_medium_light_skin_tone": {
    "char": "🤽🏼‍♂️",
    "slug": "man_playing_water_polo_tone2",
    "category": "activity",
    "isAlternative": true
  },
  "man_playing_water_polo_tone3": {
    "char": "🤽🏽‍♂️",
    "slug": "man_playing_water_polo_tone3",
    "category": "activity"
  },
  "man_playing_water_polo_medium_skin_tone": {
    "char": "🤽🏽‍♂️",
    "slug": "man_playing_water_polo_tone3",
    "category": "activity",
    "isAlternative": true
  },
  "man_playing_water_polo_tone4": {
    "char": "🤽🏾‍♂️",
    "slug": "man_playing_water_polo_tone4",
    "category": "activity"
  },
  "man_playing_water_polo_medium_dark_skin_tone": {
    "char": "🤽🏾‍♂️",
    "slug": "man_playing_water_polo_tone4",
    "category": "activity",
    "isAlternative": true
  },
  "man_playing_water_polo_tone5": {
    "char": "🤽🏿‍♂️",
    "slug": "man_playing_water_polo_tone5",
    "category": "activity"
  },
  "man_playing_water_polo_dark_skin_tone": {
    "char": "🤽🏿‍♂️",
    "slug": "man_playing_water_polo_tone5",
    "category": "activity",
    "isAlternative": true
  },
  "person_rowing_boat": {
    "char": "🚣",
    "slug": "person_rowing_boat",
    "category": "activity"
  },
  "rowboat": {
    "char": "🚣",
    "slug": "person_rowing_boat",
    "category": "activity",
    "isAlternative": true
  },
  "person_rowing_boat_tone1": {
    "char": "🚣🏻",
    "slug": "person_rowing_boat_tone1",
    "category": "activity"
  },
  "rowboat_tone1": {
    "char": "🚣🏻",
    "slug": "person_rowing_boat_tone1",
    "category": "activity",
    "isAlternative": true
  },
  "person_rowing_boat_tone2": {
    "char": "🚣🏼",
    "slug": "person_rowing_boat_tone2",
    "category": "activity"
  },
  "rowboat_tone2": {
    "char": "🚣🏼",
    "slug": "person_rowing_boat_tone2",
    "category": "activity",
    "isAlternative": true
  },
  "person_rowing_boat_tone3": {
    "char": "🚣🏽",
    "slug": "person_rowing_boat_tone3",
    "category": "activity"
  },
  "rowboat_tone3": {
    "char": "🚣🏽",
    "slug": "person_rowing_boat_tone3",
    "category": "activity",
    "isAlternative": true
  },
  "person_rowing_boat_tone4": {
    "char": "🚣🏾",
    "slug": "person_rowing_boat_tone4",
    "category": "activity"
  },
  "rowboat_tone4": {
    "char": "🚣🏾",
    "slug": "person_rowing_boat_tone4",
    "category": "activity",
    "isAlternative": true
  },
  "person_rowing_boat_tone5": {
    "char": "🚣🏿",
    "slug": "person_rowing_boat_tone5",
    "category": "activity"
  },
  "rowboat_tone5": {
    "char": "🚣🏿",
    "slug": "person_rowing_boat_tone5",
    "category": "activity",
    "isAlternative": true
  },
  "woman_rowing_boat": {
    "char": "🚣‍♀️",
    "slug": "woman_rowing_boat",
    "category": "activity"
  },
  "woman_rowing_boat_tone1": {
    "char": "🚣🏻‍♀️",
    "slug": "woman_rowing_boat_tone1",
    "category": "activity"
  },
  "woman_rowing_boat_light_skin_tone": {
    "char": "🚣🏻‍♀️",
    "slug": "woman_rowing_boat_tone1",
    "category": "activity",
    "isAlternative": true
  },
  "woman_rowing_boat_tone2": {
    "char": "🚣🏼‍♀️",
    "slug": "woman_rowing_boat_tone2",
    "category": "activity"
  },
  "woman_rowing_boat_medium_light_skin_tone": {
    "char": "🚣🏼‍♀️",
    "slug": "woman_rowing_boat_tone2",
    "category": "activity",
    "isAlternative": true
  },
  "woman_rowing_boat_tone3": {
    "char": "🚣🏽‍♀️",
    "slug": "woman_rowing_boat_tone3",
    "category": "activity"
  },
  "woman_rowing_boat_medium_skin_tone": {
    "char": "🚣🏽‍♀️",
    "slug": "woman_rowing_boat_tone3",
    "category": "activity",
    "isAlternative": true
  },
  "woman_rowing_boat_tone4": {
    "char": "🚣🏾‍♀️",
    "slug": "woman_rowing_boat_tone4",
    "category": "activity"
  },
  "woman_rowing_boat_medium_dark_skin_tone": {
    "char": "🚣🏾‍♀️",
    "slug": "woman_rowing_boat_tone4",
    "category": "activity",
    "isAlternative": true
  },
  "woman_rowing_boat_tone5": {
    "char": "🚣🏿‍♀️",
    "slug": "woman_rowing_boat_tone5",
    "category": "activity"
  },
  "woman_rowing_boat_dark_skin_tone": {
    "char": "🚣🏿‍♀️",
    "slug": "woman_rowing_boat_tone5",
    "category": "activity",
    "isAlternative": true
  },
  "man_rowing_boat": {
    "char": "🚣‍♂️",
    "slug": "man_rowing_boat",
    "category": "activity"
  },
  "man_rowing_boat_tone1": {
    "char": "🚣🏻‍♂️",
    "slug": "man_rowing_boat_tone1",
    "category": "activity"
  },
  "man_rowing_boat_light_skin_tone": {
    "char": "🚣🏻‍♂️",
    "slug": "man_rowing_boat_tone1",
    "category": "activity",
    "isAlternative": true
  },
  "man_rowing_boat_tone2": {
    "char": "🚣🏼‍♂️",
    "slug": "man_rowing_boat_tone2",
    "category": "activity"
  },
  "man_rowing_boat_medium_light_skin_tone": {
    "char": "🚣🏼‍♂️",
    "slug": "man_rowing_boat_tone2",
    "category": "activity",
    "isAlternative": true
  },
  "man_rowing_boat_tone3": {
    "char": "🚣🏽‍♂️",
    "slug": "man_rowing_boat_tone3",
    "category": "activity"
  },
  "man_rowing_boat_medium_skin_tone": {
    "char": "🚣🏽‍♂️",
    "slug": "man_rowing_boat_tone3",
    "category": "activity",
    "isAlternative": true
  },
  "man_rowing_boat_tone4": {
    "char": "🚣🏾‍♂️",
    "slug": "man_rowing_boat_tone4",
    "category": "activity"
  },
  "man_rowing_boat_medium_dark_skin_tone": {
    "char": "🚣🏾‍♂️",
    "slug": "man_rowing_boat_tone4",
    "category": "activity",
    "isAlternative": true
  },
  "man_rowing_boat_tone5": {
    "char": "🚣🏿‍♂️",
    "slug": "man_rowing_boat_tone5",
    "category": "activity"
  },
  "man_rowing_boat_dark_skin_tone": {
    "char": "🚣🏿‍♂️",
    "slug": "man_rowing_boat_tone5",
    "category": "activity",
    "isAlternative": true
  },
  "person_climbing": {
    "char": "🧗",
    "slug": "person_climbing",
    "category": "activity"
  },
  "person_climbing_tone1": {
    "char": "🧗🏻",
    "slug": "person_climbing_tone1",
    "category": "activity"
  },
  "person_climbing_light_skin_tone": {
    "char": "🧗🏻",
    "slug": "person_climbing_tone1",
    "category": "activity",
    "isAlternative": true
  },
  "person_climbing_tone2": {
    "char": "🧗🏼",
    "slug": "person_climbing_tone2",
    "category": "activity"
  },
  "person_climbing_medium_light_skin_tone": {
    "char": "🧗🏼",
    "slug": "person_climbing_tone2",
    "category": "activity",
    "isAlternative": true
  },
  "person_climbing_tone3": {
    "char": "🧗🏽",
    "slug": "person_climbing_tone3",
    "category": "activity"
  },
  "person_climbing_medium_skin_tone": {
    "char": "🧗🏽",
    "slug": "person_climbing_tone3",
    "category": "activity",
    "isAlternative": true
  },
  "person_climbing_tone4": {
    "char": "🧗🏾",
    "slug": "person_climbing_tone4",
    "category": "activity"
  },
  "person_climbing_medium_dark_skin_tone": {
    "char": "🧗🏾",
    "slug": "person_climbing_tone4",
    "category": "activity",
    "isAlternative": true
  },
  "person_climbing_tone5": {
    "char": "🧗🏿",
    "slug": "person_climbing_tone5",
    "category": "activity"
  },
  "person_climbing_dark_skin_tone": {
    "char": "🧗🏿",
    "slug": "person_climbing_tone5",
    "category": "activity",
    "isAlternative": true
  },
  "woman_climbing": {
    "char": "🧗‍♀️",
    "slug": "woman_climbing",
    "category": "activity"
  },
  "woman_climbing_tone1": {
    "char": "🧗🏻‍♀️",
    "slug": "woman_climbing_tone1",
    "category": "activity"
  },
  "woman_climbing_light_skin_tone": {
    "char": "🧗🏻‍♀️",
    "slug": "woman_climbing_tone1",
    "category": "activity",
    "isAlternative": true
  },
  "woman_climbing_tone2": {
    "char": "🧗🏼‍♀️",
    "slug": "woman_climbing_tone2",
    "category": "activity"
  },
  "woman_climbing_medium_light_skin_tone": {
    "char": "🧗🏼‍♀️",
    "slug": "woman_climbing_tone2",
    "category": "activity",
    "isAlternative": true
  },
  "woman_climbing_tone3": {
    "char": "🧗🏽‍♀️",
    "slug": "woman_climbing_tone3",
    "category": "activity"
  },
  "woman_climbing_medium_skin_tone": {
    "char": "🧗🏽‍♀️",
    "slug": "woman_climbing_tone3",
    "category": "activity",
    "isAlternative": true
  },
  "woman_climbing_tone4": {
    "char": "🧗🏾‍♀️",
    "slug": "woman_climbing_tone4",
    "category": "activity"
  },
  "woman_climbing_medium_dark_skin_tone": {
    "char": "🧗🏾‍♀️",
    "slug": "woman_climbing_tone4",
    "category": "activity",
    "isAlternative": true
  },
  "woman_climbing_tone5": {
    "char": "🧗🏿‍♀️",
    "slug": "woman_climbing_tone5",
    "category": "activity"
  },
  "woman_climbing_dark_skin_tone": {
    "char": "🧗🏿‍♀️",
    "slug": "woman_climbing_tone5",
    "category": "activity",
    "isAlternative": true
  },
  "man_climbing": {
    "char": "🧗‍♂️",
    "slug": "man_climbing",
    "category": "activity"
  },
  "man_climbing_tone1": {
    "char": "🧗🏻‍♂️",
    "slug": "man_climbing_tone1",
    "category": "activity"
  },
  "man_climbing_light_skin_tone": {
    "char": "🧗🏻‍♂️",
    "slug": "man_climbing_tone1",
    "category": "activity",
    "isAlternative": true
  },
  "man_climbing_tone2": {
    "char": "🧗🏼‍♂️",
    "slug": "man_climbing_tone2",
    "category": "activity"
  },
  "man_climbing_medium_light_skin_tone": {
    "char": "🧗🏼‍♂️",
    "slug": "man_climbing_tone2",
    "category": "activity",
    "isAlternative": true
  },
  "man_climbing_tone3": {
    "char": "🧗🏽‍♂️",
    "slug": "man_climbing_tone3",
    "category": "activity"
  },
  "man_climbing_medium_skin_tone": {
    "char": "🧗🏽‍♂️",
    "slug": "man_climbing_tone3",
    "category": "activity",
    "isAlternative": true
  },
  "man_climbing_tone4": {
    "char": "🧗🏾‍♂️",
    "slug": "man_climbing_tone4",
    "category": "activity"
  },
  "man_climbing_medium_dark_skin_tone": {
    "char": "🧗🏾‍♂️",
    "slug": "man_climbing_tone4",
    "category": "activity",
    "isAlternative": true
  },
  "man_climbing_tone5": {
    "char": "🧗🏿‍♂️",
    "slug": "man_climbing_tone5",
    "category": "activity"
  },
  "man_climbing_dark_skin_tone": {
    "char": "🧗🏿‍♂️",
    "slug": "man_climbing_tone5",
    "category": "activity",
    "isAlternative": true
  },
  "person_mountain_biking": {
    "char": "🚵",
    "slug": "person_mountain_biking",
    "category": "activity"
  },
  "mountain_bicyclist": {
    "char": "🚵",
    "slug": "person_mountain_biking",
    "category": "activity",
    "isAlternative": true
  },
  "person_mountain_biking_tone1": {
    "char": "🚵🏻",
    "slug": "person_mountain_biking_tone1",
    "category": "activity"
  },
  "mountain_bicyclist_tone1": {
    "char": "🚵🏻",
    "slug": "person_mountain_biking_tone1",
    "category": "activity",
    "isAlternative": true
  },
  "person_mountain_biking_tone2": {
    "char": "🚵🏼",
    "slug": "person_mountain_biking_tone2",
    "category": "activity"
  },
  "mountain_bicyclist_tone2": {
    "char": "🚵🏼",
    "slug": "person_mountain_biking_tone2",
    "category": "activity",
    "isAlternative": true
  },
  "person_mountain_biking_tone3": {
    "char": "🚵🏽",
    "slug": "person_mountain_biking_tone3",
    "category": "activity"
  },
  "mountain_bicyclist_tone3": {
    "char": "🚵🏽",
    "slug": "person_mountain_biking_tone3",
    "category": "activity",
    "isAlternative": true
  },
  "person_mountain_biking_tone4": {
    "char": "🚵🏾",
    "slug": "person_mountain_biking_tone4",
    "category": "activity"
  },
  "mountain_bicyclist_tone4": {
    "char": "🚵🏾",
    "slug": "person_mountain_biking_tone4",
    "category": "activity",
    "isAlternative": true
  },
  "person_mountain_biking_tone5": {
    "char": "🚵🏿",
    "slug": "person_mountain_biking_tone5",
    "category": "activity"
  },
  "mountain_bicyclist_tone5": {
    "char": "🚵🏿",
    "slug": "person_mountain_biking_tone5",
    "category": "activity",
    "isAlternative": true
  },
  "woman_mountain_biking": {
    "char": "🚵‍♀️",
    "slug": "woman_mountain_biking",
    "category": "activity"
  },
  "woman_mountain_biking_tone1": {
    "char": "🚵🏻‍♀️",
    "slug": "woman_mountain_biking_tone1",
    "category": "activity"
  },
  "woman_mountain_biking_light_skin_tone": {
    "char": "🚵🏻‍♀️",
    "slug": "woman_mountain_biking_tone1",
    "category": "activity",
    "isAlternative": true
  },
  "woman_mountain_biking_tone2": {
    "char": "🚵🏼‍♀️",
    "slug": "woman_mountain_biking_tone2",
    "category": "activity"
  },
  "woman_mountain_biking_medium_light_skin_tone": {
    "char": "🚵🏼‍♀️",
    "slug": "woman_mountain_biking_tone2",
    "category": "activity",
    "isAlternative": true
  },
  "woman_mountain_biking_tone3": {
    "char": "🚵🏽‍♀️",
    "slug": "woman_mountain_biking_tone3",
    "category": "activity"
  },
  "woman_mountain_biking_medium_skin_tone": {
    "char": "🚵🏽‍♀️",
    "slug": "woman_mountain_biking_tone3",
    "category": "activity",
    "isAlternative": true
  },
  "woman_mountain_biking_tone4": {
    "char": "🚵🏾‍♀️",
    "slug": "woman_mountain_biking_tone4",
    "category": "activity"
  },
  "woman_mountain_biking_medium_dark_skin_tone": {
    "char": "🚵🏾‍♀️",
    "slug": "woman_mountain_biking_tone4",
    "category": "activity",
    "isAlternative": true
  },
  "woman_mountain_biking_tone5": {
    "char": "🚵🏿‍♀️",
    "slug": "woman_mountain_biking_tone5",
    "category": "activity"
  },
  "woman_mountain_biking_dark_skin_tone": {
    "char": "🚵🏿‍♀️",
    "slug": "woman_mountain_biking_tone5",
    "category": "activity",
    "isAlternative": true
  },
  "man_mountain_biking": {
    "char": "🚵‍♂️",
    "slug": "man_mountain_biking",
    "category": "activity"
  },
  "man_mountain_biking_tone1": {
    "char": "🚵🏻‍♂️",
    "slug": "man_mountain_biking_tone1",
    "category": "activity"
  },
  "man_mountain_biking_light_skin_tone": {
    "char": "🚵🏻‍♂️",
    "slug": "man_mountain_biking_tone1",
    "category": "activity",
    "isAlternative": true
  },
  "man_mountain_biking_tone2": {
    "char": "🚵🏼‍♂️",
    "slug": "man_mountain_biking_tone2",
    "category": "activity"
  },
  "man_mountain_biking_medium_light_skin_tone": {
    "char": "🚵🏼‍♂️",
    "slug": "man_mountain_biking_tone2",
    "category": "activity",
    "isAlternative": true
  },
  "man_mountain_biking_tone3": {
    "char": "🚵🏽‍♂️",
    "slug": "man_mountain_biking_tone3",
    "category": "activity"
  },
  "man_mountain_biking_medium_skin_tone": {
    "char": "🚵🏽‍♂️",
    "slug": "man_mountain_biking_tone3",
    "category": "activity",
    "isAlternative": true
  },
  "man_mountain_biking_tone4": {
    "char": "🚵🏾‍♂️",
    "slug": "man_mountain_biking_tone4",
    "category": "activity"
  },
  "man_mountain_biking_medium_dark_skin_tone": {
    "char": "🚵🏾‍♂️",
    "slug": "man_mountain_biking_tone4",
    "category": "activity",
    "isAlternative": true
  },
  "man_mountain_biking_tone5": {
    "char": "🚵🏿‍♂️",
    "slug": "man_mountain_biking_tone5",
    "category": "activity"
  },
  "man_mountain_biking_dark_skin_tone": {
    "char": "🚵🏿‍♂️",
    "slug": "man_mountain_biking_tone5",
    "category": "activity",
    "isAlternative": true
  },
  "person_biking": {
    "char": "🚴",
    "slug": "person_biking",
    "category": "activity"
  },
  "bicyclist": {
    "char": "🚴",
    "slug": "person_biking",
    "category": "activity",
    "isAlternative": true
  },
  "person_biking_tone1": {
    "char": "🚴🏻",
    "slug": "person_biking_tone1",
    "category": "activity"
  },
  "bicyclist_tone1": {
    "char": "🚴🏻",
    "slug": "person_biking_tone1",
    "category": "activity",
    "isAlternative": true
  },
  "person_biking_tone2": {
    "char": "🚴🏼",
    "slug": "person_biking_tone2",
    "category": "activity"
  },
  "bicyclist_tone2": {
    "char": "🚴🏼",
    "slug": "person_biking_tone2",
    "category": "activity",
    "isAlternative": true
  },
  "person_biking_tone3": {
    "char": "🚴🏽",
    "slug": "person_biking_tone3",
    "category": "activity"
  },
  "bicyclist_tone3": {
    "char": "🚴🏽",
    "slug": "person_biking_tone3",
    "category": "activity",
    "isAlternative": true
  },
  "person_biking_tone4": {
    "char": "🚴🏾",
    "slug": "person_biking_tone4",
    "category": "activity"
  },
  "bicyclist_tone4": {
    "char": "🚴🏾",
    "slug": "person_biking_tone4",
    "category": "activity",
    "isAlternative": true
  },
  "person_biking_tone5": {
    "char": "🚴🏿",
    "slug": "person_biking_tone5",
    "category": "activity"
  },
  "bicyclist_tone5": {
    "char": "🚴🏿",
    "slug": "person_biking_tone5",
    "category": "activity",
    "isAlternative": true
  },
  "woman_biking": {
    "char": "🚴‍♀️",
    "slug": "woman_biking",
    "category": "activity"
  },
  "woman_biking_tone1": {
    "char": "🚴🏻‍♀️",
    "slug": "woman_biking_tone1",
    "category": "activity"
  },
  "woman_biking_light_skin_tone": {
    "char": "🚴🏻‍♀️",
    "slug": "woman_biking_tone1",
    "category": "activity",
    "isAlternative": true
  },
  "woman_biking_tone2": {
    "char": "🚴🏼‍♀️",
    "slug": "woman_biking_tone2",
    "category": "activity"
  },
  "woman_biking_medium_light_skin_tone": {
    "char": "🚴🏼‍♀️",
    "slug": "woman_biking_tone2",
    "category": "activity",
    "isAlternative": true
  },
  "woman_biking_tone3": {
    "char": "🚴🏽‍♀️",
    "slug": "woman_biking_tone3",
    "category": "activity"
  },
  "woman_biking_medium_skin_tone": {
    "char": "🚴🏽‍♀️",
    "slug": "woman_biking_tone3",
    "category": "activity",
    "isAlternative": true
  },
  "woman_biking_tone4": {
    "char": "🚴🏾‍♀️",
    "slug": "woman_biking_tone4",
    "category": "activity"
  },
  "woman_biking_medium_dark_skin_tone": {
    "char": "🚴🏾‍♀️",
    "slug": "woman_biking_tone4",
    "category": "activity",
    "isAlternative": true
  },
  "woman_biking_tone5": {
    "char": "🚴🏿‍♀️",
    "slug": "woman_biking_tone5",
    "category": "activity"
  },
  "woman_biking_dark_skin_tone": {
    "char": "🚴🏿‍♀️",
    "slug": "woman_biking_tone5",
    "category": "activity",
    "isAlternative": true
  },
  "man_biking": { "char": "🚴‍♂️", "slug": "man_biking", "category": "activity" },
  "man_biking_tone1": {
    "char": "🚴🏻‍♂️",
    "slug": "man_biking_tone1",
    "category": "activity"
  },
  "man_biking_light_skin_tone": {
    "char": "🚴🏻‍♂️",
    "slug": "man_biking_tone1",
    "category": "activity",
    "isAlternative": true
  },
  "man_biking_tone2": {
    "char": "🚴🏼‍♂️",
    "slug": "man_biking_tone2",
    "category": "activity"
  },
  "man_biking_medium_light_skin_tone": {
    "char": "🚴🏼‍♂️",
    "slug": "man_biking_tone2",
    "category": "activity",
    "isAlternative": true
  },
  "man_biking_tone3": {
    "char": "🚴🏽‍♂️",
    "slug": "man_biking_tone3",
    "category": "activity"
  },
  "man_biking_medium_skin_tone": {
    "char": "🚴🏽‍♂️",
    "slug": "man_biking_tone3",
    "category": "activity",
    "isAlternative": true
  },
  "man_biking_tone4": {
    "char": "🚴🏾‍♂️",
    "slug": "man_biking_tone4",
    "category": "activity"
  },
  "man_biking_medium_dark_skin_tone": {
    "char": "🚴🏾‍♂️",
    "slug": "man_biking_tone4",
    "category": "activity",
    "isAlternative": true
  },
  "man_biking_tone5": {
    "char": "🚴🏿‍♂️",
    "slug": "man_biking_tone5",
    "category": "activity"
  },
  "man_biking_dark_skin_tone": {
    "char": "🚴🏿‍♂️",
    "slug": "man_biking_tone5",
    "category": "activity",
    "isAlternative": true
  },
  "trophy": { "char": "🏆", "slug": "trophy", "category": "activity" },
  "first_place": {
    "char": "🥇",
    "slug": "first_place",
    "category": "activity"
  },
  "first_place_medal": {
    "char": "🥇",
    "slug": "first_place",
    "category": "activity",
    "isAlternative": true
  },
  "second_place": {
    "char": "🥈",
    "slug": "second_place",
    "category": "activity"
  },
  "second_place_medal": {
    "char": "🥈",
    "slug": "second_place",
    "category": "activity",
    "isAlternative": true
  },
  "third_place": {
    "char": "🥉",
    "slug": "third_place",
    "category": "activity"
  },
  "third_place_medal": {
    "char": "🥉",
    "slug": "third_place",
    "category": "activity",
    "isAlternative": true
  },
  "medal": { "char": "🏅", "slug": "medal", "category": "activity" },
  "sports_medal": {
    "char": "🏅",
    "slug": "medal",
    "category": "activity",
    "isAlternative": true
  },
  "military_medal": {
    "char": "🎖️",
    "slug": "military_medal",
    "category": "activity"
  },
  "rosette": { "char": "🏵️", "slug": "rosette", "category": "activity" },
  "reminder_ribbon": {
    "char": "🎗️",
    "slug": "reminder_ribbon",
    "category": "activity"
  },
  "ticket": { "char": "🎫", "slug": "ticket", "category": "activity" },
  "tickets": { "char": "🎟️", "slug": "tickets", "category": "activity" },
  "admission_tickets": {
    "char": "🎟️",
    "slug": "tickets",
    "category": "activity",
    "isAlternative": true
  },
  "circus_tent": {
    "char": "🎪",
    "slug": "circus_tent",
    "category": "activity"
  },
  "person_juggling": {
    "char": "🤹",
    "slug": "person_juggling",
    "category": "activity"
  },
  "juggling": {
    "char": "🤹",
    "slug": "person_juggling",
    "category": "activity",
    "isAlternative": true
  },
  "juggler": {
    "char": "🤹",
    "slug": "person_juggling",
    "category": "activity",
    "isAlternative": true
  },
  "person_juggling_tone1": {
    "char": "🤹🏻",
    "slug": "person_juggling_tone1",
    "category": "activity"
  },
  "juggling_tone1": {
    "char": "🤹🏻",
    "slug": "person_juggling_tone1",
    "category": "activity",
    "isAlternative": true
  },
  "juggler_tone1": {
    "char": "🤹🏻",
    "slug": "person_juggling_tone1",
    "category": "activity",
    "isAlternative": true
  },
  "person_juggling_tone2": {
    "char": "🤹🏼",
    "slug": "person_juggling_tone2",
    "category": "activity"
  },
  "juggling_tone2": {
    "char": "🤹🏼",
    "slug": "person_juggling_tone2",
    "category": "activity",
    "isAlternative": true
  },
  "juggler_tone2": {
    "char": "🤹🏼",
    "slug": "person_juggling_tone2",
    "category": "activity",
    "isAlternative": true
  },
  "person_juggling_tone3": {
    "char": "🤹🏽",
    "slug": "person_juggling_tone3",
    "category": "activity"
  },
  "juggling_tone3": {
    "char": "🤹🏽",
    "slug": "person_juggling_tone3",
    "category": "activity",
    "isAlternative": true
  },
  "juggler_tone3": {
    "char": "🤹🏽",
    "slug": "person_juggling_tone3",
    "category": "activity",
    "isAlternative": true
  },
  "person_juggling_tone4": {
    "char": "🤹🏾",
    "slug": "person_juggling_tone4",
    "category": "activity"
  },
  "juggling_tone4": {
    "char": "🤹🏾",
    "slug": "person_juggling_tone4",
    "category": "activity",
    "isAlternative": true
  },
  "juggler_tone4": {
    "char": "🤹🏾",
    "slug": "person_juggling_tone4",
    "category": "activity",
    "isAlternative": true
  },
  "person_juggling_tone5": {
    "char": "🤹🏿",
    "slug": "person_juggling_tone5",
    "category": "activity"
  },
  "juggling_tone5": {
    "char": "🤹🏿",
    "slug": "person_juggling_tone5",
    "category": "activity",
    "isAlternative": true
  },
  "juggler_tone5": {
    "char": "🤹🏿",
    "slug": "person_juggling_tone5",
    "category": "activity",
    "isAlternative": true
  },
  "woman_juggling": {
    "char": "🤹‍♀️",
    "slug": "woman_juggling",
    "category": "activity"
  },
  "woman_juggling_tone1": {
    "char": "🤹🏻‍♀️",
    "slug": "woman_juggling_tone1",
    "category": "activity"
  },
  "woman_juggling_light_skin_tone": {
    "char": "🤹🏻‍♀️",
    "slug": "woman_juggling_tone1",
    "category": "activity",
    "isAlternative": true
  },
  "woman_juggling_tone2": {
    "char": "🤹🏼‍♀️",
    "slug": "woman_juggling_tone2",
    "category": "activity"
  },
  "woman_juggling_medium_light_skin_tone": {
    "char": "🤹🏼‍♀️",
    "slug": "woman_juggling_tone2",
    "category": "activity",
    "isAlternative": true
  },
  "woman_juggling_tone3": {
    "char": "🤹🏽‍♀️",
    "slug": "woman_juggling_tone3",
    "category": "activity"
  },
  "woman_juggling_medium_skin_tone": {
    "char": "🤹🏽‍♀️",
    "slug": "woman_juggling_tone3",
    "category": "activity",
    "isAlternative": true
  },
  "woman_juggling_tone4": {
    "char": "🤹🏾‍♀️",
    "slug": "woman_juggling_tone4",
    "category": "activity"
  },
  "woman_juggling_medium_dark_skin_tone": {
    "char": "🤹🏾‍♀️",
    "slug": "woman_juggling_tone4",
    "category": "activity",
    "isAlternative": true
  },
  "woman_juggling_tone5": {
    "char": "🤹🏿‍♀️",
    "slug": "woman_juggling_tone5",
    "category": "activity"
  },
  "woman_juggling_dark_skin_tone": {
    "char": "🤹🏿‍♀️",
    "slug": "woman_juggling_tone5",
    "category": "activity",
    "isAlternative": true
  },
  "man_juggling": {
    "char": "🤹‍♂️",
    "slug": "man_juggling",
    "category": "activity"
  },
  "man_juggling_tone1": {
    "char": "🤹🏻‍♂️",
    "slug": "man_juggling_tone1",
    "category": "activity"
  },
  "man_juggling_light_skin_tone": {
    "char": "🤹🏻‍♂️",
    "slug": "man_juggling_tone1",
    "category": "activity",
    "isAlternative": true
  },
  "man_juggling_tone2": {
    "char": "🤹🏼‍♂️",
    "slug": "man_juggling_tone2",
    "category": "activity"
  },
  "man_juggling_medium_light_skin_tone": {
    "char": "🤹🏼‍♂️",
    "slug": "man_juggling_tone2",
    "category": "activity",
    "isAlternative": true
  },
  "man_juggling_tone3": {
    "char": "🤹🏽‍♂️",
    "slug": "man_juggling_tone3",
    "category": "activity"
  },
  "man_juggling_medium_skin_tone": {
    "char": "🤹🏽‍♂️",
    "slug": "man_juggling_tone3",
    "category": "activity",
    "isAlternative": true
  },
  "man_juggling_tone4": {
    "char": "🤹🏾‍♂️",
    "slug": "man_juggling_tone4",
    "category": "activity"
  },
  "man_juggling_medium_dark_skin_tone": {
    "char": "🤹🏾‍♂️",
    "slug": "man_juggling_tone4",
    "category": "activity",
    "isAlternative": true
  },
  "man_juggling_tone5": {
    "char": "🤹🏿‍♂️",
    "slug": "man_juggling_tone5",
    "category": "activity"
  },
  "man_juggling_dark_skin_tone": {
    "char": "🤹🏿‍♂️",
    "slug": "man_juggling_tone5",
    "category": "activity",
    "isAlternative": true
  },
  "performing_arts": {
    "char": "🎭",
    "slug": "performing_arts",
    "category": "activity"
  },
  "ballet_shoes": {
    "char": "🩰",
    "slug": "ballet_shoes",
    "category": "activity"
  },
  "art": { "char": "🎨", "slug": "art", "category": "activity" },
  "clapper": { "char": "🎬", "slug": "clapper", "category": "activity" },
  "clapper_board": {
    "char": "🎬",
    "slug": "clapper",
    "category": "activity",
    "isAlternative": true
  },
  "microphone": { "char": "🎤", "slug": "microphone", "category": "activity" },
  "headphones": { "char": "🎧", "slug": "headphones", "category": "activity" },
  "headphone": {
    "char": "🎧",
    "slug": "headphones",
    "category": "activity",
    "isAlternative": true
  },
  "musical_score": {
    "char": "🎼",
    "slug": "musical_score",
    "category": "activity"
  },
  "musical_keyboard": {
    "char": "🎹",
    "slug": "musical_keyboard",
    "category": "activity"
  },
  "drum": { "char": "🥁", "slug": "drum", "category": "activity" },
  "drum_with_drumsticks": {
    "char": "🥁",
    "slug": "drum",
    "category": "activity",
    "isAlternative": true
  },
  "long_drum": { "char": "🪘", "slug": "long_drum", "category": "activity" },
  "saxophone": { "char": "🎷", "slug": "saxophone", "category": "activity" },
  "trumpet": { "char": "🎺", "slug": "trumpet", "category": "activity" },
  "accordion": { "char": "🪗", "slug": "accordion", "category": "activity" },
  "guitar": { "char": "🎸", "slug": "guitar", "category": "activity" },
  "banjo": { "char": "🪕", "slug": "banjo", "category": "activity" },
  "violin": { "char": "🎻", "slug": "violin", "category": "activity" },
  "game_die": { "char": "🎲", "slug": "game_die", "category": "activity" },
  "chess_pawn": { "char": "♟️", "slug": "chess_pawn", "category": "activity" },
  "dart": { "char": "🎯", "slug": "dart", "category": "activity" },
  "direct_hit": {
    "char": "🎯",
    "slug": "dart",
    "category": "activity",
    "isAlternative": true
  },
  "bowling": { "char": "🎳", "slug": "bowling", "category": "activity" },
  "video_game": { "char": "🎮", "slug": "video_game", "category": "activity" },
  "slot_machine": {
    "char": "🎰",
    "slug": "slot_machine",
    "category": "activity"
  },
  "jigsaw": { "char": "🧩", "slug": "jigsaw", "category": "activity" },
  "puzzle_piece": {
    "char": "🧩",
    "slug": "jigsaw",
    "category": "activity",
    "isAlternative": true
  },
  "red_car": { "char": "🚗", "slug": "red_car", "category": "travel" },
  "automobile": {
    "char": "🚗",
    "slug": "red_car",
    "category": "travel",
    "isAlternative": true
  },
  "taxi": { "char": "🚕", "slug": "taxi", "category": "travel" },
  "blue_car": { "char": "🚙", "slug": "blue_car", "category": "travel" },
  "pickup_truck": {
    "char": "🛻",
    "slug": "pickup_truck",
    "category": "travel"
  },
  "bus": { "char": "🚌", "slug": "bus", "category": "travel" },
  "trolleybus": { "char": "🚎", "slug": "trolleybus", "category": "travel" },
  "race_car": { "char": "🏎️", "slug": "race_car", "category": "travel" },
  "racing_car": {
    "char": "🏎️",
    "slug": "race_car",
    "category": "travel",
    "isAlternative": true
  },
  "police_car": { "char": "🚓", "slug": "police_car", "category": "travel" },
  "ambulance": { "char": "🚑", "slug": "ambulance", "category": "travel" },
  "fire_engine": { "char": "🚒", "slug": "fire_engine", "category": "travel" },
  "minibus": { "char": "🚐", "slug": "minibus", "category": "travel" },
  "truck": { "char": "🚚", "slug": "truck", "category": "travel" },
  "articulated_lorry": {
    "char": "🚛",
    "slug": "articulated_lorry",
    "category": "travel"
  },
  "tractor": { "char": "🚜", "slug": "tractor", "category": "travel" },
  "probing_cane": {
    "char": "🦯",
    "slug": "probing_cane",
    "category": "travel"
  },
  "crutch": { "char": "🩼", "slug": "crutch", "category": "travel" },
  "manual_wheelchair": {
    "char": "🦽",
    "slug": "manual_wheelchair",
    "category": "travel"
  },
  "motorized_wheelchair": {
    "char": "🦼",
    "slug": "motorized_wheelchair",
    "category": "travel"
  },
  "scooter": { "char": "🛴", "slug": "scooter", "category": "travel" },
  "kick_scooter": {
    "char": "🛴",
    "slug": "scooter",
    "category": "travel",
    "isAlternative": true
  },
  "bike": { "char": "🚲", "slug": "bike", "category": "travel" },
  "bicycle": {
    "char": "🚲",
    "slug": "bike",
    "category": "travel",
    "isAlternative": true
  },
  "motor_scooter": {
    "char": "🛵",
    "slug": "motor_scooter",
    "category": "travel"
  },
  "motorbike": {
    "char": "🛵",
    "slug": "motor_scooter",
    "category": "travel",
    "isAlternative": true
  },
  "motorcycle": { "char": "🏍️", "slug": "motorcycle", "category": "travel" },
  "racing_motorcycle": {
    "char": "🏍️",
    "slug": "motorcycle",
    "category": "travel",
    "isAlternative": true
  },
  "auto_rickshaw": {
    "char": "🛺",
    "slug": "auto_rickshaw",
    "category": "travel"
  },
  "wheel": { "char": "🛞", "slug": "wheel", "category": "travel" },
  "rotating_light": {
    "char": "🚨",
    "slug": "rotating_light",
    "category": "travel"
  },
  "oncoming_police_car": {
    "char": "🚔",
    "slug": "oncoming_police_car",
    "category": "travel"
  },
  "oncoming_bus": {
    "char": "🚍",
    "slug": "oncoming_bus",
    "category": "travel"
  },
  "oncoming_automobile": {
    "char": "🚘",
    "slug": "oncoming_automobile",
    "category": "travel"
  },
  "oncoming_taxi": {
    "char": "🚖",
    "slug": "oncoming_taxi",
    "category": "travel"
  },
  "aerial_tramway": {
    "char": "🚡",
    "slug": "aerial_tramway",
    "category": "travel"
  },
  "mountain_cableway": {
    "char": "🚠",
    "slug": "mountain_cableway",
    "category": "travel"
  },
  "suspension_railway": {
    "char": "🚟",
    "slug": "suspension_railway",
    "category": "travel"
  },
  "railway_car": { "char": "🚃", "slug": "railway_car", "category": "travel" },
  "train": { "char": "🚋", "slug": "train", "category": "travel" },
  "tram_car": {
    "char": "🚋",
    "slug": "train",
    "category": "travel",
    "isAlternative": true
  },
  "mountain_railway": {
    "char": "🚞",
    "slug": "mountain_railway",
    "category": "travel"
  },
  "monorail": { "char": "🚝", "slug": "monorail", "category": "travel" },
  "bullettrain_side": {
    "char": "🚄",
    "slug": "bullettrain_side",
    "category": "travel"
  },
  "bullettrain_front": {
    "char": "🚅",
    "slug": "bullettrain_front",
    "category": "travel"
  },
  "bullet_train": {
    "char": "🚅",
    "slug": "bullettrain_front",
    "category": "travel",
    "isAlternative": true
  },
  "light_rail": { "char": "🚈", "slug": "light_rail", "category": "travel" },
  "steam_locomotive": {
    "char": "🚂",
    "slug": "steam_locomotive",
    "category": "travel"
  },
  "locomotive": {
    "char": "🚂",
    "slug": "steam_locomotive",
    "category": "travel",
    "isAlternative": true
  },
  "train2": { "char": "🚆", "slug": "train2", "category": "travel" },
  "metro": { "char": "🚇", "slug": "metro", "category": "travel" },
  "tram": { "char": "🚊", "slug": "tram", "category": "travel" },
  "station": { "char": "🚉", "slug": "station", "category": "travel" },
  "airplane_departure": {
    "char": "🛫",
    "slug": "airplane_departure",
    "category": "travel"
  },
  "airplane_arriving": {
    "char": "🛬",
    "slug": "airplane_arriving",
    "category": "travel"
  },
  "airplane_small": {
    "char": "🛩️",
    "slug": "airplane_small",
    "category": "travel"
  },
  "small_airplane": {
    "char": "🛩️",
    "slug": "airplane_small",
    "category": "travel",
    "isAlternative": true
  },
  "seat": { "char": "💺", "slug": "seat", "category": "travel" },
  "satellite_orbital": {
    "char": "🛰️",
    "slug": "satellite_orbital",
    "category": "travel"
  },
  "rocket": { "char": "🚀", "slug": "rocket", "category": "travel" },
  "flying_saucer": {
    "char": "🛸",
    "slug": "flying_saucer",
    "category": "travel"
  },
  "helicopter": { "char": "🚁", "slug": "helicopter", "category": "travel" },
  "canoe": { "char": "🛶", "slug": "canoe", "category": "travel" },
  "kayak": {
    "char": "🛶",
    "slug": "canoe",
    "category": "travel",
    "isAlternative": true
  },
  "sailboat": { "char": "⛵", "slug": "sailboat", "category": "travel" },
  "speedboat": { "char": "🚤", "slug": "speedboat", "category": "travel" },
  "motorboat": { "char": "🛥️", "slug": "motorboat", "category": "travel" },
  "motor_boat": {
    "char": "🛥️",
    "slug": "motorboat",
    "category": "travel",
    "isAlternative": true
  },
  "cruise_ship": { "char": "🛳️", "slug": "cruise_ship", "category": "travel" },
  "passenger_ship": {
    "char": "🛳️",
    "slug": "cruise_ship",
    "category": "travel",
    "isAlternative": true
  },
  "ferry": { "char": "⛴️", "slug": "ferry", "category": "travel" },
  "ship": { "char": "🚢", "slug": "ship", "category": "travel" },
  "ring_buoy": { "char": "🛟", "slug": "ring_buoy", "category": "travel" },
  "hook": { "char": "🪝", "slug": "hook", "category": "travel" },
  "fuelpump": { "char": "⛽", "slug": "fuelpump", "category": "travel" },
  "fuel_pump": {
    "char": "⛽",
    "slug": "fuelpump",
    "category": "travel",
    "isAlternative": true
  },
  "construction": {
    "char": "🚧",
    "slug": "construction",
    "category": "travel"
  },
  "vertical_traffic_light": {
    "char": "🚦",
    "slug": "vertical_traffic_light",
    "category": "travel"
  },
  "traffic_light": {
    "char": "🚥",
    "slug": "traffic_light",
    "category": "travel"
  },
  "busstop": { "char": "🚏", "slug": "busstop", "category": "travel" },
  "bus_stop": {
    "char": "🚏",
    "slug": "busstop",
    "category": "travel",
    "isAlternative": true
  },
  "map": { "char": "🗺️", "slug": "map", "category": "travel" },
  "world_map": {
    "char": "🗺️",
    "slug": "map",
    "category": "travel",
    "isAlternative": true
  },
  "moyai": { "char": "🗿", "slug": "moyai", "category": "travel" },
  "moai": {
    "char": "🗿",
    "slug": "moyai",
    "category": "travel",
    "isAlternative": true
  },
  "statue_of_liberty": {
    "char": "🗽",
    "slug": "statue_of_liberty",
    "category": "travel"
  },
  "tokyo_tower": { "char": "🗼", "slug": "tokyo_tower", "category": "travel" },
  "european_castle": {
    "char": "🏰",
    "slug": "european_castle",
    "category": "travel"
  },
  "castle": {
    "char": "🏰",
    "slug": "european_castle",
    "category": "travel",
    "isAlternative": true
  },
  "japanese_castle": {
    "char": "🏯",
    "slug": "japanese_castle",
    "category": "travel"
  },
  "stadium": { "char": "🏟️", "slug": "stadium", "category": "travel" },
  "ferris_wheel": {
    "char": "🎡",
    "slug": "ferris_wheel",
    "category": "travel"
  },
  "roller_coaster": {
    "char": "🎢",
    "slug": "roller_coaster",
    "category": "travel"
  },
  "carousel_horse": {
    "char": "🎠",
    "slug": "carousel_horse",
    "category": "travel"
  },
  "fountain": { "char": "⛲", "slug": "fountain", "category": "travel" },
  "beach_umbrella": {
    "char": "⛱️",
    "slug": "beach_umbrella",
    "category": "travel"
  },
  "umbrella_on_ground": {
    "char": "⛱️",
    "slug": "beach_umbrella",
    "category": "travel",
    "isAlternative": true
  },
  "beach": { "char": "🏖️", "slug": "beach", "category": "travel" },
  "beach_with_umbrella": {
    "char": "🏖️",
    "slug": "beach",
    "category": "travel",
    "isAlternative": true
  },
  "island": { "char": "🏝️", "slug": "island", "category": "travel" },
  "desert_island": {
    "char": "🏝️",
    "slug": "island",
    "category": "travel",
    "isAlternative": true
  },
  "desert": { "char": "🏜️", "slug": "desert", "category": "travel" },
  "volcano": { "char": "🌋", "slug": "volcano", "category": "travel" },
  "mountain": { "char": "⛰️", "slug": "mountain", "category": "travel" },
  "mountain_snow": {
    "char": "🏔️",
    "slug": "mountain_snow",
    "category": "travel"
  },
  "snow_capped_mountain": {
    "char": "🏔️",
    "slug": "mountain_snow",
    "category": "travel",
    "isAlternative": true
  },
  "mount_fuji": { "char": "🗻", "slug": "mount_fuji", "category": "travel" },
  "camping": { "char": "🏕️", "slug": "camping", "category": "travel" },
  "tent": { "char": "⛺", "slug": "tent", "category": "travel" },
  "house": { "char": "🏠", "slug": "house", "category": "travel" },
  "house_with_garden": {
    "char": "🏡",
    "slug": "house_with_garden",
    "category": "travel"
  },
  "homes": { "char": "🏘️", "slug": "homes", "category": "travel" },
  "house_buildings": {
    "char": "🏘️",
    "slug": "homes",
    "category": "travel",
    "isAlternative": true
  },
  "houses": {
    "char": "🏘️",
    "slug": "homes",
    "category": "travel",
    "isAlternative": true
  },
  "house_abandoned": {
    "char": "🏚️",
    "slug": "house_abandoned",
    "category": "travel"
  },
  "derelict_house_building": {
    "char": "🏚️",
    "slug": "house_abandoned",
    "category": "travel",
    "isAlternative": true
  },
  "hut": { "char": "🛖", "slug": "hut", "category": "travel" },
  "construction_site": {
    "char": "🏗️",
    "slug": "construction_site",
    "category": "travel"
  },
  "building_construction": {
    "char": "🏗️",
    "slug": "construction_site",
    "category": "travel",
    "isAlternative": true
  },
  "factory": { "char": "🏭", "slug": "factory", "category": "travel" },
  "office": { "char": "🏢", "slug": "office", "category": "travel" },
  "department_store": {
    "char": "🏬",
    "slug": "department_store",
    "category": "travel"
  },
  "post_office": { "char": "🏣", "slug": "post_office", "category": "travel" },
  "european_post_office": {
    "char": "🏤",
    "slug": "european_post_office",
    "category": "travel"
  },
  "hospital": { "char": "🏥", "slug": "hospital", "category": "travel" },
  "bank": { "char": "🏦", "slug": "bank", "category": "travel" },
  "hotel": { "char": "🏨", "slug": "hotel", "category": "travel" },
  "convenience_store": {
    "char": "🏪",
    "slug": "convenience_store",
    "category": "travel"
  },
  "school": { "char": "🏫", "slug": "school", "category": "travel" },
  "love_hotel": { "char": "🏩", "slug": "love_hotel", "category": "travel" },
  "wedding": { "char": "💒", "slug": "wedding", "category": "travel" },
  "classical_building": {
    "char": "🏛️",
    "slug": "classical_building",
    "category": "travel"
  },
  "church": { "char": "⛪", "slug": "church", "category": "travel" },
  "mosque": { "char": "🕌", "slug": "mosque", "category": "travel" },
  "synagogue": { "char": "🕍", "slug": "synagogue", "category": "travel" },
  "hindu_temple": {
    "char": "🛕",
    "slug": "hindu_temple",
    "category": "travel"
  },
  "kaaba": { "char": "🕋", "slug": "kaaba", "category": "travel" },
  "shinto_shrine": {
    "char": "⛩️",
    "slug": "shinto_shrine",
    "category": "travel"
  },
  "railway_track": {
    "char": "🛤️",
    "slug": "railway_track",
    "category": "travel"
  },
  "railroad_track": {
    "char": "🛤️",
    "slug": "railway_track",
    "category": "travel",
    "isAlternative": true
  },
  "motorway": { "char": "🛣️", "slug": "motorway", "category": "travel" },
  "japan": { "char": "🗾", "slug": "japan", "category": "travel" },
  "map_of_japan": {
    "char": "🗾",
    "slug": "japan",
    "category": "travel",
    "isAlternative": true
  },
  "rice_scene": { "char": "🎑", "slug": "rice_scene", "category": "travel" },
  "park": { "char": "🏞️", "slug": "park", "category": "travel" },
  "national_park": {
    "char": "🏞️",
    "slug": "park",
    "category": "travel",
    "isAlternative": true
  },
  "sunrise": { "char": "🌅", "slug": "sunrise", "category": "travel" },
  "sunrise_over_mountains": {
    "char": "🌄",
    "slug": "sunrise_over_mountains",
    "category": "travel"
  },
  "stars": { "char": "🌠", "slug": "stars", "category": "travel" },
  "shooting_star": {
    "char": "🌠",
    "slug": "stars",
    "category": "travel",
    "isAlternative": true
  },
  "sparkler": { "char": "🎇", "slug": "sparkler", "category": "travel" },
  "fireworks": { "char": "🎆", "slug": "fireworks", "category": "travel" },
  "city_sunset": { "char": "🌇", "slug": "city_sunset", "category": "travel" },
  "city_sunrise": {
    "char": "🌇",
    "slug": "city_sunset",
    "category": "travel",
    "isAlternative": true
  },
  "sunset": {
    "char": "🌇",
    "slug": "city_sunset",
    "category": "travel",
    "isAlternative": true
  },
  "city_dusk": { "char": "🌆", "slug": "city_dusk", "category": "travel" },
  "cityscape": { "char": "🏙️", "slug": "cityscape", "category": "travel" },
  "night_with_stars": {
    "char": "🌃",
    "slug": "night_with_stars",
    "category": "travel"
  },
  "milky_way": { "char": "🌌", "slug": "milky_way", "category": "travel" },
  "bridge_at_night": {
    "char": "🌉",
    "slug": "bridge_at_night",
    "category": "travel"
  },
  "foggy": { "char": "🌁", "slug": "foggy", "category": "travel" },
  "watch": { "char": "⌚", "slug": "watch", "category": "objects" },
  "mobile_phone": {
    "char": "📱",
    "slug": "mobile_phone",
    "category": "objects"
  },
  "calling": { "char": "📲", "slug": "calling", "category": "objects" },
  "computer": { "char": "💻", "slug": "computer", "category": "objects" },
  "desktop": { "char": "🖥️", "slug": "desktop", "category": "objects" },
  "desktop_computer": {
    "char": "🖥️",
    "slug": "desktop",
    "category": "objects",
    "isAlternative": true
  },
  "printer": { "char": "🖨️", "slug": "printer", "category": "objects" },
  "mouse_three_button": {
    "char": "🖱️",
    "slug": "mouse_three_button",
    "category": "objects"
  },
  "three_button_mouse": {
    "char": "🖱️",
    "slug": "mouse_three_button",
    "category": "objects",
    "isAlternative": true
  },
  "trackball": { "char": "🖲️", "slug": "trackball", "category": "objects" },
  "joystick": { "char": "🕹️", "slug": "joystick", "category": "objects" },
  "compression": { "char": "🗜️", "slug": "compression", "category": "objects" },
  "clamp": {
    "char": "🗜️",
    "slug": "compression",
    "category": "objects",
    "isAlternative": true
  },
  "minidisc": { "char": "💽", "slug": "minidisc", "category": "objects" },
  "computer_disk": {
    "char": "💽",
    "slug": "minidisc",
    "category": "objects",
    "isAlternative": true
  },
  "floppy_disk": { "char": "💾", "slug": "floppy_disk", "category": "objects" },
  "cd": { "char": "💿", "slug": "cd", "category": "objects" },
  "optical_disk": {
    "char": "💿",
    "slug": "cd",
    "category": "objects",
    "isAlternative": true
  },
  "dvd": { "char": "📀", "slug": "dvd", "category": "objects" },
  "vhs": { "char": "📼", "slug": "vhs", "category": "objects" },
  "videocassette": {
    "char": "📼",
    "slug": "vhs",
    "category": "objects",
    "isAlternative": true
  },
  "camera": { "char": "📷", "slug": "camera", "category": "objects" },
  "camera_with_flash": {
    "char": "📸",
    "slug": "camera_with_flash",
    "category": "objects"
  },
  "video_camera": {
    "char": "📹",
    "slug": "video_camera",
    "category": "objects"
  },
  "movie_camera": {
    "char": "🎥",
    "slug": "movie_camera",
    "category": "objects"
  },
  "projector": { "char": "📽️", "slug": "projector", "category": "objects" },
  "film_projector": {
    "char": "📽️",
    "slug": "projector",
    "category": "objects",
    "isAlternative": true
  },
  "film_frames": { "char": "🎞️", "slug": "film_frames", "category": "objects" },
  "telephone_receiver": {
    "char": "📞",
    "slug": "telephone_receiver",
    "category": "objects"
  },
  "telephone": { "char": "☎️", "slug": "telephone", "category": "objects" },
  "pager": { "char": "📟", "slug": "pager", "category": "objects" },
  "fax": { "char": "📠", "slug": "fax", "category": "objects" },
  "fax_machine": {
    "char": "📠",
    "slug": "fax",
    "category": "objects",
    "isAlternative": true
  },
  "tv": { "char": "📺", "slug": "tv", "category": "objects" },
  "television": {
    "char": "📺",
    "slug": "tv",
    "category": "objects",
    "isAlternative": true
  },
  "radio": { "char": "📻", "slug": "radio", "category": "objects" },
  "microphone2": { "char": "🎙️", "slug": "microphone2", "category": "objects" },
  "studio_microphone": {
    "char": "🎙️",
    "slug": "microphone2",
    "category": "objects",
    "isAlternative": true
  },
  "level_slider": {
    "char": "🎚️",
    "slug": "level_slider",
    "category": "objects"
  },
  "control_knobs": {
    "char": "🎛️",
    "slug": "control_knobs",
    "category": "objects"
  },
  "compass": { "char": "🧭", "slug": "compass", "category": "objects" },
  "stopwatch": { "char": "⏱️", "slug": "stopwatch", "category": "objects" },
  "timer": { "char": "⏲️", "slug": "timer", "category": "objects" },
  "timer_clock": {
    "char": "⏲️",
    "slug": "timer",
    "category": "objects",
    "isAlternative": true
  },
  "alarm_clock": { "char": "⏰", "slug": "alarm_clock", "category": "objects" },
  "clock": { "char": "🕰️", "slug": "clock", "category": "objects" },
  "mantlepiece_clock": {
    "char": "🕰️",
    "slug": "clock",
    "category": "objects",
    "isAlternative": true
  },
  "hourglass": { "char": "⌛", "slug": "hourglass", "category": "objects" },
  "hourglass_flowing_sand": {
    "char": "⏳",
    "slug": "hourglass_flowing_sand",
    "category": "objects"
  },
  "satellite": { "char": "📡", "slug": "satellite", "category": "objects" },
  "battery": { "char": "🔋", "slug": "battery", "category": "objects" },
  "low_battery": { "char": "🪫", "slug": "low_battery", "category": "objects" },
  "electric_plug": {
    "char": "🔌",
    "slug": "electric_plug",
    "category": "objects"
  },
  "bulb": { "char": "💡", "slug": "bulb", "category": "objects" },
  "light_bulb": {
    "char": "💡",
    "slug": "bulb",
    "category": "objects",
    "isAlternative": true
  },
  "flashlight": { "char": "🔦", "slug": "flashlight", "category": "objects" },
  "candle": { "char": "🕯️", "slug": "candle", "category": "objects" },
  "diya_lamp": { "char": "🪔", "slug": "diya_lamp", "category": "objects" },
  "fire_extinguisher": {
    "char": "🧯",
    "slug": "fire_extinguisher",
    "category": "objects"
  },
  "oil": { "char": "🛢️", "slug": "oil", "category": "objects" },
  "oil_drum": {
    "char": "🛢️",
    "slug": "oil",
    "category": "objects",
    "isAlternative": true
  },
  "money_with_wings": {
    "char": "💸",
    "slug": "money_with_wings",
    "category": "objects"
  },
  "dollar": { "char": "💵", "slug": "dollar", "category": "objects" },
  "yen": { "char": "💴", "slug": "yen", "category": "objects" },
  "yen_banknote": {
    "char": "💴",
    "slug": "yen",
    "category": "objects",
    "isAlternative": true
  },
  "euro": { "char": "💶", "slug": "euro", "category": "objects" },
  "euro_banknote": {
    "char": "💶",
    "slug": "euro",
    "category": "objects",
    "isAlternative": true
  },
  "pound": { "char": "💷", "slug": "pound", "category": "objects" },
  "coin": { "char": "🪙", "slug": "coin", "category": "objects" },
  "moneybag": { "char": "💰", "slug": "moneybag", "category": "objects" },
  "money_bag": {
    "char": "💰",
    "slug": "moneybag",
    "category": "objects",
    "isAlternative": true
  },
  "credit_card": { "char": "💳", "slug": "credit_card", "category": "objects" },
  "identification_card": {
    "char": "🪪",
    "slug": "identification_card",
    "category": "objects"
  },
  "gem": { "char": "💎", "slug": "gem", "category": "objects" },
  "gem_stone": {
    "char": "💎",
    "slug": "gem",
    "category": "objects",
    "isAlternative": true
  },
  "ladder": { "char": "🪜", "slug": "ladder", "category": "objects" },
  "toolbox": { "char": "🧰", "slug": "toolbox", "category": "objects" },
  "screwdriver": { "char": "🪛", "slug": "screwdriver", "category": "objects" },
  "wrench": { "char": "🔧", "slug": "wrench", "category": "objects" },
  "hammer": { "char": "🔨", "slug": "hammer", "category": "objects" },
  "tools": { "char": "🛠️", "slug": "tools", "category": "objects" },
  "hammer_and_wrench": {
    "char": "🛠️",
    "slug": "tools",
    "category": "objects",
    "isAlternative": true
  },
  "pick": { "char": "⛏️", "slug": "pick", "category": "objects" },
  "carpentry_saw": {
    "char": "🪚",
    "slug": "carpentry_saw",
    "category": "objects"
  },
  "nut_and_bolt": {
    "char": "🔩",
    "slug": "nut_and_bolt",
    "category": "objects"
  },
  "mouse_trap": { "char": "🪤", "slug": "mouse_trap", "category": "objects" },
  "bricks": { "char": "🧱", "slug": "bricks", "category": "objects" },
  "brick": {
    "char": "🧱",
    "slug": "bricks",
    "category": "objects",
    "isAlternative": true
  },
  "chains": { "char": "⛓️", "slug": "chains", "category": "objects" },
  "magnet": { "char": "🧲", "slug": "magnet", "category": "objects" },
  "gun": { "char": "🔫", "slug": "gun", "category": "objects" },
  "pistol": {
    "char": "🔫",
    "slug": "gun",
    "category": "objects",
    "isAlternative": true
  },
  "bomb": { "char": "💣", "slug": "bomb", "category": "objects" },
  "firecracker": { "char": "🧨", "slug": "firecracker", "category": "objects" },
  "axe": { "char": "🪓", "slug": "axe", "category": "objects" },
  "knife": { "char": "🔪", "slug": "knife", "category": "objects" },
  "kitchen_knife": {
    "char": "🔪",
    "slug": "knife",
    "category": "objects",
    "isAlternative": true
  },
  "dagger": { "char": "🗡️", "slug": "dagger", "category": "objects" },
  "dagger_knife": {
    "char": "🗡️",
    "slug": "dagger",
    "category": "objects",
    "isAlternative": true
  },
  "shield": { "char": "🛡️", "slug": "shield", "category": "objects" },
  "smoking": { "char": "🚬", "slug": "smoking", "category": "objects" },
  "cigarette": {
    "char": "🚬",
    "slug": "smoking",
    "category": "objects",
    "isAlternative": true
  },
  "coffin": { "char": "⚰️", "slug": "coffin", "category": "objects" },
  "headstone": { "char": "🪦", "slug": "headstone", "category": "objects" },
  "urn": { "char": "⚱️", "slug": "urn", "category": "objects" },
  "funeral_urn": {
    "char": "⚱️",
    "slug": "urn",
    "category": "objects",
    "isAlternative": true
  },
  "amphora": { "char": "🏺", "slug": "amphora", "category": "objects" },
  "crystal_ball": {
    "char": "🔮",
    "slug": "crystal_ball",
    "category": "objects"
  },
  "prayer_beads": {
    "char": "📿",
    "slug": "prayer_beads",
    "category": "objects"
  },
  "nazar_amulet": {
    "char": "🧿",
    "slug": "nazar_amulet",
    "category": "objects"
  },
  "hamsa": { "char": "🪬", "slug": "hamsa", "category": "objects" },
  "barber": { "char": "💈", "slug": "barber", "category": "objects" },
  "barber_pole": {
    "char": "💈",
    "slug": "barber",
    "category": "objects",
    "isAlternative": true
  },
  "telescope": { "char": "🔭", "slug": "telescope", "category": "objects" },
  "microscope": { "char": "🔬", "slug": "microscope", "category": "objects" },
  "hole": { "char": "🕳️", "slug": "hole", "category": "objects" },
  "x_ray": { "char": "🩻", "slug": "x_ray", "category": "objects" },
  "adhesive_bandage": {
    "char": "🩹",
    "slug": "adhesive_bandage",
    "category": "objects"
  },
  "stethoscope": { "char": "🩺", "slug": "stethoscope", "category": "objects" },
  "pill": { "char": "💊", "slug": "pill", "category": "objects" },
  "syringe": { "char": "💉", "slug": "syringe", "category": "objects" },
  "drop_of_blood": {
    "char": "🩸",
    "slug": "drop_of_blood",
    "category": "objects"
  },
  "dna": { "char": "🧬", "slug": "dna", "category": "objects" },
  "microbe": { "char": "🦠", "slug": "microbe", "category": "objects" },
  "petri_dish": { "char": "🧫", "slug": "petri_dish", "category": "objects" },
  "test_tube": { "char": "🧪", "slug": "test_tube", "category": "objects" },
  "thermometer": { "char": "🌡️", "slug": "thermometer", "category": "objects" },
  "broom": { "char": "🧹", "slug": "broom", "category": "objects" },
  "plunger": { "char": "🪠", "slug": "plunger", "category": "objects" },
  "basket": { "char": "🧺", "slug": "basket", "category": "objects" },
  "roll_of_paper": {
    "char": "🧻",
    "slug": "roll_of_paper",
    "category": "objects"
  },
  "toilet": { "char": "🚽", "slug": "toilet", "category": "objects" },
  "potable_water": {
    "char": "🚰",
    "slug": "potable_water",
    "category": "objects"
  },
  "shower": { "char": "🚿", "slug": "shower", "category": "objects" },
  "bathtub": { "char": "🛁", "slug": "bathtub", "category": "objects" },
  "bath": { "char": "🛀", "slug": "bath", "category": "objects" },
  "bath_tone1": { "char": "🛀🏻", "slug": "bath_tone1", "category": "objects" },
  "bath_tone2": { "char": "🛀🏼", "slug": "bath_tone2", "category": "objects" },
  "bath_tone3": { "char": "🛀🏽", "slug": "bath_tone3", "category": "objects" },
  "bath_tone4": { "char": "🛀🏾", "slug": "bath_tone4", "category": "objects" },
  "bath_tone5": { "char": "🛀🏿", "slug": "bath_tone5", "category": "objects" },
  "soap": { "char": "🧼", "slug": "soap", "category": "objects" },
  "toothbrush": { "char": "🪥", "slug": "toothbrush", "category": "objects" },
  "razor": { "char": "🪒", "slug": "razor", "category": "objects" },
  "sponge": { "char": "🧽", "slug": "sponge", "category": "objects" },
  "bucket": { "char": "🪣", "slug": "bucket", "category": "objects" },
  "squeeze_bottle": {
    "char": "🧴",
    "slug": "squeeze_bottle",
    "category": "objects"
  },
  "lotion_bottle": {
    "char": "🧴",
    "slug": "squeeze_bottle",
    "category": "objects",
    "isAlternative": true
  },
  "bellhop": { "char": "🛎️", "slug": "bellhop", "category": "objects" },
  "bellhop_bell": {
    "char": "🛎️",
    "slug": "bellhop",
    "category": "objects",
    "isAlternative": true
  },
  "key": { "char": "🔑", "slug": "key", "category": "objects" },
  "key2": { "char": "🗝️", "slug": "key2", "category": "objects" },
  "old_key": {
    "char": "🗝️",
    "slug": "key2",
    "category": "objects",
    "isAlternative": true
  },
  "door": { "char": "🚪", "slug": "door", "category": "objects" },
  "chair": { "char": "🪑", "slug": "chair", "category": "objects" },
  "couch": { "char": "🛋️", "slug": "couch", "category": "objects" },
  "couch_and_lamp": {
    "char": "🛋️",
    "slug": "couch",
    "category": "objects",
    "isAlternative": true
  },
  "bed": { "char": "🛏️", "slug": "bed", "category": "objects" },
  "sleeping_accommodation": {
    "char": "🛌",
    "slug": "sleeping_accommodation",
    "category": "objects"
  },
  "person_in_bed": {
    "char": "🛌",
    "slug": "sleeping_accommodation",
    "category": "objects",
    "isAlternative": true
  },
  "person_in_bed_tone1": {
    "char": "🛌🏻",
    "slug": "person_in_bed_tone1",
    "category": "objects"
  },
  "person_in_bed_light_skin_tone": {
    "char": "🛌🏻",
    "slug": "person_in_bed_tone1",
    "category": "objects",
    "isAlternative": true
  },
  "person_in_bed_tone2": {
    "char": "🛌🏼",
    "slug": "person_in_bed_tone2",
    "category": "objects"
  },
  "person_in_bed_medium_light_skin_tone": {
    "char": "🛌🏼",
    "slug": "person_in_bed_tone2",
    "category": "objects",
    "isAlternative": true
  },
  "person_in_bed_tone3": {
    "char": "🛌🏽",
    "slug": "person_in_bed_tone3",
    "category": "objects"
  },
  "person_in_bed_medium_skin_tone": {
    "char": "🛌🏽",
    "slug": "person_in_bed_tone3",
    "category": "objects",
    "isAlternative": true
  },
  "person_in_bed_tone4": {
    "char": "🛌🏾",
    "slug": "person_in_bed_tone4",
    "category": "objects"
  },
  "person_in_bed_medium_dark_skin_tone": {
    "char": "🛌🏾",
    "slug": "person_in_bed_tone4",
    "category": "objects",
    "isAlternative": true
  },
  "person_in_bed_tone5": {
    "char": "🛌🏿",
    "slug": "person_in_bed_tone5",
    "category": "objects"
  },
  "person_in_bed_dark_skin_tone": {
    "char": "🛌🏿",
    "slug": "person_in_bed_tone5",
    "category": "objects",
    "isAlternative": true
  },
  "teddy_bear": { "char": "🧸", "slug": "teddy_bear", "category": "objects" },
  "nesting_dolls": {
    "char": "🪆",
    "slug": "nesting_dolls",
    "category": "objects"
  },
  "frame_photo": { "char": "🖼️", "slug": "frame_photo", "category": "objects" },
  "frame_with_picture": {
    "char": "🖼️",
    "slug": "frame_photo",
    "category": "objects",
    "isAlternative": true
  },
  "mirror": { "char": "🪞", "slug": "mirror", "category": "objects" },
  "window": { "char": "🪟", "slug": "window", "category": "objects" },
  "shopping_bags": {
    "char": "🛍️",
    "slug": "shopping_bags",
    "category": "objects"
  },
  "shopping_cart": {
    "char": "🛒",
    "slug": "shopping_cart",
    "category": "objects"
  },
  "shopping_trolley": {
    "char": "🛒",
    "slug": "shopping_cart",
    "category": "objects",
    "isAlternative": true
  },
  "gift": { "char": "🎁", "slug": "gift", "category": "objects" },
  "wrapped_gift": {
    "char": "🎁",
    "slug": "gift",
    "category": "objects",
    "isAlternative": true
  },
  "balloon": { "char": "🎈", "slug": "balloon", "category": "objects" },
  "flags": { "char": "🎏", "slug": "flags", "category": "objects" },
  "carp_streamer": {
    "char": "🎏",
    "slug": "flags",
    "category": "objects",
    "isAlternative": true
  },
  "ribbon": { "char": "🎀", "slug": "ribbon", "category": "objects" },
  "magic_wand": { "char": "🪄", "slug": "magic_wand", "category": "objects" },
  "piñata": { "char": "🪅", "slug": "piñata", "category": "objects" },
  "confetti_ball": {
    "char": "🎊",
    "slug": "confetti_ball",
    "category": "objects"
  },
  "tada": { "char": "🎉", "slug": "tada", "category": "objects" },
  "party_popper": {
    "char": "🎉",
    "slug": "tada",
    "category": "objects",
    "isAlternative": true
  },
  "dolls": { "char": "🎎", "slug": "dolls", "category": "objects" },
  "izakaya_lantern": {
    "char": "🏮",
    "slug": "izakaya_lantern",
    "category": "objects"
  },
  "wind_chime": { "char": "🎐", "slug": "wind_chime", "category": "objects" },
  "mirror_ball": { "char": "🪩", "slug": "mirror_ball", "category": "objects" },
  "red_envelope": {
    "char": "🧧",
    "slug": "red_envelope",
    "category": "objects"
  },
  "envelope_with_arrow": {
    "char": "📩",
    "slug": "envelope_with_arrow",
    "category": "objects"
  },
  "incoming_envelope": {
    "char": "📨",
    "slug": "incoming_envelope",
    "category": "objects"
  },
  "e-mail": { "char": "📧", "slug": "e-mail", "category": "objects" },
  "email": {
    "char": "📧",
    "slug": "e-mail",
    "category": "objects",
    "isAlternative": true
  },
  "e_mail": {
    "char": "📧",
    "slug": "e-mail",
    "category": "objects",
    "isAlternative": true
  },
  "love_letter": { "char": "💌", "slug": "love_letter", "category": "objects" },
  "inbox_tray": { "char": "📥", "slug": "inbox_tray", "category": "objects" },
  "outbox_tray": { "char": "📤", "slug": "outbox_tray", "category": "objects" },
  "package": { "char": "📦", "slug": "package", "category": "objects" },
  "label": { "char": "🏷️", "slug": "label", "category": "objects" },
  "placard": { "char": "🪧", "slug": "placard", "category": "objects" },
  "mailbox_closed": {
    "char": "📪",
    "slug": "mailbox_closed",
    "category": "objects"
  },
  "mailbox": { "char": "📫", "slug": "mailbox", "category": "objects" },
  "mailbox_with_mail": {
    "char": "📬",
    "slug": "mailbox_with_mail",
    "category": "objects"
  },
  "mailbox_with_no_mail": {
    "char": "📭",
    "slug": "mailbox_with_no_mail",
    "category": "objects"
  },
  "postbox": { "char": "📮", "slug": "postbox", "category": "objects" },
  "postal_horn": { "char": "📯", "slug": "postal_horn", "category": "objects" },
  "scroll": { "char": "📜", "slug": "scroll", "category": "objects" },
  "page_with_curl": {
    "char": "📃",
    "slug": "page_with_curl",
    "category": "objects"
  },
  "page_facing_up": {
    "char": "📄",
    "slug": "page_facing_up",
    "category": "objects"
  },
  "bookmark_tabs": {
    "char": "📑",
    "slug": "bookmark_tabs",
    "category": "objects"
  },
  "receipt": { "char": "🧾", "slug": "receipt", "category": "objects" },
  "bar_chart": { "char": "📊", "slug": "bar_chart", "category": "objects" },
  "chart_with_upwards_trend": {
    "char": "📈",
    "slug": "chart_with_upwards_trend",
    "category": "objects"
  },
  "chart_with_downwards_trend": {
    "char": "📉",
    "slug": "chart_with_downwards_trend",
    "category": "objects"
  },
  "notepad_spiral": {
    "char": "🗒️",
    "slug": "notepad_spiral",
    "category": "objects"
  },
  "spiral_note_pad": {
    "char": "🗒️",
    "slug": "notepad_spiral",
    "category": "objects",
    "isAlternative": true
  },
  "calendar_spiral": {
    "char": "🗓️",
    "slug": "calendar_spiral",
    "category": "objects"
  },
  "spiral_calendar_pad": {
    "char": "🗓️",
    "slug": "calendar_spiral",
    "category": "objects",
    "isAlternative": true
  },
  "calendar": { "char": "📆", "slug": "calendar", "category": "objects" },
  "date": { "char": "📅", "slug": "date", "category": "objects" },
  "wastebasket": { "char": "🗑️", "slug": "wastebasket", "category": "objects" },
  "card_index": { "char": "📇", "slug": "card_index", "category": "objects" },
  "card_box": { "char": "🗃️", "slug": "card_box", "category": "objects" },
  "card_file_box": {
    "char": "🗃️",
    "slug": "card_box",
    "category": "objects",
    "isAlternative": true
  },
  "ballot_box": { "char": "🗳️", "slug": "ballot_box", "category": "objects" },
  "ballot_box_with_ballot": {
    "char": "🗳️",
    "slug": "ballot_box",
    "category": "objects",
    "isAlternative": true
  },
  "file_cabinet": {
    "char": "🗄️",
    "slug": "file_cabinet",
    "category": "objects"
  },
  "clipboard": { "char": "📋", "slug": "clipboard", "category": "objects" },
  "file_folder": { "char": "📁", "slug": "file_folder", "category": "objects" },
  "open_file_folder": {
    "char": "📂",
    "slug": "open_file_folder",
    "category": "objects"
  },
  "dividers": { "char": "🗂️", "slug": "dividers", "category": "objects" },
  "card_index_dividers": {
    "char": "🗂️",
    "slug": "dividers",
    "category": "objects",
    "isAlternative": true
  },
  "newspaper2": { "char": "🗞️", "slug": "newspaper2", "category": "objects" },
  "rolled_up_newspaper": {
    "char": "🗞️",
    "slug": "newspaper2",
    "category": "objects",
    "isAlternative": true
  },
  "newspaper": { "char": "📰", "slug": "newspaper", "category": "objects" },
  "notebook": { "char": "📓", "slug": "notebook", "category": "objects" },
  "notebook_with_decorative_cover": {
    "char": "📔",
    "slug": "notebook_with_decorative_cover",
    "category": "objects"
  },
  "ledger": { "char": "📒", "slug": "ledger", "category": "objects" },
  "closed_book": { "char": "📕", "slug": "closed_book", "category": "objects" },
  "green_book": { "char": "📗", "slug": "green_book", "category": "objects" },
  "blue_book": { "char": "📘", "slug": "blue_book", "category": "objects" },
  "orange_book": { "char": "📙", "slug": "orange_book", "category": "objects" },
  "books": { "char": "📚", "slug": "books", "category": "objects" },
  "book": { "char": "📖", "slug": "book", "category": "objects" },
  "open_book": {
    "char": "📖",
    "slug": "book",
    "category": "objects",
    "isAlternative": true
  },
  "bookmark": { "char": "🔖", "slug": "bookmark", "category": "objects" },
  "safety_pin": { "char": "🧷", "slug": "safety_pin", "category": "objects" },
  "link": { "char": "🔗", "slug": "link", "category": "objects" },
  "paperclip": { "char": "📎", "slug": "paperclip", "category": "objects" },
  "paperclips": { "char": "🖇️", "slug": "paperclips", "category": "objects" },
  "linked_paperclips": {
    "char": "🖇️",
    "slug": "paperclips",
    "category": "objects",
    "isAlternative": true
  },
  "triangular_ruler": {
    "char": "📐",
    "slug": "triangular_ruler",
    "category": "objects"
  },
  "straight_ruler": {
    "char": "📏",
    "slug": "straight_ruler",
    "category": "objects"
  },
  "abacus": { "char": "🧮", "slug": "abacus", "category": "objects" },
  "pushpin": { "char": "📌", "slug": "pushpin", "category": "objects" },
  "round_pushpin": {
    "char": "📍",
    "slug": "round_pushpin",
    "category": "objects"
  },
  "pen_ballpoint": {
    "char": "🖊️",
    "slug": "pen_ballpoint",
    "category": "objects"
  },
  "lower_left_ballpoint_pen": {
    "char": "🖊️",
    "slug": "pen_ballpoint",
    "category": "objects",
    "isAlternative": true
  },
  "pen": {
    "char": "🖊️",
    "slug": "pen_ballpoint",
    "category": "objects",
    "isAlternative": true
  },
  "pen_fountain": {
    "char": "🖋️",
    "slug": "pen_fountain",
    "category": "objects"
  },
  "lower_left_fountain_pen": {
    "char": "🖋️",
    "slug": "pen_fountain",
    "category": "objects",
    "isAlternative": true
  },
  "fountain_pen": {
    "char": "🖋️",
    "slug": "pen_fountain",
    "category": "objects",
    "isAlternative": true
  },
  "paintbrush": { "char": "🖌️", "slug": "paintbrush", "category": "objects" },
  "lower_left_paintbrush": {
    "char": "🖌️",
    "slug": "paintbrush",
    "category": "objects",
    "isAlternative": true
  },
  "crayon": { "char": "🖍️", "slug": "crayon", "category": "objects" },
  "lower_left_crayon": {
    "char": "🖍️",
    "slug": "crayon",
    "category": "objects",
    "isAlternative": true
  },
  "pencil": { "char": "📝", "slug": "pencil", "category": "objects" },
  "memo": {
    "char": "📝",
    "slug": "pencil",
    "category": "objects",
    "isAlternative": true
  },
  "pencil2": { "char": "✏️", "slug": "pencil2", "category": "objects" },
  "mag": { "char": "🔍", "slug": "mag", "category": "objects" },
  "mag_right": { "char": "🔎", "slug": "mag_right", "category": "objects" },
  "lock_with_ink_pen": {
    "char": "🔏",
    "slug": "lock_with_ink_pen",
    "category": "objects"
  },
  "closed_lock_with_key": {
    "char": "🔐",
    "slug": "closed_lock_with_key",
    "category": "objects"
  },
  "lock": { "char": "🔒", "slug": "lock", "category": "objects" },
  "locked": {
    "char": "🔒",
    "slug": "lock",
    "category": "objects",
    "isAlternative": true
  },
  "unlock": { "char": "🔓", "slug": "unlock", "category": "objects" },
  "unlocked": {
    "char": "🔓",
    "slug": "unlock",
    "category": "objects",
    "isAlternative": true
  },
  "orange_heart": {
    "char": "🧡",
    "slug": "orange_heart",
    "category": "symbols"
  },
  "yellow_heart": {
    "char": "💛",
    "slug": "yellow_heart",
    "category": "symbols"
  },
  "green_heart": { "char": "💚", "slug": "green_heart", "category": "symbols" },
  "blue_heart": { "char": "💙", "slug": "blue_heart", "category": "symbols" },
  "purple_heart": {
    "char": "💜",
    "slug": "purple_heart",
    "category": "symbols"
  },
  "black_heart": { "char": "🖤", "slug": "black_heart", "category": "symbols" },
  "brown_heart": { "char": "🤎", "slug": "brown_heart", "category": "symbols" },
  "white_heart": { "char": "🤍", "slug": "white_heart", "category": "symbols" },
  "broken_heart": {
    "char": "💔",
    "slug": "broken_heart",
    "category": "symbols"
  },
  "two_hearts": { "char": "💕", "slug": "two_hearts", "category": "symbols" },
  "revolving_hearts": {
    "char": "💞",
    "slug": "revolving_hearts",
    "category": "symbols"
  },
  "heartbeat": { "char": "💓", "slug": "heartbeat", "category": "symbols" },
  "beating_heart": {
    "char": "💓",
    "slug": "heartbeat",
    "category": "symbols",
    "isAlternative": true
  },
  "heartpulse": { "char": "💗", "slug": "heartpulse", "category": "symbols" },
  "growing_heart": {
    "char": "💗",
    "slug": "heartpulse",
    "category": "symbols",
    "isAlternative": true
  },
  "sparkling_heart": {
    "char": "💖",
    "slug": "sparkling_heart",
    "category": "symbols"
  },
  "cupid": { "char": "💘", "slug": "cupid", "category": "symbols" },
  "gift_heart": { "char": "💝", "slug": "gift_heart", "category": "symbols" },
  "mending_heart": {
    "char": "❤️‍🩹",
    "slug": "mending_heart",
    "category": "symbols"
  },
  "heart_on_fire": {
    "char": "❤️‍🔥",
    "slug": "heart_on_fire",
    "category": "symbols"
  },
  "heart_decoration": {
    "char": "💟",
    "slug": "heart_decoration",
    "category": "symbols"
  },
  "peace": { "char": "☮️", "slug": "peace", "category": "symbols" },
  "peace_symbol": {
    "char": "☮️",
    "slug": "peace",
    "category": "symbols",
    "isAlternative": true
  },
  "cross": { "char": "✝️", "slug": "cross", "category": "symbols" },
  "latin_cross": {
    "char": "✝️",
    "slug": "cross",
    "category": "symbols",
    "isAlternative": true
  },
  "star_and_crescent": {
    "char": "☪️",
    "slug": "star_and_crescent",
    "category": "symbols"
  },
  "om_symbol": { "char": "🕉️", "slug": "om_symbol", "category": "symbols" },
  "six_pointed_star": {
    "char": "🔯",
    "slug": "six_pointed_star",
    "category": "symbols"
  },
  "menorah": { "char": "🕎", "slug": "menorah", "category": "symbols" },
  "yin_yang": { "char": "☯️", "slug": "yin_yang", "category": "symbols" },
  "place_of_worship": {
    "char": "🛐",
    "slug": "place_of_worship",
    "category": "symbols"
  },
  "worship_symbol": {
    "char": "🛐",
    "slug": "place_of_worship",
    "category": "symbols",
    "isAlternative": true
  },
  "ophiuchus": { "char": "⛎", "slug": "ophiuchus", "category": "symbols" },
  "gemini": { "char": "♊", "slug": "gemini", "category": "symbols" },
  "cancer": { "char": "♋", "slug": "cancer", "category": "symbols" },
  "leo": { "char": "♌", "slug": "leo", "category": "symbols" },
  "virgo": { "char": "♍", "slug": "virgo", "category": "symbols" },
  "libra": { "char": "♎", "slug": "libra", "category": "symbols" },
  "scorpius": { "char": "♏", "slug": "scorpius", "category": "symbols" },
  "scorpio": {
    "char": "♏",
    "slug": "scorpius",
    "category": "symbols",
    "isAlternative": true
  },
  "id": { "char": "🆔", "slug": "id", "category": "symbols" },
  "atom": { "char": "⚛️", "slug": "atom", "category": "symbols" },
  "atom_symbol": {
    "char": "⚛️",
    "slug": "atom",
    "category": "symbols",
    "isAlternative": true
  },
  "accept": { "char": "🉑", "slug": "accept", "category": "symbols" },
  "mobile_phone_off": {
    "char": "📴",
    "slug": "mobile_phone_off",
    "category": "symbols"
  },
  "vibration_mode": {
    "char": "📳",
    "slug": "vibration_mode",
    "category": "symbols"
  },
  "u6709": { "char": "🈶", "slug": "u6709", "category": "symbols" },
  "u7121": { "char": "🈚", "slug": "u7121", "category": "symbols" },
  "u7533": { "char": "🈸", "slug": "u7533", "category": "symbols" },
  "u55b6": { "char": "🈺", "slug": "u55b6", "category": "symbols" },
  "u6708": { "char": "🈷️", "slug": "u6708", "category": "symbols" },
  "vs": { "char": "🆚", "slug": "vs", "category": "symbols" },
  "white_flower": {
    "char": "💮",
    "slug": "white_flower",
    "category": "symbols"
  },
  "ideograph_advantage": {
    "char": "🉐",
    "slug": "ideograph_advantage",
    "category": "symbols"
  },
  "u5408": { "char": "🈴", "slug": "u5408", "category": "symbols" },
  "u6e80": { "char": "🈵", "slug": "u6e80", "category": "symbols" },
  "u5272": { "char": "🈹", "slug": "u5272", "category": "symbols" },
  "u7981": { "char": "🈲", "slug": "u7981", "category": "symbols" },
  "a": { "char": "🅰️", "slug": "a", "category": "symbols" },
  "b": { "char": "🅱️", "slug": "b", "category": "symbols" },
  "ab": { "char": "🆎", "slug": "ab", "category": "symbols" },
  "cl": { "char": "🆑", "slug": "cl", "category": "symbols" },
  "o2": { "char": "🅾️", "slug": "o2", "category": "symbols" },
  "sos": { "char": "🆘", "slug": "sos", "category": "symbols" },
  "x": { "char": "❌", "slug": "x", "category": "symbols" },
  "cross_mark": {
    "char": "❌",
    "slug": "x",
    "category": "symbols",
    "isAlternative": true
  },
  "o": { "char": "⭕", "slug": "o", "category": "symbols" },
  "octagonal_sign": {
    "char": "🛑",
    "slug": "octagonal_sign",
    "category": "symbols"
  },
  "stop_sign": {
    "char": "🛑",
    "slug": "octagonal_sign",
    "category": "symbols",
    "isAlternative": true
  },
  "no_entry": { "char": "⛔", "slug": "no_entry", "category": "symbols" },
  "name_badge": { "char": "📛", "slug": "name_badge", "category": "symbols" },
  "no_entry_sign": {
    "char": "🚫",
    "slug": "no_entry_sign",
    "category": "symbols"
  },
  "prohibited": {
    "char": "🚫",
    "slug": "no_entry_sign",
    "category": "symbols",
    "isAlternative": true
  },
  "anger": { "char": "💢", "slug": "anger", "category": "symbols" },
  "no_pedestrians": {
    "char": "🚷",
    "slug": "no_pedestrians",
    "category": "symbols"
  },
  "do_not_litter": {
    "char": "🚯",
    "slug": "do_not_litter",
    "category": "symbols"
  },
  "no_littering": {
    "char": "🚯",
    "slug": "do_not_litter",
    "category": "symbols",
    "isAlternative": true
  },
  "no_bicycles": { "char": "🚳", "slug": "no_bicycles", "category": "symbols" },
  "non-potable_water": {
    "char": "🚱",
    "slug": "non-potable_water",
    "category": "symbols"
  },
  "underage": { "char": "🔞", "slug": "underage", "category": "symbols" },
  "no_mobile_phones": {
    "char": "📵",
    "slug": "no_mobile_phones",
    "category": "symbols"
  },
  "no_smoking": { "char": "🚭", "slug": "no_smoking", "category": "symbols" },
  "bangbang": { "char": "‼️", "slug": "bangbang", "category": "symbols" },
  "low_brightness": {
    "char": "🔅",
    "slug": "low_brightness",
    "category": "symbols"
  },
  "high_brightness": {
    "char": "🔆",
    "slug": "high_brightness",
    "category": "symbols"
  },
  "part_alternation_mark": {
    "char": "〽️",
    "slug": "part_alternation_mark",
    "category": "symbols"
  },
  "warning": { "char": "⚠️", "slug": "warning", "category": "symbols" },
  "children_crossing": {
    "char": "🚸",
    "slug": "children_crossing",
    "category": "symbols"
  },
  "trident": { "char": "🔱", "slug": "trident", "category": "symbols" },
  "fleur-de-lis": {
    "char": "⚜️",
    "slug": "fleur-de-lis",
    "category": "symbols"
  },
  "fleur_de_lis": {
    "char": "⚜️",
    "slug": "fleur-de-lis",
    "category": "symbols",
    "isAlternative": true
  },
  "beginner": { "char": "🔰", "slug": "beginner", "category": "symbols" },
  "recycle": { "char": "♻️", "slug": "recycle", "category": "symbols" },
  "u6307": { "char": "🈯", "slug": "u6307", "category": "symbols" },
  "chart": { "char": "💹", "slug": "chart", "category": "symbols" },
  "negative_squared_cross_mark": {
    "char": "❎",
    "slug": "negative_squared_cross_mark",
    "category": "symbols"
  },
  "globe_with_meridians": {
    "char": "🌐",
    "slug": "globe_with_meridians",
    "category": "symbols"
  },
  "diamond_shape_with_a_dot_inside": {
    "char": "💠",
    "slug": "diamond_shape_with_a_dot_inside",
    "category": "symbols"
  },
  "m": { "char": "Ⓜ️", "slug": "m", "category": "symbols" },
  "circled_m": {
    "char": "Ⓜ️",
    "slug": "m",
    "category": "symbols",
    "isAlternative": true
  },
  "cyclone": { "char": "🌀", "slug": "cyclone", "category": "symbols" },
  "zzz": { "char": "💤", "slug": "zzz", "category": "symbols" },
  "atm": { "char": "🏧", "slug": "atm", "category": "symbols" },
  "wc": { "char": "🚾", "slug": "wc", "category": "symbols" },
  "water_closet": {
    "char": "🚾",
    "slug": "wc",
    "category": "symbols",
    "isAlternative": true
  },
  "wheelchair": { "char": "♿", "slug": "wheelchair", "category": "symbols" },
  "parking": { "char": "🅿️", "slug": "parking", "category": "symbols" },
  "u7a7a": { "char": "🈳", "slug": "u7a7a", "category": "symbols" },
  "sa": { "char": "🈂️", "slug": "sa", "category": "symbols" },
  "passport_control": {
    "char": "🛂",
    "slug": "passport_control",
    "category": "symbols"
  },
  "customs": { "char": "🛃", "slug": "customs", "category": "symbols" },
  "baggage_claim": {
    "char": "🛄",
    "slug": "baggage_claim",
    "category": "symbols"
  },
  "left_luggage": {
    "char": "🛅",
    "slug": "left_luggage",
    "category": "symbols"
  },
  "elevator": { "char": "🛗", "slug": "elevator", "category": "symbols" },
  "mens": { "char": "🚹", "slug": "mens", "category": "symbols" },
  "mens_room": {
    "char": "🚹",
    "slug": "mens",
    "category": "symbols",
    "isAlternative": true
  },
  "womens": { "char": "🚺", "slug": "womens", "category": "symbols" },
  "womens_room": {
    "char": "🚺",
    "slug": "womens",
    "category": "symbols",
    "isAlternative": true
  },
  "baby_symbol": { "char": "🚼", "slug": "baby_symbol", "category": "symbols" },
  "restroom": { "char": "🚻", "slug": "restroom", "category": "symbols" },
  "put_litter_in_its_place": {
    "char": "🚮",
    "slug": "put_litter_in_its_place",
    "category": "symbols"
  },
  "cinema": { "char": "🎦", "slug": "cinema", "category": "symbols" },
  "signal_strength": {
    "char": "📶",
    "slug": "signal_strength",
    "category": "symbols"
  },
  "antenna_bars": {
    "char": "📶",
    "slug": "signal_strength",
    "category": "symbols",
    "isAlternative": true
  },
  "koko": { "char": "🈁", "slug": "koko", "category": "symbols" },
  "symbols": { "char": "🔣", "slug": "symbols", "category": "symbols" },
  "input_symbols": {
    "char": "🔣",
    "slug": "symbols",
    "category": "symbols",
    "isAlternative": true
  },
  "abc": { "char": "🔤", "slug": "abc", "category": "symbols" },
  "abcd": { "char": "🔡", "slug": "abcd", "category": "symbols" },
  "capital_abcd": {
    "char": "🔠",
    "slug": "capital_abcd",
    "category": "symbols"
  },
  "ng": { "char": "🆖", "slug": "ng", "category": "symbols" },
  "ok": { "char": "🆗", "slug": "ok", "category": "symbols" },
  "up": { "char": "🆙", "slug": "up", "category": "symbols" },
  "cool": { "char": "🆒", "slug": "cool", "category": "symbols" },
  "new": { "char": "🆕", "slug": "new", "category": "symbols" },
  "free": { "char": "🆓", "slug": "free", "category": "symbols" },
  "zero": { "char": "0️⃣", "slug": "zero", "category": "symbols" },
  "one": { "char": "1️⃣", "slug": "one", "category": "symbols" },
  "two": { "char": "2️⃣", "slug": "two", "category": "symbols" },
  "three": { "char": "3️⃣", "slug": "three", "category": "symbols" },
  "four": { "char": "4️⃣", "slug": "four", "category": "symbols" },
  "five": { "char": "5️⃣", "slug": "five", "category": "symbols" },
  "six": { "char": "6️⃣", "slug": "six", "category": "symbols" },
  "seven": { "char": "7️⃣", "slug": "seven", "category": "symbols" },
  "eight": { "char": "8️⃣", "slug": "eight", "category": "symbols" },
  "nine": { "char": "9️⃣", "slug": "nine", "category": "symbols" },
  "keycap_ten": { "char": "🔟", "slug": "keycap_ten", "category": "symbols" },
  "input_numbers": {
    "char": "🔢",
    "slug": "1234",
    "category": "symbols",
    "isAlternative": true
  },
  "hash": { "char": "#️⃣", "slug": "hash", "category": "symbols" },
  "asterisk": { "char": "*️⃣", "slug": "asterisk", "category": "symbols" },
  "keycap_asterisk": {
    "char": "*️⃣",
    "slug": "asterisk",
    "category": "symbols",
    "isAlternative": true
  },
  "eject": { "char": "⏏️", "slug": "eject", "category": "symbols" },
  "eject_symbol": {
    "char": "⏏️",
    "slug": "eject",
    "category": "symbols",
    "isAlternative": true
  },
  "arrow_forward": {
    "char": "▶️",
    "slug": "arrow_forward",
    "category": "symbols"
  },
  "pause_button": {
    "char": "⏸️",
    "slug": "pause_button",
    "category": "symbols"
  },
  "double_vertical_bar": {
    "char": "⏸️",
    "slug": "pause_button",
    "category": "symbols",
    "isAlternative": true
  },
  "play_pause": { "char": "⏯️", "slug": "play_pause", "category": "symbols" },
  "stop_button": { "char": "⏹️", "slug": "stop_button", "category": "symbols" },
  "record_button": {
    "char": "⏺️",
    "slug": "record_button",
    "category": "symbols"
  },
  "track_next": { "char": "⏭️", "slug": "track_next", "category": "symbols" },
  "next_track": {
    "char": "⏭️",
    "slug": "track_next",
    "category": "symbols",
    "isAlternative": true
  },
  "track_previous": {
    "char": "⏮️",
    "slug": "track_previous",
    "category": "symbols"
  },
  "previous_track": {
    "char": "⏮️",
    "slug": "track_previous",
    "category": "symbols",
    "isAlternative": true
  },
  "fast_forward": {
    "char": "⏩",
    "slug": "fast_forward",
    "category": "symbols"
  },
  "rewind": { "char": "⏪", "slug": "rewind", "category": "symbols" },
  "arrow_double_up": {
    "char": "⏫",
    "slug": "arrow_double_up",
    "category": "symbols"
  },
  "arrow_double_down": {
    "char": "⏬",
    "slug": "arrow_double_down",
    "category": "symbols"
  },
  "arrow_backward": {
    "char": "◀️",
    "slug": "arrow_backward",
    "category": "symbols"
  },
  "arrow_up_small": {
    "char": "🔼",
    "slug": "arrow_up_small",
    "category": "symbols"
  },
  "arrow_down_small": {
    "char": "🔽",
    "slug": "arrow_down_small",
    "category": "symbols"
  },
  "arrow_right": { "char": "➡️", "slug": "arrow_right", "category": "symbols" },
  "right_arrow": {
    "char": "➡️",
    "slug": "arrow_right",
    "category": "symbols",
    "isAlternative": true
  },
  "arrow_left": { "char": "⬅️", "slug": "arrow_left", "category": "symbols" },
  "left_arrow": {
    "char": "⬅️",
    "slug": "arrow_left",
    "category": "symbols",
    "isAlternative": true
  },
  "arrow_up": { "char": "⬆️", "slug": "arrow_up", "category": "symbols" },
  "up_arrow": {
    "char": "⬆️",
    "slug": "arrow_up",
    "category": "symbols",
    "isAlternative": true
  },
  "arrow_down": { "char": "⬇️", "slug": "arrow_down", "category": "symbols" },
  "down_arrow": {
    "char": "⬇️",
    "slug": "arrow_down",
    "category": "symbols",
    "isAlternative": true
  },
  "arrow_right_hook": {
    "char": "↪️",
    "slug": "arrow_right_hook",
    "category": "symbols"
  },
  "leftwards_arrow_with_hook": {
    "char": "↩️",
    "slug": "leftwards_arrow_with_hook",
    "category": "symbols"
  },
  "twisted_rightwards_arrows": {
    "char": "🔀",
    "slug": "twisted_rightwards_arrows",
    "category": "symbols"
  },
  "repeat": { "char": "🔁", "slug": "repeat", "category": "symbols" },
  "repeat_one": { "char": "🔂", "slug": "repeat_one", "category": "symbols" },
  "arrows_counterclockwise": {
    "char": "🔄",
    "slug": "arrows_counterclockwise",
    "category": "symbols"
  },
  "arrows_clockwise": {
    "char": "🔃",
    "slug": "arrows_clockwise",
    "category": "symbols"
  },
  "musical_note": {
    "char": "🎵",
    "slug": "musical_note",
    "category": "symbols"
  },
  "notes": { "char": "🎶", "slug": "notes", "category": "symbols" },
  "musical_notes": {
    "char": "🎶",
    "slug": "notes",
    "category": "symbols",
    "isAlternative": true
  },
  "heavy_equals_sign": {
    "char": "🟰",
    "slug": "heavy_equals_sign",
    "category": "symbols"
  },
  "infinity": { "char": "♾️", "slug": "infinity", "category": "symbols" },
  "heavy_dollar_sign": {
    "char": "💲",
    "slug": "heavy_dollar_sign",
    "category": "symbols"
  },
  "currency_exchange": {
    "char": "💱",
    "slug": "currency_exchange",
    "category": "symbols"
  },
  "copyright": { "char": "©️", "slug": "copyright", "category": "symbols" },
  "registered": { "char": "®️", "slug": "registered", "category": "symbols" },
  "curly_loop": { "char": "➰", "slug": "curly_loop", "category": "symbols" },
  "loop": { "char": "➿", "slug": "loop", "category": "symbols" },
  "end": { "char": "🔚", "slug": "end", "category": "symbols" },
  "end_arrow": {
    "char": "🔚",
    "slug": "end",
    "category": "symbols",
    "isAlternative": true
  },
  "back": { "char": "🔙", "slug": "back", "category": "symbols" },
  "back_arrow": {
    "char": "🔙",
    "slug": "back",
    "category": "symbols",
    "isAlternative": true
  },
  "on": { "char": "🔛", "slug": "on", "category": "symbols" },
  "on_arrow": {
    "char": "🔛",
    "slug": "on",
    "category": "symbols",
    "isAlternative": true
  },
  "top": { "char": "🔝", "slug": "top", "category": "symbols" },
  "top_arrow": {
    "char": "🔝",
    "slug": "top",
    "category": "symbols",
    "isAlternative": true
  },
  "soon": { "char": "🔜", "slug": "soon", "category": "symbols" },
  "soon_arrow": {
    "char": "🔜",
    "slug": "soon",
    "category": "symbols",
    "isAlternative": true
  },
  "radio_button": {
    "char": "🔘",
    "slug": "radio_button",
    "category": "symbols"
  },
  "white_circle": {
    "char": "⚪",
    "slug": "white_circle",
    "category": "symbols"
  },
  "black_circle": {
    "char": "⚫",
    "slug": "black_circle",
    "category": "symbols"
  },
  "red_circle": { "char": "🔴", "slug": "red_circle", "category": "symbols" },
  "blue_circle": { "char": "🔵", "slug": "blue_circle", "category": "symbols" },
  "brown_circle": {
    "char": "🟤",
    "slug": "brown_circle",
    "category": "symbols"
  },
  "purple_circle": {
    "char": "🟣",
    "slug": "purple_circle",
    "category": "symbols"
  },
  "green_circle": {
    "char": "🟢",
    "slug": "green_circle",
    "category": "symbols"
  },
  "yellow_circle": {
    "char": "🟡",
    "slug": "yellow_circle",
    "category": "symbols"
  },
  "orange_circle": {
    "char": "🟠",
    "slug": "orange_circle",
    "category": "symbols"
  },
  "small_red_triangle": {
    "char": "🔺",
    "slug": "small_red_triangle",
    "category": "symbols"
  },
  "small_red_triangle_down": {
    "char": "🔻",
    "slug": "small_red_triangle_down",
    "category": "symbols"
  },
  "small_orange_diamond": {
    "char": "🔸",
    "slug": "small_orange_diamond",
    "category": "symbols"
  },
  "small_blue_diamond": {
    "char": "🔹",
    "slug": "small_blue_diamond",
    "category": "symbols"
  },
  "large_orange_diamond": {
    "char": "🔶",
    "slug": "large_orange_diamond",
    "category": "symbols"
  },
  "large_blue_diamond": {
    "char": "🔷",
    "slug": "large_blue_diamond",
    "category": "symbols"
  },
  "white_square_button": {
    "char": "🔳",
    "slug": "white_square_button",
    "category": "symbols"
  },
  "black_square_button": {
    "char": "🔲",
    "slug": "black_square_button",
    "category": "symbols"
  },
  "black_small_square": {
    "char": "▪️",
    "slug": "black_small_square",
    "category": "symbols"
  },
  "white_small_square": {
    "char": "▫️",
    "slug": "white_small_square",
    "category": "symbols"
  },
  "black_medium_small_square": {
    "char": "◾",
    "slug": "black_medium_small_square",
    "category": "symbols"
  },
  "white_medium_small_square": {
    "char": "◽",
    "slug": "white_medium_small_square",
    "category": "symbols"
  },
  "black_medium_square": {
    "char": "◼️",
    "slug": "black_medium_square",
    "category": "symbols"
  },
  "white_medium_square": {
    "char": "◻️",
    "slug": "white_medium_square",
    "category": "symbols"
  },
  "black_large_square": {
    "char": "⬛",
    "slug": "black_large_square",
    "category": "symbols"
  },
  "white_large_square": {
    "char": "⬜",
    "slug": "white_large_square",
    "category": "symbols"
  },
  "orange_square": {
    "char": "🟧",
    "slug": "orange_square",
    "category": "symbols"
  },
  "blue_square": { "char": "🟦", "slug": "blue_square", "category": "symbols" },
  "red_square": { "char": "🟥", "slug": "red_square", "category": "symbols" },
  "brown_square": {
    "char": "🟫",
    "slug": "brown_square",
    "category": "symbols"
  },
  "purple_square": {
    "char": "🟪",
    "slug": "purple_square",
    "category": "symbols"
  },
  "green_square": {
    "char": "🟩",
    "slug": "green_square",
    "category": "symbols"
  },
  "yellow_square": {
    "char": "🟨",
    "slug": "yellow_square",
    "category": "symbols"
  },
  "speaker": { "char": "🔈", "slug": "speaker", "category": "symbols" },
  "mute": { "char": "🔇", "slug": "mute", "category": "symbols" },
  "muted_speaker": {
    "char": "🔇",
    "slug": "mute",
    "category": "symbols",
    "isAlternative": true
  },
  "sound": { "char": "🔉", "slug": "sound", "category": "symbols" },
  "loud_sound": { "char": "🔊", "slug": "loud_sound", "category": "symbols" },
  "bell": { "char": "🔔", "slug": "bell", "category": "symbols" },
  "no_bell": { "char": "🔕", "slug": "no_bell", "category": "symbols" },
  "mega": { "char": "📣", "slug": "mega", "category": "symbols" },
  "megaphone": {
    "char": "📣",
    "slug": "mega",
    "category": "symbols",
    "isAlternative": true
  },
  "loudspeaker": { "char": "📢", "slug": "loudspeaker", "category": "symbols" },
  "speech_left": { "char": "🗨️", "slug": "speech_left", "category": "symbols" },
  "left_speech_bubble": {
    "char": "🗨️",
    "slug": "speech_left",
    "category": "symbols",
    "isAlternative": true
  },
  "eye_in_speech_bubble": {
    "char": "👁️‍🗨️",
    "slug": "eye_in_speech_bubble",
    "category": "symbols"
  },
  "speech_balloon": {
    "char": "💬",
    "slug": "speech_balloon",
    "category": "symbols"
  },
  "thought_balloon": {
    "char": "💭",
    "slug": "thought_balloon",
    "category": "symbols"
  },
  "anger_right": { "char": "🗯️", "slug": "anger_right", "category": "symbols" },
  "right_anger_bubble": {
    "char": "🗯️",
    "slug": "anger_right",
    "category": "symbols",
    "isAlternative": true
  },
  "black_joker": { "char": "🃏", "slug": "black_joker", "category": "symbols" },
  "joker": {
    "char": "🃏",
    "slug": "black_joker",
    "category": "symbols",
    "isAlternative": true
  },
  "flower_playing_cards": {
    "char": "🎴",
    "slug": "flower_playing_cards",
    "category": "symbols"
  },
  "mahjong": { "char": "🀄", "slug": "mahjong", "category": "symbols" },
  "clock1": { "char": "🕐", "slug": "clock1", "category": "symbols" },
  "one_oclock": {
    "char": "🕐",
    "slug": "clock1",
    "category": "symbols",
    "isAlternative": true
  },
  "clock2": { "char": "🕑", "slug": "clock2", "category": "symbols" },
  "two_oclock": {
    "char": "🕑",
    "slug": "clock2",
    "category": "symbols",
    "isAlternative": true
  },
  "clock3": { "char": "🕒", "slug": "clock3", "category": "symbols" },
  "three_oclock": {
    "char": "🕒",
    "slug": "clock3",
    "category": "symbols",
    "isAlternative": true
  },
  "clock4": { "char": "🕓", "slug": "clock4", "category": "symbols" },
  "four_oclock": {
    "char": "🕓",
    "slug": "clock4",
    "category": "symbols",
    "isAlternative": true
  },
  "clock5": { "char": "🕔", "slug": "clock5", "category": "symbols" },
  "five_oclock": {
    "char": "🕔",
    "slug": "clock5",
    "category": "symbols",
    "isAlternative": true
  },
  "clock6": { "char": "🕕", "slug": "clock6", "category": "symbols" },
  "six_oclock": {
    "char": "🕕",
    "slug": "clock6",
    "category": "symbols",
    "isAlternative": true
  },
  "clock7": { "char": "🕖", "slug": "clock7", "category": "symbols" },
  "seven_oclock": {
    "char": "🕖",
    "slug": "clock7",
    "category": "symbols",
    "isAlternative": true
  },
  "clock8": { "char": "🕗", "slug": "clock8", "category": "symbols" },
  "eight_oclock": {
    "char": "🕗",
    "slug": "clock8",
    "category": "symbols",
    "isAlternative": true
  },
  "clock9": { "char": "🕘", "slug": "clock9", "category": "symbols" },
  "nine_oclock": {
    "char": "🕘",
    "slug": "clock9",
    "category": "symbols",
    "isAlternative": true
  },
  "clock10": { "char": "🕙", "slug": "clock10", "category": "symbols" },
  "ten_oclock": {
    "char": "🕙",
    "slug": "clock10",
    "category": "symbols",
    "isAlternative": true
  },
  "clock11": { "char": "🕚", "slug": "clock11", "category": "symbols" },
  "eleven_oclock": {
    "char": "🕚",
    "slug": "clock11",
    "category": "symbols",
    "isAlternative": true
  },
  "clock12": { "char": "🕛", "slug": "clock12", "category": "symbols" },
  "twelve_oclock": {
    "char": "🕛",
    "slug": "clock12",
    "category": "symbols",
    "isAlternative": true
  },
  "clock130": { "char": "🕜", "slug": "clock130", "category": "symbols" },
  "one_thirty": {
    "char": "🕜",
    "slug": "clock130",
    "category": "symbols",
    "isAlternative": true
  },
  "clock230": { "char": "🕝", "slug": "clock230", "category": "symbols" },
  "two_thirty": {
    "char": "🕝",
    "slug": "clock230",
    "category": "symbols",
    "isAlternative": true
  },
  "clock330": { "char": "🕞", "slug": "clock330", "category": "symbols" },
  "three_thirty": {
    "char": "🕞",
    "slug": "clock330",
    "category": "symbols",
    "isAlternative": true
  },
  "clock430": { "char": "🕟", "slug": "clock430", "category": "symbols" },
  "four_thirty": {
    "char": "🕟",
    "slug": "clock430",
    "category": "symbols",
    "isAlternative": true
  },
  "clock530": { "char": "🕠", "slug": "clock530", "category": "symbols" },
  "five_thirty": {
    "char": "🕠",
    "slug": "clock530",
    "category": "symbols",
    "isAlternative": true
  },
  "clock630": { "char": "🕡", "slug": "clock630", "category": "symbols" },
  "six_thirty": {
    "char": "🕡",
    "slug": "clock630",
    "category": "symbols",
    "isAlternative": true
  },
  "clock730": { "char": "🕢", "slug": "clock730", "category": "symbols" },
  "seven_thirty": {
    "char": "🕢",
    "slug": "clock730",
    "category": "symbols",
    "isAlternative": true
  },
  "clock830": { "char": "🕣", "slug": "clock830", "category": "symbols" },
  "eight_thirty": {
    "char": "🕣",
    "slug": "clock830",
    "category": "symbols",
    "isAlternative": true
  },
  "clock930": { "char": "🕤", "slug": "clock930", "category": "symbols" },
  "nine_thirty": {
    "char": "🕤",
    "slug": "clock930",
    "category": "symbols",
    "isAlternative": true
  },
  "clock1030": { "char": "🕥", "slug": "clock1030", "category": "symbols" },
  "ten_thirty": {
    "char": "🕥",
    "slug": "clock1030",
    "category": "symbols",
    "isAlternative": true
  },
  "clock1130": { "char": "🕦", "slug": "clock1130", "category": "symbols" },
  "eleven_thirty": {
    "char": "🕦",
    "slug": "clock1130",
    "category": "symbols",
    "isAlternative": true
  },
  "clock1230": { "char": "🕧", "slug": "clock1230", "category": "symbols" },
  "twelve_thirty": {
    "char": "🕧",
    "slug": "clock1230",
    "category": "symbols",
    "isAlternative": true
  },
  "digit_zero": { "char": "0️", "slug": "digit_zero", "category": "symbols" },
  "digit_one": { "char": "1️", "slug": "digit_one", "category": "symbols" },
  "digit_two": { "char": "2️", "slug": "digit_two", "category": "symbols" },
  "digit_three": { "char": "3️", "slug": "digit_three", "category": "symbols" },
  "digit_four": { "char": "4️", "slug": "digit_four", "category": "symbols" },
  "digit_five": { "char": "5️", "slug": "digit_five", "category": "symbols" },
  "digit_six": { "char": "6️", "slug": "digit_six", "category": "symbols" },
  "digit_seven": { "char": "7️", "slug": "digit_seven", "category": "symbols" },
  "digit_eight": { "char": "8️", "slug": "digit_eight", "category": "symbols" },
  "digit_nine": { "char": "9️", "slug": "digit_nine", "category": "symbols" },
  "pound_symbol": {
    "char": "#️",
    "slug": "pound_symbol",
    "category": "symbols"
  },
  "asterisk_symbol": {
    "char": "*️",
    "slug": "asterisk_symbol",
    "category": "symbols"
  },
  "transgender_symbol": {
    "char": "⚧",
    "slug": "transgender_symbol",
    "category": "symbols"
  },
  "flag_white": { "char": "🏳️", "slug": "flag_white", "category": "flags" },
  "waving_white_flag": {
    "char": "🏳️",
    "slug": "flag_white",
    "category": "flags",
    "isAlternative": true
  },
  "white_flag": {
    "char": "🏳️",
    "slug": "flag_white",
    "category": "flags",
    "isAlternative": true
  },
  "flag_black": { "char": "🏴", "slug": "flag_black", "category": "flags" },
  "waving_black_flag": {
    "char": "🏴",
    "slug": "flag_black",
    "category": "flags",
    "isAlternative": true
  },
  "black_flag": {
    "char": "🏴",
    "slug": "flag_black",
    "category": "flags",
    "isAlternative": true
  },
  "checkered_flag": {
    "char": "🏁",
    "slug": "checkered_flag",
    "category": "flags"
  },
  "triangular_flag_on_post": {
    "char": "🚩",
    "slug": "triangular_flag_on_post",
    "category": "flags"
  },
  "rainbow_flag": { "char": "🏳️‍🌈", "slug": "rainbow_flag", "category": "flags" },
  "gay_pride_flag": {
    "char": "🏳️‍🌈",
    "slug": "rainbow_flag",
    "category": "flags",
    "isAlternative": true
  },
  "transgender_flag": {
    "char": "🏳️‍⚧️",
    "slug": "transgender_flag",
    "category": "flags"
  },
  "pirate_flag": { "char": "🏴‍☠️", "slug": "pirate_flag", "category": "flags" },
  "flag_af": { "char": "🇦🇫", "slug": "flag_af", "category": "flags" },
  "af": {
    "char": "🇦🇫",
    "slug": "flag_af",
    "category": "flags",
    "isAlternative": true
  },
  "flag_ax": { "char": "🇦🇽", "slug": "flag_ax", "category": "flags" },
  "ax": {
    "char": "🇦🇽",
    "slug": "flag_ax",
    "category": "flags",
    "isAlternative": true
  },
  "flag_al": { "char": "🇦🇱", "slug": "flag_al", "category": "flags" },
  "al": {
    "char": "🇦🇱",
    "slug": "flag_al",
    "category": "flags",
    "isAlternative": true
  },
  "flag_dz": { "char": "🇩🇿", "slug": "flag_dz", "category": "flags" },
  "dz": {
    "char": "🇩🇿",
    "slug": "flag_dz",
    "category": "flags",
    "isAlternative": true
  },
  "flag_as": { "char": "🇦🇸", "slug": "flag_as", "category": "flags" },
  "as": {
    "char": "🇦🇸",
    "slug": "flag_as",
    "category": "flags",
    "isAlternative": true
  },
  "flag_ad": { "char": "🇦🇩", "slug": "flag_ad", "category": "flags" },
  "ad": {
    "char": "🇦🇩",
    "slug": "flag_ad",
    "category": "flags",
    "isAlternative": true
  },
  "flag_ao": { "char": "🇦🇴", "slug": "flag_ao", "category": "flags" },
  "ao": {
    "char": "🇦🇴",
    "slug": "flag_ao",
    "category": "flags",
    "isAlternative": true
  },
  "flag_ai": { "char": "🇦🇮", "slug": "flag_ai", "category": "flags" },
  "ai": {
    "char": "🇦🇮",
    "slug": "flag_ai",
    "category": "flags",
    "isAlternative": true
  },
  "flag_aq": { "char": "🇦🇶", "slug": "flag_aq", "category": "flags" },
  "aq": {
    "char": "🇦🇶",
    "slug": "flag_aq",
    "category": "flags",
    "isAlternative": true
  },
  "flag_ag": { "char": "🇦🇬", "slug": "flag_ag", "category": "flags" },
  "ag": {
    "char": "🇦🇬",
    "slug": "flag_ag",
    "category": "flags",
    "isAlternative": true
  },
  "flag_ar": { "char": "🇦🇷", "slug": "flag_ar", "category": "flags" },
  "ar": {
    "char": "🇦🇷",
    "slug": "flag_ar",
    "category": "flags",
    "isAlternative": true
  },
  "flag_am": { "char": "🇦🇲", "slug": "flag_am", "category": "flags" },
  "am": {
    "char": "🇦🇲",
    "slug": "flag_am",
    "category": "flags",
    "isAlternative": true
  },
  "flag_aw": { "char": "🇦🇼", "slug": "flag_aw", "category": "flags" },
  "aw": {
    "char": "🇦🇼",
    "slug": "flag_aw",
    "category": "flags",
    "isAlternative": true
  },
  "flag_au": { "char": "🇦🇺", "slug": "flag_au", "category": "flags" },
  "au": {
    "char": "🇦🇺",
    "slug": "flag_au",
    "category": "flags",
    "isAlternative": true
  },
  "flag_at": { "char": "🇦🇹", "slug": "flag_at", "category": "flags" },
  "at": {
    "char": "🇦🇹",
    "slug": "flag_at",
    "category": "flags",
    "isAlternative": true
  },
  "flag_az": { "char": "🇦🇿", "slug": "flag_az", "category": "flags" },
  "az": {
    "char": "🇦🇿",
    "slug": "flag_az",
    "category": "flags",
    "isAlternative": true
  },
  "flag_bs": { "char": "🇧🇸", "slug": "flag_bs", "category": "flags" },
  "bs": {
    "char": "🇧🇸",
    "slug": "flag_bs",
    "category": "flags",
    "isAlternative": true
  },
  "flag_bh": { "char": "🇧🇭", "slug": "flag_bh", "category": "flags" },
  "bh": {
    "char": "🇧🇭",
    "slug": "flag_bh",
    "category": "flags",
    "isAlternative": true
  },
  "flag_bd": { "char": "🇧🇩", "slug": "flag_bd", "category": "flags" },
  "bd": {
    "char": "🇧🇩",
    "slug": "flag_bd",
    "category": "flags",
    "isAlternative": true
  },
  "flag_bb": { "char": "🇧🇧", "slug": "flag_bb", "category": "flags" },
  "bb": {
    "char": "🇧🇧",
    "slug": "flag_bb",
    "category": "flags",
    "isAlternative": true
  },
  "flag_by": { "char": "🇧🇾", "slug": "flag_by", "category": "flags" },
  "by": {
    "char": "🇧🇾",
    "slug": "flag_by",
    "category": "flags",
    "isAlternative": true
  },
  "flag_be": { "char": "🇧🇪", "slug": "flag_be", "category": "flags" },
  "be": {
    "char": "🇧🇪",
    "slug": "flag_be",
    "category": "flags",
    "isAlternative": true
  },
  "flag_bz": { "char": "🇧🇿", "slug": "flag_bz", "category": "flags" },
  "bz": {
    "char": "🇧🇿",
    "slug": "flag_bz",
    "category": "flags",
    "isAlternative": true
  },
  "flag_bj": { "char": "🇧🇯", "slug": "flag_bj", "category": "flags" },
  "bj": {
    "char": "🇧🇯",
    "slug": "flag_bj",
    "category": "flags",
    "isAlternative": true
  },
  "flag_bm": { "char": "🇧🇲", "slug": "flag_bm", "category": "flags" },
  "bm": {
    "char": "🇧🇲",
    "slug": "flag_bm",
    "category": "flags",
    "isAlternative": true
  },
  "flag_bt": { "char": "🇧🇹", "slug": "flag_bt", "category": "flags" },
  "bt": {
    "char": "🇧🇹",
    "slug": "flag_bt",
    "category": "flags",
    "isAlternative": true
  },
  "flag_bo": { "char": "🇧🇴", "slug": "flag_bo", "category": "flags" },
  "bo": {
    "char": "🇧🇴",
    "slug": "flag_bo",
    "category": "flags",
    "isAlternative": true
  },
  "flag_ba": { "char": "🇧🇦", "slug": "flag_ba", "category": "flags" },
  "ba": {
    "char": "🇧🇦",
    "slug": "flag_ba",
    "category": "flags",
    "isAlternative": true
  },
  "flag_bw": { "char": "🇧🇼", "slug": "flag_bw", "category": "flags" },
  "bw": {
    "char": "🇧🇼",
    "slug": "flag_bw",
    "category": "flags",
    "isAlternative": true
  },
  "flag_br": { "char": "🇧🇷", "slug": "flag_br", "category": "flags" },
  "br": {
    "char": "🇧🇷",
    "slug": "flag_br",
    "category": "flags",
    "isAlternative": true
  },
  "flag_io": { "char": "🇮🇴", "slug": "flag_io", "category": "flags" },
  "io": {
    "char": "🇮🇴",
    "slug": "flag_io",
    "category": "flags",
    "isAlternative": true
  },
  "flag_vg": { "char": "🇻🇬", "slug": "flag_vg", "category": "flags" },
  "vg": {
    "char": "🇻🇬",
    "slug": "flag_vg",
    "category": "flags",
    "isAlternative": true
  },
  "flag_bn": { "char": "🇧🇳", "slug": "flag_bn", "category": "flags" },
  "bn": {
    "char": "🇧🇳",
    "slug": "flag_bn",
    "category": "flags",
    "isAlternative": true
  },
  "flag_bg": { "char": "🇧🇬", "slug": "flag_bg", "category": "flags" },
  "bg": {
    "char": "🇧🇬",
    "slug": "flag_bg",
    "category": "flags",
    "isAlternative": true
  },
  "flag_bf": { "char": "🇧🇫", "slug": "flag_bf", "category": "flags" },
  "bf": {
    "char": "🇧🇫",
    "slug": "flag_bf",
    "category": "flags",
    "isAlternative": true
  },
  "flag_bi": { "char": "🇧🇮", "slug": "flag_bi", "category": "flags" },
  "bi": {
    "char": "🇧🇮",
    "slug": "flag_bi",
    "category": "flags",
    "isAlternative": true
  },
  "flag_kh": { "char": "🇰🇭", "slug": "flag_kh", "category": "flags" },
  "kh": {
    "char": "🇰🇭",
    "slug": "flag_kh",
    "category": "flags",
    "isAlternative": true
  },
  "flag_cm": { "char": "🇨🇲", "slug": "flag_cm", "category": "flags" },
  "cm": {
    "char": "🇨🇲",
    "slug": "flag_cm",
    "category": "flags",
    "isAlternative": true
  },
  "flag_ca": { "char": "🇨🇦", "slug": "flag_ca", "category": "flags" },
  "ca": {
    "char": "🇨🇦",
    "slug": "flag_ca",
    "category": "flags",
    "isAlternative": true
  },
  "flag_ic": { "char": "🇮🇨", "slug": "flag_ic", "category": "flags" },
  "ic": {
    "char": "🇮🇨",
    "slug": "flag_ic",
    "category": "flags",
    "isAlternative": true
  },
  "flag_cv": { "char": "🇨🇻", "slug": "flag_cv", "category": "flags" },
  "cv": {
    "char": "🇨🇻",
    "slug": "flag_cv",
    "category": "flags",
    "isAlternative": true
  },
  "flag_bq": { "char": "🇧🇶", "slug": "flag_bq", "category": "flags" },
  "bq": {
    "char": "🇧🇶",
    "slug": "flag_bq",
    "category": "flags",
    "isAlternative": true
  },
  "flag_ky": { "char": "🇰🇾", "slug": "flag_ky", "category": "flags" },
  "ky": {
    "char": "🇰🇾",
    "slug": "flag_ky",
    "category": "flags",
    "isAlternative": true
  },
  "flag_cf": { "char": "🇨🇫", "slug": "flag_cf", "category": "flags" },
  "cf": {
    "char": "🇨🇫",
    "slug": "flag_cf",
    "category": "flags",
    "isAlternative": true
  },
  "flag_td": { "char": "🇹🇩", "slug": "flag_td", "category": "flags" },
  "td": {
    "char": "🇹🇩",
    "slug": "flag_td",
    "category": "flags",
    "isAlternative": true
  },
  "flag_cl": { "char": "🇨🇱", "slug": "flag_cl", "category": "flags" },
  "chile": {
    "char": "🇨🇱",
    "slug": "flag_cl",
    "category": "flags",
    "isAlternative": true
  },
  "flag_cn": { "char": "🇨🇳", "slug": "flag_cn", "category": "flags" },
  "cn": {
    "char": "🇨🇳",
    "slug": "flag_cn",
    "category": "flags",
    "isAlternative": true
  },
  "flag_cx": { "char": "🇨🇽", "slug": "flag_cx", "category": "flags" },
  "cx": {
    "char": "🇨🇽",
    "slug": "flag_cx",
    "category": "flags",
    "isAlternative": true
  },
  "flag_cc": { "char": "🇨🇨", "slug": "flag_cc", "category": "flags" },
  "cc": {
    "char": "🇨🇨",
    "slug": "flag_cc",
    "category": "flags",
    "isAlternative": true
  },
  "flag_co": { "char": "🇨🇴", "slug": "flag_co", "category": "flags" },
  "co": {
    "char": "🇨🇴",
    "slug": "flag_co",
    "category": "flags",
    "isAlternative": true
  },
  "flag_km": { "char": "🇰🇲", "slug": "flag_km", "category": "flags" },
  "km": {
    "char": "🇰🇲",
    "slug": "flag_km",
    "category": "flags",
    "isAlternative": true
  },
  "flag_cg": { "char": "🇨🇬", "slug": "flag_cg", "category": "flags" },
  "cg": {
    "char": "🇨🇬",
    "slug": "flag_cg",
    "category": "flags",
    "isAlternative": true
  },
  "flag_cd": { "char": "🇨🇩", "slug": "flag_cd", "category": "flags" },
  "congo": {
    "char": "🇨🇩",
    "slug": "flag_cd",
    "category": "flags",
    "isAlternative": true
  },
  "flag_ck": { "char": "🇨🇰", "slug": "flag_ck", "category": "flags" },
  "ck": {
    "char": "🇨🇰",
    "slug": "flag_ck",
    "category": "flags",
    "isAlternative": true
  },
  "flag_cr": { "char": "🇨🇷", "slug": "flag_cr", "category": "flags" },
  "cr": {
    "char": "🇨🇷",
    "slug": "flag_cr",
    "category": "flags",
    "isAlternative": true
  },
  "flag_ci": { "char": "🇨🇮", "slug": "flag_ci", "category": "flags" },
  "ci": {
    "char": "🇨🇮",
    "slug": "flag_ci",
    "category": "flags",
    "isAlternative": true
  },
  "flag_hr": { "char": "🇭🇷", "slug": "flag_hr", "category": "flags" },
  "hr": {
    "char": "🇭🇷",
    "slug": "flag_hr",
    "category": "flags",
    "isAlternative": true
  },
  "flag_cu": { "char": "🇨🇺", "slug": "flag_cu", "category": "flags" },
  "cu": {
    "char": "🇨🇺",
    "slug": "flag_cu",
    "category": "flags",
    "isAlternative": true
  },
  "flag_cw": { "char": "🇨🇼", "slug": "flag_cw", "category": "flags" },
  "cw": {
    "char": "🇨🇼",
    "slug": "flag_cw",
    "category": "flags",
    "isAlternative": true
  },
  "flag_cy": { "char": "🇨🇾", "slug": "flag_cy", "category": "flags" },
  "cy": {
    "char": "🇨🇾",
    "slug": "flag_cy",
    "category": "flags",
    "isAlternative": true
  },
  "flag_cz": { "char": "🇨🇿", "slug": "flag_cz", "category": "flags" },
  "cz": {
    "char": "🇨🇿",
    "slug": "flag_cz",
    "category": "flags",
    "isAlternative": true
  },
  "flag_dk": { "char": "🇩🇰", "slug": "flag_dk", "category": "flags" },
  "dk": {
    "char": "🇩🇰",
    "slug": "flag_dk",
    "category": "flags",
    "isAlternative": true
  },
  "flag_dj": { "char": "🇩🇯", "slug": "flag_dj", "category": "flags" },
  "dj": {
    "char": "🇩🇯",
    "slug": "flag_dj",
    "category": "flags",
    "isAlternative": true
  },
  "flag_dm": { "char": "🇩🇲", "slug": "flag_dm", "category": "flags" },
  "dm": {
    "char": "🇩🇲",
    "slug": "flag_dm",
    "category": "flags",
    "isAlternative": true
  },
  "flag_do": { "char": "🇩🇴", "slug": "flag_do", "category": "flags" },
  "do": {
    "char": "🇩🇴",
    "slug": "flag_do",
    "category": "flags",
    "isAlternative": true
  },
  "flag_ec": { "char": "🇪🇨", "slug": "flag_ec", "category": "flags" },
  "ec": {
    "char": "🇪🇨",
    "slug": "flag_ec",
    "category": "flags",
    "isAlternative": true
  },
  "flag_eg": { "char": "🇪🇬", "slug": "flag_eg", "category": "flags" },
  "eg": {
    "char": "🇪🇬",
    "slug": "flag_eg",
    "category": "flags",
    "isAlternative": true
  },
  "flag_sv": { "char": "🇸🇻", "slug": "flag_sv", "category": "flags" },
  "sv": {
    "char": "🇸🇻",
    "slug": "flag_sv",
    "category": "flags",
    "isAlternative": true
  },
  "flag_gq": { "char": "🇬🇶", "slug": "flag_gq", "category": "flags" },
  "gq": {
    "char": "🇬🇶",
    "slug": "flag_gq",
    "category": "flags",
    "isAlternative": true
  },
  "flag_er": { "char": "🇪🇷", "slug": "flag_er", "category": "flags" },
  "er": {
    "char": "🇪🇷",
    "slug": "flag_er",
    "category": "flags",
    "isAlternative": true
  },
  "flag_ee": { "char": "🇪🇪", "slug": "flag_ee", "category": "flags" },
  "ee": {
    "char": "🇪🇪",
    "slug": "flag_ee",
    "category": "flags",
    "isAlternative": true
  },
  "flag_et": { "char": "🇪🇹", "slug": "flag_et", "category": "flags" },
  "et": {
    "char": "🇪🇹",
    "slug": "flag_et",
    "category": "flags",
    "isAlternative": true
  },
  "flag_eu": { "char": "🇪🇺", "slug": "flag_eu", "category": "flags" },
  "eu": {
    "char": "🇪🇺",
    "slug": "flag_eu",
    "category": "flags",
    "isAlternative": true
  },
  "flag_fk": { "char": "🇫🇰", "slug": "flag_fk", "category": "flags" },
  "fk": {
    "char": "🇫🇰",
    "slug": "flag_fk",
    "category": "flags",
    "isAlternative": true
  },
  "flag_fo": { "char": "🇫🇴", "slug": "flag_fo", "category": "flags" },
  "fo": {
    "char": "🇫🇴",
    "slug": "flag_fo",
    "category": "flags",
    "isAlternative": true
  },
  "flag_fj": { "char": "🇫🇯", "slug": "flag_fj", "category": "flags" },
  "fj": {
    "char": "🇫🇯",
    "slug": "flag_fj",
    "category": "flags",
    "isAlternative": true
  },
  "flag_fi": { "char": "🇫🇮", "slug": "flag_fi", "category": "flags" },
  "fi": {
    "char": "🇫🇮",
    "slug": "flag_fi",
    "category": "flags",
    "isAlternative": true
  },
  "flag_fr": { "char": "🇫🇷", "slug": "flag_fr", "category": "flags" },
  "fr": {
    "char": "🇫🇷",
    "slug": "flag_fr",
    "category": "flags",
    "isAlternative": true
  },
  "flag_gf": { "char": "🇬🇫", "slug": "flag_gf", "category": "flags" },
  "gf": {
    "char": "🇬🇫",
    "slug": "flag_gf",
    "category": "flags",
    "isAlternative": true
  },
  "flag_pf": { "char": "🇵🇫", "slug": "flag_pf", "category": "flags" },
  "pf": {
    "char": "🇵🇫",
    "slug": "flag_pf",
    "category": "flags",
    "isAlternative": true
  },
  "flag_tf": { "char": "🇹🇫", "slug": "flag_tf", "category": "flags" },
  "flag_ga": { "char": "🇬🇦", "slug": "flag_ga", "category": "flags" },
  "ga": {
    "char": "🇬🇦",
    "slug": "flag_ga",
    "category": "flags",
    "isAlternative": true
  },
  "flag_gm": { "char": "🇬🇲", "slug": "flag_gm", "category": "flags" },
  "gm": {
    "char": "🇬🇲",
    "slug": "flag_gm",
    "category": "flags",
    "isAlternative": true
  },
  "flag_ge": { "char": "🇬🇪", "slug": "flag_ge", "category": "flags" },
  "ge": {
    "char": "🇬🇪",
    "slug": "flag_ge",
    "category": "flags",
    "isAlternative": true
  },
  "flag_de": { "char": "🇩🇪", "slug": "flag_de", "category": "flags" },
  "de": {
    "char": "🇩🇪",
    "slug": "flag_de",
    "category": "flags",
    "isAlternative": true
  },
  "flag_gh": { "char": "🇬🇭", "slug": "flag_gh", "category": "flags" },
  "gh": {
    "char": "🇬🇭",
    "slug": "flag_gh",
    "category": "flags",
    "isAlternative": true
  },
  "flag_gi": { "char": "🇬🇮", "slug": "flag_gi", "category": "flags" },
  "gi": {
    "char": "🇬🇮",
    "slug": "flag_gi",
    "category": "flags",
    "isAlternative": true
  },
  "flag_gr": { "char": "🇬🇷", "slug": "flag_gr", "category": "flags" },
  "gr": {
    "char": "🇬🇷",
    "slug": "flag_gr",
    "category": "flags",
    "isAlternative": true
  },
  "flag_gl": { "char": "🇬🇱", "slug": "flag_gl", "category": "flags" },
  "gl": {
    "char": "🇬🇱",
    "slug": "flag_gl",
    "category": "flags",
    "isAlternative": true
  },
  "flag_gd": { "char": "🇬🇩", "slug": "flag_gd", "category": "flags" },
  "gd": {
    "char": "🇬🇩",
    "slug": "flag_gd",
    "category": "flags",
    "isAlternative": true
  },
  "flag_gp": { "char": "🇬🇵", "slug": "flag_gp", "category": "flags" },
  "gp": {
    "char": "🇬🇵",
    "slug": "flag_gp",
    "category": "flags",
    "isAlternative": true
  },
  "flag_gu": { "char": "🇬🇺", "slug": "flag_gu", "category": "flags" },
  "gu": {
    "char": "🇬🇺",
    "slug": "flag_gu",
    "category": "flags",
    "isAlternative": true
  },
  "flag_gt": { "char": "🇬🇹", "slug": "flag_gt", "category": "flags" },
  "gt": {
    "char": "🇬🇹",
    "slug": "flag_gt",
    "category": "flags",
    "isAlternative": true
  },
  "flag_gg": { "char": "🇬🇬", "slug": "flag_gg", "category": "flags" },
  "gg": {
    "char": "🇬🇬",
    "slug": "flag_gg",
    "category": "flags",
    "isAlternative": true
  },
  "flag_gn": { "char": "🇬🇳", "slug": "flag_gn", "category": "flags" },
  "gn": {
    "char": "🇬🇳",
    "slug": "flag_gn",
    "category": "flags",
    "isAlternative": true
  },
  "flag_gw": { "char": "🇬🇼", "slug": "flag_gw", "category": "flags" },
  "gw": {
    "char": "🇬🇼",
    "slug": "flag_gw",
    "category": "flags",
    "isAlternative": true
  },
  "flag_gy": { "char": "🇬🇾", "slug": "flag_gy", "category": "flags" },
  "gy": {
    "char": "🇬🇾",
    "slug": "flag_gy",
    "category": "flags",
    "isAlternative": true
  },
  "flag_ht": { "char": "🇭🇹", "slug": "flag_ht", "category": "flags" },
  "ht": {
    "char": "🇭🇹",
    "slug": "flag_ht",
    "category": "flags",
    "isAlternative": true
  },
  "flag_hn": { "char": "🇭🇳", "slug": "flag_hn", "category": "flags" },
  "hn": {
    "char": "🇭🇳",
    "slug": "flag_hn",
    "category": "flags",
    "isAlternative": true
  },
  "flag_hk": { "char": "🇭🇰", "slug": "flag_hk", "category": "flags" },
  "hk": {
    "char": "🇭🇰",
    "slug": "flag_hk",
    "category": "flags",
    "isAlternative": true
  },
  "flag_hu": { "char": "🇭🇺", "slug": "flag_hu", "category": "flags" },
  "hu": {
    "char": "🇭🇺",
    "slug": "flag_hu",
    "category": "flags",
    "isAlternative": true
  },
  "flag_is": { "char": "🇮🇸", "slug": "flag_is", "category": "flags" },
  "is": {
    "char": "🇮🇸",
    "slug": "flag_is",
    "category": "flags",
    "isAlternative": true
  },
  "flag_in": { "char": "🇮🇳", "slug": "flag_in", "category": "flags" },
  "in": {
    "char": "🇮🇳",
    "slug": "flag_in",
    "category": "flags",
    "isAlternative": true
  },
  "flag_id": { "char": "🇮🇩", "slug": "flag_id", "category": "flags" },
  "indonesia": {
    "char": "🇮🇩",
    "slug": "flag_id",
    "category": "flags",
    "isAlternative": true
  },
  "flag_ir": { "char": "🇮🇷", "slug": "flag_ir", "category": "flags" },
  "ir": {
    "char": "🇮🇷",
    "slug": "flag_ir",
    "category": "flags",
    "isAlternative": true
  },
  "flag_iq": { "char": "🇮🇶", "slug": "flag_iq", "category": "flags" },
  "iq": {
    "char": "🇮🇶",
    "slug": "flag_iq",
    "category": "flags",
    "isAlternative": true
  },
  "flag_ie": { "char": "🇮🇪", "slug": "flag_ie", "category": "flags" },
  "ie": {
    "char": "🇮🇪",
    "slug": "flag_ie",
    "category": "flags",
    "isAlternative": true
  },
  "flag_im": { "char": "🇮🇲", "slug": "flag_im", "category": "flags" },
  "im": {
    "char": "🇮🇲",
    "slug": "flag_im",
    "category": "flags",
    "isAlternative": true
  },
  "flag_il": { "char": "🇮🇱", "slug": "flag_il", "category": "flags" },
  "il": {
    "char": "🇮🇱",
    "slug": "flag_il",
    "category": "flags",
    "isAlternative": true
  },
  "flag_it": { "char": "🇮🇹", "slug": "flag_it", "category": "flags" },
  "it": {
    "char": "🇮🇹",
    "slug": "flag_it",
    "category": "flags",
    "isAlternative": true
  },
  "flag_jm": { "char": "🇯🇲", "slug": "flag_jm", "category": "flags" },
  "jm": {
    "char": "🇯🇲",
    "slug": "flag_jm",
    "category": "flags",
    "isAlternative": true
  },
  "flag_jp": { "char": "🇯🇵", "slug": "flag_jp", "category": "flags" },
  "jp": {
    "char": "🇯🇵",
    "slug": "flag_jp",
    "category": "flags",
    "isAlternative": true
  },
  "crossed_flags": {
    "char": "🎌",
    "slug": "crossed_flags",
    "category": "flags"
  },
  "flag_je": { "char": "🇯🇪", "slug": "flag_je", "category": "flags" },
  "je": {
    "char": "🇯🇪",
    "slug": "flag_je",
    "category": "flags",
    "isAlternative": true
  },
  "flag_jo": { "char": "🇯🇴", "slug": "flag_jo", "category": "flags" },
  "jo": {
    "char": "🇯🇴",
    "slug": "flag_jo",
    "category": "flags",
    "isAlternative": true
  },
  "flag_kz": { "char": "🇰🇿", "slug": "flag_kz", "category": "flags" },
  "kz": {
    "char": "🇰🇿",
    "slug": "flag_kz",
    "category": "flags",
    "isAlternative": true
  },
  "flag_ke": { "char": "🇰🇪", "slug": "flag_ke", "category": "flags" },
  "ke": {
    "char": "🇰🇪",
    "slug": "flag_ke",
    "category": "flags",
    "isAlternative": true
  },
  "flag_ki": { "char": "🇰🇮", "slug": "flag_ki", "category": "flags" },
  "ki": {
    "char": "🇰🇮",
    "slug": "flag_ki",
    "category": "flags",
    "isAlternative": true
  },
  "flag_xk": { "char": "🇽🇰", "slug": "flag_xk", "category": "flags" },
  "xk": {
    "char": "🇽🇰",
    "slug": "flag_xk",
    "category": "flags",
    "isAlternative": true
  },
  "flag_kw": { "char": "🇰🇼", "slug": "flag_kw", "category": "flags" },
  "kw": {
    "char": "🇰🇼",
    "slug": "flag_kw",
    "category": "flags",
    "isAlternative": true
  },
  "flag_kg": { "char": "🇰🇬", "slug": "flag_kg", "category": "flags" },
  "kg": {
    "char": "🇰🇬",
    "slug": "flag_kg",
    "category": "flags",
    "isAlternative": true
  },
  "flag_la": { "char": "🇱🇦", "slug": "flag_la", "category": "flags" },
  "la": {
    "char": "🇱🇦",
    "slug": "flag_la",
    "category": "flags",
    "isAlternative": true
  },
  "flag_lv": { "char": "🇱🇻", "slug": "flag_lv", "category": "flags" },
  "lv": {
    "char": "🇱🇻",
    "slug": "flag_lv",
    "category": "flags",
    "isAlternative": true
  },
  "flag_lb": { "char": "🇱🇧", "slug": "flag_lb", "category": "flags" },
  "lb": {
    "char": "🇱🇧",
    "slug": "flag_lb",
    "category": "flags",
    "isAlternative": true
  },
  "flag_ls": { "char": "🇱🇸", "slug": "flag_ls", "category": "flags" },
  "ls": {
    "char": "🇱🇸",
    "slug": "flag_ls",
    "category": "flags",
    "isAlternative": true
  },
  "flag_lr": { "char": "🇱🇷", "slug": "flag_lr", "category": "flags" },
  "lr": {
    "char": "🇱🇷",
    "slug": "flag_lr",
    "category": "flags",
    "isAlternative": true
  },
  "flag_ly": { "char": "🇱🇾", "slug": "flag_ly", "category": "flags" },
  "ly": {
    "char": "🇱🇾",
    "slug": "flag_ly",
    "category": "flags",
    "isAlternative": true
  },
  "flag_li": { "char": "🇱🇮", "slug": "flag_li", "category": "flags" },
  "li": {
    "char": "🇱🇮",
    "slug": "flag_li",
    "category": "flags",
    "isAlternative": true
  },
  "flag_lt": { "char": "🇱🇹", "slug": "flag_lt", "category": "flags" },
  "lt": {
    "char": "🇱🇹",
    "slug": "flag_lt",
    "category": "flags",
    "isAlternative": true
  },
  "flag_lu": { "char": "🇱🇺", "slug": "flag_lu", "category": "flags" },
  "lu": {
    "char": "🇱🇺",
    "slug": "flag_lu",
    "category": "flags",
    "isAlternative": true
  },
  "flag_mo": { "char": "🇲🇴", "slug": "flag_mo", "category": "flags" },
  "mo": {
    "char": "🇲🇴",
    "slug": "flag_mo",
    "category": "flags",
    "isAlternative": true
  },
  "flag_mk": { "char": "🇲🇰", "slug": "flag_mk", "category": "flags" },
  "mk": {
    "char": "🇲🇰",
    "slug": "flag_mk",
    "category": "flags",
    "isAlternative": true
  },
  "flag_mg": { "char": "🇲🇬", "slug": "flag_mg", "category": "flags" },
  "mg": {
    "char": "🇲🇬",
    "slug": "flag_mg",
    "category": "flags",
    "isAlternative": true
  },
  "flag_mw": { "char": "🇲🇼", "slug": "flag_mw", "category": "flags" },
  "mw": {
    "char": "🇲🇼",
    "slug": "flag_mw",
    "category": "flags",
    "isAlternative": true
  },
  "flag_my": { "char": "🇲🇾", "slug": "flag_my", "category": "flags" },
  "my": {
    "char": "🇲🇾",
    "slug": "flag_my",
    "category": "flags",
    "isAlternative": true
  },
  "flag_mv": { "char": "🇲🇻", "slug": "flag_mv", "category": "flags" },
  "mv": {
    "char": "🇲🇻",
    "slug": "flag_mv",
    "category": "flags",
    "isAlternative": true
  },
  "flag_ml": { "char": "🇲🇱", "slug": "flag_ml", "category": "flags" },
  "ml": {
    "char": "🇲🇱",
    "slug": "flag_ml",
    "category": "flags",
    "isAlternative": true
  },
  "flag_mt": { "char": "🇲🇹", "slug": "flag_mt", "category": "flags" },
  "mt": {
    "char": "🇲🇹",
    "slug": "flag_mt",
    "category": "flags",
    "isAlternative": true
  },
  "flag_mh": { "char": "🇲🇭", "slug": "flag_mh", "category": "flags" },
  "mh": {
    "char": "🇲🇭",
    "slug": "flag_mh",
    "category": "flags",
    "isAlternative": true
  },
  "flag_mq": { "char": "🇲🇶", "slug": "flag_mq", "category": "flags" },
  "mq": {
    "char": "🇲🇶",
    "slug": "flag_mq",
    "category": "flags",
    "isAlternative": true
  },
  "flag_mr": { "char": "🇲🇷", "slug": "flag_mr", "category": "flags" },
  "mr": {
    "char": "🇲🇷",
    "slug": "flag_mr",
    "category": "flags",
    "isAlternative": true
  },
  "flag_mu": { "char": "🇲🇺", "slug": "flag_mu", "category": "flags" },
  "mu": {
    "char": "🇲🇺",
    "slug": "flag_mu",
    "category": "flags",
    "isAlternative": true
  },
  "flag_yt": { "char": "🇾🇹", "slug": "flag_yt", "category": "flags" },
  "yt": {
    "char": "🇾🇹",
    "slug": "flag_yt",
    "category": "flags",
    "isAlternative": true
  },
  "flag_mx": { "char": "🇲🇽", "slug": "flag_mx", "category": "flags" },
  "mx": {
    "char": "🇲🇽",
    "slug": "flag_mx",
    "category": "flags",
    "isAlternative": true
  },
  "flag_fm": { "char": "🇫🇲", "slug": "flag_fm", "category": "flags" },
  "fm": {
    "char": "🇫🇲",
    "slug": "flag_fm",
    "category": "flags",
    "isAlternative": true
  },
  "flag_md": { "char": "🇲🇩", "slug": "flag_md", "category": "flags" },
  "md": {
    "char": "🇲🇩",
    "slug": "flag_md",
    "category": "flags",
    "isAlternative": true
  },
  "flag_mc": { "char": "🇲🇨", "slug": "flag_mc", "category": "flags" },
  "mc": {
    "char": "🇲🇨",
    "slug": "flag_mc",
    "category": "flags",
    "isAlternative": true
  },
  "flag_mn": { "char": "🇲🇳", "slug": "flag_mn", "category": "flags" },
  "mn": {
    "char": "🇲🇳",
    "slug": "flag_mn",
    "category": "flags",
    "isAlternative": true
  },
  "flag_me": { "char": "🇲🇪", "slug": "flag_me", "category": "flags" },
  "me": {
    "char": "🇲🇪",
    "slug": "flag_me",
    "category": "flags",
    "isAlternative": true
  },
  "flag_ms": { "char": "🇲🇸", "slug": "flag_ms", "category": "flags" },
  "ms": {
    "char": "🇲🇸",
    "slug": "flag_ms",
    "category": "flags",
    "isAlternative": true
  },
  "flag_ma": { "char": "🇲🇦", "slug": "flag_ma", "category": "flags" },
  "ma": {
    "char": "🇲🇦",
    "slug": "flag_ma",
    "category": "flags",
    "isAlternative": true
  },
  "flag_mz": { "char": "🇲🇿", "slug": "flag_mz", "category": "flags" },
  "mz": {
    "char": "🇲🇿",
    "slug": "flag_mz",
    "category": "flags",
    "isAlternative": true
  },
  "flag_mm": { "char": "🇲🇲", "slug": "flag_mm", "category": "flags" },
  "mm": {
    "char": "🇲🇲",
    "slug": "flag_mm",
    "category": "flags",
    "isAlternative": true
  },
  "flag_na": { "char": "🇳🇦", "slug": "flag_na", "category": "flags" },
  "na": {
    "char": "🇳🇦",
    "slug": "flag_na",
    "category": "flags",
    "isAlternative": true
  },
  "flag_nr": { "char": "🇳🇷", "slug": "flag_nr", "category": "flags" },
  "nr": {
    "char": "🇳🇷",
    "slug": "flag_nr",
    "category": "flags",
    "isAlternative": true
  },
  "flag_np": { "char": "🇳🇵", "slug": "flag_np", "category": "flags" },
  "np": {
    "char": "🇳🇵",
    "slug": "flag_np",
    "category": "flags",
    "isAlternative": true
  },
  "flag_nl": { "char": "🇳🇱", "slug": "flag_nl", "category": "flags" },
  "nl": {
    "char": "🇳🇱",
    "slug": "flag_nl",
    "category": "flags",
    "isAlternative": true
  },
  "flag_nc": { "char": "🇳🇨", "slug": "flag_nc", "category": "flags" },
  "nc": {
    "char": "🇳🇨",
    "slug": "flag_nc",
    "category": "flags",
    "isAlternative": true
  },
  "flag_nz": { "char": "🇳🇿", "slug": "flag_nz", "category": "flags" },
  "nz": {
    "char": "🇳🇿",
    "slug": "flag_nz",
    "category": "flags",
    "isAlternative": true
  },
  "flag_ni": { "char": "🇳🇮", "slug": "flag_ni", "category": "flags" },
  "ni": {
    "char": "🇳🇮",
    "slug": "flag_ni",
    "category": "flags",
    "isAlternative": true
  },
  "flag_ne": { "char": "🇳🇪", "slug": "flag_ne", "category": "flags" },
  "ne": {
    "char": "🇳🇪",
    "slug": "flag_ne",
    "category": "flags",
    "isAlternative": true
  },
  "flag_ng": { "char": "🇳🇬", "slug": "flag_ng", "category": "flags" },
  "nigeria": {
    "char": "🇳🇬",
    "slug": "flag_ng",
    "category": "flags",
    "isAlternative": true
  },
  "flag_nu": { "char": "🇳🇺", "slug": "flag_nu", "category": "flags" },
  "nu": {
    "char": "🇳🇺",
    "slug": "flag_nu",
    "category": "flags",
    "isAlternative": true
  },
  "flag_nf": { "char": "🇳🇫", "slug": "flag_nf", "category": "flags" },
  "nf": {
    "char": "🇳🇫",
    "slug": "flag_nf",
    "category": "flags",
    "isAlternative": true
  },
  "flag_kp": { "char": "🇰🇵", "slug": "flag_kp", "category": "flags" },
  "kp": {
    "char": "🇰🇵",
    "slug": "flag_kp",
    "category": "flags",
    "isAlternative": true
  },
  "flag_mp": { "char": "🇲🇵", "slug": "flag_mp", "category": "flags" },
  "mp": {
    "char": "🇲🇵",
    "slug": "flag_mp",
    "category": "flags",
    "isAlternative": true
  },
  "flag_no": { "char": "🇳🇴", "slug": "flag_no", "category": "flags" },
  "no": {
    "char": "🇳🇴",
    "slug": "flag_no",
    "category": "flags",
    "isAlternative": true
  },
  "flag_om": { "char": "🇴🇲", "slug": "flag_om", "category": "flags" },
  "om": {
    "char": "🇴🇲",
    "slug": "flag_om",
    "category": "flags",
    "isAlternative": true
  },
  "flag_pk": { "char": "🇵🇰", "slug": "flag_pk", "category": "flags" },
  "pk": {
    "char": "🇵🇰",
    "slug": "flag_pk",
    "category": "flags",
    "isAlternative": true
  },
  "flag_pw": { "char": "🇵🇼", "slug": "flag_pw", "category": "flags" },
  "pw": {
    "char": "🇵🇼",
    "slug": "flag_pw",
    "category": "flags",
    "isAlternative": true
  },
  "flag_ps": { "char": "🇵🇸", "slug": "flag_ps", "category": "flags" },
  "ps": {
    "char": "🇵🇸",
    "slug": "flag_ps",
    "category": "flags",
    "isAlternative": true
  },
  "flag_pa": { "char": "🇵🇦", "slug": "flag_pa", "category": "flags" },
  "pa": {
    "char": "🇵🇦",
    "slug": "flag_pa",
    "category": "flags",
    "isAlternative": true
  },
  "flag_pg": { "char": "🇵🇬", "slug": "flag_pg", "category": "flags" },
  "pg": {
    "char": "🇵🇬",
    "slug": "flag_pg",
    "category": "flags",
    "isAlternative": true
  },
  "flag_py": { "char": "🇵🇾", "slug": "flag_py", "category": "flags" },
  "py": {
    "char": "🇵🇾",
    "slug": "flag_py",
    "category": "flags",
    "isAlternative": true
  },
  "flag_pe": { "char": "🇵🇪", "slug": "flag_pe", "category": "flags" },
  "pe": {
    "char": "🇵🇪",
    "slug": "flag_pe",
    "category": "flags",
    "isAlternative": true
  },
  "flag_ph": { "char": "🇵🇭", "slug": "flag_ph", "category": "flags" },
  "ph": {
    "char": "🇵🇭",
    "slug": "flag_ph",
    "category": "flags",
    "isAlternative": true
  },
  "flag_pn": { "char": "🇵🇳", "slug": "flag_pn", "category": "flags" },
  "pn": {
    "char": "🇵🇳",
    "slug": "flag_pn",
    "category": "flags",
    "isAlternative": true
  },
  "flag_pl": { "char": "🇵🇱", "slug": "flag_pl", "category": "flags" },
  "pl": {
    "char": "🇵🇱",
    "slug": "flag_pl",
    "category": "flags",
    "isAlternative": true
  },
  "flag_pt": { "char": "🇵🇹", "slug": "flag_pt", "category": "flags" },
  "pt": {
    "char": "🇵🇹",
    "slug": "flag_pt",
    "category": "flags",
    "isAlternative": true
  },
  "flag_pr": { "char": "🇵🇷", "slug": "flag_pr", "category": "flags" },
  "pr": {
    "char": "🇵🇷",
    "slug": "flag_pr",
    "category": "flags",
    "isAlternative": true
  },
  "flag_qa": { "char": "🇶🇦", "slug": "flag_qa", "category": "flags" },
  "qa": {
    "char": "🇶🇦",
    "slug": "flag_qa",
    "category": "flags",
    "isAlternative": true
  },
  "flag_re": { "char": "🇷🇪", "slug": "flag_re", "category": "flags" },
  "re": {
    "char": "🇷🇪",
    "slug": "flag_re",
    "category": "flags",
    "isAlternative": true
  },
  "flag_ro": { "char": "🇷🇴", "slug": "flag_ro", "category": "flags" },
  "ro": {
    "char": "🇷🇴",
    "slug": "flag_ro",
    "category": "flags",
    "isAlternative": true
  },
  "flag_ru": { "char": "🇷🇺", "slug": "flag_ru", "category": "flags" },
  "ru": {
    "char": "🇷🇺",
    "slug": "flag_ru",
    "category": "flags",
    "isAlternative": true
  },
  "flag_rw": { "char": "🇷🇼", "slug": "flag_rw", "category": "flags" },
  "rw": {
    "char": "🇷🇼",
    "slug": "flag_rw",
    "category": "flags",
    "isAlternative": true
  },
  "flag_ws": { "char": "🇼🇸", "slug": "flag_ws", "category": "flags" },
  "ws": {
    "char": "🇼🇸",
    "slug": "flag_ws",
    "category": "flags",
    "isAlternative": true
  },
  "flag_sm": { "char": "🇸🇲", "slug": "flag_sm", "category": "flags" },
  "sm": {
    "char": "🇸🇲",
    "slug": "flag_sm",
    "category": "flags",
    "isAlternative": true
  },
  "flag_st": { "char": "🇸🇹", "slug": "flag_st", "category": "flags" },
  "st": {
    "char": "🇸🇹",
    "slug": "flag_st",
    "category": "flags",
    "isAlternative": true
  },
  "flag_sa": { "char": "🇸🇦", "slug": "flag_sa", "category": "flags" },
  "saudiarabia": {
    "char": "🇸🇦",
    "slug": "flag_sa",
    "category": "flags",
    "isAlternative": true
  },
  "saudi": {
    "char": "🇸🇦",
    "slug": "flag_sa",
    "category": "flags",
    "isAlternative": true
  },
  "flag_sn": { "char": "🇸🇳", "slug": "flag_sn", "category": "flags" },
  "sn": {
    "char": "🇸🇳",
    "slug": "flag_sn",
    "category": "flags",
    "isAlternative": true
  },
  "flag_rs": { "char": "🇷🇸", "slug": "flag_rs", "category": "flags" },
  "rs": {
    "char": "🇷🇸",
    "slug": "flag_rs",
    "category": "flags",
    "isAlternative": true
  },
  "flag_sc": { "char": "🇸🇨", "slug": "flag_sc", "category": "flags" },
  "sc": {
    "char": "🇸🇨",
    "slug": "flag_sc",
    "category": "flags",
    "isAlternative": true
  },
  "flag_sl": { "char": "🇸🇱", "slug": "flag_sl", "category": "flags" },
  "sl": {
    "char": "🇸🇱",
    "slug": "flag_sl",
    "category": "flags",
    "isAlternative": true
  },
  "flag_sg": { "char": "🇸🇬", "slug": "flag_sg", "category": "flags" },
  "sg": {
    "char": "🇸🇬",
    "slug": "flag_sg",
    "category": "flags",
    "isAlternative": true
  },
  "flag_sx": { "char": "🇸🇽", "slug": "flag_sx", "category": "flags" },
  "sx": {
    "char": "🇸🇽",
    "slug": "flag_sx",
    "category": "flags",
    "isAlternative": true
  },
  "flag_sk": { "char": "🇸🇰", "slug": "flag_sk", "category": "flags" },
  "sk": {
    "char": "🇸🇰",
    "slug": "flag_sk",
    "category": "flags",
    "isAlternative": true
  },
  "flag_si": { "char": "🇸🇮", "slug": "flag_si", "category": "flags" },
  "si": {
    "char": "🇸🇮",
    "slug": "flag_si",
    "category": "flags",
    "isAlternative": true
  },
  "flag_gs": { "char": "🇬🇸", "slug": "flag_gs", "category": "flags" },
  "gs": {
    "char": "🇬🇸",
    "slug": "flag_gs",
    "category": "flags",
    "isAlternative": true
  },
  "flag_sb": { "char": "🇸🇧", "slug": "flag_sb", "category": "flags" },
  "sb": {
    "char": "🇸🇧",
    "slug": "flag_sb",
    "category": "flags",
    "isAlternative": true
  },
  "flag_so": { "char": "🇸🇴", "slug": "flag_so", "category": "flags" },
  "so": {
    "char": "🇸🇴",
    "slug": "flag_so",
    "category": "flags",
    "isAlternative": true
  },
  "flag_za": { "char": "🇿🇦", "slug": "flag_za", "category": "flags" },
  "za": {
    "char": "🇿🇦",
    "slug": "flag_za",
    "category": "flags",
    "isAlternative": true
  },
  "flag_kr": { "char": "🇰🇷", "slug": "flag_kr", "category": "flags" },
  "kr": {
    "char": "🇰🇷",
    "slug": "flag_kr",
    "category": "flags",
    "isAlternative": true
  },
  "flag_ss": { "char": "🇸🇸", "slug": "flag_ss", "category": "flags" },
  "ss": {
    "char": "🇸🇸",
    "slug": "flag_ss",
    "category": "flags",
    "isAlternative": true
  },
  "flag_es": { "char": "🇪🇸", "slug": "flag_es", "category": "flags" },
  "es": {
    "char": "🇪🇸",
    "slug": "flag_es",
    "category": "flags",
    "isAlternative": true
  },
  "flag_lk": { "char": "🇱🇰", "slug": "flag_lk", "category": "flags" },
  "lk": {
    "char": "🇱🇰",
    "slug": "flag_lk",
    "category": "flags",
    "isAlternative": true
  },
  "flag_bl": { "char": "🇧🇱", "slug": "flag_bl", "category": "flags" },
  "bl": {
    "char": "🇧🇱",
    "slug": "flag_bl",
    "category": "flags",
    "isAlternative": true
  },
  "flag_sh": { "char": "🇸🇭", "slug": "flag_sh", "category": "flags" },
  "sh": {
    "char": "🇸🇭",
    "slug": "flag_sh",
    "category": "flags",
    "isAlternative": true
  },
  "flag_kn": { "char": "🇰🇳", "slug": "flag_kn", "category": "flags" },
  "kn": {
    "char": "🇰🇳",
    "slug": "flag_kn",
    "category": "flags",
    "isAlternative": true
  },
  "flag_lc": { "char": "🇱🇨", "slug": "flag_lc", "category": "flags" },
  "lc": {
    "char": "🇱🇨",
    "slug": "flag_lc",
    "category": "flags",
    "isAlternative": true
  },
  "flag_pm": { "char": "🇵🇲", "slug": "flag_pm", "category": "flags" },
  "pm": {
    "char": "🇵🇲",
    "slug": "flag_pm",
    "category": "flags",
    "isAlternative": true
  },
  "flag_vc": { "char": "🇻🇨", "slug": "flag_vc", "category": "flags" },
  "vc": {
    "char": "🇻🇨",
    "slug": "flag_vc",
    "category": "flags",
    "isAlternative": true
  },
  "flag_sd": { "char": "🇸🇩", "slug": "flag_sd", "category": "flags" },
  "sd": {
    "char": "🇸🇩",
    "slug": "flag_sd",
    "category": "flags",
    "isAlternative": true
  },
  "flag_sr": { "char": "🇸🇷", "slug": "flag_sr", "category": "flags" },
  "sr": {
    "char": "🇸🇷",
    "slug": "flag_sr",
    "category": "flags",
    "isAlternative": true
  },
  "flag_sz": { "char": "🇸🇿", "slug": "flag_sz", "category": "flags" },
  "sz": {
    "char": "🇸🇿",
    "slug": "flag_sz",
    "category": "flags",
    "isAlternative": true
  },
  "flag_se": { "char": "🇸🇪", "slug": "flag_se", "category": "flags" },
  "se": {
    "char": "🇸🇪",
    "slug": "flag_se",
    "category": "flags",
    "isAlternative": true
  },
  "flag_ch": { "char": "🇨🇭", "slug": "flag_ch", "category": "flags" },
  "ch": {
    "char": "🇨🇭",
    "slug": "flag_ch",
    "category": "flags",
    "isAlternative": true
  },
  "flag_sy": { "char": "🇸🇾", "slug": "flag_sy", "category": "flags" },
  "sy": {
    "char": "🇸🇾",
    "slug": "flag_sy",
    "category": "flags",
    "isAlternative": true
  },
  "flag_tw": { "char": "🇹🇼", "slug": "flag_tw", "category": "flags" },
  "tw": {
    "char": "🇹🇼",
    "slug": "flag_tw",
    "category": "flags",
    "isAlternative": true
  },
  "flag_tj": { "char": "🇹🇯", "slug": "flag_tj", "category": "flags" },
  "tj": {
    "char": "🇹🇯",
    "slug": "flag_tj",
    "category": "flags",
    "isAlternative": true
  },
  "flag_tz": { "char": "🇹🇿", "slug": "flag_tz", "category": "flags" },
  "tz": {
    "char": "🇹🇿",
    "slug": "flag_tz",
    "category": "flags",
    "isAlternative": true
  },
  "flag_th": { "char": "🇹🇭", "slug": "flag_th", "category": "flags" },
  "th": {
    "char": "🇹🇭",
    "slug": "flag_th",
    "category": "flags",
    "isAlternative": true
  },
  "flag_tl": { "char": "🇹🇱", "slug": "flag_tl", "category": "flags" },
  "tl": {
    "char": "🇹🇱",
    "slug": "flag_tl",
    "category": "flags",
    "isAlternative": true
  },
  "flag_tg": { "char": "🇹🇬", "slug": "flag_tg", "category": "flags" },
  "tg": {
    "char": "🇹🇬",
    "slug": "flag_tg",
    "category": "flags",
    "isAlternative": true
  },
  "flag_tk": { "char": "🇹🇰", "slug": "flag_tk", "category": "flags" },
  "tk": {
    "char": "🇹🇰",
    "slug": "flag_tk",
    "category": "flags",
    "isAlternative": true
  },
  "flag_to": { "char": "🇹🇴", "slug": "flag_to", "category": "flags" },
  "to": {
    "char": "🇹🇴",
    "slug": "flag_to",
    "category": "flags",
    "isAlternative": true
  },
  "flag_tt": { "char": "🇹🇹", "slug": "flag_tt", "category": "flags" },
  "tt": {
    "char": "🇹🇹",
    "slug": "flag_tt",
    "category": "flags",
    "isAlternative": true
  },
  "flag_tn": { "char": "🇹🇳", "slug": "flag_tn", "category": "flags" },
  "tn": {
    "char": "🇹🇳",
    "slug": "flag_tn",
    "category": "flags",
    "isAlternative": true
  },
  "flag_tr": { "char": "🇹🇷", "slug": "flag_tr", "category": "flags" },
  "tr": {
    "char": "🇹🇷",
    "slug": "flag_tr",
    "category": "flags",
    "isAlternative": true
  },
  "flag_tm": { "char": "🇹🇲", "slug": "flag_tm", "category": "flags" },
  "turkmenistan": {
    "char": "🇹🇲",
    "slug": "flag_tm",
    "category": "flags",
    "isAlternative": true
  },
  "flag_tc": { "char": "🇹🇨", "slug": "flag_tc", "category": "flags" },
  "tc": {
    "char": "🇹🇨",
    "slug": "flag_tc",
    "category": "flags",
    "isAlternative": true
  },
  "flag_vi": { "char": "🇻🇮", "slug": "flag_vi", "category": "flags" },
  "vi": {
    "char": "🇻🇮",
    "slug": "flag_vi",
    "category": "flags",
    "isAlternative": true
  },
  "flag_tv": { "char": "🇹🇻", "slug": "flag_tv", "category": "flags" },
  "tuvalu": {
    "char": "🇹🇻",
    "slug": "flag_tv",
    "category": "flags",
    "isAlternative": true
  },
  "flag_ug": { "char": "🇺🇬", "slug": "flag_ug", "category": "flags" },
  "ug": {
    "char": "🇺🇬",
    "slug": "flag_ug",
    "category": "flags",
    "isAlternative": true
  },
  "flag_ua": { "char": "🇺🇦", "slug": "flag_ua", "category": "flags" },
  "ua": {
    "char": "🇺🇦",
    "slug": "flag_ua",
    "category": "flags",
    "isAlternative": true
  },
  "flag_ae": { "char": "🇦🇪", "slug": "flag_ae", "category": "flags" },
  "ae": {
    "char": "🇦🇪",
    "slug": "flag_ae",
    "category": "flags",
    "isAlternative": true
  },
  "flag_gb": { "char": "🇬🇧", "slug": "flag_gb", "category": "flags" },
  "gb": {
    "char": "🇬🇧",
    "slug": "flag_gb",
    "category": "flags",
    "isAlternative": true
  },
  "england": { "char": "🏴󠁧󠁢󠁥󠁮󠁧󠁿", "slug": "england", "category": "flags" },
  "scotland": { "char": "🏴󠁧󠁢󠁳󠁣󠁴󠁿", "slug": "scotland", "category": "flags" },
  "wales": { "char": "🏴󠁧󠁢󠁷󠁬󠁳󠁿", "slug": "wales", "category": "flags" },
  "flag_us": { "char": "🇺🇸", "slug": "flag_us", "category": "flags" },
  "us": {
    "char": "🇺🇸",
    "slug": "flag_us",
    "category": "flags",
    "isAlternative": true
  },
  "flag_uy": { "char": "🇺🇾", "slug": "flag_uy", "category": "flags" },
  "uy": {
    "char": "🇺🇾",
    "slug": "flag_uy",
    "category": "flags",
    "isAlternative": true
  },
  "flag_uz": { "char": "🇺🇿", "slug": "flag_uz", "category": "flags" },
  "uz": {
    "char": "🇺🇿",
    "slug": "flag_uz",
    "category": "flags",
    "isAlternative": true
  },
  "flag_vu": { "char": "🇻🇺", "slug": "flag_vu", "category": "flags" },
  "vu": {
    "char": "🇻🇺",
    "slug": "flag_vu",
    "category": "flags",
    "isAlternative": true
  },
  "flag_va": { "char": "🇻🇦", "slug": "flag_va", "category": "flags" },
  "va": {
    "char": "🇻🇦",
    "slug": "flag_va",
    "category": "flags",
    "isAlternative": true
  },
  "flag_ve": { "char": "🇻🇪", "slug": "flag_ve", "category": "flags" },
  "ve": {
    "char": "🇻🇪",
    "slug": "flag_ve",
    "category": "flags",
    "isAlternative": true
  },
  "flag_vn": { "char": "🇻🇳", "slug": "flag_vn", "category": "flags" },
  "vn": {
    "char": "🇻🇳",
    "slug": "flag_vn",
    "category": "flags",
    "isAlternative": true
  },
  "flag_wf": { "char": "🇼🇫", "slug": "flag_wf", "category": "flags" },
  "wf": {
    "char": "🇼🇫",
    "slug": "flag_wf",
    "category": "flags",
    "isAlternative": true
  },
  "flag_eh": { "char": "🇪🇭", "slug": "flag_eh", "category": "flags" },
  "eh": {
    "char": "🇪🇭",
    "slug": "flag_eh",
    "category": "flags",
    "isAlternative": true
  },
  "flag_ye": { "char": "🇾🇪", "slug": "flag_ye", "category": "flags" },
  "ye": {
    "char": "🇾🇪",
    "slug": "flag_ye",
    "category": "flags",
    "isAlternative": true
  },
  "flag_zm": { "char": "🇿🇲", "slug": "flag_zm", "category": "flags" },
  "zm": {
    "char": "🇿🇲",
    "slug": "flag_zm",
    "category": "flags",
    "isAlternative": true
  },
  "flag_zw": { "char": "🇿🇼", "slug": "flag_zw", "category": "flags" },
  "zw": {
    "char": "🇿🇼",
    "slug": "flag_zw",
    "category": "flags",
    "isAlternative": true
  },
  "flag_ac": { "char": "🇦🇨", "slug": "flag_ac", "category": "flags" },
  "ac": {
    "char": "🇦🇨",
    "slug": "flag_ac",
    "category": "flags",
    "isAlternative": true
  },
  "flag_bv": { "char": "🇧🇻", "slug": "flag_bv", "category": "flags" },
  "bv": {
    "char": "🇧🇻",
    "slug": "flag_bv",
    "category": "flags",
    "isAlternative": true
  },
  "flag_cp": { "char": "🇨🇵", "slug": "flag_cp", "category": "flags" },
  "cp": {
    "char": "🇨🇵",
    "slug": "flag_cp",
    "category": "flags",
    "isAlternative": true
  },
  "flag_ea": { "char": "🇪🇦", "slug": "flag_ea", "category": "flags" },
  "ea": {
    "char": "🇪🇦",
    "slug": "flag_ea",
    "category": "flags",
    "isAlternative": true
  },
  "flag_dg": { "char": "🇩🇬", "slug": "flag_dg", "category": "flags" },
  "dg": {
    "char": "🇩🇬",
    "slug": "flag_dg",
    "category": "flags",
    "isAlternative": true
  },
  "flag_hm": { "char": "🇭🇲", "slug": "flag_hm", "category": "flags" },
  "hm": {
    "char": "🇭🇲",
    "slug": "flag_hm",
    "category": "flags",
    "isAlternative": true
  },
  "flag_mf": { "char": "🇲🇫", "slug": "flag_mf", "category": "flags" },
  "mf": {
    "char": "🇲🇫",
    "slug": "flag_mf",
    "category": "flags",
    "isAlternative": true
  },
  "flag_sj": { "char": "🇸🇯", "slug": "flag_sj", "category": "flags" },
  "sj": {
    "char": "🇸🇯",
    "slug": "flag_sj",
    "category": "flags",
    "isAlternative": true
  },
  "flag_ta": { "char": "🇹🇦", "slug": "flag_ta", "category": "flags" },
  "ta": {
    "char": "🇹🇦",
    "slug": "flag_ta",
    "category": "flags",
    "isAlternative": true
  },
  "flag_um": { "char": "🇺🇲", "slug": "flag_um", "category": "flags" },
  "um": {
    "char": "🇺🇲",
    "slug": "flag_um",
    "category": "flags",
    "isAlternative": true
  },
  "united_nations": {
    "char": "🇺🇳",
    "slug": "united_nations",
    "category": "flags"
  },
  "tone1": { "char": "🏻", "slug": "tone1", "category": "modifier" },
  "tone2": { "char": "🏼", "slug": "tone2", "category": "modifier" },
  "tone3": { "char": "🏽", "slug": "tone3", "category": "modifier" },
  "tone4": { "char": "🏾", "slug": "tone4", "category": "modifier" },
  "tone5": { "char": "🏿", "slug": "tone5", "category": "modifier" },
  "regional_indicator_z": {
    "char": "🇿",
    "slug": "regional_indicator_z",
    "category": "regional"
  },
  "regional_indicator_y": {
    "char": "🇾",
    "slug": "regional_indicator_y",
    "category": "regional"
  },
  "regional_indicator_x": {
    "char": "🇽",
    "slug": "regional_indicator_x",
    "category": "regional"
  },
  "regional_indicator_w": {
    "char": "🇼",
    "slug": "regional_indicator_w",
    "category": "regional"
  },
  "regional_indicator_v": {
    "char": "🇻",
    "slug": "regional_indicator_v",
    "category": "regional"
  },
  "regional_indicator_u": {
    "char": "🇺",
    "slug": "regional_indicator_u",
    "category": "regional"
  },
  "regional_indicator_t": {
    "char": "🇹",
    "slug": "regional_indicator_t",
    "category": "regional"
  },
  "regional_indicator_s": {
    "char": "🇸",
    "slug": "regional_indicator_s",
    "category": "regional"
  },
  "regional_indicator_r": {
    "char": "🇷",
    "slug": "regional_indicator_r",
    "category": "regional"
  },
  "regional_indicator_q": {
    "char": "🇶",
    "slug": "regional_indicator_q",
    "category": "regional"
  },
  "regional_indicator_p": {
    "char": "🇵",
    "slug": "regional_indicator_p",
    "category": "regional"
  },
  "regional_indicator_o": {
    "char": "🇴",
    "slug": "regional_indicator_o",
    "category": "regional"
  },
  "regional_indicator_n": {
    "char": "🇳",
    "slug": "regional_indicator_n",
    "category": "regional"
  },
  "regional_indicator_m": {
    "char": "🇲",
    "slug": "regional_indicator_m",
    "category": "regional"
  },
  "regional_indicator_l": {
    "char": "🇱",
    "slug": "regional_indicator_l",
    "category": "regional"
  },
  "regional_indicator_k": {
    "char": "🇰",
    "slug": "regional_indicator_k",
    "category": "regional"
  },
  "regional_indicator_j": {
    "char": "🇯",
    "slug": "regional_indicator_j",
    "category": "regional"
  },
  "regional_indicator_i": {
    "char": "🇮",
    "slug": "regional_indicator_i",
    "category": "regional"
  },
  "regional_indicator_h": {
    "char": "🇭",
    "slug": "regional_indicator_h",
    "category": "regional"
  },
  "regional_indicator_g": {
    "char": "🇬",
    "slug": "regional_indicator_g",
    "category": "regional"
  },
  "regional_indicator_f": {
    "char": "🇫",
    "slug": "regional_indicator_f",
    "category": "regional"
  },
  "regional_indicator_e": {
    "char": "🇪",
    "slug": "regional_indicator_e",
    "category": "regional"
  },
  "regional_indicator_d": {
    "char": "🇩",
    "slug": "regional_indicator_d",
    "category": "regional"
  },
  "regional_indicator_c": {
    "char": "🇨",
    "slug": "regional_indicator_c",
    "category": "regional"
  },
  "regional_indicator_b": {
    "char": "🇧",
    "slug": "regional_indicator_b",
    "category": "regional"
  },
  "regional_indicator_a": {
    "char": "🇦",
    "slug": "regional_indicator_a",
    "category": "regional"
  }
}
export default emojis