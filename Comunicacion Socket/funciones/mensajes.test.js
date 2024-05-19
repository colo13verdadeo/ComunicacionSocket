const { expect } = require('expect')
var { mensaje } = require("./mensajes")

describe('Mensajes..', () => 
{
    it("Integridad.. ", () => 
    {
        let emisor = "usuario1"
        texto = "hola"
        reseptor = "dependiente1"
        mensaje = mensaje(emisor,texto,reseptor)

        expect(typeof mensaje.fecha).toBe('number')
        expect(mensaje).toMatchObject({emisor, texto})
    })
})