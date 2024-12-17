import React from 'react'
import { Link } from 'react-router-dom'
import Error404 from '../../assets/img/404.jpg'
import "./NotFound.css"

const NotFound = () => {
  return (
    <>
      <div className=" d-flex justify-content-center align-items-center flex-column">
      {/* <h1>404 - Página no encontrada</h1>
      <p>La página que buscas no existe.</p> */}

      <img className='error' src={Error404} alt="404" />
      <div className='boton-error m-xl-5'>
      <Link to="/" className="boton-error btn btn-outline-success">Volver al inicio</Link>
      </div>
    </div>
    </>
  )
}

export default NotFound
