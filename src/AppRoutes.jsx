import React, {useContext} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/auth';
import { ADMAuthProvider, ADMAuthContext } from './context/ADMauth';
import Home from "./pages/home";
import Ajuda from "./pages/ajuda";
import Checkout from "./pages/checkout";
import Colaboradores from "./pages/colaboradores";
import Inst2 from "./pages/inst2";
import Instituicoes from "./pages/instituicoes";
import Cadscol from "./pages/cadscol";
import Cadsinst from "./pages/cadsinst";
import Colacomp from "./pages/colacomp";
import Colinst from "./pages/colInst";
import ColRel from "./pages/colRel";
import Doacao from "./pages/doaçao";
import InstCol from "./pages/instcol";
import Dados from "./pages/dados";
import InstAcomp from "./pages/instacomp";
import Projetos from "./pages/projetos";
import LogCol from "./pages/logcol";
import LoginInst from "./pages/logininst";

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
          <Route path='/' element={<Home/>} />
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
          <Route path='/pages' element={<LoginInst />} />
          <Route path='/pages' element={<PrivateADM><LogCol /></PrivateADM>} />
        </Routes>
      </ADMAuthProvider>
    </Router >
  )
}
export default AppRoutes;