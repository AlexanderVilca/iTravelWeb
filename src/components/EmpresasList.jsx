import { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/EmpresasList.css';

export function EmpresasList() {
  const [empresas, setEmpresas] = useState([]);
  const [formData, setFormData] = useState({
    nombre: '',
    direccion: '',
    telefono: '',
    rutas: '',
  });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    loadEmpresas();
  }, []);

  const loadEmpresas = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/empresas/');
      setEmpresas(response.data);
    } catch (error) {
      console.error('Error al cargar empresas:', error);
    }
  };

  const handleCreate = async () => {
    try {
      await axios.post('http://127.0.0.1:8000/empresas/', formData);
      loadEmpresas();
      setFormData({ nombre: '', direccion: '', telefono: '', rutas: '' });
    } catch (error) {
      console.error('Error al crear empresa:', error);
    }
  };

  const handleEdit = async (id) => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/empresas/${id}`);
      setFormData(response.data);
      setEditingId(id);
    } catch (error) {
      console.error('Error al cargar datos para editar:', error);
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://127.0.0.1:8000/empresas/${id}`, formData);
      loadEmpresas();
      setFormData({ nombre: '', direccion: '', telefono: '', rutas: '' });
      setEditingId(null);
    } catch (error) {
      console.error('Error al actualizar empresa:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/empresas/${id}`);
      loadEmpresas();
    } catch (error) {
      console.error('Error al eliminar empresa:', error);
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="content">
      <h2>Lista de Empresas</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Dirección</th>
            <th>Telefono</th>
            <th>Numero de Rutas</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {empresas.map((empresa) => (
            <tr key={empresa.id}>
              <td>{empresa.nombre}</td>
              <td>{empresa.direccion}</td>
              <td>{empresa.telefono}</td>
              <td>{empresa.rutas}</td>
              <td>
                <button className='editar-btn' onClick={() => handleEdit(empresa.id)}>Editar</button>{"  "}
                <button className='eliminar-btn' onClick={() => handleDelete(empresa.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <div>
        <h3>{editingId ? 'Editar Empresa' : 'Nueva Empresa'}</h3>
        <form onSubmit={editingId ? handleUpdate : handleCreate}>
          <div>
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleFormChange}
              required
            />
          </div>
          <div>
            <label htmlFor="direccion">Dirección:</label>
            <input
              type="text"
              id="direccion"
              name="direccion"
              value={formData.direccion}
              onChange={handleFormChange}
              required
            />
          </div>
          <div>
            <label htmlFor="telefono">Teléfono:</label>
            <input
              type="text"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleFormChange}
              required
            />
          </div>
          <div>
            <label htmlFor="rutas">Número de Rutas:</label>
            <input
              type="text"
              id="rutas"
              name="rutas"
              value={formData.rutas}
              onChange={handleFormChange}
              required
            />
          </div>
          <br />
          <div>
            <button type="submit">{editingId ? 'Actualizar' : 'Crear'}</button>
          </div>
        </form>
      </div>
    </div>
  );
}
