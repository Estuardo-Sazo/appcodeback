import { FileUpload } from "../interfaces/file-upload";
import path from "path";
import fs from "fs";

export default class FileSystem{
    constructor() {
        
    };

    guardarImageTemp(file: FileUpload, userId: string) {
        const path= this.crearCarpetaUser(userId);
    }

    private crearCarpetaUser(userId: string) {
        const pathUser=path.resolve(__dirname,'../uploads/',userId);
        const pathTemp = pathUser + '/temp';
        console.log(pathUser);
        
        const existe = fs.existsSync(pathUser);
        if (!existe) {
            fs.mkdirSync(pathUser);
            fs.mkdirSync(pathTemp);
        }

        return pathTemp;
       
    }
}