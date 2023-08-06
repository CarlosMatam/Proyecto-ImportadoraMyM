import axios from 'axios';
import {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { CDBCard, CDBCardBody, CDBIcon, CDBBtn, CDBContainer } from 'cdbreact';


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
                <CDBContainer>
                <CDBCard style={{ width: '30rem' }}>
                <CDBCardBody className="mx-4">
                    <div>
                        <h3 className="h3">Iniciar Sesión</h3>
                    </div>
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
               <div>
               <Link to="/Login/OlvidoContrasenna" className='d-inline p-0'>¿Olvidó su contraseña?</Link>
               </div>
                {/* Mostrar el mensaje de error */}
                <p className="text-danger">{errorMessage}</p>
               
                <CDBBtn type="submit" className="btn btn-primary">
                    Iniciar Sesión
                </CDBBtn>
                </CDBCardBody>
                </CDBCard>
                </CDBContainer>
            </Form>
        </Formik>
    );
};

export default Login;