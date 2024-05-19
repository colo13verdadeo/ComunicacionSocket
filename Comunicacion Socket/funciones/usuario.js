class User
{
    constructor ()
    {
        this.users = []
    }
    addUser(id, nombre, sala)
    {
        let user = {id, nombre, sala}
        this.users.push(user)
        return user
    }
    
    getUserList(sala)
    {
        let users = this.users.filter((user) => user.sala === sala)
        let namesArray = users.map((user) => user.nombre)
        return namesArray
    }
    getUserId(id)
    {
        let users = this.users.filter((user) => user.id === id)
        if (users[0] == undefined)
        return undefined
        return users[0].id
    }
    removeUser(id)
    {
        let user = this.getUserId(id)
        if (user)
            this.users = this.users.filter((user) => user.id !== id)
        return user
    }
    list()
    {
        return this.users.length
    }
}
module.exports = { User }