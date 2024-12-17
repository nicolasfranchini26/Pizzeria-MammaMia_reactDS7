import { useState } from "react";
import Swal from "sweetalert2";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordDos, setPasswordDos] = useState("");
  const [exitoso, setExitoso] = useState(false);
  const [error, setError] = useState(false);

  const msj = () => {
    if (exitoso === true) {
      Swal.fire({
        title: "¡Excelente!",
        text: "Registro Exitoso",
        icon: "success",
      });
    }
    setExitoso(false);
  };
  {
    exitoso ? msj() : null;
  }

  const validarDatos = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim() || !passwordDos.trim()) {
      setError(true);
      setExitoso(false);
      return;
    } 
    
    if (password.length < 6 || passwordDos.length < 6) {
      Swal.fire({
        title: "¡Contraseña Errónea!",
        text: "Debe contener mínimo 6 carácteres",
        icon: "error",
      });
      setError(true);
      return;

    }

    const emailValido = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailValido.test(email)) {
      Swal.fire({
        title: "¡Correo Erróneo!",
        text: "",
        icon: "error",
      });
      setError(true);
      setExitoso(false);
      return;
    }

     // --------- CONTRASEÑA -------------------

    const passwordCorrecta = "123456";

    if (password !== passwordCorrecta) {
      Swal.fire({
        title: "¡Datos Erróneos!",
        text: "Email y/o Password incorrectos",
        icon: "error",
      });
      setError(true);
      setExitoso(false);
      return;
    }

    if (password !== passwordDos) {
      Swal.fire({
        title: "¡Contraseña Errónea!",
        text: "Deben ser iguales",
        icon: "error",
      });
      setError(true);
      setExitoso(false);
      return;
    }

    setError(false);
    setExitoso(true);
    setEmail("");
    setPassword("");
    setPasswordDos("");
  };

  return (
    <>
      <div className="login d-flex align-items-center justify-content-center flex-column p-5 m-lg-5">
        <form
          className="formulario"
          style={{ width: "30rem" }}
          onSubmit={validarDatos}
        >
          <div className="card p-3">
          <h1 className="titulo text-center m-4">Register</h1>
          <hr className=" w-100"/>
          {error ? (
            <p className="alert alert-warning text-center">
              ¡Todos los campos son obligatorios!🚨
            </p>
          ) : null}
          <div className="form mb-3">
            <div><b>Email</b></div>
            <input
            style={{width:'100%',
              padding:'2px'
            }}
              type="email"
              name="email"
              className="form"
              placeholder="Ingresa tu correo"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="form mb-3">
            <div><b>Password</b></div>
            <input
            style={{width:'100%',
              padding:'2px'
            }}
              type="password"
              name="password"
              className="form"
              placeholder="Ingresa tu contraseña"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="form mb-3">
            <div><b>Confirmar Password</b></div>
            <input
            style={{width:'100%',
              padding:'2px'
            }}
              type="password"
              name="passwordDos"
              className="form"
              placeholder="Ingresa tu contraseña"
              onChange={(e) => setPasswordDos(e.target.value)}
              value={passwordDos}
            />
          </div>
          <button type="submit" className="btn btn-primary w-40">
            Login
          </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
