import { Router , Response} from "express";
import { verificaToken } from "../middlewares/autentucacion";
import { Post } from "../models/post.model";

const postRoutes = Router();

//OBTENER POST

postRoutes.get('/', async (req: any, res: Response) => {
    
    let pagina = Number(req.query.pagina) || 1;
    let skip = pagina - 1;
    skip *= 10;

    const posts = await  Post.find()
        .sort({ _id: -1 })
        .skip(skip)
        .limit(10)
        .populate('usuario','-password')
        .exec();
    res.json({
        ok: true,
        pagina,
        posts
    });
});

//CREAR POST
postRoutes.post('/', [verificaToken], (req: any, res: Response) => {
    const body = req.body;
    body.usuario = req.usuario._id;

    Post.create(body).then(async postDB => {
        
       await postDB.populate('usuario','-password').execPopulate();postRoutes
        
        res.json({
            ok: true,
            post: postDB
        });
    }).catch(err => {
        res.json({
            ok: false,
            err
        });
    });
});



export default postRoutes;