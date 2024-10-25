import { v4 as uuid } from "uuid";
import { load, save } from "./storage.js";

const form = document.querySelector("form");
const aliasToOriginal = load();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const link = formData.get("link");

  const alias = uuid().substring(0, 8);

  console.log(alias, link);

  aliasToOriginal.set(alias, link);

  save(aliasToOriginal);
});

// Alias link generator starts

const alias_form = document.querySelector("#alias_link_form");

alias_form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const link = formData.get("link");
  const alias = formData.get("alias");

  aliasToOriginal.set(alias, link);
  displayUrl(aliasToOriginal);
  save(aliasToOriginal);
});

// Alias link generator ends

// Display URLs

const displayUrl = () => {
  const display_urls = document.getElementById("display_urls");
  display_urls.innerHTML = "";

  aliasToOriginal.forEach((link, alias) => {
    const formHTML = `
        <div class="card" id="displayUrlCard"> 
        <form id="display_url_form">
            <div class="form-group">
                <input
                    type="text"
                    id="alias_display"
                    name="alias"
                   value="${alias}"
                />
                <label for="link_display">${link}</label>
            </div> 
            <div class="controlButtons">
                <button type="button" class="confirm">Confirm</button>
                <button type="button" class="copy">Copy</button>
                <button type="button" class="delete">Delete</button>
            </div>           
        </form>
        </div>
    `;
    display_urls.innerHTML += formHTML;
  });
};

const documentReady = () => {
  displayUrl();
};
document.addEventListener("DOMContentLoaded", documentReady);
