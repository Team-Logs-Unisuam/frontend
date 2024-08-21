import { useState, useEffect } from 'react';
import logs from "../../DadosJson/Logs/Logs.json"
import LogsModel from '../../Models/Logs/LogsModel';

function BuscaDadosLogs() {
    const [Dados, setDados] = useState({ LogsModel});

    useEffect(() => {
        setDados(logs);
    }, []);
    return Dados;
}

export default BuscaDadosLogs;
