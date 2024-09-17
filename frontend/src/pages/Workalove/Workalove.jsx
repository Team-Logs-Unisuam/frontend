import Dashboard from "../../components/Dashboard";
import BuscaDados from "../../controllers/buscaDados";


const Workalove = ()=>{
  const { dados: dadosDashboard } = BuscaDados();

  return (
    <>
      <Dashboard dados={dadosDashboard} />
    </>
  );
};

export default Workalove
