// src/index.ts
import countries from "./countries.json";
import { Flags } from "./flags";
/**
 * Get a flag (inline SVG or file path) or country name
 */
export function getFlag(iso, options = {}) {
    const code = iso.toLowerCase();
    const { type = "code", isName = false } = options;
    if (isName) {
        return countries[iso.toUpperCase()];
    }
    if (type === "file") {
        return `./svg/${code}.svg`;
    }
    return Flags[code];
}
/**
 * Get country name by ISO code
 */
export function getCountryName(iso) {
    return countries[iso.toUpperCase()];
}
/**
 * Get ISO code by country name (case-insensitive)
 */
export function getISOByCountryName(name) {
    const entry = Object.entries(countries).find(([, countryName]) => countryName.toLowerCase() === name.toLowerCase());
    return entry ? entry[0] : undefined;
}
/**
 * Get complete country info (name, iso, flag)
 */
export function getCountryInfo(iso, options = {}) {
    const name = getCountryName(iso);
    const flag = getFlag(iso, options);
    if (!name || !flag)
        return undefined;
    return {
        name,
        iso: iso.toUpperCase(),
        flag,
    };
}
/**
 * Optional: Map of all countries with ISO, name, and flag
 */
export function getAllCountries(options = {}) {
    return Object.keys(countries).map((iso) => ({
        iso,
        name: getCountryName(iso),
        flag: getFlag(iso, options),
    }));
}
