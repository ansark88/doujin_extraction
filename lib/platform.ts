export type PlatformId = 'melonbooks' | 'dlsite' | 'fanza' | 'pixiv' | 'twitter';

interface PlatformDetail{
	name: string;
	domains: string[];
	circleid_string: string[]; // URLの中でサークルIDに該当する箇所
	productUrlPattern: string | null;
	cicrleUrlPattern: string | null;

}

const PLATFORMS: Record<PlatformId,PlatformDetail> = {
	melonbooks: {
		name: 'メロンブックス',
		domains: ['melonbooks.co.jp'],
		circleid_string: ['circle_id'],
		productUrlPattern: 'https://www.melonbooks.co.jp/detail/detail.php?product_id={product_code}',
		cicrleUrlPattern: 'https://www.melonbooks.co.jp/circle/index.php?circle_id={circle_code}'
	},
	
	dlsite: {
		name: 'DLsite',
		domains: ['dlsite.com'],
		circleid_string: ['maker_id'],
		productUrlPattern: 'https://www.dlsite.com/maniax/work/=/product_id/{product_code}.html',
		cicrleUrlPattern: 'https://www.dlsite.com/maniax/circle/profile/=/maker_id/{circle_code}.html'
	},  
	fanza: {
		name: 'FANZA',
		domains: ['dmm.co.jp'],
		circleid_string: ['article=maker'],
		productUrlPattern: 'https://www.dmm.co.jp/dc/doujin/-/detail/=/cid={product_code}/',
		cicrleUrlPattern: 'https://www.dmm.co.jp/dc/doujin/-/list/=/article=maker/id={circle_code}'
	},

	pixiv: {
		name: "pixiv",
		domains: ["pixiv.net"],
		circleid_string: ["users","member.php"],
		productUrlPattern: 'https://www.pixiv.net/artworks/{product_code}',
		cicrleUrlPattern: 'https://www.pixiv.net/users/{circle_code}'

	},

	twitter: {
		name: "Twitter",
		domains: ["twitter.com, x.com"],
		circleid_string: [],
		productUrlPattern: null,
		cicrleUrlPattern: 'https://x.com/{circle_code}'
	}
} as const;

// 型定義の導出
export type Platform = typeof PLATFORMS[PlatformId]['name'];

// PlatformListの生成（既存コードとの互換性のため）
export const PlatformList = Object.fromEntries(
	Object.entries(PLATFORMS).map(([id, detail]) => [id, detail.name])
) as Record<PlatformId, Platform>;

// 型ガード
function isPlatformId(platform: Platform | PlatformId): platform is PlatformId {
	return platform in PLATFORMS;
}

export const getPlatformDetail = (platform: Platform | PlatformId): PlatformDetail | undefined => {
	if (isPlatformId(platform)) {
	  return PLATFORMS[platform];
	}
	return Object.values(PLATFORMS).find(p => p.name === platform);
};

 // ユーティリティ関数
export const getProductUrl = (platform: Platform | PlatformId, product_code: string): string => {
	const detail = getPlatformDetail(platform);
	if (!detail?.productUrlPattern) return '';
	return detail.productUrlPattern.replace('{product_code}', product_code);
};

// サークルIDをURLに変換する
export const getCircleUrl = (platform: Platform, circle_code: string) => {
	const detail = getPlatformDetail(platform);
	if (!detail?.cicrleUrlPattern) return '';
	return detail.cicrleUrlPattern.replace('{circle_code}', circle_code);
};

// URLからプラットフォームを抽出する
export const getPlatformByDomain = (domain: string): Platform | undefined => {
	const platform = Object.values(PLATFORMS).find(p => 
	  p.domains.some(d => domain.includes(d))
	);
	return platform?.name;
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

// Todo: URLから作品IDを抽出する
