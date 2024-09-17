import Dashboard from "../../components/Dashboard";
import BuscaDados from "../../controllers/buscaDados";

const ChatGpt = ()=>{
  const { dados: dadosDashboard } = BuscaDados();

  return (
    <>
      <Dashboard dados={dadosDashboard} />
    </>
  );
};
export default ChatGpt
