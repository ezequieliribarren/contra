import React from 'react'

const Abstract = ({ p1, p2, p3, title, id }) => {
    return (
        <div id={id} className='abstract'>
            <div>
                <h2 className='abstract-h2'>{title}</h2>
            </div>
            <div>
                <p className='abstract-p'>
                    {p1}
                </p>
                <p className='abstract-p'>
                    {p2}
                </p>
                <p className='abstract-p'>
                    {p3}
                </p>

            </div>
            <div className='abstract-menu'>
                <div className='abstract-item'>
                    <a className='abstract-a1' href=''><img src="images/abstract/descargar.svg" alt="" /></a>
                    <h4>Descargar<br />proyecto</h4>
                </div>
                <div className='abstract-item'>
                    <a className='abstract-a2' href=""> <img src="images/abstract/share.svg" alt="" />     </a>
                    <h4>Nota<br />de Prensa</h4>
                </div>
                <div className='abstract-item'>
                    <a className='abstract-a3' href=""><img src="images/abstract/compartir.svg" alt="" />  </a>
                    <h4>Compartir<br />proyecto</h4>
                </div>

            </div>

        </div>
    )
}

export default Abstract