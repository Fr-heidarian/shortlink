import { Shortener } from "./shortener.js";
import { DomManipulator } from "./dom-manipulator.js";
import { Forms } from "./forms.js";

function main() {
  const shortener = new Shortener();
  shortener.init();

  const domManipulator = new DomManipulator(shortener);
  domManipulator.init();

  const form = new Forms(shortener, domManipulator);
  form.init();
}

main();
