/*
debounce групує серію послідовних викликів функції в один виклик цієї функції.
Це забезпечує створення одного сповіщення про подію, яка запускається кілька разів.

https://codepen.io/nikflip/pen/jPGJxQ
*/


/**
 * @description Функція debounce приймає функцію і таймаут, і повертає нову функцію, яка виконує передану функцію не частіше ніж раз на таймаут.
 * @param func {function}
 * @param timeout {number} in ms
 * @return {function}
 */
const debounce = (func, timeout) => {
    let timeoutId; // змінна для ID таймаута

    return function() {
        const context = this; // зберігаємо аргументи и this
        const args = arguments;

        clearTimeout(timeoutId); // Завершуємо старий таймаут

        timeoutId = setTimeout(() => { // Запускаємо новий таймаут
            func.apply(context, args);
        }, timeout);
    };
}

export default debounce;