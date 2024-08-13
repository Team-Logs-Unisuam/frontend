import { Route, Routes } from "react-router-dom"
import Principal from "../pages/Principal"
import Secundaria from "../pages/Secundaria"

const Rotas = ()=>{
    return(
        <Routes>
            <Route path="/" element={<Principal/>}/>   
            <Route path="/secundaria" element={<Secundaria/>}/>   
            
        </Routes>
    )
}

export default Rotas
