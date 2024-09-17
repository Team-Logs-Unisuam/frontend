import Dashboard from "../../components/Dashboard";
import BuscaDados from "../../controllers/buscaDados";

const Moodle = ()=>{
  const { dados: dadosDashboard } = BuscaDados();

  return (
    <>
      <Dashboard dados={dadosDashboard} />
    </>
  );
};

export default Moodle
