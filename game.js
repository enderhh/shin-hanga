const scene = document.querySelector('#scene');
const player = document.querySelector('#player');
const moveHint = document.querySelector('#move-hint');
const detailPanel = document.querySelector('#detail-panel');
const detailClose = document.querySelector('#detail-close');
const detailTitle = document.querySelector('#detail-title');
const detailKicker = document.querySelector('#detail-kicker');
const detailCopy = document.querySelector('#detail-copy');
const detailAction = document.querySelector('#detail-action');
const objectiveText = document.querySelector('#objective-text');
const weatherReadout = document.querySelector('#weather-readout');
const weatherButton = document.querySelector('#weather-button');
const sceneTitle = document.querySelector('#scene-title');
const sceneTime = document.querySelector('#scene-time');
const sceneDescription = document.querySelector('#scene-description');
const journalButton = document.querySelector('#journal-button');
const journalPanel = document.querySelector('#journal-panel');
const journalClose = document.querySelector('#journal-close');
const journalReturn = document.querySelector('#journal-return');
const journalList = document.querySelector('#journal-list');
const journalCount = document.querySelector('#journal-count');
const journalSummary = document.querySelector('#journal-summary');
const toast = document.querySelector('#toast');
const destinationMarker = document.querySelector('#destination-marker');

const state = {
  scene: 'station',
  clues: new Set(),
  detailClue: null,
  weatherCleared: false,
};

const locationData = {
  station: {
    label: 'Station platform',
    time: 'Early spring · 6:18 AM',
    description: 'A single train waits beyond the mist. Someone’s departure has been carefully crossed out.',
    weather: 'Misty dawn',
    player: { left: 55, bottom: 8, scale: 0.82 },
  },
  lanes: {
    label: 'Fishing lanes',
    time: 'Early spring · 7:03 AM',
    description: 'Rain darkens the lanes. Doors open just far enough for a rumour to escape.',
    weather: 'Soft rain',
    player: { left: 50, bottom: 6, scale: 0.96 },
  },
  seawall: {
    label: 'Seawall',
    time: 'Early spring · 7:46 AM',
    description: 'The harbour carries a message farther than anyone wants it to.',
    weather: 'A break in the clouds',
    player: { left: 48, bottom: 10, scale: 0.86 },
  },
};

const clues = {
  timetable: {
    title: 'A departure revised by hand',
    kicker: 'Station notice',
    text: 'The 6:10 coastal train is marked “held” in a firm, unfamiliar hand. Beneath it, one passenger’s name has been erased so carefully that the paper is thin.',
    note: 'The 6:10 train was held for a passenger whose name was erased from the timetable.',
    recordable: true,
  },
  porter: {
    title: 'The porter watched the sea',
    kicker: 'A brief conversation',
    text: 'He says the passenger never came through the gate. Before the bell, he saw a lamp blink twice along the seawall—an old signal no one is meant to use now.',
    recordable: false,
  },
  ticket: {
    title: 'A ticket with salt at its edge',
    kicker: 'Bench by the rails',
    text: 'The ticket is still dry except for a crescent of salt. Its destination is ordinary; the pencilled time on the back points to low tide.',
    recordable: false,
  },
  ledger: {
    title: 'A boat that did not return on paper',
    kicker: 'Delivery ledger',
    text: 'An entry for lamp oil has been crossed through, then written again for a boatman who never orders it. The delivery time is exactly one hour before low tide.',
    note: 'A false lamp-oil delivery was sent toward the seawall an hour before low tide.',
    recordable: true,
  },
  net: {
    title: 'The mended net is still wet',
    kicker: 'Net maker’s doorway',
    text: 'The mesh has been repaired with a careful blue thread. It is work from yesterday, not an old relic—a reminder that the town continues even while it watches.',
    recordable: false,
  },
  tea: {
    title: 'Three cups, one gone cold',
    kicker: 'Tea counter',
    text: 'Two cups are warm. The third has a skin of rainwater. Whoever left in a hurry had expected to be back before the kettle sang again.',
    recordable: false,
  },
  signal: {
    title: 'A lamp answering the sea',
    kicker: 'Old seawall signal',
    text: 'The shutter is set for two quick flashes, then dark. The same pattern is hidden in the timetable’s crossed-out line. It is not a warning; it is an invitation.',
    note: 'The old seawall lamp repeats the timetable’s two-flash pattern: a signal for low tide.',
    recordable: true,
  },
  keeper: {
    title: 'The keeper has not locked the door',
    kicker: 'Seawall shelter',
    text: 'A dry coat hangs inside beside a pair of boots facing outward. Someone is preparing to leave, not hiding from the weather.',
    recordable: false,
  },
  tide: {
    title: 'A staircase under the waterline',
    kicker: 'Harbour edge',
    text: 'Between two waves, stone steps appear below the seawall. They point toward a cave mouth that only the falling tide can uncover.',
    recordable: false,
  },
};

const sceneInteractions = {
  station: [
    { id: 'timetable', label: 'Timetable', aria: 'Inspect the altered timetable', approach: { left: 55, bottom: 10, scale: 0.74 } },
    { id: 'porter', label: 'Porter', aria: 'Speak to the station porter', approach: { left: 47, bottom: 12, scale: 0.7 } },
    { id: 'ticket', label: 'Ticket', aria: 'Inspect the ticket on the bench', approach: { left: 72, bottom: 8, scale: 0.78 } },
  ],
  lanes: [
    { id: 'ledger', label: 'Ledger', aria: 'Inspect the delivery ledger', approach: { left: 31, bottom: 8, scale: 0.9 } },
    { id: 'net', label: 'Net maker', aria: 'Inspect the net maker’s doorway', approach: { left: 49, bottom: 10, scale: 0.84 } },
    { id: 'tea', label: 'Tea counter', aria: 'Inspect the tea counter', approach: { left: 69, bottom: 8, scale: 0.9 } },
  ],
  seawall: [
    { id: 'keeper', label: 'Shelter', aria: 'Inspect the seawall shelter', approach: { left: 43, bottom: 14, scale: 0.74 } },
    { id: 'signal', label: 'Signal lamp', aria: 'Inspect the old seawall signal lamp', approach: { left: 60, bottom: 18, scale: 0.68 } },
    { id: 'tide', label: 'Tide steps', aria: 'Inspect the tide steps', approach: { left: 82, bottom: 12, scale: 0.8 } },
  ],
};

const hotspotButtons = [...document.querySelectorAll('.hotspot')];
const questOrder = ['timetable', 'ledger', 'signal'];
let interactionTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('is-visible');
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => toast.classList.remove('is-visible'), 2400);
}

function setPlayerPosition(left, bottom, explicitScale) {
  const safeLeft = Math.max(3, Math.min(91, left));
  const safeBottom = Math.max(2, Math.min(28, bottom));
  const scale = explicitScale ?? Math.max(0.66, Math.min(0.96, 1.08 - safeBottom * 0.02));
  player.style.left = `${safeLeft}%`;
  player.style.bottom = `${safeBottom}%`;
  player.style.setProperty('--player-scale', scale.toFixed(2));
}

function showDestination(point) {
  destinationMarker.style.left = `${point.x}%`;
  destinationMarker.style.top = `${point.y}%`;
  destinationMarker.classList.remove('is-visible');
  void destinationMarker.offsetWidth;
  destinationMarker.classList.add('is-visible');
}

function updateQuestPrompt() {
  const nextClue = questOrder[state.clues.size];
  const prompts = {
    timetable: 'Begin at the station. Examine the altered timetable.',
    ledger: 'A false delivery may be recorded in the fishing lanes. Find the ledger.',
    signal: 'The two-flash pattern leads to the old signal lamp on the seawall.',
  };
  objectiveText.textContent = prompts[nextClue] ?? 'The tide is falling. Follow the old signal below the seawall.';
}

function travelToInteraction(interaction) {
  window.clearTimeout(interactionTimer);
  closeDetail();
  setPlayerPosition(interaction.approach.left, interaction.approach.bottom, interaction.approach.scale);
  showDestination({ x: interaction.approach.left, y: 100 - interaction.approach.bottom });
  moveHint.textContent = `You walk over to the ${interaction.label.toLowerCase()}.`;
  interactionTimer = window.setTimeout(() => {
    openDetail(interaction.id);
    moveHint.textContent = 'Choose a marked point of interest.';
  }, 720);
}

function closeDetail() {
  detailPanel.classList.remove('is-open');
  state.detailClue = null;
  detailAction.hidden = true;
}

function openDetail(clueId) {
  const clue = clues[clueId];
  state.detailClue = clueId;
  detailKicker.textContent = clue.kicker;
  detailTitle.textContent = clue.title;
  detailCopy.textContent = clue.text;
  detailAction.hidden = !clue.recordable || state.clues.has(clueId) || clueId !== questOrder[state.clues.size];
  detailAction.textContent = state.clues.has(clueId) ? 'Recorded' : 'Record clue';
  detailPanel.classList.add('is-open');
}

function updateJournal() {
  journalCount.textContent = state.clues.size;
  journalCount.setAttribute('aria-label', `${state.clues.size} ${state.clues.size === 1 ? 'clue' : 'clues'}`);
  journalList.innerHTML = '';

  if (state.clues.size === 0) {
    journalList.innerHTML = '<li class="journal-empty">Nothing recorded yet. Look carefully, and let the town answer in its own time.</li>';
  } else {
    [...state.clues].forEach((clueId) => {
      const item = document.createElement('li');
      item.textContent = clues[clueId].note;
      journalList.append(item);
    });
  }

  if (state.clues.size === 3) {
    journalSummary.textContent = 'The clues agree: wait for low tide, then follow the old signal along the seawall.';
  } else {
    journalSummary.textContent = `${3 - state.clues.size} more ${3 - state.clues.size === 1 ? 'observation' : 'observations'} may explain why the signal lamp went dark.`;
  }
}

function recordCurrentClue() {
  const clueId = state.detailClue;
  if (!clueId || state.clues.has(clueId)) return;

  state.clues.add(clueId);
  updateJournal();
  detailAction.hidden = true;
  showToast('Recorded in your journal.');

  if (state.clues.size < 3) updateQuestPrompt();
  if (state.clues.size === 3) {
    objectiveText.textContent = 'The tide is falling. Follow the old signal along the seawall.';
    weatherButton.textContent = 'Clear the view';
    weatherButton.disabled = false;
    showToast('The three clues point to the seawall at low tide.');
  }
}

function changeScene(nextScene) {
  if (nextScene === state.scene) return;
  state.scene = nextScene;
  const data = locationData[nextScene];
  window.clearTimeout(interactionTimer);
  closeDetail();
  scene.dataset.scene = nextScene;
  scene.className = `scene scene--${nextScene}${state.weatherCleared ? ' is-clearing' : ''}`;
  scene.setAttribute('aria-label', `${data.label}, ${data.weather.toLowerCase()}`);
  sceneTitle.textContent = data.label;
  sceneTime.textContent = data.time;
  sceneDescription.textContent = data.description;
  weatherReadout.textContent = state.weatherCleared ? 'Clearing light' : data.weather;
  setPlayerPosition(data.player.left, data.player.bottom, data.player.scale);
  sceneInteractions[nextScene].forEach((interaction, index) => {
    const hotspot = hotspotButtons[index];
    hotspot.dataset.clue = interaction.id;
    hotspot.setAttribute('aria-label', interaction.aria);
    hotspot.querySelector('span:last-child').textContent = interaction.label;
  });
  document.querySelectorAll('.location-button').forEach((button) => button.classList.toggle('is-active', button.dataset.sceneTarget === nextScene));
  showToast(`${data.label}.`);
}

function clearWeather() {
  if (state.clues.size < 3) {
    showToast('The town is not ready to answer yet. Keep looking.');
    return;
  }
  state.weatherCleared = true;
  scene.classList.add('is-clearing');
  weatherReadout.textContent = 'Clearing light';
  weatherButton.textContent = 'Low tide revealed';
  weatherButton.disabled = true;
  objectiveText.textContent = 'A path below the seawall is visible. The preview ends at the tide caves.';
  showToast('The mist opens. A path appears below the seawall.');
}

scene.addEventListener('click', (event) => {
  if (event.target.closest('.hotspot') || event.target.closest('.player')) return;
  moveHint.textContent = 'The story moves through marked points of interest.';
  window.setTimeout(() => { moveHint.textContent = 'Choose a marked point of interest.'; }, 1700);
});

scene.addEventListener('click', (event) => {
  const hotspot = event.target.closest('.hotspot');
  if (!hotspot) return;
  event.stopPropagation();
  const interaction = sceneInteractions[state.scene].find(({ id }) => id === hotspot.dataset.clue);
  if (interaction) travelToInteraction(interaction);
});

document.querySelectorAll('.location-button').forEach((button) => {
  button.addEventListener('click', () => changeScene(button.dataset.sceneTarget));
});

detailAction.addEventListener('click', recordCurrentClue);
detailClose.addEventListener('click', closeDetail);
weatherButton.addEventListener('click', clearWeather);
journalButton.addEventListener('click', () => journalPanel.showModal());
journalClose.addEventListener('click', () => journalPanel.close());
journalReturn.addEventListener('click', () => journalPanel.close());
journalPanel.addEventListener('click', (event) => {
  if (event.target === journalPanel) journalPanel.close();
});

updateJournal();
updateQuestPrompt();
setPlayerPosition(locationData.station.player.left, locationData.station.player.bottom, locationData.station.player.scale);
