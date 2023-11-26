import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import EmpresasPages from "./pages/EmpresasPages";
import EmpresaFormPage from "./pages/EmpresaFormPages";
import LoginPage from "./components/Login";

function RedirectToEmpresas() {
  return <Navigate to="/" />;
}

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RedirectToEmpresas />} />
        <Route path='/empresas' element={<EmpresasPages />} />
        <Route path='/create' element={<EmpresaFormPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;