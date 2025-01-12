import { describe, expect, it } from "vitest";
import { PlatformList, extractCircleID } from "./platform";

describe("extractCircleID()", () => {
	it("x.com", () => {
		const platform = PlatformList.twitter;
		const url = "https://x.com/123";
		const result = extractCircleID(platform, url);

		expect(result).toBe("123");
	});

	it("twitter.com", () => {
		const platform = PlatformList.twitter;
		const url = "https://twitter.com/123";
		const result = extractCircleID(platform, url);

		expect(result).toBe("123");
	});

	it("pixiv.net", () => {
		const platform = PlatformList.pixiv;
		const url = "https://www.pixiv.net/users/123";
		const result = extractCircleID(platform, url);

		expect(result).toBe("123");
	});
});
