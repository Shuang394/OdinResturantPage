import './style.css';
import {createContent, clearContent} from './HomePage.js';


console.log("Hello world");
let contentSection = document.querySelector("#content");
createContent(contentSection);

let menu = document.querySelector("#menu-btn");
menu.addEventListener('click', () => {
    clearContent(contentSection);
    
})
