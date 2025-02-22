# MarkDown (инструкция по языку разметки)

## Что такое MarkDown?

**Markdown** — это *упрощённый язык разметки*, созданный для того, чтобы сделать написание текста для интернета максимально *простым* и *понятным*. Он позволяет форматировать текст, используя всего несколько простых символов, в отличие от более сложных языков, таких как HTML. Markdown не является языком программирования, а скорее инструментом для структурирования и оформления текста

![Логотип MarkDown](https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/205_Markdown-512.png)
---

## Где применяется MarkDown?

Markdown очень популярен и используется в самых разных сферах, вот некоторые из них:

1. ___Веб-разработка:___
    * **README-файлы:** практически каждый репозиторий на GitHub, GitLab и Bitbucket содержит файл README.md, написанный на Markdown, в котором описывается проект.
    * **Генерация сайтов:** многие генераторы статических сайтов (например, Jekyll, Hugo, Gatsby) используют Markdown для создания контента.
    * **Комментарии на сайтах:** некоторые платформы, такие как Reddit, Stack Overflow и другие, поддерживают форматирование комментариев с помощью Markdown.
2. ___Создание документации:___
    * **Техническая документация:** Markdown отлично подходит для написания документации благодаря своей простоте и читабельности.
    * **Блоги и статьи:** многие блог-платформы позволяют писать статьи в формате Markdown.
    * **Заметки:** Markdown популярен среди тех, кто ведёт заметки, так как позволяет быстро форматировать текст.
2. ___Сообщения и мессенджеры:___
    * Некоторые мессенджеры (например, Slack, Discord) поддерживают базовое форматирование Markdown.
    * **Электронная почта:** Иногда Markdown используется для форматирования писем.
    * **Создание презентаций:** существуют инструменты для создания презентаций на основе Markdown (например, Marp).
---

## Почему Markdown так популярен?

1. **Простота:** Легко выучить и использовать.
2. **Читабельность:** даже в исходном виде текст, написанный на Markdown, легко читается.
3. **Переносимость:** файлы Markdown можно открывать и редактировать в любом текстовом редакторе.
4. **Универсальность:** Markdown поддерживается многими платформами и инструментами.
5. **Быстрая работа:** можно быстро и легко форматировать текст, не отвлекаясь на сложные теги
---

## Синтаксис MarkDown с основными атрибутами

### Заголовки и горизонтальные линии

Заголовки *H1–H6* выделяются в *Markdown* с помощью знаков решетки (диез/шарп). Можно просто поставить нужное количество решеток в начале строки, чтобы указать уровень. Или заключить строку с двух сторон по аналогии с HTML-тегами, кому как удобно.

```
    # Это H1 
    ## Это H2 
    ### Это H3 
    #### Это H4 
    ##### Это H5 
    ###### Это H6
```

Другой вариант: написать текст первого заголовка, затем нажать *Enter* и на следующей строке указать любое количество знаков *«равно»*. Аналогичным образом можно выделить H2, только использовать уже нужно дефисы. Заголовки других уровней таким методом оформить нельзя.

```
    Это H1 или Заголовок I
    ===
    Это H2 или Заголовок II
    ---
``` 

![подсказка по заголовкам №1](https://texterra.ru/upload/medialibrary/43c/eljn93ziug7g62u7g18li79e3huxvod2/1.webp)

Если отделить последовательность дефисов пустой строкой, то *H2* не будет. Получится горизонтальная разделительная линия. Ее можно оформить также с помощью *звездочек* или *знака нижнего подчеркивания*. Количество символов и пробелов между ними роли не играет. А вот знак равенства работает только с заголовками *H1*, горизонтальные линии он не рисует:

![подсказка по заголовкам №2](https://texterra.ru/upload/medialibrary/8d5/psh5naq4epf5oonmu23iruays66du7jl/2.webp)

### Выделения текста

Форматирование *курсивом* и **жирным** точно есть во всех инструментах, где другие функции *Markdown* могут быть ограничены. Синтаксис выделения текста и расставления акцентов:

```
    __Жирный__
    **Тоже жирный**
    *Курсив*
    _Тоже курсив_
    ~~Зачеркнутый~~
```

Можно легко комбинировать эти способы выделения.

![подсказка по выделению текста №1](https://texterra.ru/upload/medialibrary/2ae/pkxefy16mhirq17tgtaqcliu2i2s507o/3.webp)

### Списки и отступы

Чтобы оформить строку в элемент маркированного списка, в начале нужно поставить плюс, минус или звездочку. Звездочка не приведет к курсивному выделению, потому что отделяется от слова пробелом.

```
    - Пункт 1
    - Пункт 2
    - Пункт 3
```
или

```
    + Пункт 1 
    + Пункт 2 
    + Пункт 3
```

или

``` 
    * Пункт 1 
    * Пункт 2 
    * Пункт 3
``` 
![подсказка по спискам и отступам №1](https://texterra.ru/upload/medialibrary/b36/81xs1gyyrpuyu7gmuwfztwnwc147ceni/4.webp)

Если необходимо создать нумерованный список, используйте в начале строки цифру с точкой. Удобно, что нумерация автоматическая: можно вставить любые цифры, и ошибки не будет.

```
    1. Пункт 1
    2. Пункт 2
    3. Пункт 3
```

или

```
    1. Пункт 1 
    1. Пункт 2
    1. Пункт 3
 ```
иди даже

```
    9. Пункт 1 
    5. Пункт 2
    1. Пункт 3
```

![подсказка по спискам о отступам №2](https://texterra.ru/upload/medialibrary/b68/05ova58bqtt5ks3zelhytsztvnm6a21j/5.webp)

Маркдаун-разметка также позволяет оформлять многоуровневые списки. Уровень обозначается не количеством спецсимволов, как в случае с заголовками, а за счет отступов. Проще не считать пробелы, а каждый новый подпункт выделять табуляцией.

```
    - Пункт 1                         
        - подпункт А                  
            - подподпункт а           
    - Пункт 2                         
        + Подпункт А                  
            * Подподпункт а           
                                      
    ---                               
                                      
    1. Пункт 1                        
        + Подпункт А                  
            - Подподпункт а           
                                      
    2. Пункт 2                        
        1. Подпункт 2.1               
            1. Подподпункт 2.1.1      
                                      
    3. Пункт 3
```

![подсказка по спискам о отступам №3](https://texterra.ru/upload/medialibrary/bac/uqpuavasiihcam3i8apvbgcrhzsaj0r7/6.webp)

Если пункт списка включает несколько строк или абзацев, нужно соблюдать всё те же отступы, чтобы было красиво оформлено. Ключевые мысли в списках также можно выделять другой разметкой, например, жирным. Примеры:

```
    * __Тезис №1__
        Раскрываем тезис.
    * __Тезис №2__
        Раскрываем тезис.
    ---
    * __Тезис №1__ Раскрываем тезис.
    * __Тезис №2__ Раскрываем тезис.
```

![подсказка по спискам о отступам №4](https://texterra.ru/upload/medialibrary/c7e/a2zqcschn5k7pt51huuc13t4hybjcn1e/7.webp)

### Ссылки и картинки

Чтобы поставить гиперссылку без анкора, нужно взять *URL* в угловые скобки. С *e-mail* – аналогично.

Если вставлять с *анкором*, то тогда текст ссылки заключается в *квадратные скобки*, а адрес страницы – в *круглые*. Рядом с URL можно прописать *тайтл*, его объявляют в кавычках (он тоже остается внутри круглых скобок).

```
    Это [ссылка]( "Тайтл") с тайтлом. 
    [Эта ссылка](http://example.net/) без заголовка. 
    https://example.ru/; – а это безанкорная ссылка.
```

![подсказка к разделу ссылки и картинки №1](https://texterra.ru/upload/medialibrary/eeb/fz27b9t0kbld3ge2hcgcaolz9g7ymt0b/8.webp)

Чтобы длинные URL не затрудняли чтение и написание документа Markdown, есть вариант присвоения каждой ссылке определенных ID (меток/переменных). Можно сделать это несколькими способами:

Ссылаемся на `[блог][tt-blog-link]` через ID. Объявляем метку позже по аналогии со сносками. Цифрами обозначить тоже можно: `[Google][1]`, `[Yandex][2]` 

Еще можно так встраивать ссылки: `[MySite] []`

```
    [tt-blog-link]: /blog "Блог про интернет-маркетинг"
    [1]: google.com 'Сайт Google' 
    [2]: yandex.ru (Сайт «Яндекса») 
    [MySite]:
```

Если URL длинные, да еще и с UTM-метками, их лучше спрятать в самый конец документа. Обратите внимание: тайтлы можно обозначить и двойными, и одинарными кавычками, а также в скобкахСинтаксис Markdown для работы с картинками очень похожий. Разница в восклицательном знаке перед первыми квадратными скобками. Ссылке на картинку тоже можно присвоить определенный ID. Примеры:

```
    ![Лого](/upload/firmenniy-stil/footer-logo-svg.svg) 
    --- 
    ![Лого](/upload/firmenniy-stil/footer-logo-svg.svg "Наш логотип") 
    --- 
    ![Картинка][logo] [logo]: /upload/firmenniy-stil/footer-logo-svg.svg "Наш логотип"
```

### Цитаты и вставки кода

Если безанкорные ссылки оформляются двумя угловыми скобками, то для цитаты нужна только одна такая скобка. Все очень просто:

```
    > Привет! Это цитата 
    > Это тоже цитата 
    > Это еще одна цитата 
    Это ее продолжение (показываем отступом) 
    > Это тоже
    Будет
    >
    > Одна целая цитата 
```

Цитаты вкладываются как в списки, так и в другие цитаты. Цитаты также могут включать в себя заголовки, списки и код.

![Подсказка по разделу №1](https://texterra.ru/upload/medialibrary/1ae/s59a38nqli2ts9op2b3pr2gynecgcx27/11.webp)

Кстати, о коде. Вставлять его можно как внутрь строк, так и отдельными блоками. Для соответствующей разметки используют грависы или обратные тики. Инлайн-код выделяют одиночными символами, а блоки – тройными. При оформлении целого блока можно указать язык программирования, чтобы подсветить соответствующий синтаксис. Примеры:

```
    Просто инлайн-код: `print("Hello, World!")`

    Код на Python:

    `python
    x = int(input())

    if x > 0:
        print(x)
    else:
        print(-x)
    `
    Код на JavaScript:

    `javascript
    let greeting1 = 'Father!';
    console.log(greeting1);

    let greeting2 = 'Mother!';
    console.log(greeting2);
    `

```

![Подсказка по разделу №2](https://texterra.ru/upload/medialibrary/aca/pro53yb9ybxsb2phtqkwvqzzqosiz3og/12.webp)

### Таблицы и чекбоксы

Если поддерживается расширенная версия Markdown, можно вставлять таблицы. Для этого используются всего два символа: вертикальная черта и дефис. Дефисы работают примерно так же, как в случае с горизонтальной линией: отделяют заголовки от других строк, при этом количество символов значения не имеет. Вертикальная черта служит границей между столбцами.

```
    | Язык | Метка |
    | -----|------|
    | Java Script | javascript |
    | C++ |cpp|
    | HTML|html|
    |Markdown|md|
    |JSON|json|
    |Python|python|
    |SQL|sql
```

![создание таблиц](https://texterra.ru/upload/medialibrary/376/4ou6vijamrg304gns7lo3rfpxvmjhjcb/13.webp)

Для любителей чек-листов есть такая возможность. Чек-бокс получится, если в начале строки вставить пробел, заключенный с двух сторон в квадратные скобки. Можно сразу задать выполненную задачу с помощью `[X]`. С оформлением ссылок по-другому – в квадратных скобках или текст, или ничего.

![создание чек-боксов](https://texterra.ru/upload/medialibrary/d4c/jf71pe7zz6vdvn0cmw1gzg8z3fcexx6y/14.webp)

### Важно: экранирование

Мы разобрали с десяток различных символов, которые используются в разметке Markdown. Но что если эти символы нужны нам в самом тексте? Чтобы спецсимволы не исчезали и не влияли на оформление, нужно использовать экранирование. Как и во многих других языках программирования, этим целям служит обратная косая черта (бэкслеш).

![экранирование](https://texterra.ru/upload/medialibrary/3d4/b7h4iy3m8mzc7b5ipg7vbyy7eliu9ave/15.webp)

*Исключение* – когда надо вставить внутри кода грависы (обратные тики). Интерпретатор не посчитает их за обозначение инлайн-кода, если только весь участок кода заключен с двух сторон в двойные грависы. Ничего не понятно? На примере все наглядно:

![исключение](https://texterra.ru/upload/medialibrary/886/fps1tlq1beyvj79br0uuvdrgi7npjras/16.webp)

В отличие от HTML, в Markdown не нужно специально экранировать амперсанд (&) или угловую скобку (<).

## Инструменты для работы с маркдаун-разметкой

1. [Markdown Here](https://markdown-here.com/livedemo.html) – простейший сервис для проверки разметки и практики работы с языком.
2. [Markdown Editor](https://jbt.github.io/markdown-editor/) – тоже довольно простой редактор, но с возможностью открывать и сохранять в MD/HTML, есть ночной режим.
3. [Dillinger](https://dillinger.io/) – более функциональный, но тоже бесплатный онлайн-инструмент. Есть автосохранение, подсчет слов и символов. Работает импорт и сохранение в Medium, GitHub, Dropbox, Google Drive. Экспортирует не только в HTML и MD, но и в PDF.
4. [Writebox](https://write-box.appspot.com/) – веб-редактор для любителей минимализма. Есть синхронизация с Dropbox и Google Drive, настройка горячих клавиш, скачивание документов в текстовом и HTML-формате.
5. [Codepen](https://codepen.io/) – платформа для фронтенд-разработки, тоже хорошо подойдет для работы с Markdown, HTML и другими языками.
6. [Typora](https://www.typora.io/) – бесплатный, простой и мощный редактор Markdown для Windows, MacOS (beta-версия) и Linux. Ориентирован на создателей текстового контента. Имеет не отвлекающий режим, который позволяет лучше сосредоточится на творческой работе.
7. [Jekyll](https://jekyllrb.com/) – генератор статичных сайтов, работает в том числе с MD-файлами. 
8. [Hexo](https://hexo.io/ru/) – тоже генератор, но ориентированный на создание блогов. Поддерживает расширенный синтаксис Markdown.

## Заключение:

**Markdown** – это мощный и простой инструмент для создания и форматирования текстовых документов. Его легко освоить, и он пригодится вам во многих областях, от написания документации до создания веб-страниц. Попробуйте сами, и вы быстро оцените его удобство!