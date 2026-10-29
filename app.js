'use strict';

/* Темы: номера используются в адресах вида topic.html?topic=0 */
const topics = [
  {
    group: 'algebra',
    ru: 'Выражения, формулы сокращённого умножения и разложение на множители',
    kk: 'Өрнектер, қысқаша көбейту формулалары және көбейткіштерге жіктеу',
    en: 'Expressions, identities and factorisation',
    lesson: 'Раскрывайте скобки по распределительному закону: a(b + c) = ab + ac. Формула квадрата суммы: (a + b)² = a² + 2ab + b². Разность квадратов: a² − b² = (a − b)(a + b).'
  },
  {
    group: 'algebra',
    ru: 'Уравнения, неравенства и их системы',
    kk: 'Теңдеулер, теңсіздіктер және олардың жүйелері',
    en: 'Equations, inequalities and systems',
    lesson: 'Переносите слагаемые через знак равенства с изменением знака. При умножении неравенства на отрицательное число знак неравенства меняется на противоположный.'
  },
  {
    group: 'algebra',
    ru: 'Функции и графики',
    kk: 'Функциялар және графиктер',
    en: 'Functions and graphs',
    lesson: 'Функция задаёт соответствие между аргументом x и значением y. В линейной функции y = kx + b число k задаёт наклон, а b — пересечение с осью y.'
  },
  {
    group: 'algebra',
    ru: 'Квадратные уравнения и квадратичная функция',
    kk: 'Квадрат теңдеулер және квадраттық функция',
    en: 'Quadratic equations and functions',
    lesson: 'Для ax² + bx + c = 0 дискриминант D = b² − 4ac. Если D > 0 — два корня, D = 0 — один корень, D < 0 — действительных корней нет.'
  },
  {
    group: 'algebra',
    ru: 'Степени, корни и дробные выражения',
    kk: 'Дәрежелер, түбірлер және бөлшек өрнектер',
    en: 'Powers, roots and fractions',
    lesson: 'При умножении степеней с одинаковым основанием показатели складываются: aᵐ · aⁿ = aᵐ⁺ⁿ. Знаменатель дроби не может быть равен нулю.'
  },
  {
    group: 'algebra',
    ru: 'Прогрессии',
    kk: 'Прогрессиялар',
    en: 'Sequences',
    lesson: 'В арифметической прогрессии каждый следующий член отличается на одно и то же число d. Формула n-го члена: aₙ = a₁ + d(n − 1).'
  },
  {
    group: 'algebra',
    ru: 'Тригонометрические функции и уравнения',
    kk: 'Тригонометриялық функциялар және теңдеулер',
    en: 'Trigonometric functions and equations',
    lesson: 'Основное тождество: sin²x + cos²x = 1. Запоминайте значения синуса и косинуса для углов 0°, 30°, 45°, 60° и 90°.'
  },
  {
    group: 'algebra',
    ru: 'Показательные и логарифмические функции, уравнения',
    kk: 'Көрсеткіштік және логарифмдік функциялар',
    en: 'Exponential and logarithmic functions',
    lesson: 'Логарифм logₐ b — это показатель степени, в которую нужно возвести a, чтобы получить b. Основание логарифма должно быть положительным и не равным 1.'
  },
  {
    group: 'algebra',
    ru: 'Производная и её применение',
    kk: 'Туынды және оның қолданылуы',
    en: 'Derivatives and applications',
    lesson: 'Производная показывает скорость изменения функции. Производная xⁿ равна nxⁿ⁻¹. Если производная положительна, функция возрастает.'
  },
  {
    group: 'algebra',
    ru: 'Вероятность и статистика',
    kk: 'Ықтималдық және статистика',
    en: 'Probability and statistics',
    lesson: 'Вероятность события равна отношению числа подходящих исходов к числу всех равновозможных исходов. Среднее значение — сумма чисел, делённая на их количество.'
  },
  {
    group: 'geometry',
    ru: 'Углы, прямые и треугольники',
    kk: 'Бұрыштар, түзулер және үшбұрыштар',
    en: 'Angles, lines and triangles',
    lesson: 'Сумма углов треугольника равна 180°. Смежные углы в сумме дают 180°, вертикальные углы равны.'
  },
  {
    group: 'geometry',
    ru: 'Равенство и подобие треугольников',
    kk: 'Үшбұрыштардың теңдігі және ұқсастығы',
    en: 'Congruent and similar triangles',
    lesson: 'У подобных треугольников соответствующие углы равны, а стороны пропорциональны. Коэффициент подобия показывает, во сколько раз отличаются соответствующие стороны.'
  },
  {
    group: 'geometry',
    ru: 'Четырёхугольники и их свойства',
    kk: 'Төртбұрыштар және олардың қасиеттері',
    en: 'Quadrilaterals and their properties',
    lesson: 'Сумма внутренних углов четырёхугольника равна 360°. У параллелограмма противоположные стороны равны и параллельны.'
  },
  {
    group: 'geometry',
    ru: 'Площади фигур и теорема Пифагора',
    kk: 'Фигуралардың аудандары және Пифагор теоремасы',
    en: 'Areas and the Pythagorean theorem',
    lesson: 'Для прямоугольного треугольника c² = a² + b², где c — гипотенуза. Площадь прямоугольника равна произведению его сторон.'
  },
  {
    group: 'geometry',
    ru: 'Окружность и круг',
    kk: 'Шеңбер және дөңгелек',
    en: 'Circles and disks',
    lesson: 'Длина окружности C = 2πr, площадь круга S = πr². Диаметр равен двум радиусам.'
  },
  {
    group: 'geometry',
    ru: 'Векторы и координаты',
    kk: 'Векторлар және координаталар',
    en: 'Vectors and coordinates',
    lesson: 'Координаты вектора AB: (x₂ − x₁; y₂ − y₁). Длина вектора с координатами (x; y) равна √(x² + y²).'
  },
  {
    group: 'geometry',
    ru: 'Прямые и плоскости в пространстве',
    kk: 'Кеңістіктегі түзулер мен жазықтықтар',
    en: 'Lines and planes in space',
    lesson: 'В пространстве прямые могут пересекаться, быть параллельными или скрещиваться. Скрещивающиеся прямые не пересекаются и не лежат в одной плоскости.'
  },
  {
    group: 'geometry',
    ru: 'Призмы, пирамиды и их объёмы',
    kk: 'Призмалар, пирамидалар және олардың көлемдері',
    en: 'Prisms, pyramids and volumes',
    lesson: 'Объём призмы равен площади основания, умноженной на высоту: V = Sоснh. Объём пирамиды: V = ⅓Sоснh.'
  },
  {
    group: 'geometry',
    ru: 'Цилиндр, конус и шар: площади и объёмы',
    kk: 'Цилиндр, конус және шар: аудандары мен көлемдері',
    en: 'Cylinder, cone and sphere',
    lesson: 'Объём цилиндра V = πr²h. Объём конуса V = ⅓πr²h. Объём шара V = ⁴⁄₃πr³.'
  }
];

/*
 * Это демонстрационный набор из 15 вопросов.
 * Для полноценной диагностики добавьте отдельный набор заданий для каждой темы.
 */
const questions = [
  { q: 'Упростите: 3x + 2x', a: ['5x', '6x', '5x²', 'x'], c: 0, why: 'Складываем коэффициенты подобных слагаемых: 3 + 2 = 5, значит 5x.' },
  { q: 'Решите: x + 7 = 12', a: ['x = 5', 'x = 19', 'x = 7', 'x = 4'], c: 0, why: 'Вычтем 7 из обеих частей: x = 12 − 7 = 5.' },
  { q: 'Чему равна площадь прямоугольника со сторонами 4 и 6?', a: ['24', '20', '10', '12'], c: 0, why: 'Площадь прямоугольника равна произведению сторон: 4 · 6 = 24.' },
  { q: 'Чему равна сумма углов треугольника?', a: ['180°', '90°', '360°', '270°'], c: 0, why: 'Сумма внутренних углов любого треугольника равна 180°.' },
  { q: 'Вычислите: 2³', a: ['8', '6', '9', '5'], c: 0, why: '2³ = 2 · 2 · 2 = 8.' },
  { q: 'Чему равен √49?', a: ['7', '14', '24', '6'], c: 0, why: '√49 = 7, потому что 7² = 49.' },
  { q: 'Решите: 4x = 20', a: ['x = 5', 'x = 16', 'x = 80', 'x = 4'], c: 0, why: 'Разделим обе части уравнения на 4: x = 20 ÷ 4 = 5.' },
  { q: 'Найдите периметр квадрата со стороной 5.', a: ['20', '25', '10', '15'], c: 0, why: 'У квадрата четыре равные стороны: P = 4 · 5 = 20.' },
  { q: 'Упростите: 10 − 3 · 2', a: ['4', '14', '7', '8'], c: 0, why: 'Сначала выполняем умножение: 10 − 6 = 4.' },
  { q: 'Какова вероятность выпадения орла при одном броске честной монеты?', a: ['1/2', '1/3', '1/4', '1'], c: 0, why: 'У честной монеты два равновозможных исхода, один из них — орёл.' },
  { q: 'Решите: x − 4 = 9', a: ['x = 13', 'x = 5', 'x = 36', 'x = 9'], c: 0, why: 'Прибавим 4 к обеим частям: x = 9 + 4 = 13.' },
  { q: 'Чему равна длина окружности радиуса r?', a: ['2πr', 'πr²', 'πr', '4πr²'], c: 0, why: 'Длина окружности вычисляется по формуле C = 2πr.' },
  { q: 'Вычислите: 6²', a: ['36', '12', '18', '32'], c: 0, why: '6² = 6 · 6 = 36.' },
  { q: 'Катеты прямоугольного треугольника равны 3 и 4. Найдите гипотенузу.', a: ['5', '7', '6', '4'], c: 0, why: 'По теореме Пифагора c² = 3² + 4² = 25, поэтому c = 5.' },
  { q: 'Найдите среднее арифметическое чисел 2, 4 и 6.', a: ['4', '3', '5', '12'], c: 0, why: 'Среднее: (2 + 4 + 6) ÷ 3 = 4.' }
];

const translations = {
  ru: {
    overview: 'Обзор', sections: 'Разделы', myPlan: 'Мой план',
    mistakes: 'Работа над ошибками', teacherView: 'Панель учителя',
    classroom: 'КЛАСС', workspace: 'ОБУЧЕНИЕ',
    teacher: 'Преподаватель', profile: 'ПРОФИЛЬ УЧЕНИКА',
    joinTitle: 'Начнём учиться', joinText: 'Создайте профиль без электронной почты.',
    yourName: 'Ваше имя', yourClass: 'Класс',
    saveProfile: 'Сохранить профиль', localNote: 'Профиль и прогресс хранятся в браузере на этом устройстве.',
    login: 'Войти', algebra: 'Алгебра', geometry: 'Геометрия',
    welcome: 'Математика, которая подстраивается под тебя',
    subtitle: 'Определи, что уже получается, найди темы для повторения и двигайся по индивидуальному плану.',
    start: 'Пройти диагностику', progress: 'Мой прогресс',
    completed: 'Тем пройдено', best: 'Лучший результат',
    recommended: 'Рекомендуем повторить', topics: 'тем',
    lesson: 'Краткое объяснение', begin: 'Начать тест · 15 вопросов',
    check: 'Проверить ответы', back: 'Назад', testDone: 'Тест завершён',
    correct: 'Верно', wrong: 'Неверно', question: 'Вопрос',
    planText: 'В первую очередь повтори темы, по которым результат ниже 70%.',
    noPlan: 'Пройди тесты по темам — результаты и рекомендации появятся здесь.',
    noMistakes: 'Пока нет ошибок для повторения. Пройди тест по любой теме.',
    askAI: 'Спросить учебного помощника', chatPlaceholder: 'Напиши, что непонятно…',
    send: 'Отправить',
    helperNotice: 'Демо-помощник использует объяснение темы. Для настоящего ИИ-чата потребуется сервер.',
    teacherTitle: 'Прогресс класса',
    teacherNotice: 'Эта демоверсия хранит результаты только в браузере на текущем устройстве. Для общей статистики класса нужен сервер.',
    noProfile: 'Создай профиль ученика, чтобы сохранять результаты.',
    noResults: 'Пока нет результатов тестов.',
    chooseAnswer: 'Выбери один вариант ответа в каждом задании.'
  },
  kk: {
    overview: 'Шолу', sections: 'Бөлімдер', myPlan: 'Менің жоспарым',
    mistakes: 'Қателермен жұмыс', teacherView: 'Мұғалім панелі',
    classroom: 'СЫНЫП', workspace: 'ОҚУ',
    teacher: 'Мұғалім', profile: 'ОҚУШЫ ПРОФИЛІ',
    joinTitle: 'Оқуды бастайық', joinText: 'Электрондық поштасыз профиль жасаңыз.',
    yourName: 'Атыңыз', yourClass: 'Сынып',
    saveProfile: 'Профильді сақтау', localNote: 'Профиль мен үлгерім осы құрылғы браузерінде сақталады.',
    login: 'Кіру', algebra: 'Алгебра', geometry: 'Геометрия',
    welcome: 'Саған бейімделетін математика',
    subtitle: 'Білгеніңді анықта, қайталау керек тақырыптарды тауып, жеке жоспарыңмен оқы.',
    start: 'Диагностиканы бастау', progress: 'Менің үлгерімім',
    completed: 'Өтілген тақырып', best: 'Ең жақсы нәтиже',
    recommended: 'Қайталауға ұсынамыз', topics: 'тақырып',
    lesson: 'Қысқаша түсіндіру', begin: 'Тестті бастау · 15 сұрақ',
    check: 'Жауаптарды тексеру', back: 'Артқа', testDone: 'Тест аяқталды',
    correct: 'Дұрыс', wrong: 'Қате', question: 'Сұрақ',
    planText: 'Алдымен нәтижесі 70%-дан төмен тақырыптарды қайтала.',
    noPlan: 'Тақырыптар бойынша тест тапсыр — нәтижелер осында көрінеді.',
    noMistakes: 'Қайталау үшін қате жоқ. Кез келген тақырып бойынша тест тапсыр.',
    askAI: 'Оқу көмекшісінен сұра', chatPlaceholder: 'Түсінбегеніңді жаз…',
    send: 'Жіберу',
    helperNotice: 'Демо-көмекші тақырыпты түсіндіреді. Нақты ЖИ чатын іске қосу үшін сервер қажет.',
    teacherTitle: 'Сынып үлгерімі',
    teacherNotice: 'Демо нәтижелерді тек осы құрылғы браузерінде сақтайды. Сыныптың ортақ статистикасы үшін сервер қажет.',
    noProfile: 'Нәтижелерді сақтау үшін оқушы профилін жаса.',
    noResults: 'Әзірге тест нәтижелері жоқ.',
    chooseAnswer: 'Әр тапсырмада бір жауапты таңда.'
  },
  en: {
    overview: 'Overview', sections: 'Sections', myPlan: 'My plan',
    mistakes: 'Review mistakes', teacherView: 'Teacher dashboard',
    classroom: 'CLASSROOM', workspace: 'LEARNING',
    teacher: 'Teacher', profile: 'STUDENT PROFILE',
    joinTitle: 'Let’s get started', joinText: 'Create a profile without an email address.',
    yourName: 'Your name', yourClass: 'Class',
    saveProfile: 'Save profile', localNote: 'Profile and progress are stored in this browser on this device.',
    login: 'Sign in', algebra: 'Algebra', geometry: 'Geometry',
    welcome: 'Math that adapts to you',
    subtitle: 'See what you know, find topics to review, and follow your personal learning plan.',
    start: 'Take the diagnostic', progress: 'My progress',
    completed: 'Topics completed', best: 'Best score',
    recommended: 'Recommended review', topics: 'topics',
    lesson: 'Quick lesson', begin: 'Start quiz · 15 questions',
    check: 'Check answers', back: 'Back', testDone: 'Quiz complete',
    correct: 'Correct', wrong: 'Incorrect', question: 'Question',
    planText: 'Start by reviewing topics where your score is below 70%.',
    noPlan: 'Take topic quizzes to see your results and recommendations here.',
    noMistakes: 'No mistakes to review yet. Take a quiz in any topic.',
    askAI: 'Ask the study helper', chatPlaceholder: 'Ask what you’re unsure about…',
    send: 'Send',
    helperNotice: 'The demo helper uses the topic explanation. A server is needed for a real AI chat.',
    teacherTitle: 'Class progress',
    teacherNotice: 'This demo stores results only in this browser on this device. Shared class statistics need a server.',
    noProfile: 'Create a student profile to save results.',
    noResults: 'There are no quiz results yet.',
    chooseAnswer: 'Choose one answer for each question.'
  }
};

const app = document.getElementById('app');
const languageSelect = document.getElementById('language');
const profileButton = document.getElementById('profileButton');
const loginDialog = document.getElementById('loginDialog');
const loginForm = document.getElementById('loginForm');

let language = localStorage.getItem('abai-language') || 'ru';
let profile = readJSON('abai-profile', null);
let selectedAnswers = {};
let chatHistory = [];

function readJSON(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function saveJSON(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function tr(key) {
  return translations[language]?.[key] || translations.ru[key] || key;
}

function topicTitle(topic) {
  return topic[language] || topic.ru;
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[character]);
}

function getProgress() {
  return readJSON('abai-progress', {});
}

function updateProfileDisplay() {
  const nameElement = document.getElementById('profileName');
  const avatarElement = document.getElementById('avatar');

  if (!nameElement || !avatarElement) return;

  nameElement.textContent = profile?.name || tr('login');
  avatarElement.textContent = profile?.name
    ? profile.name.trim().charAt(0).toUpperCase()
    : '?';

  const nameInput = document.getElementById('studentName');
  const classInput = document.getElementById('className');

  if (profile && nameInput && classInput) {
    nameInput.value = profile.name || '';
    classInput.value = profile.className || '';
  }
}

function setupProfileForm() {
  if (profileButton && loginDialog) {
    profileButton.addEventListener('click', () => loginDialog.showModal());
  }

  if (loginForm) {
    loginForm.addEventListener('submit', event => {
      event.preventDefault();

      const name = document.getElementById('studentName')?.value.trim();
      const className = document.getElementById('className')?.value.trim();

      if (!name || !className) return;

      profile = { name, className };
      saveJSON('abai-profile', profile);
      loginDialog.close();
      updateProfileDisplay();
      render();
    });
  }

  updateProfileDisplay();
}

function setLanguage(nextLanguage) {
  if (!translations[nextLanguage]) return;

  language = nextLanguage;
  localStorage.setItem('abai-language', language);
  document.documentElement.lang = language;

  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.dataset.i18n;
    const translated = translations[language][key];
    if (translated) element.textContent = translated;
  });

  render();
  updateProfileDisplay();
}

function setupLanguagePicker() {
  if (!languageSelect) return;

  languageSelect.value = language;
  document.documentElement.lang = language;
  languageSelect.addEventListener('change', event => setLanguage(event.target.value));
}

function openTopic(index) {
  if (index < 0 || index >= topics.length) return;
  location.hash = `topic/${index}`;
}

function routeParts() {
  const route = location.hash.replace(/^#/, '') || 'home';
  return route.split('/');
}

function updateActiveNavigation(page) {
  document.querySelectorAll('.nav-link[data-page]').forEach(link => {
    link.classList.toggle('active', link.dataset.page === page);
  });
}

function render() {
  if (!app) return;

  const [page, parameter] = routeParts();
  updateActiveNavigation(page);

  if (page === 'topic') {
    const topicIndex = Number(parameter);
    if (Number.isInteger(topicIndex) && topics[topicIndex]) {
      renderTopic(topicIndex);
      return;
    }
    location.hash = 'sections';
    return;
  }

  if (page === 'sections') return renderSections();
  if (page === 'plan') return renderPlan();
  if (page === 'mistakes') return renderMistakes();
  if (page === 'teacher') return renderTeacher();

  renderHome();
}

function renderHome() {
  const results = getProgress();
  const scores = Object.values(results).map(result => result.score);
  const average = scores.length
    ? Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length)
    : 0;

  app.innerHTML = `
    <section class="hero">
      <div class="eyebrow">ABAI SCHOOLS · МАТЕМАТИКА</div>
      <h1>${tr('welcome')}</h1>
      <p>${tr('subtitle')}</p>
      <button class="button light" type="button" onclick="location.hash='sections'">
        ${tr('start')} →
      </button>
    </section>

    <div class="stats-grid">
      <div class="stat-card">
        <span class="stat-label">${tr('progress')}</span>
        <strong class="stat-value">${average}%</strong>
        <span class="stat-hint">${tr('best')}</span>
      </div>
      <div class="stat-card">
        <span class="stat-label">${tr('completed')}</span>
        <strong class="stat-value">${Object.keys(results).length}/${topics.length}</strong>
        <span class="stat-hint">${tr('sections')}</span>
      </div>
      <div class="stat-card">
        <span class="stat-label">${tr('yourClass') || 'Класс'}</span>
        <strong class="stat-value">${profile ? escapeHTML(profile.className) : '—'}</strong>
        <span class="stat-hint">${profile ? escapeHTML(profile.name) : tr('login')}</span>
      </div>
    </div>

    <div class="section-heading">
      <div>
        <h2>${tr('recommended')}</h2>
        <p>${tr('planText')}</p>
      </div>
      <button class="button outline small" type="button" onclick="location.hash='plan'">
        ${tr('myPlan')} →
      </button>
    </div>

    <div class="section-grid">
      <a class="section-card" href="sections.html#sections">
        <div class="section-card-top"><span class="section-symbol">∑</span>↗</div>
        <h3>${tr('algebra')}</h3><p>10 ${tr('topics')}</p>
      </a>
      <a class="section-card" href="sections.html#sections">
        <div class="section-card-top"><span class="section-symbol">△</span>↗</div>
        <h3>${tr('geometry')}</h3><p>9 ${tr('topics')}</p>
      </a>
    </div>

    <div class="section-heading">
      <div>
        <h2>Abai Schools Алгебра</h2>
        <p>Работа выполнена учениками Жасулана Нурмахана, Есенкулова Кадыргали и Мухтарова Жомарта.</p>
        <p>Преподаватель: Кадиргалиев Ерболат Кудабаевич.</p>
      </div>
    </div>`;
}

function renderSections() {
  const results = getProgress();

  const groups = ['algebra', 'geometry'].map(group => {
    const groupTopics = topics
      .map((topic, index) => ({ topic, index }))
      .filter(item => item.topic.group === group);

    return `
      <section class="section-card">
        <div class="section-card-top">
          <span class="section-symbol">${group === 'algebra' ? '∑' : '△'}</span>
          <span>${groupTopics.length} ${tr('topics')}</span>
        </div>
        <h3>${tr(group)}</h3>
        <div class="topic-list">
          ${groupTopics.map(({ topic, index }) => {
            const result = results[index];
            return `
              <button class="topic-row" type="button" data-topic="${index}">
                <span class="topic-index">${String(index + 1).padStart(2, '0')}</span>
                <span class="topic-main">
                  <b>${escapeHTML(topicTitle(topic))}</b>
                  <small>${result ? `${result.score}%` : tr('begin')}</small>
                </span>
                <span class="topic-score">→</span>
              </button>`;
          }).join('')}
        </div>
      </section>`;
  }).join('');

  app.innerHTML = `
    <div class="welcome">
      <div class="eyebrow">${tr('sections')}</div>
      <h1>${tr('sections')}</h1>
      <p>${tr('subtitle')}</p>
    </div>
    <div class="section-grid">${groups}</div>`;

  app.querySelectorAll('[data-topic]').forEach(button => {
    button.addEventListener('click', () => openTopic(Number(button.dataset.topic)));
  });
}

function renderTopic(index) {
  const topic = topics[index];
  const previousResult = getProgress()[index];
  selectedAnswers = {};

  app.innerHTML = `
    <div class="welcome">
      <button class="button outline small" type="button" onclick="location.hash='sections'">
        ← ${tr('back')}
      </button>
      <div class="eyebrow" style="margin-top:18px">${tr(topic.group)}</div>
      <h1>${escapeHTML(topicTitle(topic))}</h1>
      <p>${tr('lesson')}</p>
    </div>

    <div class="lesson-box"><b>${tr('lesson')}</b><br>${escapeHTML(topic.lesson)}</div>

    ${previousResult ? `
      <div class="result-banner">
        ${tr('best')}: <strong>${previousResult.score}%</strong>
      </div>` : ''}

    <div class="section-heading">
      <div><h2>${tr('begin')}</h2><p>${tr('chooseAnswer')}</p></div>
    </div>

    <form id="quizForm">
      ${questions.map((question, questionIndex) => `
        <section class="quiz-question" id="question-${questionIndex}">
          <div class="question-meta">${tr('question')} ${questionIndex + 1} / ${questions.length}</div>
          <div class="question-text">${escapeHTML(question.q)}</div>
          <div class="answers">
            ${question.a.map((answer, answerIndex) => `
              <button class="answer-option" type="button"
                data-question="${questionIndex}" data-answer="${answerIndex}">
                ${escapeHTML(answer)}
              </button>`).join('')}
          </div>
          <div class="explanation" id="explanation-${questionIndex}">
            ${escapeHTML(question.why)}
          </div>
        </section>`).join('')}
      <button class="button primary" type="submit">${tr('check')}</button>
    </form>

    <div id="quizResult"></div>

    <section class="card" style="margin-top:24px">
      <h3>${tr('askAI')}</h3>
      <div class="ai-chat" id="chatMessages"></div>
      <form class="chat-form" id="chatForm">
        <input id="chatInput" placeholder="${tr('chatPlaceholder')}" required maxlength="300">
        <button class="button primary" type="submit">${tr('send')}</button>
      </form>
      <p class="stat-hint" style="margin-top:10px">${tr('helperNotice')}</p>
    </section>`;

  setupQuiz(index);
  setupChat(topic);
}

function setupQuiz(topicIndex) {
  const quizForm = document.getElementById('quizForm');

  app.querySelectorAll('.answer-option').forEach(button => {
    button.addEventListener('click', () => {
      const questionIndex = Number(button.dataset.question);
      selectedAnswers[questionIndex] = Number(button.dataset.answer);

      app.querySelectorAll(`[data-question="${questionIndex}"]`).forEach(option => {
        option.classList.toggle('selected', option === button);
      });
    });
  });

  quizForm.addEventListener('submit', event => {
    event.preventDefault();

    if (Object.keys(selectedAnswers).length !== questions.length) {
      const firstUnanswered = questions.findIndex((_, index) =>
        selectedAnswers[index] === undefined
      );
      document.getElementById(`question-${firstUnanswered}`)
        ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    let correctCount = 0;
    const mistakes = [];

    questions.forEach((question, questionIndex) => {
      const selected = selectedAnswers[questionIndex];
      const options = app.querySelectorAll(`[data-question="${questionIndex}"]`);

      options.forEach((option, answerIndex) => {
        option.disabled = true;

        if (answerIndex === question.c) option.classList.add('correct');
        if (answerIndex === selected && selected !== question.c) {
          option.classList.add('wrong');
        }
      });

      if (selected === question.c) {
        correctCount++;
      } else {
        mistakes.push(questionIndex);
        document.getElementById(`explanation-${questionIndex}`)
          ?.classList.add('show');
      }
    });

    const score = Math.round((correctCount / questions.length) * 100);
    const results = getProgress();

    results[topicIndex] = {
      score,
      correct: correctCount,
      total: questions.length,
      mistakes,
      date: new Date().toISOString()
    };

    saveJSON('abai-progress', results);

    document.getElementById('quizResult').innerHTML = `
      <div class="result-banner">
        ${tr('testDone')}: <strong>${correctCount}/${questions.length} · ${score}%</strong>
        <br><span>${score >= 70 ? tr('correct') : tr('recommended')}</span>
      </div>`;

    document.getElementById('quizResult')
      .scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
}

function setupChat(topic) {
  const chatForm = document.getElementById('chatForm');
  const chatContainer = document.getElementById('chatMessages');

  function addMessage(role, message) {
    const element = document.createElement('div');
    element.className = `chat-message ${role}`;
    element.textContent = message;
    chatContainer.appendChild(element);
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }

  chatForm.addEventListener('submit', event => {
    event.preventDefault();

    const input = document.getElementById('chatInput');
    const question = input.value.trim();
    if (!question) return;

    addMessage('user', question);
    input.value = '';

    // Демо-ответ с объяснением текущей темы. Для подключения настоящей ИИ-модели нужен сервер.
    addMessage('assistant', topic.lesson);
  });
}

function renderPlan() {
  const results = getProgress();

  const weakTopics = topics
    .map((topic, index) => ({ topic, index, result: results[index] }))
    .filter(item => item.result)
    .sort((a, b) => a.result.score - b.result.score);

  app.innerHTML = `
    <div class="welcome">
      <div class="eyebrow">${tr('myPlan')}</div>
      <h1>${tr('myPlan')}</h1>
      <p>${tr('planText')}</p>
    </div>

    ${!profile ? `<div class="empty">${tr('noProfile')}</div>` : ''}

    ${weakTopics.length
      ? `<div class="topic-list">${weakTopics.map(({ topic, index, result }) => `
          <button class="topic-row" type="button" data-topic="${index}">
            <span class="topic-index">${result.score}%</span>
            <span class="topic-main">
              <b>${escapeHTML(topicTitle(topic))}</b>
              <small>${tr('recommended')}</small>
            </span>
            <span class="topic-score">→</span>
          </button>`).join('')}</div>`
      : `<div class="empty">${tr('noPlan')}
          <br><button class="button primary small" style="margin-top:12px"
            type="button" onclick="location.hash='sections'">${tr('sections')}</button>
        </div>`}`;

  app.querySelectorAll('[data-topic]').forEach(button => {
    button.addEventListener('click', () => openTopic(Number(button.dataset.topic)));
  });
}

function renderMistakes() {
  const results = getProgress();

  const topicsWithMistakes = topics
    .map((topic, index) => ({ topic, index, result: results[index] }))
    .filter(item => item.result?.mistakes?.length);

  app.innerHTML = `
    <div class="welcome">
      <div class="eyebrow">${tr('mistakes')}</div>
      <h1>${tr('mistakes')}</h1>
      <p>${tr('lesson')}</p>
    </div>

    ${topicsWithMistakes.length
      ? topicsWithMistakes.map(({ topic, index, result }) => `
          <div class="card" style="margin-bottom:12px">
            <h3>${escapeHTML(topicTitle(topic))}</h3>
            <p class="muted">${result.score}% · ${result.mistakes.length} ${tr('wrong')}</p>
            <button class="button outline small" type="button" data-topic="${index}">
              ${tr('lesson')} →
            </button>
          </div>`).join('')
      : `<div class="empty">${tr('noMistakes')}
          <br><button class="button primary small" style="margin-top:12px"
            type="button" onclick="location.hash='sections'">${tr('sections')}</button>
        </div>`}`;

  app.querySelectorAll('[data-topic]').forEach(button => {
    button.addEventListener('click', () => openTopic(Number(button.dataset.topic)));
  });
}

function renderTeacher() {
  const results = getProgress();
  const resultRows = topics
    .map((topic, index) => ({ topic, result: results[index] }))
    .filter(item => item.result);

  app.innerHTML = `
    <div class="welcome">
      <div class="eyebrow">${tr('teacher')}</div>
      <h1>${tr('teacherTitle')}</h1>
      <p>${tr('teacherNotice')}</p>
    </div>

    ${profile ? `
      <div class="card">
        <div class="section-heading">
          <div>
            <h3>${escapeHTML(profile.className)} · ${escapeHTML(profile.name)}</h3>
            <p>${resultRows.length} / ${topics.length} ${tr('completed')}</p>
          </div>
        </div>
        ${resultRows.length
          ? resultRows.map(({ topic, result }) => `
              <div class="topic-row">
                <span class="topic-main"><b>${escapeHTML(topicTitle(topic))}</b></span>
                <span class="topic-score">${result.score}%</span>
              </div>`).join('')
          : `<p class="muted">${tr('noResults')}</p>`}
      </div>`
      : `<div class="empty">${tr('noProfile')}
          <br><button class="button primary small" style="margin-top:12px"
            type="button" onclick="document.getElementById('loginDialog').showModal()">
            ${tr('login')}
          </button>
        </div>`}`;
}

setupLanguagePicker();
setupProfileForm();
window.addEventListener('hashchange', render);
render();
