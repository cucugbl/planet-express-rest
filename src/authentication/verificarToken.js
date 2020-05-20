require ('express');
const jwt = require('jsonwebtoken');

/* AQUI VA LA VERIFICACION DEL TOKEN, SI SE NECESITA EL VALOR QUE
 SE OBTIENE DEL TOKEN se debe enviar por el res al valor que se obtiene de jwt.verify*/

const verificarToken = (req, res, next) => {
    const token = req.header('autorizacion');
    if(!token) return res.status(401).json('No puede acceder sin autenticarse');

    jwt.verify(token,process.env.TOKEN_SECRETO ||  "PlanetExpresSA+4[|Uracion");
    
    next();
}
module.exports=verificarToken;