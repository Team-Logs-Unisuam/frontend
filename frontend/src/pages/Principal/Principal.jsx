import Dashboard from "../../components/Dashboard";
import TabelaLogs from "../../components/Logs";
import BuscaDadosLogs from "../../controllers/BuscaDadosLogs/BuscaLogs";

const Principal = ({dadosDashboard}) => {
  
  return (
    <>
      <Dashboard
        qnt={dadosDashboard.quantidade}
        subtitulo={dadosDashboard.subtitulo}
        titulo={dadosDashboard.titulo}
      ></Dashboard>
      <TabelaLogs
        dados={BuscaDadosLogs()}
      />
    </>
  );
};

export default Principal;
