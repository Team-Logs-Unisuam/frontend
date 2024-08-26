import { useState, useEffect } from "react";

const useFetchApi = (tipoDados) => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    const url = `http://localhost:3000/${tipoDados}`;

    fetch(url)
      .then((resposta) => resposta.json())
      .then((dadosRecebidos) => setDados(dadosRecebidos))
      .catch(console.error);
  }, [tipoDados]);

  return { dados };
};

export default useFetchApi;
