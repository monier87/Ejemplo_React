import React from 'react';

function Testimonio() {
    return (
      <div className='contenedor-testimonio'>
        <img 
          className='imagen-testimonio'
          src={require('../imagenes/testimonio-emma.png')}
          alt='Foto de Emma'/>
        <div className='contenedor-texto-testimonio'>
          <p className='nombre-testimonio'>Emma Bostia en Suecia</p>
          <p className='cargo-testimonio'>Ingeniera  de Software en Spotify</p>
          <p className='Texto-testimonio'>ESto es un parrofo de Prueba.kshfkasd,kbfad,msbfmnbsdf,mb,kdasbf,mdasb,mfdsba,mbdsaf,mdsa,mbdfas,mbfd,masd,msbd,ms</p>
        </div>
      </div>

    );
}

export default Testimonio;