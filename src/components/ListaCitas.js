import React from 'react';
import Cita from './Cita';
import Proptypes from 'prop-types';

const ListaCitas = ({citas,eliminarCita}) =>{

    //obtener citas y el mensaje a mostrar
    const mensaje = Object.keys(citas).length === 0 ? 'No hay citas' : 'Administrar citas'

    return(
        <div className="card mt-2 py-5">
            <div className="card-title text-center">
            {mensaje}
            </div>

            <div className="lista-citas">
            {
                citas.map(cita =>(
                    <Cita
                        key={cita.id}
                        cita={cita}
                        eliminarCita={eliminarCita}
                    />
                ))
            }
            </div>
        </div>
    )
};

ListaCitas.propTypes = {
    citas : Proptypes.array.isRequired,
    eliminarCita : Proptypes.func.isRequired
}

export default ListaCitas;