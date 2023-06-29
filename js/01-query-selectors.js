const magicBtn = document.querySelector('.js-magic-btn');

/*
 * document.querySelector(selector) и document.querySelectorAll(selector)
 *   selector - любой валидный CSS-селектор
 *
 * Что возвращают?
 */
// ! якщо ні чого не знаходе поверта null
const navEl = document.querySelector('.site-nav');
console.log('navEl', navEl);
// ! Знайти всі селектори, якщо ні чого не знайшов повертає пустий масив
const navLinksEl = document.querySelectorAll('site-nav__link');

console.log('navLinksEl', navLinksEl);

/*
 * Document.querySelector* и Element.querySelector*
 */
