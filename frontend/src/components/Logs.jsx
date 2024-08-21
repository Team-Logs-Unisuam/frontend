import React from 'react';
import formatarValor from '../helpers/FormatarJson/Formatar';

const TabelaLogs = ({dados}) => {

    return (
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
                    {Array.isArray(dados) && dados.map((log, index) => (
                        <tr key={index} className="even:bg-gray-100 hover:bg-gray-200">
                            <td className="py-2 px-4 font-semibold text-wrap">{formatarValor(log.action)}</td>
                            <td className="py-2 px-4 font-semibold text-wrap">{formatarValor(log.createdAt)}</td>
                            <td className="truncate max-w-full font-semibold text-wrap line-clamp-1 overflow-hidden">{formatarValor(log.response)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TabelaLogs;
