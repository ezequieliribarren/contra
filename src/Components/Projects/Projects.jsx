import React from 'react'
import { useData } from '../../../Context/Context';
import { HashLink as Link } from 'react-router-hash-link';

const Projects = () => {
    const data = useData();
  return (
<div>
            <h1>Lista de Proyectos</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Categoría</th>
                        <th>Lugar</th>
                        <th>Fecha</th>
                        <th>Cliente</th>
                        <th>Imagen</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            <td>{row.c[0]?.v}</td>
                            <td>{row.c[1]?.v}</td>
                            <td>{row.c[2]?.v}</td>
                            <td>{row.c[3]?.v}</td>
                            <td>{row.c[4]?.v}</td>
                            <td><img src={row.c[5]?.v} alt="" /></td>
                            <td>
                                {/* Enlace para ir al detalle del proyecto */}
                                <Link to={`/project/${row.c[7]?.v}`}>Ver Detalle</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
  )
}

export default Projects