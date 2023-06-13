import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:8000/Transportes/'
const URI2 = 'http://localhost:8000/TelefonosTrans/'


const EditarTransporte = () => {
    const [NOMBRE, setNombre] = useState('')

    const [TELEFONO_1, setTelefono_1] = useState('')
    const [TELEFONO_2, setTelefono_2] = useState('')
    const [TELEFONO_3, setTelefono_3] = useState('')
    const navigate = useNavigate()
    const { ID_TRANSPORTE } = useParams()


    //procedimiento para actualizar
    const update = async (e) => {
        e.preventDefault();

        // Actualizar el agente
        await axios.put(URI + ID_TRANSPORTE, {
            NOMBRE: NOMBRE,
        });

        // Actualizar los teléfonos
        await axios.put(URI2 + ID_TRANSPORTE, {
            TELEFONO_1: TELEFONO_1,
            TELEFONO_2: TELEFONO_2,
            TELEFONO_3: TELEFONO_3
        });

        navigate('/');
    };



    useEffect(() => {
        getTransporteById()
    }, [])

    const getTransporteById = async () => {
        const res = await axios.get(URI + ID_TRANSPORTE);
        setNombre(res.data.NOMBRE);

        // Obtener los teléfonos y direcciones del agente
        const telefonosRes = await axios.get(URI2 + ID_TRANSPORTE);

        // Establecer los estados de los teléfonos y direcciones
        setTelefono_1(telefonosRes.data.TELEFONO_1);
        setTelefono_2(telefonosRes.data.TELEFONO_2);
        setTelefono_3(telefonosRes.data.TELEFONO_3);
    };

    return (
        <div>
            <h3>Edit POST</h3>
            <form onSubmit={update}>
                <div className='mb-3'>
                    <label className='form-label'>Nombre</label>
                    <input
                        value={NOMBRE}
                        onChange={(e) => setNombre(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                </div>
            
                <div className="mb-3">
                    <label className="form-label">Teléfono 1</label>
                    <input
                        value={TELEFONO_1}
                        onChange={(e) => setTelefono_1(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Teléfono 2</label>
                    <input
                        value={TELEFONO_2}
                        onChange={(e) => setTelefono_2(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Teléfono 3</label>
                    <input
                        value={TELEFONO_3}
                        onChange={(e) => setTelefono_3(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>


                <button type="submit" className="btn btn-primary">Actualizar</button>
            </form>
        </div>
    )


}

export default EditarTransporte