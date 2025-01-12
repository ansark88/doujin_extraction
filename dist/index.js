function o(r) {
  let t = 0;
  const i = (s) => {
    t = s, r.innerHTML = `count is ${t}`;
  };
  r.addEventListener("click", () => i(++t)), i(0);
}
const e = {
  dlsite: "DLsite",
  melonbooks: "メロンブックス",
  fanza: "FANZA",
  booth: "BOOTH",
  pixiv: "pixiv",
  twitter: "Twitter"
}, w = (r, t) => {
  switch (r) {
    case e.dlsite:
      return `https://www.dlsite.com/maniax/work/=/product_id/${t}.html`;
    case e.melonbooks:
      return `https://www.melonbooks.co.jp/detail/detail.php?product_id=${t}`;
    case e.fanza:
      return `https://www.dmm.co.jp/dc/doujin/-/detail/=/cid=${t}/`;
    case e.pixiv:
      return `https://www.pixiv.net/artworks/${t}`;
    default:
      return "";
  }
}, p = (r, t) => {
  switch (r) {
    case e.dlsite:
      return `https://www.dlsite.com/maniax/circle/profile/=/maker_id/${t}.html`;
    case e.melonbooks:
      return `https://www.melonbooks.co.jp/circle/index.php?circle_id=${t}`;
    case e.fanza:
      return `https://www.dmm.co.jp/dc/doujin/-/list/=/article=maker/id=${t}/`;
    case e.pixiv:
      return `https://www.pixiv.net/users/${t}`;
    case e.twitter:
      return `https://x.com/${t}`;
    default:
      return "";
  }
}, l = (r, t) => {
  var i, s, a, n, c;
  if (!t)
    return "";
  switch (r) {
    case e.dlsite:
      return (i = t.match(/maker_id\/(.+?)\.html/)) == null ? void 0 : i[1].replace("/", "");
    case e.melonbooks:
      return (s = t.match(/circle_id=(.+)/)) == null ? void 0 : s[1].replace("/", "");
    case e.fanza:
      return (a = t.match(/id=(.+)/)) == null ? void 0 : a[1].replace("/", "");
    case e.pixiv:
      return (n = t.match(/users\/(.+)/)) == null ? void 0 : n[1].replace("/", "");
    case e.twitter:
      return (c = t.match(/(x|twitter).com\/(.+)/)) == null ? void 0 : c[2].replace("/", "");
    default:
      return "";
  }
};
export {
  e as PlatformList,
  l as extractCircleID,
  p as getCircleUrl,
  w as getProductUrl,
  o as setupCounter
};
