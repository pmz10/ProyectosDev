const Usuario = require('../models/Usuarios');

//Resolvers
const resolvers = {
    Query: {
        obtenerCurso: () => "Algo"
        },
        Mutation: {
            nuevoUsuario: async (_, { input }) => {

                const { email, password } = input;

                //Revisar si el usuario ya esta registrado
                const existeUsuario = await Usuario.findOne({email});
                if (existeUsuario) {
                    throw new Error('El usuario ya esta registrado'); 
                }

                //Hashear su password

                //Guardalo en base de datos 
                try{
                    const usuario = new Usuario(input);
                    usuario.save();
                    return usuario
                }catch (error){
                    console.log(error);
                }
            }
        }
}

module.exports = resolvers;