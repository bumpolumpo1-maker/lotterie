const STORAGE_KEY = 'funhouse_demo_v1';
const ADMIN_CODE = '2468'; // Demo-only admin code. Change for your own local copy.

const icons = ['✦','◉','◈','♠','♥','♦','♣','☄','☀','☾','⚡','◆','⬟','●','▲','▼','★','✿','◌','⌁'];

const games = [
  ['Neon Flip','coin','Chance','Kopf oder Zahl — 1 Klick, 1 Ergebnis.','◐',35],
  ['Double Dice','dice','Chance','Zwei Würfel, Summe jagen.','⚂',50],
  ['Lucky 7','dice7','Chance','Roll for the mythical 7.','⑦',55],
  ['Odd / Even','oddeven','Chance','Gerade oder ungerade?','⅔',30],
  ['Red / Black','redblack','Chance','Wähle eine Kartenfarbe.','♥',40],
  ['High Card','highcard','Chance','Zieh eine Karte gegen den House Bot.','A',45],
  ['Color Burst','color','Arcade','Treffe die Farbe vor dem Timer.','●',45],
  ['Quick Math','math','Skill','Rechne schneller als deine Freunde.','Σ',40],
  ['Reaction Rush','reaction','Skill','Warte auf Grün. Dann SOFORT klicken.','⚡',45],
  ['Stop at 5s','timing','Skill','Stoppe den Timer so nah wie möglich bei 5,00 s.','◷',45],
  ['Memory Match','memory','Skill','Finde alle Paare.','▦',50],
  ['Number Hunt','number','Skill','Errate die Zahl mit möglichst wenig Versuchen.','#',35],
  ['Higher / Lower','higherlower','Skill','Ist die nächste Karte höher oder tiefer?','↕',45],
  ['Wheelstorm','wheel','Chance','Dreh das Neon-Rad.','◌',65],
  ['Triple Slots','slots','Arcade','Drei Reels, drei Symbole.','▥',75],
  ['Mega Slots','slots','Arcade','Mehr Volatilität, mehr Show.','▥',95],
  ['Fruit Mixer','slots','Arcade','🍒🍋🍇 — Match 3.','🍒',55],
  ['Star Spinner','slots','Arcade','Sterne und Kristalle drehen.','★',70],
  ['Crown Rush','slots','Arcade','Nur Kronen zählen.','♛',80],
  ['Diamond Drop','slots','Arcade','Jage 3 Diamanten.','♦',110],
  ['Prize Reel','slots','Arcade','Jedes Symbol hat seinen eigenen Score.','◎',60],
  ['Pixel Casino','slots','Arcade','Retro-Reels mit Pixel-Vibe.','▣',45],
  ['Moon Slots','slots','Arcade','Mond, Stern, Nebel.','☾',65],
  ['Solar Slots','slots','Arcade','Strahlende Symbolkombos.','☀',65],
  ['Rocket Reel','slots','Arcade','Rakete, Orbit, Boost.','🚀',85],
  ['Blackjack Lite','blackjack','Cards','Beat 21, ohne Echtgeld.','♤',80],
  ['Twenty-One Duel','blackjack','Cards','Du gegen den Bot.','21',90],
  ['Card Clash','highcard','Cards','Zieh höher als der Gegner.','♤',60],
  ['Five Draw','draw','Cards','Zieh 5 Karten und jage ein Muster.','🂡',80],
  ['Pair Hunter','draw','Cards','Schaffe mindestens ein Paar.','♧',50],
  ['Flush Finder','draw','Cards','Treffe möglichst oft dieselbe Farbe.','♦',55],
  ['Jackpot Dice','dice','Chance','Ein Würfel, 6× Bonus.','⚅',95],
  ['Lucky Ladders','ladder','Chance','Steige Stufe für Stufe — jederzeit raus.','⇧',70],
  ['Safe Pick','cups','Chance','Unter welchem Becher steckt der Chip?','◒',55],
  ['Three Doors','doors','Chance','Wähle eine Tür.','🚪',60],
  ['Treasure Grid','gridpick','Chance','Picke ein Feld und finde Beute.','⬚',75],
  ['Mystery Box','mystery','Chance','Öffne eine zufällige Box.','□',60],
  ['Rocket Launch','rocket','Arcade','Stoppe den Multiplikator bevor er crasht.','🚀',100],
  ['Moonshot','rocket','Arcade','Halte den Flug sauber.','🌙',90],
  ['Orbit Crash','rocket','Arcade','Fliege weit — aber nicht zu weit.','🪐',80],
  ['Tap Frenzy','clicker','Skill','So viele Taps wie du in 8 Sekunden schaffst.','✋',50],
  ['Button Blitz','clicker','Skill','Perfekte Timing-Klicks.','◉',60],
  ['Target Lock','clicktarget','Skill','Triff 7 Targets.','◎',55],
  ['Grid Reflex','gridreflex','Skill','Klicke die leuchtende Zelle.','▦',55],
  ['Sequence','sequence','Skill','Merke dir die Reihenfolge.','123',60],
  ['Color Code','colorcode','Skill','Merke und wiederhole den Farbcode.','●',60],
  ['Quick Tap','reaction','Skill','Schnellste Reaktion gewinnt.','⚡',40],
  ['Aim Trainer','aim','Skill','Treffe möglichst viele Punkte.','⌖',60],
  ['Number Sprint','math','Skill','10 Aufgaben, eine Serie.','Σ',55],
  ['Cipher Dash','cipher','Skill','Entschlüssele die Buchstaben.','⌘',70],
  ['Word Rush','word','Skill','Tippe das Zielwort exakt.','Aa',50],
  ['Pattern IQ','pattern','Skill','Welches Symbol kommt als Nächstes?','◇',65],
  ['Lucky Meter','timing','Skill','Stoppe den Regler im grünen Bereich.','▰',45],
  ['Treasure Wheel','wheel','Chance','Dreh auf die Schatzfelder.','♕',85],
  ['Golden Number','number','Chance','Treffe die geheime Zahl.','✧',100],
  ['Vault Code','sequence','Skill','Knacke den 4-stelligen Code.','▣',90],
  ['Combo Builder','combo','Arcade','Baue eine 5-Hit-Kombo.','✹',65],
  ['Speed Duel','reaction','Skill','Best-of-5 Reflex Battle.','⚔',85],
  ['Pixel Picker','gridpick','Chance','Finde das leuchtende Pixel.','▦',45],
  ['Fortune Cards','highcard','Cards','Eine Karte entscheidet dein Glück.','♛',70],
  ['Duel Dice','dice','Chance','Du würfelst, Bot würfelt.','⚔',70],
  ['Night Market','slots','Arcade','Mystery-Markt mit 3 Reels.','☂',70],
  ['Arcade Royale','wheel','Arcade','Das All-in-one Party-Rad.','👑',120]
].map((g, i) => ({ id: i+1, name:g[0], mode:g[1], category:g[2], desc:g[3], icon:g[4], stake:g[5] }));

games.forEach(g => { g.featured = g.id <= 8 || [15,26,38,49,60,61,62].includes(g.id); });

const initialState = {
  profile: { name:'Alex', handle:'@alex', level:12, xp:7420, avatar:'A', bio:'Private room enjoyer ✦', status:'Online' },
  wallet: 10000,
  lifetime: 37240,
  wins: 148,
  gamesPlayed: 311,
  dailyClaim: null,
  activeRoom: 'FH-7K2P',
  friends: [
    {id:1,name:'Mia',tag:'@mia',avatar:'M',status:'playing',level:13,online:true},
    {id:2,name:'Jonas',tag:'@jonas',avatar:'J',status:'in chat',level:11,online:true},
    {id:3,name:'Sam',tag:'@sam',avatar:'S',status:'offline',level:14,online:false}
  ],
  chat: [
    {author:'Mia',avatar:'M',text:'Wer startet eine Runde?',time:'20:48'},
    {author:'Jonas',avatar:'J',text:'Ich bin bei Wheelstorm dabei 😎',time:'20:49'},
    {author:'System',avatar:'F',text:'Room-Regel: nur Fun Coins — kein Echtgeld.',time:'20:50'},
    {author:'Sam',avatar:'S',text:'Bin 5 Minuten AFK, gleich zurück.',time:'20:51'}
  ],
  missions: [
    {id:1,title:'First Spin',desc:'Spiele 3 Games.',progress:2,total:3,reward:120,done:false},
    {id:2,title:'Friendly Fire',desc:'Gewinne 5 Duelle.',progress:3,total:5,reward:250,done:false},
    {id:3,title:'Combo Night',desc:'Spiele 8 verschiedene Games.',progress:6,total:8,reward:400,done:false},
    {id:4,title:'Daily Vibes',desc:'Claim deinen Daily Bonus.',progress:0,total:1,reward:100,done:false}
  ],
  settings: {theme:'dark', sounds:true, compact:false, notifications:true},
  adminUnlocked:false,
  adminLogs: ['20:41 ROOM created FH-7K2P','20:43 Anti-spam sweep complete','20:48 Friendly mode enabled'],
  recent: games.slice(0,5).map(g=>g.id),
  disabledGames: [],
  chatChannel: 'lobby',
  notifications: 2,
  streak: 7,
  gems: 1240,
  tickets: 18,
  themeAccent: 'violet',
  favorites: [1,4,15],
  achievements: ['first-win','room-host','streak-7'],
  inventory: ['avatar-neon','frame-prism'],
  eventClaimed: [],
  activity: [],
  shopPurchases: [],
  soundProfile: 'arcade',
  privacy: {friendRequests:true,showOnline:true}
};

let state = loadState();
let currentRoute = 'home';
let activeFilter = 'Alle';
let gameSearch = '';
let gameSession = null;
let timers = [];

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return structuredClone(initialState);
    const parsed = JSON.parse(raw);
    return Object.assign(structuredClone(initialState), parsed, {
      profile: Object.assign(structuredClone(initialState.profile), parsed.profile || {}),
      settings: Object.assign(structuredClone(initialState.settings), parsed.settings || {})
    });
  } catch { return structuredClone(initialState); }
}
function saveState() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function fmt(n) { return new Intl.NumberFormat('de-DE').format(Math.max(0, Math.round(n))); }
function $(sel) { return document.querySelector(sel); }
function escapeHtml(s) { return String(s).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }
function avatarHtml(letter, cls='avatar') { return `<div class="${cls}">${escapeHtml(letter || '?')}</div>`; }
function addLog(text) { state.adminLogs.unshift(`${new Date().toLocaleTimeString('de-DE',{hour:'2-digit',minute:'2-digit'})} ${text}`); state.adminLogs = state.adminLogs.slice(0,30); saveState(); }
function toast(title, text, icon='✦') {
  const t = document.importNode($('#toastTemplate').content, true);
  t.querySelector('.toast-icon').textContent = icon;
  t.querySelector('.toast-title').textContent = title;
  t.querySelector('.toast-text').textContent = text;
  $('#toastStack').appendChild(t);
  setTimeout(() => $('#toastStack .toast')?.remove(), 3600);
}
function spend(stake) {
  if (state.wallet < stake) { toast('Wallet zu klein','Nutze erst den Daily Bonus oder setze den Kontostand zurück.','!'); return false; }
  state.wallet -= stake; return true;
}
function reward(amount, reason='Win') {
  state.wallet += amount;
  state.lifetime += amount;
  state.wins += 1;
  state.profile.xp += Math.min(150, Math.max(15, Math.floor(amount/8)));
  state.missions.forEach(m => { if (m.id === 1) m.progress = Math.min(m.total, m.progress + 1); });
  saveState();
  toast(reason, `+${fmt(amount)} FC`, '✦');
}
function loss(reason='Ergebnis') { state.gamesPlayed += 1; saveState(); toast(reason,'Runde abgeschlossen — nur virtuelle Spielwährung.','•'); }
function recordGame(id) {
  state.gamesPlayed += 1;
  state.recent = [id, ...state.recent.filter(x=>x!==id)].slice(0,6);
  state.missions[0].progress = Math.min(state.missions[0].total, state.missions[0].progress + 1);
  state.missions[2].progress = Math.min(state.missions[2].total, state.missions[2].progress + 1);
  state.profile.xp += 18;
}
function gameById(id) { return games.find(g=>g.id===Number(id)); }
function render() {
  document.body.dataset.compact = state.settings.compact ? '1' : '0';
  $('#walletBalance').textContent = fmt(state.wallet);
  $('#sidebarName').textContent = state.profile.name;
  $('#sidebarAvatar').textContent = state.profile.avatar;
  $('#sidebarStatus').textContent = `${state.profile.status} · Level ${state.profile.level}`;
  $('#topAvatar').textContent = state.profile.avatar;
  $('#topName').textContent = state.profile.name;
  $('#roomCodeLabel').textContent = state.activeRoom;
  $('#friendsBadge').textContent = state.friends.filter(f=>f.online).length;
  document.querySelectorAll('[data-route]').forEach(el => el.classList.toggle('active', el.dataset.route === currentRoute && el.classList.contains('nav-item')));
  const view = $('#appView');
  const map = { home:renderHome, games:renderGames, rooms:renderRooms, friends:renderFriends, chat:renderChat, leaderboard:renderLeaderboard, missions:renderMissions, events:renderEvents, shop:renderShop, achievements:renderAchievements, stats:renderStats, settings:renderSettings, admin:renderAdmin };
  (map[currentRoute] || renderHome)(view);
  $('#breadcrumb').innerHTML = `${escapeHtml(routeLabel(currentRoute))} <span>•</span> Private Play`;
}
function routeLabel(r) { return ({home:'Lobby',games:'Game Lab',rooms:'Rooms',friends:'Freunde',chat:'Chat',leaderboard:'Rangliste',missions:'Quests',events:'Events',shop:'Shop',achievements:'Achievements',stats:'Stats',settings:'Einstellungen',admin:'Admin'})[r] || 'Lobby'; }
function shellHead(title, sub='') { return `<div class="section-head"><div><h2>${title}</h2>${sub ? `<p>${sub}</p>`:''}</div></div>`; }
function renderHome(el) {
  const featured = games.filter(g=>g.featured && !state.disabledGames.includes(g.id)).slice(0,8);
  const recent = state.recent.map(gameById).filter(Boolean).slice(0,4);
  const xpIn=state.profile.xp%1000;
  el.innerHTML = `
    <section class="hero hero-pro"><div class="hero-card hero-visual"><div class="hero-orbit o1"></div><div class="hero-orbit o2"></div><div class="eyebrow">FUNHOUSE // SEASON 09</div><h1>The cleanest<br><span>party arcade.</span></h1><p>Ein ultra-polished Social-Arcade für Freunde: Games, Events, Quests, Collections, Rankings, Shop, Rooms und Live-Activity — alles mit rein virtueller Spielwährung.</p><div class="hero-actions"><button class="btn" data-route="games">Game Lab öffnen →</button><button class="btn secondary" data-route="events">Live Event ansehen</button></div><div class="hero-trust"><span>● Local-first</span><span>◈ 60+ Games</span><span>✦ No real money</span><span>⚡ Instant rounds</span></div></div>
      <div class="hero-side"><div class="stat-card mega"><div class="label">FUN COINS</div><div class="value">${fmt(state.wallet)} <small>FC</small></div><div class="mini-actions"><button class="tiny-btn" id="dailyBonusBtn2">Daily +350</button><button class="tiny-btn ghost" data-route="shop">Shop</button></div></div><div class="stat-card"><div class="label">LEVEL ${state.profile.level} · ${state.streak} DAY STREAK</div><div class="value">${state.profile.xp.toLocaleString('de-DE')} XP</div><div class="progress"><div style="width:${Math.min(100,xpIn/10)}%"></div></div><div class="delta">${1000-xpIn} XP bis Level ${state.profile.level+1}</div></div><div class="quick-grid"><button class="quick-card" data-route="achievements">🏆<b>${state.achievements.length}</b><span>Badges</span></button><button class="quick-card" data-route="stats">◉<b>${state.gamesPlayed}</b><span>Sessions</span></button><button class="quick-card" data-route="friends">♥<b>${state.friends.filter(f=>f.online).length}</b><span>Online</span></button><button class="quick-card" data-route="events">⚡<b>4</b><span>Live Events</span></button></div></div></section>
    ${shellHead('Featured Games','Handpicked · frisch · mit Artwork')}
    <div class="game-grid game-grid-premium">${featured.map(gameCardHtml).join('')}</div>
    <div class="dashboard-grid"><div class="panel activity-panel"><div class="flex-between"><div><div class="eyebrow">LIVE FEED</div><h3>Was gerade passiert</h3></div><button class="btn ghost" data-route="chat">Chat →</button></div><div class="activity-list"><div class="activity-item"><span class="activity-dot live"></span><div><b>Mia</b> startet gerade <b>Wheelstorm</b><small>vor 14 Sek.</small></div><span>⚡</span></div><div class="activity-item"><span class="activity-dot"></span><div><b>Jonas</b> hat einen <b>7er Streak</b> erreicht<small>vor 1 Min.</small></div><span>🔥</span></div><div class="activity-item"><span class="activity-dot"></span><div><b>Sam</b> hat ein neues Badge freigeschaltet<small>vor 3 Min.</small></div><span>🏆</span></div></div></div><div class="panel season-panel"><div class="eyebrow">SEASON PROGRESS</div><h3>Neon Odyssey</h3><div class="season-level"><strong>Lv. 27</strong><span>7 / 10 Milestones</span></div><div class="progress big"><div style="width:70%"></div></div><div class="season-rewards"><span>🎟 3 Tickets</span><span>💎 120 Gems</span><span>🎨 1 Skin</span></div><button class="btn secondary" data-route="events" style="width:100%;margin-top:14px">Season öffnen</button></div></div>
    ${shellHead('Dein Hub','Ein Screen für alles Wichtige')}
    <div class="grid-4"><div class="kpi kpi-hot"><small>Daily Quest</small><strong>${state.missions[0].progress}/${state.missions[0].total}</strong><span>+${state.missions[0].reward} FC</span></div><div class="kpi"><small>Streak</small><strong>🔥 ${state.streak}</strong><span>Best: 14 Tage</span></div><div class="kpi"><small>Gems</small><strong>💎 ${fmt(state.gems)}</strong><span data-route="shop">Shop →</span></div><div class="kpi"><small>Tickets</small><strong>🎟 ${state.tickets}</strong><span>Event passes</span></div></div>`;
  $('#dailyBonusBtn2')?.addEventListener('click', claimDaily);
}
function gameCardHtml(g) { const fav=state.favorites.includes(g.id); const art=(g.id%12)+1; return `<article class="game-card game-art-${art}" data-game="${g.id}"><div class="game-cover"><div class="cover-glow"></div><span class="cover-icon">${g.icon}</span><button class="fav-btn ${fav?'is-fav':''}" data-fav="${g.id}" title="Favorit">${fav?'★':'☆'}</button><span class="cover-ribbon">${g.category}</span></div><div class="game-card-body"><div class="game-title-row"><h3>${escapeHtml(g.name)}</h3><span class="rarity">${g.id%5===0?'EPIC':'LIVE'}</span></div><p>${escapeHtml(g.desc)}</p><div class="game-meta"><span><b>${g.stake}</b> FC</span><span>${(120+g.id*7)%999} plays</span></div></div></article>`; }
function friendRowHtml(f) { return `<div class="list-row">${avatarHtml(f.avatar,'avatar small')}<div class="grow"><strong>${escapeHtml(f.name)}</strong><span>${escapeHtml(f.status)} · Lv. ${f.level}</span></div><span class="status-dot" style="background:${f.online?'var(--green)':'#4e5668'}"></span></div>`; }
function missionMiniHtml() { const m=state.missions[0]; return `<div class="kpi"><small>${escapeHtml(m.title)}</small><strong>${m.progress}/${m.total}</strong><div class="progress"><div style="width:${100*m.progress/m.total}%"></div></div><div class="small-note" style="margin-top:7px">+${m.reward} FC Reward</div></div>`; }
function renderGames(el) {
  const cats=['Alle','Chance','Skill','Cards','Arcade'];
  let list = games.filter(g=>!state.disabledGames.includes(g.id));
  if (activeFilter !== 'Alle') list = list.filter(g=>g.category===activeFilter);
  if (gameSearch.trim()) list = list.filter(g=>(g.name+' '+g.desc).toLowerCase().includes(gameSearch.trim().toLowerCase()));
  el.innerHTML = `${shellHead('Game Lab','60+ Mini Games · nur Fun Coins')}
    <div class="filter-bar"><input class="search" id="gameSearch" placeholder="Game suchen…" value="${escapeHtml(gameSearch)}">${cats.map(c=>`<button class="filter-btn ${c===activeFilter?'active':''}" data-filter="${c}">${c}</button>`).join('')}</div>
    <div class="game-grid" id="gamesGrid">${list.map(gameCardHtml).join('')}</div>`;
}
function renderRooms(el) {
  el.innerHTML = `${shellHead('Rooms','Private Gruppen mit Code')}
    <div class="grid-2">
      <div class="room-card"><div class="eyebrow">AKTIVER ROOM</div><div class="room-code">${state.activeRoom}</div><p class="small-note">Teile den Code nur mit Freunden. Alles bleibt lokal auf diesem Gerät.</p><div class="player-stack">${state.friends.map(f=>avatarHtml(f.avatar)).join('')}${avatarHtml(state.profile.avatar)}</div><div class="room-foot"><span class="small-note">${state.friends.length+1}/8 players</span><button class="btn" id="copyRoomBtn">Code kopieren</button></div></div>
      <div class="panel"><h3>Neue private Session</h3><div class="form-grid"><div class="field"><label>Room Name</label><input id="roomName" placeholder="Friday Vibes" value="Neon Night"></div><div class="field"><label>Max. Spieler</label><select id="roomMax"><option>4</option><option selected>8</option><option>12</option></select></div></div><div class="toggle-row"><div><strong style="font-size:12px">Friendly Rules</strong><div class="small-note">Keine Leaderboard-Punkte für die Session.</div></div><button class="toggle on" data-static="true"><span></span></button></div><div class="flex" style="margin-top:14px"><button class="btn" id="newRoomBtn">Room erzeugen</button><button class="btn secondary" id="joinRoomBtn">Code beitreten</button></div></div>
    </div>
    ${shellHead('Room Features','30+ Ideen eingebaut: Party-Modus, Quests, Favoriten, Chat, Schutzfunktionen und mehr')}
    <div class="grid-3">${[['Live presence','Zeigt Online-/Playing-Status deiner Freunde.','◉'],['Room rules','Virtuelle Coins, klare Demo-Regeln.','◆'],['Chat channels','Lobby, Games, Memes und Admin.','◌'],['Daily drops','Täglicher Bonus plus Quest-Fortschritt.','✦'],['Favorite games','Zuletzt gespielte Games auf der Lobby.','♥'],['Resettable economy','Wallet jederzeit auf 10.000 FC setzen.','↺']].map(x=>`<div class="kpi"><div class="game-icon">${x[2]}</div><strong>${x[0]}</strong><div class="small-note" style="margin-top:5px">${x[1]}</div></div>`).join('')}</div>`;
}
function renderFriends(el) {
  el.innerHTML = `${shellHead('Freunde','Presence, Profile und Party-Liste')}
    <div class="panel"><div class="form-grid"><div class="field"><label>Freund hinzufügen</label><input id="friendInput" placeholder="@username"></div><div class="flex" style="align-items:end"><button class="btn" id="addFriendBtn">Anfrage senden</button></div></div></div>
    <div style="height:12px"></div><div class="grid-2">${state.friends.map(f=>`<div class="panel"><div class="flex">${avatarHtml(f.avatar,'avatar profile-big')}<div class="grow"><strong>${escapeHtml(f.name)}</strong><div class="small-note">${escapeHtml(f.tag)} · Level ${f.level}</div><div class="small-note" style="color:${f.online?'var(--green)':'#6c7487'}">● ${escapeHtml(f.status)}</div></div><button class="btn secondary" data-chat-user="${f.name}">Chat</button></div></div>`).join('')}</div>`;
}
function renderChat(el) {
  const channels = [['lobby','Lobby'],['games','# Games'],['memes','# Memes'],['admin','# Admin']];
  el.innerHTML = `${shellHead('Chat','Localer Demo-Chat für deine Room-Party')}
    <div class="chat-layout">
      <aside class="chat-side"><div class="eyebrow">CHANNELS</div>${channels.map(c=>`<div class="channel ${state.chatChannel===c[0]?'active':''}" data-channel="${c[0]}">${c[1]}</div>`).join('')}</aside>
      <section class="chat-main"><div class="flex-between"><div><strong style="font-size:14px">${state.chatChannel}</strong><div class="small-note">4 Mitglieder · lokal</div></div><span class="nav-badge live">LIVE</span></div><div class="chat-messages" id="chatMessages">${state.chat.map(msgHtml).join('')}</div><div class="chat-compose"><input id="chatInput" placeholder="Nachricht schreiben…"><button class="btn" id="sendChatBtn">Senden</button></div></section>
      <aside class="chat-info"><div class="eyebrow">ROOM INFO</div><h3 style="margin-top:8px">${state.activeRoom}</h3><div class="list">${state.friends.map(friendRowHtml).join('')}</div><div style="margin-top:20px" class="small-note">Moderation ist rein lokal. Admin-Aktionen verändern nur diese Demo-Instanz.</div></aside>
    </div>`;
}
function msgHtml(m) { const mine=m.author===state.profile.name; return `<div class="msg ${mine?'mine':''}">${mine?'':avatarHtml(m.avatar,'avatar small')}<div><div class="msg-meta">${escapeHtml(m.author)} · ${escapeHtml(m.time)}</div><div class="msg-bubble">${escapeHtml(m.text)}</div></div></div>`; }
function renderLeaderboard(el) {
  const rows = [{name:'Mia',score:24880,win:212,avatar:'M'},{name:'Sam',score:22140,win:201,avatar:'S'},{name:state.profile.name,score:state.lifetime,win:state.wins,avatar:state.profile.avatar},{name:'Jonas',score:19450,win:176,avatar:'J'},{name:'Rika',score:17680,win:151,avatar:'R'}];
  el.innerHTML = `${shellHead('Rangliste','Fun Coins & Wins · fiktive Demo-Stats')}<div class="grid-3"><div class="kpi"><small>Dein Platz</small><strong>#3</strong><div class="small-note">Room-Score ${fmt(state.lifetime)}</div></div><div class="kpi"><small>Wins</small><strong>${state.wins}</strong><div class="small-note">${state.gamesPlayed} gespielte Sessions</div></div><div class="kpi"><small>Win Rate</small><strong>${Math.round(state.wins/state.gamesPlayed*100)}%</strong><div class="small-note">Nur diese lokale Demo</div></div></div><div style="height:14px"></div><div class="panel"><table class="rank-table"><thead><tr><th>#</th><th>Player</th><th>Wins</th><th>FC Score</th></tr></thead><tbody>${rows.sort((a,b)=>b.score-a.score).map((r,i)=>`<tr><td>#${i+1}</td><td><div class="flex">${avatarHtml(r.avatar,'avatar small')}<strong>${escapeHtml(r.name)}</strong></div></td><td>${r.win}</td><td>${fmt(r.score)}</td></tr>`).join('')}</tbody></table></div>`;
}
function renderMissions(el) {
  el.innerHTML = `${shellHead('Quests','Kleine Ziele für mehr Party-Progress')}
  <div class="grid-2">${state.missions.map(m=>`<div class="panel"><div class="flex-between"><div><div class="eyebrow">QUEST #${m.id}</div><h3 style="margin-top:7px">${escapeHtml(m.title)}</h3></div><span class="nav-badge">+${m.reward} FC</span></div><div class="small-note">${escapeHtml(m.desc)}</div><div class="progress" style="margin-top:15px"><div style="width:${100*m.progress/m.total}%"></div></div><div class="flex-between" style="margin-top:8px"><span class="small-note">${m.progress}/${m.total}</span><span class="small-note">${m.done?'Abgeschlossen':'In Arbeit'}</span></div>${m.progress>=m.total&&!m.done?`<button class="btn good" data-claim-mission="${m.id}" style="margin-top:12px">Reward claimen</button>`:''}</div>`).join('')}</div>`;
}

function renderEvents(el){
  const events=[['NEON RUSH','⚡','2x XP in Skill games','+250 FC','2h 14m'],['WHEEL WEEK','◌','Every 5th spin grants a ticket','+3 Tickets','6h 40m'],['FRIEND FRIDAY','♥','Play 3 rounds with a friend','+500 FC','18h 05m'],['MIDNIGHT VAULT','▣','Solve the vault code','+120 Gems','1d 02h']];
  el.innerHTML=`${shellHead('Live Events','Rotating activities, milestones & limited rewards')}<div class="event-grid">${events.map((e,i)=>`<article class="event-card"><div class="event-banner event-${i}"><span>${e[1]}</span><b>${e[0]}</b><small>${e[4]}</small></div><div class="event-body"><h3>${e[2]}</h3><div class="reward-line">${e[3]} <span>LIMITED</span></div><button class="btn ${state.eventClaimed.includes(i)?'secondary':''}" data-event="${i}">${state.eventClaimed.includes(i)?'Claimed ✓':'Open event →'}</button></div></article>`).join('')}</div><div class="panel"><div class="eyebrow">WEEKLY TRACK</div><h3>Community milestone</h3><div class="progress big"><div style="width:68%"></div></div><div class="flex-between small-note" style="margin-top:8px"><span>68,420 / 100,000 rounds</span><b>2d 08h left</b></div></div>`;
}
function renderShop(el){const items=[['avatar-neon','Neon Avatar','🎭',350],['frame-prism','Prism Frame','◈',600],['title-royal','Title: Royal','♛',900],['emote-boom','Boom Emote','💥',250],['theme-aurora','Aurora Theme','🌌',1200],['ticket-pack','3 Event Tickets','🎟',500]];el.innerHTML=`${shellHead('Cosmetic Shop','Nur virtuelle Cosmetics · keine Echtgeldkäufe')}<div class="shop-balance"><span>💎 ${fmt(state.gems)} Gems</span><span>🎟 ${state.tickets} Tickets</span></div><div class="shop-grid">${items.map((it,i)=>`<article class="shop-card"><div class="shop-art">${it[2]}</div><div class="eyebrow">COSMETIC ${i+1}</div><h3>${it[1]}</h3><p>Freischalten und im Profil ausrüsten.</p><button class="btn" data-buy="${it[0]}" data-price="${it[3]}">💎 ${it[3]}</button></article>`).join('')}</div>`;}
function renderAchievements(el){const list=[['first-win','First Spark','Gewinne dein erstes Game','✓'],['room-host','Host Mode','Erstelle 5 Rooms','⌂'],['streak-7','On Fire','7 Tage Streak','🔥'],['collector','Collector','5 Cosmetics besitzen','◈'],['social','Party People','10 Freunde hinzufügen','♥'],['speed','Lightning','Reaktion unter 250ms','⚡'],['highroller','Big Stack','5.000 FC Wallet erreichen','◉'],['arcade-master','Arcade Master','25 verschiedene Games spielen','♛']];el.innerHTML=`${shellHead('Achievements','Badges, Milestones & flex your profile')}<div class="achievement-grid">${list.map(a=>`<article class="achievement-card ${state.achievements.includes(a[0])?'unlocked':''}"><div class="badge-icon">${a[3]}</div><div><h3>${a[1]}</h3><p>${a[2]}</p><small>${state.achievements.includes(a[0])?'UNLOCKED':'LOCKED'}</small></div></article>`).join('')}</div>`;}
function renderStats(el){const wins=state.wins, played=state.gamesPlayed, rate=played?Math.round(wins/played*100):0;const bars=[35,62,48,78,54,88,66,74,51,93,69,81];el.innerHTML=`${shellHead('Player Analytics','Deine lokale Arcade-Performance')}<div class="grid-4"><div class="kpi"><small>Win Rate</small><strong>${rate}%</strong><span>${wins} wins</span></div><div class="kpi"><small>Played</small><strong>${played}</strong><span>all sessions</span></div><div class="kpi"><small>Lifetime</small><strong>${fmt(state.lifetime)}</strong><span>FC earned</span></div><div class="kpi"><small>Best Streak</small><strong>14</strong><span>days</span></div></div><div class="grid-2" style="margin-top:14px"><div class="panel"><div class="flex-between"><h3>Activity · last 12h</h3><span class="small-note">local telemetry</span></div><div class="bar-chart">${bars.map((v,i)=>`<div class="bar-col"><div class="bar" style="height:${v}%"></div><span>${i+1}</span></div>`).join('')}</div></div><div class="panel"><h3>Category split</h3><div class="stat-bars">${[['Skill',42],['Arcade',28],['Chance',20],['Cards',10]].map(x=>`<div><div class="flex-between small-note"><span>${x[0]}</span><b>${x[1]}%</b></div><div class="progress"><div style="width:${x[1]}%"></div></div></div>`).join('')}</div></div></div>`;}
function renderSettings(el) {
  el.innerHTML = `${shellHead('Einstellungen','Profil, Appearance und lokale Preferences')}
    <div class="profile-banner"><div class="profile-left">${avatarHtml(state.profile.avatar,'avatar profile-big')}<div><div class="eyebrow">PROFILE</div><h2 style="margin:5px 0 2px">${escapeHtml(state.profile.name)}</h2><div class="small-note">${escapeHtml(state.profile.handle)} · ${escapeHtml(state.profile.status)}</div></div></div><button class="btn secondary" id="randomAvatarBtn">Avatar ändern</button></div>
    <div style="height:14px"></div><div class="grid-2"><div class="panel"><h3>Profil</h3><div class="form-grid"><div class="field"><label>Anzeigename</label><input id="profileName" value="${escapeHtml(state.profile.name)}"></div><div class="field"><label>Handle</label><input id="profileHandle" value="${escapeHtml(state.profile.handle)}"></div></div><div class="field" style="margin-top:12px"><label>Bio</label><textarea id="profileBio">${escapeHtml(state.profile.bio)}</textarea></div><button class="btn" id="saveProfileBtn" style="margin-top:12px">Profil speichern</button></div>
    <div class="panel"><h3>App</h3><div class="field"><label>Theme</label><select id="themeSelect"><option value="dark" ${state.settings.theme==='dark'?'selected':''}>Dark</option><option value="midnight" ${state.settings.theme==='midnight'?'selected':''}>Midnight</option></select></div>${toggleRow('soundToggle','Sound FX',state.settings.sounds,'Klicks, Wins und Timer.')}${toggleRow('notifToggle','Benachrichtigungen',state.settings.notifications,'Lokale Toasts und Room-Events.')}${toggleRow('compactToggle','Compact Cards',state.settings.compact,'Mehr Games pro Bildschirm.')}</div></div>`;
}
function toggleRow(id,label,on,note) { return `<div class="toggle-row"><div><strong style="font-size:12px">${label}</strong><div class="small-note">${note}</div></div><button class="toggle ${on?'on':''}" data-toggle="${id}"><span></span></button></div>`; }
function renderAdmin(el) {
  if (!state.adminUnlocked) {
    el.innerHTML = `<div class="admin-code"><div class="shield">⌘</div><div class="eyebrow">LOCAL DEMO ADMIN</div><h2>Console locked</h2><p class="small-note">Demo-Zugang: <span class="mono">2468</span>. Dieser Code ist absichtlich nur für die lokale Testseite.</p><div class="field" style="margin-top:18px"><label>Admin Code</label><input id="adminCode" type="password" inputmode="numeric" maxlength="8" placeholder="••••"></div><button class="btn" id="adminUnlockBtn" style="width:100%;margin-top:10px">Entsperren</button></div>`;
    return;
  }
  el.innerHTML = `${shellHead('Admin Console','Moderation, Economy und Room Controls')}
    <div class="admin-tabs">${['overview','economy','players','games','logs'].map(t=>`<button class="admin-tab ${!window.adminTab&&t==='overview'||window.adminTab===t?'active':''}" data-admin-tab="${t}">${t}</button>`).join('')}</div>
    ${adminTabView(window.adminTab||'overview')}`;
}
function adminTabView(t) {
  if(t==='economy') return `<div class="grid-2"><div class="panel"><h3>Economy Controls</h3><div class="field"><label>Wallet setzen</label><input id="adminWallet" type="number" value="${state.wallet}"></div><button class="btn" id="setWalletBtn" style="margin-top:12px">Setzen</button><div class="small-note" style="margin-top:9px">Nur virtuelle FC; kein Geldsystem.</div></div><div class="panel"><h3>Safe Reset</h3><p class="small-note">Setzt Profil, Wallet, Freunde und Chat auf die Demo-Startwerte.</p><button class="btn danger" id="fullResetBtn">Demo komplett zurücksetzen</button></div></div>`;
  if(t==='players') return `<div class="panel"><h3>Players</h3><div class="list">${[state.profile,...state.friends].map((p,i)=>`<div class="list-row">${avatarHtml(p.avatar,'avatar small')}<div class="grow"><strong>${escapeHtml(p.name)}</strong><span>${escapeHtml(p.handle||'@friend')} · ${p.online===false?'offline':'online'}</span></div><button class="btn danger" data-mute="${escapeHtml(p.name)}">Mute</button></div>`).join('')}</div></div>`;
  if(t==='games') return `<div class="panel"><div class="flex-between"><h3>Game Flags</h3><span class="small-note">${state.disabledGames.length} disabled</span></div><div class="grid-2">${games.map(g=>`<div class="list-row"><div class="game-icon" style="width:35px;height:35px;font-size:16px">${g.icon}</div><div class="grow"><strong>${escapeHtml(g.name)}</strong><span>${g.category} · ${g.stake} FC</span></div><button class="toggle ${state.disabledGames.includes(g.id)?'':'on'}" data-disable-game="${g.id}"><span></span></button></div>`).join('')}</div></div>`;
  if(t==='logs') return `<div class="panel"><div class="flex-between"><h3>Audit Log</h3><button class="btn ghost" id="clearLogsBtn">Clear</button></div><div class="admin-log">${state.adminLogs.map(x=>escapeHtml(x)).join('<br>')}</div></div>`;
  return `<div class="grid-3"><div class="kpi"><small>Wallet</small><strong>${fmt(state.wallet)} FC</strong><span class="small-note">local demo</span></div><div class="kpi"><small>Games</small><strong>${games.length}</strong><span class="small-note">${state.disabledGames.length} disabled</span></div><div class="kpi"><small>Room</small><strong>${state.activeRoom}</strong><span class="small-note">${state.friends.length+1} players</span></div></div><div style="height:14px"></div><div class="panel"><h3>Quick Actions</h3><div class="flex" style="flex-wrap:wrap"><button class="btn" id="grant100Btn">+100 FC</button><button class="btn" id="grant1000Btn">+1,000 FC</button><button class="btn secondary" id="rotateRoomBtn">Neuen Room-Code</button><button class="btn danger" id="logoutAdminBtn">Admin sperren</button></div></div>`;
}

function openGame(id) {
  const g = gameById(id); if (!g || state.disabledGames.includes(g.id)) return;
  clearTimers();
  gameSession = { game:g, score:0, started:Date.now(), active:true, data:{} };
  $('#modalBackdrop').classList.remove('hidden');
  renderGameModal();
}
function closeModal() { clearTimers(); gameSession=null; $('#modalBackdrop').classList.add('hidden'); }
function clearTimers() { timers.forEach(clearTimeout); timers.forEach(clearInterval); timers=[]; }
function stakeForGame(g) { return Math.max(10, Math.round(g.stake * (state.settings.compact?0.9:1))); }
function renderGameModal(message='') {
  const g=gameSession.game, stake=stakeForGame(g);
  const title = `${escapeHtml(g.name)}`;
  $('#gameModal').innerHTML = `<div class="modal-head"><div class="game-icon">${g.icon}</div><div class="modal-head-copy"><h2 id="modalTitle">${title}</h2><p>${escapeHtml(g.category)} · Einsatz ${stake} FC · <span style="color:#7d8da8">nur Spielwährung</span></p></div><button class="icon-btn" id="closeGameBtn">✕</button></div><div class="modal-body"><div class="game-screen" id="gameScreen">${gameIntroHtml(g,message)}</div></div>`;
  $('#closeGameBtn').onclick=closeModal;
  bindGameIntro(g);
}
function gameIntroHtml(g,message='') { return `<div class="game-score"><div><div class="eyebrow">ROUND READY</div><div class="big">${fmt(stakeForGame(g))} FC</div><div class="small-note">Eine Runde kostet virtuelle Fun Coins.</div></div><div class="small-note">Wallet: <b>${fmt(state.wallet)} FC</b></div></div><div class="playfield"><div style="text-align:center"><div class="big-emoji">${g.icon}</div><div style="font-weight:800;margin-top:10px">${escapeHtml(g.desc)}</div>${message?`<div class="small-note" style="margin-top:8px">${escapeHtml(message)}</div>`:''}<button class="btn" id="startGameBtn" style="margin-top:18px">Runde starten</button></div></div><div class="small-note">⚠ Dieses Projekt nutzt ausschließlich fiktive Spielwährung. Keine Einzahlungen, Auszahlungen oder Echtgeldpreise.</div>`; }
function bindGameIntro(g) { $('#startGameBtn').onclick=()=>startGame(g); }
function startGame(g) {
  const stake=stakeForGame(g); if(!spend(stake)) return;
  recordGame(g.id); saveState();
  if(g.mode==='coin') return setupCoin(g,stake);
  if(g.mode==='dice') return setupDice(g,stake);
  if(g.mode==='dice7') return setupDice7(g,stake);
  if(g.mode==='oddeven') return setupOddEven(g,stake);
  if(g.mode==='redblack') return setupColorPick(g,stake);
  if(g.mode==='highcard') return setupHighCard(g,stake);
  if(g.mode==='color') return setupColor(g,stake);
  if(g.mode==='math') return setupMath(g,stake);
  if(g.mode==='reaction') return setupReaction(g,stake);
  if(g.mode==='timing') return setupTiming(g,stake);
  if(g.mode==='memory') return setupMemory(g,stake);
  if(g.mode==='number') return setupNumber(g,stake);
  if(g.mode==='higherlower') return setupHigherLower(g,stake);
  if(g.mode==='wheel') return setupWheel(g,stake);
  if(g.mode==='slots') return setupSlots(g,stake);
  if(g.mode==='blackjack') return setupBlackjack(g,stake);
  if(g.mode==='draw') return setupDraw(g,stake);
  if(g.mode==='ladder') return setupLadder(g,stake);
  if(g.mode==='cups') return setupCups(g,stake);
  if(g.mode==='doors') return setupDoors(g,stake);
  if(g.mode==='gridpick') return setupGridPick(g,stake);
  if(g.mode==='mystery') return setupMystery(g,stake);
  if(g.mode==='rocket') return setupRocket(g,stake);
  if(g.mode==='clicker') return setupClicker(g,stake);
  if(g.mode==='clicktarget'||g.mode==='aim') return setupClickTarget(g,stake);
  if(g.mode==='gridreflex') return setupGridReflex(g,stake);
  if(g.mode==='sequence') return setupSequence(g,stake);
  if(g.mode==='colorcode') return setupColorCode(g,stake);
  if(g.mode==='cipher') return setupCipher(g,stake);
  if(g.mode==='word') return setupWord(g,stake);
  if(g.mode==='pattern') return setupPattern(g,stake);
  if(g.mode==='combo') return setupCombo(g,stake);
  setupCoin(g,stake);
}
function gameResult(g,stake,won,payout,reason) { loss(reason); if(won) reward(payout,reason); render(); closeModal(); }
function actionField(inner, stake, note='') { return `<div class="playfield">${inner}</div><div class="flex-between"><span class="small-note">Einsatz: ${stake} FC</span><span class="small-note">${note}</span></div>`; }
function setupCoin(g,stake){ const result=Math.random()<.5?'Kopf':'Zahl'; $('#gameScreen').innerHTML=actionField(`<div style="text-align:center"><div class="big-emoji" id="coinEmoji">🪙</div><div class="small-note" style="margin-top:10px">Wähle deine Seite</div><div class="choice-grid" style="margin-top:14px"><button class="choice" data-choice="Kopf">Kopf</button><button class="choice" data-choice="Zahl">Zahl</button></div></div>`,stake,'Win = 2× Einsatz'); document.querySelectorAll('[data-choice]').forEach(b=>b.onclick=()=>{ $('#coinEmoji').textContent='🪙'; setTimeout(()=>{ const won=b.dataset.choice===result; $('#coinEmoji').textContent=result==='Kopf'?'🙂':'🔢'; gameResult(g,stake,won,stake*2,won?'Neon Flip':'Neon Flip');},400); }); }
function setupDice(g,stake){ $('#gameScreen').innerHTML=actionField(`<div style="text-align:center"><div class="big-number" id="diceNum">?</div><button class="btn" id="rollDice">Würfeln</button></div>`,stake,'6 = 4× · 5 = 2×'); $('#rollDice').onclick=()=>{ const n=1+Math.floor(Math.random()*6); $('#diceNum').textContent=n; const mult=n===6?4:n===5?2:0; setTimeout(()=>gameResult(g,stake,mult>0,stake*mult,'Double Dice'),450); }; }
function setupDice7(g,stake){ $('#gameScreen').innerHTML=actionField(`<div style="text-align:center"><div class="big-number" id="sumNum">?</div><div class="small-note">Zwei Würfel · triff die 7</div><button class="btn" id="roll7">Roll 2 dice</button></div>`,stake,'7 = 5× Einsatz'); $('#roll7').onclick=()=>{const a=1+Math.floor(Math.random()*6),b=1+Math.floor(Math.random()*6),s=a+b;$('#sumNum').textContent=`${a}+${b}=${s}`;setTimeout(()=>gameResult(g,stake,s===7,stake*5,'Lucky 7'),500)}; }
function setupOddEven(g,stake){ const n=1+Math.floor(Math.random()*12); $('#gameScreen').innerHTML=actionField(`<div style="text-align:center"><div class="big-number" id="oe">?</div><div class="choice-grid"><button class="choice" data-oe="odd">Ungerade</button><button class="choice" data-oe="even">Gerade</button></div></div>`,stake,'Richtig = 2×'); document.querySelectorAll('[data-oe]').forEach(b=>b.onclick=()=>{let r=n%2?'odd':'even';$('#oe').textContent=n;setTimeout(()=>gameResult(g,stake,b.dataset.oe===r,stake*2,'Odd / Even'),350)}); }
function setupColorPick(g,stake){ const r=Math.random()<.5?'Rot':'Schwarz'; $('#gameScreen').innerHTML=actionField(`<div style="text-align:center"><div class="big-emoji">🃏</div><div class="choice-grid"><button class="choice" data-col="Rot">♥ Rot</button><button class="choice" data-col="Schwarz">♠ Schwarz</button></div></div>`,stake,'Richtig = 2×');document.querySelectorAll('[data-col]').forEach(b=>b.onclick=()=>gameResult(g,stake,b.dataset.col===r,stake*2,'Red / Black')); }
function setupHighCard(g,stake){ const a=1+Math.floor(Math.random()*13),b=1+Math.floor(Math.random()*13); $('#gameScreen').innerHTML=actionField(`<div style="display:flex;gap:22px;align-items:center"><div style="text-align:center"><div class="small-note">DU</div><div class="big-number">?</div></div><div class="small-note">vs</div><div style="text-align:center"><div class="small-note">BOT</div><div class="big-number">${b}</div></div></div><button class="btn" id="drawHigh">Karte ziehen</button>`,stake,'Höher = 2× · Gleichstand = Einsatz zurück'); $('#drawHigh').onclick=()=>{const won=a>b,tie=a===b;$('#drawHigh').textContent=`Deine Karte: ${a}`;setTimeout(()=>{if(tie){state.wallet+=stake;toast('Tie-Refund',`+${stake} FC zurück`,`↺`);loss('High Card');render();closeModal();}else gameResult(g,stake,won,stake*2,'High Card');},500)}; }
function setupColor(g,stake){ const colors=['Violett','Cyan','Grün','Gelb']; const target=colors[Math.floor(Math.random()*colors.length)]; $('#gameScreen').innerHTML=actionField(`<div style="text-align:center"><div style="font-size:34px;font-weight:900;margin-bottom:12px">${target}</div><div class="choice-grid">${colors.map(c=>`<button class="choice" data-cc="${c}">${c}</button>`).join('')}</div></div>`,stake,'Treffer = 2×');document.querySelectorAll('[data-cc]').forEach(b=>b.onclick=()=>gameResult(g,stake,b.dataset.cc===target,stake*2,'Color Burst')); }
function setupMath(g,stake){ const a=1+Math.floor(Math.random()*12),b=1+Math.floor(Math.random()*12),op=Math.random()<.5?'+':'×',ans=op==='+'?a+b:a*b; $('#gameScreen').innerHTML=actionField(`<div class="math-card"><div class="question">${a} ${op} ${b} = ?</div><div class="flex" style="justify-content:center"><input id="mathAnswer" type="number" class="search" style="max-width:180px" placeholder="Antwort"><button class="btn" id="mathSubmit">Prüfen</button></div></div>`,stake,'Richtig = 3×');$('#mathSubmit').onclick=()=>{const ok=Number($('#mathAnswer').value)===ans;gameResult(g,stake,ok,stake*3,'Quick Math')}; }
function setupReaction(g,stake){ $('#gameScreen').innerHTML=actionField(`<div id="reactionPad" class="reaction-pad">Warte…</div>`,stake,'Schnell = 3× · Fehlklick = 0×'); const pad=$('#reactionPad'); let ready=false; const delay=900+Math.random()*2300;timers.push(setTimeout(()=>{ready=true;pad.textContent='JETZT!';pad.style.background='rgba(65,227,165,.24)';pad.onclick=()=>gameResult(g,stake,true,stake*3,'Reaction Rush')},delay)); pad.onclick=()=>{if(!ready){clearTimers();gameResult(g,stake,false,0,'Zu früh!')}}; }
function setupTiming(g,stake){ $('#gameScreen').innerHTML=actionField(`<div style="text-align:center"><div class="timer-display" id="timerDisplay">0.00</div><div class="progress" style="width:min(420px,100%);margin:14px auto"><div id="timingBar" style="width:0"></div></div><button class="btn" id="timingBtn">START</button></div>`,stake,'Ziel: 5,00 s · Zone ±0,12 = 5×'); let start=0,run=false; const btn=$('#timingBtn'); btn.onclick=()=>{if(!run){run=true;start=performance.now();btn.textContent='STOP'; const tick=setInterval(()=>{const s=(performance.now()-start)/1000;$('#timerDisplay').textContent=s.toFixed(2);$('#timingBar').style.width=`${Math.min(100,s/5*100)}%`},20);timers.push(tick);}else{run=false;clearTimers();const s=(performance.now()-start)/1000;const won=Math.abs(s-5)<=.12;gameResult(g,stake,won,won?stake*5:0,'Stop at 5s')}}; }
function setupMemory(g,stake){ const vals=['◆','●','▲','★','◆','●','▲','★']; vals.sort(()=>Math.random()-.5); $('#gameScreen').innerHTML=actionField(`<div class="memory-grid">${vals.map((v,i)=>`<button class="memory-tile" data-mem="${i}">${v}</button>`).join('')}</div>`,stake,'Alle 4 Paare = 4×'); let opened=[],matched=0; const tiles=[...document.querySelectorAll('[data-mem]')]; tiles.forEach(t=>t.onclick=()=>{if(opened.includes(t)||t.classList.contains('revealed')||opened.length>=2)return;t.classList.add('revealed');opened.push(t);if(opened.length===2){const [a,b]=opened;if(a.textContent===b.textContent){matched++;opened=[];if(matched===4)setTimeout(()=>gameResult(g,stake,true,stake*4,'Memory Match'),250)}else timers.push(setTimeout(()=>{a.classList.remove('revealed');b.classList.remove('revealed');opened=[]},500))}}); }
function setupNumber(g,stake){const secret=1+Math.floor(Math.random()*20);$('#gameScreen').innerHTML=actionField(`<div style="text-align:center;width:100%"><div class="big-number" id="guessHint">?</div><div class="flex" style="justify-content:center"><input id="guessInput" type="number" min="1" max="20" class="search" style="max-width:150px" placeholder="1–20"><button class="btn" id="guessBtn">Raten</button></div><div class="small-note" id="guessText" style="margin-top:12px">Du hast 5 Versuche.</div></div>`,stake,'Treffer = 5×');let tries=0;$('#guessBtn').onclick=()=>{tries++;const n=Number($('#guessInput').value);if(n===secret)return gameResult(g,stake,true,stake*5,'Number Hunt');if(tries>=5)return gameResult(g,stake,false,0,'Number Hunt');$('#guessText').textContent=n<secret?'Höher ↑':'Tiefer ↓';};}
function setupHigherLower(g,stake){let cur=1+Math.floor(Math.random()*13);const next=1+Math.floor(Math.random()*13);$('#gameScreen').innerHTML=actionField(`<div style="text-align:center"><div class="small-note">AKTUELLE KARTE</div><div class="big-number">${cur}</div><div class="choice-grid"><button class="choice" data-hl="higher">Higher ↑</button><button class="choice" data-hl="lower">Lower ↓</button></div></div>`,stake,'Richtig = 2.5×');document.querySelectorAll('[data-hl]').forEach(b=>b.onclick=()=>{const ok=b.dataset.hl==='higher'?next>cur:next<cur;gameResult(g,stake,ok,Math.floor(stake*2.5),'Higher / Lower')});}
function setupWheel(g,stake){$('#gameScreen').innerHTML=actionField(`<div style="text-align:center"><div class="wheel" id="wheel"></div><button class="btn" id="spinWheel" style="margin-top:18px">Drehen</button></div>`,stake,'Top-Felder bis 6×');$('#spinWheel').onclick=()=>{const wheel=$('#wheel');wheel.style.transform=`rotate(${1080+Math.floor(Math.random()*360)}deg)`;setTimeout(()=>{const r=Math.random();const mult=r<.08?6:r<.24?3:r<.55?2:0;gameResult(g,stake,mult>0,stake*mult,'Wheelstorm')},1700)};}
function setupSlots(g,stake){const syms=['🍒','🍋','🍇','⭐','💎','7️⃣']; $('#gameScreen').innerHTML=actionField(`<div class="slot-reels"><div class="reel" id="reel1">?</div><div class="reel" id="reel2">?</div><div class="reel" id="reel3">?</div></div><div style="text-align:center"><button class="btn" id="spinSlots" style="margin-top:18px">SPIN</button></div>`,stake,'3 gleiche = 8× · 2 gleiche = 2×');$('#spinSlots').onclick=()=>{let out=[0,1,2].map(()=>syms[Math.floor(Math.random()*syms.length)]); ['reel1','reel2','reel3'].forEach((id,i)=>{let el=$('#'+id),idx=0; const iv=setInterval(()=>{el.textContent=syms[idx++%syms.length]},60);timers.push(iv)}); setTimeout(()=>{clearTimers();out.forEach((x,i)=>$('#reel'+(i+1)).textContent=x);let same=out[0]===out[1]&&out[1]===out[2],pair=new Set(out).size===2;const mult=same?8:pair?2:0;gameResult(g,stake,mult>0,stake*mult,g.name)},650)};}
function setupBlackjack(g,stake){let player=[drawCard(),drawCard()],dealer=[drawCard(),drawCard()];$('#gameScreen').innerHTML=actionField(`<div class="grid-2"><div class="kpi"><small>DU</small><strong id="pHand">${sum(player)}</strong><span class="small-note">${player.join(' · ')}</span></div><div class="kpi"><small>BOT</small><strong id="dHand">${dealer[0]} · ?</strong><span class="small-note">Eine Karte verdeckt</span></div></div><div class="flex" style="justify-content:center"><button class="btn" id="hitBtn">Hit</button><button class="btn secondary" id="standBtn">Stand</button></div>`,stake,'21 = 3× · >21 = Lose');let done=false;$('#hitBtn').onclick=()=>{if(done)return;player.push(drawCard());$('#pHand').textContent=sum(player);if(sum(player)>21){done=true;gameResult(g,stake,false,0,'Bust')}else if(sum(player)===21){done=true;gameResult(g,stake,true,stake*3,'Blackjack Lite')}};$('#standBtn').onclick=()=>{if(done)return;done=true;let ds=sum(dealer);while(ds<17){dealer.push(drawCard());ds=sum(dealer)}$('#dHand').textContent=ds;if(ds>21||sum(player)>ds)gameResult(g,stake,true,stake*2,'Blackjack Lite');else gameResult(g,stake,false,0,'Blackjack Lite')};}
function drawCard(){return Math.floor(Math.random()*10)+2} function sum(arr){return arr.reduce((a,b)=>a+b,0)}
function setupDraw(g,stake){const cards=Array.from({length:5},()=>1+Math.floor(Math.random()*13)); const counts=cards.reduce((a,x)=>(a[x]=(a[x]||0)+1,a),{}); const pair=Object.values(counts).some(v=>v>=2);const trip=Object.values(counts).some(v=>v>=3);$('#gameScreen').innerHTML=actionField(`<div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap">${cards.map(c=>`<div class="reel" style="width:65px;height:80px;font-size:22px">${c}</div>`).join('')}</div><div class="small-note" style="text-align:center">${trip?'Triple!':pair?'Pair gefunden':'Kein Match'}</div><button class="btn" id="drawResolve">Aufdecken</button>`,stake,'Pair = 2× · Triple = 4×');$('#drawResolve').onclick=()=>gameResult(g,stake,pair,stake*(trip?4:2),'Card Draw');}
function setupLadder(g,stake){let level=0;$('#gameScreen').innerHTML=actionField(`<div style="width:min(440px,100%);text-align:center"><div class="big-number" id="ladderLv">0</div><div class="progress"><div id="ladderBar" style="width:0"></div></div><div class="flex" style="justify-content:center;margin-top:14px"><button class="btn" id="climb">Climb</button><button class="btn secondary" id="cashout">Stop</button></div><div class="small-note" id="ladderText">Jede Stufe: 65% weiter, sonst Ende.</div></div>`,stake,'Max 6×');$('#climb').onclick=()=>{if(level>=6)return;if(Math.random()<.65){level++;$('#ladderLv').textContent=level;$('#ladderBar').style.width=`${level/6*100}%`;if(level===6)gameResult(g,stake,true,stake*6,'Ladders');}else{gameResult(g,stake,false,0,'Ladders');}};$('#cashout').onclick=()=>{if(level>0){gameResult(g,stake,true,Math.floor(stake*(1+level)),`Cashout Stufe ${level}`)}else{gameResult(g,stake,false,0,'Cashout')}};}
function setupCups(g,stake){const correct=1+Math.floor(Math.random()*3);$('#gameScreen').innerHTML=actionField(`<div style="display:flex;gap:16px;justify-content:center">${[1,2,3].map(i=>`<button class="choice" style="font-size:36px;padding:24px" data-cup="${i}">🥤</button>`).join('')}</div>`,stake,'Richtig = 3×');document.querySelectorAll('[data-cup]').forEach(b=>b.onclick=()=>gameResult(g,stake,Number(b.dataset.cup)===correct,stake*3,'Safe Pick'));}
function setupDoors(g,stake){const correct=1+Math.floor(Math.random()*3);$('#gameScreen').innerHTML=actionField(`<div style="display:flex;gap:12px;justify-content:center">${[1,2,3].map(i=>`<button class="choice" style="font-size:28px" data-door="${i}">🚪 ${i}</button>`).join('')}</div>`,stake,'Treasure = 3×');document.querySelectorAll('[data-door]').forEach(b=>b.onclick=()=>gameResult(g,stake,Number(b.dataset.door)===correct,stake*3,'Three Doors'));}
function setupGridPick(g,stake){const correct=Math.floor(Math.random()*16);$('#gameScreen').innerHTML=actionField(`<div class="memory-grid">${Array.from({length:16},(_,i)=>`<button class="memory-tile" style="color:#aab3c9" data-gp="${i}">+</button>`).join('')}</div>`,stake,'Treasure = 4×');document.querySelectorAll('[data-gp]').forEach(b=>b.onclick=()=>{const good=Number(b.dataset.gp)===correct;b.textContent=good?'💎':'×';gameResult(g,stake,good,stake*4,'Treasure Grid')});}
function setupMystery(g,stake){const vals=['+0','+0','+50','+120','×2','×4'];$('#gameScreen').innerHTML=actionField(`<div class="choice-grid">${vals.map((v,i)=>`<button class="choice" data-box="${i}">Mystery Box ${i+1}</button>`).join('')}</div>`,stake,'Box roll');document.querySelectorAll('[data-box]').forEach(b=>b.onclick=()=>{const v=vals[Number(b.dataset.box)];let payout=v.includes('×')?stake*Number(v.slice(1)):stake+Number(v.slice(1));let won=payout>stake;gameResult(g,stake,won,payout,`Mystery Box ${v}`)});}
function setupRocket(g,stake){let mult=1.0;$('#gameScreen').innerHTML=actionField(`<div style="text-align:center"><div class="timer-display" id="rocketMult">1.00×</div><button class="btn" id="rocketCash">Cash out</button><div class="small-note" id="rocketHint">Auto-crash kann jederzeit eintreten.</div></div>`,stake,'Cashout = Einsatz × Multiplikator');const crash=1.25+Math.random()*4.5;const iv=setInterval(()=>{mult+=.07;$('#rocketMult').textContent=mult.toFixed(2)+'×';if(mult>=crash){clearInterval(iv);gameResult(g,stake,false,0,'Rocket Crash')}},120);timers.push(iv);$('#rocketCash').onclick=()=>{clearTimers();gameResult(g,stake,true,Math.floor(stake*mult),'Rocket Cashout')};}
function setupClicker(g,stake){let count=0;$('#gameScreen').innerHTML=actionField(`<div style="text-align:center"><div class="big-number" id="tapCount">0</div><button class="reaction-pad" id="tapBtn" style="width:240px;height:140px">TAP!</button></div>`,stake,'8 Sekunden · 45+ taps = 4×');let end=Date.now()+8000;const iv=setInterval(()=>{const left=end-Date.now();if(left<=0){clearInterval(iv);const c=count;gameResult(g,stake,c>=45,c>=45?stake*4:0,'Tap Frenzy');}else $('#tapBtn').textContent=`TAP! ${(left/1000).toFixed(1)}s`},50);timers.push(iv);$('#tapBtn').onclick=()=>{count++;$('#tapCount').textContent=count};}
function setupClickTarget(g,stake){let hits=0;const total=7;$('#gameScreen').innerHTML=actionField(`<div id="targetArea" class="playfield" style="min-height:280px"><button id="targetBtn" style="position:absolute;width:54px;height:54px;border-radius:50%;border:0;background:linear-gradient(135deg,#29d7ff,#8b5cf6);box-shadow:0 0 30px rgba(41,215,255,.45);color:#fff;font-weight:900">◎</button></div><div class="small-note" id="targetText">0 / ${total}</div>`,stake,'7 Hits = 5×');const area=$('#targetArea');const move=()=>{const x=Math.random()*75+10,y=Math.random()*65+15;$('#targetBtn').style.left=x+'%';$('#targetBtn').style.top=y+'%'};move();$('#targetBtn').onclick=()=>{hits++;$('#targetText').textContent=`${hits} / ${total}`;if(hits>=total)gameResult(g,stake,true,stake*5,'Target Lock');else move()};}
function setupGridReflex(g,stake){const n=25;$('#gameScreen').innerHTML=actionField(`<div id="reflexGrid" style="display:grid;grid-template-columns:repeat(5,1fr);gap:6px;width:min(360px,100%)">${Array.from({length:n},(_,i)=>`<button class="memory-tile" style="min-height:54px" data-gr="${i}">•</button>`).join('')}</div>`,stake,'Treffer in < 2.5s = 4×');const target=Math.floor(Math.random()*n);let started=performance.now();document.querySelectorAll('[data-gr]').forEach(b=>b.onclick=()=>{if(Number(b.dataset.gr)===target){const secs=(performance.now()-started)/1000;gameResult(g,stake,secs<2.5,secs<2.5?stake*4:0,'Grid Reflex')}else{b.textContent='×';b.disabled=true}});}
function setupSequence(g,stake){const code=Array.from({length:4},()=>Math.floor(Math.random()*10)).join('');$('#gameScreen').innerHTML=actionField(`<div style="text-align:center"><div class="big-number" id="seqShow">${code}</div><div class="small-note" id="seqInfo">Merke dir den Code…</div><button class="btn" id="seqStart" style="margin-top:13px">Ich bin bereit</button></div>`,stake,'Exakt = 5×');$('#seqStart').onclick=()=>{$('#seqShow').textContent='••••';$('#seqInfo').innerHTML=`<input id="seqInput" class="search" style="max-width:190px" placeholder="4 Ziffern"><button class="btn" id="seqSubmit">Prüfen</button>`;$('#seqSubmit').onclick=()=>gameResult(g,stake,$('#seqInput').value===code,stake*5,'Sequence')};}
function setupColorCode(g,stake){const cols=['cyan','pink','green','gold'];const code=Array.from({length:3},()=>cols[Math.floor(Math.random()*cols.length)]);$('#gameScreen').innerHTML=actionField(`<div style="display:flex;gap:8px;justify-content:center" id="ccSequence">${code.map(c=>`<span class="game-icon">${c}</span>`).join('')}</div><div class="choice-grid" style="margin-top:16px">${cols.map(c=>`<button class="choice" data-colorcode="${c}">${c}</button>`).join('')}</div><div class="small-note" id="ccInfo">Merke die Sequenz — sie wird gleich verborgen.</div>`,stake,'3 Farben korrekt = 5×');let pos=0;timers.push(setTimeout(()=>{document.querySelector('#ccSequence').innerHTML=code.map(()=>`<span class="game-icon">?</span>`).join('');$('#ccInfo').textContent='Jetzt die Sequenz wiederholen.'},1300));document.querySelectorAll('[data-colorcode]').forEach(b=>b.onclick=()=>{if(b.dataset.colorcode!==code[pos])return gameResult(g,stake,false,0,'Color Code');pos++;if(pos===3)gameResult(g,stake,true,stake*5,'Color Code')});}
function setupCipher(g,stake){const words=['NOVA','PIXEL','JOKER','MOON','NEON'];const word=words[Math.floor(Math.random()*words.length)];const shift=1;const cipher=word.split('').map(ch=>String.fromCharCode(65+(ch.charCodeAt(0)-65+shift)%26)).join('');$('#gameScreen').innerHTML=actionField(`<div style="text-align:center"><div class="eyebrow">SHIFT -1</div><div class="big-number" style="font-size:52px">${cipher}</div><div class="flex" style="justify-content:center"><input id="cipherInput" class="search" style="max-width:180px" placeholder="Antwort"><button class="btn" id="cipherBtn">Decode</button></div></div>`,stake,'Exakt = 4×');$('#cipherBtn').onclick=()=>gameResult(g,stake,$('#cipherInput').value.trim().toUpperCase()===word,stake*4,'Cipher Dash');}
function setupWord(g,stake){const words=['GALAXY','ARCADE','FRIENDS','SPARK','ROCKET','MOSAIC'];const word=words[Math.floor(Math.random()*words.length)];$('#gameScreen').innerHTML=actionField(`<div style="text-align:center"><div class="big-number" style="font-size:46px">${word}</div><div class="flex" style="justify-content:center"><input id="wordInput" class="search" style="max-width:240px" placeholder="abtippen"><button class="btn" id="wordBtn">Check</button></div></div>`,stake,'Exakt = 3×');$('#wordBtn').onclick=()=>gameResult(g,stake,$('#wordInput').value.trim().toUpperCase()===word,stake*3,'Word Rush');}
function setupPattern(g,stake){const sets=[{seq:['▲','●','▲','●','▲'],correct:'●',choices:['●','■','◆']},{seq:['◆','◆','●','◆','◆'],correct:'●',choices:['●','★','▲']},{seq:['★','☆','★','☆','★'],correct:'☆',choices:['☆','●','◆']}];const s=sets[Math.floor(Math.random()*sets.length)];$('#gameScreen').innerHTML=actionField(`<div style="text-align:center"><div style="font-size:40px;letter-spacing:12px">${s.seq.join(' ')} ?</div><div class="choice-grid">${s.choices.map(c=>`<button class="choice" data-pattern="${c}">${c}</button>`).join('')}</div></div>`,stake,'Richtig = 4×');document.querySelectorAll('[data-pattern]').forEach(b=>b.onclick=()=>gameResult(g,stake,b.dataset.pattern===s.correct,stake*4,'Pattern IQ'));}
function setupCombo(g,stake){let hits=0,last=0;$('#gameScreen').innerHTML=actionField(`<div style="text-align:center"><div class="big-number" id="comboCount">0</div><div class="small-note">Klicke 5× innerhalb von 1,5 s.</div><button class="btn" id="comboBtn">BUILD COMBO</button></div>`,stake,'5-hit combo = 5×');$('#comboBtn').onclick=()=>{const now=Date.now();if(last && now-last>1500)hits=0;last=now;hits++;$('#comboCount').textContent=hits;if(hits>=5)gameResult(g,stake,true,stake*5,'Combo Builder')};}

let adminTab='overview'; window.adminTab='overview';
function bindGlobal() {
  document.addEventListener('click', e=>{
    const routeEl=e.target.closest('[data-route]'); if(routeEl){ currentRoute=routeEl.dataset.route; render(); return; }
    const gameEl=e.target.closest('[data-game]'); if(gameEl){ openGame(Number(gameEl.dataset.game)); return; }
    const fav=e.target.closest('[data-fav]'); if(fav){ const id=Number(fav.dataset.fav); state.favorites=state.favorites.includes(id)?state.favorites.filter(x=>x!==id):[...state.favorites,id]; saveState(); render(); return; }
    const filter=e.target.closest('[data-filter]'); if(filter){ activeFilter=filter.dataset.filter; render(); return; }
    const ch=e.target.closest('[data-channel]'); if(ch){state.chatChannel=ch.dataset.channel;saveState();render();return;}
    const chatUser=e.target.closest('[data-chat-user]'); if(chatUser){currentRoute='chat';render();setTimeout(()=>{$('#chatInput').value='@'+chatUser.dataset.chatUser+' ';$('#chatInput').focus()},0);return;}
    const claim=e.target.closest('[data-claim-mission]');if(claim){const m=state.missions.find(x=>x.id===Number(claim.dataset.claimMission));if(m&&!m.done){m.done=true;state.wallet+=m.reward;saveState();toast('Quest reward',`+${m.reward} FC`,'✦');render();}return;}
  });
  $('#dailyBonusBtn').onclick=claimDaily;
  $('#resetBalanceBtn').onclick=()=>{state.wallet=10000;saveState();toast('Wallet reset','10.000 FC gesetzt.','↺');render();};
  $('#notifyBtn').onclick=()=>{toast('Benachrichtigungen',`${state.notifications} neue Room Events.`,'♧');state.notifications=0;saveState();};
  $('#modalBackdrop').onclick=e=>{if(e.target.id==='modalBackdrop')closeModal();};
  document.addEventListener('input',e=>{if(e.target.id==='gameSearch'){gameSearch=e.target.value;const list=games.filter(g=>!state.disabledGames.includes(g.id)&& (activeFilter==='Alle'||g.category===activeFilter) && (g.name+' '+g.desc).toLowerCase().includes(gameSearch.toLowerCase()));$('#gamesGrid').innerHTML=list.map(gameCardHtml).join('');}});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!$('#modalBackdrop').classList.contains('hidden'))closeModal();});
  document.addEventListener('click',e=>{const ev=e.target.closest('[data-event]'); if(ev){const i=Number(ev.dataset.event);if(!state.eventClaimed.includes(i)){state.eventClaimed.push(i);state.wallet+=250;state.tickets+=1;saveState();toast('Event reward','+250 FC · +1 Ticket','⚡');render();}return;} const buy=e.target.closest('[data-buy]'); if(buy){const id=buy.dataset.buy,price=Number(buy.dataset.price);if(state.gems<price)return toast('Nicht genug Gems','Spiele Games und schalte Rewards frei.','!');state.gems-=price;state.inventory.push(id);state.shopPurchases.push(id);saveState();toast('Item freigeschaltet',id,'◈');render();return;} if(e.target.id==='copyRoomBtn')navigator.clipboard?.writeText(state.activeRoom).then(()=>toast('Room-Code kopiert',state.activeRoom,'⌘')); if(e.target.id==='newRoomBtn')newRoom(); if(e.target.id==='joinRoomBtn'){const code=prompt('Room-Code eingeben:',state.activeRoom);if(code){state.activeRoom=code.toUpperCase().slice(0,12);saveState();addLog(`ROOM joined ${state.activeRoom}`);toast('Room beigetreten',state.activeRoom,'◉');render();}} if(e.target.id==='addFriendBtn'){const val=$('#friendInput')?.value.trim(); if(val){const name=val.replace(/^@/,'').slice(0,18);state.friends.push({id:Date.now(),name,tag:'@'+name,avatar:name[0]?.toUpperCase()||'F',status:'invited',level:1,online:false});saveState();toast('Anfrage gesendet',`@${name}`,'♥');render();}} if(e.target.id==='sendChatBtn')sendChat(); if(e.target.id==='saveProfileBtn')saveProfile(); if(e.target.id==='randomAvatarBtn')randomAvatar(); if(e.target.id==='adminUnlockBtn')unlockAdmin(); if(e.target.id==='setWalletBtn'){state.wallet=Math.max(0,Number($('#adminWallet').value)||0);addLog(`ECONOMY wallet set ${state.wallet}`);saveState();toast('Wallet gesetzt',`${fmt(state.wallet)} FC`,'⌘');render();} if(e.target.id==='fullResetBtn')fullReset(); if(e.target.id==='grant100Btn'||e.target.id==='grant1000Btn'){state.wallet+=e.target.id==='grant100Btn'?100:1000;addLog(`ECONOMY grant ${e.target.id==='grant100Btn'?100:1000}`);saveState();toast('Grant',`${e.target.id==='grant100Btn'?100:1000} FC`,'+');render();} if(e.target.id==='rotateRoomBtn')newRoom(); if(e.target.id==='logoutAdminBtn'){state.adminUnlocked=false;saveState();render();} if(e.target.id==='clearLogsBtn'){state.adminLogs=[];saveState();render();}});
  document.addEventListener('change',e=>{if(e.target.id==='themeSelect'){state.settings.theme=e.target.value;document.documentElement.dataset.theme=e.target.value;saveState();toast('Theme gespeichert',e.target.value,'◐');}});
  document.addEventListener('click',e=>{const tab=e.target.closest('[data-admin-tab]'); if(tab){window.adminTab=tab.dataset.adminTab;render();} const toggle=e.target.closest('[data-toggle]'); if(toggle){const id=toggle.dataset.toggle;if(id==='soundToggle')state.settings.sounds=!state.settings.sounds;if(id==='notifToggle')state.settings.notifications=!state.settings.notifications;if(id==='compactToggle')state.settings.compact=!state.settings.compact;saveState();render();} const dis=e.target.closest('[data-disable-game]'); if(dis){const id=Number(dis.dataset.disableGame);state.disabledGames=state.disabledGames.includes(id)?state.disabledGames.filter(x=>x!==id):[...state.disabledGames,id];addLog(`GAME ${gameById(id).name} ${state.disabledGames.includes(id)?'disabled':'enabled'}`);saveState();render();} const mute=e.target.closest('[data-mute]');if(mute){addLog(`PLAYER muted ${mute.dataset.mute}`);toast('Muted',mute.dataset.mute,'!');}});
}
function claimDaily(){const today=new Date().toISOString().slice(0,10);if(state.dailyClaim===today)return toast('Daily schon abgeholt','Morgen wartet der nächste Bonus.','↺');state.dailyClaim=today;state.wallet+=350;state.missions[3].progress=1;saveState();toast('Daily Bonus',`+350 FC · Quest ready`,'✦');render();}
function newRoom(){state.activeRoom='FH-'+Math.random().toString(36).slice(2,6).toUpperCase()+Math.floor(Math.random()*9);addLog(`ROOM created ${state.activeRoom}`);saveState();toast('Neuer Room',state.activeRoom,'◉');render();}
function sendChat(){const input=$('#chatInput');const text=input?.value.trim();if(!text)return;state.chat.push({author:state.profile.name,avatar:state.profile.avatar,text,time:new Date().toLocaleTimeString('de-DE',{hour:'2-digit',minute:'2-digit'})});state.chat=state.chat.slice(-30);saveState();render();setTimeout(()=>{$('#chatMessages')?.scrollTo({top:99999,behavior:'smooth'});},0);}
function saveProfile(){state.profile.name=$('#profileName').value.trim()||'Alex';state.profile.handle=$('#profileHandle').value.trim()||'@alex';state.profile.bio=$('#profileBio').value.trim();state.profile.avatar=state.profile.name[0]?.toUpperCase()||'A';saveState();toast('Profil gespeichert','Die Änderungen gelten lokal.','✓');render();}
function randomAvatar(){const a='ABCDEFGHJKLMNPQRSTUVWXYZ';state.profile.avatar=a[Math.floor(Math.random()*a.length)];saveState();render();}
function unlockAdmin(){if($('#adminCode').value===ADMIN_CODE){state.adminUnlocked=true;addLog('ADMIN unlocked');saveState();toast('Admin unlocked','Demo-Konsole aktiv.','⌘');render();}else toast('Falscher Code','Für diese Demo: 2468','!');}
function fullReset(){if(!confirm('Lokale Demo wirklich zurücksetzen?'))return;state=structuredClone(initialState);saveState();toast('Demo reset','Startzustand wiederhergestellt.','↺');render();}

bindGlobal(); render();
