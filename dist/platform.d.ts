export declare function setupCounter(element: HTMLButtonElement): void;
export declare const PlatformList: {
    readonly dlsite: "DLsite";
    readonly melonbooks: "メロンブックス";
    readonly fanza: "FANZA";
    readonly booth: "BOOTH";
    readonly pixiv: "pixiv";
    readonly twitter: "Twitter";
};
export type Platform = (typeof PlatformList)[keyof typeof PlatformList];
export declare const getProductUrl: (platform: Platform, product_code: string) => string;
export declare const getCircleUrl: (platform: Platform, circle_code: string) => string;
export declare const extractCircleID: (platform: Platform, url: string) => string | undefined;
