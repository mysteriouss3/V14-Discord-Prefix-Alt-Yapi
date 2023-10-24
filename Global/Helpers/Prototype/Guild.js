const { GuildMember, Guild } = require("discord.js");
GuildMember.prototype.rolBul = function (content) {
  let Role = this.roles.cache.find(r => r.name === content) || this.roles.cache.find(r => r.id === content)
  if (!Role) return;
  return Role;
}

Guild.prototype.kanalBul = function (content) {
  let Channel = this.channels.cache.find(k => k.name === content) || this.channels.cache.find(k => k.id === content) || this.client.channels.cache.find(e => e.id === content) || this.client.channels.cache.find(e => e.name === content)
  if (!Channel) return;
  return Channel;
}

Guild.prototype.getUser = async function (id) {
  let member = this.members.cache.get(id);
  if (!member) {
    try {
      member = await this.members.fetch(id);
    } catch (err) {
      member = undefined;
    }
  }
  return member;
};

// Önceki kodunuz
Guild.prototype.reduceArray = function (arr) {
  const flattened = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      // Eğer öğe bir dizi ise, bu alt diziyi düzleştirin ve flattened dizisine ekleyin.
      const subArray = this.reduceArray(item); // await kullanarak alt diziyi işleyin
      flattened.push(...subArray);
    } else {
      // Eğer öğe bir dizi değilse, doğrudan flattened dizisine ekleyin.
      flattened.push(item);
    }
  }
  return flattened;
}

Guild.prototype.fieldValue = function (obj, path) {
  if(!obj || !path) return;
  const parts = path.split('.');
  let value = obj;
  for (const part of parts) {
    value = value[part];
    if (value === undefined) {
      return undefined;
    }
  }
  return value;
}

const emojiCache = new Map();

Guild.prototype.eGet = function (emojiIdentifier) {
  try {
    if (emojiCache.has(emojiIdentifier)) {
      const emoji = emojiCache.get(emojiIdentifier);
      return emoji.animated ? `<a:${emoji.name}:${emoji.id}>` : `<:${emoji.name}:${emoji.id}>`;
    }

    const sunucuIDs = ['1140657190051516468'];
    let emoji = null;

    for (const sunucuID of sunucuIDs) {
      const sunucu = client.guilds.cache.get(sunucuID);
      if (sunucu) {
        emoji = sunucu.emojis.cache.find(emoji => emoji.name === emojiIdentifier || emoji.id === emojiIdentifier);
        if (emoji) {
          emojiCache.set(emojiIdentifier, emoji); // Cache'e ekleniyor
          break;
        }
      } else {
        console.log(`Sunucu (${sunucuID}) bulunamadı.`);
      }
    }

    if (!emoji) {
      console.log(`Emoji (${emojiIdentifier}) bulunamadı.`);
      return "#EmojiBulunamadı";
    }

    return emoji.animated ? `<a:${emoji.name}:${emoji.id}>` : `<:${emoji.name}:${emoji.id}>`;
  } catch (error) {
    console.error(`Emoji getirilirken hata oluştu: ${error}`);
    return "#HataOluştu";
  }
};

Guild.prototype.emojiGöster = function (emojiIdentifier) {
  const emoji = this.emojis.cache.find(
    (e) => e.name === emojiIdentifier || e.id === emojiIdentifier
  );

  if (!emoji) return "#EmojiBulunamadı";

  if (emoji.animated) {
    return `<a:${emoji.name}:${emoji.id}>`;
  } else {
    return `<:${emoji.name}:${emoji.id}>`;
  }
};
Guild.prototype.progBar = function (value, maxValue, size) {
  const progress = Math.round(size * (value / maxValue > 1 ? 1 : value / maxValue));
  const emptyProgress = size - progress > 0 ? size - progress : 0;
  let progressStart;

  if (value == 0) progressStart = `${this.eGet(eTerfi.başlangıçBar)}`;
  if (value > 0) progressStart = `${this.eGet(eTerfi.başlamaBar)}`;

  const progressText = `${this.eGet(eTerfi.doluBar)}`.repeat(progress);
  const emptyProgressText = `${this.eGet(eTerfi.boşBar)}`.repeat(emptyProgress);

  const bar = progressStart + progressText + emptyProgressText + (emptyProgress === 0 ? `${this.eGet(eTerfi.doluBitişBar)}` : `${this.eGet(eTerfi.boşBitişBar)}`);

  return bar;
};
Guild.prototype.progBar2 = function (value, maxValue, size) {
  const progress = Math.round(size * (value / maxValue > 1 ? 1 : value / maxValue));
  const emptyProgress = size - progress > 0 ? size - progress : 0;

  const progressText = `${this.eGet("mys_fill")}`.repeat(progress);
  const emptyProgressText = `${this.eGet("mys_empty")}`.repeat(emptyProgress);

  return emptyProgress > 0
    ? progress === 0
      ? `${this.eGet("mys_emptystart")}` + progressText + emptyProgressText + `${this.eGet("mys_emptyend")}`
      : `${this.eGet("mys_fillstart")}` + progressText + emptyProgressText + `${this.eGet("mys_emptyend")}`
    : `${this.eGet("mys_fillstart")}` + progressText + emptyProgressText + `${this.eGet("mys_fillend")}`;
};
Guild.prototype.progBar3 = function (value, maxValue, size) {
  const progress = Math.round(size * (value / maxValue > 1 ? 1 : value / maxValue));
  const emptyProgress = size - progress > 0 ? size - progress : 0;
  let progressStart;

  if (value == 0) progressStart = `${this.eGet("ilkbos")}`;
  if (value > 0) progressStart = `${this.eGet("ilkdolu")}`;

  const progressText = `${this.eGet("ortadolu")}`.repeat(progress);
  const emptyProgressText = `${this.eGet("ortabos")}`.repeat(emptyProgress);

  const bar = progressStart + progressText + emptyProgressText + (emptyProgress === 0 ? `${this.eGet("sondolu")}` : `${this.eGet("sonbos")}`);

  return bar;
};



