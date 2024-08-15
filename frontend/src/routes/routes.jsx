import { Route, Routes } from "react-router-dom";
import Principal from "../pages/Principal";

const Rotas = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Principal
            dadosDashboard={{
              titulo: "Integrações Workalove",
              subtitulo: [
                "ALUNOS PARA INSERIR",
                "ALUNOS PARA ATUALIZAR",
                "CURSOS PARA INSERIR",
                "CURSOS PARA ATUALIZAR",
                "DISCIPLINAS PARA INSERIR",
                "DISCIPLINAS PARA ATUALIZAR",
                "ALUNOS PARA CANCELAR",
                "ALUNOS EGRESSOS PARA INSERIR",
              ],
              quantidade: [7, 51, 10, 19742, 47609, 35655, 15, 0],
            }}
          />
        }
      />
    </Routes>
  );
};

export default Rotas;
