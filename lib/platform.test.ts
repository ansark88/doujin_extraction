import { describe, expect, it } from "vitest";
import { PlatformList, extractCircleID, getCircleUrl, getPlatformByDomain, getProductUrl } from "./platform";

describe("extractCircleID()", () => {
	it("x", () => {
		const platform = PlatformList.twitter;
		const url = "https://x.com/123";
		const result = extractCircleID(platform, url);

		expect(result).toBe("123");
	});

	it("twitter", () => {
		const platform = PlatformList.twitter;
		const url = "https://twitter.com/123";
		const result = extractCircleID(platform, url);

		expect(result).toBe("123");
	});

	it("pixiv(users)", () => {
		const platform = PlatformList.pixiv;
		const url = "https://www.pixiv.net/users/123";
		const result = extractCircleID(platform, url);

		expect(result).toBe("123");
	});

	// まだ対応してない
	// it("pixiv(member.php)", () => {
	// 	const platform = PlatformList.pixiv;
	// 	const url = "https://www.pixiv.net/member.php?id=123";
	// 	const result = extractCircleID(platform, url);

	// 	expect(result).toBe("123");
	// })

	it("fanza", () => {
		const platform = PlatformList.fanza;
		const url = "https://www.dmm.co.jp/dc/doujin/-/list/=/article=maker/id=123/";
		const result = extractCircleID(platform, url);

		expect(result).toBe("123");
	})

	it("dlsite", () => {
		const platform = PlatformList.dlsite;
		const url = "https://www.dlsite.com/maniax/circle/profile/=/maker_id/RG123.html";
		const result = extractCircleID(platform, url);

		expect(result).toBe("RG123");
	})

	it("melonbooks", () => {
		const platform = PlatformList.melonbooks;
		const url = "https://www.melonbooks.co.jp/circle/index.php?circle_id=123";
		const result = extractCircleID(platform, url);

		expect(result).toBe("123");
	})

});

describe("getProductUrl", () =>{
	it("dlsite", () => {
		const platform = PlatformList.dlsite;
		const code = "RJ123";
		const result = getProductUrl(platform, code);

		expect(result).toBe("https://www.dlsite.com/maniax/work/=/product_id/RJ123.html")
	})
})

describe("getCircleUrl", () =>{
	it("dlsite", () => {
		const platform = PlatformList.dlsite;
		const code = "RG123";
		const result = getCircleUrl(platform, code);

		expect(result).toBe("https://www.dlsite.com/maniax/circle/profile/=/maker_id/RG123.html")
	})
})

describe("getPlatformBydomain", () =>{
	it("dlsite", () => {
		const result = getPlatformByDomain('https://www.dlsite.com/maniax/circle/profile/=/maker_id/RG123.html');
		console.log(result);

		expect(result).toBe(PlatformList.dlsite)
	})
})

