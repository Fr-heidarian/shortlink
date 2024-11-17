export function load() {
  const links = localStorage.getItem("links");
  if (!links) {
    return new Map();
  }

  const parsedLinks = JSON.parse(links);

  return new Map(Object.entries(parsedLinks));
}

export function save(aliasToOriginal) {
  const links = Object.fromEntries(aliasToOriginal);

  const stringifiedLinks = JSON.stringify(links);
  localStorage.setItem("links", stringifiedLinks);
}
