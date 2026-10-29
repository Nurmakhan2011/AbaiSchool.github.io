'use strict';

/* 19 тем — порядок должен совпадать с порядком тем в списке. */
const topics = [
  { group: 'algebra', ru: 'Выражения, формулы сокращённого умножения и разложение на множители', kk: 'Өрнектер және көбейткіштерге жіктеу', en: 'Expressions and factorisation', lesson: 'Формулы: (a + b)² = a² + 2ab + b²; a² − b² = (a − b)(a + b). Раскрывайте скобки по распределительному закону.' },
  { group: 'algebra', ru: 'Уравнения, неравенства и их системы', kk: 'Теңдеулер, теңсіздіктер және жүйелер', en: 'Equations, inequalities and systems', lesson: 'При решении уравнения выполняйте одинаковые действия с обеими частями. Если умножаете или делите неравенство на отрицательное число, поменяйте его знак.' },
  { group: 'algebra', ru: 'Функции и графики', kk: 'Функциялар және графиктер', en: 'Functions and graphs', lesson: 'Линейная функция имеет вид y = kx + b. Подставьте значение x, чтобы найти y. Коэффициент k задаёт наклон графика.' },
  { group: 'algebra', ru: 'Квадратные уравнения и квадратичная функция', kk: 'Квадрат теңдеулер және квадраттық функция', en: 'Quadratic equations and functions', lesson: 'Для ax² + bx + c = 0 дискриминант D = b² − 4ac. Если уравнение разложено на множители, каждый множитель можно приравнять к нулю.' },
  { group: 'algebra', ru: 'Степени, корни и дробные выражения', kk: 'Дәрежелер, түбірлер және бөлшектер', en: 'Powers, roots and fractions', lesson: 'При умножении степеней с одинаковым основанием показатели складываются. Квадратный корень из a² равен |a|. Знаменатель дроби не должен быть равен нулю.' },
  { group: 'algebra', ru: 'Прогрессии', kk: 'Прогрессиялар', en: 'Sequences', lesson: 'В арифметической прогрессии aₙ = a₁ + d(n − 1), где d — разность между соседними членами.' },
  { group: 'algebra', ru: 'Тригонометрические функции и уравнения', kk: 'Тригонометриялық функциялар және теңдеулер', en: 'Trigonometric functions and equations', lesson: 'Основное тождество: sin²x + cos²x = 1. Повторите табличные значения синуса и косинуса для углов 0°, 30°, 45°, 60° и 90°.' },
  { group: 'algebra', ru: 'Показательные и логарифмические функции, уравнения', kk: 'Көрсеткіштік және логарифмдік функциялар', en: 'Exponential and logarithmic functions', lesson: 'Логарифм logₐb — это показатель степени, в которую нужно возвести a, чтобы получить b. Например, log₂8 = 3.' },
  { group: 'algebra', ru: 'Производная и её применение', kk: 'Туынды және оның қолданылуы', en: 'Derivatives and applications', lesson: 'Производная xⁿ равна nxⁿ⁻¹. Она показывает скорость изменения функции. Если производная положительна, функция возрастает.' },
  { group: 'algebra', ru: 'Вероятность и статистика', kk: 'Ықтималдық және статистика', en: 'Probability and statistics', lesson: 'Вероятность равна отношению благоприятных исходов к общему числу равновозможных исходов. Среднее арифметическое — сумма чисел, делённая на их количество.' },
  { group: 'geometry', ru: 'Углы, прямые и треугольники', kk: 'Бұрыштар, түзулер және үшбұрыштар', en: 'Angles, lines and triangles', lesson: 'Сумма углов треугольника равна 180°. Смежные углы в сумме дают 180°, вертикальные углы равны.' },
  { group: 'geometry', ru: 'Равенство и подобие треугольников', kk: 'Үшбұрыштардың теңдігі және ұқсастығы', en: 'Congruent and similar triangles', lesson: 'У подобных треугольников соответствующие углы равны, а стороны пропорциональны. Коэффициент подобия показывает отношение соответствующих сторон.' },
  { group: 'geometry', ru: 'Четырёхугольники и их свойства', kk: 'Төртбұрыштар және олардың қасиеттері', en: 'Quadrilaterals and their properties', lesson: 'Сумма внутренних углов четырёхугольника равна 360°. У параллелограмма противоположные стороны и углы равны.' },
  { group: 'geometry', ru: 'Площади фигур и теорема Пифагора', kk: 'Фигуралардың аудандары және Пифагор теоремасы', en: 'Areas and the Pythagorean theorem', lesson: 'Для прямоугольного треугольника c² = a² + b². Площадь прямоугольника равна ab, треугольника — ah/2.' },
  { group: 'geometry', ru: 'Окружность и круг', kk: 'Шеңбер және дөңгелек', en: 'Circles and disks', lesson: 'Длина окружности C = 2πr. Площадь круга S = πr². Диаметр равен двум радиусам.' },
  { group: 'geometry', ru: 'Векторы и координаты', kk: 'Векторлар және координаталар', en: 'Vectors and coordinates', lesson: 'Координаты вектора AB: (x₂ − x₁; y₂ − y₁). Длина вектора (x; y) равна √(x² + y²).' },
  { group: 'geometry', ru: 'Прямые и плоскости в пространстве', kk: 'Кеңістіктегі түзулер мен жазықтықтар', en: 'Lines and planes in space', lesson: 'В пространстве прямые могут пересекаться, быть параллельными или скрещиваться. Скрещивающиеся прямые не пересекаются и не лежат в одной плоскости.' },
  { group: 'geometry', ru: 'Призмы, пирамиды и их объёмы', kk: 'Призмалар, пирамидалар және көлемдері', en: 'Prisms, pyramids and volumes', lesson: 'Объём призмы V = Sоснh. Объём пирамиды V = ⅓Sоснh.' },
  { group: 'geometry', ru: 'Цилиндр, конус и шар: площади и объёмы', kk: 'Цилиндр, конус және шар', en: 'Cylinder, cone and sphere', lesson: 'Объём цилиндра V = πr²h, конуса V = ⅓πr²h, шара V = ⁴⁄₃πr³.' }
];

/*
 * Каждый генератор ниже создаёт 15 заданий для своей темы.
 * Порядок вариантов меняется, поэтому правильный ответ не всегда первым.
 */
function makeQuestion(i, question, correct, wrong, explanation) {
  const options = [String(correct), ...wrong.map(String)];
  const unique = [...new Set(options)].slice(0, 4);

  while (unique.length < 4) unique.push(`Другой ответ ${unique.length}`);

  const correctAnswer = String(correct);
  const answerIndex = unique.indexOf(correctAnswer);
  const shift = i % 4;
  const choices = unique.map((_, index) => unique[(index - shift + 4) % 4]);
  const correctIndex = choices.indexOf(correctAnswer);

  return {
    q: question,
    a: choices,
    c: correctIndex,
    why: explanation
  };
}

const questionGenerators = [
  // 0. Выражения, формулы и разложение на множители
  i => {
    const n = i + 2;
    if (i % 3 === 0) {
      return makeQuestion(i, `Раскройте скобки: (x + ${n})²`,
        `x² + ${2*n}x + ${n*n}`,
        [`x² + ${n}x + ${n*n}`, `x² + ${2*n}x + ${n}`, `x² − ${2*n}x + ${n*n}`],
        `Используем формулу (x + a)² = x² + 2ax + a². Здесь a = ${n}.`);
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
      `Перемножаем слагаемые: x² + x + ${n}x + ${n}.`);
  },

  // 1. Уравнения, неравенства и системы
  i => {
    const x = i + 2;
    const a = (i % 7) + 2;
    if (i % 3 === 0) {
      return makeQuestion(i, `Решите уравнение: x + ${a} = ${x+a}`, `x = ${x}`,
        [`x = ${x+a}`, `x = ${x-a}`, `x = ${a}`],
        `Вычитаем ${a} из обеих частей: x = ${x+a} − ${a} = ${x}.`);
    }
    if (i % 3 === 1) {
      const k = i + 3;
      return makeQuestion(i, `Решите неравенство: 2x + ${a} < ${2*k+a}`, `x < ${k}`,
        [`x > ${k}`, `x < ${k+a}`, `x > ${k+a}`],
        `Вычитаем ${a}, затем делим на 2: x < ${k}.`);
    }
    const y = (i % 5) + 1;
    return makeQuestion(i, `Система: x + y = ${x+y}, x − y = ${x-y}. Чему равен x?`, `x = ${x}`,
      [`x = ${y}`, `x = ${x+y}`, `x = ${x-y}`],
      `Складываем уравнения системы: 2x = ${2*x}, значит x = ${x}.`);
  },

  // 2. Функции и графики
  i => {
    const k = (i % 5) + 1, b = (i % 7) - 2, x = (i % 6) + 1;
    const y = k*x+b;
    return makeQuestion(i, `Для функции y = ${k}x ${b < 0 ? '− '+Math.abs(b) : '+ '+b} найдите y при x = ${x}.`,
      `y = ${y}`, [`y = ${y+k}`, `y = ${y-b}`, `y = ${k+b+x}`],
      `Подставляем x = ${x}: y = ${k} · ${x} ${b < 0 ? '− '+Math.abs(b) : '+ '+b} = ${y}.`);
  },

  // 3. Квадратные уравнения
  i => {
    const p = (i % 6) + 1, r = p + (i % 4) + 1;
    return makeQuestion(i, `Найдите корни уравнения (x − ${p})(x − ${r}) = 0.`,
      `x = ${p} и x = ${r}`,
      [`x = ${-p} и x = ${-r}`, `x = ${p+r}`, `x = ${p*r}`],
      `Каждый множитель приравниваем к нулю: x − ${p} = 0 или x − ${r} = 0.`);
  },

  // 4. Степени, корни и дроби
  i => {
    const n = (i % 5) + 2;
    if (i % 3 === 0) {
      return makeQuestion(i, `Вычислите: 2 в степени ${n}.`, `${2**n}`,
        [`${2*n}`, `${2**(n-1)}`, `${2**n+2}`],
        `2 в степени ${n} означает умножить ${n} двоек: результат ${2**n}.`);
    }
    if (i % 3 === 1) {
      return makeQuestion(i, `Найдите √${n*n}.`, `${n}`,
        [`${n*n}`, `${2*n}`, `${n+1}`],
        `Квадратный корень из ${n*n} равен ${n}, так как ${n}² = ${n*n}.`);
    }
    return makeQuestion(i, `Сократите дробь ${2*n}/${4*n}.`, '1/2',
      ['1/4', '2/3', '2/1'],
      `Делим числитель и знаменатель на ${2*n}: получаем 1/2.`);
  },

  // 5. Прогрессии
  i => {
    const a = (i % 6) + 1, d = (i % 4) + 2, n = (i % 7) + 3;
    const answer = a + d*(n-1);
    return makeQuestion(i, `Арифметическая прогрессия: a₁ = ${a}, d = ${d}. Найдите a${n}.`,
      `${answer}`, [`${a+d*n}`, `${answer+d}`, `${a*n+d}`],
      `aₙ = a₁ + d(n − 1) = ${a} + ${d} · ${n-1} = ${answer}.`);
  },

  // 6. Тригонометрия
  i => {
    const values = [
      ['sin 0°', '0', '1', '1/2', '√3/2'],
      ['sin 30°', '1/2', '0', '√3/2', '1'],
      ['sin 45°', '√2/2', '1/2', '√3/2', '0'],
      ['sin 60°', '√3/2', '1/2', '1', '√2/2'],
      ['sin 90°', '1', '0', '1/2', '√3/2'],
      ['cos 0°', '1', '0', '1/2', '√3/2'],
      ['cos 30°', '√3/2', '1/2', '1', '0'],
      ['cos 45°', '√2/2', '1/2', '√3/2', '1'],
      ['cos 60°', '1/2', '√3/2', '0', '1'],
      ['cos 90°', '0', '1', '1/2', '√2/2']
    ];
    const [question, correct, w1, w2, w3] = values[i % values.length];
    return makeQuestion(i, `Вычислите ${question}.`, correct, [w1,w2,w3],
      `По таблице основных значений ${question} = ${correct}.`);
  },

  // 7. Показательные и логарифмические уравнения
  i => {
    const n = (i % 5) + 2;
    if (i % 2 === 0) {
      return makeQuestion(i, `Решите: 2ˣ = ${2**n}.`, `x = ${n}`,
        [`x = ${2**n}`, `x = ${n+1}`, `x = ${n-1}`],
        `Так как ${2**n} = 2 в степени ${n}, получаем x = ${n}.`);
    }
    return makeQuestion(i, `Вычислите log₂(${2**n}).`, `${n}`,
      [`${2**n}`, `${n+1}`, `${n-1}`],
      `Логарифм отвечает на вопрос: в какую степень возвести 2, чтобы получить ${2**n}? Ответ: ${n}.`);
  },

  // 8. Производная
  i => {
    const a = (i % 5) + 1, n = (i % 4) + 2;
    const coefficient = a*n, power = n-1;
    const answer = `${coefficient}x${power === 1 ? '' : ' в степени '+power}`;
    return makeQuestion(i, `Найдите производную функции f(x) = ${a}x в степени ${n}.`,
      answer,
      [`${a}x в степени ${n-1}`, `${coefficient}x в степени ${n}`, `${n}x в степени ${n}`],
      `По правилу (axⁿ)' = an·xⁿ⁻¹. Получаем ${answer}.`);
  },

  // 9. Вероятность и статистика
  i => {
    if (i % 3 === 0) {
      const a = i+1, b = i+3, c = i+5, mean = (a+b+c)/3;
      return makeQuestion(i, `Найдите среднее чисел ${a}, ${b}, ${c}.`, `${mean}`,
        [`${mean+1}`, `${mean-1}`, `${a+b+c}`],
        `Складываем числа и делим на 3: (${a} + ${b} + ${c}) ÷ 3 = ${mean}.`);
    }
    if (i % 3 === 1) {
      return makeQuestion(i, 'Сколько исходов у броска обычного шестигранного кубика?', '6',
        ['4', '8', '12'],
        'На гранях кубика числа от 1 до 6, поэтому всего 6 исходов.');
    }
    return makeQuestion(i, 'Какова вероятность выпадения чётного числа на честном кубике?', '1/2',
      ['1/6', '1/3', '2/3'],
      'Подходят три числа: 2, 4, 6. Вероятность равна 3/6 = 1/2.');
  },

  // 10. Углы, прямые и треугольники
  i => {
    const a = 35 + (i % 5)*5, b = 45 + (i % 4)*5, c = 180-a-b;
    return makeQuestion(i, `В треугольнике два угла равны ${a}° и ${b}°. Найдите третий угол.`,
      `${c}°`, [`${180-c}°`, `${a+b}°`, `${90-c}°`],
      `Сумма углов треугольника 180°: 180° − ${a}° − ${b}° = ${c}°.`);
  },

  // 11. Равенство и подобие треугольников
  i => {
    const scale = (i % 4) + 2, small = (i % 5) + 2, large = scale*small;
    return makeQuestion(i, `Стороны подобных треугольников относятся как 1:${scale}. Малая сторона ${small}. Чему равна соответствующая большая сторона?`,
      `${large}`, [`${small+scale}`, `${large+scale}`, `${small*2}`],
      `Умножаем сторону малого треугольника на коэффициент подобия: ${small} · ${scale} = ${large}.`);
  },

  // 12. Четырёхугольники
  i => {
    if (i % 2 === 0) {
      const a = 70 + (i % 4)*10;
      return makeQuestion(i, `У параллелограмма один угол ${a}°. Чему равен противоположный угол?`,
        `${a}°`, [`${180-a}°`, `${360-a}°`, '90°'],
        'Противоположные углы параллелограмма равны.');
    }
    const a = 70 + (i % 4)*10, b = 80, c = 90, d = 360-a-b-c;
    return makeQuestion(i, `Три угла четырёхугольника равны ${a}°, ${b}° и ${c}°. Найдите четвёртый.`,
      `${d}°`, [`${360-d}°`, `${a+b+c}°`, '90°'],
      `Сумма углов четырёхугольника 360°: 360° − ${a}° − ${b}° − ${c}° = ${d}°.`);
  },

  // 13. Площади и теорема Пифагора
  i => {
    if (i % 3 === 0) {
      const a = i+2, b = i+4;
      return makeQuestion(i, `Найдите площадь прямоугольника со сторонами ${a} и ${b}.`,
        `${a*b}`, [`${2*(a+b)}`, `${a+b}`, `${a*b+2}`],
        `Площадь прямоугольника равна произведению сторон: ${a} · ${b} = ${a*b}.`);
    }
    if (i % 3 === 1) {
      const n = (i % 4)+3, m = n+1;
      return makeQuestion(i, `Катеты прямоугольного треугольника равны ${n} и ${m}. Найдите гипотенузу.`,
        `${Math.sqrt(n*n+m*m)}`,
        [`${n+m}`, `${m+1}`, `${n+m+1}`],
        `По теореме Пифагора c² = ${n}² + ${m}². Для этих катетов c = ${Math.sqrt(n*n+m*m)}.`);
    }
    const base = i+3, height = 4;
    return makeQuestion(i, `Найдите площадь треугольника с основанием ${base} и высотой ${height}.`,
      `${base*height/2}`, [`${base*height}`, `${base+height}`, `${base*height/2+2}`],
      `Площадь треугольника S = ah/2 = ${base} · ${height} ÷ 2 = ${base*height/2}.`);
  },

  // 14. Окружность и круг
  i => {
    const r = (i % 7)+1;
    if (i % 2 === 0) {
      return makeQuestion(i, `Найдите длину окружности радиуса ${r}.`,
        `${2*r}π`, [`${r*r}π`, `${r}π`, `${4*r}π`],
        `C = 2πr = 2 · ${r} · π = ${2*r}π.`);
    }
    return makeQuestion(i, `Найдите площадь круга радиуса ${r}.`,
      `${r*r}π`, [`${2*r}π`, `${r}π`, `${2*r*r}π`],
      `S = πr² = π · ${r}² = ${r*r}π.`);
  },

  // 15. Векторы и координаты
  i => {
    const x1 = i%5, y1 = i%4, dx = (i%5)+1, dy = (i%3)+1;
    const x2 = x1+dx, y2 = y1+dy;
    return makeQuestion(i, `Точки A(${x1}; ${y1}) и B(${x2}; ${y2}). Найдите координаты вектора AB.`,
      `(${dx}; ${dy})`,
      [`(${x2}; ${y2})`, `(${x1}; ${y1})`, `(${dy}; ${dx})`],
      `Вычитаем координаты A из координат B: (${x2} − ${x1}; ${y2} − ${y1}) = (${dx}; ${dy}).`);
  },

  // 16. Прямые и плоскости в пространстве
  i => {
    const facts = [
      ['Как называются прямые в пространстве, которые не пересекаются и не параллельны?', 'Скрещивающиеся', ['Перпендикулярные', 'Совпадающие', 'Пересекающиеся'], 'Скрещивающиеся прямые не лежат в одной плоскости и не пересекаются.'],
      ['Сколько общих точек имеют две параллельные прямые?', '0', ['1', '2', 'Бесконечно много'], 'Параллельные прямые не пересекаются, поэтому общих точек нет.'],
      ['Сколько общих точек имеют две пересекающиеся прямые?', '1', ['0', '2', 'Бесконечно много'], 'Пересекающиеся прямые имеют ровно одну общую точку.'],
      ['Сколько точек задают единственную прямую?', 'Две различные точки', ['Одна точка', 'Три точки на одной прямой', 'Четыре точки'], 'Через любые две различные точки проходит единственная прямая.'],
      ['Сколько точек задают единственную плоскость, если они не лежат на одной прямой?', 'Три', ['Одна', 'Две', 'Четыре на одной прямой'], 'Три точки, не лежащие на одной прямой, задают единственную плоскость.']
    ];
    const [question, answer, wrong, explanation] = facts[i % facts.length];
    return makeQuestion(i, question, answer, wrong, explanation);
  },

  // 17. Призмы и пирамиды
  i => {
    const base = (i%6)+2, height = (i%5)+2;
    if (i%2===0) {
      const volume = base*height;
      return makeQuestion(i, `Площадь основания призмы ${base}, высота ${height}. Найдите объём.`,
        `${volume}`, [`${volume+base}`, `${base+height}`, `${base*height*2}`],
        `V = Sосн · h = ${base} · ${height} = ${volume}.`);
    }
    const volume = base*height/3;
    return makeQuestion(i, `Площадь основания пирамиды ${base}, высота ${height}. Найдите объём.`,
      `${volume}`, [`${base*height}`, `${base+height}`, `${volume+base}`],
      `V = ⅓Sосн · h = ⅓ · ${base} · ${height} = ${volume}.`);
  },

  // 18. Цилиндр, конус и шар
  i => {
    if (i%3===0) {
      const r=(i%4)+1, h=(i%5)+2;
      return makeQuestion(i, `Найдите объём цилиндра с радиусом ${r} и высотой ${h}.`,
        `${r*r*h}π`, [`${r*h}π`, `${2*r*h}π`, `${r*r*h/2}π`],
        `V = πr²h = π · ${r}² · ${h} = ${r*r*h}π.`);
    }
    if (i%3===1) {
      const r=(i%3)+1, h=3*r;
      return makeQuestion(i, `Найдите объём конуса с радиусом ${r} и высотой ${h}.`,
        `${r*r*h/3}π`, [`${r*r*h}π`, `${r*h}π`, `${r*r*h/2}π`],
        `V = ⅓πr²h = ⅓ · π · ${r}² · ${h} = ${r*r*h/3}π.`);
    }
    const r=(i%4)+1;
    return makeQuestion(i, `Найдите объём шара радиуса ${r}.`,
      `${4*r*r*r}/3π`, [`${r*r*r}π`, `${2*r*r}π`, `${4*r*r}/3π`],
      `V = ⁴⁄₃πr³ = ⁴⁄₃ · π · ${r}³ = ${4*r*r*r}/3π.`);
  }
];

function getQuestions(topicIndex) {
  const generator = questionGenerators[topicIndex];
  return Array.from({ length: 15 }, (_, i) => generator(i));
}

const words = {
  ru: {
    overview:'Обзор', sections:'Разделы', myPlan:'Мой план',
    mistakes:'Работа над ошибками', teacherView:'Панель учителя',
    classroom:'КЛАСС', workspace:'ОБУЧЕНИЕ',
    teacher:'Преподаватель', profile:'ПРОФИЛЬ УЧЕНИКА',
    joinTitle:'Начнём учиться', joinText:'Создайте профиль без электронной почты.',
    yourName:'Ваше имя', yourClass:'Класс', saveProfile:'Сохранить профиль',
    localNote:'Профиль и прогресс сохраняются в этом браузере.',
    login:'Войти', welcome:'Математика, которая подстраивается под тебя',
    subtitle:'Найди темы для повторения и двигайся по индивидуальному плану.',
    start:'Пройти диагностику', progress:'Мой прогресс',
    completed:'Тем пройдено', best:'Средний результат',
    recommended:'Рекомендуем повторить', topics:'тем',
    lesson:'Краткое объяснение', begin:'Тест · 15 вопросов',
    check:'Проверить ответы', back:'К разделам', testDone:'Тест завершён',
    correct:'Верно', question:'Вопрос', choose:'Выбери один ответ на каждый вопрос.',
    noPlan:'Пройди тесты по темам — результаты появятся здесь.',
    noMistakes:'Пока нет ошибок для повторения. Пройди тест по любой теме.',
    ask:'Учебный помощник', chatPlaceholder:'Напиши вопрос…', send:'Отправить',
    chatNote:'Демо-помощник использует объяснение текущей темы. Для настоящего ИИ-чата нужен сервер.',
    classProgress:'Прогресс класса',
    serverNote:'Эта демоверсия хранит данные только в браузере на текущем устройстве. Для общей статистики класса нужен сервер.',
    noResults:'Пока нет результатов тестов.', createProfile:'Создай профиль ученика, чтобы сохранять результаты.'
  },
  kk: {
    overview:'Шолу', sections:'Бөлімдер', myPlan:'Менің жоспарым',
    mistakes:'Қателермен жұмыс', teacherView:'Мұғалім панелі',
    classroom:'СЫНЫП', workspace:'ОҚУ',
    teacher:'Мұғалім', profile:'ОҚУШЫ ПРОФИЛІ',
    joinTitle:'Оқуды бастайық', joinText:'Электрондық поштасыз профиль жасаңыз.',
    yourName:'Атыңыз', yourClass:'Сынып', saveProfile:'Профильді сақтау',
    localNote:'Профиль мен үлгерім осы браузерде сақталады.',
    login:'Кіру', welcome:'Саған бейімделетін математика',
    subtitle:'Қайталау керек тақырыптарды тауып, жеке жоспарыңмен оқы.',
    start:'Диагностиканы бастау', progress:'Менің үлгерімім',
    completed:'Өтілген тақырып', best:'Орташа нәтиже',
    recommended:'Қайталауға ұсынамыз', topics:'тақырып',
    lesson:'Қысқаша түсіндіру', begin:'Тест · 15 сұрақ',
    check:'Жауаптарды тексеру', back:'Бөлімдерге қайту', testDone:'Тест аяқталды',
    correct:'Дұрыс', question:'Сұрақ', choose:'Әр сұраққа бір жауап таңда.',
    noPlan:'Тақырыптар бойынша тест тапсыр — нәтижелер осында көрінеді.',
    noMistakes:'Қайталау үшін қате жоқ. Кез келген тақырып бойынша тест тапсыр.',
    ask:'Оқу көмекшісі', chatPlaceholder:'Сұрағыңды жаз…', send:'Жіберу',
    chatNote:'Демо-көмекші тақырыпты түсіндіреді. Нақты ЖИ чатына сервер қажет.',
    classProgress:'Сынып үлгерімі',
    serverNote:'Демо деректерді осы құрылғы браузерінде сақтайды. Сынып статистикасы үшін сервер қажет.',
    noResults:'Әзірге тест нәтижелері жоқ.', createProfile:'Нәтижелерді сақтау үшін оқушы профилін жаса.'
  },
  en: {
    overview:'Overview', sections:'Sections', myPlan:'My plan',
    mistakes:'Review mistakes', teacherView:'Teacher dashboard',
    classroom:'CLASSROOM', workspace:'LEARNING',
    teacher:'Teacher', profile:'STUDENT PROFILE',
    joinTitle:'Let’s get started', joinText:'Create a profile without an email address.',
    yourName:'Your name', yourClass:'Class', saveProfile:'Save profile',
    localNote:'Profile and progress are saved in this browser.',
    login:'Sign in', welcome:'Math that adapts to you',
    subtitle:'Find topics to review and follow your personal learning plan.',
    start:'Take the diagnostic', progress:'My progress',
    completed:'Topics completed', best:'Average score',
    recommended:'Recommended review', topics:'topics',
    lesson:'Quick lesson', begin:'Quiz · 15 questions',
    check:'Check answers', back:'Back to sections', testDone:'Quiz complete',
    correct:'Correct', question:'Question', choose:'Choose one answer for each question.',
    noPlan:'Take topic quizzes to see your results here.',
    noMistakes:'No mistakes to review yet. Take a quiz in any topic.',
    ask:'Study helper', chatPlaceholder:'Type a question…', send:'Send',
    chatNote:'The demo helper uses the topic explanation. A server is needed for a real AI chat.',
    classProgress:'Class progress',
    serverNote:'This demo stores data only in this browser on this device. Shared class progress needs a server.',
    noResults:'There are no quiz results yet.', createProfile:'Create a student profile to save results.'
  }
};

const app = document.getElementById('app');
const languageSelect = document.getElementById('language');
const profileButton = document.getElementById('profileButton');
const loginDialog = document.getElementById('loginDialog');
const loginForm = document.getElementById('loginForm');

let language = localStorage.getItem('abai-language') || 'ru';
let profile = readStorage('abai-profile', null);
let chosenAnswers = {};

function readStorage(key, fallback) {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : fallback;
  } catch {
    return fallback;
  }
}

function saveStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function tr(key) {
  return words[language]?.[key] || words.ru[key] || key;
}

function titleOf(topic) {
  return topic[language] || topic.ru;
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'
  })[char]);
}

function getResults() {
  return readStorage('abai-progress', {});
}

function updateProfile() {
  const name = document.getElementById('profileName');
  const avatar = document.getElementById('avatar');

  if (name) name.textContent = profile?.name || tr('login');
  if (avatar) avatar.textContent = profile?.name?.charAt(0).toUpperCase() || '?';

  if (profile) {
    const nameInput = document.getElementById('studentName');
    const classInput = document.getElementById('className');
    if (nameInput) nameInput.value = profile.name;
    if (classInput) classInput.value = profile.className;
  }
}

function setupProfile() {
  profileButton?.addEventListener('click', () => loginDialog?.showModal());

  loginForm?.addEventListener('submit', event => {
    event.preventDefault();

    const name = document.getElementById('studentName')?.value.trim();
    const className = document.getElementById('className')?.value.trim();
    if (!name || !className) return;

    profile = { name, className };
    saveStorage('abai-profile', profile);
    loginDialog?.close();
    updateProfile();
    render();
  });

  updateProfile();
}

function setLanguage(next) {
  if (!words[next]) return;

  language = next;
  localStorage.setItem('abai-language', next);
  document.documentElement.lang = next;

  document.querySelectorAll('[data-i18n]').forEach(element => {
    const translated = words[next][element.dataset.i18n];
    if (translated) element.textContent = translated;
  });

  render();
  updateProfile();
}

languageSelect.value = language;
languageSelect.addEventListener('change', event => setLanguage(event.target.value));
document.documentElement.lang = language;

function route() {
  return (location.hash.replace(/^#/, '') || 'home').split('/');
}

function setActiveNav(page) {
  document.querySelectorAll('.nav-link[data-page]').forEach(link => {
    link.classList.toggle('active', link.dataset.page === page);
  });
}

function openTopic(index) {
  location.hash = `topic/${index}`;
}

function render() {
  if (!app) return;

  const [page, id] = route();
  setActiveNav(page);

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
      <div class="stat-card"><span class="stat-label">${tr('completed')}</span><strong class="stat-value">${Object.keys(results).length}/${topics.length}</strong><span class="stat-hint">${tr('sections')}</span></div>
      <div class="stat-card"><span class="stat-label">${tr('yourClass') || 'Класс'}</span><strong class="stat-value">${profile ? escapeHTML(profile.className) : '—'}</strong><span class="stat-hint">${profile ? escapeHTML(profile.name) : tr('login')}</span></div>
    </div>

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

  const cards = ['algebra', 'geometry'].map(group => {
    const items = topics
      .map((topic, index) => ({ topic, index }))
      .filter(item => item.topic.group === group);

    return `
      <section class="section-card">
        <div class="section-card-top"><span class="section-symbol">${group === 'algebra' ? '∑' : '△'}</span><span>${items.length} ${tr('topics')}</span></div>
        <h3>${tr(group)}</h3>
        <div class="topic-list">
          ${items.map(({ topic, index }) => `
            <button class="topic-row" type="button" data-topic="${index}">
              <span class="topic-index">${String(index + 1).padStart(2, '0')}</span>
              <span class="topic-main"><b>${escapeHTML(titleOf(topic))}</b><small>${results[index] ? `${results[index].score}%` : tr('begin')}</small></span>
              <span class="topic-score">→</span>
            </button>`).join('')}
        </div>
      </section>`;
  }).join('');

  app.innerHTML = `
    <div class="welcome"><div class="eyebrow">${tr('sections')}</div><h1>${tr('sections')}</h1><p>${tr('subtitle')}</p></div>
    <div class="section-grid">${cards}</div>`;

  app.querySelectorAll('[data-topic]').forEach(button => {
    button.addEventListener('click', () => openTopic(Number(button.dataset.topic)));
  });
}

function renderTopic(topicIndex) {
  const topic = topics[topicIndex];
  const testQuestions = getQuestions(topicIndex);
  const previous = getResults()[topicIndex];
  chosenAnswers = {};

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
      ${testQuestions.map((item, index) => `
        <section class="quiz-question" id="question-${index}">
          <div class="question-meta">${tr('question')} ${index + 1} / 15</div>
          <div class="question-text">${escapeHTML(item.q)}</div>
          <div class="answers">
            ${item.a.map((answer, answerIndex) => `
              <button class="answer-option" type="button" data-q="${index}" data-a="${answerIndex}">${escapeHTML(answer)}</button>
            `).join('')}
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

  setupQuiz(topicIndex, testQuestions);
  setupChat(topic);
}

function setupQuiz(topicIndex, testQuestions) {
  app.querySelectorAll('.answer-option').forEach(button => {
    button.addEventListener('click', () => {
      const questionIndex = Number(button.dataset.q);
      chosenAnswers[questionIndex] = Number(button.dataset.a);

      app.querySelectorAll(`[data-q="${questionIndex}"]`).forEach(option => {
        option.classList.toggle('selected', option === button);
      });
    });
  });

  document.getElementById('quizForm').addEventListener('submit', event => {
    event.preventDefault();

    const missing = testQuestions.findIndex((_, index) => chosenAnswers[index] === undefined);
    if (missing !== -1) {
      document.getElementById(`question-${missing}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    let correctCount = 0;
    const mistakes = [];

    testQuestions.forEach((question, questionIndex) => {
      const selected = chosenAnswers[questionIndex];

      app.querySelectorAll(`[data-q="${questionIndex}"]`).forEach((option, answerIndex) => {
        option.disabled = true;
        if (answerIndex === question.c) option.classList.add('correct');
        if (answerIndex === selected && selected !== question.c) option.classList.add('wrong');
      });

      if (selected === question.c) {
        correctCount++;
      } else {
        mistakes.push(questionIndex);
        document.getElementById(`explanation-${questionIndex}`)?.classList.add('show');
      }
    });

    const score = Math.round(correctCount / testQuestions.length * 100);
    const results = getResults();

    results[topicIndex] = {
      score,
      correct: correctCount,
      total: testQuestions.length,
      mistakes,
      date: new Date().toISOString()
    };

    saveStorage('abai-progress', results);

    document.getElementById('quizResult').innerHTML = `
      <div class="result-banner">${tr('testDone')}: <strong>${correctCount}/15 · ${score}%</strong></div>`;

    document.getElementById('quizResult').scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
}

function setupChat(topic) {
  document.getElementById('chatForm').addEventListener('submit', event => {
    event.preventDefault();
    const input = document.getElementById('chatInput');
    if (!input.value.trim()) return;

    const chat = document.getElementById('chatMessages');
    const studentMessage = document.createElement('div');
    studentMessage.className = 'chat-message user';
    studentMessage.textContent = input.value.trim();

    const helperMessage = document.createElement('div');
    helperMessage.className = 'chat-message';
    helperMessage.textContent = topic.lesson;

    chat.append(studentMessage, helperMessage);
    input.value = '';
    chat.scrollTop = chat.scrollHeight;
  });
}

function renderPlan() {
  const results = getResults();

  const completed = topics
    .map((topic, index) => ({ topic, index, result: results[index] }))
    .filter(item => item.result)
    .sort((a, b) => a.result.score - b.result.score);

  app.innerHTML = `
    <div class="welcome"><div class="eyebrow">${tr('myPlan')}</div><h1>${tr('myPlan')}</h1><p>${tr('noPlan')}</p></div>
    ${completed.length
      ? `<div class="topic-list">${completed.map(({ topic, index, result }) => `
          <button class="topic-row" type="button" data-topic="${index}">
            <span class="topic-index">${result.score}%</span>
            <span class="topic-main"><b>${escapeHTML(titleOf(topic))}</b><small>${tr('recommended')}</small></span>
            <span class="topic-score">→</span>
          </button>`).join('')}</div>`
      : `<div class="empty">${tr('noPlan')}<br><button class="button primary small" style="margin-top:12px" type="button" onclick="location.hash='sections'">${tr('sections')}</button></div>`}`;

  app.querySelectorAll('[data-topic]').forEach(button => {
    button.addEventListener('click', () => openTopic(Number(button.dataset.topic)));
  });
}

function renderMistakes() {
  const results = getResults();

  const items = topics
    .map((topic, index) => ({ topic, index, result: results[index] }))
    .filter(item => item.result?.mistakes?.length);

  app.innerHTML = `
    <div class="welcome"><div class="eyebrow">${tr('mistakes')}</div><h1>${tr('mistakes')}</h1></div>
    ${items.length
      ? items.map(({ topic, index, result }) => `
          <div class="card" style="margin-bottom:12px">
            <h3>${escapeHTML(titleOf(topic))}</h3>
            <p class="muted">${result.score}% · ${result.mistakes.length} ${tr('mistakes')}</p>
            <button class="button outline small" type="button" data-topic="${index}">${tr('lesson')} →</button>
          </div>`).join('')
      : `<div class="empty">${tr('noMistakes')}<br><button class="button primary small" style="margin-top:12px" type="button" onclick="location.hash='sections'">${tr('sections')}</button></div>`}`;

  app.querySelectorAll('[data-topic]').forEach(button => {
    button.addEventListener('click', () => openTopic(Number(button.dataset.topic)));
  });
}

function renderTeacher() {
  const results = getResults();
  const rows = topics
    .map((topic, index) => ({ topic, result: results[index] }))
    .filter(item => item.result);

  app.innerHTML = `
    <div class="welcome"><div class="eyebrow">${tr('teacher')}</div><h1>${tr('classProgress')}</h1><p>${tr('serverNote')}</p></div>
    ${profile
      ? `<div class="card">
          <h3>${escapeHTML(profile.className)} · ${escapeHTML(profile.name)}</h3>
          ${rows.length
            ? rows.map(({ topic, result }) => `<div class="topic-row"><span class="topic-main"><b>${escapeHTML(titleOf(topic))}</b></span><span class="topic-score">${result.score}%</span></div>`).join('')
            : `<p class="muted">${tr('noResults')}</p>`}
        </div>`
      : `<div class="empty">${tr('createProfile')}<br><button class="button primary small" style="margin-top:12px" type="button" onclick="document.getElementById('loginDialog').showModal()">${tr('login')}</button></div>`}`;
}

setupProfile();
window.addEventListener('hashchange', render);
render();
