export class DomManipulator {
  shortener;
  form;
  aliasForm;

  constructor(shortener) {
    this.shortener = shortener;

    this.form = document.querySelector("form");
    this.aliasForm = document.querySelector(
      "section.alias-link-generator form",
    );
  }

  init() {
    this.#initFormsEventListeners();
    this.#displayUrl();
  }

  #initFormsEventListeners() {
    this.form.addEventListener("submit", (e) => {
      this.#formSubmitHandler(e);
    });

    this.aliasForm.addEventListener("submit", (e) => {
      this.#formSubmitHandler(e);
    });
  }

  #formSubmitHandler(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const link = formData.get("link");
    const alias = formData.get("alias");

    this.shortener.shorten(link, alias);

    this.#displayUrl();
  }

  #displayUrl() {
    const displayUrls = document.getElementById("display-urls");
    displayUrls.innerHTML = "";

    this.shortener.aliasToOriginal.forEach((link, alias) => {
      const formHTML = `
        <div class="card"> 
        <form>
            <div class="form-group">
                <input
                    type="text"
                    name="alias"
                   value="${alias}"
                />
                <label for="link-display">${link}</label>
            </div> 
            <div class="control-buttons">
                <button type="button" class="confirm">Confirm</button>
                <button type="button" class="copy">Copy</button>
                <button type="button" class="delete">Delete</button>
            </div>           
        </form>
        </div>
    `;
      displayUrls.innerHTML += formHTML;
    });
  }
}
