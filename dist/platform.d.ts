export type PlatformId = "melonbooks" | "dlsite" | "fanza" | "pixiv" | "twitter";
interface PlatformDetail {
    name: string;
    domains: string[];
    circleid_string: string[];
    productUrlPattern: string | null;
    cicrleUrlPattern: string | null;
}
declare const PLATFORMS: Record<PlatformId, PlatformDetail>;
export type Platform = (typeof PLATFORMS)[PlatformId]["name"];
export declare const PlatformList: Record<PlatformId, Platform>;
export declare const getPlatformDetail: (platform: Platform | PlatformId) => PlatformDetail | undefined;
export declare const getProductUrl: (platform: Platform | PlatformId, product_code: string) => string;
export declare const getCircleUrl: (platform: Platform, circle_code: string) => string;
export declare const getPlatformByDomain: (domain: string) => Platform | undefined;
export declare const extractCircleID: (platform: Platform, url: string) => string | undefined;
export {};
