import { Route, Routes } from "react-router-dom";
import Principal from "../pages/Principal/Principal";
import Moodle from "../pages/Moodle/Moodle";
import ChatGpt from "../pages/ChatGpt/ChatGpt";
import Workalove from "../pages/Workalove/Workalove";
import ClinicaNuvem from "../pages/Clinica_Nuvem/ClinicaNuvem";
import Hubspot from "../pages/Hubspot/Hubspot";
import Status from "../pages/Status/StatusProjetos";
import BuscaDados from "../helpers/BuscaDadosDashboard/BuscaDashboard";

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Principal dadosDashboard={BuscaDados()} />} />
      <Route
        path="/status-projetos"
        element={<Status dadosDashboard={BuscaDados()} />}
      ></Route>
      <Route
        path="/moodle"
        element={<Moodle dadosDashboard={BuscaDados()} />}
      ></Route>
      <Route
        path="/chat-gpt"
        element={<ChatGpt dadosDashboard={BuscaDados()} />}
      ></Route>
      <Route
        path="/clinica-nuvem"
        element={<ClinicaNuvem dadosDashboard={BuscaDados()} />}
      ></Route>
      <Route
        path="/workalove"
        element={<Workalove dadosDashboard={BuscaDados()} />}
      ></Route>
      <Route
        path="/hubspot"
        element={<Hubspot dadosDashboard={BuscaDados()} />}
      ></Route>
    </Routes>
  );
};

export default Rotas;
