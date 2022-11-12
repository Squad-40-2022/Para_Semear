import React, {useContext} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/auth';
import { ADMAuthProvider, ADMAuthContext } from './context/ADMauth';

const AppRoutes = () => {
    const PrivateADM = ({children}) => {
      const {authenticated, loading} = useContext(ADMAuthContext);
    
      if (loading){
        return <div className='loading'>Carregando...</div>
      }
    
      if(!authenticated){
        return <Navigate to="/adm"/>
      }
      return children;
    }
    
      return (
        <Router>
          <AuthProvider>
            <Routes>
              <Route path='/' element={<Pacotes />} />
              <Route path='/voos' element={<Voos />} />
              <Route path='/hospedagens' element={<Hospedagens />} />
              <Route path='/ofertas-voo' element={<OfertasVoo />} />
              <Route path='/ofertas-pac' element={<OfertasPac />} />
              <Route path='/ofertas-hos' element={<OfertasHos />} />
              <Route path='/contato' element={<Contato />} />
              <Route path='/login' element={<Login />} />
              <Route path='/cadastro' element={<Cadastro />} />
            </Routes>
          </AuthProvider>
    
          <ADMAuthProvider >
            <Routes>
              <Route path='/adm' element={<LoginADM />} />
              <Route path='/adm/cliente' element={<PrivateADM><ClienteADM /></PrivateADM>} />
              <Route path='/adm/aeroporto' element={<PrivateADM><AeroportoADM /></PrivateADM>} />
              <Route path='/adm/companhia' element={<PrivateADM><CompanhiaADM /></PrivateADM>} />
              <Route path='/adm/pacote' element={<PrivateADM><PacoteADM /></PrivateADM>} />
              <Route path='/adm/reserva' element={<PrivateADM><ReservaADM /></PrivateADM>} />
              <Route path='/adm/hospedagem' element={<PrivateADM><HospedagemADM /></PrivateADM>} />
              <Route path='/adm/voo' element={<PrivateADM><VooADM /></PrivateADM>} />
            </Routes>
          </ADMAuthProvider>
        </Router >
      )
    }
    export default AppRoutes;