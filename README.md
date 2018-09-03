# Зачем

1. Увлечь ребенка программированием, внятнуть в процесс создания компьютерной игры
2. Поэкспериментировать с асинхронным JS - `Promise`, `async`, `await` и пр.

# Стратегия

1. Держимся так близко к стандарту WebGL, насколько это возможно
2. Не используем фреймворки и высокоуровневые надстройки, чтобы не утонуть в дебрях и начать с базовых вещей

Для работы с WebGL используется обертка Three.js https://github.com/mrdoob/three.js#readme

Игра будет трехмерной, в отличии от оригинала. Это позволит избежать трудоемкой работы со спрайтами, использовать красивые современные эффекты, импровизировать, подключать сторонние библиотеки.

# TODO

1. Отдать ребенку создание звуков и их подгрузку в игру
1. Нарисовать клетки с 2D водой
2. Нарисовать клетки с 2D бетонными стенами
  Инструкция по работе с текстурами https://codepen.io/rachsmith/post/beginning-with-3d-webgl-pt-3-materials
3. Карту уровня закодировать в массиве строк, отдать проектирование уровней ребенку. Он может придумать свои уровни, либо перености их из оригинальной игры
3. Использовать anchor для подгрузки разных карт, сделать стартовый экран с выбором уровней
3. Научить танк врезаться в препятствия и другие танки - загуглить collision detection
4. Разместить на игровом поле деревянные ящики
5. Нарисовать клетки с 2D льдом
6. Нарисовать клетки с 2D кирпичными стенами
  Инструкция по работе с текстурами https://codepen.io/rachsmith/post/beginning-with-3d-webgl-pt-3-materials
7. Нарисовать клетки с 2D лесом
  Инструкция по работе с текстурами https://codepen.io/rachsmith/post/beginning-with-3d-webgl-pt-3-materials
8. Нарисовать клетку с 2D орлом
  Инструкция по работе с текстурами https://codepen.io/rachsmith/post/beginning-with-3d-webgl-pt-3-materials
9. Заменить 2D игровые объекты элементами, взятыми с просторов Интернета: лес, вода, стены.
10. Использовать Vue.js для рендеринга панели status bar: очки, жизни, отладочная информация. Шаблон проекта взять с вНедвижки


# TODO емкие вещи

- collision detection для танков на базе алгоритма bounding boxes, найти готовую JS реализацию
- игровая сетка, по которой перемещаются танки
- прикрутить плавную анимацию между игровыми фреймами
  https://greensock.com/tweenlite , пример использования с 3D https://codepen.io/rachsmith/post/beginning-with-3d-webgl-pt-4-animation
- воспроизвести алгоритм танков описанный в статье на habrahabr

# Links

- [Спрайт старых танчиков](https://github.com/loveyacper/BattleCity/blob/master/BattleCity1990/res/drawable/spirit.png)
- [Карты и звук старых танчиков](https://github.com/loveyacper/BattleCity/tree/master/BattleCity1990/res/raw)
- [Тайлы и логика старых танчиков](https://habrahabr.ru/post/142126/)
- [Interactive 3D Graphics. Udacity Free Course](https://classroom.udacity.com/courses/cs291/lessons/124106593/concepts/1579966470923)
- [Collection of tutorials by CJ Gammon](http://blog.cjgammon.com/)
- [Aerotwist tutorials by Paul Lewis](https://aerotwist.com/tutorials/)
- [Professor Stemkoskis Examples](http://stemkoski.github.io/Three.js/index.html)
- [Official three.js Examples](https://threejs.org/examples/)
- [Разработка браузерной онлайн игры без фреймворков и движков](https://habrahabr.ru/post/339566/)
- [Learning WebGL. Lessons](http://learningwebgl.com/blog/?page_id=1217)
