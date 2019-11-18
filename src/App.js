import React,{Component} from 'react';
import './bootstrap.min.css';
import Header from './components/Header';
import NuevaCita from './components/NuevaCita';
import ListaCitas from './components/ListaCitas';

class App extends Component {
  state = { 
    citas:[]
  };

  //cuando la aplicación ha sido cargado
  componentDidMount(){
    const citasLS = localStorage.getItem('citas');

    if(citasLS){
      this.setState({
        citas: JSON.parse(citasLS)
      });
    }
  }

  //cuando se actualizó la app
  componentDidUpdate(){
    localStorage.setItem('citas',JSON.stringify(this.state.citas));
  }

  crearNuevaCita = datos =>{
    //copiar el state actual
    const citas = [...this.state.citas,datos];

    //agregar al state
    this.setState({
      citas
    });
  }

  //eliminar citas del state
  eliminarCita = id =>{
    //tomar una copia del state, no mutarlo directamente, siempre hacer copia
    const citasActuales = [...this.state.citas];

    //filter para excluir el id pasado
    const citas = citasActuales.filter(cita => cita.id !== id);

    //actualizar el state
    this.setState({
      citas
    });
  }

  render() {
    return (
      <div className="container">

        <Header
          titulo = 'Administrador de Pacientes en Veterinaria'
        />

        <div className="row">
          <div className="col-md-10 mx-auto">
            <NuevaCita
              crearNuevaCita={this.crearNuevaCita}
            />
          </div>
        </div>

        <div className="mt-5 col-md-10 mx-auto">
          <ListaCitas
            citas={this.state.citas}
            eliminarCita={this.eliminarCita}
          />
        </div>
        
      </div>

    );
  }
}

export default App;
