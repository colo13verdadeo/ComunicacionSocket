const express = require('express')
const app = express()
const session = require('express-session')
const MySqlStore = require('express-mysql-session')(session)
const path = require('path')
//Funciones 
const { mensaje } = require('./funciones/mensajes')
const { User } = require('./funciones/usuario')
let usuarios = new User()

//SOCKET.IO
const httpServer = require("http").createServer(app)
const io = require("socket.io")(httpServer, {
    // connectionStateRecovery: {
    //     maxDisconnectionDuration: 2 * 60 * 1000,
    //     skipMiddlewares: true,
    //   }
})
io.on("connection", (socket) => {
    console.log('Usuario ON')
    // console.log(socket)

    socket.on("disconnect", () => {
        console.log("Usuario OFF")
        let data
        let caca
        data   = usuarios.getUserData(socket.id)
        caca   = usuarios.removeUser(socket.id)

        if (caca && data)
            if (data.sala != -1)
                socket.broadcast.emit('chat', mensaje(
                'Sistema',
                'El usuario '+data.nombre+' se ha desconectado de la sala: '+data.sala,
                'tousu2'
                ))
    })
    socket.on("conectar", (usuario) => {
        console.log('Contando al usuario:', usuario)
        // socket.join(usuario.id)
        usuarios.removeUser(socket.id)
        usuarios.addUser(socket.id, usuario.emisor, -1)

        console.log('[+]', usuario.id)
        io.to(usuario.id).emit('actualizarListaRoom', usuarios.getUserList(usuario.id))
        socket.broadcast.emit('chat', mensaje(
            'Sistema',
            'El usuario '+usuario.emisor+' se ha conectado',
            'tousu2'
        ))
        socket.emit('chat', mensaje(
            'Sistema',
            'Bienvenido '+usuario.emisor+'.',
            'tousu2'
        ))
    })
    socket.on("unirme", async (mensajeRecibido) => 
        {
            let user = await usuarios.getUserId(socket.id)
            if (user)
                {
                    //Añadir que se busque el usuario sin necesidad de traer el nombre desde el post
                    usuarios.removeUser(socket.id)
                    usuarios.addUser(socket.id, mensajeRecibido.emisor, mensajeRecibido.sala)
                    //Añadir un return para saber si fue exitoso o no

                    console.log(socket.rooms)
                    io.to(mensajeRecibido.sala).emit('chat', mensaje(
                        'Sistema',
                        'El usuario: '+mensajeRecibido.emisor+'se ha conectado a la sala tuya',
                        'tousu2'
                    ))
                    socket.join(mensajeRecibido.sala)
                    console.log(socket.rooms)
                    socket.broadcast.emit('chat', mensaje(
                        'Sistema chat join',
                        'El usuario: '+mensajeRecibido.emisor+' ha entrado a la sala: '+mensajeRecibido.sala,
                        'tousu2'
                    ))
                    io.to(mensajeRecibido.sala).emit('actualizarListaRoom', usuarios.getUserList(mensajeRecibido.sala))
                }
            else console.log('Hacker o error detectado')
        })

    socket.on("chat", (mensajeRecibido) => {
        socket.emit('chat', mensaje(
            mensajeRecibido.emisor,
            mensajeRecibido.mensaje,
            'tousu2'
        ))

        sala = usuarios.getUserSala(socket.id)
        if (sala != -1)
            {
                socket.broadcast.to(sala).emit('chat', mensaje(
            mensajeRecibido.emisor,
            mensajeRecibido.mensaje+"kkk",
            'tousu2'                    
                ))
            }
        console.log(mensajeRecibido)
    })
})



//Funciones 
function crearnombre()
{
    Lista = ["Aarón","Abdón","Abel","Abelardo","Abrahán","Absalón","Acacio","Adalberto","Adán","Adela","Adelaida","Adolfo","Adón","Adrián","Agustín","Aitor","Alba","Albert","Alberto","Albina","Alejandra","Alejandro","Alejo","Alfonso","Alfredo","Alicia","Alipio","Almudena","Alonso","Álvaro","Amadeo","Amaro","Ambrosio","Amelia","Amparo","Ana","Ananías","Anastasia","Anatolio","Andrea","Andrés","Ángel","Ángela","Ángeles","Aniano","Anna","Anselmo","Antero","Antonia","Antonio","Aquiles","Araceli","Aránzazu","Arcadio","Aresio","Ariadna","Aristides","Arnaldo","Artemio","Arturo","Ascensión","Asunción","Atanasio","Augusto","Áurea","Aurelia","Aureliano","Aurelio","Aurora","Baldomero","Balduino","Baltasar","Bárbara","Bartolomé","Basileo","Beatriz","Begoña","Belén","Beltrán","Benedicto","Benigno","Benito","Benjamín","Bernabé","Bernarda","Bernardo","Blanca","Blas","Bonifacio","Borja","Bruno","Calixto","Camilo","Cándida","Carina","Carlos","Carmelo","Carmen","Carolina","Casiano","Casimiro","Casio","Catalina","Cayetano","Cayo","Cecilia","Ceferino","Celia","Celina","Celso","César","Cesáreo","Cipriano","Cirilo","Cirino","Ciro","Clara","Claudia","Claudio","Cleofás","Clotilde","Colombo","Columba","Columbano","Concepción","Conrado","Constancio","Constantino","Consuelo","Cosme","Cristian","Cristina","Cristóbal","Daciano","Dacio","Dámaso","Damián","Daniel","Dario","David","Demócrito","Diego","Dimas","Dolores","Domingo","Donato","Dorotea","Edgar","Edmundo","Eduardo","Eduvigis","Efrén","Elena","Elías","Elisa","Eliseo","Elvira","Emilia","Emiliano","Emilio","Encarnación","Enrique","Epifanía","Erico","Ernesto","Esdras","Esiquio","Esperanza","Esteban","Ester","Esther","Eugenia","Eugenio","Eulalia","Eusebio","Eva","Evaristo","Ezequiel","Fabián","Fabio","Fabiola","Facundo","Fátima","Faustino","Fausto","Federico","Feliciano","Felipe","Félix","Fermín","Fernando","Fidel","Fortunato","Francesc","Francisca","Francisco","Fulgencio","Gabriel","Gema","Genoveva","Gerardo","Germán","Gertrudis","Gisela","Gloria","Godofredo","Gonzalo","Gregorio","Guadalupe","Guido","Guillermo","Gustavo","Guzmán","Héctor","Heliodoro","Heraclio","Heriberto","Hilarión","Hildegarda","Homero","Honorato","Honorio","Hugo","Humberto","Ifigenia","Ignacio","Ildefonso","Inés","Inmaculada","Inocencio","Irene","Ireneo","Isaac","Isabel","Isaías","Isidro","Ismael","Iván","Jacinto","Jacob","Jacobo","Jaime","Jaume","Javier","Jeremías","Jerónimo","Jesús","Joan","Joaquím","Joaquín","Joel","Jonás","Jonathan","Jordi","Jorge","Josafat","José","Josefa","Josefina","Josep","Josué","Juan","Juana","Julia","Julián","Julio","Justino","Juvenal","Ladislao","Laura","Laureano","Lázaro","Leandro","Leocadia","León","Leonardo","Leoncio","Leonor","Leopoldo","Lidia","Liduvina","Lino","Lorena","Lorenzo","Lourdes","Lucano","Lucas","Lucía","Luciano","Lucrecia","Luis","Luisa","Luz","Macario","Magdalena","Manuel","Manuela","Mar","Marc","Marcelino","Marcelo","Marcial","Marciano","Marcos","Margarita","María","Mariano","Marina","Mario","Marta","Martín","Mateo","Matías","Matilde","Mauricio","Maximiliano","Melchor","Mercedes","Miguel","Milagros","Miqueas","Míriam","Mohamed","Moisés","Mónica","Montserrat","Narciso","Natalia","Natividad","Nazario","Nemesio","Nicanor","Nicodemo","Nicolás","Nicomedes","Nieves","Noé","Noelia","Norberto","Nuria","Octavio","Odón","Olga","Onésimo","Orestes","Oriol","Oscar","Óscar","Oseas","Oswaldo","Otilia","Oto","Pablo","Pancracio","Pascual","Patricia","Patricio","Paula","Pedro","Petronila","Pilar","Pío","Poncio","Porfirio","Primo","Priscila","Probo","Purificación","Rafael","Raimundo","Ramiro","Ramón","Raquel","Raúl","Rebeca","Reinaldo","Remedios","Renato","Ricardo","Rigoberto","Rita","Roberto","Rocío","Rodrigo","Rogelio","Román","Romualdo","Roque","Rosa","Rosalia","Rosario","Rosendo","Rubén","Rufo","Ruperto","Salomé","Salomón","Salvador","Salvio","Samuel","Sandra","Sansón","Santiago","Sara","Sebastián","Segismundo","Sergio","Severino","Silvia","Simeón","Simón","Siro","Sixto","Sofía","Soledad","Sonia","Susana","Tadeo","Tarsicio","Teodora","Teodosia","Teófanes","Teófila","Teresa","Timoteo","Tito","Tobías","Tomas","Tomás","Toribio","Trinidad","Ubaldo","Urbano","Úrsula","Valentín","Valeriano","Vanesa","Velerio","Venancio","Verónica","Vicenta","Vicente","Víctor","Victoria","Victorino","Victorio","Vidal","Virgilio","Virginia","Vladimiro","Wilfredo","Xavier","Yolanda","Zacarías","Zaqueo"]
    
    return Lista[parseInt(Math.random()*101)]
}

function reloj() {
    console.log('Usuarios conectados:', usuarios.list())
    setTimeout(() => {
        reloj()
    }, 14000);
}
reloj()


//Declaraciones para el nodo express
{
app.use(express.json())
app.set('view engine', 'ejs')
app.use(express.urlencoded({
    extended: true
}));
const MySqlOptions = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'lobosvspueblo'
}
const sessionStore = new MySqlStore(MySqlOptions)
app.use(session({
    key: 'cookie_usuario',
    secret: '11111',
    store: sessionStore,
    resave: true,
    saveUninitialized: true
}))
app.use(express.static(path.join(__dirname, 'public')));
//Control de errores
app.use((err, req, resp, next) => {
    console.error('Error en la aplicación:', err);
    var c_err = err.code
    switch (c_err) {
        case 'ECONNREFUSED':
            c_err = 'Conexion a base de datos.'
            break;

        default:
            c_err = `Desconocido, porfavor informalo. \n${err.errno}`;
    }

    // Enviar una respuesta controlada al cliente
    resp.render(path.join(__dirname, '/paginas/ok.ejs'), {
        alert: true,
        alertTitle: "Error!",
        alertMessage: "Ha ocurrido un error en el servidor: " + c_err,
        alertIcon: 'question',
        showConfirmButton: true,
        time: false,
        ruta: 'login'
    })
    //Codigo para conocer el error en error no controlado =>    // resp.send('Ha ocurrido un error en el servidor. Por favor, inténtalo de nuevo más tarde. <br> Codigo del error: '+c_err);
});
}
//INICIAR SERVIDOR
httpServer.listen(3000, () => { console.log('Iniciando') })







function respuestaerror(res, alert = 'Fallo!', msg = "Usuario o contraseña incorrecta.", icn = 'error', confirm = false, time = 1600, ruta = 'login') {
    res.render(path.join(__dirname, '/paginas/ok.ejs'), {
        alert: true,
        alertTitle: alert,
        alertMessage: msg,
        alertIcon: icn,
        showConfirmButton: confirm,
        time: time,
        ruta: ruta
    })
}

//Solicitudes GETs
// Get para gestion de errores o estatus de acciones parte del usuario.
app.get('/ok', (req, resp, next) => {
    respuestaerror(resp,
        "OK!",
        "Todos los servicios OK ✔️",
        'success',
        false,
        1600,
        'login')
})

app.get('/', (req, resp, next) => {
    if(req.session.LoginID && req.session.LoginUsuario)
        next()
    else
    resp.render(path.join(__dirname, '/paginas/login.ejs'))
    console.log(req.session.LoginID, req.session)
})

//Si ya se ha logrado en /login y tiene una cookie validada con usuario, entonces mostrara la pagina de utilidad.
app.get('/', async (req, resp, next) => {
    resp.render(path.join(__dirname, '/paginas/chat.ejs'), 
    {
        empresa : req.session.LoginUsuario,
        idusu : req.session.LoginID
    })
})
app.post('/login',async (req, resp) =>
{
    req.session.LoginID = parseInt(Math.random() * 162 + 1)
    req.session.LoginUsuario = await crearnombre()
    resp.redirect('/')

})
