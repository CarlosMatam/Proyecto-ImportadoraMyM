//importamos el Modelo
import LogeoSModel from '../models/Login.js';
import bcrypt from 'bcrypt';

//** Métodos para el CRUD **/

//Mostrar todos los registros
export const getAllLogin = async (req, res) => {
    try {
        const login = await LogeoSModel.findAll({
           
        })
        res.json(login)
    } catch (error) {
        res.json({ message: error.message })
    }
}
//Mostrar un registro
export const getLogin = async (req, res) => {
    try {
        const login = await LogeoSModel.findAll({
            where: { ID_USUARIO: req.params.ID_USUARIO }
        })
        res.json(login[0])
    } catch (error) {
        res.json({ message: error.message })
    }
}
//Crear un registro
export const createLogin = async (req, res) => {
    try {
       await LogeoSModel.create(req.body)

        res.json({
            "message": "¡Registro creado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}


export const ValidacionLogin = async (req, res) => {
    const { LOGIN_USER, CONTRASENNA } = req.body;

    try {
        const user = await LogeoSModel.findOne({
            where: { LOGIN_USER },
        });

        if (!user) {
            // El usuario no existe
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        if (user.CONTRASENNA !== CONTRASENNA) {
            // La contraseña es incorrecta
            return res.status(401).json({ message: 'Contraseña incorrecta' });
        }

        //para que no se muestre la contraseña en el json
        const UserNuevo = {
            ID_USUARIO: user.ID_USUARIO,
            LOGIN_USER: user.LOGIN_USER,
        
        };

        res.json({
            message: 'Inicio de sesión exitoso',
            user: UserNuevo,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};