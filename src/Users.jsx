import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [recuperado, setRecuperado] = useState(false);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/usuarios/')
      .then((response) => response.json())
      .then((usuario) => {
        setUsuarios(usuario);
        setRecuperado(true);
      });
  }, []);

  const mostrarTabla = () => {
    return (
      <div>
        <table border="1">
          <thead>
            <tr>
              <th>Código</th>
              <th>Rol</th>
              <th>Foto</th>
              <th>Nombre Completo</th>
              <th>Telefono</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario) => {
              return (
                <tr key={usuario.id}>
                  <td>{usuario.id}</td>
                  <td>{usuario.rol}</td>
                  <td>{usuario.foto}</td>
                  <td>{usuario.nombrecompleto}</td>
                  <td>{usuario.telefono}</td>
                  <td>{usuario.estado}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };

  return recuperado ? mostrarTabla() : <div>Recuperando datos...</div>;
}

export default App;
