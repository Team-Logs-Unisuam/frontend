import Dashboard from "../components/Dashboard";


const Principal = ()=>{
    const dados = {
        titulo: "Integrações Workalove",
        subtitulo: [
          "ALUNOS PARA INSERIR",
          "ALUNOS PARA ATUALIZAR",
          "CURSOS PARA INSERIR",
          "CURSOS PARA ATUALIZAR",
          "DISCIPLINAS PARA INSERIR",
          "DISCIPLINAS PARA ATUALIZAR",
          "ALUNOS PARA CANCELAR",
          "ALUNOS EGRESSOS PARA INSERIR"
        ],
        quantidade: [7, 51, 10, 19742, 47609, 35655, 15, 0]
      };
      
    return(
        <Dashboard qnt={dados.quantidade} subtitulo={dados.subtitulo} titulo={dados.titulo}></Dashboard>
    )
}
   
export default Principal;
  