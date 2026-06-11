const STORAGE_KEY = 'cescom-trainer-progress-v2';

const moduleFilter = document.getElementById('module-filter');
const priorityFilter = document.getElementById('priority-filter');
const limitFilter = document.getElementById('limit-filter');
const searchFilter = document.getElementById('search-filter');
const wrongOnlyFilter = document.getElementById('wrong-only-filter');
const questionCount = document.getElementById('question-count');
const quizTitle = document.getElementById('quiz-title');
const quizList = document.getElementById('quiz-list');
const answeredMetric = document.getElementById('answered-metric');
const correctMetric = document.getElementById('correct-metric');
const wrongMetric = document.getElementById('wrong-metric');
const accuracyMetric = document.getElementById('accuracy-metric');
const lifetimeAnswered = document.getElementById('lifetime-answered');
const lifetimeCorrect = document.getElementById('lifetime-correct');
const lifetimeAccuracy = document.getElementById('lifetime-accuracy');
const lifetimeWrong = document.getElementById('lifetime-wrong');
const moduleStats = document.getElementById('module-stats');
const submitExamButton = document.getElementById('submit-exam');

const moduleDescriptions = {
  M1: 'Base conceptual de Compliance y su origen.',
  M2: 'Relación entre ética empresarial y cumplimiento.',
  M3: 'ISO 37301 y lógica del sistema de gestión.',
  M4: 'Buenas prácticas, gobierno interno y reporting.',
  M5: 'RSC, buen gobierno y enfoque GRC.',
  M6: 'Rol, autoridad e independencia del Compliance Officer.',
  M7: 'Mapa, evaluación y tratamiento del riesgo.',
  M8: 'Código, políticas, procedimientos y sistema normativo.',
  M9: 'Canales de denuncia, garantías e investigación.',
  M10: 'Comunicación, formación y sensibilización.',
  M11: 'Monitorización y revisión de controles.',
  M12: 'Responsabilidad penal corporativa y modelos eficaces.',
  M13: 'Soborno, corrupción y controles anticorrupción.',
  M14: 'PBC/FT, diligencia debida y sujetos obligados.',
  M15: 'Defensa de la competencia y riesgos comerciales.',
  M16: 'Información privilegiada y abuso de mercado.',
  M17: 'Privacidad, RGPD y roles de tratamiento.',
  M18: 'Protección al consumidor e información precontractual.',
  M19: 'Integridad y Compliance en sector público.',
  M20: 'Riesgo digital, ciberseguridad y resiliencia.'
};

const state = {
  mode: null,
  questions: [],
  answers: {},
  graded: false,
  progress: loadProgress()
};

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {
      totals: { answered: 0, correct: 0 },
      perQuestion: {}
    };
  } catch {
    return {
      totals: { answered: 0, correct: 0 },
      perQuestion: {}
    };
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
}

function shuffle(items) {
  const clone = [...items];
  for (let i = clone.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [clone[i], clone[j]] = [clone[j], clone[i]];
  }
  return clone;
}

function buildModuleFilter() {
  const modules = [...new Set(CESCOM_QUESTIONS.map((question) => question.module))];
  moduleFilter.innerHTML = '<option value="all">Todos</option>';
  modules.forEach((module) => {
    const option = document.createElement('option');
    option.value = module;
    option.textContent = module;
    moduleFilter.appendChild(option);
  });
}

function matchesSearch(question, query) {
  if (!query) {
    return true;
  }

  const haystack = [
    question.module,
    question.priority,
    question.topic,
    question.prompt,
    question.explanation,
    question.sourcePages,
    ...question.options
  ].join(' ').toLowerCase();

  return haystack.includes(query);
}

function isWrongHistorically(questionId) {
  const record = state.progress.perQuestion[questionId];
  return record ? record.wrong > 0 : false;
}

function getFilteredQuestions() {
  const moduleValue = moduleFilter.value;
  const priorityValue = priorityFilter.value;
  const limitValue = Number(limitFilter.value);
  const query = searchFilter.value.trim().toLowerCase();
  const wrongOnly = wrongOnlyFilter.checked;

  let filtered = CESCOM_QUESTIONS.filter((question) => {
    const moduleMatch = moduleValue === 'all' || question.module === moduleValue;
    const priorityMatch = priorityValue === 'all' || question.priority === priorityValue;
    const queryMatch = matchesSearch(question, query);
    const wrongMatch = !wrongOnly || isWrongHistorically(question.id);
    return moduleMatch && priorityMatch && queryMatch && wrongMatch;
  });

  filtered = shuffle(filtered);
  if (limitValue < filtered.length) {
    filtered = filtered.slice(0, limitValue);
  }

  questionCount.textContent = `${filtered.length} preguntas`;
  return filtered;
}

function resetMetrics() {
  answeredMetric.textContent = '0';
  correctMetric.textContent = '0';
  wrongMetric.textContent = '0';
  accuracyMetric.textContent = '0%';
}

function updateMetrics() {
  const answeredEntries = Object.entries(state.answers);
  const answered = answeredEntries.length;
  let correct = 0;

  answeredEntries.forEach(([id, answerIndex]) => {
    const question = state.questions.find((item) => item.id === id);
    if (question && question.correctIndex === answerIndex) {
      correct += 1;
    }
  });

  const wrong = answered - correct;
  const accuracy = answered ? Math.round((correct / answered) * 100) : 0;

  answeredMetric.textContent = `${answered}`;
  correctMetric.textContent = `${correct}`;
  wrongMetric.textContent = `${wrong}`;
  accuracyMetric.textContent = `${accuracy}%`;
}

function updateLifetimeMetrics() {
  const answered = state.progress.totals.answered || 0;
  const correct = state.progress.totals.correct || 0;
  const accuracy = answered ? Math.round((correct / answered) * 100) : 0;
  const wrong = Object.values(state.progress.perQuestion).filter((record) => record.wrong > 0).length;

  lifetimeAnswered.textContent = `${answered}`;
  lifetimeCorrect.textContent = `${correct}`;
  lifetimeAccuracy.textContent = `${accuracy}%`;
  lifetimeWrong.textContent = `${wrong}`;
}

function renderModuleStats() {
  const modules = [...new Set(CESCOM_QUESTIONS.map((question) => question.module))];

  moduleStats.innerHTML = modules.map((module) => {
    const questions = CESCOM_QUESTIONS.filter((question) => question.module === module);
    const totals = questions.reduce((acc, question) => {
      const record = state.progress.perQuestion[question.id];
      if (!record) {
        return acc;
      }
      acc.answered += record.answered;
      acc.correct += record.correct;
      acc.wrong += record.wrong;
      return acc;
    }, { answered: 0, correct: 0, wrong: 0 });

    const accuracy = totals.answered ? Math.round((totals.correct / totals.answered) * 100) : 0;

    return `
      <article class="module-card">
        <h3>${module}</h3>
        <p>${moduleDescriptions[module] || 'Módulo CESCOM'}</p>
        <p><strong>${questions.length}</strong> preguntas cargadas</p>
        <p><strong>${totals.answered}</strong> intentos · <strong>${accuracy}%</strong> precisión</p>
        <p><strong>${totals.wrong}</strong> fallos históricos</p>
      </article>
    `;
  }).join('');
}

function renderExplanation(question, selectedIndex, showNow) {
  if (!showNow) {
    return '';
  }

  const isCorrect = selectedIndex === question.correctIndex;
  const sourceBlock = question.sourcePages
    ? `<div class="source-ref"><strong>Referencia manual:</strong> ${question.sourcePages}</div>`
    : '';

  return `
    <div class="explanation">
      <strong>${isCorrect ? 'Correcta.' : 'Incorrecta.'}</strong>
      ${question.explanation}
      ${sourceBlock}
    </div>
  `;
}

function renderQuestions() {
  if (!state.questions.length) {
    quizList.className = 'quiz-list empty-state';
    quizList.textContent = 'No hay preguntas para ese filtro.';
    return;
  }

  quizList.className = 'quiz-list';
  quizList.innerHTML = state.questions.map((question, index) => {
    const selectedIndex = state.answers[question.id];
    const practiceReveal = state.mode === 'practice' && typeof selectedIndex === 'number';
    const examReveal = state.mode === 'exam' && state.graded;
    const shouldReveal = practiceReveal || examReveal;

    const options = question.options.map((option, optionIndex) => {
      let optionClass = 'option';
      if (shouldReveal && optionIndex === question.correctIndex) {
        optionClass += ' correct';
      } else if (
        shouldReveal &&
        typeof selectedIndex === 'number' &&
        optionIndex === selectedIndex &&
        optionIndex !== question.correctIndex
      ) {
        optionClass += ' wrong';
      }

      return `
        <div class="${optionClass}">
          <label>
            <input
              type="radio"
              name="${question.id}"
              value="${optionIndex}"
              ${selectedIndex === optionIndex ? 'checked' : ''}
              ${state.mode === 'exam' && state.graded ? 'disabled' : ''}
            >
            <span>${option}</span>
          </label>
        </div>
      `;
    }).join('');

    return `
      <article class="question-card" data-question-id="${question.id}">
        <div class="question-top">
          <div>
            <p class="eyebrow">Pregunta ${index + 1}</p>
            <h3>${question.module}</h3>
          </div>
          <div class="question-meta">
            <span class="meta-chip">${question.priority}</span>
            <span class="meta-chip">${question.topic}</span>
          </div>
        </div>
        <p class="question-text">${question.prompt}</p>
        <div class="option-list">${options}</div>
        ${renderExplanation(question, selectedIndex, shouldReveal)}
      </article>
    `;
  }).join('');

  quizList.querySelectorAll('input[type="radio"]').forEach((input) => {
    input.addEventListener('change', (event) => {
      const questionId = event.target.name;
      state.answers[questionId] = Number(event.target.value);

      if (state.mode === 'practice') {
        renderQuestions();
      }

      updateMetrics();
    });
  });
}

function persistSessionResults() {
  state.questions.forEach((question) => {
    const answerIndex = state.answers[question.id];
    if (typeof answerIndex !== 'number') {
      return;
    }

    const isCorrect = answerIndex === question.correctIndex;
    if (!state.progress.perQuestion[question.id]) {
      state.progress.perQuestion[question.id] = { answered: 0, correct: 0, wrong: 0 };
    }

    const record = state.progress.perQuestion[question.id];
    record.answered += 1;
    state.progress.totals.answered += 1;

    if (isCorrect) {
      record.correct += 1;
      state.progress.totals.correct += 1;
    } else {
      record.wrong += 1;
    }
  });

  saveProgress();
  updateLifetimeMetrics();
  renderModuleStats();
}

function startMode(mode) {
  state.mode = mode;
  state.questions = getFilteredQuestions();
  state.answers = {};
  state.graded = false;

  quizTitle.textContent = mode === 'practice'
    ? 'Modo práctica: corrección inmediata'
    : 'Modo examen: responde todo y corrige al final';

  submitExamButton.classList.toggle('hidden', mode !== 'exam');
  resetMetrics();
  renderQuestions();
}

document.getElementById('start-practice').addEventListener('click', () => startMode('practice'));
document.getElementById('start-exam').addEventListener('click', () => startMode('exam'));
document.getElementById('shuffle-button').addEventListener('click', () => {
  if (!state.mode) {
    return;
  }
  startMode(state.mode);
});
document.getElementById('reset-button').addEventListener('click', () => {
  state.answers = {};
  state.graded = false;
  resetMetrics();
  renderQuestions();
});

submitExamButton.addEventListener('click', () => {
  state.graded = true;
  renderQuestions();
  updateMetrics();
  persistSessionResults();
});

[moduleFilter, priorityFilter, limitFilter, wrongOnlyFilter].forEach((node) => {
  node.addEventListener('change', () => {
    if (state.mode) {
      startMode(state.mode);
    } else {
      getFilteredQuestions();
    }
  });
});

searchFilter.addEventListener('input', () => {
  if (state.mode) {
    startMode(state.mode);
  } else {
    getFilteredQuestions();
  }
});

buildModuleFilter();
updateLifetimeMetrics();
renderModuleStats();
getFilteredQuestions();
