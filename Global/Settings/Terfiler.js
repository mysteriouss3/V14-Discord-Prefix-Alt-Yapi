const BlackList = [
    "1127380837118259383",
    "1106945897943814174",
    "1106945900489752586",
    "1106945899625721896",
    "1106945901550907503",
    "1106945902654009414",
]

const YetkiliSohbet = "1146960073856405584";

const AltYetkiTerfiLog = "1146960132358545478";
const ÜstYetkiTerfiLog = "1146960164000383027";


const AltYetkili = {
    "Stajyer": "1154947484200730695", // Odigós of Sea
    "Yetki1": "1159942770803343390", // Anerón of Sea
    "Yetki2": "1106945932655874158", // Frourá of Sea
    "Yetki3": "1107263205635522590", // Reuteré of Sea
    "Yetki4": "1106945931640848435", // Afovía of Sea
    "Yetki5": "1107256414520479784", // Anóteros of Atl
    "Yetki6": "1106945930684547102", // Empólemos of Atl
};

const ÜstYetkili = {
    "ÜstYetki": "1107257094484283452", // Episima of Atl
    "ÜstYetki1": "1106945929900212324", // Droserós of Atl
    "ÜstYetki2": "1107260099820531802", // Mathités of Atl
    "ÜstYetki3": "1106945928964866119", // Asteria of Atl
    "ÜstYetki4": "1106945926741901332", // Selenóphile of Atl
    "ÜstYetki5": "1106945925840130238", // Rofleròs of Atl
    "ÜstYetki6": "1106945925022240889", // Próvlepsi of Atl
    "ÜstYetki7": "1106945922606301214", // Metius of Atl
};
const GörevValue = [
    { Type: 'Stajyer',Register: 50, VerilecekRoller:["1146128874862825505","1157121367750221834"] },
    { Type: 'Yetki1', publicVoice: 10, GenelVoice: 15, Message: 250,VerilecekRoller:[""]},
    { Type: 'Yetki2', publicVoice: 10, GenelVoice: 15, Message: 250,VerilecekRoller:[""]},
    { Type: 'Yetki3', publicVoice: 10, GenelVoice: 15, Message: 250,VerilecekRoller:[""]},
    { Type: 'Yetki4', publicVoice: 10, GenelVoice: 15, Message: 250,VerilecekRoller:[""]},
    { Type: 'Yetki5', publicVoice: 10, GenelVoice: 15, Message: 250,VerilecekRoller:[""]},
    { Type: 'Yetki6', publicVoice: 10, GenelVoice: 15, Message: 250,VerilecekRoller:[""]},
];
const ÜstGörevValue = [
    { Type: 'Üst', publicVoice: 15, GenelVoice: 25, Message: 350,VerilecekRoller:[""] },
    { Type: 'Üst1', publicVoice: 10, GenelVoice: 25, Message: 300,VerilecekRoller:[""] },
    { Type: 'Üst2', publicVoice: 10, GenelVoice: 25, Message: 300,VerilecekRoller:[""] },
    { Type: 'Üst3', publicVoice: 10, GenelVoice: 25, Message: 300,VerilecekRoller:[""] },
    { Type: 'Üst4', publicVoice: 10, GenelVoice: 25, Message: 300,VerilecekRoller:[""] },
    { Type: 'Üst5', publicVoice: 10, GenelVoice: 25, Message: 300,VerilecekRoller:[""] },
    { Type: 'Üst6', publicVoice: 18, GenelVoice: 30, Message: 400,VerilecekRoller:[""] },
]


module.exports = {
    YetkiliSohbet,
    BlackList,
    AltYetkili,
    ÜstYetkili,
    GörevValue,
    ÜstGörevValue,
    AltYetkiTerfiLog,
    ÜstYetkiTerfiLog,

};