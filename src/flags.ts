// src/flags.ts
import fs from "fs";
import path from "path";

const svgDir = path.resolve(__dirname, "../svg");

// Auto import all SVGs as inline string
export const Flags: Record<string, string> = {};

fs.readdirSync(svgDir).forEach((file) => {
    if (file.endsWith(".svg")) {
        const code = file.replace(".svg", "").toLowerCase();
        const svgContent = fs.readFileSync(path.join(svgDir, file), "utf8");
        Flags[code] = svgContent;
    }
});
