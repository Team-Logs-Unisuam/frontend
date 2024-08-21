import Dashboard from "../../components/Dashboard";
import TabelaLogs from "../../components/Logs";
import BuscaDadosLogs from "../../controllers/BuscaDadosLogs/BuscaLogs";

const Moodle = ({dadosDashboard})=>{
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

export default Moodle
