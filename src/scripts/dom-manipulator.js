export class DomManipulator {
  shortener;

  constructor(shortener) {
    this.shortener = shortener;
  }

  init() {
    this.#renderUrlList();
  }

  update() {
    this.#renderUrlList();
  }

  #renderUrl(link, alias) {
    return `
    <div class="card">
      <form>
        <input
          type="text"
          name="alias"
          value="${alias}"
        />
        <div class="control-buttons">
          <button type="button" class="confirm">Confirm</button>
          <button type="button" class="copy">Copy</button>
          <button type="button" class="delete">Delete</button>
        </div>
        <div class="link">${link}</div>
      </form>
    </div>
  `;
  }

  #renderUrlList() {
    const urlList = document.querySelector("section#history .urls");
    urlList.innerHTML = "";

    this.shortener.aliasToOriginal.forEach((link, alias) => {
      const urlCard = this.#renderUrl(link, alias);
      urlList.innerHTML += urlCard;
    });
  }
}
