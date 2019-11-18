import React from 'react';
import Cita from './Cita';
import Proptypes from 'prop-types';

const ListaCitas = ({citas,eliminarCita}) =>(
    <div className="card mt-2 py-5">
            <div className="card-title text-center">
            Administra las citas aquí!
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
);

ListaCitas.propTypes = {
    citas : Proptypes.array.isRequired,
    eliminarCita : Proptypes.func.isRequired
}

export default ListaCitas;