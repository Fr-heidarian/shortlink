export class Forms {
  shortener;
  domManipulator;
  form;
  aliasForm;

  constructor(shortener, domManipulator) {
    this.shortener = shortener;
    this.domManipulator = domManipulator;
    this.form = document.querySelector("section.card form");
    this.aliasForm = document.querySelector(
      "section.alias-link-generator form",
    );
  }

  init() {
    this.#initFormsEventListeners();
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
    this.domManipulator.init();
  }
}
