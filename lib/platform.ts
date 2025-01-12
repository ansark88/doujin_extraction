export function setupCounter(element: HTMLButtonElement) {
	let counter = 0;
	const setCounter = (count: number) => {
		counter = count;
		element.innerHTML = `count is ${counter}`;
	};
	element.addEventListener("click", () => setCounter(++counter));
	setCounter(0);
}

export const PlatformList = {
	dlsite: "DLsite",
	melonbooks: "メロンブックス",
	fanza: "FANZA",
	booth: "BOOTH",
	pixiv: "pixiv",
	twitter: "Twitter",
} as const;

export type Platform = (typeof PlatformList)[keyof typeof PlatformList];

//　作品IDをURLに変換する
export const getProductUrl = (platform: Platform, product_code: string) => {
	switch (platform) {
		case PlatformList.dlsite:
			return `https://www.dlsite.com/maniax/work/=/product_id/${product_code}.html`;
		case PlatformList.melonbooks:
			return `https://www.melonbooks.co.jp/detail/detail.php?product_id=${product_code}`;
		case PlatformList.fanza:
			return `https://www.dmm.co.jp/dc/doujin/-/detail/=/cid=${product_code}/`;
		case PlatformList.pixiv:
			return `https://www.pixiv.net/artworks/${product_code}`;
		default:
			return "";
	}
};

// サークルIDをURLに変換する
export const getCircleUrl = (platform: Platform, circle_code: string) => {
	switch (platform) {
		case PlatformList.dlsite:
			return `https://www.dlsite.com/maniax/circle/profile/=/maker_id/${circle_code}.html`;
		case PlatformList.melonbooks:
			return `https://www.melonbooks.co.jp/circle/index.php?circle_id=${circle_code}`;
		case PlatformList.fanza:
			return `https://www.dmm.co.jp/dc/doujin/-/list/=/article=maker/id=${circle_code}/`;
		case PlatformList.pixiv:
			return `https://www.pixiv.net/users/${circle_code}`;
		case PlatformList.twitter:
			return `https://x.com/${circle_code}`;
		default:
			return "";
	}
};

// URLからサークルIDを抽出する
export const extractCircleID = (platform: Platform, url: string) => {
	if (!url) {
		return "";
	}

	switch (platform) {
		case PlatformList.dlsite:
			return url.match(/maker_id\/(.+?)\.html/)?.[1].replace("/", "");
		case PlatformList.melonbooks:
			return url.match(/circle_id=(.+)/)?.[1].replace("/", "");
		case PlatformList.fanza:
			return url.match(/id=(.+)/)?.[1].replace("/", "");
		case PlatformList.pixiv:
			return url.match(/users\/(.+)/)?.[1].replace("/", "");
		case PlatformList.twitter:
			return url.match(/(x|twitter).com\/(.+)/)?.[2].replace("/", "");
		default:
			return "";
	}
};

// Todo: URLからプラットフォームを抽出する

// Todo: URLから作品IDを抽出する
