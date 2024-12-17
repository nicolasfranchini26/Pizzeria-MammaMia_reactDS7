import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useUserContext } from '../../context/UserContext';
import FotoPerfil from '../../assets/img/foto-perfil.jpg';
import './Profile.css';

const Profile = () => {
  const { logout } = useUserContext(); 
  const navigate = useNavigate();

  return (
    <div className="Perfil">
      <h2>Perfil del usuario</h2>

      <img
        src={FotoPerfil}
        alt="Foto de usuario"
        className="profile-img"
      />

      <p>Email: <strong>n.franchinic@gmail.com</strong></p>
      <NavLink to='/login'>
        <button
        className="boton rounded btn btn-outline-success"
        onClick={logout}>
        Cerrar sesión
        </button>
        </NavLink>
    </div>
  );
};

export default Profile;
