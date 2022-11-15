import React, {useContext} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/auth';
import { ADMAuthProvider, ADMAuthContext } from './context/ADMauth';
import Pacotes from "./views/pacotes";
import Home from "./pages/home";
import Ajuda from "./pages/ajuda";
import Checkout from "./pages/checkout";
import Colaboradores from "./pages/colaboradores";
import Inst2 from "./pages/inst2";
import Instituicoes from "./pages/instituicoes";
import Cadscol from "./pages/cadastros/cadscol";
import Cadsinst from "./pages/cadastros/cadsinst";
import Colacomp from "./pages/colacomp/colacomp";
import Colinst from "./pages/colacomp/colInst";
import ColRel from "./pages/colacomp/colRel";
import Doacao from "./pages/colacomp/doaçao";
import InstCol from "./pages/colacomp/instcol";
import Dados from "./pages/instcom/dados";
import InstAcomp from "./pages/instcom/instacomp";
import Projetos from "./pages/instcom/projetos";
import LogCol from "./pages/logins/logcol";
import LoginInst from "./pages/logins/logininst";

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
          <Route path='/home' element={<Home/>} />
          <Route path='/ajuda' element={<Ajuda />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/colaboradores' element={<Colaboradores />} />
          <Route path='/inst2' element={<Inst2 />} />
          <Route path='/instituicoes' element={<Instituicoes />} />
          <Route path='/cadscol' element={<Cadscol />} />
          <Route path='/cadsinst' element={<Cadsinst />} />
          <Route path='/colacomp' element={<Colacomp />} />
          <Route path='/colinst' element={<Colinst />} />
          <Route path='/colRel' element={<ColRel />} />
          <Route path='/doaçao' element={<Doacao />} />
          <Route path='/instcol' element={<InstCol />} />
          <Route path='/dados' element={<Dados/>} />
          <Route path='/instacomp' element={<InstAcomp />} />
          <Route path='/projetos' element={<Projetos />} />
          <Route path='/logcol' element={<LogCol />} />
          <Route path='/logininst' element={<LoginInst />} />
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