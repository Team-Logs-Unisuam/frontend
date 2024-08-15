import React from 'react';



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
                    {dados.map((log, index) => (
                        <tr key={index} className="even:bg-gray-100 hover:bg-gray-200">
                            <td className="py-2 px-4 font-semibold">{log.action}</td>
                            <td className="py-2 px-4 font-semibold">{log.createdAt}</td>
                            <td className="py-2 px-4 truncate max-w-lg font-semibold">{log.response}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TabelaLogs;
