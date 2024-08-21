import Dashboard from "../../components/Dashboard";
import TabelaLogs from "../../components/Logs";

const Status = ({dadosDashboard})=>{
    return (
        <>
          <Dashboard
            qnt={dadosDashboard.quantidade}
            subtitulo={dadosDashboard.subtitulo}
            titulo={dadosDashboard.titulo}
          ></Dashboard>
          <TabelaLogs
            dados={[
    
              
            ]}
          />
        </>
      );
    };

export default Status
