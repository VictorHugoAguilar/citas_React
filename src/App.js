import React, { useState, useEffect, Fragment } from "react";

function Formulario({ crearCita }) {
    const stateInicial = {
        mascota: "",
        propietario: "",
        fecha: "",
        hora: "",
        sintomas: ""
    };

    // cita = state actual
    // setCita = actualiza el state actual
    const [cita, setCita] = useState(stateInicial);

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
        setCita(stateInicial);
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
                    value={cita.mascota}
                />

                <label>Nombre Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño de la Mascota"
                    onChange={handleChange}
                    value={cita.propietario}
                />

                <label>Fecha</label>
                <input
                    type="date"
                    className="u-full-width"
                    name="fecha"
                    onChange={handleChange}
                    value={cita.fecha}
                />

                <label>Hora</label>
                <input
                    type="time"
                    className="u-full-width"
                    name="hora"
                    onChange={handleChange}
                    value={cita.hora}
                />

                <label>Sintomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={handleChange}
                    value={cita.sintomas}
                />

                <button type="submit" className="button-primary u-full-width">
                    Agregar
                </button>
            </form>
        </Fragment>
    );
}

function Cita({ cita, index, eliminarCita }) {
    return (
        <div className="cita">
            <p>
                Mascota: <span>{cita.mascota}</span>
            </p>
            <p>
                Dueño: <span>{cita.propietario}</span>
            </p>
            <p>
                Fecha: <span>{cita.fecha}</span>
            </p>
            <p>
                Hora: <span>{cita.hora}</span>
            </p>
            <p>
                Sintomas: <span>{cita.sintomas}</span>
            </p>
            <button
                onClick={() => eliminarCita(index)}
                type="button"
                className="button eliminar u-full-width"
            >
                Eliminar X
            </button>
        </div>
    );
}

function App() {
    // cargar las citas del localStorage
    let citasIniciales = JSON.parse(localStorage.getItem("citas"));

    if (!citasIniciales) {
        citasIniciales = [];
    }

    // useState retorna 2 funciones
    // El state actual = this.state;
    // Funcion que actualiza el state es this.setState();
    const [citas, setCitas] = useState(citasIniciales);

    // Agregar las nuevas citas al state
    const crearCita = cita => {
        // tomar una copia del state y añadir nuevo cliente
        const nuevasCitas = [...citas, cita];
        // console.log(nuevasCitas)
        setCitas(nuevasCitas);
    };

    // elimina las citas del state
    const eliminarCita = index => {
        const nuevasCitas = [...citas];
        nuevasCitas.splice(index, 1);
        setCitas(nuevasCitas);
    };

    // Cargar condicionalmente un titulo
    const titulo =
        Object.keys(citas).length === 0 ? "No hay citas" : "Administrar Citas";

    useEffect(() => {
        let citasIniciales = JSON.parse(localStorage.getItem("citas"));

        if (citasIniciales) {
            localStorage.setItem("citas", JSON.stringify(citas));
        } else {
            localStorage.setItem("cita", JSON.stringify([]));
        }
    }, [citas]);

    return (
        <Fragment>
            <h1>Administrador de pacientes</h1>
            <div className="container">
                <div className="row">
                    <div className="one-half column">
                        <Formulario crearCita={crearCita} />
                    </div>
                    <div className="one-half column">
                        <h2>{titulo}</h2>
                        {citas.map((cita, index) => (
                            <Cita
                                key={index}
                                index={index}
                                cita={cita}
                                eliminarCita={eliminarCita}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default App;
