"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
function parse(raw) {
    return JSON.stringify(JSON.parse(raw), null, 2);
}
const arg = process.argv[2];
if (arg && arg !== '-') {
    try {
        console.log(parse(fs_1.default.readFileSync(arg, 'utf8')));
    }
    catch {
        console.error('invalid json');
        process.exit(1);
    }
}
else {
    let data = '';
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', c => { data += c; });
    process.stdin.on('end', () => {
        try {
            console.log(parse(data));
        }
        catch {
            console.error('invalid json');
            process.exit(1);
        }
    });
}
