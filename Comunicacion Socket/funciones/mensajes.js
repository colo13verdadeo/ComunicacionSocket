let mensaje = (emisor, texto, reseptor) =>
{
    return {
        emisor      ,
        texto     ,
        reseptor    ,
        fecha: new Date().getTime()
    }
}

module.exports = 
{
    mensaje
}