import templ from '../templates/templ';

import refs from '../references/refs';
const { list } = refs;

import arr from '../db/array-menu.json';

const res = templ(arr);

list.insertAdjacentHTML('afterbegin', res);
