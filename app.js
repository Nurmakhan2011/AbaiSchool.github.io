'use strict';

const topics = [
  {group:'algebra',ru:'Выражения, формулы сокращённого умножения и разложение на множители',kk:'Өрнектер және көбейткіштерге жіктеу',en:'Expressions and factorisation',lesson:'Формулы: (a + b)² = a² + 2ab + b²; a² − b² = (a − b)(a + b).'},
  {group:'algebra',ru:'Уравнения, неравенства и их системы',kk:'Теңдеулер, теңсіздіктер және жүйелер',en:'Equations, inequalities and systems',lesson:'Выполняйте одинаковые действия с обеими частями уравнения. При делении неравенства на отрицательное число меняйте его знак.'},
  {group:'algebra',ru:'Функции и графики',kk:'Функциялар және графиктер',en:'Functions and graphs',lesson:'Линейная функция имеет вид y = kx + b. Подставьте x, чтобы найти y.'},
  {group:'algebra',ru:'Квадратные уравнения и квадратичная функция',kk:'Квадрат теңдеулер және квадраттық функция',en:'Quadratic equations and functions',lesson:'Для ax² + bx + c = 0 дискриминант D = b² − 4ac.'},
  {group:'algebra',ru:'Степени, корни и дробные выражения',kk:'Дәрежелер, түбірлер және бөлшектер',en:'Powers, roots and fractions',lesson:'При умножении степеней с одинаковым основанием показатели складываются. Знаменатель дроби не может быть равен нулю.'},
  {group:'algebra',ru:'Прогрессии',kk:'Прогрессиялар',en:'Sequences',lesson:'В арифметической прогрессии aₙ = a₁ + d(n − 1).'},
  {group:'algebra',ru:'Тригонометрические функции и уравнения',kk:'Тригонометриялық функциялар және теңдеулер',en:'Trigonometric functions and equations',lesson:'Основное тождество: sin²x + cos²x = 1. Повторите табличные значения синуса и косинуса.'},
  {group:'algebra',ru:'Показательные и логарифмические функции, уравнения',kk:'Көрсеткіштік және логарифмдік функциялар',en:'Exponential and logarithmic functions',lesson:'Логарифм logₐb — показатель степени, в которую нужно возвести a, чтобы получить b.'},
  {group:'algebra',ru:'Производная и её применение',kk:'Туынды және оның қолданылуы',en:'Derivatives and applications',lesson:'Производная xⁿ равна nxⁿ⁻¹ и показывает скорость изменения функции.'},
  {group:'algebra',ru:'Вероятность и статистика',kk:'Ықтималдық және статистика',en:'Probability and statistics',lesson:'Вероятность — отношение благоприятных исходов к общему числу равновозможных исходов.'},
  {group:'geometry',ru:'Углы, прямые и треугольники',kk:'Бұрыштар, түзулер және үшбұрыштар',en:'Angles, lines and triangles',lesson:'Сумма углов треугольника равна 180°. Смежные углы в сумме дают 180°.'},
  {group:'geometry',ru:'Равенство и подобие треугольников',kk:'Үшбұрыштардың теңдігі және ұқсастығы',en:'Congruent and similar triangles',lesson:'У подобных треугольников соответствующие углы равны, а стороны пропорциональны.'},
  {group:'geometry',ru:'Четырёхугольники и их свойства',kk:'Төртбұрыштар және олардың қасиеттері',en:'Quadrilaterals and their properties',lesson:'Сумма углов четырёхугольника равна 360°. У параллелограмма противоположные стороны равны.'},
  {group:'geometry',ru:'Площади фигур и теорема Пифагора',kk:'Фигуралардың аудандары және Пифагор теоремасы',en:'Areas and the Pythagorean theorem',lesson:'Для прямоугольного треугольника c² = a² + b². Площадь прямоугольника равна ab.'},
  {group:'geometry',ru:'Окружность и круг',kk:'Шеңбер және дөңгелек',en:'Circles and disks',lesson:'Длина окружности C = 2πr. Площадь круга S = πr².'},
  {group:'geometry',ru:'Векторы и координаты',kk:'Векторлар және координаталар',en:'Vectors and coordinates',lesson:'Координаты вектора AB: (x₂ − x₁; y₂ − y₁).'},
  {group:'geometry',ru:'Прямые и плоскости в пространстве',kk:'Кеңістіктегі түзулер мен жазықтықтар',en:'Lines and planes in space',lesson:'Прямые в пространстве могут пересекаться, быть параллельными или скрещиваться.'},
  {group:'geometry',ru:'Призмы, пирамиды и их объёмы',kk:'Призмалар, пирамидалар және көлемдері',en:'Prisms, pyramids and volumes',lesson:'Объём призмы V = Sоснh. Объём пирамиды V = ⅓Sоснh.'},
  {group:'geometry',ru:'Цилиндр, конус и шар: площади и объёмы',kk:'Цилиндр, конус және шар',en:'Cylinder, cone and sphere',lesson:'Объёмы: цилиндр V = πr²h, конус V = ⅓πr²h, шар V = ⁴⁄₃πr³.'}
];

function makeQ(i, question, correct, wrong, explanation) {
  const answer = String(correct);
  const options = [...new Set([answer, ...wrong.map(String)])].slice(0, 4);
  while (options.length < 4) options.push(`Вариант ${options.length + 1}`);
  const shift = i % 4;
  const shuffled = options.map((_, n) => options[(n - shift + 4) % 4]);
  return {q:question, a:shuffled, c:shuffled.indexOf(answer), why:explanation};
}

/* У каждой темы отдельный генератор, каждый выдаёт 15 заданий. */
const generators = [
  i => {
    const n=i+2;
    if(i%3===0) return makeQ(i,`Раскройте скобки: (x + ${n})²`,`x² + ${2*n}x + ${n*n}`,
      [`x² + ${n}x + ${n*n}`,`x² + ${2*n}x + ${n}`,`x² − ${2*n}x + ${n*n}`],
      'Используем формулу (x + a)² = x² + 2ax + a².');
    if(i%3===1) return makeQ(i,`Разложите на множители: x² − ${n*n}`,`(x − ${n})(x + ${n})`,
      [`(x − ${n})²`,`(x + ${n})²`,`(x − ${n*n})(x + 1)`],
      'Это разность квадратов: x² − a² = (x − a)(x + a).');
    return makeQ(i,`Раскройте скобки: (x + ${n})(x + 1)`,`x² + ${n+1}x + ${n}`,
      [`x² + ${n}x + 1`,`x² + ${n+1}x + 1`,`x² + x + ${n}`],
      `После перемножения получаем x² + ${n+1}x + ${n}.`);
  },

  i => {
    const x=i+2, a=i%7+2;
    if(i%3===0) return makeQ(i,`Решите: x + ${a} = ${x+a}`,`x = ${x}`,
      [`x = ${x+a}`,`x = ${x-a}`,`x = ${a}`],`Вычитаем ${a} из обеих частей.`);
    if(i%3===1) {
      const k=i+3;
      return makeQ(i,`Решите: 2x + ${a} < ${2*k+a}`,`x < ${k}`,
        [`x > ${k}`,`x < ${k+a}`,`x > ${k+a}`],'Вычитаем слагаемое и делим обе части на 2.');
    }
    const y=i%5+1;
    return makeQ(i,`Система: x + y = ${x+y}, x − y = ${x-y}. Найдите x.`,`x = ${x}`,
      [`x = ${y}`,`x = ${x+y}`,`x = ${x-y}`],'Сложите уравнения системы, чтобы найти x.');
  },

  i => {
    const k=i%5+1, b=i%7-2, x=i%6+1, y=k*x+b;
    return makeQ(i,`Для y = ${k}x ${b<0?'− '+Math.abs(b):'+ '+b} найдите y при x = ${x}.`,`y = ${y}`,
      [`y = ${y+k}`,`y = ${y-b}`,`y = ${k+b+x}`],`Подставляем x = ${x}; получаем y = ${y}.`);
  },

  i => {
    const p=i%6+1, r=p+i%4+1;
    return makeQ(i,`Найдите корни: (x − ${p})(x − ${r}) = 0.`,`x = ${p} и x = ${r}`,
      [`x = ${-p} и x = ${-r}`,`x = ${p+r}`,`x = ${p*r}`],
      `Приравниваем каждый множитель к нулю: x = ${p} или x = ${r}.`);
  },

  i => {
    const n=i%5+2;
    if(i%3===0) return makeQ(i,`Вычислите 2 в степени ${n}.`,2**n,
      [2*n,2**(n-1),2**n+2],`2 в степени ${n} равняется ${2**n}.`);
    if(i%3===1) return makeQ(i,`Найдите √${n*n}.`,n,
      [n*n,2*n,n+1],`√${n*n} = ${n}, потому что ${n}² = ${n*n}.`);
    return makeQ(i,`Сократите дробь ${2*n}/${4*n}`,'1/2',
      ['1/4','2/3','2/1'],'Разделите числитель и знаменатель на общий множитель.');
  },

  i => {
    const a=i%6+1, d=i%4+2, n=i%7+3, result=a+d*(n-1);
    return makeQ(i,`В арифметической прогрессии a₁ = ${a}, d = ${d}. Найдите a${n}.`,result,
      [a+d*n,result+d,a*n+d],`aₙ = a₁ + d(n − 1) = ${result}.`);
  },

  i => {
    const table=[
      ['sin 0°','0','1','1/2','√3/2'],['sin 30°','1/2','0','√3/2','1'],
      ['sin 45°','√2/2','1/2','√3/2','0'],['sin 60°','√3/2','1/2','1','√2/2'],
      ['sin 90°','1','0','1/2','√3/2'],['cos 0°','1','0','1/2','√3/2'],
      ['cos 30°','√3/2','1/2','1','0'],['cos 45°','√2/2','1/2','√3/2','1'],
      ['cos 60°','1/2','√3/2','0','1'],['cos 90°','0','1','1/2','√2/2'],
      ['sin²x + cos²x','1','0','2','sin x'],['2 sin 30°','1','2','√3','1/2'],
      ['2 cos 60°','1','2','√3','1/2'],['sin 90° + cos 0°','2','1','0','1/2'],
      ['sin 0° + cos 0°','1','0','2','1/2']
    ];
    const [question,correct,...wrong]=table[i];
    return makeQ(i,`Вычислите ${question}.`,correct,wrong,`По табличным значениям ответ: ${correct}.`);
  },

  i => {
    const n=i%5+2;
    if(i%2===0) return makeQ(i,`Решите: 2ˣ = ${2**n}.`,`x = ${n}`,
      [`x = ${2**n}`,`x = ${n+1}`,`x = ${n-1}`],`Так как 2 в степени ${n} равно ${2**n}, x = ${n}.`);
    return makeQ(i,`Вычислите log₂(${2**n}).`,n,
      [2**n,n+1,n-1],`2 в степени ${n} равно ${2**n}, значит логарифм равен ${n}.`);
  },

  i => {
    const a=i%5+1, n=i%4+2, coefficient=a*n, power=n-1;
    const answer=`${coefficient}x${power===1?'':' в степени '+power}`;
    return makeQ(i,`Найдите производную ${a}x в степени ${n}.`,answer,
      [`${a}x в степени ${power}`,`${coefficient}x в степени ${n}`,`${n}x в степени ${n}`],
      `По правилу (axⁿ)' = an·xⁿ⁻¹. Ответ: ${answer}.`);
  },

  i => {
    if(i%3===0) {
      const a=i+1,b=i+3,c=i+5,mean=(a+b+c)/3;
      return makeQ(i,`Найдите среднее чисел ${a}, ${b}, ${c}.`,mean,
        [mean+1,mean-1,a+b+c],`Сложите числа и разделите сумму на 3: ${mean}.`);
    }
    if(i%3===1) {
      const total=i+4;
      return makeQ(i,`У события ${total} равновозможных исходов, благоприятен один. Найдите вероятность.`,
        `1/${total}`,[`${total}/1`,`1/${total+1}`,`1/${total-1}`],
        `Вероятность = благоприятные исходы / все исходы = 1/${total}.`);
    }
    const favorable=i%4+1,total=8;
    return makeQ(i,`Из ${total} исходов благоприятны ${favorable}. Найдите вероятность.`,
      `${favorable}/${total}`,[`${total}/${favorable}`,`${favorable+1}/${total}`,`${favorable}/${total-1}`],
      `Вероятность равна ${favorable}/${total}.`);
  },

  i => {
    const a=35+i%5*5,b=45+i%4*5,c=180-a-b;
    return makeQ(i,`Два угла треугольника равны ${a}° и ${b}°. Найдите третий.`,`${c}°`,
      [`${180-c}°`,`${a+b}°`,`${90-c}°`],`Сумма углов треугольника 180°: третий угол равен ${c}°.`);
  },

  i => {
    if(i%3===0) {
      const scale=i%4+2,side=i%5+2;
      return makeQ(i,`Коэффициент подобия ${scale}, малая сторона ${side}. Найдите соответствующую большую сторону.`,
        scale*side,[side+scale,scale+side+1,side*2],`Умножаем ${side} на коэффициент ${scale}.`);
    }
    if(i%3===1) {
      const base=40+i%4*5,top=180-2*base;
      return makeQ(i,`В равнобедренном треугольнике угол при вершине ${top}°. Найдите угол при основании.`,
        `${base}°`,[`${top}°`,`${180-top}°`,`${base/2}°`],
        `Углы при основании равны: (180° − ${top}°) ÷ 2 = ${base}°.`);
    }
    const side=i+3;
    return makeQ(i,`Соответствующая сторона первого из равных треугольников равна ${side}. Чему равна сторона второго?`,
      side,[side+1,side*2,side-1],'У равных треугольников соответствующие стороны равны.');
  },

  i => {
    if(i%3===0) {
      const a=70+i%4*10;
      return makeQ(i,`Угол параллелограмма равен ${a}°. Найдите противоположный угол.`,
        `${a}°`,[`${180-a}°`,`${360-a}°`,'90°'],'Противоположные углы параллелограмма равны.');
    }
    if(i%3===1) {
      const a=70+i%4*10,b=80,c=90,d=360-a-b-c;
      return makeQ(i,`У четырёхугольника три угла ${a}°, ${b}° и ${c}°. Найдите четвёртый.`,
        `${d}°`,[`${360-d}°`,`${a+b+c}°`,'90°'],'Сумма углов четырёхугольника равна 360°.');
    }
    const side=i+2;
    return makeQ(i,`Найдите периметр ромба со стороной ${side}.`,4*side,
      [side*side,2*side,4*side+2],'Периметр ромба равен четырём сторонам.');
  },

  i => {
    if(i%3===0) {
      const a=i+2,b=i+4;
      return makeQ(i,`Площадь прямоугольника со сторонами ${a} и ${b}?`,a*b,
        [2*(a+b),a+b,a*b+2],`Площадь равна произведению сторон: ${a} · ${b} = ${a*b}.`);
    }
    if(i%3===1) {
      const triples=[[3,4,5],[5,12,13],[6,8,10],[8,15,17],[9,12,15]];
      const [a,b,c]=triples[i%5];
      return makeQ(i,`Катеты прямоугольного треугольника ${a} и ${b}. Найдите гипотенузу.`,
        c,[a+b,c+1,b+1],`По теореме Пифагора гипотенуза равна ${c}.`);
    }
    const base=i+3,height=4;
    return makeQ(i,`Найдите площадь треугольника с основанием ${base} и высотой ${height}.`,
      base*height/2,[base*height,base+height,base*height/2+2],
      `Площадь равна ah/2 = ${base} · ${height} ÷ 2.`);
  },

  i => {
    const r=i%7+1;
    if(i%2===0) return makeQ(i,`Найдите длину окружности радиуса ${r}.`,`${2*r}π`,
      [`${r*r}π`,`${r}π`,`${4*r}π`],`C = 2πr = ${2*r}π.`);
    return makeQ(i,`Найдите площадь круга радиуса ${r}.`,`${r*r}π`,
      [`${2*r}π`,`${r}π`,`${2*r*r}π`],`S = πr² = ${r*r}π.`);
  },

  i => {
    const x1=i%5,y1=i%4,dx=i%5+1,dy=i%3+1,x2=x1+dx,y2=y1+dy;
    return makeQ(i,`A(${x1}; ${y1}), B(${x2}; ${y2}). Найдите координаты AB.`,
      `(${dx}; ${dy})`,[`(${x2}; ${y2})`,`(${x1}; ${y1})`,`(${dy}; ${dx})`],
      `AB = (${x2} − ${x1}; ${y2} − ${y1}) = (${dx}; ${dy}).`);
  },

  i => {
    const facts=[
      ['Какие прямые не пересекаются и не лежат в одной плоскости?','Скрещивающиеся',['Параллельные','Совпадающие','Пересекающиеся'],'Это скрещивающиеся прямые.'],
      ['Сколько общих точек имеют две параллельные прямые?','0',['1','2','Бесконечно много'],'Параллельные прямые не пересекаются.'],
      ['Сколько общих точек у пересекающихся прямых?','1',['0','2','Бесконечно много'],'У пересекающихся прямых одна общая точка.'],
      ['Сколько точек задают единственную прямую?','Две различные точки',['Одна','Три точки на прямой','Четыре'],'Через две точки проходит единственная прямая.'],
      ['Сколько точек не на одной прямой задают плоскость?','Три',['Одна','Две','Четыре на одной прямой'],'Три такие точки задают плоскость.'],
      ['По чему пересекаются две различные плоскости?','По прямой',['По точке','По окружности','По отрезку'],'Пересечением двух плоскостей является прямая.'],
      ['Под каким углом прямая перпендикулярна плоскости?','90°',['45°','180°','0°'],'Перпендикулярность означает угол 90°.'],
      ['Могут ли скрещивающиеся прямые пересекаться?','Нет',['Да','Только в одной точке','Всегда'],'Скрещивающиеся прямые не имеют общей точки.'],
      ['В какой фигуре лежат параллельные прямые?','В одной плоскости',['В одной сфере','В разных плоскостях всегда','В конусе'],'Параллельные прямые лежат в одной плоскости.'],
      ['Что является пересечением двух плоскостей?','Прямая',['Луч','Отрезок','Окружность'],'Если плоскости пересекаются, их общая часть — прямая.'],
      ['Прямая и точка вне неё задают сколько плоскостей?','Одну',['Ни одной','Две','Бесконечно много'],'Прямая и точка вне неё задают одну плоскость.'],
      ['Могут ли параллельные плоскости иметь общую точку?','Нет',['Да, одну','Да, две','Всегда'],'Параллельные плоскости не пересекаются.'],
      ['Две общие точки у прямых означают, что прямые…','Совпадают',['Параллельны','Скрещиваются','Перпендикулярны'],'Через две точки проходит одна прямая.'],
      ['Что получается при сечении многогранника плоскостью?','Многоугольник',['Окружность','Конус','Только точка'],'Сечение многогранника плоскостью является многоугольником.'],
      ['Могут ли прямые одновременно пересекаться и быть параллельными?','Нет',['Да','Только в пространстве','Всегда'],'Параллельные прямые не пересекаются по определению.']
    ];
    const [question,answer,wrong,why]=facts[i];
    return makeQ(i,question,answer,wrong,why);
  },

  i => {
    const base=i%6+2,height=i%5+2;
    if(i%2===0) return makeQ(i,`Площадь основания призмы ${base}, высота ${height}. Найдите объём.`,
      base*height,[base*height+base,base+height,base*height*2],
      `Объём призмы равен площади основания, умноженной на высоту.`);
    const volume=base*height/3;
    return makeQ(i,`Площадь основания пирамиды ${base}, высота ${height}. Найдите объём.`,
      volume,[base*height,base+height,volume+base],
      `Объём пирамиды равен трети произведения площади основания на высоту.`);
  },

  i => {
    if(i%3===0) {
      const r=i%4+1,h=i%5+2,v=r*r*h;
      return makeQ(i,`Найдите объём цилиндра с радиусом ${r} и высотой ${h}.`,`${v}π`,
        [`${r*h}π`,`${2*r*h}π`,`${v/2}π`],`V = πr²h = ${v}π.`);
    }
    if(i%3===1) {
      const r=i%3+1,h=3*r,v=r*r*h/3;
      return makeQ(i,`Найдите объём конуса с радиусом ${r} и высотой ${h}.`,`${v}π`,
        [`${r*r*h}π`,`${r*h}π`,`${v+1}π`],`V = ⅓πr²h = ${v}π.`);
    }
    const r=i%4+1,v=4*r*r*r;
    return makeQ(i,`Найдите объём шара радиуса ${r}.`,`${v}/3π`,
      [`${r*r*r}π`,`${2*r*r}π`,`${v}/2π`],`V = ⁴⁄₃πr³ = ${v}/3π.`);
  }
];

function questionsFor(topicIndex) {
  return Array.from({length:15}, (_, i) => generators[topicIndex](i));
}

const app = document.getElementById('app');
const languageSelect = document.getElementById('language');
const profileButton = document.getElementById('profileButton');
const loginDialog = document.getElementById('loginDialog');
const loginForm = document.getElementById('loginForm');

let language = localStorage.getItem('abai-language') || 'ru';
let profile = readJSON('abai-profile', null);

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
function titleOf(topic) {
  return topic[language] || topic.ru;
}
function safe(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
  })[char]);
}
function getResults() {
  return readJSON('abai-progress', {});
}

function localDay() {
  const date = new Date();
  return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
}
function dayNumber(value) {
  const [y,m,d] = value.split('-').map(Number);
  return Math.floor(Date.UTC(y,m-1,d)/86400000);
}
function getStreak() {
  return readJSON('abai-streak', {current:0,best:0,lastDay:''});
}
function recordStudyDay() {
  const streak = getStreak();
  const today = localDay();
  if (streak.lastDay === today) return streak;

  if (!streak.lastDay) streak.current = 1;
  else {
    const gap = dayNumber(today) - dayNumber(streak.lastDay);
    if (gap === 1) streak.current++;
    else if (gap > 1) streak.current = 1;
    else return streak;
  }

  streak.lastDay = today;
  streak.best = Math.max(streak.best, streak.current);
  saveJSON('abai-streak', streak);
  return streak;
}

function achievements() {
  const result = getResults();
  const done = Object.keys(result).map(Number);
  const streak = getStreak();
  const attempts = Number(localStorage.getItem('abai-attempts') || 0);
  const algebra = done.filter(i => topics[i]?.group === 'algebra').length;
  const geometry = done.filter(i => topics[i]?.group === 'geometry').length;

  const textByLanguage = {
    ru:[['Первый шаг','Пройди первый тест'],['Без ошибок','Набери 100%'],['Исследователь','Пройди 5 тем'],['Алгебра освоена','Пройди 10 тем алгебры'],['Геометрия освоена','Пройди 9 тем геометрии'],['Три дня подряд','Занимайся 3 дня подряд'],['Неделя занятий','Занимайся 7 дней подряд']],
    kk:[['Алғашқы қадам','Алғашқы тестті тапсыр'],['Қатесіз','100% жина'],['Зерттеуші','5 тақырыпты өт'],['Алгебра меңгерілді','Алгебраның 10 тақырыбын өт'],['Геометрия меңгерілді','Геометрияның 9 тақырыбын өт'],['Үш күн қатарынан','3 күн оқы'],['Оқу аптасы','7 күн оқы']],
    en:[['First step','Complete your first quiz'],['Perfect score','Get 100%'],['Explorer','Complete 5 topics'],['Algebra mastered','Complete 10 algebra topics'],['Geometry mastered','Complete 9 geometry topics'],['Three-day streak','Study 3 days in a row'],['Study week','Study 7 days in a row']]
  }[language];

  return [
    ['🌱',attempts>=1,0],['💯',Object.values(result).some(x=>x.score===100),1],
    ['🧭',done.length>=5,2],['∑',algebra>=10,3],['△',geometry>=9,4],
    ['🔥',streak.best>=3,5],['🏆',streak.best>=7,6]
  ].map(([icon,earned,n])=>({icon,earned,title:textByLanguage[n][0],note:textByLanguage[n][1]}));
}

function gamificationMarkup() {
  const streak = getStreak();
  const days = language==='en' ? (streak.current===1?'day':'days') : language==='kk'?'күн':(streak.current===1?'день':'дней');

  return `
    <section class="gamification">
      <div class="streak-card">
        <span class="streak-icon">🔥</span>
        <div><b>${tr('series')}</b><strong>${streak.current} ${days}</strong><small>${tr('record')}: ${streak.best}</small></div>
      </div>
      <div class="section-heading"><div><h2>${tr('achievements')}</h2></div></div>
      <div class="achievement-grid">
        ${achievements().map(item=>`
          <article class="achievement-card ${item.earned?'earned':'locked'}">
            <span class="achievement-icon">${item.icon}</span><b>${item.title}</b><small>${item.note}</small>
          </article>`).join('')}
      </div>
    </section>`;
}

function updateProfile() {
  const name = document.getElementById('profileName');
  const avatar = document.getElementById('avatar');
  if (name) name.textContent = profile?.name || tr('login');
  if (avatar) avatar.textContent = profile?.name?.charAt(0).toUpperCase() || '?';
  if (profile) {
    const nameInput=document.getElementById('studentName');
    const classInput=document.getElementById('className');
    if(nameInput) nameInput.value=profile.name;
    if(classInput) classInput.value=profile.className;
  }
}
profileButton?.addEventListener('click',()=>loginDialog?.showModal());
loginForm?.addEventListener('submit',event=>{
  event.preventDefault();
  const name=document.getElementById('studentName').value.trim();
  const className=document.getElementById('className').value.trim();
  if(!name||!className)return;
  profile={name,className};
  saveJSON('abai-profile',profile);
  loginDialog.close();
  updateProfile();
  render();
});

function setLanguage(next) {
  if(!translations[next])return;
  language=next;
  localStorage.setItem('abai-language',next);
  document.documentElement.lang=next;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const value=translations[next][el.dataset.i18n];
    if(value)el.textContent=value;
  });
  render();
  updateProfile();
}
languageSelect.value=language;
languageSelect.addEventListener('change',event=>setLanguage(event.target.value));
document.documentElement.lang=language;

function openTopic(index) { location.hash=`topic/${index}`; }

function render() {
  if(!app)return;
  const [page,id]=(location.hash.replace(/^#/,'')||'home').split('/');
  document.querySelectorAll('.nav-link[data-page]').forEach(link=>{
    link.classList.toggle('active',link.dataset.page===page);
  });
  if(page==='topic') {
    const index=Number(id);
    if(Number.isInteger(index)&&topics[index])return renderTopic(index);
    location.hash='sections'; return;
  }
  if(page==='sections')return renderSections();
  if(page==='plan')return renderPlan();
  if(page==='mistakes')return renderMistakes();
  if(page==='teacher')return renderTeacher();
  renderHome();
}

function renderHome() {
  const results=getResults();
  const scores=Object.values(results).map(x=>x.score);
  const average=scores.length?Math.round(scores.reduce((a,b)=>a+b,0)/scores.length):0;

  app.innerHTML=`
    <section class="hero">
      <div class="eyebrow">ABAI SCHOOLS · MATHEMATICS</div>
      <h1>${tr('welcome')}</h1><p>${tr('subtitle')}</p>
      <button class="button light" type="button" onclick="location.hash='sections'">${tr('start')} →</button>
    </section>
    <div class="stats-grid">
      <div class="stat-card"><span class="stat-label">${tr('progress')}</span><strong class="stat-value">${average}%</strong><span class="stat-hint">${tr('best')}</span></div>
      <div class="stat-card"><span class="stat-label">${tr('completed')}</span><strong class="stat-value">${Object.keys(results).length}/19</strong><span class="stat-hint">${tr('sections')}</span></div>
      <div class="stat-card"><span class="stat-label">${tr('yourClass')||'Класс'}</span><strong class="stat-value">${profile?safe(profile.className):'—'}</strong><span class="stat-hint">${profile?safe(profile.name):tr('login')}</span></div>
    </div>
    ${gamificationMarkup()}
    <div class="section-heading"><div><h2>${tr('recommended')}</h2><p>${tr('noPlan')}</p></div><button class="button outline small" type="button" onclick="location.hash='plan'">${tr('myPlan')} →</button></div>
    <div class="section-grid">
      <a class="section-card" href="sections.html#sections"><div class="section-card-top"><span class="section-symbol">∑</span>↗</div><h3>${tr('algebra')}</h3><p>10 ${tr('topics')}</p></a>
      <a class="section-card" href="sections.html#sections"><div class="section-card-top"><span class="section-symbol">△</span>↗</div><h3>${tr('geometry')}</h3><p>9 ${tr('topics')}</p></a>
    </div>
    <div class="section-heading"><div><h2>Abai Schools Алгебра</h2><p>Работа выполнена учениками Жасулана Нурмахана, Есенкулова Кадыргали и Мухтарова Жомарта.</p><p>Преподаватель: Кадиргалиев Ерболат Кудабаевич.</p></div></div>`;
}

function renderSections() {
  const results=getResults();
  const groups=['algebra','geometry'].map(group=>{
    const list=topics.map((topic,index)=>({topic,index})).filter(x=>x.topic.group===group);
    return `<section class="section-card">
      <div class="section-card-top"><span class="section-symbol">${group==='algebra'?'∑':'△'}</span><span>${list.length} ${tr('topics')}</span></div>
      <h3>${tr(group)}</h3><div class="topic-list">
      ${list.map(({topic,index})=>`<button class="topic-row" type="button" data-topic="${index}">
        <span class="topic-index">${String(index+1).padStart(2,'0')}</span>
        <span class="topic-main"><b>${safe(titleOf(topic))}</b><small>${results[index]?`${results[index].score}%`:tr('begin')}</small></span><span class="topic-score">→</span>
      </button>`).join('')}</div></section>`;
  }).join('');
  app.innerHTML=`<div class="welcome"><div class="eyebrow">${tr('sections')}</div><h1>${tr('sections')}</h1><p>${tr('subtitle')}</p></div><div class="section-grid">${groups}</div>`;
  app.querySelectorAll('[data-topic]').forEach(btn=>btn.addEventListener('click',()=>openTopic(Number(btn.dataset.topic))));
}

function renderTopic(index) {
  const topic=topics[index], questions=questionsFor(index), previous=getResults()[index];
  const selected={};

  app.innerHTML=`
    <div class="welcome"><button class="button outline small" type="button" onclick="location.hash='sections'">← ${tr('back')}</button><div class="eyebrow" style="margin-top:18px">${tr(topic.group)}</div><h1>${safe(titleOf(topic))}</h1></div>
    <div class="lesson-box"><b>${tr('lesson')}</b><br>${safe(topic.lesson)}</div>
    ${previous?`<div class="result-banner">${tr('best')}: <strong>${previous.score}%</strong></div>`:''}
    <div class="section-heading"><div><h2>${tr('begin')}</h2><p>${tr('choose')}</p></div></div>
    <form id="quizForm">
      ${questions.map((item,q)=>`<section class="quiz-question" id="question-${q}">
        <div class="question-meta">${tr('question')} ${q+1} / 15</div><div class="question-text">${safe(item.q)}</div>
        <div class="answers">${item.a.map((answer,a)=>`<button class="answer-option" type="button" data-q="${q}" data-a="${a}">${safe(answer)}</button>`).join('')}</div>
        <div class="explanation" id="explanation-${q}">${safe(item.why)}</div>
      </section>`).join('')}
      <button class="button primary" type="submit">${tr('check')}</button>
    </form>
    <div id="quizResult"></div>
    <section class="card" style="margin-top:24px"><h3>${tr('ask')}</h3><div class="ai-chat" id="chatMessages"></div>
      <form class="chat-form" id="chatForm"><input id="chatInput" placeholder="${tr('chatPlaceholder')}" required maxlength="300"><button class="button primary">${tr('send')}</button></form>
      <p class="stat-hint" style="margin-top:10px">${tr('chatNote')}</p>
    </section>`;

  app.querySelectorAll('.answer-option').forEach(button=>button.addEventListener('click',()=>{
    const q=Number(button.dataset.q);
    selected[q]=Number(button.dataset.a);
    app.querySelectorAll(`[data-q="${q}"]`).forEach(option=>option.classList.toggle('selected',option===button));
  }));

  document.getElementById('quizForm').addEventListener('submit',event=>{
    event.preventDefault();
    const missing=questions.findIndex((_,q)=>selected[q]===undefined);
    if(missing!==-1){document.getElementById(`question-${missing}`).scrollIntoView({behavior:'smooth',block:'center'});return;}

    let correct=0;
    const mistakes=[];
    questions.forEach((question,q)=>{
      app.querySelectorAll(`[data-q="${q}"]`).forEach((option,a)=>{
        option.disabled=true;
        if(a===question.c)option.classList.add('correct');
        if(a===selected[q]&&selected[q]!==question.c)option.classList.add('wrong');
      });
      if(selected[q]===question.c)correct++;
      else {mistakes.push(q);document.getElementById(`explanation-${q}`).classList.add('show');}
    });

    const score=Math.round(correct/questions.length*100);
    const results=getResults();
    results[index]={score,correct,total:questions.length,mistakes,date:new Date().toISOString()};
    saveJSON('abai-progress',results);
    recordStudyDay();
    localStorage.setItem('abai-attempts',String(Number(localStorage.getItem('abai-attempts')||0)+1));
    if(event.submitter)event.submitter.disabled=true;

    document.getElementById('quizResult').innerHTML=`<div class="result-banner">${tr('testDone')}: <strong>${correct}/15 · ${score}%</strong></div>`;
    document.getElementById('quizResult').scrollIntoView({behavior:'smooth',block:'center'});
  });

  document.getElementById('chatForm').addEventListener('submit',event=>{
    event.preventDefault();
    const input=document.getElementById('chatInput'),chat=document.getElementById('chatMessages');
    const user=document.createElement('div');user.className='chat-message user';user.textContent=input.value.trim();
    const helper=document.createElement('div');helper.className='chat-message';helper.textContent=topic.lesson;
    chat.append(user,helper);input.value='';
  });
}

function renderPlan() {
  const results=getResults();
  const list=topics.map((topic,index)=>({topic,index,result:results[index]})).filter(x=>x.result).sort((a,b)=>a.result.score-b.result.score);
  app.innerHTML=`<div class="welcome"><div class="eyebrow">${tr('myPlan')}</div><h1>${tr('myPlan')}</h1><p>${tr('noPlan')}</p></div>
    ${list.length?`<div class="topic-list">${list.map(({topic,index,result})=>`<button class="topic-row" type="button" data-topic="${index}"><span class="topic-index">${result.score}%</span><span class="topic-main"><b>${safe(titleOf(topic))}</b><small>${tr('recommended')}</small></span><span class="topic-score">→</span></button>`).join('')}</div>`:`<div class="empty">${tr('noPlan')}<br><button class="button primary small" style="margin-top:12px" onclick="location.hash='sections'">${tr('sections')}</button></div>`}`;
  app.querySelectorAll('[data-topic]').forEach(btn=>btn.addEventListener('click',()=>openTopic(Number(btn.dataset.topic))));
}

function renderMistakes() {
  const results=getResults();
  const list=topics.map((topic,index)=>({topic,index,result:results[index]})).filter(x=>x.result?.mistakes?.length);
  app.innerHTML=`<div class="welcome"><div class="eyebrow">${tr('mistakes')}</div><h1>${tr('mistakes')}</h1></div>
    ${list.length?list.map(({topic,index,result})=>`<div class="card" style="margin-bottom:12px"><h3>${safe(titleOf(topic))}</h3><p class="muted">${result.score}% · ${result.mistakes.length}</p><button class="button outline small" data-topic="${index}">${tr('lesson')} →</button></div>`).join(''):`<div class="empty">${tr('noMistakes')}<br><button class="button primary small" style="margin-top:12px" onclick="location.hash='sections'">${tr('sections')}</button></div>`}`;
  app.querySelectorAll('[data-topic]').forEach(btn=>btn.addEventListener('click',()=>openTopic(Number(btn.dataset.topic))));
}

function renderTeacher() {
  const results=getResults();
  const list=topics.map((topic,index)=>({topic,result:results[index]})).filter(x=>x.result);
  app.innerHTML=`<div class="welcome"><div class="eyebrow">${tr('teacher')}</div><h1>${tr('classProgress')}</h1><p>${tr('serverNote')}</p></div>
    ${profile?`<div class="card"><h3>${safe(profile.className)} · ${safe(profile.name)}</h3>${list.length?list.map(({topic,result})=>`<div class="topic-row"><span class="topic-main"><b>${safe(titleOf(topic))}</b></span><span class="topic-score">${result.score}%</span></div>`).join(''):`<p>${tr('noResults')}</p>`}</div>`:`<div class="empty">${tr('createProfile')}</div>`}`;
}

updateProfile();
window.addEventListener('hashchange',render);
render();
