/*
 ДЗ 7 - Создать редактор cookie с возможностью фильтрации

 7.1: На странице должна быть таблица со списком имеющихся cookie. Таблица должна иметь следующие столбцы:
   - имя
   - значение
   - удалить (при нажатии на кнопку, выбранная cookie удаляется из браузера и таблицы)

 7.2: На странице должна быть форма для добавления новой cookie. Форма должна содержать следующие поля:
   - имя
   - значение
   - добавить (при нажатии на кнопку, в браузер и таблицу добавляется новая cookie с указанным именем и значением)

 Если добавляется cookie с именем уже существующией cookie, то ее значение в браузере и таблице должно быть обновлено

 7.3: На странице должно быть текстовое поле для фильтрации cookie
 В таблице должны быть только те cookie, в имени или значении которых, хотя бы частично, есть введенное значение
 Если в поле фильтра пусто, то должны выводиться все доступные cookie
 Если дабавляемая cookie не соответсвуте фильтру, то она должна быть добавлена только в браузер, но не в таблицу
 Если добавляется cookie, с именем уже существующией cookie и ее новое значение не соответствует фильтру,
 то ее значение должно быть обновлено в браузере, а из таблицы cookie должна быть удалена

 Запрещено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 */

/*
 homeworkContainer - это контейнер для всех ваших домашних заданий
 Если вы создаете новые html-элементы и добавляете их на страницу, то дабавляйте их только в этот контейнер

 Пример:
   const newDiv = document.createElement('div');
   homeworkContainer.appendChild(newDiv);
 */
const homeworkContainer = document.querySelector('#homework-container');

// текстовое поле для фильтрации cookie
const filterNameInput = homeworkContainer.querySelector('#filter-name-input');

// текстовое поле с именем cookie
const addNameInput = homeworkContainer.querySelector('#add-name-input');

// текстовое поле со значением cookie
const addValueInput = homeworkContainer.querySelector('#add-value-input');

// кнопка "добавить cookie"
const addButton = homeworkContainer.querySelector('#add-button');

// таблица со списком cookie
const listTable = homeworkContainer.querySelector('#list-table tbody');

filterNameInput.addEventListener('keyup', function() {
    // здесь можно обработать нажатия на клавиши внутри текстового поля для фильтрации cookie

    function isMatching(full, chunk) {
        return full.toUpperCase().indexOf(chunk.toUpperCase()) > -1;
    }


    // обновление куки

    function setCookie (name, value, options) {
        options = options || {};
        value = encodeURIComponent(value);

        let updatedCookie = name + '=' + value;

        for (let propName in options) {
            updatedCookie += '; ' + propName;
            let propValue = options[propName];
            if (propValue !== true) {
                updatedCookie += '=' + propValue;
            }

            document.cookie = updatedCookie;
        }
    }

    // запуская функцию с параметрами
    setCookie(addNameInput.value, addValueInput.value, 'path=/');

    // получение куки
    const cookies = document.cookie.split('; ').reduce((prev, current) => {
        const [name, value] = current.split('=');
        prev[name] = value;
        return prev;
    }, {});

    // построение таблицы
    listTable.innerHTML = null;




    // Цикл перебора кук и запись их в таблицу
    for (let key in cookies){
        if (cookies.hasOwnProperty(key) &&(!filterNameInput.value
            || isMatching(key, filterNameInput.value)
            || isMatching(cookies[key], filterNameInput.value))){

            let trCookie = document.createElement('tr'); // создаем строку для кук
            trCookie.classList.add(key); // добавляем название класса для ново созданной строки
            trCookie.innerHTML = `<td>${key}</td><td>${cookies[key]}</td><td><button class="buttonDel">Удалить</button></td>`;
            listTable.appendChild(trCookie); // добаляем новую строку в таблицу

            // Кнопка удалить
            let buttonDel = document.querySelector('.buttonDel');
            buttonDel.addEventListener('click', () => { // навешиваю обработчик событий на click
                trCookie.onclick = function(event) {
                    let target = event.target; // элемент на котором был клик
                    let targetElem = target.parentElement.parentElement; // получаем текущую строку в таблице, на которой клик

                    listTable.removeChild(targetElem); // удаляю записанные куки из таблицы

                    document.cookie = targetElem.className + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                };

        });
    }
    }
});

addButton.addEventListener('click', () => {
    // здесь можно обработать нажатие на кнопку "добавить cookie"

    // обновление куки

    function setCookie (name, value, options) {
        options = options || {};
        value = encodeURIComponent(value);

        let updatedCookie = name + '=' + value;

        for (let propName in options) {
            updatedCookie += '; ' + propName;
            let propValue = options[propName];
            if (propValue !== true) {
                updatedCookie += '=' + propValue;
            }

            document.cookie = updatedCookie;
        }
    }

    // запуская функцию с параметрами
    setCookie(addNameInput.value, addValueInput.value, 'path=/');

    // получение куки
    const cookies = document.cookie.split('; ').reduce((prev, current) => {
        const [name, value] = current.split('=');
        prev[name] = value;
        return prev;
    }, {});

    // построение таблицы
    listTable.innerHTML = null;

    // Цикл перебора кук и запись их в таблицу
    for (let key in cookies){
            let trCookie = document.createElement('tr'); // создаем строку для кук
            trCookie.classList.add(key); // добавляем название класса для ново созданной строки
            trCookie.innerHTML = `<td>${key}</td><td>${cookies[key]}</td><td><button class="buttonDel">Удалить</button></td>`;
            listTable.appendChild(trCookie); // добаляем новую строку в таблицу

    // Кнопка удалить
        let buttonDel = document.querySelector('.buttonDel');
        buttonDel.addEventListener('click', () => { // навешиваю обработчик событий на click
            trCookie.onclick = function(event) {
                let target = event.target; // элемент на котором был клик
                let targetElem = target.parentElement.parentElement; // получаем текущую строку в таблице, на которой клик

                listTable.removeChild(targetElem); // удаляю записанные куки из таблицы

                document.cookie = targetElem.className + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
            };

        });
    }
    // Очищаю поля
    addNameInput.value = '';
    addValueInput.value = '';
});