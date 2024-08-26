import Dashboard from "../../components/Dashboard";
import TabelaLogs from "../../components/Logs";
import useFetchApi from "../../hooks/FetchApiFake";

const Hubspot = ()=>{
  const { dados: logs } = useFetchApi("Logs");
  const { dados: dadosDashboard } = useFetchApi("Dashboard");

  return (
    <>
      {dadosDashboard.length > 0 && <Dashboard dados={dadosDashboard[0]} />} 
      {logs.length > 0 && <TabelaLogs dados={logs} />}
    </>
  );
    };
export default Hubspot
