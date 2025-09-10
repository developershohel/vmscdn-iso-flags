// src/index.ts
import countries from "../countries.json";
import { Flags } from "./flags";
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
