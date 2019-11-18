import React from 'react';
import Cita from './Cita';

const ListaCitas = ({citas}) =>(
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
                    />
                ))
            }
            </div>
    </div>
);
export default ListaCitas;