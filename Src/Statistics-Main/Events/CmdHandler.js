const { Collection,Events,ChannelType,time} = require("discord.js");

const cooldowns = new Collection();
const cmdBlock = new Collection();

setInterval(() => {
    const now = Date.now();
    cooldowns.sweep((cooldown) => 0 >= cooldown.timestamp - now);
}, 1000);

/**
 * @param {Message} message 
 * @param {Client} client
 */
module.exports = async (message) => {
    try {
            let Prefix = System.MainFrame.Prefix.find((x) => message.content.toLowerCase().startsWith(x));

            if (message.author.bot || !Prefix || !message.ChannelType === ChannelType.GuildText){
                return;
            }
            if ([`${Prefix}patlat`, `${Prefix}gumlet`].includes(message.content.toLowerCase())){
                return message.channel.send({ content: `Mysterious'un Sistemlerini Patlatamassın!` }).sil(5);
            }
            
            let args = message.content.substring(System.MainFrame.Prefix.some((x) => x.length)).split(' ');
            let CommandName = args[0].toLocaleLowerCase();

            let cmd = message.client.komut.get(CommandName)
            if(!cmd) return;
            //aşağidaki kodu silme!
            const _0x215b64=_0xa9fa;function _0x9f6e(){const _0x341ba5=['get','4753511NcKdLW','37894SQzCCg','reply','set','5PLEgfo','now','2713206dkCJjt','author','7227JCqzcc','floor','Bu\x20komutu\x20','\x20kullanabilirsiniz.','8vYGwxl','lock','Cooldown','1757109baYvbm','11320wuRVUK','31wFEViZ','then','timestamp','648660OwWkqN','delete','523611PYEqNY'];_0x9f6e=function(){return _0x341ba5;};return _0x9f6e();}(function(_0x32aa9a,_0x425d85){const _0x3766e5=_0xa9fa,_0x100714=_0x32aa9a();while(!![]){try{const _0x1e4782=parseInt(_0x3766e5(0x1ae))/0x1*(parseInt(_0x3766e5(0x19e))/0x2)+parseInt(_0x3766e5(0x1ac))/0x3+parseInt(_0x3766e5(0x1b1))/0x4+parseInt(_0x3766e5(0x1a1))/0x5*(-parseInt(_0x3766e5(0x1a3))/0x6)+parseInt(_0x3766e5(0x1b5))/0x7*(parseInt(_0x3766e5(0x1a9))/0x8)+-parseInt(_0x3766e5(0x1a5))/0x9*(parseInt(_0x3766e5(0x1ad))/0xa)+-parseInt(_0x3766e5(0x1b3))/0xb;if(_0x1e4782===_0x425d85)break;else _0x100714['push'](_0x100714['shift']());}catch(_0x488ae2){_0x100714['push'](_0x100714['shift']());}}}(_0x9f6e,0x93d3c));function _0xa9fa(_0x41b4aa,_0x497aa6){const _0x9f6ea7=_0x9f6e();return _0xa9fa=function(_0xa9fab0,_0xc39b2a){_0xa9fab0=_0xa9fab0-0x19e;let _0x55193d=_0x9f6ea7[_0xa9fab0];return _0x55193d;},_0xa9fa(_0x41b4aa,_0x497aa6);}const now=Date[_0x215b64(0x1a2)](),cooldownKey=''+cmd['Isim']+message['author']['id'],cooldown=cooldowns[_0x215b64(0x1b4)](cooldownKey);if(cooldown){const diff=cooldown[_0x215b64(0x1b0)]-now;if(diff>0x0){if(cmdBlock[_0x215b64(0x1b4)](message[_0x215b64(0x1a4)]['id'])>0x0)return;!cooldown[_0x215b64(0x1aa)]&&(cooldown[_0x215b64(0x1aa)]=!![],message[_0x215b64(0x19f)](_0x215b64(0x1a7)+time(Math[_0x215b64(0x1a6)](cooldown[_0x215b64(0x1b0)]/0x3e8),'R')+_0x215b64(0x1a8))[_0x215b64(0x1af)](_0x12a4a8=>setTimeout(()=>_0x12a4a8[_0x215b64(0x1b2)](),diff)),cmdBlock['set'](message[_0x215b64(0x1a4)]['id'],0x1),setTimeout(()=>{const _0x4246ab=_0x215b64;cmdBlock['delete'](message[_0x4246ab(0x1a4)]['id']);},diff));return;}}if(cmd[_0x215b64(0x1ab)])cooldowns[_0x215b64(0x1a0)](cooldownKey,{'timestamp':now+cmd[_0x215b64(0x1ab)],'lock':![]});
            await cmd.onRequest(client, message, args.splice(1));
    } catch (error) {
        await message.reply("Bir şeyler ters gitti... Lütfen tekrar deneyin!").sil(5);
        console.error(error);
    }
};

module.exports.config = {
    Event: Events.MessageCreate,
    System: true,
};