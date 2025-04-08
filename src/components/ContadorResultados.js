import React from 'react';

export default function ContadorResultados({ axiosCount, fetchCount }) {
    const total = axiosCount + fetchCount;

    return (
        <div className="contador-resultados">
            <h2>Contador de Resultados</h2>
            <p>Personas por Axios: {axiosCount}</p>
            <p>Personas por Fetch: {fetchCount}</p>
            <p>Total de Personas: {total}</p>
        </div>
    );
}
