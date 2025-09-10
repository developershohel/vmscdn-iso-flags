"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Flags = void 0;
// src/flags.ts
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const svgDir = path_1.default.resolve(__dirname, "../svg");
// Auto import all SVGs as inline string
exports.Flags = {};
fs_1.default.readdirSync(svgDir).forEach((file) => {
    if (file.endsWith(".svg")) {
        const code = file.replace(".svg", "").toLowerCase();
        const svgContent = fs_1.default.readFileSync(path_1.default.join(svgDir, file), "utf8");
        exports.Flags[code] = svgContent;
    }
});
