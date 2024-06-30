global.rpg = {
  emoticon(string) {
    string = string.toLowerCase();
    let emot = {
      role: '🏅',
      level: '⬆️'
    };
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string));
    if (!results.length) return '';
    else return emot[results[0][0]];
  },
  role(level) {
    level = parseInt(level);
    if (isNaN(level)) return { name: '', level: '' };
    const role = [
      { name: 'Soldado', level: 0 }, { name: 'Cabo', level: 20 }, { name: 'Sargento 1ro', level: 40 }, { name: 'Sargento 2do', level: 60 },
      { name: 'Sargento 1ro', level: 80 }, { name: 'Suboficial Mayor', level: 100 }, { name: 'Suboficial 1ro', level: 120 }, { name: 'Suboficial Mayor Principal', level: 140 },
      { name: 'Alférez', level: 180 }, { name: 'Teniente', level: 200 }, { name: 'Capitán', level: 220 }, { name: 'Mayor', level: 240 }, { name: 'Coronel', level: 260 },
      { name: 'General de Brigada', level: 280 }, { name: 'General de División', level: 300 }, { name: 'General de Brigada', level: 320 }, { name: 'General', level: 340 }, { name: 'Subcomandante del Ejército', level: 360 },
      { name: 'Teniente General', level: 380 }, { name: 'General', level: 400 }, { name: 'General Aéreo', level: 420 }, { name: 'Almirante', level: 440 }, { name: 'Vicealmirante', level: 460 },
      { name: 'Almirante', level: 480 }, { name: 'Almirante', level: 500 }, { name: 'Almirante', level: 520 }, { name: 'Almirante', level: 540 }, { name: 'Vicealmirante', level: 560 },
      { name: 'Comodoro', level: 580 }, { name: 'General de Brigada', level: 600 }, { name: 'Teniente General', level: 620 }, { name: 'Brigadier General', level: 640 }, { name: 'Mayor General', level: 660 },
      { name: 'Subteniente', level: 680 }, { name: 'Subteniente', level: 700 }, { name: 'Teniente', level: 720 }, { name: 'Teniente 1ro', level: 740 }, { name: 'Capitán', level: 760 },
      { name: 'Comisionado Mayor', level: 780 }, { name: 'Comisionado Principal', level: 800 }, { name: 'Comisionado Inspector', level: 820 }, { name: 'Superintendente General', level: 840 },
      { name: 'Superintendente Principal', level: 860 }, { name: 'Superintendente Inspector', level: 880 }, { name: 'Superintendente', level: 900 }, { name: 'Subinspector Mayor', level: 920 }, { name: 'Subinspector', level: 940 },
      { name: 'Oficial Mayor', level: 960 }, { name: 'Oficial Principal', level: 980 }, { name: 'Oficial Ayudante', level: 1000 }
    ];

    return role.reverse().find(role => level >= role.level);
  }
};