/*
throttle призведе до затримки виконання функції.
Це зменшить сповіщення про подію, яка запускається кілька разів.

https://codepen.io/nikflip/pen/jPGJxQ
 */


    /**
 * @description Функція, яка приймає функцію і таймаут, і повертає нову функцію, яка виконує передану функцію не частіше ніж раз на таймаут.
 * @param func {function}
 * @param timeout {number} in ms
 * @return {function}
 */
const throttle = function (func, timeout) {
    let isThrottle = false; // Прапор (чи виконувати передану функцію чи ні);

    return function() { // Створюємо і повертаємо функцію обгортку;
        if (isThrottle) return; // Якщо прапор = true - завершуємо виконання функції-обгортки;

        func.apply(this, arguments); // Інакше виконуємо передану функцію;
        isThrottle = true;  // Встановлюємо прапор в true (передану функцію знову не буде виконуватися);

        setTimeout(() => isThrottle = false, timeout); // Запускаємо таймер з переданим таймаутом який встановлює прапор в false;
    };
}

export default throttle;