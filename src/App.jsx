import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [empresas, setEmpresas] = useState([]);
  const [recuperado, setRecuperado] = useState(false);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/empresas/')
      .then((response) => response.json())
      .then((empresa) => {
        setEmpresas(empresa);
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
              <th>Nombre</th>
              <th>Direccion</th>
              <th>Telefono</th>
              <th>Rutas</th>
            </tr>
          </thead>
          <tbody>
            {empresas.map((empresa) => {
              return (
                <tr key={empresa.id}>
                  <td>{empresa.id}</td>
                  <td>{empresa.nombre}</td>
                  <td>{empresa.direccion}</td>
                  <td>{empresa.telefono}</td>
                  <td>{empresa.rutas}</td>
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
