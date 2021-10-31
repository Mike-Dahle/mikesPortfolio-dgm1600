export function getNum(url) {
  let urlArray = url.split("/");
  let last = urlArray[urlArray.length - 2];
  return last;
}

export function removeChildren(container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}