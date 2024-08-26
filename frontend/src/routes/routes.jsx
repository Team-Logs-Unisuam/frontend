import { Route, Routes } from "react-router-dom";
import Principal from "../pages/Principal/Principal";
import Moodle from "../pages/Moodle/Moodle";
import ChatGpt from "../pages/ChatGpt/ChatGpt";
import Workalove from "../pages/Workalove/Workalove";
import ClinicaNuvem from "../pages/Clinica_Nuvem/ClinicaNuvem";
import Hubspot from "../pages/Hubspot/Hubspot";
import Status from "../pages/Status/StatusProjetos";


const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Principal/>}  />
      <Route
        path="/status-projetos"
        element={<Status />}
      ></Route>
      <Route
        path="/moodle"
        element={<Moodle />}
      ></Route>
      <Route
        path="/chat-gpt"
        element={<ChatGpt />}
      ></Route>
      <Route
        path="/clinica-nuvem"
        element={<ClinicaNuvem />}
      ></Route>
      <Route
        path="/workalove"
        element={<Workalove />}
      ></Route>
      <Route
        path="/hubspot"
        element={<Hubspot />}
      ></Route>
    </Routes>
  );
};

export default Rotas;
