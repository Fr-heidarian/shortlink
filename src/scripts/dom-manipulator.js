import { save } from "./storage.js";

export class DomManipulator {
  shortener;
  alias_form;

  constructor(shortener) {
    this.shortener = shortener;

    this.alias_form = document.querySelector(
      "section.alias_link_generator form",
    );
  }

  init() {
    this.#initAliasFormEventListeners();
    this.#displayUrl();
  }

  #initAliasFormEventListeners() {
    this.alias_form.addEventListener("submit", (e) => {
      e.preventDefault();

      const formData = new FormData(e.target);
      const link = formData.get("link");
      const alias = formData.get("alias");

      this.shortener.aliasToOriginal.set(alias, link);
      this.#displayUrl(this.shortener.aliasToOriginal);
      save(this.shortener.aliasToOriginal);
    });
  }

  #displayUrl() {
    const display_urls = document.getElementById("display_urls");
    display_urls.innerHTML = "";

    this.shortener.aliasToOriginal.forEach((link, alias) => {
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
  }
}
