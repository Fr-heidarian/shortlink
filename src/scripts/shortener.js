import { v4 as uuid } from "uuid";
import { load, save } from "./storage.js";

export class Shortener {
  form;
  aliasToOriginal;

  constructor() {
    this.form = document.querySelector("form");
    this.aliasToOriginal = load();
  }

  init() {
    this.#initFormEventListeners();
  }

  #initFormEventListeners() {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();

      const formData = new FormData(e.target);
      const link = formData.get("link");

      const alias = uuid().substring(0, 8);

      this.aliasToOriginal.set(alias, link);

      save(this.aliasToOriginal);
    });
  }
}
