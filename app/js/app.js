// ============================================================
//  DÉCIBELS & DÉCOMBRES — Logique de l'application compagnon
// ============================================================
import { FAMILIES, MEMBERS, ACTIONS, SCORING } from "./data.js";

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

const famColor = (id) => FAMILIES[id].color;
const famList = Object.values(FAMILIES);

// ---------- État ----------
let state = load() || { players: [], started: false };

function save() { localStorage.setItem("dd_state", JSON.stringify(state)); }
function load() {
  try { return JSON.parse(localStorage.getItem("dd_state")); }
  catch { return null; }
}

// ---------- Navigation par onglets ----------
$$(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    $$(".tab").forEach((t) => t.classList.remove("active"));
    $$(".view").forEach((v) => v.classList.remove("active"));
    tab.classList.add("active");
    $(`#view-${tab.dataset.view}`).classList.add("active");
  });
});

// ---------- Setup : choix des familles ----------
let pickedFamilies = [];

function renderFamilyPicker() {
  const picker = $("#family-picker");
  picker.innerHTML = "";
  famList.forEach((f) => {
    const chip = document.createElement("button");
    chip.className = "fam-chip";
    chip.style.borderColor = "transparent";
    chip.innerHTML = `<div class="ico">${f.icon}</div><div class="nm">${f.name}</div>`;
    chip.addEventListener("click", () => {
      const idx = pickedFamilies.indexOf(f.id);
      if (idx >= 0) { pickedFamilies.splice(idx, 1); chip.classList.remove("selected"); chip.style.borderColor = "transparent"; }
      else { pickedFamilies.push(f.id); chip.classList.add("selected"); chip.style.borderColor = f.color; }
      $("#start-game").disabled = pickedFamilies.length < 2;
    });
    picker.appendChild(chip);
  });
}

$("#start-game").addEventListener("click", () => {
  state.players = pickedFamilies.map((id) => ({
    family: id, score: 0, members: 0, crashed: false,
  }));
  state.started = true;
  save();
  renderBoard();
});

$("#new-game").addEventListener("click", () => {
  if (!confirm("Recommencer une nouvelle partie ?")) return;
  state = { players: [], started: false };
  pickedFamilies = [];
  save();
  renderApp();
});

// ---------- Plateau : baromètres ----------
function addHistory(msg) {
  state.history = state.history || [];
  state.history.unshift(`${new Date().toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })} — ${msg}`);
  state.history = state.history.slice(0, 30);
  save();
  renderHistory();
}

function renderHistory() {
  const ul = $("#history-list");
  ul.innerHTML = "";
  (state.history || []).forEach((h) => {
    const li = document.createElement("li");
    li.textContent = h;
    ul.appendChild(li);
  });
}

$("#clear-history").addEventListener("click", () => {
  state.history = []; save(); renderHistory();
});

function changeScore(i, delta) {
  const p = state.players[i];
  const f = FAMILIES[p.family];
  p.score = Math.max(0, p.score + delta);
  if (delta > 0) addHistory(`${f.icon} ${f.name} : +${delta} → ${p.score}`);
  else if (delta < 0) addHistory(`${f.icon} ${f.name} : ${delta} → ${p.score}`);

  // Détection Crash Sonore
  if (p.score > SCORING.CRASH_THRESHOLD) {
    p.score = SCORING.CRASH_RESET;
    p.crashed = true;
    toast(`🚓 CRASH SONORE ! ${f.name} retombe à ${SCORING.CRASH_RESET} et défausse la moitié de ses membres.`);
    addHistory(`🚓 CRASH SONORE — ${f.name} retombe à ${SCORING.CRASH_RESET}`);
  }
  // Vérif victoire
  if (p.score >= SCORING.WIN) {
    if (p.members >= SCORING.MIN_MEMBERS_TO_WIN)
      toast(`🏆 ${f.name} remporte Chaos Street !`);
    else
      toast(`${f.name} atteint 100 mais doit avoir ${SCORING.MIN_MEMBERS_TO_WIN} membres en jeu !`);
  }
  save();
  renderBoard();
}

function changeMembers(i, delta) {
  const p = state.players[i];
  p.members = Math.max(0, Math.min(6, p.members + delta));
  save();
  renderBoard();
}

function renderBoard() {
  $("#setup").classList.add("hidden");
  $("#board").classList.remove("hidden");
  const wrap = $("#players");
  wrap.innerHTML = "";

  state.players.forEach((p, i) => {
    const f = FAMILIES[p.family];
    const pct = Math.min(100, p.score);
    const fill = p.score > SCORING.CRASH_THRESHOLD ? "var(--danger)"
      : p.score >= SCORING.POLICE_THRESHOLD ? "var(--sportifs)"
      : f.color;

    const el = document.createElement("div");
    el.className = "player" + (p.crashed ? " crash" : "");
    el.style.borderLeftColor = f.color;
    el.innerHTML = `
      <div class="player-head">
        <span class="ico">${f.icon}</span>
        <span class="nm">${f.name}</span>
        <span class="score">${p.score}</span>
      </div>
      <div class="barre">
        <div class="barre-fill" style="width:${pct}%;background:${fill}"></div>
        <div class="barre-mark" style="left:${SCORING.CRASH_THRESHOLD}%"></div>
      </div>
      <div class="player-controls">
        <button data-act="m-2">-2</button>
        <button data-act="m-1">-1</button>
        <button data-act="p1">+1</button>
        <button data-act="p3">+3</button>
        <button data-act="p5">+5</button>
        <button data-act="police">🚓 -20</button>
      </div>
      <div class="player-meta">
        Membres en jeu : <strong>${p.members}</strong> / 6
        <button data-act="mem-1" class="btn-tiny">−</button>
        <button data-act="mem+1" class="btn-tiny">+</button>
        ${p.members >= 3 ? ` · ⚡ Pouvoir de Quartier actif` : ""}
        ${p.crashed ? ` · 🚓 a crashé` : ""}
      </div>
    `;
    el.querySelector('[data-act="m-2"]').onclick = () => changeScore(i, -2);
    el.querySelector('[data-act="m-1"]').onclick = () => changeScore(i, -1);
    el.querySelector('[data-act="p1"]').onclick = () => changeScore(i, 1);
    el.querySelector('[data-act="p3"]').onclick = () => changeScore(i, 3);
    el.querySelector('[data-act="p5"]').onclick = () => changeScore(i, 5);
    el.querySelector('[data-act="police"]').onclick = () => changeScore(i, -SCORING.POLICE_FINE);
    el.querySelector('[data-act="mem-1"]').onclick = () => changeMembers(i, -1);
    el.querySelector('[data-act="mem+1"]').onclick = () => changeMembers(i, 1);
    wrap.appendChild(el);
  });
  renderHistory();
}

// ---------- Aléas ----------
$("#draw-action").addEventListener("click", () => {
  const a = ACTIONS[Math.floor(Math.random() * ACTIONS.length)];
  const card = $("#aleas-card");
  card.classList.remove("empty");
  card.innerHTML = `<div class="a-name">⚡ ${a.nom}</div><div class="a-eff">${a.effet}</div>`;
});

// ---------- Galerie de cartes ----------
let cardFilter = "all";
function renderFilter() {
  const wrap = $("#family-filter");
  wrap.innerHTML = "";
  const all = { id: "all", icon: "🎴", name: "Toutes" };
  [all, ...famList].forEach((f) => {
    const chip = document.createElement("button");
    chip.className = "fam-filter-chip" + (cardFilter === f.id ? " active" : "");
    chip.innerHTML = `${f.icon} ${f.id === "all" ? "Toutes" : f.name.replace("Les ", "")}`;
    if (f.id !== "all") chip.style.borderColor = cardFilter === f.id ? f.color : "transparent";
    chip.onclick = () => { cardFilter = f.id; renderFilter(); renderCards(); };
    wrap.appendChild(chip);
  });
}

function renderCards() {
  const grid = $("#cards-grid");
  grid.innerHTML = "";
  MEMBERS.filter((m) => cardFilter === "all" || m.family === cardFilter).forEach((m) => {
    const f = FAMILIES[m.family];
    const slug = m.nom.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
    const el = document.createElement("div");
    el.className = "gcard";
    el.style.borderTopColor = f.color;
    el.innerHTML = `
      <div class="thumb" style="background-image:url('assets/cards/${m.family}/${slug}.png')">${f.icon}</div>
      <div class="body">
        <div class="surnom">${m.surnom}</div>
        <div class="nom">${m.nom} · ${m.role}</div>
        <div class="pw"><b>EN JEU :</b> ${m.enJeu}</div>
        <div class="cb"><b>COUP BAS :</b> ${m.coupBas}</div>
      </div>`;
    grid.appendChild(el);
  });
}

// ---------- Toast ----------
let toastTimer;
function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 3500);
}

// ---------- Rendu global ----------
function renderApp() {
  if (state.started && state.players.length) {
    renderBoard();
  } else {
    $("#setup").classList.remove("hidden");
    $("#board").classList.add("hidden");
    renderFamilyPicker();
  }
  renderFilter();
  renderCards();
}

renderApp();

// ---------- Service worker ----------
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  });
}
