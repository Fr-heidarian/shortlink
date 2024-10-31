import { v4 as uuid } from "uuid";
import { load, save } from "./storage.js";

export class Shortener {
  aliasToOriginal;

  constructor() {
    this.aliasToOriginal = load();
  }

  init() {}

  shorten(original, alias) {
    if (!alias) {
      alias = uuid().substring(0, 8);
    }

    this.aliasToOriginal.set(alias, original);
    save(this.aliasToOriginal);
  }
}
