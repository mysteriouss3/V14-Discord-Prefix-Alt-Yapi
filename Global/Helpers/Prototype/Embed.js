const { Client, EmbedBuilder} = require("discord.js")

module.exports = Object.defineProperties(Client.prototype, {
    /**
    * Create an embed with specified options.
    * @param {Message} message - The message associated with the embed.
    * @param {Object} opt - Options for configuring the embed.
    * @param {number} [opt.color=0x000001] - The color of the embed.
    * @param {Object} [opt.footer] - Footer settings for the embed.
    * @param {string} [opt.footer.text='Developed By Vante'] - The text of the footer.
    * @param {string} [opt.footer.icon] - The icon URL of the footer.
    * @param {boolean} [opt.timestamp=false] - Whether to include a timestamp in the footer.
    * @param {Object} [opt.author] - Author settings for the embed.
    * @param {string} [opt.author.name] - The name of the author.
    * @param {string} [opt.author.icon] - The icon URL of the author.
    * @param {string} [opt.description] - The description of the embed.
    * @param {Array<Object>} [opt.fields] - An array of field objects for the embed.
    * @param {string} [opt.image] - The image URL for the embed.
    * @param {string} [opt.thumbnail] - The thumbnail URL for the embed.
    * @param {string} [opt.title] - The title of the embed.
    * @param {string} [opt.url] - The URL for the title of the embed.
    * @returns {EmbedBuilder} The created embed instance.
    */
    createEmbed: {
		value: function (message, opt) {
            const embed = new EmbedBuilder()
                .setColor(opt.color || 0x000001)
                .setFooter({ text: opt.footer?.text || 'Developed By Mysterious', iconURL: message?.member.displayAvatarURL({ dynamic: true, size: 1024 }) || opt.footer?.icon || this.user.avatarURL({ size: 1024 }) }).setTimestamp(opt.timestamp);
                
            if(opt.author && (opt.author.name || opt.author.icon)) 
                embed.setAuthor({ name: opt.author?.name || null, iconURL: opt.author.icon || null });

            if(opt.description) 
                embed.setDescription(opt.description);

            if(opt.fields && opt.fields.length > 0) 
                embed.setFields(opt.fields);

            if(opt.image) 
                embed.setImage(opt.image);

            if(opt.thumbnail) 
                embed.setThumbnail(opt.thumbnail);

            if(opt.title) 
                embed.setTitle(opt.title);

            if(opt.url) 
                embed.setURL(opt.url);

            return embed;
        }
    }
});