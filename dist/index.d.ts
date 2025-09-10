type FlagOptions = {
    type?: "code" | "file";
    isName?: boolean;
};
type CountryInfo = {
    name: string;
    iso: string;
    flag: string;
    language?: string;
};
/**
 * Get a flag (inline SVG or file path) or country name
 */
export declare function getFlag(iso: string, options?: FlagOptions): string | undefined;
/**
 * Get country name by ISO code
 */
export declare function getCountryName(iso: string): string | undefined;
/**
 * Get ISO code by country name (case-insensitive)
 */
export declare function getISOByCountryName(name: string): string | undefined;
/**
 * Get complete country info (name, iso, flag)
 */
export declare function getCountryInfo(iso: string, options?: FlagOptions): CountryInfo | undefined;
/**
 * Optional: Map of all countries with ISO, name, and flag
 */
export declare function getAllCountries(options?: FlagOptions): CountryInfo[];
export {};
