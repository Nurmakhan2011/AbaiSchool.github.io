'use strict';

/* Порядок тем важен: ссылки используют topic.html?topic=НОМЕР */
const topics = [
  { group:'algebra', ru:'Выражения, формулы сокращённого умножения и разложение на множители', kk:'Өрнектер және көбейткіштерге жіктеу', en:'Expressions and factorisation', lesson:'Формулы: (a + b)² = a² + 2ab + b²; a² − b² = (a − b)(a + b). Раскрывайте скобки по распределительному закону.' },
  { group:'algebra', ru:'Уравнения, неравенства и их системы', kk:'Теңдеулер, теңсіздіктер және жүйелер', en:'Equations, inequalities and systems', lesson:'При решении уравнения выполняйте одинаковые действия с обеими частями. Если делите неравенство на отрицательное число, поменяйте его знак.' },
  { group:'algebra', ru:'Функции и графики', kk:'Функциялар және графиктер', en:'Functions and graphs', lesson:'Линейная функция имеет вид y = kx + b. Подставьте значение x, чтобы найти y. Коэффициент k задаёт наклон графика.' },
  { group:'algebra', ru:'Квадратные уравнения и квадратичная функция', kk:'Квадрат теңдеулер және квадраттық функция', en:'Quadratic equations and functions', lesson:'Для ax² + bx + c = 0 дискриминант D = b² − 4ac. Если уравнение разложено на множители, приравняйте каждый множитель к нулю.' },
  { group:'algebra', ru:'Степени, корни и дробные выражения', kk:'Дәрежелер, түбірлер және бөлшектер', en:'Powers, roots and fractions', lesson:'При умножении степеней с одинаковым основанием показатели складываются. Знаменатель дроби не может быть равен нулю.' },
  { group:'algebra', ru:'Прогрессии', kk:'Прогрессиялар', en:'Sequences', lesson:'В арифметической прогрессии aₙ = a₁ + d(n − 1), где d — разность между соседними членами.' },
  { group:'algebra', ru:'Тригонометрические функции и уравнения', kk:'Тригонометриялық функциялар және теңдеулер', en:'Trigonometric functions and equations', lesson:'Основное тождество: sin²x + cos²x = 1. Повторите табличные значения синуса и косинуса.' },
  { group:'algebra', ru:'Показательные и логарифмические функции, уравнения', kk:'Көрсеткіштік және логарифмдік функциялар', en:'Exponential and logarithmic functions', lesson:'Логарифм logₐb — это показатель степени, в которую нужно возвести a, чтобы получить b. Например, log₂8 = 3.' },
  { group:'algebra', ru:'Производная и её применение', kk:'Туынды және оның қолданылуы', en:'Derivatives and applications', lesson:'Производная xⁿ равна nxⁿ⁻¹. Она показывает скорость изменения функции.' },
  { group:'algebra', ru:'Вероятность и статистика', kk:'Ықтималдық және статистика', en:'Probability and statistics', lesson:'Вероятность равна отношению числа подходящих исходов к числу всех равновозможных исходов. Среднее — сумма чисел, делённая на их количество.' },
  { group:'geometry', ru:'Углы, прямые и треугольники', kk:'Бұрыштар, түзулер және үшбұрыштар', en:'Angles, lines and triangles', lesson:'Сумма углов треугольника равна 180°. Смежные углы в сумме дают 180°, вертикальные углы равны.' },
  { group:'geometry', ru:'Равенство и подобие треугольников', kk:'Үшбұрыштардың теңдігі және ұқсастығы', en:'Congruent and similar triangles', lesson:'У подобных треугольников соответствующие углы равны, а стороны пропорциональны.' },
  { group:'geometry', ru:'Четырёхугольники и их свойства', kk:'Төртбұрыштар және олардың қасиеттері', en:'Quadrilaterals and their properties', lesson:'Сумма внутренних углов четырёхугольника равна 360°. У параллелограмма противоположные стороны и углы равны.' },
  { group:'geometry', ru:'Площади фигур и теорема Пифагора', kk:'Фигуралардың аудандары және Пифагор теоремасы', en:'Areas and the Pythagorean theorem', lesson:'Для прямоугольного треугольника c² = a² + b². Площадь прямоугольника равна ab, треугольника — ah/2.' },
  { group:'geometry', ru:'Окружность и круг', kk:'Шеңбер және дөңгелек', en:'Circles and disks', lesson:'Длина окружности C = 2πr. Площадь круга S = πr². Диаметр равен двум радиусам.' },
  { group:'geometry', ru:'Векторы и координаты', kk:'Векторлар және координаталар', en:'Vectors and coordinates', lesson:'Координаты вектора AB: (x₂ − x₁; y₂ − y₁). Длина вектора (x; y) равна √(x² + y²).' },
  { group:'geometry', ru:'Прямые и плоскости в пространстве', kk:'Кеңістіктегі түзулер мен жазықтықтар', en:'Lines and planes in space', lesson:'В пространстве прямые могут пересекаться, быть параллельными или скрещиваться. Скрещивающиеся прямые не лежат в одной плоскости.' },
  { group:'geometry', ru:'Призмы, пирамиды и их объёмы', kk:'Призмалар, пирамидалар және көлемдері', en:'Prisms, pyramids and volumes', lesson:'Объём призмы V = Sоснh. Объём пирамиды V = ⅓Sоснh.' },
  { group:'geometry', ru:'Цилиндр, конус и шар: площади и объёмы', kk:'Цилиндр, конус және шар', en:'Cylinder, cone and sphere', lesson:'Объём цилиндра V = πr²h, конуса V = ⅓πr²h, шара V = ⁴⁄₃πr³.' }
];

/* Создаёт вопрос и перемешивает положение правильного ответа. */
function makeQuestion(i, question, correct, wrong, explanation) {
  const correctAnswer = String(correct);
  const options = [...new Set([correctAnswer, ...wrong.map(String)])].slice(0, 4);
  while (options.length < 4) options.push(`Вариант ${options.length + 1}`);

  const shift = i % 4;
  const answers = options.map((_, index) => options[(index - shift + 4) % 4]);

  return {
    q: question,
    a: answers,
    c: answers.indexOf(correctAnswer),
    why: explanation
  };
}

/* Каждый генератор создаёт 15 вопросов по одной теме. */
const questionGenerators = [
  // 0. Выражения, формулы и разложение на множители
  i => {
    const n = i + 2;
    if (i % 3 === 0) {
      return makeQuestion(i, `Раскройте скобки: (x + ${n})²`,
        `x² + ${2*n}x + ${n*n}`,
        [`x² + ${n}x + ${n*n}`, `x² + ${2*n}x + ${n}`, `x² − ${2*n}x + ${n*n}`],
        `Используем формулу (x + a)² = x² + 2ax + a².`);
    }
    if (i % 3 === 1) {
      return makeQuestion(i, `Разложите на множители: x² − ${n*n}`,
        `(x − ${n})(x + ${n})`,
        [`(x − ${n})²`, `(x + ${n})²`, `(x − ${n*n})(x + 1)`],
        `Это разность квадратов: x² − a² = (x − a)(x + a).`);
    }
    return makeQuestion(i, `Раскройте скобки: (x + ${n})(x + 1)`,
      `x² + ${n+1}x + ${n}`,
      [`x² + ${n}x + 1`, `x² + ${n+1}x + 1`, `x² + x + ${n}`],
      `Перемножаем слагаемые и приводим подобные: x² + ${n+1}x + ${n}.`);
  },

  // 1. Уравнения, неравенства и системы
  i => {
    const x = i + 2, a = (i % 7) + 2;
    if (i % 3 === 0) {
      return makeQuestion(i, `Решите: x + ${a} = ${x+a}`, `x = ${x}`,
        [`x = ${x+a}`, `x = ${x-a}`, `x = ${a}`],
        `Вычитаем ${a} из обеих частей: x = ${x}.`);
    }
    if (i % 3 === 1) {
      const k = i + 3;
      return makeQuestion(i, `Решите: 2x + ${a} < ${2*k+a}`, `x < ${k}`,
        [`x > ${k}`, `x < ${k+a}`, `x > ${k+a}`],
        `Вычитаем ${a} и делим на 2: x < ${k}.`);
    }
    const y = (i % 5) + 1;
    return makeQuestion(i, `Система: x + y = ${x+y}, x − y = ${x-y}. Найдите x.`,
      `x = ${x}`, [`x = ${y}`, `x = ${x+y}`, `x = ${x-y}`],
      `Складываем уравнения: 2x = ${2*x}, поэтому x = ${x}.`);
  },

  // 2. Функции и графики
  i => {
    const k = i%5+1, b = i%7-2, x = i%6+1, y = k*x+b;
    return makeQuestion(i, `Для y = ${k}x ${b<0?'− '+Math.abs(b):'+ '+b} найдите y при x = ${x}.`,
      `y = ${y}`, [`y = ${y+k}`, `y = ${y-b}`, `y = ${k+b+x}`],
      `Подставляем x = ${x} в формулу функции. Получаем y = ${y}.`);
  },

  // 3. Квадратные уравнения
  i => {
    const p = i%6+1, r = p+i%4+1;
    return makeQuestion(i, `Найдите корни: (x − ${p})(x − ${r}) = 0.`,
      `x = ${p} и x = ${r}`,
      [`x = ${-p} и x = ${-r}`, `x = ${p+r}`, `x = ${p*r}`],
      `Приравниваем каждый множитель к нулю: x = ${p} или x = ${r}.`);
  },

  // 4. Степени, корни и дробные выражения
  i => {
    const n = i%5+2;
    if (i%3===0) return makeQuestion(i, `Вычислите 2 в степени ${n}.`, `${2**n}`,
      [`${2*n}`, `${2**(n-1)}`, `${2**n+2}`], `2 в степени ${n} равняется ${2**n}.`);
    if (i%3===1) return makeQuestion(i, `Найдите √${n*n}.`, `${n}`,
      [`${n*n}`, `${2*n}`, `${n+1}`], `√${n*n} = ${n}, потому что ${n}² = ${n*n}.`);
    return makeQuestion(i, `Сократите дробь ${2*n}/${4*n}.`, '1/2',
      ['1/4', '2/3', '2/1'], `Делим числитель и знаменатель на ${2*n}.`);
  },

  // 5. Прогрессии
  i => {
    const a = i%6+1, d = i%4+2, n = i%7+3, result = a+d*(n-1);
    return makeQuestion(i, `В арифметической прогрессии a₁ = ${a}, d = ${d}. Найдите a${n}.`,
      `${result}`, [`${a+d*n}`, `${result+d}`, `${a*n+d}`],
      `aₙ = a₁ + d(n − 1) = ${a} + ${d} · ${n-1} = ${result}.`);
  },

  // 6. Тригонометрические функции
  i => {
    const values = [
      ['sin 0°','0','1','1/2','√3/2'], ['sin 30°','1/2','0','√3/2','1'],
      ['sin 45°','√2/2','1/2','√3/2','0'], ['sin 60°','√3/2','1/2','1','√2/2'],
      ['sin 90°','1','0','1/2','√3/2'], ['cos 0°','1','0','1/2','√3/2'],
      ['cos 30°','√3/2','1/2','1','0'], ['cos 45°','√2/2','1/2','√3/2','1'],
      ['cos 60°','1/2','√3/2','0','1'], ['cos 90°','0','1','1/2','√2/2'],
      ['sin²x + cos²x','1','0','2','sin x'], ['sin 30° · 2','1','2','√3','1/2'],
      ['cos 60° · 2','1','2','√3','1/2'], ['sin 90° + cos 0°','2','1','0','1/2'],
      ['sin 0° + cos 0°','1','0','2','1/2']
    ];
    const [q, answer, ...wrong] = values[i];
    return makeQuestion(i, `Вычислите ${q}.`, answer, wrong, `По основным тригонометрическим значениям ответ: ${answer}.`);
  },

  // 7. Показательные и логарифмические функции
  i => {
    const n = i%5+2;
    if (i%2===0) return makeQuestion(i, `Решите: 2ˣ = ${2**n}.`, `x = ${n}`,
      [`x = ${2**n}`, `x = ${n+1}`, `x = ${n-1}`],
      `${2**n} = 2 в степени ${n}, поэтому x = ${n}.`);
    return makeQuestion(i, `Вычислите log₂(${2**n}).`, `${n}`,
      [`${2**n}`, `${n+1}`, `${n-1}`],
      `2 в степени ${n} равно ${2**n}, значит log₂(${2**n}) = ${n}.`);
  },

  // 8. Производная
  i => {
    const a = i%5+1, n = i%4+2, coeff = a*n, power = n-1;
    const answer = `${coeff}x${power===1?'':' в степени '+power}`;
    return makeQuestion(i, `Найдите производную ${a}x в степени ${n}.`, answer,
      [`${a}x в степени ${power}`, `${coeff}x в степени ${n}`, `${n}x в степени ${n}`],
      `По правилу (axⁿ)' = an·xⁿ⁻¹. Получаем ${answer}.`);
  },

  // 9. Вероятность и статистика
  i => {
    if (i%3===0) {
      const a=i+1, b=i+3, c=i+5, avg=(a+b+c)/3;
      return makeQuestion(i, `Найдите среднее чисел ${a}, ${b}, ${c}.`, `${avg}`,
        [`${avg+1}`, `${avg-1}`, `${a+b+c}`],
        `(${a} + ${b} + ${c}) ÷ 3 = ${avg}.`);
    }
    if (i%3===1) {
      const sides = i+4;
      return makeQuestion(i, `У правильной фигуры ${sides} равновозможных исходов. Один исход благоприятный. Какова вероятность?`,
        `1/${sides}`, [`${sides}/1`, `1/${sides+1}`, `1/${sides-1}`],
        `Вероятность = благоприятные исходы / все исходы = 1/${sides}.`);
    }
    const favorable = i%4+1, total = 8;
    return makeQuestion(i, `Из ${total} равновозможных исходов подходят ${favorable}. Найдите вероятность.`,
      `${favorable}/${total}`, [`${total}/${favorable}`, `${favorable+1}/${total}`, `${favorable}/${total-1}`],
      `Вероятность равна ${favorable}/${total}.`);
  },

  // 10. Углы, прямые и треугольники
  i => {
    const a=35+i%5*5, b=45+i%4*5, c=180-a-b;
    return makeQuestion(i, `Два угла треугольника равны ${a}° и ${b}°. Найдите третий.`,
      `${c}°`, [`${180-c}°`, `${a+b}°`, `${90-c}°`],
      `180° − ${a}° − ${b}° = ${c}°.`);
  },

  // 11. Равенство и подобие треугольников
  i => {
    if (i%3===0) {
      const scale=i%4+2, side=i%5+2;
      return makeQuestion(i, `Коэффициент подобия равен ${scale}. Малая сторона ${side}. Найдите соответствующую большую сторону.`,
        `${scale*side}`, [`${side+scale}`, `${scale+side+1}`, `${side*2}`],
        `Умножаем сторону на коэффициент подобия: ${side} · ${scale} = ${scale*side}.`);
    }
    if (i%3===1) {
      const a=40+i%4*5, b=180-2*a;
      return makeQuestion(i, `В равнобедренном треугольнике угол при вершине ${b}°. Найдите угол при основании.`,
        `${a}°`, [`${b}°`, `${180-b}°`, `${a/2}°`],
        `Углы при основании равны: (180° − ${b}°) ÷ 2 = ${a}°.`);
    }
    const side=i+3;
    return makeQuestion(i, `У двух равных треугольников соответствующая сторона первого равна ${side}. Чему равна соответствующая сторона второго?`,
      `${side}`, [`${side+1}`, `${side*2}`, `${side-1}`],
      `У равных треугольников соответствующие стороны равны.`);
  },

  // 12. Четырёхугольники
  i => {
    if (i%3===0) {
      const a=70+i%4*10;
      return makeQuestion(i, `Один угол параллелограмма равен ${a}°. Найдите противоположный угол.`,
        `${a}°`, [`${180-a}°`, `${360-a}°`, '90°'], 'Противоположные углы параллелограмма равны.');
    }
    if (i%3===1) {
      const a=70+i%4*10, b=80, c=90, d=360-a-b-c;
      return makeQuestion(i, `У трёхугольника? Нет: у четырёхугольника углы ${a}°, ${b}°, ${c}° и x. Найдите x.`,
        `${d}°`, [`${360-d}°`, `${a+b+c}°`, '90°'],
        `Сумма углов четырёхугольника 360°; x = ${d}°.`);
    }
    const side=i+2;
    return makeQuestion(i, `Найдите периметр ромба со стороной ${side}.`,
      `${4*side}`, [`${side*side}`, `${2*side}`, `${4*side+2}`],
      `Все четыре стороны ромба равны: P = 4 · ${side} = ${4*side}.`);
  },

  // 13. Площади и теорема Пифагора
  i => {
    if (i%3===0) {
      const a=i+2, b=i+4;
      return makeQuestion(i, `Найдите площадь прямоугольника со сторонами ${a} и ${b}.`,
        `${a*b}`, [`${2*(a+b)}`, `${a+b}`, `${a*b+2}`],
        `S = ab = ${a} · ${b} = ${a*b}.`);
    }
    if (i%3===1) {
      const triples=[[3,4,5],[5,12,13],[6,8,10],[8,15,17],[9,12,15]];
      const [a,b,c]=triples[i%triples.length];
      return makeQuestion(i, `Катеты прямоугольного треугольника ${a} и ${b}. Найдите гипотенузу.`,
        `${c}`, [`${a+b}`, `${c+1}`, `${b+1}`],
        `По теореме Пифагора c² = ${a}² + ${b}², поэтому c = ${c}.`);
    }
    const base=i+3, height=4;
    return makeQuestion(i, `Найдите площадь треугольника с основанием ${base} и высотой ${height}.`,
      `${base*height/2}`, [`${base*height}`, `${base+height}`, `${base*height/2+2}`],
      `S = ah/2 = ${base} · ${height} ÷ 2 = ${base*height/2}.`);
  },

  // 14. Окружность и круг
  i => {
    const r=i%7+1;
    if (i%2===0) return makeQuestion(i, `Найдите длину окружности радиуса ${r}.`, `${2*r}π`,
      [`${r*r}π`, `${r}π`, `${4*r}π`], `C = 2πr = ${2*r}π.`);
    return makeQuestion(i, `Найдите площадь круга радиуса ${r}.`, `${r*r}π`,
      [`${2*r}π`, `${r}π`, `${2*r*r}π`], `S = πr² = ${r*r}π.`);
  },

  // 15. Векторы и координаты
  i => {
    const x1=i%5, y1=i%4, dx=i%5+1, dy=i%3+1, x2=x1+dx, y2=y1+dy;
    return makeQuestion(i, `A(${x1}; ${y1}), B(${x2}; ${y2}). Найдите координаты AB.`,
      `(${dx}; ${dy})`, [`(${x2}; ${y2})`, `(${x1}; ${y1})`, `(${dy}; ${dx})`],
      `AB = (${x₂} − ${x1}; ${y₂} − ${y1}) = (${dx}; ${dy}).`);
  },

  // 16. Прямые и плоскости в пространстве
  i => {
    const facts = [
      ['Какие прямые не пересекаются и не лежат в одной плоскости?','Скрещивающиеся',['Параллельные','Совпадающие','Пересекающиеся'],'Такие прямые называются скрещивающимися.'],
      ['Сколько общих точек имеют две параллельные прямые?','0',['1','2','Бесконечно много'],'Параллельные прямые не пересекаются.'],
      ['Сколько общих точек у двух пересекающихся прямых?','1',['0','2','Бесконечно много'],'Пересекающиеся прямые имеют одну общую точку.'],
      ['Сколько точек задают единственную прямую?','Две различные точки',['Одна точка','Три точки на прямой','Четыре точки'],'Через две различные точки проходит единственная прямая.'],
      ['Сколько точек, не лежащих на одной прямой, задают плоскость?','Три',['Одна','Две','Четыре на одной прямой'],'Три точки не на одной прямой задают плоскость.'],
      ['Могут ли две различные плоскости пересекаться по прямой?','Да',['Нет','Только по точке','Только по окружности'],'Пересечение двух различных плоскостей — прямая.'],
      ['Если прямая перпендикулярна плоскости, под каким углом она её пересекает?','90°',['45°','180°','0°'],'Перпендикулярные прямая и плоскость образуют угол 90°.'],
      ['Могут ли скрещивающиеся прямые пересекаться?','Нет',['Да, всегда','Только в одной точке','Только под прямым углом'],'Скрещивающиеся прямые не имеют общей точки.'],
      ['Параллельные прямые лежат в одной…','плоскости',['окружности','сфере','пирамиде'],'Параллельные прямые всегда лежат в одной плоскости.'],
      ['Как называется общая линия двух пересекающихся плоскостей?','Прямая',['Луч','Отрезок','Точка'],'Две пересекающиеся плоскости имеют общую прямую.'],
      ['Сколько плоскостей проходит через прямую и точку вне неё?','Одна',['Ни одной','Две','Бесконечно много'],'Прямая и точка вне неё задают одну плоскость.'],
      ['Могут ли две параллельные плоскости иметь общую точку?','Нет',['Да, одну','Да, две','Всегда бесконечно много'],'Параллельные плоскости не пересекаются.'],
      ['Как расположены две прямые, имеющие две общие точки?','Совпадают',['Параллельны','Скрещиваются','Перпендикулярны обязательно'],'Через две общие точки проходит одна и та же прямая.'],
      ['Что является сечением плоскости и куба, если плоскость пересекает три грани?','Многоугольник',['Окружность','Конус','Только точка'],'Сечение многогранника плоскостью — многоугольник.'],
      ['Могут ли две прямые быть одновременно параллельными и пересекающимися?','Нет',['Да','Только в пространстве','Только в плоскости'],'Параллельные прямые не пересекаются по определению.']
    ];
    const [question, answer, wrong, explanation]=facts[i];
    return makeQuestion(i, question, answer, wrong, explanation);
  },

  // 17. Призмы, пирамиды и объёмы
  i => {
    const base=i%6+2, height=i%5+2;
    if (i%2===0) {
      return makeQuestion(i, `Площадь основания призмы ${base}, высота ${height}. Найдите объём.`,
        `${base*height}`, [`${base*height+base}`, `${base+height}`, `${base*height*2}`],
        `V = Sосн · h = ${base} · ${height} = ${base*height}.`);
    }
    const volume=base*height/3;
    return makeQuestion(i, `Площадь основания пирамиды ${base}, высота ${height}. Найдите объём.`,
      `${volume}`, [`${base*height}`, `${base+height}`, `${volume+base}`],
      `V = ⅓Sосн · h = ⅓ · ${base} · ${height} = ${volume}.`);
  },

  // 18. Цилиндр, конус и шар
  i => {
    if (i%3===0) {
      const r=i%4+1, h=i%5+2, v=r*r*h;
      return makeQuestion(i, `Найдите объём цилиндра с радиусом ${r} и высотой ${h}.`, `${v}π`,
        [`${r*h}π`, `${2*r*h}π`, `${v/2}π`], `V = πr²h = ${v}π.`);
    }
    if (i%3===1) {
      const r=i%3+1, h=3*r, v=r*r*h/3;
      return makeQuestion(i, `Найдите объём конуса с радиусом ${r} и высотой ${h}.`, `${v}π`,
        [`${r*r*h}π`, `${r*h}π`, `${v+1}π`], `V = ⅓πr²h = ${v}π.`);
    }
    const r=i%4+1, v=4*r*r*r;
    return makeQuestion(i, `Найдите объём шара радиуса ${r}.`, `${v}/3π`,
      [`${r*r*r}π`, `${2*r*r}π`, `${v}/2π`], `V = ⁴⁄₃πr³ = ${v}/3π.`);
  }
];

function questionsFor(topicIndex) {
  return Array.from({ length: 15 }, (_, index) =>
    questionGenerators[topicIndex](index)
  );
}

const translations = {
  ru: {
    overview:'Обзор', sections:'Разделы', myPlan:'Мой план',
    mistakes:'Работа над ошибками', teacherView:'Панель учителя',
    classroom:'КЛАСС', workspace:'ОБУЧЕНИЕ', teacher:'Преподаватель',
    yourName:'Ваше имя', yourClass:'Класс', login:'Войти',
    welcome:'Математика, которая подстраивается под тебя',
    subtitle:'Найди темы для повторения и двигайся по индивидуальному плану.',
    start:'Пройти диагностику', progress:'Мой прогресс', completed:'Тем пройдено',
    best:'Средний результат', recommended:'Рекомендуем повторить',
    topics:'тем', lesson:'Краткое объяснение', begin:'Тест · 15 вопросов',
    check:'Проверить ответы', back:'К разделам', testDone:'Тест завершён',
    correct:'Верно', question:'Вопрос', choose:'Выбери один ответ на каждый вопрос.',
    noPlan:'Пройди тесты по темам — результаты появятся здесь.',
    noMistakes:'Пока нет ошибок для повторения. Пройди тест по любой теме.',
    ask:'Учебный помощник', chatPlaceholder:'Напиши вопрос…', send:'Отправить',
    chatNote:'Демо-помощник показывает объяснение темы. Для настоящего ИИ-чата нужен сервер.',
    classProgress:'Прогресс класса', serverNote:'Демо хранит прогресс только в браузере на текущем устройстве. Для общих результатов класса нужен сервер.',
    noResults:'Пока нет результатов тестов.', createProfile:'Создай профиль ученика, чтобы сохранять результаты.',
    series:'Серия занятий', record:'Рекорд', achievements:'Достижения'
  },
  kk: {
    overview:'Шолу', sections:'Бөлімдер', myPlan:'Менің жоспарым',
    mistakes:'Қателермен жұмыс', teacherView:'Мұғалім панелі',
    classroom:'СЫНЫП', workspace:'ОҚУ', teacher:'Мұғалім',
    yourName:'Атыңыз', yourClass:'Сынып', login:'Кіру',
    welcome:'Саған бейімделетін математика',
    subtitle:'Қайталау керек тақырыптарды тауып, жеке жоспарыңмен оқы.',
    start:'Диагностиканы бастау', progress:'Менің үлгерімім', completed:'Өтілген тақырып',
    best:'Орташа нәтиже', recommended:'Қайталауға ұсынамыз',
    topics:'тақырып', lesson:'Қысқаша түсіндіру', begin:'Тест · 15 сұрақ',
    check:'Жауаптарды тексеру', back:'Бөлімдерге қайту', testDone:'Тест аяқталды',
    correct:'Дұрыс', question:'Сұрақ', choose:'Әр сұраққа бір жауап таңда.',
    noPlan:'Тақырыптар бойынша тест тапсыр — нәтижелер осында көрінеді.',
    noMistakes:'Қайталау үшін қате жоқ. Кез келген тақырып бойынша тест тапсыр.',
    ask:'Оқу көмекшісі', chatPlaceholder:'Сұрағыңды жаз…', send:'Жіберу',
    chatNote:'Демо-көмекші тақырыпты түсіндіреді. Нақты ЖИ чатына сервер қажет.',
    classProgress:'Сынып үлгерімі', serverNote:'Демо деректерді осы құрылғы браузерінде сақтайды. Сынып статистикасы үшін сервер қажет.',
    noResults:'Әзірге тест нәтижелері жоқ.', createProfile:'Нәтижелерді сақтау үшін оқушы профилін жаса.',
    series:'Оқу сериясы', record:'Рекорд', achievements:'Жетістіктер'
  },
  en: {
    overview:'Overview', sections:'Sections', myPlan:'My plan',
    mistakes:'Review mistakes', teacherView:'Teacher dashboard',
    classroom:'CLASSROOM', workspace:'LEARNING', teacher:'Teacher',
    yourName:'Your name', yourClass:'Class', login:'Sign in',
    welcome:'Math that adapts to you',
    subtitle:'Find topics to review and follow your personal learning plan.',
    start:'Take the diagnostic', progress:'My progress', completed:'Topics completed',
    best:'Average score', recommended:'Recommended review',
    topics:'topics', lesson:'Quick lesson', begin:'Quiz · 15 questions',
    check:'Check answers', back:'Back to sections', testDone:'Quiz complete',
    correct:'Correct', question:'Question', choose:'Choose one answer for each question.',
    noPlan:'Take topic quizzes to see results here.',
    noMistakes:'No mistakes to review yet. Take a quiz in any topic.',
    ask:'Study helper', chatPlaceholder:'Type a question…', send:'Send',
    chatNote:'The demo helper shows the topic explanation. A server is needed for a real AI chat.',
    classProgress:'Class progress', serverNote:'This demo stores progress only in this browser on this device. Shared class results need a server.',
    noResults:'There are no quiz results yet.', createProfile:'Create a student profile to save results.',
    series:'Study streak', record:'Record', achievements:'Achievements'
  }
};

const app = document.getElementById('app');
const languageSelect = document.getElementById('language');
const profileButton = document.getElementById('profileButton');
const loginDialog = document.getElementById('loginDialog');
const loginForm = document.getElementById('loginForm');

let language = localStorage.getItem('abai-language') || 'ru';
let profile = readJSON('abai-profile', null);
let chosenAnswers = {};

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

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'
  })[char]);
}

function titleOf(topic) {
  return topic[language] || topic.ru;
}

function getResults() {
  return readJSON('abai-progress', {});
}

function getLocalDate() {
  const now = new Date();
  return [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, '0'),
    String(now.getDate()).padStart(2, '0')
  ].join('-');
}

function dateNumber(dateString) {
  const [year, month, day] = dateString.split('-').map(Number);
  return Math.floor(Date.UTC(year, month - 1, day) / 86400000);
}

function getStreak() {
  return readJSON('abai-streak', { current: 0, best: 0, lastDay: '' });
}

function recordStudyDay() {
  const streak = getStreak();
  const today = getLocalDate();

  // Несколько тестов за один день засчитываются как один учебный день.
  if (streak.lastDay === today) return streak;

  if (!streak.lastDay) {
    streak.current = 1;
  } else {
    const difference = dateNumber(today) - dateNumber(streak.lastDay);

    if (difference === 1) streak.current += 1;
    else if (difference > 1) streak.current = 1;
    else return streak;
  }

  streak.lastDay = today;
  streak.best = Math.max(streak.best, streak.current);
  saveJSON('abai-streak', streak);
  return streak;
}

function getAchievements() {
  const results = getResults();
  const done = Object.keys(results).map(Number);
  const attempts = Number(localStorage.getItem('abai-attempts') || 0);
  const streak = getStreak();
  const algebraCount = done.filter(index => topics[index]?.group === 'algebra').length;
  const geometryCount = done.filter(index => topics[index]?.group === 'geometry').length;

  const names = {
    ru: [
      ['Первый шаг', 'Пройди первый тест'],
      ['Без ошибок', 'Набери 100% в тесте'],
      ['Исследователь', 'Пройди тесты по 5 темам'],
      ['Алгебра освоена', 'Пройди все темы алгебры'],
      ['Геометрия освоена', 'Пройди все темы геометрии'],
      ['Три дня подряд', 'Занимайся 3 дня подряд'],
      ['Неделя занятий', 'Занимайся 7 дней подряд']
    ],
    kk: [
      ['Алғашқы қадам', 'Алғашқы тестті тапсыр'],
      ['Қатесіз', 'Тесттен 100% жина'],
      ['Зерттеуші', '5 тақырып бойынша тест тапсыр'],
      ['Алгебра меңгерілді', 'Алгебраның барлық тақырыбын өт'],
      ['Геометрия меңгерілді', 'Геометрияның барлық тақырыбын өт'],
      ['Үш күн қатарынан', '3 күн қатарынан оқы'],
      ['Оқу аптасы', '7 күн қатарынан оқы']
    ],
    en: [
      ['First step', 'Complete your first quiz'],
      ['Perfect score', 'Get 100% on a quiz'],
      ['Explorer', 'Complete quizzes in 5 topics'],
      ['Algebra mastered', 'Complete every algebra topic'],
      ['Geometry mastered', 'Complete every geometry topic'],
      ['Three-day streak', 'Study for 3 days in a row'],
      ['Study week', 'Study for 7 days in a row']
    ]
  }[language];

  return [
    { icon:'🌱', earned:attempts >= 1, title:names[0][0], note:names[0][1] },
    { icon:'💯', earned:Object.values(results).some(result => result.score === 100), title:names[1][0], note:names[1][1] },
    { icon:'🧭', earned:done.length >= 5, title:names[2][0], note:names[2][1] },
    { icon:'∑', earned:algebraCount >= 10, title:names[3][0], note:names[3][1] },
    { icon:'△', earned:geometryCount >= 9, title:names[4][0], note:names[4][1] },
    { icon:'🔥', earned:streak.best >= 3, title:names[5][0], note:names[5][1] },
    { icon:'🏆', earned:streak.best >= 7, title:names[6][0], note:names[6][1] }
  ];
}

function renderGamification() {
  const streak = getStreak();
  const badges = getAchievements();
  const days = language === 'en'
    ? (streak.current === 1 ? 'day' : 'days')
    : language === 'kk' ? 'күн'
      : (streak.current === 1 ? 'день' : 'дней');

  return `
    <section class="gamification">
      <div class="streak-card">
        <span class="streak-icon">🔥</span>
        <div>
          <b>${tr('series')}</b>
          <strong>${streak.current} ${days}</strong>
          <small>${tr('record')}: ${streak.best}</small>
        </div>
      </div>

      <div class="section-heading"><div><h2>${tr('achievements')}</h2></div></div>

      <div class="achievement-grid">
        ${badges.map(badge => `
          <article class="achievement-card ${badge.earned ? 'earned' : 'locked'}">
            <span class="achievement-icon">${badge.icon}</span>
            <b>${badge.title}</b>
            <small>${badge.note}</small>
          </article>
        `).join('')}
      </div>
    </section>`;
}

function updateProfile() {
  const nameElement = document.getElementById('profileName');
  const avatarElement = document.getElementById('avatar');

  if (nameElement) nameElement.textContent = profile?.name || tr('login');
  if (avatarElement) avatarElement.textContent = profile?.name?.charAt(0).toUpperCase() || '?';

  if (profile) {
    const nameInput = document.getElementById('studentName');
    const classInput = document.getElementById('className');
    if (nameInput) nameInput.value = profile.name;
    if (classInput) classInput.value = profile.className;
  }
}

profileButton?.addEventListener('click', () => loginDialog?.showModal());

loginForm?.addEventListener('submit', event => {
  event.preventDefault();

  const name = document.getElementById('studentName').value.trim();
  const className = document.getElementById('className').value.trim();
  if (!name || !className) return;

  profile = { name, className };
  saveJSON('abai-profile', profile);
  loginDialog.close();
  updateProfile();
  render();
});

function setLanguage(nextLanguage) {
  if (!translations[nextLanguage]) return;

  language = nextLanguage;
  localStorage.setItem('abai-language', language);
  document.documentElement.lang = language;

  document.querySelectorAll('[data-i18n]').forEach(element => {
    const translated = translations[language][element.dataset.i18n];
    if (translated) element.textContent = translated;
  });

  render();
  updateProfile();
}

languageSelect.value = language;
document.documentElement.lang = language;
languageSelect.addEventListener('change', event => setLanguage(event.target.value));

function openTopic(index) {
  location.hash = `topic/${index}`;
}

function render() {
  if (!app) return;

  const [page, id] = (location.hash.replace(/^#/, '') || 'home').split('/');

  document.querySelectorAll('.nav-link[data-page]').forEach(link => {
    link.classList.toggle('active', link.dataset.page === page);
  });

  if (page === 'topic') {
    const index = Number(id);
    if (Number.isInteger(index) && topics[index]) return renderTopic(index);
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
  const results = getResults();
  const scores = Object.values(results).map(result => result.score);
  const average = scores.length
    ? Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length)
    : 0;

  app.innerHTML = `
    <section class="hero">
      <div class="eyebrow">ABAI SCHOOLS · MATHEMATICS</div>
      <h1>${tr('welcome')}</h1>
      <p>${tr('subtitle')}</p>
      <button class="button light" type="button" onclick="location.hash='sections'">${tr('start')} →</button>
    </section>

    <div class="stats-grid">
      <div class="stat-card"><span class="stat-label">${tr('progress')}</span><strong class="stat-value">${average}%</strong><span class="stat-hint">${tr('best')}</span></div>
      <div class="stat-card"><span class="stat-label">${tr('completed')}</span><strong class="stat-value">${Object.keys(results).length}/19</strong><span class="stat-hint">${tr('sections')}</span></div>
      <div class="stat-card"><span class="stat-label">${tr('yourClass') || 'Класс'}</span><strong class="stat-value">${profile ? escapeHTML(profile.className) : '—'}</strong><span class="stat-hint">${profile ? escapeHTML(profile.name) : tr('login')}</span></div>
    </div>

    ${renderGamification()}

    <div class="section-heading">
      <div><h2>${tr('recommended')}</h2><p>${tr('noPlan')}</p></div>
      <button class="button outline small" type="button" onclick="location.hash='plan'">${tr('myPlan')} →</button>
    </div>

    <div class="section-grid">
      <a class="section-card" href="sections.html#sections"><div class="section-card-top"><span class="section-symbol">∑</span>↗</div><h3>${tr('algebra')}</h3><p>10 ${tr('topics')}</p></a>
      <a class="section-card" href="sections.html#sections"><div class="section-card-top"><span class="section-symbol">△</span>↗</div><h3>${tr('geometry')}</h3><p>9 ${tr('topics')}</p></a>
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
  const results = getResults();
  const groups = ['algebra', 'geometry'].map(group => {
    const list = topics.map((topic, index) => ({ topic, index }))
      .filter(item => item.topic.group === group);

    return `
      <section class="section-card">
        <div class="section-card-top"><span class="section-symbol">${group === 'algebra' ? '∑' : '△'}</span><span>${list.length} ${tr('topics')}</span></div>
        <h3>${tr(group)}</h3>
        <div class="topic-list">
          ${list.map(({ topic, index }) => `
            <button class="topic-row" type="button" data-topic="${index}">
              <span class="topic-index">${String(index + 1).padStart(2, '0')}</span>
              <span class="topic-main"><b>${escapeHTML(titleOf(topic))}</b><small>${results[index] ? `${results[index].score}%` : tr('begin')}</small></span>
              <span class="topic-score">→</span>
            </button>`).join('')}
        </div>
      </section>`;
  }).join('');

  app.innerHTML = `<div class="welcome"><div class="eyebrow">${tr('sections')}</div><h1>${tr('sections')}</h1><p>${tr('subtitle')}</p></div><div class="section-grid">${groups}</div>`;
  app.querySelectorAll('[data-topic]').forEach(button => button.addEventListener('click', () => openTopic(Number(button.dataset.topic))));
}

function renderTopic(topicIndex) {
  const topic = topics[topicIndex];
  const questions = questionsFor(topicIndex);
  const previous = getResults()[topicIndex];
  const selected = {};

  app.innerHTML = `
    <div class="welcome">
      <button class="button outline small" type="button" onclick="location.hash='sections'">← ${tr('back')}</button>
      <div class="eyebrow" style="margin-top:18px">${tr(topic.group)}</div>
      <h1>${escapeHTML(titleOf(topic))}</h1>
    </div>

    <div class="lesson-box"><b>${tr('lesson')}</b><br>${escapeHTML(topic.lesson)}</div>
    ${previous ? `<div class="result-banner">${tr('best')}: <strong>${previous.score}%</strong></div>` : ''}

    <div class="section-heading"><div><h2>${tr('begin')}</h2><p>${tr('choose')}</p></div></div>

    <form id="quizForm">
      ${questions.map((item, index) => `
        <section class="quiz-question" id="question-${index}">
          <div class="question-meta">${tr('question')} ${index + 1} / 15</div>
          <div class="question-text">${escapeHTML(item.q)}</div>
          <div class="answers">
            ${item.a.map((answer, answerIndex) => `<button class="answer-option" type="button" data-q="${index}" data-a="${answerIndex}">${escapeHTML(answer)}</button>`).join('')}
          </div>
          <div class="explanation" id="explanation-${index}">${escapeHTML(item.why)}</div>
        </section>`).join('')}
      <button class="button primary" type="submit">${tr('check')}</button>
    </form>

    <div id="quizResult"></div>

    <section class="card" style="margin-top:24px">
      <h3>${tr('ask')}</h3>
      <div class="ai-chat" id="chatMessages"></div>
      <form class="chat-form" id="chatForm">
        <input id="chatInput" placeholder="${tr('chatPlaceholder')}" required maxlength="300">
        <button class="button primary" type="submit">${tr('send')}</button>
      </form>
      <p class="stat-hint" style="margin-top:10px">${tr('chatNote')}</p>
    </section>`;

  app.querySelectorAll('.answer-option').forEach(button => {
    button.addEventListener('click', () => {
      const qIndex = Number(button.dataset.q);
      selected[qIndex] = Number(button.dataset.a);
      app.querySelectorAll(`[data-q="${qIndex}"]`).forEach(option => {
        option.classList.toggle('selected', option === button);
      });
    });
  });

  document.getElementById('quizForm').addEventListener('submit', event => {
    event.preventDefault();

    const missing = questions.findIndex((_, index) => selected[index] === undefined);
    if (missing !== -1) {
      document.getElementById(`question-${missing}`).scrollIntoView({ behavior:'smooth', block:'center' });
      return;
    }

    let correct = 0;
    const mistakes = [];

    questions.forEach((question, qIndex) => {
      app.querySelectorAll(`[data-q="${qIndex}"]`).forEach((option, answerIndex) => {
        option.disabled = true;
        if (answerIndex === question.c) option.classList.add('correct');
        if (answerIndex === selected[qIndex] && selected[qIndex] !== question.c) option.classList.add('wrong');
      });

      if (selected[qIndex] === question.c) correct++;
      else {
        mistakes.push(qIndex);
        document.getElementById(`explanation-${qIndex}`).classList.add('show');
      }
    });

    const score = Math.round(correct / questions.length * 100);
    const results = getResults();

    results[topicIndex] = {
      score,
      correct,
      total: questions.length,
      mistakes,
      date: new Date().toISOString()
    };

    saveJSON('abai-progress', results);
    recordStudyDay();

    const attempts = Number(localStorage.getItem('abai-attempts') || 0);
    localStorage.setItem('abai-attempts', String(attempts + 1));

    event.submitter.disabled = true;
    document.getElementById('quizResult').innerHTML =
      `<div class="result-banner">${tr('testDone')}: <strong>${correct}/15 · ${score}%</strong></div>`;
    document.getElementById('quizResult').scrollIntoView({ behavior:'smooth', block:'center' });
  });

  document.getElementById('chatForm').addEventListener('submit', event => {
    event.preventDefault();
    const input = document.getElementById('chatInput');
    const chat = document.getElementById('chatMessages');

    const userMessage = document.createElement('div');
    userMessage.className = 'chat-message user';
    userMessage.textContent = input.value.trim();

    const helperMessage = document.createElement('div');
    helperMessage.className = 'chat-message';
    helperMessage.textContent = topic.lesson;

    chat.append(userMessage, helperMessage);
    input.value = '';
  });
}

function renderPlan() {
  const results = getResults();
  const completed = topics.map((topic, index) => ({ topic, index, result: results[index] }))
    .filter(item => item.result)
    .sort((a, b) => a.result.score - b.result.score);

  app.innerHTML = `
    <div class="welcome"><div class="eyebrow">${tr('myPlan')}</div><h1>${tr('myPlan')}</h1><p>${tr('noPlan')}</p></div>
    ${completed.length
      ? `<div class="topic-list">${completed.map(({ topic, index, result }) => `
          <button class="topic-row" type="button" data-topic="${index}">
            <span class="topic-index">${result.score}%</span>
            <span class="topic-main"><b>${escapeHTML(titleOf(topic))}</b><small>${tr('recommended')}</small></span><span class="topic-score">→</span>
          </button>`).join('')}</div>`
      : `<div class="empty">${tr('noPlan')}<br><button class="button primary small" style="margin-top:12px" type="button" onclick="location.hash='sections'">${tr('sections')}</button></div>`}`;

  app.querySelectorAll('[data-topic]').forEach(button => button.addEventListener('click', () => openTopic(Number(button.dataset.topic))));
}

function renderMistakes() {
  const results = getResults();
  const list = topics.map((topic, index) => ({ topic, index, result: results[index] }))
    .filter(item => item.result?.mistakes?.length);

  app.innerHTML = `
    <div class="welcome"><div class="eyebrow">${tr('mistakes')}</div><h1>${tr('mistakes')}</h1></div>
    ${list.length
      ? list.map(({ topic, index, result }) => `
          <div class="card" style="margin-bottom:12px">
            <h3>${escapeHTML(titleOf(topic))}</h3>
            <p class="muted">${result.score}% · ${result.mistakes.length} ${tr('mistakes')}</p>
            <button class="button outline small" type="button" data-topic="${index}">${tr('lesson')} →</button>
          </div>`).join('')
      : `<div class="empty">${tr('noMistakes')}<br><button class="button primary small" style="margin-top:12px" type="button" onclick="location.hash='sections'">${tr('sections')}</button></div>`}`;

  app.querySelectorAll('[data-topic]').forEach(button => button.addEventListener('click', () => openTopic(Number(button.dataset.topic))));
}

function renderTeacher() {
  const results = getResults();
  const list = topics.map((topic, index) => ({ topic, result: results[index] })).filter(item => item.result);

  app.innerHTML = `
    <div class="welcome"><div class="eyebrow">${tr('teacher')}</div><h1>${tr('classProgress')}</h1><p>${tr('serverNote')}</p></div>
    ${profile
      ? `<div class="card"><h3>${escapeHTML(profile.className)} · ${escapeHTML(profile.name)}</h3>
          ${list.length
            ? list.map(({ topic, result }) => `<div class="topic-row"><span class="topic-main"><b>${escapeHTML(titleOf(topic))}</b></span><span class="topic-score">${result.score}%</span></div>`).join('')
            : `<p class="muted">${tr('noResults')}</p>`}
        </div>`
      : `<div class="empty">${tr('createProfile')}<br><button class="button primary small" style="margin-top:12px" type="button" onclick="document.getElementById('loginDialog').showModal()">${tr('login')}</button></div>`}`;
}

updateProfile();
window.addEventListener('hashchange', render);
render();
