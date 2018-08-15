/*
 Задание 6:

 Выполнить предудыщее задание с использование рекурсии - то есть необходимо заходить внутрь каждого дочернего элемента (углубляться в дерево)

 Задачу необходимо решить без использования рекурсии, то есть можно не уходить вглубь дерева.
 Так же будьте внимательны при удалении узлов, т.к. можно получить неожиданное поведение при переборе узлов

 Пример:
   После выполнения функции, дерево <span> <div> <b>привет</b> </div> <p>loftchool</p> !!!</span>
   должно быть преобразовано в <span><div><b></b></div><p></p></span>
 */
function deleteTextNodesRecursive(arg) {
    for (let elem of arg.childNodes){
        if (elem.childNodes.length > 0){// if(!5)
            deleteTextNodesRecursive(elem);
        }
        console.log(elem.nodeType);
        console.log(elem.childNodes.length);

        if (elem.nodeType === 3){
            // arg.removeChild(elem);
            elem.textContent = '';
        }


    }
    return arg.innerHTML;
}
let data = document.createElement('div');
data.innerHTML = '<span> <div> <b>привет</b> </div> <p>loftchool</p> !!!</span>';
console.log(deleteTextNodesRecursive(data));