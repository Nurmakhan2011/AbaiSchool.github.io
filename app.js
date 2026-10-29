'use strict';

const topics = [
  { group: 'algebra', ru: 'Выражения, формулы сокращённого умножения и разложение на множители', kk: 'Өрнектер, қысқаша көбейту формулалары және көбейткіштерге жіктеу', en: 'Expressions, identities and factorisation', lesson: 'Раскрывайте скобки по распределительному закону: a(b + c) = ab + ac. Формула квадрата суммы: (a + b)² = a² + 2ab + b². Разность квадратов: a² − b² = (a − b)(a + b).' },
  { group: 'algebra', ru: 'Уравнения, неравенства и их системы', kk: 'Теңдеулер, теңсіздіктер және олардың жүйелері', en: 'Equations, inequalities and systems', lesson: 'Переносите слагаемые через знак равенства с изменением знака. При умножении неравенства на отрицательное число его знак меняется на противоположный.' },
  { group: 'algebra', ru: 'Функции и графики', kk: 'Функциялар және графиктер', en: 'Functions and graphs', lesson: 'Функция задаёт соответствие между аргументом x и значением y. Для линейной функции y = kx + b число k задаёт наклон, а b — точку пересечения с осью y.' },
  { group: 'algebra', ru: 'Квадратные уравнения и квадратичная функция', kk: 'Квадрат теңдеулер және квадраттық функция', en: 'Quadratic equations and functions', lesson: 'Для ax² + bx + c = 0 дискриминант D = b² − 4ac. Если D > 0 — два корня, D = 0 — один, D < 0 — действительных корней нет.' },
  { group: 'algebra', ru: 'Степени, корни и дробные выражения', kk: 'Дәрежелер, түбірлер және бөлшек өрнектер', en: 'Powers, roots and fractions', lesson: 'При умножении степеней с одинаковым основанием показатели складываются: aᵐ · aⁿ = aᵐ⁺ⁿ. Знаменатель дроби не может быть равен нулю.' },
  { group: 'algebra', ru: 'Прогрессии', kk: 'Прогрессиялар', en: 'Sequences', lesson: 'В арифметической прогрессии каждый следующий член отличается на одно и то же число d. Формула n-го члена: aₙ = a₁ + d(n − 1).' },
  { group: 'algebra', ru: 'Тригонометрические функции и уравнения', kk: 'Тригонометриялық функциялар және теңдеулер', en: 'Trigonometric functions and equations', lesson: 'Основное тождество: sin²x + cos²x = 1. Помните значения синуса и косинуса для углов 0°, 30°, 45°, 60° и 90°.' },
  { group: 'algebra', ru: 'Показательные и логарифмические функции, уравнения', kk: 'Көрсеткіштік және логарифмдік функциялар', en: 'Exponential and logarithmic functions', lesson: 'Логарифм logₐ b — это показатель степени, в которую нужно возвести a, чтобы получить b. Основание a должно быть положительным и не равным 1.' },
  { group: 'algebra', ru: 'Производная и её применение', kk: 'Туынды және оның қолданылуы', en: 'Derivatives and applications', lesson: 'Производная показывает скорость изменения функции. Производная xⁿ равна nxⁿ⁻¹. Если производная положительна, функция возрастает.' },
  { group: 'algebra', ru: 'Вероятность и статистика', kk: 'Ықтималдық және статистика', en: 'Probability and statistics', lesson: 'Вероятность события равна отношению числа подходящих исходов к числу всех равновозможных исходов. Среднее значение — сумма чисел, делённая на их количество.' },

  { group: 'geometry', ru: 'Углы, прямые и треугольники', kk: 'Бұрыштар, түзулер және үшбұрыштар', en: 'Angles, lines and triangles', lesson: 'Сумма углов треугольника равна 180°. Смежные углы в сумме дают 180°, а вертикальные углы равны.' },
  { group: 'geometry', ru: 'Равенство и подобие треугольников', kk: 'Үшбұрыштардың теңдігі және ұқсастығы', en: 'Congruent and similar triangles', lesson: 'У подобных треугольников соответствующие углы равны, а соответствующие стороны пропорциональны. Коэффициент подобия показывает, во сколько раз изменены стороны.' },
  { group: 'geometry', ru: 'Четырёхугольники и их свойства', kk: 'Төртбұрыштар және олардың қасиеттері', en: 'Quadrilaterals and their properties', lesson: 'Сумма внутренних углов четырёхугольника равна 360°. У параллелограмма противоположные стороны равны и параллельны.' },
  { group: 'geometry', ru: 'Площади фигур и теорема Пифагора', kk: 'Фигуралардың аудандары және Пифагор теоремасы', en: 'Areas and the Pythagorean theorem', lesson: 'Для прямоугольного треугольника c² = a² + b², где c — гипотенуза. Площадь прямоугольника равна произведению его сторон.' },
  { group: 'geometry', ru: 'Окружность и круг', kk: 'Шеңбер және дөңгелек', en: 'Circles and disks', lesson: 'Длина окружности C = 2πr, площадь круга S = πr². Радиус соединяет центр с окружностью, диаметр равен двум радиусам.' },
  { group: 'geometry', ru: 'Векторы и координаты', kk: 'Векторлар және координаталар', en: 'Vectors and coordinates', lesson: 'Координаты вектора AB: (x₂ − x₁; y₂ − y₁). Длина вектора (x; y) равна √(x² + y²).' },
  { group: 'geometry', ru: 'Прямые и плоскости в пространстве', kk: 'Кеңістіктегі түзулер мен жазықтықтар', en: 'Lines and planes in space', lesson: 'В пространстве две прямые могут пересекаться, быть параллельными или скрещиваться. Прямая перпендикулярна плоскости, если она перпендикулярна каждой прямой плоскости, проходящей через точку пересечения.' },
  { group: 'geometry', ru: 'Призмы, пирамиды и их объёмы', kk: 'Призмалар, пирамидалар және олардың көлемдері', en: 'Prisms, pyramids and volumes', lesson: 'Объём призмы равен площади основания, умноженной на высоту: V = Sоснh. Объём пирамиды составляет треть произведения площади основания на высоту.' },
  { group: 'geometry', ru: 'Цилиндр, конус и шар: площади и объёмы', kk: 'Цилиндр, конус және шар: аудандары мен көлемдері', en: 'Cylinder, cone and sphere', lesson: 'Объём цилиндра V = πr²h. Объём конуса V = ⅓πr²h. Объём шара V = ⁴⁄₃πr³.' }
];

const text = {
  ru: { overview:'Обзор', sections:'Разделы', plan:'Мой план', mistakes:'Работа над ошибками', teacher:'Панель учителя', welcome:'Математика, которая подстраивается под тебя', subtitle:'Определи, что уже получается, найди темы для повторения и двигайся по индивидуальному плану.', start:'Пройти диагностику', progress:'Мой прогресс', completed:'Тем пройдено', best:'Лучший результат', recommended:'Рекомендуем повторить', algebra:'Алгебра', geometry:'Геометрия', topics:'тем', lesson:'Краткое объяснение', begin:'Начать тест · 15 вопросов', check:'Проверить ответы', next:'К разделам', noProfile:'Сначала создай профиль ученика — это займёт минуту.', login:'Войти', class:'Класс', student:'Ученик', result:'Результат', noMistakes:'Пока нет ошибок для повторения. Пройди тест по любой теме.', testDone:'Тест завершён', answer:'Выбери ответ', ask:'Спросить ИИ-помощника', chatPlaceholder:'Напиши, что непонятно…', localAI:'Учебный помощник объясняет решение на основе выбранной темы. Для настоящего ИИ-чата потребуется подключить сервер.', classOverview:'Обзор прогресса учеников на этом устройстве', noStudents:'Чтобы увидеть класс, ученики должны войти на этом устройстве. Для общей онлайн-статистики потребуется сервер.', profile:'Профиль ученика', join:'Создай профиль без электронной почты', save:'Сохранить профиль', name:'Имя', cancel:'Отмена', explain:'Разбор ошибки', groupA:'Алгебра', groupG:'Геометрия', q:'Вопрос', correct:'Верно', wrong:'Неверно', all:'Все темы', back:'Назад', training:'Индивидуальный план', planText:'В первую очередь повтори темы с результатом ниже 70%. После повторения снова пройди тест.' },
  kk: { overview:'Шолу', sections:'Бөлімдер', plan:'Менің жоспарым', mistakes:'Қателермен жұмыс', teacher:'Мұғалім панелі', welcome:'Саған бейімделетін математика', subtitle:'Нені жақсы білетініңді анықта, қайталау керек тақырыптарды тауып, жеке жоспарыңмен оқы.', start:'Диагностиканы бастау', progress:'Менің үлгерімім', completed:'Өтілген тақырып', best:'Ең жақсы нәтиже', recommended:'Қайталауға ұсынамыз', algebra:'Алгебра', geometry:'Геометрия', topics:'тақырып', lesson:'Қысқаша түсіндіру', begin:'Тестті бастау · 15 сұрақ', check:'Жауаптарды тексеру', next:'Бөлімдерге өту', noMistakes:'Қайталау үшін қате жоқ. Кез келген тақырып бойынша тест тапсыр.', testDone:'Тест аяқталды', answer:'Жауапты таңда', ask:'ЖИ көмекшіден сұра', chatPlaceholder:'Түсінбегеніңді жаз…', localAI:'Көмекші таңдалған тақырып бойынша түсіндіреді. Нақты ЖИ чатын іске қосу үшін сервер қажет.', classOverview:'Осы құрылғыдағы оқушылар үлгерімінің шолуы', noStudents:'Сыныпты көру үшін оқушылар осы құрылғыда кіруі керек. Ортақ онлайн статистикаға сервер қажет.', profile:'Оқушы профилі', join:'Электрондық поштасыз профиль жаса', save:'Профильді сақтау', name:'Аты', cancel:'Болдырмау', explain:'Қатені талдау', groupA:'Алгебра', groupG:'Геометрия', q:'Сұрақ', correct:'Дұрыс', wrong:'Қате', all:'Барлық тақырып', back:'Артқа', training:'Жеке жоспар', planText:'Алдымен нәтижесі 70%-дан төмен тақырыптарды қайтала. Кейін тестті қайта тапсыр.' },
  en: { overview:'Overview', sections:'Sections', plan:'My plan', mistakes:'Review mistakes', teacher:'Teacher dashboard', welcome:'Math that adapts to you', subtitle:'See what you know, find topics to review, and follow your personal learning plan.', start:'Take the diagnostic', progress:'My progress', completed:'Topics completed', best:'Best score', recommended:'Recommended review', algebra:'Algebra', geometry:'Geometry', topics:'topics', lesson:'Quick lesson', begin:'Start quiz · 15 questions', check:'Check answers', next:'Back to sections', noMistakes:'No mistakes to review yet. Take a quiz in any topic.', testDone:'Quiz complete', answer:'Choose an answer', ask:'Ask the AI helper', chatPlaceholder:'Ask what you’re unsure about…', localAI:'The study helper explains solutions based on the selected topic. A real AI chat requires a server connection.', classOverview:'Student progress on this device', noStudents:'Students must sign in on this device to appear here. Shared online class data requires a server.', profile:'Student profile', join:'Create a profile without email', save:'Save profile', name:'Name', explain:'Review the mistake', groupA:'Algebra', groupG:'Geometry', q:'Question', correct:'Correct', wrong:'Incorrect', all:'All topics', back:'Back', training:'Personal plan', planText:'Start by reviewing topics with scores below 70%. Then take the quiz again.' }
};

const questions = [
  { q:'Упростите: 3x + 2x', a:['5x','6x','5x²','x'], c:0, why:'Складываем коэффициенты подобных слагаемых: 3 + 2 = 5, значит 5x.' },
  { q:'Решите: x + 7 = 12', a:['x = 5','x = 19','x = 7','x = 4'], c:0, why:'Вычтем 7 из обеих частей: x = 12 − 7 = 5.' },
  { q:'Чему равна площадь прямоугольника со сторонами 4 и 6?', a:['24','20','10','12'], c:0, why:'Площадь прямоугольника равна произведению сторон: 4 · 6 = 24.' },
  { q:'Чему равна сумма углов треугольника?', a:['180°','90°','360°','270°'], c:0, why:'Сумма внутренних углов любого треугольника равна 180°.' },
  { q:'Вычислите: 2³', a:['8','6','9','5'], c:0, why:'2³ = 2 · 2 · 2 = 8.' },
  { q:'Чему равен √49?', a:['7','14','24','6'], c:0, why:'√49 = 7, потому что 7² = 49.' },
  { q:'Решите: 4x = 20', a:['x = 5','x = 16','x = 80','x = 4'], c:0, why:'Разделим обе части уравнения на 4: x = 20 ÷ 4 = 5.' },
  { q:'Найдите периметр квадрата со стороной 5.', a:['20','25','10','15'], c:0, why:'У квадрата четыре равные стороны: P = 4 · 5 = 20.' },
  { q:'Упростите: 10 − 3 · 2', a:['4','14','7','8'], c:0, why:'Сначала выполняем умножение: 10 − 6 = 4.' },
  { q:'Чему равна вероятность выпадения орла при одном броске монеты?', a:['1/2','1/3','1/4','1'], c:0, why:'У честной монеты два равновозможных исхода, один из них — орёл.' },
  { q:'Решите: x − 4 = 9', a:['x = 13','x = 5','x = 36','x = 9'], c:0, why:'Прибавим 4 к обеим частям: x = 9 + 4 = 13.' },
  { q:'Чему равна длина окружности радиуса r?', a:['2πr','πr²','πr','4πr²'], c:0, why:'Длина окружности вычисляется по формуле C = 2πr.' },
  { q:'Вычислите: 6²', a:['36','12','18','32'], c:0, why:'6² = 6 · 6 = 36.' },
  { q:'В прямоугольном треугольнике катеты 3 и 4. Гипотенуза равна…', a:['5','7','6','4'], c:0, why:'По теореме Пифагора c² = 3² + 4² = 25, поэтому c = 5.' },
  { q:'Вычислите среднее чисел 2, 4 и 6.', a:['4','3','5','12'], c:0, why:'Среднее: (2 + 4 + 6) ÷ 3 = 4.' }
];

const app = document.getElementById('app');
let language = localStorage.getItem('abai-language') || 'ru';
let profile = JSON.parse(localStorage.getItem('abai-profile') || 'null');
let currentTopic = null;
let selected = {};
let chatHistory = [];

function t(key) { return (text[language] && text[language][key]) || text.ru[key] || key; }
function title(topic) { return topic[language] || topic.ru; }
function progress() { return JSON.parse(localStorage.getItem('abai-progress') || '{}'); }
function saveProgress(data) { localStorage.setItem('abai-progress', JSON.stringify(data)); }
function safe(value) {
  return String(value).replace(/[&<>"']/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]));
}
function topicLink(index) { location.hash = `topic/${index}`; }

function setLanguage(value) {
  language = value;
  localStorage.setItem('abai-language', value);
  document.documentElement.lang = value;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t(key)) el.textContent = t(key);
  });
  render();
}
document.getElementById('language').value = language;
document.getElementById('language').addEventListener('change', e => setLanguage(e.target.value));

function profileButton() {
  const button = document.getElementById('profileButton');
  button.addEventListener('click', () => document.getElementById('loginDialog').showModal());
  document.getElementById('loginForm').addEventListener('submit', e => {
    e.preventDefault();
    profile = {
      name: document.getElementById('studentName').value.trim(),
      className: document.getElementById('className').value.trim()
    };
    localStorage.setItem('abai-profile', JSON.stringify(profile));
    document.getElementById('loginDialog').close();
    updateProfile();
    render();
  });
  updateProfile();
}
function updateProfile() {
  document.getElementById('profileName').textContent = profile ? profile.name : t('login');
  document.getElementById('avatar').textContent = profile ? profile.name.trim().charAt(0).toUpperCase() : '?';
  if (profile) {
    document.getElementById('studentName').value = profile.name;
    document.getElementById('className').value = profile.className;
  }
}

function render() {
  const page = location.hash.slice(1) || 'home';
  document.querySelectorAll('.nav-link').forEach(link => link.classList.toggle('active', link.dataset.page === page.split('/')[0]));
  const route = page.split('/');
  if (route[0] === 'topic' && topics[Number(route[1])]) return renderTopic(Number(route[1]));
  if (route[0] === 'sections') return renderSections();
  if (route[0] === 'plan') return renderPlan();
  if (route[0] === 'mistakes') return renderMistakes();
  if (route[0] === 'teacher') return renderTeacher();
  renderHome();
}

function renderHome() {
  const data = progress();
  const scores = Object.values(data).map(x => x.score || 0);
  const average = scores.length ? Math.round(scores.reduce((a,b) => a+b,0) / scores.length) : 0;
  const completed = Object.keys(data).length;
  app.innerHTML = `
    <section class="hero">
      <div class="eyebrow">ABAI SCHOOLS · ${language === 'ru' ? 'МАТЕМАТИКА' : language === 'kk' ? 'МАТЕМАТИКА' : 'MATHEMATICS'}</div>
      <h1>${t('welcome')}</h1><p>${t('subtitle')}</p>
      <button class="button light" onclick="location.hash='sections'">${t('start')} →</button>
    </section>
    <div class="stats-grid">
      <div class="stat-card"><span class="stat-label">${t('progress')}</span><strong class="stat-value">${average}%</strong><span class="stat-hint">${t('best')}</span></div>
      <div class="stat-card"><span class="stat-label">${t('completed')}</span><strong class="stat-value">${completed}/19</strong><span class="stat-hint">${t('sections')}</span></div>
      <div class="stat-card"><span class="stat-label">${t('class')}</span><strong class="stat-value">${profile ? safe(profile.className) : '—'}</strong><span class="stat-hint">${profile ? safe(profile.name) : t('login')}</span></div>
    </div>
    <div class="section-heading"><div><h2>${t('recommended')}</h2><p>${t('planText')}</p></div><button class="button outline small" onclick="location.hash='plan'">${t('plan')} →</button></div>
    <div class="section-grid">
      <a class="section-card" href="#sections"><div class="section-card-top"><span class="section-symbol">∑</span>↗</div><h3>${t('algebra')}</h3><p>10 ${t('topics')}</p></a>
      <a class="section-card" href="#sections"><div class="section-card-top"><span class="section-symbol">△</span>↗</div><h3>${t('geometry')}</h3><p>9 ${t('topics')}</p></a>
    </div>
    <div class="section-heading"><div><h2>Abai Schools Алгебра</h2><p>${language === 'ru' ? 'Работа выполнена учениками Жасуланом Нурмаханом, Есенкуловым Кадыргали и Мухтаровым Жомартом.' : language === 'kk' ? 'Жоба оқушылары: Жасулан Нурмахан, Есенкулов Кадыргали және Мұхтаров Жомарт.' : 'Created by students Zhasulan Nurmakhan, Yesenkulov Kadyrgali and Mukhtarov Zhomart.'}</p><p>${language === 'ru' ? 'Преподаватель: Кадиргалиев Ерболат Кудабаевич' : language === 'kk' ? 'Мұғалім: Кадиргалиев Ерболат Кудабаевич' : 'Teacher: Kadirgaliev Erbolat Kudabaevich'}</p></div></div>`;
}

function renderSections() {
  const data = progress();
  app.innerHTML = `<div class="welcome"><div class="eyebrow">${t('sections')}</div><h1>${t('sections')}</h1><p>${t('subtitle')}</p></div><div class="section-grid">
    ${['algebra','geometry'].map(group => {
      const list = topics.map((topic,i) => ({topic,i})).filter(x => x.topic.group === group);
      return `<section class="section-card"><div class="section-card-top"><span class="section-symbol">${group === 'algebra' ? '∑' : '△'}</span><span>${list.length} ${t('topics')}</span></div><h3>${t(group)}</h3><div class="topic-list">${list.map(({topic,i}) => {
        const score = data[i]?.score;
        return `<div class="topic-row" onclick="topicLink(${i})"><span class="topic-index">${String(i+1).padStart(2,'0')}</span><span class="topic-main"><b>${safe(title(topic))}</b><small>${score === undefined ? t('begin') : `${score}%`}</small></span><span class="topic-score">→</span></div>`;
      }).join('')}</div></section>`;
    }).join('')}
  </div>`;
}

function renderTopic(index) {
  currentTopic = index;
  selected = {};
  const topic = topics[index];
  const data = progress();
  const last = data[index];
  const langLesson = language === 'kk' ? 'Бұл тақырыптың негізгі ережесін мұқият оқып, формуланы тапсырмаларда қолданып көр.' : language === 'en' ? 'Review the key rule and try applying the formula to the questions below.' : topic.lesson;
  app.innerHTML = `<div class="welcome"><button class="button outline small" onclick="location.hash='sections'">← ${t('back')}</button><div class="eyebrow" style="margin-top:18px">${t(topic.group)}</div><h1>${safe(title(topic))}</h1><p>${t('lesson')}</p></div>
    <div class="lesson-box"><b>${t('lesson')}</b><br>${safe(language === 'ru' ? topic.lesson : langLesson)}</div>
    ${last ? `<div class="result-banner">${t('best')}: <strong>${last.score}%</strong> · ${last.date || ''}</div>` : ''}
    <div class="section-heading"><div><h2>${t('begin')}</h2><p>${language === 'ru' ? 'Выбери один вариант ответа в каждом задании.' : language === 'kk' ? 'Әр тапсырмада бір жауапты таңда.' : 'Choose one answer for each question.'}</p></div></div>
    <form id="quizForm">${questions.map((item,q) => `<div class="quiz-question" id="question-${q}"><div class="question-meta">${t('q')} ${q+1} / 15</div><div class="question-text">${safe(item.q)}</div><div class="answers">${item.a.map((answer,a) => `<button type="button" class="answer-option" data-q="${q}" data-a="${a}">${safe(answer)}</button>`).join('')}</div><div class="explanation" id="why-${q}">${safe(item.why)}</div></div>`).join('')}
    <button class="button primary" type="submit">${t('check')}</button></form><div id="quizResult"></div>
    <div class="card" style="margin-top:24px"><h3>${t('ask')}</h3><div class="ai-chat" id="chat">${chatHistory.map(x=>`<div class="chat-message ${x.role}">${safe(x.text)}</div>`).join('')}</div><form class="chat-form" id="chatForm"><input id="chatInput" placeholder="${t('chatPlaceholder')}" required><button class="button primary">${language === 'ru' ? 'Отправить' : language === 'kk' ? 'Жіберу' : 'Send'}</button></form><p class="stat-hint" style="margin-top:10px">${t('localAI')}</p></div>`;
  app.querySelectorAll('.answer-option').forEach(button => button.addEventListener('click', () => {
    const q = Number(button.dataset.q), a = Number(button.dataset.a);
    selected[q] = a;
    app.querySelectorAll(`[data-q="${q}"]`).forEach(b => b.classList.toggle('selected', b === button));
  }));
  document.getElementById('quizForm').addEventListener('submit', e => {
    e.preventDefault();
    if (Object.keys(selected).length < questions.length) {
      document.getElementById(`question-${Object.keys(selected).length}`).scrollIntoView({behavior:'smooth',block:'center'});
      return;
    }
    let right = 0;
    questions.forEach((item,q) => {
      const chosen = selected[q];
      const nodes = app.querySelectorAll(`[data-q="${q}"]`);
      nodes.forEach((button,a) => {
        button.disabled = true;
        if (a === item.c) button.classList.add('correct');
        if (a === chosen && a !== item.c) button.classList.add('wrong');
      });
      if (chosen === item.c) right++;
      else document.getElementById(`why-${q}`).classList.add('show');
    });
    const score = Math.round(right / questions.length * 100);
    const history = progress();
    history[index] = { score, right, total: questions.length, date: new Date().toLocaleDateString(language === 'en' ? 'en-US' : language === 'kk' ? 'kk-KZ' : 'ru-RU'), mistakes: questions.map((x,q)=>selected[q]===x.c ? null : q).filter(x=>x!==null) };
    saveProgress(history);
    document.getElementById('quizResult').innerHTML = `<div class="result-banner">${t('testDone')}: <strong>${right}/15 · ${score}%</strong><br><span>${score >= 70 ? t('correct') : t('recommended')}</span></div>`;
    document.getElementById('quizResult').scrollIntoView({behavior:'smooth'});
  });
  document.getElementById('chatForm').addEventListener('submit', e => {
    e.preventDefault();
    const input = document.getElementById('chatInput');
    const question = input.value.trim();
    if (!question) return;
    const reply = `${t('localAI')} ${language === 'ru' ? `В теме «${title(topic)}»: ${topic.lesson}` : topic.lesson}`;
    chatHistory.push({role:'user',text:question},{role:'assistant',text:reply});
    renderTopic(index);
  });
}

function renderPlan() {
  const data = progress();
  const weak = topics.map((topic,i)=>({topic,i,score:data[i]?.score})).filter(x=>x.score!==undefined).sort((a,b)=>a.score-b.score);
  app.innerHTML = `<div class="welcome"><div class="eyebrow">${t('training')}</div><h1>${t('plan')}</h1><p>${t('planText')}</p></div>
    ${!profile ? `<div class="empty">${t('noProfile')} <button class="button primary small" onclick="document.getElementById('loginDialog').showModal()">${t('login')}</button></div>` : ''}
    ${weak.length ? `<div class="topic-list">${weak.map(({topic,i,score})=>`<div class="topic-row" onclick="topicLink(${i})"><span class="topic-index">${score}%</span><span class="topic-main"><b>${safe(title(topic))}</b><small>${t('recommended')}</small></span><span class="topic-score">→</span></div>`).join('')}</div>` : `<div class="empty">${language==='ru'?'Пройди тесты по темам — результаты появятся здесь.':language==='kk'?'Тақырыптар бойынша тест тапсыр — нәтижелер осында көрінеді.':'Take topic quizzes to build your plan.'} <br><button class="button primary small" style="margin-top:12px" onclick="location.hash='sections'">${t('sections')}</button></div>`}`;
}

function renderMistakes() {
  const data = progress();
  const wrong = topics.map((topic,i)=>({topic,i,record:data[i]})).filter(x=>x.record?.mistakes?.length);
  app.innerHTML = `<div class="welcome"><div class="eyebrow">${t('mistakes')}</div><h1>${t('mistakes')}</h1><p>${language==='ru'?'Повтори вопросы, в которых ошибся, и прочитай объяснение решения.':language==='kk'?'Қате жіберген сұрақтарды қайталап, шешім түсіндірмесін оқы.':'Review questions you missed and read the solution explanations.'}</p></div>
    ${wrong.length ? wrong.map(({topic,i,record})=>`<div class="card" style="margin-bottom:12px"><h3>${safe(title(topic))}</h3><p class="muted">${record.score}% · ${record.mistakes.length} ${language==='ru'?'ошибок':'mistakes'}</p><button class="button outline small" onclick="topicLink(${i})">${t('explain')} →</button></div>`).join('') : `<div class="empty">${t('noMistakes')}<br><button class="button primary small" style="margin-top:12px" onclick="location.hash='sections'">${t('sections')}</button></div>`}`;
}

function renderTeacher() {
  const data = progress();
  const items = Object.entries(data).map(([i,r])=>({topic:topics[Number(i)],score:r.score}));
  app.innerHTML = `<div class="welcome"><div class="eyebrow">${t('teacher')}</div><h1>${t('teacher')}</h1><p>${t('classOverview')}</p></div>
    ${profile ? `<div class="card"><div class="section-heading"><div><h3>${safe(profile.className)} · ${safe(profile.name)}</h3><p>${items.length} ${t('completed')}</p></div></div>${items.map(x=>`<div class="topic-row" style="cursor:default"><span class="topic-main"><b>${safe(title(x.topic))}</b><small>${safe(profile.name)}</small></span><span class="topic-score">${x.score}%</span></div>`).join('') || `<p class="muted">${t('noStudents')}</p>`}</div>` : `<div class="empty">${t('noStudents')}<br><button class="button primary small" style="margin-top:12px" onclick="document.getElementById('loginDialog').showModal()">${t('login')}</button></div>`}
    <p class="stat-hint" style="margin-top:14px">${language==='ru'?'Демо хранит данные в браузере на этом устройстве. Чтобы учитель видел весь класс на разных устройствах, сайту нужен сервер и база данных.':language==='kk'?'Демо деректерді осы құрылғының браузерінде сақтайды. Сыныпты онлайн көру үшін сервер мен дерекқор қажет.':'Demo data is stored in this browser on this device. A server and database are needed for shared class progress across devices.'}</p>`;
}

profileButton();
window.addEventListener('hashchange', render);
updateProfile();
render();
