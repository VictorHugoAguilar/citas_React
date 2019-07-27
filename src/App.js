import React, { useState, Fragment } from "react";

function Formulario() {
    const [cita, setCita] = useState({
        mascota: "",
        propietario: "",
        fecha: "",
        hora: "",
        sintomas: ""
    });

    console.log(cita);

    const handleChange = e => {
        setCita({
            ...cita,
            [e.target.name]: e.target.value
        });
    };

    return (
        <Fragment>
            <h2>Crear Cita</h2>
            <form>
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

function App() {
    // useState retorna 2 funciones
    // El state actual = this.state;
    // Funcion que actualiza el state es this.setState();
    const [state, setState] = useState();

    return (
        <Fragment>
            <h1>Administrador de pacientes</h1>
            <div className="container">
                <div className="row">
                    <div className="one-half column">
                        <Formulario />
                    </div>
                    <div className="one-half column" />
                </div>
            </div>
        </Fragment>
    );
}

export default App;
