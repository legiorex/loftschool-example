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
});

addButton.addEventListener('click', () => {
    // здесь можно обработать нажатие на кнопку "добавить cookie"

    document.cookie = `${addNameInput.value}=${addValueInput.value}`; // записываем значения Кук

    ///////////// Cоздаю таблицу ////////////////////

    let trCookie = document.createElement('tr'); // создаем строку для кук
    trCookie.classList.add('rowCookie'); // добавляем название класса для ново созданной строки

    listTable.appendChild(trCookie); // добаляем новую строку в таблицу

    let tdName = document.createElement('td'); // создаем столбец для Имени куки
    let tdValue = document.createElement('td'); // создаем столбец для Значения куки
    let tdDel = document.createElement('td'); // создаем столбец для Кнопки удалить

    trCookie.appendChild(tdName); // добавляем столбец в строку
    trCookie.appendChild(tdValue);
    trCookie.appendChild(tdDel);


    /////////// Получаю Куки, код взят из вебинара  ////////////////////////////

    const cookies = document.cookie.split('; ').reduce((prev, current) => {
        const [name, value] = current.split('=');
        prev[name] = value;
        return prev;
    }, {});


    ////////// Перебираю полученный объект со значениями Кук ///////////////////////

    for (let key in cookies) {
        tdName.textContent = key;
        tdValue.textContent = cookies[key];
    }

    /////////// Очищаю поля ///////////////

    addNameInput.value = '';
    addValueInput.value = '';




});
function getCookies() {
    return document.cookie
        .split('; ')
        .filter(Boolean)
        .map(cookie => cookie.match(/^([^=]+)=(.+)/))
        .reduce((obj, [, name, value]) => {
            obj[name] = value;

            return obj;
        }, {});
}

const myCookies = getCookies();
console.log(myCookies.hasOwnProperty('test-cookie-name-1'));
console.log(myCookies['test-cookie-name-1']);
console.log(listTable.children.length);

addNameInput.value = 'test-cookie-name-1';
addValueInput.value = 'test-cookie-value-1';
addButton.click();
