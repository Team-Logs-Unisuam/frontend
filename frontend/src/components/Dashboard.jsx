import React from "react";
import Dados from "./Dados";

const Dashboard = () => {
  const dados = {
    alunosParaInserir: 7,
    alunosParaAtualizar: 51,
    cursosParaInserir: 10,
    cursosParaAtualizar: 19742,
    disciplinasParaInserir: 47609,
    disciplinasParaAtualizar: 35655,
    alunosParaCancelar: 15,
    alunosEgressosParaInserir: 0,
  };

  return (
    <>
      <h1 className="uppercase font-bold indent-2 text-white bg-blue-950 mb-4 py-3">
        Integrações Workalove
      </h1>
      <div className="grid grid-cols-3 gap-4 mx-3">

        <Dados tipo="ALUNOS PARA INSERIR" quantidade={dados.alunosParaInserir}/>

        <Dados tipo={"ALUNOS PARA ATUALIZAR"} quantidade={dados.alunosParaAtualizar}/>

        <Dados tipo={"CURSOS PARA INSERIR"} quantidade={dados.cursosParaInserir}/>

        <Dados tipo={"CURSOS PARA ATUALIZAR"} quantidade={dados.disciplinasParaAtualizar}/>

        <Dados tipo={"DISCIPLINAS PARA INSERIR"} quantidade={dados.disciplinasParaInserir}/>

        <Dados tipo={"DISCIPLINAS PARA ATUALIZAR"} quantidade={dados.disciplinasParaAtualizar}/>

        <Dados tipo={"ALUNOS PARA CANCELAR"} quantidade={dados.alunosParaCancelar}/>

        <Dados tipo={"ALUNOS EGRESSOS PARA INSERIR"} quantidade={dados.alunosEgressosParaInserir}/>
      </div>
    </>
  );
};

export default Dashboard;
