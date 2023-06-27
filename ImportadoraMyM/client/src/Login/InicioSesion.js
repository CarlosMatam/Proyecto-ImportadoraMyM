import axios from 'axios';
import {useState} from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const URI = 'http://localhost:8000/Login/';

const Validaciones = Yup.object().shape({
    LOGIN_USER: Yup.string().required('¡Usuario Requerido!'),
    CONTRASENNA: Yup.string().required('¡Contraseña Requerida!'),
});

const Login = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const store = async (values) => {
        const {
            LOGIN_USER,
            CONTRASENNA,
        } = values;
        try {
            await axios.post(URI, {
                LOGIN_USER,
                CONTRASENNA,
            });

            navigate('/');
        } catch(error) {
            if (error.response && error.response.data) {
                const errorMessage = error.response.data.message;
                setErrorMessage(errorMessage);
            }
        }

    };

    return (
        <Formik
            initialValues={{
                LOGIN_USER: '',
                CONTRASENNA: '',
            }}
            validationSchema={Validaciones}
            onSubmit={store}
        >
            <Form>
                <h3>Iniciar Sesion</h3>
                <div className="mb-3">
                    <label className="form-label">Usuario:</label>
                    <Field
                        type="text"
                        className="form-control"
                        name="LOGIN_USER"
                        placeholder="Ingrese el usuario"
                       
                    />
                    <ErrorMessage
                        name="LOGIN_USER"
                        component="div"
                        className="text-danger"
                        
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Contraseña:</label>
                    <Field
                        type="password"
                        className="form-control"
                        name="CONTRASENNA"
                        placeholder="Ingrese la contraseña"
                        
                    />
                    <ErrorMessage
                        name="CONTRASENNA"
                        component="div"
                        className="text-danger"
                    />
                </div>
               
                {/* Mostrar el mensaje de error */}
                <p className="text-danger">{errorMessage}</p>
               
                <button type="submit" className="btn btn-primary">
                    Iniciar Sesion
                    </button>
                
            </Form>
        </Formik>
    );
};

export default Login;