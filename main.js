import "./sass/main.scss";
import {startChooseGame} from "./js/choosegame"
import { start } from "./js/choosegame";
import { postForm } from "./js/post";

window.addEventListener("DOMContentLoaded", initialize);

function initialize() {
  start();
  addListeners();
  startChooseGame();
}

function addListeners() {
  document.querySelector("button[type=submit]").addEventListener("click", postForm);
}

