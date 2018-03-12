# Стратегия

1. Держимся так близко к стандарту WebGL, насколько это возможно
2. Не используем фреймворки и высокоуровневые надстройки, чтобы не утонуть в дебрях и начать с базовых вещей


Что делать если с WebGL не пойдет:

- Обертка Three.js https://github.com/mrdoob/three.js#readme

Игра будет трехмерной, в отличии от оригинала. Это позволит избежать трудоемкой работы со спрайтами, использовать красивые современные эффекты, импровизировать, подключать сторонние библиотеки.

# TODO

- Добавить желтый танк второго игрока
- Дать второму игроку способ управлять танком с клавиатуры
- Разместить на игровом поле деревянные ящики
- Использовать Vue.js для рендеринга панели status bar: очки, жизни, отладочная информация. Шаблон проекта взять с вНедвижки
- Нарисовать снаряд выпущенный из пушки
- Сделать так, чтобы снаряд улетал по направлению выстрела при нажатии клавиши на компьютере
- Нарисовать клетки с 2D водой
- Нарисовать клетки с 2D льдом
- Нарисовать клетки с 2D кирпичными стенами
  Инструкция по работе с текстурами https://codepen.io/rachsmith/post/beginning-with-3d-webgl-pt-3-materials
- Нарисовать клетки с 2D бетонными стенами
  Инструкция по работе с текстурами https://codepen.io/rachsmith/post/beginning-with-3d-webgl-pt-3-materials
- Нарисовать клетки с 2D лесом
  Инструкция по работе с текстурами https://codepen.io/rachsmith/post/beginning-with-3d-webgl-pt-3-materials
- Нарисовать клетку с 2D орлом
  Инструкция по работе с текстурами https://codepen.io/rachsmith/post/beginning-with-3d-webgl-pt-3-materials
- Карту уровня закодировать в массиве строк, дать Егору поиграться с придумыванием уровней, переносом уровней из оригинальной игры
- Заменить 2D игровые объекты элементами, взятыми с просторов Интернета: лес, вода, стены.


# TODO емкие вещи

- collision detection для танков и снарядов на базе алгоритма bounding boxes, найти готовую JS реализацию
- игровая сетка, по которой перемещаются танки
- redux saga в качестве замены конечного автомата - кол-во жизней, состояние танка, его реакция на действия пользователя, пауза в игре
- прикрутить плавную анимацию между игровыми фреймами
  https://greensock.com/tweenlite , пример использования с 3D https://codepen.io/rachsmith/post/beginning-with-3d-webgl-pt-4-animation

# Links

- [Interactive 3D Graphics. Udacity Free Course](https://classroom.udacity.com/courses/cs291/lessons/124106593/concepts/1579966470923)
- [Collection of tutorials by CJ Gammon](http://blog.cjgammon.com/)
- [Aerotwist tutorials by Paul Lewis](https://aerotwist.com/tutorials/)
- [Professor Stemkoskis Examples](http://stemkoski.github.io/Three.js/index.html)
- [Official three.js Examples](https://threejs.org/examples/)
- [Разработка браузерной онлайн игры без фреймворков и движков](https://habrahabr.ru/post/339566/)
- [Learning WebGL. Lessons](http://learningwebgl.com/blog/?page_id=1217)
