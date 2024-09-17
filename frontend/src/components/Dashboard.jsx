import React from "react";
import Dados from "./Dados";
import formatarValor from "../helpers/FormatarJson/Formatar";

const Dashboard = ({dados}) => {
  return (
    <>
      {dados.Dashboard && dados.Dashboard.titulo && (
        <>
          <h1 className="uppercase font-bold indent-2 text-white bg-blue-950 mb-4 py-3">
            {dados.Dashboard.titulo}
          </h1>
          <div className="grid grid-cols-3 gap-4 mx-3">
            {dados.Dashboard.subtitulo.map((subtitulo, index) => (
              <Dados
                key={index}
                subtitulo={subtitulo}
                quantidade={dados.Dashboard.quantidade[index]}
              />
            ))}
          </div>
        </>
      )}

      {dados.Logs && dados.Logs.length > 0 && (
        <div className="py-2 bg-gray-100 rounded shadow-md">
        <div className='bg-[#202937] pt-2 my-2'>
            <h1 className="uppercase rounded-t-xl font-bold indent-2 text-white bg-blue-950 py-3 pl-2">Logs</h1>
        </div>
        <table className="ml-2 min-w-[98%] bg-white rounded-t-xl overflow-hidden">
            <thead>
                <tr className="text-gray-400">
                    <th className="py-2 px-4 text-left">Action</th>
                    <th className="py-2 px-4 text-left">Created At</th>
                    <th className="py-2 px-4 text-left">Response</th>
                </tr>
            </thead>
            <tbody>
                {  dados.Logs ? ( 
                    dados.Logs.map((log, index) => (
                        <tr key={index} className="even:bg-gray-100 hover:bg-gray-200">
                            <td className="py-2 px-4 font-semibold text-wrap">{formatarValor(log.action)}</td>
                            <td className="py-2 px-4 font-semibold text-wrap">{formatarValor(log.createdAt)}</td>
                            <td className="truncate max-w-full font-semibold text-wrap line-clamp-1 overflow-hidden">{formatarValor(log.response)}</td>
                        </tr>
                    ))
                ) : (
                  console.log(dados.Logs),
                    <tr>
                        <td colSpan="3" className="py-2 px-4 text-center text-gray-500">Nenhum log disponível</td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
      )}
    </>
  );
};

export default Dashboard;
