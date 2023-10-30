import React, { useContext, useEffect, useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { useParams } from 'react-router-dom';
import { useData } from '../../../Context/Context';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const data = useData();
    const [project, setProject] = useState(null);

    useEffect(() => {
        // Encuentra el proyecto correspondiente al ID en los datos
        const selectedProject = data.find((row) => row.c[7]?.v.toString() === id.toString());
        setProject(selectedProject);
    }, [id, data]);

    if (!project) {
        return <div>Proyecto no encontrado</div>;
    }

    return (
        <div>
            <h1>Detalles del Proyecto: {project.c[0]?.v}</h1>
            <p>Categoría: {project.c[1]?.v}</p>
            <p>Lugar: {project.c[2]?.v}</p>
            <p>Fecha: {project.c[3]?.v}</p>
            <p>Cliente: {project.c[4]?.v}</p>
            <img src={project.c[5]?.v} alt="" />

            {/* Agrega un enlace para volver a la lista de proyectos */}
            <Link to="/#proyectos">Volver a la Lista de Proyectos</Link>
        </div>
    );
};

export default ItemDetailContainer;
