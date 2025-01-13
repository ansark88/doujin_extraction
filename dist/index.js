const i = {
  melonbooks: {
    name: "メロンブックス",
    domains: ["melonbooks.co.jp"],
    circleid_string: ["circle_id"],
    productUrlPattern: "https://www.melonbooks.co.jp/detail/detail.php?product_id={product_code}",
    cicrleUrlPattern: "https://www.melonbooks.co.jp/circle/index.php?circle_id={circle_code}"
  },
  dlsite: {
    name: "DLsite",
    domains: ["dlsite.com"],
    circleid_string: ["maker_id"],
    productUrlPattern: "https://www.dlsite.com/maniax/work/=/product_id/{product_code}.html",
    cicrleUrlPattern: "https://www.dlsite.com/maniax/circle/profile/=/maker_id/{circle_code}.html"
  },
  fanza: {
    name: "FANZA",
    domains: ["dmm.co.jp"],
    circleid_string: ["article=maker"],
    productUrlPattern: "https://www.dmm.co.jp/dc/doujin/-/detail/=/cid={product_code}/",
    cicrleUrlPattern: "https://www.dmm.co.jp/dc/doujin/-/list/=/article=maker/id={circle_code}"
  },
  pixiv: {
    name: "pixiv",
    domains: ["pixiv.net"],
    circleid_string: ["users", "member.php"],
    productUrlPattern: "https://www.pixiv.net/artworks/{product_code}",
    cicrleUrlPattern: "https://www.pixiv.net/users/{circle_code}"
  },
  twitter: {
    name: "Twitter",
    domains: ["twitter.com, x.com"],
    circleid_string: [],
    productUrlPattern: null,
    cicrleUrlPattern: "https://x.com/{circle_code}"
  }
}, c = Object.fromEntries(
  Object.entries(i).map(([e, t]) => [e, t.name])
);
function s(e) {
  return e in i;
}
const d = (e) => s(e) ? i[e] : Object.values(i).find((t) => t.name === e), m = (e, t) => {
  const r = d(e);
  return r != null && r.productUrlPattern ? r.productUrlPattern.replace("{product_code}", t) : "";
}, p = (e, t) => {
  const r = d(e);
  return r != null && r.cicrleUrlPattern ? r.cicrleUrlPattern.replace("{circle_code}", t) : "";
}, u = (e) => {
  const t = Object.values(i).find(
    (r) => r.domains.some((n) => e.includes(n))
  );
  return t == null ? void 0 : t.name;
}, w = (e, t) => {
  var r, n, o, a, l;
  if (!t)
    return "";
  switch (e) {
    case c.dlsite:
      return (r = t.match(/maker_id\/(.+?)\.html/)) == null ? void 0 : r[1].replace("/", "");
    case c.melonbooks:
      return (n = t.match(/circle_id=(.+)/)) == null ? void 0 : n[1].replace("/", "");
    case c.fanza:
      return (o = t.match(/id=(.+)/)) == null ? void 0 : o[1].replace("/", "");
    case c.pixiv:
      return (a = t.match(/users\/(.+)/)) == null ? void 0 : a[1].replace("/", "");
    case c.twitter:
      return (l = t.match(/(x|twitter).com\/(.+)/)) == null ? void 0 : l[2].replace("/", "");
    default:
      return "";
  }
};
export {
  c as PlatformList,
  w as extractCircleID,
  p as getCircleUrl,
  u as getPlatformByDomain,
  d as getPlatformDetail,
  m as getProductUrl
};
