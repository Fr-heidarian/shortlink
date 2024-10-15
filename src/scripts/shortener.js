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
