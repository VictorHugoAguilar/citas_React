import React, { useState, Fragment } from "react";

function Formulario({ crearCita }) {
    const [cita, setCita] = useState({
        mascota: "",
        propietario: "",
        fecha: "",
        hora: "",
        sintomas: ""
    });

    const handleChange = e => {
        setCita({
            ...cita,
            [e.target.name]: e.target.value
        });
    };

    const enviarCita = e => {
        e.preventDefault();
        // console.log(cita);

        //pasar la cita hacia el compoenente principal
        crearCita(cita);

        // Reiniciar el state
    };

    return (
        <Fragment>
            <h2>Crear Cita</h2>
            <form onSubmit={enviarCita}>
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={handleChange}
                />

                <label>Nombre Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño de la Mascota"
                    onChange={handleChange}
                />

                <label>Fecha</label>
                <input
                    type="date"
                    className="u-full-width"
                    name="fecha"
                    onChange={handleChange}
                />

                <label>Hora</label>
                <input
                    type="time"
                    className="u-full-width"
                    name="hora"
                    onChange={handleChange}
                />

                <label>Sintomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={handleChange}
                />

                <button type="submit" className="button-primary u-full-width">
                    Agregar
                </button>
            </form>
        </Fragment>
    );
}

function Cita (){
  
}

function App() {
    // useState retorna 2 funciones
    // El state actual = this.state;
    // Funcion que actualiza el state es this.setState();
    const [citas, setCitas] = useState([]);

    // Agregar las nuevas citas al state
    const crearCita = cita => {
        // tomar una copia del state y añadir nuevo cliente
        const nuevasCitas = [...citas, cita];
        // console.log(nuevasCitas)
        setCitas(nuevasCitas);
    };

    return (
        <Fragment>
            <h1>Administrador de pacientes</h1>
            <div className="container">
                <div className="row">
                    <div className="one-half column">
                        <Formulario crearCita={crearCita} />
                    </div>
                    <div className="one-half column">
                      {citas.map((cita, index) => (
                        <Cita
                        key={index}
                        index={index}
                        cita={cita}
                        />
                      ))}
                      </div>
                </div>
            </div>
        </Fragment>
    );
}

export default App;
