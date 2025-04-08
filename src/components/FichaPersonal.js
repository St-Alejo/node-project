import React, { useEffect, useState } from "react";

export default function FichaPersonal() {
    const [persona, setPersona] = useState(null);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const fetchPersona = async () => {
            try {
                const res = await fetch('https://randomuser.me/api/');
                const data = await res.json();
                setPersona(data.results[0]);
            } catch (error) {
                console.error("Error al obtener la persona:", error);
            } finally {
                setCargando(false);
            }
        };

        fetchPersona();
    }, []);

    if (cargando) {
        return <p>Cargando</p>;
    }

    if (!persona) {
        return <p>No se pudo cargar la ficha personal.</p>;
    }

    // Destructuramos los datos útiles
    const {
        name,
        gender,
        dob,
        email,
        phone,
        cell,
        location,
        picture,
        nat,
        login,
        registered
    } = persona;

    return (
        <div className="ficha-personal">
            <h1>Ficha Personal</h1>
            <img src={picture.large} alt="Foto de perfil" />
            <p><strong>Nombre:</strong> {`${name.title} ${name.first} ${name.last}`}</p>
            <p><strong>Género:</strong> {gender === 'male' ? 'Masculino' : 'Femenino'}</p>
            <p><strong>Edad:</strong> {dob.age} años</p>
            <p><strong>Fecha de nacimiento:</strong> {new Date(dob.date).toLocaleDateString()}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Teléfono:</strong> {phone}</p>
            <p><strong>Celular:</strong> {cell}</p>
            <p><strong>País:</strong> {location.country}</p>
            <p><strong>Estado:</strong> {location.state}</p>
            <p><strong>Ciudad:</strong> {location.city}</p>
            <p><strong>Dirección:</strong> {`${location.street.name} #${location.street.number}`}</p>
            <p><strong>Código Postal:</strong> {location.postcode}</p>
            <p><strong>Zona Horaria:</strong> {location.timezone.description} ({location.timezone.offset})</p>
            <p><strong>Nacionalidad:</strong> {nat}</p>
            <p><strong>Usuario:</strong> {login.username}</p>
            <p><strong>Registrado desde:</strong> {new Date(registered.date).toLocaleDateString()}</p>
        </div>
    );
}
