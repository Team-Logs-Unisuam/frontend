import React from "react";
import Dados from "./Dados";

const Dashboard = ({ titulo, subtitulo, qnt }) => {
  return (
    <>
      {titulo && subtitulo && qnt && (
        <>
          <h1 className="uppercase font-bold indent-2 text-white bg-blue-950 mb-4 py-3">
            {titulo}
          </h1>
          <div className="grid grid-cols-3 gap-4 mx-3">
            {subtitulo.map((subtitulo, index) => (
              <Dados
                key={index}
                subtitulo={subtitulo}
                quantidade={qnt[index]}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Dashboard;
