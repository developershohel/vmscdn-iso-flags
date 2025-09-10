// src/index.ts
import countries from "./countries.json";
import { Flags } from "./flags";

// Define supported types for options
type FlagOptions = {
    type?: "code" | "file"; // 'code' = inline SVG, 'file' = file path
    isName?: boolean;       // if true, return country name instead of flag
};

type CountryInfo = {
    name: string;
    iso: string;
    flag: string;
    language?: string; // optional language code if you add it later
};

/**
 * Get a flag (inline SVG or file path) or country name
 */
export function getFlag(
    iso: string,
    options: FlagOptions = {}
): string | undefined {
    const code = iso.toLowerCase();
    const { type = "code", isName = false } = options;

    if (isName) {
        return (countries as Record<string, string>)[iso.toUpperCase()];
    }

    if (type === "file") {
        return `./svg/${code}.svg`;
    }

    return Flags[code];
}

/**
 * Get country name by ISO code
 */
export function getCountryName(iso: string): string | undefined {
    return (countries as Record<string, string>)[iso.toUpperCase()];
}

/**
 * Get ISO code by country name (case-insensitive)
 */
export function getISOByCountryName(name: string): string | undefined {
    const entry = Object.entries(countries).find(
        ([, countryName]) => countryName.toLowerCase() === name.toLowerCase()
    );
    return entry ? entry[0] : undefined;
}

/**
 * Get complete country info (name, iso, flag)
 */
export function getCountryInfo(
    iso: string,
    options: FlagOptions = {}
): CountryInfo | undefined {
    const name = getCountryName(iso);
    const flag = getFlag(iso, options);
    if (!name || !flag) return undefined;

    return {
        name,
        iso: iso.toUpperCase(),
        flag,
    };
}

/**
 * Optional: Map of all countries with ISO, name, and flag
 */
export function getAllCountries(options: FlagOptions = {}): CountryInfo[] {
    return Object.keys(countries).map((iso) => ({
        iso,
        name: getCountryName(iso)!,
        flag: getFlag(iso, options)!,
    }));
}
