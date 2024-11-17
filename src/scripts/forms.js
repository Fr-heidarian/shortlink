export class Forms {
  shortener;
  domManipulator;

  heroForm;
  aliasForm;

  constructor(shortener, domManipulator) {
    this.shortener = shortener;
    this.domManipulator = domManipulator;

    this.heroForm = document.querySelector("section#hero form");
    this.aliasForm = document.querySelector("section#generator form");
  }

  init() {
    this.#initFormsEventListeners();
  }

  #initFormsEventListeners() {
    this.heroForm.addEventListener("submit", (e) => {
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
    this.domManipulator.update();
  }
}
