import React,{Component} from 'react';

class NuevaCita extends Component{
    state = {};

    render(){
        return(
            <div className="card mt-5 py-5">
                <div className="card-body">
                    {/*titulo*/}
                    <h2 className="card-title text-center mb-5">
                    Llenar formulario para nueva cita
                    </h2>

                    {/* Formulario */}
                    <form>

                        <div className="form-group row">
                            <label className="col-ms-4 col-lg-2 col-form-label">
                                Nombre:
                            </label>

                            <div className="col-sm-10 col-lg-10">
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre de mascota"
                                    name="mascota"
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-ms-4 col-lg-2 col-form-label">
                                Dueño:
                            </label>

                            <div className="col-sm-10 col-lg-10">
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre dueño de mascota"
                                    name="propietario"
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-ms-4 col-lg-2 col-form-label">
                                Fecha:
                            </label>

                            <div className="col-sm-10 col-lg-4">
                                <input 
                                    type="date"
                                    className="form-control"
                                    name="fecha"
                                />
                            </div>

                            <label className="col-ms-4 col-lg-2 col-form-label">
                                Hora:
                            </label>

                            <div className="col-sm-10 col-lg-4">
                                <input 
                                    type="time"
                                    className="form-control"
                                    name="hora"
                                />
                            </div>

                        </div>

                        <div className="form-group row">
                            <label className="col-ms-4 col-lg-2 col-form-label">
                                Síntomas:
                            </label>

                            <div className="col-sm-10 col-lg-10">
                                <textarea 
                                className="form-control"
                                placeholder="describe los síntomas"
                                name="sintomas"
                                >
                                </textarea>
                            </div>
                        </div>

                        <input 
                            type="submit"
                            className="py-3 mt-2 btn btn-success btn-block"
                            value="Agregar nueva cita"
                        />

                    </form>
                    {/* end formulario */}
                </div>
            </div>
        );
    }
}

export default NuevaCita;