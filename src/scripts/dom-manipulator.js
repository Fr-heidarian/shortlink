export class DomManipulator {
  shortener;

  constructor(shortener) {
    this.shortener = shortener;
  }

  init() {
    this.#displayUrl();
  }

  update() {
    this.#displayUrl();
  }

  #generateUrlCard(link, alias) {
    return `
    <div class="card">
      <form>
        <div class="form-group">
          <input
            type="text"
            name="alias"
            value="${alias}"
          />
          <label>${link}</label>
        </div>
        <div class="control-buttons">
          <button type="button" class="confirm">Confirm</button>
          <button type="button" class="copy">Copy</button>
          <button type="button" class="delete">Delete</button>
        </div>
      </form>
    </div>
  `;
  }

  #displayUrl() {
    const displayUrls = document.getElementById("display-urls");
    displayUrls.innerHTML = "";

    this.shortener.aliasToOriginal.forEach((link, alias) => {
      const urlCard = this.#generateUrlCard(link, alias);
      displayUrls.innerHTML += urlCard;
    });
  }
}
