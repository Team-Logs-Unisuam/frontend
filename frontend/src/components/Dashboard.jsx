import React from "react";
import Dados from "./Dados";

const Dashboard = ({dados}) => {
  return (
    <>
   
      { dados.titulo && dados.subtitulo && dados.quantidade && (
        <>
          <h1 className="uppercase font-bold indent-2 text-white bg-blue-950 mb-4 py-3">
            {dados.titulo}
          </h1>
          <div className="grid grid-cols-3 gap-4 mx-3">
            {dados.subtitulo.map((subtitulo, index) => (
              <Dados
                key={index}
                subtitulo={subtitulo}
                quantidade={dados.quantidade[index]}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Dashboard;
