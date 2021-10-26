export function getNum(url) {
    let urlArray = url.split('/');
    let last = urlArray[urlArray.length - 2]
    return last
  }