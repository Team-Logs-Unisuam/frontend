import { useEffect, useState } from "react";

const BuscaDados = () => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    const url = `http://127.0.0.1:8000/api/dadosDashboard`;

    fetch(url)
      .then((resposta) => resposta.json())
      .then((dadosRecebidos) => {
        setDados(dadosRecebidos);
      })
      .catch(console.error);
  }, []);

  return { dados };
};

export default BuscaDados;
