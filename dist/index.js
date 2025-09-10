"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Flag = exports.getFlag = void 0;
// src/index.ts
const countries_json_1 = __importDefault(require("../countries.json"));
const flags_1 = require("./flags");
function getFlag(iso, options = {}) {
    const code = iso.toLowerCase();
    const { type = "code", isName = false } = options;
    if (isName) {
        return countries_json_1.default[iso.toUpperCase()];
    }
    if (type === "file") {
        return `./svg/${code}.svg`;
    }
    return flags_1.Flags[code];
}
exports.getFlag = getFlag;
const Flag = ({ code, type = "code", isName = false, className }) => {
    const flag = getFlag(code, { type, isName });
    if (!flag)
        return null;
    if (isName) {
        return { flag } < /span>;;
    }
    if (type === "file") {
        return src;
        {
            flag;
        }
        alt = { code };
        className = { className } /  > ;
    }
    return className = { className };
    dangerouslySetInnerHTML = {};
    {
        __html: flag;
    }
};
exports.Flag = Flag;
/>;
;
;
