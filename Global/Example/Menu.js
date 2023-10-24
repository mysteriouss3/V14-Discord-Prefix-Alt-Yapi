const row = new ActionRowBuilder()
.addComponents(
new StringSelectMenuBuilder()
.setCustomId("")
.setPlaceholder(``)
.addOptions([
{ label: '', value: '', emoji: '' }]))

//---------------------------------------------\\

const row2 = new ActionRowBuilder()
.addComponents(
    new ButtonBuilder()
    .setCustomId("")
    .setLabel("")
    .setStyle(ButtonStyle.Primary),
);

//---------------------------------------------\\
