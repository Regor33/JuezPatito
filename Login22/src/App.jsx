// Agregamos telwing
// aca definiremos a que pagina acedera el usiario depediendo que boton aprete


// ahora haremos las paginas

import { Route, Routes } from "react-router-dom"
import HomePage from "./paginas/HomePage"
import LoginPage from "./paginas/LoginPage"
import RegisterPage from "./paginas/RegisterPage"
import ResidentePage from "./paginas/ResidentePage"
function App() {
  return (
    //<h1>llkgndfkgdnflgndfgndflng</h1>

    // entoces ahora con las barras renderizamos las paginas
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/residente" element={<ResidentePage/>}/> 
    </Routes>
  )   // 1) hay q crear una pagina para residente
}

export default App
