import './style.css';
import {createContent, clearContent} from './HomePage.js';
import {createMenu, deleteMenu} from './menuPage.js';

console.log("Hello world");
let contentSection = document.querySelector("#content");
createContent(contentSection);

let menu = document.querySelector("#menu-btn");
menu.addEventListener('click', () => {
    clearContent(contentSection);
    createMenu(contentSection);
})

let home = document.querySelector('#home-btn');

home.addEventListener('click', () => {
    deleteMenu(contentSection);
    createContent(contentSection);
})
