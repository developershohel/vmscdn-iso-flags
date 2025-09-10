type FlagOptions = {
    type?: "code" | "file";
    isName?: boolean;
};
export declare function getFlag(iso: string, options?: FlagOptions): string | undefined;
import React from "react";
type FlagProps = {
    code: string;
    type?: "code" | "file";
    isName?: boolean;
    className?: string;
};
export declare const Flag: React.FC<FlagProps>;
export {};
