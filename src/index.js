import createForm from "./js/saleform.js";
import formSubmit from "./js/submit.js";

const show = document.querySelector(".btn-show");
const sell = document.querySelector(".btn-del");

const storageKey = 'cars';
const cars = localStorage.getItem(storageKey)
cars ? cars : localStorage.setItem(storageKey, JSON.stringify([]))

sell.addEventListener("click", salebtn)
function salebtn(){
createForm();
formSubmit();
}

