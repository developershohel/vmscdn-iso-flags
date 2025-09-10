type FlagOptions = {
    type?: "code" | "file";
    isName?: boolean;
};
export declare function getFlag(iso: string, options?: FlagOptions): string | undefined;
export {};
