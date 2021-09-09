"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
class FileSystem {
    constructor() {
    }
    ;
    guardarImageTemp(file, userId) {
        const path = this.crearCarpetaUser(userId);
    }
    crearCarpetaUser(userId) {
        const pathUser = path_1.default.resolve(__dirname, '../uploads/', userId);
        const pathTemp = pathUser + '/temp';
        console.log(pathUser);
        const existe = fs_1.default.existsSync(pathUser);
        if (!existe) {
            fs_1.default.mkdirSync(pathUser);
            fs_1.default.mkdirSync(pathTemp);
        }
        return pathTemp;
    }
}
exports.default = FileSystem;
