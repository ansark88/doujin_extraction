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
    domains: ["twitter.com", "x.com"],
    circleid_string: [],
    productUrlPattern: null,
    cicrleUrlPattern: "https://x.com/{circle_code}"
  }
}, c = Object.fromEntries(
  Object.entries(i).map(([t, e]) => [t, e.name])
);
function m(t) {
  return t in i;
}
const s = (t) => m(t) ? i[t] : Object.values(i).find((e) => e.name === t), p = (t, e) => {
  const r = s(t);
  return r != null && r.productUrlPattern ? r.productUrlPattern.replace("{product_code}", e) : "";
}, u = (t, e) => {
  const r = s(t);
  return r != null && r.cicrleUrlPattern ? r.cicrleUrlPattern.replace("{circle_code}", e) : "";
}, w = (t) => {
  const e = Object.values(i).find(
    (r) => r.domains.some((n) => t.includes(n))
  );
  return e == null ? void 0 : e.name;
}, h = (t, e) => {
  var r, n, o, a, d, l;
  if (!e)
    return "";
  switch (t) {
    case c.dlsite:
      return (r = e.match(/maker_id\/(.+?)\.html/)) == null ? void 0 : r[1].replace("/", "");
    case c.melonbooks:
      return (n = e.match(/circle_id=(.+)/)) == null ? void 0 : n[1].replace("/", "");
    case c.fanza:
      return (o = e.match(/id=(.+)/)) == null ? void 0 : o[1].replace("/", "");
    case c.pixiv:
      return e.includes("member.php") ? (a = e.match(/member.php\?id=(.+)/)) == null ? void 0 : a[1].replace("/", "") : (d = e.match(/users\/(.+)/)) == null ? void 0 : d[1].replace("/", "");
    case c.twitter:
      return (l = e.match(/(x|twitter).com\/(.+)/)) == null ? void 0 : l[2].replace("/", "");
    default:
      return "";
  }
};
export {
  c as PlatformList,
  h as extractCircleID,
  u as getCircleUrl,
  w as getPlatformByDomain,
  s as getPlatformDetail,
  p as getProductUrl
};
