import { Shortener } from "./shortener.js";
import { DomManipulator } from "./dom-manipulator.js";

function main() {
  const shortener = new Shortener();
  shortener.init();

  const domManipulator = new DomManipulator(shortener);
  domManipulator.init();
}

main();
