import { useState, useEffect } from 'react';
import dashboard from "../../DadosJson/Dashboard/Dashboard.json";
import DashboardModel from '../../Models/Dashboard/DashboardModel';

function BuscaDadosDashboard() {
    const [Dados, setDados] = useState({ DashboardModel});

    useEffect(() => {
        setDados(dashboard);
    }, []);

    return Dados;
}

export default BuscaDadosDashboard;
