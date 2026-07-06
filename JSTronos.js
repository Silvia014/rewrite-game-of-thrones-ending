// ---------------------------------------------------------------
// Reescribe el final — lógica del cuestionario
// ---------------------------------------------------------------
// Cómo añadir tus propios vídeos o imágenes:
// En el objeto ENDINGS de más abajo, cambia la propiedad `media`
// de cada final. Por defecto se usa una ilustración SVG generada
// aquí mismo (sin material con derechos de autor). Para usar tu
// propio archivo, coloca el fichero en /assets/endings/ y cambia:
//
//   media: { type: "svg", render: sigilFuego }
// por:
//   media: { type: "video", src: "/assets/endings/fuego.mp4" }
//   media: { type: "image", src: "/assets/endings/fuego.jpg" }
// ---------------------------------------------------------------

const SIGILS = {
  fuego: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M12 2c1 3-2 4-2 7a3 3 0 0 0 6 0c0-1-.5-2-1-2 1 2 0 4-1.5 4A2.5 2.5 0 0 1 11 8.5C11 5.5 12 4 12 2Z"/><path d="M8 14a4 4 0 1 0 8 0c0-2-2-3-2-5"/></svg>`,
  hielo: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M12 2v20M4 7l16 10M20 7 4 17"/></svg>`,
  equilibrio: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M12 2v20"/><path d="M4 6h16M6 6l-3 6a4 4 0 0 0 8 0L8 6M18 6l-3 6a4 4 0 0 0 8 0l-3-6"/></svg>`,
  sombra: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="2.4" fill="currentColor" stroke="none"/></svg>`,
};

const QUESTIONS = [
  {
    tag: "El trono",
    text: "Alguien tiene que gobernar Poniente. ¿Cómo llegas al poder?",
    options: [
      { label: "Lo tomo por la fuerza, cueste lo que cueste.", key: "fuego" },
      { label: "Espero, resisto, y me lo gano con paciencia.", key: "hielo" },
      { label: "Formo una alianza que nadie creía posible.", key: "equilibrio" },
      { label: "Dejo que otros crean que gobiernan mientras yo decido.", key: "sombra" },
    ],
  },
  {
    tag: "La guerra",
    text: "Tu ejército está a punto de perder una batalla decisiva. ¿Qué haces?",
    options: [
      { label: "Ataco primero, sin esperar refuerzos.", key: "fuego" },
      { label: "Ordeno una retirada táctica y guardo fuerzas.", key: "hielo" },
      { label: "Negocio una tregua con el enemigo de mi enemigo.", key: "equilibrio" },
      { label: "Dejo correr un rumor que gana la guerra sin luchar.", key: "sombra" },
    ],
  },
  {
    tag: "La lealtad",
    text: "Un consejero te traiciona. ¿Cómo respondes?",
    options: [
      { label: "Ejecución pública, como advertencia para el resto.", key: "fuego" },
      { label: "Destierro silencioso; no merece ni mi ira.", key: "hielo" },
      { label: "Le doy una segunda oportunidad, vigilada de cerca.", key: "equilibrio" },
      { label: "Lo dejo vivir, pero ahora trabaja para mí sin saberlo.", key: "sombra" },
    ],
  },
  {
    tag: "El pueblo",
    text: "El invierno ha dejado a la gente sin grano. ¿Qué decides?",
    options: [
      { label: "Quemo las reservas de los nobles que acaparan.", key: "fuego" },
      { label: "Raciono con mano dura; nadie pasará hambre por igual.", key: "hielo" },
      { label: "Reparto entre las casas a cambio de futura lealtad.", key: "equilibrio" },
      { label: "Dejo que los mercaderes crean que fue idea suya.", key: "sombra" },
    ],
  },
  {
    tag: "El linaje",
    text: "Descubres un secreto que podría destruir a tu propia familia. ¿Qué haces con él?",
    options: [
      { label: "Lo uso como arma en cuanto convenga.", key: "fuego" },
      { label: "Lo entierro para siempre; algunas verdades no ayudan.", key: "hielo" },
      { label: "Lo comparto solo con quien pueda equilibrar el daño.", key: "equilibrio" },
      { label: "Lo guardo. El conocimiento vale más que la venganza.", key: "sombra" },
    ],
  },
  {
    tag: "El enemigo final",
    text: "Frente a la amenaza que puede acabar con todos, ¿cuál es tu plan?",
    options: [
      { label: "Enfrentarla de frente, sin importar el coste.", key: "fuego" },
      { label: "Fortificar y resistir hasta que se consuma sola.", key: "hielo" },
      { label: "Unir a las casas rivales bajo una sola bandera.", key: "equilibrio" },
      { label: "Dejar que se destruya desde dentro.", key: "sombra" },
    ],
  },
  {
    tag: "El legado",
    text: "Cuando todo termine, ¿cómo quieres que te recuerden?",
    options: [
      { label: "Como quien quemó lo viejo para construir algo nuevo.", key: "fuego" },
      { label: "Como quien nunca se rindió, pase lo que pase.", key: "hielo" },
      { label: "Como quien unió lo que parecía imposible de unir.", key: "equilibrio" },
      { label: "Como un nombre que nadie sabe que estuvo detrás de todo.", key: "sombra" },
    ],
  },
];

const ENDINGS = {
  fuego: {
    title: "El Trono de Cenizas",
    copy: "No quedó piedra sobre piedra del viejo orden. Gobiernas sobre la ceniza de lo que fue, y el reino que construyes desde cero te teme tanto como te sigue. El fuego no pregunta quién merece arder.",
    media: { type: "svg", render: renderFuego },
  },
  hielo: {
    title: "La Reina Eterna del Invierno",
    copy: "No necesitaste el Trono de Hierro para gobernar: tu reino se sostiene en la paciencia y el hielo que nunca se derrite del todo. Poniente entero acude a ti cuando el invierno vuelve, y siempre vuelve.",
    media: { type: "svg", render: renderHielo },
  },
  equilibrio: {
    title: "El Pacto de Fuego y Hielo",
    copy: "Lo que ningún Targaryen ni Stark logró solo, lo conseguiste uniendo lo irreconciliable. El dragón y el lobo gobiernan juntos, y por primera vez en generaciones, Poniente respira sin temer a su propio trono.",
    media: { type: "svg", render: renderEquilibrio },
  },
  sombra: {
    title: "El Trono Vacío",
    copy: "El Trono de Hierro sigue ahí, frío y vacío en una sala que ya casi nadie visita. El verdadero poder se mueve en los pasillos, en los susurros, en las manos que nadie ve. Tú lo sabes. Eso te basta.",
    media: { type: "svg", render: renderSombra },
  },
};

// ---- SVG de resultado (ilustraciones originales, no material de la serie) ----

function renderFuego() {
  return `<svg viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="fbg" x1="0" y1="1" x2="0" y2="0">
        <stop offset="0%" stop-color="#2a0a0d"/><stop offset="100%" stop-color="#0b0c0e"/>
      </linearGradient>
      <radialGradient id="fglow" cx="50%" cy="80%" r="60%">
        <stop offset="0%" stop-color="#c9a227" stop-opacity="0.55"/>
        <stop offset="100%" stop-color="#c9a227" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="400" height="225" fill="url(#fbg)"/>
    <rect width="400" height="225" fill="url(#fglow)"/>
    <path d="M200 60c14 30-24 40-24 66a26 26 0 0 0 52 0c0-10-6-18-10-20 10 16 2 34-14 34a22 22 0 0 1-22-22c0-24 18-38 18-58Z" fill="#a3182a"/>
    <path d="M200 100c6 14-9 18-9 30a10 10 0 0 0 20 0c0-6-3-9-4-10 4 7 0 13-6 13a8 8 0 0 1-8-8c0-9 7-15 7-25Z" fill="#f2c14e"/>
  </svg>`;
}

function renderHielo() {
  return `<svg viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="ibg" x1="0" y1="1" x2="0" y2="0">
        <stop offset="0%" stop-color="#0f1b21"/><stop offset="100%" stop-color="#0b0c0e"/>
      </linearGradient>
    </defs>
    <rect width="400" height="225" fill="url(#ibg)"/>
    <g stroke="#8fb8c9" stroke-width="1.4" opacity="0.85">
      <path d="M200 40v145M140 65l120 95M260 65 140 160"/>
      <path d="M170 55l20 12 20-12M170 175l20-12 20 12"/>
      <path d="M150 78l16 4 4 16M266 78l-16 4-4 16"/>
      <path d="M150 152l16-4 4-16M266 152l-16-4-4-16"/>
    </g>
  </svg>`;
}

function renderEquilibrio() {
  return `<svg viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="ebg" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#1c0d10"/><stop offset="50%" stop-color="#0b0c0e"/><stop offset="100%" stop-color="#0d171b"/>
      </linearGradient>
    </defs>
    <rect width="400" height="225" fill="url(#ebg)"/>
    <circle cx="150" cy="112" r="46" fill="none" stroke="#a3182a" stroke-width="1.6" opacity="0.8"/>
    <circle cx="250" cy="112" r="46" fill="none" stroke="#8fb8c9" stroke-width="1.6" opacity="0.8"/>
    <circle cx="200" cy="112" r="10" fill="#c9a227"/>
  </svg>`;
}

function renderSombra() {
  return `<svg viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="225" fill="#0b0c0e"/>
    <path d="M200 30 L360 190 L40 190 Z" fill="none" stroke="#8a7223" stroke-width="1.2" opacity="0.5"/>
    <circle cx="200" cy="118" r="30" fill="none" stroke="#c9a227" stroke-width="1.4"/>
    <circle cx="200" cy="118" r="6" fill="#c9a227"/>
  </svg>`;
}

// ---------------------------------------------------------------
// Estado y render
// ---------------------------------------------------------------

const state = {
  current: 0,
  scores: { fuego: 0, hielo: 0, equilibrio: 0, sombra: 0 },
};

const els = {
  startBtn: document.getElementById("start-btn"),
  restartBtn: document.getElementById("restart-btn"),
  questionnaire: document.getElementById("questionnaire"),
  stage: document.getElementById("question-stage"),
  result: document.getElementById("result"),
  resultTitle: document.getElementById("result-title"),
  resultCopy: document.getElementById("result-copy"),
  resultMedia: document.getElementById("result-media"),
  progressLabel: document.getElementById("progress-label"),
  progressTrack: document.getElementById("progress-track"),
  clipRect: document.getElementById("progress-clip-rect"),
};

function resetState() {
  state.current = 0;
  state.scores = { fuego: 0, hielo: 0, equilibrio: 0, sombra: 0 };
}

function updateProgress() {
  const total = QUESTIONS.length;
  const pct = state.current / total;
  els.clipRect.setAttribute("width", (320 * pct).toFixed(1));
  els.progressLabel.textContent = `Pregunta ${Math.min(state.current + 1, total)} de ${total}`;
  els.progressTrack.setAttribute("aria-valuenow", Math.round(pct * 100));
}

function renderQuestion() {
  const q = QUESTIONS[state.current];
  updateProgress();

  const optionsHtml = q.options
    .map(
      (opt, i) => `
      <button class="option-btn" type="button" data-key="${opt.key}" data-index="${i}">
        <span class="option-sigil">${SIGILS[opt.key]}</span>
        <span>${opt.label}</span>
      </button>`
    )
    .join("");

  els.stage.innerHTML = `
    <div class="question-card">
      <span class="question-tag">${q.tag}</span>
      <h3>${q.text}</h3>
      <div class="options-grid">${optionsHtml}</div>
    </div>
  `;

  els.stage.querySelectorAll(".option-btn").forEach((btn) => {
    btn.addEventListener("click", onAnswer);
  });
}

function onAnswer(e) {
  const key = e.currentTarget.dataset.key;
  state.scores[key] += 1;
  state.current += 1;

  if (state.current >= QUESTIONS.length) {
    showResult();
  } else {
    renderQuestion();
  }
}

function computeEndingKey() {
  return Object.entries(state.scores).sort((a, b) => b[1] - a[1])[0][0];
}

function showResult() {
  const key = computeEndingKey();
  const ending = ENDINGS[key];

  els.questionnaire.classList.remove("active");
  els.result.classList.add("active");

  els.resultTitle.textContent = ending.title;
  els.resultCopy.textContent = ending.copy;

  if (ending.media.type === "svg") {
    els.resultMedia.innerHTML = ending.media.render();
  } else if (ending.media.type === "video") {
    els.resultMedia.innerHTML = `<video src="${ending.media.src}" autoplay loop muted playsinline></video>`;
  } else if (ending.media.type === "image") {
    els.resultMedia.innerHTML = `<img src="${ending.media.src}" alt="${ending.title}" />`;
  }

  els.result.scrollIntoView({ behavior: "smooth", block: "start" });
}

function startQuiz() {
  resetState();
  els.questionnaire.classList.add("active");
  els.result.classList.remove("active");
  renderQuestion();
  els.questionnaire.scrollIntoView({ behavior: "smooth", block: "start" });
}

els.startBtn.addEventListener("click", startQuiz);
els.restartBtn.addEventListener("click", startQuiz);