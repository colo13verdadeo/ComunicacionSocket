const { expect } = require('expect')
const { User } = require('./usuario')

describe('Usuarios', () =>{
    let usuarios = new User()

        let user = 
        {
            id: "1",
            nombre: "OKSss",
            sala: "dada"
        }
        usuarios.addUser(user.id, user.nombre, user.sala)
        it("Creacion", () =>{
            expect(usuarios.users).toEqual([user])
        })
        it('Busqueda de usuarios por sala', () => {
        usuarios.addUser('22', "Carl", user.sala)
        let userlist = usuarios.getUserList('dada')
        expect(userlist).toEqual(["OKSss", "Carl"])
    })
    it('Busqueda de usuarios por id', () => {
        let userobtendi = usuarios.getUserId("1")
        expect(userobtendi).toEqual("1")
    })
    it('Busqueda de un usario por id, ID NO ENCONTRADA', () => {
        let idnoencontrada = usuarios.getUserId("2221")
        expect(idnoencontrada).toBeUndefined()
    })
    it("Herramienta de Borrar usuario", () => {
        usuarios.removeUser("1")
        let idnoencontrada = usuarios.getUserId("1")
        expect(idnoencontrada).toBeUndefined()
    })
})